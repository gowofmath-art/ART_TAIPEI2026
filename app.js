(function () {
  "use strict";

  var guide = window.exhibitionGuide;
  var previewCount = 5;

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function externalLink(link, galleryName) {
    var anchor = element("a", "text-link", link.label + " ");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.setAttribute("aria-label", galleryName + "：" + link.label + "（另開分頁）");
    var arrow = element("span", "link-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    anchor.appendChild(arrow);
    return anchor;
  }

  function galleryImage(gallery, number) {
    var figure = element("figure", "gallery-figure");
    var stage = element("div", "image-stage");
    var placeholder = element("div", "image-placeholder");
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", gallery.name + "：作品圖片待提供");
    var frame = element("div", "placeholder-frame");
    frame.setAttribute("aria-hidden", "true");
    frame.appendChild(element("span", "placeholder-number", number));
    frame.appendChild(element("span", "placeholder-label", "ARTWORK FORTHCOMING"));
    placeholder.appendChild(frame);
    stage.appendChild(placeholder);
    var caption = element("figcaption", "image-caption");
    var captionName = element("span", "", gallery.internationalName || gallery.name);
    var captionDetail = element("span", "", "作品圖像待提供");
    caption.append(captionName, captionDetail);

    if (gallery.image) {
      var img = element("img", "artwork");
      img.alt = gallery.imageAlt || gallery.name + "作品圖像";
      img.hidden = true;
      img.addEventListener("load", function () {
        placeholder.hidden = true;
        img.hidden = false;
        captionDetail.textContent = gallery.imageCaption || "";
      });
      img.addEventListener("error", function () {
        img.hidden = true;
        placeholder.hidden = false;
        captionDetail.textContent = "作品圖像待提供";
      });
      stage.appendChild(img);
      img.src = gallery.image;
    }
    figure.append(stage, caption);
    return figure;
  }

  function artistList(gallery) {
    var block = element("div", "artist-block");
    block.appendChild(element("h4", "detail-label", gallery.artistLabel || "藝術家"));
    if (gallery.artistNote) block.appendChild(element("p", "artist-note", gallery.artistNote));
    var list = element("ul", "artist-list");
    list.id = gallery.id + "-artists";
    gallery.artists.forEach(function (name, index) {
      var item = element("li", "", name);
      item.hidden = index >= previewCount;
      list.appendChild(item);
    });
    block.appendChild(list);

    if (gallery.artists.length > previewCount) {
      var button = element("button", "artist-toggle");
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", list.id);
      var collapsedLabel = "＋ 展開全部 " + gallery.artists.length + " 位";
      button.textContent = collapsedLabel;
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(expanded));
        Array.from(list.children).forEach(function (item, index) {
          item.hidden = !expanded && index >= previewCount;
        });
        button.textContent = expanded ? "− 收合名單" : collapsedLabel;
      });
      block.appendChild(button);
    }
    return block;
  }

  function galleryArticle(gallery, index) {
    var number = String(index + 1).padStart(2, "0");
    var article = element("article", "gallery");
    article.setAttribute("aria-labelledby", gallery.id + "-title");
    article.appendChild(galleryImage(gallery, number));

    var body = element("div", "gallery-body");
    var meta = element("div", "gallery-meta");
    meta.appendChild(element("span", "gallery-index", "No. " + number));
    var booth = element("span", "booth");
    booth.append(element("span", "booth-label", "展位"), element("strong", "", gallery.booth));
    meta.appendChild(booth);
    body.appendChild(meta);
    var title = element("h3", "gallery-title", gallery.name);
    title.id = gallery.id + "-title";
    body.appendChild(title);
    if (gallery.internationalName) body.appendChild(element("p", "international-name", gallery.internationalName));
    if (gallery.location) body.appendChild(element("p", "gallery-location", gallery.location));
    body.appendChild(element("p", "gallery-description", gallery.description));
    if (gallery.artists && gallery.artists.length) body.appendChild(artistList(gallery));
    var reason = element("div", "reason");
    reason.append(element("h4", "detail-label", "為何關注"), element("p", "", gallery.reason));
    body.appendChild(reason);
    var links = element("div", "gallery-links");
    gallery.links.forEach(function (link) { links.appendChild(externalLink(link, gallery.name)); });
    body.appendChild(links);
    article.appendChild(body);
    return article;
  }

  document.getElementById("event-date").textContent = guide.event.date;
  document.getElementById("event-venue").textContent = guide.event.venue;
  document.getElementById("event-link").href = guide.event.url;
  document.getElementById("event-link").setAttribute("aria-label", "ART TAIPEI 官方展覽資訊（另開分頁）");

  var container = document.getElementById("galleries");
  guide.groups.forEach(function (group) {
    var entries = guide.galleries.filter(function (gallery) { return gallery.group === group.id; });
    var section = element("section", "gallery-section");
    section.id = group.id;
    section.setAttribute("aria-labelledby", group.id + "-title");
    var heading = element("h2", "section-heading");
    heading.id = group.id + "-title";
    var toggle = element("button", "section-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", String(group.id === "must-visit"));
    toggle.setAttribute("aria-controls", group.id + "-content");
    var title = element("span", "section-title");
    title.append(element("span", "section-english", group.title), element("span", "section-chinese", group.label));
    var status = element("span", "section-status");
    var indicator = element("span", "section-indicator");
    indicator.setAttribute("aria-hidden", "true");
    status.append(element("span", "section-count", String(entries.length).padStart(2, "0") + " GALLERIES"), indicator);
    toggle.append(title, status);
    heading.appendChild(toggle);
    section.appendChild(heading);
    var content = element("div", "section-content");
    content.id = group.id + "-content";
    content.hidden = group.id !== "must-visit";
    entries.forEach(function (gallery) {
      content.appendChild(galleryArticle(gallery, guide.galleries.indexOf(gallery)));
    });
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(expanded));
      content.hidden = !expanded;
    });
    section.appendChild(content);
    container.appendChild(section);
  });
}());
