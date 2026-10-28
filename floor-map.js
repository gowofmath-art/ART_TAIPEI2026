(function () {
  "use strict";

  var guide = window.exhibitionGuide;
  var data = window.floorMapData;
  var viewport = document.getElementById("map-viewport");
  var scene = document.getElementById("map-scene");
  var image = document.getElementById("map-image");
  var markers = document.getElementById("map-markers");
  var status = document.getElementById("map-status");
  var zoomIn = document.getElementById("map-zoom-in");
  var zoomOut = document.getElementById("map-zoom-out");
  var reset = document.getElementById("map-reset");
  var level = document.getElementById("map-zoom-level");
  var links = document.getElementById("map-gallery-links");
  var ready = false;
  var width = 0;
  var height = 0;
  var fit = 1;
  var zoom = 1;
  var x = 0;
  var y = 0;
  var maxZoom = 10;
  var pointers = new Map();
  var gesture = null;
  var moved = false;
  var suppressClickUntil = 0;
  var groupClasses = { "must-visit": "map-must-visit", interested: "map-interested" };

  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

  function render() {
    var scale = fit * zoom;
    var w = width * scale;
    var h = height * scale;
    // 小於視窗時置中；放大後可拖到每一個邊緣，但不會把全圖拖出視窗。
    x = w <= viewport.clientWidth ? (viewport.clientWidth - w) / 2 : clamp(x, viewport.clientWidth - w, 0);
    y = h <= viewport.clientHeight ? (viewport.clientHeight - h) / 2 : clamp(y, viewport.clientHeight - h, 0);
    scene.style.transform = "translate(" + x + "px," + y + "px) scale(" + scale + ")";
    // 圖片與標記共用同一座標系；只反向縮放圓點尺寸，中心位置不變。
    scene.style.setProperty("--marker-scale", String(1 / scale));
    scene.style.setProperty("--map-zoom", String(zoom));
    level.value = Math.round(zoom * 100) + "%";
    zoomOut.disabled = zoom <= 1;
    zoomIn.disabled = zoom >= maxZoom;
    viewport.classList.toggle("is-zoomed", zoom > 1);
  }

  function resize() {
    if (!ready) return;
    var oldScale = fit * zoom;
    var oldW = viewport._mapWidth || viewport.clientWidth;
    var oldH = viewport._mapHeight || viewport.clientHeight;
    var cx = (oldW / 2 - x) / oldScale;
    var cy = (oldH / 2 - y) / oldScale;
    fit = Math.min(viewport.clientWidth / width, viewport.clientHeight / height);
    x = viewport.clientWidth / 2 - cx * fit * zoom;
    y = viewport.clientHeight / 2 - cy * fit * zoom;
    viewport._mapWidth = viewport.clientWidth;
    viewport._mapHeight = viewport.clientHeight;
    pointers.clear();
    gesture = null;
    viewport.classList.remove("is-dragging");
    render();
  }

  function zoomAt(nextZoom, px, py) {
    if (!ready) return;
    nextZoom = clamp(nextZoom, 1, maxZoom);
    var ratio = nextZoom / zoom;
    x = px - (px - x) * ratio;
    y = py - (py - y) * ratio;
    zoom = nextZoom;
    render();
  }

  function zoomCenter(factor) {
    zoomAt(zoom * factor, viewport.clientWidth / 2, viewport.clientHeight / 2);
  }

  function restore() {
    if (!ready) return;
    zoom = 1;
    x = 0;
    y = 0;
    render();
  }

  function point(event) {
    var rect = viewport.getBoundingClientRect();
    return { x: event.clientX - rect.left - viewport.clientLeft, y: event.clientY - rect.top - viewport.clientTop };
  }

  function startGesture() {
    var pts = Array.from(pointers.values());
    if (!pts.length) { gesture = null; return; }
    gesture = { x: x, y: y, zoom: zoom, px: pts[0].x, py: pts[0].y };
    if (pts.length > 1) {
      gesture.px = (pts[0].x + pts[1].x) / 2;
      gesture.py = (pts[0].y + pts[1].y) / 2;
      gesture.distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      moved = true;
    }
  }

  viewport.addEventListener("pointerdown", function (event) {
    if (!ready || (event.pointerType === "mouse" && event.button !== 0)) return;
    if (!pointers.size) { moved = false; suppressClickUntil = 0; }
    pointers.set(event.pointerId, point(event));
    // 保留標記本身為點擊目標；拖曳仍由外層處理。
    event.target.setPointerCapture(event.pointerId);
    startGesture();
  });

  viewport.addEventListener("pointermove", function (event) {
    if (!pointers.has(event.pointerId) || !gesture) return;
    pointers.set(event.pointerId, point(event));
    var pts = Array.from(pointers.values());
    var px = pts[0].x;
    var py = pts[0].y;
    if (pts.length > 1 && gesture.distance) {
      px = (pts[0].x + pts[1].x) / 2;
      py = (pts[0].y + pts[1].y) / 2;
      var distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      zoom = clamp(gesture.zoom * distance / gesture.distance, 1, maxZoom);
    } else if (Math.hypot(px - gesture.px, py - gesture.py) > 4) {
      moved = true;
    }
    if (!moved) return;
    x = px - (gesture.px - gesture.x) * zoom / gesture.zoom;
    y = py - (gesture.py - gesture.y) * zoom / gesture.zoom;
    viewport.classList.add("is-dragging");
    render();
  });

  function endPointer(event) {
    if (!pointers.delete(event.pointerId)) return;
    if (moved) suppressClickUntil = performance.now() + 400;
    startGesture();
    if (!pointers.size) viewport.classList.remove("is-dragging");
  }
  viewport.addEventListener("pointerup", endPointer);
  viewport.addEventListener("pointercancel", endPointer);
  viewport.addEventListener("lostpointercapture", endPointer);
  viewport.addEventListener("click", function (event) {
    if (event.detail !== 0 && performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  viewport.addEventListener("wheel", function (event) {
    if (!ready) return;
    event.preventDefault();
    var p = point(event);
    var delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientHeight : 1);
    zoomAt(zoom * Math.exp(-clamp(delta, -200, 200) * 0.002), p.x, p.y);
  }, { passive: false });

  viewport.addEventListener("keydown", function (event) {
    // 不攔截標記上的 Enter 或瀏覽器自身的縮放快捷鍵。
    if (event.target !== viewport || event.ctrlKey || event.metaKey || event.altKey) return;
    if (!ready) return;
    if (event.key === "+" || event.key === "=") zoomCenter(1.4);
    else if (event.key === "-") zoomCenter(1 / 1.4);
    else if (event.key === "Home" || event.key === "0") restore();
    else if (event.key === "ArrowLeft") { x += 65; render(); }
    else if (event.key === "ArrowRight") { x -= 65; render(); }
    else if (event.key === "ArrowUp") { y += 65; render(); }
    else if (event.key === "ArrowDown") { y -= 65; render(); }
    else return;
    event.preventDefault();
  });

  zoomIn.addEventListener("click", function () { zoomCenter(1.4); });
  zoomOut.addEventListener("click", function () { zoomCenter(1 / 1.4); });
  reset.addEventListener("click", restore);

  var missing = [];
  var count = 0;
  guide.galleries.forEach(function (gallery) {
    if (!gallery.booth) return;
    var pos = data.booths[gallery.booth];
    var colorClass = groupClasses[gallery.group];
    if (!pos || !Number.isFinite(pos.x) || !Number.isFinite(pos.y) || pos.x < 0 || pos.x > 100 || pos.y < 0 || pos.y > 100 || !colorClass) {
      missing.push(gallery.name + "（" + gallery.booth + "）");
      return;
    }
    count++;
    var marker = document.createElement("a");
    marker.className = "map-marker " + colorClass;
    marker.href = "#gallery-" + gallery.id;
    marker.style.left = pos.x + "%";
    marker.style.top = pos.y + "%";
    marker.setAttribute("aria-label", gallery.name + "，展位 " + gallery.booth + "，" + guide.groups.find(function (group) { return group.id === gallery.group; }).label + "，前往介紹");
    var tooltip = document.createElement("span");
    tooltip.className = "map-tooltip";
    tooltip.textContent = gallery.name + " · " + gallery.booth;
    tooltip.setAttribute("aria-hidden", "true");
    marker.appendChild(tooltip);
    marker.addEventListener("focus", function () {
      if (!ready) return;
      var mx = x + width * pos.x / 100 * fit * zoom;
      var my = y + height * pos.y / 100 * fit * zoom;
      if (mx < 24 || mx > viewport.clientWidth - 24 || my < 24 || my > viewport.clientHeight - 24) {
        x = viewport.clientWidth / 2 - width * pos.x / 100 * fit * zoom;
        y = viewport.clientHeight / 2 - height * pos.y / 100 * fit * zoom;
        render();
      }
    });
    markers.appendChild(marker);
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.href = marker.getAttribute("href");
    var dot = document.createElement("span");
    dot.className = "map-dot " + colorClass;
    dot.setAttribute("aria-hidden", "true");
    link.append(dot, document.createTextNode(gallery.name + " · " + gallery.booth));
    item.appendChild(link);
    links.appendChild(item);
  });
  document.getElementById("map-coverage").textContent = "已標記 " + count + " 間關注畫廊。" + (missing.length ? "尚待確認位置／分類：" + missing.join("、") + "；未放置標記。" : "");

  function loaded() {
    if (ready || !image.naturalWidth) return;
    width = image.naturalWidth;
    height = image.naturalHeight;
    scene.style.width = width + "px";
    scene.style.height = height + "px";
    scene.hidden = false;
    ready = true;
    reset.disabled = false;
    status.hidden = true;
    viewport.setAttribute("aria-busy", "false");
    resize();
    restore();
  }
  image.addEventListener("load", loaded);
  image.addEventListener("error", function () {
    ready = false;
    scene.hidden = true;
    status.hidden = false;
    status.textContent = "地圖圖片無法載入，請使用上方官方 PDF 或下方畫廊索引。";
    viewport.setAttribute("aria-busy", "false");
    zoomIn.disabled = zoomOut.disabled = reset.disabled = true;
  });
  if (image.complete) {
    if (image.naturalWidth) loaded();
    else image.dispatchEvent(new Event("error"));
  }
  if (window.ResizeObserver) new ResizeObserver(resize).observe(viewport);
  else window.addEventListener("resize", resize);
}());
