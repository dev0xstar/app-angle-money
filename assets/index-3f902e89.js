import {
  b as dt,
  u as ne,
  B as D,
  a0 as ut,
  aH as ft,
  I as F,
  af as Te,
  k as xe,
  at as Ke,
  f as Le,
  m as W,
  ac as Me,
  ad as De,
  S as he,
  aw as ht,
  F as pt,
  g as ke,
  j as ue,
  C as $e,
  ae as mt,
  a6 as xt,
  X as gt,
  aI as _e,
  i as be,
  s as bt,
  aJ as yt,
  aK as Be,
  aL as jt,
  aM as ye,
  aN as wt,
  aO as vt,
  aP as kt,
  T as oe,
  aQ as qe,
  aR as St,
} from "./index-6c9a656c.js";
import {
  f as H,
  I as e,
  S as Ce,
  a6 as Nt,
  a7 as Ct,
  R as Se,
} from "./react-ac02b43c.js";
import {
  M as tt,
  B as je,
  b as At,
  a as me,
  T as Xe,
} from "./Chain-3723cd4b.js";
import { C as rt, T as Ue, R as Ie } from "./style-053d0d8d.js";
import { P as Et } from "./Collapsible-a64048f9.js";
import { a as Je, c as we } from "./index-779ddf66.js";
import {
  D as It,
  a as Oe,
  k as nt,
  E as Ne,
  y as Tt,
  N as _t,
} from "./priceReference-015357d4.js";
import { u as Fe } from "./Styles-0fb7b513.js";
import { g as st, E as Bt, D as Lt } from "./lodash-90a1c433.js";
import { T as Mt } from "./index-1cb35db4.js";
import { C as Dt, a as $t, D as Ze, d as Ut } from "./PageHeader-912a2f98.js";
function Ar(i, c = null) {
  var o;
  if (c) {
    try {
      if (i === i && (o = dt[c]) != null && o.includes(i)) return !0;
    } catch {}
    return !1;
  }
  try {
    if (i === i) return !0;
  } catch {}
  return !1;
}
const Ot = ({ visible: i, setVisible: c }) => {
  const { chainId: o, provider: u, tokens: p } = ne(),
    y =
      !!p &&
      !!p[o] &&
      Object.keys(p[o]).reduce((j, _) => {
        var L;
        return (
          ["EURA", "ANGLE"].includes(
            (L = p[o][_]) == null ? void 0 : L.symbol
          ) && (j[_] = p[o][_]),
          j
        );
      }, {}),
    [C, T] = H.useState(new Array(Object.keys(y).length).fill(!1));
  return (
    H.useEffect(() => {
      T(new Array(Object.keys(y).length).fill(!1));
    }, [o]),
    e.jsx(tt, {
      title: "Choose tokens to add to your wallet",
      visible: i,
      onCancel: () => {
        c(!1);
      },
      children: Object.keys(y).map((j, _) => {
        var L;
        return e.jsxs(
          "div",
          {
            className:
              "flex w-full items-center justify-between border-b py-2 last:border-b-0 dark:border-black-200",
            children: [
              e.jsx(D, {
                type: "button",
                look: "text",
                leftIcon: e.jsx(ut, { token: j, className: "mr-1 w-6" }),
                children: (L = y[j]) == null ? void 0 : L.symbol,
              }),
              e.jsx(D, {
                type: "button",
                size: "small",
                look: "secondary",
                onClick: async () => {
                  var z, G, b, g;
                  ft(
                    {
                      address: j,
                      symbol: (z = y[j]) == null ? void 0 : z.symbol,
                      decimals: (G = y[j]) == null ? void 0 : G.decimals,
                      image: (b = y[j]) == null ? void 0 : b.logoURI,
                    },
                    u,
                    `addMetamask-${(g = y[j]) == null ? void 0 : g.address}`
                  );
                  const R = [...C];
                  (R[_] = !0), T(R);
                },
                disabled: C[_],
                rightIcon: C[_] && e.jsx(F, { mui: "AddTaskOutlined" }),
                children: C[_] ? "Token added" : "Add token",
              }),
            ],
          },
          _
        );
      }),
    })
  );
};
function Ft() {
  const { address: i, spy: c, setSpy: o, wallet: u } = ne(),
    [p, y] = H.useState(c),
    C = H.useCallback(() => {
      c || o(i), c && o(null);
    }, [i, c, o]),
    T = H.useCallback(
      (j) => {
        const _ = j.target.value.replace(/\s+/g, "");
        if ((y(_), !Te(_))) return o(null);
        o(_);
      },
      [o]
    );
  return e.jsxs(e.Fragment, {
    children: [
      !!u &&
        e.jsx("div", {
          className:
            "flex items-center px-4 py-1.5 text-sm font-bold border-b last:border-b-0 dark:border-black-300",
          children: e.jsx(rt, {
            className:
              "dim flex items-center text-sm font-bold dark:text-sand-500",
            checked: !!c,
            onChange: C,
            children: e.jsx(Ue, {
              overlayClassName: "p-sm",
              placement: "right",
              title:
                "Toggle this icon to enter the 'simulation mode' where transactions are simulated on Tenderly.",
              children: "Simulate Transactions",
            }),
          }),
        }),
      e.jsxs("div", {
        className:
          "flex items-center border-b last:border-b-0 px-4 py-1.5 text-sm font-bold dark:border-black-300",
        children: [
          e.jsx(F, {
            mui: "Visibility",
            className: `mr-2 dark:text-peach-500 ${
              (!c || c !== p) && "opacity-70 dark:text-blue-500"
            }`,
          }),
          e.jsx("input", {
            className:
              "flex-1 bg-transparent placeholder:text-sm text-xs dark:text-sand-500",
            type: "text",
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            value: p ?? "",
            spellCheck: "false",
            placeholder: "Spy Address",
            pattern: "^(0x[a-fA-F0-9]{40})$",
            onChange: T,
          }),
        ],
      }),
    ],
  });
}
function Rt() {
  const { allowanceType: i, setAllowanceType: c } = xe(),
    { t: o } = Ce(),
    u = H.useCallback(
      (p) => {
        localStorage.setItem("ALLOWANCE_TYPE", JSON.stringify(p.target.value)),
          c(p.target.value);
      },
      [c]
    );
  return e.jsxs("div", {
    className: "flex px-4 py-1.5 text-sm font-bold",
    children: [
      e.jsx("div", {
        className: "flex items-center",
        children: e.jsx(Ue, {
          overlayClassName: "p-sm",
          placement: "right",
          title: o(
            "When an approval is required, you can choose whether to give an infinite approval or just the minimum amount to the contract."
          ),
          children: o("Approval"),
        }),
      }),
      e.jsx("div", {
        className: "ml-8 flex items-center",
        children: e.jsxs(Ie.Group, {
          onChange: u,
          value: i,
          className: "flex flex-col gap-1",
          children: [
            e.jsx(Ie, {
              className: "dim text-sm font-bold dark:text-sand-500",
              value: "limited",
              children: o("Limited"),
            }),
            e.jsx(Ie, {
              className: "dim text-sm font-bold dark:text-sand-500",
              value: "unlimited",
              children: o("Unlimited"),
            }),
          ],
        }),
      }),
    ],
  });
}
function Yt() {
  const { t: i } = Ce(),
    { showTest: c, setShowTest: o } = xe(),
    u = H.useCallback(() => {
      localStorage.setItem("SHOW_TEST", JSON.stringify(!c)), o(!c);
    }, [c, o]);
  return e.jsx("div", {
    className:
      "flex items-center border-b px-4 py-1.5 text-sm font-bold dark:border-black-300",
    children: e.jsx(rt, {
      className: "flex items-center text-sm font-bold dark:text-sand-500",
      checked: c,
      onChange: u,
      children: i("Show Test Tokens"),
    }),
  });
}
function zt() {
  const { priceReference: i, setPriceReference: c } = xe(),
    { address: o, chainId: u, gasPrice: p } = ne(),
    y = o !== It;
  return e.jsxs("div", {
    className: `${
      Je === "merkl" && !y ? "" : "border-l"
    } flex flex-col  w-full dark:border-black-300 justify-center`,
    children: [
      e.jsx("div", {
        className: "px-3 py-1.5 flex justify-center w-full",
        children: e.jsx(Et, { priceReference: i, setPriceReference: c }),
      }),
      Je === "merkl" &&
        e.jsx("div", {
          className:
            "border-t px-3 py-1.5 dark:border-black-300 flex justify-center w-full",
          children: e.jsx(D, {
            className: `ease flex cursor-pointer items-center truncate text-sm font-bold dark:text-black-200 ${
              Ke.L2.some((C) => C === u)
                ? "!cursoauto dark:hover:!text-black-200"
                : "dark:hover:!text-peach-500"
            } text-sm`,
            onClick: () =>
              !Ke.L2.some((C) => C === u) &&
              window.open(Le(u, "", "gas"), "_blank"),
            look: "text",
            leftIcon: e.jsx(F, {
              mui: "LocalGasStationSharp",
              className: "dark:!text-blue-500",
            }),
            children: p ? (p / 1e9).toFixed(3) : "-",
          }),
        }),
    ],
  });
}
function Ht() {
  const { t: i } = Ce(),
    { defaultSlippage: c, setDefaultSlippage: o } = xe();
  return e.jsxs("div", {
    className:
      "flex items-center justify-between gap-4 border-b px-4 py-1.5 text-sm font-bold dark:border-black-300",
    children: [
      e.jsx("div", {
        children: e.jsx(Ue, {
          overlayClassName: "p-sm",
          placement: "right",
          title: i(
            "Adjust the minimum amount of tokens you are ready to get when a slippage is used."
          ),
          children: i("Default Slippage"),
        }),
      }),
      e.jsx(W, {
        size: "s",
        type: "number",
        className: "mt-px text-sm",
        state: [c, o],
        suffix: "%",
      }),
    ],
  });
}
function Er(i) {
  const { showDefaultSlippage: c = !0, showTestSettings: o = !1 } = i,
    [u, p] = H.useState(!1);
  return e.jsxs("div", {
    className:
      "rounded-md overflow-hidden dark:text-sand-500 w-full dark:bg-black-700",
    children: [
      e.jsx(Ot, { visible: u, setVisible: p }),
      c && e.jsx(Ht, {}),
      e.jsxs("div", {
        className: "flex gap-2 border-b dark:border-black-300",
        children: [e.jsx(Rt, {}), e.jsx(zt, {})],
      }),
      o && e.jsx(Yt, {}),
      e.jsx(Ft, {}),
    ],
  });
}
var Re = {},
  Gt = De;
Object.defineProperty(Re, "__esModule", { value: !0 });
var ot = (Re.default = void 0),
  Wt = Gt(Me()),
  Pt = e;
ot = Re.default = (0, Wt.default)(
  (0, Pt.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z",
  }),
  "CheckCircleSharp"
);
var Ye = {},
  Vt = De;
Object.defineProperty(Ye, "__esModule", { value: !0 });
var it = (Ye.default = void 0),
  Kt = Vt(Me()),
  qt = e;
it = Ye.default = (0, Kt.default)(
  (0, qt.jsx)("path", {
    d: "M19 19H5V5h7V3H3v18h18v-9h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z",
  }),
  "LaunchSharp"
);
var ze = {},
  Xt = De;
Object.defineProperty(ze, "__esModule", { value: !0 });
var at = (ze.default = void 0),
  Jt = Xt(Me()),
  Zt = e;
