import {
  k as q,
  g as gn,
  s as ie,
  j as z,
  x as le,
  y as Je,
  v as De,
  e as me,
  G as tu,
  f as Be,
  H as Oe,
  I as X,
  J as uu,
  K as er,
  L as iu,
} from "./react-ac02b43c.js";
import { _ as au } from "./style-053d0d8d.js";
import { C as ou, g as su } from "./lodash-90a1c433.js";
function lu(e, n) {
  for (var r = 0; r < n.length; r++) {
    const u = n[r];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const t in u)
        if (t !== "default" && !(t in e)) {
          const i = Object.getOwnPropertyDescriptor(u, t);
          i &&
            Object.defineProperty(
              e,
              t,
              i.get ? i : { enumerable: !0, get: () => u[t] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) u(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && u(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const i = {};
    return (
      t.integrity && (i.integrity = t.integrity),
      t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function u(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = r(t);
    fetch(t.href, i);
  }
})();
function nr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function rr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? nr(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : nr(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
var cu = {
    type: "logger",
    log: function (n) {
      this.output("log", n);
    },
    warn: function (n) {
      this.output("warn", n);
    },
    error: function (n) {
      this.output("error", n);
    },
    output: function (n, r) {
      console && console[n] && console[n].apply(console, r);
    },
  },
  fu = (function () {
    function e(n) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      z(this, e), this.init(n, r);
    }
    return (
      q(e, [
        {
          key: "init",
          value: function (r) {
            var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            (this.prefix = u.prefix || "i18next:"),
              (this.logger = r || cu),
              (this.options = u),
              (this.debug = u.debug);
          },
        },
        {
          key: "setDebug",
          value: function (r) {
            this.debug = r;
          },
        },
        {
          key: "log",
          value: function () {
            for (var r = arguments.length, u = new Array(r), t = 0; t < r; t++)
              u[t] = arguments[t];
            return this.forward(u, "log", "", !0);
          },
        },
        {
          key: "warn",
          value: function () {
            for (var r = arguments.length, u = new Array(r), t = 0; t < r; t++)
              u[t] = arguments[t];
            return this.forward(u, "warn", "", !0);
          },
        },
        {
          key: "error",
          value: function () {
            for (var r = arguments.length, u = new Array(r), t = 0; t < r; t++)
              u[t] = arguments[t];
            return this.forward(u, "error", "");
          },
        },
        {
          key: "deprecate",
          value: function () {
            for (var r = arguments.length, u = new Array(r), t = 0; t < r; t++)
              u[t] = arguments[t];
            return this.forward(u, "warn", "WARNING DEPRECATED: ", !0);
          },
        },
        {
          key: "forward",
          value: function (r, u, t, i) {
            return i && !this.debug
              ? null
              : (typeof r[0] == "string" &&
                  (r[0] = "".concat(t).concat(this.prefix, " ").concat(r[0])),
                this.logger[u](r));
          },
        },
        {
          key: "create",
          value: function (r) {
            return new e(
              this.logger,
              rr(
                rr({}, { prefix: "".concat(this.prefix, ":").concat(r, ":") }),
                this.options
              )
            );
          },
        },
        {
          key: "clone",
          value: function (r) {
            return (
              (r = r || this.options),
              (r.prefix = r.prefix || this.prefix),
              new e(this.logger, r)
            );
          },
        },
      ]),
      e
    );
  })(),
  Z = new fu(),
  ce = (function () {
    function e() {
      z(this, e), (this.observers = {});
    }
    return (
      q(e, [
        {
          key: "on",
          value: function (r, u) {
            var t = this;
            return (
              r.split(" ").forEach(function (i) {
                (t.observers[i] = t.observers[i] || []), t.observers[i].push(u);
              }),
              this
            );
          },
        },
        {
          key: "off",
          value: function (r, u) {
            if (this.observers[r]) {
              if (!u) {
                delete this.observers[r];
                return;
              }
              this.observers[r] = this.observers[r].filter(function (t) {
                return t !== u;
              });
            }
          },
        },
        {
          key: "emit",
          value: function (r) {
            for (
              var u = arguments.length, t = new Array(u > 1 ? u - 1 : 0), i = 1;
              i < u;
              i++
            )
              t[i - 1] = arguments[i];
            if (this.observers[r]) {
              var a = [].concat(this.observers[r]);
              a.forEach(function (s) {
                s.apply(void 0, t);
              });
            }
            if (this.observers["*"]) {
              var o = [].concat(this.observers["*"]);
              o.forEach(function (s) {
                s.apply(s, [r].concat(t));
              });
            }
          },
        },
      ]),
      e
    );
  })();
function Re() {
  var e,
    n,
    r = new Promise(function (u, t) {
      (e = u), (n = t);
    });
  return (r.resolve = e), (r.reject = n), r;
}
function tr(e) {
  return e == null ? "" : "" + e;
}
function pu(e, n, r) {
  e.forEach(function (u) {
    n[u] && (r[u] = n[u]);
  });
}
function jn(e, n, r) {
  function u(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function t() {
    return !e || typeof e == "string";
  }
  for (
    var i = typeof n != "string" ? [].concat(n) : n.split(".");
    i.length > 1;

  ) {
    if (t()) return {};
    var a = u(i.shift());
    !e[a] && r && (e[a] = new r()),
      Object.prototype.hasOwnProperty.call(e, a) ? (e = e[a]) : (e = {});
  }
  return t() ? {} : { obj: e, k: u(i.shift()) };
}
function ur(e, n, r) {
  var u = jn(e, n, Object),
    t = u.obj,
    i = u.k;
  t[i] = r;
}
function du(e, n, r, u) {
  var t = jn(e, n, Object),
    i = t.obj,
    a = t.k;
  (i[a] = i[a] || []), u && (i[a] = i[a].concat(r)), u || i[a].push(r);
}
function rn(e, n) {
  var r = jn(e, n),
    u = r.obj,
    t = r.k;
  if (u) return u[t];
}
function ir(e, n, r) {
  var u = rn(e, r);
  return u !== void 0 ? u : rn(n, r);
}
function Kr(e, n, r) {
  for (var u in n)
    u !== "__proto__" &&
      u !== "constructor" &&
      (u in e
        ? typeof e[u] == "string" ||
          e[u] instanceof String ||
          typeof n[u] == "string" ||
          n[u] instanceof String
          ? r && (e[u] = n[u])
          : Kr(e[u], n[u], r)
        : (e[u] = n[u]));
  return e;
}
function _e(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var gu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function hu(e) {
  return typeof e == "string"
    ? e.replace(/[&<>"'\/]/g, function (n) {
        return gu[n];
      })
    : e;
}
var hn =
    typeof window < "u" &&
    window.navigator &&
    typeof window.navigator.userAgentData > "u" &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf("MSIE") > -1,
  Du = [" ", ",", "?", "!", ";"];
function mu(e, n, r) {
  (n = n || ""), (r = r || "");
  var u = Du.filter(function (o) {
    return n.indexOf(o) < 0 && r.indexOf(o) < 0;
  });
  if (u.length === 0) return !0;
  var t = new RegExp(
      "(".concat(
        u
          .map(function (o) {
            return o === "?" ? "\\?" : o;
          })
          .join("|"),
        ")"
      )
    ),
    i = !t.test(e);
  if (!i) {
    var a = e.indexOf(r);
    a > 0 && !t.test(e.substring(0, a)) && (i = !0);
  }
  return i;
}
function ar(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function Ze(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? ar(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ar(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
function vu(e) {
  var n = Au();
  return function () {
    var u = le(e),
      t;
    if (n) {
      var i = le(this).constructor;
      t = Reflect.construct(u, arguments, i);
    } else t = u.apply(this, arguments);
    return Je(this, t);
  };
}
function Au() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Yr(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (e) {
    if (e[n]) return e[n];
    for (var u = n.split(r), t = e, i = 0; i < u.length; ++i) {
      if (!t || (typeof t[u[i]] == "string" && i + 1 < u.length)) return;
      if (t[u[i]] === void 0) {
        for (
          var a = 2, o = u.slice(i, i + a).join(r), s = t[o];
          s === void 0 && u.length > i + a;

        )
          a++, (o = u.slice(i, i + a).join(r)), (s = t[o]);
        if (s === void 0) return;
        if (s === null) return null;
        if (n.endsWith(o)) {
          if (typeof s == "string") return s;
          if (o && typeof s[o] == "string") return s[o];
        }
        var c = u.slice(i + a).join(r);
        return c ? Yr(s, c, r) : void 0;
      }
      t = t[u[i]];
    }
    return t;
  }
}
var Cu = (function (e) {
    gn(r, e);
    var n = vu(r);
    function r(u) {
      var t,
        i =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ["translation"], defaultNS: "translation" };
      return (
        z(this, r),
        (t = n.call(this)),
        hn && ce.call(De(t)),
        (t.data = u || {}),
        (t.options = i),
        t.options.keySeparator === void 0 && (t.options.keySeparator = "."),
        t.options.ignoreJSONStructure === void 0 &&
          (t.options.ignoreJSONStructure = !0),
        t
      );
    }
    return (
      q(r, [
        {
          key: "addNamespaces",
          value: function (t) {
            this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
          },
        },
        {
          key: "removeNamespaces",
          value: function (t) {
            var i = this.options.ns.indexOf(t);
            i > -1 && this.options.ns.splice(i, 1);
          },
        },
        {
          key: "getResource",
          value: function (t, i, a) {
            var o =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {},
              s =
                o.keySeparator !== void 0
                  ? o.keySeparator
                  : this.options.keySeparator,
              c =
                o.ignoreJSONStructure !== void 0
                  ? o.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              f = [t, i];
            a && typeof a != "string" && (f = f.concat(a)),
              a && typeof a == "string" && (f = f.concat(s ? a.split(s) : a)),
              t.indexOf(".") > -1 && (f = t.split("."));
            var l = rn(this.data, f);
            return l || !c || typeof a != "string"
              ? l
              : Yr(this.data && this.data[t] && this.data[t][i], a, s);
          },
        },
        {
          key: "addResource",
          value: function (t, i, a, o) {
            var s =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : { silent: !1 },
              c = this.options.keySeparator;
            c === void 0 && (c = ".");
            var f = [t, i];
            a && (f = f.concat(c ? a.split(c) : a)),
              t.indexOf(".") > -1 && ((f = t.split(".")), (o = i), (i = f[1])),
              this.addNamespaces(i),
              ur(this.data, f, o),
              s.silent || this.emit("added", t, i, a, o);
          },
        },
        {
          key: "addResources",
          value: function (t, i, a) {
            var o =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : { silent: !1 };
            for (var s in a)
              (typeof a[s] == "string" ||
                Object.prototype.toString.apply(a[s]) === "[object Array]") &&
                this.addResource(t, i, s, a[s], { silent: !0 });
            o.silent || this.emit("added", t, i, a);
          },
        },
        {
          key: "addResourceBundle",
          value: function (t, i, a, o, s) {
            var c =
                arguments.length > 5 && arguments[5] !== void 0
                  ? arguments[5]
                  : { silent: !1 },
              f = [t, i];
            t.indexOf(".") > -1 &&
              ((f = t.split(".")), (o = a), (a = i), (i = f[1])),
              this.addNamespaces(i);
            var l = rn(this.data, f) || {};
            o ? Kr(l, a, s) : (l = Ze(Ze({}, l), a)),
              ur(this.data, f, l),
              c.silent || this.emit("added", t, i, a);
          },
        },
        {
          key: "removeResourceBundle",
          value: function (t, i) {
            this.hasResourceBundle(t, i) && delete this.data[t][i],
              this.removeNamespaces(i),
              this.emit("removed", t, i);
          },
        },
        {
          key: "hasResourceBundle",
          value: function (t, i) {
            return this.getResource(t, i) !== void 0;
          },
        },
        {
          key: "getResourceBundle",
          value: function (t, i) {
            return (
              i || (i = this.options.defaultNS),
              this.options.compatibilityAPI === "v1"
                ? Ze(Ze({}, {}), this.getResource(t, i))
                : this.getResource(t, i)
            );
          },
        },
        {
          key: "getDataByLanguage",
          value: function (t) {
            return this.data[t];
          },
        },
        {
          key: "hasLanguageSomeTranslations",
          value: function (t) {
            var i = this.getDataByLanguage(t),
              a = (i && Object.keys(i)) || [];
            return !!a.find(function (o) {
              return i[o] && Object.keys(i[o]).length > 0;
            });
          },
        },
        {
          key: "toJSON",
          value: function () {
            return this.data;
          },
        },
      ]),
      r
    );
  })(ce),
  qr = {
    processors: {},
    addPostProcessor: function (n) {
      this.processors[n.name] = n;
    },
    handle: function (n, r, u, t, i) {
      var a = this;
      return (
        n.forEach(function (o) {
          a.processors[o] && (r = a.processors[o].process(r, u, t, i));
        }),
        r
      );
    },
  };
function or(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function M(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? or(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : or(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
function _u(e) {
  var n = Fu();
  return function () {
    var u = le(e),
      t;
    if (n) {
      var i = le(this).constructor;
      t = Reflect.construct(u, arguments, i);
    } else t = u.apply(this, arguments);
    return Je(this, t);
  };
}
function Fu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var sr = {},
  lr = (function (e) {
    gn(r, e);
    var n = _u(r);
    function r(u) {
      var t,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        z(this, r),
        (t = n.call(this)),
        hn && ce.call(De(t)),
        pu(
          [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ],
          u,
          De(t)
        ),
        (t.options = i),
        t.options.keySeparator === void 0 && (t.options.keySeparator = "."),
        (t.logger = Z.create("translator")),
        t
      );
    }
    return (
      q(
        r,
        [
          {
            key: "changeLanguage",
            value: function (t) {
              t && (this.language = t);
            },
          },
          {
            key: "exists",
            value: function (t) {
              var i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (t == null) return !1;
              var a = this.resolve(t, i);
              return a && a.res !== void 0;
            },
          },
          {
            key: "extractFromKey",
            value: function (t, i) {
              var a =
                i.nsSeparator !== void 0
                  ? i.nsSeparator
                  : this.options.nsSeparator;
              a === void 0 && (a = ":");
              var o =
                  i.keySeparator !== void 0
                    ? i.keySeparator
                    : this.options.keySeparator,
                s = i.ns || this.options.defaultNS || [],
                c = a && t.indexOf(a) > -1,
                f =
                  !this.options.userDefinedKeySeparator &&
                  !i.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !i.nsSeparator &&
                  !mu(t, a, o);
              if (c && !f) {
                var l = t.match(this.interpolator.nestingRegexp);
                if (l && l.length > 0) return { key: t, namespaces: s };
                var p = t.split(a);
                (a !== o || (a === o && this.options.ns.indexOf(p[0]) > -1)) &&
                  (s = p.shift()),
                  (t = p.join(o));
              }
              return (
                typeof s == "string" && (s = [s]), { key: t, namespaces: s }
              );
            },
          },
          {
            key: "translate",
            value: function (t, i, a) {
              var o = this;
              if (
                (me(i) !== "object" &&
                  this.options.overloadTranslationOptionHandler &&
                  (i =
                    this.options.overloadTranslationOptionHandler(arguments)),
                i || (i = {}),
                t == null)
              )
                return "";
              Array.isArray(t) || (t = [String(t)]);
              var s =
                  i.returnDetails !== void 0
                    ? i.returnDetails
                    : this.options.returnDetails,
                c =
                  i.keySeparator !== void 0
                    ? i.keySeparator
                    : this.options.keySeparator,
                f = this.extractFromKey(t[t.length - 1], i),
                l = f.key,
                p = f.namespaces,
                d = p[p.length - 1],
                D = i.lng || this.language,
                v =
                  i.appendNamespaceToCIMode ||
                  this.options.appendNamespaceToCIMode;
              if (D && D.toLowerCase() === "cimode") {
                if (v) {
                  var A = i.nsSeparator || this.options.nsSeparator;
                  return s
                    ? ((m.res = "".concat(d).concat(A).concat(l)), m)
                    : "".concat(d).concat(A).concat(l);
                }
                return s ? ((m.res = l), m) : l;
              }
              var m = this.resolve(t, i),
                h = m && m.res,
                C = (m && m.usedKey) || l,
                y = (m && m.exactUsedKey) || l,
                _ = Object.prototype.toString.apply(h),
                w = ["[object Number]", "[object Function]", "[object RegExp]"],
                L =
                  i.joinArrays !== void 0
                    ? i.joinArrays
                    : this.options.joinArrays,
                B = !this.i18nFormat || this.i18nFormat.handleAsObject,
                K =
                  typeof h != "string" &&
                  typeof h != "boolean" &&
                  typeof h != "number";
              if (
                B &&
                h &&
                K &&
                w.indexOf(_) < 0 &&
                !(typeof L == "string" && _ === "[object Array]")
              ) {
                if (!i.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      "accessing an object - but returnObjects options is not enabled!"
                    );
                  var T = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(
                        C,
                        h,
                        M(M({}, i), {}, { ns: p })
                      )
                    : "key '"
                        .concat(l, " (")
                        .concat(
                          this.language,
                          ")' returned an object instead of string."
                        );
                  return s ? ((m.res = T), m) : T;
                }
                if (c) {
                  var W = _ === "[object Array]",
                    Y = W ? [] : {},
                    Ae = W ? y : C;
                  for (var ae in h)
                    if (Object.prototype.hasOwnProperty.call(h, ae)) {
                      var Ge = "".concat(Ae).concat(c).concat(ae);
                      (Y[ae] = this.translate(
                        Ge,
                        M(M({}, i), { joinArrays: !1, ns: p })
                      )),
                        Y[ae] === Ge && (Y[ae] = h[ae]);
                    }
                  h = Y;
                }
              } else if (B && typeof L == "string" && _ === "[object Array]")
                (h = h.join(L)), h && (h = this.extendTranslation(h, t, i, a));
              else {
                var Qe = !1,
                  Le = !1,
                  Jn = i.count !== void 0 && typeof i.count != "string",
                  mn = r.hasDefaultValue(i),
                  eu = Jn ? this.pluralResolver.getSuffix(D, i.count, i) : "",
                  Pe = i["defaultValue".concat(eu)] || i.defaultValue;
                !this.isValidLookup(h) && mn && ((Qe = !0), (h = Pe)),
                  this.isValidLookup(h) || ((Le = !0), (h = l));
                var nu =
                    i.missingKeyNoValueFallbackToKey ||
                    this.options.missingKeyNoValueFallbackToKey,
                  ru = nu && Le ? void 0 : h,
                  Ne = mn && Pe !== h && this.options.updateMissing;
                if (Le || Qe || Ne) {
                  if (
                    (this.logger.log(
                      Ne ? "updateKey" : "missingKey",
                      D,
                      d,
                      l,
                      Ne ? Pe : h
                    ),
                    c)
                  ) {
                    var Gn = this.resolve(
                      l,
                      M(M({}, i), {}, { keySeparator: !1 })
                    );
                    Gn &&
                      Gn.res &&
                      this.logger.warn(
                        "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                      );
                  }
                  var Ie = [],
                    Xe = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      i.lng || this.language
                    );
                  if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
                    for (var vn = 0; vn < Xe.length; vn++) Ie.push(Xe[vn]);
                  else
                    this.options.saveMissingTo === "all"
                      ? (Ie = this.languageUtils.toResolveHierarchy(
                          i.lng || this.language
                        ))
                      : Ie.push(i.lng || this.language);
                  var Qn = function (Ce, Cn, Xn) {
                    var Zn = mn && Xn !== h ? Xn : ru;
                    o.options.missingKeyHandler
                      ? o.options.missingKeyHandler(Ce, d, Cn, Zn, Ne, i)
                      : o.backendConnector &&
                        o.backendConnector.saveMissing &&
                        o.backendConnector.saveMissing(Ce, d, Cn, Zn, Ne, i),
                      o.emit("missingKey", Ce, d, Cn, h);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && Jn
                      ? Ie.forEach(function (An) {
                          o.pluralResolver
                            .getSuffixes(An, i)
                            .forEach(function (Ce) {
                              Qn(
                                [An],
                                l + Ce,
                                i["defaultValue".concat(Ce)] || Pe
                              );
                            });
                        })
                      : Qn(Ie, l, Pe));
                }
                (h = this.extendTranslation(h, t, i, m, a)),
                  Le &&
                    h === l &&
                    this.options.appendNamespaceToMissingKey &&
                    (h = "".concat(d, ":").concat(l)),
                  (Le || Qe) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== "v1"
                      ? (h = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? "".concat(d, ":").concat(l)
                            : l,
                          Qe ? h : void 0
                        ))
                      : (h = this.options.parseMissingKeyHandler(h)));
              }
              return s ? ((m.res = h), m) : h;
            },
          },
          {
            key: "extendTranslation",
            value: function (t, i, a, o, s) {
              var c = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                t = this.i18nFormat.parse(
                  t,
                  M(M({}, this.options.interpolation.defaultVariables), a),
                  o.usedLng,
                  o.usedNS,
                  o.usedKey,
                  { resolved: o }
                );
              else if (!a.skipInterpolation) {
                a.interpolation &&
                  this.interpolator.init(
                    M(M({}, a), {
                      interpolation: M(
                        M({}, this.options.interpolation),
                        a.interpolation
                      ),
                    })
                  );
                var f =
                    typeof t == "string" &&
                    (a &&
                    a.interpolation &&
                    a.interpolation.skipOnVariables !== void 0
                      ? a.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  l;
                if (f) {
                  var p = t.match(this.interpolator.nestingRegexp);
                  l = p && p.length;
                }
                var d =
                  a.replace && typeof a.replace != "string" ? a.replace : a;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (d = M(
                      M({}, this.options.interpolation.defaultVariables),
                      d
                    )),
                  (t = this.interpolator.interpolate(
                    t,
                    d,
                    a.lng || this.language,
                    a
                  )),
                  f)
                ) {
                  var D = t.match(this.interpolator.nestingRegexp),
                    v = D && D.length;
                  l < v && (a.nest = !1);
                }
                a.nest !== !1 &&
                  (t = this.interpolator.nest(
                    t,
                    function () {
                      for (
                        var h = arguments.length, C = new Array(h), y = 0;
                        y < h;
                        y++
                      )
                        C[y] = arguments[y];
                      return s && s[0] === C[0] && !a.context
                        ? (c.logger.warn(
                            "It seems you are nesting recursively key: "
                              .concat(C[0], " in key: ")
                              .concat(i[0])
                          ),
                          null)
                        : c.translate.apply(c, C.concat([i]));
                    },
                    a
                  )),
                  a.interpolation && this.interpolator.reset();
              }
              var A = a.postProcess || this.options.postProcess,
                m = typeof A == "string" ? [A] : A;
              return (
                t != null &&
                  m &&
                  m.length &&
                  a.applyPostProcessor !== !1 &&
                  (t = qr.handle(
                    m,
                    t,
                    i,
                    this.options && this.options.postProcessPassResolved
                      ? M({ i18nResolved: o }, a)
                      : a,
                    this
                  )),
                t
              );
            },
          },
          {
            key: "resolve",
            value: function (t) {
              var i = this,
                a =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                o,
                s,
                c,
                f,
                l;
              return (
                typeof t == "string" && (t = [t]),
                t.forEach(function (p) {
                  if (!i.isValidLookup(o)) {
                    var d = i.extractFromKey(p, a),
                      D = d.key;
                    s = D;
                    var v = d.namespaces;
                    i.options.fallbackNS &&
                      (v = v.concat(i.options.fallbackNS));
                    var A = a.count !== void 0 && typeof a.count != "string",
                      m =
                        A &&
                        !a.ordinal &&
                        a.count === 0 &&
                        i.pluralResolver.shouldUseIntlApi(),
                      h =
                        a.context !== void 0 &&
                        (typeof a.context == "string" ||
                          typeof a.context == "number") &&
                        a.context !== "",
                      C = a.lngs
                        ? a.lngs
                        : i.languageUtils.toResolveHierarchy(
                            a.lng || i.language,
                            a.fallbackLng
                          );
                    v.forEach(function (y) {
                      i.isValidLookup(o) ||
                        ((l = y),
                        !sr["".concat(C[0], "-").concat(y)] &&
                          i.utils &&
                          i.utils.hasLoadedNamespace &&
                          !i.utils.hasLoadedNamespace(l) &&
                          ((sr["".concat(C[0], "-").concat(y)] = !0),
                          i.logger.warn(
                            'key "'
                              .concat(s, '" for languages "')
                              .concat(
                                C.join(", "),
                                `" won't get resolved as namespace "`
                              )
                              .concat(l, '" was not yet loaded'),
                            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                          )),
                        C.forEach(function (_) {
                          if (!i.isValidLookup(o)) {
                            f = _;
                            var w = [D];
                            if (i.i18nFormat && i.i18nFormat.addLookupKeys)
                              i.i18nFormat.addLookupKeys(w, D, _, y, a);
                            else {
                              var L;
                              A &&
                                (L = i.pluralResolver.getSuffix(_, a.count, a));
                              var B = "".concat(
                                i.options.pluralSeparator,
                                "zero"
                              );
                              if (
                                (A && (w.push(D + L), m && w.push(D + B)), h)
                              ) {
                                var K = ""
                                  .concat(D)
                                  .concat(i.options.contextSeparator)
                                  .concat(a.context);
                                w.push(K),
                                  A && (w.push(K + L), m && w.push(K + B));
                              }
                            }
                            for (var T; (T = w.pop()); )
                              i.isValidLookup(o) ||
                                ((c = T), (o = i.getResource(_, y, T, a)));
                          }
                        }));
                    });
                  }
                }),
                { res: o, usedKey: s, exactUsedKey: c, usedLng: f, usedNS: l }
              );
            },
          },
          {
            key: "isValidLookup",
            value: function (t) {
              return (
                t !== void 0 &&
                !(!this.options.returnNull && t === null) &&
                !(!this.options.returnEmptyString && t === "")
              );
            },
          },
          {
            key: "getResource",
            value: function (t, i, a) {
              var o =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(t, i, a, o)
                : this.resourceStore.getResource(t, i, a, o);
            },
          },
        ],
        [
          {
            key: "hasDefaultValue",
            value: function (t) {
              var i = "defaultValue";
              for (var a in t)
                if (
                  Object.prototype.hasOwnProperty.call(t, a) &&
                  i === a.substring(0, i.length) &&
                  t[a] !== void 0
                )
                  return !0;
              return !1;
            },
          },
        ]
      ),
      r
    );
  })(ce);
function _n(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var yu = (function () {
    function e(n) {
      z(this, e),
        (this.options = n),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = Z.create("languageUtils"));
    }
    return (
      q(e, [
        {
          key: "getScriptPartFromCode",
          value: function (r) {
            if (!r || r.indexOf("-") < 0) return null;
            var u = r.split("-");
            return u.length === 2 ||
              (u.pop(), u[u.length - 1].toLowerCase() === "x")
              ? null
              : this.formatLanguageCode(u.join("-"));
          },
        },
        {
          key: "getLanguagePartFromCode",
          value: function (r) {
            if (!r || r.indexOf("-") < 0) return r;
            var u = r.split("-");
            return this.formatLanguageCode(u[0]);
          },
        },
        {
          key: "formatLanguageCode",
          value: function (r) {
            if (typeof r == "string" && r.indexOf("-") > -1) {
              var u = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                t = r.split("-");
              return (
                this.options.lowerCaseLng
                  ? (t = t.map(function (i) {
                      return i.toLowerCase();
                    }))
                  : t.length === 2
                  ? ((t[0] = t[0].toLowerCase()),
                    (t[1] = t[1].toUpperCase()),
                    u.indexOf(t[1].toLowerCase()) > -1 &&
                      (t[1] = _n(t[1].toLowerCase())))
                  : t.length === 3 &&
                    ((t[0] = t[0].toLowerCase()),
                    t[1].length === 2 && (t[1] = t[1].toUpperCase()),
                    t[0] !== "sgn" &&
                      t[2].length === 2 &&
                      (t[2] = t[2].toUpperCase()),
                    u.indexOf(t[1].toLowerCase()) > -1 &&
                      (t[1] = _n(t[1].toLowerCase())),
                    u.indexOf(t[2].toLowerCase()) > -1 &&
                      (t[2] = _n(t[2].toLowerCase()))),
                t.join("-")
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng
              ? r.toLowerCase()
              : r;
          },
        },
        {
          key: "isSupportedCode",
          value: function (r) {
            return (
              (this.options.load === "languageOnly" ||
                this.options.nonExplicitSupportedLngs) &&
                (r = this.getLanguagePartFromCode(r)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(r) > -1
            );
          },
        },
        {
          key: "getBestMatchFromCodes",
          value: function (r) {
            var u = this;
            if (!r) return null;
            var t;
            return (
              r.forEach(function (i) {
                if (!t) {
                  var a = u.formatLanguageCode(i);
                  (!u.options.supportedLngs || u.isSupportedCode(a)) && (t = a);
                }
              }),
              !t &&
                this.options.supportedLngs &&
                r.forEach(function (i) {
                  if (!t) {
                    var a = u.getLanguagePartFromCode(i);
                    if (u.isSupportedCode(a)) return (t = a);
                    t = u.options.supportedLngs.find(function (o) {
                      if (o.indexOf(a) === 0) return o;
                    });
                  }
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t
            );
          },
        },
        {
          key: "getFallbackCodes",
          value: function (r, u) {
            if (!r) return [];
            if (
              (typeof r == "function" && (r = r(u)),
              typeof r == "string" && (r = [r]),
              Object.prototype.toString.apply(r) === "[object Array]")
            )
              return r;
            if (!u) return r.default || [];
            var t = r[u];
            return (
              t || (t = r[this.getScriptPartFromCode(u)]),
              t || (t = r[this.formatLanguageCode(u)]),
              t || (t = r[this.getLanguagePartFromCode(u)]),
              t || (t = r.default),
              t || []
            );
          },
        },
        {
          key: "toResolveHierarchy",
          value: function (r, u) {
            var t = this,
              i = this.getFallbackCodes(u || this.options.fallbackLng || [], r),
              a = [],
              o = function (c) {
                c &&
                  (t.isSupportedCode(c)
                    ? a.push(c)
                    : t.logger.warn(
                        "rejecting language code not found in supportedLngs: ".concat(
                          c
                        )
                      ));
              };
            return (
              typeof r == "string" && r.indexOf("-") > -1
                ? (this.options.load !== "languageOnly" &&
                    o(this.formatLanguageCode(r)),
                  this.options.load !== "languageOnly" &&
                    this.options.load !== "currentOnly" &&
                    o(this.getScriptPartFromCode(r)),
                  this.options.load !== "currentOnly" &&
                    o(this.getLanguagePartFromCode(r)))
                : typeof r == "string" && o(this.formatLanguageCode(r)),
              i.forEach(function (s) {
                a.indexOf(s) < 0 && o(t.formatLanguageCode(s));
              }),
              a
            );
          },
        },
      ]),
      e
    );
  })(),
  Eu = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  xu = {
    1: function (n) {
      return +(n > 1);
    },
    2: function (n) {
      return +(n != 1);
    },
    3: function (n) {
      return 0;
    },
    4: function (n) {
      return n % 10 == 1 && n % 100 != 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (n) {
      return n == 0
        ? 0
        : n == 1
        ? 1
        : n == 2
        ? 2
        : n % 100 >= 3 && n % 100 <= 10
        ? 3
        : n % 100 >= 11
        ? 4
        : 5;
    },
    6: function (n) {
      return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    },
    7: function (n) {
      return n == 1
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (n) {
      return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
    },
    9: function (n) {
      return +(n >= 2);
    },
    10: function (n) {
      return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
    },
    11: function (n) {
      return n == 1 || n == 11
        ? 0
        : n == 2 || n == 12
        ? 1
        : n > 2 && n < 20
        ? 2
        : 3;
    },
    12: function (n) {
      return +(n % 10 != 1 || n % 100 == 11);
    },
    13: function (n) {
      return +(n !== 0);
    },
    14: function (n) {
      return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
    },
    15: function (n) {
      return n % 10 == 1 && n % 100 != 11
        ? 0
        : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2;
    },
    17: function (n) {
      return n == 1 || (n % 10 == 1 && n % 100 != 11) ? 0 : 1;
    },
    18: function (n) {
      return n == 0 ? 0 : n == 1 ? 1 : 2;
    },
    19: function (n) {
      return n == 1
        ? 0
        : n == 0 || (n % 100 > 1 && n % 100 < 11)
        ? 1
        : n % 100 > 10 && n % 100 < 20
        ? 2
        : 3;
    },
    20: function (n) {
      return n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2;
    },
    21: function (n) {
      return n % 100 == 1
        ? 1
        : n % 100 == 2
        ? 2
        : n % 100 == 3 || n % 100 == 4
        ? 3
        : 0;
    },
    22: function (n) {
      return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3;
    },
  },
  bu = ["v1", "v2", "v3"],
  cr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function wu() {
  var e = {};
  return (
    Eu.forEach(function (n) {
      n.lngs.forEach(function (r) {
        e[r] = { numbers: n.nr, plurals: xu[n.fc] };
      });
    }),
    e
  );
}
var ku = (function () {
  function e(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    z(this, e),
      (this.languageUtils = n),
      (this.options = r),
      (this.logger = Z.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        this.options.compatibilityJSON === "v4") &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = wu());
  }
  return (
    q(e, [
      {
        key: "addRule",
        value: function (r, u) {
          this.rules[r] = u;
        },
      },
      {
        key: "getRule",
        value: function (r) {
          var u =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(r, {
                type: u.ordinal ? "ordinal" : "cardinal",
              });
            } catch {
              return;
            }
          return (
            this.rules[r] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(r)]
          );
        },
      },
      {
        key: "needsPlural",
        value: function (r) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            t = this.getRule(r, u);
          return this.shouldUseIntlApi()
            ? t && t.resolvedOptions().pluralCategories.length > 1
            : t && t.numbers.length > 1;
        },
      },
      {
        key: "getPluralFormsOfKey",
        value: function (r, u) {
          var t =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(r, t).map(function (i) {
            return "".concat(u).concat(i);
          });
        },
      },
      {
        key: "getSuffixes",
        value: function (r) {
          var u = this,
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = this.getRule(r, t);
          return i
            ? this.shouldUseIntlApi()
              ? i
                  .resolvedOptions()
                  .pluralCategories.sort(function (a, o) {
                    return cr[a] - cr[o];
                  })
                  .map(function (a) {
                    return "".concat(u.options.prepend).concat(a);
                  })
              : i.numbers.map(function (a) {
                  return u.getSuffix(r, a, t);
                })
            : [];
        },
      },
      {
        key: "getSuffix",
        value: function (r, u) {
          var t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            i = this.getRule(r, t);
          return i
            ? this.shouldUseIntlApi()
              ? "".concat(this.options.prepend).concat(i.select(u))
              : this.getSuffixRetroCompatible(i, u)
            : (this.logger.warn("no plural rule found for: ".concat(r)), "");
        },
      },
      {
        key: "getSuffixRetroCompatible",
        value: function (r, u) {
          var t = this,
            i = r.noAbs ? r.plurals(u) : r.plurals(Math.abs(u)),
            a = r.numbers[i];
          this.options.simplifyPluralSuffix &&
            r.numbers.length === 2 &&
            r.numbers[0] === 1 &&
            (a === 2 ? (a = "plural") : a === 1 && (a = ""));
          var o = function () {
            return t.options.prepend && a.toString()
              ? t.options.prepend + a.toString()
              : a.toString();
          };
          return this.options.compatibilityJSON === "v1"
            ? a === 1
              ? ""
              : typeof a == "number"
              ? "_plural_".concat(a.toString())
              : o()
            : this.options.compatibilityJSON === "v2" ||
              (this.options.simplifyPluralSuffix &&
                r.numbers.length === 2 &&
                r.numbers[0] === 1)
            ? o()
            : this.options.prepend && i.toString()
            ? this.options.prepend + i.toString()
            : i.toString();
        },
      },
      {
        key: "shouldUseIntlApi",
        value: function () {
          return !bu.includes(this.options.compatibilityJSON);
        },
      },
    ]),
    e
  );
})();
function fr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function J(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? fr(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : fr(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
var Su = (function () {
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    z(this, e),
      (this.logger = Z.create("interpolator")),
      (this.options = n),
      (this.format =
        (n.interpolation && n.interpolation.format) ||
        function (r) {
          return r;
        }),
      this.init(n);
  }
  return (
    q(e, [
      {
        key: "init",
        value: function () {
          var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          r.interpolation || (r.interpolation = { escapeValue: !0 });
          var u = r.interpolation;
          (this.escape = u.escape !== void 0 ? u.escape : hu),
            (this.escapeValue = u.escapeValue !== void 0 ? u.escapeValue : !0),
            (this.useRawValueToEscape =
              u.useRawValueToEscape !== void 0 ? u.useRawValueToEscape : !1),
            (this.prefix = u.prefix ? _e(u.prefix) : u.prefixEscaped || "{{"),
            (this.suffix = u.suffix ? _e(u.suffix) : u.suffixEscaped || "}}"),
            (this.formatSeparator = u.formatSeparator
              ? u.formatSeparator
              : u.formatSeparator || ","),
            (this.unescapePrefix = u.unescapeSuffix
              ? ""
              : u.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : u.unescapeSuffix || ""),
            (this.nestingPrefix = u.nestingPrefix
              ? _e(u.nestingPrefix)
              : u.nestingPrefixEscaped || _e("$t(")),
            (this.nestingSuffix = u.nestingSuffix
              ? _e(u.nestingSuffix)
              : u.nestingSuffixEscaped || _e(")")),
            (this.nestingOptionsSeparator = u.nestingOptionsSeparator
              ? u.nestingOptionsSeparator
              : u.nestingOptionsSeparator || ","),
            (this.maxReplaces = u.maxReplaces ? u.maxReplaces : 1e3),
            (this.alwaysFormat =
              u.alwaysFormat !== void 0 ? u.alwaysFormat : !1),
            this.resetRegExp();
        },
      },
      {
        key: "reset",
        value: function () {
          this.options && this.init(this.options);
        },
      },
      {
        key: "resetRegExp",
        value: function () {
          var r = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(r, "g");
          var u = ""
            .concat(this.prefix)
            .concat(this.unescapePrefix, "(.+?)")
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(u, "g");
          var t = ""
            .concat(this.nestingPrefix, "(.+?)")
            .concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(t, "g");
        },
      },
      {
        key: "interpolate",
        value: function (r, u, t, i) {
          var a = this,
            o,
            s,
            c,
            f =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function l(A) {
            return A.replace(/\$/g, "$$$$");
          }
          var p = function (m) {
            if (m.indexOf(a.formatSeparator) < 0) {
              var h = ir(u, f, m);
              return a.alwaysFormat
                ? a.format(
                    h,
                    void 0,
                    t,
                    J(J(J({}, i), u), {}, { interpolationkey: m })
                  )
                : h;
            }
            var C = m.split(a.formatSeparator),
              y = C.shift().trim(),
              _ = C.join(a.formatSeparator).trim();
            return a.format(
              ir(u, f, y),
              _,
              t,
              J(J(J({}, i), u), {}, { interpolationkey: y })
            );
          };
          this.resetRegExp();
          var d =
              (i && i.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            D =
              i && i.interpolation && i.interpolation.skipOnVariables !== void 0
                ? i.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            v = [
              {
                regex: this.regexpUnescape,
                safeValue: function (m) {
                  return l(m);
                },
              },
              {
                regex: this.regexp,
                safeValue: function (m) {
                  return a.escapeValue ? l(a.escape(m)) : l(m);
                },
              },
            ];
          return (
            v.forEach(function (A) {
              for (c = 0; (o = A.regex.exec(r)); ) {
                var m = o[1].trim();
                if (((s = p(m)), s === void 0))
                  if (typeof d == "function") {
                    var h = d(r, o, i);
                    s = typeof h == "string" ? h : "";
                  } else if (i && i.hasOwnProperty(m)) s = "";
                  else if (D) {
                    s = o[0];
                    continue;
                  } else
                    a.logger.warn(
                      "missed to pass in variable "
                        .concat(m, " for interpolating ")
                        .concat(r)
                    ),
                      (s = "");
                else
                  typeof s != "string" && !a.useRawValueToEscape && (s = tr(s));
                var C = A.safeValue(s);
                if (
                  ((r = r.replace(o[0], C)),
                  D
                    ? ((A.regex.lastIndex += s.length),
                      (A.regex.lastIndex -= o[0].length))
                    : (A.regex.lastIndex = 0),
                  c++,
                  c >= a.maxReplaces)
                )
                  break;
              }
            }),
            r
          );
        },
      },
      {
        key: "nest",
        value: function (r, u) {
          var t = this,
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            a,
            o,
            s = J({}, i);
          (s.applyPostProcessor = !1), delete s.defaultValue;
          function c(d, D) {
            var v = this.nestingOptionsSeparator;
            if (d.indexOf(v) < 0) return d;
            var A = d.split(new RegExp("".concat(v, "[ ]*{"))),
              m = "{".concat(A[1]);
            (d = A[0]), (m = this.interpolate(m, s));
            var h = m.match(/'/g),
              C = m.match(/"/g);
            ((h && h.length % 2 === 0 && !C) || C.length % 2 !== 0) &&
              (m = m.replace(/'/g, '"'));
            try {
              (s = JSON.parse(m)), D && (s = J(J({}, D), s));
            } catch (y) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(d),
                  y
                ),
                "".concat(d).concat(v).concat(m)
              );
            }
            return delete s.defaultValue, d;
          }
          for (; (a = this.nestingRegexp.exec(r)); ) {
            var f = [],
              l = !1;
            if (
              a[0].indexOf(this.formatSeparator) !== -1 &&
              !/{.*}/.test(a[1])
            ) {
              var p = a[1].split(this.formatSeparator).map(function (d) {
                return d.trim();
              });
              (a[1] = p.shift()), (f = p), (l = !0);
            }
            if (
              ((o = u(c.call(this, a[1].trim(), s), s)),
              o && a[0] === r && typeof o != "string")
            )
              return o;
            typeof o != "string" && (o = tr(o)),
              o ||
                (this.logger.warn(
                  "missed to resolve ".concat(a[1], " for nesting ").concat(r)
                ),
                (o = "")),
              l &&
                (o = f.reduce(function (d, D) {
                  return t.format(
                    d,
                    D,
                    i.lng,
                    J(J({}, i), {}, { interpolationkey: a[1].trim() })
                  );
                }, o.trim())),
              (r = r.replace(a[0], o)),
              (this.regexp.lastIndex = 0);
          }
          return r;
        },
      },
    ]),
    e
  );
})();
function pr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function oe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? pr(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : pr(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
function Bu(e) {
  var n = e.toLowerCase().trim(),
    r = {};
  if (e.indexOf("(") > -1) {
    var u = e.split("(");
    n = u[0].toLowerCase().trim();
    var t = u[1].substring(0, u[1].length - 1);
    if (n === "currency" && t.indexOf(":") < 0)
      r.currency || (r.currency = t.trim());
    else if (n === "relativetime" && t.indexOf(":") < 0)
      r.range || (r.range = t.trim());
    else {
      var i = t.split(";");
      i.forEach(function (a) {
        if (a) {
          var o = a.split(":"),
            s = au(o),
            c = s[0],
            f = s.slice(1),
            l = f
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          r[c.trim()] || (r[c.trim()] = l),
            l === "false" && (r[c.trim()] = !1),
            l === "true" && (r[c.trim()] = !0),
            isNaN(l) || (r[c.trim()] = parseInt(l, 10));
        }
      });
    }
  }
  return { formatName: n, formatOptions: r };
}
function Fe(e) {
  var n = {};
  return function (u, t, i) {
    var a = t + JSON.stringify(i),
      o = n[a];
    return o || ((o = e(t, i)), (n[a] = o)), o(u);
  };
}
var Ou = (function () {
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    z(this, e),
      (this.logger = Z.create("formatter")),
      (this.options = n),
      (this.formats = {
        number: Fe(function (r, u) {
          var t = new Intl.NumberFormat(r, u);
          return function (i) {
            return t.format(i);
          };
        }),
        currency: Fe(function (r, u) {
          var t = new Intl.NumberFormat(
            r,
            oe(oe({}, u), {}, { style: "currency" })
          );
          return function (i) {
            return t.format(i);
          };
        }),
        datetime: Fe(function (r, u) {
          var t = new Intl.DateTimeFormat(r, oe({}, u));
          return function (i) {
            return t.format(i);
          };
        }),
        relativetime: Fe(function (r, u) {
          var t = new Intl.RelativeTimeFormat(r, oe({}, u));
          return function (i) {
            return t.format(i, u.range || "day");
          };
        }),
        list: Fe(function (r, u) {
          var t = new Intl.ListFormat(r, oe({}, u));
          return function (i) {
            return t.format(i);
          };
        }),
      }),
      this.init(n);
  }
  return (
    q(e, [
      {
        key: "init",
        value: function (r) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            t = u.interpolation;
          this.formatSeparator = t.formatSeparator
            ? t.formatSeparator
            : t.formatSeparator || ",";
        },
      },
      {
        key: "add",
        value: function (r, u) {
          this.formats[r.toLowerCase().trim()] = u;
        },
      },
      {
        key: "addCached",
        value: function (r, u) {
          this.formats[r.toLowerCase().trim()] = Fe(u);
        },
      },
      {
        key: "format",
        value: function (r, u, t, i) {
          var a = this,
            o = u.split(this.formatSeparator),
            s = o.reduce(function (c, f) {
              var l = Bu(f),
                p = l.formatName,
                d = l.formatOptions;
              if (a.formats[p]) {
                var D = c;
                try {
                  var v =
                      (i &&
                        i.formatParams &&
                        i.formatParams[i.interpolationkey]) ||
                      {},
                    A = v.locale || v.lng || i.locale || i.lng || t;
                  D = a.formats[p](c, A, oe(oe(oe({}, d), i), v));
                } catch (m) {
                  a.logger.warn(m);
                }
                return D;
              } else a.logger.warn("there was no format function for ".concat(p));
              return c;
            }, r);
          return s;
        },
      },
    ]),
    e
  );
})();
function dr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function gr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? dr(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : dr(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
function Lu(e) {
  var n = Pu();
  return function () {
    var u = le(e),
      t;
    if (n) {
      var i = le(this).constructor;
      t = Reflect.construct(u, arguments, i);
    } else t = u.apply(this, arguments);
    return Je(this, t);
  };
}
function Pu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Nu(e, n) {
  e.pending[n] !== void 0 && (delete e.pending[n], e.pendingCount--);
}
var Iu = (function (e) {
  gn(r, e);
  var n = Lu(r);
  function r(u, t, i) {
    var a,
      o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      z(this, r),
      (a = n.call(this)),
      hn && ce.call(De(a)),
      (a.backend = u),
      (a.store = t),
      (a.services = i),
      (a.languageUtils = i.languageUtils),
      (a.options = o),
      (a.logger = Z.create("backendConnector")),
      (a.waitingReads = []),
      (a.maxParallelReads = o.maxParallelReads || 10),
      (a.readingCalls = 0),
      (a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (a.state = {}),
      (a.queue = []),
      a.backend && a.backend.init && a.backend.init(i, o.backend, o),
      a
    );
  }
  return (
    q(r, [
      {
        key: "queueLoad",
        value: function (t, i, a, o) {
          var s = this,
            c = {},
            f = {},
            l = {},
            p = {};
          return (
            t.forEach(function (d) {
              var D = !0;
              i.forEach(function (v) {
                var A = "".concat(d, "|").concat(v);
                !a.reload && s.store.hasResourceBundle(d, v)
                  ? (s.state[A] = 2)
                  : s.state[A] < 0 ||
                    (s.state[A] === 1
                      ? f[A] === void 0 && (f[A] = !0)
                      : ((s.state[A] = 1),
                        (D = !1),
                        f[A] === void 0 && (f[A] = !0),
                        c[A] === void 0 && (c[A] = !0),
                        p[v] === void 0 && (p[v] = !0)));
              }),
                D || (l[d] = !0);
            }),
            (Object.keys(c).length || Object.keys(f).length) &&
              this.queue.push({
                pending: f,
                pendingCount: Object.keys(f).length,
                loaded: {},
                errors: [],
                callback: o,
              }),
            {
              toLoad: Object.keys(c),
              pending: Object.keys(f),
              toLoadLanguages: Object.keys(l),
              toLoadNamespaces: Object.keys(p),
            }
          );
        },
      },
      {
        key: "loaded",
        value: function (t, i, a) {
          var o = t.split("|"),
            s = o[0],
            c = o[1];
          i && this.emit("failedLoading", s, c, i),
            a && this.store.addResourceBundle(s, c, a),
            (this.state[t] = i ? -1 : 2);
          var f = {};
          this.queue.forEach(function (l) {
            du(l.loaded, [s], c),
              Nu(l, t),
              i && l.errors.push(i),
              l.pendingCount === 0 &&
                !l.done &&
                (Object.keys(l.loaded).forEach(function (p) {
                  f[p] || (f[p] = {});
                  var d = l.loaded[p];
                  d.length &&
                    d.forEach(function (D) {
                      f[p][D] === void 0 && (f[p][D] = !0);
                    });
                }),
                (l.done = !0),
                l.errors.length ? l.callback(l.errors) : l.callback());
          }),
            this.emit("loaded", f),
            (this.queue = this.queue.filter(function (l) {
              return !l.done;
            }));
        },
      },
      {
        key: "read",
        value: function (t, i, a) {
          var o = this,
            s =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 0,
            c =
              arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : this.retryTimeout,
            f = arguments.length > 5 ? arguments[5] : void 0;
          if (!t.length) return f(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: t,
              ns: i,
              fcName: a,
              tried: s,
              wait: c,
              callback: f,
            });
            return;
          }
          return (
            this.readingCalls++,
            this.backend[a](t, i, function (l, p) {
              if ((o.readingCalls--, o.waitingReads.length > 0)) {
                var d = o.waitingReads.shift();
                o.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
              }
              if (l && p && s < o.maxRetries) {
                setTimeout(function () {
                  o.read.call(o, t, i, a, s + 1, c * 2, f);
                }, c);
                return;
              }
              f(l, p);
            })
          );
        },
      },
      {
        key: "prepareLoading",
        value: function (t, i) {
          var a = this,
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            s = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              s && s()
            );
          typeof t == "string" &&
            (t = this.languageUtils.toResolveHierarchy(t)),
            typeof i == "string" && (i = [i]);
          var c = this.queueLoad(t, i, o, s);
          if (!c.toLoad.length) return c.pending.length || s(), null;
          c.toLoad.forEach(function (f) {
            a.loadOne(f);
          });
        },
      },
      {
        key: "load",
        value: function (t, i, a) {
          this.prepareLoading(t, i, {}, a);
        },
      },
      {
        key: "reload",
        value: function (t, i, a) {
          this.prepareLoading(t, i, { reload: !0 }, a);
        },
      },
      {
        key: "loadOne",
        value: function (t) {
          var i = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "",
            o = t.split("|"),
            s = o[0],
            c = o[1];
          this.read(s, c, "read", void 0, void 0, function (f, l) {
            f &&
              i.logger.warn(
                ""
                  .concat(a, "loading namespace ")
                  .concat(c, " for language ")
                  .concat(s, " failed"),
                f
              ),
              !f &&
                l &&
                i.logger.log(
                  ""
                    .concat(a, "loaded namespace ")
                    .concat(c, " for language ")
                    .concat(s),
                  l
                ),
              i.loaded(t, f, l);
          });
        },
      },
      {
        key: "saveMissing",
        value: function (t, i, a, o, s) {
          var c =
            arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(i)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(a, '" as the namespace "')
                .concat(i, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          a == null ||
            a === "" ||
            (this.backend &&
              this.backend.create &&
              this.backend.create(
                t,
                i,
                a,
                o,
                null,
                gr(gr({}, c), {}, { isUpdate: s })
              ),
            !(!t || !t[0]) && this.store.addResource(t[0], i, a, o));
        },
      },
    ]),
    r
  );
})(ce);
function Ru() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (n) {
      var r = {};
      if (
        (me(n[1]) === "object" && (r = n[1]),
        typeof n[1] == "string" && (r.defaultValue = n[1]),
        typeof n[2] == "string" && (r.tDescription = n[2]),
        me(n[2]) === "object" || me(n[3]) === "object")
      ) {
        var u = n[3] || n[2];
        Object.keys(u).forEach(function (t) {
          r[t] = u[t];
        });
      }
      return r;
    },
    interpolation: {
      escapeValue: !0,
      format: function (n, r, u, t) {
        return n;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function hr(e) {
  return (
    typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  );
}
function Dr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    n &&
      (u = u.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, u);
  }
  return r;
}
function Q(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Dr(Object(r), !0).forEach(function (u) {
          ie(e, u, r[u]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Dr(Object(r)).forEach(function (u) {
          Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
        });
  }
  return e;
}
function Tu(e) {
  var n = ju();
  return function () {
    var u = le(e),
      t;
    if (n) {
      var i = le(this).constructor;
      t = Reflect.construct(u, arguments, i);
    } else t = u.apply(this, arguments);
    return Je(this, t);
  };
}
function ju() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function en() {}
function Mu(e) {
  var n = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
  n.forEach(function (r) {
    typeof e[r] == "function" && (e[r] = e[r].bind(e));
  });
}
var tn = (function (e) {
  gn(r, e);
  var n = Tu(r);
  function r() {
    var u,
      t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (z(this, r),
      (u = n.call(this)),
      hn && ce.call(De(u)),
      (u.options = hr(t)),
      (u.services = {}),
      (u.logger = Z),
      (u.modules = { external: [] }),
      Mu(De(u)),
      i && !u.isInitialized && !t.isClone)
    ) {
      if (!u.options.initImmediate) return u.init(t, i), Je(u, De(u));
      setTimeout(function () {
        u.init(t, i);
      }, 0);
    }
    return u;
  }
  return (
    q(r, [
      {
        key: "init",
        value: function () {
          var t = this,
            i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
          typeof i == "function" && ((a = i), (i = {})),
            !i.defaultNS &&
              i.defaultNS !== !1 &&
              i.ns &&
              (typeof i.ns == "string"
                ? (i.defaultNS = i.ns)
                : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
          var o = Ru();
          (this.options = Q(Q(Q({}, o), this.options), hr(i))),
            this.options.compatibilityAPI !== "v1" &&
              (this.options.interpolation = Q(
                Q({}, o.interpolation),
                this.options.interpolation
              )),
            i.keySeparator !== void 0 &&
              (this.options.userDefinedKeySeparator = i.keySeparator),
            i.nsSeparator !== void 0 &&
              (this.options.userDefinedNsSeparator = i.nsSeparator);
          function s(m) {
            return m ? (typeof m == "function" ? new m() : m) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? Z.init(s(this.modules.logger), this.options)
              : Z.init(null, this.options);
            var c;
            this.modules.formatter
              ? (c = this.modules.formatter)
              : typeof Intl < "u" && (c = Ou);
            var f = new yu(this.options);
            this.store = new Cu(this.options.resources, this.options);
            var l = this.services;
            (l.logger = Z),
              (l.resourceStore = this.store),
              (l.languageUtils = f),
              (l.pluralResolver = new ku(f, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              c &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    o.interpolation.format) &&
                ((l.formatter = s(c)),
                l.formatter.init(l, this.options),
                (this.options.interpolation.format = l.formatter.format.bind(
                  l.formatter
                ))),
              (l.interpolator = new Su(this.options)),
              (l.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (l.backendConnector = new Iu(
                s(this.modules.backend),
                l.resourceStore,
                l,
                this.options
              )),
              l.backendConnector.on("*", function (m) {
                for (
                  var h = arguments.length,
                    C = new Array(h > 1 ? h - 1 : 0),
                    y = 1;
                  y < h;
                  y++
                )
                  C[y - 1] = arguments[y];
                t.emit.apply(t, [m].concat(C));
              }),
              this.modules.languageDetector &&
                ((l.languageDetector = s(this.modules.languageDetector)),
                l.languageDetector.init(
                  l,
                  this.options.detection,
                  this.options
                )),
              this.modules.i18nFormat &&
                ((l.i18nFormat = s(this.modules.i18nFormat)),
                l.i18nFormat.init && l.i18nFormat.init(this)),
              (this.translator = new lr(this.services, this.options)),
              this.translator.on("*", function (m) {
                for (
                  var h = arguments.length,
                    C = new Array(h > 1 ? h - 1 : 0),
                    y = 1;
                  y < h;
                  y++
                )
                  C[y - 1] = arguments[y];
                t.emit.apply(t, [m].concat(C));
              }),
              this.modules.external.forEach(function (m) {
                m.init && m.init(t);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            a || (a = en),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            var p = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            );
          var d = [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ];
          d.forEach(function (m) {
            t[m] = function () {
              var h;
              return (h = t.store)[m].apply(h, arguments);
            };
          });
          var D = [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ];
          D.forEach(function (m) {
            t[m] = function () {
              var h;
              return (h = t.store)[m].apply(h, arguments), t;
            };
          });
          var v = Re(),
            A = function () {
              var h = function (y, _) {
                t.isInitialized &&
                  !t.initializedStoreOnce &&
                  t.logger.warn(
                    "init: i18next is already initialized. You should call init just once!"
                  ),
                  (t.isInitialized = !0),
                  t.options.isClone || t.logger.log("initialized", t.options),
                  t.emit("initialized", t.options),
                  v.resolve(_),
                  a(y, _);
              };
              if (
                t.languages &&
                t.options.compatibilityAPI !== "v1" &&
                !t.isInitialized
              )
                return h(null, t.t.bind(t));
              t.changeLanguage(t.options.lng, h);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? A()
              : setTimeout(A, 0),
            v
          );
        },
      },
      {
        key: "loadResources",
        value: function (t) {
          var i = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : en,
            o = a,
            s = typeof t == "string" ? t : this.language;
          if (
            (typeof t == "function" && (o = t),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (s && s.toLowerCase() === "cimode") return o();
            var c = [],
              f = function (d) {
                if (d) {
                  var D = i.services.languageUtils.toResolveHierarchy(d);
                  D.forEach(function (v) {
                    c.indexOf(v) < 0 && c.push(v);
                  });
                }
              };
            if (s) f(s);
            else {
              var l = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng
              );
              l.forEach(function (p) {
                return f(p);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (p) {
                return f(p);
              }),
              this.services.backendConnector.load(
                c,
                this.options.ns,
                function (p) {
                  !p &&
                    !i.resolvedLanguage &&
                    i.language &&
                    i.setResolvedLanguage(i.language),
                    o(p);
                }
              );
          } else o(null);
        },
      },
      {
        key: "reloadResources",
        value: function (t, i, a) {
          var o = Re();
          return (
            t || (t = this.languages),
            i || (i = this.options.ns),
            a || (a = en),
            this.services.backendConnector.reload(t, i, function (s) {
              o.resolve(), a(s);
            }),
            o
          );
        },
      },
      {
        key: "use",
        value: function (t) {
          if (!t)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!t.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            t.type === "backend" && (this.modules.backend = t),
            (t.type === "logger" || (t.log && t.warn && t.error)) &&
              (this.modules.logger = t),
            t.type === "languageDetector" &&
              (this.modules.languageDetector = t),
            t.type === "i18nFormat" && (this.modules.i18nFormat = t),
            t.type === "postProcessor" && qr.addPostProcessor(t),
            t.type === "formatter" && (this.modules.formatter = t),
            t.type === "3rdParty" && this.modules.external.push(t),
            this
          );
        },
      },
      {
        key: "setResolvedLanguage",
        value: function (t) {
          if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (var i = 0; i < this.languages.length; i++) {
              var a = this.languages[i];
              if (
                !(["cimode", "dev"].indexOf(a) > -1) &&
                this.store.hasLanguageSomeTranslations(a)
              ) {
                this.resolvedLanguage = a;
                break;
              }
            }
        },
      },
      {
        key: "changeLanguage",
        value: function (t, i) {
          var a = this;
          this.isLanguageChangingTo = t;
          var o = Re();
          this.emit("languageChanging", t);
          var s = function (p) {
              (a.language = p),
                (a.languages = a.services.languageUtils.toResolveHierarchy(p)),
                (a.resolvedLanguage = void 0),
                a.setResolvedLanguage(p);
            },
            c = function (p, d) {
              d
                ? (s(d),
                  a.translator.changeLanguage(d),
                  (a.isLanguageChangingTo = void 0),
                  a.emit("languageChanged", d),
                  a.logger.log("languageChanged", d))
                : (a.isLanguageChangingTo = void 0),
                o.resolve(function () {
                  return a.t.apply(a, arguments);
                }),
                i &&
                  i(p, function () {
                    return a.t.apply(a, arguments);
                  });
            },
            f = function (p) {
              !t && !p && a.services.languageDetector && (p = []);
              var d =
                typeof p == "string"
                  ? p
                  : a.services.languageUtils.getBestMatchFromCodes(p);
              d &&
                (a.language || s(d),
                a.translator.language || a.translator.changeLanguage(d),
                a.services.languageDetector &&
                  a.services.languageDetector.cacheUserLanguage(d)),
                a.loadResources(d, function (D) {
                  c(D, d);
                });
            };
          return (
            !t &&
            this.services.languageDetector &&
            !this.services.languageDetector.async
              ? f(this.services.languageDetector.detect())
              : !t &&
                this.services.languageDetector &&
                this.services.languageDetector.async
              ? this.services.languageDetector.detect(f)
              : f(t),
            o
          );
        },
      },
      {
        key: "getFixedT",
        value: function (t, i, a) {
          var o = this,
            s = function c(f, l) {
              var p;
              if (me(l) !== "object") {
                for (
                  var d = arguments.length,
                    D = new Array(d > 2 ? d - 2 : 0),
                    v = 2;
                  v < d;
                  v++
                )
                  D[v - 2] = arguments[v];
                p = o.options.overloadTranslationOptionHandler(
                  [f, l].concat(D)
                );
              } else p = Q({}, l);
              (p.lng = p.lng || c.lng),
                (p.lngs = p.lngs || c.lngs),
                (p.ns = p.ns || c.ns),
                (p.keyPrefix = p.keyPrefix || a || c.keyPrefix);
              var A = o.options.keySeparator || ".",
                m = p.keyPrefix
                  ? "".concat(p.keyPrefix).concat(A).concat(f)
                  : f;
              return o.t(m, p);
            };
          return (
            typeof t == "string" ? (s.lng = t) : (s.lngs = t),
            (s.ns = i),
            (s.keyPrefix = a),
            s
          );
        },
      },
      {
        key: "t",
        value: function () {
          var t;
          return (
            this.translator &&
            (t = this.translator).translate.apply(t, arguments)
          );
        },
      },
      {
        key: "exists",
        value: function () {
          var t;
          return (
            this.translator && (t = this.translator).exists.apply(t, arguments)
          );
        },
      },
      {
        key: "setDefaultNamespace",
        value: function (t) {
          this.options.defaultNS = t;
        },
      },
      {
        key: "hasLoadedNamespace",
        value: function (t) {
          var i = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          var o = this.resolvedLanguage || this.languages[0],
            s = this.options ? this.options.fallbackLng : !1,
            c = this.languages[this.languages.length - 1];
          if (o.toLowerCase() === "cimode") return !0;
          var f = function (d, D) {
            var v =
              i.services.backendConnector.state["".concat(d, "|").concat(D)];
            return v === -1 || v === 2;
          };
          if (a.precheck) {
            var l = a.precheck(this, f);
            if (l !== void 0) return l;
          }
          return !!(
            this.hasResourceBundle(o, t) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (f(o, t) && (!s || f(c, t)))
          );
        },
      },
      {
        key: "loadNamespaces",
        value: function (t, i) {
          var a = this,
            o = Re();
          return this.options.ns
            ? (typeof t == "string" && (t = [t]),
              t.forEach(function (s) {
                a.options.ns.indexOf(s) < 0 && a.options.ns.push(s);
              }),
              this.loadResources(function (s) {
                o.resolve(), i && i(s);
              }),
              o)
            : (i && i(), Promise.resolve());
        },
      },
      {
        key: "loadLanguages",
        value: function (t, i) {
          var a = Re();
          typeof t == "string" && (t = [t]);
          var o = this.options.preload || [],
            s = t.filter(function (c) {
              return o.indexOf(c) < 0;
            });
          return s.length
            ? ((this.options.preload = o.concat(s)),
              this.loadResources(function (c) {
                a.resolve(), i && i(c);
              }),
              a)
            : (i && i(), Promise.resolve());
        },
      },
      {
        key: "dir",
        value: function (t) {
          if (
            (t ||
              (t =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !t)
          )
            return "rtl";
          var i = [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb",
          ];
          return i.indexOf(
            this.services.languageUtils.getLanguagePartFromCode(t)
          ) > -1 || t.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        },
      },
      {
        key: "cloneInstance",
        value: function () {
          var t = this,
            i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : en,
            o = Q(Q(Q({}, this.options), i), { isClone: !0 }),
            s = new r(o);
          (i.debug !== void 0 || i.prefix !== void 0) &&
            (s.logger = s.logger.clone(i));
          var c = ["store", "services", "language"];
          return (
            c.forEach(function (f) {
              s[f] = t[f];
            }),
            (s.services = Q({}, this.services)),
            (s.services.utils = {
              hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
            }),
            (s.translator = new lr(s.services, s.options)),
            s.translator.on("*", function (f) {
              for (
                var l = arguments.length,
                  p = new Array(l > 1 ? l - 1 : 0),
                  d = 1;
                d < l;
                d++
              )
                p[d - 1] = arguments[d];
              s.emit.apply(s, [f].concat(p));
            }),
            s.init(o, a),
            (s.translator.options = s.options),
            (s.translator.backendConnector.services.utils = {
              hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
            }),
            s
          );
        },
      },
      {
        key: "toJSON",
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]),
    r
  );
})(ce);
ie(tn, "createInstance", function () {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    n = arguments.length > 1 ? arguments[1] : void 0;
  return new tn(e, n);
});
var $ = tn.createInstance();
$.createInstance = tn.createInstance;
$.createInstance;
$.init;
$.loadResources;
$.reloadResources;
$.use;
$.changeLanguage;
$.getFixedT;
$.t;
$.exists;
$.setDefaultNamespace;
$.hasLoadedNamespace;
$.loadNamespaces;
$.loadLanguages;
var zr = [],
  Uu = zr.forEach,
  Hu = zr.slice;
function $u(e) {
  return (
    Uu.call(Hu.call(arguments, 1), function (n) {
      if (n) for (var r in n) e[r] === void 0 && (e[r] = n[r]);
    }),
    e
  );
}
var mr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Vu = function (n, r, u) {
    var t = u || {};
    t.path = t.path || "/";
    var i = encodeURIComponent(r),
      a = "".concat(n, "=").concat(i);
    if (t.maxAge > 0) {
      var o = t.maxAge - 0;
      if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
      a += "; Max-Age=".concat(Math.floor(o));
    }
    if (t.domain) {
      if (!mr.test(t.domain)) throw new TypeError("option domain is invalid");
      a += "; Domain=".concat(t.domain);
    }
    if (t.path) {
      if (!mr.test(t.path)) throw new TypeError("option path is invalid");
      a += "; Path=".concat(t.path);
    }
    if (t.expires) {
      if (typeof t.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      a += "; Expires=".concat(t.expires.toUTCString());
    }
    if (
      (t.httpOnly && (a += "; HttpOnly"),
      t.secure && (a += "; Secure"),
      t.sameSite)
    ) {
      var s =
        typeof t.sameSite == "string" ? t.sameSite.toLowerCase() : t.sameSite;
      switch (s) {
        case !0:
          a += "; SameSite=Strict";
          break;
        case "lax":
          a += "; SameSite=Lax";
          break;
        case "strict":
          a += "; SameSite=Strict";
          break;
        case "none":
          a += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return a;
  },
  vr = {
    create: function (n, r, u, t) {
      var i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      u &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + u * 60 * 1e3)),
        t && (i.domain = t),
        (document.cookie = Vu(n, encodeURIComponent(r), i));
    },
    read: function (n) {
      for (
        var r = "".concat(n, "="), u = document.cookie.split(";"), t = 0;
        t < u.length;
        t++
      ) {
        for (var i = u[t]; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(r) === 0) return i.substring(r.length, i.length);
      }
      return null;
    },
    remove: function (n) {
      this.create(n, "", -1);
    },
  },
  Ku = {
    name: "cookie",
    lookup: function (n) {
      var r;
      if (n.lookupCookie && typeof document < "u") {
        var u = vr.read(n.lookupCookie);
        u && (r = u);
      }
      return r;
    },
    cacheUserLanguage: function (n, r) {
      r.lookupCookie &&
        typeof document < "u" &&
        vr.create(
          r.lookupCookie,
          n,
          r.cookieMinutes,
          r.cookieDomain,
          r.cookieOptions
        );
    },
  },
  Yu = {
    name: "querystring",
    lookup: function (n) {
      var r;
      if (typeof window < "u") {
        var u = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (u = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        for (
          var t = u.substring(1), i = t.split("&"), a = 0;
          a < i.length;
          a++
        ) {
          var o = i[a].indexOf("=");
          if (o > 0) {
            var s = i[a].substring(0, o);
            s === n.lookupQuerystring && (r = i[a].substring(o + 1));
          }
        }
      }
      return r;
    },
  },
  Te = null,
  Ar = function () {
    if (Te !== null) return Te;
    try {
      Te = window !== "undefined" && window.localStorage !== null;
      var n = "i18next.translate.boo";
      window.localStorage.setItem(n, "foo"), window.localStorage.removeItem(n);
    } catch {
      Te = !1;
    }
    return Te;
  },
  qu = {
    name: "localStorage",
    lookup: function (n) {
      var r;
      if (n.lookupLocalStorage && Ar()) {
        var u = window.localStorage.getItem(n.lookupLocalStorage);
        u && (r = u);
      }
      return r;
    },
    cacheUserLanguage: function (n, r) {
      r.lookupLocalStorage &&
        Ar() &&
        window.localStorage.setItem(r.lookupLocalStorage, n);
    },
  },
  je = null,
  Cr = function () {
    if (je !== null) return je;
    try {
      je = window !== "undefined" && window.sessionStorage !== null;
      var n = "i18next.translate.boo";
      window.sessionStorage.setItem(n, "foo"),
        window.sessionStorage.removeItem(n);
    } catch {
      je = !1;
    }
    return je;
  },
  zu = {
    name: "sessionStorage",
    lookup: function (n) {
      var r;
      if (n.lookupSessionStorage && Cr()) {
        var u = window.sessionStorage.getItem(n.lookupSessionStorage);
        u && (r = u);
      }
      return r;
    },
    cacheUserLanguage: function (n, r) {
      r.lookupSessionStorage &&
        Cr() &&
        window.sessionStorage.setItem(r.lookupSessionStorage, n);
    },
  },
  Wu = {
    name: "navigator",
    lookup: function (n) {
      var r = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var u = 0; u < navigator.languages.length; u++)
            r.push(navigator.languages[u]);
        navigator.userLanguage && r.push(navigator.userLanguage),
          navigator.language && r.push(navigator.language);
      }
      return r.length > 0 ? r : void 0;
    },
  },
  Ju = {
    name: "htmlTag",
    lookup: function (n) {
      var r,
        u =
          n.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        u &&
          typeof u.getAttribute == "function" &&
          (r = u.getAttribute("lang")),
        r
      );
    },
  },
  Gu = {
    name: "path",
    lookup: function (n) {
      var r;
      if (typeof window < "u") {
        var u = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (u instanceof Array)
          if (typeof n.lookupFromPathIndex == "number") {
            if (typeof u[n.lookupFromPathIndex] != "string") return;
            r = u[n.lookupFromPathIndex].replace("/", "");
          } else r = u[0].replace("/", "");
      }
      return r;
    },
  },
  Qu = {
    name: "subdomain",
    lookup: function (n) {
      var r =
          typeof n.lookupFromSubdomainIndex == "number"
            ? n.lookupFromSubdomainIndex + 1
            : 1,
        u =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (u) return u[r];
    },
  };
function Xu() {
  return {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
  };
}
var Wr = (function () {
  function e(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    z(this, e),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(n, r);
  }
  return (
    q(e, [
      {
        key: "init",
        value: function (r) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = r),
            (this.options = $u(u, this.options || {}, Xu())),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = t),
            this.addDetector(Ku),
            this.addDetector(Yu),
            this.addDetector(qu),
            this.addDetector(zu),
            this.addDetector(Wu),
            this.addDetector(Ju),
            this.addDetector(Gu),
            this.addDetector(Qu);
        },
      },
      {
        key: "addDetector",
        value: function (r) {
          this.detectors[r.name] = r;
        },
      },
      {
        key: "detect",
        value: function (r) {
          var u = this;
          r || (r = this.options.order);
          var t = [];
          return (
            r.forEach(function (i) {
              if (u.detectors[i]) {
                var a = u.detectors[i].lookup(u.options);
                a && typeof a == "string" && (a = [a]), a && (t = t.concat(a));
              }
            }),
            this.services.languageUtils.getBestMatchFromCodes
              ? t
              : t.length > 0
              ? t[0]
              : null
          );
        },
      },
      {
        key: "cacheUserLanguage",
        value: function (r, u) {
          var t = this;
          u || (u = this.options.caches),
            u &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(r) > -1) ||
                u.forEach(function (i) {
                  t.detectors[i] &&
                    t.detectors[i].cacheUserLanguage(r, t.options);
                }));
        },
      },
    ]),
    e
  );
})();
Wr.type = "languageDetector";
var Jr = [],
  Zu = Jr.forEach,
  ei = Jr.slice;
function ni(e) {
  return (
    Zu.call(ei.call(arguments, 1), function (n) {
      if (n) for (var r in n) e[r] === void 0 && (e[r] = n[r]);
    }),
    e
  );
}
function ri(e, n, r) {
  var u;
  return function () {
    var t = this,
      i = arguments,
      a = function () {
        (u = null), r || e.apply(t, i);
      },
      o = r && !u;
    clearTimeout(u), (u = setTimeout(a, n)), o && e.apply(t, i);
  };
}
function Mn(e, n, r) {
  function u(a) {
    return a && a.indexOf("###") > -1 ? a.replace(/###/g, ".") : a;
  }
  for (
    var t = typeof n != "string" ? [].concat(n) : n.split(".");
    t.length > 1;

  ) {
    if (!e) return {};
    var i = u(t.shift());
    !e[i] && r && (e[i] = new r()), (e = e[i]);
  }
  return e ? { obj: e, k: u(t.shift()) } : {};
}
function Me(e, n, r) {
  var u = Mn(e, n, Object),
    t = u.obj,
    i = u.k;
  if (Array.isArray(t) && isNaN(i))
    throw new Error(
      'Cannot create property "'.concat(i, '" here since object is an array')
    );
  t[i] = r;
}
function ti(e, n, r, u) {
  var t = Mn(e, n, Object),
    i = t.obj,
    a = t.k;
  (i[a] = i[a] || []), u && (i[a] = i[a].concat(r)), u || i[a].push(r);
}
function _r(e, n) {
  var r = Mn(e, n),
    u = r.obj,
    t = r.k;
  if (u) return u[t];
}
function wn(e, n) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = ui(e)) ||
      (n && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var u = 0,
        t = function () {};
      return {
        s: t,
        n: function () {
          return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
        },
        e: function (c) {
          throw c;
        },
        f: t,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i,
    a = !0,
    o = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return (a = c.done), c;
    },
    e: function (c) {
      (o = !0), (i = c);
    },
    f: function () {
      try {
        a || r.return == null || r.return();
      } finally {
        if (o) throw i;
      }
    },
  };
}
function ui(e, n) {
  if (e) {
    if (typeof e == "string") return Fr(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? Fr(e, n)
        : void 0
    );
  }
}
function Fr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, u = Array(n); r < n; r++) u[r] = e[r];
  return u;
}
function ke(e) {
  "@babel/helpers - typeof";
  return (
    (ke =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    ke(e)
  );
}
var ii = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  ai =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
  oi =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  Fn = { Space_Separator: ii, ID_Start: ai, ID_Continue: oi },
  O = {
    isSpaceSeparator: function (n) {
      return typeof n == "string" && Fn.Space_Separator.test(n);
    },
    isIdStartChar: function (n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          n === "$" ||
          n === "_" ||
          Fn.ID_Start.test(n))
      );
    },
    isIdContinueChar: function (n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          (n >= "0" && n <= "9") ||
          n === "$" ||
          n === "_" ||
          n === "‌" ||
          n === "‍" ||
          Fn.ID_Continue.test(n))
      );
    },
    isDigit: function (n) {
      return typeof n == "string" && /[0-9]/.test(n);
    },
    isHexDigit: function (n) {
      return typeof n == "string" && /[0-9A-Fa-f]/.test(n);
    },
  },
  kn,
  U,
  re,
  un,
  fe,
  G,
  I,
  Un,
  Ve,
  si = function (n, r) {
    (kn = String(n)),
      (U = "start"),
      (re = []),
      (un = 0),
      (fe = 1),
      (G = 0),
      (I = void 0),
      (Un = void 0),
      (Ve = void 0);
    do (I = li()), pi[U]();
    while (I.type !== "eof");
    return typeof r == "function" ? Sn({ "": Ve }, "", r) : Ve;
  };
function Sn(e, n, r) {
  var u = e[n];
  if (u != null && ke(u) === "object")
    if (Array.isArray(u))
      for (var t = 0; t < u.length; t++) {
        var i = String(t),
          a = Sn(u, i, r);
        a === void 0
          ? delete u[i]
          : Object.defineProperty(u, i, {
              value: a,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
    else
      for (var o in u) {
        var s = Sn(u, o, r);
        s === void 0
          ? delete u[o]
          : Object.defineProperty(u, o, {
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
  return r.call(e, n, u);
}
var x, E, He, ne, b;
function li() {
  for (x = "default", E = "", He = !1, ne = 1; ; ) {
    b = te();
    var e = Gr[x]();
    if (e) return e;
  }
}
function te() {
  if (kn[un]) return String.fromCodePoint(kn.codePointAt(un));
}
function g() {
  var e = te();
  return (
    e ===
    `
`
      ? (fe++, (G = 0))
      : e
      ? (G += e.length)
      : G++,
    e && (un += e.length),
    e
  );
}
var Gr = {
  default: function () {
    switch (b) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        g();
        return;
      case "/":
        g(), (x = "comment");
        return;
      case void 0:
        return g(), k("eof");
    }
    if (O.isSpaceSeparator(b)) {
      g();
      return;
    }
    return Gr[U]();
  },
  comment: function () {
    switch (b) {
      case "*":
        g(), (x = "multiLineComment");
        return;
      case "/":
        g(), (x = "singleLineComment");
        return;
    }
    throw S(g());
  },
  multiLineComment: function () {
    switch (b) {
      case "*":
        g(), (x = "multiLineCommentAsterisk");
        return;
      case void 0:
        throw S(g());
    }
    g();
  },
  multiLineCommentAsterisk: function () {
    switch (b) {
      case "*":
        g();
        return;
      case "/":
        g(), (x = "default");
        return;
      case void 0:
        throw S(g());
    }
    g(), (x = "multiLineComment");
  },
  singleLineComment: function () {
    switch (b) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        g(), (x = "default");
        return;
      case void 0:
        return g(), k("eof");
    }
    g();
  },
  value: function () {
    switch (b) {
      case "{":
      case "[":
        return k("punctuator", g());
      case "n":
        return g(), ge("ull"), k("null", null);
      case "t":
        return g(), ge("rue"), k("boolean", !0);
      case "f":
        return g(), ge("alse"), k("boolean", !1);
      case "-":
      case "+":
        g() === "-" && (ne = -1), (x = "sign");
        return;
      case ".":
        (E = g()), (x = "decimalPointLeading");
        return;
      case "0":
        (E = g()), (x = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (E = g()), (x = "decimalInteger");
        return;
      case "I":
        return g(), ge("nfinity"), k("numeric", 1 / 0);
      case "N":
        return g(), ge("aN"), k("numeric", NaN);
      case '"':
      case "'":
        (He = g() === '"'), (E = ""), (x = "string");
        return;
    }
    throw S(g());
  },
  identifierNameStartEscape: function () {
    if (b !== "u") throw S(g());
    g();
    var n = Bn();
    switch (n) {
      case "$":
      case "_":
        break;
      default:
        if (!O.isIdStartChar(n)) throw yr();
        break;
    }
    (E += n), (x = "identifierName");
  },
  identifierName: function () {
    switch (b) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        E += g();
        return;
      case "\\":
        g(), (x = "identifierNameEscape");
        return;
    }
    if (O.isIdContinueChar(b)) {
      E += g();
      return;
    }
    return k("identifier", E);
  },
  identifierNameEscape: function () {
    if (b !== "u") throw S(g());
    g();
    var n = Bn();
    switch (n) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!O.isIdContinueChar(n)) throw yr();
        break;
    }
    (E += n), (x = "identifierName");
  },
  sign: function () {
    switch (b) {
      case ".":
        (E = g()), (x = "decimalPointLeading");
        return;
      case "0":
        (E = g()), (x = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (E = g()), (x = "decimalInteger");
        return;
      case "I":
        return g(), ge("nfinity"), k("numeric", ne * (1 / 0));
      case "N":
        return g(), ge("aN"), k("numeric", NaN);
    }
    throw S(g());
  },
  zero: function () {
    switch (b) {
      case ".":
        (E += g()), (x = "decimalPoint");
        return;
      case "e":
      case "E":
        (E += g()), (x = "decimalExponent");
        return;
      case "x":
      case "X":
        (E += g()), (x = "hexadecimal");
        return;
    }
    return k("numeric", ne * 0);
  },
  decimalInteger: function () {
    switch (b) {
      case ".":
        (E += g()), (x = "decimalPoint");
        return;
      case "e":
      case "E":
        (E += g()), (x = "decimalExponent");
        return;
    }
    if (O.isDigit(b)) {
      E += g();
      return;
    }
    return k("numeric", ne * Number(E));
  },
  decimalPointLeading: function () {
    if (O.isDigit(b)) {
      (E += g()), (x = "decimalFraction");
      return;
    }
    throw S(g());
  },
  decimalPoint: function () {
    switch (b) {
      case "e":
      case "E":
        (E += g()), (x = "decimalExponent");
        return;
    }
    if (O.isDigit(b)) {
      (E += g()), (x = "decimalFraction");
      return;
    }
    return k("numeric", ne * Number(E));
  },
  decimalFraction: function () {
    switch (b) {
      case "e":
      case "E":
        (E += g()), (x = "decimalExponent");
        return;
    }
    if (O.isDigit(b)) {
      E += g();
      return;
    }
    return k("numeric", ne * Number(E));
  },
  decimalExponent: function () {
    switch (b) {
      case "+":
      case "-":
        (E += g()), (x = "decimalExponentSign");
        return;
    }
    if (O.isDigit(b)) {
      (E += g()), (x = "decimalExponentInteger");
      return;
    }
    throw S(g());
  },
  decimalExponentSign: function () {
    if (O.isDigit(b)) {
      (E += g()), (x = "decimalExponentInteger");
      return;
    }
    throw S(g());
  },
  decimalExponentInteger: function () {
    if (O.isDigit(b)) {
      E += g();
      return;
    }
    return k("numeric", ne * Number(E));
  },
  hexadecimal: function () {
    if (O.isHexDigit(b)) {
      (E += g()), (x = "hexadecimalInteger");
      return;
    }
    throw S(g());
  },
  hexadecimalInteger: function () {
    if (O.isHexDigit(b)) {
      E += g();
      return;
    }
    return k("numeric", ne * Number(E));
  },
  string: function () {
    switch (b) {
      case "\\":
        g(), (E += ci());
        return;
      case '"':
        if (He) return g(), k("string", E);
        E += g();
        return;
      case "'":
        if (!He) return g(), k("string", E);
        E += g();
        return;
      case `
`:
      case "\r":
        throw S(g());
      case "\u2028":
      case "\u2029":
        di(b);
        break;
      case void 0:
        throw S(g());
    }
    E += g();
  },
  start: function () {
    switch (b) {
      case "{":
      case "[":
        return k("punctuator", g());
    }
    x = "value";
  },
  beforePropertyName: function () {
    switch (b) {
      case "$":
      case "_":
        (E = g()), (x = "identifierName");
        return;
      case "\\":
        g(), (x = "identifierNameStartEscape");
        return;
      case "}":
        return k("punctuator", g());
      case '"':
      case "'":
        (He = g() === '"'), (x = "string");
        return;
    }
    if (O.isIdStartChar(b)) {
      (E += g()), (x = "identifierName");
      return;
    }
    throw S(g());
  },
  afterPropertyName: function () {
    if (b === ":") return k("punctuator", g());
    throw S(g());
  },
  beforePropertyValue: function () {
    x = "value";
  },
  afterPropertyValue: function () {
    switch (b) {
      case ",":
      case "}":
        return k("punctuator", g());
    }
    throw S(g());
  },
  beforeArrayValue: function () {
    if (b === "]") return k("punctuator", g());
    x = "value";
  },
  afterArrayValue: function () {
    switch (b) {
      case ",":
      case "]":
        return k("punctuator", g());
    }
    throw S(g());
  },
  end: function () {
    throw S(g());
  },
};
function k(e, n) {
  return { type: e, value: n, line: fe, column: G };
}
function ge(e) {
  var n = wn(e),
    r;
  try {
    for (n.s(); !(r = n.n()).done; ) {
      var u = r.value,
        t = te();
      if (t !== u) throw S(g());
      g();
    }
  } catch (i) {
    n.e(i);
  } finally {
    n.f();
  }
}
function ci() {
  var e = te();
  switch (e) {
    case "b":
      return g(), "\b";
    case "f":
      return g(), "\f";
    case "n":
      return (
        g(),
        `
`
      );
    case "r":
      return g(), "\r";
    case "t":
      return g(), "	";
    case "v":
      return g(), "\v";
    case "0":
      if ((g(), O.isDigit(te()))) throw S(g());
      return "\0";
    case "x":
      return g(), fi();
    case "u":
      return g(), Bn();
    case `
`:
    case "\u2028":
    case "\u2029":
      return g(), "";
    case "\r":
      return (
        g(),
        te() ===
          `
` && g(),
        ""
      );
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw S(g());
    case void 0:
      throw S(g());
  }
  return g();
}
function fi() {
  var e = "",
    n = te();
  if (!O.isHexDigit(n) || ((e += g()), (n = te()), !O.isHexDigit(n)))
    throw S(g());
  return (e += g()), String.fromCodePoint(parseInt(e, 16));
}
function Bn() {
  for (var e = "", n = 4; n-- > 0; ) {
    var r = te();
    if (!O.isHexDigit(r)) throw S(g());
    e += g();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
var pi = {
  start: function () {
    if (I.type === "eof") throw he();
    yn();
  },
  beforePropertyName: function () {
    switch (I.type) {
      case "identifier":
      case "string":
        (Un = I.value), (U = "afterPropertyName");
        return;
      case "punctuator":
        nn();
        return;
      case "eof":
        throw he();
    }
  },
  afterPropertyName: function () {
    if (I.type === "eof") throw he();
    U = "beforePropertyValue";
  },
  beforePropertyValue: function () {
    if (I.type === "eof") throw he();
    yn();
  },
  beforeArrayValue: function () {
    if (I.type === "eof") throw he();
    if (I.type === "punctuator" && I.value === "]") {
      nn();
      return;
    }
    yn();
  },
  afterPropertyValue: function () {
    if (I.type === "eof") throw he();
    switch (I.value) {
      case ",":
        U = "beforePropertyName";
        return;
      case "}":
        nn();
    }
  },
  afterArrayValue: function () {
    if (I.type === "eof") throw he();
    switch (I.value) {
      case ",":
        U = "beforeArrayValue";
        return;
      case "]":
        nn();
    }
  },
  end: function () {},
};
function yn() {
  var e;
  switch (I.type) {
    case "punctuator":
      switch (I.value) {
        case "{":
          e = {};
          break;
        case "[":
          e = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      e = I.value;
      break;
  }
  if (Ve === void 0) Ve = e;
  else {
    var n = re[re.length - 1];
    Array.isArray(n)
      ? n.push(e)
      : Object.defineProperty(n, Un, {
          value: e,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
  }
  if (e !== null && ke(e) === "object")
    re.push(e),
      Array.isArray(e) ? (U = "beforeArrayValue") : (U = "beforePropertyName");
  else {
    var r = re[re.length - 1];
    r == null
      ? (U = "end")
      : Array.isArray(r)
      ? (U = "afterArrayValue")
      : (U = "afterPropertyValue");
  }
}
function nn() {
  re.pop();
  var e = re[re.length - 1];
  e == null
    ? (U = "end")
    : Array.isArray(e)
    ? (U = "afterArrayValue")
    : (U = "afterPropertyValue");
}
function S(e) {
  return an(
    e === void 0
      ? "JSON5: invalid end of input at ".concat(fe, ":").concat(G)
      : "JSON5: invalid character '"
          .concat(Qr(e), "' at ")
          .concat(fe, ":")
          .concat(G)
  );
}
function he() {
  return an("JSON5: invalid end of input at ".concat(fe, ":").concat(G));
}
function yr() {
  return (
    (G -= 5),
    an("JSON5: invalid identifier character at ".concat(fe, ":").concat(G))
  );
}
function di(e) {
  console.warn(
    "JSON5: '".concat(
      Qr(e),
      "' in strings is not valid ECMAScript; consider escaping"
    )
  );
}
function Qr(e) {
  var n = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  if (n[e]) return n[e];
  if (e < " ") {
    var r = e.charCodeAt(0).toString(16);
    return "\\x" + ("00" + r).substring(r.length);
  }
  return e;
}
function an(e) {
  var n = new SyntaxError(e);
  return (n.lineNumber = fe), (n.columnNumber = G), n;
}
var gi = function (n, r, u) {
    var t = [],
      i = "",
      a,
      o,
      s = "",
      c;
    if (
      (r != null &&
        ke(r) === "object" &&
        !Array.isArray(r) &&
        ((u = r.space), (c = r.quote), (r = r.replacer)),
      typeof r == "function")
    )
      o = r;
    else if (Array.isArray(r)) {
      a = [];
      var f = wn(r),
        l;
      try {
        for (f.s(); !(l = f.n()).done; ) {
          var p = l.value,
            d = void 0;
          typeof p == "string"
            ? (d = p)
            : (typeof p == "number" ||
                p instanceof String ||
                p instanceof Number) &&
              (d = String(p)),
            d !== void 0 && a.indexOf(d) < 0 && a.push(d);
        }
      } catch (C) {
        f.e(C);
      } finally {
        f.f();
      }
    }
    return (
      u instanceof Number
        ? (u = Number(u))
        : u instanceof String && (u = String(u)),
      typeof u == "number"
        ? u > 0 &&
          ((u = Math.min(10, Math.floor(u))), (s = "          ".substr(0, u)))
        : typeof u == "string" && (s = u.substr(0, 10)),
      D("", { "": n })
    );
    function D(C, y) {
      var _ = y[C];
      switch (
        (_ != null &&
          (typeof _.toJSON5 == "function"
            ? (_ = _.toJSON5(C))
            : typeof _.toJSON == "function" && (_ = _.toJSON(C))),
        o && (_ = o.call(y, C, _)),
        _ instanceof Number
          ? (_ = Number(_))
          : _ instanceof String
          ? (_ = String(_))
          : _ instanceof Boolean && (_ = _.valueOf()),
        _)
      ) {
        case null:
          return "null";
        case !0:
          return "true";
        case !1:
          return "false";
      }
      if (typeof _ == "string") return v(_);
      if (typeof _ == "number") return String(_);
      if (ke(_) === "object") return Array.isArray(_) ? h(_) : A(_);
    }
    function v(C) {
      for (
        var y = { "'": 0.1, '"': 0.2 },
          _ = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\v": "\\v",
            "\0": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
          },
          w = "",
          L = 0;
        L < C.length;
        L++
      ) {
        var B = C[L];
        switch (B) {
          case "'":
          case '"':
            y[B]++, (w += B);
            continue;
          case "\0":
            if (O.isDigit(C[L + 1])) {
              w += "\\x00";
              continue;
            }
        }
        if (_[B]) {
          w += _[B];
          continue;
        }
        if (B < " ") {
          var K = B.charCodeAt(0).toString(16);
          w += "\\x" + ("00" + K).substring(K.length);
          continue;
        }
        w += B;
      }
      var T =
        c ||
        Object.keys(y).reduce(function (W, Y) {
          return y[W] < y[Y] ? W : Y;
        });
      return (w = w.replace(new RegExp(T, "g"), _[T])), T + w + T;
    }
    function A(C) {
      if (t.indexOf(C) >= 0)
        throw TypeError("Converting circular structure to JSON5");
      t.push(C);
      var y = i;
      i = i + s;
      var _ = a || Object.keys(C),
        w = [],
        L = wn(_),
        B;
      try {
        for (L.s(); !(B = L.n()).done; ) {
          var K = B.value,
            T = D(K, C);
          if (T !== void 0) {
            var W = m(K) + ":";
            s !== "" && (W += " "), (W += T), w.push(W);
          }
        }
      } catch (Ge) {
        L.e(Ge);
      } finally {
        L.f();
      }
      var Y;
      if (w.length === 0) Y = "{}";
      else {
        var Ae;
        if (s === "") (Ae = w.join(",")), (Y = "{" + Ae + "}");
        else {
          var ae =
            `,
` + i;
          (Ae = w.join(ae)),
            (Y =
              `{
` +
              i +
              Ae +
              `,
` +
              y +
              "}");
        }
      }
      return t.pop(), (i = y), Y;
    }
    function m(C) {
      if (C.length === 0) return v(C);
      var y = String.fromCodePoint(C.codePointAt(0));
      if (!O.isIdStartChar(y)) return v(C);
      for (var _ = y.length; _ < C.length; _++)
        if (!O.isIdContinueChar(String.fromCodePoint(C.codePointAt(_))))
          return v(C);
      return C;
    }
    function h(C) {
      if (t.indexOf(C) >= 0)
        throw TypeError("Converting circular structure to JSON5");
      t.push(C);
      var y = i;
      i = i + s;
      for (var _ = [], w = 0; w < C.length; w++) {
        var L = D(String(w), C);
        _.push(L !== void 0 ? L : "null");
      }
      var B;
      if (_.length === 0) B = "[]";
      else if (s === "") {
        var K = _.join(",");
        B = "[" + K + "]";
      } else {
        var T =
            `,
` + i,
          W = _.join(T);
        B =
          `[
` +
          i +
          W +
          `,
` +
          y +
          "]";
      }
      return t.pop(), (i = y), B;
    }
  },
  hi = { parse: si, stringify: gi },
  Xr = hi;
function pe(e) {
  "@babel/helpers - typeof";
  return (
    (pe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    pe(e)
  );
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function Zr(
  e
) {
  return typeof e > "u" || e === null;
}
function Di(e) {
  return pe(e) === "object" && e !== null;
}
function mi(e) {
  return Array.isArray(e) ? e : Zr(e) ? [] : [e];
}
function vi(e, n) {
  var r, u, t, i;
  if (n)
    for (i = Object.keys(n), r = 0, u = i.length; r < u; r += 1)
      (t = i[r]), (e[t] = n[t]);
  return e;
}
function Ai(e, n) {
  var r = "",
    u;
  for (u = 0; u < n; u += 1) r += e;
  return r;
}
function Ci(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var _i = Zr,
  Fi = Di,
  yi = mi,
  Ei = Ai,
  xi = Ci,
  bi = vi,
  N = {
    isNothing: _i,
    isObject: Fi,
    toArray: yi,
    repeat: Ei,
    isNegativeZero: xi,
    extend: bi,
  };
function et(e, n) {
  var r = "",
    u = e.reason || "(unknown reason)";
  return e.mark
    ? (e.mark.name && (r += 'in "' + e.mark.name + '" '),
      (r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")"),
      !n &&
        e.mark.snippet &&
        (r +=
          `

` + e.mark.snippet),
      u + " " + r)
    : u;
}
function Ke(e, n) {
  Error.call(this),
    (this.name = "YAMLException"),
    (this.reason = e),
    (this.mark = n),
    (this.message = et(this, !1)),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack || "");
}
Ke.prototype = Object.create(Error.prototype);
Ke.prototype.constructor = Ke;
Ke.prototype.toString = function (n) {
  return this.name + ": " + et(this, n);
};
var H = Ke;
function En(e, n, r, u, t) {
  var i = "",
    a = "",
    o = Math.floor(t / 2) - 1;
  return (
    u - n > o && ((i = " ... "), (n = u - o + i.length)),
    r - u > o && ((a = " ..."), (r = u + o - a.length)),
    { str: i + e.slice(n, r).replace(/\t/g, "→") + a, pos: u - n + i.length }
  );
}
function xn(e, n) {
  return N.repeat(" ", n - e.length) + e;
}
function wi(e, n) {
  if (((n = Object.create(n || null)), !e.buffer)) return null;
  n.maxLength || (n.maxLength = 79),
    typeof n.indent != "number" && (n.indent = 1),
    typeof n.linesBefore != "number" && (n.linesBefore = 3),
    typeof n.linesAfter != "number" && (n.linesAfter = 2);
  for (
    var r = /\r?\n|\r|\0/g, u = [0], t = [], i, a = -1;
    (i = r.exec(e.buffer));

  )
    t.push(i.index),
      u.push(i.index + i[0].length),
      e.position <= i.index && a < 0 && (a = u.length - 2);
  a < 0 && (a = u.length - 1);
  var o = "",
    s,
    c,
    f = Math.min(e.line + n.linesAfter, t.length).toString().length,
    l = n.maxLength - (n.indent + f + 3);
  for (s = 1; s <= n.linesBefore && !(a - s < 0); s++)
    (c = En(e.buffer, u[a - s], t[a - s], e.position - (u[a] - u[a - s]), l)),
      (o =
        N.repeat(" ", n.indent) +
        xn((e.line - s + 1).toString(), f) +
        " | " +
        c.str +
        `
` +
        o);
  for (
    c = En(e.buffer, u[a], t[a], e.position, l),
      o +=
        N.repeat(" ", n.indent) +
        xn((e.line + 1).toString(), f) +
        " | " +
        c.str +
        `
`,
      o +=
        N.repeat("-", n.indent + f + 3 + c.pos) +
        `^
`,
      s = 1;
    s <= n.linesAfter && !(a + s >= t.length);
    s++
  )
    (c = En(e.buffer, u[a + s], t[a + s], e.position - (u[a] - u[a + s]), l)),
      (o +=
        N.repeat(" ", n.indent) +
        xn((e.line + s + 1).toString(), f) +
        " | " +
        c.str +
        `
`);
  return o.replace(/\n$/, "");
}
var ki = wi,
  Si = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases",
  ],
  Bi = ["scalar", "sequence", "mapping"];
function Oi(e) {
  var n = {};
  return (
    e !== null &&
      Object.keys(e).forEach(function (r) {
        e[r].forEach(function (u) {
          n[String(u)] = r;
        });
      }),
    n
  );
}
function Li(e, n) {
  if (
    ((n = n || {}),
    Object.keys(n).forEach(function (r) {
      if (Si.indexOf(r) === -1)
        throw new H(
          'Unknown option "' +
            r +
            '" is met in definition of "' +
            e +
            '" YAML type.'
        );
    }),
    (this.options = n),
    (this.tag = e),
    (this.kind = n.kind || null),
    (this.resolve =
      n.resolve ||
      function () {
        return !0;
      }),
    (this.construct =
      n.construct ||
      function (r) {
        return r;
      }),
    (this.instanceOf = n.instanceOf || null),
    (this.predicate = n.predicate || null),
    (this.represent = n.represent || null),
    (this.representName = n.representName || null),
    (this.defaultStyle = n.defaultStyle || null),
    (this.multi = n.multi || !1),
    (this.styleAliases = Oi(n.styleAliases || null)),
    Bi.indexOf(this.kind) === -1)
  )
    throw new H(
      'Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.'
    );
}
var R = Li;
function Er(e, n) {
  var r = [];
  return (
    e[n].forEach(function (u) {
      var t = r.length;
      r.forEach(function (i, a) {
        i.tag === u.tag && i.kind === u.kind && i.multi === u.multi && (t = a);
      }),
        (r[t] = u);
    }),
    r
  );
}
function Pi() {
  var e = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: { scalar: [], sequence: [], mapping: [], fallback: [] },
    },
    n,
    r;
  function u(t) {
    t.multi
      ? (e.multi[t.kind].push(t), e.multi.fallback.push(t))
      : (e[t.kind][t.tag] = e.fallback[t.tag] = t);
  }
  for (n = 0, r = arguments.length; n < r; n += 1) arguments[n].forEach(u);
  return e;
}
function On(e) {
  return this.extend(e);
}
On.prototype.extend = function (n) {
  var r = [],
    u = [];
  if (n instanceof R) u.push(n);
  else if (Array.isArray(n)) u = u.concat(n);
  else if (n && (Array.isArray(n.implicit) || Array.isArray(n.explicit)))
    n.implicit && (r = r.concat(n.implicit)),
      n.explicit && (u = u.concat(n.explicit));
  else
    throw new H(
      "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })"
    );
  r.forEach(function (i) {
    if (!(i instanceof R))
      throw new H(
        "Specified list of YAML types (or a single Type object) contains a non-Type object."
      );
    if (i.loadKind && i.loadKind !== "scalar")
      throw new H(
        "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
      );
    if (i.multi)
      throw new H(
        "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit."
      );
  }),
    u.forEach(function (i) {
      if (!(i instanceof R))
        throw new H(
          "Specified list of YAML types (or a single Type object) contains a non-Type object."
        );
    });
  var t = Object.create(On.prototype);
  return (
    (t.implicit = (this.implicit || []).concat(r)),
    (t.explicit = (this.explicit || []).concat(u)),
    (t.compiledImplicit = Er(t, "implicit")),
    (t.compiledExplicit = Er(t, "explicit")),
    (t.compiledTypeMap = Pi(t.compiledImplicit, t.compiledExplicit)),
    t
  );
};
var nt = On,
  rt = new R("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function (n) {
      return n !== null ? n : "";
    },
  }),
  tt = new R("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function (n) {
      return n !== null ? n : [];
    },
  }),
  ut = new R("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function (n) {
      return n !== null ? n : {};
    },
  }),
  it = new nt({ explicit: [rt, tt, ut] });
function Ni(e) {
  if (e === null) return !0;
  var n = e.length;
  return (
    (n === 1 && e === "~") ||
    (n === 4 && (e === "null" || e === "Null" || e === "NULL"))
  );
}
function Ii() {
  return null;
}
function Ri(e) {
  return e === null;
}
var at = new R("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Ni,
  construct: Ii,
  predicate: Ri,
  represent: {
    canonical: function () {
      return "~";
    },
    lowercase: function () {
      return "null";
    },
    uppercase: function () {
      return "NULL";
    },
    camelcase: function () {
      return "Null";
    },
    empty: function () {
      return "";
    },
  },
  defaultStyle: "lowercase",
});
function Ti(e) {
  if (e === null) return !1;
  var n = e.length;
  return (
    (n === 4 && (e === "true" || e === "True" || e === "TRUE")) ||
    (n === 5 && (e === "false" || e === "False" || e === "FALSE"))
  );
}
function ji(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function Mi(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var ot = new R("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Ti,
  construct: ji,
  predicate: Mi,
  represent: {
    lowercase: function (n) {
      return n ? "true" : "false";
    },
    uppercase: function (n) {
      return n ? "TRUE" : "FALSE";
    },
    camelcase: function (n) {
      return n ? "True" : "False";
    },
  },
  defaultStyle: "lowercase",
});
function Ui(e) {
  return (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102);
}
function Hi(e) {
  return 48 <= e && e <= 55;
}
function $i(e) {
  return 48 <= e && e <= 57;
}
function Vi(e) {
  if (e === null) return !1;
  var n = e.length,
    r = 0,
    u = !1,
    t;
  if (!n) return !1;
  if (((t = e[r]), (t === "-" || t === "+") && (t = e[++r]), t === "0")) {
    if (r + 1 === n) return !0;
    if (((t = e[++r]), t === "b")) {
      for (r++; r < n; r++)
        if (((t = e[r]), t !== "_")) {
          if (t !== "0" && t !== "1") return !1;
          u = !0;
        }
      return u && t !== "_";
    }
    if (t === "x") {
      for (r++; r < n; r++)
        if (((t = e[r]), t !== "_")) {
          if (!Ui(e.charCodeAt(r))) return !1;
          u = !0;
        }
      return u && t !== "_";
    }
    if (t === "o") {
      for (r++; r < n; r++)
        if (((t = e[r]), t !== "_")) {
          if (!Hi(e.charCodeAt(r))) return !1;
          u = !0;
        }
      return u && t !== "_";
    }
  }
  if (t === "_") return !1;
  for (; r < n; r++)
    if (((t = e[r]), t !== "_")) {
      if (!$i(e.charCodeAt(r))) return !1;
      u = !0;
    }
  return !(!u || t === "_");
}
function Ki(e) {
  var n = e,
    r = 1,
    u;
  if (
    (n.indexOf("_") !== -1 && (n = n.replace(/_/g, "")),
    (u = n[0]),
    (u === "-" || u === "+") &&
      (u === "-" && (r = -1), (n = n.slice(1)), (u = n[0])),
    n === "0")
  )
    return 0;
  if (u === "0") {
    if (n[1] === "b") return r * parseInt(n.slice(2), 2);
    if (n[1] === "x") return r * parseInt(n.slice(2), 16);
    if (n[1] === "o") return r * parseInt(n.slice(2), 8);
  }
  return r * parseInt(n, 10);
}
function Yi(e) {
  return (
    Object.prototype.toString.call(e) === "[object Number]" &&
    e % 1 === 0 &&
    !N.isNegativeZero(e)
  );
}
var st = new R("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: Vi,
    construct: Ki,
    predicate: Yi,
    represent: {
      binary: function (n) {
        return n >= 0 ? "0b" + n.toString(2) : "-0b" + n.toString(2).slice(1);
      },
      octal: function (n) {
        return n >= 0 ? "0o" + n.toString(8) : "-0o" + n.toString(8).slice(1);
      },
      decimal: function (n) {
        return n.toString(10);
      },
      hexadecimal: function (n) {
        return n >= 0
          ? "0x" + n.toString(16).toUpperCase()
          : "-0x" + n.toString(16).toUpperCase().slice(1);
      },
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"],
    },
  }),
  qi = new RegExp(
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
function zi(e) {
  return !(e === null || !qi.test(e) || e[e.length - 1] === "_");
}
function Wi(e) {
  var n, r;
  return (
    (n = e.replace(/_/g, "").toLowerCase()),
    (r = n[0] === "-" ? -1 : 1),
    "+-".indexOf(n[0]) >= 0 && (n = n.slice(1)),
    n === ".inf"
      ? r === 1
        ? Number.POSITIVE_INFINITY
        : Number.NEGATIVE_INFINITY
      : n === ".nan"
      ? NaN
      : r * parseFloat(n, 10)
  );
}
var Ji = /^[-+]?[0-9]+e/;
function Gi(e, n) {
  var r;
  if (isNaN(e))
    switch (n) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (n) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (n) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (N.isNegativeZero(e)) return "-0.0";
  return (r = e.toString(10)), Ji.test(r) ? r.replace("e", ".e") : r;
}
function Qi(e) {
  return (
    Object.prototype.toString.call(e) === "[object Number]" &&
    (e % 1 !== 0 || N.isNegativeZero(e))
  );
}
var lt = new R("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: zi,
    construct: Wi,
    predicate: Qi,
    represent: Gi,
    defaultStyle: "lowercase",
  }),
  ct = it.extend({ implicit: [at, ot, st, lt] }),
  ft = ct,
  pt = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
  dt = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
function Xi(e) {
  return e === null ? !1 : pt.exec(e) !== null || dt.exec(e) !== null;
}
function Zi(e) {
  var n,
    r,
    u,
    t,
    i,
    a,
    o,
    s = 0,
    c = null,
    f,
    l,
    p;
  if (((n = pt.exec(e)), n === null && (n = dt.exec(e)), n === null))
    throw new Error("Date resolve error");
  if (((r = +n[1]), (u = +n[2] - 1), (t = +n[3]), !n[4]))
    return new Date(Date.UTC(r, u, t));
  if (((i = +n[4]), (a = +n[5]), (o = +n[6]), n[7])) {
    for (s = n[7].slice(0, 3); s.length < 3; ) s += "0";
    s = +s;
  }
  return (
    n[9] &&
      ((f = +n[10]),
      (l = +(n[11] || 0)),
      (c = (f * 60 + l) * 6e4),
      n[9] === "-" && (c = -c)),
    (p = new Date(Date.UTC(r, u, t, i, a, o, s))),
    c && p.setTime(p.getTime() - c),
    p
  );
}
function ea(e) {
  return e.toISOString();
}
var gt = new R("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Xi,
  construct: Zi,
  instanceOf: Date,
  represent: ea,
});
function na(e) {
  return e === "<<" || e === null;
}
var ht = new R("tag:yaml.org,2002:merge", { kind: "scalar", resolve: na }),
  Hn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function ra(e) {
  if (e === null) return !1;
  var n,
    r,
    u = 0,
    t = e.length,
    i = Hn;
  for (r = 0; r < t; r++)
    if (((n = i.indexOf(e.charAt(r))), !(n > 64))) {
      if (n < 0) return !1;
      u += 6;
    }
  return u % 8 === 0;
}
function ta(e) {
  var n,
    r,
    u = e.replace(/[\r\n=]/g, ""),
    t = u.length,
    i = Hn,
    a = 0,
    o = [];
  for (n = 0; n < t; n++)
    n % 4 === 0 &&
      n &&
      (o.push((a >> 16) & 255), o.push((a >> 8) & 255), o.push(a & 255)),
      (a = (a << 6) | i.indexOf(u.charAt(n)));
  return (
    (r = (t % 4) * 6),
    r === 0
      ? (o.push((a >> 16) & 255), o.push((a >> 8) & 255), o.push(a & 255))
      : r === 18
      ? (o.push((a >> 10) & 255), o.push((a >> 2) & 255))
      : r === 12 && o.push((a >> 4) & 255),
    new Uint8Array(o)
  );
}
function ua(e) {
  var n = "",
    r = 0,
    u,
    t,
    i = e.length,
    a = Hn;
  for (u = 0; u < i; u++)
    u % 3 === 0 &&
      u &&
      ((n += a[(r >> 18) & 63]),
      (n += a[(r >> 12) & 63]),
      (n += a[(r >> 6) & 63]),
      (n += a[r & 63])),
      (r = (r << 8) + e[u]);
  return (
    (t = i % 3),
    t === 0
      ? ((n += a[(r >> 18) & 63]),
        (n += a[(r >> 12) & 63]),
        (n += a[(r >> 6) & 63]),
        (n += a[r & 63]))
      : t === 2
      ? ((n += a[(r >> 10) & 63]),
        (n += a[(r >> 4) & 63]),
        (n += a[(r << 2) & 63]),
        (n += a[64]))
      : t === 1 &&
        ((n += a[(r >> 2) & 63]),
        (n += a[(r << 4) & 63]),
        (n += a[64]),
        (n += a[64])),
    n
  );
}
function ia(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var Dt = new R("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: ra,
    construct: ta,
    predicate: ia,
    represent: ua,
  }),
  aa = Object.prototype.hasOwnProperty,
  oa = Object.prototype.toString;
function sa(e) {
  if (e === null) return !0;
  var n = [],
    r,
    u,
    t,
    i,
    a,
    o = e;
  for (r = 0, u = o.length; r < u; r += 1) {
    if (((t = o[r]), (a = !1), oa.call(t) !== "[object Object]")) return !1;
    for (i in t)
      if (aa.call(t, i))
        if (!a) a = !0;
        else return !1;
    if (!a) return !1;
    if (n.indexOf(i) === -1) n.push(i);
    else return !1;
  }
  return !0;
}
function la(e) {
  return e !== null ? e : [];
}
var mt = new R("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: sa,
    construct: la,
  }),
  ca = Object.prototype.toString;
function fa(e) {
  if (e === null) return !0;
  var n,
    r,
    u,
    t,
    i,
    a = e;
  for (i = new Array(a.length), n = 0, r = a.length; n < r; n += 1) {
    if (
      ((u = a[n]),
      ca.call(u) !== "[object Object]" ||
        ((t = Object.keys(u)), t.length !== 1))
    )
      return !1;
    i[n] = [t[0], u[t[0]]];
  }
  return !0;
}
function pa(e) {
  if (e === null) return [];
  var n,
    r,
    u,
    t,
    i,
    a = e;
  for (i = new Array(a.length), n = 0, r = a.length; n < r; n += 1)
    (u = a[n]), (t = Object.keys(u)), (i[n] = [t[0], u[t[0]]]);
  return i;
}
var vt = new R("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: fa,
    construct: pa,
  }),
  da = Object.prototype.hasOwnProperty;
function ga(e) {
  if (e === null) return !0;
  var n,
    r = e;
  for (n in r) if (da.call(r, n) && r[n] !== null) return !1;
  return !0;
}
function ha(e) {
  return e !== null ? e : {};
}
var At = new R("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: ga,
    construct: ha,
  }),
  $n = ft.extend({ implicit: [gt, ht], explicit: [Dt, mt, vt, At] }),
  de = Object.prototype.hasOwnProperty,
  on = 1,
  Ct = 2,
  _t = 3,
  sn = 4,
  bn = 1,
  Da = 2,
  xr = 3,
  ma =
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  va = /[\x85\u2028\u2029]/,
  Aa = /[,\[\]\{\}]/,
  Ft = /^(?:!|!!|![a-z\-]+!)$/i,
  yt =
    /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function br(e) {
  return Object.prototype.toString.call(e);
}
function ee(e) {
  return e === 10 || e === 13;
}
function ve(e) {
  return e === 9 || e === 32;
}
function V(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function xe(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Ca(e) {
  var n;
  return 48 <= e && e <= 57
    ? e - 48
    : ((n = e | 32), 97 <= n && n <= 102 ? n - 97 + 10 : -1);
}
function _a(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Fa(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function wr(e) {
  return e === 48
    ? "\0"
    : e === 97
    ? "\x07"
    : e === 98
    ? "\b"
    : e === 116 || e === 9
    ? "	"
    : e === 110
    ? `
`
    : e === 118
    ? "\v"
    : e === 102
    ? "\f"
    : e === 114
    ? "\r"
    : e === 101
    ? "\x1B"
    : e === 32
    ? " "
    : e === 34
    ? '"'
    : e === 47
    ? "/"
    : e === 92
    ? "\\"
    : e === 78
    ? ""
    : e === 95
    ? " "
    : e === 76
    ? "\u2028"
    : e === 80
    ? "\u2029"
    : "";
}
function ya(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : String.fromCharCode(
        ((e - 65536) >> 10) + 55296,
        ((e - 65536) & 1023) + 56320
      );
}
var Et = new Array(256),
  xt = new Array(256);
for (var ye = 0; ye < 256; ye++) (Et[ye] = wr(ye) ? 1 : 0), (xt[ye] = wr(ye));
function Ea(e, n) {
  (this.input = e),
    (this.filename = n.filename || null),
    (this.schema = n.schema || $n),
    (this.onWarning = n.onWarning || null),
    (this.legacy = n.legacy || !1),
    (this.json = n.json || !1),
    (this.listener = n.listener || null),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.typeMap = this.schema.compiledTypeMap),
    (this.length = e.length),
    (this.position = 0),
    (this.line = 0),
    (this.lineStart = 0),
    (this.lineIndent = 0),
    (this.firstTabInLine = -1),
    (this.documents = []);
}
function bt(e, n) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart,
  };
  return (r.snippet = ki(r)), new H(n, r);
}
function F(e, n) {
  throw bt(e, n);
}
function ln(e, n) {
  e.onWarning && e.onWarning.call(null, bt(e, n));
}
var kr = {
  YAML: function (n, r, u) {
    var t, i, a;
    n.version !== null && F(n, "duplication of %YAML directive"),
      u.length !== 1 && F(n, "YAML directive accepts exactly one argument"),
      (t = /^([0-9]+)\.([0-9]+)$/.exec(u[0])),
      t === null && F(n, "ill-formed argument of the YAML directive"),
      (i = parseInt(t[1], 10)),
      (a = parseInt(t[2], 10)),
      i !== 1 && F(n, "unacceptable YAML version of the document"),
      (n.version = u[0]),
      (n.checkLineBreaks = a < 2),
      a !== 1 && a !== 2 && ln(n, "unsupported YAML version of the document");
  },
  TAG: function (n, r, u) {
    var t, i;
    u.length !== 2 && F(n, "TAG directive accepts exactly two arguments"),
      (t = u[0]),
      (i = u[1]),
      Ft.test(t) ||
        F(n, "ill-formed tag handle (first argument) of the TAG directive"),
      de.call(n.tagMap, t) &&
        F(
          n,
          'there is a previously declared suffix for "' + t + '" tag handle'
        ),
      yt.test(i) ||
        F(n, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      F(n, "tag prefix is malformed: " + i);
    }
    n.tagMap[t] = i;
  },
};
function se(e, n, r, u) {
  var t, i, a, o;
  if (n < r) {
    if (((o = e.input.slice(n, r)), u))
      for (t = 0, i = o.length; t < i; t += 1)
        (a = o.charCodeAt(t)),
          a === 9 ||
            (32 <= a && a <= 1114111) ||
            F(e, "expected valid JSON character");
    else ma.test(o) && F(e, "the stream contains non-printable characters");
    e.result += o;
  }
}
function Sr(e, n, r, u) {
  var t, i, a, o;
  for (
    N.isObject(r) ||
      F(e, "cannot merge mappings; the provided source object is unacceptable"),
      t = Object.keys(r),
      a = 0,
      o = t.length;
    a < o;
    a += 1
  )
    (i = t[a]), de.call(n, i) || ((n[i] = r[i]), (u[i] = !0));
}
function be(e, n, r, u, t, i, a, o, s) {
  var c, f;
  if (Array.isArray(t))
    for (t = Array.prototype.slice.call(t), c = 0, f = t.length; c < f; c += 1)
      Array.isArray(t[c]) &&
        F(e, "nested arrays are not supported inside keys"),
        pe(t) === "object" &&
          br(t[c]) === "[object Object]" &&
          (t[c] = "[object Object]");
  if (
    (pe(t) === "object" &&
      br(t) === "[object Object]" &&
      (t = "[object Object]"),
    (t = String(t)),
    n === null && (n = {}),
    u === "tag:yaml.org,2002:merge")
  )
    if (Array.isArray(i))
      for (c = 0, f = i.length; c < f; c += 1) Sr(e, n, i[c], r);
    else Sr(e, n, i, r);
  else
    !e.json &&
      !de.call(r, t) &&
      de.call(n, t) &&
      ((e.line = a || e.line),
      (e.lineStart = o || e.lineStart),
      (e.position = s || e.position),
      F(e, "duplicated mapping key")),
      t === "__proto__"
        ? Object.defineProperty(n, t, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: i,
          })
        : (n[t] = i),
      delete r[t];
  return n;
}
function Vn(e) {
  var n;
  (n = e.input.charCodeAt(e.position)),
    n === 10
      ? e.position++
      : n === 13
      ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++)
      : F(e, "a line break is expected"),
    (e.line += 1),
    (e.lineStart = e.position),
    (e.firstTabInLine = -1);
}
function P(e, n, r) {
  for (var u = 0, t = e.input.charCodeAt(e.position); t !== 0; ) {
    for (; ve(t); )
      t === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position),
        (t = e.input.charCodeAt(++e.position));
    if (n && t === 35)
      do t = e.input.charCodeAt(++e.position);
      while (t !== 10 && t !== 13 && t !== 0);
    if (ee(t))
      for (
        Vn(e), t = e.input.charCodeAt(e.position), u++, e.lineIndent = 0;
        t === 32;

      )
        e.lineIndent++, (t = e.input.charCodeAt(++e.position));
    else break;
  }
  return (
    r !== -1 && u !== 0 && e.lineIndent < r && ln(e, "deficient indentation"), u
  );
}
function Dn(e) {
  var n = e.position,
    r;
  return (
    (r = e.input.charCodeAt(n)),
    !!(
      (r === 45 || r === 46) &&
      r === e.input.charCodeAt(n + 1) &&
      r === e.input.charCodeAt(n + 2) &&
      ((n += 3), (r = e.input.charCodeAt(n)), r === 0 || V(r))
    )
  );
}
function Kn(e, n) {
  n === 1
    ? (e.result += " ")
    : n > 1 &&
      (e.result += N.repeat(
        `
`,
        n - 1
      ));
}
function xa(e, n, r) {
  var u,
    t,
    i,
    a,
    o,
    s,
    c,
    f,
    l = e.kind,
    p = e.result,
    d;
  if (
    ((d = e.input.charCodeAt(e.position)),
    V(d) ||
      xe(d) ||
      d === 35 ||
      d === 38 ||
      d === 42 ||
      d === 33 ||
      d === 124 ||
      d === 62 ||
      d === 39 ||
      d === 34 ||
      d === 37 ||
      d === 64 ||
      d === 96 ||
      ((d === 63 || d === 45) &&
        ((t = e.input.charCodeAt(e.position + 1)), V(t) || (r && xe(t)))))
  )
    return !1;
  for (
    e.kind = "scalar", e.result = "", i = a = e.position, o = !1;
    d !== 0;

  ) {
    if (d === 58) {
      if (((t = e.input.charCodeAt(e.position + 1)), V(t) || (r && xe(t))))
        break;
    } else if (d === 35) {
      if (((u = e.input.charCodeAt(e.position - 1)), V(u))) break;
    } else {
      if ((e.position === e.lineStart && Dn(e)) || (r && xe(d))) break;
      if (ee(d))
        if (
          ((s = e.line),
          (c = e.lineStart),
          (f = e.lineIndent),
          P(e, !1, -1),
          e.lineIndent >= n)
        ) {
          (o = !0), (d = e.input.charCodeAt(e.position));
          continue;
        } else {
          (e.position = a), (e.line = s), (e.lineStart = c), (e.lineIndent = f);
          break;
        }
    }
    o && (se(e, i, a, !1), Kn(e, e.line - s), (i = a = e.position), (o = !1)),
      ve(d) || (a = e.position + 1),
      (d = e.input.charCodeAt(++e.position));
  }
  return se(e, i, a, !1), e.result ? !0 : ((e.kind = l), (e.result = p), !1);
}
function ba(e, n) {
  var r, u, t;
  if (((r = e.input.charCodeAt(e.position)), r !== 39)) return !1;
  for (
    e.kind = "scalar", e.result = "", e.position++, u = t = e.position;
    (r = e.input.charCodeAt(e.position)) !== 0;

  )
    if (r === 39)
      if (
        (se(e, u, e.position, !0),
        (r = e.input.charCodeAt(++e.position)),
        r === 39)
      )
        (u = e.position), e.position++, (t = e.position);
      else return !0;
    else
      ee(r)
        ? (se(e, u, t, !0), Kn(e, P(e, !1, n)), (u = t = e.position))
        : e.position === e.lineStart && Dn(e)
        ? F(e, "unexpected end of the document within a single quoted scalar")
        : (e.position++, (t = e.position));
  F(e, "unexpected end of the stream within a single quoted scalar");
}
function wa(e, n) {
  var r, u, t, i, a, o;
  if (((o = e.input.charCodeAt(e.position)), o !== 34)) return !1;
  for (
    e.kind = "scalar", e.result = "", e.position++, r = u = e.position;
    (o = e.input.charCodeAt(e.position)) !== 0;

  ) {
    if (o === 34) return se(e, r, e.position, !0), e.position++, !0;
    if (o === 92) {
      if (
        (se(e, r, e.position, !0),
        (o = e.input.charCodeAt(++e.position)),
        ee(o))
      )
        P(e, !1, n);
      else if (o < 256 && Et[o]) (e.result += xt[o]), e.position++;
      else if ((a = _a(o)) > 0) {
        for (t = a, i = 0; t > 0; t--)
          (o = e.input.charCodeAt(++e.position)),
            (a = Ca(o)) >= 0
              ? (i = (i << 4) + a)
              : F(e, "expected hexadecimal character");
        (e.result += ya(i)), e.position++;
      } else F(e, "unknown escape sequence");
      r = u = e.position;
    } else
      ee(o)
        ? (se(e, r, u, !0), Kn(e, P(e, !1, n)), (r = u = e.position))
        : e.position === e.lineStart && Dn(e)
        ? F(e, "unexpected end of the document within a double quoted scalar")
        : (e.position++, (u = e.position));
  }
  F(e, "unexpected end of the stream within a double quoted scalar");
}
function ka(e, n) {
  var r = !0,
    u,
    t,
    i,
    a = e.tag,
    o,
    s = e.anchor,
    c,
    f,
    l,
    p,
    d,
    D = Object.create(null),
    v,
    A,
    m,
    h;
  if (((h = e.input.charCodeAt(e.position)), h === 91))
    (f = 93), (d = !1), (o = []);
  else if (h === 123) (f = 125), (d = !0), (o = {});
  else return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = o),
      h = e.input.charCodeAt(++e.position);
    h !== 0;

  ) {
    if ((P(e, !0, n), (h = e.input.charCodeAt(e.position)), h === f))
      return (
        e.position++,
        (e.tag = a),
        (e.anchor = s),
        (e.kind = d ? "mapping" : "sequence"),
        (e.result = o),
        !0
      );
    r
      ? h === 44 && F(e, "expected the node content, but found ','")
      : F(e, "missed comma between flow collection entries"),
      (A = v = m = null),
      (l = p = !1),
      h === 63 &&
        ((c = e.input.charCodeAt(e.position + 1)),
        V(c) && ((l = p = !0), e.position++, P(e, !0, n))),
      (u = e.line),
      (t = e.lineStart),
      (i = e.position),
      Se(e, n, on, !1, !0),
      (A = e.tag),
      (v = e.result),
      P(e, !0, n),
      (h = e.input.charCodeAt(e.position)),
      (p || e.line === u) &&
        h === 58 &&
        ((l = !0),
        (h = e.input.charCodeAt(++e.position)),
        P(e, !0, n),
        Se(e, n, on, !1, !0),
        (m = e.result)),
      d
        ? be(e, o, D, A, v, m, u, t, i)
        : l
        ? o.push(be(e, null, D, A, v, m, u, t, i))
        : o.push(v),
      P(e, !0, n),
      (h = e.input.charCodeAt(e.position)),
      h === 44 ? ((r = !0), (h = e.input.charCodeAt(++e.position))) : (r = !1);
  }
  F(e, "unexpected end of the stream within a flow collection");
}
function Sa(e, n) {
  var r,
    u,
    t = bn,
    i = !1,
    a = !1,
    o = n,
    s = 0,
    c = !1,
    f,
    l;
  if (((l = e.input.charCodeAt(e.position)), l === 124)) u = !1;
  else if (l === 62) u = !0;
  else return !1;
  for (e.kind = "scalar", e.result = ""; l !== 0; )
    if (((l = e.input.charCodeAt(++e.position)), l === 43 || l === 45))
      bn === t
        ? (t = l === 43 ? xr : Da)
        : F(e, "repeat of a chomping mode identifier");
    else if ((f = Fa(l)) >= 0)
      f === 0
        ? F(
            e,
            "bad explicit indentation width of a block scalar; it cannot be less than one"
          )
        : a
        ? F(e, "repeat of an indentation width identifier")
        : ((o = n + f - 1), (a = !0));
    else break;
  if (ve(l)) {
    do l = e.input.charCodeAt(++e.position);
    while (ve(l));
    if (l === 35)
      do l = e.input.charCodeAt(++e.position);
      while (!ee(l) && l !== 0);
  }
  for (; l !== 0; ) {
    for (
      Vn(e), e.lineIndent = 0, l = e.input.charCodeAt(e.position);
      (!a || e.lineIndent < o) && l === 32;

    )
      e.lineIndent++, (l = e.input.charCodeAt(++e.position));
    if ((!a && e.lineIndent > o && (o = e.lineIndent), ee(l))) {
      s++;
      continue;
    }
    if (e.lineIndent < o) {
      t === xr
        ? (e.result += N.repeat(
            `
`,
            i ? 1 + s : s
          ))
        : t === bn &&
          i &&
          (e.result += `
`);
      break;
    }
    for (
      u
        ? ve(l)
          ? ((c = !0),
            (e.result += N.repeat(
              `
`,
              i ? 1 + s : s
            )))
          : c
          ? ((c = !1),
            (e.result += N.repeat(
              `
`,
              s + 1
            )))
          : s === 0
          ? i && (e.result += " ")
          : (e.result += N.repeat(
              `
`,
              s
            ))
        : (e.result += N.repeat(
            `
`,
            i ? 1 + s : s
          )),
        i = !0,
        a = !0,
        s = 0,
        r = e.position;
      !ee(l) && l !== 0;

    )
      l = e.input.charCodeAt(++e.position);
    se(e, r, e.position, !1);
  }
  return !0;
}
function Br(e, n) {
  var r,
    u = e.tag,
    t = e.anchor,
    i = [],
    a,
    o = !1,
    s;
  if (e.firstTabInLine !== -1) return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = i),
      s = e.input.charCodeAt(e.position);
    s !== 0 &&
    (e.firstTabInLine !== -1 &&
      ((e.position = e.firstTabInLine),
      F(e, "tab characters must not be used in indentation")),
    !(s !== 45 || ((a = e.input.charCodeAt(e.position + 1)), !V(a))));

  ) {
    if (((o = !0), e.position++, P(e, !0, -1) && e.lineIndent <= n)) {
      i.push(null), (s = e.input.charCodeAt(e.position));
      continue;
    }
    if (
      ((r = e.line),
      Se(e, n, _t, !1, !0),
      i.push(e.result),
      P(e, !0, -1),
      (s = e.input.charCodeAt(e.position)),
      (e.line === r || e.lineIndent > n) && s !== 0)
    )
      F(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < n) break;
  }
  return o
    ? ((e.tag = u), (e.anchor = t), (e.kind = "sequence"), (e.result = i), !0)
    : !1;
}
function Ba(e, n, r) {
  var u,
    t,
    i,
    a,
    o,
    s,
    c = e.tag,
    f = e.anchor,
    l = {},
    p = Object.create(null),
    d = null,
    D = null,
    v = null,
    A = !1,
    m = !1,
    h;
  if (e.firstTabInLine !== -1) return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = l),
      h = e.input.charCodeAt(e.position);
    h !== 0;

  ) {
    if (
      (!A &&
        e.firstTabInLine !== -1 &&
        ((e.position = e.firstTabInLine),
        F(e, "tab characters must not be used in indentation")),
      (u = e.input.charCodeAt(e.position + 1)),
      (i = e.line),
      (h === 63 || h === 58) && V(u))
    )
      h === 63
        ? (A && (be(e, l, p, d, D, null, a, o, s), (d = D = v = null)),
          (m = !0),
          (A = !0),
          (t = !0))
        : A
        ? ((A = !1), (t = !0))
        : F(
            e,
            "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
          ),
        (e.position += 1),
        (h = u);
    else {
      if (
        ((a = e.line),
        (o = e.lineStart),
        (s = e.position),
        !Se(e, r, Ct, !1, !0))
      )
        break;
      if (e.line === i) {
        for (h = e.input.charCodeAt(e.position); ve(h); )
          h = e.input.charCodeAt(++e.position);
        if (h === 58)
          (h = e.input.charCodeAt(++e.position)),
            V(h) ||
              F(
                e,
                "a whitespace character is expected after the key-value separator within a block mapping"
              ),
            A && (be(e, l, p, d, D, null, a, o, s), (d = D = v = null)),
            (m = !0),
            (A = !1),
            (t = !1),
            (d = e.tag),
            (D = e.result);
        else if (m)
          F(e, "can not read an implicit mapping pair; a colon is missed");
        else return (e.tag = c), (e.anchor = f), !0;
      } else if (m)
        F(
          e,
          "can not read a block mapping entry; a multiline key may not be an implicit key"
        );
      else return (e.tag = c), (e.anchor = f), !0;
    }
    if (
      ((e.line === i || e.lineIndent > n) &&
        (A && ((a = e.line), (o = e.lineStart), (s = e.position)),
        Se(e, n, sn, !0, t) && (A ? (D = e.result) : (v = e.result)),
        A || (be(e, l, p, d, D, v, a, o, s), (d = D = v = null)),
        P(e, !0, -1),
        (h = e.input.charCodeAt(e.position))),
      (e.line === i || e.lineIndent > n) && h !== 0)
    )
      F(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < n) break;
  }
  return (
    A && be(e, l, p, d, D, null, a, o, s),
    m && ((e.tag = c), (e.anchor = f), (e.kind = "mapping"), (e.result = l)),
    m
  );
}
function Oa(e) {
  var n,
    r = !1,
    u = !1,
    t,
    i,
    a;
  if (((a = e.input.charCodeAt(e.position)), a !== 33)) return !1;
  if (
    (e.tag !== null && F(e, "duplication of a tag property"),
    (a = e.input.charCodeAt(++e.position)),
    a === 60
      ? ((r = !0), (a = e.input.charCodeAt(++e.position)))
      : a === 33
      ? ((u = !0), (t = "!!"), (a = e.input.charCodeAt(++e.position)))
      : (t = "!"),
    (n = e.position),
    r)
  ) {
    do a = e.input.charCodeAt(++e.position);
    while (a !== 0 && a !== 62);
    e.position < e.length
      ? ((i = e.input.slice(n, e.position)),
        (a = e.input.charCodeAt(++e.position)))
      : F(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !V(a); )
      a === 33 &&
        (u
          ? F(e, "tag suffix cannot contain exclamation marks")
          : ((t = e.input.slice(n - 1, e.position + 1)),
            Ft.test(t) ||
              F(e, "named tag handle cannot contain such characters"),
            (u = !0),
            (n = e.position + 1))),
        (a = e.input.charCodeAt(++e.position));
    (i = e.input.slice(n, e.position)),
      Aa.test(i) && F(e, "tag suffix cannot contain flow indicator characters");
  }
  i && !yt.test(i) && F(e, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    F(e, "tag name is malformed: " + i);
  }
  return (
    r
      ? (e.tag = i)
      : de.call(e.tagMap, t)
      ? (e.tag = e.tagMap[t] + i)
      : t === "!"
      ? (e.tag = "!" + i)
      : t === "!!"
      ? (e.tag = "tag:yaml.org,2002:" + i)
      : F(e, 'undeclared tag handle "' + t + '"'),
    !0
  );
}
function La(e) {
  var n, r;
  if (((r = e.input.charCodeAt(e.position)), r !== 38)) return !1;
  for (
    e.anchor !== null && F(e, "duplication of an anchor property"),
      r = e.input.charCodeAt(++e.position),
      n = e.position;
    r !== 0 && !V(r) && !xe(r);

  )
    r = e.input.charCodeAt(++e.position);
  return (
    e.position === n &&
      F(e, "name of an anchor node must contain at least one character"),
    (e.anchor = e.input.slice(n, e.position)),
    !0
  );
}
function Pa(e) {
  var n, r, u;
  if (((u = e.input.charCodeAt(e.position)), u !== 42)) return !1;
  for (
    u = e.input.charCodeAt(++e.position), n = e.position;
    u !== 0 && !V(u) && !xe(u);

  )
    u = e.input.charCodeAt(++e.position);
  return (
    e.position === n &&
      F(e, "name of an alias node must contain at least one character"),
    (r = e.input.slice(n, e.position)),
    de.call(e.anchorMap, r) || F(e, 'unidentified alias "' + r + '"'),
    (e.result = e.anchorMap[r]),
    P(e, !0, -1),
    !0
  );
}
function Se(e, n, r, u, t) {
  var i,
    a,
    o,
    s = 1,
    c = !1,
    f = !1,
    l,
    p,
    d,
    D,
    v,
    A;
  if (
    (e.listener !== null && e.listener("open", e),
    (e.tag = null),
    (e.anchor = null),
    (e.kind = null),
    (e.result = null),
    (i = a = o = sn === r || _t === r),
    u &&
      P(e, !0, -1) &&
      ((c = !0),
      e.lineIndent > n
        ? (s = 1)
        : e.lineIndent === n
        ? (s = 0)
        : e.lineIndent < n && (s = -1)),
    s === 1)
  )
    for (; Oa(e) || La(e); )
      P(e, !0, -1)
        ? ((c = !0),
          (o = i),
          e.lineIndent > n
            ? (s = 1)
            : e.lineIndent === n
            ? (s = 0)
            : e.lineIndent < n && (s = -1))
        : (o = !1);
  if (
    (o && (o = c || t),
    (s === 1 || sn === r) &&
      (on === r || Ct === r ? (v = n) : (v = n + 1),
      (A = e.position - e.lineStart),
      s === 1
        ? (o && (Br(e, A) || Ba(e, A, v))) || ka(e, v)
          ? (f = !0)
          : ((a && Sa(e, v)) || ba(e, v) || wa(e, v)
              ? (f = !0)
              : Pa(e)
              ? ((f = !0),
                (e.tag !== null || e.anchor !== null) &&
                  F(e, "alias node should not have any properties"))
              : xa(e, v, on === r) &&
                ((f = !0), e.tag === null && (e.tag = "?")),
            e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
        : s === 0 && (f = o && Br(e, A))),
    e.tag === null)
  )
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (
      e.result !== null &&
        e.kind !== "scalar" &&
        F(
          e,
          'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
            e.kind +
            '"'
        ),
        l = 0,
        p = e.implicitTypes.length;
      l < p;
      l += 1
    )
      if (((D = e.implicitTypes[l]), D.resolve(e.result))) {
        (e.result = D.construct(e.result)),
          (e.tag = D.tag),
          e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (de.call(e.typeMap[e.kind || "fallback"], e.tag))
      D = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (
        D = null,
          d = e.typeMap.multi[e.kind || "fallback"],
          l = 0,
          p = d.length;
        l < p;
        l += 1
      )
        if (e.tag.slice(0, d[l].tag.length) === d[l].tag) {
          D = d[l];
          break;
        }
    D || F(e, "unknown tag !<" + e.tag + ">"),
      e.result !== null &&
        D.kind !== e.kind &&
        F(
          e,
          "unacceptable node kind for !<" +
            e.tag +
            '> tag; it should be "' +
            D.kind +
            '", not "' +
            e.kind +
            '"'
        ),
      D.resolve(e.result, e.tag)
        ? ((e.result = D.construct(e.result, e.tag)),
          e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
        : F(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return (
    e.listener !== null && e.listener("close", e),
    e.tag !== null || e.anchor !== null || f
  );
}
function Na(e) {
  var n = e.position,
    r,
    u,
    t,
    i = !1,
    a;
  for (
    e.version = null,
      e.checkLineBreaks = e.legacy,
      e.tagMap = Object.create(null),
      e.anchorMap = Object.create(null);
    (a = e.input.charCodeAt(e.position)) !== 0 &&
    (P(e, !0, -1),
    (a = e.input.charCodeAt(e.position)),
    !(e.lineIndent > 0 || a !== 37));

  ) {
    for (
      i = !0, a = e.input.charCodeAt(++e.position), r = e.position;
      a !== 0 && !V(a);

    )
      a = e.input.charCodeAt(++e.position);
    for (
      u = e.input.slice(r, e.position),
        t = [],
        u.length < 1 &&
          F(e, "directive name must not be less than one character in length");
      a !== 0;

    ) {
      for (; ve(a); ) a = e.input.charCodeAt(++e.position);
      if (a === 35) {
        do a = e.input.charCodeAt(++e.position);
        while (a !== 0 && !ee(a));
        break;
      }
      if (ee(a)) break;
      for (r = e.position; a !== 0 && !V(a); )
        a = e.input.charCodeAt(++e.position);
      t.push(e.input.slice(r, e.position));
    }
    a !== 0 && Vn(e),
      de.call(kr, u)
        ? kr[u](e, u, t)
        : ln(e, 'unknown document directive "' + u + '"');
  }
  if (
    (P(e, !0, -1),
    e.lineIndent === 0 &&
    e.input.charCodeAt(e.position) === 45 &&
    e.input.charCodeAt(e.position + 1) === 45 &&
    e.input.charCodeAt(e.position + 2) === 45
      ? ((e.position += 3), P(e, !0, -1))
      : i && F(e, "directives end mark is expected"),
    Se(e, e.lineIndent - 1, sn, !1, !0),
    P(e, !0, -1),
    e.checkLineBreaks &&
      va.test(e.input.slice(n, e.position)) &&
      ln(e, "non-ASCII line breaks are interpreted as content"),
    e.documents.push(e.result),
    e.position === e.lineStart && Dn(e))
  ) {
    e.input.charCodeAt(e.position) === 46 && ((e.position += 3), P(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    F(e, "end of the stream or a document separator is expected");
  else return;
}
function wt(e, n) {
  (e = String(e)),
    (n = n || {}),
    e.length !== 0 &&
      (e.charCodeAt(e.length - 1) !== 10 &&
        e.charCodeAt(e.length - 1) !== 13 &&
        (e += `
`),
      e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Ea(e, n),
    u = e.indexOf("\0");
  for (
    u !== -1 && ((r.position = u), F(r, "null byte is not allowed in input")),
      r.input += "\0";
    r.input.charCodeAt(r.position) === 32;

  )
    (r.lineIndent += 1), (r.position += 1);
  for (; r.position < r.length - 1; ) Na(r);
  return r.documents;
}
function Ia(e, n, r) {
  n !== null && pe(n) === "object" && typeof r > "u" && ((r = n), (n = null));
  var u = wt(e, r);
  if (typeof n != "function") return u;
  for (var t = 0, i = u.length; t < i; t += 1) n(u[t]);
}
function Ra(e, n) {
  var r = wt(e, n);
  if (r.length !== 0) {
    if (r.length === 1) return r[0];
    throw new H("expected a single document in the stream, but found more");
  }
}
var Ta = Ia,
  ja = Ra,
  kt = { loadAll: Ta, load: ja },
  St = Object.prototype.toString,
  Bt = Object.prototype.hasOwnProperty,
  Yn = 65279,
  Ma = 9,
  Ye = 10,
  Ua = 13,
  Ha = 32,
  $a = 33,
  Va = 34,
  Ln = 35,
  Ka = 37,
  Ya = 38,
  qa = 39,
  za = 42,
  Ot = 44,
  Wa = 45,
  cn = 58,
  Ja = 61,
  Ga = 62,
  Qa = 63,
  Xa = 64,
  Lt = 91,
  Pt = 93,
  Za = 96,
  Nt = 123,
  eo = 124,
  It = 125,
  j = {};
j[0] = "\\0";
j[7] = "\\a";
j[8] = "\\b";
j[9] = "\\t";
j[10] = "\\n";
j[11] = "\\v";
j[12] = "\\f";
j[13] = "\\r";
j[27] = "\\e";
j[34] = '\\"';
j[92] = "\\\\";
j[133] = "\\N";
j[160] = "\\_";
j[8232] = "\\L";
j[8233] = "\\P";
var no = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF",
  ],
  ro = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function to(e, n) {
  var r, u, t, i, a, o, s;
  if (n === null) return {};
  for (r = {}, u = Object.keys(n), t = 0, i = u.length; t < i; t += 1)
    (a = u[t]),
      (o = String(n[a])),
      a.slice(0, 2) === "!!" && (a = "tag:yaml.org,2002:" + a.slice(2)),
      (s = e.compiledTypeMap.fallback[a]),
      s && Bt.call(s.styleAliases, o) && (o = s.styleAliases[o]),
      (r[a] = o);
  return r;
}
function uo(e) {
  var n, r, u;
  if (((n = e.toString(16).toUpperCase()), e <= 255)) (r = "x"), (u = 2);
  else if (e <= 65535) (r = "u"), (u = 4);
  else if (e <= 4294967295) (r = "U"), (u = 8);
  else
    throw new H(
      "code point within a string may not be greater than 0xFFFFFFFF"
    );
  return "\\" + r + N.repeat("0", u - n.length) + n;
}
var io = 1,
  qe = 2;
function ao(e) {
  (this.schema = e.schema || $n),
    (this.indent = Math.max(1, e.indent || 2)),
    (this.noArrayIndent = e.noArrayIndent || !1),
    (this.skipInvalid = e.skipInvalid || !1),
    (this.flowLevel = N.isNothing(e.flowLevel) ? -1 : e.flowLevel),
    (this.styleMap = to(this.schema, e.styles || null)),
    (this.sortKeys = e.sortKeys || !1),
    (this.lineWidth = e.lineWidth || 80),
    (this.noRefs = e.noRefs || !1),
    (this.noCompatMode = e.noCompatMode || !1),
    (this.condenseFlow = e.condenseFlow || !1),
    (this.quotingType = e.quotingType === '"' ? qe : io),
    (this.forceQuotes = e.forceQuotes || !1),
    (this.replacer = typeof e.replacer == "function" ? e.replacer : null),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.explicitTypes = this.schema.compiledExplicit),
    (this.tag = null),
    (this.result = ""),
    (this.duplicates = []),
    (this.usedDuplicates = null);
}
function Or(e, n) {
  for (
    var r = N.repeat(" ", n), u = 0, t = -1, i = "", a, o = e.length;
    u < o;

  )
    (t = e.indexOf(
      `
`,
      u
    )),
      t === -1
        ? ((a = e.slice(u)), (u = o))
        : ((a = e.slice(u, t + 1)), (u = t + 1)),
      a.length &&
        a !==
          `
` &&
        (i += r),
      (i += a);
  return i;
}
function Pn(e, n) {
  return (
    `
` + N.repeat(" ", e.indent * n)
  );
}
function oo(e, n) {
  var r, u, t;
  for (r = 0, u = e.implicitTypes.length; r < u; r += 1)
    if (((t = e.implicitTypes[r]), t.resolve(n))) return !0;
  return !1;
}
function fn(e) {
  return e === Ha || e === Ma;
}
function ze(e) {
  return (
    (32 <= e && e <= 126) ||
    (161 <= e && e <= 55295 && e !== 8232 && e !== 8233) ||
    (57344 <= e && e <= 65533 && e !== Yn) ||
    (65536 <= e && e <= 1114111)
  );
}
function Lr(e) {
  return ze(e) && e !== Yn && e !== Ua && e !== Ye;
}
function Pr(e, n, r) {
  var u = Lr(e),
    t = u && !fn(e);
  return (
    ((r ? u : u && e !== Ot && e !== Lt && e !== Pt && e !== Nt && e !== It) &&
      e !== Ln &&
      !(n === cn && !t)) ||
    (Lr(n) && !fn(n) && e === Ln) ||
    (n === cn && t)
  );
}
function so(e) {
  return (
    ze(e) &&
    e !== Yn &&
    !fn(e) &&
    e !== Wa &&
    e !== Qa &&
    e !== cn &&
    e !== Ot &&
    e !== Lt &&
    e !== Pt &&
    e !== Nt &&
    e !== It &&
    e !== Ln &&
    e !== Ya &&
    e !== za &&
    e !== $a &&
    e !== eo &&
    e !== Ja &&
    e !== Ga &&
    e !== qa &&
    e !== Va &&
    e !== Ka &&
    e !== Xa &&
    e !== Za
  );
}
function lo(e) {
  return !fn(e) && e !== cn;
}
function $e(e, n) {
  var r = e.charCodeAt(n),
    u;
  return r >= 55296 &&
    r <= 56319 &&
    n + 1 < e.length &&
    ((u = e.charCodeAt(n + 1)), u >= 56320 && u <= 57343)
    ? (r - 55296) * 1024 + u - 56320 + 65536
    : r;
}
function Rt(e) {
  var n = /^\n* /;
  return n.test(e);
}
var Tt = 1,
  Nn = 2,
  jt = 3,
  Mt = 4,
  Ee = 5;
function co(e, n, r, u, t, i, a, o) {
  var s,
    c = 0,
    f = null,
    l = !1,
    p = !1,
    d = u !== -1,
    D = -1,
    v = so($e(e, 0)) && lo($e(e, e.length - 1));
  if (n || a)
    for (s = 0; s < e.length; c >= 65536 ? (s += 2) : s++) {
      if (((c = $e(e, s)), !ze(c))) return Ee;
      (v = v && Pr(c, f, o)), (f = c);
    }
  else {
    for (s = 0; s < e.length; c >= 65536 ? (s += 2) : s++) {
      if (((c = $e(e, s)), c === Ye))
        (l = !0),
          d && ((p = p || (s - D - 1 > u && e[D + 1] !== " ")), (D = s));
      else if (!ze(c)) return Ee;
      (v = v && Pr(c, f, o)), (f = c);
    }
    p = p || (d && s - D - 1 > u && e[D + 1] !== " ");
  }
  return !l && !p
    ? v && !a && !t(e)
      ? Tt
      : i === qe
      ? Ee
      : Nn
    : r > 9 && Rt(e)
    ? Ee
    : a
    ? i === qe
      ? Ee
      : Nn
    : p
    ? Mt
    : jt;
}
function fo(e, n, r, u, t) {
  e.dump = (function () {
    if (n.length === 0) return e.quotingType === qe ? '""' : "''";
    if (!e.noCompatMode && (no.indexOf(n) !== -1 || ro.test(n)))
      return e.quotingType === qe ? '"' + n + '"' : "'" + n + "'";
    var i = e.indent * Math.max(1, r),
      a =
        e.lineWidth === -1
          ? -1
          : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - i),
      o = u || (e.flowLevel > -1 && r >= e.flowLevel);
    function s(c) {
      return oo(e, c);
    }
    switch (co(n, o, e.indent, a, s, e.quotingType, e.forceQuotes && !u, t)) {
      case Tt:
        return n;
      case Nn:
        return "'" + n.replace(/'/g, "''") + "'";
      case jt:
        return "|" + Nr(n, e.indent) + Ir(Or(n, i));
      case Mt:
        return ">" + Nr(n, e.indent) + Ir(Or(po(n, a), i));
      case Ee:
        return '"' + go(n) + '"';
      default:
        throw new H("impossible error: invalid scalar style");
    }
  })();
}
function Nr(e, n) {
  var r = Rt(e) ? String(n) : "",
    u =
      e[e.length - 1] ===
      `
`,
    t =
      u &&
      (e[e.length - 2] ===
        `
` ||
        e ===
          `
`),
    i = t ? "+" : u ? "" : "-";
  return (
    r +
    i +
    `
`
  );
}
function Ir(e) {
  return e[e.length - 1] ===
    `
`
    ? e.slice(0, -1)
    : e;
}
function po(e, n) {
  for (
    var r = /(\n+)([^\n]*)/g,
      u = (function () {
        var c = e.indexOf(`
`);
        return (
          (c = c !== -1 ? c : e.length), (r.lastIndex = c), Rr(e.slice(0, c), n)
        );
      })(),
      t =
        e[0] ===
          `
` || e[0] === " ",
      i,
      a;
    (a = r.exec(e));

  ) {
    var o = a[1],
      s = a[2];
    (i = s[0] === " "),
      (u +=
        o +
        (!t && !i && s !== ""
          ? `
`
          : "") +
        Rr(s, n)),
      (t = i);
  }
  return u;
}
function Rr(e, n) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, u, t = 0, i, a = 0, o = 0, s = ""; (u = r.exec(e)); )
    (o = u.index),
      o - t > n &&
        ((i = a > t ? a : o),
        (s +=
          `
` + e.slice(t, i)),
        (t = i + 1)),
      (a = o);
  return (
    (s += `
`),
    e.length - t > n && a > t
      ? (s +=
          e.slice(t, a) +
          `
` +
          e.slice(a + 1))
      : (s += e.slice(t)),
    s.slice(1)
  );
}
function go(e) {
  for (var n = "", r = 0, u, t = 0; t < e.length; r >= 65536 ? (t += 2) : t++)
    (r = $e(e, t)),
      (u = j[r]),
      !u && ze(r)
        ? ((n += e[t]), r >= 65536 && (n += e[t + 1]))
        : (n += u || uo(r));
  return n;
}
function ho(e, n, r) {
  var u = "",
    t = e.tag,
    i,
    a,
    o;
  for (i = 0, a = r.length; i < a; i += 1)
    (o = r[i]),
      e.replacer && (o = e.replacer.call(r, String(i), o)),
      (ue(e, n, o, !1, !1) || (typeof o > "u" && ue(e, n, null, !1, !1))) &&
        (u !== "" && (u += "," + (e.condenseFlow ? "" : " ")), (u += e.dump));
  (e.tag = t), (e.dump = "[" + u + "]");
}
function Tr(e, n, r, u) {
  var t = "",
    i = e.tag,
    a,
    o,
    s;
  for (a = 0, o = r.length; a < o; a += 1)
    (s = r[a]),
      e.replacer && (s = e.replacer.call(r, String(a), s)),
      (ue(e, n + 1, s, !0, !0, !1, !0) ||
        (typeof s > "u" && ue(e, n + 1, null, !0, !0, !1, !0))) &&
        ((!u || t !== "") && (t += Pn(e, n)),
        e.dump && Ye === e.dump.charCodeAt(0) ? (t += "-") : (t += "- "),
        (t += e.dump));
  (e.tag = i), (e.dump = t || "[]");
}
function Do(e, n, r) {
  var u = "",
    t = e.tag,
    i = Object.keys(r),
    a,
    o,
    s,
    c,
    f;
  for (a = 0, o = i.length; a < o; a += 1)
    (f = ""),
      u !== "" && (f += ", "),
      e.condenseFlow && (f += '"'),
      (s = i[a]),
      (c = r[s]),
      e.replacer && (c = e.replacer.call(r, s, c)),
      ue(e, n, s, !1, !1) &&
        (e.dump.length > 1024 && (f += "? "),
        (f +=
          e.dump +
          (e.condenseFlow ? '"' : "") +
          ":" +
          (e.condenseFlow ? "" : " ")),
        ue(e, n, c, !1, !1) && ((f += e.dump), (u += f)));
  (e.tag = t), (e.dump = "{" + u + "}");
}
function mo(e, n, r, u) {
  var t = "",
    i = e.tag,
    a = Object.keys(r),
    o,
    s,
    c,
    f,
    l,
    p;
  if (e.sortKeys === !0) a.sort();
  else if (typeof e.sortKeys == "function") a.sort(e.sortKeys);
  else if (e.sortKeys) throw new H("sortKeys must be a boolean or a function");
  for (o = 0, s = a.length; o < s; o += 1)
    (p = ""),
      (!u || t !== "") && (p += Pn(e, n)),
      (c = a[o]),
      (f = r[c]),
      e.replacer && (f = e.replacer.call(r, c, f)),
      ue(e, n + 1, c, !0, !0, !0) &&
        ((l =
          (e.tag !== null && e.tag !== "?") ||
          (e.dump && e.dump.length > 1024)),
        l && (e.dump && Ye === e.dump.charCodeAt(0) ? (p += "?") : (p += "? ")),
        (p += e.dump),
        l && (p += Pn(e, n)),
        ue(e, n + 1, f, !0, l) &&
          (e.dump && Ye === e.dump.charCodeAt(0) ? (p += ":") : (p += ": "),
          (p += e.dump),
          (t += p)));
  (e.tag = i), (e.dump = t || "{}");
}
function jr(e, n, r) {
  var u, t, i, a, o, s;
  for (
    t = r ? e.explicitTypes : e.implicitTypes, i = 0, a = t.length;
    i < a;
    i += 1
  )
    if (
      ((o = t[i]),
      (o.instanceOf || o.predicate) &&
        (!o.instanceOf || (pe(n) === "object" && n instanceof o.instanceOf)) &&
        (!o.predicate || o.predicate(n)))
    ) {
      if (
        (r
          ? o.multi && o.representName
            ? (e.tag = o.representName(n))
            : (e.tag = o.tag)
          : (e.tag = "?"),
        o.represent)
      ) {
        if (
          ((s = e.styleMap[o.tag] || o.defaultStyle),
          St.call(o.represent) === "[object Function]")
        )
          u = o.represent(n, s);
        else if (Bt.call(o.represent, s)) u = o.represent[s](n, s);
        else
          throw new H(
            "!<" + o.tag + '> tag resolver accepts not "' + s + '" style'
          );
        e.dump = u;
      }
      return !0;
    }
  return !1;
}
function ue(e, n, r, u, t, i, a) {
  (e.tag = null), (e.dump = r), jr(e, r, !1) || jr(e, r, !0);
  var o = St.call(e.dump),
    s = u,
    c;
  u && (u = e.flowLevel < 0 || e.flowLevel > n);
  var f = o === "[object Object]" || o === "[object Array]",
    l,
    p;
  if (
    (f && ((l = e.duplicates.indexOf(r)), (p = l !== -1)),
    ((e.tag !== null && e.tag !== "?") || p || (e.indent !== 2 && n > 0)) &&
      (t = !1),
    p && e.usedDuplicates[l])
  )
    e.dump = "*ref_" + l;
  else {
    if (
      (f && p && !e.usedDuplicates[l] && (e.usedDuplicates[l] = !0),
      o === "[object Object]")
    )
      u && Object.keys(e.dump).length !== 0
        ? (mo(e, n, e.dump, t), p && (e.dump = "&ref_" + l + e.dump))
        : (Do(e, n, e.dump), p && (e.dump = "&ref_" + l + " " + e.dump));
    else if (o === "[object Array]")
      u && e.dump.length !== 0
        ? (e.noArrayIndent && !a && n > 0
            ? Tr(e, n - 1, e.dump, t)
            : Tr(e, n, e.dump, t),
          p && (e.dump = "&ref_" + l + e.dump))
        : (ho(e, n, e.dump), p && (e.dump = "&ref_" + l + " " + e.dump));
    else if (o === "[object String]") e.tag !== "?" && fo(e, e.dump, n, i, s);
    else {
      if (o === "[object Undefined]") return !1;
      if (e.skipInvalid) return !1;
      throw new H("unacceptable kind of an object to dump " + o);
    }
    e.tag !== null &&
      e.tag !== "?" &&
      ((c = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(
        /!/g,
        "%21"
      )),
      e.tag[0] === "!"
        ? (c = "!" + c)
        : c.slice(0, 18) === "tag:yaml.org,2002:"
        ? (c = "!!" + c.slice(18))
        : (c = "!<" + c + ">"),
      (e.dump = c + " " + e.dump));
  }
  return !0;
}
function vo(e, n) {
  var r = [],
    u = [],
    t,
    i;
  for (In(e, r, u), t = 0, i = u.length; t < i; t += 1)
    n.duplicates.push(r[u[t]]);
  n.usedDuplicates = new Array(i);
}
function In(e, n, r) {
  var u, t, i;
  if (e !== null && pe(e) === "object")
    if (((t = n.indexOf(e)), t !== -1)) r.indexOf(t) === -1 && r.push(t);
    else if ((n.push(e), Array.isArray(e)))
      for (t = 0, i = e.length; t < i; t += 1) In(e[t], n, r);
    else
      for (u = Object.keys(e), t = 0, i = u.length; t < i; t += 1)
        In(e[u[t]], n, r);
}
function Ao(e, n) {
  n = n || {};
  var r = new ao(n);
  r.noRefs || vo(e, r);
  var u = e;
  return (
    r.replacer && (u = r.replacer.call({ "": u }, "", u)),
    ue(r, 0, u, !0, !0)
      ? r.dump +
        `
`
      : ""
  );
}
var Co = Ao,
  _o = { dump: Co };
function qn(e, n) {
  return function () {
    throw new Error(
      "Function yaml." +
        e +
        " is removed in js-yaml 4. Use yaml." +
        n +
        " instead, which is now safe by default."
    );
  };
}
var Fo = R,
  yo = nt,
  Eo = it,
  xo = ct,
  bo = ft,
  wo = $n,
  ko = kt.load,
  So = kt.loadAll,
  Bo = _o.dump,
  Oo = H,
  Lo = {
    binary: Dt,
    float: lt,
    map: ut,
    null: at,
    pairs: vt,
    set: At,
    timestamp: gt,
    bool: ot,
    int: st,
    merge: ht,
    omap: mt,
    seq: tt,
    str: rt,
  },
  Po = qn("safeLoad", "load"),
  No = qn("safeLoadAll", "loadAll"),
  Io = qn("safeDump", "dump"),
  we = {
    Type: Fo,
    Schema: yo,
    FAILSAFE_SCHEMA: Eo,
    JSON_SCHEMA: xo,
    CORE_SCHEMA: bo,
    DEFAULT_SCHEMA: wo,
    load: ko,
    loadAll: So,
    dump: Bo,
    YAMLException: Oo,
    types: Lo,
    safeLoad: Po,
    safeLoadAll: No,
    safeDump: Io,
  };
function Ro(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Rn = { exports: {} };
const To = {},
  jo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: To },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mo = ou(jo);
(function (e, n) {
  if (typeof Ro < "u") {
    var r = Mo;
    r && r.default && (r = r.default), (n.default = r), (e.exports = n.default);
  }
})(Rn, Rn.exports);
var Ut = Rn.exports;
const zn = su(Ut),
  pn = lu({ __proto__: null, default: zn }, [Ut]),
  Wn = function (e) {
    if (!(e.indexOf(".") < 0)) return ".".concat(e.split(".").pop());
  };
var Ht = typeof Deno < "u",
  $t = typeof Bun < "u",
  Uo = typeof we < "u" && we.load ? we : void 0,
  dn = pn ? zn || pn : void 0,
  Ho = eval,
  Vt = function (n) {
    var r = dn.readFileSync(n, "utf8"),
      u;
    try {
      u = dn.statSync(n);
    } catch {}
    return { data: r, stat: u };
  },
  Kt = function (n) {
    return new Promise(function (r, u) {
      dn.readFile(n, "utf8", function (t, i) {
        if (t) return u(t);
        dn.stat(n, function (a, o) {
          return r(a ? { data: i } : { data: i, stat: o });
        });
      });
    });
  },
  $o = function (n) {
    var r = new TextDecoder("utf-8"),
      u = Deno.readFileSync(n),
      t = r.decode(u),
      i;
    try {
      i = Deno.statSync(n);
    } catch {}
    return { data: t, stat: i };
  },
  Vo = function (n) {
    return new Promise(function (r, u) {
      var t = new TextDecoder("utf-8");
      Deno.readFile(n)
        .then(function (i) {
          var a = t.decode(i);
          Deno.stat(n)
            .then(function (o) {
              return r({ data: a, stat: o });
            })
            .catch(function () {
              return r({ data: a });
            });
        })
        .catch(u);
    });
  },
  Ko = Vt,
  Yo = Kt,
  Mr = function (n, r, u) {
    var t = n.lastIndexOf(r);
    return t > -1
      ? n.substring(0, t) + u + n.substring(t + r.length)
      : n.toString();
  },
  Yt = function (n, r, u) {
    r = r.replace(/^\uFEFF/, "");
    var t = {};
    switch (n) {
      case ".js":
      case ".ts":
        typeof module > "u" &&
          (r.indexOf("exports") > -1
            ? (r = "(".concat(
                Mr(r.substring(r.indexOf("=") + 1), "};", ""),
                ")"
              ))
            : r.indexOf("export default ") > -1 &&
              (r = "(".concat(
                Mr(r.substring(r.indexOf("export default ") + 15), "};", ""),
                ")"
              ))),
          (t = Ho(r));
        break;
      case ".json5":
        t = Xr.parse(r);
        break;
      case ".yml":
      case ".yaml":
        t = Uo.load(r);
        break;
      default:
        t = u.parse(r);
    }
    return t;
  };
function qo(e, n) {
  var r = Wn(e),
    u,
    t;
  if ($t) {
    var i = Ko(e);
    (u = i.data), (t = i.stat);
  } else if (Ht) {
    var a = $o(e);
    (u = a.data), (t = a.stat);
  } else {
    var o = Vt(e);
    (u = o.data), (t = o.stat);
  }
  return { data: Yt(r, u, n), stat: t };
}
function Ur(e) {
  var n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { parse: JSON.parse },
    r = Wn(e),
    u = $t ? Yo : Ht ? Vo : Kt;
  return new Promise(function (t, i) {
    u(e)
      .then(function (a) {
        var o = a.data,
          s = a.stat;
        try {
          var c = Yt(r, o, n);
          t({ data: c, stat: s });
        } catch (f) {
          (f.message = "error parsing " + e + ": " + f.message), i(f);
        }
      })
      .catch(i);
  });
}
var qt = typeof Deno < "u",
  zt = typeof Bun < "u",
  zo = typeof we < "u" && we.load ? we : void 0,
  Tn = pn ? zn || pn : void 0;
function Wt(e) {
  if (e.length === 0) return ".";
  for (
    var n = e.charCodeAt(0), r = n === 47, u = -1, t = !0, i = e.length - 1;
    i >= 1;
    --i
  )
    if (((n = e.charCodeAt(i)), n === 47)) {
      if (!t) {
        u = i;
        break;
      }
    } else t = !1;
  return u === -1 ? (r ? "/" : ".") : r && u === 1 ? "//" : e.slice(0, u);
}
var Jt = function (n, r) {
    return new Promise(function (u, t) {
      Tn.mkdir(Wt(n), { recursive: !0 }, function () {
        Tn.writeFile(n, r, "utf8", function (i, a) {
          return i ? t(i) : u(a);
        });
      });
    });
  },
  Gt = function (n) {
    return new Promise(function (r, u) {
      return Tn.unlink(n, function (t) {
        return t ? u(t) : r();
      });
    });
  },
  Wo = function (n, r) {
    var u = new TextEncoder(),
      t = u.encode(r);
    return new Promise(function (i, a) {
      Deno.mkdir(Wt(n), { recursive: !0 })
        .then(function () {
          Deno.writeFile(n, t).then(i, a);
        })
        .catch(function () {
          Deno.writeFile(n, t).then(i, a);
        });
    });
  },
  Jo = function (n) {
    return Deno.remove(n);
  },
  Go = Jt,
  Qo = Gt,
  Xo = function (n, r, u) {
    var t = "";
    switch (n) {
      case ".js":
      case ".ts":
        typeof module > "u"
          ? (t = "export default ".concat(u.stringify(r, null, u.ident)))
          : (t = "module.exports = ".concat(u.stringify(r, null, u.ident)));
        break;
      case ".json5":
        t = Xr.stringify(r, null, u.ident);
        break;
      case ".yml":
      case ".yaml":
        t = zo.dump(r, { ident: u.indent });
        break;
      default:
        t = u.stringify(r, null, u.ident);
    }
    return t;
  };
function Zo(e, n) {
  var r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { stringify: JSON.stringify, ident: 2 },
    u = Wn(e),
    t;
  try {
    t = Xo(u, n, r);
  } catch (a) {
    throw ((a.message = "error stringifying " + e + ": " + a.message), a);
  }
  var i = zt ? Go : qt ? Wo : Jt;
  return i(e, t);
}
function es(e) {
  var n = zt ? Qo : qt ? Jo : Gt;
  return n(e);
}
function We(e) {
  "@babel/helpers - typeof";
  return (
    (We =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    We(e)
  );
}
function ns(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Hr(e, n) {
  for (var r = 0; r < n.length; r++) {
    var u = n[r];
    (u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      "value" in u && (u.writable = !0),
      Object.defineProperty(e, ts(u.key), u);
  }
}
function rs(e, n, r) {
  return (
    n && Hr(e.prototype, n),
    r && Hr(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ts(e) {
  var n = us(e, "string");
  return We(n) == "symbol" ? n : n + "";
}
function us(e, n) {
  if (We(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, n || "default");
    if (We(u) != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var is = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/{{lng}}/{{ns}}.missing.json",
      ident: 2,
      parse: JSON.parse,
      stringify: JSON.stringify,
    };
  },
  Qt = (function () {
    function e(n) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      ns(this, e),
        (this.services = n),
        (this.options = r),
        (this.allOptions = u),
        (this.type = "backend"),
        this.init(n, r, u);
    }
    return rs(e, [
      {
        key: "init",
        value: function (r) {
          var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = r),
            (this.options = ni(u, this.options || {}, is())),
            (this.allOptions = t),
            (this.queuedWrites = {}),
            (this.debouncedWrite = ri(this.write, 250));
        },
      },
      {
        key: "read",
        value: function (r, u, t) {
          var i = this,
            a = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (a = this.options.loadPath(r, u));
          var o = this.services.interpolator.interpolate(a, { lng: r, ns: u });
          if (this.allOptions.initImmediate === !1) {
            try {
              var s = qo(o, this.options),
                c = s.data,
                f = s.stat,
                l = f && f.mtime && f.mtime.getTime();
              if (
                this.options.expirationTime &&
                l &&
                l + this.options.expirationTime < Date.now()
              )
                return this.removeFile(r, u), t(new Error("File expired!"), !1);
              t(null, c, l);
            } catch (p) {
              t(p, !1);
            }
            return;
          }
          Ur(o, this.options)
            .then(function (p) {
              var d = p.data,
                D = p.stat,
                v = D && D.mtime && D.mtime.getTime();
              if (
                i.options.expirationTime &&
                v &&
                v + i.options.expirationTime < Date.now()
              )
                return i.removeFile(r, u), t(new Error("File expired!"), !1);
              t(null, d, v);
            })
            .catch(function (p) {
              return t(p, !1);
            });
        },
      },
      {
        key: "create",
        value: function (r, u, t, i, a) {
          var o = this;
          typeof a != "function" && (a = function () {}),
            typeof r == "string" && (r = [r]);
          var s = r.length,
            c = function () {
              --s || a();
            };
          r.forEach(function (f) {
            o.queue.call(o, f, u, t, i, c);
          });
        },
      },
      {
        key: "save",
        value: function (r, u, t, i) {
          var a = this;
          i || (i = function () {});
          var o = Object.keys(t),
            s = o.length,
            c = function () {
              --s || i();
            };
          o.forEach(function (f) {
            a.queue.call(a, r, u, f, t[f], c);
          });
        },
      },
      {
        key: "removeFile",
        value: function (r, u) {
          var t = this.options.addPath;
          typeof this.options.addPath == "function" &&
            (t = this.options.addPath(r, u));
          var i = this.services.interpolator.interpolate(t, { lng: r, ns: u });
          es(i, this.options)
            .then(function () {})
            .catch(function () {});
        },
      },
      {
        key: "write",
        value: function () {
          for (var r in this.queuedWrites) {
            var u = this.queuedWrites[r];
            if (r !== "locks") for (var t in u) this.writeFile(r, t);
          }
        },
      },
      {
        key: "writeFile",
        value: function (r, u) {
          var t = this,
            i = _r(this.queuedWrites, ["locks", r, u]);
          if (!i) {
            var a = this.options.addPath;
            typeof this.options.addPath == "function" &&
              (a = this.options.addPath(r, u));
            var o = this.services.interpolator.interpolate(a, {
                lng: r,
                ns: u,
              }),
              s = _r(this.queuedWrites, [r, u]);
            if ((Me(this.queuedWrites, [r, u], []), s.length)) {
              Me(this.queuedWrites, ["locks", r, u], !0);
              var c = function (l) {
                var p = l.data;
                s.forEach(function (D) {
                  var v =
                    t.allOptions.keySeparator === !1
                      ? [D.key]
                      : D.key.split(t.allOptions.keySeparator || ".");
                  try {
                    Me(p, v, D.fallbackValue);
                  } catch (A) {
                    if (
                      v.length < 2 ||
                      !A.message ||
                      A.message.indexOf("Cannot create property") < 0
                    )
                      throw A;
                    Me(p, [D.key], D.fallbackValue);
                  }
                });
                var d = function () {
                  Me(t.queuedWrites, ["locks", r, u], !1),
                    s.forEach(function (v) {
                      v.callback && v.callback();
                    }),
                    t.debouncedWrite();
                };
                Zo(o, p, t.options).then(d).catch(d);
              };
              Ur(o, this.options)
                .then(c)
                .catch(function () {
                  return c({ data: {} });
                });
            }
          }
        },
      },
      {
        key: "queue",
        value: function (r, u, t, i, a) {
          ti(this.queuedWrites, [r, u], {
            key: t,
            fallbackValue: i || "",
            callback: a,
          }),
            this.debouncedWrite();
        },
      },
    ]);
  })();
Qt.type = "backend";
var Xt = [],
  as = Xt.forEach,
  os = Xt.slice;
function ss(e) {
  return (
    as.call(os.call(arguments, 1), function (n) {
      if (n) for (var r in n) e[r] === void 0 && (e[r] = n[r]);
    }),
    e
  );
}
function $r(e, n) {
  if (n && me(n) === "object") {
    var r = "",
      u = encodeURIComponent;
    for (var t in n) r += "&" + u(t) + "=" + u(n[t]);
    if (!r) return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}
function ls(e, n, r, u, t) {
  u &&
    me(u) === "object" &&
    (t || (u._t = new Date()), (u = $r("", u).slice(1))),
    n.queryStringParams && (e = $r(e, n.queryStringParams));
  try {
    var i;
    XMLHttpRequest
      ? (i = new XMLHttpRequest())
      : (i = new ActiveXObject("MSXML2.XMLHTTP.3.0")),
      i.open(u ? "POST" : "GET", e, 1),
      n.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
      (i.withCredentials = !!n.withCredentials),
      u &&
        i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      i.overrideMimeType && i.overrideMimeType("application/json");
    var a = n.customHeaders;
    if (((a = typeof a == "function" ? a() : a), a))
      for (var o in a) i.setRequestHeader(o, a[o]);
    (i.onreadystatechange = function () {
      i.readyState > 3 && r && r(i.responseText, i);
    }),
      i.send(u);
  } catch (s) {
    console && console.log(s);
  }
}
function cs() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: JSON.parse,
    parsePayload: function (n, r, u) {
      return ie({}, r, u || "");
    },
    crossDomain: !1,
    ajax: ls,
  };
}
var Zt = (function () {
  function e(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    z(this, e), this.init(n, r), (this.type = "backend");
  }
  return (
    q(e, [
      {
        key: "init",
        value: function (r) {
          var u =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          (this.services = r), (this.options = ss(u, this.options || {}, cs()));
        },
      },
      {
        key: "readMulti",
        value: function (r, u, t) {
          var i = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (i = this.options.loadPath(r, u));
          var a = this.services.interpolator.interpolate(i, {
            lng: r.join("+"),
            ns: u.join("+"),
          });
          this.loadUrl(a, t);
        },
      },
      {
        key: "read",
        value: function (r, u, t) {
          var i = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (i = this.options.loadPath([r], [u]));
          var a = this.services.interpolator.interpolate(i, { lng: r, ns: u });
          this.loadUrl(a, t);
        },
      },
      {
        key: "loadUrl",
        value: function (r, u) {
          var t = this;
          this.options.ajax(r, this.options, function (i, a) {
            if (a.status >= 500 && a.status < 600)
              return u("failed loading " + r, !0);
            if (a.status >= 400 && a.status < 500)
              return u("failed loading " + r, !1);
            var o, s;
            try {
              o = t.options.parse(i, r);
            } catch {
              s = "failed parsing " + r + " to json";
            }
            if (s) return u(s, !1);
            u(null, o);
          });
        },
      },
      {
        key: "create",
        value: function (r, u, t, i) {
          var a = this;
          typeof r == "string" && (r = [r]);
          var o = this.options.parsePayload(u, t, i);
          r.forEach(function (s) {
            var c = a.services.interpolator.interpolate(a.options.addPath, {
              lng: s,
              ns: u,
            });
            a.options.ajax(c, a.options, function (f, l) {}, o);
          });
        },
      },
    ]),
    e
  );
})();
Zt.type = "backend";
const fs = ["app", "merkl", "analytics", "landing", "merkl-landing", "media"],
  ps = () => {
    const { REACT_APP_PAGE: e } = {
      REACT_APP_PAGE: "",
      npm_package_dependencies__web3_onboard_walletconnect: "2.6.1",
      npm_package_devDependencies__types_node: "^16.7.10",
      npm_package_dependencies__vitejs_plugin_react: "^4.1.0",
      npm_package_dependencies__types_react_router: "^5.1.18",
      npm_package_dependencies__layerzerolabs_scan_client: "^0.0.0-beta.6",
      npm_package_devDependencies__types_qs: "^6.9.7",
      npm_package_dependencies_react_dnd_html5_backend: "^16.0.1",
      npm_package_dependencies_hex_to_rgba: "^2.0.1",
      npm_package_dependencies__web3_onboard_metamask: "2.1.2",
      npm_package_dependencies__svgr_rollup: "^8.1.0",
      npm_package_devDependencies_rc_pagination: "^4.0.4",
      npm_config_version_commit_hooks: "true",
      npm_config_user_agent: "yarn/1.22.22 npm/? node/v18.20.5 linux x64",
      npm_package_dependencies_graphql_request: "^4.3.0",
      npm_package_dependencies_glslCanvas: "^0.2.6",
      npm_package_dependencies__rollup_plugin_inject: "^5.0.5",
      npm_package_devDependencies_graphql: "^15.6.1",
      npm_package_devDependencies_copy_to_clipboard: "^3.2.0",
      npm_package_devDependencies_buffer: "^6.0.3",
      npm_config_bin_links: "true",
      npm_node_execpath: "/usr/local/bin/node",
      npm_package_scripts_deploy_preview:
        "chmod +x ./scripts/publishAndDeploy.sh && ./scripts/publishAndDeploy.sh",
      npm_package_devDependencies_vite_plugin_sass: "^0.1.0",
      npm_config_init_version: "1.0.0",
      npm_package_dependencies_keccak256: "^1.0.6",
      npm_package_dependencies__web3_onboard_gnosis: "^2.3.1",
      npm_package_dependencies__web3_onboard_core: "^2.22.2",
      REACT_APP_ANALYTICS_API: "https://exporter.angle.money",
      PORT: "3000",
      npm_package_browserslist_production_0: ">0.2%",
      npm_package_dependencies_url: "^0.11.0",
      npm_package_dependencies__types_bun: "^1.1.3",
      npm_package_devDependencies_sass: "^1.69.5",
      npm_package_browserslist_production_1: "not dead",
      npm_package_scripts_notion: "node src/pages/blog/index.tsx",
      npm_package_dependencies_react_syntax_highlighter: "^15.5.0",
      npm_package_devDependencies_stream_browserify: "^3.0.0",
      npm_package_devDependencies_jazzicon: "^1.5.0",
      npm_package_devDependencies__mui_icons_material: "^5.5.1",
      npm_package_browserslist_production_2: "not op_mini all",
      npm_package_dependencies_framer_motion: "10.18.0",
      npm_package_devDependencies__emotion_styled: "^11.10.5",
      npm_config_init_license: "MIT",
      NODE_OPTIONS: "--max-old-space-size=8912",
      YARN_WRAP_OUTPUT: "false",
      npm_package_devDependencies__biomejs_biome: "^1.8.1",
      npm_config_version_tag_prefix: "v",
      npm_package_scripts_serve: "bun run start.config.ts serve",
      npm_package_dependencies_react_icons: "^4.3.1",
      npm_package_devDependencies_util: "^0.12.4",
      npm_package_devDependencies_os_browserify: "^0.3.0",
      npm_package_dependencies_moment: "^2.29.4",
      npm_package_dependencies_dayjs: "^1.10.6",
      npm_package_devDependencies__pinata_sdk: "^1.1.26",
      npm_package_dependencies_apollo_cache_inmemory: "^1.6.6",
      npm_package_dependencies_antd: "^4.24.6",
      npm_package_dependencies__apollo_client: "^3.4.11",
      npm_package_devDependencies_typescript: "^5.2.2",
      npm_package_devDependencies_tailwindcss: "3.4.1",
      npm_package_description: "Angle DApp",
      npm_package_readmeFilename: "README.md",
      npm_package_scripts_check_format: "biome format ./src",
      npm_package_dependencies_jsbi: "^4.3.0",
      npm_package_dependencies_ipfs_http_client: "^60.0.1",
      npm_package_devDependencies_react: "^18.2.0",
      npm_package_devDependencies__types_react_dom: "18.0.8",
      npm_package_homepage: "http://.",
      npm_package_scripts_start_https: "HTTPS=true vite --open",
      npm_package_dependencies_react_dnd: "^16.0.1",
      npm_package_dependencies_numbro: "^2.3.6",
      npm_package_dependencies_echarts_for_react: "^3.0.2",
      npm_package_devDependencies_prettier: "^2.6.2",
      npm_package_devDependencies_i18next_fs_backend: "^2.3.0",
      npm_package_devDependencies__playwright_test: "^1.46.1",
      npm_package_dependencies_idb_keyval: "^6.2.1",
      npm_package_type: "module",
      npm_package_devDependencies_vite_plugin_node_polyfills: "^0.21.0",
      npm_package_devDependencies_node_sass: "^7.0.1",
      npm_package_devDependencies_autoprefixer: "^10.4.16",
      npm_package_private: "true",
      REACT_APP_MERKL_API: "https://api.merkl.xyz",
      npm_package_scripts_lint: "biome check --apply ./src",
      npm_package_devDependencies_postcss_import: "^14.0.2",
      npm_config_registry: "https://registry.yarnpkg.com",
      npm_package_dependencies_cli: "^1.0.1",
      npm_package_devDependencies_stream_http: "^3.2.0",
      npm_package_devDependencies_i18next_xhr_backend: "^3.2.2",
      npm_package_devDependencies__types_testing_library__cypress: "5.0.9",
      npm_package_scripts_start: "bun run start.config.ts start",
      npm_package_include_0: "src",
      npm_package_devDependencies_vite_bundle_visualizer: "^0.11.0",
      npm_package_devDependencies_react_parallax_tilt: "^1.7.81",
      npm_package_devDependencies_process: "^0.11.10",
      npm_config_ignore_scripts: "",
      npm_package_browserslist_development_0: "last 1 chrome version",
      npm_package_include_1: "types/svg.d.ts",
      npm_package_dependencies_recharts: "^2.1.16",
      npm_package_dependencies_axios: "^0.27.2",
      npm_package_dependencies__angleprotocol_sdk: "v2.33.16",
      npm_package_devDependencies_tsc_silent: "^1.2.2",
      npm_package_devDependencies_prettier_plugin_tailwindcss: "^0.1.10",
      npm_package_devDependencies_ethers: "^5.7.2",
      PATH: "/tmp/yarn--1732532640188-0.4297358547748935:/home/runner/work/app/app/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/usr/local/bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin",
      NODE: "/usr/local/bin/node",
      npm_package_browserslist_development_1: "last 1 firefox version",
      npm_package_dependencies_unimported: "^1.31.1",
      npm_package_name: "@angleprotocol/app",
      npm_package_browserslist_development_2: "last 1 safari version",
      npm_package_scripts_integration_test:
        "start-server-and-test 'serve build -l 3000' http://localhost:3000 'cypress run'",
      npm_package_scripts_analyze: "ANALYZE_BUNDLE=1 yarn build",
      npm_package_dependencies__safe_global_safe_apps_provider: "^0.18.0",
      npm_package_scripts_eject: "react-app-rewired eject",
      npm_package_dependencies_echarts: "^5.4.3",
      npm_package_dependencies_react_intersection_observer: "^9.5.3",
      npm_package_devDependencies_react_i18next: "^11.11.4",
      RAW: "",
      npm_package_dependencies_react_markdown: "^8.0.2",
      npm_package_devDependencies_rollup_plugin_auto_external: "^2.0.0",
      npm_package_devDependencies_node: "^21.1.0",
      npm_package_main: "src/entry.client.tsx",
      npm_package_scripts_test: "react-app-rewired test --env=jsdom",
      npm_package_dependencies_chalk: "^5.3.0",
      npm_package_devDependencies_react_scripts: "5.0.1",
      npm_package_devDependencies_react_router_dom: "^6.11.2",
      npm_package_devDependencies_react_latex: "^2.0.0",
      npm_package_devDependencies_qs: "^6.9.4",
      npm_package_devDependencies_i18next: "^21.2.0",
      npm_package_devDependencies_flat: "^5.0.2",
      npm_config_version_git_message: "v%s",
      npm_lifecycle_event: "vite",
      npm_package_version: "",
      npm_package_dependencies_unstorage: "^1.10.1",
      npm_package_dependencies__types_react_router_hash_link: "^2.4.5",
      npm_package_dependencies__shopify_react_web_worker: "^5.0.15",
      npm_package_dependencies__esbuild_plugins_node_globals_polyfill: "^0.2.3",
      npm_package_devDependencies_react_router_hash_link: "^2.4.3",
      npm_package_devDependencies_assert: "^2.0.0",
      npm_package_devDependencies__types_react: "^18.0.24",
      BUILD_DIRECTORY: "build",
      npm_config_argv:
        '{"remain":[],"cooked":["run","vite"],"original":["run","vite","build","--outDir","build"]}',
      npm_package_scripts_generate_types:
        "typechain --target ethers-v5 --out-dir src/constants/contracts 'src/constants/*.abi'",
      npm_package_scripts_build: "bun run start.config.ts build",
      npm_package_devDependencies_crypto_browserify: "^3.12.0",
      npm_package_config_commitizen_path:
        "./node_modules/cz-conventional-changelog",
      npm_package_dependencies_vite: "^4.5.0",
      npm_package_dependencies_puppeteer: "13.5.0",
      npm_package_dependencies_lodash: "^4.17.21",
      npm_package_dependencies__web3_onboard_react: "2.9.2",
      npm_package_dependencies__web3_onboard_injected_wallets: "2.11.1",
      npm_package_devDependencies_tailwindcss_cli: "^0.1.2",
      npm_package_devDependencies_cypress: "^8.3.0",
      npm_package_devDependencies__safe_global_safe_apps_sdk: "^8.1.0",
      npm_package_dependencies_bnc_onboard: "1.39.1",
      npm_package_dependencies__lottiefiles_react_lottie_player: "^3.5.3",
      npm_package_devDependencies_react_app_rewired: "^2.2.1",
      npm_package_devDependencies_polished: "^4.1.3",
      npm_package_devDependencies_i18next_browser_languagedetector: "^6.1.2",
      npm_package_devDependencies__emotion_react: "^11.10.5",
      npm_config_version_git_tag: "true",
      npm_config_version_git_sign: "",
      npm_package_license: "GPL-3.0-or-later",
      npm_package_dependencies_immutability_helper: "^3.1.1",
      npm_package_devDependencies_start_server_and_test: "^1.11.0",
      npm_config_strict_ssl: "true",
      npm_package_scripts_serve_media:
        "REACT_APP_PAGE=media tsx ./src/utils/serve",
      npm_package_dependencies_vite_plugin_static_copy: "^0.17.0",
      npm_package_dependencies_commander: "^12.1.0",
      npm_package_devDependencies_tsx: "^4.1.1",
      npm_package_devDependencies_netlify_cli: "~6.9.6",
      PWD: "/home/runner/work/app/app",
      npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
      npm_package_dependencies_object_hash: "^3.0.0",
      npm_package_dependencies_rebass: "^4.0.7",
      npm_package_dependencies__naerth_commander_autocomplete: "^0.0.9",
      npm_package_dependencies__mui_x_charts: "^7.7.0",
      npm_package_devDependencies_serve: "^12.0.0",
      npm_package_devDependencies_react_ga: "^3.3.0",
      npm_package_devDependencies_postcss: "^8.4.31",
      npm_package_devDependencies_https_browserify: "^1.0.0",
      npm_package_devDependencies__mui_material: "^5.5.3",
      npm_package_devDependencies__actions_core: "^1.6.0",
      npm_config_save_prefix: "^",
      npm_config_ignore_optional: "",
      REACT_APP_ANGLE_API: "https://api.angle.money",
      npm_package_devDependencies_rollup_plugin_visualizer: "^5.9.2",
      npm_package_devDependencies_react_redux: "^7.2.6",
      npm_package_scripts_check_bundle: "vite-bundle-visualizer --open",
      npm_package_scripts_check_lint: "biome lint ./src",
      npm_package_dependencies_react_use: "^17.4.0",
      npm_package_devDependencies__tailwindcss_line_clamp: "^0.4.2",
      INIT_CWD: "/home/runner/work/app/app",
      npm_package_devDependencies_react_dom: "^18.1.0",
      NODE_ENV: "production",
    };
    return fs.find((n) => n === e) ? e : "app";
  },
  ds = ps(),
  gs = typeof window > "u",
  hs = {
    initImmediate: !1,
    backend: { loadPath: "/locales/{{lng}}.json" },
    load: "languageOnly",
    react: {
      useSuspense: !1,
      transSupportBasicHtmlNodes: !0,
      transKeepBasicHtmlNodesFor: ["br", "strong"],
    },
    fallbackLng: "en",
    preload: ["en"],
    lng: "en",
    keySeparator: !1,
    interpolation: { escapeValue: !1 },
  };
$.use(gs ? Qt : Zt)
  .use(Wr)
  .use(tu)
  .init(hs);
const Ds = Be.lazy(() =>
    Oe(
      () => import("./AppMerkl-0ae45018.js").then((e) => e.A),
      [
        "assets/AppMerkl-0ae45018.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/PageHeader-912a2f98.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/Collapsible-a64048f9.js",
        "assets/priceReference-015357d4.js",
        "assets/Styles-0fb7b513.js",
        "assets/index-3f902e89.js",
        "assets/Chain-3723cd4b.js",
        "assets/index-1cb35db4.js",
        "assets/DAppProvider-c8d036f3.js",
        "assets/Token-a83998a3.js",
        "assets/Composable-ac14314e.js",
        "assets/StackedAreaChart-0e1743e6.js",
        "assets/manifest-2e7abded.js",
        "assets/generateSeries-b68fd0ff.js",
        "assets/index-cb9980c1.js",
      ]
    )
  ),
  ms = Be.lazy(() =>
    Oe(
      () => import("./App-119f4f5a.js"),
      [
        "assets/App-119f4f5a.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/Chain-3723cd4b.js",
        "assets/priceReference-015357d4.js",
        "assets/PageHeader-912a2f98.js",
        "assets/DAppProvider-c8d036f3.js",
        "assets/index-3f902e89.js",
        "assets/Collapsible-a64048f9.js",
        "assets/Styles-0fb7b513.js",
        "assets/index-1cb35db4.js",
        "assets/index-5f2f4f7a.js",
        "assets/holyheld-6c515802.js",
        "assets/useInterval-4f06142c.js",
      ]
    )
  ),
  vs = Be.lazy(() =>
    Oe(
      () => import("./AppLanding-daa19c16.js"),
      [
        "assets/AppLanding-daa19c16.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/PageHeader-912a2f98.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/holyheld-6c515802.js",
        "assets/Styles-0fb7b513.js",
        "assets/priceReference-015357d4.js",
        "assets/index-1cb35db4.js",
        "assets/Chain-3723cd4b.js",
        "assets/overview-37d00f96.js",
        "assets/useTitle-4b27eaad.js",
        "assets/useInterval-4f06142c.js",
        "assets/Composable-ac14314e.js",
        "assets/Token-a83998a3.js",
        "assets/DAppProvider-c8d036f3.js",
      ]
    )
  ),
  As = Be.lazy(() =>
    Oe(
      () => import("./AppMerklLanding-e22861e6.js"),
      [
        "assets/AppMerklLanding-e22861e6.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/PageHeader-912a2f98.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/useTitle-4b27eaad.js",
        "assets/Composable-ac14314e.js",
        "assets/index-1cb35db4.js",
        "assets/useInterval-4f06142c.js",
        "assets/index-cb9980c1.js",
        "assets/generateSeries-b68fd0ff.js",
      ]
    )
  ),
  Cs = Be.lazy(() =>
    Oe(
      () => import("./AppAnalytics-0ced61c0.js"),
      [
        "assets/AppAnalytics-0ced61c0.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/PageHeader-912a2f98.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/Collapsible-a64048f9.js",
        "assets/priceReference-015357d4.js",
        "assets/Styles-0fb7b513.js",
        "assets/StackedAreaChart-0e1743e6.js",
        "assets/overview-37d00f96.js",
        "assets/index-5f2f4f7a.js",
        "assets/generateSeries-b68fd0ff.js",
      ]
    )
  ),
  _s = Be.lazy(() =>
    Oe(
      () => import("./AppMedia-1bce98ed.js"),
      [
        "assets/AppMedia-1bce98ed.js",
        "assets/react-ac02b43c.js",
        "assets/lodash-90a1c433.js",
        "assets/index-6c9a656c.js",
        "assets/style-053d0d8d.js",
        "assets/DAppProvider-c8d036f3.js",
        "assets/priceReference-015357d4.js",
        "assets/manifest-2e7abded.js",
      ]
    )
  ),
  Fs = (e) => {
    switch (e) {
      case "merkl":
        return X.jsx(Ds, {});
      case "merkl-landing":
        return X.jsx(As, {});
      case "analytics":
        return X.jsx(Cs, {});
      case "landing":
        return X.jsx(vs, {});
      case "media":
        return X.jsx(_s, {});
      default:
        return X.jsx(ms, {});
    }
  };
function Vr() {
  return Fs(ds);
}
const Ue = document.getElementById("root");
Ue != null && Ue.innerText
  ? iu(Ue, X.jsx(er, { children: X.jsx(Vr, {}) }))
  : uu(Ue).render(X.jsx(er, { children: X.jsx(Vr, {}) }));
export { ds as a, $ as b, Ro as c, gs as i, Mo as r };
