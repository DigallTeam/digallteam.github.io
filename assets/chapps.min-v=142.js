function author() {
    return "/*! chapps.js v1.0.0 | SE7ENSKY frontend studio <hello@se7ensky.com> */"
}

function waitUntilFnThenFn(t, e) {
    t() ? e() : setTimeout(function() {
        waitUntilFnThenFn(t, e)
    },
    50)
} (function() {
    var t = [].indexOf ||
    function(t) {
        for (var e = 0,
        i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
        return - 1
    };
    $.fn.mod = function(e, i) {
        return null == i && (i = !0),
        this.each(function() {
            var s, n, r, o, a;
            return s = $(this),
            r = s.attr("class"),
            n = r.split(" ")[0],
            a = r.match(new RegExp("" + n + "_" + e + "\\S*", "g")),
            o = null,
            i && (o = "" + n + "_" + e, i !== !0 && (o += "_" + i), a && t.call(a, o) >= 0 && a.splice(a.indexOf(o), 1)),
            a && a.length > 0 && s.removeClass(a.join(" ")),
            o && s.addClass(o),
            s.trigger("mod", [e, i])
        })
    },
    $.block = function(t) {
        return $("." + t)
    },
    $.fn.block = function(t) {
        return this.find("." + t)
    },
    $.fn.element = function(t) {
        var e, i;
        return i = this.attr("class"),
        e = i.split(" ")[0],
        this.find("." + e + "__" + t)
    }
}).call(this),
!
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
} (this,
function() {
    return function(t) {
        function e(s) {
            if (i[s]) return i[s].exports;
            var n = i[s] = {
                exports: {},
                id: s,
                loaded: !1
            };
            return t[s].call(n.exports, n, n.exports, e),
            n.loaded = !0,
            n.exports
        }
        var i = {};
        return e.m = t,
        e.c = i,
        e.p = "http://localhost:8080/dist",
        e(0)
    } ([function(t, e, i) {
        "function" != typeof Promise && (window.Promise = i(1));
        var s = {
            version: "0.0.10",
            BaseTransition: i(4),
            BaseView: i(6),
            BaseCache: i(8),
            Dispatcher: i(7),
            HistoryManager: i(9),
            Pjax: i(10),
            Prefetch: i(13),
            Utils: i(5)
        };
        t.exports = s
    },
    function(t, e, i) { (function(e) { !
            function(i) {
                function s() {}

                function n(t, e) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }

                function r(t) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    u(t, this)
                }

                function o(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void d(function() {
                        var t = 1 === s._state ? e.onFulfilled: e.onRejected;
                        if (null === t) return void(1 === s._state ? a: l)(e.promise, s._value);
                        var i;
                        try {
                            i = t(s._value)
                        } catch(s) {
                            return void l(e.promise, s)
                        }
                        a(e.promise, i)
                    }))
                }

                function a(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var i = e.then;
                            if (e instanceof r) return t._state = 3,
                            t._value = e,
                            void h(t);
                            if ("function" == typeof i) return void u(n(i, e), t)
                        }
                        t._state = 1,
                        t._value = e,
                        h(t)
                    } catch(e) {
                        l(t, e)
                    }
                }

                function l(t, e) {
                    t._state = 2,
                    t._value = e,
                    h(t)
                }

                function h(t) {
                    2 === t._state && 0 === t._deferreds.length && d(function() {
                        t._handled || f(t._value)
                    });
                    for (var e = 0,
                    i = t._deferreds.length; i > e; e++) o(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function c(t, e, i) {
                    this.onFulfilled = "function" == typeof t ? t: null,
                    this.onRejected = "function" == typeof e ? e: null,
                    this.promise = i
                }

                function u(t, e) {
                    var i = !1;
                    try {
                        t(function(t) {
                            i || (i = !0, a(e, t))
                        },
                        function(t) {
                            i || (i = !0, l(e, t))
                        })
                    } catch(t) {
                        if (i) return;
                        i = !0,
                        l(e, t)
                    }
                }
                var p = setTimeout,
                d = "function" == typeof e && e ||
                function(t) {
                    p(t, 0)
                },
                f = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                r.prototype["catch"] = function(t) {
                    return this.then(null, t)
                },
                r.prototype.then = function(t, e) {
                    var i = new this.constructor(s);
                    return o(this, new c(t, e, i)),
                    i
                },
                r.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new r(function(t, i) {
                        function s(t, r) {
                            try {
                                if (r && ("object" == typeof r || "function" == typeof r)) {
                                    var o = r.then;
                                    if ("function" == typeof o) return void o.call(r,
                                    function(e) {
                                        s(t, e)
                                    },
                                    i)
                                }
                                e[t] = r,
                                0 === --n && a(e)
                            } catch(a) {
                                i(a)
                            }
                        }
                        if (0 === e.length) return t([]);
                        for (var n = e.length,
                        r = 0; r < e.length; r++) s(r, e[r])
                    })
                },
                r.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === r ? t: new r(function(e) {
                        e(t)
                    })
                },
                r.reject = function(t) {
                    return new r(function(e, i) {
                        i(t)
                    })
                },
                r.race = function(t) {
                    return new r(function(e, i) {
                        for (var s = 0,
                        n = t.length; n > s; s++) t[s].then(e, i)
                    })
                },
                r._setImmediateFn = function(t) {
                    d = t
                },
                r._setUnhandledRejectionFn = function(t) {
                    f = t
                },
                "undefined" != typeof t && t.exports ? t.exports = r: i.Promise || (i.Promise = r)
            } (this)
        }).call(e, i(2).setImmediate)
    },
    function(t, e, i) { (function(t, s) {
            function n(t, e) {
                this._id = t,
                this._clearFn = e
            }
            var r = i(3).nextTick,
            o = Function.prototype.apply,
            a = Array.prototype.slice,
            l = {},
            h = 0;
            e.setTimeout = function() {
                return new n(o.call(setTimeout, window, arguments), clearTimeout)
            },
            e.setInterval = function() {
                return new n(o.call(setInterval, window, arguments), clearInterval)
            },
            e.clearTimeout = e.clearInterval = function(t) {
                t.close()
            },
            n.prototype.unref = n.prototype.ref = function() {},
            n.prototype.close = function() {
                this._clearFn.call(window, this._id)
            },
            e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = e
            },
            e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = -1
            },
            e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                },
                e))
            },
            e.setImmediate = "function" == typeof t ? t: function(t) {
                var i = h++,
                s = arguments.length < 2 ? !1 : a.call(arguments, 1);
                return l[i] = !0,
                r(function() {
                    l[i] && (s ? t.apply(null, s) : t.call(null), e.clearImmediate(i))
                }),
                i
            },
            e.clearImmediate = "function" == typeof s ? s: function(t) {
                delete l[t]
            }
        }).call(e, i(2).setImmediate, i(2).clearImmediate)
    },
    function(t, e) {
        function i() {
            h && o && (h = !1, o.length ? l = o.concat(l) : c = -1, l.length && s())
        }

        function s() {
            if (!h) {
                var t = setTimeout(i);
                h = !0;
                for (var e = l.length; e;) {
                    for (o = l, l = []; ++c < e;) o && o[c].run();
                    c = -1,
                    e = l.length
                }
                o = null,
                h = !1,
                clearTimeout(t)
            }
        }

        function n(t, e) {
            this.fun = t,
            this.array = e
        }

        function r() {}
        var o, a = t.exports = {},
        l = [],
        h = !1,
        c = -1;
        a.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            l.push(new n(t, e)),
            1 !== l.length || h || setTimeout(s, 0)
        },
        n.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        a.title = "browser",
        a.browser = !0,
        a.env = {},
        a.argv = [],
        a.version = "",
        a.versions = {},
        a.on = r,
        a.addListener = r,
        a.once = r,
        a.off = r,
        a.removeListener = r,
        a.removeAllListeners = r,
        a.emit = r,
        a.binding = function(t) {
            throw new Error("process.binding is not supported")
        },
        a.cwd = function() {
            return "/"
        },
        a.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        },
        a.umask = function() {
            return 0
        }
    },
    function(t, e, i) {
        var s = i(5),
        n = {
            oldContainer: void 0,
            newContainer: void 0,
            newContainerLoading: void 0,
            extend: function(t) {
                return s.extend(this, t)
            },
            init: function(t, e) {
                var i = this;
                return this.oldContainer = t,
                this._newContainerPromise = e,
                this.deferred = s.deferred(),
                this.newContainerReady = s.deferred(),
                this.newContainerLoading = this.newContainerReady.promise,
                this.start(),
                this._newContainerPromise.then(function(t) {
                    i.newContainer = t,
                    i.newContainerReady.resolve()
                }),
                this.deferred.promise
            },
            done: function() {
                this.oldContainer.parentNode.removeChild(this.oldContainer),
                this.newContainer.style.visibility = "visible",
                this.deferred.resolve()
            },
            start: function() {}
        };
        t.exports = n
    },
    function(t, e) {
        var i = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(t) {
                return t.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(t) {
                var e = this.deferred(),
                i = new XMLHttpRequest;
                return i.onreadystatechange = function() {
                    return 4 === i.readyState ? 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200")) : void 0
                },
                i.ontimeout = function() {
                    return e.reject(new Error("xhr: Timeout exceeded"))
                },
                i.open("GET", t),
                i.timeout = this.xhrTimeout,
                i.setRequestHeader("x-barba", "yes"),
                i.send(),
                e.promise
            },
            extend: function(t, e) {
                var i = Object.create(t);
                for (var s in e) e.hasOwnProperty(s) && (i[s] = e[s]);
                return i
            },
            deferred: function() {
                return new
                function() {
                    this.resolve = null,
                    this.reject = null,
                    this.promise = new Promise(function(t, e) {
                        this.resolve = t,
                        this.reject = e
                    }.bind(this))
                }
            },
            getPort: function(t) {
                var e = "undefined" != typeof t ? t: window.location.port,
                i = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
            }
        };
        t.exports = i
    },
    function(t, e, i) {
        var s = i(7),
        n = i(5),
        r = {
            namespace: null,
            extend: function(t) {
                return n.extend(this, t)
            },
            init: function() {
                var t = this;
                s.on("initStateChange",
                function(e, i) {
                    i && i.namespace === t.namespace && t.onLeave()
                }),
                s.on("newPageReady",
                function(e, i, s) {
                    t.container = s,
                    e.namespace === t.namespace && t.onEnter()
                }),
                s.on("transitionCompleted",
                function(e, i) {
                    e.namespace === t.namespace && t.onEnterCompleted(),
                    i && i.namespace === t.namespace && t.onLeaveCompleted()
                })
            },
            onEnter: function() {},
            onEnterCompleted: function() {},
            onLeave: function() {},
            onLeaveCompleted: function() {}
        };
        t.exports = r
    },
    function(t, e) {
        var i = {
            events: {},
            on: function(t, e) {
                this.events[t] = this.events[t] || [],
                this.events[t].push(e)
            },
            off: function(t, e) {
                t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1)
            },
            trigger: function(t) {
                if (t in this.events != 0) for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = i
    },
    function(t, e, i) {
        var s = i(5),
        n = {
            data: {},
            extend: function(t) {
                return s.extend(this, t)
            },
            set: function(t, e) {
                this.data[t] = e
            },
            get: function(t) {
                return this.data[t]
            },
            reset: function() {
                this.data = {}
            }
        };
        t.exports = n
    },
    function(t, e) {
        var i = {
            history: [],
            add: function(t, e) {
                e || (e = void 0),
                this.history.push({
                    url: t,
                    namespace: e
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var t = this.history;
                return t.length < 2 ? null: t[t.length - 2]
            }
        };
        t.exports = i
    },
    function(t, e, i) {
        var s = i(5),
        n = i(7),
        r = i(11),
        o = i(8),
        a = i(9),
        l = i(12),
        h = {
            Dom: l,
            History: a,
            Cache: o,
            cacheEnabled: !0,
            transitionProgress: !1,
            ignoreClassLink: "no-barba",
            start: function() {
                this.init()
            },
            init: function() {
                var t = this.Dom.getContainer(),
                e = this.Dom.getWrapper();
                e.setAttribute("aria-live", "polite"),
                this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)),
                n.trigger("initStateChange", this.History.currentStatus()),
                n.trigger("newPageReady", this.History.currentStatus(), {},
                t),
                n.trigger("transitionCompleted", this.History.currentStatus()),
                this.bindEvents()
            },
            bindEvents: function() {
                document.addEventListener("click", this.onLinkClick.bind(this)),
                window.addEventListener("popstate", this.onStateChange.bind(this))
            },
            getCurrentUrl: function() {
                return s.cleanLink(s.getCurrentUrl())
            },
            goTo: function(t) {
                window.history.pushState(null, null, t),
                this.onStateChange()
            },
            forceGoTo: function(t) {
                window.location = t
            },
            load: function(t) {
                var e, i = s.deferred(),
                n = this;
                return e = this.Cache.get(t),
                e || (e = s.xhr(t), this.Cache.set(t, e)),
                e.then(function(t) {
                    var e = n.Dom.parseResponse(t);
                    n.Dom.putContainer(e),
                    n.cacheEnabled || n.Cache.reset(),
                    i.resolve(e)
                },
                function() {
                    n.forceGoTo(t),
                    i.reject()
                }),
                i.promise
            },
            onLinkClick: function(t) {
                for (var e = t.target; e && !e.href;) e = e.parentNode;
                this.preventCheck(t, e) && (t.stopPropagation(), t.preventDefault(), n.trigger("linkClicked", e), this.goTo(e.href))
            },
            preventCheck: function(t, e) {
                return window.history.pushState && e && e.href ? t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? !1 : e.target && "_blank" === e.target ? !1 : window.location.protocol !== e.protocol || window.location.hostname !== e.hostname ? !1 : s.getPort() !== s.getPort(e.port) ? !1 : e.href.indexOf("#") > -1 ? !1 : s.cleanLink(e.href) == s.cleanLink(location.href) ? !1 : !e.classList.contains(this.ignoreClassLink) : !1
            },
            getTransition: function() {
                return r
            },
            onStateChange: function() {
                var t = this.getCurrentUrl();
                if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return ! 1;
                this.History.add(t);
                var e = this.load(t),
                i = Object.create(this.getTransition());
                this.transitionProgress = !0,
                n.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                var s = i.init(this.Dom.getContainer(), e);
                e.then(this.onNewContainerLoaded.bind(this)),
                s.then(this.onTransitionEnd.bind(this))
            },
            onNewContainerLoaded: function(t) {
                var e = this.History.currentStatus();
                e.namespace = this.Dom.getNamespace(t),
                n.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t)
            },
            onTransitionEnd: function() {
                this.transitionProgress = !1,
                n.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
            }
        };
        t.exports = h
    },
    function(t, e, i) {
        var s = i(4),
        n = s.extend({
            start: function() {
                this.newContainerLoading.then(this.finish.bind(this))
            },
            finish: function() {
                document.body.scrollTop = 0,
                this.done()
            }
        });
        t.exports = n
    },
    function(t, e) {
        var i = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            parseResponse: function(t) {
                var e = document.createElement("div");
                e.innerHTML = t;
                var i = e.querySelector("title");
                return i && (document.title = i.textContent),
                this.getContainer(e)
            },
            getWrapper: function() {
                var t = document.getElementById(this.wrapperId);
                if (!t) throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function(t) {
                if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function(t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(t) {
                t.style.visibility = "hidden";
                var e = this.getWrapper();
                e.appendChild(t)
            },
            parseContainer: function(t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = i
    },
    function(t, e, i) {
        var s = i(5),
        n = i(10),
        r = {
            ignoreClassLink: "no-barba-prefetch",
            init: function() {
                return window.history.pushState ? (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))) : !1
            },
            onLinkEnter: function(t) {
                for (var e = t.target; e && !e.href;) e = e.parentNode;
                if (e && !e.classList.contains(this.ignoreClassLink)) {
                    var i = e.href;
                    if (n.preventCheck(t, e) && !n.Cache.get(i)) {
                        var r = s.xhr(i);
                        n.Cache.set(i, r)
                    }
                }
            }
        };
        t.exports = r
    }])
}),
!
function(t, e, i, s) {
    function n(e, i) {
        this.settings = null,
        this.options = t.extend({},
        n.Defaults, i),
        this.$element = t(e),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        },
        this)),
        t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        },
        this)),
        t.each(n.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        },
        this)),
        this.setup(),
        this.initialize()
    }
    n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    n.Type = {
        Event: "event",
        State: "state"
    },
    n.Plugins = {},
    n.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    },
    {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
                width: "auto",
                "margin-left": s ? e: "",
                "margin-right": s ? "": e
            }; ! i && this.$stage.children().css(n),
            t.css = n
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            r = [];
            for (t.items = {
                merge: !1,
                width: e
            }; s--;) i = this._mergers[s],
            i = this.settings.mergeFit && Math.min(i, this.settings.items) || i,
            t.items.merge = i > 1 || t.items.merge,
            r[s] = n ? e * i: this._items[s].width();
            this._widths = r
        }
    },
    {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
            i = this._items,
            s = this.settings,
            n = Math.max(2 * s.items, 4),
            r = 2 * Math.ceil(i.length / 2),
            o = s.loop && i.length ? s.rewind ? n: Math.max(n, r) : 0,
            a = "",
            l = "";
            for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)),
            a += i[e[e.length - 1]][0].outerHTML,
            e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
            l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e,
            t(a).addClass("cloned").appendTo(this.$stage),
            t(l).addClass("cloned").prependTo(this.$stage)
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, r = []; ++i < e;) s = r[i - 1] || 0,
            n = this._widths[this.relative(i)] + this.settings.margin,
            r.push(s + n * t);
            this._coordinates = r
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)],
            s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    },
    {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    },
    {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0,
            t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
            this.reset(t.current)
        }
    },
    {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    },
    {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
            r = 2 * this.settings.stagePadding,
            o = this.coordinates(this.current()) + r,
            a = o + this.width() * n,
            l = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0,
            e = Math.abs(this._coordinates[i]) + r * n,
            (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }],
    n.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, i, n;
            e = this.$element.find("img"),
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector: s,
            n = this.$element.children(i).width(),
            e.length && 0 >= n && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass),
        this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    },
    n.prototype.setup = function() {
        var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;
        i ? (t.each(i,
        function(t) {
            e >= t && t > s && (s = Number(t))
        }), n = t.extend({},
        this.options, i[s]), "function" == typeof n.stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({},
        this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }),
        this._breakpoint = s,
        this.settings = n,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    },
    n.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    },
    n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)),
        this.trigger("prepared", {
            content: i.data
        }),
        i.data
    },
    n.prototype.update = function() {
        for (var e = 0,
        i = this._pipe.length,
        s = t.proxy(function(t) {
            return this[t]
        },
        this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n),
        e++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    },
    n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
        case n.Width.Inner:
        case n.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    },
    n.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    },
    n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer),
        this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    },
    n.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
    },
    n.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
        this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core",
        function() {
            return ! 1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    },
    n.prototype.onDragStart = function(e) {
        var s = null;
        3 !== e.which && (t.support.transform ? (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), s = {
            x: s[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        }) : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin: s.left,
            y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)),
            Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        },
        this)))
    },
    n.prototype.onDragMove = function(t) {
        var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        r = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + s), i + s)), this._drag.stage.current = r, this.animate(r.x))
    },
    n.prototype.onDragEnd = function(e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
        n = this._drag.stage.current,
        r = s.x > 0 ^ this.settings.rtl ? "left": "right";
        t(i).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? r: this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core",
        function() {
            return ! 1
        })),
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    },
    n.prototype.closest = function(e, i) {
        var s = -1,
        n = 30,
        r = this.width(),
        o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) {
            return "left" === i && e > a - n && a + n > e ? s = t: "right" === i && e > a - r - n && a - r + n > e ? s = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - r) && (s = "left" === i ? t + 1 : t),
            -1 === s
        },
        this)),
        this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (s = e = this.maximum())),
        s
    },
    n.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        i && (this.enter("animating"), this.trigger("translate")),
        t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        },
        this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    },
    n.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    },
    n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)),
            this._current = t,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    },
    n.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")),
        t.map(this._invalidated,
        function(t, e) {
            return e
        })
    },
    n.prototype.reset = function(t) {
        t = this.normalize(t),
        t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    },
    n.prototype.normalize = function(t, e) {
        var i = this._items.length,
        n = e ? 0 : this._clones.length;
        return ! this.isNumeric(t) || 1 > i ? t = s: (0 > t || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2),
        t
    },
    n.prototype.relative = function(t) {
        return t -= this._clones.length / 2,
        this.normalize(t, !0)
    },
    n.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
        r = this._coordinates.length;
        if (n.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e--&&(i += this._items[e].width() + this.settings.margin, !(i > s)););
            r = e + 1
        } else r = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (r -= this._clones.length / 2),
        Math.max(r, 0)
    },
    n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    },
    n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    },
    n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    },
    n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
        n = i + this._items.length,
        r = function(t) {
            return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
        };
        return e === s ? t.map(this._clones,
        function(t, e) {
            return r(e)
        }) : t.map(this._clones,
        function(t, i) {
            return t === e ? r(i) : null
        })
    },
    n.prototype.speed = function(t) {
        return t !== s && (this._speed = t),
        this._speed
    },
    n.prototype.coordinates = function(e) {
        var i, n = 1,
        r = e - 1;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        },
        this)) : (this.settings.center ? (this.settings.rtl && (n = -1, r = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * n) : i = this._coordinates[r] || 0, i = Math.ceil(i))
    },
    n.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    },
    n.prototype.to = function(t, e) {
        var i = this.current(),
        s = null,
        n = t - this.relative(i),
        r = (n > 0) - (0 > n),
        o = this._items.length,
        a = this.minimum(),
        l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > o / 2 && (n += -1 * r * o), t = i + n, s = ((t - a) % o + o) % o + a, s !== t && l >= s - n && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.$element.is(":visible") && this.update()
    },
    n.prototype.next = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) + 1, t)
    },
    n.prototype.prev = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) - 1, t)
    },
    n.prototype.onTransitionEnd = function(t) {
        return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
    },
    n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    },
    n.prototype.replace = function(e) {
        this.$stage.empty(),
        this._items = [],
        e && (e = e instanceof jQuery ? e: t(e)),
        this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
        e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e),
            this.$stage.append(e),
            this._items.push(e),
            this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        },
        this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition: 0),
        this.invalidate("items")
    },
    n.prototype.add = function(e, i) {
        var n = this.relative(this._current);
        i = i === s ? this._items.length: this.normalize(i, !0),
        e = e instanceof jQuery ? e: t(e),
        this.trigger("add", {
            content: e,
            position: i
        }),
        e = this.prepare(e),
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[n] && this.reset(this._items[n].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: e,
            position: i
        })
    },
    n.prototype.remove = function(t) {
        t = this.normalize(t, !0),
        t !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    },
    n.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"),
            i = t(i),
            t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src),
                i.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            },
            this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        },
        this))
    },
    n.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var s in this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    },
    n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
        case "<":
            return s ? t > i: i > t;
        case ">":
            return s ? i > t: t > i;
        case ">=":
            return s ? i >= t: t >= i;
        case "<=":
            return s ? t >= i: i >= t
        }
    },
    n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    },
    n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    },
    n.prototype.trigger = function(e, i, s, r, o) {
        var a = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        },
        l = t.camelCase(t.grep(["on", e, s],
        function(t) {
            return t
        }).join("-").toLowerCase()),
        h = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
            relatedTarget: this
        },
        a, i));
        return this._supress[e] || (t.each(this._plugins,
        function(t, e) {
            e.onTrigger && e.onTrigger(h)
        }), this.register({
            type: n.Type.Event,
            name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)),
        h
    },
    n.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0),
            this._states.current[e]++
        },
        this))
    },
    n.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        },
        this))
    },
    n.prototype.register = function(e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return ! i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                },
                t.event.special[e.name].owl = !0
            }
        } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        },
        this)))
    },
    n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        },
        this))
    },
    n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        },
        this))
    },
    n.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return t = t.originalEvent || t || e.event,
        t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY),
        i
    },
    n.prototype.isNumeric = function(t) {
        return ! isNaN(parseFloat(t))
    },
    n.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    },
    t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
            r = s.data("owl.carousel");
            r || (r = new n(this, "object" == typeof e && e), s.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"],
            function(e, i) {
                r.register({
                    type: n.Type.Event,
                    name: i
                }),
                r.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                },
                r))
            })),
            "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
        })
    },
    t.fn.owlCarousel.Constructor = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    n.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    },
    n.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    },
    n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings,
                n = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && -1 * n || 0, o = (e.property && e.property.value !== s ? e.property.value: this._core.current()) + r, a = this._core.clones().length, l = t.proxy(function(t, e) {
                    this.load(e)
                },
                this); r++<n;) this.load(a / 2 + this._core.relative(o)),
                a && t.each(this._core.clones(this._core.relative(o)), l),
                o++
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    },
    n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
        n = s && s.find(".owl-lazy"); ! n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, r = t(s),
            o = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: o
            },
            "lazy"),
            r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                r.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: r,
                    url: o
                },
                "lazy")
            },
            this)).attr("src", o) : (n = new Image, n.onload = t.proxy(function() {
                r.css({
                    "background-image": "url(" + o + ")",
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: r,
                    url: o
                },
                "lazy")
            },
            this), n.src = o)
        },
        this)), this._loaded.push(s.get(0)))
    },
    n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.Lazy = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            },
            this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            },
            this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    n.prototype.update = function() {
        var e = this._core._current,
        i = e + this._core.settings.items,
        s = this._core.$stage.children().toArray().slice(e, i),
        n = [],
        r = 0;
        t.each(s,
        function(e, i) {
            n.push(t(i).height())
        }),
        r = Math.max.apply(null, n),
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    },
    n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            },
            this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            },
            this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            },
            this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            },
            this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        },
        this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    n.prototype.fetch = function(t, e) {
        var i = function() {
            return t.attr("data-vimeo-id") ? "vimeo": t.attr("data-vzaar-id") ? "vzaar": "youtube"
        } (),
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
        n = t.attr("data-width") || this._core.settings.videoWidth,
        r = t.attr("data-height") || this._core.settings.videoHeight,
        o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (s = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (! (s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6],
        this._videos[o] = {
            type: i,
            id: s,
            width: n,
            height: r
        },
        e.attr("data-video", o),
        this.thumbnail(t, this._videos[o])
    },
    n.prototype.thumbnail = function(e, i) {
        var s, n, r, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"': "",
        a = e.find("img"),
        l = "src",
        h = "",
        c = this._core.settings,
        u = function(t) {
            n = '<div class="owl-video-play-icon"></div>',
            s = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>': '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
            e.after(s),
            e.after(n)
        };
        return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"),
        this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"),
        a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                r = t[0].thumbnail_large,
                u(r)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                r = t.framegrab_url,
                u(r)
            }
        }))
    },
    n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    },
    n.prototype.play = function(e) {
        var i, s = t(e.target),
        n = s.closest("." + this._core.settings.itemClass),
        r = this._videos[n.attr("data-video")],
        o = r.width || "100%",
        a = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === r.type ? i = '<iframe width="' + o + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>': "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + o + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>': "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    },
    n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    },
    n.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.Video = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e,
        this.core.options = t.extend({},
        n.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = s,
        this.next = s,
        this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            },
            this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            },
            this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            },
            this)
        },
        this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    n.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            r = this.core.settings.animateIn,
            o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(o)), r && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    },
    n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    },
    n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.Animate = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e,
        this._timeout = null,
        this._paused = !1,
        this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            },
            this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            },
            this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            },
            this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            },
            this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            },
            this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            },
            this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            },
            this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            },
            this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = t.extend({},
        n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    n.prototype.play = function(t, e) {
        this._paused = !1,
        this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    },
    n.prototype._getNextTimeout = function(s, n) {
        return this._timeout && e.clearTimeout(this._timeout),
        e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
        },
        this), s || this._core.settings.autoplayTimeout)
    },
    n.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    },
    n.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    },
    n.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    },
    n.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.autoplay = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            },
            this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            },
            this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            },
            this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            },
            this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            },
            this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    n.prototype.initialize = function() {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(i.navSpeed)
        },
        this)),
        this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(i.navSpeed)
        },
        this)),
        i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "div", t.proxy(function(e) {
            var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(),
            this.to(s, i.dotsSpeed)
        },
        this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    },
    n.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
    },
    n.prototype.update = function() {
        var t, e, i, s = this._core.clones().length / 2,
        n = s + this._core.items().length,
        r = this._core.maximum(!0),
        o = this._core.settings,
        a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = s, e = 0, i = 0; n > t; t++) {
            if (e >= a || 0 === e) {
                if (this._pages.push({
                    start: Math.min(r, t - s),
                    end: t - s + a - 1
                }), Math.min(r, t - s) === r) break;
                e = 0,
                ++i
            }
            e += this._core.mergers(this._core.relative(t))
        }
    },
    n.prototype.draw = function() {
        var e, i = this._core.settings,
        s = this._core.items().length <= i.items,
        n = this._core.relative(this._core.current()),
        r = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s),
        i.nav && (this._controls.$previous.toggleClass("disabled", !r && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && n >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !i.dots || s),
        i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    },
    n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    },
    n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        },
        this)).pop()
    },
    n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i: --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy: i -= n.slideBy),
        i
    },
    n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    },
    n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    },
    n.prototype.to = function(e, i, s) {
        var n; ! s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    },
    t.fn.owlCarousel.Constructor.Plugins.Navigation = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            },
            this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            },
            this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current())),
                    n = t.map(this._hashes,
                    function(t, e) {
                        return t === s ? e: null
                    }).join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n
                }
            },
            this)
        },
        this._core.options = t.extend({},
        n.Defaults, this._core.options),
        this.$element.on(this._handlers),
        t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
            n = this._core.$stage.children(),
            r = this._hashes[i] && n.index(this._hashes[i]);
            r !== s && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        },
        this))
    };
    n.Defaults = {
        URLhashListener: !1
    },
    n.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this))"function" != typeof this[s] && (this[s] = null)
    },
    t.fn.owlCarousel.Constructor.Plugins.Hash = n
} (window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    function n(e, i) {
        var n = !1,
        r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(r + " ") + r).split(" "),
        function(t, e) {
            return o[e] !== s ? (n = i ? e: !0, !1) : void 0
        }),
        n
    }

    function r(t) {
        return n(t, !0)
    }
    var o = t("<support>").get(0).style,
    a = "Webkit Moz O ms".split(" "),
    l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    },
    h = {
        csstransforms: function() {
            return !! n("transform")
        },
        csstransforms3d: function() {
            return !! n("perspective")
        },
        csstransitions: function() {
            return !! n("transition")
        },
        cssanimations: function() {
            return !! n("animation")
        }
    };
    h.csstransitions() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]),
    h.cssanimations() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]),
    h.csstransforms() && (t.support.transform = new String(r("transform")), t.support.transform3d = h.csstransforms3d())
} (window.Zepto || window.jQuery, window, document);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var s = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        n = function(t, e, i) {
            var s, n, r = t.cycle;
            for (s in r) n = r[s],
            t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
            delete t.cycle
        },
        r = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        },
        o = 1e-10,
        a = i._internals,
        l = a.isSelector,
        h = a.isArray,
        c = r.prototype = i.to({},
        .1, {}),
        u = [];
        r.version = "1.19.0",
        c.constructor = r,
        c.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        c.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        },
        c.updateTo = function(t, e) {
            var s, n = this.ratio,
            r = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t) this.vars[s] = t[s];
            if (this._initted || r) if (e) this._initted = !1,
            r && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._totalTime;
                this.render(0, !0, !1),
                this._initted = !1,
                this.render(o, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || r) for (var a, l = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c,
            h.c *= l,
            h.s = a - h.c,
            h = h._next;
            return this
        },
        c.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, n, r, l, h, c, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._totalTime,
            g = this._cycle,
            _ = this._duration,
            v = this._rawPrevTime;
            if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === o && "isPause" !== this.data) && v !== t && (i = !0, v > o && (n = "onReverseComplete")), this._rawPrevTime = p = !e || t || v === t ? t: o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && v > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = p = !e || t || v === t ? t: o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _: this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / _, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h: 2 === u ? h *= h * h: 3 === u ? h *= h * h * h: 4 === u && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h: 2 === c ? this.ratio = h: this._time / _ < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / _)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f,
                this._totalTime = m,
                this._rawPrevTime = v,
                this._cycle = g,
                a.lazyTweens.push(this),
                void(this._lazy = [t, e]);
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / _) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
            r = r._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")),
            this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
            n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === _ && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
        },
        r.to = function(t, e, i) {
            return new r(t, e, i)
        },
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t, e, i)
        },
        r.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t, e, s)
        },
        r.staggerTo = r.allTo = function(t, e, o, a, c, p, d) {
            a = a || 0;
            var f, m, g, _, v = 0,
            y = [],
            w = function() {
                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments),
                c.apply(d || o.callbackScope || this, p || u)
            },
            x = o.cycle,
            T = o.startAt && o.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                m = {};
                for (_ in o) m[_] = o[_];
                if (x && (n(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), T) {
                    T = m.startAt = {};
                    for (_ in o.startAt) T[_] = o.startAt[_];
                    n(m.startAt, t, g)
                }
                m.delay = v + (m.delay || 0),
                g === f && c && (m.onComplete = w),
                y[g] = new r(t[g], e, m),
                v += a
            }
            return y
        },
        r.staggerFrom = r.allFrom = function(t, e, i, s, n, o, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, o, a)
        },
        r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, o, a, l) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, o, a, l)
        },
        r.delayedCall = function(t, e, i, s, n) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        },
        r.set = function(t, e) {
            return new r(t, 0, e)
        },
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var p = function(t, e) {
            for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r: (e && (s[n++] = r), s = s.concat(p(r, e)), n = s.length),
            r = r._next;
            return s
        },
        d = r.getAllTweens = function(e) {
            return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
        };
        r.killAll = function(t, i, s, n) {
            null == i && (i = !0),
            null == s && (s = !0);
            var r, o, a, l = d(0 != n),
            h = l.length,
            c = i && s && n;
            for (a = 0; h > a; a++) o = l[a],
            (c || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        },
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var n, o, c, u, p, d = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                else {
                    n = [];
                    for (c in d) for (o = d[c].target.parentNode; o;) o === t && (n = n.concat(d[c].tweens)),
                    o = o.parentNode;
                    for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()),
                    n[u]._enabled(!1, !1)
                }
            }
        };
        var f = function(t, i, s, n) {
            i = i !== !1,
            s = s !== !1,
            n = n !== !1;
            for (var r, o, a = d(n), l = i && s && n, h = a.length; --h > -1;) o = a[h],
            (l || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && o.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            f(!0, t, e, i)
        },
        r.resumeAll = function(t, e, i) {
            f(!1, t, e, i)
        },
        r.globalTimeScale = function(e) {
            var s = t._rootTimeline,
            n = i.ticker.time;
            return arguments.length ? (e = e || o, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        },
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        c.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        },
        c.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        },
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        r
    },
    !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var s = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, n = this.vars;
            for (s in n) i = n[s],
            l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
            l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
        },
        n = 1e-10,
        r = i._internals,
        o = s._internals = {},
        a = r.isSelector,
        l = r.isArray,
        h = r.lazyTweens,
        c = r.lazyRender,
        u = _gsScope._gsDefine.globals,
        p = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        },
        d = function(t, e, i) {
            var s, n, r = t.cycle;
            for (s in r) n = r[s],
            t[s] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
            delete t.cycle
        },
        f = o.pauseCallback = function() {},
        m = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        g = s.prototype = new e;
        return s.version = "1.19.0",
        g.constructor = s,
        g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
        g.to = function(t, e, s, n) {
            var r = s.repeat && u.TweenMax || i;
            return e ? this.add(new r(t, e, s), n) : this.set(t, s, n)
        },
        g.from = function(t, e, s, n) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), n)
        },
        g.fromTo = function(t, e, s, n, r) {
            var o = n.repeat && u.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, s, n), r) : this.set(t, n, r)
        },
        g.staggerTo = function(t, e, n, r, o, l, h, c) {
            var u, f, g = new s({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: c,
                smoothChildTiming: this.smoothChildTiming
            }),
            _ = n.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, 0 > r && (t = m(t), t.reverse(), r *= -1), f = 0; f < t.length; f++) u = p(n),
            u.startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, t, f)),
            _ && (d(u, t, f), null != u.duration && (e = u.duration, delete u.duration)),
            g.to(t[f], e, u, f * r);
            return this.add(g, o)
        },
        g.staggerFrom = function(t, e, i, s, n, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, n, r, o, a)
        },
        g.staggerFromTo = function(t, e, i, s, n, r, o, a, l) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, n, r, o, a, l)
        },
        g.call = function(t, e, s, n) {
            return this.add(i.delayedCall(0, t, e, s), n)
        },
        g.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t, 0, e), s)
        },
        s.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var n, r, o = new s(t),
            a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n;) r = n._next,
            e && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay),
            n = r;
            return a.add(o, 0),
            o
        },
        g.add = function(n, r, o, a) {
            var h, c, u, p, d, f;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                if (n instanceof Array || n && n.push && l(n)) {
                    for (o = o || "normal", a = a || 0, h = r, c = n.length, u = 0; c > u; u++) l(p = n[u]) && (p = new s({
                        tweens: p
                    })),
                    this.add(p, h),
                    "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale: "start" === o && (p._startTime -= p.delay())),
                    h += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof n) return this.addLabel(n, r);
                if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                n = i.delayedCall(0, n)
            }
            if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (d = this, f = d.rawTime() > n._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1),
            d = d._timeline;
            return this
        },
        g.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline: t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime: i._time) - (e._reversed ? e.totalDuration() - e._totalTime: e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var s = e.length; --s > -1;) this.remove(e[s]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        },
        g._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        },
        g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        },
        g.insert = g.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        },
        g.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        },
        g.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        },
        g.addPause = function(t, e, s, n) {
            var r = i.delayedCall(0, f, s, n || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e,
            r.data = "isPause",
            this._hasPause = !0,
            this.add(r, t)
        },
        g.removeLabel = function(t) {
            return delete this._labels[t],
            this
        },
        g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        },
        g._parseTimeOrLabel = function(e, i, s, n) {
            var r;
            if (n instanceof t && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || n.push && l(n))) for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
            else {
                if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i: i: this._labels[e] + i;
                i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)),
                e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        },
        g.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t: this._parseTimeOrLabel(t), e !== !1)
        },
        g.stop = function() {
            return this.paused(!0)
        },
        g.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        },
        g.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        },
        g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, r, o, a, l, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._startTime,
            g = this._timeScale,
            _ = this._paused;
            if (t >= d - 1e-7) this._totalTime = this._time = d,
            this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (a = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: n,
            t = d + 1e-4;
            else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: n, 0 === t && r) for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1),
                s = s._next;
                t = 0,
                this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= f) for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s),
                    s = s._next;
                    else for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                    s = s._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== f && this._first || i || l || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), p = this._time, p >= f) for (s = this._first; s && (o = s._next, p === this._time && (!this._paused || _));)(s._active || s._startTime <= p && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = o;
                else for (s = this._last; s && (o = s._prev, p === this._time && (!this._paused || _));) {
                    if (s._active || s._startTime <= f && !s._paused && !s._gc) {
                        if (u === s) {
                            for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale: (t - u._startTime) * u._timeScale, e, i),
                            u = u._prev;
                            u = null,
                            this.pause()
                        }
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                    }
                    s = o
                }
                this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))),
                a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        },
        g._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild()) return ! 0;
                t = t._next
            }
            return ! 1
        },
        g.getChildren = function(t, e, s, n) {
            n = n || -9999999999;
            for (var r = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof i ? e !== !1 && (r[a++] = o) : (s !== !1 && (r[a++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, s)), a = r.length))),
            o = o._next;
            return r
        },
        g.getTweensOf = function(t, e) {
            var s, n, r = this._gc,
            o = [],
            a = 0;
            for (r && this._enabled(!0, !0), s = i.getTweensOf(t), n = s.length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (o[a++] = s[n]);
            return r && this._enabled(!1, !0),
            o
        },
        g.recent = function() {
            return this._recent
        },
        g._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return ! 0;
                e = e.timeline
            }
            return ! 1
        },
        g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, n = this._first,
            r = this._labels; n;) n._startTime >= i && (n._startTime += t),
            n = n._next;
            if (e) for (s in r) r[s] >= i && (r[s] += t);
            return this._uncache(!0)
        },
        g._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0);
            return n
        },
        g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
            i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        },
        g.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(),
            e = e._next;
            return t.prototype.invalidate.call(this)
        },
        g._enabled = function(t, i) {
            if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0),
            s = s._next;
            return e.prototype._enabled.call(this, t, i)
        },
        g.totalTime = function(e, i, s) {
            this._forcingPlayhead = !0;
            var n = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            n
        },
        g.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        },
        g.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0,
                    n = this._last,
                    r = 999999999999; n;) e = n._prev,
                    n._dirty && n.totalDuration(),
                    n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime,
                    n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren( - n._startTime, !1, -9999999999), r = 0),
                    i = n._startTime + n._totalDuration / n._timeScale,
                    i > s && (s = i),
                    n = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        },
        g.paused = function(e) {
            if (!e) for (var i = this._first,
            s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0),
            i = i._next;
            return t.prototype.paused.apply(this, arguments)
        },
        g.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        },
        g.rawTime = function() {
            return this._paused ? this._totalTime: (this._timeline.rawTime() - this._startTime) * this._timeScale
        },
        s
    },
    !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
    function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        },
        n = 1e-10,
        r = e._internals,
        o = r.lazyTweens,
        a = r.lazyRender,
        l = _gsScope._gsDefine.globals,
        h = new i(null, null, 1, 0),
        c = s.prototype = new t;
        return c.constructor = s,
        c.kill()._gc = !1,
        s.version = "1.19.0",
        c.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        },
        c.addCallback = function(t, i, s, n) {
            return this.add(e.delayedCall(0, t, s, n), i)
        },
        c.removeCallback = function(t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
            return this
        },
        c.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        },
        c.tweenTo = function(t, i) {
            i = i || {};
            var s, n, r, o = {
                ease: h,
                useFrames: this.usesFrames(),
                immediateRender: !1
            },
            a = i.repeat && l.TweenMax || e;
            for (n in i) o[n] = i[n];
            return o.time = this._parseTimeOrLabel(t),
            s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            r = new a(this, s, o),
            o.onStart = function() {
                r.target.paused(!0),
                r.vars.time !== r.target.time() && s === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                i.onStart && r._callback("onStart")
            },
            r
        },
        c.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        },
        c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, r, l, h, c, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._duration,
            g = this._time,
            _ = this._totalTime,
            v = this._startTime,
            y = this._timeScale,
            w = this._rawPrevTime,
            x = this._paused,
            T = this._cycle;
            if (t >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === n) && w !== t && this._first && (c = !0, w > n && (h = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: n,
            this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
            else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && w !== n && (w > 0 || 0 > t && w >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : w >= 0 && this._first && (c = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t: n, 0 === t && r) for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1),
                s = s._next;
                t = 0,
                this._initted || (c = !0)
            } else if (0 === m && 0 > w && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= g) for (s = this._first; s && s._startTime <= t && !p;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (p = s),
                s = s._next;
                else for (s = this._last; s && s._startTime >= t && !p;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (p = s),
                s = s._prev;
                p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== T && !this._locked) {
                var b = this._yoyo && 0 !== (1 & T),
                S = b === (this._yoyo && 0 !== (1 & this._cycle)),
                C = this._totalTime,
                P = this._cycle,
                k = this._rawPrevTime,
                E = this._time;
                if (this._totalTime = T * m, this._cycle < T ? b = !b: this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? w - 1e-4: w, this._cycle = T, this._locked = !0, g = b ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
                if (S && (g = b ? m + 1e-4: -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = E,
                this._totalTime = C,
                this._cycle = P,
                this._rawPrevTime = k
            }
            if (! (this._time !== g && this._first || i || c || p)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d = this._time, d >= g) for (s = this._first; s && (l = s._next, d === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (p === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
            s = l;
            else for (s = this._last; s && (l = s._prev, d === this._time && (!this._paused || x));) {
                if (s._active || s._startTime <= g && !s._paused && !s._gc) {
                    if (p === s) {
                        for (p = s._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale: (t - p._startTime) * p._timeScale, e, i),
                        p = p._prev;
                        p = null,
                        this.pause()
                    }
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = l
            }
            this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))),
            h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
        },
        c.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, n, r = [],
            o = this.getChildren(t, e, i),
            a = 0,
            l = o.length;
            for (s = 0; l > s; s++) n = o[s],
            n.isActive() && (r[a++] = n);
            return r
        },
        c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
            s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null
        },
        c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        },
        c.getLabelsArray = function() {
            var t, e = [],
            i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        },
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        c.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this: (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        },
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        },
        s
    },
    !0),
    function() {
        var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        n = {},
        r = _gsScope._gsDefine.globals,
        o = function(t, e, i, s) {
            i === s && (i = s - (s - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        },
        a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        l = function(t, e, i, s) {
            var n = {
                a: t
            },
            r = {},
            o = {},
            a = {
                c: s
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            c = (i + s) / 2,
            u = (l + h) / 2,
            p = (h + c) / 2,
            d = (p - u) / 8;
            return n.b = l + (t - l) / 4,
            r.b = u + d,
            n.c = r.a = (n.b + r.b) / 2,
            r.c = o.a = (u + p) / 2,
            o.b = p - d,
            a.b = c + (s - c) / 4,
            o.c = a.a = (o.b + a.b) / 2,
            [n, r, o, a]
        },
        h = function(t, n, r, o, a) {
            var h, c, u, p, d, f, m, g, _, v, y, w, x, T = t.length - 1,
            b = 0,
            S = t[0].a;
            for (h = 0; T > h; h++) d = t[b],
            c = d.a,
            u = d.d,
            p = t[b + 1].d,
            a ? (y = e[h], w = i[h], x = (w + y) * n * .25 / (o ? .5 : s[h] || .5), f = u - (u - c) * (o ? .5 * n: 0 !== y ? x / y: 0), m = u + (p - u) * (o ? .5 * n: 0 !== w ? x / w: 0), g = u - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = u - (u - c) * n * .5, m = u + (p - u) * n * .5, g = u - (f + m) / 2),
            f += g,
            m += g,
            d.c = _ = f,
            0 !== h ? d.b = S: d.b = S = d.a + .6 * (d.c - d.a),
            d.da = u - c,
            d.ca = _ - c,
            d.ba = S - c,
            r ? (v = l(c, S, _, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++,
            S = m;
            d = t[b],
            d.b = S,
            d.c = S + .4 * (d.d - S),
            d.da = d.d - d.a,
            d.ca = d.c - d.a,
            d.ba = S - d.a,
            r && (v = l(d.a, S, d.c, d.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        },
        c = function(t, s, n, r) {
            var a, l, h, c, u, p, d = [];
            if (r) for (t = [r].concat(t), l = t.length; --l > -1;)"string" == typeof(p = t[l][s]) && "=" === p.charAt(1) && (t[l][s] = r[s] + Number(p.charAt(0) + p.substr(2)));
            if (a = t.length - 2, 0 > a) return d[0] = new o(t[0][s], 0, 0, t[ - 1 > a ? 0 : 1][s]),
            d;
            for (l = 0; a > l; l++) h = t[l][s],
            c = t[l + 1][s],
            d[l] = new o(h, 0, 0, c),
            n && (u = t[l + 2][s], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
            return d[l] = new o(t[l][s], 0, 0, t[l + 1][s]),
            d
        },
        u = function(t, r, o, l, u, p) {
            var d, f, m, g, _, v, y, w, x = {},
            T = [],
            b = p || t[0];
            u = "string" == typeof u ? "," + u + ",": a,
            null == r && (r = 1);
            for (f in t[0]) T.push(f);
            if (t.length > 1) {
                for (w = t[t.length - 1], y = !0, d = T.length; --d > -1;) if (f = T[d], Math.abs(b[f] - w[f]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0, d = T.length; --d > -1;) f = T[d],
            n[f] = -1 !== u.indexOf("," + f + ","),
            x[f] = c(t, f, n[f], p);
            for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]),
            i[d] = Math.sqrt(i[d]);
            if (!l) {
                for (d = T.length; --d > -1;) if (n[f]) for (m = x[T[d]], v = m.length - 1, g = 0; v > g; g++) _ = m[g + 1].da / i[g] + m[g].da / e[g] || 0,
                s[g] = (s[g] || 0) + _ * _;
                for (d = s.length; --d > -1;) s[d] = Math.sqrt(s[d])
            }
            for (d = T.length, g = o ? 4 : 1; --d > -1;) f = T[d],
            m = x[f],
            h(m, r, o, l, n[f]),
            y && (m.splice(0, g), m.splice(m.length - g, g));
            return x
        },
        p = function(t, e, i) {
            e = e || "soft";
            var s, n, r, a, l, h, c, u, p, d, f, m = {},
            g = "cubic" === e ? 3 : 2,
            _ = "soft" === e,
            v = [];
            if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
            for (p in t[0]) v.push(p);
            for (h = v.length; --h > -1;) {
                for (p = v[h], m[p] = l = [], d = 0, u = t.length, c = 0; u > c; c++) s = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                _ && c > 1 && u - 1 > c && (l[d++] = (s + l[d - 2]) / 2),
                l[d++] = s;
                for (u = d - g + 1, d = 0, c = 0; u > c; c += g) s = l[c],
                n = l[c + 1],
                r = l[c + 2],
                a = 2 === g ? 0 : l[c + 3],
                l[d++] = f = 3 === g ? new o(s, n, r, a) : new o(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                l.length = d
            }
            return m
        },
        d = function(t, e, i) {
            for (var s, n, r, o, a, l, h, c, u, p, d, f = 1 / i,
            m = t.length; --m > -1;) for (p = t[m], r = p.a, o = p.d - r, a = p.c - r, l = p.b - r, s = n = 0, c = 1; i >= c; c++) h = f * c,
            u = 1 - h,
            s = n - (n = (h * h * o + 3 * u * (h * a + u * l)) * h),
            d = m * i + c - 1,
            e[d] = (e[d] || 0) + s * s
        },
        f = function(t, e) {
            e = e >> 0 || 6;
            var i, s, n, r, o = [],
            a = [],
            l = 0,
            h = 0,
            c = e - 1,
            u = [],
            p = [];
            for (i in t) d(t[i], o, e);
            for (n = o.length, s = 0; n > s; s++) l += Math.sqrt(o[s]),
            r = s % e,
            p[r] = l,
            r === c && (h += l, r = s / e >> 0, u[r] = p, a[r] = h, l = 0, p = []);
            return {
                length: h,
                lengths: a,
                segments: u
            }
        },
        m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.7",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._mod = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, n, r, o, a, l = e.values || [],
                h = {},
                c = l[0],
                d = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = d ? d instanceof Array ? d: [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]] : null;
                for (s in c) this._props.push(s);
                for (r = this._props.length; --r > -1;) s = this._props[r],
                this._overwriteProps.push(s),
                n = this._func[s] = "function" == typeof t[s],
                h[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)]() : parseFloat(t[s]),
                a || h[s] !== l[0][s] && (a = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate) for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), r = d.length; --r > -1;) {
                    for (o = 0; 3 > o; o++) s = d[r][o],
                    this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)] : !1;
                    s = d[r][2],
                    this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0,
                    this._overwriteProps.push(s)
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, s, n, r, o, a, l, h, c, u, p = this._segCount,
                d = this._func,
                f = this._target,
                m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, e *= this._length, n = this._li, e > this._l2 && p - 1 > n) {
                        for (h = p - 1; h > n && (this._l2 = c[++n]) <= e;);
                        this._l1 = c[n - 1],
                        this._li = n,
                        this._curSeg = u = this._segments[n],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && n > 0) {
                        for (; n > 0 && (this._l1 = c[--n]) >= e;);
                        0 === n && e < this._l1 ? this._l1 = 0 : n++,
                        this._l2 = c[n],
                        this._li = n,
                        this._curSeg = u = this._segments[n],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < u.length - 1) {
                        for (h = u.length - 1; h > n && (this._s2 = u[++n]) <= e;);
                        this._s1 = u[n - 1],
                        this._si = n
                    } else if (e < this._s1 && n > 0) {
                        for (; n > 0 && (this._s1 = u[--n]) >= e;);
                        0 === n && e < this._s1 ? this._s1 = 0 : n++,
                        this._s2 = u[n],
                        this._si = n
                    }
                    a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                a = (e - i * (1 / p)) * p;
                for (s = 1 - a, n = this._props.length; --n > -1;) r = this._props[n],
                o = this._beziers[r][i],
                l = (a * a * o.da + 3 * s * (a * o.ca + s * o.ba)) * a + o.a,
                this._mod[r] && (l = this._mod[r](l, f)),
                d[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) {
                    var g, _, v, y, w, x, T, b = this._autoRotate;
                    for (n = b.length; --n > -1;) r = b[n][2],
                    x = b[n][3] || 0,
                    T = b[n][4] === !0 ? 1 : t,
                    o = this._beziers[b[n][0]],
                    g = this._beziers[b[n][1]],
                    o && g && (o = o[i], g = g[i], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, w = g.b + (g.c - g.b) * a, v += (w - v) * a, w += (g.c + (g.d - g.c) * a - w) * a, l = m ? Math.atan2(w - v, y - _) * T + x: this._initialRotations[n], this._mod[r] && (l = this._mod[r](l, f)), d[r] ? f[r](l) : f[r] = l)
                }
            }
        }),
        g = m.prototype;
        m.bezierThrough = u,
        m.cubicToQuadratic = l,
        m._autoCSS = !0,
        m.quadraticToCubic = function(t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        },
        m._cssRegister = function() {
            var t = r.CSSPlugin;
            if (t) {
                var e = t._internals,
                i = e._parseToProxy,
                s = e._setPluginRatio,
                n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, r, o, a, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new m;
                        var h, c, u, p = e.values,
                        d = p.length - 1,
                        f = [],
                        g = {};
                        if (0 > d) return a;
                        for (h = 0; d >= h; h++) u = i(t, p[h], o, a, l, d !== h),
                        f[h] = u.end;
                        for (c in e) g[c] = e[c];
                        return g.values = f,
                        a = new n(t, "bezier", 0, 0, u.pt, 2),
                        a.data = u,
                        a.plugin = l,
                        a.setRatio = s,
                        0 === g.autoRotate && (g.autoRotate = !0),
                        !g.autoRotate || g.autoRotate instanceof Array || (h = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x ? [["x", "y", "rotation", h, !1]] : !1),
                        g.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")),
                        l._onInitTween(u.proxy, g, o._tween),
                        a
                    }
                })
            }
        },
        g._mod = function(t) {
            for (var e, i = this._overwriteProps,
            s = i.length; --s > -1;) e = t[i[s]],
            e && "function" == typeof e && (this._mod[i[s]] = e)
        },
        g._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            if (s = this._autoRotate) for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    } (),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function(t, e) {
        var i, s, n, r, o = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = o.prototype.setRatio
        },
        a = _gsScope._gsDefine.globals,
        l = {},
        h = o.prototype = new t("css");
        h.constructor = o,
        o.version = "1.19.0",
        o.API = 2,
        o.defaultTransformPerspective = 0,
        o.defaultSkewType = "compensated",
        o.defaultSmoothOrigin = !0,
        h = "px",
        o.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var c, u, p, d, f, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        b = /opacity *= *([^)]*)/i,
        S = /opacity:([^;]*)/i,
        C = /alpha\(opacity *=.+?\)/i,
        P = /^(rgb|hsl)/,
        k = /([A-Z])/g,
        E = /-([a-z])/gi,
        O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        A = function(t, e) {
            return e.toUpperCase()
        },
        M = /(?:Left|Right|Width)/i,
        R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        z = /,(?=[^\)]*(?:\(|$))/gi,
        L = /[\s,\(]/i,
        $ = Math.PI / 180,
        X = 180 / Math.PI,
        j = {},
        I = document,
        F = function(t) {
            return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) : I.createElement(t)
        },
        N = F("div"),
        Y = F("img"),
        B = o._internals = {
            _specialProps: l
        },
        H = navigator.userAgent,
        W = function() {
            var t = H.indexOf("Android"),
            e = F("a");
            return p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && ( - 1 === t || Number(H.substr(t + 8, 1)) > 3),
            f = p && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6,
            d = -1 !== H.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)),
            e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
        } (),
        q = function(t) {
            return b.test("string" == typeof t ? t: (t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        U = function(t) {
            window.console && console.log(t)
        },
        G = "",
        V = "",
        Z = function(t, e) {
            e = e || N;
            var i, s, n = e.style;
            if (void 0 !== n[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];);
            return s >= 0 ? (V = 3 === s ? "ms": i[s], G = "-" + V.toLowerCase() + "-", V + t) : null
        },
        Q = I.defaultView ? I.defaultView.getComputedStyle: function() {},
        K = o.getStyle = function(t, e, i, s, n) {
            var r;
            return W || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || Q(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r: n) : q(t)
        },
        J = B.convertToPixels = function(t, i, s, n, r) {
            if ("px" === n || !n) return s;
            if ("auto" === n || !s) return 0;
            var a, l, h, c = M.test(i),
            u = t,
            p = N.style,
            d = 0 > s,
            f = 1 === s;
            if (d && (s = -s), f && (s *= 100), "%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth: t.clientHeight);
            else {
                if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth": "borderTopWidth"] = s + n;
                else {
                    if (u = t.parentNode || I.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
                    p[c ? "width": "height"] = s + n
                }
                u.appendChild(N),
                a = parseFloat(N[c ? "offsetWidth": "offsetHeight"]),
                u.removeChild(N),
                c && "%" === n && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {},
                l.time = h, l.width = a / s * 100),
                0 !== a || r || (a = J(t, i, s, n, !0))
            }
            return f && (a /= 100),
            d ? -a: a
        },
        tt = B.calculateOffset = function(t, e, i) {
            if ("absolute" !== K(t, "position", i)) return 0;
            var s = "left" === e ? "Left": "Top",
            n = K(t, "margin" + s, i);
            return t["offset" + s] - (J(t, e, parseFloat(n), n.replace(T, "")) || 0)
        },
        et = function(t, e) {
            var i, s, n, r = {};
            if (e = e || Q(t, null)) if (i = e.length) for (; --i > -1;) n = e[i],
            ( - 1 === n.indexOf("-transform") || Et === n) && (r[n.replace(E, A)] = e.getPropertyValue(n));
            else for (i in e)( - 1 === i.indexOf("Transform") || kt === i) && (r[i] = e[i]);
            else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === r[i] && (r[i.replace(E, A)] = e[i]);
            return W || (r.opacity = q(t)),
            s = Nt(t, e, !1),
            r.rotation = s.rotation,
            r.skewX = s.skewX,
            r.scaleX = s.scaleX,
            r.scaleY = s.scaleY,
            r.x = s.x,
            r.y = s.y,
            At && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ),
            r.filters && delete r.filters,
            r
        },
        it = function(t, e, i, s, n) {
            var r, o, a, l = {},
            h = t.style;
            for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(x, "") ? r: 0 : tt(t, o), void 0 !== h[o] && (a = new _t(h, o, h[o], a)));
            if (s) for (o in s)"className" !== o && (l[o] = s[o]);
            return {
                difs: l,
                firstMPT: a
            }
        },
        st = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        rt = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
            if (t.getBBox && jt(t)) return t.getBBox()[e] || 0;
            var s = parseFloat("width" === e ? t.offsetWidth: t.offsetHeight),
            n = st[e],
            r = n.length;
            for (i = i || Q(t, null); --r > -1;) s -= parseFloat(K(t, "padding" + n[r], i, !0)) || 0,
            s -= parseFloat(K(t, "border" + n[r] + "Width", i, !0)) || 0;
            return s
        },
        ot = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " "; (null == t || "" === t) && (t = "0 0");
            var i, s = t.split(" "),
            n = -1 !== t.indexOf("left") ? "0%": -1 !== t.indexOf("right") ? "100%": s[0],
            r = -1 !== t.indexOf("top") ? "0%": -1 !== t.indexOf("bottom") ? "100%": s[1];
            if (s.length > 3 && !e) {
                for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ot(s[i]));
                return t.join(",")
            }
            return null == r ? r = "center" === n ? "50%": "0": "center" === r && (r = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            t = n + " " + r + (s.length > 2 ? " " + s[2] : ""),
            e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t),
            e || t
        },
        at = function(t, e) {
            return "function" == typeof t && (t = t(_, g)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        },
        lt = function(t, e) {
            return "function" == typeof t && (t = t(_, g)),
            null == t ? e: "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e: parseFloat(t) || 0
        },
        ht = function(t, e, i, s) {
            var n, r, o, a, l, h = 1e-6;
            return "function" == typeof t && (t = t(_, g)),
            null == t ? a = e: "number" == typeof t ? a = t: (n = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * ( - 1 === t.indexOf("rad") ? 1 : X) - (l ? 0 : e), r.length && (s && (s[i] = e + o), -1 !== t.indexOf("short") && (o %= n, o !== o % (n / 2) && (o = 0 > o ? o + n: o - n)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (o / n | 0) * n: -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (o / n | 0) * n)), a = e + o),
            h > a && a > -h && (a = 0),
            a
        },
        ct = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ut = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i: 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        pt = o.parseColor = function(t, e) {
            var i, s, n, r, o, a, l, h, c, u, p;
            if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), n = t.charAt(2), r = t.charAt(3), t = "#" + s + s + n + n + r + r),
                t = parseInt(t.substr(1), 16),
                i = [t >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3)) if (i = p = t.match(v), e) {
                    if ( - 1 !== t.indexOf("=")) return t.match(y)
                } else o = Number(i[0]) % 360 / 360,
                a = Number(i[1]) / 100,
                l = Number(i[2]) / 100,
                n = .5 >= l ? l * (a + 1) : l + a - l * a,
                s = 2 * l - n,
                i.length > 3 && (i[3] = Number(t[3])),
                i[0] = ut(o + 1 / 3, s, n),
                i[1] = ut(o, s, n),
                i[2] = ut(o - 1 / 3, s, n);
                else i = t.match(v) || ct.transparent;
                i[0] = Number(i[0]),
                i[1] = Number(i[1]),
                i[2] = Number(i[2]),
                i.length > 3 && (i[3] = Number(i[3]))
            } else i = ct.black;
            return e && !p && (s = i[0] / 255, n = i[1] / 255, r = i[2] / 255, h = Math.max(s, n, r), c = Math.min(s, n, r), l = (h + c) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === s ? (n - r) / u + (r > n ? 6 : 0) : h === n ? (r - s) / u + 2 : (s - n) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0),
            i
        },
        dt = function(t, e) {
            var i, s, n, r = t.match(ft) || [],
            o = 0,
            a = r.length ? "": t;
            for (i = 0; i < r.length; i++) s = r[i],
            n = t.substr(o, t.indexOf(s, o) - o),
            o += n.length + s.length,
            s = pt(s, e),
            3 === s.length && s.push(1),
            a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
            return a + t.substr(o)
        },
        ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in ct) ft += "|" + h + "\\b";
        ft = new RegExp(ft + ")", "gi"),
        o.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            ft.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = dt(t[0], e), t[1] = dt(t[1], e)),
            ft.lastIndex = 0
        },
        e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
        var mt = function(t, e, i, s) {
            if (null == t) return function(t) {
                return t
            };
            var n, r = e ? (t.match(ft) || [""])[0] : "",
            o = t.split(r).join("").match(w) || [],
            a = t.substr(0, t.indexOf(o[0])),
            l = ")" === t.charAt(t.length - 1) ? ")": "",
            h = -1 !== t.indexOf(" ") ? " ": ",",
            c = o.length,
            u = c > 0 ? o[0].replace(v, "") : "";
            return c ? n = e ?
            function(t) {
                var e, p, d, f;
                if ("number" == typeof t) t += u;
                else if (s && z.test(t)) {
                    for (f = t.replace(z, "|").split("|"), d = 0; d < f.length; d++) f[d] = n(f[d]);
                    return f.join(",")
                }
                if (e = (t.match(ft) || [r])[0], p = t.split(e).join("").match(w) || [], d = p.length, c > d--) for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                return a + p.join(h) + h + e + l + ( - 1 !== t.indexOf("inset") ? " inset": "")
            }: function(t) {
                var e, r, p;
                if ("number" == typeof t) t += u;
                else if (s && z.test(t)) {
                    for (r = t.replace(z, "|").split("|"), p = 0; p < r.length; p++) r[p] = n(r[p]);
                    return r.join(",")
                }
                if (e = t.match(w) || [], p = e.length, c > p--) for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                return a + e.join(h) + l
            }: function(t) {
                return t
            }
        },
        gt = function(t) {
            return t = t.split(","),
            function(e, i, s, n, r, o, a) {
                var l, h = (i + "").split(" ");
                for (a = {},
                l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return n.parse(e, a, r, o)
            }
        },
        _t = (B._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, n, r, o = this.data,
            a = o.proxy,
            l = o.firstMPT,
            h = 1e-6; l;) e = a[l.v],
            l.r ? e = Math.round(e) : h > e && e > -h && (e = 0),
            l.t[l.p] = e,
            l = l._next;
            if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) for (l = o.firstMPT, r = 1 === t ? "e": "b"; l;) {
                if (i = l.t, i.type) {
                    if (1 === i.type) {
                        for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                        i[r] = n
                    }
                } else i[r] = i.s + i.xs0;
                l = l._next
            }
        },
        function(t, e, i, s, n) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = n,
            s && (s._prev = this, this._next = s)
        }),
        vt = (B._parseToProxy = function(t, e, i, s, n, r) {
            var o, a, l, h, c, u = s,
            p = {},
            d = {},
            f = i._transform,
            m = j;
            for (i._transform = null, j = e, s = c = i.parse(t, e, s, n), j = m, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                if (s.type <= 1 && (a = s.p, d[a] = s.s + s.c, p[a] = s.s, r || (h = new _t(s, "s", a, h, s.r), s.c = 0), 1 === s.type)) for (o = s.l; --o > 0;) l = "xn" + o,
                a = s.p + "_" + l,
                d[a] = s.data[l],
                p[a] = s[l],
                r || (h = new _t(s, l, a, h, s.rxp[l]));
                s = s._next
            }
            return {
                proxy: p,
                end: d,
                firstMPT: h,
                pt: c
            }
        },
        B.CSSPropTween = function(t, e, s, n, o, a, l, h, c, u, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = n,
            this.n = l || e,
            t instanceof vt || r.push(this.n),
            this.r = h,
            this.type = a || 0,
            c && (this.pr = c, i = !0),
            this.b = void 0 === u ? s: u,
            this.e = void 0 === p ? s + n: p,
            o && (this._next = o, o._prev = this)
        }),
        yt = function(t, e, i, s, n, r) {
            var o = new vt(t, e, i, s - i, n, -1, r);
            return o.b = i,
            o.e = o.xs0 = s,
            o
        },
        wt = o.parseComplex = function(t, e, i, s, n, r, a, l, h, u) {
            i = i || r || "",
            "function" == typeof s && (s = s(_, g)),
            a = new vt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, s),
            s += "",
            n && ft.test(s + i) && (s = [i, s], o.colorStringFilter(s), i = s[0], s = s[1]);
            var p, d, f, m, w, x, T, b, S, C, P, k, E, O = i.split(", ").join(",").split(" "),
            A = s.split(", ").join(",").split(" "),
            M = O.length,
            R = c !== !1;
            for (( - 1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(z, ", ").split(" "), A = A.join(" ").replace(z, ", ").split(" "), M = O.length), M !== A.length && (O = (r || "").split(" "), M = O.length), a.plugin = h, a.setRatio = u, ft.lastIndex = 0, p = 0; M > p; p++) if (m = O[p], w = A[p], b = parseFloat(m), b || 0 === b) a.appendXtra("", b, at(w, b), w.replace(y, ""), R && -1 !== w.indexOf("px"), !0);
            else if (n && ft.test(m)) k = w.indexOf(")") + 1,
            k = ")" + (k ? w.substr(k) : ""),
            E = -1 !== w.indexOf("hsl") && W,
            m = pt(m, E),
            w = pt(w, E),
            S = m.length + w.length > 6,
            S && !W && 0 === w[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(A[p]).join("transparent")) : (W || (S = !1), E ? a.appendXtra(S ? "hsla(": "hsl(", m[0], at(w[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(w[1], m[1]), "%,", !1).appendXtra("", m[2], at(w[2], m[2]), S ? "%,": "%" + k, !1) : a.appendXtra(S ? "rgba(": "rgb(", m[0], w[0] - m[0], ",", !0, !0).appendXtra("", m[1], w[1] - m[1], ",", !0).appendXtra("", m[2], w[2] - m[2], S ? ",": k, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (w.length < 4 ? 1 : w[3]) - m, k, !1))),
            ft.lastIndex = 0;
            else if (x = m.match(v)) {
                if (T = w.match(y), !T || T.length !== x.length) return a;
                for (f = 0, d = 0; d < x.length; d++) P = x[d],
                C = m.indexOf(P, f),
                a.appendXtra(m.substr(f, C - f), Number(P), at(T[d], P), "", R && "px" === m.substr(C + P.length, 2), 0 === d),
                f = C + P.length;
                a["xs" + a.l] += m.substr(f)
            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + w: w;
            if ( - 1 !== s.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, p = 1; p < a.l; p++) k += a["xs" + p] + a.data["xn" + p];
                a.e = k + a["xs" + p]
            }
            return a.l || (a.type = -1, a.xs0 = a.e),
            a.xfirst || a
        },
        xt = 9;
        for (h = vt.prototype, h.l = h.pr = 0; --xt > 0;) h["xn" + xt] = 0,
        h["xs" + xt] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, s, n, r) {
            var o = this,
            a = o.l;
            return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t: t || "",
            i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new vt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: e + i
            },
            o.rxp = {},
            o.s = e, o.c = i, o.r = n, o)) : (o["xs" + a] += e + (s || ""), o)
        };
        var Tt = function(t, e) {
            e = e || {},
            this.p = e.prefix ? Z(t) || t: t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
        bt = B._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, n, r = t.split(","),
            o = e.defaultValue;
            for (i = i || [o], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix,
            e.defaultValue = i[s] || o,
            n = new Tt(r[s], e)
        },
        St = B._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                bt(t, {
                    parser: function(t, i, s, n, r, o, h) {
                        var c = a.com.greensock.plugins[e];
                        return c ? (c._cssRegister(), l[s].parse(t, i, s, n, r, o, h)) : (U("Error: " + e + " js file not loaded."), r)
                    }
                })
            }
        };
        h = Tt.prototype,
        h.parseComplex = function(t, e, i, s, n, r) {
            var o, a, l, h, c, u, p = this.keyword;
            if (this.multi && (z.test(i) || z.test(e) ? (a = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : p && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length: a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt,
                i = l[o] = l[o] || this.dflt,
                p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && ( - 1 === u ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
        },
        h.parse = function(t, e, i, s, r, o, a) {
            return this.parseComplex(t.style, this.format(K(t, this.p, n, !1, this.dflt)), this.format(e), r, o)
        },
        o.registerSpecialProp = function(t, e, i) {
            bt(t, {
                parser: function(t, s, n, r, o, a, l) {
                    var h = new vt(t, n, 0, 0, o, 2, n, !1, i);
                    return h.plugin = a,
                    h.setRatio = e(t, s, r._tween, n),
                    h
                },
                priority: i
            })
        },
        o.useSVGTransformAttr = p || d;
        var Ct, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        kt = Z("transform"),
        Et = G + "transform",
        Ot = Z("transformOrigin"),
        At = null !== Z("perspective"),
        Mt = B.Transform = function() {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
            this.force3D = o.defaultForce3D !== !1 && At ? o.defaultForce3D || "auto": !1
        },
        Rt = window.SVGElement,
        Dt = function(t, e, i) {
            var s, n = I.createElementNS("http://www.w3.org/2000/svg", t),
            r = /([a-z])([A-Z])/g;
            for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(n),
            n
        },
        zt = I.documentElement,
        Lt = function() {
            var t, e, i, s = m || /Android/i.test(H) && !window.chrome;
            return I.createElementNS && !s && (t = Dt("svg", zt), e = Dt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[kt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(d && At), zt.removeChild(t)),
            s
        } (),
        $t = function(t, e, i, s, n, r) {
            var a, l, h, c, u, p, d, f, m, g, _, v, y, w, x = t._gsTransform,
            T = Ft(t, !0);
            x && (y = x.xOrigin, w = x.yOrigin),
            (!s || (a = s.split(" ")).length < 2) && (d = t.getBBox(), e = ot(e).split(" "), a = [( - 1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width: parseFloat(e[0])) + d.x, ( - 1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height: parseFloat(e[1])) + d.y]),
            i.xOrigin = c = parseFloat(a[0]),
            i.yOrigin = u = parseFloat(a[1]),
            s && T !== It && (p = T[0], d = T[1], f = T[2], m = T[3], g = T[4], _ = T[5], v = p * m - d * f, l = c * (m / v) + u * ( - f / v) + (f * _ - m * g) / v, h = c * ( - d / v) + u * (p / v) - (p * _ - d * g) / v, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h),
            x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), n || n !== !1 && o.defaultSmoothOrigin !== !1 ? (l = c - y, h = u - w, x.xOffset += l * T[0] + h * T[2] - l, x.yOffset += l * T[1] + h * T[3] - h) : x.xOffset = x.yOffset = 0),
            r || t.setAttribute("data-svg-origin", a.join(" "))
        },
        Xt = function(t) {
            try {
                return t.getBBox()
            } catch(t) {}
        },
        jt = function(t) {
            return !! (Rt && t.getBBox && t.getCTM && Xt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        },
        It = [1, 0, 0, 1, 0, 0],
        Ft = function(t, e) {
            var i, s, n, r, o, a, l = t._gsTransform || new Mt,
            h = 1e5,
            c = t.style;
            if (kt ? s = K(t, Et, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(R), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, i && kt && ((a = "none" === Q(t).display) || !t.parentNode) && (a && (r = c.display, c.display = "block"), t.parentNode || (o = 1, zt.appendChild(t)), s = K(t, Et, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? c.display = r: a && Wt(c, "display"), o && zt.removeChild(t)), (l.svg || t.getBBox && jt(t)) && (i && -1 !== (c[kt] + "").indexOf("matrix") && (s = c[kt], i = 0), n = t.getAttribute("transform"), i && n && ( - 1 !== n.indexOf("matrix") ? (s = n, i = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It;
            for (n = (s || "").match(v) || [], xt = n.length; --xt > -1;) r = Number(n[xt]),
            n[xt] = (o = r - (r |= 0)) ? (o * h + (0 > o ? -.5 : .5) | 0) / h + r: r;
            return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
        },
        Nt = B.getTransform = function(t, i, s, n) {
            if (t._gsTransform && s && !n) return t._gsTransform;
            var r, a, l, h, c, u, p = s ? t._gsTransform || new Mt: new Mt,
            d = p.scaleX < 0,
            f = 2e-5,
            m = 1e5,
            g = At ? parseFloat(K(t, Ot, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
            _ = parseFloat(o.defaultTransformPerspective) || 0;
            if (p.svg = !(!t.getBBox || !jt(t)), p.svg && ($t(t, K(t, Ot, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Ct = o.useSVGTransformAttr || Lt), r = Ft(t), r !== It) {
                if (16 === r.length) {
                    var v, y, w, x, T, b = r[0],
                    S = r[1],
                    C = r[2],
                    P = r[3],
                    k = r[4],
                    E = r[5],
                    O = r[6],
                    A = r[7],
                    M = r[8],
                    R = r[9],
                    D = r[10],
                    z = r[12],
                    L = r[13],
                    $ = r[14],
                    j = r[11],
                    I = Math.atan2(O, D);
                    p.zOrigin && ($ = -p.zOrigin, z = M * $ - r[12], L = R * $ - r[13], $ = D * $ + p.zOrigin - r[14]),
                    p.rotationX = I * X,
                    I && (x = Math.cos( - I), T = Math.sin( - I), v = k * x + M * T, y = E * x + R * T, w = O * x + D * T, M = k * -T + M * x, R = E * -T + R * x, D = O * -T + D * x, j = A * -T + j * x, k = v, E = y, O = w),
                    I = Math.atan2( - C, D),
                    p.rotationY = I * X,
                    I && (x = Math.cos( - I), T = Math.sin( - I), v = b * x - M * T, y = S * x - R * T, w = C * x - D * T, R = S * T + R * x, D = C * T + D * x, j = P * T + j * x, b = v, S = y, C = w),
                    I = Math.atan2(S, b),
                    p.rotation = I * X,
                    I && (x = Math.cos( - I), T = Math.sin( - I), b = b * x + k * T, y = S * x + E * T, E = S * -T + E * x, O = C * -T + O * x, S = y),
                    p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY),
                    p.scaleX = (Math.sqrt(b * b + S * S) * m + .5 | 0) / m,
                    p.scaleY = (Math.sqrt(E * E + R * R) * m + .5 | 0) / m,
                    p.scaleZ = (Math.sqrt(O * O + D * D) * m + .5 | 0) / m,
                    p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = k || E ? Math.atan2(k, E) * X + p.rotation: p.skewX || 0, Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180))),
                    p.perspective = j ? 1 / (0 > j ? -j: j) : 0,
                    p.x = z,
                    p.y = L,
                    p.z = $,
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * k), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * E))
                } else if (!At || n || !r.length || p.x !== r[4] || p.y !== r[5] || !p.rotationX && !p.rotationY) {
                    var F = r.length >= 6,
                    N = F ? r[0] : 1,
                    Y = r[1] || 0,
                    B = r[2] || 0,
                    H = F ? r[3] : 1;
                    p.x = r[4] || 0,
                    p.y = r[5] || 0,
                    l = Math.sqrt(N * N + Y * Y),
                    h = Math.sqrt(H * H + B * B),
                    c = N || Y ? Math.atan2(Y, N) * X: p.rotation || 0,
                    u = B || H ? Math.atan2(B, H) * X + c: p.skewX || 0,
                    Math.abs(u) > 90 && Math.abs(u) < 270 && (d ? (l *= -1, u += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)),
                    p.scaleX = l,
                    p.scaleY = h,
                    p.rotation = c,
                    p.skewX = u,
                    At && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1),
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * N + p.yOrigin * B), p.y -= p.yOrigin - (p.xOrigin * Y + p.yOrigin * H))
                }
                p.zOrigin = g;
                for (a in p) p[a] < f && p[a] > -f && (p[a] = 0)
            }
            return s && (t._gsTransform = p, p.svg && (Ct && t.style[kt] ? e.delayedCall(.001,
            function() {
                Wt(t.style, kt)
            }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001,
            function() {
                t.removeAttribute("transform")
            }))),
            p
        },
        Yt = function(t) {
            var e, i, s = this.data,
            n = -s.rotation * $,
            r = n + s.skewX * $,
            o = 1e5,
            a = (Math.cos(n) * s.scaleX * o | 0) / o,
            l = (Math.sin(n) * s.scaleX * o | 0) / o,
            h = (Math.sin(r) * -s.scaleY * o | 0) / o,
            c = (Math.cos(r) * s.scaleY * o | 0) / o,
            u = this.t.style,
            p = this.t.currentStyle;
            if (p) {
                i = l,
                l = -h,
                h = -i,
                e = p.filter,
                u.filter = "";
                var d, f, g = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                v = "absolute" !== p.position,
                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                w = s.x + g * s.xPercent / 100,
                x = s.y + _ * s.yPercent / 100;
                if (null != s.ox && (d = (s.oxp ? g * s.ox * .01 : s.ox) - g / 2, f = (s.oyp ? _ * s.oy * .01 : s.oy) - _ / 2, w += d - (d * a + f * l), x += f - (d * h + f * c)), v ? (d = g / 2, f = _ / 2, y += ", Dx=" + (d - (d * a + f * l) + w) + ", Dy=" + (f - (d * h + f * c) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(D, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var S, C, P, k = 8 > m ? 1 : -1;
                    for (d = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((g - ((0 > a ? -a: a) * g + (0 > l ? -l: l) * _)) / 2 + w), s.ieOffsetY = Math.round((_ - ((0 > c ? -c: c) * _ + (0 > h ? -h: h) * g)) / 2 + x), xt = 0; 4 > xt; xt++) C = nt[xt],
                    S = p[C],
                    i = -1 !== S.indexOf("px") ? parseFloat(S) : J(this.t, C, parseFloat(S), S.replace(T, "")) || 0,
                    P = i !== s[C] ? 2 > xt ? -s.ieOffsetX: -s.ieOffsetY: 2 > xt ? d - s.ieOffsetX: f - s.ieOffsetY,
                    u[C] = (s[C] = Math.round(i - P * (0 === xt || 2 === xt ? 1 : k))) + "px"
                }
            }
        },
        Bt = B.set3DTransformRatio = B.setTransformRatio = function(t) {
            var e, i, s, n, r, o, a, l, h, c, u, p, f, m, g, _, v, y, w, x, T, b, S, C = this.data,
            P = this.t.style,
            k = C.rotation,
            E = C.rotationX,
            O = C.rotationY,
            A = C.scaleX,
            M = C.scaleY,
            R = C.scaleZ,
            D = C.x,
            z = C.y,
            L = C.z,
            X = C.svg,
            j = C.perspective,
            I = C.force3D;
            if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !L && !j && !O && !E && 1 === R || Ct && X || !At) return void(k || C.skewX || X ? (k *= $, b = C.skewX * $, S = 1e5, e = Math.cos(k) * A, n = Math.sin(k) * A, i = Math.sin(k - b) * -M, r = Math.cos(k - b) * M, b && "simple" === C.skewType && (v = Math.tan(b - C.skewY * $), v = Math.sqrt(1 + v * v), i *= v, r *= v, C.skewY && (v = Math.tan(C.skewY * $), v = Math.sqrt(1 + v * v), e *= v, n *= v)), X && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * n + C.yOrigin * r) + C.yOffset, Ct && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), D += .01 * C.xPercent * m.width, z += .01 * C.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > z && z > -m && (z = 0)), w = (e * S | 0) / S + "," + (n * S | 0) / S + "," + (i * S | 0) / S + "," + (r * S | 0) / S + "," + D + "," + z + ")", X && Ct ? this.t.setAttribute("transform", "matrix(" + w) : P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(": "matrix(") + w) : P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(": "matrix(") + A + ",0,0," + M + "," + D + "," + z + ")");
            if (d && (m = 1e-4, m > A && A > -m && (A = R = 2e-5), m > M && M > -m && (M = R = 2e-5), !j || C.z || C.rotationX || C.rotationY || (j = 0)), k || C.skewX) k *= $,
            g = e = Math.cos(k),
            _ = n = Math.sin(k),
            C.skewX && (k -= C.skewX * $, g = Math.cos(k), _ = Math.sin(k), "simple" === C.skewType && (v = Math.tan((C.skewX - C.skewY) * $), v = Math.sqrt(1 + v * v), g *= v, _ *= v, C.skewY && (v = Math.tan(C.skewY * $), v = Math.sqrt(1 + v * v), e *= v, n *= v))),
            i = -_,
            r = g;
            else {
                if (! (O || E || 1 !== R || j || X)) return void(P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(": "translate3d(") + D + "px," + z + "px," + L + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")": ""));
                e = r = 1,
                i = n = 0
            }
            h = 1,
            s = o = a = l = c = u = 0,
            p = j ? -1 / j: 0,
            f = C.zOrigin,
            m = 1e-6,
            x = ",",
            T = "0",
            k = O * $,
            k && (g = Math.cos(k), _ = Math.sin(k), a = -_, c = p * -_, s = e * _, o = n * _, h = g, p *= g, e *= g, n *= g),
            k = E * $,
            k && (g = Math.cos(k), _ = Math.sin(k), v = i * g + s * _, y = r * g + o * _, l = h * _, u = p * _, s = i * -_ + s * g, o = r * -_ + o * g, h *= g, p *= g, i = v, r = y),
            1 !== R && (s *= R, o *= R, h *= R, p *= R),
            1 !== M && (i *= M, r *= M, l *= M, u *= M),
            1 !== A && (e *= A, n *= A, a *= A, c *= A),
            (f || X) && (f && (D += s * -f, z += o * -f, L += h * -f + f), X && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * n + C.yOrigin * r) + C.yOffset), m > D && D > -m && (D = T), m > z && z > -m && (z = T), m > L && L > -m && (L = 0)),
            w = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(": "matrix3d(",
            w += (m > e && e > -m ? T: e) + x + (m > n && n > -m ? T: n) + x + (m > a && a > -m ? T: a),
            w += x + (m > c && c > -m ? T: c) + x + (m > i && i > -m ? T: i) + x + (m > r && r > -m ? T: r),
            E || O || 1 !== R ? (w += x + (m > l && l > -m ? T: l) + x + (m > u && u > -m ? T: u) + x + (m > s && s > -m ? T: s), w += x + (m > o && o > -m ? T: o) + x + (m > h && h > -m ? T: h) + x + (m > p && p > -m ? T: p) + x) : w += ",0,0,0,0,1,0,",
            w += D + x + z + x + L + x + (j ? 1 + -L / j: 1) + ")",
            P[kt] = w
        };
        h = Mt.prototype,
        h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
        h.scaleX = h.scaleY = h.scaleZ = 1,
        bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, s, r, a, l) {
                if (s._lastParsedTransform === l) return r;
                s._lastParsedTransform = l;
                var h;
                "function" == typeof l[i] && (h = l[i], l[i] = e);
                var c, u, p, d, f, m, v, y, w, x = t._gsTransform,
                T = t.style,
                b = 1e-6,
                S = Pt.length,
                C = l,
                P = {},
                k = "transformOrigin",
                E = Nt(t, n, !0, C.parseTransform),
                O = C.transform && ("function" == typeof C.transform ? C.transform(_, g) : C.transform);
                if (s._transform = E, O && "string" == typeof O && kt) u = N.style,
                u[kt] = O,
                u.display = "block",
                u.position = "absolute",
                I.body.appendChild(N),
                c = Nt(N, null, !1),
                E.svg && (m = E.xOrigin, v = E.yOrigin, c.x -= E.xOffset, c.y -= E.yOffset, (C.transformOrigin || C.svgOrigin) && (O = {},
                $t(t, ot(C.transformOrigin), O, C.svgOrigin, C.smoothOrigin, !0), m = O.xOrigin, v = O.yOrigin, c.x -= O.xOffset - E.xOffset, c.y -= O.yOffset - E.yOffset), (m || v) && (y = Ft(N, !0), c.x -= m - (m * y[0] + v * y[2]), c.y -= v - (m * y[1] + v * y[3]))),
                I.body.removeChild(N),
                c.perspective || (c.perspective = E.perspective),
                null != C.xPercent && (c.xPercent = lt(C.xPercent, E.xPercent)),
                null != C.yPercent && (c.yPercent = lt(C.yPercent, E.yPercent));
                else if ("object" == typeof C) {
                    if (c = {
                        scaleX: lt(null != C.scaleX ? C.scaleX: C.scale, E.scaleX),
                        scaleY: lt(null != C.scaleY ? C.scaleY: C.scale, E.scaleY),
                        scaleZ: lt(C.scaleZ, E.scaleZ),
                        x: lt(C.x, E.x),
                        y: lt(C.y, E.y),
                        z: lt(C.z, E.z),
                        xPercent: lt(C.xPercent, E.xPercent),
                        yPercent: lt(C.yPercent, E.yPercent),
                        perspective: lt(C.transformPerspective, E.perspective)
                    },
                    f = C.directionalRotation, null != f) if ("object" == typeof f) for (u in f) C[u] = f[u];
                    else C.rotation = f;
                    "string" == typeof C.x && -1 !== C.x.indexOf("%") && (c.x = 0, c.xPercent = lt(C.x, E.xPercent)),
                    "string" == typeof C.y && -1 !== C.y.indexOf("%") && (c.y = 0, c.yPercent = lt(C.y, E.yPercent)),
                    c.rotation = ht("rotation" in C ? C.rotation: "shortRotation" in C ? C.shortRotation + "_short": "rotationZ" in C ? C.rotationZ: E.rotation - E.skewY, E.rotation - E.skewY, "rotation", P),
                    At && (c.rotationX = ht("rotationX" in C ? C.rotationX: "shortRotationX" in C ? C.shortRotationX + "_short": E.rotationX || 0, E.rotationX, "rotationX", P), c.rotationY = ht("rotationY" in C ? C.rotationY: "shortRotationY" in C ? C.shortRotationY + "_short": E.rotationY || 0, E.rotationY, "rotationY", P)),
                    c.skewX = ht(C.skewX, E.skewX - E.skewY),
                    (c.skewY = ht(C.skewY, E.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                }
                for (At && null != C.force3D && (E.force3D = C.force3D, d = !0), E.skewType = C.skewType || E.skewType || o.defaultSkewType, p = E.force3D || E.z || E.rotationX || E.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == C.scale || (c.scaleZ = 1); --S > -1;) w = Pt[S],
                O = c[w] - E[w],
                (O > b || -b > O || null != C[w] || null != j[w]) && (d = !0, r = new vt(E, w, E[w], O, r), w in P && (r.e = P[w]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                return O = C.transformOrigin,
                E.svg && (O || C.svgOrigin) && (m = E.xOffset, v = E.yOffset, $t(t, ot(O), c, C.svgOrigin, C.smoothOrigin), r = yt(E, "xOrigin", (x ? E: c).xOrigin, c.xOrigin, r, k), r = yt(E, "yOrigin", (x ? E: c).yOrigin, c.yOrigin, r, k), (m !== E.xOffset || v !== E.yOffset) && (r = yt(E, "xOffset", x ? m: E.xOffset, E.xOffset, r, k), r = yt(E, "yOffset", x ? v: E.yOffset, E.yOffset, r, k)), O = Ct ? null: "0px 0px"),
                (O || At && p && E.zOrigin) && (kt ? (d = !0, w = Ot, O = (O || K(t, w, n, !1, "50% 50%")) + "", r = new vt(T, w, 0, 0, r, -1, k), r.b = T[w], r.plugin = a, At ? (u = E.zOrigin, O = O.split(" "), E.zOrigin = (O.length > 2 && (0 === u || "0px" !== O[2]) ? parseFloat(O[2]) : u) || 0, r.xs0 = r.e = O[0] + " " + (O[1] || "50%") + " 0px", r = new vt(E, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = E.zOrigin) : r.xs0 = r.e = O) : ot(O + "", E)),
                d && (s._transformType = E.svg && Ct || !p && 3 !== this._transformType ? 2 : 3),
                h && (l[i] = h),
                r
            },
            prefix: !0
        }),
        bt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #fff",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        bt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, o, a) {
                e = this.format(e);
                var l, h, c, u, p, d, f, m, g, _, v, y, w, x, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                C = t.style;
                for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Z(S[h])),
                p = u = K(t, S[h], n, !1, "0px"),
                -1 !== p.indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]),
                d = c = l[h],
                f = parseFloat(p),
                y = p.substr((f + "").length),
                w = "=" === d.charAt(1),
                w ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), v = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), v = d.substr((m + "").length)),
                "" === v && (v = s[i] || y),
                v !== y && (x = J(t, "borderLeft", f, y), T = J(t, "borderTop", f, y), "%" === v ? (p = x / g * 100 + "%", u = T / _ * 100 + "%") : "em" === v ? (b = J(t, "borderLeft", 1, "em"), p = x / b + "em", u = T / b + "em") : (p = x + "px", u = T + "px"), w && (d = parseFloat(p) + m + v, c = parseFloat(u) + m + v)),
                o = wt(C, S[h], p + " " + u, d + " " + c, !1, "0px", o);
                return o
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0)
        }),
        bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, r, o) {
                return wt(t.style, i, this.format(K(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: mt("0px 0px", !1, !0)
        }),
        bt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, r, o) {
                var a, l, h, c, u, p, d = "background-position",
                f = n || Q(t, null),
                g = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                _ = this.format(e);
                if ( - 1 !== g.indexOf("%") != ( - 1 !== _.indexOf("%")) && _.split(",").length < 2 && (p = K(t, "backgroundImage").replace(O, ""), p && "none" !== p)) {
                    for (a = g.split(" "), l = _.split(" "), Y.setAttribute("src", p), h = 2; --h > -1;) g = a[h],
                    c = -1 !== g.indexOf("%"),
                    c !== ( - 1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - Y.width: t.offsetHeight - Y.height, a[h] = c ? parseFloat(g) / 100 * u + "px": parseFloat(g) / u * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, _, r, o)
            },
            formatter: ot
        }),
        bt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return t += "",
                ot( - 1 === t.indexOf(" ") ? t + " " + t: t)
            }
        }),
        bt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        bt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        bt("transformStyle", {
            prefix: !0
        }),
        bt("backfaceVisibility", {
            prefix: !0
        }),
        bt("userSelect", {
            prefix: !0
        }),
        bt("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        bt("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        bt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, r, o) {
                var a, l, h;
                return 9 > m ? (l = t.currentStyle, h = 8 > m ? " ": ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(K(t, this.p, n, !1, this.dflt)), e = this.format(e)),
                this.parseComplex(t.style, a, e, r, o)
            }
        }),
        bt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        bt("autoRound,strictUnits", {
            parser: function(t, e, i, s, n) {
                return n
            }
        }),
        bt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, r, o) {
                var a = K(t, "borderTopWidth", n, !1, "0px"),
                l = this.format(e).split(" "),
                h = l[0].replace(T, "");
                return "px" !== h && (a = parseFloat(a) / J(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", n, !1, "solid") + " " + K(t, "borderTopColor", n, !1, "#000")), l.join(" "), r, o)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0]
            }
        }),
        bt("borderWidth", {
            parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        bt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, n, r) {
                var o = t.style,
                a = "cssFloat" in o ? "cssFloat": "styleFloat";
                return new vt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e)
            }
        });
        var Ht = function(t) {
            var e, i = this.t,
            s = i.filter || K(this.data, "filter") || "",
            n = this.s + this.c * t | 0;
            100 === n && ( - 1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = s.replace(C, ""), e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(b, "opacity=" + n))
        };
        bt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, r, o) {
                var a = parseFloat(K(t, "opacity", n, !1, "1")),
                l = t.style,
                h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                h && 1 === a && "hidden" === K(t, "visibility", n) && 0 !== e && (a = 0),
                W ? r = new vt(l, "opacity", a, e - a, r) : (r = new vt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Ht),
                h && (r = new vt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit": "hidden", 0 === e ? "hidden": "inherit"), r.xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)),
                r
            }
        });
        var Wt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
        qt = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b: this.e);
                for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v: Wt(i, e.p),
                e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        bt("className", {
            parser: function(t, e, s, r, o, a, l) {
                var h, c, u, p, d, f = t.getAttribute("class") || "",
                m = t.style.cssText;
                if (o = r._classNamePT = new vt(t, s, 0, 0, o, 2), o.setRatio = qt, o.pr = -11, i = !0, o.b = f, c = et(t, n), u = t._gsClassPT) {
                    for (p = {},
                    d = u.data; d;) p[d.p] = 1,
                    d = d._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = o,
                o.e = "=" !== e.charAt(1) ? e: f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", o.e),
                h = it(t, c, et(t), l, p),
                t.setAttribute("class", f),
                o.data = h.firstMPT,
                t.style.cssText = m,
                o = o.xfirst = r.parse(t, h.difs, o, a)
            }
        });
        var Ut = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, n, r, o = this.t.style,
                a = l.transform.parse;
                if ("all" === this.e) o.cssText = "",
                n = !0;
                else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s],
                l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Ot: l[i].p),
                Wt(o, i);
                n && (Wt(o, kt), r = this.t._gsTransform, r && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (bt("clearProps", {
            parser: function(t, e, s, n, r) {
                return r = new vt(t, s, 0, 0, r, 2),
                r.setRatio = Ut,
                r.e = e,
                r.pr = -10,
                r.data = n._tween,
                i = !0,
                r
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), xt = h.length; xt--;) St(h[xt]);
        h = o.prototype,
        h._firstPT = h._lastParsedTransform = h._transform = null,
        h._onInitTween = function(t, e, a, h) {
            if (!t.nodeType) return ! 1;
            this._target = g = t,
            this._tween = a,
            this._vars = e,
            _ = h,
            c = e.autoRound,
            i = !1,
            s = e.suffixMap || o.suffixMap,
            n = Q(t, ""),
            r = this._overwriteProps;
            var d, m, v, y, w, x, T, b, C, P = t.style;
            if (u && "" === P.zIndex && (d = K(t, "zIndex", n), ("auto" === d || "" === d) && this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (y = P.cssText, d = et(t, n), P.cssText = y + ";" + e, d = it(t, d, et(t)).difs, !W && S.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, P.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                for (C = 3 === this._transformType, kt ? p && (u = !0, "" === P.zIndex && (T = K(t, "zIndex", n), ("auto" === T || "" === T) && this._addLazySet(P, "zIndex", 0)), f && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible": "hidden"))) : P.zoom = 1, v = m; v && v._next;) v = v._next;
                b = new vt(t, "transform", 0, 0, null, 2),
                this._linkCSSP(b, null, v),
                b.setRatio = kt ? Bt: Yt,
                b.data = this._transform || Nt(t, n, !0),
                b.tween = a,
                b.pr = -1,
                r.pop()
            }
            if (i) {
                for (; m;) {
                    for (x = m._next, v = y; v && v.pr > m.pr;) v = v._next; (m._prev = v ? v._prev: w) ? m._prev._next = m: y = m,
                    (m._next = v) ? v._prev = m: w = m,
                    m = x
                }
                this._firstPT = y
            }
            return ! 0
        },
        h.parse = function(t, e, i, r) {
            var o, a, h, u, p, d, f, m, v, y, w = t.style;
            for (o in e) d = e[o],
            "function" == typeof d && (d = d(_, g)),
            a = l[o],
            a ? i = a.parse(t, d, o, this, i, r, e) : (p = K(t, o, n) + "", v = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && P.test(d) ? (v || (d = pt(d), d = (d.length > 3 ? "rgba(": "rgb(") + d.join(",") + ")"), i = wt(w, o, p, d, !0, "transparent", i, 0, r)) : v && L.test(d) ? i = wt(w, o, p, d, !0, null, i, 0, r) : (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = rt(t, o, n), f = "px") : "left" === o || "top" === o ? (h = tt(t, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), y = v && "=" === d.charAt(1), y ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(T, "")) : (u = parseFloat(d), m = v ? d.replace(T, "") : ""), "" === m && (m = o in s ? s[o] : f), d = u || 0 === u ? (y ? u + h: u) + m: e[o], f !== m && "" !== m && (u || 0 === u) && h && (h = J(t, o, h, f), "%" === m ? (h /= J(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= J(t, o, 1, m) : "px" !== m && (u = J(t, o, u, m), m = "px"), y && (u || 0 === u) && (d = u + h + m)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== w[o] && (d || d + "" != "NaN" && null != d) ? (i = new vt(w, o, u || h || 0, 0, i, -1, o, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d: p) : U("invalid " + o + " tween value: " + e[o]) : (i = new vt(w, o, h, u - h, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, d), i.xs0 = m))),
            r && i && !i.plugin && (i.plugin = r);
            return i
        },
        h.setRatio = function(t) {
            var e, i, s, n = this._firstPT,
            r = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; n;) {
                if (e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.type) if (1 === n.type) if (s = n.l, 2 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                else {
                    for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                    n.t[n.p] = i
                } else - 1 === n.type ? n.t[n.p] = n.xs0: n.setRatio && n.setRatio(t);
                else n.t[n.p] = e + n.xs0;
                n = n._next
            } else for (; n;) 2 !== n.type ? n.t[n.p] = n.b: n.setRatio(t),
            n = n._next;
            else for (; n;) {
                if (2 !== n.type) if (n.r && -1 !== n.type) if (e = Math.round(n.s + n.c), n.type) {
                    if (1 === n.type) {
                        for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                        n.t[n.p] = i
                    }
                } else n.t[n.p] = e + n.xs0;
                else n.t[n.p] = n.e;
                else n.setRatio(t);
                n = n._next
            }
        },
        h._enableTransforms = function(t) {
            this._transform = this._transform || Nt(this._target, n, !0),
            this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
        };
        var Gt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var s = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
            s.e = i,
            s.setRatio = Gt,
            s.data = this
        },
        h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next: this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t: s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
            t
        },
        h._mod = function(t) {
            for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
            e = e._next
        },
        h._kill = function(e) {
            var i, s, n, r = e;
            if (e.autoAlpha || e.alpha) {
                r = {};
                for (s in e) r[s] = e[s];
                r.opacity = 1,
                r.autoAlpha && (r.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin),
            i = i._next;
            return t.prototype._kill.call(this, r)
        };
        var Vt = function(t, e, i) {
            var s, n, r, o;
            if (t.slice) for (n = t.length; --n > -1;) Vt(t[n], e, i);
            else for (s = t.childNodes, n = s.length; --n > -1;) r = s[n],
            o = r.type,
            r.style && (e.push(et(r)), i && i.push(r)),
            1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Vt(r, e, i)
        };
        return o.cascadeTo = function(t, i, s) {
            var n, r, o, a, l = e.to(t, i, s),
            h = [l],
            c = [],
            u = [],
            p = [],
            d = e._internals.reservedProps;
            for (t = l._targets || l.target, Vt(t, c, p), l.render(i, !0, !0), Vt(t, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;) if (r = it(p[n], c[n], u[n]), r.firstMPT) {
                r = r.difs;
                for (o in s) d[o] && (r[o] = s[o]);
                a = {};
                for (o in r) a[o] = c[n][o];
                h.push(e.fromTo(p[n], i, a, r))
            }
            return h
        },
        t.activate([o]),
        o
    },
    !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        }),
        e = function(t) {
            for (; t;) t.f || t.blob || (t.m = Math.round),
            t = t._next
        },
        i = t.prototype;
        i._onInitAllProps = function() {
            for (var t, i, s, n = this._tween,
            r = n.vars.roundProps.join ? n.vars.roundProps: n.vars.roundProps.split(","), o = r.length, a = {},
            l = n._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
            for (o = r.length; --o > -1;) for (t = r[o], i = n._firstPT; i;) s = i._next,
            i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s: n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[t] = l)),
            i = s;
            return ! 1
        },
        i._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, Math.round),
            this._overwriteProps.push(e)
        }
    } (),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.0",
            init: function(t, e, i, s) {
                var n, r;
                if ("function" != typeof t.setAttribute) return ! 1;
                for (n in e) r = e[n],
                "function" == typeof r && (r = r(s, t)),
                this._addTween(t, "setAttribute", t.getAttribute(n) + "", r + "", n, !1, n),
                this._overwriteProps.push(n);
                return ! 0
            }
        })
    } (),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function(t, e, i, s) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var n, r, o, a, l, h, c = e.useRadians === !0 ? 2 * Math.PI: 360,
            u = 1e-6;
            for (n in e)"useRadians" !== n && (a = e[n], "function" == typeof a && (a = a(s, t)), h = (a + "").split("_"), r = h[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, l = a - o, h.length && (r = h.join("_"), -1 !== r.indexOf("short") && (l %= c, l !== l % (c / 2) && (l = 0 > l ? l + c: l - c)), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c: -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > u || -u > l) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n)));
            return ! 0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
            e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"],
    function(t) {
        var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
        r = n.com.greensock,
        o = 2 * Math.PI,
        a = Math.PI / 2,
        l = r._class,
        h = function(e, i) {
            var s = l("easing." + e,
            function() {},
            !0),
            n = s.prototype = new t;
            return n.constructor = s,
            n.getRatio = i,
            s
        },
        c = t.register ||
        function() {},
        u = function(t, e, i, s, n) {
            var r = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            },
            !0);
            return c(r, t),
            r
        },
        p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        d = function(e, i) {
            var s = l("easing." + e,
            function(t) {
                this._p1 = t || 0 === t ? t: 1.70158,
                this._p2 = 1.525 * this._p1
            },
            !0),
            n = s.prototype = new t;
            return n.constructor = s,
            n.getRatio = i,
            n.config = function(t) {
                return new s(t)
            },
            s
        },
        f = u("Back", d("BackOut",
        function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), d("BackIn",
        function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), d("BackInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        m = l("easing.SlowMo",
        function(t, e, i) {
            e = e || 0 === e ? e: .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e: 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        },
        !0),
        g = m.prototype = new t;
        return g.constructor = m,
        g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t: e - (t = 1 - t / this._p1) * t * t * t * e: t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t: e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t: this._calcEnd ? 1 : e
        },
        m.ease = new m(.7, .7),
        g.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        },
        e = l("easing.SteppedEase",
        function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        },
        !0),
        g = e.prototype = new t,
        g.constructor = e,
        g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        },
        g.config = e.config = function(t) {
            return new e(t)
        },
        i = l("easing.RoughEase",
        function(e) {
            e = e || {};
            for (var i, s, n, r, o, a, l = e.taper || "none",
            h = [], c = 0, u = 0 | (e.points || 20), d = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template: null, _ = "number" == typeof e.strength ? .4 * e.strength: .4; --d > -1;) i = f ? Math.random() : 1 / u * d,
            s = g ? g.getRatio(i) : i,
            "none" === l ? n = _: "out" === l ? (r = 1 - i, n = r * r * _) : "in" === l ? n = i * i * _: .5 > i ? (r = 2 * i, n = r * r * .5 * _) : (r = 2 * (1 - i), n = r * r * .5 * _),
            f ? s += Math.random() * n - .5 * n: d % 2 ? s += .5 * n: s -= .5 * n,
            m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
            h[c++] = {
                x: i,
                y: s
            };
            for (h.sort(function(t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), d = u; --d > -1;) o = h[d],
            a = new p(o.x, o.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a: a.next)
        },
        !0),
        g = i.prototype = new t,
        g.constructor = i,
        g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        },
        g.config = function(t) {
            return new i(t)
        },
        i.ease = new i,
        u("Bounce", h("BounceOut",
        function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn",
        function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t: 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut",
        function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t: 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", h("CircOut",
        function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn",
        function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut",
        function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var n = l("easing." + e,
            function(t, e) {
                this._p1 = t >= 1 ? t: 1,
                this._p2 = (e || s) / (1 > t ? t: 1),
                this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0),
                this._p2 = o / this._p2
            },
            !0),
            r = n.prototype = new t;
            return r.constructor = n,
            r.getRatio = i,
            r.config = function(t, e) {
                return new n(t, e)
            },
            n
        },
        u("Elastic", s("ElasticOut",
        function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        },
        .3), s("ElasticIn",
        function(t) {
            return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        },
        .3), s("ElasticInOut",
        function(t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        },
        .45)),
        u("Expo", h("ExpoOut",
        function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn",
        function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", h("SineOut",
        function(t) {
            return Math.sin(t * a)
        }), h("SineIn",
        function(t) {
            return - Math.cos(t * a) + 1
        }), h("SineInOut",
        function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        })),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        },
        !0),
        c(n.SlowMo, "SlowMo", "ease,"),
        c(i, "RoughEase", "ease,"),
        c(e, "SteppedEase", "ease,"),
        f
    },
    !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = {},
    s = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!s.TweenLite) {
        var n, r, o, a, l, h = function(t) {
            var e, i = t.split("."),
            n = s;
            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
            return n
        },
        c = h("com.greensock"),
        u = 1e-10,
        p = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        d = function() {},
        f = function() {
            var t = Object.prototype.toString,
            e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        } (),
        m = {},
        g = function(n, r, o, a) {
            this.sc = m[n] ? m[n].sc: [],
            m[n] = this,
            this.gsClass = null,
            this.func = o;
            var l = [];
            this.check = function(c) {
                for (var u, p, d, f, _, v = r.length,
                y = v; --v > -1;)(u = m[r[v]] || new g(r[v], [])).gsClass ? (l[v] = u.gsClass, y--) : c && u.sc.push(this);
                if (0 === y && o) {
                    if (p = ("com.greensock." + n).split("."), d = p.pop(), f = h(p.join("."))[d] = this.gsClass = o.apply(o, l), a) if (s[d] = i[d] = f, _ = "undefined" != typeof module && module.exports, !_ && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/": "") + n.split(".").pop(), [],
                    function() {
                        return f
                    });
                    else if (_) if (n === e) {
                        module.exports = i[e] = f;
                        for (v in i) f[v] = i[v]
                    } else i[e] && (i[e][d] = f);
                    for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                }
            },
            this.check(!0)
        },
        _ = t._gsDefine = function(t, e, i, s) {
            return new g(t, e, i, s)
        },
        v = c._class = function(t, e, i) {
            return e = e ||
            function() {},
            _(t, [],
            function() {
                return e
            },
            i),
            e
        };
        _.globals = s;
        var y = [0, 0, 1, 1],
        w = v("easing.Ease",
        function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? y.concat(e) : y
        },
        !0),
        x = w.map = {},
        T = w.register = function(t, e, i, s) {
            for (var n, r, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (r = l[h], n = s ? v("easing." + r, null, !0) : c.easing[r] || {},
            o = u.length; --o > -1;) a = u[o],
            x[r + "." + a] = x[a + r] = n[a] = t.getRatio ? t: t[a] || new t
        };
        for (o = w.prototype, o._calcEnd = !1, o.getRatio = function(t) {
            if (this._func) return this._params[0] = t,
            this._func.apply(null, this._params);
            var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t: 2 === e ? t: .5 > t ? 2 * t: 2 * (1 - t);
            return 1 === i ? s *= s: 2 === i ? s *= s * s: 3 === i ? s *= s * s * s: 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s: 2 === e ? s: .5 > t ? s / 2 : 1 - s / 2
        },
        n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r,
        T(new w(null, null, 1, r), o, "easeOut", !0),
        T(new w(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone": "")),
        T(new w(null, null, 3, r), o, "easeInOut");
        x.linear = c.easing.Linear.easeIn,
        x.swing = c.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher",
        function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        o = b.prototype,
        o.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, o, h = this._listeners[t],
            c = 0;
            for (this !== a || l || a.wake(), null == h && (this._listeners[t] = h = []), o = h.length; --o > -1;) r = h[o],
            r.c === e && r.s === i ? h.splice(o, 1) : 0 === c && r.pr < n && (c = o + 1);
            h.splice(c, 0, {
                c: e,
                s: i,
                up: s,
                pr: n
            })
        },
        o.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return void s.splice(i, 1)
        },
        o.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n) for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;) s = n[e],
            s && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i))
        };
        var S = t.requestAnimationFrame,
        C = t.cancelAnimationFrame,
        P = Date.now ||
        function() {
            return (new Date).getTime()
        },
        k = P();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"],
        C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        v("Ticker",
        function(t, e) {
            var i, s, n, r, o, h = this,
            c = P(),
            p = e !== !1 && S ? "auto": !1,
            f = 500,
            m = 33,
            g = "tick",
            _ = function(t) {
                var e, a, l = P() - k;
                l > f && (c += l - m),
                k += l,
                h.time = (k - c) / 1e3,
                e = h.time - o,
                (!i || e > 0 || t === !0) && (h.frame++, o += e + (e >= r ? .004 : r - e), a = !0),
                t !== !0 && (n = s(_)),
                a && h.dispatchEvent(g)
            };
            b.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                _(!0)
            },
            h.lagSmoothing = function(t, e) {
                f = t || 1 / u,
                m = Math.min(e, f, 0)
            },
            h.sleep = function() {
                null != n && (p && C ? C(n) : clearTimeout(n), s = d, n = null, h === a && (l = !1))
            },
            h.wake = function(t) {
                null !== n ? h.sleep() : t ? c += -k + (k = P()) : h.frame > 10 && (k = P() - f + 5),
                s = 0 === i ? d: p && S ? S: function(t) {
                    return setTimeout(t, 1e3 * (o - h.time) + 1 | 0)
                },
                h === a && (l = !0),
                _(2)
            },
            h.fps = function(t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), o = this.time + r, void h.wake()) : i
            },
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), p = t, void h.fps(i)) : p
            },
            h.fps(t),
            setTimeout(function() {
                "auto" === p && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
            },
            1500)
        }),
        o = c.Ticker.prototype = new c.events.EventDispatcher,
        o.constructor = c.Ticker;
        var E = v("core.Animation",
        function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                l || a.wake();
                var i = this.vars.useFrames ? q: U;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = E.ticker = new c.Ticker,
        o = E.prototype,
        o._dirty = o._gc = o._initted = o._paused = !1,
        o._totalTime = o._time = 0,
        o._rawPrevTime = -1,
        o._next = o._last = o._onUpdate = o._timeline = o.timeline = null,
        o._paused = !1;
        var O = function() {
            l && P() - k > 2e3 && a.wake(),
            setTimeout(O, 2e3)
        };
        O(),
        o.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        o.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        },
        o.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        },
        o.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        },
        o.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay: 0, e !== !1, !0)
        },
        o.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        o.render = function(t, e, i) {},
        o.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        },
        o.isActive = function() {
            var t, e = this._timeline,
            i = this._startTime;
            return ! e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        },
        o._enabled = function(t, e) {
            return l || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        o._kill = function(t, e) {
            return this._enabled(!1, !1)
        },
        o.kill = function(t, e) {
            return this._kill(t, e),
            this
        },
        o._uncache = function(t) {
            for (var e = t ? this: this.timeline; e;) e._dirty = !0,
            e = e.timeline;
            return this
        },
        o._swapSelfInParams = function(t) {
            for (var e = t.length,
            i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        },
        o._callback = function(t) {
            var e = this.vars,
            i = e[t],
            s = e[t + "Params"],
            n = e[t + "Scope"] || e.callbackScope || this,
            r = s ? s.length: 0;
            switch (r) {
            case 0:
                i.call(n);
                break;
            case 1:
                i.call(n, s[0]);
                break;
            case 2:
                i.call(n, s[0], s[1]);
                break;
            default:
                i.apply(n, s)
            }
        },
        o.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        },
        o.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        o.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        o.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration: t, e)) : this._time
        },
        o.totalTime = function(t, e, i) {
            if (l || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                    n = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime: n._time) - (this._reversed ? s - t: t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline) for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0),
                    n = n._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (z.length && V(), this.render(t, e, !1), z.length && V())
            }
            return this
        },
        o.progress = o.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i: this.ratio
        },
        o.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        o.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        },
        o.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                i = e || 0 === e ? e: this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        },
        o.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime: this._totalTime, !0)), this) : this._reversed
        },
        o.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (l || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e: null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime: (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        };
        var A = v("core.SimpleTimeline",
        function(t) {
            E.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        o = A.prototype = new E,
        o.constructor = A,
        o.kill()._gc = !1,
        o._first = o._last = o._recent = null,
        o._sortChildren = !1,
        o.add = o.insert = function(t, e, i, s) {
            var n, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren) for (r = t._startTime; n && n._startTime > r;) n = n._prev;
            return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t),
            t._next ? t._next._prev = t: this._last = t,
            t._prev = n,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        },
        o._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next: this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev: this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
            this
        },
        o.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next,
            (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
            n = s
        },
        o.rawTime = function() {
            return l || a.wake(),
            this._totalTime
        };
        var M = v("TweenLite",
        function(e, i, s) {
            if (E.call(this, i, s), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e: M.selector(e) || e;
            var n, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? W[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0]) for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++) r = o[n],
            r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(p(r))) : (this._siblings[n] = Z(r, this, !1), 1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = o[n--] = M.selector(r), "string" == typeof r && o.splice(n + 1, 1)) : o.splice(n--, 1);
            else this._propLookup = {},
            this._siblings = Z(e, this, !1),
            1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(Math.min(0, -this._delay)))
        },
        !0),
        R = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        D = function(t, e) {
            var i, s = {};
            for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        o = M.prototype = new E,
        o.constructor = M,
        o.kill()._gc = !1,
        o.ratio = 0,
        o._firstPT = o._targets = o._overwrittenProps = o._startAt = null,
        o._notifyPluginsOfEnabled = o._lazy = !1,
        M.version = "1.19.0",
        M.defaultEase = o._ease = new w(null, null, 1, 1),
        M.defaultOverwrite = "auto",
        M.ticker = a,
        M.autoSleep = 120,
        M.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        },
        M.selector = t.$ || t.jQuery ||
        function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i, i(e)) : "undefined" == typeof document ? e: document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var z = [],
        L = {},
        $ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        X = function(t) {
            for (var e, i = this._firstPT,
            s = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start: i.c * t + i.s,
            i.m ? e = i.m(e, this._target || i.t) : s > e && e > -s && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        j = function(t, e, i, s) {
            var n, r, o, a, l, h, c, u = [t, e],
            p = 0,
            d = "",
            f = 0;
            for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match($) || [], r = e.match($) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = r.length, a = 0; l > a; a++) c = r[a],
            h = e.substr(p, e.indexOf(c, p) - p),
            d += h || !a ? h: ",",
            p += h.length,
            f ? f = (f + 1) % 5 : "rgba(" === h.substr( - 5) && (f = 1),
            c === n[a] || n.length <= a ? d += c: (d && (u.push(d), d = ""), o = parseFloat(n[a]), u.push(o), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: o,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                f: 0,
                m: f && 4 > f ? Math.round: 0
            }),
            p += c.length;
            return d += e.substr(p),
            d && u.push(d),
            u.setRatio = X,
            u
        },
        I = function(t, e, i, s, n, r, o, a, l) {
            "function" == typeof s && (s = s(l || 0, t));
            var h, c, u = "get" === i ? t[e] : i,
            p = typeof t[e],
            d = "string" == typeof s && "=" === s.charAt(1),
            f = {
                t: t,
                p: e,
                s: u,
                f: "function" === p,
                pg: 0,
                n: n || e,
                m: r ? "function" == typeof r ? r: Math.round: 0,
                pr: 0,
                c: d ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
            };
            return "number" !== p && ("function" === p && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e: "get" + e.substr(3), f.s = u = o ? t[c](o) : t[c]()), "string" == typeof u && (o || isNaN(u)) ? (f.fp = o, h = j(u, s, a || M.defaultStringFilter, f), f = {
                t: h,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: n || e,
                pr: 0,
                m: 0
            }) : d || (f.s = parseFloat(u), f.c = parseFloat(s) - f.s || 0)),
            f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
        },
        F = M._internals = {
            isArray: f,
            isSelector: R,
            lazyTweens: z,
            blobDif: j
        },
        N = M._plugins = {},
        Y = F.tweenLookup = {},
        B = 0,
        H = F.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
        },
        W = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        q = E._rootFramesTimeline = new A,
        U = E._rootTimeline = new A,
        G = 30,
        V = F.lazyRender = function() {
            var t, e = z.length;
            for (L = {}; --e > -1;) t = z[e],
            t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            z.length = 0
        };
        U._startTime = a.time,
        q._startTime = a.frame,
        U._active = q._active = !0,
        setTimeout(V, 1),
        E._updateRoot = M.render = function() {
            var t, e, i;
            if (z.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && V(), a.frame >= G) {
                G = a.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in Y) {
                    for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete Y[i]
                }
                if (i = U._first, (!i || i._paused) && M.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        },
        a.addEventListener("tick", E._updateRoot);
        var Z = function(t, e, i) {
            var s, n, r = t._gsTweenID;
            if (Y[r || (t._gsTweenID = r = "t" + B++)] || (Y[r] = {
                target: t,
                tweens: []
            }), e && (s = Y[r].tweens, s[n = s.length] = e, i)) for (; --n > -1;) s[n] === e && s.splice(n, 1);
            return Y[r].tweens
        },
        Q = function(t, e, i, s) {
            var n, r, o = t.vars.onOverwrite;
            return o && (n = o(t, e, i, s)),
            o = M.onOverwrite,
            o && (r = o(t, e, i, s)),
            n !== !1 && r !== !1
        },
        K = function(t, e, i, s, n) {
            var r, o, a, l;
            if (1 === s || s >= 4) {
                for (l = n.length, r = 0; l > r; r++) if ((a = n[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                else if (5 === s) break;
                return o
            }
            var h, c = e._startTime + u,
            p = [],
            d = 0,
            f = 0 === e._duration;
            for (r = n.length; --r > -1;)(a = n[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || J(e, 0, f), 0 === J(a, h, f) && (p[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (p[d++] = a)));
            for (r = d; --r > -1;) if (a = p[r], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
                if (2 !== s && !Q(a, e)) continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        },
        J = function(t, e, i) {
            for (var s = t._timeline,
            n = s._timeScale,
            r = t._startTime; s._timeline;) {
                if (r += s._startTime, n *= s._timeScale, s._paused) return - 100;
                s = s._timeline
            }
            return r /= n,
            r > e ? r - e: i && r === e || !t._initted && 2 * u > r - e ? u: (r += t.totalDuration() / t._timeScale / n) > e + u ? 0 : r - e - u
        };
        o._init = function() {
            var t, e, i, s, n, r, o = this.vars,
            a = this._overwrittenProps,
            l = this._duration,
            h = !!o.immediateRender,
            c = o.ease;
            if (o.startAt) {
                this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
                n = {};
                for (s in o.startAt) n[s] = o.startAt[s];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = h && o.lazy !== !1, n.startAt = n.delay = null, this._startAt = M.to(this.target, 0, n), h) if (this._time > 0) this._startAt = null;
                else if (0 !== l) return
            } else if (o.runBackwards && 0 !== l) if (this._startAt) this._startAt.render( - 1, !0),
            this._startAt.kill(),
            this._startAt = null;
            else {
                0 !== this._time && (h = !1),
                i = {};
                for (s in o) H[s] && "autoCSS" !== s || (i[s] = o[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && o.lazy !== !1, i.immediateRender = h, this._startAt = M.to(this.target, 0, i), h) {
                    if (0 === this._time) return
                } else this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = c = c ? c instanceof w ? c: "function" == typeof c ? new w(c, o.easeParams) : x[c] || M.defaultEase: M.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {},
            this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
            i.c = -i.c,
            i = i._next;
            this._onUpdate = o.onUpdate,
            this._initted = !0
        },
        o._initProps = function(e, i, s, n, r) {
            var o, a, l, h, c, u;
            if (null == e) return ! 1;
            L[e._gsTweenID] && V(),
            this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && D(this.vars, e);
            for (o in this.vars) if (u = this.vars[o], H[o]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
            else if (N[o] && (h = new N[o])._onInitTween(e, this.vars[o], this, r)) {
                for (this._firstPT = c = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: o,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                },
                a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT; (h._priority || h._onInitAllProps) && (l = !0),
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                c._next && (c._next._prev = c)
            } else i[o] = I.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, r);
            return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), l)
        },
        o.render = function(t, e, i) {
            var s, n, r, o, a = this._time,
            l = this._duration,
            h = this._rawPrevTime;
            if (t >= l - 1e-7) this._totalTime = this._time = l,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren),
            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t: u);
            else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== a || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed),
            0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t: u)),
            this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                p = this._easeType,
                d = this._easePower; (1 === p || 3 === p && c >= .5) && (c = 1 - c),
                3 === p && (c *= 2),
                1 === d ? c *= c: 2 === d ? c *= c * c: 3 === d ? c *= c * c * c: 4 === d && (c *= c * c * c * c),
                1 === p ? this.ratio = 1 - c: 2 === p ? this.ratio = c: .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a,
                    this._rawPrevTime = h,
                    z.push(this),
                    void(this._lazy = [t, e]);
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                r = r._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || s || i) && this._callback("onUpdate")),
                n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
            }
        },
        o._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
            this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target: M.selector(e) || e;
            var s, n, r, o, a, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || R(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
            else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;) if (e === this._targets[s]) {
                        a = this._propLookup[s] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {}: "all";
                        break
                    }
                } else {
                    if (e !== this.target) return ! 1;
                    a = this._propLookup,
                    n = this._overwrittenProps = t ? this._overwrittenProps || {}: "all"
                }
                if (a) {
                    if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) a[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !Q(this, i, e, u)) return ! 1
                    }
                    for (r in h)(o = a[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next: o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]),
                    c && (n[r] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        },
        o.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {}: [],
            E.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))),
            this
        },
        o._enabled = function(t, e) {
            if (l || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s) for (i = s.length; --i > -1;) this._siblings[i] = Z(s[i], this, !0);
                else this._siblings = Z(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable": "_onDisable", this) : !1
        },
        M.to = function(t, e, i) {
            return new M(t, e, i)
        },
        M.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new M(t, e, i)
        },
        M.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new M(t, e, s)
        },
        M.delayedCall = function(t, e, i, s, n) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        },
        M.set = function(t, e) {
            return new M(t, 0, e)
        },
        M.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t: M.selector(t) || t;
            var i, s, n, r;
            if ((f(t) || R(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(M.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;) for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
            } else for (s = Z(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        },
        M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = M.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
        };
        var tt = v("plugins.TweenPlugin",
        function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = tt.prototype
        },
        !0);
        if (o = tt.prototype, tt.version = "1.19.0", tt.API = 2, o._firstPT = null, o._addTween = I, o.setRatio = X, o._kill = function(t) {
            var e, i = this._overwriteProps,
            s = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
            return ! 1
        },
        o._mod = o._roundProps = function(t) {
            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
            e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e: i.m = e),
            i = i._next
        },
        M._onPluginEvent = function(t, e) {
            var i, s, n, r, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, s = n; s && s.pr > a.pr;) s = s._next; (a._prev = s ? s._prev: r) ? a._prev._next = a: n = a,
                    (a._next = s) ? s._prev = a: r = a,
                    a = o
                }
                a = e._firstPT = n
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            a = a._next;
            return i
        },
        tt.activate = function(t) {
            for (var e = t.length; --e > -1;) t[e].API === tt.API && (N[(new t[e])._propName] = t[e]);
            return ! 0
        },
        _.plugin = function(t) {
            if (! (t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
            s = t.priority || 0,
            n = t.overwriteProps,
            r = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            },
            o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function() {
                tt.call(this, i, s),
                this._overwriteProps = n || []
            },
            t.global === !0),
            a = o.prototype = new tt(i);
            a.constructor = o,
            o.API = t.API;
            for (e in r)"function" == typeof t[e] && (a[r[e]] = t[e]);
            return o.version = t.version,
            tt.activate([o]),
            o
        },
        n = t._gsQueue) {
            for (r = 0; r < n.length; r++) n[r]();
            for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
        }
        l = !1
    }
} ("undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
    e = window,
    i = function(i, s) {
        var n = "x" === s ? "Width": "Height",
        r = "scroll" + n,
        o = "client" + n,
        a = document.body;
        return i === e || i === t || i === a ? Math.max(t[r], a[r]) - (e["inner" + n] || t[o] || a[o]) : i[r] - i["offset" + n]
    },
    s = function(t) {
        return "string" == typeof t && (t = TweenLite.selector(t)),
        t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]),
        t === e || t.nodeType && t.style ? t: null
    },
    n = function(i, s) {
        var n = "scroll" + ("x" === s ? "Left": "Top");
        return i === e && (null != i.pageXOffset ? n = "page" + s.toUpperCase() + "Offset": i = null != t[n] ? t: document.body),
        function() {
            return i[n]
        }
    },
    r = function(i, r) {
        var o = s(i).getBoundingClientRect(),
        a = !r || r === e || r === document.body,
        l = (a ? t: r).getBoundingClientRect(),
        h = {
            x: o.left - l.left,
            y: o.top - l.top
        };
        return ! a && r && (h.x += n(r, "x")(), h.y += n(r, "y")()),
        h
    },
    o = function(t, e, s) {
        var n = typeof t;
        return "number" === n || "string" === n && "=" === t.charAt(1) ? t: "max" === t ? i(e, s) : Math.min(i(e, s), r(t, e)[s])
    },
    a = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.8.0",
        init: function(t, i, s) {
            return this._wdw = t === e,
            this._target = t,
            this._tween = s,
            "object" != typeof i ? (i = {
                y: i
            },
            "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                y: i,
                x: i
            }),
            this.vars = i,
            this._autoKill = i.autoKill !== !1,
            this.getX = n(t, "x"),
            this.getY = n(t, "y"),
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            var s = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            r = n - this.yPrev,
            o = s - this.xPrev,
            l = a.autoKillThreshold;
            this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill && (!this.skipX && (o > l || -l > o) && s < i(this._target, "x") && (this.skipX = !0), !this.skipY && (r > l || -l > r) && n < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? e.scrollTo(this.skipX ? s: this.x, this.skipY ? n: this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    }),
    l = a.prototype;
    a.max = i,
    a.getOffset = r,
    a.autoKillThreshold = 7,
    l._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
} ("ScrollToPlugin"),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
} (this,
function() {
    "use strict";
    var t = function() {
        n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
    };
    t.version = "2.0.5",
    window.addEventListener("mousewheel",
    function() {});
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(s) {
        var r, o, a = "ScrollMagic.Controller",
        l = "FORWARD",
        h = "REVERSE",
        c = "PAUSED",
        u = i.defaults,
        p = this,
        d = n.extend({},
        u, s),
        f = [],
        m = !1,
        g = 0,
        _ = c,
        v = !0,
        y = 0,
        w = !0,
        x = function() {
            for (var e in d) u.hasOwnProperty(e) || (A(2, 'WARNING: Unknown option "' + e + '"'), delete d[e]);
            if (d.container = n.get.elements(d.container)[0], !d.container) throw A(1, "ERROR creating object " + a + ": No valid scroll container supplied"),
            a + " init failed.";
            v = d.container === window || d.container === document.body || !document.body.contains(d.container),
            v && (d.container = window),
            y = S(),
            d.container.addEventListener("resize", E),
            d.container.addEventListener("scroll", E),
            d.refreshInterval = parseInt(d.refreshInterval) || u.refreshInterval,
            T(),
            A(3, "added new " + a + " controller (v" + t.version + ")")
        },
        T = function() {
            d.refreshInterval > 0 && (o = window.setTimeout(O, d.refreshInterval))
        },
        b = function() {
            return d.vertical ? n.get.scrollTop(d.container) : n.get.scrollLeft(d.container)
        },
        S = function() {
            return d.vertical ? n.get.height(d.container) : n.get.width(d.container)
        },
        C = this._setScrollPos = function(t) {
            d.vertical ? v ? window.scrollTo(n.get.scrollLeft(), t) : d.container.scrollTop = t: v ? window.scrollTo(t, n.get.scrollTop()) : d.container.scrollLeft = t
        },
        P = function() {
            if (w && m) {
                var t = n.type.Array(m) ? m: f.slice(0);
                m = !1;
                var e = g;
                g = p.scrollPos();
                var i = g - e;
                0 !== i && (_ = i > 0 ? l: h),
                _ === h && t.reverse(),
                t.forEach(function(e, i) {
                    A(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + f.length + " total)"),
                    e.update(!0)
                }),
                0 === t.length && d.loglevel >= 3 && A(3, "updating 0 Scenes (nothing added to controller)")
            }
        },
        k = function() {
            r = n.rAF(P)
        },
        E = function(t) {
            A(3, "event fired causing an update:", t.type),
            "resize" == t.type && (y = S(), _ = c),
            m !== !0 && (m = !0, k())
        },
        O = function() {
            if (!v && y != S()) {
                var t;
                try {
                    t = new Event("resize", {
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch(e) {
                    t = document.createEvent("Event"),
                    t.initEvent("resize", !1, !1)
                }
                d.container.dispatchEvent(t)
            }
            f.forEach(function(t, e) {
                t.refresh()
            }),
            T()
        },
        A = this._log = function(t, e) {
            d.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), n.log.apply(window, arguments))
        };
        this._options = d;
        var M = function(t) {
            if (t.length <= 1) return t;
            var e = t.slice(0);
            return e.sort(function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }),
            e
        };
        return this.addScene = function(e) {
            if (n.type.Array(e)) e.forEach(function(t, e) {
                p.addScene(t)
            });
            else if (e instanceof t.Scene) {
                if (e.controller() !== p) e.addTo(p);
                else if (f.indexOf(e) < 0) {
                    f.push(e),
                    f = M(f),
                    e.on("shift.controller_sort",
                    function() {
                        f = M(f)
                    });
                    for (var i in d.globalSceneOptions) e[i] && e[i].call(e, d.globalSceneOptions[i]);
                    A(3, "adding Scene (now " + f.length + " total)")
                }
            } else A(1, "ERROR: invalid argument supplied for '.addScene()'");
            return p
        },
        this.removeScene = function(t) {
            if (n.type.Array(t)) t.forEach(function(t, e) {
                p.removeScene(t)
            });
            else {
                var e = f.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), A(3, "removing Scene (now " + f.length + " left)"), t.remove())
            }
            return p
        },
        this.updateScene = function(e, i) {
            return n.type.Array(e) ? e.forEach(function(t, e) {
                p.updateScene(t, i)
            }) : i ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = M(m), k()),
            p
        },
        this.update = function(t) {
            return E({
                type: "resize"
            }),
            t && P(),
            p
        },
        this.scrollTo = function(i, s) {
            if (n.type.Number(i)) C.call(d.container, i, s);
            else if (i instanceof t.Scene) i.controller() === p ? p.scrollTo(i.scrollOffset(), s) : A(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
            else if (n.type.Function(i)) C = i;
            else {
                var r = n.get.elements(i)[0];
                if (r) {
                    for (; r.parentNode.hasAttribute(e);) r = r.parentNode;
                    var o = d.vertical ? "top": "left",
                    a = n.get.offset(d.container),
                    l = n.get.offset(r);
                    v || (a[o] -= p.scrollPos()),
                    p.scrollTo(l[o] - a[o], s)
                } else A(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
            }
            return p
        },
        this.scrollPos = function(t) {
            return arguments.length ? (n.type.Function(t) ? b = t: A(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), p) : b.call(p)
        },
        this.info = function(t) {
            var e = {
                size: y,
                vertical: d.vertical,
                scrollPos: g,
                scrollDirection: _,
                container: d.container,
                isDocument: v
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void A(1, 'ERROR: option "' + t + '" is not available') : e
        },
        this.loglevel = function(t) {
            return arguments.length ? (d.loglevel != t && (d.loglevel = t), p) : d.loglevel
        },
        this.enabled = function(t) {
            return arguments.length ? (w != t && (w = !!t, p.updateScene(f, !0)), p) : w
        },
        this.destroy = function(t) {
            window.clearTimeout(o);
            for (var e = f.length; e--;) f[e].destroy(t);
            return d.container.removeEventListener("resize", E),
            d.container.removeEventListener("scroll", E),
            n.cAF(r),
            A(3, "destroyed " + a + " (reset: " + (t ? "true": "false") + ")"),
            null
        },
        x(),
        p
    };
    var i = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    t.Controller.addOption = function(t, e) {
        i.defaults[t] = e
    },
    t.Controller.extend = function(e) {
        var i = this;
        t.Controller = function() {
            return i.apply(this, arguments),
            this.$super = n.extend({},
            this),
            e.apply(this, arguments) || this
        },
        n.extend(t.Controller, i),
        t.Controller.prototype = i.prototype,
        t.Controller.prototype.constructor = t.Controller
    },
    t.Scene = function(i) {
        var r, o, a = "ScrollMagic.Scene",
        l = "BEFORE",
        h = "DURING",
        c = "AFTER",
        u = s.defaults,
        p = this,
        d = n.extend({},
        u, i),
        f = l,
        m = 0,
        g = {
            start: 0,
            end: 0
        },
        _ = 0,
        v = !0,
        y = function() {
            for (var t in d) u.hasOwnProperty(t) || (x(2, 'WARNING: Unknown option "' + t + '"'), delete d[t]);
            for (var e in u) O(e);
            k()
        },
        w = {};
        this.on = function(t, e) {
            return n.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function(t) {
                var i = t.split("."),
                s = i[0],
                n = i[1];
                "*" != s && (w[s] || (w[s] = []), w[s].push({
                    namespace: n || "",
                    callback: e
                }))
            })) : x(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"),
            p
        },
        this.off = function(t, e) {
            return t ? (t = t.trim().split(" "), t.forEach(function(t, i) {
                var s = t.split("."),
                n = s[0],
                r = s[1] || "",
                o = "*" === n ? Object.keys(w) : [n];
                o.forEach(function(t) {
                    for (var i = w[t] || [], s = i.length; s--;) {
                        var n = i[s]; ! n || r !== n.namespace && "*" !== r || e && e != n.callback || i.splice(s, 1)
                    }
                    i.length || delete w[t]
                })
            }), p) : (x(1, "ERROR: Invalid event name supplied."), p)
        },
        this.trigger = function(e, i) {
            if (e) {
                var s = e.trim().split("."),
                n = s[0],
                r = s[1],
                o = w[n];
                x(3, "event fired:", n, i ? "->": "", i || ""),
                o && o.forEach(function(e, s) {
                    r && r !== e.namespace || e.callback.call(p, new t.Event(n, e.namespace, p, i))
                })
            } else x(1, "ERROR: Invalid event name supplied.");
            return p
        },
        p.on("change.internal",
        function(t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? S() : "reverse" === t.what && p.update())
        }).on("shift.internal",
        function(t) {
            T(),
            p.update()
        });
        var x = this._log = function(t, e) {
            d.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), n.log.apply(window, arguments))
        };
        this.addTo = function(e) {
            return e instanceof t.Controller ? o != e && (o && o.removeScene(p), o = e, k(), b(!0), S(!0), T(), o.info("container").addEventListener("resize", C), e.addScene(p), p.trigger("add", {
                controller: o
            }), x(3, "added " + a + " to controller"), p.update()) : x(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
            p
        },
        this.enabled = function(t) {
            return arguments.length ? (v != t && (v = !!t, p.update(!0)), p) : v
        },
        this.remove = function() {
            if (o) {
                o.info("container").removeEventListener("resize", C);
                var t = o;
                o = void 0,
                t.removeScene(p),
                p.trigger("remove"),
                x(3, "removed " + a + " from controller")
            }
            return p
        },
        this.destroy = function(t) {
            return p.trigger("destroy", {
                reset: t
            }),
            p.remove(),
            p.off("*.*"),
            x(3, "destroyed " + a + " (reset: " + (t ? "true": "false") + ")"),
            null
        },
        this.update = function(t) {
            if (o) if (t) if (o.enabled() && v) {
                var e, i = o.info("scrollPos");
                e = d.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0,
                p.trigger("update", {
                    startPos: g.start,
                    endPos: g.end,
                    scrollPos: i
                }),
                p.progress(e)
            } else A && f === h && R(!0);
            else o.updateScene(p, !1);
            return p
        },
        this.refresh = function() {
            return b(),
            S(),
            p
        },
        this.progress = function(t) {
            if (arguments.length) {
                var e = !1,
                i = f,
                s = o ? o.info("scrollDirection") : "PAUSED",
                n = d.reverse || t >= m;
                if (0 === d.duration ? (e = m != t, m = 1 > t && n ? 0 : 1, f = 0 === m ? l: h) : 0 > t && f !== l && n ? (m = 0, f = l, e = !0) : t >= 0 && 1 > t && n ? (m = t, f = h, e = !0) : t >= 1 && f !== c ? (m = 1, f = c, e = !0) : f !== h || n || R(), e) {
                    var r = {
                        progress: m,
                        state: f,
                        scrollDirection: s
                    },
                    a = f != i,
                    u = function(t) {
                        p.trigger(t, r)
                    };
                    a && i !== h && (u("enter"), u(i === l ? "start": "end")),
                    u("progress"),
                    a && f !== h && (u(f === l ? "start": "end"), u("leave"))
                }
                return p
            }
            return m
        };
        var T = function() {
            g = {
                start: _ + d.offset
            },
            o && d.triggerElement && (g.start -= o.info("size") * d.triggerHook),
            g.end = g.start + d.duration
        },
        b = function(t) {
            if (r) {
                var e = "duration";
                E(e, r.call(p)) && !t && (p.trigger("change", {
                    what: e,
                    newval: d[e]
                }), p.trigger("shift", {
                    reason: e
                }))
            }
        },
        S = function(t) {
            var i = 0,
            s = d.triggerElement;
            if (o && s) {
                for (var r = o.info(), a = n.get.offset(r.container), l = r.vertical ? "top": "left"; s.parentNode.hasAttribute(e);) s = s.parentNode;
                var h = n.get.offset(s);
                r.isDocument || (a[l] -= o.scrollPos()),
                i = h[l] - a[l]
            }
            var c = i != _;
            _ = i,
            c && !t && p.trigger("shift", {
                reason: "triggerElementPosition"
            })
        },
        C = function(t) {
            d.triggerHook > 0 && p.trigger("shift", {
                reason: "containerResize"
            })
        },
        P = n.extend(s.validate, {
            duration: function(t) {
                if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function() {
                        return o ? o.info("size") * e: 0
                    }
                }
                if (n.type.Function(t)) {
                    r = t;
                    try {
                        t = parseFloat(r())
                    } catch(i) {
                        t = -1
                    }
                }
                if (t = parseFloat(t), !n.type.Number(t) || 0 > t) throw r ? (r = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                return t
            }
        }),
        k = function(t) {
            t = arguments.length ? [t] : Object.keys(P),
            t.forEach(function(t, e) {
                var i;
                if (P[t]) try {
                    i = P[t](d[t])
                } catch(s) {
                    i = u[t];
                    var r = n.type.String(s) ? [s] : s;
                    n.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), x.apply(this, r)) : x(1, "ERROR: Problem executing validation callback for option '" + t + "':", s.message)
                } finally {
                    d[t] = i
                }
            })
        },
        E = function(t, e) {
            var i = !1,
            s = d[t];
            return d[t] != e && (d[t] = e, k(t), i = s != d[t]),
            i
        },
        O = function(t) {
            p[t] || (p[t] = function(e) {
                return arguments.length ? ("duration" === t && (r = void 0), E(t, e) && (p.trigger("change", {
                    what: t,
                    newval: d[t]
                }), s.shifts.indexOf(t) > -1 && p.trigger("shift", {
                    reason: t
                })), p) : d[t]
            })
        };
        this.controller = function() {
            return o
        },
        this.state = function() {
            return f
        },
        this.scrollOffset = function() {
            return g.start
        },
        this.triggerPosition = function() {
            var t = d.offset;
            return o && (t += d.triggerElement ? _: o.info("size") * p.triggerHook()),
            t
        };
        var A, M;
        p.on("shift.internal",
        function(t) {
            var e = "duration" === t.reason; (f === c && e || f === h && 0 === d.duration) && R(),
            e && D()
        }).on("progress.internal",
        function(t) {
            R()
        }).on("add.internal",
        function(t) {
            D()
        }).on("destroy.internal",
        function(t) {
            p.removePin(t.reset)
        });
        var R = function(t) {
            if (A && o) {
                var e = o.info(),
                i = M.spacer.firstChild;
                if (t || f !== h) {
                    var s = {
                        position: M.inFlow ? "relative": "absolute",
                        top: 0,
                        left: 0
                    },
                    r = n.css(i, "position") != s.position;
                    M.pushFollowers ? d.duration > 0 && (f === c && 0 === parseFloat(n.css(M.spacer, "padding-top")) ? r = !0 : f === l && 0 === parseFloat(n.css(M.spacer, "padding-bottom")) && (r = !0)) : s[e.vertical ? "top": "left"] = d.duration * m,
                    n.css(i, s),
                    r && D()
                } else {
                    "fixed" != n.css(i, "position") && (n.css(i, {
                        position: "fixed"
                    }), D());
                    var a = n.get.offset(M.spacer, !0),
                    u = d.reverse || 0 === d.duration ? e.scrollPos - g.start: Math.round(m * d.duration * 10) / 10;
                    a[e.vertical ? "top": "left"] += u,
                    n.css(M.spacer.firstChild, {
                        top: a.top,
                        left: a.left
                    })
                }
            }
        },
        D = function() {
            if (A && o && M.inFlow) {
                var t = f === h,
                e = o.info("vertical"),
                i = M.spacer.firstChild,
                s = n.isMarginCollapseType(n.css(M.spacer, "display")),
                r = {};
                M.relSize.width || M.relSize.autoFullWidth ? t ? n.css(A, {
                    width: n.get.width(M.spacer)
                }) : n.css(A, {
                    width: "100%"
                }) : (r["min-width"] = n.get.width(e ? A: i, !0, !0), r.width = t ? r["min-width"] : "auto"),
                M.relSize.height ? t ? n.css(A, {
                    height: n.get.height(M.spacer) - (M.pushFollowers ? d.duration: 0)
                }) : n.css(A, {
                    height: "100%"
                }) : (r["min-height"] = n.get.height(e ? i: A, !0, !s), r.height = t ? r["min-height"] : "auto"),
                M.pushFollowers && (r["padding" + (e ? "Top": "Left")] = d.duration * m, r["padding" + (e ? "Bottom": "Right")] = d.duration * (1 - m)),
                n.css(M.spacer, r)
            }
        },
        z = function() {
            o && A && f === h && !o.info("isDocument") && R()
        },
        L = function() {
            o && A && f === h && ((M.relSize.width || M.relSize.autoFullWidth) && n.get.width(window) != n.get.width(M.spacer.parentNode) || M.relSize.height && n.get.height(window) != n.get.height(M.spacer.parentNode)) && D()
        },
        $ = function(t) {
            o && A && f === h && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY": "wheelDeltaX"]) / 3 || 30 * -t.detail)))
        };
        this.setPin = function(t, i) {
            var s = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (i = n.extend({},
            s, i), t = n.get.elements(t)[0], !t) return x(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
            p;
            if ("fixed" === n.css(t, "position")) return x(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
            p;
            if (A) {
                if (A === t) return p;
                p.removePin()
            }
            A = t;
            var r = A.parentNode.style.display,
            o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            A.parentNode.style.display = "none";
            var a = "absolute" != n.css(A, "position"),
            l = n.css(A, o.concat(["display"])),
            h = n.css(A, ["width", "height"]);
            A.parentNode.style.display = r,
            !a && i.pushFollowers && (x(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1),
            window.setTimeout(function() {
                A && 0 === d.duration && i.pushFollowers && x(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
            },
            0);
            var c = A.parentNode.insertBefore(document.createElement("div"), A),
            u = n.extend(l, {
                position: a ? "relative": "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || n.extend(u, n.css(A, ["width", "height"])), n.css(c, u), c.setAttribute(e, ""), n.addClass(c, i.spacerClass), M = {
                spacer: c,
                relSize: {
                    width: "%" === h.width.slice( - 1),
                    height: "%" === h.height.slice( - 1),
                    autoFullWidth: "auto" === h.width && a && n.isMarginCollapseType(l.display)
                },
                pushFollowers: i.pushFollowers,
                inFlow: a
            },
            !A.___origStyle) {
                A.___origStyle = {};
                var f = A.style,
                m = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                m.forEach(function(t) {
                    A.___origStyle[t] = f[t] || ""
                })
            }
            return M.relSize.width && n.css(c, {
                width: h.width
            }),
            M.relSize.height && n.css(c, {
                height: h.height
            }),
            c.appendChild(A),
            n.css(A, {
                position: a ? "relative": "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (M.relSize.width || M.relSize.autoFullWidth) && n.css(A, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", z),
            window.addEventListener("resize", z),
            window.addEventListener("resize", L),
            A.addEventListener("mousewheel", $),
            A.addEventListener("DOMMouseScroll", $),
            x(3, "added pin"),
            R(),
            p
        },
        this.removePin = function(t) {
            if (A) {
                if (f === h && R(!0), t || !o) {
                    var i = M.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var s = M.spacer.style,
                        r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {},
                        r.forEach(function(t) {
                            margins[t] = s[t] || ""
                        }),
                        n.css(i, margins)
                    }
                    M.spacer.parentNode.insertBefore(i, M.spacer),
                    M.spacer.parentNode.removeChild(M.spacer),
                    A.parentNode.hasAttribute(e) || (n.css(A, A.___origStyle), delete A.___origStyle)
                }
                window.removeEventListener("scroll", z),
                window.removeEventListener("resize", z),
                window.removeEventListener("resize", L),
                A.removeEventListener("mousewheel", $),
                A.removeEventListener("DOMMouseScroll", $),
                A = void 0,
                x(3, "removed pin (reset: " + (t ? "true": "false") + ")")
            }
            return p
        };
        var X, j = [];
        return p.on("destroy.internal",
        function(t) {
            p.removeClassToggle(t.reset)
        }),
        this.setClassToggle = function(t, e) {
            var i = n.get.elements(t);
            return 0 !== i.length && n.type.String(e) ? (j.length > 0 && p.removeClassToggle(), X = e, j = i, p.on("enter.internal_class leave.internal_class",
            function(t) {
                var e = "enter" === t.type ? n.addClass: n.removeClass;
                j.forEach(function(t, i) {
                    e(t, X)
                })
            }), p) : (x(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element": "classes") + " supplied."), p)
        },
        this.removeClassToggle = function(t) {
            return t && j.forEach(function(t, e) {
                n.removeClass(t, X)
            }),
            p.off("start.internal_class end.internal_class"),
            X = void 0,
            j = [],
            p
        },
        y(),
        p
    };
    var s = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(t) {
                if (t = parseFloat(t), !n.type.Number(t)) throw ['Invalid value for option "offset":', t];
                return t
            },
            triggerElement: function(t) {
                if (t = t || void 0) {
                    var e = n.get.elements(t)[0];
                    if (!e) throw ['Element defined in option "triggerElement" was not found:', t];
                    t = e
                }
                return t
            },
            triggerHook: function(t) {
                var e = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                else {
                    if (! (t in e)) throw ['Invalid value for option "triggerHook": ', t];
                    t = e[t]
                }
                return t
            },
            reverse: function(t) {
                return !! t
            },
            loglevel: function(t) {
                if (t = parseInt(t), !n.type.Number(t) || 0 > t || t > 3) throw ['Invalid value for option "loglevel":', t];
                return t
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function(e, i, n, r) {
        e in s.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (s.defaults[e] = i, s.validate[e] = n, r && s.shifts.push(e))
    },
    t.Scene.extend = function(e) {
        var i = this;
        t.Scene = function() {
            return i.apply(this, arguments),
            this.$super = n.extend({},
            this),
            e.apply(this, arguments) || this
        },
        n.extend(t.Scene, i),
        t.Scene.prototype = i.prototype,
        t.Scene.prototype.constructor = t.Scene
    },
    t.Event = function(t, e, i, s) {
        s = s || {};
        for (var n in s) this[n] = s[n];
        return this.type = t,
        this.target = this.currentTarget = i,
        this.namespace = e || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    };
    var n = t._util = function(t) {
        var e, i = {},
        s = function(t) {
            return parseFloat(t) || 0
        },
        n = function(e) {
            return e.currentStyle ? e.currentStyle: t.getComputedStyle(e)
        },
        r = function(e, i, r, o) {
            if (i = i === document ? t: i, i === t) o = !1;
            else if (!f.DomElement(i)) return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var a = (r ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
            if (r && o) {
                var l = n(i);
                a += "Height" === e ? s(l.marginTop) + s(l.marginBottom) : s(l.marginLeft) + s(l.marginRight)
            }
            return a
        },
        o = function(t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g,
            function(t) {
                return t[1].toUpperCase()
            })
        };
        i.extend = function(t) {
            for (t = t || {},
            e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        },
        i.isMarginCollapseType = function(t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
        };
        var a = 0,
        l = ["ms", "moz", "webkit", "o"],
        h = t.requestAnimationFrame,
        c = t.cancelAnimationFrame;
        for (e = 0; ! h && e < l.length; ++e) h = t[l[e] + "RequestAnimationFrame"],
        c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        h || (h = function(e) {
            var i = (new Date).getTime(),
            s = Math.max(0, 16 - (i - a)),
            n = t.setTimeout(function() {
                e(i + s)
            },
            s);
            return a = i + s,
            n
        }),
        c || (c = function(e) {
            t.clearTimeout(e)
        }),
        i.rAF = h.bind(t),
        i.cAF = c.bind(t);
        var u = ["error", "warn", "log"],
        p = t.console || {};
        for (p.log = p.log ||
        function() {},
        e = 0; e < u.length; e++) {
            var d = u[e];
            p[d] || (p[d] = p.log)
        }
        i.log = function(t) { (t > u.length || 0 >= t) && (t = u.length);
            var e = new Date,
            i = ("0" + e.getHours()).slice( - 2) + ":" + ("0" + e.getMinutes()).slice( - 2) + ":" + ("0" + e.getSeconds()).slice( - 2) + ":" + ("00" + e.getMilliseconds()).slice( - 3),
            s = u[t - 1],
            n = Array.prototype.splice.call(arguments, 1),
            r = Function.prototype.bind.call(p[s], p);
            n.unshift(i),
            r.apply(p, n)
        };
        var f = i.type = function(t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function(t) {
            return "string" === f(t)
        },
        f.Function = function(t) {
            return "function" === f(t)
        },
        f.Array = function(t) {
            return Array.isArray(t)
        },
        f.Number = function(t) {
            return ! f.Array(t) && t - parseFloat(t) + 1 >= 0
        },
        f.DomElement = function(t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement: t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        };
        var m = i.get = {};
        return m.elements = function(e) {
            var i = [];
            if (f.String(e)) try {
                e = document.querySelectorAll(e)
            } catch(s) {
                return i
            }
            if ("nodelist" === f(e) || f.Array(e)) for (var n = 0,
            r = i.length = e.length; r > n; n++) {
                var o = e[n];
                i[n] = f.DomElement(o) ? o: m.elements(o)
            } else(f.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        },
        m.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop: t.pageYOffset || 0
        },
        m.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft: t.pageXOffset || 0
        },
        m.width = function(t, e, i) {
            return r("width", t, e, i)
        },
        m.height = function(t, e, i) {
            return r("height", t, e, i)
        },
        m.offset = function(t, e) {
            var i = {
                top: 0,
                left: 0
            };
            if (t && t.getBoundingClientRect) {
                var s = t.getBoundingClientRect();
                i.top = s.top,
                i.left = s.left,
                e || (i.top += m.scrollTop(), i.left += m.scrollLeft())
            }
            return i
        },
        i.addClass = function(t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e)
        },
        i.removeClass = function(t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        },
        i.css = function(t, e) {
            if (f.String(e)) return n(t)[o(e)];
            if (f.Array(e)) {
                var i = {},
                s = n(t);
                return e.forEach(function(t, e) {
                    i[t] = s[o(t)]
                }),
                i
            }
            for (var r in e) {
                var a = e[r];
                a == parseFloat(a) && (a += "px"),
                t.style[o(r)] = a
            }
        },
        i
    } (window || {});
    return t.Scene.prototype.addIndicators = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    },
    t.Scene.prototype.removeIndicators = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    },
    t.Scene.prototype.setTween = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    },
    t.Scene.prototype.removeTween = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    },
    t.Scene.prototype.setVelocity = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    },
    t.Scene.prototype.removeVelocity = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    },
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], e) : "object" == typeof exports ? e(require("scrollmagic"), require("jquery")) : e(t.ScrollMagic, t.jQuery)
} (this,
function(t, e) {
    "use strict";
    var i = "jquery.ScrollMagic",
    s = window.console || {},
    n = Function.prototype.bind.call(s.error || s.log ||
    function() {},
    s);
    t || n("(" + i + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),
    e || n("(" + i + ") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs."),
    t._util.get.elements = function(t) {
        return e(t).toArray()
    },
    t._util.addClass = function(t, i) {
        e(t).addClass(i)
    },
    t._util.removeClass = function(t, i) {
        e(t).removeClass(i)
    },
    e.ScrollMagic = t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
} (this,
function(t, e, i) {
    "use strict";
    var s = "animation.gsap",
    n = window.console || {},
    r = Function.prototype.bind.call(n.error || n.log ||
    function() {},
    n);
    t || r("(" + s + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),
    e || r("(" + s + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),
    t.Scene.addOption("tweenChanges", !1,
    function(t) {
        return !! t
    }),
    t.Scene.extend(function() {
        var t, n = this,
        r = function() {
            n._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ")", "->"), n._log.apply(this, arguments))
        };
        n.on("progress.plugin_gsap",
        function() {
            o()
        }),
        n.on("destroy.plugin_gsap",
        function(t) {
            n.removeTween(t.reset)
        });
        var o = function() {
            if (t) {
                var e = n.progress(),
                i = n.state();
                t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
            }
        };
        n.setTween = function(s, a, l) {
            var h;
            arguments.length > 1 && (arguments.length < 3 && (l = a, a = 1), s = e.to(s, a, l));
            try {
                h = i ? new i({
                    smoothChildTiming: !0
                }).add(s) : s,
                h.pause()
            } catch(c) {
                return r(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),
                n
            }
            if (t && n.removeTween(), t = h, s.repeat && -1 === s.repeat() && (t.repeat( - 1), t.yoyo(s.yoyo())), n.tweenChanges() && !t.tweenTo && r(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), t && n.controller() && n.triggerElement() && n.loglevel() >= 2) {
                var u = e.getTweensOf(n.triggerElement()),
                p = n.controller().info("vertical");
                u.forEach(function(t, e) {
                    var i = t.vars.css || t.vars,
                    s = p ? void 0 !== i.top || void 0 !== i.bottom: void 0 !== i.left || void 0 !== i.right;
                    return s ? (r(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                })
            }
            if (parseFloat(TweenLite.version) >= 1.14) for (var d, f, m = t.getChildren ? t.getChildren(!0, !0, !1) : [t], g = function() {
                r(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
            },
            _ = 0; _ < m.length; _++) d = m[_],
            f !== g && (f = d.vars.onOverwrite, d.vars.onOverwrite = function() {
                f && f.apply(this, arguments),
                g.apply(this, arguments)
            });
            return r(3, "added tween"),
            o(),
            n
        },
        n.removeTween = function(e) {
            return t && (e && t.progress(0).pause(), t.kill(), t = void 0, r(3, "removed tween (reset: " + (e ? "true": "false") + ")")),
            n
        }
    })
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], e) : e("object" == typeof exports ? require("scrollmagic") : t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic)
} (this,
function(t) {
    "use strict";
    var e = "debug.addIndicators",
    i = window.console || {},
    s = Function.prototype.bind.call(i.error || i.log ||
    function() {},
    i);
    t || s("(" + e + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
    var n = "0.85em",
    r = "9999",
    o = 15,
    a = t._util,
    l = 0;
    t.Scene.extend(function() {
        var t, e = this;
        e.addIndicators = function(i) {
            if (!t) {
                var s = {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "yellow",
                    colorEnd: "red",
                    colorTrigger: "blue"
                };
                i = a.extend({},
                s, i),
                l++,
                t = new h(e, i),
                e.on("add.plugin_addIndicators", t.add),
                e.on("remove.plugin_addIndicators", t.remove),
                e.on("destroy.plugin_addIndicators", e.removeIndicators),
                e.controller() && t.add()
            }
            return e
        },
        e.removeIndicators = function() {
            return t && (t.remove(), this.off("*.plugin_addIndicators"), t = void 0),
            e
        }
    }),
    t.Controller.addOption("addIndicators", !1),
    t.Controller.extend(function() {
        var i = this,
        s = i.info(),
        n = s.container,
        r = s.isDocument,
        l = s.vertical,
        h = {
            groups: []
        },
        c = function() {
            i._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + e + ")", "->"), i._log.apply(this, arguments))
        };
        i._indicators && c(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),
        this._indicators = h;
        var u = function() {
            h.updateBoundsPositions()
        },
        p = function() {
            h.updateTriggerGroupPositions()
        };
        return n.addEventListener("resize", p),
        r || (window.addEventListener("resize", p), window.addEventListener("scroll", p)),
        n.addEventListener("resize", u),
        n.addEventListener("scroll", u),
        this._indicators.updateBoundsPositions = function(t) {
            for (var e, i, s, r = t ? [a.extend({},
            t.triggerGroup, {
                members: [t]
            })] : h.groups, c = r.length, u = {},
            p = l ? "left": "top", d = l ? "width": "height", f = l ? a.get.scrollLeft(n) + a.get.width(n) - o: a.get.scrollTop(n) + a.get.height(n) - o; c--;) for (s = r[c], e = s.members.length, i = a.get[d](s.element.firstChild); e--;) u[p] = f - i,
            a.css(s.members[e].bounds, u)
        },
        this._indicators.updateTriggerGroupPositions = function(t) {
            for (var e, s, c, u, p, d = t ? [t] : h.groups, f = d.length, m = r ? document.body: n, g = r ? {
                top: 0,
                left: 0
            }: a.get.offset(m, !0), _ = l ? a.get.width(n) - o: a.get.height(n) - o, v = l ? "width": "height", y = l ? "Y": "X"; f--;) e = d[f],
            s = e.element,
            c = e.triggerHook * i.info("size"),
            u = a.get[v](s.firstChild.firstChild),
            p = c > u ? "translate" + y + "(-100%)": "",
            a.css(s, {
                top: g.top + (l ? c: _ - e.members[0].options.indent),
                left: g.left + (l ? _ - e.members[0].options.indent: c)
            }),
            a.css(s.firstChild.firstChild, {
                "-ms-transform": p,
                "-webkit-transform": p,
                transform: p
            })
        },
        this._indicators.updateTriggerGroupLabel = function(t) {
            var e = "trigger" + (t.members.length > 1 ? "": " " + t.members[0].options.name),
            i = t.element.firstChild.firstChild,
            s = i.textContent !== e;
            s && (i.textContent = e, l && h.updateBoundsPositions())
        },
        this.addScene = function(e) {
            this._options.addIndicators && e instanceof t.Scene && e.controller() === i && e.addIndicators(),
            this.$super.addScene.apply(this, arguments)
        },
        this.destroy = function() {
            n.removeEventListener("resize", p),
            r || (window.removeEventListener("resize", p), window.removeEventListener("scroll", p)),
            n.removeEventListener("resize", u),
            n.removeEventListener("scroll", u),
            this.$super.destroy.apply(this, arguments)
        },
        i
    });
    var h = function(t, i) {
        var s, n, r = this,
        o = c.bounds(),
        h = c.start(i.colorStart),
        u = c.end(i.colorEnd),
        p = i.parent && a.get.elements(i.parent)[0],
        d = function() {
            t._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + e + ")", "->"), t._log.apply(this, arguments))
        };
        i.name = i.name || l,
        h.firstChild.textContent += " " + i.name,
        u.textContent += " " + i.name,
        o.appendChild(h),
        o.appendChild(u),
        r.options = i,
        r.bounds = o,
        r.triggerGroup = void 0,
        this.add = function() {
            n = t.controller(),
            s = n.info("vertical");
            var e = n.info("isDocument");
            p || (p = e ? document.body: n.info("container")),
            e || "static" !== a.css(p, "position") || a.css(p, {
                position: "relative"
            }),
            t.on("change.plugin_addIndicators", m),
            t.on("shift.plugin_addIndicators", f),
            x(),
            v(),
            setTimeout(function() {
                n._indicators.updateBoundsPositions(r)
            },
            0),
            d(3, "added indicators")
        },
        this.remove = function() {
            if (r.triggerGroup) {
                if (t.off("change.plugin_addIndicators", m), t.off("shift.plugin_addIndicators", f), r.triggerGroup.members.length > 1) {
                    var e = r.triggerGroup;
                    e.members.splice(e.members.indexOf(r), 1),
                    n._indicators.updateTriggerGroupLabel(e),
                    n._indicators.updateTriggerGroupPositions(e),
                    r.triggerGroup = void 0
                } else w();
                _(),
                d(3, "removed indicators")
            }
        };
        var f = function() {
            v()
        },
        m = function(t) {
            "triggerHook" === t.what && x()
        },
        g = function() {
            var t = n.info("vertical");
            a.css(h.firstChild, {
                "border-bottom-width": t ? 1 : 0,
                "border-right-width": t ? 0 : 1,
                bottom: t ? -1 : i.indent,
                right: t ? i.indent: -1,
                padding: t ? "0 8px": "2px 4px"
            }),
            a.css(u, {
                "border-top-width": t ? 1 : 0,
                "border-left-width": t ? 0 : 1,
                top: t ? "100%": "",
                right: t ? i.indent: "",
                bottom: t ? "": i.indent,
                left: t ? "": "100%",
                padding: t ? "0 8px": "2px 4px"
            }),
            p.appendChild(o)
        },
        _ = function() {
            o.parentNode.removeChild(o)
        },
        v = function() {
            o.parentNode !== p && g();
            var e = {};
            e[s ? "top": "left"] = t.triggerPosition(),
            e[s ? "height": "width"] = t.duration(),
            a.css(o, e),
            a.css(u, {
                display: t.duration() > 0 ? "": "none"
            })
        },
        y = function() {
            var e = c.trigger(i.colorTrigger),
            o = {};
            o[s ? "right": "bottom"] = 0,
            o[s ? "border-top-width": "border-left-width"] = 1,
            a.css(e.firstChild, o),
            a.css(e.firstChild.firstChild, {
                padding: s ? "0 8px 3px 8px": "3px 4px"
            }),
            document.body.appendChild(e);
            var l = {
                triggerHook: t.triggerHook(),
                element: e,
                members: [r]
            };
            n._indicators.groups.push(l),
            r.triggerGroup = l,
            n._indicators.updateTriggerGroupLabel(l),
            n._indicators.updateTriggerGroupPositions(l)
        },
        w = function() {
            n._indicators.groups.splice(n._indicators.groups.indexOf(r.triggerGroup), 1),
            r.triggerGroup.element.parentNode.removeChild(r.triggerGroup.element),
            r.triggerGroup = void 0
        },
        x = function() {
            var e = t.triggerHook(),
            i = 1e-4;
            if (! (r.triggerGroup && Math.abs(r.triggerGroup.triggerHook - e) < i)) {
                for (var s, o = n._indicators.groups,
                a = o.length; a--;) if (s = o[a], Math.abs(s.triggerHook - e) < i) return r.triggerGroup && (1 === r.triggerGroup.members.length ? w() : (r.triggerGroup.members.splice(r.triggerGroup.members.indexOf(r), 1), n._indicators.updateTriggerGroupLabel(r.triggerGroup), n._indicators.updateTriggerGroupPositions(r.triggerGroup))),
                s.members.push(r),
                r.triggerGroup = s,
                void n._indicators.updateTriggerGroupLabel(s);
                if (r.triggerGroup) {
                    if (1 === r.triggerGroup.members.length) return r.triggerGroup.triggerHook = e,
                    void n._indicators.updateTriggerGroupPositions(r.triggerGroup);
                    r.triggerGroup.members.splice(r.triggerGroup.members.indexOf(r), 1),
                    n._indicators.updateTriggerGroupLabel(r.triggerGroup),
                    n._indicators.updateTriggerGroupPositions(r.triggerGroup),
                    r.triggerGroup = void 0
                }
                y()
            }
        }
    },
    c = {
        start: function(t) {
            var e = document.createElement("div");
            e.textContent = "start",
            a.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            });
            var i = document.createElement("div");
            return a.css(i, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }),
            i.appendChild(e),
            i
        },
        end: function(t) {
            var e = document.createElement("div");
            return e.textContent = "end",
            a.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            e
        },
        bounds: function() {
            var t = document.createElement("div");
            return a.css(t, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": n
            }),
            t.style.zIndex = r,
            t
        },
        trigger: function(t) {
            var e = document.createElement("div");
            e.textContent = "trigger",
            a.css(e, {
                position: "relative"
            });
            var i = document.createElement("div");
            a.css(i, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            i.appendChild(e);
            var s = document.createElement("div");
            return a.css(s, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": n
            }),
            s.style.zIndex = r,
            s.appendChild(i),
            s
        }
    }
}),
!
function(t, e, i) {
    function s(t, e) {
        return typeof t === e
    }

    function n() {
        var t, e, i, n, r, o, a;
        for (var l in y) if (y.hasOwnProperty(l)) {
            if (t = [], e = y[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
            for (n = s(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) o = t[r],
            a = o.split("."),
            1 === a.length ? x[a[0]] = n: (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = n),
            v.push((n ? "": "no-") + a.join("-"))
        }
    }

    function r(t) {
        var e = T.className,
        i = x._config.classPrefix || "";
        if (b && (e = e.baseVal), x._config.enableJSClass) {
            var s = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(s, "$1" + i + "js$2")
        }
        x._config.enableClasses && (e += " " + i + t.join(" " + i), b ? T.className.baseVal = e: T.className = e)
    }

    function o() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : b ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a() {
        var t = e.body;
        return t || (t = o(b ? "svg": "body"), t.fake = !0),
        t
    }

    function l(t, i, s, n) {
        var r, l, h, c, u = "modernizr",
        p = o("div"),
        d = a();
        if (parseInt(s, 10)) for (; s--;) h = o("div"),
        h.id = n ? n[s] : u + (s + 1),
        p.appendChild(h);
        return r = o("style"),
        r.type = "text/css",
        r.id = "s" + u,
        (d.fake ? d: p).appendChild(r),
        d.appendChild(p),
        r.styleSheet ? r.styleSheet.cssText = t: r.appendChild(e.createTextNode(t)),
        p.id = u,
        d.fake && (d.style.background = "", d.style.overflow = "hidden", c = T.style.overflow, T.style.overflow = "hidden", T.appendChild(d)),
        l = i(p, t),
        d.fake ? (d.parentNode.removeChild(d), T.style.overflow = c, T.offsetHeight) : p.parentNode.removeChild(p),
        !!l
    }

    function h(t, e) {
        return !! ~ ("" + t).indexOf(e)
    }

    function c(t) {
        return t.replace(/([a-z])-([a-z])/g,
        function(t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function p(t, e, i) {
        var n;
        for (var r in t) if (t[r] in e) return i === !1 ? t[r] : (n = e[t[r]], s(n, "function") ? u(n, i || e) : n);
        return ! 1
    }

    function d(t) {
        return t.replace(/([A-Z])/g,
        function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(e, s) {
        var n = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; n--;) if (t.CSS.supports(d(e[n]), s)) return ! 0;
            return ! 1
        }
        if ("CSSSupportsRule" in t) {
            for (var r = []; n--;) r.push("(" + d(e[n]) + ":" + s + ")");
            return r = r.join(" or "),
            l("@supports (" + r + ") { #modernizr { position: absolute; } }",
            function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function m(t, e, n, r) {
        function a() {
            u && (delete A.style, delete A.modElem)
        }
        if (r = s(r, "undefined") ? !1 : r, !s(n, "undefined")) {
            var l = f(t, n);
            if (!s(l, "undefined")) return l
        }
        for (var u, p, d, m, g, _ = ["modernizr", "tspan", "samp"]; ! A.style && _.length;) u = !0,
        A.modElem = o(_.shift()),
        A.style = A.modElem.style;
        for (d = t.length, p = 0; d > p; p++) if (m = t[p], g = A.style[m], h(m, "-") && (m = c(m)), A.style[m] !== i) {
            if (r || s(n, "undefined")) return a(),
            "pfx" == e ? m: !0;
            try {
                A.style[m] = n
            } catch(v) {}
            if (A.style[m] != g) return a(),
            "pfx" == e ? m: !0
        }
        return a(),
        !1
    }

    function g(t, e, i, n, r) {
        var o = t.charAt(0).toUpperCase() + t.slice(1),
        a = (t + " " + k.join(o + " ") + o).split(" ");
        return s(e, "string") || s(e, "undefined") ? m(a, e, n, r) : (a = (t + " " + E.join(o + " ") + o).split(" "), p(a, e, i))
    }

    function _(t, e, s) {
        return g(t, i, i, e, s)
    }
    var v = [],
    y = [],
    w = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(t, e) {
            var i = this;
            setTimeout(function() {
                e(i[t])
            },
            0)
        },
        addTest: function(t, e, i) {
            y.push({
                name: t,
                fn: e,
                options: i
            })
        },
        addAsyncTest: function(t) {
            y.push({
                name: null,
                fn: t
            })
        }
    },
    x = function() {};
    x.prototype = w,
    x = new x;
    var T = e.documentElement,
    b = "svg" === T.nodeName.toLowerCase(),
    S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = S;
    var C = w.testStyles = l;
    x.addTest("touchevents",
    function() {
        var i;
        if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
        else {
            var s = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            C(s,
            function(t) {
                i = 9 === t.offsetTop
            })
        }
        return i
    });
    var P = "Moz O ms Webkit",
    k = w._config.usePrefixes ? P.split(" ") : [];
    w._cssomPrefixes = k;
    var E = w._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    w._domPrefixes = E;
    var O = {
        elem: o("modernizr")
    };
    x._q.push(function() {
        delete O.elem
    });
    var A = {
        style: O.elem.style
    };
    x._q.unshift(function() {
        delete A.style
    }),
    w.testAllProps = g,
    w.testAllProps = _,
    x.addTest("cssanimations", _("animationName", "a", !0)),
    n(),
    r(v),
    delete w.addTest,
    delete w.addAsyncTest;
    for (var M = 0; M < x._q.length; M++) x._q[M]();
    t.Modernizr = x
} (window, document),
!
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" != typeof jQuery ? jQuery: window.Zepto)
} (function(t) {
    "use strict";

    function e(e) {
        var i = e.data;
        e.isDefaultPrevented() || (e.preventDefault(), t(e.target).ajaxSubmit(i))
    }

    function i(e) {
        var i = e.target,
        s = t(i);
        if (!s.is("[type=submit],[type=image]")) {
            var n = s.closest("[type=submit]");
            if (0 === n.length) return;
            i = n[0]
        }
        var r = this;
        if (r.clk = i, "image" == i.type) if (void 0 !== e.offsetX) r.clk_x = e.offsetX,
        r.clk_y = e.offsetY;
        else if ("function" == typeof t.fn.offset) {
            var o = s.offset();
            r.clk_x = e.pageX - o.left,
            r.clk_y = e.pageY - o.top
        } else r.clk_x = e.pageX - i.offsetLeft,
        r.clk_y = e.pageY - i.offsetTop;
        setTimeout(function() {
            r.clk = r.clk_x = r.clk_y = null
        },
        100)
    }

    function s() {
        if (t.fn.ajaxSubmit.debug) {
            var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
        }
    }
    var n = {};
    n.fileapi = void 0 !== t("<input type='file'/>").get(0).files,
    n.formdata = void 0 !== window.FormData;
    var r = !!t.fn.prop;
    t.fn.attr2 = function() {
        if (!r) return this.attr.apply(this, arguments);
        var t = this.prop.apply(this, arguments);
        return t && t.jquery || "string" == typeof t ? t: this.attr.apply(this, arguments)
    },
    t.fn.ajaxSubmit = function(e) {
        function i(i) {
            var s, n, r = t.param(i, e.traditional).split("&"),
            o = r.length,
            a = [];
            for (s = 0; o > s; s++) r[s] = r[s].replace(/\+/g, " "),
            n = r[s].split("="),
            a.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return a
        }

        function o(s) {
            for (var n = new FormData,
            r = 0; r < s.length; r++) n.append(s[r].name, s[r].value);
            if (e.extraData) {
                var o = i(e.extraData);
                for (r = 0; r < o.length; r++) o[r] && n.append(o[r][0], o[r][1])
            }
            e.data = null;
            var a = t.extend(!0, {},
            t.ajaxSettings, e, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: l || "POST"
            });
            e.uploadProgress && (a.xhr = function() {
                var i = t.ajaxSettings.xhr();
                return i.upload && i.upload.addEventListener("progress",
                function(t) {
                    var i = 0,
                    s = t.loaded || t.position,
                    n = t.total;
                    t.lengthComputable && (i = Math.ceil(s / n * 100)),
                    e.uploadProgress(t, s, n, i)
                },
                !1),
                i
            }),
            a.data = null;
            var h = a.beforeSend;
            return a.beforeSend = function(t, i) {
                i.data = e.formData ? e.formData: n,
                h && h.call(this, t, i)
            },
            t.ajax(a)
        }

        function a(i) {
            function n(t) {
                var e = null;
                try {
                    t.contentWindow && (e = t.contentWindow.document)
                } catch(i) {
                    s("cannot get iframe.contentWindow document: " + i)
                }
                if (e) return e;
                try {
                    e = t.contentDocument ? t.contentDocument: t.document
                } catch(i) {
                    s("cannot get iframe.contentDocument: " + i),
                    e = t.document
                }
                return e
            }

            function o() {
                function e() {
                    try {
                        var t = n(_).readyState;
                        s("state = " + t),
                        t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                    } catch(i) {
                        s("Server abort: ", i, " (", i.name, ")"),
                        a(P),
                        T && clearTimeout(T),
                        T = void 0
                    }
                }
                var i = u.attr2("target"),
                r = u.attr2("action"),
                o = "multipart/form-data",
                h = u.attr("enctype") || u.attr("encoding") || o;
                b.setAttribute("target", f),
                (!l || /post/i.test(l)) && b.setAttribute("method", "POST"),
                r != p.url && b.setAttribute("action", p.url),
                p.skipEncodingOverride || l && !/post/i.test(l) || u.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                p.timeout && (T = setTimeout(function() {
                    x = !0,
                    a(C)
                },
                p.timeout));
                var c = [];
                try {
                    if (p.extraData) for (var d in p.extraData) p.extraData.hasOwnProperty(d) && c.push(t.isPlainObject(p.extraData[d]) && p.extraData[d].hasOwnProperty("name") && p.extraData[d].hasOwnProperty("value") ? t('<input type="hidden" name="' + p.extraData[d].name + '">').val(p.extraData[d].value).appendTo(b)[0] : t('<input type="hidden" name="' + d + '">').val(p.extraData[d]).appendTo(b)[0]);
                    p.iframeTarget || g.appendTo("body"),
                    _.attachEvent ? _.attachEvent("onload", a) : _.addEventListener("load", a, !1),
                    setTimeout(e, 15);
                    try {
                        b.submit()
                    } catch(m) {
                        var v = document.createElement("form").submit;
                        v.apply(b)
                    }
                } finally {
                    b.setAttribute("action", r),
                    b.setAttribute("enctype", h),
                    i ? b.setAttribute("target", i) : u.removeAttr("target"),
                    t(c).remove()
                }
            }

            function a(e) {
                if (!v.aborted && !M) {
                    if (A = n(_), A || (s("cannot access response document"), e = P), e === C && v) return v.abort("timeout"),
                    void S.reject(v, "timeout");
                    if (e == P && v) return v.abort("server abort"),
                    void S.reject(v, "error", "server abort");
                    if (A && A.location.href != p.iframeSrc || x) {
                        _.detachEvent ? _.detachEvent("onload", a) : _.removeEventListener("load", a, !1);
                        var i, r = "success";
                        try {
                            if (x) throw "timeout";
                            var o = "xml" == p.dataType || A.XMLDocument || t.isXMLDoc(A);
                            if (s("isXml=" + o), !o && window.opera && (null === A.body || !A.body.innerHTML) && --R) return s("requeing onLoad callback, DOM not available"),
                            void setTimeout(a, 250);
                            var l = A.body ? A.body: A.documentElement;
                            v.responseText = l ? l.innerHTML: null,
                            v.responseXML = A.XMLDocument ? A.XMLDocument: A,
                            o && (p.dataType = "xml"),
                            v.getResponseHeader = function(t) {
                                var e = {
                                    "content-type": p.dataType
                                };
                                return e[t.toLowerCase()]
                            },
                            l && (v.status = Number(l.getAttribute("status")) || v.status, v.statusText = l.getAttribute("statusText") || v.statusText);
                            var h = (p.dataType || "").toLowerCase(),
                            c = /(json|script|text)/.test(h);
                            if (c || p.textarea) {
                                var u = A.getElementsByTagName("textarea")[0];
                                if (u) v.responseText = u.value,
                                v.status = Number(u.getAttribute("status")) || v.status,
                                v.statusText = u.getAttribute("statusText") || v.statusText;
                                else if (c) {
                                    var f = A.getElementsByTagName("pre")[0],
                                    m = A.getElementsByTagName("body")[0];
                                    f ? v.responseText = f.textContent ? f.textContent: f.innerText: m && (v.responseText = m.textContent ? m.textContent: m.innerText)
                                }
                            } else "xml" == h && !v.responseXML && v.responseText && (v.responseXML = D(v.responseText));
                            try {
                                O = L(v, h, p)
                            } catch(y) {
                                r = "parsererror",
                                v.error = i = y || r
                            }
                        } catch(y) {
                            s("error caught: ", y),
                            r = "error",
                            v.error = i = y || r
                        }
                        v.aborted && (s("upload aborted"), r = null),
                        v.status && (r = v.status >= 200 && v.status < 300 || 304 === v.status ? "success": "error"),
                        "success" === r ? (p.success && p.success.call(p.context, O, "success", v), S.resolve(v.responseText, "success", v), d && t.event.trigger("ajaxSuccess", [v, p])) : r && (void 0 === i && (i = v.statusText), p.error && p.error.call(p.context, v, r, i), S.reject(v, "error", i), d && t.event.trigger("ajaxError", [v, p, i])),
                        d && t.event.trigger("ajaxComplete", [v, p]),
                        d && !--t.active && t.event.trigger("ajaxStop"),
                        p.complete && p.complete.call(p.context, v, r),
                        M = !0,
                        p.timeout && clearTimeout(T),
                        setTimeout(function() {
                            p.iframeTarget ? g.attr("src", p.iframeSrc) : g.remove(),
                            v.responseXML = null
                        },
                        100)
                    }
                }
            }
            var h, c, p, d, f, g, _, v, y, w, x, T, b = u[0],
            S = t.Deferred();
            if (S.abort = function(t) {
                v.abort(t)
            },
            i) for (c = 0; c < m.length; c++) h = t(m[c]),
            r ? h.prop("disabled", !1) : h.removeAttr("disabled");
            if (p = t.extend(!0, {},
            t.ajaxSettings, e), p.context = p.context || p, f = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (g = t(p.iframeTarget), w = g.attr2("name"), w ? f = w: g.attr2("name", f)) : (g = t('<iframe name="' + f + '" src="' + p.iframeSrc + '" />'), g.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), _ = g[0], v = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(e) {
                    var i = "timeout" === e ? "timeout": "aborted";
                    s("aborting upload... " + i),
                    this.aborted = 1;
                    try {
                        _.contentWindow.document.execCommand && _.contentWindow.document.execCommand("Stop")
                    } catch(n) {}
                    g.attr("src", p.iframeSrc),
                    v.error = i,
                    p.error && p.error.call(p.context, v, i, e),
                    d && t.event.trigger("ajaxError", [v, p, i]),
                    p.complete && p.complete.call(p.context, v, i)
                }
            },
            d = p.global, d && 0 === t.active++&&t.event.trigger("ajaxStart"), d && t.event.trigger("ajaxSend", [v, p]), p.beforeSend && p.beforeSend.call(p.context, v, p) === !1) return p.global && t.active--,
            S.reject(),
            S;
            if (v.aborted) return S.reject(),
            S;
            y = b.clk,
            y && (w = y.name, w && !y.disabled && (p.extraData = p.extraData || {},
            p.extraData[w] = y.value, "image" == y.type && (p.extraData[w + ".x"] = b.clk_x, p.extraData[w + ".y"] = b.clk_y)));
            var C = 1,
            P = 2,
            k = t("meta[name=csrf-token]").attr("content"),
            E = t("meta[name=csrf-param]").attr("content");
            E && k && (p.extraData = p.extraData || {},
            p.extraData[E] = k),
            p.forceSync ? o() : setTimeout(o, 10);
            var O, A, M, R = 50,
            D = t.parseXML ||
            function(t, e) {
                return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"),
                e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e: null
            },
            z = t.parseJSON ||
            function(t) {
                return window.eval("(" + t + ")")
            },
            L = function(e, i, s) {
                var n = e.getResponseHeader("content-type") || "",
                r = "xml" === i || !i && n.indexOf("xml") >= 0,
                o = r ? e.responseXML: e.responseText;
                return r && "parsererror" === o.documentElement.nodeName && t.error && t.error("parsererror"),
                s && s.dataFilter && (o = s.dataFilter(o, i)),
                "string" == typeof o && ("json" === i || !i && n.indexOf("json") >= 0 ? o = z(o) : ("script" === i || !i && n.indexOf("javascript") >= 0) && t.globalEval(o)),
                o
            };
            return S
        }
        if (!this.length) return s("ajaxSubmit: skipping submit process - no element selected"),
        this;
        var l, h, c, u = this;
        "function" == typeof e ? e = {
            success: e
        }: void 0 === e && (e = {}),
        l = e.type || this.attr2("method"),
        h = e.url || this.attr2("action"),
        c = "string" == typeof h ? t.trim(h) : "",
        c = c || window.location.href || "",
        c && (c = (c.match(/^([^#]+)/) || [])[1]),
        e = t.extend(!0, {
            url: c,
            success: t.ajaxSettings.success,
            type: l || t.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank"
        },
        e);
        var p = {};
        if (this.trigger("form-pre-serialize", [this, e, p]), p.veto) return s("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
        this;
        if (e.beforeSerialize && e.beforeSerialize(this, e) === !1) return s("ajaxSubmit: submit aborted via beforeSerialize callback"),
        this;
        var d = e.traditional;
        void 0 === d && (d = t.ajaxSettings.traditional);
        var f, m = [],
        g = this.formToArray(e.semantic, m);
        if (e.data && (e.extraData = e.data, f = t.param(e.data, d)), e.beforeSubmit && e.beforeSubmit(g, this, e) === !1) return s("ajaxSubmit: submit aborted via beforeSubmit callback"),
        this;
        if (this.trigger("form-submit-validate", [g, this, e, p]), p.veto) return s("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
        this;
        var _ = t.param(g, d);
        f && (_ = _ ? _ + "&" + f: f),
        "GET" == e.type.toUpperCase() ? (e.url += (e.url.indexOf("?") >= 0 ? "&": "?") + _, e.data = null) : e.data = _;
        var v = [];
        if (e.resetForm && v.push(function() {
            u.resetForm()
        }), e.clearForm && v.push(function() {
            u.clearForm(e.includeHidden)
        }), !e.dataType && e.target) {
            var y = e.success ||
            function() {};
            v.push(function(i) {
                var s = e.replaceTarget ? "replaceWith": "html";
                t(e.target)[s](i).each(y, arguments)
            })
        } else e.success && v.push(e.success);
        if (e.success = function(t, i, s) {
            for (var n = e.context || this,
            r = 0,
            o = v.length; o > r; r++) v[r].apply(n, [t, i, s || u, u])
        },
        e.error) {
            var w = e.error;
            e.error = function(t, i, s) {
                var n = e.context || this;
                w.apply(n, [t, i, s, u])
            }
        }
        if (e.complete) {
            var x = e.complete;
            e.complete = function(t, i) {
                var s = e.context || this;
                x.apply(s, [t, i, u])
            }
        }
        var T = t("input[type=file]:enabled", this).filter(function() {
            return "" !== t(this).val()
        }),
        b = T.length > 0,
        S = "multipart/form-data",
        C = u.attr("enctype") == S || u.attr("encoding") == S,
        P = n.fileapi && n.formdata;
        s("fileAPI :" + P);
        var k, E = (b || C) && !P;
        e.iframe !== !1 && (e.iframe || E) ? e.closeKeepAlive ? t.get(e.closeKeepAlive,
        function() {
            k = a(g)
        }) : k = a(g) : k = (b || C) && P ? o(g) : t.ajax(e),
        u.removeData("jqxhr").data("jqxhr", k);
        for (var O = 0; O < m.length; O++) m[O] = null;
        return this.trigger("form-submit-notify", [this, e]),
        this
    },
    t.fn.ajaxForm = function(n) {
        if (n = n || {},
        n.delegation = n.delegation && t.isFunction(t.fn.on), !n.delegation && 0 === this.length) {
            var r = {
                s: this.selector,
                c: this.context
            };
            return ! t.isReady && r.s ? (s("DOM not ready, queuing ajaxForm"), t(function() {
                t(r.s, r.c).ajaxForm(n)
            }), this) : (s("terminating; zero elements found by selector" + (t.isReady ? "": " (DOM not ready)")), this)
        }
        return n.delegation ? (t(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, n, e).on("click.form-plugin", this.selector, n, i), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, e).bind("click.form-plugin", n, i)
    },
    t.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    },
    t.fn.formToArray = function(e, i) {
        var s = [];
        if (0 === this.length) return s;
        var r, o = this[0],
        a = this.attr("id"),
        l = e ? o.getElementsByTagName("*") : o.elements;
        if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = t(l).get()), a && (r = t(':input[form="' + a + '"]').get(), r.length && (l = (l || []).concat(r))), !l || !l.length) return s;
        var h, c, u, p, d, f, m;
        for (h = 0, f = l.length; f > h; h++) if (d = l[h], u = d.name, u && !d.disabled) if (e && o.clk && "image" == d.type) o.clk == d && (s.push({
            name: u,
            value: t(d).val(),
            type: d.type
        }), s.push({
            name: u + ".x",
            value: o.clk_x
        },
        {
            name: u + ".y",
            value: o.clk_y
        }));
        else if (p = t.fieldValue(d, !0), p && p.constructor == Array) for (i && i.push(d), c = 0, m = p.length; m > c; c++) s.push({
            name: u,
            value: p[c]
        });
        else if (n.fileapi && "file" == d.type) {
            i && i.push(d);
            var g = d.files;
            if (g.length) for (c = 0; c < g.length; c++) s.push({
                name: u,
                value: g[c],
                type: d.type
            });
            else s.push({
                name: u,
                value: "",
                type: d.type
            })
        } else null !== p && "undefined" != typeof p && (i && i.push(d), s.push({
            name: u,
            value: p,
            type: d.type,
            required: d.required
        }));
        if (!e && o.clk) {
            var _ = t(o.clk),
            v = _[0];
            u = v.name,
            u && !v.disabled && "image" == v.type && (s.push({
                name: u,
                value: _.val()
            }), s.push({
                name: u + ".x",
                value: o.clk_x
            },
            {
                name: u + ".y",
                value: o.clk_y
            }))
        }
        return s
    },
    t.fn.formSerialize = function(e) {
        return t.param(this.formToArray(e))
    },
    t.fn.fieldSerialize = function(e) {
        var i = [];
        return this.each(function() {
            var s = this.name;
            if (s) {
                var n = t.fieldValue(this, e);
                if (n && n.constructor == Array) for (var r = 0,
                o = n.length; o > r; r++) i.push({
                    name: s,
                    value: n[r]
                });
                else null !== n && "undefined" != typeof n && i.push({
                    name: this.name,
                    value: n
                })
            }
        }),
        t.param(i)
    },
    t.fn.fieldValue = function(e) {
        for (var i = [], s = 0, n = this.length; n > s; s++) {
            var r = this[s],
            o = t.fieldValue(r, e);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? t.merge(i, o) : i.push(o))
        }
        return i
    },
    t.fieldValue = function(e, i) {
        var s = e.name,
        n = e.type,
        r = e.tagName.toLowerCase();
        if (void 0 === i && (i = !0), i && (!s || e.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !e.checked || ("submit" == n || "image" == n) && e.form && e.form.clk != e || "select" == r && -1 == e.selectedIndex)) return null;
        if ("select" == r) {
            var o = e.selectedIndex;
            if (0 > o) return null;
            for (var a = [], l = e.options, h = "select-one" == n, c = h ? o + 1 : l.length, u = h ? o: 0; c > u; u++) {
                var p = l[u];
                if (p.selected) {
                    var d = p.value;
                    if (d || (d = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text: p.value), h) return d;
                    a.push(d)
                }
            }
            return a
        }
        return t(e).val()
    },
    t.fn.clearForm = function(e) {
        return this.each(function() {
            t("input,select,textarea", this).clearFields(e)
        })
    },
    t.fn.clearFields = t.fn.clearInputs = function(e) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var s = this.type,
            n = this.tagName.toLowerCase();
            i.test(s) || "textarea" == n ? this.value = "": "checkbox" == s || "radio" == s ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == s ? /MSIE/.test(navigator.userAgent) ? t(this).replaceWith(t(this).clone(!0)) : t(this).val("") : e && (e === !0 && /hidden/.test(s) || "string" == typeof e && t(this).is(e)) && (this.value = "")
        })
    },
    t.fn.resetForm = function() {
        return this.each(function() { ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    },
    t.fn.enable = function(t) {
        return void 0 === t && (t = !0),
        this.each(function() {
            this.disabled = !t
        })
    },
    t.fn.selected = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            var i = this.type;
            if ("checkbox" == i || "radio" == i) this.checked = e;
            else if ("option" == this.tagName.toLowerCase()) {
                var s = t(this).parent("select");
                e && s[0] && "select-one" == s[0].type && s.find("option").selected(!1),
                this.selected = e
            }
        })
    },
    t.fn.ajaxSubmit.debug = !1
}),
function() {
    "use strict";

    function t(e, s) {
        function n(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var r;
        if (s = s || {},
        this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = s.touchBoundary || 10, this.layer = e, this.tapDelay = s.tapDelay || 200, this.tapTimeout = s.tapTimeout || 700, !t.notNeeded(e)) {
            for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, h = o.length; h > l; l++) a[o[l]] = n(a[o[l]], a);
            i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)),
            e.addEventListener("click", this.onClick, !0),
            e.addEventListener("touchstart", this.onTouchStart, !1),
            e.addEventListener("touchmove", this.onTouchMove, !1),
            e.addEventListener("touchend", this.onTouchEnd, !1),
            e.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, s) {
                var n = Node.prototype.removeEventListener;
                "click" === t ? n.call(e, t, i.hijacked || i, s) : n.call(e, t, i, s)
            },
            e.addEventListener = function(t, i, s) {
                var n = Node.prototype.addEventListener;
                "click" === t ? n.call(e, t, i.hijacked || (i.hijacked = function(t) {
                    t.propagationStopped || i(t)
                }), s) : n.call(e, t, i, s)
            }),
            "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click",
            function(t) {
                r(t)
            },
            !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
    i = navigator.userAgent.indexOf("Android") > 0 && !e,
    s = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
    n = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    r = s && /OS [6-7]_\d/.test(navigator.userAgent),
    o = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled) return ! 0;
            break;
        case "input":
            if (s && "file" === t.type || t.disabled) return ! 0;
            break;
        case "label":
        case "iframe":
        case "video":
            return ! 0
        }
        return /\bneedsclick\b/.test(t.className)
    },
    t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return ! 0;
        case "select":
            return ! i;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return ! 1
            }
            return ! t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    },
    t.prototype.sendClick = function(t, e) {
        var i, s;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
        s = e.changedTouches[0],
        i = document.createEvent("MouseEvents"),
        i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null),
        i.forwardedTouchEvent = !0,
        t.dispatchEvent(i)
    },
    t.prototype.determineEventType = function(t) {
        return i && "select" === t.tagName.toLowerCase() ? "mousedown": "click"
    },
    t.prototype.focus = function(t) {
        var e;
        s && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    },
    t.prototype.updateScrollParent = function(t) {
        var e, i;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i,
                    t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while ( i )
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    },
    t.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode: t
    },
    t.prototype.onTouchStart = function(t) {
        var e, i, r;
        if (t.targetTouches.length > 1) return ! 0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], s) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return ! 0;
            if (!n) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(),
                !1;
                this.lastTouchIdentifier = i.identifier,
                this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = t.timeStamp,
        this.targetElement = e,
        this.touchStartX = i.pageX,
        this.touchStartY = i.pageY,
        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
        !0
    },
    t.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0],
        i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i ? !0 : !1
    },
    t.prototype.onTouchMove = function(t) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    },
    t.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control: t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    },
    t.prototype.onTouchEnd = function(t) {
        var e, o, a, l, h, c = this.targetElement;
        if (!this.trackingClick) return ! 0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
        !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return ! 0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = c.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(c)) {
                if (this.focus(c), i) return ! 1;
                c = e
            }
        } else if (this.needsFocus(c)) return t.timeStamp - o > 100 || s && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), s && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return s && !n && (l = c.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
    },
    t.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    },
    t.prototype.onMouse = function(t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    },
    t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    },
    t.prototype.destroy = function() {
        var t = this.layer;
        i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
        t.removeEventListener("click", this.onClick, !0),
        t.removeEventListener("touchstart", this.onTouchStart, !1),
        t.removeEventListener("touchmove", this.onTouchMove, !1),
        t.removeEventListener("touchend", this.onTouchEnd, !1),
        t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    },
    t.notNeeded = function(t) {
        var e, s, n, r;
        if ("undefined" == typeof window.ontouchstart) return ! 0;
        if (s = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return ! 0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if ( - 1 !== e.content.indexOf("user-scalable=no")) return ! 0;
                if (s > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
            }
        }
        if (o && (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), n[1] >= 10 && n[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if ( - 1 !== e.content.indexOf("user-scalable=no")) return ! 0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && ( - 1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
    },
    t.attach = function(e, i) {
        return new t(e, i)
    },
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
} (),
function(t, e, i) {
    function s(i, s) {
        this.wrapper = "string" == typeof i ? e.querySelector(i) : i,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !a.hasPointer,
            disableTouch: a.hasPointer || !a.hasTouch,
            disableMouse: a.hasPointer || a.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown
        };
        for (var n in s) this.options[n] = s[n];
        this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)": "",
        this.options.useTransition = a.hasTransition && this.options.useTransition,
        this.options.useTransform = a.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical": this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY,
        this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular: this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }

    function n(t, i, s) {
        var n = e.createElement("div"),
        r = e.createElement("div");
        return s === !0 && (n.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        r.className = "iScrollIndicator",
        "h" == t ? (s === !0 && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), n.className = "iScrollHorizontalScrollbar") : (s === !0 && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), n.className = "iScrollVerticalScrollbar"),
        n.style.cssText += ";overflow:hidden",
        i || (n.style.pointerEvents = "none"),
        n.appendChild(r),
        n
    }

    function r(i, s) {
        this.wrapper = "string" == typeof s.el ? e.querySelector(s.el) : s.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = i,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var n in s) this.options[n] = s[n];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
            var r = a.style.transitionDuration;
            if (!r) return;
            this.wrapperStyle[r] = a.isBadAndroid ? "0.0001ms": "0ms";
            var l = this;
            a.isBadAndroid && o(function() {
                "0.0001ms" === l.wrapperStyle[r] && (l.wrapperStyle[r] = "0s")
            }),
            this.wrapperStyle.opacity = "0"
        }
    }
    var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
    function(e) {
        t.setTimeout(e, 1e3 / 60)
    },
    a = function() {
        function s(t) {
            return o === !1 ? !1 : "" === o ? t: o + t.charAt(0).toUpperCase() + t.substr(1)
        }
        var n = {},
        r = e.createElement("div").style,
        o = function() {
            for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, s = e.length; s > i; i++) if (t = e[i] + "ransform", t in r) return e[i].substr(0, e[i].length - 1);
            return ! 1
        } ();
        n.getTime = Date.now ||
        function() {
            return (new Date).getTime()
        },
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i]
        },
        n.addEvent = function(t, e, i, s) {
            t.addEventListener(e, i, !!s)
        },
        n.removeEvent = function(t, e, i, s) {
            t.removeEventListener(e, i, !!s)
        },
        n.prefixPointerEvent = function(e) {
            return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
        },
        n.momentum = function(t, e, s, n, r, o) {
            var a, l, h = t - e,
            c = i.abs(h) / s;
            return o = void 0 === o ? 6e-4: o,
            a = t + c * c / (2 * o) * (0 > h ? -1 : 1),
            l = c / o,
            n > a ? (a = r ? n - r / 2.5 * (c / 8) : n, h = i.abs(a - t), l = h / c) : a > 0 && (a = r ? r / 2.5 * (c / 8) : 0, h = i.abs(t) + a, l = h / c),
            {
                destination: i.round(a),
                duration: l
            }
        };
        var a = s("transform");
        return n.extend(n, {
            hasTransform: a !== !1,
            hasPerspective: s("perspective") in r,
            hasTouch: "ontouchstart" in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: s("transition") in r
        }),
        n.isBadAndroid = function() {
            var e = t.navigator.appVersion;
            if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var i = e.match(/Safari\/(\d+.\d)/);
                return i && "object" == typeof i && i.length >= 2 ? parseFloat(i[1]) < 535.19 : !0
            }
            return ! 1
        } (),
        n.extend(n.style = {},
        {
            transform: a,
            transitionTimingFunction: s("transitionTimingFunction"),
            transitionDuration: s("transitionDuration"),
            transitionDelay: s("transitionDelay"),
            transformOrigin: s("transformOrigin")
        }),
        n.hasClass = function(t, e) {
            var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
            return i.test(t.className)
        },
        n.addClass = function(t, e) {
            if (!n.hasClass(t, e)) {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        },
        n.removeClass = function(t, e) {
            if (n.hasClass(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                t.className = t.className.replace(i, " ")
            }
        },
        n.offset = function(t) {
            for (var e = -t.offsetLeft,
            i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft,
            i -= t.offsetTop;
            return {
                left: e,
                top: i
            }
        },
        n.preventDefaultException = function(t, e) {
            for (var i in e) if (e[i].test(t[i])) return ! 0;
            return ! 1
        },
        n.extend(n.eventType = {},
        {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        n.extend(n.ease = {},
        {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return i.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    var e = 4;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    var e = .22,
                    s = .4;
                    return 0 === t ? 0 : 1 == t ? 1 : s * i.pow(2, -10 * t) * i.sin((t - e / 4) * (2 * i.PI) / e) + 1
                }
            }
        }),
        n.tap = function(t, i) {
            var s = e.createEvent("Event");
            s.initEvent(i, !0, !0),
            s.pageX = t.pageX,
            s.pageY = t.pageY,
            t.target.dispatchEvent(s)
        },
        n.click = function(i) {
            var s, n = i.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (s = e.createEvent(t.MouseEvent ? "MouseEvents": "Event"), s.initEvent("click", !0, !0), s.view = i.view || t, s.detail = 1, s.screenX = n.screenX || 0, s.screenY = n.screenY || 0, s.clientX = n.clientX || 0, s.clientY = n.clientY || 0, s.ctrlKey = !!i.ctrlKey, s.altKey = !!i.altKey, s.shiftKey = !!i.shiftKey, s.metaKey = !!i.metaKey, s.button = 0, s.relatedTarget = null, s._constructed = !0, n.dispatchEvent(s))
        },
        n
    } ();
    s.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (1 != a.eventType[t.type]) {
                var e;
                if (e = t.which ? t.button: t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
            }
            if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) { ! this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var s, n = t.touches ? t.touches[0] : t;
                this.initiated = a.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = a.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, s = this.getComputedPosition(), this._translate(i.round(s.x), i.round(s.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = n.pageX,
                this.pointY = n.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, s, n, r, o = t.touches ? t.touches[0] : t,
                l = o.pageX - this.pointX,
                h = o.pageY - this.pointY,
                c = a.getTime();
                if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += l, this.distY += h, n = i.abs(this.distX), r = i.abs(this.distY), !(c - this.endTime > 300 && 10 > n && 10 > r)) {
                    if (this.directionLocked || this.options.freeScroll || (n > r + this.options.directionLockThreshold ? this.directionLocked = "h": r >= n + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        h = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l: 0,
                    h = this.hasVerticalScroll ? h: 0,
                    e = this.x + l,
                    s = this.y + h,
                    (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX),
                    (s > 0 || s < this.maxScrollY) && (s = this.options.bounce ? this.y + h / 3 : s > 0 ? 0 : this.maxScrollY),
                    this.directionX = l > 0 ? -1 : 0 > l ? 1 : 0,
                    this.directionY = h > 0 ? -1 : 0 > h ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(e, s),
                    c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var e, s, n = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
                r = i.round(this.x),
                o = i.round(this.y),
                l = i.abs(r - this.startX),
                h = i.abs(o - this.startY),
                c = 0,
                u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, o), !this.moved) return this.options.tap && a.tap(t, this.options.tap),
                    this.options.click && a.click(t),
                    void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > n && 100 > l && 100 > h) return void this._execEvent("flick");
                    if (this.options.momentum && 300 > n && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                        destination: r,
                        duration: 0
                    },
                    s = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                        destination: o,
                        duration: 0
                    },
                    r = e.destination, o = s.destination, c = i.max(e.duration, s.duration), this.isInTransition = 1), this.options.snap) {
                        var p = this._nearestSnap(r, o);
                        this.currentPage = p,
                        c = this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - p.x), 1e3), i.min(i.abs(o - p.y), 1e3)), 300),
                        r = p.x,
                        o = p.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        u = this.options.bounceEasing
                    }
                    return r != this.x || o != this.y ? ((r > 0 || r < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = a.ease.quadratic), void this.scrollTo(r, o, c, u)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                t.refresh()
            },
            this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x,
            i = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
            e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = a.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(e)
        },
        off: function(t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0,
                i = this._events[t].length;
                if (i) for (; i > e; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, s) {
            t = this.x + t,
            e = this.y + e,
            i = i || 0,
            this.scrollTo(t, e, i, s)
        },
        scrollTo: function(t, e, i, s) {
            s = s || a.ease.circular,
            this.isInTransition = this.options.useTransition && i > 0;
            var n = this.options.useTransition && s.style; ! i || n ? (n && (this._transitionTimingFunction(s.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, s.fn)
        },
        scrollToElement: function(t, e, s, n, r) {
            if (t = t.nodeType ? t: this.scroller.querySelector(t)) {
                var o = a.offset(t);
                o.left -= this.wrapperOffset.left,
                o.top -= this.wrapperOffset.top,
                s === !0 && (s = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                n === !0 && (n = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                o.left -= s || 0,
                o.top -= n || 0,
                o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX: o.left,
                o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY: o.top,
                e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - o.left), i.abs(this.y - o.top)) : e,
                this.scrollTo(o.left, o.top, e, r)
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e = a.style.transitionDuration;
                if (e) {
                    if (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        o(function() {
                            "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                        })
                    }
                    if (this.indicators) for (var s = this.indicators.length; s--;) this.indicators[s].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicators) for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ: (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators) for (var s = this.indicators.length; s--;) this.indicators[s].updatePosition()
        },
        _initEvents: function(e) {
            var i = e ? a.removeEvent: a.addEvent,
            s = this.options.bindToWrapper ? this.wrapper: t;
            i(t, "orientationchange", this),
            i(t, "resize", this),
            this.options.click && i(this.wrapper, "click", this, !0),
            this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(s, "mousemove", this), i(s, "mousecancel", this), i(s, "mouseup", this)),
            a.hasPointer && !this.options.disablePointer && (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this), i(s, a.prefixPointerEvent("pointermove"), this), i(s, a.prefixPointerEvent("pointercancel"), this), i(s, a.prefixPointerEvent("pointerup"), this)),
            a.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(s, "touchmove", this), i(s, "touchcancel", this), i(s, "touchend", this)),
            i(this.scroller, "transitionend", this),
            i(this.scroller, "webkitTransitionEnd", this),
            i(this.scroller, "oTransitionEnd", this),
            i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, i, s = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (s = s[a.style.transform].split(")")[0].split(", "), e = +(s[12] || s[4]), i = +(s[13] || s[5])) : (e = +s.left.replace(/[^-\d.]/g, ""), i = +s.top.replace(/[^-\d.]/g, "")),
            {
                x: e,
                y: i
            }
        },
        _initIndicators: function() {
            function t(t) {
                if (a.indicators) for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
            }
            var e, i = this.options.interactiveScrollbars,
            s = "string" != typeof this.options.scrollbars,
            o = [],
            a = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (e = {
                el: n("v", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: s,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                el: n("h", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: s,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(e.el), o.push(e))),
            this.options.indicators && (o = o.concat(this.options.indicators));
            for (var l = o.length; l--;) this.indicators.push(new r(this, o[l]));
            this.options.fadeScrollbars && (this.on("scrollEnd",
            function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollCancel",
            function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollStart",
            function() {
                t(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart",
            function() {
                t(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh",
            function() {
                t(function() {
                    this.refresh()
                })
            }),
            this.on("destroy",
            function() {
                t(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            a.addEvent(this.wrapper, "wheel", this),
            a.addEvent(this.wrapper, "mousewheel", this),
            a.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy",
            function() {
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                a.removeEvent(this.wrapper, "wheel", this),
                a.removeEvent(this.wrapper, "mousewheel", this),
                a.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault();
                var e, s, n, r, o = this;
                if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                    o.options.snap || o._execEvent("scrollEnd"),
                    o.wheelTimeout = void 0
                },
                400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, s = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, s = -t.deltaY);
                else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                s = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) e = s = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (! ("detail" in t)) return;
                    e = s = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection, s *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = s, s = 0), this.options.snap) return n = this.currentPage.pageX,
                r = this.currentPage.pageY,
                e > 0 ? n--:0 > e && n++,
                s > 0 ? r--:0 > s && r++,
                void this.goToPage(n, r);
                n = this.x + i.round(this.hasHorizontalScroll ? e: 0),
                r = this.y + i.round(this.hasVerticalScroll ? s: 0),
                this.directionX = e > 0 ? -1 : 0 > e ? 1 : 0,
                this.directionY = s > 0 ? -1 : 0 > s ? 1 : 0,
                n > 0 ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX),
                r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY),
                this.scrollTo(n, r, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh",
            function() {
                var t, e, s, n, r, o, a = 0,
                l = 0,
                h = 0,
                c = this.options.snapStepX || this.wrapperWidth,
                u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0) for (s = i.round(c / 2), n = i.round(u / 2); h > -this.scrollerWidth;) {
                        for (this.pages[a] = [], t = 0, r = 0; r > -this.scrollerHeight;) this.pages[a][t] = {
                            x: i.max(h, this.maxScrollX),
                            y: i.max(r, this.maxScrollY),
                            width: c,
                            height: u,
                            cx: h - s,
                            cy: r - n
                        },
                        r -= u,
                        t++;
                        h -= c,
                        a++
                    } else for (o = this.options.snap, t = o.length, e = -1; t > a; a++)(0 === a || o[a].offsetLeft <= o[a - 1].offsetLeft) && (l = 0, e++),
                    this.pages[l] || (this.pages[l] = []),
                    h = i.max( - o[a].offsetLeft, this.maxScrollX),
                    r = i.max( - o[a].offsetTop, this.maxScrollY),
                    s = h - i.round(o[a].offsetWidth / 2),
                    n = r - i.round(o[a].offsetHeight / 2),
                    this.pages[l][e] = {
                        x: h,
                        y: r,
                        width: o[a].offsetWidth,
                        height: o[a].offsetHeight,
                        cx: s,
                        cy: n
                    },
                    h > this.maxScrollX && l++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on("flick",
            function() {
                var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, e) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var s = 0,
            n = this.pages.length,
            r = 0;
            if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n > s; s++) if (t >= this.pages[s][0].cx) {
                t = this.pages[s][0].x;
                break
            }
            for (n = this.pages[s].length; n > r; r++) if (e >= this.pages[0][r].cy) {
                e = this.pages[0][r].y;
                break
            }
            return s == this.currentPage.pageX && (s += this.directionX, 0 > s ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x),
            r == this.currentPage.pageY && (r += this.directionY, 0 > r ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), e = this.pages[0][r].y),
            {
                x: t,
                y: e,
                pageX: s,
                pageY: r
            }
        },
        goToPage: function(t, e, s, n) {
            n = n || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0),
            e >= this.pages[t].length ? e = this.pages[t].length - 1 : 0 > e && (e = 0);
            var r = this.pages[t][e].x,
            o = this.pages[t][e].y;
            s = void 0 === s ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - this.x), 1e3), i.min(i.abs(o - this.y), 1e3)), 300) : s,
            this.currentPage = {
                x: r,
                y: o,
                pageX: t,
                pageY: e
            },
            this.scrollTo(r, o, s, n)
        },
        next: function(t, e) {
            var i = this.currentPage.pageX,
            s = this.currentPage.pageY;
            i++,
            i >= this.pages.length && this.hasVerticalScroll && (i = 0, s++),
            this.goToPage(i, s, t, e)
        },
        prev: function(t, e) {
            var i = this.currentPage.pageX,
            s = this.currentPage.pageY;
            i--,
            0 > i && this.hasVerticalScroll && (i = 0, s--),
            this.goToPage(i, s, t, e)
        },
        _initKeys: function(e) {
            var i, s = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings)"string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in s) this.options.keyBindings[i] = this.options.keyBindings[i] || s[i];
            a.addEvent(t, "keydown", this),
            this.on("destroy",
            function() {
                a.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var e, s = this.options.snap,
                n = s ? this.currentPage.pageX: this.x,
                r = s ? this.currentPage.pageY: this.y,
                o = a.getTime(),
                l = this.keyTime || 0,
                h = .25;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = 200 > o - l ? i.min(this.keyAcceleration + h, 50) : 0, t.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? n += s ? 1 : this.wrapperWidth: r += s ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= s ? 1 : this.wrapperWidth: r -= s ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    n = s ? this.pages.length - 1 : this.maxScrollX,
                    r = s ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    n = 0,
                    r = 0;
                    break;
                case this.options.keyBindings.left:
                    n += s ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    r += s ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    n -= s ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    r -= s ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                if (s) return void this.goToPage(n, r);
                n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0),
                r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0),
                this.scrollTo(n, r, 0),
                this.keyTime = o
            }
        },
        _animate: function(t, e, i, s) {
            function n() {
                var p, d, f, m = a.getTime();
                return m >= u ? (r.isAnimating = !1, r._translate(t, e), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (m = (m - c) / i, f = s(m), p = (t - l) * f + l, d = (e - h) * f + h, r._translate(p, d), void(r.isAnimating && o(n)))
            }
            var r = this,
            l = this.x,
            h = this.y,
            c = a.getTime(),
            u = c + i;
            this.isAnimating = !0,
            n()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    },
    r.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null),
            this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var i = e.touches ? e.touches[0] : e;
            e.preventDefault(),
            e.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = i.pageX,
            this.lastPointY = i.pageY,
            this.startTime = a.getTime(),
            this.options.disableTouch || a.addEvent(t, "touchmove", this),
            this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || a.addEvent(t, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var e, i, s, n, r = t.touches ? t.touches[0] : t;
            a.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            e = r.pageX - this.lastPointX,
            this.lastPointX = r.pageX,
            i = r.pageY - this.lastPointY,
            this.lastPointY = r.pageY,
            s = this.x + e,
            n = this.y + i,
            this._pos(s, n),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    n = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - s.x), 1e3), i.min(i.abs(this.scroller.y - s.y), 1e3)), 300); (this.scroller.x != s.x || this.scroller.y != s.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = s, this.scroller.scrollTo(s.x, s.y, n, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var e = a.style.transitionDuration;
            if (e && (this.indicatorStyle[e] = t + "ms", !t && a.isBadAndroid)) {
                this.indicatorStyle[e] = "0.0001ms";
                var i = this;
                o(function() {
                    "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                })
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[a.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block": "none": this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block": "none": this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block": "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px": this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px": this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
            e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX: "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY: "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")),
            this.x = t,
            this.y = e,
            this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ: (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            0 > e ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
            t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x,
            e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(t, e)
        },
        fade: function(t, e) {
            if (!e || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var i = t ? 250 : 500,
                s = t ? 0 : 300;
                t = t ? "1": "0",
                this.wrapperStyle[a.style.transitionDuration] = i + "ms",
                this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t,
                    this.visible = +t
                }.bind(this, t), s)
            }
        }
    },
    s.utils = a,
    "undefined" != typeof module && module.exports ? module.exports = s: "function" == typeof define && define.amd ? define(function() {
        return s
    }) : t.IScroll = s
} (window, document, Math),
function() {
    var t, e = [].indexOf ||
    function(t) {
        for (var e = 0,
        i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
        return - 1
    };
    t = function(t) {
        "use strict";
        var i;
        return i = function() {
            function i(e, i) {
                var s = this;
                this.el = e,
                this.$el = t(this.el),
                this.options = t.extend({},
                this.defaults, i),
                this.submitting = !1,
                this.$el.on({
                    "reform.validationError": function(t, e) {
                        return s.showErrors(e)
                    },
                    "reform.success": function(t, e) {
                        return s.options.successFormClass && s.$el.addClass(s.options.successFormClass),
                        s.options.successMessageClass ? s.findSuccessMessages().addClass(s.options.successMessageClass) : void 0
                    }
                }),
                this.options.ajax && this.initAjaxForm()
            }
            return i.prototype.defaults = {
                actionPrefix: !1,
                ajax: !0,
                dataType: "json",
                invalidInputClass: "invalid-field",
                invalidInputParentClass: "invalid-field-parent",
                activeErrorClass: "active-error",
                activeErrorParentClass: "active-error-parent",
                submittingFormClass: "submitting",
                invalidFormClass: "submitted-invalid",
                successFormClass: "submitted-success",
                successMessageClass: "active-success-message",
                errorResponseCodes: ["ValidationError", "validation_error", "validationError", "invalid", "validation"]
            },
            i.prototype.startedSubmitting = function() {
                return this.options.submittingClass && this.$el.addClass(this.options.submittingClass),
                this.submitting = !0,
                this.$el.trigger("reform.submitting")
            },
            i.prototype.stoppedSubmitting = function() {
                return this.submitting = !1,
                this.options.submittingClass ? this.$el.removeClass(this.options.submittingClass) : void 0
            },
            i.prototype.findSuccessMessages = function() {
                var e, i;
                return i = t([]),
                e = this.el,
                t("[data-success-message-for]").each(function() {
                    var s, n;
                    return n = t(this).data().successMessageFor,
                    s = t(n).get(0),
                    e === s ? i = i.add(t(this)) : void 0
                }),
                i
            },
            i.prototype.beforeSubmit = function(t) {
                return this.submitting ? !1 : (this.clearErrors(), this.$el.trigger("reform.beforeSubmit", {
                    formData: t
                }), this.startedSubmitting(), !0)
            },
            i.prototype.clearErrors = function() {
                return this.options.successFormClass && this.$el.removeClass(this.options.successFormClass),
                this.options.invalidFormClass && this.$el.removeClass(this.options.invalidFormClass),
                this.options.activeErrorClass && this.$el.find("[data-error-for]").removeClass(this.options.activeErrorClass),
                this.options.activeErrorParentClass && this.$el.find("[data-error-for]").parent().removeClass(this.options.activeErrorParentClass),
                this.options.invalidInputParentClass && this.$el.find("input." + this.options.invalidInputClass).parent().removeClass(this.options.invalidInputParentClass),
                this.$el.find("input." + this.options.invalidInputClass).removeClass(this.options.invalidInputClass)
            },
            i.prototype.showErrors = function(t) {
                var e, i, s, n, r, o, a;
                this.options.invalidFormClass && this.$el.addClass(this.options.invalidFormClass),
                this.options.activeErrorClass && this.$el.find("[data-error-for='*']").addClass(this.options.activeErrorClass),
                this.options.activeErrorParentClass && this.$el.find("[data-error-for='*']").parent().addClass(this.options.activeErrorParentClass),
                a = [];
                for (s in t) i = t[s],
                this.options.activeErrorClass && this.$el.find("[data-error-for='" + s + "']").addClass(this.options.activeErrorClass),
                this.options.activeErrorParentClass && this.$el.find("[data-error-for='" + s + "']").parent().addClass(this.options.activeErrorParentClass),
                n = s.replace(/\.([^\.]+)/g, "[$1]"),
                e = this.$el.find("[name='" + n + "']"),
                e.addClass(this.options.invalidInputClass),
                this.options.invalidInputParentClass && e.parent().addClass(this.options.invalidInputParentClass),
                a.push(function() {
                    var t;
                    t = [];
                    for (o in i) r = i[o],
                    this.options.activeErrorClass && (this.$el.find("[data-error-for='" + s + " " + o + "']").addClass(this.options.activeErrorClass), this.$el.find("[data-error-for='* " + o + "']").addClass(this.options.activeErrorClass)),
                    this.options.activeErrorParentClass ? (this.$el.find("[data-error-for='" + s + " " + o + "']").parent().addClass(this.options.activeErrorParentClass), t.push(this.$el.find("[data-error-for='* " + o + "']").parent().addClass(this.options.activeErrorParentClass))) : t.push(void 0);
                    return t
                }.call(this));
                return a
            },
            i.prototype.handleResponse = function(t, i) {
                var s, n;
                return this.stoppedSubmitting(),
                this.$el.trigger("reform.response", {
                    err: t,
                    res: i
                }),
                s = null != i ? i.code: void 0,
                (e.call(this.options.errorResponseCodes, s) >= 0 || (null != i ? i.errors: void 0)) && (t = i, i = null),
                t ? (n = null != t ? t.code: void 0, e.call(this.options.errorResponseCodes, n) >= 0 ? this.$el.trigger("reform.validationError", t.errors || []) : this.$el.trigger("reform.unknownError", t)) : this.$el.trigger("reform.success", i)
            },
            i.prototype.initAjaxForm = function() {
                var t = this;
                return this.$el.ajaxForm({
                    url: this.options.actionPrefix ? "" + this.options.actionPrefix + this.$el.attr("action") : this.$el.attr("action"),
                    dataType: this.options.dataType,
                    beforeSubmit: function(e, i, s) {
                        return t.beforeSubmit(e)
                    },
                    success: function(e, i, s, n) {
                        return t.handleResponse(null, e)
                    },
                    error: function(e) {
                        var i, s, n;
                        try {
                            return i = e.getResponseHeader("Content-Type"),
                            n = function() {
                                if (/^application\/json(;.*)?/.test(i)) return JSON.parse(e.responseText);
                                throw new Error("Unsupported response data format")
                            } (),
                            t.handleResponse(n)
                        } catch(r) {
                            return s = r,
                            t.$el.trigger("reform.unknownError", s)
                        }
                    }
                })
            },
            i.prototype.method = function() {
                return alert("I am a method")
            },
            i
        } (),
        t.fn.reform = function(e) {
            return this.each(function() {
                var s, n;
                return s = t(this),
                n = s.data("reform"),
                n || s.data("reform", n = new i(this, e)),
                "string" == typeof e ? n[e].call(s) : void 0
            })
        }
    },
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}.call(this),
function() {
    $(function() {
        var t;
        return t = function() {
            var t, e, i, s, n;
            return s = $(".drop-list__title"),
            e = $(".header"),
            i = $("html"),
            t = $(".gr.gr-dark"),
            n = 300,
            s.length ? (s.off("click"), s.on("click",
            function(e) {
                var i, r;
                return i = $(e.currentTarget),
                r = i.parent(),
                r.hasClass("active") ? r.removeClass("active").find(".drop-list__content").slideUp(n) : (r.addClass("active").find(".drop-list__content").slideDown(n), s.parent().not(r).removeClass("active").find(".drop-list__content").slideUp(n), setTimeout(function() {
                    return TweenMax.to(window, .3, {
                        scrollTo: {
                            y: i.offset().top - t.height(),
                            x: 0
                        }
                    })
                },
                n))
            })) : void 0
        },
        t(),
        $(document).on("pageLoad", t)
    })
}.call(this),
function() {
    $(function() {
        var t;
        return t = function() {
            var t, e;
            return e = $(".event__list-item"),
            e.length ? (t = $(e[0]), t.addClass("active"), e.hover(function() {
                return $(this) !== t ? (t.removeClass("active"), $(this).toggleClass("active")) : void 0
            }), e.on("mouseleave",
            function(e) {
                return t.addClass("active")
            })) : void 0
        },
        t(),
        $(document).on("pageInit", t)
    })
}.call(this),
function() {
    $(function() {
        var t, e, i, s, n;
        return t = $(document),
        n = ".page-transition",
        e = "#black-section",
        i = "#blue-section",
        s = "#red-section",
        t.on("mouseenter", e,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).addClass("active")
        }),
        t.on("mouseleave", e,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).removeClass("active")
        }),
        t.on("mouseenter", i,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).addClass("active")
        }),
        t.on("mouseleave", i,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).removeClass("active")
        }),
        t.on("mouseenter", s,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).addClass("active")
        }),
        t.on("mouseleave", s,
        function(e) {
            var i;
            return i = t.find(n),
            $(e.currentTarget).removeClass("active")
        })
    })
}.call(this),
function() {
    $(function() {
        return TweenMax.staggerFromTo(".menu__item", .4, {
            autoAlpha: 0,
            x: -5
        },
        {
            autoAlpha: 1,
            x: 0
        },
        .2),
        TweenMax.fromTo(".header__logo", 1.5, {
            autoAlpha: 0,
            x: -20
        },
        {
            autoAlpha: 1,
            x: 0
        })
    })
}.call(this),
function() {
    $(function() {
        var t, e, i, s, n, r, o;
        return r = $(window),
        e = $("body"),
        o = $(".menu__list-wrap"),
        s = $(".menu__list"),
        n = $(".main"),
        i = $(document),
        t = $(".menu__backdrop"),
        o.length ? (r.width() < 1e3 && (TweenMax.set(o, {
            x: "-100%"
        }), TweenMax.set(s, {
            x: "-120%"
        })), $(".menu__link").on("click touch",
        function() {
            return r.width() < 1e3 ? (TweenMax.to(o, .6, {
                x: -767,
                ease: Power1.easeOut
            }), TweenMax.to(s, .6, {
                x: -800,
                ease: Power1.easeOut
            }), $("body").removeClass("open-menu"), t.fadeOut()) : void 0
        }), i.on("click",
        function(i) {
            return "HTML" === i.target.tagName && e.hasClass("open-menu") ? (TweenMax.to(o, .5, {
                x: "-100%",
                ease: Power2.easeOut
            }), TweenMax.to(s, .5, {
                x: "-120%",
                ease: Power2.easeOut
            }), TweenMax.to(n, .5, {
                x: "0%",
                ease: Power2.easeOut
            }), e.removeClass("open-menu"), t.fadeOut()) : void 0
        }), $(".menu__link").on("click",
        function() {
            return r.width() < 1e3 ? (TweenMax.to(o, .5, {
                x: "-100%",
                ease: Power2.easeOut
            }), TweenMax.to(s, .5, {
                x: "-120%",
                ease: Power2.easeOut
            }), TweenMax.to(n, .5, {
                x: "0%",
                ease: Power2.easeOut
            }), $("body").removeClass("open-menu"), t.fadeOut()) : void 0
        }), $(".menu__icon").on("click",
        function(i) {
            return i.stopPropagation(),
            TweenMax.to(o, .5, {
                x: "0%",
                ease: Power2.easeOut
            }),
            TweenMax.to(s, .5, {
                x: "0%",
                ease: Power2.easeOut
            }),
            r.width() < 768 && TweenMax.to(n, .5, {
                x: "20%",
                ease: Power2.easeOut
            }),
            e.addClass("open-menu"),
            t.fadeIn()
        }), $(".menu__icon_close").on("click",
        function(i) {
            return TweenMax.to(o, .5, {
                x: "-100%",
                ease: Power2.easeOut
            }),
            TweenMax.to(s, .5, {
                x: "-120%",
                ease: Power2.easeOut
            }),
            TweenMax.to(n, .5, {
                x: "0%",
                ease: Power2.easeOut
            }),
            e.removeClass("open-menu"),
            t.fadeOut()
        }), r.on("resize",
        function() {
            return r.width() >= 1e3 ? (TweenMax.set(o, {
                x: "0%"
            }), TweenMax.set(s, {
                x: "0%"
            }), TweenMax.set(n, {
                x: "0%"
            }), e.removeClass("open-menu"), t.fadeOut()) : e.hasClass("open-menu") ? void 0 : (TweenMax.set(o, {
                x: "-100%"
            }), TweenMax.set(s, {
                x: "-120%"
            }), TweenMax.set(n, {
                x: "0%"
            }))
        })) : void 0
    })
}.call(this),
function() {
    $.modal = function(t) {
        var e, i, s, n, r, o, a, l, h;
        if (n = $('<div class="modal" tabindex="-1"></div>'), t.mods) {
            h = t.mods;
            for (o in h) l = h[o],
            n.mod(o, l)
        }
        return n.append(e = $('<div class="modal__bg"></div>')),
        n.append(s = $('<div class="modal__header wrap"></div>')),
        s.append(i = $('<div class="modal__close"><span>Вернуться</span></div>')),
        t.title && s.append($('<div class="modal__title"></div>').text(t.title)),
        t.icon && s.append($('<div class="modal__icon modal__icon_' + t.icon + '"></div>')),
        t.content && n.append($('<div class="modal__content wrap"></div>').append(t.content)),
        a = function() {
            return $("body").append(n),
            setTimeout(function() {
                return n.mod("state", "opening"),
                setTimeout(function() {
                    return n.mod("state", "opened")
                },
                500)
            },
            1)
        },
        r = function() {
            return n ? (n.mod("state", "closing"), $(document).trigger("modal.closing", [n]), setTimeout(function() {
                return n ? (n.remove(), $(document).trigger("modal.closed", [n]), n = null) : void 0
            },
            500)) : void 0
        },
        n.on("modal.close", r),
        i.click(r),
        a()
    }
}.call(this),
function() {
    $(function() {
        var t;
        return t = function() {
            var t, e, i, s;
            return e = $.block("projects"),
            e.length ? (t = e.element("item"), i = e.element("video"), s = e.element("video-source"), Modernizr.touchevents ? void 0 : (s.each(function(t, e) {
                var i;
                return i = $(e).data().src,
                $(e).attr("src", i)
            }), i.on("mouseover",
            function(e) {
                var i, s;
                return e.currentTarget.play(),
                i = $(e.currentTarget).closest(t),
                s = i.siblings(t),
                TweenMax.to(i, .3, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }),
                TweenMax.to(s, .5, {
                    autoAlpha: .7,
                    ease: Power2.easeOut
                })
            }), i.on("mouseout",
            function(e) {
                var i, s;
                return e.currentTarget.pause(),
                i = $(e.currentTarget).closest(t),
                s = i.siblings(t),
                TweenMax.to(s, .5, {
                    autoAlpha: 1,
                    ease: Power2.easeIn
                })
            }))) : void 0
        },
        t(),
        $(document).on("pageInit", t)
    })
}.call(this),
function() {}.call(this),
function() {
    $(function() {
        var t, e, i, s;
        return e = ".review__item",
        i = ".review__text",
        t = ".review__text_hidden",
        s = ".review__text_init",
        $(document).on("click", ".review__text_init",
        function(n) {
            var r, o, a;
            return a = $(n.currentTarget).closest(e).find(i).first().get(0),
            new IScroll(a, {
                interactiveScrollbars: !0,
                mouseWheel: !0,
                scrollbars: "custom"
            }),
            r = $(n.currentTarget).closest(e).find(t),
            o = $(n.currentTarget).closest(e).find(s),
            TweenMax.to(o, .25, {
                autoAlpha: 0,
                fontSize: 0
            }),
            TweenMax.fromTo(r, .25, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1
            })
        }),
        $(document).on("click", ".review__button",
        function(t) {
            var e;
            return e = $(t.currentTarget).closest(".review").find(".owl-carousel"),
            e.trigger("next.owl")
        })
    })
}.call(this),
function() {
    $(function() {
        var t;
        return t = function() {
            var t, e, i, s, n;
            return i = $(".subscribe__input"),
            e = $(".subscribe__form"),
            t = $(".subscribe__button"),
            s = $(".subscribe__success"),
            n = function() {
                return e.removeClass("subscription_error").addClass("subscription_success"),
                s.fadeIn(),
                setTimeout(function() {
                    return s.addClass("active")
                },
                230),
                setTimeout(function() {
                    return i.val("").fadeOut(),
                    t.fadeOut()
                },
                1e3),
                setTimeout(function() {
                    return s.addClass("done")
                },
                1500)
            },
            e.reform({
                dataType: "jsonp"
            }).on("reform.beforeSubmit",
            function(t, i) {
                return e.removeClass("subscription_error")
            }).on("reform.success",
            function(t, s) {
                var r;
                return r = s.msg,
                !i || "success" !== s.result && -1 === s.msg.indexOf(i) && -1 === s.msg.indexOf("Too many subscribe attempts for this email address.") ? e.removeClass("subscription_success").addClass("subscription_error") : n()
            }),
            i.on("focus",
            function() {
                return e.removeClass("subscription_error").removeClass("subscription_success")
            })
        },
        t(),
        $(document).on("pageInit", t)
    })
}.call(this),
function() {
    $(function() {
        var t;
        return t = function() {
            var t, e, i, s, n, r, o, a, l, h, c, u, p, d, f, m, g, _;
            c = document.getElementById("waves"),
            _ = function(t, e) {
                var i;
                for (i = 0; t > i;) e(i),
                i++
            },
            d = function(t) {
                return function(e) {
                    return e[t]()
                }
            },
            m = function(t, e) {
                return t + (e - t) * Math.random()
            },
            h = function(t, e) {
                var i, s, n, r, o, a;
                for (i = void 0, s = void 0, o = void 0, a = void 0, n = 1, r = t.length - 2; r > n;) i = t[n],
                s = t[n + 1],
                o = .5 * (i.x + s.x),
                a = .5 * (i.y + s.y),
                e.quadraticCurveTo(i.x, i.y, o, a),
                n++;
                i = t[n],
                s = t[n + 1],
                e.quadraticCurveTo(i.x, i.y, s.x, s.y)
            },
            p = function(t, e) {
                var i, s;
                return i = e.x - t.x,
                s = e.y - t.y,
                Math.sqrt(i * i + s * s)
            },
            u = function(t, e, i) {
                return e > t ? e: t > i ? i: t
            },
            $(c).length && (g = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            f = {
                color: "#cccccc",
                waveAmplitude: 10,
                waveRadius: 200,
                waveElasticity: .95,
                waveStrength: .011,
                waveMouse: 40,
                waveMax: 200,
                waveComeUp: function() {},
                waveRiseSpeed: 1,
                lineWidth: 1,
                waveLength: 100,
                distance: 50
            },
            s = function() {
                var t, e, i;
                return t = {
                    x: 0,
                    y: 0,
                    bind: function(t) {
                        t.addEventListener("mousemove", e),
                        t.addEventListener("touchmove", i)
                    },
                    unbind: function(t) {
                        t.removeEventListener("mousemove", e),
                        t.removeEventListener("touchmove", i)
                    }
                },
                e = function(e) {
                    t.x = e.pageX - window.scrollX,
                    t.y = e.pageY - window.scrollY
                },
                i = function(e) {
                    t.x = e.touches[0].pageX,
                    t.y = e.touches[0].pageY
                },
                t
            } (), r = {
                width: 1,
                height: 1,
                set: function(t) {
                    r.width = t.width,
                    r.height = t.height
                }
            },
            o = function(t) {
                var e, i, s;
                s = void 0,
                i = function() {
                    f.waveComeUp = this.start.bind(this)
                },
                e = function(e) {
                    var i;
                    s = [],
                    i = f.distance,
                    _(e / i,
                    function(e) {
                        s.push(new a(0, e * i + 10, t, m(.08, .12) * e))
                    })
                },
                this.render = function() {
                    t.strokeStyle = f.color,
                    t.lineWidth = f.lineWidth,
                    t.lineCap = "round",
                    t.beginPath(),
                    s.forEach(d("render")),
                    t.stroke()
                },
                this.setSize = function(t, i) {
                    e(i),
                    s.forEach(function(e) {
                        e.setSize(t, i)
                    })
                },
                this.start = function() {
                    s.forEach(d("start"))
                },
                i.call(this)
            },
            a = function(e, i, n, r) {
                var o, a, l, c, u, p, m, g, v, y;
                o = void 0,
                g = void 0,
                a = void 0,
                c = void 0,
                u = void 0,
                v = void 0,
                y = void 0,
                l = function() {
                    var s, n, a, l, h, u;
                    v = e,
                    y = i,
                    o = [],
                    c = {
                        x: 0,
                        y: 0
                    },
                    s = void 0,
                    n = 0,
                    l = -f.waveAmplitude,
                    u = f.waveAmplitude,
                    a = r,
                    h = .4,
                    _(window.innerWidth / f.waveLength,
                    function() {
                        s = new t(n, 0, l, u, a),
                        s.setOrigin(n + v, y),
                        o.push(s),
                        n += 90,
                        a += h,
                        a > 1 && _(Math.floor(a),
                        function() {
                            a--,
                            l *= -1,
                            u *= -1
                        })
                    })
                },
                p = function() {
                    var t;
                    t = Math.min(y, s.y + i),
                    y += (t - y) / f.waveRiseSpeed,
                    m(),
                    o.forEach(function(t) {
                        t.update(c, y)
                    })
                },
                m = function() {
                    return u ? (c.x = s.x - u.x, c.y = s.y - u.y, void(u = {
                        x: s.x,
                        y: s.y
                    })) : void(u = {
                        x: s.x,
                        y: s.y
                    })
                },
                this.render = function() {
                    p(),
                    n.save(),
                    n.translate(v, y),
                    n.moveTo(o[0].x, o[0].y),
                    h(o, n),
                    n.restore()
                },
                this.setSize = function(t, e) {
                    var i;
                    g = t,
                    a = e,
                    i = t / (o.length - 1),
                    o.forEach(function(t, e) {
                        t.x = i * e,
                        t.setOrigin(t.x, y)
                    })
                },
                this.onAmpChange = function() {
                    o.forEach(d("onAmpChange"))
                },
                this.start = function() {
                    y = a + 300 + .4 * i
                },
                l.call(this)
            },
            t = function(t, e, r, o, a) {
                var l, h, c, u, d;
                d = void 0,
                c = void 0,
                u = void 0,
                h = function() {
                    d = new n,
                    c = new i(r, o, a),
                    u = {},
                    this.x = t,
                    this.y = e
                },
                l = function() {
                    var t, e;
                    return t = p(s, u),
                    e = f.waveRadius,
                    e > t ? 1 - t / e: 0
                },
                this.update = function(t, e) {
                    var i, s;
                    u.y = e,
                    i = l(),
                    s = {
                        x: t.x * i * f.waveMouse,
                        y: t.y * i * f.waveMouse
                    },
                    i > 0 && d.shoot(s),
                    d.update(),
                    c.update(),
                    this.y = c.get() + d.y
                },
                this.onAmpChange = function() {
                    c.onAmpChange()
                },
                this.setOrigin = function(t, e) {
                    u.x = t,
                    u.y = e
                },
                h.call(this)
            },
            i = function(t, e, i) {
                var s, n, r, o, a, l, h;
                s = .02,
                n = void 0,
                h = void 0,
                o = void 0,
                l = void 0,
                a = void 0,
                r = function() {
                    this.onAmpChange()
                },
                this.setRange = function(t, e) {
                    l = t,
                    a = e
                },
                this.update = function() {
                    i += s,
                    i > 1 && (i = 0, t = e, e = n > e ? m(h, a) : m(l, o))
                },
                this.get = function() {
                    var s;
                    return s = (Math.cos((1 + i) * Math.PI) + 1) / 2,
                    t + s * (e - t)
                },
                this.onAmpChange = function() {
                    l = -f.waveAmplitude,
                    a = f.waveAmplitude,
                    n = l + (a - l) / 2,
                    h = l + .75 * (a - l),
                    o = l + .25 * (a - l)
                },
                r.call(this)
            },
            n = function() {
                var t, e, i, s, n, r, o, a, l;
                i = 0,
                s = 0,
                a = 0,
                l = 0,
                n = 0,
                r = 0,
                o = void 0,
                e = function() {
                    this.x = 0,
                    this.y = 0
                },
                t = function() {
                    n = 0,
                    r = 0
                },
                this.update = function() {
                    a = n - this.x,
                    l = r - this.y,
                    i = i * f.waveElasticity + a * f.waveStrength,
                    s = s * f.waveElasticity + l * f.waveStrength,
                    this.x += i,
                    this.y += s
                },
                this.shoot = function(e) {
                    n = u(e.x, -f.waveMax, f.waveMax),
                    r = u(e.y, -f.waveMax, f.waveMax),
                    clearTimeout(o),
                    o = setTimeout(t, 100)
                },
                e.call(this)
            },
            e = function(t, e) {
                var i, n, a, l, h, c;
                n = void 0,
                c = void 0,
                a = void 0,
                i = void 0,
                l = function() {
                    n = t.getContext("2d"),
                    window.canvasCTX = n,
                    setTimeout(function() {
                        s.bind(document)
                    },
                    1e3),
                    r.set(e),
                    i = new o(n),
                    this.setSize(e.width, e.height),
                    i.start(),
                    requestAnimationFrame(h)
                },
                h = function() {
                    n.setTransform(1, 0, 0, 1, 0, n.clearRect(0, 0, c, a)),
                    n.save(),
                    i.render(),
                    n.restore(),
                    requestAnimationFrame(h)
                },
                this.setSize = function(e, s) {
                    t.width = r.width = c = e,
                    t.height = r.height = a = s,
                    i.setSize(e, s)
                },
                l.call(this)
            },
            l = new e(c, g), window.addEventListener("resize",
            function() {
                l.setSize(window.innerWidth, window.innerHeight)
            },
            !1))
        },
        t(),
        $(document).on("pageInit", t)
    })
}.call(this),
function() {
    var __indexOf = [].indexOf ||
    function(t) {
        for (var e = 0,
        i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
        return - 1
    };
    __indexOf.call(window, "ontouchstart") >= 0 || window.DocumentTouch && document instanceof DocumentTouch || $("a[href^='tel:']").each(function() {
        return $(this).attr("href", $(this).attr("href").replace("tel:", "callto:"))
    }),
    $(function() {
        var $body, $menuLinks, $window, PageTransition, clearMenuLinks, initOwl, isAnyMenuLinkActive, matchPageToMenuLink, pageUrl, showCFemail;
        return FastClick.attach(document.body),
        $body = $("body"),
        $window = $(window),
        $menuLinks = $(".menu__link"),
        pageUrl = window.location.pathname,
        isAnyMenuLinkActive = function() {
            var t;
            return t = $menuLinks.filter(function() {
                return this.classList.contains("active")
            }),
            !!t.length
        },
        matchPageToMenuLink = function(t) {
            var e;
            return null == t && (t = ""),
            e = t ? t: pageUrl,
            "/" !== e ? $menuLinks.each(function() {
                return $(this).attr("href") === e ? $(this).addClass("active") : void 0
            }) : void 0
        },
        clearMenuLinks = function() {
            return $menuLinks.each(function() {
                return $(this).hasClass("active") ? $(this).removeClass("active") : void 0
            })
        },
        isAnyMenuLinkActive() || matchPageToMenuLink(),
        Barba.Pjax.start(),
        Barba.Dispatcher.on("linkClicked",
        function(t) {
            return $(this).hasClass("active") ? void 0 : (clearMenuLinks(), matchPageToMenuLink(t.pathname))
        }),
        PageTransition = Barba.BaseTransition.extend({
            start: function() {
                return $body.addClass("isAnimating"),
                this.newContainerLoading.then(this.display.bind(this))
            },
            display: function() {
                var t, e, i, s, n, r, o, a;
                return a = this,
                i = $(this.oldContainer),
                t = $(this.newContainer),
                e = t.find(".page-transition>div"),
                $body.removeClass("page_white"),
                s = t.find(">.page-transition").css("backgroundColor"),
                $("html").css("backgroundColor", s),
                $body.toggleClass("page_white", ["#", "#ffffff", "rgb(255, 255, 255)", "white"].indexOf(s) > 0),
                o = window.innerWidth ? window.innerWidth: $window.width(),
                r = window.innerHeight ? window.innerHeight: $window.height(),
                n = new TimelineMax({
                    onComplete: function() {
                        return $window.scrollTop(0),
                        $body.removeClass("isAnimating"),
                        t.removeAttr("style"),
                        a.done(),
                        $(document).trigger("pageLoad")
                    }
                }),
                n.set(t, {
                    position: "fixed",
                    overflow: "hidden",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 50,
                    autoAlpha: 0,
                    scale: 1
                }),
                n.set(e, {
                    autoAlpha: 0
                }),
                (t.find(">.page-transition-slide").length || i.find(">.page-transition-slide").length) && n.set(t, {
                    y: "-100%",
                    autoAlpha: 1
                }),
                n.to(t, .5, {
                    autoAlpha: 1,
                    y: "0%",
                    ease: Power2.easeInOut
                }),
                n.to(e, .5, {
                    autoAlpha: 1
                }),
                $(document).trigger("destroyAnimation", i),
                $(document).trigger("initAnimation", t),
                $(document).trigger("pageInit", t)
            }
        }),
        Barba.Pjax.getTransition = function() {
            return PageTransition
        },
        showCFemail = function() {
            return $("script[data-cfhash]").each(function() {
                return eval($(this).html())
            }),
            eval("/* <![CDATA[ */(function(d,s,a,i,j,r,l,m,t){try{l=d.getElementsByTagName('a');t=d.createElement('textarea');for(i=0;l.length-i;i++){try{a=l[i].href;s=a.indexOf('/cdn-cgi/l/email-protection');m=a.length;if(a&&s>-1&&m>28){j=28+s;s='';if(j<m){r='0x'+a.substr(j,2)|0;for(j+=2;j<m&&a.charAt(j)!='X';j+=2)s+='%'+('0'+('0x'+a.substr(j,2)^r).toString(16)).slice(-2);j++;s=decodeURIComponent(s)+a.substr(j,m-j)}t.innerHTML=s.replace(/</g,'&lt;').replace(/>/g,'&gt;');l[i].href='mailto:'+t.value}}catch(e){}}}catch(e){}})(document);/* ]]> */")
        },
        initOwl = function() {
            var t;
            return t = $(".owl-carousel"),
            t.length ? t.owlCarousel({
                autoHeight: !0,
                dots: !1,
                drag: !0,
                items: 1,
                loop: !0
            }) : void 0
        },
        initOwl(),
        $(document).on("pageInit",
        function() {
            return clearMenuLinks(),
            matchPageToMenuLink(window.location.pathname),
            showCFemail(),
            initOwl()
        })
    })
}.call(this),
function() {
    $(function() {
        var t, e, i, s;
        return e = $(window),
        t = $("body"),
        TweenMax.set("body", {
            autoAlpha: 1
        }),
        s = function(t, i) {
            var s, n, r, o, a, l, h, c, u, p, d, f, m;
            return null == i && (i = ".barba-container"),
            s = $(i),
            o = new ScrollMagic.Controller,
            s.data("controller", o),
            p = function(t, e, i, s, n) {
                return null == i && (i = 0),
                null == s && (s = 0),
                null == n && (n = .75),
                $(t).length ? new ScrollMagic.Scene({
                    offset: s,
                    duration: i,
                    triggerElement: t,
                    triggerHook: n
                }).setTween(e).addTo(o) : void 0
            },
            f = s.find(".promo__title, .article__title, .clients-intro__title, .contacts__title"),
            p(f, TweenMax.fromTo(f, 1.5, {
                autoAlpha: 0,
                y: 20
            },
            {
                autoAlpha: 1,
                y: 0,
                ease: Power2.easeOut
            })),
            d = s.find(".promo__subtitle, .clients-intro__subtitle"),
            p(d, TweenMax.fromTo(d, 1.2, {
                autoAlpha: 0,
                y: 30
            },
            {
                autoAlpha: 1,
                y: 0,
                ease: Power2.easeOut
            })),
            n = s.find(".promo__text, .article__text, .contacts__desc"),
            n.each(function(t, e) {
                return p(e, TweenMax.fromTo(e, 1.5, {
                    autoAlpha: 0,
                    y: 30
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: Power2.easeOut
                }), 0, 0, .9)
            }),
            p(s.find(".social"), TweenMax.staggerFromTo(s.find(".social__item"), .5, {
                autoAlpha: 0,
                x: -20
            },
            {
                autoAlpha: 1,
                x: 0,
                ease: Power2.easeOut
            },
            .15), 0, 0, 1),
            h = s.find(".drop-list, .contacts__list, .clients-intro__list, .event"),
            p(h, TweenMax.fromTo(h, 1.5, {
                autoAlpha: 0,
                y: 45
            },
            {
                autoAlpha: 1,
                y: 0,
                ease: Power2.easeOut
            })),
            r = s.find(".competencies"),
            p(r, TweenMax.fromTo(r, 1.5, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: Power2.easeOut
            })),
            c = s.find(".projects"),
            p(c, TweenMax.fromTo(c, 1.5, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: Power2.easeOut
            })),
            a = s.find(".event-list__catalog"),
            p(a, TweenMax.staggerFromTo(".event-list__item", 1, {
                autoAlpha: 0,
                y: -20
            },
            {
                autoAlpha: 1,
                y: 0,
                ease: Power2.easeOut
            },
            .15), 0, 0, 1),
            u = s.find(".review"),
            p(u, TweenMax.fromTo(u, 1.5, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: Power2.easeOut
            })),
            p(s.find(".footer"), TweenMax.staggerFromTo(s.find(".footer__tile"), 1.5, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: Power2.easeOut
            },
            .35), 0, 0, 1),
            l = function() {
                var t, i, n, r, a, l, h, c, u, p, d;
                return t = s.find("#projects"),
                t.length ? (r = s.find("#slideContainer"), i = s.find(".projects__title"), n = s.find(".projects__item"), l = n.first().outerWidth(!0), p = n.length, d = new TimelineMax({
                    onStart: function() {
                        return TweenMax.to(i, .3, {
                            autoAlpha: 0,
                            ease: Power0.easeNone
                        })
                    },
                    onReverseComplete: function() {
                        return TweenMax.to(i, .3, {
                            autoAlpha: 1,
                            ease: Power0.easeNone
                        })
                    }
                }), u = 0, c = function() {
                    var t, i;
                    return e.on("resize",
                    function() {
                        return u = 0
                    }),
                    u || (t = $(".header > .container").width(), i = t > l ? t - l: 0, u = l * (p - 1) - i + 30, r.width(u)),
                    u
                },
                d.fromTo(r, 3, {
                    x: "0"
                },
                {
                    x: "-100%",
                    ease: Power0.easeNone
                }), h = new ScrollMagic.Scene({
                    triggerElement: t,
                    triggerHook: .5,
                    duration: c
                }).setPin(t).setTween(d).addTo(o), a = t.height() / 2, h.offset(a), e.on("resize",
                function() {
                    return a = t.height() / 2,
                    h.offset(a)
                })) : void 0
            },
            Modernizr.touchevents ? (m = s.find(".projects__title, .competencies__list"), p(s.find(".projects"), TweenMax.fromTo(m, 1, {
                autoAlpha: 1
            },
            {
                autoAlpha: 0,
                ease: Power2.easeOut
            }), 0, $(".projects").height() / 2, .5), $(".projects__container").addClass("owl-carousel").owlCarousel({
                items: 1,
                dots: !0,
                nav: !1
            })) : l()
        },
        i = function(t, e) {
            var i;
            return i = $(e).data().controller,
            i ? i.destroy(!0) : void 0
        },
        s(),
        $(document).on("initAnimation", s)
    })
}.call(this);