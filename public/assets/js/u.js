! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "aiosp",
        p = "." + o,
        q = "aiosp-ready",
        r = "aiosp-removing",
        s = "aiosp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "aiosp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.aiosPopup.instance || (b = new t, b.init(), a.aiosPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.aiosPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.aiosPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " aiosp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " aiosp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " aiosp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " aiosp-ie7"), r && b._addClassToaiosp(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToaiosp(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToaiosp(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromaiosp(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "aiosp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "aiosp-bg"), b.container.attr("class", "aiosp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("aiosp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".aiosp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("aiosp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("aiosp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-aiosp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.aiospEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.aiosPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.aiosPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.aiosPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.aiospEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("aiosp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("aiosp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("aiosp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToaiosp: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromaiosp: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.aiosPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.aiosPopup.instance && a.aiosPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.aiosPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="aiosp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.aiosPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("aiosPopup") : d[0].aiosPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    aiospEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("aiosPopup", c) : d[0].aiosPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.aiosPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "aiosp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.aiosPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "aiosp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.aiosPopup.registerModule("image", {
        options: {
            markup: '<div class="aiosp-figure"><div class="aiosp-close"></div><figure><div class="aiosp-img"></div><figcaption><div class="aiosp-bottom-bar"><div class="aiosp-title"></div><div class="aiosp-counter"></div></div></figcaption></figure></div>',
            cursor: "aiosp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("aiosp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".aiosploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".aiosploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".aiosp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "aiosp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.aiosploader", f).on("error.aiosploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("aiosp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("aiosp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("aiosp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.aiosPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("aiosp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.aiosPopup.registerModule(P, {
        options: {
            markup: '<div class="aiosp-iframe-scaler"><div class="aiosp-close"></div><iframe class="aiosp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.aiosPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="aiosp-arrow aiosp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".aiosp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " aiosp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".aiosp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="aiosp-img" />').on("load.aiosploader", function() {
                        d.hasSize = !0
                    }).on("error.aiosploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.aiosPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
jQuery(document).ready(function() {
    function aiosFramePopUp() {
        jQuery('.aios-frame-popup, .aios-video-popup').aiosPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'aiosp-fade',
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }
    aiosFramePopUp()

    function aiosImagePopUp() {
        jQuery('.aios-image-popup').aiosPopup({
            type: 'image',
            closeOnContentClick: !0,
            mainClass: 'aiosp-img-mobile',
            image: {
                verticalFit: !0
            }
        })
    }
    aiosImagePopUp()

    function aiosContentPopup() {
        jQuery('.aios-content-popup').aiosPopup({
            type: 'inline',
            preloader: !1,
            focus: '#username',
            modal: !0,
            callbacks: {
                open: function() {
                    jQuery('.aiosp-content').addClass('aios-popup-body')
                    jQuery('.aios-popup-body').append('<button title="%title%" type="button" class="aiosp-close">&#215;</button>')
                }
            }
        })
    }
    aiosContentPopup()
});
(function() {
    var AIOSMortgageCalculator = function(elem) {
        var that = this;
        that.elem = jQuery(elem);
        that.autoFocus(that);
        that.elem.submit(function(e) {
            e.preventDefault();
            that.resetResults(that);
            if (that.isFormValid(that)) {
                that.compute(that);
                that.scrollToResults(that)
            }
        })
    }
    AIOSMortgageCalculator.prototype.scrollToResults = function(context) {
        var that = context;
        var top = that.elem.find('.aios-mortgage-calculator-standalone-calculation-result').offset().top;
        var allowance = 150;
        jQuery("html,body").animate({
            scrollTop: (top - allowance)
        }, 200)
    }
    AIOSMortgageCalculator.prototype.autoFocus = function(context) {
        var that = context;
        if (that.elem.find('.aios-mortgage-calculator-standalone-loan-years').val() == '') {
            that.elem.find('.aios-mortgage-calculator-standalone-loan-years').focus()
        } else if (that.elem.find('.aios-mortgage-calculator-standalone-interest-rate').val() == '') {
            that.elem.find('.aios-mortgage-calculator-standalone-interest-rate').focus()
        } else if (that.elem.find('.aios-mortgage-calculator-standalone-loan-amount').val() == '') {
            that.elem.find(".aios-mortgage-calculator-standalone-loan-amount").focus()
        } else if (that.elem.find('.aios-mortgage-calculator-standalone-property-tax').val() == '') {
            that.elem.find(".aios-mortgage-calculator-standalone-property-tax").focus()
        } else if (that.elem.find('.aios-mortgage-calculator-standalone-annual-insurance').val() == '') {
            that.elem.find(".aios-mortgage-calculator-standalone-annual-insurance").focus()
        }
    }
    AIOSMortgageCalculator.prototype.resetResults = function(context) {
        var that = context;
        that.elem.find("input[name='PI']").val('');
        that.elem.find("input[name='MT']").val('');
        that.elem.find("input[name='MI']").val('');
        that.elem.find("input[name='MP']").val('')
    }
    AIOSMortgageCalculator.prototype.isFormValid = function(context) {
        var that = context;
        var isValid = !0;
        var numberFields = that.elem.find(".aios-mortgage-calculator-standalone-number");
        numberFields.each(function(i, v) {
            that.elem.find(".aios-mortgage-calculator-standalone-error-tooltip").remove();
            numberFields.removeClass("aios-mortgage-calculator-standalone-error")
        });
        numberFields.each(function(i, v) {
            if (isNaN(parseInt(jQuery(v).val()))) {
                var div = jQuery("<div class='aios-mortgage-calculator-standalone-error-tooltip'></div>");
                div.html("Specify a valid number");
                jQuery(v).addClass("aios-mortgage-calculator-standalone-error").after(div);
                isValid = !1
            }
        });
        return isValid
    }
    AIOSMortgageCalculator.prototype.floor = function(number) {
        return Math.floor(number * Math.pow(10, 2)) / Math.pow(10, 2)
    }
    AIOSMortgageCalculator.prototype.compute = function(context) {
        var that = context;
        var mi = parseInt(that.elem.find("input[name='IR']").val()) / 1200;
        var base = 1;
        var mbase = 1 + mi;
        for (i = 0; i < parseInt(that.elem.find("input[name='YR']").val()) * 12; i++) {
            base = base * mbase
        }
        that.elem.find("input[name='PI']").val(that.floor(parseInt(that.elem.find("input[name='LA']").val()) * mi / (1 - (1 / base))));
        that.elem.find("input[name='MT']").val(that.floor(parseInt(that.elem.find("input[name='AT']").val()) / 12));
        that.elem.find("input[name='MI']").val(that.floor(parseInt(that.elem.find("input[name='AI']").val()) / 12));
        var dasum = parseInt(that.elem.find("input[name='LA']").val()) * mi / (1 - (1 / base)) + parseInt(that.elem.find("input[name='AT']").val()) / 12 + parseInt(that.elem.find("input[name='AI']").val()) / 12;
        that.elem.find("input[name='MP']").val(that.floor(dasum))
    }
    jQuery(document).ready(function() {
        jQuery(".aios-mortgage-calculator-standalone").each(function(i, v) {
            new AIOSMortgageCalculator(jQuery(v))
        })
    })
})();
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function() {
            for (var a = 0, b = this.length; b > a; a++)
                if ("undefined" != typeof this[a]) return this[a]
        },
        l = function() {
            for (var a = this.length; --a;)
                if ("undefined" != typeof this[a]) return this[a]
        },
        m = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = m.listeners(a),
                j = 0,
                n = [],
                o = {},
                p = [],
                q = b;
            p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
            for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
            for (n.sort(i); n[j] < 0;)
                if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
            for (r = 0; s > r; r++)
                if (e = h[r], "zIndex" in e)
                    if (e.zIndex == n[j]) {
                        if (p.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
                    } else o[e.zIndex] = e;
            else if (p.push(e.apply(d, g)), c) break;
            return c = f, b = q, p
        };
    m._events = j, m.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, m.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
            for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                n: {}
            });
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                if (e.f[g] == b) {
                    c = !0;
                    break
                }! c && e.f.push(b)
        }(c[d]);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, m.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function() {
        c = 1
    }, m.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, m.nts = function() {
        return b.split(f)
    }, m.off = m.unbind = function(a, b) {
        if (!a) return void(m._events = j = {
            n: {}
        });
        var c = a.split(g);
        if (c.length > 1)
            for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
        else {
            c = a.split(f);
            var k, l, n, d, i, o, p, q = [j];
            for (d = 0, i = c.length; i > d; d++)
                for (o = 0; o < q.length; o += n.length - 2) {
                    if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
                    else
                        for (l in k) k[e](l) && n.push(k[l]);
                    q.splice.apply(q, n)
                }
            for (d = 0, i = q.length; i > d; d++)
                for (k = q[d]; k.n;) {
                    if (b) {
                        if (k.f) {
                            for (o = 0, p = k.f.length; p > o; o++)
                                if (k.f[o] == b) {
                                    k.f.splice(o, 1);
                                    break
                                }! k.f.length && delete k.f
                        }
                        for (l in k.n)
                            if (k.n[e](l) && k.n[l].f) {
                                var r = k.n[l].f;
                                for (o = 0, p = r.length; p > o; o++)
                                    if (r[o] == b) {
                                        r.splice(o, 1);
                                        break
                                    }! r.length && delete k.n[l].f
                            }
                    } else {
                        delete k.f;
                        for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                    }
                    k = k.n
                }
        }
    }, m.once = function(a, b) {
        var c = function() {
            return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
    }, m.version = d, m.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
        return m
    }) : a.eve = m
}(this),
function(a, b) {
    if ("function" == typeof define && define.amd) define(["eve"], function(c) {
        return b(a, c)
    });
    else if ("undefined" != typeof exports) {
        var c = require("eve");
        module.exports = b(a, c)
    } else b(a, a.eve)
}(window || this, function(a, b) {
    var c = function(b) {
            var c = {},
                d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                    setTimeout(a, 16)
                },
                e = Array.isArray || function(a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                },
                f = 0,
                g = "M" + (+new Date).toString(36),
                h = function() {
                    return g + (f++).toString(36)
                },
                i = Date.now || function() {
                    return +new Date
                },
                j = function(a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                k = function(a) {
                    var b = this;
                    return null == a ? b.spd : void(b.spd = a)
                },
                l = function(a) {
                    var b = this;
                    return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
                },
                m = function() {
                    var a = this;
                    delete c[a.id], a.update(), b("mina.stop." + a.id, a)
                },
                n = function() {
                    var a = this;
                    a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
                },
                o = function() {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                },
                p = function() {
                    var a, b = this;
                    if (e(b.start)) {
                        a = [];
                        for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                    } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                    b.set(a)
                },
                q = function() {
                    var a = 0;
                    for (var e in c)
                        if (c.hasOwnProperty(e)) {
                            var f = c[e],
                                g = f.get();
                            a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                                setTimeout(function() {
                                    b("mina.finish." + a.id, a)
                                })
                            }(f)), f.update()
                        } a && d(q)
                },
                r = function(a, b, e, f, g, i, s) {
                    var t = {
                        id: h(),
                        start: a,
                        end: b,
                        b: e,
                        s: 0,
                        dur: f - e,
                        spd: 1,
                        get: g,
                        set: i,
                        easing: s || r.linear,
                        status: j,
                        speed: k,
                        duration: l,
                        stop: m,
                        pause: n,
                        resume: o,
                        update: p
                    };
                    c[t.id] = t;
                    var u, v = 0;
                    for (u in c)
                        if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                    return 1 == v && d(q), t
                };
            return r.time = i, r.getById = function(a) {
                return c[a] || null
            }, r.linear = function(a) {
                return a
            }, r.easeout = function(a) {
                return Math.pow(a, 1.7)
            }, r.easein = function(a) {
                return Math.pow(a, .48)
            }, r.easeinout = function(a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, r.backin = function(a) {
                if (1 == a) return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, r.backout = function(a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, r.elastic = function(a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
            }, r.bounce = function(a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = r, r
        }("undefined" == typeof b ? function() {} : b),
        d = function(a) {
            function c(a, b) {
                if (a) {
                    if (a.nodeType) return w(a);
                    if (e(a, "array") && c.set) return c.set.apply(c, a);
                    if (a instanceof s) return a;
                    if (null == b) return a = y.doc.querySelector(String(a)), w(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
            }

            function d(a, b) {
                if (b) {
                    if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
                    if (1 == a.nodeType) {
                        for (var c in b)
                            if (b[z](c)) {
                                var e = A(b[c]);
                                e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
                            }
                    } else "text" in b && (a.nodeValue = b.text)
                } else a = y.doc.createElementNS(U, a);
                return a
            }

            function e(a, b) {
                return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b
            }

            function f(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[z](c) && (b[c] = f(a[c]));
                return b
            }

            function h(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function i(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("â€"),
                        g = d.cache = d.cache || {},
                        i = d.count = d.count || [];
                    return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function j(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
                }
                return j(a, b, e, f) - j(c, d, e, f)
            }

            function k(a) {
                return a % 360 * H / 180
            }

            function l(a) {
                return 180 * a / H % 360
            }

            function m(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, D.tan(k(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, D.tan(k(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                }), b
            }

            function n(a, b) {
                var d = ab(a),
                    e = new c.Matrix;
                if (d)
                    for (var f = 0, g = d.length; g > f; f++) {
                        var h, i, j, k, l, m = d[f],
                            n = m.length,
                            o = A(m[0]).toLowerCase(),
                            p = m[0] != o,
                            q = p ? e.invert() : 0;
                        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                    }
                return e
            }

            function o(a) {
                var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
                    d = b.select("defs"),
                    e = null == d ? !1 : d.node;
                return e || (e = u("defs", b.node).node), e
            }

            function p(a) {
                return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
            }

            function q(a, b, c) {
                function e(a) {
                    if (null == a) return I;
                    if (a == +a) return a;
                    d(j, {
                        width: a
                    });
                    try {
                        return j.getBBox().width
                    } catch (b) {
                        return 0
                    }
                }

                function f(a) {
                    if (null == a) return I;
                    if (a == +a) return a;
                    d(j, {
                        height: a
                    });
                    try {
                        return j.getBBox().height
                    } catch (b) {
                        return 0
                    }
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = p(a).node,
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = d("rect"), d(j, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", e), g("ry", f);
                    case "image":
                        g("width", e), g("height", f);
                    case "text":
                        g("x", e), g("y", f);
                        break;
                    case "circle":
                        g("cx", e), g("cy", f), g("r", e);
                        break;
                    case "ellipse":
                        g("cx", e), g("cy", f), g("rx", e), g("ry", f);
                        break;
                    case "line":
                        g("x1", e), g("x2", e), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", e), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", e), g("dy", f);
                        break;
                    default:
                        g(b, e)
                }
                return h.removeChild(j), i
            }

            function r(a) {
                e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var f = d.childNodes;
                for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
                return this
            }

            function s(a) {
                if (a.snap in V) return V[a.snap];
                var b;
                try {
                    b = a.ownerSVGElement
                } catch (c) {}
                this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
                var d = this.id = S(this);
                if (this.anims = {}, this._ = {
                        transform: []
                    }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1,
                        symbol: 1
                    })
                    for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
            }

            function t(a) {
                this.node = a
            }

            function u(a, b) {
                var c = d(a);
                b.appendChild(c);
                var e = w(c);
                return e
            }

            function v(a, b) {
                var c, e, f, g = v.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in V) return V[a.snap];
                    var h = a.ownerDocument;
                    c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var i in g) g[z](i) && (c[i] = g[i]);
                    c.paper = c.root = c
                } else c = u("svg", y.doc.body), d(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: U
                });
                return c
            }

            function w(a) {
                return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
            }

            function x(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = {
                            type: a[c].type,
                            attr: a[c].attr()
                        },
                        f = a[c].children();
                    b.push(e), f.length && x(f, e.childNodes = [])
                }
            }
            c.version = "0.3.0", c.toString = function() {
                return "Snap v" + this.version
            }, c._ = {};
            var y = {
                win: a.window,
                doc: a.window.document
            };
            c._.glob = y; {
                var z = "hasOwnProperty",
                    A = String,
                    B = parseFloat,
                    C = parseInt,
                    D = Math,
                    E = D.max,
                    F = D.min,
                    G = D.abs,
                    H = (D.pow, D.PI),
                    I = (D.round, ""),
                    J = Object.prototype.toString,
                    K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    M = {
                        hs: 1,
                        rg: 1
                    },
                    N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
                    Q = 0,
                    R = "S" + (+new Date).toString(36),
                    S = function(a) {
                        return (a && a.type ? a.type : I) + R + (Q++).toString(36)
                    },
                    T = "http://www.w3.org/1999/xlink",
                    U = "http://www.w3.org/2000/svg",
                    V = {};
                c.url = function(a) {
                    return "url('#" + a + "')"
                }
            }
            c._.$ = d, c._.id = S, c.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) {
                        var e = d;
                        return c.replace(b, function(a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function(b, d) {
                    return A(b).replace(a, function(a, b) {
                        return c(a, b, d)
                    })
                }
            }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function(a) {
                return D.sin(c.rad(a))
            }, c.tan = function(a) {
                return D.tan(c.rad(a))
            }, c.cos = function(a) {
                return D.cos(c.rad(a))
            }, c.asin = function(a) {
                return c.deg(D.asin(a))
            }, c.acos = function(a) {
                return c.deg(D.acos(a))
            }, c.atan = function(a) {
                return c.deg(D.atan(a))
            }, c.atan2 = function(a) {
                return c.deg(D.atan2(a))
            }, c.angle = j, c.len = function(a, b, d, e) {
                return Math.sqrt(c.len2(a, b, d, e))
            }, c.len2 = function(a, b, c, d) {
                return (a - c) * (a - c) + (b - d) * (b - d)
            }, c.closestPoint = function(a, b, c) {
                function d(a) {
                    var d = a.x - b,
                        e = a.y - c;
                    return d * d + e * e
                }
                for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
                for (k *= .5; k > .5;) {
                    var n, o, p, q, r, s;
                    (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
                }
                return e = {
                    x: e.x,
                    y: e.y,
                    length: f,
                    distance: Math.sqrt(l)
                }
            }, c.is = e, c.snapTo = function(a, b, c) {
                if (c = e(c, "finite") ? c : 10, e(a, "array")) {
                    for (var d = a.length; d--;)
                        if (G(a[d] - b) <= c) return a[d]
                } else {
                    a = +a;
                    var f = b % a;
                    if (c > f) return b - f;
                    if (f > a - c) return b - f + a
                }
                return b
            }, c.getRGB = i(function(a) {
                if (!a || (a = A(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: Z
                };
                if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                };
                var b, d, f, g, h, i, j = a.match(K);
                return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "Â°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "Â°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
                    r: b,
                    g: d,
                    b: f,
                    toString: Z
                }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: Z
                }
            }, c), c.hsb = i(function(a, b, d) {
                return c.hsb2rgb(a, b, d).hex
            }), c.hsl = i(function(a, b, d) {
                return c.hsl2rgb(a, b, d).hex
            }), c.rgb = i(function(a, b, c, d) {
                if (e(d, "finite")) {
                    var f = D.round;
                    return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var W = function(a) {
                    var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
                        c = "rgb(255, 0, 0)";
                    return (W = i(function(a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
                        return d == c ? null : d
                    }))(a)
                },
                X = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                Y = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                Z = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                $ = function(a, b, d) {
                    if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
                        var f = c.getRGB(a);
                        a = f.r, b = f.g, d = f.b
                    }
                    return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
                },
                _ = function(a, b, d, f) {
                    a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
                    var g = {
                        r: a,
                        g: b,
                        b: d,
                        opacity: e(f, "finite") ? f : 1,
                        hex: c.rgb(a, b, d),
                        toString: Z
                    };
                    return e(f, "finite") && (g.opacity = f), g
                };
            c.color = function(a) {
                var b;
                return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
            }, c.hsb2rgb = function(a, b, c, d) {
                e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
                var f, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
            }, c.hsl2rgb = function(a, b, c, d) {
                e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var f, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
            }, c.rgb2hsb = function(a, b, c) {
                c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: X
                }
            }, c.rgb2hsl = function(a, b, c) {
                c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: Y
                }
            }, c.parsePathString = function(a) {
                if (!a) return null;
                var b = c.path(a);
                if (b.arr) return c.path.clone(b.arr);
                var d = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    f = [];
                return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function(a, b, c) {
                    var e = [],
                        g = b.toLowerCase();
                    if (c.replace(P, function(a, b) {
                            b && e.push(+b)
                        }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
                    else
                        for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
                }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
            };
            var ab = c.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function(a, c, d) {
                    {
                        var e = [];
                        c.toLowerCase()
                    }
                    d.replace(P, function(a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = c.path.toString, b
            };
            c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
            y.doc.contains || y.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function(a) {
                return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
            }, c.selectAll = function(a) {
                for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
                return d
            }, setInterval(function() {
                for (var a in V)
                    if (V[z](a)) {
                        var b = V[a],
                            c = b.node;
                        ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
                    }
            }, 1e4), s.prototype.attr = function(a, c) {
                var d = this,
                    f = d.node;
                if (!a) {
                    if (1 != f.nodeType) return {
                        text: f.nodeValue
                    };
                    for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
                    return h
                }
                if (e(a, "string")) {
                    if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                    var k = {};
                    k[a] = c, a = k
                }
                for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
                return d
            }, c.parse = function(a) {
                var b = y.doc.createDocumentFragment(),
                    c = !0,
                    d = y.doc.createElement("div");
                if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                    if (c) b = a;
                    else
                        for (; a.firstChild;) b.appendChild(a.firstChild);
                return new t(b)
            }, c.fragment = function() {
                for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
                    var f = a[d];
                    f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
                }
                return new t(b)
            }, c._.make = u, c._.wrap = w, v.prototype.el = function(a, b) {
                var c = u(a, this.node);
                return b && c.attr(b), c
            }, s.prototype.children = function() {
                for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
                return a
            }, s.prototype.toJSON = function() {
                var a = [];
                return x([this], a), a[0]
            }, b.on("snap.util.getattr", function() {
                var a = b.nt();
                a = a.substring(a.lastIndexOf(".") + 1);
                var c = a.replace(/[A-Z]/g, function(a) {
                    return "-" + a.toLowerCase()
                });
                return bb[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
            });
            var bb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function(a) {
                    var c = b.nt(),
                        e = {};
                    c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
                    var f = c.replace(/-(\w)/gi, function(a, b) {
                            return b.toUpperCase()
                        }),
                        g = c.replace(/[A-Z]/g, function(a) {
                            return "-" + a.toLowerCase()
                        });
                    bb[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
                }),
                function() {}(v.prototype), c.ajax = function(a, c, d, f) {
                    var g = new XMLHttpRequest,
                        h = S();
                    if (g) {
                        if (e(c, "function")) f = d, d = c, c = null;
                        else if (e(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                            4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
                        }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, c.load = function(a, b, d) {
                    c.ajax(a, function(a) {
                        var e = c.parse(a.responseText);
                        d ? b.call(d, e) : b(e)
                    })
                };
            var cb = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return c.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, y.doc.elementFromPoint(a, b));
                if (y.win.opera && "svg" == d.tagName) {
                    var e = cb(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? w(d) : null
            }, c.plugin = function(a) {
                a(c, s, v, y, t)
            }, y.win.Snap = c, c
        }(a || this);
    return d.plugin(function(d, e, f, g, h) {
        function i(a, b) {
            if (null == b) {
                var c = !0;
                if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                b = d._.svgTransform2string(b)
            } else b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || E) : d._.svgTransform2string(b), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), a._.transform = b;
            var e = d._.transform2matrix(b, a.getBBox(1));
            return c ? e : void(a.matrix = e)
        }

        function j(a) {
            function b(a, b) {
                var c = q(a.node, b);
                c = c && c.match(f), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (h[c] = (h[c] || []).concat(function(c) {
                    var d = {};
                    d[b] = URL(c), q(a.node, d)
                })))
            }

            function c(a) {
                var b = q(a.node, "xlink:href");
                b && "#" == b.charAt() && (b = b.substring(1), b && (h[b] = (h[b] || []).concat(function(b) {
                    a.attr("xlink:href", "#" + b)
                })))
            }
            for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; j > i; i++) {
                d = e[i], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                var k = q(d.node, "id");
                k && (q(d.node, {
                    id: d.id
                }), g.push({
                    old: k,
                    id: d.id
                }))
            }
            for (i = 0, j = g.length; j > i; i++) {
                var l = h[g[i].old];
                if (l)
                    for (var m = 0, n = l.length; n > m; m++) l[m](g[i].id)
            }
        }

        function k(a, b, c) {
            return function(d) {
                var e = d.slice(a, b);
                return 1 == e.length && (e = e[0]), c ? c(e) : e
            }
        }

        function l(a) {
            return function() {
                var b = a ? "<" + this.type : "",
                    c = this.node.attributes,
                    d = this.node.childNodes;
                if (a)
                    for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                if (d.length) {
                    for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += u(d[e]).toString());
                    a && (b += "</" + this.type + ">")
                } else a && (b += "/>");
                return b
            }
        }
        var m = e.prototype,
            n = d.is,
            o = String,
            p = d._unit2px,
            q = d._.$,
            r = d._.make,
            s = d._.getSomeDefs,
            t = "hasOwnProperty",
            u = d._.wrap;
        m.getBBox = function(a) {
            if (!d.Matrix || !d.path) return this.node.getBBox();
            var b = this,
                c = new d.Matrix;
            if (b.removed) return d._.box();
            for (;
                "use" == b.type;)
                if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                else {
                    var e = b.attr("xlink:href");
                    b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                } var f = b._,
                g = d.path.get[b.type] || d.path.get.deflt;
            try {
                return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
            } catch (h) {
                return d._.box()
            }
        };
        var v = function() {
            return this.string
        };
        m.transform = function(a) {
            var b = this._;
            if (null == a) {
                for (var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix, k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
                    "svg" != e.type && (e = e.parent());) h.push(i(e));
                for (c = h.length; c--;) j.add(h[c]);
                return {
                    string: l,
                    globalMatrix: f,
                    totalMatrix: j,
                    localMatrix: g,
                    diffMatrix: f.clone().add(g.invert()),
                    global: f.toTransformString(),
                    total: j.toTransformString(),
                    local: k,
                    toString: v
                }
            }
            return a instanceof d.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : i(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? q(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? q(this.node, {
                patternTransform: this.matrix
            }) : q(this.node, {
                transform: this.matrix
            })), this
        }, m.parent = function() {
            return u(this.node.parentNode)
        }, m.append = m.add = function(a) {
            if (a) {
                if ("set" == a.type) {
                    var b = this;
                    return a.forEach(function(a) {
                        b.add(a)
                    }), this
                }
                a = u(a), this.node.appendChild(a.node), a.paper = this.paper
            }
            return this
        }, m.appendTo = function(a) {
            return a && (a = u(a), a.append(this)), this
        }, m.prepend = function(a) {
            if (a) {
                if ("set" == a.type) {
                    var b, c = this;
                    return a.forEach(function(a) {
                        b ? b.after(a) : c.prepend(a), b = a
                    }), this
                }
                a = u(a);
                var d = a.parent();
                this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
            }
            return this
        }, m.prependTo = function(a) {
            return a = u(a), a.prepend(this), this
        }, m.before = function(a) {
            if ("set" == a.type) {
                var b = this;
                return a.forEach(function(a) {
                    var c = a.parent();
                    b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                }), this.parent().add(), this
            }
            a = u(a);
            var c = a.parent();
            return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
        }, m.after = function(a) {
            a = u(a);
            var b = a.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
        }, m.insertBefore = function(a) {
            a = u(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, m.insertAfter = function(a) {
            a = u(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, m.remove = function() {
            var a = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
        }, m.select = function(a) {
            return a = o(a).replace(/([^\\]):/g, "$1\\:"), u(this.node.querySelector(a))
        }, m.selectAll = function(a) {
            for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
            return c
        }, m.asPX = function(a, b) {
            return null == b && (b = this.attr(a)), +p(this, a, b)
        }, m.use = function() {
            var a, b = this.node.id;
            return b || (b = this.id, q(this.node, {
                id: b
            })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode), q(a.node, {
                "xlink:href": "#" + b
            }), a.original = this, a
        }, m.clone = function() {
            var a = u(this.node.cloneNode(!0));
            return q(a.node, "id") && q(a.node, {
                id: a.id
            }), j(a), a.insertAfter(this), a
        }, m.toDefs = function() {
            var a = s(this);
            return a.appendChild(this.node), this
        }, m.pattern = m.toPattern = function(a, b, c, d) {
            var e = r("pattern", s(this));
            return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), q(e.node, {
                x: a,
                y: b,
                width: c,
                height: d,
                patternUnits: "userSpaceOnUse",
                id: e.id,
                viewBox: [a, b, c, d].join(" ")
            }), e.node.appendChild(this.node), e
        }, m.marker = function(a, b, c, d, e, f) {
            var g = r("marker", s(this));
            return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), q(g.node, {
                viewBox: [a, b, c, d].join(" "),
                markerWidth: c,
                markerHeight: d,
                orient: "auto",
                refX: e || 0,
                refY: f || 0,
                id: g.id
            }), g.node.appendChild(this.node), g
        };
        var w = function(a, b, d, e) {
            "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
        };
        d._.Animation = w, d.animation = function(a, b, c, d) {
            return new w(a, b, c, d)
        }, m.inAnim = function() {
            var a = this,
                b = [];
            for (var c in a.anims) a.anims[t](c) && ! function(a) {
                b.push({
                    anim: new w(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function(b) {
                        return a.status(b)
                    },
                    stop: function() {
                        a.stop()
                    }
                })
            }(a.anims[c]);
            return b
        }, d.animate = function(a, d, e, f, g, h) {
            "function" != typeof g || g.length || (h = g, g = c.linear);
            var i = c.time(),
                j = c(a, d, i, i + f, c.time, e, g);
            return h && b.once("mina.finish." + j.id, h), j
        }, m.stop = function() {
            for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
            return this
        }, m.animate = function(a, d, e, f) {
            "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof w && (f = a.callback, e = a.easing, d = e.dur, a = a.attr);
            var g, h, i, j, l = [],
                m = [],
                p = {},
                q = this;
            for (var r in a)
                if (a[t](r)) {
                    q.equal ? (j = q.equal(r, o(a[r])), g = j.from, h = j.to, i = j.f) : (g = +q.attr(r), h = +a[r]);
                    var s = n(g, "array") ? g.length : 1;
                    p[r] = k(l.length, l.length + s, i), l = l.concat(g), m = m.concat(h)
                } var u = c.time(),
                v = c(l, m, u, u + d, c.time, function(a) {
                    var b = {};
                    for (var c in p) p[t](c) && (b[c] = p[c](a));
                    q.attr(b)
                }, e);
            return q.anims[v.id] = v, v._attrs = a, v._callback = f, b("snap.animcreated." + q.id, v), b.once("mina.finish." + v.id, function() {
                delete q.anims[v.id], f && f.call(q)
            }), b.once("mina.stop." + v.id, function() {
                delete q.anims[v.id]
            }), q
        };
        var x = {};
        m.data = function(a, c) {
            var e = x[this.id] = x[this.id] || {};
            if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
            if (1 == arguments.length) {
                if (d.is(a, "object")) {
                    for (var f in a) a[t](f) && this.data(f, a[f]);
                    return this
                }
                return b("snap.data.get." + this.id, this, e[a], a), e[a]
            }
            return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
        }, m.removeData = function(a) {
            return null == a ? x[this.id] = {} : x[this.id] && delete x[this.id][a], this
        }, m.outerSVG = m.toString = l(1), m.innerSVG = l(), m.toDataURL = function() {
            if (a && a.btoa) {
                var b = this.getBBox(),
                    c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                        x: +b.x.toFixed(3),
                        y: +b.y.toFixed(3),
                        width: +b.width.toFixed(3),
                        height: +b.height.toFixed(3),
                        contents: this.outerSVG()
                    });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
            }
        }, h.prototype.select = m.select, h.prototype.selectAll = m.selectAll
    }), d.plugin(function(a) {
        function b(a, b, d, e, f, g) {
            return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var c = Object.prototype.toString,
            d = String,
            e = Math,
            f = "";
        ! function(c) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function h(a) {
                var b = e.sqrt(g(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            c.add = function(a, c, d, e, f, g) {
                var h, i, j, k, l = [
                        [],
                        [],
                        []
                    ],
                    m = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    n = [
                        [a, d, f],
                        [c, e, g],
                        [0, 0, 1]
                    ];
                for (a && a instanceof b && (n = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), h = 0; 3 > h; h++)
                    for (i = 0; 3 > i; i++) {
                        for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                        l[h][i] = k
                    }
                return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
            }, c.invert = function() {
                var a = this,
                    c = a.a * a.d - a.b * a.c;
                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
            }, c.clone = function() {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
            }, c.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }, c.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
            }, c.rotate = function(b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var f = +e.cos(b).toFixed(9),
                    g = +e.sin(b).toFixed(9);
                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, c.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, c.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, c.get = function(a) {
                return +this[d.fromCharCode(97 + a)].toFixed(4)
            }, c.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, c.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, c.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, c.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var c = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var d = -c[0][1],
                    f = c[1][1];
                return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, c.toTransformString = function(a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
            }
        }(b.prototype), a.Matrix = b, a.matrix = function(a, c, d, e, f, g) {
            return new b(a, c, d, e, f, g)
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
            return function(e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || p(e.node, {
                            id: e.id
                        });
                        var g = q(e.node.id)
                    } else g = e.attr(d);
                else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {
                        id: h.id
                    }), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
            l = a._.wrap,
            m = a.is,
            n = a._.getSomeDefs,
            o = /^url\(#?([^)]+)\)$/,
            p = a._.$,
            q = a.url,
            r = String,
            s = a._.separator,
            t = "";
        b.on("snap.util.attr.mask", function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                    else d = k("mask", n(this)), d.node.appendChild(a.node);
                    !d.node.id && p(d.node, {
                        id: d.id
                    }), p(this.node, {
                        mask: q(d.id)
                    })
                }
            }),
            function(a) {
                b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
            }(function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), "clipPath" == a.type) var d = a;
                    else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                        id: d.id
                    });
                    p(this.node, {
                        "clip-path": q(d.node.id || d.id)
                    })
                }
            }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
                a = r(a);
                var b = a.match(u);
                if (!b) return null;
                var c = b[1],
                    d = b[2],
                    e = b[3];
                return d = d.split(/\s*,\s*/).map(function(a) {
                    return +a == a ? +a : a
                }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                    a = a.split(":");
                    var b = {
                        color: a[0]
                    };
                    return a[1] && (b.offset = parseFloat(a[1])), b
                }), {
                    type: c,
                    params: d,
                    stops: e
                }
            }), b.on("snap.util.attr.d", function(c) {
                b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                    d: c
                })
            })(-1), b.on("snap.util.attr.#text", function(a) {
                b.stop(), a = r(a);
                for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function(a) {
                b.stop(), this.attr({
                    d: a
                })
            })(-1), b.on("snap.util.attr.class", function(a) {
                b.stop(), this.node.className.baseVal = a
            })(-1), b.on("snap.util.attr.viewBox", function(a) {
                var c;
                c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                    viewBox: c
                }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function(a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function(a) {
                "rect" == this.type && (b.stop(), p(this.node, {
                    rx: a,
                    ry: a
                }))
            })(-1), b.on("snap.util.attr.textpath", function(a) {
                if (b.stop(), "text" == this.type) {
                    var d, e, f;
                    if (!a && this.textPath) {
                        for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                        return e.remove(), void delete this.textPath
                    }
                    if (m(a, "string")) {
                        var g = n(this),
                            h = l(g.parentNode).path(a);
                        g.appendChild(h.node), d = h.id, h.attr({
                            id: d
                        })
                    } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                        id: d
                    })));
                    if (d)
                        if (e = this.textPath, f = this.node, e) e.attr({
                            "xlink:href": "#" + d
                        });
                        else {
                            for (e = p("textPath", {
                                    "xlink:href": "#" + d
                                }); f.firstChild;) e.appendChild(f.firstChild);
                            f.appendChild(e), this.textPath = l(e)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function(a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function(a) {
                            var b = p("tspan");
                            if (m(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(e.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
                }
                b.stop()
            })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
                return b.stop(), this.transform()
            })(-1), b.on("snap.util.getattr.textpath", function() {
                return b.stop(), this.textPath
            })(-1),
            function() {
                function c(c) {
                    return function() {
                        b.stop();
                        var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                        return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                    }
                }

                function d(a) {
                    return function(c) {
                        b.stop();
                        var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                        if ("" == c || !c) return void(this.node.style[d] = "none");
                        if ("marker" == c.type) {
                            var e = c.node.id;
                            return e || p(c.node, {
                                id: c.id
                            }), void(this.node.style[d] = q(e))
                        }
                    }
                }
                b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
            }(), b.on("snap.util.getattr.r", function() {
                return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
            })(-1), b.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    b.stop();
                    var a = i(this.node);
                    return 1 == a.length ? a[0] : a
                }
            })(-1), b.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), b.on("snap.util.getattr.viewBox", function() {
                b.stop();
                var c = p(this.node, "viewBox");
                return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
            })(-1), b.on("snap.util.getattr.points", function() {
                var a = p(this.node, "points");
                return b.stop(), a ? a.split(s) : void 0
            })(-1), b.on("snap.util.getattr.path", function() {
                var a = p(this.node, "d");
                return b.stop(), a
            })(-1), b.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function(a, b) {
        var c = /\S+/g,
            d = String,
            e = b.prototype;
        e.addClass = function(a) {
            var b, e, f, g, h = d(a || "").match(c) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(c) || [];
            if (h.length) {
                for (b = 0; f = h[b++];) e = k.indexOf(f), ~e || k.push(f);
                g = k.join(" "), j != g && (i.className.baseVal = g)
            }
            return this
        }, e.removeClass = function(a) {
            var b, e, f, g, h = d(a || "").match(c) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(c) || [];
            if (k.length) {
                for (b = 0; f = h[b++];) e = k.indexOf(f), ~e && k.splice(e, 1);
                g = k.join(" "), j != g && (i.className.baseVal = g)
            }
            return this
        }, e.hasClass = function(a) {
            var b = this.node,
                d = b.className.baseVal,
                e = d.match(c) || [];
            return !!~e.indexOf(a)
        }, e.toggleClass = function(a, b) {
            if (null != b) return b ? this.addClass(a) : this.removeClass(a);
            var d, e, f, g, h = (a || "").match(c) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(c) || [];
            for (d = 0; f = h[d++];) e = k.indexOf(f), ~e ? k.splice(e, 1) : k.push(f);
            return g = k.join(" "), j != g && (i.className.baseVal = g), this
        }
    }), d.plugin(function() {
        function a(a) {
            return a
        }

        function c(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var d = {
                "+": function(a, b) {
                    return a + b
                },
                "-": function(a, b) {
                    return a - b
                },
                "/": function(a, b) {
                    return a / b
                },
                "*": function(a, b) {
                    return a * b
                }
            },
            e = String,
            f = /[a-z]+$/i,
            g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
            var c = e(a).match(g);
            if (c) {
                var h = b.nt(),
                    i = h.substring(h.lastIndexOf(".") + 1),
                    j = this.attr(i),
                    k = {};
                b.stop();
                var l = c[3] || "",
                    m = j.match(f),
                    n = d[c[1]];
                if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                k[i] = a, this.attr(k)
            }
        })(-10), b.on("snap.util.equal", function(h, i) {
            var j = e(this.attr(h) || ""),
                k = e(i).match(g);
            if (k) {
                b.stop();
                var l = k[3] || "",
                    m = j.match(f),
                    n = d[k[1]];
                return m && m == l ? {
                    from: parseFloat(j),
                    to: n(parseFloat(j), +k[2]),
                    f: c(m)
                } : (j = this.asPX(h), {
                    from: j,
                    to: n(j, this.asPX(h, k[2] + l)),
                    f: a
                })
            }
        })(-10)
    }), d.plugin(function(c, d, e, f) {
        var g = e.prototype,
            h = c.is;
        g.rect = function(a, b, c, d, e, f) {
            var g;
            return null == f && (f = e), h(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
        }, g.circle = function(a, b, c) {
            var d;
            return h(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var i = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(b, c) {
                var d = f.doc.createElement("img"),
                    e = f.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, e.removeChild(d)
                }, d.onerror = a, e.appendChild(d), d.src = b
            }
        }();
        g.image = function(a, b, d, e, f) {
                var g = this.el("image");
                if (h(a, "object") && "src" in a) g.attr(a);
                else if (null != a) {
                    var j = {
                        "xlink:href": a,
                        preserveAspectRatio: "none"
                    };
                    null != b && null != d && (j.x = b, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : i(a, function() {
                        c._.$(g.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), c._.$(g.node, j)
                }
                return g
            }, g.ellipse = function(a, b, c, d) {
                var e;
                return h(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                    cx: a,
                    cy: b,
                    rx: c,
                    ry: d
                }), this.el("ellipse", e)
            }, g.path = function(a) {
                var b;
                return h(a, "object") && !h(a, "array") ? b = a : a && (b = {
                    d: a
                }), this.el("path", b)
            }, g.group = g.g = function(a) {
                var b = this.el("g");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, g.svg = function(a, b, c, d, e, f, g, i) {
                var j = {};
                return h(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != i && (j.viewBox = [e, f, g, i])), this.el("svg", j)
            }, g.mask = function(a) {
                var b = this.el("mask");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, g.ptrn = function(a, b, c, d, e, f, g, i) {
                if (h(a, "object")) var j = a;
                else j = {
                    patternUnits: "userSpaceOnUse"
                }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), j.viewBox = null != e && null != f && null != g && null != i ? [e, f, g, i] : [a || 0, b || 0, c || 0, d || 0];
                return this.el("pattern", j)
            }, g.use = function(a) {
                return null != a ? (a instanceof d && (a.attr("id") || a.attr({
                    id: c._.id(a)
                }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
                    "xlink:href": "#" + a
                })) : d.prototype.use.call(this)
            }, g.symbol = function(a, b, c, d) {
                var e = {};
                return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
            }, g.text = function(a, b, c) {
                var d = {};
                return h(a, "object") ? d = a : null != a && (d = {
                    x: a,
                    y: b,
                    text: c || ""
                }), this.el("text", d)
            }, g.line = function(a, b, c, d) {
                var e = {};
                return h(a, "object") ? e = a : null != a && (e = {
                    x1: a,
                    x2: c,
                    y1: b,
                    y2: d
                }), this.el("line", e)
            }, g.polyline = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polyline", b)
            }, g.polygon = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polygon", b)
            },
            function() {
                function d() {
                    return this.selectAll("stop")
                }

                function e(a, b) {
                    var d = k("stop"),
                        e = {
                            offset: +b + "%"
                        };
                    return a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this
                }

                function f() {
                    if ("linearGradient" == this.type) {
                        var a = k(this.node, "x1") || 0,
                            b = k(this.node, "x2") || 1,
                            d = k(this.node, "y1") || 0,
                            e = k(this.node, "y2") || 0;
                        return c._.box(a, d, math.abs(b - a), math.abs(e - d))
                    }
                    var f = this.node.cx || .5,
                        g = this.node.cy || .5,
                        h = this.node.r || 0;
                    return c._.box(f - h, g - h, 2 * h, 2 * h)
                }

                function h(a, c) {
                    function d(a, b) {
                        for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                        m = a, l = b
                    }
                    var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                    if (!f) return null;
                    f.params.unshift(a), e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params), f.type != f.type.toLowerCase() && k(e.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var g = f.stops,
                        h = g.length,
                        l = 0,
                        m = 0;
                    h--;
                    for (var n = 0; h > n; n++) "offset" in g[n] && d(n, g[n].offset);
                    for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; h >= n; n++) {
                        var o = g[n];
                        e.addStop(o.color, o.offset)
                    }
                    return e
                }

                function i(a, b, g, h, i) {
                    var j = c._.make("linearGradient", a);
                    return j.stops = d, j.addStop = e, j.getBBox = f, null != b && k(j.node, {
                        x1: b,
                        y1: g,
                        x2: h,
                        y2: i
                    }), j
                }

                function j(a, b, g, h, i, j) {
                    var l = c._.make("radialGradient", a);
                    return l.stops = d, l.addStop = e, l.getBBox = f, null != b && k(l.node, {
                        cx: b,
                        cy: g,
                        r: h
                    }), null != i && null != j && k(l.node, {
                        fx: i,
                        fy: j
                    }), l
                }
                var k = c._.$;
                g.gradient = function(a) {
                    return h(this.defs, a)
                }, g.gradientLinear = function(a, b, c, d) {
                    return i(this.defs, a, b, c, d)
                }, g.gradientRadial = function(a, b, c, d, e) {
                    return j(this.defs, a, b, c, d, e)
                }, g.toString = function() {
                    var a, b = this.node.ownerDocument,
                        d = b.createDocumentFragment(),
                        e = b.createElement("div"),
                        f = this.node.cloneNode(!0);
                    return d.appendChild(e), e.appendChild(f), c._.$(f, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), a = e.innerHTML, d.removeChild(d.firstChild), a
                }, g.toDataURL = function() {
                    return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                }, g.clear = function() {
                    for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : g.clear.call({
                        node: b
                    }), b = a
                }
            }()
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = R(j, 3),
                l = R(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = S(w.x - v.x) < .001 ? "y" : "x",
                        A = S(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2 == 1
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                } var m = P.apply(0, h),
                n = P.apply(0, i),
                o = Q.apply(0, h),
                p = Q.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [
                ["M", +a + +f, b],
                ["l", c - 2 * f, 0],
                ["a", f, f, 0, 0, 1, f, f],
                ["l", 0, d - 2 * f],
                ["a", f, f, 0, 0, 1, -f, f],
                ["l", 2 * f - c, 0],
                ["a", f, f, 0, 0, 1, -f, -f],
                ["l", 0, 2 * f - d],
                ["a", f, f, 0, 0, 1, f, -f],
                ["z"]
            ];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g),
                i = a + c * Math.cos(-f * g),
                j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(f - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(G(s, p));
                            break;
                        case "O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case "U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180,
                n = O / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)),
                    z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                J = N.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                P = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                    if (S(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                },
                max: {
                    x: Q.apply(0, r[0]),
                    y: Q.apply(0, r[1])
                }
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                    }
                }, l = function(a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q],
                    t = g && g[q],
                    u = s.length,
                    v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var H = b.prototype,
            I = a.is,
            J = a._.clone,
            K = "hasOwnProperty",
            L = /,?([a-z]),?/gi,
            M = parseFloat,
            N = Math,
            O = N.PI,
            P = N.min,
            Q = N.max,
            R = N.pow,
            S = N.abs,
            T = h(1),
            U = h(),
            V = h(0, 1),
            W = a._unit2px,
            X = {
                path: function(a) {
                    return a.attr("path")
                },
                circle: function(a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                },
                ellipse: function(a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                },
                line: function(a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function(a) {
                    return "M" + a.attr("points")
                },
                polygon: function(a) {
                    return "M" + a.attr("points") + "z"
                },
                deflt: function(a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function(a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.closest = function(b, c, e, f) {
            for (var g = 100, h = d(b - g / 2, c - g / 2, g, g), i = [], j = e[0].hasOwnProperty("x") ? function(a) {
                    return {
                        x: e[a].x,
                        y: e[a].y
                    }
                } : function(a) {
                    return {
                        x: e[a],
                        y: f[a]
                    }
                }, l = 0; 1e6 >= g && !l;) {
                for (var m = 0, n = e.length; n > m; m++) {
                    var o = j(m);
                    if (k(h, o.x, o.y)) {
                        l++, i.push(o);
                        break
                    }
                }
                l || (g *= 2, h = d(b - g / 2, c - g / 2, g, g))
            }
            if (1e6 != g) {
                var p, q = 1 / 0;
                for (m = 0, n = i.length; n > m; m++) {
                    var r = a.len(b, c, i[m].x, i[m].y);
                    q > r && (q = r, i[m].len = r, p = i[m])
                }
                return p
            }
        }, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function(a) {
        var d = Math.max,
            e = Math.min,
            f = function(a) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            g = f.prototype;
        g.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, g.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, g.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, g.animate = function(d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function() {
                    j ? this.b = j : j = this.b
                },
                l = 0,
                m = g && function() {
                    l++ == this.length && g.call(this)
                };
            return this.forEach(function(a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
            })
        }, g.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, g.bind = function(a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b;
            else {
                var e = c || a;
                this.bindings[a] = function(a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, g.attr = function(a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, g.clear = function() {
            for (; this.length;) this.pop()
        }, g.splice = function(a, b) {
            a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
            var c, g = [],
                h = [],
                i = [];
            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
            for (c = 0; b > c; c++) h.push(this[a + c]);
            for (; c < this.length - a; c++) g.push(this[a + c]);
            var j = i.length;
            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
            return new f(h)
        }, g.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, g.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, g.getBBox = function() {
            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
                } return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                x: a,
                y: b,
                x2: c,
                y2: f,
                width: c - a,
                height: f - b,
                cx: a + (c - a) / 2,
                cy: b + (f - b) / 2
            }
        }, g.clone = function(a) {
            a = new f;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, g.toString = function() {
            return "Snapâ€˜s set"
        }, g.type = "set", a.Set = f, a.set = function() {
            var a = new f;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function(a, c) {
        function d(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function e(b, c, e) {
            c = p(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            for (var f, g, h, i, l = Math.max(b.length, c.length), m = [], n = [], o = 0; l > o; o++) {
                if (h = b[o] || d(c[o]), i = c[o] || d(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
                    b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), m = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], n = [
                        ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                    ];
                    break
                }
                for (m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length); g > f; f++) f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f])
            }
            return {
                from: k(m),
                to: k(n),
                f: j(m)
            }
        }

        function f(a) {
            return a
        }

        function g(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }

        function h(a) {
            return a.join(" ")
        }

        function i(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function j(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function k(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }

        function l(a) {
            return isFinite(parseFloat(a))
        }

        function m(b, c) {
            return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
        }
        var n = {},
            o = /[a-z]+$/i,
            p = String;
        n.stroke = n.fill = "colour", c.prototype.equal = function(a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
            var d, q, r = p(this.attr(b) || ""),
                s = this;
            if (l(r) && l(c)) return {
                from: parseFloat(r),
                to: parseFloat(c),
                f: f
            };
            if ("colour" == n[b]) return d = a.color(r), q = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [q.r, q.g, q.b, q.opacity],
                f: i
            };
            if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), q = c.split(" ").map(Number), {
                from: d,
                to: q,
                f: h
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(r, c, function() {
                return s.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(r, c), {
                from: k(d[0]),
                to: k(d[1]),
                f: j(d[0])
            };
            if ("points" == b) return d = p(r).split(a._.separator), q = p(c).split(a._.separator), {
                from: d,
                to: q,
                f: function(a) {
                    return a
                }
            };
            var t = r.match(o),
                u = p(c).match(o);
            return t && m(t, u) ? {
                from: parseFloat(r),
                to: parseFloat(c),
                f: g(t)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: f
            }
        })
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = (function(a, b) {
                var c = "y" == a ? "scrollTop" : "scrollLeft",
                    d = b && b.node ? b.node.ownerDocument : e.doc;
                return d[c in d.documentElement ? "documentElement" : "body"][c]
            }), l = function() {
                return this.originalEvent.preventDefault()
            }, m = function() {
                return this.originalEvent.stopPropagation()
            }, n = function(a, b, c, d) {
                var e = h && j[b] ? j[b] : b,
                    f = function(e) {
                        var f = k("y", d),
                            i = k("x", d);
                        if (h && j[g](b))
                            for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                                if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                                    var p = e;
                                    e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                                    break
                                } var q = e.clientX + i,
                            r = e.clientY + f;
                        return c.call(d, e, q, r)
                    };
                return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                    function() {
                        return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                    }
            }, o = [], p = function(a) {
                for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
                    if (c = o[i], h) {
                        for (var j, l = a.touches && a.touches.length; l--;)
                            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                break
                            }
                    } else a.preventDefault(); {
                        var m = c.el.node;
                        m.nextSibling, m.parentNode, m.style.display
                    }
                    d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                }
            }, q = function(c) {
                a.unmousemove(p).unmouseup(q);
                for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
                o = []
            }, r = i.length; r--;) ! function(b) {
            a[b] = f[b] = function(c, d) {
                if (a.is(c, "function")) this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: n(this.node || document, b, c, d || this)
                });
                else
                    for (var e = 0, f = this.events.length; f > e; e++)
                        if (this.events[e].name == b) try {
                            this.events[e].f.call(this)
                        } catch (g) {}
                return this
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[r]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var s = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, l) {
                (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
                    el: k,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
            }

            function j(a, c, d) {
                b("snap.draginit." + k.id, k, a, c, d)
            }
            var k = this;
            if (!arguments.length) {
                var l;
                return k.drag(function(a, b) {
                    this.attr({
                        transform: l + (l ? "T" : "t") + [a, b]
                    })
                }, function() {
                    l = this.transform().local
                })
            }
            return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
                el: k,
                start: i,
                init: j
            }), k.mousedown(j), k
        }, f.undrag = function() {
            for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
            return !s.length && a.unmousemove(p).unmouseup(q), this
        }
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {
                    id: d.id
                }), e = d.id), h(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function() {
            return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function() {
            return this()
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function() {
            return this()
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function() {
            return this()
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function() {
            return this()
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function() {
            return this()
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function() {
            return this()
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function() {
            return this()
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function() {
            return this()
        }
    }), d.plugin(function(a, b) {
        var c = a._.box,
            d = a.is,
            e = /^[^a-z]*([tbmlrc])/i,
            f = function() {
                return "T" + this.dx + "," + this.dy
            };
        b.prototype.getAlign = function(a, b) {
            null == b && d(a, "string") && (b = a, a = null), a = a || this.paper;
            var g = a.getBBox ? a.getBBox() : c(a),
                h = this.getBBox(),
                i = {};
            switch (b = b && b.match(e), b = b ? b[1].toLowerCase() : "c") {
                case "t":
                    i.dx = 0, i.dy = g.y - h.y;
                    break;
                case "b":
                    i.dx = 0, i.dy = g.y2 - h.y2;
                    break;
                case "m":
                    i.dx = 0, i.dy = g.cy - h.cy;
                    break;
                case "l":
                    i.dx = g.x - h.x, i.dy = 0;
                    break;
                case "r":
                    i.dx = g.x2 - h.x2, i.dy = 0;
                    break;
                default:
                    i.dx = g.cx - h.cx, i.dy = 0
            }
            return i.toString = f, i
        }, b.prototype.align = function(a, b) {
            return this.transform("..." + this.getAlign(a, b))
        }
    }), d
});
(function() {
    jQuery.fn.filterImage = function(settings) {
        settings = jQuery.extend({
            'blur': '',
            'brightness': '',
            'contrast': '',
            'grayscale': '',
            'invert': '',
            'saturate': '',
            'sepia': ''
        }, settings);
        return jQuery(this).each(function(i, v) {
            new FilterImage(jQuery(v), settings)
        })
    }

    function FilterImage(elem, settings) {
        var that = this;
        that.target = jQuery(elem);
        that.targetWidth = null;
        that.targetHeight = null;
        that.targetSrc = null;
        that.svg = null;
        that.settings = settings;
        that.target.load(function() {
            that.assessImage();
            that.applyFilters()
        }).each(function(i, v) {
            that.target.load()
        })
    }
    FilterImage.prototype.assessImage = function() {
        var that = this;
        that.targetWidth = that.target.width();
        that.targetHeight = that.target.height();
        that.targetSrc = that.target.attr("src")
    }
    FilterImage.prototype.applyFilters = function() {
        var that = this;
        var img = that.target;
        if (img.hasClass("filtered")) {
            return
        }
        var width = that.targetWidth;
        var height = that.targetHeight;
        var src = that.targetSrc;
        var svgId = new Date().getTime();
        that.svg = jQuery("<svg width=" + width + " height=" + height + "></svg>");
        that.svg.attr("id", "filtered-image-" + svgId);
        that.svg.css("max-width", "100%");
        img.after(that.svg);
        img.hide();
        var snapSvg = Snap("#filtered-image-" + svgId);
        var svgImage = snapSvg.image(src, 0, 0, width, height);
        snapSvg.attr({
            viewBox: "0,0" + "," + width + "," + height
        })
        that.resize();
        jQuery(window).resize(function() {
            that.resize()
        })
        var filters = [];
        if (!isNaN(parseInt(that.settings.blur))) {
            filters.push(Snap.filter.blur(that.settings.blur))
        }
        if (!isNaN(parseInt(that.settings.brightness))) {
            filters.push(Snap.filter.brightness(that.settings.brightness))
        }
        if (!isNaN(parseInt(that.settings.contrast))) {
            filters.push(Snap.filter.contrast(that.settings.brightness))
        }
        if (!isNaN(parseInt(that.settings.grayscale))) {
            filters.push(Snap.filter.grayscale(that.settings.grayscale))
        }
        if (!isNaN(parseInt(that.settings.invert))) {
            filters.push(Snap.filter.invert(that.settings.invert))
        }
        if (!isNaN(parseInt(that.settings.saturate))) {
            filters.push(Snap.filter.saturate(that.settings.saturate))
        }
        if (!isNaN(parseInt(that.settings.sepia))) {
            filters.push(Snap.filter.sepia(that.settings.sepia))
        }
        if (filters.length > 0) {
            var filters = snapSvg.filter(filters.join(" "));
            svgImage.attr({
                filter: filters
            });
            img.addClass("filtered")
        }
    }
    FilterImage.prototype.resize = function() {
        var that = this;
        var svgWidth = that.svg.width();
        var newHeight = (that.target.height() * svgWidth) / that.target.width();
        that.svg.attr("height", newHeight)
    }
})();
(function() {
    jQuery.fn.anchorSingleTap = function() {
        return jQuery(this).each(function(i, v) {
            new AnchorSingleTap(jQuery(v))
        })
    }

    function AnchorSingleTap(elem, settings) {
        var that = this;
        that.target = jQuery(elem);
        that.ctrlActive = !1;
        that.touchMoved = !1;
        if (!that.target.is("a")) {
            return
        }
        that.target.on("touchend", function(e) {
            e.preventDefault();
            if (!that.touchMoved) {
                that.openLink()
            } else {
                that.touchMoved = !1
            }
        });
        that.target.on("touchmove", function(e) {
            that.touchMoved = !0
        });
        jQuery(document).bind("keydown", function(e) {
            that.setCtrlActive(e)
        });
        jQuery(document).bind("keyup", function(e) {
            that.setCtrlInactive(e)
        })
    }
    AnchorSingleTap.prototype.setCtrlActive = function(e) {
        var that = this;
        if (e.which == 17) {
            that.ctrlActive = !0
        }
    }
    AnchorSingleTap.prototype.setCtrlInactive = function(e) {
        var that = this;
        if (e.which == 17) {
            that.ctrlActive = !1
        }
    }
    AnchorSingleTap.prototype.openLink = function() {
        var that = this;
        var a = that.target;
        var url = a.attr("href");
        var target = typeof a.attr("target") == 'undefined' ? '_self' : a.attr("target");
        if (that.ctrlActive) {
            target = "_blank"
        }
        window.open(url, target)
    }
})();
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                } b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                } g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
(function() {
    jQuery.fn.centerMenu = function(settings) {
        settings = jQuery.extend({
            exclude: ''
        }, settings);
        return jQuery(this).not(settings.exclude).each(function(i, v) {
            new centeredMenu(jQuery(v))
        })
    }
    var centeredMenu = function(elem) {
        var that = this;
        that.elem = elem;
        that.reposition(that);
        jQuery(window).resize(function() {
            that.reposition(that)
        })
    }
    centeredMenu.prototype.reposition = function(context) {
        var that = context;
        var linkW = that.elem.parent().width();
        var mLeft = (linkW - that.elem.width()) / 2;
        that.elem.css("margin-left", mLeft + "px")
    }
})();
(function() {
    jQuery.fn.navTabDoubleTap = function(settings) {
        settings = jQuery.extend({
            submenu: '.sub-menu'
        }, settings);
        return jQuery(this).each(function(i, v) {
            FixMenu(jQuery(v), settings)
        })
    }

    function FixMenu(elem, settings) {
        var ctrlActive = !1;

        function __construct() {
            elem.children("li").addClass("jquery-nav-tab-parent");
            elem.find("a").bind("touchstart", function(e) {
                e.stopPropagation();
                jQuery(e.currentTarget).addClass("jquery-nav-tab-touchstart");
                elem.find("a").not(jQuery(e.currentTarget).parents(".jquery-nav-tab-parent").find("a")).removeClass("jquery-nav-tab-redirect jquery-nav-tab-active jquery-nav-tab-touchstart");
                if (!jQuery(e.currentTarget).parent().children(settings.submenu).length) {
                    jQuery(e.currentTarget).addClass("jquery-nav-tab-redirect")
                }
                if (jQuery(e.currentTarget).hasClass("jquery-nav-tab-active")) {
                    jQuery(e.currentTarget).addClass("jquery-nav-tab-redirect");
                    return
                }
                jQuery(e.currentTarget).addClass("jquery-nav-tab-active")
            });
            elem.find("a").bind("mousedown", function(e) {
                if (!jQuery(e.currentTarget).hasClass("jquery-nav-tab-touchstart")) {
                    jQuery(e.currentTarget).addClass("jquery-nav-tab-redirect")
                }
            });
            elem.find("a").bind("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (jQuery(e.currentTarget).hasClass("jquery-nav-tab-redirect")) {
                    openLink(jQuery(e.currentTarget))
                }
            });
            jQuery(document).bind("keydown", setCtrlActive);
            jQuery(document).bind("keyup", setCtrlInactive);
            jQuery("body").click(function() {
                elem.find("a").removeClass("jquery-nav-tab-redirect jquery-nav-tab-active jquery-nav-tab-touchstart")
            })
        }

        function setCtrlActive(e) {
            if (e.which == 17) {
                ctrlActive = !0
            }
        }

        function setCtrlInactive(e) {
            if (e.which == 17) {
                ctrlActive = !1
            }
        }

        function openLink(a) {
            var url = a.attr("href");
            var target = typeof a.attr("target") == 'undefined' ? '_self' : a.attr("target");
            if (ctrlActive) {
                target = "_blank"
            }
            window.open(url, target)
        }
        __construct()
    }
})();
(function() {
    jQuery(document).ready(function() {
        var mobileWidth = 991;

        function isMobileView() {
            var winWidth = jQuery(window).width();
            return jQuery(window).width() <= mobileWidth
        }

       / function addFixedHeader() {
            jQuery(window).scroll(function() {
                var scroll = jQuery(window).scrollTop();
                if (!isMobileView()) {
                    if (scroll > 0) {
                        jQuery('.main-header').addClass('header-fixed')
                    } else {
                        jQuery('.main-header').removeClass('header-fixed')
                    }
                }
            })
        } 
        if (!isMobileView()) {
            addFixedHeader()
        }
        jQuery(window).resize(function() {
            if (!isMobileView()) {
                addFixedHeader()
            }
        })
        jQuery(window).load(function() {
            if (!isMobileView()) {
                addFixedHeader()
            }
        })
        jQuery(".navi").navTabDoubleTap();

// Script causes nav to be invisible for some reason
/*        function splitNav() {
            jQuery('.navi:first-of-type').addClass('navi-left');
            jQuery('.navi:last-of-type').addClass('navi-right');
            jQuery('.navi-left-col,.navi-right-col').text('');
            jQuery('.navi-left').detach().prependTo('.navi-left-col');
            jQuery('.navi-right').detach().prependTo('.navi-right-col')
        }
        splitNav();
*/
        jQuery('.main-header').ready(function() {
            jQuery(".navi > li > .sub-menu").centerMenu();
            jQuery('.main-header').animate({
                opacity: 1
            }, "fast", function() {})
        });
        jQuery(window).load(function() {
            jQuery('.cta-item-img img').filterImage({
                grayscale: 1
            })
        });
        jQuery('.featprop-holder').slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 5000,
            dots: !1,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        jQuery(document).ready(function() {
            jQuery('.cta-link').anchorSingleTap();
            jQuery('.featprop-link').anchorSingleTap();
            jQuery('.featcomm-link').anchorSingleTap()
        });
        jQuery(window).load(function() {
            jQuery('.ihf-modal-container > div.modal').addClass('fade')
        })
    })
})()
