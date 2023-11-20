var t, i;
(t = this),
  (i = function (t, i) {
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const s = (t, i) =>
      "method" === i.kind && i.descriptor && !("value" in i.descriptor)
        ? {
            ...i,
            finisher(s) {
              s.createProperty(i.key, t);
            },
          }
        : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: i.key,
            initializer() {
              "function" == typeof i.initializer &&
                (this[i.key] = i.initializer.call(this));
            },
            finisher(s) {
              s.createProperty(i.key, t);
            },
          };
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    /*!
     * lightgallery | 2.7.0 | October 9th 2022
     * http://www.lightgalleryjs.com/
     * Copyright (c) 2020 Sachin Neravath;
     * @license GPLv3
     */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var n = function () {
        return (n =
          Object.assign ||
          function (t) {
            for (var i, s = 1, n = arguments.length; s < n; s++)
              for (var e in (i = arguments[s]))
                Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t;
          }).apply(this, arguments);
      },
      e = "lgAfterAppendSlide",
      o = "lgInit",
      h = "lgHasVideo",
      r = "lgContainerResize",
      l = "lgUpdateSlides",
      a = "lgAfterAppendSubHtml",
      u = "lgBeforeOpen",
      c = "lgAfterOpen",
      d = "lgSlideItemLoad",
      g = "lgBeforeSlide",
      f = "lgAfterSlide",
      v = "lgPosterClick",
      m = "lgDragStart",
      p = "lgDragMove",
      b = "lgDragEnd",
      w = "lgBeforeNextSlide",
      y = "lgBeforePrevSlide",
      x = "lgBeforeClose",
      T = "lgAfterClose",
      k = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      },
      z = (function () {
        function t(t) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(t)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (t.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (t) {
                var i = (16 * Math.random()) | 0;
                return ("x" == t ? i : (3 & i) | 8).toString(16);
              },
            );
          }),
          (t.prototype._getSelector = function (t, i) {
            return (
              void 0 === i && (i = document),
              "string" != typeof t
                ? t
                : ((i = i || document),
                  "#" === t.substring(0, 1)
                    ? i.querySelector(t)
                    : i.querySelectorAll(t))
            );
          }),
          (t.prototype._each = function (t) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, t)
                  : t(this.selector, 0),
                this)
              : this;
          }),
          (t.prototype._setCssVendorPrefix = function (t, i, s) {
            var n = i.replace(/-([a-z])/gi, function (t, i) {
              return i.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(n)
              ? ((t.style[n.charAt(0).toLowerCase() + n.slice(1)] = s),
                (t.style["webkit" + n] = s),
                (t.style["moz" + n] = s),
                (t.style["ms" + n] = s),
                (t.style["o" + n] = s))
              : (t.style[n] = s);
          }),
          (t.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (t.prototype.isEventMatched = function (t, i) {
            var s = i.split(".");
            return t
              .split(".")
              .filter(function (t) {
                return t;
              })
              .every(function (t) {
                return -1 !== s.indexOf(t);
              });
          }),
          (t.prototype.attr = function (t, i) {
            return void 0 === i
              ? this.firstElement
                ? this.firstElement.getAttribute(t)
                : ""
              : (this._each(function (s) {
                  s.setAttribute(t, i);
                }),
                this);
          }),
          (t.prototype.find = function (t) {
            return S(this._getSelector(t, this.selector));
          }),
          (t.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? S(this.selector[0])
              : S(this.selector);
          }),
          (t.prototype.eq = function (t) {
            return S(this.selector[t]);
          }),
          (t.prototype.parent = function () {
            return S(this.selector.parentElement);
          }),
          (t.prototype.get = function () {
            return this._getFirstEl();
          }),
          (t.prototype.removeAttr = function (t) {
            var i = t.split(" ");
            return (
              this._each(function (t) {
                i.forEach(function (i) {
                  return t.removeAttribute(i);
                });
              }),
              this
            );
          }),
          (t.prototype.wrap = function (t) {
            if (!this.firstElement) return this;
            var i = document.createElement("div");
            return (
              (i.className = t),
              this.firstElement.parentNode.insertBefore(i, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              i.appendChild(this.firstElement),
              this
            );
          }),
          (t.prototype.addClass = function (t) {
            return (
              void 0 === t && (t = ""),
              this._each(function (i) {
                t.split(" ").forEach(function (t) {
                  t && i.classList.add(t);
                });
              }),
              this
            );
          }),
          (t.prototype.removeClass = function (t) {
            return (
              this._each(function (i) {
                t.split(" ").forEach(function (t) {
                  t && i.classList.remove(t);
                });
              }),
              this
            );
          }),
          (t.prototype.hasClass = function (t) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(t)
            );
          }),
          (t.prototype.hasAttribute = function (t) {
            return !!this.firstElement && this.firstElement.hasAttribute(t);
          }),
          (t.prototype.toggleClass = function (t) {
            return this.firstElement
              ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t),
                this)
              : this;
          }),
          (t.prototype.css = function (t, i) {
            var s = this;
            return (
              this._each(function (n) {
                s._setCssVendorPrefix(n, t, i);
              }),
              this
            );
          }),
          (t.prototype.on = function (i, s) {
            var n = this;
            return this.selector
              ? (i.split(" ").forEach(function (i) {
                  Array.isArray(t.eventListeners[i]) ||
                    (t.eventListeners[i] = []),
                    t.eventListeners[i].push(s),
                    n.selector.addEventListener(i.split(".")[0], s);
                }),
                this)
              : this;
          }),
          (t.prototype.once = function (t, i) {
            var s = this;
            return (
              this.on(t, function () {
                s.off(t), i(t);
              }),
              this
            );
          }),
          (t.prototype.off = function (i) {
            var s = this;
            return this.selector
              ? (Object.keys(t.eventListeners).forEach(function (n) {
                  s.isEventMatched(i, n) &&
                    (t.eventListeners[n].forEach(function (t) {
                      s.selector.removeEventListener(n.split(".")[0], t);
                    }),
                    (t.eventListeners[n] = []));
                }),
                this)
              : this;
          }),
          (t.prototype.trigger = function (t, i) {
            if (!this.firstElement) return this;
            var s = new CustomEvent(t.split(".")[0], { detail: i || null });
            return this.firstElement.dispatchEvent(s), this;
          }),
          (t.prototype.load = function (t) {
            var i = this;
            return (
              fetch(t)
                .then(function (t) {
                  return t.text();
                })
                .then(function (t) {
                  i.selector.innerHTML = t;
                }),
              this
            );
          }),
          (t.prototype.html = function (t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (i) {
                  i.innerHTML = t;
                }),
                this);
          }),
          (t.prototype.append = function (t) {
            return (
              this._each(function (i) {
                "string" == typeof t
                  ? i.insertAdjacentHTML("beforeend", t)
                  : i.appendChild(t);
              }),
              this
            );
          }),
          (t.prototype.prepend = function (t) {
            return (
              this._each(function (i) {
                i.insertAdjacentHTML("afterbegin", t);
              }),
              this
            );
          }),
          (t.prototype.remove = function () {
            return (
              this._each(function (t) {
                t.parentNode.removeChild(t);
              }),
              this
            );
          }),
          (t.prototype.empty = function () {
            return (
              this._each(function (t) {
                t.innerHTML = "";
              }),
              this
            );
          }),
          (t.prototype.scrollTop = function (t) {
            return void 0 !== t
              ? ((document.body.scrollTop = t),
                (document.documentElement.scrollTop = t),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (t.prototype.scrollLeft = function (t) {
            return void 0 !== t
              ? ((document.body.scrollLeft = t),
                (document.documentElement.scrollLeft = t),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (t.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var t = this.firstElement.getBoundingClientRect(),
              i = S("body").style().marginLeft;
            return {
              left: t.left - parseFloat(i) + this.scrollLeft(),
              top: t.top + this.scrollTop(),
            };
          }),
          (t.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (t.prototype.width = function () {
            var t = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(t.paddingLeft) -
              parseFloat(t.paddingRight)
            );
          }),
          (t.prototype.height = function () {
            var t = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(t.paddingTop) -
              parseFloat(t.paddingBottom)
            );
          }),
          (t.eventListeners = {}),
          t
        );
      })();
    function S(t) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (t, i) {
            i = i || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), s;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new z(t)
      );
    }
    var M = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function j(t) {
      return "href" === t
        ? "src"
        : (t = (t =
            (t = t.replace("data-", "")).charAt(0).toLowerCase() +
            t.slice(1)).replace(/-([a-z])/g, function (t) {
            return t[1].toUpperCase();
          }));
    }
    var O = function (t, i, s, n) {
        void 0 === s && (s = 0);
        var e = S(t).attr("data-lg-size") || n;
        if (e) {
          var o = e.split(",");
          if (o[1])
            for (var h = window.innerWidth, r = 0; r < o.length; r++) {
              var l = o[r];
              if (parseInt(l.split("-")[2], 10) > h) {
                e = l;
                break;
              }
              r === o.length - 1 && (e = l);
            }
          var a = e.split("-"),
            u = parseInt(a[0], 10),
            c = parseInt(a[1], 10),
            d = i.width(),
            g = i.height() - s,
            f = Math.min(d, u),
            v = Math.min(g, c),
            m = Math.min(f / u, v / c);
          return { width: u * m, height: c * m };
        }
      },
      A = function (t, i, s, n, e) {
        if (e) {
          var o = S(t).find("img").first();
          if (o.get()) {
            var h = i.get().getBoundingClientRect(),
              r = h.width,
              l = i.height() - (s + n),
              a = o.width(),
              u = o.height(),
              c = o.style(),
              d =
                (r - a) / 2 -
                o.offset().left +
                (parseFloat(c.paddingLeft) || 0) +
                (parseFloat(c.borderLeft) || 0) +
                S(window).scrollLeft() +
                h.left,
              g =
                (l - u) / 2 -
                o.offset().top +
                (parseFloat(c.paddingTop) || 0) +
                (parseFloat(c.borderTop) || 0) +
                S(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (d *= -1) +
              "px, " +
              (g *= -1) +
              "px, 0) scale3d(" +
              a / e.width +
              ", " +
              u / e.height +
              ", 1)"
            );
          }
        }
      },
      C = function (t, i, s, n, e, o) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          t +
          "; max-width:" +
          s +
          "; height: " +
          i +
          "; max-height:" +
          n +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (o ? 'title="' + o + '"' : "") +
          ' src="' +
          e +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      I = function (t, i, s, n, e, o) {
        var h =
            "<img " +
            s +
            " " +
            (n ? 'srcset="' + n + '"' : "") +
            "  " +
            (e ? 'sizes="' + e + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            t +
            '" src="' +
            i +
            '" />',
          r = "";
        return (
          o &&
            (r = ("string" == typeof o ? JSON.parse(o) : o).map(function (t) {
              var i = "";
              return (
                Object.keys(t).forEach(function (s) {
                  i += " " + s + '="' + t[s] + '"';
                }),
                "<source " + i + "></source>"
              );
            })),
          "" + r + h
        );
      },
      F = function (t) {
        for (var i = [], s = [], n = "", e = 0; e < t.length; e++) {
          var o = t[e].split(" ");
          "" === o[0] && o.splice(0, 1), s.push(o[0]), i.push(o[1]);
        }
        for (var h = window.innerWidth, r = 0; r < i.length; r++)
          if (parseInt(i[r], 10) > h) {
            n = s[r];
            break;
          }
        return n;
      },
      P = function (t) {
        return !!t && !!t.complete && 0 !== t.naturalWidth;
      },
      D = function (t, i, s, n, e) {
        return (
          '<div class="lg-video-cont ' +
          (e && e.youtube
            ? "lg-has-youtube"
            : e && e.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          s +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          n +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          n +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (i || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          t +
          '" />\n        </div>'
        );
      },
      H = function (t) {
        var i = t.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
        );
        return [].filter.call(i, function (t) {
          var i = window.getComputedStyle(t);
          return "none" !== i.display && "hidden" !== i.visibility;
        });
      },
      B = function (t, i, s, n) {
        var e = [],
          o = (function () {
            for (var t = 0, i = 0, s = arguments.length; i < s; i++)
              t += arguments[i].length;
            var n = Array(t),
              e = 0;
            for (i = 0; i < s; i++)
              for (var o = arguments[i], h = 0, r = o.length; h < r; h++, e++)
                n[e] = o[h];
            return n;
          })(M, i);
        return (
          [].forEach.call(t, function (t) {
            for (var i = {}, h = 0; h < t.attributes.length; h++) {
              var r = t.attributes[h];
              if (r.specified) {
                var l = j(r.name),
                  a = "";
                o.indexOf(l) > -1 && (a = l), a && (i[a] = r.value);
              }
            }
            var u = S(t),
              c = u.find("img").first().attr("alt"),
              d = u.attr("title"),
              g = n ? u.attr(n) : u.find("img").first().attr("src");
            (i.thumb = g),
              s && !i.subHtml && (i.subHtml = d || c || ""),
              (i.alt = c || d || ""),
              e.push(i);
          }),
          e
        );
      },
      E = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      _ = function (t, i, s) {
        if (!t)
          return i
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (s + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/",
              );
        var n = t.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i,
          ),
          e = t.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i,
          ),
          o = t.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/,
          );
        return n
          ? { youtube: n }
          : e
          ? { vimeo: e }
          : o
          ? { wistia: o }
          : void 0;
      },
      G = 0,
      U = (function () {
        function t(t, i) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !t)
          )
            return this;
          if (
            (G++,
            (this.lgId = G),
            (this.el = t),
            (this.LGel = S(t)),
            this.generateSettings(i),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (t.prototype.generateSettings = function (t) {
            if (
              ((this.settings = n(n({}, k), t)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : E())
            ) {
              var i = n(
                n({}, this.settings.mobileSettings),
                this.settings.mobileSettings,
              );
              this.settings = n(n({}, this.settings), i);
            }
          }),
          (t.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length,
              ));
          }),
          (t.prototype.init = function () {
            var t = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(o, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (t.prototype.openGalleryOnItemClick = function () {
            for (
              var t = this,
                i = function (i) {
                  var n = s.items[i],
                    e = S(n),
                    o = z.generateUUID();
                  e.attr("data-lg-id", o).on(
                    "click.lgcustom-item-" + o,
                    function (s) {
                      s.preventDefault();
                      var e = t.settings.index || i;
                      t.openGallery(e, n);
                    },
                  );
                },
                s = this,
                n = 0;
              n < this.items.length;
              n++
            )
              i(n);
          }),
          (t.prototype.buildModules = function () {
            var t = this;
            this.settings.plugins.forEach(function (i) {
              t.plugins.push(new i(t, S));
            });
          }),
          (t.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use",
                )
              : console.error("Please provide a valid license key");
          }),
          (t.prototype.getSlideItem = function (t) {
            return S(this.getSlideItemId(t));
          }),
          (t.prototype.getSlideItemId = function (t) {
            return "#lg-item-" + this.lgId + "-" + t;
          }),
          (t.prototype.getIdName = function (t) {
            return t + "-" + this.lgId;
          }),
          (t.prototype.getElementById = function (t) {
            return S("#" + this.getIdName(t));
          }),
          (t.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (t.prototype.buildStructure = function () {
            var t = this;
            if (!this.$container || !this.$container.get()) {
              var i = "",
                s = "";
              this.settings.controls &&
                (i =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var n = "";
              this.settings.allowMediaOverlap && (n += "lg-media-overlap ");
              var e = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                o = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                h =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                r =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                a =
                  '\n        <div class="' +
                  h +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  e +
                  " " +
                  o +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  n +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  i +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  r +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              S(this.settings.container).append(a),
                document.body !== this.settings.container &&
                  S(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms",
                );
              var u = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (u += "lg-grab "),
                this.outer.addClass(u),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing,
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms",
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>',
                  ),
                this.counter(),
                S(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    t.refreshOnResize();
                  },
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (t.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var t = this.galleryItems[this.index].t;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var i = this.mediaContainerPosition,
                s = i.top,
                n = i.bottom;
              if (
                ((this.currentImageSize = O(
                  this.items[this.index],
                  this.outer,
                  s + n,
                  t && this.settings.videoMaxSize,
                )),
                t && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var e = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", e);
              }
              this.LGel.trigger(r);
            }
          }),
          (t.prototype.resizeVideoSlide = function (t, i) {
            var s = this.getVideoContStyle(i);
            this.getSlideItem(t).find(".lg-video-cont").attr("style", s);
          }),
          (t.prototype.updateSlides = function (t, i) {
            if (
              (this.index > t.length - 1 && (this.index = t.length - 1),
              1 === t.length && (this.index = 0),
              t.length)
            ) {
              var s = this.galleryItems[i].src;
              (this.galleryItems = t),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var n = 0;
              this.galleryItems.some(function (t, i) {
                return t.src === s && ((n = i), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(n, -1)),
                this.loadContent(n, !0),
                this.getSlideItem(n).addClass("lg-current"),
                (this.index = n),
                this.updateCurrentCounter(n),
                this.LGel.trigger(l);
            } else this.closeGallery();
          }),
          (t.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var t = S(this.settings.selectWithin);
                  this.items = t.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return B(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage,
            );
          }),
          (t.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (t.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                S("body").style().paddingRight,
              );
              var t = document.documentElement.getBoundingClientRect(),
                i = window.innerWidth - t.width;
              S(document.body).css(
                "padding-right",
                i + this.bodyPaddingRight + "px",
              ),
                S(document.body).addClass("lg-overlay-open");
            }
          }),
          (t.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (S(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px",
              ),
              S(document.body).removeClass("lg-overlay-open"));
          }),
          (t.prototype.openGallery = function (t, i) {
            var s = this;
            if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var n = this.getItemsToBeInsertedToDom(t, t);
              this.currentItemsInDom = n;
              var e = "";
              n.forEach(function (t) {
                e = e + '<div id="' + t + '" class="lg-item"></div>';
              }),
                this.$inner.append(e),
                this.addHtml(t);
              var o = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var h = this.mediaContainerPosition,
                r = h.top,
                l = h.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(r, l);
              var a = this.galleryItems[t].t;
              this.zoomFromOrigin &&
                i &&
                ((this.currentImageSize = O(
                  i,
                  this.outer,
                  r + l,
                  a && this.settings.videoMaxSize,
                )),
                (o = A(i, this.outer, r, l, this.currentImageSize))),
                (this.zoomFromOrigin && o) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(t).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, d),
                (this.index = t),
                this.LGel.trigger(u),
                this.getSlideItem(t).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = S(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && o) {
                    var i = s.getSlideItem(t);
                    i.css("transform", o),
                      setTimeout(function () {
                        i
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms",
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        i.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      s.settings.trapFocus &&
                        document.body === s.settings.container &&
                        s.trapFocus();
                    }, s.settings.backdropDuration + 50),
                    (s.zoomFromOrigin && o) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(t, !1, !1, !1),
                    s.LGel.trigger(c);
                }),
                document.body === this.settings.container &&
                  S("html").addClass("lg-on");
            }
          }),
          (t.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var t = this.$toolbar.get().clientHeight || 0,
              i = this.outer.find(".lg-components .lg-sub-html").get(),
              s =
                this.settings.defaultCaptionHeight ||
                (i && i.clientHeight) ||
                0,
              n = this.outer.find(".lg-thumb-outer").get();
            return { top: t, bottom: (n ? n.clientHeight : 0) + s };
          }),
          (t.prototype.setMediaContainerPosition = function (t, i) {
            void 0 === t && (t = 0),
              void 0 === i && (i = 0),
              this.$content.css("top", t + "px").css("bottom", i + "px");
          }),
          (t.prototype.hideBars = function () {
            var t = this;
            setTimeout(function () {
              t.outer.removeClass("lg-hide-items"),
                t.settings.hideBarsDelay > 0 &&
                  (t.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      t.outer.removeClass("lg-hide-items"),
                        clearTimeout(t.hideBarTimeout),
                        (t.hideBarTimeout = setTimeout(function () {
                          t.outer.addClass("lg-hide-items");
                        }, t.settings.hideBarsDelay));
                    },
                  ),
                  t.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (t.prototype.initPictureFill = function (t) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [t.get()] });
              } catch (t) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.",
                );
              }
          }),
          (t.prototype.counter = function () {
            if (this.settings.counter) {
              var t =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(t);
            }
          }),
          (t.prototype.addHtml = function (t) {
            var i, s;
            if (
              (this.galleryItems[t].subHtmlUrl
                ? (s = this.galleryItems[t].subHtmlUrl)
                : (i = this.galleryItems[t].subHtml),
              !s)
            )
              if (i) {
                var n = i.substring(0, 1);
                ("." !== n && "#" !== n) ||
                  (i =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? S(this.items).eq(t).find(i).first().html()
                      : S(i).first().html());
              } else i = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(i);
            else {
              var e = S(this.getSlideItemId(t));
              s
                ? e.load(s)
                : e.append('<div class="lg-sub-html">' + i + "</div>");
            }
            null != i &&
              ("" === i
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(a, { index: t });
          }),
          (t.prototype.preload = function (t) {
            for (
              var i = 1;
              i <= this.settings.preload &&
              !(i >= this.galleryItems.length - t);
              i++
            )
              this.loadContent(t + i, !1);
            for (var s = 1; s <= this.settings.preload && !(t - s < 0); s++)
              this.loadContent(t - s, !1);
          }),
          (t.prototype.getDummyImgStyles = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                margin-left: -" +
                  t.width / 2 +
                  "px;\n                margin-top: -" +
                  t.height / 2 +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getVideoContStyle = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getDummyImageContent = function (t, i, s) {
            var n;
            if ((this.settings.dynamic || (n = S(this.items).eq(i)), n)) {
              var e = void 0;
              if (
                !(e = this.settings.exThumbImage
                  ? n.attr(this.settings.exThumbImage)
                  : n.find("img").first().attr("src"))
              )
                return "";
              var o =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                e +
                '" />';
              return (
                t.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                o
              );
            }
            return "";
          }),
          (t.prototype.setImgMarkup = function (t, i, s) {
            var n = this.galleryItems[s],
              e = n.alt,
              o = n.srcset,
              h = n.sizes,
              r = n.sources,
              l = e ? 'alt="' + e + '"' : "",
              a =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(i, s, l)
                  : I(s, t, l, o, h, r)) +
                "</picture>";
            i.prepend(a);
          }),
          (t.prototype.onSlideObjectLoad = function (t, i, s, n) {
            var e = t.find(".lg-object").first();
            P(e.get()) || i
              ? s()
              : (e.on("load.lg error.lg", function () {
                  s && s();
                }),
                e.on("error.lg", function () {
                  n && n();
                }));
          }),
          (t.prototype.onLgObjectLoad = function (t, i, s, n, e, o) {
            var h = this;
            this.onSlideObjectLoad(
              t,
              o,
              function () {
                h.triggerSlideItemLoad(t, i, s, n, e);
              },
              function () {
                t.addClass("lg-complete lg-complete_"),
                  t.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>',
                  );
              },
            );
          }),
          (t.prototype.triggerSlideItemLoad = function (t, i, s, n, e) {
            var o = this,
              h = this.galleryItems[i],
              r = e && "video" === this.getSlideType(h) && !h.poster ? n : 0;
            setTimeout(function () {
              t.addClass("lg-complete lg-complete_"),
                o.LGel.trigger(d, { index: i, delay: s || 0, isFirstSlide: e });
            }, r);
          }),
          (t.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (t.prototype.addSlideVideoInfo = function (t) {
            var i = this;
            t.forEach(function (t, s) {
              (t.t = _(t.src, !!t.video, s)),
                t.t &&
                  i.settings.loadYouTubePoster &&
                  !t.poster &&
                  t.t.youtube &&
                  (t.poster =
                    "//img.youtube.com/vi/" +
                    t.t.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (t.prototype.loadContent = function (t, i) {
            var s = this,
              n = this.galleryItems[t],
              o = S(this.getSlideItemId(t)),
              r = n.poster,
              l = n.srcset,
              a = n.sizes,
              u = n.sources,
              c = n.src,
              d = n.video,
              g = d && "string" == typeof d ? JSON.parse(d) : d;
            if (n.responsive) {
              var f = n.responsive.split(",");
              c = F(f) || c;
            }
            var v = n.t,
              m = "",
              p = !!n.iframe,
              b = !this.lGalleryOn,
              w = 0;
            if (
              (b &&
                (w =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !o.hasClass("lg-loaded"))
            ) {
              if (v) {
                var y = this.mediaContainerPosition,
                  x = y.top,
                  T = y.bottom,
                  k = O(
                    this.items[t],
                    this.outer,
                    x + T,
                    v && this.settings.videoMaxSize,
                  );
                m = this.getVideoContStyle(k);
              }
              if (p) {
                var z = C(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  n.iframeTitle,
                );
                o.prepend(z);
              } else if (r) {
                var M = "";
                b &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (M = this.getDummyImageContent(o, t, "")),
                  (z = D(r, M || "", m, this.settings.strings.playVideo, v)),
                  o.prepend(z);
              } else if (v)
                (z = '<div class="lg-video-cont " style="' + m + '"></div>'),
                  o.prepend(z);
              else if ((this.setImgMarkup(c, o, t), l || u)) {
                var j = o.find(".lg-object");
                this.initPictureFill(j);
              }
              (r || v) &&
                this.LGel.trigger(h, {
                  index: t,
                  src: c,
                  html5Video: g,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(e, { index: t }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(t);
            }
            var A = 0;
            w && !S(document.body).hasClass("lg-from-hash") && (A = w),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  o.removeClass(
                    "lg-start-end-progress lg-start-progress",
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                o.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === s.getSlideType(n)) {
                      var i = n.alt,
                        e = i ? 'alt="' + i + '"' : "";
                      if (
                        (o
                          .find(".lg-img-wrap")
                          .append(I(t, c, e, l, a, n.sources)),
                        l || u)
                      ) {
                        var h = o.find(".lg-object");
                        s.initPictureFill(h);
                      }
                    }
                    ("image" === s.getSlideType(n) ||
                      ("video" === s.getSlideType(n) && r)) &&
                      (s.onLgObjectLoad(o, t, w, A, !0, !1),
                      s.onSlideObjectLoad(
                        o,
                        !(!v || !v.html5 || r),
                        function () {
                          s.loadContentOnFirstSlideLoad(t, o, A);
                        },
                        function () {
                          s.loadContentOnFirstSlideLoad(t, o, A);
                        },
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              o.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(n) || r)) ||
                this.onLgObjectLoad(o, t, w, A, b, !(!v || !v.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !o.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  o.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === i &&
                (o.hasClass("lg-complete_")
                  ? this.preload(t)
                  : o
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(t);
                      }));
          }),
          (t.prototype.loadContentOnFirstSlideLoad = function (t, i, s) {
            var n = this;
            setTimeout(function () {
              i.find(".lg-dummy-img").remove(),
                i.removeClass("lg-first-slide"),
                n.outer.removeClass("lg-first-slide-loading"),
                (n.isDummyImageRemoved = !0),
                n.preload(t);
            }, s + 300);
          }),
          (t.prototype.getItemsToBeInsertedToDom = function (t, i, s) {
            var n = this;
            void 0 === s && (s = 0);
            var e = [],
              o = Math.max(s, 3);
            o = Math.min(o, this.galleryItems.length);
            var h = "lg-item-" + this.lgId + "-" + i;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (t, i) {
                  e.push("lg-item-" + n.lgId + "-" + i);
                }),
                e
              );
            if (t < (this.galleryItems.length - 1) / 2) {
              for (var r = t; r > t - o / 2 && r >= 0; r--)
                e.push("lg-item-" + this.lgId + "-" + r);
              var l = e.length;
              for (r = 0; r < o - l; r++)
                e.push("lg-item-" + this.lgId + "-" + (t + r + 1));
            } else {
              for (
                r = t;
                r <= this.galleryItems.length - 1 && r < t + o / 2;
                r++
              )
                e.push("lg-item-" + this.lgId + "-" + r);
              for (l = e.length, r = 0; r < o - l; r++)
                e.push("lg-item-" + this.lgId + "-" + (t - r - 1));
            }
            return (
              this.settings.loop &&
                (t === this.galleryItems.length - 1
                  ? e.push("lg-item-" + this.lgId + "-0")
                  : 0 === t &&
                    e.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1),
                    )),
              -1 === e.indexOf(h) && e.push("lg-item-" + this.lgId + "-" + i),
              e
            );
          }),
          (t.prototype.organizeSlideItems = function (t, i) {
            var s = this,
              n = this.getItemsToBeInsertedToDom(
                t,
                i,
                this.settings.numberOfSlideItemsInDom,
              );
            return (
              n.forEach(function (t) {
                -1 === s.currentItemsInDom.indexOf(t) &&
                  s.$inner.append('<div id="' + t + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (t) {
                -1 === n.indexOf(t) && S("#" + t).remove();
              }),
              n
            );
          }),
          (t.prototype.getPreviousSlideIndex = function () {
            var t = 0;
            try {
              var i = this.outer.find(".lg-current").first().attr("id");
              t = parseInt(i.split("-")[3]) || 0;
            } catch (i) {
              t = 0;
            }
            return t;
          }),
          (t.prototype.setDownloadValue = function (t) {
            if (this.settings.download) {
              var i = this.galleryItems[t];
              if (!1 === i.downloadUrl || "false" === i.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  s.attr("href", i.downloadUrl || i.src),
                  i.download && s.attr("download", i.download);
              }
            }
          }),
          (t.prototype.makeSlideAnimation = function (t, i, s) {
            var n = this;
            this.lGalleryOn && s.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  n.outer.addClass("lg-no-trans"),
                    n.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === t
                      ? (i.addClass("lg-prev-slide"),
                        s.addClass("lg-next-slide"))
                      : (i.addClass("lg-next-slide"),
                        s.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      n.outer.find(".lg-item").removeClass("lg-current"),
                        i.addClass("lg-current"),
                        n.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0,
              );
          }),
          (t.prototype.slide = function (t, i, s, n) {
            var e = this,
              o = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(t, o)),
              !this.lGalleryOn || o !== t)
            ) {
              var h = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(t);
                var r = this.getSlideItem(t),
                  l = this.getSlideItem(o),
                  a = this.galleryItems[t],
                  u = a.t;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(a)),
                  this.setDownloadValue(t),
                  u)
                ) {
                  var c = this.mediaContainerPosition,
                    d = c.top,
                    v = c.bottom,
                    m = O(
                      this.items[t],
                      this.outer,
                      d + v,
                      u && this.settings.videoMaxSize,
                    );
                  this.resizeVideoSlide(t, m);
                }
                if (
                  (this.LGel.trigger(g, {
                    prevIndex: o,
                    index: t,
                    fromTouch: !!i,
                    fromThumb: !!s,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(t),
                  n || (t < o ? (n = "prev") : t > o && (n = "next")),
                  i)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var p = void 0,
                    b = void 0;
                  h > 2
                    ? ((p = t - 1),
                      (b = t + 1),
                      ((0 === t && o === h - 1) || (t === h - 1 && 0 === o)) &&
                        ((b = 0), (p = h - 1)))
                    : ((p = 0), (b = 1)),
                    "prev" === n
                      ? this.getSlideItem(b).addClass("lg-next-slide")
                      : this.getSlideItem(p).addClass("lg-prev-slide"),
                    r.addClass("lg-current");
                } else this.makeSlideAnimation(n, r, l);
                this.lGalleryOn
                  ? setTimeout(
                      function () {
                        e.loadContent(t, !0),
                          ".lg-item" !== e.settings.appendSubHtmlTo &&
                            e.addHtml(t);
                      },
                      this.settings.speed +
                        50 +
                        (i ? 0 : this.settings.slideDelay),
                    )
                  : this.loadContent(t, !0),
                  setTimeout(
                    function () {
                      (e.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        e.LGel.trigger(f, {
                          prevIndex: o,
                          index: t,
                          fromTouch: i,
                          fromThumb: s,
                        });
                    },
                    (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (i ? 0 : this.settings.slideDelay),
                  );
              }
              this.index = t;
            }
          }),
          (t.prototype.updateCurrentCounter = function (t) {
            this.getElementById("lg-counter-current").html(t + 1 + "");
          }),
          (t.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + "",
            );
          }),
          (t.prototype.getSlideType = function (t) {
            return t.t ? "video" : t.iframe ? "iframe" : "image";
          }),
          (t.prototype.touchMove = function (t, i, s) {
            var n = i.pageX - t.pageX,
              e = i.pageY - t.pageY,
              o = !1;
            if (
              (this.swipeDirection
                ? (o = !0)
                : Math.abs(n) > 15
                ? ((this.swipeDirection = "horizontal"), (o = !0))
                : Math.abs(e) > 15 &&
                  ((this.swipeDirection = "vertical"), (o = !0)),
              o)
            ) {
              var h = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == s || s.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(h, n, 0);
                var r = h.get().offsetWidth,
                  l = (15 * r) / 100 - Math.abs((10 * n) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -r + n - l,
                  0,
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    r + n + l,
                    0,
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == s || s.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var a = 1 - Math.abs(e) / window.innerHeight;
                this.$backdrop.css("opacity", a);
                var u = 1 - Math.abs(e) / (2 * window.innerWidth);
                this.setTranslate(h, 0, e, u, u),
                  Math.abs(e) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (t.prototype.touchEnd = function (t, i, s) {
            var n,
              e = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                e.$container.removeClass("lg-dragging-vertical"),
                  e.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var o = !0;
                if ("horizontal" === e.swipeDirection) {
                  n = t.pageX - i.pageX;
                  var h = Math.abs(t.pageX - i.pageX);
                  n < 0 && h > e.settings.swipeThreshold
                    ? (e.goToNextSlide(!0), (o = !1))
                    : n > 0 &&
                      h > e.settings.swipeThreshold &&
                      (e.goToPrevSlide(!0), (o = !1));
                } else if ("vertical" === e.swipeDirection) {
                  if (
                    ((n = Math.abs(t.pageY - i.pageY)),
                    e.settings.closable && e.settings.swipeToClose && n > 100)
                  )
                    return void e.closeGallery();
                  e.$backdrop.css("opacity", 1);
                }
                if (
                  (e.outer.find(".lg-item").removeAttr("style"),
                  o && Math.abs(t.pageX - i.pageX) < 5)
                ) {
                  var r = S(s.target);
                  e.isPosterElement(r) && e.LGel.trigger(v);
                }
                e.swipeDirection = void 0;
              }),
              setTimeout(function () {
                e.outer.hasClass("lg-dragging") ||
                  "lg-slide" === e.settings.mode ||
                  e.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (t.prototype.enableSwipe = function () {
            var t = this,
              i = {},
              s = {},
              n = !1,
              e = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                t.dragOrSwipeEnabled = !0;
                var n = t.getSlideItem(t.index);
                (!S(s.target).hasClass("lg-item") &&
                  !n.get().contains(s.target)) ||
                  t.outer.hasClass("lg-zoomed") ||
                  t.lgBusy ||
                  1 !== s.touches.length ||
                  ((e = !0),
                  (t.touchAction = "swipe"),
                  t.manageSwipeClass(),
                  (i = {
                    pageX: s.touches[0].pageX,
                    pageY: s.touches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (o) {
                e &&
                  "swipe" === t.touchAction &&
                  1 === o.touches.length &&
                  ((s = {
                    pageX: o.touches[0].pageX,
                    pageY: o.touches[0].pageY,
                  }),
                  t.touchMove(i, s, o),
                  (n = !0));
              }),
              this.$inner.on("touchend.lg", function (o) {
                if ("swipe" === t.touchAction) {
                  if (n) (n = !1), t.touchEnd(s, i, o);
                  else if (e) {
                    var h = S(o.target);
                    t.isPosterElement(h) && t.LGel.trigger(v);
                  }
                  (t.touchAction = void 0), (e = !1);
                }
              }));
          }),
          (t.prototype.enableDrag = function () {
            var t = this,
              i = {},
              s = {},
              n = !1,
              e = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                t.dragOrSwipeEnabled = !0;
                var e = t.getSlideItem(t.index);
                (S(s.target).hasClass("lg-item") ||
                  e.get().contains(s.target)) &&
                  (t.outer.hasClass("lg-zoomed") ||
                    t.lgBusy ||
                    (s.preventDefault(),
                    t.lgBusy ||
                      (t.manageSwipeClass(),
                      (i = { pageX: s.pageX, pageY: s.pageY }),
                      (n = !0),
                      (t.outer.get().scrollLeft += 1),
                      (t.outer.get().scrollLeft -= 1),
                      t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      t.LGel.trigger(m))));
              }),
              S(window).on("mousemove.lg.global" + this.lgId, function (o) {
                n &&
                  t.lgOpened &&
                  ((e = !0),
                  (s = { pageX: o.pageX, pageY: o.pageY }),
                  t.touchMove(i, s),
                  t.LGel.trigger(p));
              }),
              S(window).on("mouseup.lg.global" + this.lgId, function (o) {
                if (t.lgOpened) {
                  var h = S(o.target);
                  e
                    ? ((e = !1), t.touchEnd(s, i, o), t.LGel.trigger(b))
                    : t.isPosterElement(h) && t.LGel.trigger(v),
                    n &&
                      ((n = !1),
                      t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (t.prototype.triggerPosterClick = function () {
            var t = this;
            this.$inner.on("click.lg", function (i) {
              !t.dragOrSwipeEnabled &&
                t.isPosterElement(S(i.target)) &&
                t.LGel.trigger(v);
            });
          }),
          (t.prototype.manageSwipeClass = function () {
            var t = this.index + 1,
              i = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (i = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (t = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              i > -1 && this.getSlideItem(i).addClass("lg-prev-slide"),
              this.getSlideItem(t).addClass("lg-next-slide");
          }),
          (t.prototype.goToNextSlide = function (t) {
            var i = this,
              s = this.settings.loop;
            t && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(w, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : s
                  ? ((this.index = 0),
                    this.LGel.trigger(w, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      i.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (t.prototype.goToPrevSlide = function (t) {
            var i = this,
              s = this.settings.loop;
            t && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(y, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : s
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(y, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      i.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (t.prototype.keyPress = function () {
            var t = this;
            S(window).on("keydown.lg.global" + this.lgId, function (i) {
              t.lgOpened &&
                !0 === t.settings.escKey &&
                27 === i.keyCode &&
                (i.preventDefault(),
                t.settings.allowMediaOverlap &&
                t.outer.hasClass("lg-can-toggle") &&
                t.outer.hasClass("lg-components-open")
                  ? t.outer.removeClass("lg-components-open")
                  : t.closeGallery()),
                t.lgOpened &&
                  t.galleryItems.length > 1 &&
                  (37 === i.keyCode && (i.preventDefault(), t.goToPrevSlide()),
                  39 === i.keyCode && (i.preventDefault(), t.goToNextSlide()));
            });
          }),
          (t.prototype.arrow = function () {
            var t = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              t.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                t.goToNextSlide();
              });
          }),
          (t.prototype.arrowDisable = function (t) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var i = this.getElementById("lg-prev"),
                s = this.getElementById("lg-next");
              t + 1 === this.galleryItems.length
                ? s.attr("disabled", "disabled").addClass("disabled")
                : s.removeAttr("disabled").removeClass("disabled"),
                0 === t
                  ? i.attr("disabled", "disabled").addClass("disabled")
                  : i.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (t.prototype.setTranslate = function (t, i, s, n, e) {
            void 0 === n && (n = 1),
              void 0 === e && (e = 1),
              t.css(
                "transform",
                "translate3d(" +
                  i +
                  "px, " +
                  s +
                  "px, 0px) scale3d(" +
                  n +
                  ", " +
                  e +
                  ", 1)",
              );
          }),
          (t.prototype.mousewheel = function () {
            var t = this,
              i = 0;
            this.outer.on("wheel.lg", function (s) {
              if (s.deltaY && !(t.galleryItems.length < 2)) {
                s.preventDefault();
                var n = new Date().getTime();
                n - i < 1e3 ||
                  ((i = n),
                  s.deltaY > 0
                    ? t.goToNextSlide()
                    : s.deltaY < 0 && t.goToPrevSlide());
              }
            });
          }),
          (t.prototype.isSlideElement = function (t) {
            return (
              t.hasClass("lg-outer") ||
              t.hasClass("lg-item") ||
              t.hasClass("lg-img-wrap")
            );
          }),
          (t.prototype.isPosterElement = function (t) {
            var i = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              t.hasClass("lg-video-poster") ||
              t.hasClass("lg-video-play-button") ||
              (i && i.contains(t.get()))
            );
          }),
          (t.prototype.toggleMaximize = function () {
            var t = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              t.$container.toggleClass("lg-inline"), t.refreshOnResize();
            });
          }),
          (t.prototype.invalidateItems = function () {
            for (var t = 0; t < this.items.length; t++) {
              var i = S(this.items[t]);
              i.off("click.lgcustom-item-" + i.attr("data-lg-id"));
            }
          }),
          (t.prototype.trapFocus = function () {
            var t = this;
            this.$container.get().focus({ preventScroll: !0 }),
              S(window).on("keydown.lg.global" + this.lgId, function (i) {
                if (t.lgOpened && ("Tab" === i.key || 9 === i.keyCode)) {
                  var s = H(t.$container.get()),
                    n = s[0],
                    e = s[s.length - 1];
                  i.shiftKey
                    ? document.activeElement === n &&
                      (e.focus(), i.preventDefault())
                    : document.activeElement === e &&
                      (n.focus(), i.preventDefault());
                }
              });
          }),
          (t.prototype.manageCloseGallery = function () {
            var t = this;
            if (this.settings.closable) {
              var i = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                t.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var n = S(s.target);
                    i = !!t.isSlideElement(n);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    i = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var n = S(s.target);
                    t.isSlideElement(n) &&
                      i &&
                      (t.outer.hasClass("lg-dragging") || t.closeGallery());
                  }));
            }
          }),
          (t.prototype.closeGallery = function (t) {
            var i = this;
            if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
            this.LGel.trigger(x),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                S(window).scrollTop(this.prevScrollTop);
            var s,
              n = this.items[this.index];
            if (this.zoomFromOrigin && n) {
              var e = this.mediaContainerPosition,
                o = e.top,
                h = e.bottom,
                r = this.galleryItems[this.index],
                l = r.t,
                a = r.poster,
                u = O(
                  n,
                  this.outer,
                  o + h,
                  l && a && this.settings.videoMaxSize,
                );
              s = A(n, this.outer, o, h, u);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms",
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              S("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var c =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration,
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                i.zoomFromOrigin &&
                  s &&
                  i.outer.removeClass("lg-zoom-from-image"),
                  i.$container.removeClass("lg-show"),
                  i.resetScrollBar(),
                  i.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      i.settings.backdropDuration + "ms",
                    ),
                  i.outer.removeClass("lg-closing " + i.settings.startClass),
                  i.getSlideItem(i.index).removeClass("lg-start-end-progress"),
                  i.$inner.empty(),
                  i.lgOpened && i.LGel.trigger(T, { instance: i }),
                  i.$container.get() && i.$container.get().blur(),
                  (i.lgOpened = !1);
              }, c + 100),
              c + 100
            );
          }),
          (t.prototype.initModules = function () {
            this.plugins.forEach(function (t) {
              try {
                t.init();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated",
                );
              }
            });
          }),
          (t.prototype.destroyModules = function (t) {
            this.plugins.forEach(function (i) {
              try {
                t ? i.destroy() : i.closeGallery && i.closeGallery();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed",
                );
              }
            });
          }),
          (t.prototype.refresh = function (t) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = t || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(l);
          }),
          (t.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (t.prototype.destroyGallery = function () {
            this.destroyModules(!0),
              this.settings.dynamic || this.invalidateItems(),
              S(window).off(".lg.global" + this.lgId),
              this.LGel.off(".lg"),
              this.$container.remove();
          }),
          (t.prototype.destroy = function () {
            var t = this.closeGallery(!0);
            return (
              t
                ? setTimeout(this.destroyGallery.bind(this), t)
                : this.destroyGallery(),
              t
            );
          }),
          t
        );
      })(),
      N = function (t, i, s, n) {
        for (
          var e,
            o = arguments.length,
            h =
              o < 3
                ? i
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(i, s))
                : n,
            r = t.length - 1;
          r >= 0;
          r--
        )
          (e = t[r]) &&
            (h = (o < 3 ? e(h) : o > 3 ? e(i, s, h) : e(i, s)) || h);
        return o > 3 && h && Object.defineProperty(i, s, h), h;
      };
    (t.LightGalleryLit = class extends i.LitElement {
      constructor() {
        super(...arguments), (this.settings = {});
      }
      getSelector(t) {
        const i = t.assignedNodes({ flatten: !0 });
        return Array.prototype.filter.call(
          i,
          (t) => t.nodeType == Node.ELEMENT_NODE,
        );
      }
      firstUpdated() {
        if (!this.shadowRoot) return;
        const t = this.shadowRoot.querySelector("slot"),
          i = { selector: this.getSelector(t) },
          s = { ...this.settings, ...i };
        this.galleryInstance = new U(this, s);
      }
      handleSlotchange(t) {
        var i, s;
        const n = this.getSelector(t.target);
        this.galleryInstance &&
          (null === (i = this.galleryInstance) || void 0 === i
            ? void 0
            : i.galleryItems.length) !== n.length &&
          ((this.galleryInstance.settings.selector = n),
          null === (s = this.galleryInstance) || void 0 === s || s.refresh());
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this.galleryInstance && this.galleryInstance.destroy();
      }
      render() {
        return i.html`
            <div id="container">
                <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
        `;
      }
    }),
      N(
        [
          (function (t) {
            return (i, n) =>
              void 0 !== n
                ? ((t, i, s) => {
                    i.constructor.createProperty(s, t);
                  })(t, i, n)
                : s(t, i);
          })({ type: Object }),
        ],
        t.LightGalleryLit.prototype,
        "settings",
        void 0,
      ),
      (t.LightGalleryLit = N(
        [
          ((t) => (i) =>
            "function" == typeof i
              ? ((t, i) => (window.customElements.define(t, i), i))(t, i)
              : ((t, i) => {
                  const { kind: s, elements: n } = i;
                  return {
                    kind: s,
                    elements: n,
                    finisher(i) {
                      window.customElements.define(t, i);
                    },
                  };
                })(t, i))("light-gallery"),
        ],
        t.LightGalleryLit,
      )),
      Object.defineProperty(t, "i", { value: !0 });
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports, require("lit"))
    : "function" == typeof define && define.amd
    ? define(["exports", "lit"], i)
    : i(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).lightgallery = {}),
        t.lit,
      );