at = ze.default = (0, Jt.default)(
  (0, Zt.jsx)("path", { d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" }),
  "WarningSharp"
);
const Qt = ({ className: i = "" }) =>
    e.jsx("svg", {
      className: `${i} h-4 w-4 stroke-current motion-safe:animate-spin`,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: e.jsx("path", {
        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  er = ({ hash: i, summary: c }) => {
    var T, j, _, L, R;
    const { chainId: o } = ne(),
      u = Le(o, i, "transaction"),
      { transactions: p } = Oe(),
      y = !((T = p == null ? void 0 : p[i]) != null && T.receipt),
      C =
        !y &&
        (((_ = (j = p == null ? void 0 : p[i]) == null ? void 0 : j.receipt) ==
        null
          ? void 0
          : _.status) === 1 ||
          typeof ((R =
            (L = p == null ? void 0 : p[i]) == null ? void 0 : L.receipt) ==
          null
            ? void 0
            : R.status) > "u");
    return e.jsxs("div", {
      className: "flex w-full items-center justify-between",
      children: [
        e.jsxs("a", {
          href: u,
          className: "hover:dark:text-peach-500",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [c, e.jsx(it, { className: "ml-2 inline !h-4 !w-4" })],
        }),
        e.jsx("div", {
          className: `${
            y
              ? "dark:text-peach-500"
              : C
              ? "dark:text-green-700"
              : "dark:text-coral-700"
          } `,
          children: y
            ? e.jsx(Qt, { className: "dark:text-sand-500" })
            : C
            ? e.jsx(ot, { className: "small dark:text-green-700" })
            : e.jsx(at, { className: "text-coral-700" }),
        }),
      ],
    });
  },
  Ir = ({ visible: i, setVisible: c }) => {
    const {
        address: o,
        wallet: u,
        disconnect: p,
        connect: y,
        accounts: C,
        connectAddress: T,
      } = ne(),
      { transactions: j, removeAllTransactions: _ } = Oe();
    return (
      Ce(),
      C && (C == null ? void 0 : C.length) > 1,
      e.jsxs(tt, {
        title: "Wallet Details",
        titleIcon: e.jsx(F, { mui: "AccountBalanceWallet" }),
        visible: i,
        onCancel: () => c(!1),
        children: [
          e.jsxs("div", {
            className: "relative mb-5 p-6 ",
            children: [
              e.jsx("p", {
                className: "mb-4 text-center font-bold",
                children:
                  u != null && u.label ? `Connected with ${u.label}` : "",
              }),
              e.jsxs("div", {
                className:
                  "mb-4 flex items-center justify-center font-bold gap-2",
                children: [
                  e.jsx(he, {
                    state: [o, T],
                    options:
                      C == null
                        ? void 0
                        : C.map(({ address: L }) => ({ label: L, value: L })),
                  }),
                  e.jsx(ht, { toCopy: o }),
                ],
              }),
              e.jsxs("div", {
                className: "flex justify-center gap-2",
                children: [
                  e.jsx(D, {
                    type: "button",
                    look: "primary",
                    onClick: y,
                    children: "Change",
                  }),
                  e.jsx(D, {
                    type: "button",
                    look: "secondary",
                    onClick: () => {
                      p(), c(!1);
                    },
                    children: "Disconnect",
                  }),
                ],
              }),
            ],
          }),
          Object.values(j).length > 0 &&
            e.jsxs("div", {
              className: "flex w-full flex-col",
              children: [
                e.jsxs("div", {
                  className:
                    "flex w-full flex-wrap items-center justify-between pb-4 pt-2",
                  children: [
                    e.jsx("p", {
                      className: "text-lg font-bold",
                      children: "Recent transactions",
                    }),
                    e.jsx(D, {
                      type: "button",
                      look: "secondary",
                      onClick: _,
                      leftIcon: e.jsx(F, { mui: "ChangeCircleOutlined" }),
                      children: "Clear All",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "justify-content-start",
                  children:
                    j &&
                    Object.values(j)
                      .reverse()
                      .map((L, R) =>
                        e.jsx(
                          "div",
                          {
                            children: e.jsx(
                              er,
                              { hash: L.hash, summary: L.summary },
                              L.hash
                            ),
                          },
                          R.toString()
                        )
                      ),
                }),
              ],
            }),
        ],
      })
    );
  };
function Tr({
  amountPerPage: i,
  page: c,
  pages: o,
  setAmountPerPage: u,
  onPageDecrement: p,
  onPageIncrement: y,
  setPage: C,
  children: T,
}) {
  return e.jsxs("div", {
    className: "flex flex-1 items-center justify-between gap-2",
    children: [
      e.jsxs("div", {
        className: "inline-flex gap-2",
        children: [
          e.jsx(D, {
            type: "button",
            look: "group",
            buttonsGroup: [
              e.jsx(
                D,
                {
                  onClick: () => u((j) => j + 10),
                  disabled: o === 1,
                  size: "small",
                  look: "group",
                  rightIcon: e.jsx(F, { size: "s", mui: "ArrowDownward" }),
                  children: "More",
                },
                "more"
              ),
              e.jsx(
                he,
                {
                  look: "group",
                  size: "s",
                  state: [
                    i == null ? void 0 : i.toString(),
                    (j) => u(Number.parseInt(j)),
                  ],
                  options: [10, 20, 30, 40, 50, 100].map((j) => ({
                    value: j == null ? void 0 : j.toString(),
                    label: j == null ? void 0 : j.toString(),
                  })),
                  placement: "bottomLeft",
                },
                "size"
              ),
              e.jsx(
                D,
                {
                  onClick: () => u((j) => Math.max(10, j - 10)),
                  disabled: i <= 10,
                  size: "small",
                  look: "group",
                  rightIcon: e.jsx(F, { size: "s", mui: "ArrowUpward" }),
                  children: "Less",
                },
                "less"
              ),
            ],
          }),
          T,
        ],
      }),
      e.jsx(D, {
        type: "button",
        look: "group",
        buttonsGroup: [
          e.jsx(
            D,
            {
              onClick: p,
              className: `${c <= 1 && "disabled"}`,
              size: "small",
              look: "group",
              onlyIcon: e.jsx(F, { mui: "ChevronLeft" }),
            },
            "prevPage"
          ),
          e.jsxs(
            D,
            {
              onClick: () => C(1),
              size: "small",
              look: "group",
              children: [c, " / ", o],
            },
            "pages"
          ),
          e.jsx(
            D,
            {
              className: `${c >= o && "disabled"}`,
              onClick: y,
              size: "small",
              look: "group",
              onlyIcon: e.jsx(F, { mui: "ChevronRight" }),
            },
            "nextPage"
          ),
        ],
      }),
    ],
  });
}
var lt = { exports: {} };
(function (i, c) {
  (function (o) {
    i.exports = o();
  })(function () {
    return (function o(u, p, y) {
      function C(_, L) {
        if (!p[_]) {
          if (!u[_]) {
            var R = typeof we == "function" && we;
            if (!L && R) return R(_, !0);
            if (T) return T(_, !0);
            throw new Error("Cannot find module '" + _ + "'");
          }
          (L = p[_] = { exports: {} }),
            u[_][0].call(
              L.exports,
              function (z) {
                var G = u[_][1][z];
                return C(G || z);
              },
              L,
              L.exports,
              o,
              u,
              p,
              y
            );
        }
        return p[_].exports;
      }
      for (var T = typeof we == "function" && we, j = 0; j < y.length; j++)
        C(y[j]);
      return C;
    })(
      {
        1: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              var b = o("crypto");
              function g(d, x) {
                x = A(d, x);
                var n;
                return (
                  (n =
                    x.algorithm !== "passthrough"
                      ? b.createHash(x.algorithm)
                      : new M()).write === void 0 &&
                    ((n.write = n.update), (n.end = n.update)),
                  v(x, n).dispatch(d),
                  n.update || n.end(""),
                  n.digest
                    ? n.digest(x.encoding === "buffer" ? void 0 : x.encoding)
                    : ((d = n.read()),
                      x.encoding !== "buffer" ? d.toString(x.encoding) : d)
                );
              }
              ((p = u.exports = g).sha1 = function (d) {
                return g(d);
              }),
                (p.keys = function (d) {
                  return g(d, {
                    excludeValues: !0,
                    algorithm: "sha1",
                    encoding: "hex",
                  });
                }),
                (p.MD5 = function (d) {
                  return g(d, { algorithm: "md5", encoding: "hex" });
                }),
                (p.keysMD5 = function (d) {
                  return g(d, {
                    algorithm: "md5",
                    encoding: "hex",
                    excludeValues: !0,
                  });
                });
              var h = b.getHashes ? b.getHashes().slice() : ["sha1", "md5"],
                S =
                  (h.push("passthrough"),
                  ["buffer", "hex", "binary", "base64"]);
              function A(d, x) {
                var n = {};
                if (
                  ((n.algorithm = (x = x || {}).algorithm || "sha1"),
                  (n.encoding = x.encoding || "hex"),
                  (n.excludeValues = !!x.excludeValues),
                  (n.algorithm = n.algorithm.toLowerCase()),
                  (n.encoding = n.encoding.toLowerCase()),
                  (n.ignoreUnknown = x.ignoreUnknown === !0),
                  (n.respectType = x.respectType !== !1),
                  (n.respectFunctionNames = x.respectFunctionNames !== !1),
                  (n.respectFunctionProperties =
                    x.respectFunctionProperties !== !1),
                  (n.unorderedArrays = x.unorderedArrays === !0),
                  (n.unorderedSets = x.unorderedSets !== !1),
                  (n.unorderedObjects = x.unorderedObjects !== !1),
                  (n.replacer = x.replacer || void 0),
                  (n.excludeKeys = x.excludeKeys || void 0),
                  d === void 0)
                )
                  throw new Error("Object argument required.");
                for (var a = 0; a < h.length; ++a)
                  h[a].toLowerCase() === n.algorithm.toLowerCase() &&
                    (n.algorithm = h[a]);
                if (h.indexOf(n.algorithm) === -1)
                  throw new Error(
                    'Algorithm "' +
                      n.algorithm +
                      '"  not supported. supported values: ' +
                      h.join(", ")
                  );
                if (
                  S.indexOf(n.encoding) === -1 &&
                  n.algorithm !== "passthrough"
                )
                  throw new Error(
                    'Encoding "' +
                      n.encoding +
                      '"  not supported. supported values: ' +
                      S.join(", ")
                  );
                return n;
              }
              function w(d) {
                if (typeof d == "function")
                  return (
                    /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(
                      Function.prototype.toString.call(d)
                    ) != null
                  );
              }
              function v(d, x, n) {
                n = n || [];
                function a(r) {
                  return x.update ? x.update(r, "utf8") : x.write(r, "utf8");
                }
                return {
                  dispatch: function (r) {
                    return this[
                      "_" +
                        ((r = d.replacer ? d.replacer(r) : r) === null
                          ? "null"
                          : typeof r)
                    ](r);
                  },
                  _object: function (r) {
                    var f,
                      m = Object.prototype.toString.call(r),
                      U = /\[object (.*)\]/i.exec(m);
                    if (
                      ((U = (U = U
                        ? U[1]
                        : "unknown:[" + m + "]").toLowerCase()),
                      0 <= (m = n.indexOf(r)))
                    )
                      return this.dispatch("[CIRCULAR:" + m + "]");
                    if (
                      (n.push(r), T !== void 0 && T.isBuffer && T.isBuffer(r))
                    )
                      return a("buffer:"), a(r);
                    if (
                      U === "object" ||
                      U === "function" ||
                      U === "asyncfunction"
                    )
                      return (
                        (m = Object.keys(r)),
                        d.unorderedObjects && (m = m.sort()),
                        d.respectType === !1 ||
                          w(r) ||
                          m.splice(
                            0,
                            0,
                            "prototype",
                            "__proto__",
                            "constructor"
                          ),
                        d.excludeKeys &&
                          (m = m.filter(function ($) {
                            return !d.excludeKeys($);
                          })),
                        a("object:" + m.length + ":"),
                        (f = this),
                        m.forEach(function ($) {
                          f.dispatch($),
                            a(":"),
                            d.excludeValues || f.dispatch(r[$]),
                            a(",");
                        })
                      );
                    if (!this["_" + U]) {
                      if (d.ignoreUnknown) return a("[" + U + "]");
                      throw new Error('Unknown object type "' + U + '"');
                    }
                    this["_" + U](r);
                  },
                  _array: function (r, $) {
                    $ = $ !== void 0 ? $ : d.unorderedArrays !== !1;
                    var m = this;
                    if ((a("array:" + r.length + ":"), !$ || r.length <= 1))
                      return r.forEach(function (O) {
                        return m.dispatch(O);
                      });
                    var U = [],
                      $ = r.map(function (O) {
                        var B = new M(),
                          K = n.slice();
                        return (
                          v(d, B, K).dispatch(O),
                          (U = U.concat(K.slice(n.length))),
                          B.read().toString()
                        );
                      });
                    return (n = n.concat(U)), $.sort(), this._array($, !1);
                  },
                  _date: function (r) {
                    return a("date:" + r.toJSON());
                  },
                  _symbol: function (r) {
                    return a("symbol:" + r.toString());
                  },
                  _error: function (r) {
                    return a("error:" + r.toString());
                  },
                  _boolean: function (r) {
                    return a("bool:" + r.toString());
                  },
                  _string: function (r) {
                    a("string:" + r.length + ":"), a(r.toString());
                  },
                  _function: function (r) {
                    a("fn:"),
                      w(r)
                        ? this.dispatch("[native]")
                        : this.dispatch(r.toString()),
                      d.respectFunctionNames !== !1 &&
                        this.dispatch("function-name:" + String(r.name)),
                      d.respectFunctionProperties && this._object(r);
                  },
                  _number: function (r) {
                    return a("number:" + r.toString());
                  },
                  _xml: function (r) {
                    return a("xml:" + r.toString());
                  },
                  _null: function () {
                    return a("Null");
                  },
                  _undefined: function () {
                    return a("Undefined");
                  },
                  _regexp: function (r) {
                    return a("regex:" + r.toString());
                  },
                  _uint8array: function (r) {
                    return (
                      a("uint8array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _uint8clampedarray: function (r) {
                    return (
                      a("uint8clampedarray:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _int8array: function (r) {
                    return (
                      a("int8array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _uint16array: function (r) {
                    return (
                      a("uint16array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _int16array: function (r) {
                    return (
                      a("int16array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _uint32array: function (r) {
                    return (
                      a("uint32array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _int32array: function (r) {
                    return (
                      a("int32array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _float32array: function (r) {
                    return (
                      a("float32array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _float64array: function (r) {
                    return (
                      a("float64array:"),
                      this.dispatch(Array.prototype.slice.call(r))
                    );
                  },
                  _arraybuffer: function (r) {
                    return a("arraybuffer:"), this.dispatch(new Uint8Array(r));
                  },
                  _url: function (r) {
                    return a("url:" + r.toString());
                  },
                  _map: function (r) {
                    return (
                      a("map:"),
                      (r = Array.from(r)),
                      this._array(r, d.unorderedSets !== !1)
                    );
                  },
                  _set: function (r) {
                    return (
                      a("set:"),
                      (r = Array.from(r)),
                      this._array(r, d.unorderedSets !== !1)
                    );
                  },
                  _file: function (r) {
                    return (
                      a("file:"),
                      this.dispatch([r.name, r.size, r.type, r.lastModfied])
                    );
                  },
                  _blob: function () {
                    if (d.ignoreUnknown) return a("[blob]");
                    throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
                  },
                  _domwindow: function () {
                    return a("domwindow");
                  },
                  _bigint: function (r) {
                    return a("bigint:" + r.toString());
                  },
                  _process: function () {
                    return a("process");
                  },
                  _timer: function () {
                    return a("timer");
                  },
                  _pipe: function () {
                    return a("pipe");
                  },
                  _tcp: function () {
                    return a("tcp");
                  },
                  _udp: function () {
                    return a("udp");
                  },
                  _tty: function () {
                    return a("tty");
                  },
                  _statwatcher: function () {
                    return a("statwatcher");
                  },
                  _securecontext: function () {
                    return a("securecontext");
                  },
                  _connection: function () {
                    return a("connection");
                  },
                  _zlib: function () {
                    return a("zlib");
                  },
                  _context: function () {
                    return a("context");
                  },
                  _nodescript: function () {
                    return a("nodescript");
                  },
                  _httpparser: function () {
                    return a("httpparser");
                  },
                  _dataview: function () {
                    return a("dataview");
                  },
                  _signal: function () {
                    return a("signal");
                  },
                  _fsevent: function () {
                    return a("fsevent");
                  },
                  _tlswrap: function () {
                    return a("tlswrap");
                  },
                };
              }
              function M() {
                return {
                  buf: "",
                  write: function (d) {
                    this.buf += d;
                  },
                  end: function (d) {
                    this.buf += d;
                  },
                  read: function () {
                    return this.buf;
                  },
                };
              }
              p.writeToStream = function (d, x, n) {
                return (
                  n === void 0 && ((n = x), (x = {})),
                  v((x = A(d, x)), n).dispatch(d)
                );
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/fake_9a5aa49d.js",
              "/"
            );
          },
          { buffer: 3, crypto: 5, lYpoI2: 11 },
        ],
        2: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              (function (b) {
                var g = typeof Uint8Array < "u" ? Uint8Array : Array,
                  h = "+".charCodeAt(0),
                  S = "/".charCodeAt(0),
                  A = "0".charCodeAt(0),
                  w = "a".charCodeAt(0),
                  v = "A".charCodeAt(0),
                  M = "-".charCodeAt(0),
                  d = "_".charCodeAt(0);
                function x(n) {
                  return (
                    (n = n.charCodeAt(0)),
                    n === h || n === M
                      ? 62
                      : n === S || n === d
                      ? 63
                      : n < A
                      ? -1
                      : n < A + 10
                      ? n - A + 26 + 26
                      : n < v + 26
                      ? n - v
                      : n < w + 26
                      ? n - w + 26
                      : void 0
                  );
                }
                (b.toByteArray = function (n) {
                  var a, r;
                  if (0 < n.length % 4)
                    throw new Error(
                      "Invalid string. Length must be a multiple of 4"
                    );
                  var f = n.length,
                    f =
                      n.charAt(f - 2) === "="
                        ? 2
                        : n.charAt(f - 1) === "="
                        ? 1
                        : 0,
                    m = new g((3 * n.length) / 4 - f),
                    U = 0 < f ? n.length - 4 : n.length,
                    $ = 0;
                  function O(B) {
                    m[$++] = B;
                  }
                  for (a = 0; a < U; a += 4, 0)
                    O(
                      (16711680 &
                        (r =
                          (x(n.charAt(a)) << 18) |
                          (x(n.charAt(a + 1)) << 12) |
                          (x(n.charAt(a + 2)) << 6) |
                          x(n.charAt(a + 3)))) >>
                        16
                    ),
                      O((65280 & r) >> 8),
                      O(255 & r);
                  return (
                    f == 2
                      ? O(
                          255 &
                            (r =
                              (x(n.charAt(a)) << 2) | (x(n.charAt(a + 1)) >> 4))
                        )
                      : f == 1 &&
                        (O(
                          ((r =
                            (x(n.charAt(a)) << 10) |
                            (x(n.charAt(a + 1)) << 4) |
                            (x(n.charAt(a + 2)) >> 2)) >>
                            8) &
                            255
                        ),
                        O(255 & r)),
                    m
                  );
                }),
                  (b.fromByteArray = function (n) {
                    var a,
                      r,
                      f,
                      m,
                      U = n.length % 3,
                      $ = "";
                    function O(B) {
                      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                        B
                      );
                    }
                    for (a = 0, f = n.length - U; a < f; a += 3)
                      (r = (n[a] << 16) + (n[a + 1] << 8) + n[a + 2]),
                        ($ +=
                          O(((m = r) >> 18) & 63) +
                          O((m >> 12) & 63) +
                          O((m >> 6) & 63) +
                          O(63 & m));
                    switch (U) {
                      case 1:
                        $ =
                          ($ += O((r = n[n.length - 1]) >> 2)) +
                          O((r << 4) & 63) +
                          "==";
                        break;
                      case 2:
                        $ =
                          ($ =
                            ($ += O(
                              (r = (n[n.length - 2] << 8) + n[n.length - 1]) >>
                                10
                            )) + O((r >> 4) & 63)) +
                          O((r << 2) & 63) +
                          "=";
                    }
                    return $;
                  });
              })(p === void 0 ? (this.base64js = {}) : p);
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js",
              "/node_modules/gulp-browserify/node_modules/base64-js/lib"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        3: [
          function (o, u, p) {
            (function (y, C, h, j, _, L, R, z, G) {
              var b = o("base64-js"),
                g = o("ieee754");
              function h(t, s, l) {
                if (!(this instanceof h)) return new h(t, s, l);
                var N,
                  k,
                  I,
                  Y,
                  X = typeof t;
                if (s === "base64" && X == "string")
                  for (
                    t = (Y = t).trim ? Y.trim() : Y.replace(/^\s+|\s+$/g, "");
                    t.length % 4 != 0;

                  )
                    t += "=";
                if (X == "number") N = ee(t);
                else if (X == "string") N = h.byteLength(t, s);
                else {
                  if (X != "object")
                    throw new Error(
                      "First argument needs to be a number, array or string."
                    );
                  N = ee(t.length);
                }
                if (
                  (h._useTypedArrays
                    ? (k = h._augment(new Uint8Array(N)))
                    : (((k = this).length = N), (k._isBuffer = !0)),
                  h._useTypedArrays && typeof t.byteLength == "number")
                )
                  k._set(t);
                else if (
                  q((Y = t)) ||
                  h.isBuffer(Y) ||
                  (Y && typeof Y == "object" && typeof Y.length == "number")
                )
                  for (I = 0; I < N; I++)
                    h.isBuffer(t) ? (k[I] = t.readUInt8(I)) : (k[I] = t[I]);
                else if (X == "string") k.write(t, 0, s);
                else if (X == "number" && !h._useTypedArrays && !l)
                  for (I = 0; I < N; I++) k[I] = 0;
                return k;
              }
              function S(t, s, l, N) {
                return (h._charsWritten = ge(
                  (function (k) {
                    for (var I = [], Y = 0; Y < k.length; Y++)
                      I.push(255 & k.charCodeAt(Y));
                    return I;
                  })(s),
                  t,
                  l,
                  N
                ));
              }
              function A(t, s, l, N) {
                return (h._charsWritten = ge(
                  (function (k) {
                    for (var I, Y, X = [], Z = 0; Z < k.length; Z++)
                      (Y = k.charCodeAt(Z)),
                        (I = Y >> 8),
                        (Y = Y % 256),
                        X.push(Y),
                        X.push(I);
                    return X;
                  })(s),
                  t,
                  l,
                  N
                ));
              }
              function w(t, s, l) {
                var N = "";
                l = Math.min(t.length, l);
                for (var k = s; k < l; k++) N += String.fromCharCode(t[k]);
                return N;
              }
              function v(t, s, l, I) {
                I ||
                  (E(typeof l == "boolean", "missing or invalid endian"),
                  E(s != null, "missing offset"),
                  E(s + 1 < t.length, "Trying to read beyond buffer length"));
                var k,
                  I = t.length;
                if (!(I <= s))
                  return (
                    l
                      ? ((k = t[s]), s + 1 < I && (k |= t[s + 1] << 8))
                      : ((k = t[s] << 8), s + 1 < I && (k |= t[s + 1])),
                    k
                  );
              }
              function M(t, s, l, I) {
                I ||
                  (E(typeof l == "boolean", "missing or invalid endian"),
                  E(s != null, "missing offset"),
                  E(s + 3 < t.length, "Trying to read beyond buffer length"));
                var k,
                  I = t.length;
                if (!(I <= s))
                  return (
                    l
                      ? (s + 2 < I && (k = t[s + 2] << 16),
                        s + 1 < I && (k |= t[s + 1] << 8),
                        (k |= t[s]),
                        s + 3 < I && (k += (t[s + 3] << 24) >>> 0))
                      : (s + 1 < I && (k = t[s + 1] << 16),
                        s + 2 < I && (k |= t[s + 2] << 8),
                        s + 3 < I && (k |= t[s + 3]),
                        (k += (t[s] << 24) >>> 0)),
                    k
                  );
              }
              function d(t, s, l, N) {
                if (
                  (N ||
                    (E(typeof l == "boolean", "missing or invalid endian"),
                    E(s != null, "missing offset"),
                    E(s + 1 < t.length, "Trying to read beyond buffer length")),
                  !(t.length <= s))
                )
                  return (
                    (N = v(t, s, l, !0)), 32768 & N ? -1 * (65535 - N + 1) : N
                  );
              }
              function x(t, s, l, N) {
                if (
                  (N ||
                    (E(typeof l == "boolean", "missing or invalid endian"),
                    E(s != null, "missing offset"),
                    E(s + 3 < t.length, "Trying to read beyond buffer length")),
                  !(t.length <= s))
                )
                  return (
                    (N = M(t, s, l, !0)),
                    2147483648 & N ? -1 * (4294967295 - N + 1) : N
                  );
              }
              function n(t, s, l, N) {
                return (
                  N ||
                    (E(typeof l == "boolean", "missing or invalid endian"),
                    E(s + 3 < t.length, "Trying to read beyond buffer length")),
                  g.read(t, s, l, 23, 4)
                );
              }
              function a(t, s, l, N) {
                return (
                  N ||
                    (E(typeof l == "boolean", "missing or invalid endian"),
                    E(s + 7 < t.length, "Trying to read beyond buffer length")),
                  g.read(t, s, l, 52, 8)
                );
              }
              function r(t, s, l, N, k) {
                if (
                  (k ||
                    (E(s != null, "missing value"),
                    E(typeof N == "boolean", "missing or invalid endian"),
                    E(l != null, "missing offset"),
                    E(l + 1 < t.length, "trying to write beyond buffer length"),
                    Ae(s, 65535)),
                  (k = t.length),
                  !(k <= l))
                )
                  for (var I = 0, Y = Math.min(k - l, 2); I < Y; I++)
                    t[l + I] =
                      (s & (255 << (8 * (N ? I : 1 - I)))) >>>
                      (8 * (N ? I : 1 - I));
              }
              function f(t, s, l, N, k) {
                if (
                  (k ||
                    (E(s != null, "missing value"),
                    E(typeof N == "boolean", "missing or invalid endian"),
                    E(l != null, "missing offset"),
                    E(l + 3 < t.length, "trying to write beyond buffer length"),
                    Ae(s, 4294967295)),
                  (k = t.length),
                  !(k <= l))
                )
                  for (var I = 0, Y = Math.min(k - l, 4); I < Y; I++)
                    t[l + I] = (s >>> (8 * (N ? I : 3 - I))) & 255;
              }
              function m(t, s, l, N, k) {
                k ||
                  (E(s != null, "missing value"),
                  E(typeof N == "boolean", "missing or invalid endian"),
                  E(l != null, "missing offset"),
                  E(l + 1 < t.length, "Trying to write beyond buffer length"),
                  Ee(s, 32767, -32768)),
                  t.length <= l || r(t, 0 <= s ? s : 65535 + s + 1, l, N, k);
              }
              function U(t, s, l, N, k) {
                k ||
                  (E(s != null, "missing value"),
                  E(typeof N == "boolean", "missing or invalid endian"),
                  E(l != null, "missing offset"),
                  E(l + 3 < t.length, "Trying to write beyond buffer length"),
                  Ee(s, 2147483647, -2147483648)),
                  t.length <= l ||
                    f(t, 0 <= s ? s : 4294967295 + s + 1, l, N, k);
              }
              function $(t, s, l, N, k) {
                k ||
                  (E(s != null, "missing value"),
                  E(typeof N == "boolean", "missing or invalid endian"),
                  E(l != null, "missing offset"),
                  E(l + 3 < t.length, "Trying to write beyond buffer length"),
                  Pe(s, 34028234663852886e22, -34028234663852886e22)),
                  t.length <= l || g.write(t, s, l, N, 23, 4);
              }
              function O(t, s, l, N, k) {
                k ||
                  (E(s != null, "missing value"),
                  E(typeof N == "boolean", "missing or invalid endian"),
                  E(l != null, "missing offset"),
                  E(l + 7 < t.length, "Trying to write beyond buffer length"),
                  Pe(s, 17976931348623157e292, -17976931348623157e292)),
                  t.length <= l || g.write(t, s, l, N, 52, 8);
              }
              (p.Buffer = h),
                (p.SlowBuffer = h),
                (p.INSPECT_MAX_BYTES = 50),
                (h.poolSize = 8192),
                (h._useTypedArrays = (function () {
                  try {
                    var t = new ArrayBuffer(0),
                      s = new Uint8Array(t);
                    return (
                      (s.foo = function () {
                        return 42;
                      }),
                      s.foo() === 42 && typeof s.subarray == "function"
                    );
                  } catch {
                    return !1;
                  }
                })()),
                (h.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (h.isBuffer = function (t) {
                  return !(t == null || !t._isBuffer);
                }),
                (h.byteLength = function (t, s) {
                  var l;
                  switch (((t += ""), s || "utf8")) {
                    case "hex":
                      l = t.length / 2;
                      break;
                    case "utf8":
                    case "utf-8":
                      l = ce(t).length;
                      break;
                    case "ascii":
                    case "binary":
                    case "raw":
                      l = t.length;
                      break;
                    case "base64":
                      l = Ge(t).length;
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      l = 2 * t.length;
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return l;
                }),
                (h.concat = function (t, s) {
                  if (
                    (E(
                      q(t),
                      `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`
                    ),
                    t.length === 0)
                  )
                    return new h(0);
                  if (t.length === 1) return t[0];
                  if (typeof s != "number")
                    for (k = s = 0; k < t.length; k++) s += t[k].length;
                  for (var l = new h(s), N = 0, k = 0; k < t.length; k++) {
                    var I = t[k];
                    I.copy(l, N), (N += I.length);
                  }
                  return l;
                }),
                (h.prototype.write = function (t, s, l, N) {
                  isFinite(s)
                    ? isFinite(l) || ((N = l), (l = void 0))
                    : ((Z = N), (N = s), (s = l), (l = Z)),
                    (s = Number(s) || 0);
                  var k,
                    I,
                    Y,
                    X,
                    Z = this.length - s;
                  switch (
                    ((!l || Z < (l = Number(l))) && (l = Z),
                    (N = String(N || "utf8").toLowerCase()))
                  ) {
                    case "hex":
                      k = (function (ie, te, re, Q) {
                        re = Number(re) || 0;
                        var J = ie.length - re;
                        (!Q || J < (Q = Number(Q))) && (Q = J),
                          E((J = te.length) % 2 == 0, "Invalid hex string"),
                          J / 2 < Q && (Q = J / 2);
                        for (var pe = 0; pe < Q; pe++) {
                          var Ve = parseInt(te.substr(2 * pe, 2), 16);
                          E(!isNaN(Ve), "Invalid hex string"),
                            (ie[re + pe] = Ve);
                        }
                        return (h._charsWritten = 2 * pe), pe;
                      })(this, t, s, l);
                      break;
                    case "utf8":
                    case "utf-8":
                      (I = this),
                        (Y = s),
                        (X = l),
                        (k = h._charsWritten = ge(ce(t), I, Y, X));
                      break;
                    case "ascii":
                    case "binary":
                      k = S(this, t, s, l);
                      break;
                    case "base64":
                      (I = this),
                        (Y = s),
                        (X = l),
                        (k = h._charsWritten = ge(Ge(t), I, Y, X));
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      k = A(this, t, s, l);
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return k;
                }),
                (h.prototype.toString = function (t, s, l) {
                  var N,
                    k,
                    I,
                    Y,
                    X = this;
                  if (
                    ((t = String(t || "utf8").toLowerCase()),
                    (s = Number(s) || 0),
                    (l = l !== void 0 ? Number(l) : X.length) === s)
                  )
                    return "";
                  switch (t) {
                    case "hex":
                      N = (function (Z, ie, te) {
                        var re = Z.length;
                        (!ie || ie < 0) && (ie = 0),
                          (!te || te < 0 || re < te) && (te = re);
                        for (var Q = "", J = ie; J < te; J++) Q += P(Z[J]);
                        return Q;
                      })(X, s, l);
                      break;
                    case "utf8":
                    case "utf-8":
                      N = (function (Z, ie, te) {
                        var re = "",
                          Q = "";
                        te = Math.min(Z.length, te);
                        for (var J = ie; J < te; J++)
                          Z[J] <= 127
                            ? ((re += We(Q) + String.fromCharCode(Z[J])),
                              (Q = ""))
                            : (Q += "%" + Z[J].toString(16));
                        return re + We(Q);
                      })(X, s, l);
                      break;
                    case "ascii":
                    case "binary":
                      N = w(X, s, l);
                      break;
                    case "base64":
                      (k = X),
                        (Y = l),
                        (N =
                          (I = s) === 0 && Y === k.length
                            ? b.fromByteArray(k)
                            : b.fromByteArray(k.slice(I, Y)));
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      N = (function (Z, ie, te) {
                        for (
                          var re = Z.slice(ie, te), Q = "", J = 0;
                          J < re.length;
                          J += 2
                        )
                          Q += String.fromCharCode(re[J] + 256 * re[J + 1]);
                        return Q;
                      })(X, s, l);
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return N;
                }),
                (h.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (h.prototype.copy = function (t, s, l, N) {
                  if (
                    ((s = s || 0),
                    (N = N || N === 0 ? N : this.length) !== (l = l || 0) &&
                      t.length !== 0 &&
                      this.length !== 0)
                  ) {
                    E(l <= N, "sourceEnd < sourceStart"),
                      E(0 <= s && s < t.length, "targetStart out of bounds"),
                      E(0 <= l && l < this.length, "sourceStart out of bounds"),
                      E(0 <= N && N <= this.length, "sourceEnd out of bounds"),
                      N > this.length && (N = this.length);
                    var k =
                      (N = t.length - s < N - l ? t.length - s + l : N) - l;
                    if (k < 100 || !h._useTypedArrays)
                      for (var I = 0; I < k; I++) t[I + s] = this[I + l];
                    else t._set(this.subarray(l, l + k), s);
                  }
                }),
                (h.prototype.slice = function (t, s) {
                  var l = this.length;
                  if (((t = K(t, l, 0)), (s = K(s, l, l)), h._useTypedArrays))
                    return h._augment(this.subarray(t, s));
                  for (
                    var N = s - t, k = new h(N, void 0, !0), I = 0;
                    I < N;
                    I++
                  )
                    k[I] = this[I + t];
                  return k;
                }),
                (h.prototype.get = function (t) {
                  return (
                    console.log(
                      ".get() is deprecated. Access using array indexes instead."
                    ),
                    this.readUInt8(t)
                  );
                }),
                (h.prototype.set = function (t, s) {
                  return (
                    console.log(
                      ".set() is deprecated. Access using array indexes instead."
                    ),
                    this.writeUInt8(t, s)
                  );
                }),
                (h.prototype.readUInt8 = function (t, s) {
                  if (
                    (s ||
                      (E(t != null, "missing offset"),
                      E(
                        t < this.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(t >= this.length))
                  )
                    return this[t];
                }),
                (h.prototype.readUInt16LE = function (t, s) {
                  return v(this, t, !0, s);
                }),
                (h.prototype.readUInt16BE = function (t, s) {
                  return v(this, t, !1, s);
                }),
                (h.prototype.readUInt32LE = function (t, s) {
                  return M(this, t, !0, s);
                }),
                (h.prototype.readUInt32BE = function (t, s) {
                  return M(this, t, !1, s);
                }),
                (h.prototype.readInt8 = function (t, s) {
                  if (
                    (s ||
                      (E(t != null, "missing offset"),
                      E(
                        t < this.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(t >= this.length))
                  )
                    return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                }),
                (h.prototype.readInt16LE = function (t, s) {
                  return d(this, t, !0, s);
                }),
                (h.prototype.readInt16BE = function (t, s) {
                  return d(this, t, !1, s);
                }),
                (h.prototype.readInt32LE = function (t, s) {
                  return x(this, t, !0, s);
                }),
                (h.prototype.readInt32BE = function (t, s) {
                  return x(this, t, !1, s);
                }),
                (h.prototype.readFloatLE = function (t, s) {
                  return n(this, t, !0, s);
                }),
                (h.prototype.readFloatBE = function (t, s) {
                  return n(this, t, !1, s);
                }),
                (h.prototype.readDoubleLE = function (t, s) {
                  return a(this, t, !0, s);
                }),
                (h.prototype.readDoubleBE = function (t, s) {
                  return a(this, t, !1, s);
                }),
                (h.prototype.writeUInt8 = function (t, s, l) {
                  l ||
                    (E(t != null, "missing value"),
                    E(s != null, "missing offset"),
                    E(s < this.length, "trying to write beyond buffer length"),
                    Ae(t, 255)),
                    s >= this.length || (this[s] = t);
                }),
                (h.prototype.writeUInt16LE = function (t, s, l) {
                  r(this, t, s, !0, l);
                }),
                (h.prototype.writeUInt16BE = function (t, s, l) {
                  r(this, t, s, !1, l);
                }),
                (h.prototype.writeUInt32LE = function (t, s, l) {
                  f(this, t, s, !0, l);
                }),
                (h.prototype.writeUInt32BE = function (t, s, l) {
                  f(this, t, s, !1, l);
                }),
                (h.prototype.writeInt8 = function (t, s, l) {
                  l ||
                    (E(t != null, "missing value"),
                    E(s != null, "missing offset"),
                    E(s < this.length, "Trying to write beyond buffer length"),
                    Ee(t, 127, -128)),
                    s >= this.length ||
                      (0 <= t
                        ? this.writeUInt8(t, s, l)
                        : this.writeUInt8(255 + t + 1, s, l));
                }),
                (h.prototype.writeInt16LE = function (t, s, l) {
                  m(this, t, s, !0, l);
                }),
                (h.prototype.writeInt16BE = function (t, s, l) {
                  m(this, t, s, !1, l);
                }),
                (h.prototype.writeInt32LE = function (t, s, l) {
                  U(this, t, s, !0, l);
                }),
                (h.prototype.writeInt32BE = function (t, s, l) {
                  U(this, t, s, !1, l);
                }),
                (h.prototype.writeFloatLE = function (t, s, l) {
                  $(this, t, s, !0, l);
                }),
                (h.prototype.writeFloatBE = function (t, s, l) {
                  $(this, t, s, !1, l);
                }),
                (h.prototype.writeDoubleLE = function (t, s, l) {
                  O(this, t, s, !0, l);
                }),
                (h.prototype.writeDoubleBE = function (t, s, l) {
                  O(this, t, s, !1, l);
                }),
                (h.prototype.fill = function (t, s, l) {
                  if (
                    ((s = s || 0),
                    (l = l || this.length),
                    E(
                      typeof (t =
                        typeof (t = t || 0) == "string"
                          ? t.charCodeAt(0)
                          : t) == "number" && !isNaN(t),
                      "value is not a number"
                    ),
                    E(s <= l, "end < start"),
                    l !== s && this.length !== 0)
                  ) {
                    E(0 <= s && s < this.length, "start out of bounds"),
                      E(0 <= l && l <= this.length, "end out of bounds");
                    for (var N = s; N < l; N++) this[N] = t;
                  }
                }),
                (h.prototype.inspect = function () {
                  for (var t = [], s = this.length, l = 0; l < s; l++)
                    if (((t[l] = P(this[l])), l === p.INSPECT_MAX_BYTES)) {
                      t[l + 1] = "...";
                      break;
                    }
                  return "<Buffer " + t.join(" ") + ">";
                }),
                (h.prototype.toArrayBuffer = function () {
                  if (typeof Uint8Array > "u")
                    throw new Error(
                      "Buffer.toArrayBuffer not supported in this browser"
                    );
                  if (h._useTypedArrays) return new h(this).buffer;
                  for (
                    var t = new Uint8Array(this.length), s = 0, l = t.length;
                    s < l;
                    s += 1
                  )
                    t[s] = this[s];
                  return t.buffer;
                });
              var B = h.prototype;
              function K(t, s, l) {
                return typeof t != "number"
                  ? l
                  : s <= (t = ~~t)
                  ? s
                  : 0 <= t || 0 <= (t += s)
                  ? t
                  : 0;
              }
              function ee(t) {
                return (t = ~~Math.ceil(+t)) < 0 ? 0 : t;
              }
              function q(t) {
                return (
                  Array.isArray ||
                  function (s) {
                    return (
                      Object.prototype.toString.call(s) === "[object Array]"
                    );
                  }
                )(t);
              }
              function P(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16);
              }
              function ce(t) {
                for (var s = [], l = 0; l < t.length; l++) {
                  var N = t.charCodeAt(l);
                  if (N <= 127) s.push(t.charCodeAt(l));
                  else
                    for (
                      var k = l,
                        I =
                          (55296 <= N && N <= 57343 && l++,
                          encodeURIComponent(t.slice(k, l + 1))
                            .substr(1)
                            .split("%")),
                        Y = 0;
                      Y < I.length;
                      Y++
                    )
                      s.push(parseInt(I[Y], 16));
                }
                return s;
              }
              function Ge(t) {
                return b.toByteArray(t);
              }
              function ge(t, s, l, N) {
                for (
                  var k = 0;
                  k < N && !(k + l >= s.length || k >= t.length);
                  k++
                )
                  s[k + l] = t[k];
                return k;
              }
              function We(t) {
                try {
                  return decodeURIComponent(t);
                } catch {
                  return String.fromCharCode(65533);
                }
              }
              function Ae(t, s) {
                E(
                  typeof t == "number",
                  "cannot write a non-number as a number"
                ),
                  E(
                    0 <= t,
                    "specified a negative value for writing an unsigned value"
                  ),
                  E(t <= s, "value is larger than maximum value for type"),
                  E(Math.floor(t) === t, "value has a fractional component");
              }
              function Ee(t, s, l) {
                E(
                  typeof t == "number",
                  "cannot write a non-number as a number"
                ),
                  E(t <= s, "value larger than maximum allowed value"),
                  E(l <= t, "value smaller than minimum allowed value"),
                  E(Math.floor(t) === t, "value has a fractional component");
              }
              function Pe(t, s, l) {
                E(
                  typeof t == "number",
                  "cannot write a non-number as a number"
                ),
                  E(t <= s, "value larger than maximum allowed value"),
                  E(l <= t, "value smaller than minimum allowed value");
              }
              function E(t, s) {
                if (!t) throw new Error(s || "Failed assertion");
              }
              h._augment = function (t) {
                return (
                  (t._isBuffer = !0),
                  (t._get = t.get),
                  (t._set = t.set),
                  (t.get = B.get),
                  (t.set = B.set),
                  (t.write = B.write),
                  (t.toString = B.toString),
                  (t.toLocaleString = B.toString),
                  (t.toJSON = B.toJSON),
                  (t.copy = B.copy),
                  (t.slice = B.slice),
                  (t.readUInt8 = B.readUInt8),
                  (t.readUInt16LE = B.readUInt16LE),
                  (t.readUInt16BE = B.readUInt16BE),
                  (t.readUInt32LE = B.readUInt32LE),
                  (t.readUInt32BE = B.readUInt32BE),
                  (t.readInt8 = B.readInt8),
                  (t.readInt16LE = B.readInt16LE),
                  (t.readInt16BE = B.readInt16BE),
                  (t.readInt32LE = B.readInt32LE),
                  (t.readInt32BE = B.readInt32BE),
                  (t.readFloatLE = B.readFloatLE),
                  (t.readFloatBE = B.readFloatBE),
                  (t.readDoubleLE = B.readDoubleLE),
                  (t.readDoubleBE = B.readDoubleBE),
                  (t.writeUInt8 = B.writeUInt8),
                  (t.writeUInt16LE = B.writeUInt16LE),
                  (t.writeUInt16BE = B.writeUInt16BE),
                  (t.writeUInt32LE = B.writeUInt32LE),
                  (t.writeUInt32BE = B.writeUInt32BE),
                  (t.writeInt8 = B.writeInt8),
                  (t.writeInt16LE = B.writeInt16LE),
                  (t.writeInt16BE = B.writeInt16BE),
                  (t.writeInt32LE = B.writeInt32LE),
                  (t.writeInt32BE = B.writeInt32BE),
                  (t.writeFloatLE = B.writeFloatLE),
                  (t.writeFloatBE = B.writeFloatBE),
                  (t.writeDoubleLE = B.writeDoubleLE),
                  (t.writeDoubleBE = B.writeDoubleBE),
                  (t.fill = B.fill),
                  (t.inspect = B.inspect),
                  (t.toArrayBuffer = B.toArrayBuffer),
                  t
                );
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/buffer/index.js",
              "/node_modules/gulp-browserify/node_modules/buffer"
            );
          },
          { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 },
        ],
        4: [
          function (o, u, p) {
            (function (y, C, b, j, _, L, R, z, G) {
              var b = o("buffer").Buffer,
                g = 4,
                h = new b(g);
              h.fill(0),
                (u.exports = {
                  hash: function (S, A, w, v) {
                    for (
                      var M = A(
                          (function (r, f) {
                            r.length % g != 0 &&
                              ((m = r.length + (g - (r.length % g))),
                              (r = b.concat([r, h], m)));
                            for (
                              var m,
                                U = [],
                                $ = f ? r.readInt32BE : r.readInt32LE,
                                O = 0;
                              O < r.length;
                              O += g
                            )
                              U.push($.call(r, O));
                            return U;
                          })((S = b.isBuffer(S) ? S : new b(S)), v),
                          8 * S.length
                        ),
                        A = v,
                        d = new b(w),
                        x = A ? d.writeInt32BE : d.writeInt32LE,
                        n = 0;
                      n < M.length;
                      n++
                    )
                      x.call(d, M[n], 4 * n, !0);
                    return d;
                  },
                });
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        5: [
          function (o, u, p) {
            (function (y, C, b, j, _, L, R, z, G) {
              var b = o("buffer").Buffer,
                g = o("./sha"),
                h = o("./sha256"),
                S = o("./rng"),
                A = { sha1: g, sha256: h, md5: o("./md5") },
                w = 64,
                v = new b(w);
              function M(r, f) {
                var m = A[(r = r || "sha1")],
                  U = [];
                return (
                  m || d("algorithm:", r, "is not yet supported"),
                  {
                    update: function ($) {
                      return (
                        b.isBuffer($) || ($ = new b($)),
                        U.push($),
                        $.length,
                        this
                      );
                    },
                    digest: function ($) {
                      var O = b.concat(U),
                        O = f
                          ? (function (B, K, ee) {
                              b.isBuffer(K) || (K = new b(K)),
                                b.isBuffer(ee) || (ee = new b(ee)),
                                K.length > w
                                  ? (K = B(K))
                                  : K.length < w && (K = b.concat([K, v], w));
                              for (
                                var q = new b(w), P = new b(w), ce = 0;
                                ce < w;
                                ce++
                              )
                                (q[ce] = 54 ^ K[ce]), (P[ce] = 92 ^ K[ce]);
                              return (
                                (ee = B(b.concat([q, ee]))),
                                B(b.concat([P, ee]))
                              );
                            })(m, f, O)
                          : m(O);
                      return (U = null), $ ? O.toString($) : O;
                    },
                  }
                );
              }
              function d() {
                var r = [].slice.call(arguments).join(" ");
                throw new Error(
                  [
                    r,
                    "we accept pull requests",
                    "http://github.com/dominictarr/crypto-browserify",
                  ].join(`
`)
                );
              }
              v.fill(0),
                (p.createHash = function (r) {
                  return M(r);
                }),
                (p.createHmac = M),
                (p.randomBytes = function (r, f) {
                  if (!f || !f.call) return new b(S(r));
                  try {
                    f.call(this, void 0, new b(S(r)));
                  } catch (m) {
                    f(m);
                  }
                });
              var x,
                n = [
                  "createCredentials",
                  "createCipher",
                  "createCipheriv",
                  "createDecipher",
                  "createDecipheriv",
                  "createSign",
                  "createVerify",
                  "createDiffieHellman",
                  "pbkdf2",
                ],
                a = function (r) {
                  p[r] = function () {
                    d("sorry,", r, "is not implemented yet");
                  };
                };
              for (x in n) a(n[x]);
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          {
            "./md5": 6,
            "./rng": 7,
            "./sha": 8,
            "./sha256": 9,
            buffer: 3,
            lYpoI2: 11,
          },
        ],
        6: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              var b = o("./helpers");
              function g(d, x) {
                (d[x >> 5] |= 128 << x % 32),
                  (d[14 + (((x + 64) >>> 9) << 4)] = x);
                for (
                  var n = 1732584193,
                    a = -271733879,
                    r = -1732584194,
                    f = 271733878,
                    m = 0;
                  m < d.length;
                  m += 16
                ) {
                  var U = n,
                    $ = a,
                    O = r,
                    B = f,
                    n = S(n, a, r, f, d[m + 0], 7, -680876936),
                    f = S(f, n, a, r, d[m + 1], 12, -389564586),
                    r = S(r, f, n, a, d[m + 2], 17, 606105819),
                    a = S(a, r, f, n, d[m + 3], 22, -1044525330);
                  (n = S(n, a, r, f, d[m + 4], 7, -176418897)),
                    (f = S(f, n, a, r, d[m + 5], 12, 1200080426)),
                    (r = S(r, f, n, a, d[m + 6], 17, -1473231341)),
                    (a = S(a, r, f, n, d[m + 7], 22, -45705983)),
                    (n = S(n, a, r, f, d[m + 8], 7, 1770035416)),
                    (f = S(f, n, a, r, d[m + 9], 12, -1958414417)),
                    (r = S(r, f, n, a, d[m + 10], 17, -42063)),
                    (a = S(a, r, f, n, d[m + 11], 22, -1990404162)),
                    (n = S(n, a, r, f, d[m + 12], 7, 1804603682)),
                    (f = S(f, n, a, r, d[m + 13], 12, -40341101)),
                    (r = S(r, f, n, a, d[m + 14], 17, -1502002290)),
                    (n = A(
                      n,
                      (a = S(a, r, f, n, d[m + 15], 22, 1236535329)),
                      r,
                      f,
                      d[m + 1],
                      5,
                      -165796510
                    )),
                    (f = A(f, n, a, r, d[m + 6], 9, -1069501632)),
                    (r = A(r, f, n, a, d[m + 11], 14, 643717713)),
                    (a = A(a, r, f, n, d[m + 0], 20, -373897302)),
                    (n = A(n, a, r, f, d[m + 5], 5, -701558691)),
                    (f = A(f, n, a, r, d[m + 10], 9, 38016083)),
                    (r = A(r, f, n, a, d[m + 15], 14, -660478335)),
                    (a = A(a, r, f, n, d[m + 4], 20, -405537848)),
                    (n = A(n, a, r, f, d[m + 9], 5, 568446438)),
                    (f = A(f, n, a, r, d[m + 14], 9, -1019803690)),
                    (r = A(r, f, n, a, d[m + 3], 14, -187363961)),
                    (a = A(a, r, f, n, d[m + 8], 20, 1163531501)),
                    (n = A(n, a, r, f, d[m + 13], 5, -1444681467)),
                    (f = A(f, n, a, r, d[m + 2], 9, -51403784)),
                    (r = A(r, f, n, a, d[m + 7], 14, 1735328473)),
                    (n = w(
                      n,
                      (a = A(a, r, f, n, d[m + 12], 20, -1926607734)),
                      r,
                      f,
                      d[m + 5],
                      4,
                      -378558
                    )),
                    (f = w(f, n, a, r, d[m + 8], 11, -2022574463)),
                    (r = w(r, f, n, a, d[m + 11], 16, 1839030562)),
                    (a = w(a, r, f, n, d[m + 14], 23, -35309556)),
                    (n = w(n, a, r, f, d[m + 1], 4, -1530992060)),
                    (f = w(f, n, a, r, d[m + 4], 11, 1272893353)),
                    (r = w(r, f, n, a, d[m + 7], 16, -155497632)),
                    (a = w(a, r, f, n, d[m + 10], 23, -1094730640)),
                    (n = w(n, a, r, f, d[m + 13], 4, 681279174)),
                    (f = w(f, n, a, r, d[m + 0], 11, -358537222)),
                    (r = w(r, f, n, a, d[m + 3], 16, -722521979)),
                    (a = w(a, r, f, n, d[m + 6], 23, 76029189)),
                    (n = w(n, a, r, f, d[m + 9], 4, -640364487)),
                    (f = w(f, n, a, r, d[m + 12], 11, -421815835)),
                    (r = w(r, f, n, a, d[m + 15], 16, 530742520)),
                    (n = v(
                      n,
                      (a = w(a, r, f, n, d[m + 2], 23, -995338651)),
                      r,
                      f,
                      d[m + 0],
                      6,
                      -198630844
                    )),
                    (f = v(f, n, a, r, d[m + 7], 10, 1126891415)),
                    (r = v(r, f, n, a, d[m + 14], 15, -1416354905)),
                    (a = v(a, r, f, n, d[m + 5], 21, -57434055)),
                    (n = v(n, a, r, f, d[m + 12], 6, 1700485571)),
                    (f = v(f, n, a, r, d[m + 3], 10, -1894986606)),
                    (r = v(r, f, n, a, d[m + 10], 15, -1051523)),
                    (a = v(a, r, f, n, d[m + 1], 21, -2054922799)),
                    (n = v(n, a, r, f, d[m + 8], 6, 1873313359)),
                    (f = v(f, n, a, r, d[m + 15], 10, -30611744)),
                    (r = v(r, f, n, a, d[m + 6], 15, -1560198380)),
                    (a = v(a, r, f, n, d[m + 13], 21, 1309151649)),
                    (n = v(n, a, r, f, d[m + 4], 6, -145523070)),
                    (f = v(f, n, a, r, d[m + 11], 10, -1120210379)),
                    (r = v(r, f, n, a, d[m + 2], 15, 718787259)),
                    (a = v(a, r, f, n, d[m + 9], 21, -343485551)),
                    (n = M(n, U)),
                    (a = M(a, $)),
                    (r = M(r, O)),
                    (f = M(f, B));
                }
                return Array(n, a, r, f);
              }
              function h(d, x, n, a, r, f) {
                return M(
                  ((x = M(M(x, d), M(a, f))) << r) | (x >>> (32 - r)),
                  n
                );
              }
              function S(d, x, n, a, r, f, m) {
                return h((x & n) | (~x & a), d, x, r, f, m);
              }
              function A(d, x, n, a, r, f, m) {
                return h((x & a) | (n & ~a), d, x, r, f, m);
              }
              function w(d, x, n, a, r, f, m) {
                return h(x ^ n ^ a, d, x, r, f, m);
              }
              function v(d, x, n, a, r, f, m) {
                return h(n ^ (x | ~a), d, x, r, f, m);
              }
              function M(d, x) {
                var n = (65535 & d) + (65535 & x);
                return (
                  (((d >> 16) + (x >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              u.exports = function (d) {
                return b.hash(d, g, 16);
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        7: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              u.exports = function (b) {
                for (var g, h = new Array(b), S = 0; S < b; S++)
                  !(3 & S) && (g = 4294967296 * Math.random()),
                    (h[S] = (g >>> ((3 & S) << 3)) & 255);
                return h;
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        8: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              var b = o("./helpers");
              function g(A, w) {
                (A[w >> 5] |= 128 << (24 - (w % 32))),
                  (A[15 + (((w + 64) >> 9) << 4)] = w);
                for (
                  var v,
                    M,
                    d,
                    x = Array(80),
                    n = 1732584193,
                    a = -271733879,
                    r = -1732584194,
                    f = 271733878,
                    m = -1009589776,
                    U = 0;
                  U < A.length;
                  U += 16
                ) {
                  for (
                    var $ = n, O = a, B = r, K = f, ee = m, q = 0;
                    q < 80;
                    q++
                  ) {
                    x[q] =
                      q < 16
                        ? A[U + q]
                        : S(x[q - 3] ^ x[q - 8] ^ x[q - 14] ^ x[q - 16], 1);
                    var P = h(
                        h(
                          S(n, 5),
                          ((P = a),
                          (M = r),
                          (d = f),
                          (v = q) < 20
                            ? (P & M) | (~P & d)
                            : !(v < 40) && v < 60
                            ? (P & M) | (P & d) | (M & d)
                            : P ^ M ^ d)
                        ),
                        h(
                          h(m, x[q]),
                          (v = q) < 20
                            ? 1518500249
                            : v < 40
                            ? 1859775393
                            : v < 60
                            ? -1894007588
                            : -899497514
                        )
                      ),
                      m = f,
                      f = r,
                      r = S(a, 30),
                      a = n,
                      n = P;
                  }
                  (n = h(n, $)),
                    (a = h(a, O)),
                    (r = h(r, B)),
                    (f = h(f, K)),
                    (m = h(m, ee));
                }
                return Array(n, a, r, f, m);
              }
              function h(A, w) {
                var v = (65535 & A) + (65535 & w);
                return (
                  (((A >> 16) + (w >> 16) + (v >> 16)) << 16) | (65535 & v)
                );
              }
              function S(A, w) {
                return (A << w) | (A >>> (32 - w));
              }
              u.exports = function (A) {
                return b.hash(A, g, 20, !0);
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        9: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              function b(w, v) {
                var M = (65535 & w) + (65535 & v);
                return (
                  (((w >> 16) + (v >> 16) + (M >> 16)) << 16) | (65535 & M)
                );
              }
              function g(w, v) {
                var M,
                  d = new Array(
                    1116352408,
                    1899447441,
                    3049323471,
                    3921009573,
                    961987163,
                    1508970993,
                    2453635748,
                    2870763221,
                    3624381080,
                    310598401,
                    607225278,
                    1426881987,
                    1925078388,
                    2162078206,
                    2614888103,
                    3248222580,
                    3835390401,
                    4022224774,
                    264347078,
                    604807628,
                    770255983,
                    1249150122,
                    1555081692,
                    1996064986,
                    2554220882,
                    2821834349,
                    2952996808,
                    3210313671,
                    3336571891,
                    3584528711,
                    113926993,
                    338241895,
                    666307205,
                    773529912,
                    1294757372,
                    1396182291,
                    1695183700,
                    1986661051,
                    2177026350,
                    2456956037,
                    2730485921,
                    2820302411,
                    3259730800,
                    3345764771,
                    3516065817,
                    3600352804,
                    4094571909,
                    275423344,
                    430227734,
                    506948616,
                    659060556,
                    883997877,
                    958139571,
                    1322822218,
                    1537002063,
                    1747873779,
                    1955562222,
                    2024104815,
                    2227730452,
                    2361852424,
                    2428436474,
                    2756734187,
                    3204031479,
                    3329325298
                  ),
                  x = new Array(
                    1779033703,
                    3144134277,
                    1013904242,
                    2773480762,
                    1359893119,
                    2600822924,
                    528734635,
                    1541459225
                  ),
                  n = new Array(64);
                (w[v >> 5] |= 128 << (24 - (v % 32))),
                  (w[15 + (((v + 64) >> 9) << 4)] = v);
                for (var a, r, f = 0; f < w.length; f += 16) {
                  for (
                    var m = x[0],
                      U = x[1],
                      $ = x[2],
                      O = x[3],
                      B = x[4],
                      K = x[5],
                      ee = x[6],
                      q = x[7],
                      P = 0;
                    P < 64;
                    P++
                  )
                    (n[P] =
                      P < 16
                        ? w[P + f]
                        : b(
                            b(
                              b(
                                ((r = n[P - 2]),
                                S(r, 17) ^ S(r, 19) ^ A(r, 10)),
                                n[P - 7]
                              ),
                              ((r = n[P - 15]), S(r, 7) ^ S(r, 18) ^ A(r, 3))
                            ),
                            n[P - 16]
                          )),
                      (M = b(
                        b(
                          b(
                            b(q, S((r = B), 6) ^ S(r, 11) ^ S(r, 25)),
                            (B & K) ^ (~B & ee)
                          ),
                          d[P]
                        ),
                        n[P]
                      )),
                      (a = b(
                        S((a = m), 2) ^ S(a, 13) ^ S(a, 22),
                        (m & U) ^ (m & $) ^ (U & $)
                      )),
                      (q = ee),
                      (ee = K),
                      (K = B),
                      (B = b(O, M)),
                      (O = $),
                      ($ = U),
                      (U = m),
                      (m = b(M, a));
                  (x[0] = b(m, x[0])),
                    (x[1] = b(U, x[1])),
                    (x[2] = b($, x[2])),
                    (x[3] = b(O, x[3])),
                    (x[4] = b(B, x[4])),
                    (x[5] = b(K, x[5])),
                    (x[6] = b(ee, x[6])),
                    (x[7] = b(q, x[7]));
                }
                return x;
              }
              var h = o("./helpers"),
                S = function (w, v) {
                  return (w >>> v) | (w << (32 - v));
                },
                A = function (w, v) {
                  return w >>> v;
                };
              u.exports = function (w) {
                return h.hash(w, g, 32, !0);
              };
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        10: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              (p.read = function (b, g, h, S, f) {
                var w,
                  v,
                  M = 8 * f - S - 1,
                  d = (1 << M) - 1,
                  x = d >> 1,
                  n = -7,
                  a = h ? f - 1 : 0,
                  r = h ? -1 : 1,
                  f = b[g + a];
                for (
                  a += r, w = f & ((1 << -n) - 1), f >>= -n, n += M;
                  0 < n;
                  w = 256 * w + b[g + a], a += r, n -= 8
                );
                for (
                  v = w & ((1 << -n) - 1), w >>= -n, n += S;
                  0 < n;
                  v = 256 * v + b[g + a], a += r, n -= 8
                );
                if (w === 0) w = 1 - x;
                else {
                  if (w === d) return v ? NaN : (1 / 0) * (f ? -1 : 1);
                  (v += Math.pow(2, S)), (w -= x);
                }
                return (f ? -1 : 1) * v * Math.pow(2, w - S);
              }),
                (p.write = function (b, g, h, S, A, m) {
                  var v,
                    M,
                    d = 8 * m - A - 1,
                    x = (1 << d) - 1,
                    n = x >> 1,
                    a = A === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    r = S ? 0 : m - 1,
                    f = S ? 1 : -1,
                    m = g < 0 || (g === 0 && 1 / g < 0) ? 1 : 0;
                  for (
                    g = Math.abs(g),
                      isNaN(g) || g === 1 / 0
                        ? ((M = isNaN(g) ? 1 : 0), (v = x))
                        : ((v = Math.floor(Math.log(g) / Math.LN2)),
                          g * (S = Math.pow(2, -v)) < 1 && (v--, (S *= 2)),
                          2 <=
                            (g += 1 <= v + n ? a / S : a * Math.pow(2, 1 - n)) *
                              S && (v++, (S /= 2)),
                          x <= v + n
                            ? ((M = 0), (v = x))
                            : 1 <= v + n
                            ? ((M = (g * S - 1) * Math.pow(2, A)), (v += n))
                            : ((M = g * Math.pow(2, n - 1) * Math.pow(2, A)),
                              (v = 0)));
                    8 <= A;
                    b[h + r] = 255 & M, r += f, M /= 256, A -= 8
                  );
                  for (
                    v = (v << A) | M, d += A;
                    0 < d;
                    b[h + r] = 255 & v, r += f, v /= 256, d -= 8
                  );
                  b[h + r - f] |= 128 * m;
                });
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/ieee754/index.js",
              "/node_modules/gulp-browserify/node_modules/ieee754"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        11: [
          function (o, u, p) {
            (function (y, C, T, j, _, L, R, z, G) {
              var b, g, h;
              function S() {}
              ((y = u.exports = {}).nextTick =
                ((g = typeof window < "u" && window.setImmediate),
                (h =
                  typeof window < "u" &&
                  window.postMessage &&
                  window.addEventListener),
                g
                  ? function (A) {
                      return window.setImmediate(A);
                    }
                  : h
                  ? ((b = []),
                    window.addEventListener(
                      "message",
                      function (A) {
                        var w = A.source;
                        (w !== window && w !== null) ||
                          A.data !== "process-tick" ||
                          (A.stopPropagation(), 0 < b.length && b.shift()());
                      },
                      !0
                    ),
                    function (A) {
                      b.push(A), window.postMessage("process-tick", "*");
                    })
                  : function (A) {
                      setTimeout(A, 0);
                    })),
                (y.title = "browser"),
                (y.browser = !0),
                (y.env = {}),
                (y.argv = []),
                (y.on = S),
                (y.addListener = S),
                (y.once = S),
                (y.off = S),
                (y.removeListener = S),
                (y.removeAllListeners = S),
                (y.emit = S),
                (y.binding = function (A) {
                  throw new Error("process.binding is not supported");
                }),
                (y.cwd = function () {
                  return "/";
                }),
                (y.chdir = function (A) {
                  throw new Error("process.chdir is not supported");
                });
            }).call(
              this,
              o("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              o("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/process/browser.js",
              "/node_modules/gulp-browserify/node_modules/process"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
      },
      {},
      [1]
    )(1);
  });
})(lt);
var tr = lt.exports;
const rr = st(tr);
function nr(i, c) {
  const { provider: o, blockNumber: u } = ne();
  H.useEffect(() => {
    async function p() {
      const y = await o.getTransactionReceipt(i);
      !y || (y == null ? void 0 : y.status) !== 1 || c(y);
    }
    i && p();
  }, [i, u, o]);
}
function He(i, c, o, u = []) {
  const [p, y] = H.useState(),
    [C, T] = H.useState(!1),
    j = H.useCallback(() => T((h) => !h), [T]),
    [_, L] = H.useState(!1),
    [R, z] = H.useState(
      Object.assign(
        {},
        Object.keys(c).map((h) => {
          const S = {};
          return (S[h] = void 0), S;
        })
      )
    ),
    { provider: G, chainId: b } = ne(),
    g = H.useMemo(() => rr(c), [c]);
  return (
    nr(p, () => j()),
    H.useEffect(() => {
      async function h() {
        const S = Object.values(c).some((w) => w.some((v) => v === void 0)),
          A = !G || S || !o;
        if ((L(A), !A))
          try {
            const w = i.connect(o, G),
              v = await Promise.all(
                Object.entries(c).map(async ([d, x]) => await w[d](...x))
              ),
              M = {};
            Object.keys(c).forEach((d, x) => {
              M[d] = v[x];
            }),
              z(M),
              L(!1);
          } catch (w) {
            console.log("error", w);
          }
      }
      h();
    }, [i, g, C, o, b, ...u]),
    { values: R, loading: _, refresh: j, refreshAfterTx: (h) => y(h) }
  );
}
function _r(i, c = null) {
  const { tokens: o, chainId: u } = ne(),
    p = pt(i),
    y = c || u;
  return H.useMemo(() => {
    var C;
    return !!p && ((C = o == null ? void 0 : o[y]) == null ? void 0 : C[ke(p)]);
  }, [p, o, y]);
}
function Br(i, c) {
  const { data: o } = Fe("balances", { age: "10s" }),
    { ethBalance: u, address: p, chainId: y } = ne(),
    {
      values: { balanceOf: C, decimals: T },
    } = He(nt, { balanceOf: [p], decimals: [] }, i);
  return H.useMemo(() => {
    var L, R, z;
    if (c || i === Ne) return ue.from(u);
    if (!i || !o) return;
    const _ =
      (z =
        (R = (L = o == null ? void 0 : o[y]) == null ? void 0 : L[p]) == null
          ? void 0
          : R[ke(i)]) == null
        ? void 0
        : z.balance;
    return _ !== void 0 || !T || (T == null ? void 0 : T.toNumber) === void 0
      ? _
      : ue.from(C, typeof T == "number" ? T : T.toNumber());
  }, [y, p, i, o, C, c, u, T]);
}
function Lr(i) {
  var C, T, j;
  const { data: c } = Fe("balances", { age: "10s" }),
    { ethBalance: o, address: u, chainId: p } = ne(),
    y = [];
  if (i)
    for (let _ = 0; _ < (i == null ? void 0 : i.length); _++) {
      const L = i[_];
      (L == null ? void 0 : L.address) === Ne
        ? y.push(ue.from(o))
        : !(L != null && L.address) || !Te(L.address) || !c
        ? y.push(void 0)
        : y.push(
            (j =
              (T = (C = c == null ? void 0 : c[p]) == null ? void 0 : C[u]) ==
              null
                ? void 0
                : T[ke(L.address)]) == null
              ? void 0
              : j.balance
          );
    }
  return H.useMemo(() => {
    var _, L, R;
    if (i) {
      const z = [];
      for (let G = 0; G < (i == null ? void 0 : i.length); G++) {
        const b = i[G];
        (b == null ? void 0 : b.address) === Ne
          ? z.push(ue.from(o))
          : !(b != null && b.address) || !Te(b.address) || !c
          ? z.push(void 0)
          : z.push(
              (R =
                (L = (_ = c == null ? void 0 : c[p]) == null ? void 0 : _[u]) ==
                null
                  ? void 0
                  : L[ke(b.address)]) == null
                ? void 0
                : R.balance
            );
      }
      return z;
    } else return;
  }, [c, o, p, u, i]);
}
function Mr(i) {
  var u;
  const { tokens: c, chainId: o } = ne();
  if (i)
    return i === Ne && o !== $e.POLYGON
      ? "ETH"
      : (u = c[o][i]) == null
      ? void 0
      : u.symbol;
}
function Dr(i, c) {
  const { address: o } = ne(),
    {
      values: { balanceOf: u, maxWithdraw: p },
    } = He(Tt, { balanceOf: [o], decimals: [], maxWithdraw: [o] }, i, [c]),
    y = H.useMemo(() => (u ? ue.from(u) : ue.from(0)), [u]),
    C = H.useMemo(() => (p ? ue.from(p) : ue.from(0)), [p]);
  return { sharesBalance: y, assetsBalance: C };
}
function $r(i, c, o, u) {
  const { data: p } = Fe("allowances", { age: "30s" }),
    { chainId: y, address: C } = ne(),
    { execTransactions: T } = Oe(),
    { allowanceType: j } = xe(),
    _ = H.useMemo(() => {
      var v, M, d, x;
      const w =
        (x =
          (d =
            (M = (v = p == null ? void 0 : p[y]) == null ? void 0 : v[C]) ==
            null
              ? void 0
              : M[c == null ? void 0 : c.address]) == null
            ? void 0
            : d[o]) == null
          ? void 0
          : x.allowance;
      return w && u ? w.gte(u) : !1;
    }, [p, c, o, u]),
    [L, R] = H.useState(),
    z = H.useMemo(() => ({ allowance: [i, o] }), [i, o]),
    {
      loading: G,
      values: { allowance: b },
      refreshAfterTx: g,
      refresh: h,
    } = He(nt, z, c == null ? void 0 : c.address);
  H.useEffect(() => {
    if ((c == null ? void 0 : c.address) === _t) R(!0);
    else if (b && u && c)
      try {
        R(ue.from(b.toString(), c == null ? void 0 : c.decimals).gte(u));
      } catch {
        console.error(`Approval from chain (${L}) couldn't be updated`);
      }
  }, [c, b, u]);
  const S = H.useCallback(
    async (w) => {
      await T.approve(
        (v) => {
          g(v), w(v);
        },
        {
          address: c == null ? void 0 : c.address,
          base: c == null ? void 0 : c.decimals,
          symbol: c == null ? void 0 : c.symbol,
        },
        o,
        j === "limited" ? u.raw : mt
      );
    },
    [c, o, u, T, j]
  );
  return {
    approval: L === void 0 || (_ && !L) ? _ : L,
    approve: S,
    loading: G,
    refresh: h,
  };
}
function Ur({
  loading: i,
  value: c,
  className: o,
  variant: u,
  width: p,
  height: y,
}) {
  return (i === void 0 ? c === void 0 : i)
    ? e.jsx(xt, {
        style: {
          display: "inline-flex",
          filter: "brightness(90%) opacity(50%)",
        },
        sx: { bgcolor: "currentcolor" },
        className: `${o} mr-1 w-6 leading-none`,
        animation: "pulse",
        variant: u,
        width: p,
        height: y,
      })
    : c;
}
function Or({ value: i, onClick: c }) {
  if (i)
    return e.jsxs("div", {
      onClick: () => (c == null ? void 0 : c(i)),
      className: "flex items-center gap-1.5",
      children: [
        e.jsxs("p", {
          className: `${c && "cursor-pointer"} text-sm dark:text-black-200`,
          children: ["Balance: ", gt(i == null ? void 0 : i.toNumber()), " "],
        }),
        c &&
          (i == null ? void 0 : i.toNumber()) !== 0 &&
          e.jsx(D, {
            size: "small",
            look: "text",
            className: "dark:text-sand-500",
            children: "MAX",
          }),
      ],
    });
}
var ct = { exports: {} };
(function (i, c) {
  (function (o, u) {
    i.exports = u();
  })(Bt, function () {
    var o = "minute",
      u = /[+-]\d\d(?::?\d\d)?/g,
      p = /([+-]|\d\d)/g;
    return function (y, C, T) {
      var j = C.prototype;
      (T.utc = function (g) {
        var h = { date: g, utc: !0, args: arguments };
        return new C(h);
      }),
        (j.utc = function (g) {
          var h = T(this.toDate(), { locale: this.$L, utc: !0 });
          return g ? h.add(this.utcOffset(), o) : h;
        }),
        (j.local = function () {
          return T(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var _ = j.parse;
      j.parse = function (g) {
        g.utc && (this.$u = !0),
          this.$utils().u(g.$offset) || (this.$offset = g.$offset),
          _.call(this, g);
      };
      var L = j.init;
      j.init = function () {
        if (this.$u) {
          var g = this.$d;
          (this.$y = g.getUTCFullYear()),
            (this.$M = g.getUTCMonth()),
            (this.$D = g.getUTCDate()),
            (this.$W = g.getUTCDay()),
            (this.$H = g.getUTCHours()),
            (this.$m = g.getUTCMinutes()),
            (this.$s = g.getUTCSeconds()),
            (this.$ms = g.getUTCMilliseconds());
        } else L.call(this);
      };
      var R = j.utcOffset;
      j.utcOffset = function (g, h) {
        var S = this.$utils().u;
        if (S(g))
          return this.$u ? 0 : S(this.$offset) ? R.call(this) : this.$offset;
        if (
          typeof g == "string" &&
          ((g = (function (M) {
            M === void 0 && (M = "");
            var d = M.match(u);
            if (!d) return null;
            var x = ("" + d[0]).match(p) || ["-", 0, 0],
              n = x[0],
              a = 60 * +x[1] + +x[2];
            return a === 0 ? 0 : n === "+" ? a : -a;
          })(g)),
          g === null)
        )
          return this;
        var A = Math.abs(g) <= 16 ? 60 * g : g,
          w = this;
        if (h) return (w.$offset = A), (w.$u = g === 0), w;
        if (g !== 0) {
          var v = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((w = this.local().add(A + v, o)).$offset = A),
            (w.$x.$localOffset = v);
        } else w = this.utc();
        return w;
      };
      var z = j.format;
      (j.format = function (g) {
        var h = g || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return z.call(this, h);
      }),
        (j.valueOf = function () {
          var g = this.$utils().u(this.$offset)
            ? 0
            : this.$offset +
              (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * g;
        }),
        (j.isUTC = function () {
          return !!this.$u;
        }),
        (j.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (j.toString = function () {
          return this.toDate().toUTCString();
        });
      var G = j.toDate;
      j.toDate = function (g) {
        return g === "s" && this.$offset
          ? T(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : G.call(this);
      };
      var b = j.diff;
      j.diff = function (g, h, S) {
        if (g && this.$u === g.$u) return b.call(this, g, h, S);
        var A = this.local(),
          w = T(g).local();
        return b.call(A, w, h, S);
      };
    };
  });
})(ct);
var sr = ct.exports;
const or = st(sr);
_e.extend(or);
const Fr = (i, c) => {
    const o = _e.unix(Number.parseInt(i)),
      u = _e.unix(Number.parseInt(c)),
      p = u.diff(o, "second"),
      y = u.diff(o, "minute"),
      C = u.diff(o, "hour"),
      T = u.diff(o, "day");
    return C >= 24
      ? `${T} ${T === 1 ? "day" : "days"}`
      : y >= 60
      ? `${C} ${C === 1 ? "hour" : "hours"}`
      : p >= 60
      ? `${y} ${y === 1 ? "minute" : "minutes"}`
      : `${p} ${p === 1 ? "second" : "seconds"}`;
  },
  Rr = (i) => {
    if (!i) return "";
    const c = Math.floor(i),
      u = (i - c) * 365,
      p = Math.floor(u / 30),
      y = Math.round(u % 30);
    let C = "";
    return (
      c > 0 && (C += `${c} years, `),
      p > 0 && (C += `${p} months, `),
      (C += `${y} days`),
      C
    );
  },
  Yr = ({ apr: i, chainId: c = $e.MAINNET }) => {
    var o, u, p, y, C, T;
    return e.jsxs("div", {
      className: "w-full",
      children: [
        e.jsx("div", {
          className:
            "border-gradient-multiple before:rounded-none before:px-0 before:pt-0",
          children: e.jsxs("p", {
            className:
              "w-full p-3 text-sm dark:bg-black-500 dark:text-black-100",
            children: [
              "APR Details",
              e.jsx("br", {}),
              (o = i == null ? void 0 : i.details) != null && o.min
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("span", {
                        className: "text-base font-bold dark:text-sand-100",
                        children: [
                          "Average: ",
                          be(i == null ? void 0 : i.value),
                          " %",
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex justify-between",
                        children: e.jsx("span", {
                          className: "mr-2",
                          children: `Rewards are boosted up to x${be(
                            Math.sqrt(
                              ((p =
                                (u = i == null ? void 0 : i.details) == null
                                  ? void 0
                                  : u.max) == null
                                ? void 0
                                : p.value) /
                                ((C =
                                  (y = i == null ? void 0 : i.details) == null
                                    ? void 0
                                    : y.min) == null
                                  ? void 0
                                  : C.value)
                            )
                          )} based on your veToken balance`,
                        }),
                      }),
                    ],
                  })
                : e.jsxs("span", {
                    className: "text-base font-bold dark:text-sand-100",
                    children: [
                      i == null ? void 0 : i.title,
                      ": ",
                      be(i == null ? void 0 : i.value),
                      " %",
                    ],
                  }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "w-full p-3 dark:bg-black-300 dark:text-sand-500",
          children: e.jsx("ul", {
            children:
              !!(i != null && i.details) &&
              ((T = Object.keys(i == null ? void 0 : i.details)) == null
                ? void 0
                : T.map((j) => {
                    var _, L, R, z, G, b, g, h, S, A;
                    return ["title", "min", "max", "boost", "avg"].includes(j)
                      ? null
                      : !!(
                          (_ = i == null ? void 0 : i.details[j]) != null &&
                          _.value
                        ) &&
                          !isNaN(
                            (L = i == null ? void 0 : i.details[j]) == null
                              ? void 0
                              : L.value
                          ) &&
                          e.jsxs(
                            "li",
                            {
                              className: `py-0 text-sm dark:text-black-100 ${
                                (R = i == null ? void 0 : i.details[j]) !=
                                  null && R.hasWhitelistedDistribution
                                  ? "font-bold"
                                  : ""
                              }`,
                              children: [
                                e.jsxs("span", {
                                  children: [
                                    (z = i == null ? void 0 : i.details[j]) !=
                                      null && z.value
                                      ? be(
                                          (G =
                                            i == null
                                              ? void 0
                                              : i.details[j]) == null
                                            ? void 0
                                            : G.value
                                        )
                                      : "-",
                                    "%",
                                  ],
                                }),
                                " - ",
                                (b = i == null ? void 0 : i.details[j]) !=
                                  null && b.address
                                  ? e.jsxs("a", {
                                      target: "_blank",
                                      className: "dim",
                                      rel: "noopener noreferrer",
                                      href: Le(
                                        c,
                                        (g =
                                          i == null ? void 0 : i.details[j]) ==
                                          null
                                          ? void 0
                                          : g.address,
                                        "address"
                                      ),
                                      children: [
                                        (h = i == null ? void 0 : i.details) !=
                                          null && h.min
                                          ? "Base "
                                          : "",
                                        " ",
                                        j.replace(
                                          (S =
                                            i == null
                                              ? void 0
                                              : i.details[j]) == null
                                            ? void 0
                                            : S.address,
                                          ""
                                        ),
                                        " ",
                                        bt(
                                          (A =
                                            i == null
                                              ? void 0
                                              : i.details[j]) == null
                                            ? void 0
                                            : A.address
                                        ),
                                      ],
                                    })
                                  : e.jsx("span", {
                                      className: "mr-2",
                                      children: j,
                                    }),
                              ],
                            },
                            j
                          );
                  })),
          }),
        }),
      ],
    });
  },
  se = ({
    language: i = "tsx",
    preview: c,
    previewInvert: o = !1,
    children: u,
  }) =>
    e.jsxs("div", {
      className: `${c ? "border  dark:border-black-500" : ""} my-4 flex ${
        o ? "dark:bg-black-500" : ""
      } items-center gap-8 pr-4`,
      children: [
        e.jsx("div", {
          className: `${c ? "w-3/4" : "w-full"}`,
          children: e.jsx(Nt, {
            language: i,
            wrapLongLines: !0,
            style: Ct,
            customStyle: {
              margin: `${c ? "0" : "1rem"} 0`,
              backgroundColor: Dt["black-500"],
              padding: "1rem",
            },
            children: u,
          }),
        }),
        !!c &&
          e.jsx("div", {
            className: `${
              o ? `${o} border-l dark:border-black-700` : ""
            } w-fit`,
            children: c,
          }),
      ],
    }),
  ir = (i, c) =>
    Se.Children.toArray(i).some((o) => Se.isValidElement(o) && o.type === c),
  ae = ({
    title: i,
    description: c,
    wrapperClassName: o,
    className: u,
    children: p,
  }) =>
    e.jsxs("div", {
      className: `showcase-subelem ${o || ""} flex items-center gap-1`,
      children: [
        e.jsx("p", {
          className: "mr-4 text-base font-bold dark:text-sand-500",
          children: i,
        }),
        !!c && c,
        u ? e.jsx("div", { className: `${u || ""}`, children: p }) : p,
      ],
    }),
  Qe = ({ children: i }) => e.jsx(e.Fragment, { children: i }),
  de = ({
    title: i,
    description: c,
    wrapperClassName: o,
    className: u,
    children: p,
  }) => {
    const y = Se.Children.toArray(p).find((T) => T.props.mode === "dark"),
      C = Se.Children.toArray(p).find((T) => T.props.mode === "light");
    return e.jsxs("div", {
      className: "showcase-modes flex flex-col gap-2 w-fit",
      children: [
        e.jsx("h6", { className: "dark:text-sand-500", children: i }),
        !!c && c,
        e.jsx("div", {
          className: `${o} flex flex-col lg:flex-row gap-2`,
          children:
            y || C
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className: `${u ?? ""} flex gap-2 bg-black-500 p-8`,
                      children: y,
                    }),
                    e.jsx("div", {
                      className: `${u ?? ""} light flex gap-2 bg-white p-8`,
                      children: C,
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className: `${u ?? ""} flex gap-2 bg-black-500 p-8`,
                      children: p,
                    }),
                    e.jsx("div", {
                      className: `${u ?? ""} light flex gap-2 bg-white p-8`,
                      children: p,
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  V = ({
    title: i,
    description: c,
    wrapperClassName: o,
    className: u,
    children: p,
  }) => {
    const [y, C] = H.useState(!1);
    return (
      H.useEffect(() => {
        C(ir(p, ae));
      }, [p]),
      e.jsxs("div", {
        className: `showcase-el ${o || ""} flex flex-col gap-2`,
        children: [
          e.jsx("h6", { className: "dark:text-sand-500", children: i }),
          !!c && c,
          e.jsx("div", {
            className: `${u || ""} flex gap-2 ${
              y ? "flex-col" : "items-center"
            }`,
            children: p,
          }),
        ],
      })
    );
  },
  le = ({
    title: i,
    description: c,
    wrapperClassName: o,
    className: u,
    children: p,
  }) =>
    e.jsxs("section", {
      className: `showcase ${o || ""} my-8 lg:my-12`,
      children: [
        e.jsxs("h3", {
          className: "mb-4 w-fit dark:text-sand-500",
          id: Lt.kebabCase(i),
          children: [i, e.jsx($t, { className: "my-1" })],
        }),
        !!c && c,
        e.jsx("div", {
          className: `${u || ""} mt-4 flex flex-col gap-4`,
          children: p,
        }),
      ],
    });
function ar() {
  const i = [...At],
    c = [...me];
  return e.jsxs(le, {
    title: "Badge",
    children: [
      e.jsx(V, {
        title: "Default",
        description: e.jsxs("p", {
          children: [
            "You can choose between ",
            e.jsx("code", { children: "size" }),
            ", ",
            e.jsx("code", { children: "color" }),
            ", ",
            e.jsx("code", { children: "icon" }),
            " and ",
            e.jsx("code", { children: "customIcon" }),
            " ",
            "props.",
          ],
        }),
        children: e.jsx(se, {
          preview: e.jsx("div", {
            className: "w-fit",
            children: e.jsx(je, {
              color: "blue",
              icon: !0,
              size: "large",
              children: "Badge",
            }),
          }),
          children:
            '<Badge color={"blue"} icon=true size={"large"} >Badge</Badge>',
        }),
      }),
      e.jsx(V, {
        title: "Colors and No Icon",
        description: e.jsx("div", {
          className: "flex gap-1",
          children: i.map((o, u) => e.jsx("span", { children: o }, u)),
        }),
        children: i.map((o, u) =>
          e.jsx(je, { color: o, children: "Badge" }, u)
        ),
      }),
      e.jsx(V, {
        title: "Colors With Icon",
        children: i.map((o, u) =>
          e.jsx(je, { icon: !0, color: o, children: "Badge" }, u)
        ),
      }),
      e.jsx(V, {
        title: "Sizes",
        children: c.map((o, u) =>
          e.jsx(je, { color: "yellow", icon: !0, size: o, children: o }, u)
        ),
      }),
    ],
  });
}
const ve = "Button",
  et = [!1, !0],
  fe = {
    button: { look: yt, sizes: me, boolean: et },
    tag: { look: Be, sizes: me, boolean: et },
  };
function lr() {
  const [i, c] = H.useState(!1);
  return e.jsxs(le, {
    title: "Buttons",
    description: e.jsxs(e.Fragment, {
      children: [
        e.jsxs("details", {
          children: [
            e.jsx("summary", { children: "Buttons matrix" }),
            Object.keys(fe)
              .filter((o) => o === "button")
              .map((o, u) =>
                e.jsx(
                  "div",
                  {
                    className:
                      "custom-scrollbar overflow-x-scroll py-4 dark:bg-black-700",
                    children: e.jsx("div", {
                      className: "flex w-[220vw]",
                      children: e.jsx(de, {
                        title: "",
                        children: fe[o].look.map((p, y) =>
                          e.jsx(
                            "div",
                            {
                              className: "grid-flow-cols grid gap-4",
                              children: fe[o].sizes.map((C, T) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "grid grid-flow-row grid-cols-2 gap-4",
                                    children: fe[o].boolean.map((j, _) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "grid-flow-cols col-span-1 grid place-items-start gap-4",
                                          children: [
                                            e.jsx(D, {
                                              disabled: j,
                                              size: C,
                                              type: o,
                                              look: p,
                                              children: ve,
                                            }),
                                            e.jsx(D, {
                                              disabled: j,
                                              size: C,
                                              type: o,
                                              look: p,
                                              leftIcon: e.jsx(F, {
                                                mui: "Add",
                                              }),
                                              children: ve,
                                            }),
                                            e.jsx(D, {
                                              disabled: j,
                                              size: C,
                                              type: o,
                                              look: p,
                                              rightIcon: e.jsx(F, {
                                                mui: "KeyboardArrowDown",
                                              }),
                                              children: ve,
                                            }),
                                            e.jsx(D, {
                                              disabled: j,
                                              enabled: j,
                                              size: C,
                                              type: o,
                                              look: p,
                                              leftIcon: e.jsx(F, {
                                                mui: "Add",
                                              }),
                                              rightIcon: e.jsx(F, {
                                                mui: "KeyboardArrowDown",
                                              }),
                                              children: ve,
                                            }),
                                          ],
                                        },
                                        _
                                      )
                                    ),
                                  },
                                  T
                                )
                              ),
                            },
                            y
                          )
                        ),
                      }),
                    }),
                  },
                  u
                )
              ),
            " ",
          ],
        }),
        e.jsx("p", {
          children:
            "Our Button component is a one-in-all tool to generate Button, Tag and Tabs.",
        }),
        e.jsxs("p", {
          children: [
            "You can choose this prop with the ",
            e.jsx("code", { children: "type" }),
            " property.",
          ],
        }),
        e.jsx(se, { children: "<Button type='tag'>Size</Button>" }),
      ],
    }),
    children: [
      e.jsx(V, {
        title: "Default",
        children: e.jsx(D, { children: "Button" }),
      }),
      e.jsxs(V, {
        title: "Looks",
        description: e.jsxs(e.Fragment, {
          children: [
            e.jsxs("p", {
              children: [
                "The styling is now defined by the ",
                e.jsx("code", { children: "look" }),
                " property, you can choose different options according the ",
                e.jsx("code", { children: "type" }),
                " used, check out the components to see the compatibility table.",
              ],
            }),
            e.jsx(se, {
              children:
                '<Button type="tag" look="secondary" onClick={()=>{}}>Size</Button>',
            }),
            e.jsxs("p", {
              children: [
                "Also, we have some grouped buttons wrapped inside a ",
                e.jsx("code", { children: "btn-group" }),
                ".",
              ],
            }),
            e.jsx(se, {
              preview: e.jsx(D, {
                type: "button",
                look: "group",
                buttonsGroup: [
                  e.jsx(
                    D,
                    {
                      look: "group",
                      enabled: i,
                      onClick: () => c(!i),
                      children: "Group",
                    },
                    1
                  ),
                  e.jsx(
                    D,
                    {
                      look: "group",
                      enabled: !i,
                      onClick: () => c(!i),
                      children: "Group",
                    },
                    2
                  ),
                  e.jsx(
                    D,
                    {
                      look: "group",
                      enabled: i,
                      onClick: () => c(!i),
                      children: "Group",
                    },
                    3
                  ),
                ],
              }),
              children: `<Button
  type="button"
  look="group"
  buttonsGroup={[
    <Button
      key={1}
      look="group"
      enabled={enabled}
      onClick={() => setEnabled(!enabled)}>
      Group
    </Button>,
    <Button
      key={2}
      look="group"
      enabled={!enabled}
      onClick={() => setEnabled(!enabled)}>
      Group
    </Button>,
    <Button
      key={3}
      look="group"
      enabled={enabled}
      onClick={() => setEnabled(!enabled)}>
      Group
    </Button>
  ]}
/>`,
            }),
          ],
        }),
        children: [
          fe.button.look
            .filter((o) => o !== "group")
            .map((o, u) => e.jsx(D, { look: o, children: o }, u)),
          e.jsx(D, {
            type: "button",
            look: "group",
            buttonsGroup: [
              e.jsx(
                D,
                {
                  look: "group",
                  enabled: i,
                  onClick: () => c(!i),
                  children: "Group",
                },
                1
              ),
              e.jsx(
                D,
                {
                  look: "group",
                  enabled: !i,
                  onClick: () => c(!i),
                  children: "Group",
                },
                2
              ),
              e.jsx(
                D,
                {
                  look: "group",
                  enabled: i,
                  onClick: () => c(!i),
                  children: "Group",
                },
                3
              ),
            ],
          }),
        ],
      }),
      e.jsx(V, {
        title: "Disabled",
        children: fe.button.look
          .filter((o) => o !== "group")
          .map((o, u) =>
            e.jsx(
              D,
              {
                disabled: !0,
                rightIcon: e.jsx(F, { mui: "ZoomOutSharp" }),
                look: o,
                children: o,
              },
              u
            )
          ),
      }),
      e.jsx(V, {
        title: "Sizes",
        children: me.map((o, u) =>
          e.jsxs(
            ae,
            {
              title: o,
              children: [
                fe.button.look
                  .filter((p) => p !== "group")
                  .map((p, y) =>
                    e.jsx(
                      D,
                      { type: "button", size: o, look: p, children: p },
                      y
                    )
                  ),
                e.jsx("div", {
                  className: "ml-2",
                  children: e.jsx(D, {
                    type: "button",
                    look: "group",
                    buttonsGroup: [
                      e.jsx(
                        D,
                        {
                          look: "group",
                          size: o,
                          enabled: i,
                          onClick: () => c(!i),
                          children: "Group",
                        },
                        1
                      ),
                      e.jsx(
                        D,
                        {
                          look: "group",
                          size: o,
                          enabled: !i,
                          onClick: () => c(!i),
                          children: "Group",
                        },
                        2
                      ),
                      e.jsx(
                        D,
                        {
                          look: "group",
                          size: o,
                          enabled: i,
                          onClick: () => c(!i),
                          children: "Group",
                        },
                        3
                      ),
                    ],
                  }),
                }),
              ],
            },
            u
          )
        ),
      }),
    ],
  });
}
function cr() {
  return e.jsxs(le, {
    title: "Dropdown",
    description: e.jsxs("p", {
      children: [
        "To use for showing options or links but without setting a selected state.",
        e.jsx("br", {}),
        "There is only ",
        e.jsx("code", { children: "secondary" }),
        " look available so far.",
      ],
    }),
    children: [
      e.jsx(V, {
        title: "Default",
        children: e.jsx(Ze, {
          content: [
            e.jsxs(e.Fragment, {
              children: [
                e.jsx(F, { mui: "AddCircleOutlineRounded" }, "add"),
                " EURA",
              ],
            }),
          ],
          children: "Combo",
        }),
      }),
      e.jsx(V, {
        title: "Sizes",
        children: Ut.map((i, c) =>
          e.jsx(
            Ze,
            {
              content: [
                e.jsxs(e.Fragment, {
                  children: [e.jsx(F, { mui: "Add" }, "add2"), " EURA"],
                }),
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(F, { mui: "AddCircleOutlineRounded" }, "addcircle"),
                    " EURA",
                  ],
                }),
              ],
              size: i,
              children: i,
            },
            c
          )
        ),
      }),
    ],
  });
}
function dr() {
  const { chainId: i, tokens: c } = ne();
  return e.jsxs(le, {
    title: "Icons",
    description: e.jsx("p", {
      children: "To use for every type of icon in the app",
    }),
    children: [
      e.jsx(V, {
        title: "Mui",
        children: Object.keys(jt)
          .filter(
            (o) =>
              !["Sharp", "Outlined", "Rounded", "TwoTone", "Filled"].some((u) =>
                o.includes(u)
              )
          )
          .splice(0, Object.keys(ye).length)
          .map((o, u) => e.jsx(F, { mui: o }, u)),
      }),
      e.jsx(V, {
        title: "Networks",
        children: Object.keys(ye).map((o, u) => e.jsx(F, { chain: o }, u)),
      }),
      e.jsx(V, {
        title: "Custom",
        children: Object.keys(wt)
          .splice(0, Object.keys(ye).length)
          .map((o, u) => e.jsx(F, { svg: o }, u)),
      }),
      e.jsx(V, {
        title: "Tokens",
        children: Object.keys((c == null ? void 0 : c[i]) ?? {})
          .splice(0, Object.keys(ye).length)
          .map((o, u) => e.jsx(F, { token: o }, u)),
      }),
      e.jsx(V, {
        title: "Sizes",
        children: vt.map((o, u) =>
          e.jsxs(
            ae,
            {
              title: o == null ? void 0 : o.toLocaleUpperCase(),
              children: [
                e.jsx(F, { mui: "HdRounded", size: o }),
                e.jsx(F, { svg: "globe", size: o }),
                e.jsx(F, { chain: $e.OPTIMISM, size: o }),
              ],
            },
            u
          )
        ),
      }),
    ],
  });
}
function ur() {
  const [i, c] = H.useState(),
    [, o] = H.useState();
  return e.jsxs(le, {
    title: "Inputs",
    description: e.jsx("p", { children: "To use for inputs of any type." }),
    children: [
      e.jsx(de, {
        title: "Default",
        children: kt.map((u, p) =>
          e.jsx(W, { look: u, placeholder: "Primary look" }, p)
        ),
      }),
      e.jsxs(de, {
        title: "Strings",
        wrapperClassName: "!flex-col",
        children: [
          e.jsx(W, {
            look: "primary",
            prefix: e.jsx(F, { mui: "Add" }),
            placeholder: "Prefix",
            state: [i, c],
          }),
          e.jsx(W, {
            look: "secondary",
            suffix: e.jsx(F, { mui: "Search" }),
            placeholder: "Suffix",
            onChange: (u) => console.log(u),
          }),
          e.jsx(W, {
            look: "primary",
            prefix: e.jsx(F, { mui: "Add" }),
            suffix: e.jsx(F, { mui: "Search" }),
            placeholder: "Prefix & Suffix",
            onChange: (u) => console.log(u),
          }),
          e.jsx(W, {
            suffix: e.jsx(D, {
              type: "button",
              look: "secondary",
              size: "x-small",
              children: "MAX",
            }),
            placeholder: "Suffix Button",
          }),
        ],
      }),
      e.jsxs(de, {
        title: "Numbers",
        wrapperClassName: "!flex-col",
        children: [
          e.jsx(W, {
            type: "number",
            state: [1, o],
            look: "primary",
            prefix: e.jsx(F, { mui: "CurrencyBitcoin" }),
            placeholder: "Prefix",
          }),
          e.jsx(W, {
            type: "number",
            look: "secondary",
            suffix: e.jsx(F, { mui: "Percent" }),
            placeholder: "Suffix",
          }),
          e.jsx(W, {
            type: "number",
            look: "secondary",
            suffix: e.jsx(F, { mui: "Euro" }),
            placeholder: "Suffix",
          }),
          e.jsx(W, {
            type: "number",
            suffix: e.jsx(D, {
              type: "button",
              look: "secondary",
              size: "x-small",
              children: "MAX",
            }),
            placeholder: "Suffix Button",
          }),
        ],
      }),
      e.jsxs(de, {
        title: "Labels",
        wrapperClassName: "!flex-col",
        children: [
          e.jsxs(Qe, {
            mode: "dark",
            children: [
              e.jsx(W, {
                placeholder: "Top Label",
                label: e.jsx(oe, { title: "Tooltip test", children: "Buy" }),
                look: "primary",
              }),
              e.jsx(W, {
                placeholder: "Top Label + Hint",
                label: e.jsx(oe, { title: "Tooltip test", children: "Buy" }),
                look: "secondary",
                hint: "Hint",
              }),
              e.jsx(W, {
                placeholder: "Left Label",
                label: e.jsx(oe, { title: "Tooltip test", children: "Buy" }),
                labelOrientation: "left",
                look: "primary",
              }),
              e.jsx(W, {
                placeholder: "Left Label + Hint",
                label: e.jsx(oe, { title: "Tooltip test", children: "Buy" }),
                labelOrientation: "left",
                look: "primary",
                hint: "Assistive text",
              }),
            ],
          }),
          e.jsxs(Qe, {
            mode: "light",
            children: [
              e.jsx(W, {
                placeholder: "Top Label",
                label: e.jsx(oe, {
                  dark: !0,
                  title: "Tooltip test",
                  children: "Buy",
                }),
                look: "primary",
              }),
              e.jsx(W, {
                placeholder: "Top Label + Hint",
                label: e.jsx(oe, {
                  dark: !0,
                  title: "Tooltip test",
                  children: "Buy",
                }),
                look: "secondary",
                hint: "Hint",
              }),
              e.jsx(W, {
                placeholder: "Left Label",
                label: e.jsx(oe, {
                  dark: !0,
                  title: "Tooltip test",
                  children: "Buy",
                }),
                labelOrientation: "left",
                look: "primary",
              }),
              e.jsx(W, {
                placeholder: "Left Label + Hint",
                label: e.jsx(oe, {
                  dark: !0,
                  title: "Tooltip test",
                  children: "Buy",
                }),
                labelOrientation: "left",
                look: "primary",
                hint: "Assistive text",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(de, {
        title: "Date",
        children: [
          e.jsx(W, {
            type: "date",
            look: "primary",
            prefix: e.jsx(F, { mui: "CalendarMonthOutlined" }),
            placeholder: "Date",
          }),
          e.jsx(W, {
            type: "date",
            look: "secondary",
            suffix: e.jsx(F, { mui: "CalendarMonthOutlined" }),
            placeholder: "Date",
          }),
          e.jsx(W, {
            type: "date",
            suffix: e.jsx(F, { mui: "Search" }),
            placeholder: "Date",
          }),
        ],
      }),
      e.jsxs(de, {
        title: "Sizes",
        wrapperClassName: "!flex-col",
        className: "items-center",
        children: [
          e.jsx(W, {
            size: "s",
            look: "primary",
            prefix: "prefix",
            placeholder: "Small",
            state: [i, c],
          }),
          e.jsx(W, {
            size: "m",
            look: "secondary",
            suffix: "suffix",
            placeholder: "Medium",
            onChange: (u) => console.log(u),
          }),
          e.jsx(W, {
            size: "l",
            placeholder: "Large",
            suffix: e.jsx(D, {
              type: "button",
              look: "secondary",
              size: "x-small",
              children: "MAX",
            }),
          }),
        ],
      }),
      e.jsxs(V, {
        title: "Constructs",
        className: "w-fit rounded-md p-4 dark:bg-black-500",
        children: [
          e.jsx(W, {
            look: "secondary",
            type: "number",
            placeholder: "Default",
            label: "Number + Prefix + Header + Suffix + Secondary",
            header: e.jsxs(e.Fragment, {
              children: [
                e.jsx("p", { children: "Sell" }),
                e.jsx("p", {
                  className: "dark:!text-black-200",
                  children: "Balance: 0",
                }),
              ],
            }),
            prefix: e.jsx(F, { mui: "CurrencyBitcoinOutlined" }),
            suffix: e.jsxs(e.Fragment, {
              children: [
                e.jsx(F, { mui: "ArrowDownwardOutlined" }),
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "x-small",
                  children: "MAX",
                }),
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "small",
                  children: "EURA",
                }),
              ],
            }),
          }),
          e.jsx(W, {
            look: "secondary",
            type: "number",
            placeholder: "Default",
            label: "Number + Header + Secondary",
            header: e.jsxs(e.Fragment, {
              children: [
                e.jsx("p", { children: "Sell" }),
                e.jsx("p", {
                  className: "dark:!text-black-200",
                  children: "Balance: 0",
                }),
              ],
            }),
            suffix: e.jsxs(e.Fragment, {
              children: [
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "x-small",
                  children: "MAX",
                }),
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "small",
                  children: "EURA",
                }),
              ],
            }),
          }),
          e.jsx(W, {
            look: "primary",
            type: "number",
            size: "s",
            placeholder: "Default",
            label: "Number + Header + Primary + Small",
            header: e.jsxs(e.Fragment, {
              children: [
                e.jsx("p", { children: "Sell" }),
                e.jsx("p", {
                  className: "dark:!text-black-200",
                  children: "Balance: 0",
                }),
              ],
            }),
            suffix: e.jsxs(e.Fragment, {
              children: [
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "x-small",
                  children: "MAX",
                }),
                e.jsx(D, {
                  type: "button",
                  look: "secondary",
                  size: "small",
                  children: "EURA",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function fr() {
  const i = [
    {
      value: "EURA",
      label: e.jsxs(e.Fragment, {
        children: [e.jsx(F, { mui: "WebAssetRounded" }), " EURA"],
      }),
    },
    {
      value: "USDA",
      label: e.jsxs(e.Fragment, {
        children: [e.jsx(F, { mui: "MeetingRoom" }), " USDA"],
      }),
    },
  ];
  return e.jsxs(le, {
    title: "Select",
    description: e.jsxs("p", {
      children: [
        "To use for selecting between multiple props. ",
        e.jsx("br", {}),
        "This Select replaces most of our previous antd Dropdowns.",
      ],
    }),
    children: [
      e.jsxs(V, {
        title: "Default",
        children: [
          e.jsx(ae, {
            title: "With options",
            children: e.jsx(se, {
              preview: e.jsx(he, { default: "Default value", options: i }),
              children: '<Select default="Default value" options={options} />',
            }),
          }),
          e.jsx(ae, {
            title: "Without options",
            children: e.jsx(se, {
              preview: e.jsx(he, { default: "Default", options: [] }),
              children: '<Select default="Default" options={[]} />',
            }),
          }),
        ],
      }),
      e.jsxs(V, {
        title: "Search",
        description: e.jsxs("p", {
          children: [
            "You can now input inside the field to search and filter. Just add the ",
            e.jsx("code", { children: "search" }),
            " boolean.",
          ],
        }),
        children: [
          e.jsx(ae, {
            title: "Default size",
            children: e.jsx(se, {
              preview: e.jsx(he, { search: !0, default: "EURA", options: i }),
              children: '<Select search default={"EURA"} options={options} />',
            }),
          }),
          e.jsx(ae, {
            title: "Looks",
            children: qe
              .filter((c) => c !== "group")
              .map((c, o) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex flex-col gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-bold dark:text-sand-500",
                        children: c,
                      }),
                      e.jsx(
                        he,
                        {
                          search: !0,
                          default: "EURA",
                          options: i,
                          look: c,
                          children: c,
                        },
                        o
                      ),
                    ],
                  },
                  o
                )
              ),
          }),
          e.jsx(ae, {
            title: "Sizes",
            wrapperClassName: "!items-start flex-col gap-4",
            className: "flex flex-col gap-2",
            children: qe
              .filter((c) => c !== "group")
              .map((c, o) =>
                e.jsx(
                  ae,
                  {
                    title: `Sizes for ${c}`,
                    wrapperClassName: "gap-3",
                    children: St.map((u, p) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("p", {
                              className: "font-bold uppercase",
                              children: u,
                            }),
                            e.jsx(he, {
                              search: !0,
                              look: c,
                              default: "EURA",
                              options: i,
                              size: u,
                            }),
                          ],
                        },
                        p
                      )
                    ),
                  },
                  o
                )
              ),
          }),
        ],
      }),
    ],
  });
}
function hr() {
  const i = H.useMemo(
    () => [
      {
        key: "1",
        label: e.jsx("p", {
          className: "dark:text-sand-500",
          children: "Proposal overview",
        }),
        children: e.jsx("div", { children: "tab1" }),
      },
      {
        key: "2",
        label: e.jsx("p", {
          className: "dark:text-sand-500",
          children: "Executable code",
        }),
        children: e.jsx("div", { children: "tab2" }),
      },
    ],
    []
  );
  return e.jsx(le, {
    title: "Tabs",
    description: e.jsxs(e.Fragment, {
      children: [
        e.jsx("h6", {
          className: "mb-1 dark:text-sand-500",
          children: "Tab specificity",
        }),
        e.jsx("p", { children: "Tabs are derived from antd." }),
        e.jsx(se, {
          preview: e.jsx(Xe, { defaultActiveKey: "1", items: i }),
          children: `
const items = useMemo(
  () => [
    {
      key: "1",
      label: <p className="text-sand-500">Proposal overview</p>,
      children: <div>tab1</div>,
    },
    {
      key: "2",
      label: <p className="text-sand-500">Executable code</p>,
      children: <div>tab2</div>,
    },
  ],
  []
);

<Tabs defaultActiveKey="1" items={items} />`,
        }),
      ],
    }),
    children: e.jsx(de, {
      title: "Tabs",
      className: "flex flex-col",
      children: e.jsx(Xe, { defaultActiveKey: "1", items: i }),
    }),
  });
}
function pr() {
  const i = "Button",
    [c, o] = H.useState(!0);
  return e.jsxs(le, {
    title: "Tags",
    children: [
      e.jsx(V, {
        title: "Default",
        children: e.jsx(se, {
          preview: e.jsx(D, {
            type: "tag",
            size: "medium",
            look: "primary",
            onClick: () => o(!c),
            enabled: c,
            children: i,
          }),
          children: `<Button type={"tag"} size={"medium"} look={"primary"} onClick={() => setEnabled(!enabled)} enabled={enabled}>
  Button
</Button>`,
        }),
      }),
      e.jsxs(V, {
        title: "Looks",
        children: [
          Be.filter((u) => u !== "token").map((u, p) =>
            e.jsx(
              D,
              {
                type: "tag",
                look: u,
                onClick: () => o(!c),
                enabled: c,
                children: u,
              },
              p
            )
          ),
          e.jsx(D, {
            type: "tag",
            look: "token",
            token: "EURA",
            onClick: () => o(!c),
            enabled: c,
            children: "token",
          }),
        ],
      }),
      e.jsx(de, {
        title: "Dark & Light Modes",
        className: "flex flex-col",
        children: e.jsx("div", {
          className: "flex flex-col gap-2",
          children: me.map((u, p) =>
            e.jsx(
              "div",
              {
                className: "flex gap-2",
                children: Be.map((y, C) =>
                  e.jsx(
                    D,
                    {
                      type: "tag",
                      size: u,
                      look: y,
                      token: y === "token" && "EURA",
                      onClick: () => o(!c),
                      enabled: c,
                      children: i,
                    },
                    C
                  )
                ),
              },
              p
            )
          ),
        }),
      }),
    ],
  });
}
function mr() {
  return e.jsxs(le, {
    title: "Tooltip",
    description: e.jsxs(e.Fragment, {
      children: [
        e.jsxs("p", {
          children: [
            "We are now using our own Angle Tooltip. It used to be named ",
            e.jsx("code", { children: "<Tooltip/>" }),
            " but is now called",
            " ",
            e.jsx("code", { children: "<Tooltip/>" }),
            ".",
            e.jsx("br", {}),
          ],
        }),
        e.jsx("p", {
          children:
            "So please be careful when importing the right Tooltip, not from Antd but our own component.",
        }),
      ],
    }),
    children: [
      e.jsxs(V, {
        title: "Tooltip with Icon",
        className: "flex flex-col",
        children: [
          e.jsx(ae, {
            title: "Light Icon",
            children: e.jsx(se, {
              preview: e.jsx(oe, {
                title: "YES, MAN!",
                children: e.jsx("p", {
                  className: "font-bold",
                  children: "Aww, default icon, now?",
                }),
              }),
              children: `<Tooltip title={'YES, MAN!'}>
<p className={"font-bold"}>Aww, default icon, now?</p>
</Tooltip>`,
            }),
          }),
          e.jsx(ae, {
            title: "Dark Icon",
            children: e.jsx(se, {
              preview: e.jsx(oe, {
                title: "YES, MAN!",
                icon: !0,
                dark: !0,
                children: e.jsx("p", {
                  className: "font-bold",
                  children: "That's a dark icon!",
                }),
              }),
              previewInvert: !0,
              children: `<Tooltip title={'YES, MAN!'} dark={'true'}>
<p className="font-bold">That's a dark icon!</p>
</Tooltip>`,
            }),
          }),
        ],
      }),
      e.jsx(V, {
        title: "Tooltip with No Icon",
        children: e.jsx(se, {
          preview: e.jsx(oe, {
            title: "YES, MAN!",
            icon: !1,
            children: e.jsx("p", {
              className: "font-bold",
              children: "A tooltip without icon.",
            }),
          }),
          children: `<Tooltip title={'YES, MAN!'} icon={'false'}>
<p className="font-bold">A tooltip without icon.</p>
</Tooltip>`,
        }),
      }),
      e.jsx(V, {
        title: "Tooltip with Card",
        description: e.jsx(e.Fragment, {
          children: e.jsxs("p", {
            children: [
              "This replace the former className ",
              e.jsx("code", { children: "tooltip-apr-breakdown" }),
              " used at some places.",
              e.jsx("br", {}),
              "To use it, just fill in the ",
              e.jsx("code", { children: "cardHeader" }),
              " and ",
              e.jsx("code", { children: "cardContent" }),
              " props.",
            ],
          }),
        }),
        children: e.jsx(se, {
          preview: e.jsx(oe, {
            placement: "right",
            cardHeader: e.jsxs(e.Fragment, {
              children: [
                "Card Header",
                e.jsx("br", {}),
                e.jsx("span", {
                  className: "text-base font-bold dark:text-sand-100",
                  children: "Here you can find the text of my cardHeader prop",
                }),
              ],
            }),
            cardContent: e.jsx(e.Fragment, {
              children: "And now here is the content of my cardContent prop",
            }),
            children: e.jsx("span", {
              className: "font-bold",
              children: "Tooltip with Card",
            }),
          }),
          children: `<Tooltip
placement={'right'}
cardHeader={
<>
Card Header
<br />
<span className="text-base font-bold dark:text-sand-100">Here you can find the text of my cardHeader prop</span>
</>
}
cardContent={<>And now here is the content of my cardContent prop</>}
>
<span className="font-bold">Tooltip with CardHeader</span>
</Tooltip>`,
        }),
      }),
    ],
  });
}
const zr = () =>
  e.jsx("div", {
    className: "-my-10 bg-black-700 py-10",
    children: e.jsxs("div", {
      className: "container",
      children: [
        e.jsx("h1", { className: "app-h1", children: "Design System" }),
        e.jsx("hr", { className: "my-4 dark:border-blue-500" }),
        e.jsx(Mt, { sticky: !0, headingElements: "h3" }),
        e.jsx("hr", { className: "-mb-8 border-none" }),
        e.jsx(mr, {}),
        e.jsx(ar, {}),
        e.jsx(lr, {}),
        e.jsx(hr, {}),
        e.jsx(pr, {}),
        e.jsx(ur, {}),
        e.jsx(fr, {}),
        e.jsx(cr, {}),
        e.jsx(dr, {}),
        e.jsxs(le, {
          title: "Future steps",
          children: [
            e.jsx(V, {
              title: "Code boxes",
              children: e.jsxs("ol", {
                className: "!pt-0",
                children: [
                  e.jsx("li", {
                    className: "line-through",
                    children: "Tooltips",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Badges",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Buttons",
                  }),
                  e.jsx("li", { className: "line-through", children: "Tags" }),
                  e.jsx("li", { className: "line-through", children: "Tabs" }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Inputs",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Select",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Dropdowns",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Responsive Grid",
                  }),
                  e.jsx("li", {
                    className: "line-through",
                    children: "Modals",
                  }),
                  e.jsx("li", { children: "Scrollable" }),
                  e.jsx("li", { children: "Boxes/Cards" }),
                ],
              }),
            }),
            e.jsx(V, {
              title: "Ideas",
              children: e.jsxs("ul", {
                className: "!pt-0",
                children: [
                  e.jsx("li", {
                    children:
                      "Create a dropdown to select different background colors",
                  }),
                  e.jsx("li", {
                    children: "Create a dropdown to select Dark or Light mode",
                  }),
                  e.jsx("li", {
                    children:
                      "Create a Select with the different values for a prop",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
export {
  zr as D,
  Ur as L,
  Yr as M,
  zt as P,
  Yt as S,
  Ir as T,
  Ft as a,
  Er as b,
  Tr as c,
  Br as d,
  $r as e,
  nr as f,
  Or as g,
  Fr as h,
  Ar as i,
  Qt as j,
  Mr as k,
  Lr as l,
  _r as m,
  Rr as n,
  rr as o,
  Dr as p,
  He as u,
};
