import {
  P as Pn,
  f as x,
  I as e,
  N as Es,
  S as ge,
  M as Nt,
  $ as Rn,
  a0 as In,
  Q as $a,
  X as ft,
  Y as Pe,
  Z as Zt,
  a1 as Da,
  a2 as Ln,
  a3 as $n,
  T as Oa,
  a4 as Dn,
  a5 as On,
} from "./react-ac02b43c.js";
import {
  F as Mn,
  I as T,
  z as ke,
  B as Y,
  n as Gs,
  a5 as Ms,
  u as oe,
  a6 as ct,
  R as xe,
  S as Ys,
  C as je,
  a7 as os,
  j as M,
  K as Lt,
  g as Ns,
  r as J,
  a8 as Fn,
  a9 as Ds,
  aa as Un,
  L as Zs,
  a0 as Be,
  ab as Bn,
  ac as Fe,
  ad as Ue,
  k as Ze,
  ae as Pl,
  T as se,
  m as Me,
  af as _n,
  s as Ma,
  f as Ps,
  ag as Vn,
  i as as,
  ah as Rl,
  ai as mt,
  h as Ce,
  aj as Cs,
  ak as Rs,
  v as ht,
  X as hs,
  al as Il,
  am as Ut,
  an as Ll,
  ao as ps,
  ap as Tn,
  aq as dt,
  ar as Tr,
  $ as tt,
  N as ms,
  as as zn,
  at as pt,
  b as yt,
  au as zt,
  av as zr,
  aw as Fa,
  ax as Hn,
  y as Hr,
  ay as Yn,
  G as Qt,
  az as ot,
  aA as Ua,
  aB as Js,
  aC as Gn,
  aD as $l,
  aE as Wn,
  aF as qn,
  aG as Qn,
  a3 as Xn,
  a4 as Kn,
} from "./index-6c9a656c.js";
import {
  M as us,
  T as Bt,
  B as Fs,
  i as $t,
  C as Yr,
  U as Jt,
  d as Zn,
} from "./Chain-3723cd4b.js";
import {
  C as bt,
  h as Oe,
  a as jt,
  m as Dl,
  R as da,
} from "./style-053d0d8d.js";
import {
  D as st,
  q as wt,
  A as Ol,
  E as Qe,
  W as Gr,
  R as Xs,
  M as va,
  a as rs,
  u as bs,
  f as Jn,
  w as Ht,
  s as Wr,
  V as Dt,
  g as eo,
  h as Ml,
  i as so,
  j as Ba,
  k as to,
  l as ao,
  P as qr,
  O as ro,
  m as lo,
  n as et,
  N as ra,
  t as no,
  o as Qr,
  p as Xr,
  r as oo,
  v as Kr,
  x as io,
  e as co,
} from "./priceReference-015357d4.js";
import {
  b as _t,
  C as Yt,
  a as mo,
  D as Aa,
  H as uo,
  L as xo,
  A as fo,
  c as ho,
  P as po,
  F as bo,
} from "./PageHeader-912a2f98.js";
import {
  r as jo,
  a as go,
  u as la,
  L as Ot,
  D as No,
} from "./DAppProvider-c8d036f3.js";
import {
  d as at,
  j as yo,
  k as wo,
  l as gt,
  g as rt,
  m as Ls,
  e as Fl,
  L as Te,
  M as ko,
  n as Zr,
  c as vo,
  f as Ao,
  o as So,
  p as Co,
  h as Xt,
  D as Eo,
  i as Jr,
  T as Po,
  b as Ro,
} from "./index-3f902e89.js";
import {
  T as We,
  b as na,
  d as ma,
  c as Io,
  C as Ul,
  u as Bl,
} from "./Collapsible-a64048f9.js";
import { u as ze, c as oa, D as Lo } from "./Styles-0fb7b513.js";
import {
  u as $o,
  d as ut,
  a as ua,
  b as xa,
  g as _l,
  P as Do,
} from "./index-5f2f4f7a.js";
import { D as Vt, g as Oo } from "./lodash-90a1c433.js";
import { F as Vl, P as Mo } from "./index-1cb35db4.js";
import { H as Fo, h as Uo, T as Bo } from "./holyheld-6c515802.js";
import { u as _o } from "./useInterval-4f06142c.js";
import { a as Vo } from "./index-779ddf66.js";
const fa = "referrer";
function Tl() {
  const [s, t] = Pn(),
    r = s.get(fa) ?? localStorage.getItem(fa);
  function l(a) {
    Mn(a) && localStorage.setItem(fa, a);
  }
  return (
    x.useEffect(() => {
      l(r);
    }, [r]),
    { referrer: r }
  );
}
const To = async () => {
    try {
      return (await Gs.get(`${Ms}/ipcheck`)).data.blocked;
    } catch (s) {
      console.error("Error getting IP status", s);
    }
    return !1;
  },
  zo = ({ handleAccepted: s }) => {
    const t = new Date(Number.parseInt(localStorage.getItem("LEGAL_MENTIONS"))),
      [r, l] = x.useState(!1),
      [a, n] = x.useState(
        !(t != null && t.getTime()) ||
          t.getTime() < new Date().setDate(new Date().getDate() - 1)
      ),
      [d, o] = x.useState(!1);
    return (
      x.useEffect(() => {
        (async () => {
          const i = await To();
          l(i);
        })(),
          a || s();
      }, []),
      e.jsxs(us, {
        title: r
          ? "This interface is not available to residents of prohibited jurisdictions (the USA, the UK, ...)"
          : "Warning",
        titleIcon: e.jsx(T, { mui: "WarningOutlined" }),
        visible: a,
        closable: !1,
        children: [
          e.jsxs("p", {
            className: "mb-4",
            children: [
              "Angle Protocol is a fully decentralized stablecoin protocol. No representation or warranty is made concerning any aspect of the Angle Protocol, including its suitability, quality, availability, accessibility, accuracy or safety. As more fully explained in the Terms of Use (available",
              " ",
              e.jsx("a", {
                className: "underlined",
                href: ke.angleTerms,
                children: "here",
              }),
              "), your access to and use of the Angle Protocol through this interface is entirely at your own risk and could lead to substantial losses. You take full responsibility for your use of the interface, and acknowledge that you use it on the basis of your own enquiry, without solicitation or inducement by Contributors (as defined in the Terms of Use).",
              " ",
            ],
          }),
          " ",
          e.jsx("p", {
            className: "mb-4",
            children:
              "This interface is not available to residents of Belarus, the Central African Republic, the Democratic Republic of Congo, the Democratic People’s Republic of Korea, the Crimea region of Ukraine, Cuba, Iran, Libya, Somalia, Sudan, South Sudan, Syria, the USA, the United Kingdom, Yemen, and Zimbabwe or any other jurisdiction in which accessing or using the Angle Protocol is prohibited (“Prohibited Jurisdictions”). In using this interface, you confirm that you are not located in, incorporated or otherwise established in, or a citizen or resident of, a Prohibited Jurisdiction.",
          }),
          !r &&
            e.jsx("p", {
              className: "mb-6 flex w-full flex-wrap xl:w-4/5",
              children: e.jsxs(bt, {
                className: "dark:text-black-100",
                disabled: r,
                onChange: () => o(!d),
                children: [
                  "I confirm that I have read, understand and accept the",
                  " ",
                  e.jsx("a", {
                    className: "underlined",
                    href: ke.angleTerms,
                    children: "Terms of Use",
                  }),
                  " ",
                ],
              }),
            }),
          !r &&
            e.jsx(Y, {
              type: "button",
              look: "secondary",
              disabled: r || !d,
              onClick: () => {
                n(!1),
                  localStorage.setItem(
                    "LEGAL_MENTIONS",
                    JSON.stringify(new Date().getTime()).toString()
                  ),
                  s();
              },
              children: "Enter",
            }),
        ],
      })
    );
  };
function Ho({ children: s }) {
  return oe(), s;
}
const Yo = "/assets/swap-90d9922e.svg",
  Go = "/assets/crypto-risk-assessments-71ca2063.png",
  Wo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAABZCAMAAAAAXwPeAAAAk1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////+zt7eztbWztraytbW3t7ext7evt7eztraztbWztra0ubmytbX///+ytrayt7eztraztraxtLSytraxtLSytbW0travr6+ytraytbWytLS0tLRDAgCbAAAAMXRSTlMAQL/fnyAQf8//YK/vUDCPcICQoF9vQIBwUCBgIP/fnzC/sH+Pr+9gsJDPrxDPj5AwZT8mqgAADWZJREFUeAHsm9l+4yoSh4vV+mMkC3l6nc565uzr+z/djClkCwcnwmM7faHvQvpFOEq6PqCgQtNMhFTa0ML7YFcNdjTO0M1ZEGuPPeuWbsmCWXnkKN3Rwq2iL1FCba7uYMGKjcIOv24Aj8Z5KEA24zgQlq7GEvxeeo6+dK1Cs0ZjySgVFHQ7KDAyLBIuju3cpvGIeO2skfBhtYs/7Qx0AdCm6xskGt0vFi6CNW2/WSuMyEEQGQ2szQpby59p/L/MFlgZMm6rMKLkpm+FoYWzkFIqhQleDrFXCw1IQRtsKWHXWJGRQNyUdW7bYIpXSva0UInHAbUenKGIkDH8ViLQgQEbS4IVpHQxSI8DgRYqUYBqpB761lhK2J7DT0ahpykByiQ7bpK12zCspfKAo4VKJGApQ2w8h58+eC8ox3nviEhsgRflIQu0tFDJFjCUGDu/14KI7AaNoWOMwibetwCks9MmQNBCJcMkalZID/gQo9opDJZyUuRV9GKcAqBbGhFARwuVBMCl6GsPeJl0fIB3VKYHVhQRWw/40UELWFqoxCHmWaM9ANlbihgJaegURu1brZOxYNGxGDrm46cDn798pRf8+1OBj8R8e6XxW/oiQ6ykAnyjHZUxYYcoNRQQrzX2lOhDGUMRV/yRIuzgbptuY/Q5+/ZvjBu/ooTZOWj5IR3z6S7j/uGRcp7uCnwa9b3S+HH6BdNJ7FFlBRo7JL1AoEB4rVFRQqGMoEiLHd4Sk30TEXWAjjdNI6Ipdv8MozgTMGuImM+bsoCMp6/XEvABGRsqoBARNxRAsvDrrPavMMBzvEli7AZK0Ns4BW2IkTBRg3xDAPPDdQSscISmF7RghlsKMB47umzBGDFx8c79Nr3PrrwPluZgBqieIg1s1PD8lgDmP9cQYMrxy9FgvL2hAAov5j096Qae3+Tj1c0O/7giFfwO/kX0CQEPkR+fCmMgPvvpIedLJuDHo8ayAM2RHVrTia3KwlyQ1JYFSJ3Rvta4ocSgEw126JGOElYd/UzHBk3y5/kWXXlLNXTcSZJDhBMCaL+q+YkNfMwF3FOZj/mHE2UBPobcUMRwLBzlOIzIsgBHTEXjhIAdJ79fWUqo6fsawO6n8R5UhYE7JBCgf00AK7jn1dDFBdh82rdquqorTBb2lgJSHg5ZtloTs0bKoF3sIpZqEBDxynkc7k0B9I3HwM+XFmCOYtTZU3HsORg3FZDysMkzMLNFWkO2cZVgqIY2CdDxCvG2APrMi9Erj4BXNgFGAoC/pYA8D+u8B4S0i4rv7yCoBheFOd7LzRNAPAQer5ID0NMreA4CDwFxUwEpD4v9UlhNKzsu3vo0p9cQwNeeM5yZI4Affb60gAERbegULoXRRhH6dgLyPKyOXuZ4NDhelVYKGHy8pjEEO0fAt/jol0sLMEhIZ6iIHHvelteoNxVA6zTxfMCRfsFfCX7mA9WwVodKxADQHAE8B91nG7H7kcdCkH8aG38tC0j0YI7/TpEb0odkXIixVwk9r7FCAOdhLxR2mOz30oelpNJUg5Txii5qUPME/MbPijvhjwUBex5eFUABB7w2J1LwJBmc2AlXNFYIoHBij274hZbDJ+sENM/TSkQzT8DTlQSQUZiwKm0C5CQW4rYCSGFE0ZT0NV+3kmrwelqJkPME/H4NAYyTOCDNyzqcm6xZw40FiHIhJK9FbBXVkFci9LuOAMa4BiPKHs9A3k7ysb+xANqWy7QNwDcTi0FUgeG1a6qnYqjIAT9lxbiPI38UBHweG7+9JYAxQYHZFFLwZDiIFzEeRKIrbaHzxnoB1iMVrDJkXougCro4mAQk/wvDLAF/xEd/XngZmuOSAnu0CeiyUMi6ZaioX4YWP9C/HBhdvLVpazsfkVci3CwBHLmHqwoY83GfZ0AfRhr2c2MB5fcMQBtvLn6ko/m4NGoCv7ydJeCBq3HXFUAddjxTQqBE+C4EhLwW0VZVImy88lYaYo6Ab3eRr1cQ0NGEJlvvaZRobrgTLgko1CIsXHUpiMdOALo5Ah7SDHRpAWblYQqFB8ajiPgeBLS8fGl5iYCe5rPNKxFmhoAf0gC4sAAb490U9l0RhzLDuwuYHkzhWsRA85HNtBIBelPAH3+NK/pLC/BHK2yXBZjX/a2YwI/s+wsYaxGGx2ujq0tBvIOQ8G8JePzhp3Q+6+ulBVBARI0nK1lIW9gEZLW7/n0FFGoR62eaj5pUIhqokwLuI3d7vhCTV0MnfK4WYBswzSYE7ZOOLAWLwq5IVgjw6ohLCfBQhzhuG5oPD3F4/nZZFPCSn36mTECBT2ckYY8XtNN8oIp/KO/mCihwKQEK4JshokHRbCzCpBIxV8Bvj3QNAdQpHBGywoMuRiO8vwCuRYy5tEdNJcJNKxF6joB77v5XEEBGYooXVJ6B8pNE34GALWAmtQh71qEUAYS3BPz0298czKsIyKvRPti8DqfomIHD8V0IEPHmKg+mtBC8gzst4NvHPY9fqcA/H0t8o8gfqUJagtu+UY5pg/4fvaADVuwwdIzh59MPWSpiRZHyC6lM6YfktYiAvvJgSg8zrUQ4OosFB/T7nmzgzqxEVJhbKBeDdOXBlK3nSgQXUxcBdRQOpkg+mFJ5KEVCjJl8oZ7pf5JRvLs9sxIBS2exYIHmrIMp6nlaiQCdyQLGWoStO5jidfTmx3rGmSwopE7c1R1MQdinDot4O4uFNdekBvRVB1O6+Pl+3Ic905ksDONGQMarqapEyHjt+RVnsSDA04j3lsiin+3NEhn4NIgEncmC9fB8vLbnxeU8lCSiFTgTQ9HZLGx5AhExim5mX3Zw+78iOEDT/8syB6UhoCTNwCoVB4BM6yhBC+cjkU55eru79vQ2Gwgig3EANHSK/7ZzRruN8zoQHomibMmyIjntC+z7P+QBSSV24xP0ZrcFfniATdJkJBLzweKN1y47Bfa8q7UyohPJtzlXwKkYDjwsMTqwU0XxjR92VSeqasLYVl+t5rPus6qLsD/FxlaP2Yo9GrFS8aWUuJ4/1LEDeK8v653oje+11ProzB0vAYo6Sxedrh/4TlPqAOa0jQsgv/Ex+bDQCmQKgby6M1yx/+v/KV/2GMJMIThOcCXqougIawhlCSEWZ4u+qIUlhTDhLttLYlxs85uuB6Z583/AKQRaAOTU1BSCOO6zPoigk1QjfjSCOZ9L4d4BXe084H0I5HlskdEpLNS0Tgjgp48WKcwvpbwDPssSyNuKL5eAdB7J5nBy3+a/6StFfUseb0RdwBdGFkupAwBBlIkByL8e5EMCvNQPYTjIiWsGpnBGmzSdPBbfFmVHZTUAiYFoJp+BuftBJhbWTAFJzwCMRoS/ljsBKFQHgCzrZvt2NO7KaAY8fKPzze++shgA1gwqOJ3uZXUaVfoA4lzqN/nf9bWwXT6J3xhXgmjpCiAWPgLQtFU7AGe2HYDamPhROZ8BNItx6/K2FtacS3ualoZKKM4A4ACgzU1WisO09b1UvsX9Clgp7gBQ3BFATPEBgDLFHUA8+PrcFEAIe/tHtWRp5rQT+Db/tGrRlDreqP95vGW5+vPxCIogdwKA4pTVEQDTM6A1pfYVQMgTMWSNK8qhUWQS9PQZjWlihIa+AVxy9pudCw3omYsD8d5ILEt/LaUAsPkDAN+eWwTE2zhQlPzw2Y4+P31dSnk3NoCteJnDNAhM3xCw/G8p5ZH/gndqOwDPNVN9ANAJROsJgOQ0568A0On1yYw7gOWul5+fmGcnALDdmNS7SDBEi0MsjmuJ4GKnzv2us7lnOGLiw7G/Py+mlpR3AFLhACA/tyhEm4DWYSyF5+kAYH36Olxh77A8AWgEuyINAmtJyvItAc2ffSqP/CninXSoaubZYxyI5Ea8uIczgFgc4QWArjVxPB1BW7DpGrxXAJE2Go5hQqYQAjUwganuB3MGup9ZtzA52ksxjgCYbg8AnPhwBO3NKACmSQG8+LqMDu/Q/f8/gkaUzj6QEFAcZ31I/q4YLWfY3uu+MOKNLESmDNTEcCOh0gAXvgCAL7c3AN4M4UgNISi7CGIdheAb49MPk15TcF4DahSPAOATg8s0GrG6u3YAqGkAcHPHewBwSQG8+Pq4jzzSFFEXmxpnAmkCEO8ptXcENP9bSvdoY+B9/qZOdo/OSkTUkIuEXuUPITIeUo22PdqH0w2rVxgGYF1wlrm3VXaJnjWqBv2wesR7KZ6HiWfDUNnr6MVmzbQVQJz50Eg9s94aoNu0BbgTkUCwLTZrHGASgf3D53eflWpaytkzh6nZChxlXSSqdo/DLZ4JWP7iKw1COKXkI/6aLvXHA0cqJWIlcM5/HD/Vi7nh0t8Uk6Q6sQ3ZE4GPNMvxs0XEIEZfcekvKwsCyno1TLUQf82/6vETpyIuh0v/QL0YgpXSvCqBPf+sx8+nOErDpX8indMpLcyUqBWKe/5Bjh9H4+7jS/9MvNg03lLyabao11Qolez8GNSXfmAUTK2kZASqfrL4vcOlH0LQSQlY/iFc8f+guEvcZRYCTgfzmM6XfnYa77pm74+L53TUdsX/O6PA5BmXfkGN0jV7f30U0BX/b4ozLl367+l/7AxpI8HvYDoAAAAASUVORK5CYII=",
  qo = "/assets/exponential-ebd2c235.png",
  Qo = "/assets/insurace-4410ebc4.png",
  Xo = "/assets/code4rena-white-daf8a3dc.svg",
  Ko = "/assets/chain-security-2c01f784.svg",
  Zo = "/assets/immunefi-073c97ee.svg",
  Jo = "/assets/nexus-mutual-b25c80e6.svg",
  ei = "/assets/sigma-prime-bc48f3fd.svg",
  qe = ({
    serviceLogo: s,
    serviceLogoAlt: t,
    description: r,
    learnMoreText: l,
    childPageURL: a,
    extPageButtonText: n,
    externalPageURL: d,
    extPageButtonText2: o,
    externalPageURL2: i,
    imgClassName: b,
    divClassName: h,
  }) => {
    const u = x.useRef(null);
    return i || a
      ? e.jsxs("div", {
          ref: u,
          className: `${h} col-span-2 md:col-span-3 border-gradient-blue500-green500 flex min-h-[150px] w-full overflow-hidden !rounded-2xl text-center before:rounded-2xl before:!p-0.5`,
          children: [
            e.jsx("div", {
              className:
                "flex w-1/3 items-center justify-center p-4 dark:bg-black-500 md:p-6",
              children: s
                ? e.jsx("img", {
                    src: s,
                    alt: t,
                    className: `service-logo ${b}`,
                  })
                : e.jsx(ct, {
                    variant: "rectangular",
                    width: 200,
                    height: 60,
                    animation: "wave",
                  }),
            }),
            e.jsxs("div", {
              className:
                "flex w-2/3 flex-col items-start justify-center p-4 dark:bg-black-300 md:p-6",
              children: [
                r &&
                  e.jsx("p", {
                    className:
                      "mb-2 md:mb-4 text-xs md:text-base text-left dark:text-black-100",
                    children: r,
                  }),
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-x-3 gap-y-2",
                  children: [
                    a &&
                      e.jsx(Es, {
                        to: a,
                        children: e.jsx(Y, {
                          type: "button",
                          size: "small",
                          look: "primary",
                          children: l,
                        }),
                      }),
                    d &&
                      e.jsx(Y, {
                        type: "button",
                        size: "small",
                        look: "underlined",
                        onClick: () => window.open(d, "_blank"),
                        rightIcon: e.jsx(T, { mui: "CallMadeOutlined" }),
                        children: n,
                      }),
                    i &&
                      e.jsx(Y, {
                        type: "button",
                        size: "small",
                        look: "underlined",
                        onClick: () => window.open(i, "_blank"),
                        rightIcon: e.jsx(T, { mui: "CallMadeOutlined" }),
                        children: o,
                      }),
                  ],
                }),
              ],
            }),
          ],
        })
      : e.jsx("a", {
          href: d,
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "card border-gradient-purple500-blue500 before:!p-0.5 before:transition-all before:hover:!p-[3px]",
          children: e.jsxs("div", {
            className:
              "card__content text-center relative p-16 md:p-20 duration-300 text-white font-bold",
            children: [
              e.jsx("div", {
                className:
                  "card__front absolute top-0 bottom-0 right-0 left-0 p-4 lg:p-8 bg-pink-600 flex items-center justify-center",
                children:
                  s &&
                  e.jsx("img", {
                    src: s,
                    alt: t,
                    className: `service-logo ${b}`,
                  }),
              }),
              e.jsx("div", {
                className:
                  "card__back absolute top-0 bottom-0 right-0 left-0 p-4 bg-teal-500 flex items-center justify-center",
                children:
                  r &&
                  e.jsx("p", {
                    className:
                      "text-xs md:text-base text-left dark:text-black-100",
                    children: r,
                  }),
              }),
            ],
          }),
        });
  },
  ha = () => {
    const s = [
      {
        key: "1",
        label: e.jsx("p", { children: "Audits" }),
        children: e.jsxs("div", {
          className:
            "grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 px-4 lg:px-12 pb-12",
          children: [
            e.jsx(qe, {
              serviceLogo: Xo,
              serviceLogoAlt: "Code4rena Logo",
              description:
                "Competitive audit platform involved in the audits of the Transmuter, the savings and Merkl smart contracts.",
              extPageButtonText: "About Code4rena",
              externalPageURL: ke.immunefi,
              extPageButtonText2: "See audit",
              externalPageURL2: ke.angleAudits,
            }),
            e.jsx(qe, {
              serviceLogo: Ko,
              serviceLogoAlt: "Chain Security Logo",
              description:
                "Leading auditing firm involved in several audits of the Angle Protocol.",
              extPageButtonText: "About Chainsecurity",
              externalPageURL: ke.chainsecurity,
              extPageButtonText2: "See audits",
              externalPageURL2: ke.angleAudits,
            }),
            e.jsx(qe, {
              serviceLogo: ei,
              serviceLogoAlt: "Sigma Prime Logo",
              description: "Audited the Core Module of the Angle Protocol.",
              extPageButtonText: "About Sigma Prime",
              externalPageURL: ke.sigmaprime,
              extPageButtonText2: "See audit",
              externalPageURL2: ke.angleAudits,
            }),
            e.jsx(qe, {
              serviceLogo: Zo,
              serviceLogoAlt: "Immunefi Logo",
              description:
                "Web3's leading bug bounty platform. Explore Angle $500k Bounty.",
              externalPageURL: ke.immunefi,
            }),
          ],
        }),
      },
      {
        key: "2",
        label: e.jsx("p", { children: "Insurance" }),
        children: e.jsxs("div", {
          className:
            "grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 px-4 lg:px-12 pb-12",
          children: [
            e.jsx(qe, {
              serviceLogo: Jo,
              serviceLogoAlt: "Nexus Mutual Logo",
              description:
                "Get covered against smart contract failure & exchange hacks.",
              learnMoreText: "Learn More",
              childPageURL: xe.nexus,
              extPageButtonText: "Buy cover",
              externalPageURL: ke.nexus,
            }),
            e.jsx(qe, {
              serviceLogo: Qo,
              serviceLogoAlt: "Insurace Logo",
              description:
                "Provides reliable, robust and secure insurance services to DeFi users, allowing users to protect their investment funds against various risks.",
              learnMoreText: "Learn More",
              childPageURL: xe.insurace,
              extPageButtonText: "Buy cover",
              externalPageURL: ke.insurace,
            }),
          ],
        }),
      },
      {
        key: "3",
        label: e.jsx("p", { children: "Reviews" }),
        children: e.jsxs("div", {
          className:
            "grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 px-4 lg:px-12 pb-12",
          children: [
            e.jsx(qe, {
              serviceLogo: Wo,
              serviceLogoAlt: "DefiSafety Logo",
              description: "See external review",
              externalPageURL: ke.deftSafety,
              imgClassName: "w-24 lg:w-auto",
            }),
            e.jsx(qe, {
              serviceLogo: Go,
              serviceLogoAlt: "Crypto Risk Assessments Logo",
              description: "See external review",
              externalPageURL: ke.cryptoRiskAssessment,
              imgClassName: "w-32 md:w-28 lg:w-auto",
            }),
            e.jsx(qe, {
              serviceLogo: qo,
              serviceLogoAlt: "Exponential Logo",
              description: "See external review",
              externalPageURL: ke.exponential,
              imgClassName: "w-32 md:w-28 lg:w-auto",
            }),
          ],
        }),
      },
    ];
    return e.jsx("main", {
      className: "container flex",
      children: e.jsxs("div", {
        className:
          "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 mx-auto lg:w-2/3 xl:w-1/2",
        children: [
          e.jsx("hr", {
            className:
              "border-gradient-multiple mb-6 before:!rounded-b-none before:!px-0 before:!py-1",
          }),
          e.jsx(Bt, {
            size: "l",
            defaultActiveKey: "1",
            centered: !0,
            items: s,
          }),
        ],
      }),
    });
  },
  si = () =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("header", { className: "container" }),
        e.jsx("main", {
          className: "container",
          children: e.jsx("h4", {
            className: "w-full text-center dark:text-black-100",
            children:
              "Access to this site is restricted for your country. Do not use this website.",
          }),
        }),
      ],
    }),
  el = "/assets/borrow-cad6ecc9.svg",
  ti = "/assets/double-star-5c2063da.svg";
function ai({ chains: s }) {
  const { t } = ge(),
    r = Nt(),
    { chainId: l, initialized: a, switchChain: n, address: d } = oe(),
    o = x.useMemo(() => a && s.includes(l), [a, l, s]),
    [i, b] = x.useState(!0);
  return (
    x.useEffect(() => {
      a && d === st && !o && n(s[0]);
    }, [o, l]),
    a
      ? e.jsxs(us, {
          wrapClassName: "modal-medium",
          titleIcon: e.jsx(T, { mui: "SwapHoriz" }),
          title: t("Switch Networks"),
          visible: !o && i,
          onCancel: () => {
            r(xe.home), b(!1);
          },
          children: [
            e.jsx("p", {
              className: "mb-4 dark:text-black-100",
              children: t(
                "Unsupported network detected, switch or disconnect to continue."
              ),
            }),
            e.jsx(Ys.Chain, {
              state: [void 0, n],
              className: "min-w-[200px]",
              placeholder: "Select Network",
              options: [...s],
            }),
          ],
        })
      : e.jsx(e.Fragment, {})
  );
}
function zl({ chains: s = [], connected: t, loader: r, children: l }) {
  const { initialized: a, chainId: n } = oe();
  return e.jsxs(e.Fragment, {
    children: [e.jsx(ai, { chains: s }), s.includes(n) && l],
  });
}
const sl = Object.keys(je),
  Is = {
    EUR: {
      borrow: ["MAINNET", "OPTIMISM", "POLYGON", "ARBITRUM"],
      swap: ["MAINNET", "OPTIMISM", "BASE", "ARBITRUM"],
      bridge: sl,
      savings: [
        "MAINNET",
        "ARBITRUM",
        "BASE",
        "GNOSIS",
        "CELO",
        "XLAYER",
        "LINEA",
      ],
      savingsDirect: ["GNOSIS", "CELO", "XLAYER", "LINEA"],
      savingsNoSlippage: ["MAINNET", "BASE"],
    },
    USD: {
      borrow: [],
      swap: ["MAINNET", "BASE", "ARBITRUM"],
      bridge: sl,
      savings: ["MAINNET", "OPTIMISM", "ARBITRUM", "BASE", "XLAYER", "LINEA"],
      savingsDirect: ["OPTIMISM", "XLAYER", "LINEA"],
      savingsNoSlippage: ["MAINNET", "ARBITRUM", "BASE"],
    },
  };
function ri(s, t, r) {
  return r.filter((l) => {
    var a, n;
    return !(
      (n = (a = Is == null ? void 0 : Is[t]) == null ? void 0 : a[l]) != null &&
      n.some((d) => je[d] === s)
    );
  });
}
const Kt = Object.keys(Is),
  Hs = (s, t) => Kt.filter((r) => ri(s, r, t).length === 0);
Object.keys(Is).filter((s) =>
  Object.keys(Is[s]).some((t) => {
    var r;
    return ((r = Is[s][t]) == null ? void 0 : r.length) > 0;
  })
);
const li = Object.keys(Is).filter(
    (s) =>
      !Object.keys(Is[s]).some((t) => {
        var r;
        return ((r = Is[s][t]) == null ? void 0 : r.length) > 0;
      })
  ),
  ni = li.flatMap((s) => [os[s], "st" + s]);
function Ss(s, t) {
  const r = new Set();
  return s
    ? (t.forEach((l) => Is[s][l].forEach((a) => r.add(a))),
      Array.from(r)
        .filter((l) => !t.some((a) => !Is[s][a].includes(l)))
        .map((l) => je[l]))
    : [];
}
const ea = (s, t = "v5.2", r = "swap", l, a, n, d, o, i, b, h, u, p) => ({
  url: `https://api.1inch.dev/swap/${t}/${s}/${r}?${wt.stringify({
    src: l,
    dst: a,
    amount: n.toString(),
    ...(!!d && { connectorTokens: d }),
    ...(r === "quote" && {
      includeTokensInfo: !0,
      includeProtocols: !0,
      includeGas: !0,
    }),
    ...(r === "swap" && {
      fromAddress: o,
      slippage: i,
      disableEstimate: b,
      referrerAddress: Ol,
      permit: p,
      destReceiver: u,
    }),
  })}`,
  body: {},
});
var _e = ((s) => (
    (s[(s.VALID = 0)] = "VALID"),
    (s[(s.PERMIT = 1)] = "PERMIT"),
    (s[(s.VAULTPERMIT = 2)] = "VAULTPERMIT"),
    (s[(s.APPROVAL = 3)] = "APPROVAL"),
    s
  ))(_e || {}),
  xt = ((s) => (
    (s[(s.createVault = 0)] = "createVault"),
    (s[(s.closeVault = 1)] = "closeVault"),
    (s[(s.addCollateral = 2)] = "addCollateral"),
    (s[(s.removeCollateral = 3)] = "removeCollateral"),
    (s[(s.repayDebt = 4)] = "repayDebt"),
    (s[(s.borrow = 5)] = "borrow"),
    (s[(s.getDebtIn = 6)] = "getDebtIn"),
    (s[(s.permit = 7)] = "permit"),
    s
  ))(xt || {}),
  Sa = ((s) => (
    (s[(s.UniswapV3 = 0)] = "UniswapV3"),
    (s[(s.oneINCH = 1)] = "oneINCH"),
    (s[(s.WrapStETH = 2)] = "WrapStETH"),
    (s[(s.None = 3)] = "None"),
    s
  ))(Sa || {});
const De = (s) =>
    s == null
      ? void 0
      : s.symbol
          .substring(0, (s == null ? void 0 : s.symbol.length) - 6)
          .split("-")[1],
  oi = (s) => {
    var t;
    return (t = s == null ? void 0 : s.symbol) == null
      ? void 0
      : t
          .substring(0, (s == null ? void 0 : s.symbol.length) - 6)
          .split("-")[0];
  },
  it = (s, t, r) => {
    var a;
    let l =
      (((((a = s == null ? void 0 : s.collateralAmount) == null
        ? void 0
        : a.toNumber()) +
        (r || 0)) *
        (t == null ? void 0 : t.rate)) /
        (t == null ? void 0 : t.minCollateralRatio)) *
        100 -
      (s == null ? void 0 : s.debt);
    return (l = Number.parseFloat(l.toFixed(18))), l < 1e-10 ? 0 : l;
  },
  tl = (s, t, r) => {
    var l;
    return (
      ((l = s == null ? void 0 : s.collateralAmount) == null
        ? void 0
        : l.toNumber()) -
      (((s == null ? void 0 : s.debt) + (r || 0)) *
        (t == null ? void 0 : t.minCollateralRatio)) /
        (t == null ? void 0 : t.rate) /
        100
    );
  },
  Mt = (s, t, r, l) => {
    var a, n;
    return (((a = s == null ? void 0 : s.collateralAmount) == null
      ? void 0
      : a.toNumber()) ?? 0) +
      (r ?? 0) >
      0
      ? (((s == null ? void 0 : s.debt) ?? 0) + (l ?? 0)) *
          ((t == null ? void 0 : t.minCollateralRatio) /
            100 /
            (((n = s == null ? void 0 : s.collateralAmount) == null
              ? void 0
              : n.toNumber()) +
              (r ?? 0)))
      : 0;
  },
  sa = (s, t, r = 0, l = 0) => {
    var a;
    return (s == null ? void 0 : s.debt) + l > 1e-4
      ? ((((a = s == null ? void 0 : s.collateralAmount) == null
          ? void 0
          : a.toNumber()) +
          r) *
          (t == null ? void 0 : t.rate) *
          100) /
          ((s == null ? void 0 : s.debt) + l) /
          (t == null ? void 0 : t.minCollateralRatio)
      : Number.POSITIVE_INFINITY;
  },
  ii = (s, t, r) => {
    const l = 1 / (1 - t);
    return l * s - (l - 1) * r;
  },
  Hl = (s, t, r, l, a, n) => {
    const d = l ? a * l : a,
      o = t ? r * t : r,
      i = o * n - d * s,
      b = o - d;
    return b > 0 ? 100 * (i / b) : 0;
  },
  Yl = (s) => {
    var l, a;
    const { tokens: t, chainId: r } = oe();
    return ((l = t[r][s]) == null ? void 0 : l.wrappingMethod) !==
      "BorrowStaker" && Lt(s)
      ? t[r][Ns(s)]
      : t[r][(a = t[r][Ns(s)]) == null ? void 0 : a.underlyingTokens[0]];
  },
  al = async (s, t, r, l, a, n, d, o, i, b, h, u = !1) => {
    var w, c, A;
    let p;
    if (u && r && r.gt(0)) {
      const { url: f, body: g } = ea(
        t,
        "v5.2",
        "swap",
        l === Qe ? Gr : l,
        s.collateral,
        r,
        [],
        (w = J(t)) == null ? void 0 : w.AngleRouterV2,
        5,
        !0
      );
      let j;
      try {
        console.log(
          "fetching 1inch with amount",
          r == null ? void 0 : r.toString()
        ),
          (j = (
            await Gs.post(`${Ms}/aggregator/swap`, {
              aggregator: "1inch",
              url: f,
              body: g,
            })
          ).data),
          (p = {
            inToken: l === Qe ? Gr : l,
            collateral: s.collateral,
            amountIn: r,
            minAmountOut: r == null ? void 0 : r.mul(a.raw).div(Fn.raw),
            args: j.payload,
            swapType: Sa.oneINCH,
          });
      } catch (k) {
        console.error("1inch swap payload", k);
      }
    }
    const v = Ds.encode(
        [
          "address",
          "address",
          "address",
          "address",
          "uint256[] memory",
          "bytes[] memory",
          "bytes memory",
        ],
        [
          s.collateral,
          s.address,
          i != null && i.who ? i.who : o,
          i != null && i.who ? i.who : Un,
          n,
          d,
          i != null && i.who ? i.repayData : "0x",
        ]
      ),
      N =
        p && p.swapType === Sa.oneINCH
          ? l === Qe
            ? [Xs.wrapNative, Xs.oneInch, Xs.borrower]
            : [Xs.transfer, Xs.oneInch, Xs.borrower]
          : [Xs.wrapNative, Xs.borrower];
    if (t === je.CELO && N.includes(Xs.wrapNative))
      throw "Preventing using CELO in case wrap native does not work";
    return h
      ? {
          paramsPermitVaultManager: [
            {
              vaultManager: h.contract,
              owner: h.owner,
              approved: h.approved,
              deadline: h.deadline,
              v: h.v,
              r: h.r,
              s: h.s,
            },
          ],
          paramsPermit: b ? [b] : [],
          actions: N,
          data: p
            ? l === Qe
              ? [
                  "0x",
                  Ds.encode(
                    ["address", "uint256", "bytes"],
                    [p.inToken, p.minAmountOut, p.args]
                  ),
                  v,
                ]
              : [
                  Ds.encode(
                    ["address", "address", "uint"],
                    [l, (A = J(t)) == null ? void 0 : A.AngleRouterV2, r]
                  ),
                  Ds.encode(
                    ["address", "uint256", "bytes"],
                    [p.inToken, p.minAmountOut, p.args]
                  ),
                  v,
                ]
            : ["0x", v],
          value:
            (t === je.POLYGON && l === va) || (t === je.MAINNET && l === Qe)
              ? r
              : Zs.parseEther("0"),
        }
      : {
          paramsPermit: b ? [b] : [],
          actions: N,
          data: p
            ? l === Qe
              ? [
                  "0x",
                  Ds.encode(
                    ["address", "uint256", "bytes"],
                    [p.inToken, p.minAmountOut, p.args]
                  ),
                  v,
                ]
              : [
                  Ds.encode(
                    ["address", "address", "uint"],
                    [l, (c = J(t)) == null ? void 0 : c.AngleRouterV2, r]
                  ),
                  Ds.encode(
                    ["address", "uint256", "bytes"],
                    [p.inToken, p.minAmountOut, p.args]
                  ),
                  v,
                ]
            : ["0x", v],
          value:
            (t === je.POLYGON && l === va) || l === Qe ? r : Zs.parseEther("0"),
        };
  },
  Gl = async (s, t, r, l, a) => {
    let n;
    try {
      (n = (await Gs.get(s, { timeout: 5e3 })).data),
        n.success ? (t(Object.values(n.swaps)), r(n.summary)) : l(n.error);
    } catch {
      console.error("Failed to fetch Angle API payload");
    }
    return a(!1), n;
  },
  Wl = async (s, t, r, l, a, n, d, o, i, b, h, u, p, v, N, w, c, A) => {
    var j, k, S;
    const f = u
        .map((m, y) => {
          var C, $;
          return {
            amount:
              ($ = (C = p[y]) == null ? void 0 : C.raw) == null
                ? void 0
                : $.toHexString(),
            address: m == null ? void 0 : m.address,
            decimals: m == null ? void 0 : m.decimals,
            symbol: m == null ? void 0 : m.symbol,
          };
        })
        .filter((m, y) => {
          var C;
          return !!m.address && ((C = p[y]) == null ? void 0 : C.gt(0));
        }),
      g = `${Ms}/leverage?${wt.stringify({
        agTokenToBorrow:
          ((j = n == null ? void 0 : n.raw) == null
            ? void 0
            : j.toHexString()) ?? "0",
        agTokenAddress: h,
        agTokenToSwap:
          ((k = t == null ? void 0 : t.raw) == null
            ? void 0
            : k.toHexString()) ?? "0",
        amountsBrought: f,
        chainId: r,
        collateralAddress: a,
        collateralToAdd:
          ((S = l == null ? void 0 : l.raw) == null
            ? void 0
            : S.toHexString()) ?? "0",
        userAddress: v,
        vaultId: N,
        vaultManagerAddress: w,
        permits: (s == null ? void 0 : s.permits) ?? [],
        vaultPermit: (s == null ? void 0 : s.vaultPermit) ?? void 0,
        slippage: c,
        oneInchSlippage: A,
      })}`;
    return Gl(g, d, o, i, b);
  },
  Gt = Vt.debounce(Wl, 1e3),
  ql = async (
    s,
    t,
    r,
    l,
    a,
    n,
    d,
    o,
    i,
    b,
    h,
    u,
    p,
    v,
    N,
    w,
    c,
    A,
    f,
    g,
    j
  ) => {
    const k = (m) => (m ?? M.from(0)).raw.toString(),
      S = `${Ms}/deleverage?${wt.stringify({
        close: r,
        agTokenToRepay: k(o),
        repayAll: i,
        agTokenAddress: d.address,
        agTokenBrought: k(n),
        chainId: t,
        collateralAddress: b,
        collateralToSwap: k(a),
        collateralToWithdrawToWallet: k(l),
        outputTokenAddress: h,
        outputTokenAmount: k(u),
        vaultId: A,
        vaultManagerAddress: f,
        userAddress: p,
        slippage: g,
        oneInchSlippage: j,
        vaultPermit: (s == null ? void 0 : s.vaultPermit) ?? void 0,
      })}`;
    return Gl(S, v, N, w, c);
  },
  pa = Vt.debounce(ql, 1e3),
  ba = 42,
  ci = ({ visible: s, setVisible: t }) => {
    const { address: r, chainId: l, prices: a, tokens: n } = oe(),
      { data: d } = ze("vaults", { age: "10m" }),
      o = x.useMemo(() => {
        var f;
        return ((f = d == null ? void 0 : d[l]) == null ? void 0 : f[r]) ?? {};
      }, [l, r, d]),
      { data: i } = ze("vaultManagers", { age: "10m" }),
      b = x.useMemo(() => {
        var f;
        return ((f = i == null ? void 0 : i[l]) == null ? void 0 : f[r]) ?? {};
      }, [l, r, i]),
      { execTransactions: h } = rs(),
      { t: u } = ge(),
      p = bs(),
      v = x.useMemo(() => {
        const f = {};
        for (const g of Object.keys(o))
          Object.keys(f)
            .map((j) => j.slice(0, ba))
            .includes(g.slice(0, ba)) || (f[g] = o[g]);
        return f;
      }, [o]),
      N = x.useMemo(() => {
        var g, j, k, S, m;
        const f = {};
        if (v) {
          for (const y of Object.keys(v))
            if ((g = v[y]) != null && g.rewards)
              for (const C of Object.keys(
                (j = v[y]) == null ? void 0 : j.rewards
              ))
                Object.keys(f).includes(C) || (f[C] = 0),
                  (f[C] +=
                    (m = M.from(
                      (k = v[y]) == null ? void 0 : k.rewards[C],
                      (S = n == null ? void 0 : n[l][C]) == null
                        ? void 0
                        : S.decimals
                    )) == null
                      ? void 0
                      : m.toNumber());
        }
        return f;
      }, [n, v, l]),
      w = Object.keys(N).every((f) => N[f] === 0),
      c = w
        ? "No rewards to claim"
        : !!N &&
          Object.keys(N).reduce((f, g, j) => {
            var k, S, m, y;
            return Object.keys(N).length > 1 && j === Object.keys(N).length - 1
              ? (f += ` and ${(k = N[g]) == null ? void 0 : k.toFixed(2)} ${
                  (S = n == null ? void 0 : n[l][g]) == null ? void 0 : S.symbol
                }`)
              : (f += ` ${(m = N[g]) == null ? void 0 : m.toFixed(2)} ${
                  (y = n == null ? void 0 : n[l][g]) == null ? void 0 : y.symbol
                }${
                  Object.keys(N).length > 1 && j !== Object.keys(N).length - 2
                    ? ","
                    : ""
                }`);
          }, "Claim"),
      A = async (f) => {
        await h.claim_borrow_staker_rewards(
          f,
          r,
          Object.keys(o)
            .filter((g) => {
              var j;
              return !!((j = o[g]) != null && j.rewards);
            })
            .map((g) => {
              var k, S;
              const j = Object.keys(Bn).filter((m) => {
                var y;
                return (
                  ((y = J(l, { borrowCollateral: m, stablecoin: "EUR" })) ==
                  null
                    ? void 0
                    : y.VaultManager) === g.slice(0, ba)
                );
              })[0];
              return (S =
                (k = J(l, { borrowCollateral: j, stablecoin: "EUR" })) == null
                  ? void 0
                  : k.additionalProperties) == null
                ? void 0
                : S.Staker;
            })
            .filter($o)
        ),
          t(!1);
      };
    return e.jsxs(us, {
      wrapClassName: "lg:w-2/3",
      title: u("borrow.claim.staker.title"),
      visible: s,
      onCancel: () => {
        t(!1);
      },
      children: [
        e.jsx("div", {
          className: "my-6",
          children: Object.keys(v).map((f, g) => {
            const j = !!o && o[f],
              k = !!b && b[j == null ? void 0 : j.address],
              S = j == null ? void 0 : j.rewards,
              m =
                !!S &&
                Object.keys(j == null ? void 0 : j.rewards).reduce((y, C) => {
                  var $, P, R;
                  return a[($ = n[l][C]) == null ? void 0 : $.symbol]
                    ? y +
                        ((R = M.from(
                          j == null ? void 0 : j.rewards[C],
                          (P = n[l][C]) == null ? void 0 : P.decimals
                        )) == null
                          ? void 0
                          : R.toNumber()) *
                          a[n[l][C].symbol]
                    : y;
                }, 0);
            return S
              ? e.jsxs(
                  "div",
                  {
                    className: "mb-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between border-b pb-2 font-bold dark:border-black-300 dark:text-sand-500",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              e.jsx(Be, {
                                token: k == null ? void 0 : k.collateral,
                                className: "z-1 h-6 w-auto object-contain",
                              }),
                              e.jsx(Be, {
                                token: k == null ? void 0 : k.stablecoin,
                                className: "z-0 -ml-2 mr-2 h-6 w-auto",
                              }),
                              e.jsxs("span", {
                                className: "ml-2 font-bold",
                                children: [
                                  k == null ? void 0 : k.collatSymbol,
                                  "-",
                                  De(j),
                                ],
                              }),
                            ],
                          }),
                          !!m &&
                            e.jsx("p", {
                              className: "font-bold dark:text-sand-500",
                              children: p(m),
                            }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "py-4",
                        children: Object.keys(S).map((y, C) => {
                          var $, P, R, L, O;
                          return e.jsxs(
                            "div",
                            {
                              className:
                                "mb-2 flex items-center justify-end last:mb-0 dark:text-black-100",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex min-w-[120px] items-center justify-between",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-right",
                                      children: `${
                                        (P = M.from(
                                          S[y],
                                          ($ = n[l][y]) == null
                                            ? void 0
                                            : $.decimals
                                        )) == null
                                          ? void 0
                                          : P.toFixed(4)
                                      } ${
                                        (R = n[l][y]) == null
                                          ? void 0
                                          : R.symbol
                                      }`,
                                    }),
                                    e.jsx(Be, {
                                      token: y,
                                      className: "z-1 ml-4 h-auto w-6",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "ml-4 w-24 text-right",
                                  children: a[
                                    (L = n[l][y]) == null ? void 0 : L.symbol
                                  ]
                                    ? p(
                                        ((O = M.from(S[y], n[l][y].decimals)) ==
                                        null
                                          ? void 0
                                          : O.toNumber()) * a[n[l][y].symbol]
                                      )
                                    : null,
                                }),
                              ],
                            },
                            C
                          );
                        }),
                      }),
                    ],
                  },
                  g
                )
              : null;
          }),
        }),
        e.jsx(We, {
          look: "secondary",
          className: "w-full",
          disabled: w,
          onClick: A,
          children: c,
        }),
      ],
    });
  };
var _a = {},
  di = Ue;
Object.defineProperty(_a, "__esModule", { value: !0 });
var Va = (_a.default = void 0),
  mi = di(Fe()),
  ui = e;
Va = _a.default = (0, mi.default)(
  (0, ui.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z",
  }),
  "RemoveCircle"
);
var Ta = {},
  xi = Ue;
Object.defineProperty(Ta, "__esModule", { value: !0 });
var Ql = (Ta.default = void 0),
  fi = xi(Fe()),
  hi = e;
Ql = Ta.default = (0, fi.default)(
  (0, hi.jsx)("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
  }),
  "Visibility"
);
var Ca = { exports: {} };
(function (s, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function r(m) {
    return typeof m == "object" && !("toString" in m)
      ? Object.prototype.toString.call(m).slice(8, -1)
      : m;
  }
  var l = typeof process == "object" && !0;
  function a(m, y) {
    if (!m) throw l ? new Error("Invariant failed") : new Error(y());
  }
  t.invariant = a;
  var n = Object.prototype.hasOwnProperty,
    d = Array.prototype.splice,
    o = Object.prototype.toString;
  function i(m) {
    return o.call(m).slice(8, -1);
  }
  var b =
      Object.assign ||
      function (m, y) {
        return (
          h(y).forEach(function (C) {
            n.call(y, C) && (m[C] = y[C]);
          }),
          m
        );
      },
    h =
      typeof Object.getOwnPropertySymbols == "function"
        ? function (m) {
            return Object.keys(m).concat(Object.getOwnPropertySymbols(m));
          }
        : function (m) {
            return Object.keys(m);
          };
  function u(m) {
    return Array.isArray(m)
      ? b(m.constructor(m.length), m)
      : i(m) === "Map"
      ? new Map(m)
      : i(m) === "Set"
      ? new Set(m)
      : m && typeof m == "object"
      ? b(Object.create(Object.getPrototypeOf(m)), m)
      : m;
  }
  var p = (function () {
    function m() {
      (this.commands = b({}, v)),
        (this.update = this.update.bind(this)),
        (this.update.extend = this.extend = this.extend.bind(this)),
        (this.update.isEquals = function (y, C) {
          return y === C;
        }),
        (this.update.newContext = function () {
          return new m().update;
        });
    }
    return (
      Object.defineProperty(m.prototype, "isEquals", {
        get: function () {
          return this.update.isEquals;
        },
        set: function (y) {
          this.update.isEquals = y;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (m.prototype.extend = function (y, C) {
        this.commands[y] = C;
      }),
      (m.prototype.update = function (y, C) {
        var $ = this,
          P = typeof C == "function" ? { $apply: C } : C;
        (Array.isArray(y) && Array.isArray(P)) ||
          a(!Array.isArray(P), function () {
            return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.";
          }),
          a(typeof P == "object" && P !== null, function () {
            return (
              "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the " +
              ("following commands: " +
                Object.keys($.commands).join(", ") +
                ".")
            );
          });
        var R = y;
        return (
          h(P).forEach(function (L) {
            if (n.call($.commands, L)) {
              var O = y === R;
              (R = $.commands[L](P[L], R, P, y)),
                O && $.isEquals(R, y) && (R = y);
            } else {
              var E =
                  i(y) === "Map"
                    ? $.update(y.get(L), P[L])
                    : $.update(y[L], P[L]),
                U = i(R) === "Map" ? R.get(L) : R[L];
              (!$.isEquals(E, U) || (typeof E > "u" && !n.call(y, L))) &&
                (R === y && (R = u(y)),
                i(R) === "Map" ? R.set(L, E) : (R[L] = E));
            }
          }),
          R
        );
      }),
      m
    );
  })();
  t.Context = p;
  var v = {
      $push: function (m, y, C) {
        return w(y, C, "$push"), m.length ? y.concat(m) : y;
      },
      $unshift: function (m, y, C) {
        return w(y, C, "$unshift"), m.length ? m.concat(y) : y;
      },
      $splice: function (m, y, C, $) {
        return (
          A(y, C),
          m.forEach(function (P) {
            f(P), y === $ && P.length && (y = u($)), d.apply(y, P);
          }),
          y
        );
      },
      $set: function (m, y, C) {
        return j(C), m;
      },
      $toggle: function (m, y) {
        c(m, "$toggle");
        var C = m.length ? u(y) : y;
        return (
          m.forEach(function ($) {
            C[$] = !y[$];
          }),
          C
        );
      },
      $unset: function (m, y, C, $) {
        return (
          c(m, "$unset"),
          m.forEach(function (P) {
            Object.hasOwnProperty.call(y, P) &&
              (y === $ && (y = u($)), delete y[P]);
          }),
          y
        );
      },
      $add: function (m, y, C, $) {
        return (
          S(y, "$add"),
          c(m, "$add"),
          i(y) === "Map"
            ? m.forEach(function (P) {
                var R = P[0],
                  L = P[1];
                y === $ && y.get(R) !== L && (y = u($)), y.set(R, L);
              })
            : m.forEach(function (P) {
                y === $ && !y.has(P) && (y = u($)), y.add(P);
              }),
          y
        );
      },
      $remove: function (m, y, C, $) {
        return (
          S(y, "$remove"),
          c(m, "$remove"),
          m.forEach(function (P) {
            y === $ && y.has(P) && (y = u($)), y.delete(P);
          }),
          y
        );
      },
      $merge: function (m, y, C, $) {
        return (
          k(y, m),
          h(m).forEach(function (P) {
            m[P] !== y[P] && (y === $ && (y = u($)), (y[P] = m[P]));
          }),
          y
        );
      },
      $apply: function (m, y) {
        return g(m), m(y);
      },
    },
    N = new p();
  (t.isEquals = N.update.isEquals),
    (t.extend = N.extend),
    (t.default = N.update),
    (t.default.default = s.exports = b(t.default, t));
  function w(m, y, C) {
    a(Array.isArray(m), function () {
      return (
        "update(): expected target of " +
        r(C) +
        " to be an array; got " +
        r(m) +
        "."
      );
    }),
      c(y[C], C);
  }
  function c(m, y) {
    a(Array.isArray(m), function () {
      return (
        "update(): expected spec of " +
        r(y) +
        " to be an array; got " +
        r(m) +
        ". Did you forget to wrap your parameter in an array?"
      );
    });
  }
  function A(m, y) {
    a(Array.isArray(m), function () {
      return "Expected $splice target to be an array; got " + r(m);
    }),
      f(y.$splice);
  }
  function f(m) {
    a(Array.isArray(m), function () {
      return (
        "update(): expected spec of $splice to be an array of arrays; got " +
        r(m) +
        ". Did you forget to wrap your parameters in an array?"
      );
    });
  }
  function g(m) {
    a(typeof m == "function", function () {
      return (
        "update(): expected spec of $apply to be a function; got " + r(m) + "."
      );
    });
  }
  function j(m) {
    a(Object.keys(m).length === 1, function () {
      return "Cannot have more than one key in an object with $set";
    });
  }
  function k(m, y) {
    a(y && typeof y == "object", function () {
      return "update(): $merge expects a spec of type 'object'; got " + r(y);
    }),
      a(m && typeof m == "object", function () {
        return (
          "update(): $merge expects a target of type 'object'; got " + r(m)
        );
      });
  }
  function S(m, y) {
    var C = i(m);
    a(C === "Map" || C === "Set", function () {
      return (
        "update(): " +
        r(y) +
        " expects a target of type Set or Map; got " +
        r(C)
      );
    });
  }
})(Ca, Ca.exports);
var pi = Ca.exports;
const bi = Oo(pi),
  ji = "/assets/shape-tx-builder-8f88e489.svg";
function gi(s, t, r = 0) {
  const { transactions: l } = rs();
  return x.useMemo(
    () =>
      typeof s == "string" &&
      typeof t == "string" &&
      Object.keys(l).some((a) => {
        var n, d, o, i, b, h, u, p, v, N;
        return (n = l[a]) != null && n.receipt
          ? ((o = (d = l[a]) == null ? void 0 : d.receipt) == null
              ? void 0
              : o.status) === 1 &&
              ((i = l[a]) == null ? void 0 : i.addedTime) >
                Math.max(r, Oe().subtract(2, "minute").unix()) &&
              ((h = (b = l[a]) == null ? void 0 : b.approval) == null
                ? void 0
                : h.tokenAddress) === s
          : ((p = (u = l[a]) == null ? void 0 : u.approval) == null
              ? void 0
              : p.tokenAddress) === s &&
              ((N = (v = l[a]) == null ? void 0 : v.approval) == null
                ? void 0
                : N.spender) === t;
      }),
    [l, t, s, r]
  );
}
var Os = ((s) => (
  (s[(s.UNKNOWN = 0)] = "UNKNOWN"),
  (s[(s.NOT_APPROVED = 1)] = "NOT_APPROVED"),
  (s[(s.PENDING = 2)] = "PENDING"),
  (s[(s.APPROVED = 3)] = "APPROVED"),
  s
))(Os || {});
function za(s, t, r, l = 0) {
  const a = gi(s == null ? void 0 : s.address, t, l),
    { allowanceType: n } = Ze(),
    { execTransactions: d } = rs(),
    [o, i] = x.useState(!1),
    b = x.useMemo(() => {
      var u;
      return !r || !t
        ? 3
        : !(s != null && s.allowance) ||
          ((u = s == null ? void 0 : s.allowance) != null && u.lt(r)) ||
          (s != null && s.allowance.eq(0))
        ? a && o
          ? 2
          : 1
        : 3;
    }, [r, s, t, a, o]),
    h = x.useCallback(
      async (u) => {
        i(!0), await d.approve(u, s, t, n === "limited" ? r.raw : Pl), i(!1);
      },
      [r, s, t, d, n]
    );
  return [b, h];
}
function Ni(s, t) {
  const { allowanceType: r } = Ze(),
    { execTransactions: l } = rs(),
    { data: a, refresh: n } = ze("allowances", { age: "20s" }),
    { chainId: d, address: o } = oe(),
    { data: i } = ze("vaultManagers", { age: "30s" }),
    b = x.useMemo(() => {
      var p;
      return ((p = i == null ? void 0 : i[d]) == null ? void 0 : p[o]) ?? {};
    }, [d, o, i]),
    h = x.useMemo(() => {
      var N, w, c, A, f, g, j, k;
      const p = [];
      let v = !1;
      for (const S of s) {
        if (
          !S.amount ||
          !S.token ||
          !((N = S.amount) != null && N.gt(0)) ||
          !t ||
          ((w = S == null ? void 0 : S.token) == null ? void 0 : w.address) ===
            Qe
        )
          continue;
        let m;
        (c = Jn(d)) != null && c.includes(t)
          ? (m =
              (k =
                (j =
                  (g =
                    (A = a == null ? void 0 : a[d]) == null ? void 0 : A[o]) ==
                  null
                    ? void 0
                    : g[
                        (f = S == null ? void 0 : S.token) == null
                          ? void 0
                          : f.address
                      ]) == null
                  ? void 0
                  : j[Ns(t)]) == null
                ? void 0
                : k.allowance)
          : (m = b[t].collateralAllowance),
          (!m || (m != null && m.lt(S.amount)) || m.eq(0)) &&
            (p.push({ token: S == null ? void 0 : S.token, amount: S.amount }),
            (v = !0));
      }
      return { approval: v ? 1 : 3, neededApprovals: p };
    }, [s, t, d, a, b]),
    u = x.useCallback(
      async (p) => {
        if (h.neededApprovals.length > 0) {
          const v = h.neededApprovals[0];
          await l.approve(
            p,
            {
              address: v.token.address,
              symbol: v.token.symbol,
              base: v.token.decimals,
            },
            t,
            r === "limited" ? v.amount.raw : Pl
          ),
            setTimeout(() => n(), 1e3 * 1);
        }
      },
      [h.neededApprovals, l, t, r]
    );
  return [h.approval, u, h.neededApprovals];
}
var Ha = {},
  yi = Ue;
Object.defineProperty(Ha, "__esModule", { value: !0 });
var Ya = (Ha.default = void 0),
  wi = yi(Fe()),
  ki = e;
Ya = Ha.default = (0, wi.default)(
  (0, ki.jsx)("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }),
  "Send"
);
const rl = {
  0: "zero address",
  1: "sender is not governor",
  2: "sender is not governor and not guardian",
  3: "sender is not vaultManager",
  4: "too big amount",
  5: "vaultManager already added",
  6: "invalid treasury",
  7: "still has rights over the flash loan contract",
  8: "no right over the flash loan contract",
  9: "too high parameter value",
  10: "sender is not core",
  11: "invalid core contract",
  12: "governor must different than guardian",
  13: "unsupported stablecoin",
  14: "sender is not treasury",
  15: "invalid set of parameters",
  16: "caller not approved",
  17: "too small parameter value",
  18: "invalid parameter",
  20: "not whitelisted",
  21: "insolvent vault",
  22: "invalid vaultManager contract",
  23: "burn amount exceeds allowance",
  24: "too small debt amount leftover in the vault",
  25: "incompatible lengths",
  26: "Nonexistent Vault",
  27: "approval to owner",
  28: "approval to caller",
  29: "non ERC721Receiver",
  30: "incorrect caller",
  31: "transfer to the zero address",
  33: "not plugged to the same treasury contract",
  34: "treasury already initialized",
  35: "sender is not minter",
  36: "invalid sender",
  37: "invalid Chainlink rate",
  38: "not enough governors left",
  39: "wrong return message",
  40: "cannot remove vaultManager minting rights this way",
  41: "liquidation impossible",
  42: "contract paused",
  43: "incorrect parameter",
  44: "vault is healthy",
  45: "exceed debt ceiling",
  46: "settlement not initialized",
  47: "sender is not owner",
  48: "vault already claimed",
  49: "claim period for over-collateralized vaults has not ended",
  50: "claim period of collateral against stablecoins has not started",
  51: "invalid token",
  52: "too small amount",
  53: "empty error",
};
var ns = ((s) => (
  (s[(s.BORROW = 0)] = "BORROW"),
  (s[(s.REPAY = 1)] = "REPAY"),
  (s[(s.TRANSFER = 2)] = "TRANSFER"),
  (s[(s.LEVERAGE = 3)] = "LEVERAGE"),
  (s[(s.null = 4)] = "null"),
  s
))(ns || {});
const Xl = x.createContext(null),
  vi = ({ txModalVisible: s, setTxBuilderVisible: t, children: r }) => {
    var Xe, cs, ss, ls, Bs, _s, Vs, $s;
    const { allowPermit: l } = Ze(),
      {
        address: a,
        provider: n,
        chainId: d,
        tokens: o,
        isContract: i,
        spy: b,
      } = oe(),
      { data: h } = ze("vaults", { age: "10m" }),
      u = x.useMemo(() => {
        var H;
        return ((H = h == null ? void 0 : h[d]) == null ? void 0 : H[a]) ?? {};
      }, [d, a, h]),
      { data: p } = ze("vaults", { age: "10m" }),
      v = x.useMemo(() => {
        var H;
        return ((H = p == null ? void 0 : p[d]) == null ? void 0 : H[a]) ?? {};
      }, [d, a, p]),
      { data: N } = ze("vaultManagers", { age: "10m" }),
      w = x.useMemo(() => {
        var H;
        return ((H = N == null ? void 0 : N[d]) == null ? void 0 : H[a]) ?? {};
      }, [d, a, N]),
      { execTransactions: c } = rs(),
      [A, f] = x.useState(null),
      [g, j] = x.useState(null),
      [k, S] = x.useState(null),
      m = x.useMemo(() => {
        var H, ae, Ae, ts, ys, ws, de;
        return {
          address: (H = w[g]) == null ? void 0 : H.address,
          collateral: (ae = w[g]) == null ? void 0 : ae.collateral,
          collateralAmount: M.parse(
            0,
            (Ae = w[g]) == null ? void 0 : Ae.decimals
          ),
          collateralRatio: 0,
          debt: 0,
          debtCeiling: (ts = w[g]) == null ? void 0 : ts.debtCeiling,
          debtString: "0",
          id: 0,
          liquidationPrice: 0,
          rate: (ys = w[g]) == null ? void 0 : ys.rate,
          stablecoin: (ws = w[g]) == null ? void 0 : ws.stablecoin,
          svg: "",
          symbol: (de = w[g]) == null ? void 0 : de.symbol,
        };
      }, [w, g]),
      y = k === "0" ? m : v && v[k],
      C = w && w[g],
      [$, P] = x.useState([]),
      [R, L] = x.useState(null),
      [O, E] = x.useState([]),
      [U, _] = x.useState(null),
      [F, G] = x.useState(null),
      [re, D] = x.useState(!1),
      [V, W] = x.useState(null),
      me = x.useMemo(
        () => F || (y == null ? void 0 : y.collateral),
        [y == null ? void 0 : y.collateral, F]
      ),
      Ne = x.useMemo(() => {
        var H, ae;
        return a
          ? {
              action: 0,
              card: { vKey: k, vmKey: g },
              data: Ds.encode(["address"], [a]),
              title: `Create ${
                (ae = (H = w[g]) == null ? void 0 : H.symbol) == null
                  ? void 0
                  : ae.replace("-vault", "")
              } Vault`,
            }
          : null;
      }, [a, k, w, g]),
      be = x.useMemo(() => !!O || (O == null ? void 0 : O.length) === 0, [O]),
      ue = x.useMemo(
        () => (be ? (k === "0" ? [Ne, ...$] : $) : k === "0" ? [Ne, ...O] : O),
        [be, k, Ne, $, O]
      ),
      ie = x.useMemo(
        () => (O || (O == null ? void 0 : O.length) === 0 ? R : U),
        [O, U, R]
      ),
      ve =
        d === je.MAINNET &&
        ((F === Qe && y.collateral === Ht) ||
          (F === Wr && y.collateral === Ht)),
      [z, B] = x.useState(_e.VALID),
      [I, ee] = x.useState(M.from(0)),
      [le, X] = x.useState(),
      [q, fe] = x.useState(null),
      [pe, ye] = x.useState(!0),
      te = x.useMemo(
        () =>
          !!F &&
          !!ue &&
          !(
            ue != null &&
            ue.every(
              (H) =>
                ![xt.borrow, xt.removeCollateral, xt.getDebtIn].includes(
                  H.action
                )
            )
          ),
        [ue, F]
      ),
      ce =
        l && !b
          ? ((cs =
              (Xe = o == null ? void 0 : o[d]) == null ? void 0 : Xe[me]) ==
            null
              ? void 0
              : cs.hasPermit) && !i
          : !1,
      [Se, we] = za(
        {
          balance: at(me, !1),
          allowance: F
            ? (Bs =
                (ls = u[me]) == null
                  ? void 0
                  : ls[Ns((ss = J(d)) == null ? void 0 : ss.AngleRouterV2)]) ==
              null
              ? void 0
              : Bs.allowance
            : C == null
            ? void 0
            : C.collateralAllowance,
          address: me,
          base: C == null ? void 0 : C.decimals,
          symbol:
            (Vs = (_s = o == null ? void 0 : o[d]) == null ? void 0 : _s[me]) ==
            null
              ? void 0
              : Vs.symbol,
        },
        F
          ? ($s = J(d)) == null
            ? void 0
            : $s.AngleRouterV2
          : C == null
          ? void 0
          : C.address,
        I
      ),
      Re = x.useMemo(
        () =>
          !!w &&
          w[g] &&
          Dt.connect(w[g].address, n == null ? void 0 : n.getSigner(a)),
        [n, a, w, g]
      );
    x.useEffect(() => {
      xs();
    }, [k, g]),
      x.useEffect(() => {
        fe(null);
      }, [F, Re]);
    const Ve = x.useCallback(() => {
        let H;
        O && (H = [...O, ...$]), E(H), _(R);
      }, [O, R, $]),
      Je = (H) => {
        const ae = [...O],
          Ae = ae.indexOf(H);
        Ae > -1 && ae.splice(Ae, 1), E(ae);
      },
      He = () => {
        const H = [],
          ae = [];
        return (
          pe && le !== null && (ae.push(xt.permit), H.push(le)),
          ue == null ||
            ue.forEach((Ae) => {
              ae.push(Ae == null ? void 0 : Ae.action),
                H.push(Ae == null ? void 0 : Ae.data);
            }),
          [ae, H]
        );
      },
      Ye = async () => {
        var ts, ys, ws;
        let H;
        for (const de of ue)
          if ((de == null ? void 0 : de.action) === xt.addCollateral) {
            const ds = F ? de.userValue : de.value;
            H ? (H = H == null ? void 0 : H.add(ds)) : (H = ds);
          }
        (H = F
          ? (ts = H == null ? void 0 : H.div(V)) == null
            ? void 0
            : ts.add(M.from("1"))
          : H),
          H &&
            !(H != null && H.eq(I)) &&
            (H != null && H.gt(0) ? (X(null), ye(!1)) : ye(!0), ee(H));
        const [ae, Ae] = He();
        if ((ae == null ? void 0 : ae.length) !== 0 && Re)
          try {
            let de;
            if (ue != null && ue.every((ds) => !ds.needsWrap))
              ie != null && ie.who
                ? (de = await Re.estimateGas[
                    "angle(uint8[],bytes[],address,address,address,bytes)"
                  ](ae, Ae, a, ie.who, ie.who, ie.repayData))
                : (de = await Re.estimateGas[
                    "angle(uint8[],bytes[],address,address)"
                  ](ae, Ae, a, a));
            else {
              const ds = eo(d, n.getSigner(a)),
                Ke = await al(
                  C,
                  d,
                  H == null ? void 0 : H.raw,
                  F,
                  V,
                  ae,
                  Ae,
                  a,
                  ie,
                  le,
                  q,
                  d === je.MAINNET &&
                    ((F === Qe && y.collateral === Ht) ||
                      (F === Wr && y.collateral === Ht))
                );
              q
                ? (de = await ds.estimateGas.mixerVaultManagerPermit(
                    Ke.paramsPermitVaultManager,
                    Ke.paramsPermit,
                    Ke.actions,
                    Ke.data,
                    { value: Ke.value }
                  ))
                : (de = await ds.estimateGas.mixer(
                    Ke.paramsPermit,
                    Ke.actions,
                    Ke.data,
                    { value: Ke.value }
                  ));
            }
            return { error: "", price: de.toNumber() };
          } catch {
            console.error("🚧", Ee);
            const ds =
              (ws =
                (ys = Ee == null ? void 0 : Ee.data) == null
                  ? void 0
                  : ys.message) == null
                ? void 0
                : ws.split("'");
            let Ke = !!ds && ds[ds.length - 2];
            return (Ke = rl[Ke] ? rl[Ke] : Ke), { error: Ke, price: 0 };
          }
        else return { error: "", price: 0 };
      },
      xs = () => {
        E([]),
          _(null),
          ee(M.from(0)),
          X(null),
          ye(!1),
          fe(null),
          G(null),
          W(null);
      },
      js = async () => {
        var ts;
        const H = n == null ? void 0 : n.getSigner(a),
          ae = Ml.connect(F || (y == null ? void 0 : y.collateral), H),
          Ae = I;
        X(
          await so(
            H,
            Number(await ae.nonces(a)),
            F || (y == null ? void 0 : y.collateral),
            Number((await n.getBlock("latest")).timestamp) + 3600,
            F ? ((ts = J(d)) == null ? void 0 : ts.AngleRouterV2) : C.address,
            Ae.raw,
            await ae.name(),
            d,
            o[d][F || (y == null ? void 0 : y.collateral)].permitVersion
          )
        ),
          ye(!0);
      },
      gs = async () => {
        var Ae;
        const H = n == null ? void 0 : n.getSigner(a),
          ae = await Ba(
            H,
            Number(await Re.nonces(a)),
            Re.address,
            Number((await n.getBlock("latest")).timestamp) + 3600,
            (Ae = J(d)) == null ? void 0 : Ae.AngleRouterV2,
            !0,
            await Re.name(),
            d
          );
        fe(ae);
      },
      es = async (H) => {
        const [ae, Ae] = He();
        if (!F) await c.borrow_angle(H, Re, ae, Ae, a, ie);
        else {
          const ts = await al(C, d, I.raw, F, V, ae, Ae, a, ie, le, q, ve);
          await c.borrow_router(H, F, ts, q);
        }
        xs();
      },
      is = x.useMemo(() => {
        var Ae, ts, ys, ws;
        let H =
            (Ae = y == null ? void 0 : y.collateralAmount) == null
              ? void 0
              : Ae.toNumber(),
          ae = M.from(y == null ? void 0 : y.debtString);
        if (!be && ue)
          for (const de of ue) {
            if ((de == null ? void 0 : de.action) === 1)
              return {
                ...y,
                collateralAmount: M.from(
                  0,
                  (ts = y == null ? void 0 : y.collateralAmount) == null
                    ? void 0
                    : ts.base
                ),
                debt: 0,
                debtString: "0",
              };
            (de == null ? void 0 : de.action) === 2 &&
              (H +=
                (ys = de == null ? void 0 : de.value) == null
                  ? void 0
                  : ys.toNumber()),
              (de == null ? void 0 : de.action) === 3 &&
                (H -=
                  (ws = de == null ? void 0 : de.value) == null
                    ? void 0
                    : ws.toNumber()),
              (de == null ? void 0 : de.action) === 4 &&
                (ae =
                  ae == null ? void 0 : ae.sub(de == null ? void 0 : de.value)),
              (de == null ? void 0 : de.action) === 5 &&
                (ae =
                  ae == null ? void 0 : ae.add(de == null ? void 0 : de.value)),
              (de == null ? void 0 : de.action) === 6 &&
                (ae =
                  ae == null ? void 0 : ae.add(de == null ? void 0 : de.value));
          }
        return {
          ...y,
          collateralAmount: M.parse(
            H,
            y == null ? void 0 : y.collateralAmount.base
          ),
          debt: ae == null ? void 0 : ae.toNumber(),
          debtString: ae == null ? void 0 : ae.raw.toString(),
        };
      }, [y, be, ue]),
      [K, Z] = x.useState(0),
      [Ee, he] = x.useState(""),
      Ie = x.useMemo(
        () =>
          Vt.debounce(async () => {
            const H = await Ye();
            Z(H.price),
              he(H.error),
              I != null && I.gt(0) && ce && !pe
                ? B(_e.PERMIT)
                : I != null &&
                  I.gt(0) &&
                  !ce &&
                  Os.APPROVED !== Se &&
                  (d !== je.POLYGON ? me !== Qe : me !== va)
                ? B(_e.APPROVAL)
                : B(te && !q ? _e.VAULTPERMIT : _e.VALID);
          }, 500),
        [ue, I, pe, Se, F, q, te]
      );
    return (
      x.useEffect(() => {
        Ie();
      }, [Ie]),
      e.jsx(Xl.Provider, {
        value: {
          addSubTxs: Ve,
          approvalState: Se,
          approve: we,
          callback: ie,
          clear: xs,
          contract: Re,
          error: Ee,
          estimate: Ye,
          finalVault: is,
          gasLimit: K,
          needsRouterPermit: te,
          openSubTxBuilder: A,
          removeSubTx: Je,
          requiredAllowance: I,
          routerPermit: q,
          send: es,
          setBundleCallback: _,
          setOpenSubTxBuilder: f,
          setRouterPermit: fe,
          setSubTxList: E,
          setTempCallback: L,
          setTempTransaction: P,
          setTxState: B,
          setVKey: S,
          setVmKey: j,
          setUseSubTokens: D,
          setTxBuilderVisible: t,
          setWrap: G,
          setWrapRate: W,
          signPermits: js,
          signRouterPermits: gs,
          signed: pe,
          subTxList: O,
          transaction: ue,
          txState: z,
          txModalVisible: s,
          usedCollat: me,
          useSubTokens: re,
          vKey: k,
          vault: y,
          vaultManager: C,
          vmKey: g,
          wrap: F,
          wrapRate: V,
        },
        children: r,
      })
    );
  },
  Us = () => x.useContext(Xl),
  Ai = ({
    disabled: s,
    setTxBuilderVisible: t = () => {},
    className: r = null,
    btnText: l,
  }) => {
    const { t: a } = ge(),
      {
        approve: n,
        signPermits: d,
        signRouterPermits: o,
        send: i,
        txState: b,
      } = Us();
    return e.jsx(We, {
      className: `${r}`,
      disabled: s,
      onClick: async (h) => {
        b === _e.PERMIT
          ? await d()
          : b === _e.VAULTPERMIT
          ? await o()
          : b === _e.APPROVAL
          ? await n(h)
          : (await i(h), t(!1));
      },
      children:
        b === _e.PERMIT
          ? e.jsx(e.Fragment, {
              children: e.jsx(se, {
                overlayClassName: "p-sm",
                placement: "right",
                title: a(
                  "You must give the Angle smart contracts the permission to use your tokens."
                ),
                children: a("borrow.modify.signPermit"),
              }),
            })
          : b === _e.VAULTPERMIT
          ? e.jsx(e.Fragment, {
              children: e.jsx(se, {
                overlayClassName: "p-sm",
                placement: "right",
                title: a(
                  "You must give the Angle smart contracts the permission to borrow from your vaults or to withdraw collateral from it."
                ),
                children: a("borrow.modify.signPermit"),
              }),
            })
          : b === _e.APPROVAL
          ? a("borrow.modify.approve")
          : e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ya, { className: "mr-2" }),
                " ",
                l || a("borrow.modify.send"),
              ],
            }),
    });
  },
  Si = {
    0: "Create Vault",
    1: "Close Vault",
    2: "Add Collateral",
    3: "Remove Collateral",
    4: "Repay Debt",
    5: "Borrow Stablecoin",
  },
  Ci = ({ index: s, subTx: t, moveCard: r }) => {
    var b, h, u, p, v, N, w;
    const l = x.useRef(null),
      { removeSubTx: a } = Us(),
      { address: n, chainId: d } = oe(),
      { data: o } = ze("vaultManagers", { age: "10m" }),
      i = x.useMemo(() => {
        var c;
        return ((c = o == null ? void 0 : o[d]) == null ? void 0 : c[n]) ?? {};
      }, [d, n, o]);
    return e.jsxs("div", {
      className: "draggable-card",
      ref: l,
      children: [
        e.jsx("div", {
          className: "flex w-full cursor-grab items-center",
          children: e.jsxs("div", {
            className: "ml-2 mr-4 w-full",
            children: [
              e.jsxs("div", {
                className: "flex w-full items-center justify-between",
                children: [
                  e.jsx("p", {
                    className: "font-bold dark:text-blue-500",
                    children: `${s}. ${
                      t != null && t.title
                        ? t == null
                          ? void 0
                          : t.title
                        : Si[t == null ? void 0 : t.action]
                    }`,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      !!i[
                        (b = t == null ? void 0 : t.card) == null
                          ? void 0
                          : b.vmKey
                      ] &&
                        e.jsx(Be, {
                          token:
                            (u =
                              i[
                                (h = t == null ? void 0 : t.card) == null
                                  ? void 0
                                  : h.vmKey
                              ]) == null
                              ? void 0
                              : u.collateral,
                          className: "h-5 w-auto object-contain",
                        }),
                      !!i[
                        (p = t == null ? void 0 : t.card) == null
                          ? void 0
                          : p.vmKey
                      ] &&
                        e.jsx(Be, {
                          token:
                            (N =
                              i[
                                (v = t == null ? void 0 : t.card) == null
                                  ? void 0
                                  : v.vmKey
                              ]) == null
                              ? void 0
                              : N.stablecoin,
                          className: "-ml-2 h-5 w-auto object-contain",
                        }),
                    ],
                  }),
                ],
              }),
              (t == null ? void 0 : t.card) &&
                ((w = Object.keys(t == null ? void 0 : t.card).filter(
                  (c) => c !== "vKey" && c !== "vmKey"
                )) == null
                  ? void 0
                  : w.length) > 0 &&
                e.jsx("div", {
                  className: "mt-2 w-full border-t pt-2 dark:border-black-300",
                  children: Object.keys(t == null ? void 0 : t.card)
                    .filter((c) => c !== "vKey" && c !== "vmKey")
                    .map((c) =>
                      e.jsxs(
                        "div",
                        {
                          className: "mb-1 flex justify-between last:mb-0",
                          children: [
                            e.jsx("p", {
                              className: "p-sm dark:text-black-100",
                              children: c,
                            }),
                            e.jsx("p", {
                              className: "p-sm font-bold dark:text-sand-500",
                              children: t == null ? void 0 : t.card[c],
                            }),
                          ],
                        },
                        c
                      )
                    ),
                }),
            ],
          }),
        }),
        e.jsx(Va, {
          className:
            "enabled dim absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform cursor-pointer !transition-all hover:font-bold dark:text-blue-500",
          onClick: () => a(t),
        }),
      ],
    });
  };
var Ga = {},
  Ei = Ue;
Object.defineProperty(Ga, "__esModule", { value: !0 });
var Ft = (Ga.default = void 0),
  Pi = Ei(Fe()),
  Ri = e;
Ft = Ga.default = (0, Pi.default)(
  (0, Ri.jsx)("path", {
    d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z",
  }),
  "CachedOutlined"
);
var Wa = {},
  Ii = Ue;
Object.defineProperty(Wa, "__esModule", { value: !0 });
var qa = (Wa.default = void 0),
  Li = Ii(Fe()),
  $i = e;
qa = Wa.default = (0, Li.default)(
  (0, $i.jsx)("path", { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" }),
  "KeyboardArrowDownOutlined"
);
var Qa = {},
  Di = Ue;
Object.defineProperty(Qa, "__esModule", { value: !0 });
var ia = (Qa.default = void 0),
  Oi = Di(Fe()),
  Mi = e;
ia = Qa.default = (0, Oi.default)(
  (0, Mi.jsx)("path", {
    d: "M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z",
  }),
  "OpenInFull"
);
var Xa = {},
  Fi = Ue;
Object.defineProperty(Xa, "__esModule", { value: !0 });
var Kl = (Xa.default = void 0),
  Ui = Fi(Fe()),
  Bi = e;
Kl = Xa.default = (0, Ui.default)(
  (0, Bi.jsx)("path", {
    d: "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z",
  }),
  "TaskAlt"
);
const ca = ({
    usePermit: s,
    useETH: t,
    amount: r,
    approvalState: l,
    approve: a,
    className: n,
    additionalDisable: d = !1,
    error: o,
  }) => {
    const { t: i } = ge();
    return (
      !s &&
      !t &&
      e.jsx(We, {
        className: n,
        onClick: a,
        disabled: l !== Os.NOT_APPROVED || !(r != null && r.gt(0)) || d,
        isApproveBtn: !0,
        children:
          o ??
          e.jsxs(e.Fragment, {
            children: [
              l === Os.APPROVED &&
                (r == null ? void 0 : r.gt(0)) &&
                e.jsx(Kl, { className: "small mr-2" }),
              l === Os.APPROVED && r != null && r.gt(0)
                ? i("Approved")
                : i("Approve"),
            ],
          }),
      })
    );
  },
  Zl = () => {
    const [s, t] = x.useState(!1),
      { t: r } = ge();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Y, {
          type: "button",
          look: "underlined",
          onClick: () => t(!0),
          children: r("What are the risks?"),
        }),
        e.jsx(us, {
          title: r("borrow.risks"),
          titleIcon: e.jsx(T, { mui: "WarningOutlined" }),
          visible: s,
          onCancel: () => {
            t(!1);
          },
          children: e.jsxs("div", {
            className: "w-full md:w-3/4",
            children: [
              e.jsx("p", {
                className: "mt-2 text-lg font-bold dark:text-sand-500",
                children: r("Smart contract risks"),
              }),
              e.jsx("p", {
                className: "mb-4 dark:text-sand-500",
                children: r("borrow.smartcontract"),
              }),
              e.jsx("p", {
                className: "text-lg font-bold dark:text-sand-500",
                children: r("borrow.price"),
              }),
              e.jsx("p", {
                className: "dark:text-sand-500",
                children: r("borrow.price.content"),
              }),
            ],
          }),
        }),
      ],
    });
  };
var Ka = {},
  _i = Ue;
Object.defineProperty(Ka, "__esModule", { value: !0 });
var As = (Ka.default = void 0),
  Vi = _i(Fe()),
  Ti = e;
As = Ka.default = (0, Vi.default)(
  (0, Ti.jsx)("path", {
    d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  }),
  "ArrowForward"
);
const ll = {
    ANGLE: "Angle Protocol",
    BALANCER: "Balancer",
    BALANCER_V2: "Balancer V2",
    DEFISWAP: "DeFi Swap",
    DEFI_PLAZA: "Defi Plaza",
    DXSWAP: "DX Swap",
    LINKSWAP: "Linkswap",
    ONE_INCH_LIMIT_ORDER_V2: "1inch Limit Order Protocol V2",
    SUSHI: "Sushi",
    KOI: "Koi Finance",
    UNISWAP_V1: "Uniswap V1",
    UNISWAP_V2: "Uniswap V2",
    UNISWAP_V3: "Uniswap V3",
    POLYGON_AAVE_V2: "Polygon Aave V2",
    POLYGON_BALANCER_V2: "Polygon Balencer V2",
    POLYGON_CURVE: "Polygon Curve",
    POLYGON_DODO_V2: "Polygon Dodo V2",
    POLYGON_DYSTOPIA: "Polygon Dystopia",
    POLYGON_MAVERICK: "Polygon Maverick",
    POLYGON_MESHSWAP: "Polygon Meshswap",
    POLYGON_PMM5: "Polygon PMM5",
    POLYGON_PMM6: "Polygon PMM6",
    POLYGON_QUICKSWAP: "Polygon Quickswap",
    POLYGON_SUSHISWAP: "Polygon Sushiswap",
    POLYGON_SWAAP: "Polygon Swaap",
    POLYGON_UNISWAP_V3: "Polygon Uniswap V3",
    OPTIMISM_BALANCER_V2: "Optimism Balancer V2",
    OPTIMISM_CURVE: "Optimism Curve",
    OPTIMISM_PMM6: "Optimism PMM6",
    OPTIMISM_UNISWAP_V3: "Optimism Uniswap V3",
    OPTIMISM_VELODROME: "Optimism Velodrome",
    ARBITRUM_BALANCER_V2: "Arbitrum Balancer V2",
    ARBITRUM_KYBERSWAP_ELASTIC: "Arbitrum Kyberswap Elastic",
    ARBITRUM_UNISWAP_V3: "Arbitrum Uniswap V3",
    AVALANCHE_SUSHISWAP: "Avalanche SushiSwap",
    TRADERJOE: "Avalanche Trader Joe",
  },
  Jl = ({
    routesArray: s,
    inputToken: t,
    outputToken: r,
    className: l,
    ...a
  }) => {
    var i, b;
    if (typeof s == "string")
      return e.jsx(Y, {
        look: "text",
        rightIcon: e.jsx(T, {
          mui: "RemoveRedEye",
          size: "s",
          className: "dark:!text-blue-500",
        }),
        className: ["text-sm", l || ""].join(" "),
        ...a,
        children: "Show route",
      });
    const { tokens: n, chainId: d } = oe(),
      o = [t == null ? void 0 : t.symbol];
    for (let h = 0; h < (s == null ? void 0 : s.length); h++)
      o.push(
        (b = n[d][Ns((i = s[h][0]) == null ? void 0 : i.toTokenAddress)]) ==
          null
          ? void 0
          : b.symbol
      );
    return e.jsxs("div", {
      className: [
        "dim text-peach flex cursor-pointer flex-wrap items-center",
        l || "",
      ],
      ...a,
      children: [
        o == null
          ? void 0
          : o.map((h, u) =>
              e.jsxs(
                "div",
                {
                  className: "flex flex-wrap items-center font-bold",
                  children: [
                    h,
                    u !== (o == null ? void 0 : o.length) - 1 &&
                      e.jsx(As, { className: "px-1 dark:text-black-100" }),
                  ],
                },
                u
              )
            ),
        e.jsx(ia, { className: "small ml-2 dark:text-blue-500" }),
      ],
    });
  },
  Za = ({
    visible: s,
    setVisible: t,
    routesArray: r,
    inputToken: l,
    outputToken: a,
    inModal: n = !0,
    swap: d,
  }) => {
    var h, u, p, v, N, w;
    const { chainId: o, tokens: i } = oe(),
      b =
        d &&
        ((v = i[o]) == null
          ? void 0
          : v[
              Ns(
                (p =
                  (u =
                    d == null
                      ? void 0
                      : d.protocols[
                          ((h = d == null ? void 0 : d.protocols) == null
                            ? void 0
                            : h.length) - 1
                        ]) == null
                    ? void 0
                    : u[0]) == null
                  ? void 0
                  : p.toTokenAddress
              )
            ]);
    return r
      ? n
        ? e.jsx(us, {
            title: "Routing",
            titleIcon: e.jsx(T, { svg: "routes", className: "!w-auto" }),
            centered: !0,
            visible: s,
            width: "40%",
            onCancel: () => {
              t(!1);
            },
            closable: !0,
            wrapClassName: "custom-modal-class routes-modal",
            children:
              typeof r == "string"
                ? e.jsx("img", {
                    src: r,
                    alt: "error loading route",
                    className: "w-[90vw] md:w-[70vw] xl:w-[50vw]",
                  })
                : e.jsxs("div", {
                    className:
                      "route-line relative mt-4 flex flex-col flex-wrap items-center justify-between md:flex-row",
                    children: [
                      !!(l != null && l.symbol) &&
                        e.jsx(Be, {
                          token:
                            (l == null ? void 0 : l.symbol) === "ETH"
                              ? Qe.toLowerCase()
                              : l == null
                              ? void 0
                              : l.address,
                        }),
                      e.jsx(As, {
                        className: "z-1 m-2 font-bold dark:text-peach-500",
                      }),
                      r.map((c, A) =>
                        e.jsxs(
                          x.Fragment,
                          {
                            children: [
                              e.jsx("div", {
                                className: "flex items-center p-2",
                                children: e.jsx(nl, {
                                  protocols: c,
                                  tokens: i,
                                }),
                              }),
                              e.jsx(As, {
                                className: "m-2 font-bold dark:text-peach-500",
                              }),
                            ],
                          },
                          A
                        )
                      ),
                      !!(
                        (d == null ? void 0 : d.amountOut) ??
                        (d == null ? void 0 : d.minAmountOut)
                      ) &&
                        e.jsx("div", {
                          className: "dark:text-black-100",
                          children: `${
                            (N = M.from(
                              (d == null ? void 0 : d.amountOut) ??
                                (d == null ? void 0 : d.minAmountOut),
                              b.decimals
                            )) == null
                              ? void 0
                              : N.toFixed(2)
                          } ${b.symbol}`,
                        }),
                      e.jsx(Be, {
                        token: a == null ? void 0 : a.address,
                        className: "z-0 mr-2 w-10 last:mr-0",
                      }),
                    ],
                  }),
          })
        : e.jsxs("div", {
            className: "mt-4 flex md:mt-8",
            children: [
              e.jsxs("div", {
                className:
                  "route-input border-gradient-purple500-blue500 mr-2 flex min-w-max items-center before:!rounded-none before:!py-0 before:!pl-0 md:mr-0",
                children: [
                  !!(l != null && l.symbol) &&
                    e.jsx(Be, {
                      className: "w-10",
                      token:
                        (l == null ? void 0 : l.symbol) === "ETH"
                          ? Qe
                          : l == null
                          ? void 0
                          : l.address,
                    }),
                  e.jsx("span", {
                    className: "gradient-purple500-blue500 ml-1 h-px w-4",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "w-full",
                children: e.jsxs("div", {
                  className:
                    "route-line relative mb-4 flex w-full items-center justify-around last:mb-0",
                  children: [
                    d != null && d.amountIn
                      ? e.jsxs("div", {
                          className:
                            "mx-2 flex min-w-max flex-col items-center text-sm font-bold dark:text-black-100",
                          children: [
                            e.jsx(As, {
                              className: "z-1 m-2 dark:text-peach-500",
                            }),
                            `${
                              (w = M.from(
                                d == null ? void 0 : d.amountIn,
                                l.decimals
                              )) == null
                                ? void 0
                                : w.toFixed(2)
                            } ${l.symbol}`,
                          ],
                        })
                      : e.jsx(As, {
                          className: "z-1 m-2 font-bold dark:text-peach-500",
                        }),
                    r.map((c, A) => {
                      var f;
                      return e.jsxs(
                        x.Fragment,
                        {
                          children: [
                            e.jsx("div", {
                              className: "flex items-center",
                              children: e.jsx(nl, { protocols: c, tokens: i }),
                            }),
                            ((d == null ? void 0 : d.amountOut) ??
                              (d == null ? void 0 : d.minAmountOut)) &&
                            A === r.length - 1
                              ? e.jsxs("div", {
                                  className:
                                    "mx-2 flex min-w-max flex-col items-center text-sm font-bold dark:text-black-100",
                                  children: [
                                    e.jsx(As, {
                                      className: "z-1 m-2 dark:text-peach-500",
                                    }),
                                    `${
                                      (f = M.from(
                                        (d == null ? void 0 : d.amountOut) ??
                                          (d == null ? void 0 : d.minAmountOut),
                                        b.decimals
                                      )) == null
                                        ? void 0
                                        : f.toFixed(2)
                                    } ${b.symbol}`,
                                  ],
                                })
                              : e.jsx(As, {
                                  className:
                                    "z-1 m-2 font-bold dark:text-peach-500",
                                }),
                          ],
                        },
                        A
                      );
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className:
                  "route-output border-gradient-purple500-blue500 mr-2 flex items-center before:!rounded-none before:!py-0 before:!pr-0",
                children: [
                  e.jsx("span", {
                    className: "gradient-purple500-blue500 mr-1 h-px w-4",
                  }),
                  e.jsx(Be, {
                    token: a == null ? void 0 : a.address,
                    className: "z-0 mr-2 w-10 min-w-[40px] last:mr-0",
                  }),
                ],
              }),
            ],
          })
      : null;
  },
  en = ({ visible: s, setVisible: t, swaps: r, outputToken: l }) => {
    const { chainId: a, tokens: n } = oe();
    return e.jsx(us, {
      title: "Routing",
      titleIcon: e.jsx(T, { svg: "routes", className: "!w-auto" }),
      centered: !0,
      visible: s,
      width: "40%",
      onCancel: () => {
        t(!1);
      },
      closable: !0,
      wrapClassName: "custom-modal-class routes-modal",
      children: r
        ? r == null
          ? void 0
          : r.map((d, o) =>
              e.jsx(
                "div",
                {
                  children: e.jsx("div", {
                    children: e.jsx(Za, {
                      visible: s,
                      setVisible: t,
                      routesArray: d == null ? void 0 : d.protocols,
                      inputToken: n[a][d.inToken],
                      outputToken: n[a][d.outToken],
                      inModal: !1,
                      swap: d,
                    }),
                  }),
                },
                o
              )
            )
        : null,
    });
  },
  nl = ({ protocols: s, tokens: t }) => {
    var n, d, o, i, b, h;
    const { chainId: r } = oe(),
      l =
        (d = t[r][Ns((n = s[0]) == null ? void 0 : n.fromTokenAddress)]) == null
          ? void 0
          : d.symbol,
      a =
        (i = t[r][Ns((o = s[0]) == null ? void 0 : o.toTokenAddress)]) == null
          ? void 0
          : i.symbol;
    return e.jsxs("div", {
      className:
        "border-gradient-peach500-purple500-blue500 z-1 min-w-max px-3 py-3",
      children: [
        e.jsxs("div", {
          className: "mb-2 flex flex-wrap items-center",
          children: [
            e.jsx("div", {
              className: "w-6",
              children: e.jsx(Be, {
                token: (b = s[0]) == null ? void 0 : b.fromTokenAddress,
              }),
            }),
            e.jsxs("p", {
              className: "mx-2 font-bold",
              children: [l, " - ", a],
            }),
            e.jsx("div", {
              className: "w-6",
              children: e.jsx(Be, {
                token: (h = s[0]) == null ? void 0 : h.toTokenAddress,
              }),
            }),
          ],
        }),
        s.map((u, p) =>
          e.jsx(
            "p",
            {
              className:
                "rounded-md px-1.5 py-0.5 text-sm dark:bg-black-500 dark:text-black-100",
              children: `${
                ll[u == null ? void 0 : u.name]
                  ? ll[u == null ? void 0 : u.name]
                  : u == null
                  ? void 0
                  : u.name
              } - ${u == null ? void 0 : u.part}%`,
            },
            p
          )
        ),
      ],
    });
  };
var Ja = {},
  zi = Ue;
Object.defineProperty(Ja, "__esModule", { value: !0 });
var er = (Ja.default = void 0),
  Hi = zi(Fe()),
  Yi = e;
er = Ja.default = (0, Hi.default)(
  (0, Yi.jsx)("path", { d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" }),
  "Warning"
);
const ol = ({
    className: s,
    slippage: t,
    setSlippage: r,
    tooltipText: l,
    text: a = "Slippage",
  }) => {
    ge(), Ze();
    const n = 40,
      d = 50,
      [o, i] = x.useState(void 0),
      b = (h) => {
        r(Math.floor(h * 100) / 100),
          h > d ? (i(!0), r(d)) : h > n ? i(!0) : i(!1);
      };
    return e.jsx("div", {
      className: `text-sm ${s}`,
      children: e.jsxs("div", {
        className:
          "mb-1 flex flex-wrap justify-between gap-2 dark:text-black-200",
        children: [
          e.jsx(se, {
            overlayClassName: "small",
            placement: "right",
            title:
              l ||
              "This transaction implies doing a swap. It will revert if prices change unfavorably by this percentage.",
            children: a,
          }),
          e.jsxs("div", {
            className: "flex items-center",
            children: [
              o &&
                e.jsx(se, {
                  overlayClassName: "small",
                  placement: "right",
                  title: "Your transaction may be frontrun.",
                  children: e.jsx(er, {
                    className: "mr-2 dark:text-coral-500",
                  }),
                }),
              e.jsx(Me, {
                type: "number",
                size: "s",
                className: "small w-20",
                state: [t, b],
                suffix: "%",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Gi = {
    [je.MAINNET]: [
      ...Hs(je.MAINNET, ["swap"]).map((s) => os[s]),
      "ANGLE",
      "ETH",
    ],
    [je.BASE]: [...Hs(je.MAINNET, ["swap"]).map((s) => os[s]), "ETH"],
    [je.POLYGON]: [
      ...Hs(je.POLYGON, ["swap"]).map((s) => os[s]),
      "ANGLE",
      "MATIC",
    ],
    [je.OPTIMISM]: [
      ...Hs(je.OPTIMISM, ["swap"]).map((s) => os[s]),
      "OP",
      "ETH",
    ],
    [je.ARBITRUM]: [...Hs(je.ARBITRUM, ["swap"]).map((s) => os[s]), "ETH"],
    [je.BSC]: [...Hs(je.BSC, ["swap"]).map((s) => os[s])],
  },
  Wi = ({
    currency: s,
    setCurrency: t,
    setVisible: r,
    commonCurrencies: l = null,
    disabledCurrencies: a,
  }) => {
    var o;
    const { chainId: n, tokens: d } = oe();
    return (
      l || (l = Gi[n]),
      e.jsx("div", {
        className:
          "border-gradient-peach500-purple500-blue500 flex w-full flex-wrap justify-start gap-3 py-3 before:!rounded-none before:!px-0 before:!pt-0",
        children:
          !!(d != null && d[n]) &&
          ((o = Object.keys(d == null ? void 0 : d[n])) == null
            ? void 0
            : o
                .filter((i) => {
                  var b;
                  return (
                    (l == null
                      ? void 0
                      : l.includes(
                          (b = d == null ? void 0 : d[n][i]) == null
                            ? void 0
                            : b.symbol
                        )) || (l == null ? void 0 : l.includes(i))
                  );
                })
                .map((i) => {
                  var b;
                  return e.jsx(
                    Y,
                    {
                      type: "button",
                      size: "small",
                      look: "secondary",
                      onClick: () => {
                        t(d == null ? void 0 : d[n][i]), r(!1);
                      },
                      disabled:
                        (s == null ? void 0 : s.address) === i ||
                        (a == null ? void 0 : a.includes(i)),
                      leftIcon: e.jsx(Be, { token: i, className: "mr-1 w-7" }),
                      children:
                        (b = d == null ? void 0 : d[n][i]) == null
                          ? void 0
                          : b.symbol,
                    },
                    i
                  );
                })),
      })
    );
  };
var sr = {},
  qi = Ue;
Object.defineProperty(sr, "__esModule", { value: !0 });
var sn = (sr.default = void 0),
  Qi = qi(Fe()),
  Xi = e;
sn = sr.default = (0, Qi.default)(
  (0, Xi.jsx)("path", {
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
  }),
  "AddCircleOutline"
);
var tr = {},
  Ki = Ue;
Object.defineProperty(tr, "__esModule", { value: !0 });
var tn = (tr.default = void 0),
  Zi = Ki(Fe()),
  Ji = e;
tn = tr.default = (0, Zi.default)(
  (0, Ji.jsx)("path", {
    d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
  }),
  "RemoveCircleOutline"
);
const ec = ["agGOLD"].concat(ni);
function sc() {
  const { oneInchTokens: s } = oe();
  return x.useCallback(
    async (t, r) => {
      let l;
      if (((l = s[Ns(t)]), !l))
        try {
          l = (
            await Gs.get(
              `${Ms}/collect?${wt.stringify({ chainId: r, tokenAddress: t })}`,
              { timeout: 5e3 }
            )
          ).data;
        } catch (a) {
          return console.error(a), null;
        }
      return l;
    },
    [s]
  );
}
const tc = ({
    searchPhrase: s,
    currency: t,
    setCurrency: r,
    setVisible: l,
    hiddenCurrencies: a,
    disabledCurrencies: n,
  }) => {
    var $, P;
    const { t: d } = ge(),
      {
        chainId: o,
        tokens: i,
        ethBalance: b,
        prices: h,
        userTokens: u,
        oneInchTokens: p,
        refreshUserToken: v,
        address: N,
      } = oe(),
      { data: w } = ze("balances", { age: "2m" }),
      c = x.useMemo(() => {
        var R;
        return ((R = w == null ? void 0 : w[o]) == null ? void 0 : R[N]) ?? {};
      }, [o, N]),
      A = sc(),
      f = bs(),
      [g, j] = x.useState({}),
      [k, S] = x.useState({}),
      [m, y] = x.useState(null),
      C = x.useMemo(() => {
        const R = {};
        if (i != null && i[o])
          for (const L of Object.values(i[o]))
            (s !== "" || L.useInSwap) &&
              !(a != null && a.includes(L.address)) &&
              (R[L.address] = L);
        if (u != null && u[o])
          for (const L of Object.values(u == null ? void 0 : u[o]))
            R[L.address] = L;
        if (p && s !== "") for (const L of Object.values(p)) R[L.address] = L;
        return m != null && m.address && (R[m.address] = m), R;
      }, [i, o, u, p, s, m, a]);
    return (
      x.useEffect(() => {
        _n(s) &&
          y({ address: Ns(s), name: void 0, symbol: Ns(s), decimals: 18 });
      }, [s]),
      e.jsx("div", {
        className: "custom-scrollbar -mr-6 h-96 overflow-y-scroll pr-6",
        children:
          (P =
            ($ = Object.keys(C)
              .filter((R) => {
                var L;
                return !ec.includes((L = i[o][R]) == null ? void 0 : L.symbol);
              })
              .filter((R) => {
                var L;
                return (
                  ((L = i[o][R]) == null ? void 0 : L.symbol) !== "ANGLE" ||
                  o === je.MAINNET
                );
              })) == null
              ? void 0
              : $.filter((R) => {
                  var L, O, E, U;
                  return s !== ""
                    ? ((O = (L = C[R]) == null ? void 0 : L.name) == null
                        ? void 0
                        : O.toLowerCase().includes(
                            s == null ? void 0 : s.toLowerCase()
                          )) ||
                        ((U = (E = C[R]) == null ? void 0 : E.symbol) == null
                          ? void 0
                          : U.toLowerCase().includes(
                              s == null ? void 0 : s.toLowerCase()
                            )) ||
                        (R == null
                          ? void 0
                          : R.toLowerCase().includes(
                              s == null ? void 0 : s.toLowerCase()
                            ))
                    : !0;
                })) == null
            ? void 0
            : P.sort((R, L) => {
                var U, _, F, G, re, D, V, W;
                let O =
                    ((U = C[R]) == null ? void 0 : U.symbol) === "ETH"
                      ? M.from(b)
                      : (_ = c[R]) == null
                      ? void 0
                      : _.balance,
                  E =
                    ((F = C[L]) == null ? void 0 : F.symbol) === "ETH"
                      ? M.from(b)
                      : (G = c[L]) == null
                      ? void 0
                      : G.balance;
                if (
                  (O || (O = M.from(0)),
                  E || (E = M.from(0)),
                  (re = i[R]) != null &&
                    re.name &&
                    !((D = i[L]) != null && D.name))
                )
                  return -1;
                if (
                  !((V = i[R]) != null && V.name) &&
                  (W = i[L]) != null &&
                  W.name
                )
                  return 1;
                try {
                  return O != null && O.gt(E) ? -1 : 1;
                } catch {
                  return 0;
                }
              }).map((R) => {
                var E, U, _, F, G, re, D, V;
                const L =
                    (U =
                      R === Qe
                        ? M.from(b)
                        : (E = c[R]) == null
                        ? void 0
                        : E.balance) == null
                      ? void 0
                      : U.toNumber(),
                  O = !!C[R].name;
                return e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ease flex py-2.5 w-full items-center justify-between last:border-b-0 border-b border-black-300 ${
                      O ? "hover:dark:bg-black-500" : "cursor-default"
                    }`,
                    onClick: () => {
                      O && (r(C[R]), l(!1));
                    },
                    disabled:
                      (t == null ? void 0 : t.address) === R ||
                      (n == null ? void 0 : n.includes(R)),
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center font-bold dark:text-sand-500",
                        children: [
                          e.jsx(Be, { token: R }),
                          (_ = C[R]) == null ? void 0 : _.symbol,
                          e.jsx("span", {
                            className:
                              "ml-2 truncate font-normal dark:text-black-200",
                            children: (F = C[R]) == null ? void 0 : F.name,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          R !== Qe &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("p", {
                                  className:
                                    " mx-4 font-normal dark:text-black-200",
                                  children: Ma(R),
                                }),
                                e.jsx("a", {
                                  target: "_blank",
                                  className: "dim",
                                  rel: "noopener noreferrer",
                                  href: Ps(o, R, "token"),
                                  onClick: (W) => {
                                    W.stopPropagation();
                                  },
                                  children: e.jsx("img", {
                                    src: Vn,
                                    className: "mx-4 h-4 w-auto",
                                    alt: "etherscan",
                                  }),
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className:
                              "flex min-w-[10rem] items-center justify-end",
                            children: [
                              !!(
                                (re =
                                  (G = u == null ? void 0 : u[o]) == null
                                    ? void 0
                                    : G[R]) != null && re.address
                              ) &&
                                (t == null ? void 0 : t.address) !== R &&
                                e.jsx(se, {
                                  overlayClassName: "text-sm",
                                  placement: "left",
                                  title: d(
                                    "Remove this token from your user added token list."
                                  ),
                                  customIcon: e.jsx(tn, {
                                    className:
                                      "ease mx-2 !h-6 !w-6 cursor-pointer !opacity-100 hover:text-peach-500",
                                    onClick: (W) => {
                                      W.stopPropagation(), jo(R, o, u), v();
                                    },
                                  }),
                                }),
                              O
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "ml-2 truncate font-normal dark:text-black-200",
                                        children: L >= 0 ? as(L) : "-",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "ml-2 truncate text-xs dark:text-black-300",
                                        children:
                                          L > 0 &&
                                          h[
                                            (D = C[R]) == null
                                              ? void 0
                                              : D.symbol
                                          ]
                                            ? f(
                                                L *
                                                  h[
                                                    (V = C[R]) == null
                                                      ? void 0
                                                      : V.symbol
                                                  ]
                                              )
                                            : null,
                                      }),
                                    ],
                                  })
                                : g != null && g[R]
                                ? e.jsx(yo, { className: "mx-2 !h-6 !w-6" })
                                : k[R]
                                ? e.jsx(se, {
                                    overlayClassName: "text-sm",
                                    placement: "left",
                                    title: d(
                                      "Issue when fetching this token data. Try again later."
                                    ),
                                    customIcon: e.jsx(Rl, {
                                      className:
                                        "ease mx-2 !h-6 !w-6 cursor-pointer text-pink-700",
                                    }),
                                  })
                                : e.jsx(sn, {
                                    className:
                                      "ease mx-2 !h-6 !w-6 cursor-pointer hover:text-peach-500",
                                    onClick: async () => {
                                      j({ ...g, [R]: !0 });
                                      const W = await A(R, o);
                                      W
                                        ? (go(W, o, u), v(), y(W))
                                        : S({ ...k, [R]: !0 }),
                                        j({ ...g, [R]: !1 });
                                    },
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  R
                );
              }),
      })
    );
  },
  ar = ({
    currency: s,
    setCurrency: t,
    visible: r,
    setVisible: l,
    commonCurrencies: a,
    disabledCurrencies: n,
    hiddenCurrencies: d = [],
  }) => {
    const { t: o } = ge(),
      { tokens: i } = oe(),
      [b, h] = x.useState(""),
      [u, p] = x.useState(!1);
    return (
      !!i &&
      e.jsx(us, {
        title: u
          ? e.jsx(se, {
              overlayClassName: "p-sm",
              placement: "right",
              title:
                "You can import a token by pasting its address in the search bar. Click on the remove button in order to delete a token from your preferences.",
              children: "Manage your imported tokens",
            })
          : e.jsx(e.Fragment, { children: "Select a token" }),
        visible: r,
        onCancel: () => {
          l(!1), p(!1);
        },
        width: "40%",
        children: e.jsxs("div", {
          className: "",
          children: [
            e.jsx(Me, {
              state: [b, h],
              placeholder: o("Search token name or paste address"),
              suffix: e.jsx(T, { mui: "SearchOutlined" }),
            }),
            e.jsxs(e.Fragment, {
              children: [
                e.jsx(Wi, {
                  currency: s,
                  setCurrency: t,
                  setVisible: l,
                  commonCurrencies: a,
                  disabledCurrencies: n,
                }),
                e.jsx(tc, {
                  searchPhrase: b,
                  currency: s,
                  setCurrency: t,
                  setVisible: l,
                  disabledCurrencies: n,
                  hiddenCurrencies: d,
                }),
              ],
            }),
          ],
        }),
      })
    );
  };
function Ea({
  currency: s,
  amongst: t,
  disable: r,
  disabled: l,
  onChange: a,
  search: n,
}) {
  var h;
  const [d, o] = x.useState(!1);
  if (t === void 0)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ar, {
          currency: s[0],
          setCurrency: s[1],
          visible: d,
          setVisible: o,
          disabledCurrencies:
            r == null
              ? void 0
              : r
                  .filter((u) => !!u)
                  .map((u) => (u == null ? void 0 : u.address)),
        }),
        e.jsx(Y, {
          size: "small",
          look: "secondary",
          onClick: () => !l && o(!0),
          rightIcon: !l && e.jsx(T, { mui: "KeyboardArrowDown" }),
          disabled: l,
          children:
            s != null && s[0]
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(T, {
                      size: "l",
                      className: "mr-0.5",
                      token:
                        (h = s == null ? void 0 : s[0]) == null
                          ? void 0
                          : h.address,
                    }),
                    s == null ? void 0 : s[0].symbol,
                  ],
                })
              : e.jsx(e.Fragment, { children: "Select Token" }),
        }),
      ],
    });
  const b = t.map((u) => ({
    label: e.jsxs("p", {
      children: [e.jsx(T, { token: u.address }), " ", u.symbol],
    }),
    value: u.symbol,
  }));
  return e.jsx(Ys, {
    className: "w-full",
    search: n,
    options: b,
    onChange: (u) => a(t == null ? void 0 : t.find(({ symbol: p }) => p === u)),
  });
}
const an = ({
    txState: s,
    disabled: t,
    warningText: r,
    onClick: l,
    btnText: a,
  }) => {
    const { t: n } = ge();
    return e.jsxs(e.Fragment, {
      children: [
        !!r &&
          e.jsx(se, {
            overlayClassName: "p-sm",
            placement: "top",
            title: r,
            customIcon: e.jsx(er, { className: "mr-4 dark:text-pink-500" }),
          }),
        e.jsx(We, {
          disabled: t,
          onClick: l,
          children:
            s === _e.PERMIT
              ? e.jsx(e.Fragment, {
                  children: e.jsx(se, {
                    overlayClassName: "p-sm",
                    placement: "right",
                    title: n(
                      "You must give the Angle smart contracts the permission to use your tokens."
                    ),
                    children: n("borrow.modify.signPermit"),
                  }),
                })
              : s === _e.VAULTPERMIT
              ? e.jsx(e.Fragment, {
                  children: e.jsx(se, {
                    overlayClassName: "p-sm",
                    placement: "right",
                    title: n(
                      "You must give the Angle smart contracts the permission to borrow from your vaults or to withdraw collateral from it."
                    ),
                    children: n("borrow.modify.signPermit"),
                  }),
                })
              : s === _e.APPROVAL
              ? n("borrow.modify.approve")
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Ya, { className: "mr-2" }),
                    " ",
                    a || n("borrow.modify.send"),
                  ],
                }),
        }),
      ],
    });
  },
  rn = ({ disabled: s, onClick: t }) => {
    const { t: r } = ge(),
      { address: l } = oe();
    return e.jsx(se, {
      overlayClassName: "p-sm",
      icon: !1,
      placement: "left",
      title: r("Simulate your transaction with Tenderly before launching it."),
      children: e.jsx(Y, {
        type: "button",
        look: "secondary",
        disabled: s,
        onClick: (a) => t(a, l),
        leftIcon: e.jsx(T, { mui: "Visibility" }),
        children: r("Simulate"),
      }),
    });
  },
  ln = ({ title: s, tooltip: t }) =>
    e.jsx(e.Fragment, {
      children: e.jsx(se, {
        overlayClassName: "text-sm",
        placement: "left",
        overlay: t,
        className: "w-fit",
        icon: !1,
        children: e.jsx("h3", {
          className: "mb-3 dark:text-sand-500",
          children: s,
        }),
      }),
    }),
  rr = ({ rate: s, inToken: t, outToken: r, className: l }) => {
    const [a, n] = x.useState(!1);
    return (
      bs(),
      oe(),
      e.jsxs("div", {
        className: [
          "ease dim flex cursor-pointer items-center dark:hover:text-peach-500",
          l || "",
        ].join(" "),
        onClick: () => n(!a),
        children: [
          e.jsx(T, {
            mui: "SwapHoriz",
            size: "s",
            className: "mr-1 dark:text-blue-500",
          }),
          a
            ? e.jsx("span", {
                className: "text-sm",
                children: `1 ${r} = ${mt(s > 0 ? 1 / s : 0, 4)} ${t}`,
              })
            : e.jsx("p", {
                className: "text-sm",
                children: `1 ${t} = ${mt(s, 4)} ${r}`,
              }),
        ],
      })
    );
  },
  Pa = ({
    vault: s,
    vaultManager: t,
    collatChange: r = 0,
    debtChange: l = 0,
  }) => {
    const a = sa(s, t, r, l);
    return e.jsx("span", {
      className: `${((a < 1.15 && a > 1) || a < 1) && "dark:text-pink-500"} ${
        a > 5 && "dark:text-green-500"
      } ${a === Number.POSITIVE_INFINITY && "text-2xl"}`,
      children: Ce(a, 3),
    });
  },
  nn = ({
    collatChange: s,
    debtChange: t,
    collatBalanceChange: r = 0,
    stableBalanceChange: l = 0,
    collateralAddress: a,
    usedTokens: n,
    usedTokensChange: d,
    totalExposure: o,
    lpToken: i,
    vaultNetAPR: b,
  }) => {
    var m, y, C, $, P, R, L, O;
    const { vaultManager: h, vault: u } = Us(),
      { prices: p, tokens: v, chainId: N } = oe(),
      w =
        (m = at(h == null ? void 0 : h.stablecoin, !1)) == null
          ? void 0
          : m.toNumber(),
      c = (y = at(a, !1)) == null ? void 0 : y.toNumber(),
      A = wo(a),
      f = gt(n),
      g =
        (C = M.from(u == null ? void 0 : u.debtString)) == null
          ? void 0
          : C.toNumber(),
      j = bs(),
      { t: k } = ge(),
      S = n
        .map((E) => (E == null ? void 0 : E.address))
        .indexOf(h == null ? void 0 : h.stablecoin);
    return (
      S !== -1 &&
        ((l = l += d[S]),
        (n = n.filter((E, U) => U !== S)),
        (d = d.filter((E, U) => U !== S))),
      e.jsxs("div", {
        className:
          "flex w-full flex-col items-center rounded-md border px-3 py-2 dark:border-black-300 dark:text-black-200",
        children: [
          e.jsxs("div", {
            className:
              "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
            children: [
              e.jsx("p", {
                className: "dark:text-black-200",
                children: k("borrow.modify.vaultcolat"),
              }),
              e.jsxs("p", {
                className: "flex items-center font-bold",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center dark:text-sand-500",
                    children: [
                      (($ = u == null ? void 0 : u.collateralAmount) == null
                        ? void 0
                        : $.toNumber()) === Number.POSITIVE_INFINITY
                        ? e.jsxs("span", {
                            className: "text-lg",
                            children: [
                              Cs(
                                (P = u == null ? void 0 : u.collateralAmount) ==
                                  null
                                  ? void 0
                                  : P.toNumber()
                              ),
                              " ",
                            ],
                          })
                        : Cs(
                            (R = u == null ? void 0 : u.collateralAmount) ==
                              null
                              ? void 0
                              : R.toNumber()
                          ),
                      " ",
                      s !== 0 &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(As, {
                              className: "small mx-1 dark:text-sand-500",
                            }),
                            " ",
                            Cs(
                              ((L = u == null ? void 0 : u.collateralAmount) ==
                              null
                                ? void 0
                                : L.toNumber()) + s
                            ),
                            " ",
                          ],
                        }),
                      h == null ? void 0 : h.collatSymbol,
                    ],
                  }),
                  e.jsx("span", {
                    className: "ml-1 font-normal dark:text-black-200",
                    children: `~${j(
                      !!u &&
                        (((O = u == null ? void 0 : u.collateralAmount) == null
                          ? void 0
                          : O.toNumber()) +
                          s) *
                          h.rate *
                          p[De(h)]
                    )}`,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
            children: [
              e.jsx("p", {
                className: "dark:text-black-200",
                children: k("borrow.modify.vaultdebt"),
              }),
              e.jsxs("p", {
                className: "flex items-center font-bold",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center dark:text-sand-500",
                    children: [
                      Cs(g),
                      " ",
                      !!t &&
                        e.jsxs("span", {
                          className: `mr-1 ${
                            g > -t &&
                            g + t < (h == null ? void 0 : h.dust) &&
                            "dark:text-pink-500"
                          }`,
                          children: [
                            e.jsx(As, {
                              className: "small ml-1 dark:text-sand-500",
                            }),
                            " ",
                            Cs(g + t),
                          ],
                        }),
                      De(h),
                      " ",
                    ],
                  }),
                  e.jsx("span", {
                    className: "ml-1 font-normal dark:text-black-200",
                    children: `~${j(!!u && (g + (t ?? 0)) * p[De(h)])}`,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
            children: [
              e.jsx(se, {
                overlayClassName: "p-sm",
                placement: "bottom",
                title:
                  "Your position can be liquidated if your Health Factor reaches 1.",
                children: e.jsx("p", {
                  className: "dark:text-black-200",
                  children: k("Health Factor"),
                }),
              }),
              e.jsx("div", {
                className: "flex items-center font-bold leading-none",
                children: e.jsxs("span", {
                  className: "flex items-center dark:text-sand-500",
                  children: [
                    e.jsx(Pa, { vault: u, vaultManager: h }),
                    (t !== 0 || s !== 0) &&
                      e.jsxs("div", {
                        className: "flex items-center font-bold",
                        children: [
                          e.jsx(As, {
                            className: "small mx-1 dark:text-sand-500",
                          }),
                          " ",
                          e.jsx(Pa, {
                            vault: u,
                            vaultManager: h,
                            collatChange: s,
                            debtChange: t,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
            children: [
              e.jsx(se, {
                overlayClassName: "p-sm",
                placement: "bottom",
                title: `Your position will be liquidated if ${
                  h == null ? void 0 : h.collatSymbol
                } prices decreases by
            ${Cs(
              (1 - Mt(u, h, s, t) / (h == null ? void 0 : h.rate)) * 100,
              4
            )}%.`,
                children: e.jsx("p", {
                  className: "dark:text-black-200",
                  children: k("Liquidation Price"),
                }),
              }),
              e.jsx("div", {
                className: "flex items-center font-bold leading-none",
                children: e.jsx("span", {
                  className: "flex items-center dark:text-sand-500",
                  children:
                    t !== 0 &&
                    s !== 0 &&
                    e.jsx(rr, {
                      rate: Mt(u, h, s, t),
                      inToken: A,
                      outToken: Rs(De(h)),
                    }),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
            children: [
              e.jsx("div", {
                className: "flex flex-wrap items-center",
                children: e.jsx("p", {
                  className: "dark:text-black-200",
                  children: `${De(h)} Balance`,
                }),
              }),
              e.jsxs("div", {
                className: "flex items-center font-bold",
                children: [
                  e.jsxs("span", {
                    className:
                      "flex items-center leading-none dark:text-sand-500",
                    children: [
                      Cs(w),
                      " ",
                      !!l &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(As, {
                              className: "small mx-1 dark:text-sand-500",
                            }),
                            e.jsx("span", {
                              className: `${
                                l >= 0
                                  ? "dark:text-sand-500"
                                  : "dark:text-pink-500"
                              } mr-1`,
                              children: Cs(w + l),
                            }),
                          ],
                        }),
                      De(h),
                    ],
                  }),
                  w + l > 0 &&
                    e.jsx("span", {
                      className: "ml-1 font-normal dark:text-black-200",
                      children: `~${j(!!u && (w + l) * p[De(h)])}`,
                    }),
                ],
              }),
            ],
          }),
          !!r &&
            e.jsxs("div", {
              className:
                "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
              children: [
                e.jsx("p", {
                  className: "dark:text-black-200",
                  children: `${h == null ? void 0 : h.collatSymbol} Balance`,
                }),
                e.jsxs("div", {
                  className: "flex items-center font-bold",
                  children: [
                    e.jsxs("span", {
                      className: "flex items-center dark:text-sand-500",
                      children: [
                        Cs(c),
                        " (",
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(As, {
                              className: "small mx-1 dark:text-sand-500",
                            }),
                            " ",
                            Cs(c + r),
                            " ",
                            A,
                            " ",
                          ],
                        }),
                        ")",
                      ],
                    }),
                    c + r > 0 &&
                      e.jsx("span", {
                        className: "ml-1 font-normal dark:text-black-200",
                        children: `~${j(
                          !!u &&
                            (c + r) * p[A == null ? void 0 : A.toUpperCase()]
                        )}`,
                      }),
                  ],
                }),
              ],
            }),
          !!n &&
            n
              .map((E, U) => {
                var D, V, W, me;
                const _ =
                    p[E == null ? void 0 : E.address] ??
                    p[
                      (D = E == null ? void 0 : E.symbol) == null
                        ? void 0
                        : D.toUpperCase()
                    ],
                  F = !!f && ((V = f[U]) == null ? void 0 : V.toNumber()),
                  G = !!d && d[U],
                  re =
                    (me =
                      (W = v == null ? void 0 : v[N]) == null
                        ? void 0
                        : W[E == null ? void 0 : E.address]) == null
                      ? void 0
                      : me.symbol;
                return (
                  G &&
                  d[U] !== 0 &&
                  e.jsxs(
                    "div",
                    {
                      className:
                        "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
                      children: [
                        e.jsx("p", {
                          className: "dark:text-black-200",
                          children: `${re} Balance`,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center font-bold",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center dark:text-sand-500",
                              children: [
                                Cs(F),
                                " ",
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(As, {
                                      className:
                                        "small mx-1 dark:text-sand-500",
                                    }),
                                    " ",
                                    Cs(F + G),
                                    " ",
                                  ],
                                }),
                                re,
                                " ",
                              ],
                            }),
                            F + G > 0 &&
                              e.jsx("span", {
                                className:
                                  "ml-1 font-normal dark:text-black-200",
                                children: `~${j((F + G) * _)}`,
                              }),
                          ],
                        }),
                      ],
                    },
                    U
                  )
                );
              })
              .filter((E) => !!E),
          o != null &&
            e.jsxs("div", {
              className:
                "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
              children: [
                e.jsx("p", {
                  className: "dark:text-black-200",
                  children: `Total ${i == null ? void 0 : i.symbol} exposure`,
                }),
                e.jsx("p", {
                  className: "flex items-center font-bold dark:text-sand-500",
                  children: `${Cs(o, 4) ?? 0} ${i == null ? void 0 : i.symbol}`,
                }),
              ],
            }),
          b != null &&
            b > 0 &&
            e.jsxs("div", {
              className:
                "mb-1 flex w-full flex-wrap items-center justify-between last:mb-0",
              children: [
                e.jsx("p", {
                  className: "dark:text-black-200",
                  children: "Vault Net APR",
                }),
                e.jsx(se, {
                  title:
                    "It is what you will earn if the collateral price remains constant against the value of your debt",
                  placement: "left",
                  icon: !1,
                  children: e.jsx(e.Fragment, {
                    children: e.jsxs(Fs, {
                      color: "blue",
                      children: ["+", b == null ? void 0 : b.toFixed(2), "%"],
                    }),
                  }),
                }),
              ],
            }),
        ],
      })
    );
  },
  il = ({ close: s, isLeverage: t = !1 }) => {
    var ae, Ae, ts, ys, ws, de, ds, Ke, kt, nt, vt, At, St, $r, Dr, Or, Mr;
    const { t: a } = ge(),
      { allowPermit: n, defaultSlippage: d } = Ze(),
      { execTransactions: o } = rs(),
      {
        tokens: i,
        prices: b,
        chainId: h,
        address: u,
        provider: p,
        spy: v,
        isContract: N,
      } = oe(),
      { vault: w, vaultManager: c, vKey: A } = Us(),
      f = Yl(c == null ? void 0 : c.collateral),
      { setTxBuilderVisible: g } = Us(),
      j =
        (f == null ? void 0 : f.address) !==
        (c == null ? void 0 : c.collateral),
      [k, S] = x.useState(2),
      [m, y] = x.useState([f]),
      [C, $] = x.useState([M.from(0)]),
      [P, R] = x.useState([void 0]),
      [L, O] = x.useState(M.from(0)),
      [E, U] = x.useState(!1),
      [_, F] = x.useState([]),
      [G, re] = x.useState([]),
      [D, V] = x.useState(d),
      [W, me] = x.useState(d),
      [Ne, be] = x.useState(null),
      ue = L == null ? void 0 : L.gt(0),
      ie =
        (m == null ? void 0 : m.length) !== 0 &&
        !(
          (m == null ? void 0 : m.length) === 1 &&
          ((ae = m[0]) == null ? void 0 : ae.address) ===
            (c == null ? void 0 : c.collateral)
        ) &&
        !P.every(
          (Q) => !(Q != null && Q.gt(0)) && m[0].address === c.collateral
        ),
      ve = ue && ie && !c.isRouterApprovedForAll,
      [z, B] = x.useState(M.from(0)),
      [I, ee] = x.useState(null),
      [le, X] = x.useState(1),
      [q, fe] = x.useState(1),
      [pe, ye] = x.useState(M.from(0)),
      [te, ce] = x.useState(null),
      Se = x.useMemo(() => {
        var Le;
        const Q = [...m],
          ne = [...P];
        if (!ie && I != null && I.gt(0)) {
          const $e = Q.map((Ge) => Ge.address).indexOf(c.collateral);
          $e === -1
            ? (Q.push(i[h][c.collateral]), ne.push(I))
            : (ne[$e] = (Le = ne[$e]) == null ? void 0 : Le.add(I));
        }
        return Q.map(($e, Ge) => ({ token: $e, amount: ne[Ge] }));
      }, [h, I, i, ie, m, P, c.collateral]),
      [we, Re, Ve] = Ni(Se, ie ? J(h).AngleRouterV2 : c.address),
      Je = x.useMemo(
        () =>
          Ve.reduce((Q, ne) => {
            var Le, $e, Ge;
            return n &&
              !v &&
              (Le = ne == null ? void 0 : ne.token) != null &&
              Le.address &&
              (Ge =
                i[h][
                  ($e = ne == null ? void 0 : ne.token) == null
                    ? void 0
                    : $e.address
                ]) != null &&
              Ge.hasPermit &&
              !N
              ? Q
              : !1;
          }, !0),
        [n, h, N, Ve, v, i]
      ),
      He = x.useMemo(
        () =>
          v
            ? _e.VALID
            : we !== Os.APPROVED && !Je
            ? _e.APPROVAL
            : we !== Os.APPROVED
            ? _e.PERMIT
            : _e.VALID,
        [we, v, Je]
      ),
      [Ye, xs] = x.useState(null),
      [js, gs] = x.useState(!1),
      [es, is] = x.useState(!1),
      K = x.useMemo(() => {
        let Q = M.from(0, (f == null ? void 0 : f.decimals) ?? 18);
        return (
          P.forEach((ne, Le) => {
            var Ws, qs, Qs, Tt, Ct, Et, Pt;
            const $e =
                ((b == null
                  ? void 0
                  : b[(Ws = m[Le]) == null ? void 0 : Ws.address]) ??
                  (b == null
                    ? void 0
                    : b[(qs = m[Le]) == null ? void 0 : qs.symbol])) /
                ((b == null ? void 0 : b[f == null ? void 0 : f.address]) ??
                  (b == null ? void 0 : b[f == null ? void 0 : f.symbol])),
              Ge =
                (Tt =
                  (Qs =
                    ne == null
                      ? void 0
                      : ne.rebase(f == null ? void 0 : f.decimals)) == null
                    ? void 0
                    : Qs.mul(M.parse($e, 18))) == null
                  ? void 0
                  : Tt.div(M.parse(1, 18));
            Ge != null &&
              Ge.gt(0) &&
              (((Ct = m[Le]) == null ? void 0 : Ct.address) !== f.address &&
              ((Et = m[Le]) == null ? void 0 : Et.address) !== w.collateral
                ? (Q =
                    Q == null
                      ? void 0
                      : Q.add(
                          (Pt = Ge.mul(1e4 - D * 100)) == null
                            ? void 0
                            : Pt.div(1e4)
                        ))
                : (Q = Q == null ? void 0 : Q.add(Ge)));
          }),
          Q
        );
      }, [
        P,
        b,
        m,
        f == null ? void 0 : f.address,
        f == null ? void 0 : f.symbol,
        f == null ? void 0 : f.decimals,
        w == null ? void 0 : w.collateral,
        D,
      ]),
      Z = x.useMemo(() => {
        var Q, ne;
        return (ne =
          (Q = I == null ? void 0 : I.rebase(18)) == null
            ? void 0
            : Q.mul(Zs.parseUnits((c.rate / (1 - D / 100)).toFixed(10), 18))) ==
          null
          ? void 0
          : ne.div(Zs.parseUnits("1", 18));
      }, [I, D, c.rate]),
      [Ee, he] = x.useState(M.from(0));
    x.useEffect(() => {
      var Q, ne;
      he(
        it(
          w,
          c,
          (Q = M.from(K, c == null ? void 0 : c.decimals)) == null
            ? void 0
            : Q.toNumber()
        )
          ? M.from(
              Zs.parseEther(
                it(
                  w,
                  c,
                  (ne = M.from(K, c == null ? void 0 : c.decimals)) == null
                    ? void 0
                    : ne.toNumber()
                ).toString()
              )
            )
          : M.from(0)
      );
    }, [K, c, w]);
    const Ie = x.useCallback(() => {
      var Q, ne, Le, $e;
      be(null),
        m.length === 0 ||
        ((!K || (K != null && K.eq(0))) && (!L || (L != null && L.eq(0))))
          ? (Gt.cancel(), is(!1), F([]), O(null), re([]))
          : (is(!0),
            Gt.cancel(),
            Gt(
              {},
              t
                ? (ne =
                    (Q = Z == null ? void 0 : Z.mul(10 ** 9)) == null
                      ? void 0
                      : Q.div(
                          (1 - (c == null ? void 0 : c.borrowFee) / 100) *
                            10 ** 9
                        )) == null
                  ? void 0
                  : ne.add(M.from(1))
                : M.from(0),
              h,
              t ? K.add(I ?? M.from(0)) : K,
              c.collateral,
              t
                ? ($e =
                    (Le = Z == null ? void 0 : Z.mul(10 ** 9)) == null
                      ? void 0
                      : Le.div(
                          (1 - (c == null ? void 0 : c.borrowFee) / 100) *
                            10 ** 9
                        )) == null
                  ? void 0
                  : $e.add(M.from(1))
                : L,
              F,
              re,
              be,
              is,
              c.stablecoin,
              m,
              P,
              u,
              w.id,
              c.address,
              D,
              W
            ));
    }, [
      u,
      Z,
      h,
      K,
      L,
      I,
      t,
      W,
      D,
      m,
      P,
      w.id,
      c == null ? void 0 : c.borrowFee,
      c.collateral,
      c.stablecoin,
      c.address,
    ]);
    x.useEffect(() => {
      Ie();
    }, [Ie]);
    const Xe = gt(m),
      cs = gt([f])[0],
      ss =
        (L == null ? void 0 : L.gt(0)) &&
        (L == null ? void 0 : L.toNumber()) + (w == null ? void 0 : w.debt) <=
          c.dust,
      ls =
        (L == null ? void 0 : L.gt(0)) &&
        (L == null ? void 0 : L.toNumber()) +
          (c == null ? void 0 : c.totalDebt) >
          ((Ae = c == null ? void 0 : c.debtCeiling) == null
            ? void 0
            : Ae.toNumber()),
      Bs =
        (ss &&
          `${a("borrow.modify.warningdebt")} ${Ce(
            c == null ? void 0 : c.dust
          )} ${De(c)}`) ||
        (ls && a("borrow.warning.debtceiling")),
      _s = sa(
        w,
        c,
        t && I
          ? (K == null ? void 0 : K.toNumber()) +
              (I == null ? void 0 : I.toNumber())
          : K == null
          ? void 0
          : K.toNumber(),
        L == null ? void 0 : L.toNumber()
      ),
      Vs =
        t &&
        !!_ &&
        !!(f != null && f.decimals) &&
        !!I &&
        ((ds = M.from(
          (ts = _[_.length - 1]) == null ? void 0 : ts.amountOut,
          (de =
            (ws = i[h]) == null
              ? void 0
              : ws[(ys = _[_.length - 1]) == null ? void 0 : ys.outToken]) ==
            null
            ? void 0
            : de.decimals
        )) == null
          ? void 0
          : ds.toNumber()) *
          (b[
            (nt =
              (kt = i[h]) == null
                ? void 0
                : kt[(Ke = _[_.length - 1]) == null ? void 0 : Ke.outToken]) ==
            null
              ? void 0
              : nt.symbol
          ] ??
            b[
              (St =
                (At = i[h]) == null
                  ? void 0
                  : At[
                      (vt = _[_.length - 1]) == null ? void 0 : vt.outToken
                    ]) == null
                ? void 0
                : St.address
            ]) <
          (I == null ? void 0 : I.toNumber()) *
            (b[f == null ? void 0 : f.symbol] ??
              b[f == null ? void 0 : f.address]),
      $s =
        es ||
        _s < 1 ||
        ((L == null ? void 0 : L.eq(0)) && (K == null ? void 0 : K.eq(0))) ||
        (w == null ? void 0 : w.id) == null ||
        ((w == null ? void 0 : w.id) === 0 && K.eq(0)) ||
        ss ||
        ls;
    x.useEffect(() => {
      const Q = P;
      m.forEach((ne, Le) => {
        var Ge, Ws, qs, Qs;
        const $e =
          (qs =
            (Ge = Q == null ? void 0 : Q[Le]) == null
              ? void 0
              : Ge.toNumber()) == null
            ? void 0
            : qs.toFixed((Ws = m[Le]) == null ? void 0 : Ws.decimals);
        R(
          ut(
            P,
            Le,
            $e
              ? M.parse($e ?? 0, (Qs = m[Le]) == null ? void 0 : Qs.decimals)
              : null
          )
        );
      });
    }, [m]),
      x.useEffect(() => {
        m
          .map((Q) => (Q == null ? void 0 : Q.address))
          .includes(f == null ? void 0 : f.address)
          ? S(1)
          : S(2);
      }, [m, f]),
      x.useEffect(() => {
        var Q, ne, Le, $e;
        if (t) {
          const Ge =
            (ne =
              (Q = I == null ? void 0 : I.rebase(18)) == null
                ? void 0
                : Q.mul(
                    Zs.parseUnits((c.rate / (1 - D / 100)).toFixed(10), 18)
                  )) == null
              ? void 0
              : ne.div(Zs.parseUnits("1", 18));
          O(
            ($e =
              (Le = Ge == null ? void 0 : Ge.mul(10 ** 9)) == null
                ? void 0
                : Le.div(
                    (1 - (c == null ? void 0 : c.borrowFee) / 100) * 10 ** 9
                  )) == null
              ? void 0
              : $e.add(M.from(1))
          );
        }
      }, [I, t, D, c == null ? void 0 : c.borrowFee, c.rate]),
      x.useEffect(() => {
        var Q, ne;
        t &&
          fe(
            1 +
              Math.round(
                (1e3 *
                  ((ne =
                    (Q = pe == null ? void 0 : pe.sub(z)) == null
                      ? void 0
                      : Q.sub(K)) == null
                    ? void 0
                    : ne.toNumber())) /
                  ((K == null ? void 0 : K.toNumber()) +
                    (z == null ? void 0 : z.toNumber()))
              ) /
                1e3
          );
      }, [K, t, pe, z]),
      x.useEffect(() => {
        if (t) {
          let Q = 0;
          K != null && K.toNumber() && (Q += K == null ? void 0 : K.toNumber()),
            I != null &&
              I.toNumber() &&
              (Q += I == null ? void 0 : I.toNumber()),
            z != null &&
              z.toNumber() &&
              (Q += z == null ? void 0 : z.toNumber()),
            ce(Q);
        }
      }, [K, I, t, cs, z]),
      x.useEffect(() => {
        var Q;
        if (t)
          try {
            c && w && B(M.parse(w == null ? void 0 : w.collateralAmount));
            const ne =
              (((Q = w == null ? void 0 : w.collateralAmount) == null
                ? void 0
                : Q.toNumber()) +
                (K == null ? void 0 : K.toNumber())) *
              (1 +
                1 / ((c == null ? void 0 : c.minCollateralRatio) / 100 - 1)) *
              10 ** Math.min(10, c == null ? void 0 : c.decimals);
            ye(
              c && w && K && A
                ? M.from(
                    ne == null ? void 0 : ne.toFixed(0),
                    c == null ? void 0 : c.decimals
                  )
                    .mul(
                      ht
                        .from(10)
                        .pow(
                          (c == null ? void 0 : c.decimals) -
                            Math.min(10, c == null ? void 0 : c.decimals)
                        )
                    )
                    .mul(1e4 * (100 - D))
                    .div(100 * 1e4)
                    .mul(95)
                    .div(100)
                : M.from(0, c == null ? void 0 : c.decimals)
            );
          } catch (ne) {
            console.error(ne);
          }
      }, [K, w, t, D, A, c]),
      x.useEffect(() => {
        Gt.cancel();
      }, [h]);
    const H = async (Q, ne = v) => {
      var Pt, Fr, Ur, Br;
      const Le = async (fs, ks) => {
        var vs, Ts, _r, Vr;
        return Wl(
          { vaultPermit: fs, permits: ks },
          t
            ? (Ts =
                (vs = Z == null ? void 0 : Z.mul(1e9)) == null
                  ? void 0
                  : vs.div(
                      (1 - (c == null ? void 0 : c.borrowFee) / 100) * 1e9
                    )) == null
              ? void 0
              : Ts.add(M.from(1))
            : M.from(0),
          h,
          t ? K.add(I ?? M.from(0)) : K,
          c == null ? void 0 : c.collateral,
          t
            ? (Vr =
                (_r = Z == null ? void 0 : Z.mul(1e9)) == null
                  ? void 0
                  : _r.div(
                      (1 - (c == null ? void 0 : c.borrowFee) / 100) * 1e9
                    )) == null
              ? void 0
              : Vr.add(M.from(1))
            : L,
          () => {},
          () => {},
          () => {},
          () => {},
          c == null ? void 0 : c.stablecoin,
          m,
          P,
          u,
          w == null ? void 0 : w.id,
          c == null ? void 0 : c.address,
          D,
          W
        );
      };
      let { to: $e, data: Ge, value: Ws, success: qs, error: Qs } = await Le();
      if (!qs) {
        Ut({
          placement: "topRight",
          icon: "txFailure",
          message: Qs,
          duration: 5,
          isTxNotificationWithError: !0,
          summary: "Error",
        });
        return;
      }
      const Tt = [
        ...Ve.map((fs) => {
          var ks;
          return {
            chainId: h,
            from: u,
            to: fs.token.address,
            data: to
              .createInterface()
              .encodeFunctionData("approve", [
                ie
                  ? (ks = J(h)) == null
                    ? void 0
                    : ks.AngleRouterV2
                  : c.address,
                fs.amount.raw,
              ]),
            value: "0",
          };
        }),
        {
          chainId: h,
          from: u,
          to: c == null ? void 0 : c.address,
          data: Dt.createInterface().encodeFunctionData("setApprovalForAll", [
            (Pt = J(h)) == null ? void 0 : Pt.AngleRouterV2,
            !0,
          ]),
          value: "0",
        },
        { chainId: h, from: u, to: $e, data: Ge, value: Ws },
      ];
      try {
        const fs = await (
          await fetch(`${Ms}/simulate/multicall?${wt.stringify({ calls: Tt })}`)
        ).json();
        if (ne) {
          fs.url && window.open(fs.url, "_blank");
          return;
        }
        const ks = Ll(fs.transfers);
        if (ks.includes(J(h).AngleRouterV2) || ks.includes(c.swapper)) {
          be("This transaction would lead to lost funds");
          return;
        }
      } catch {
        console.error("failed to simulate transaction on Tenderly");
      }
      if (ne) return;
      const Ct = [];
      let Et;
      if (ve && !N) {
        const fs = p == null ? void 0 : p.getSigner(u),
          ks = Dt.connect(c.address, fs);
        try {
          const vs = await Ba(
            fs,
            Number(await ks.nonces(u)),
            ks.address,
            Number((await p.getBlock("latest")).timestamp) + 3600,
            (Fr = J(h)) == null ? void 0 : Fr.AngleRouterV2,
            !0,
            await ks.name(),
            h
          );
          Et = Ds.encode(
            [
              "address",
              "address",
              "bool",
              "uint256",
              "uint8",
              "bytes32",
              "bytes32",
            ],
            [vs.contract, vs.owner, vs.approved, vs.deadline, vs.v, vs.r, vs.s]
          );
        } catch {
          throw Error("Permit rejected");
        }
      } else
        ve &&
          N &&
          (await o.setApprovalForAll(
            Q,
            c.address,
            (Ur = J(h)) == null ? void 0 : Ur.AngleRouterV2,
            !0
          ));
      for (const fs of Ve) {
        const ks = p == null ? void 0 : p.getSigner(u),
          vs = Ml.connect(fs.token.address, ks),
          Ts = await ao(
            ks,
            Number(await vs.nonces(u)),
            vs.address,
            Number((await p.getBlock("latest")).timestamp) + 3600,
            ie ? ((Br = J(h)) == null ? void 0 : Br.AngleRouterV2) : c.address,
            fs.amount.raw,
            await vs.name(),
            h,
            fs.token.permitVersion
          );
        Ct.push(
          Ds.encode(
            [
              "address",
              "address",
              "uint256",
              "uint256",
              "uint8",
              "bytes32",
              "bytes32",
            ],
            [Ts.token, Ts.owner, Ts.value, Ts.deadline, Ts.v, Ts.r, Ts.s]
          )
        );
      }
      ({
        to: $e,
        data: Ge,
        value: Ws,
        success: qs,
        error: Qs,
      } = await Le(Et, Ct)),
        qs ? (await o.send(Q, $e, Ge, ht.from(Ws)), g(!1)) : be(Qs);
    };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(en, { visible: E, setVisible: U, swaps: _, outputToken: f }),
        e.jsx(ar, {
          currency: m[Ye],
          setCurrency: (Q) => {
            y(ut(m, Ye, Q));
          },
          visible: js,
          setVisible: gs,
          commonCurrencies: [f == null ? void 0 : f.address].concat(
            f == null ? void 0 : f.underlyingTokens
          ),
          disabledCurrencies: m.length > 1 ? [f.address] : null,
          hiddenCurrencies: [w == null ? void 0 : w.stablecoin],
        }),
        e.jsxs("div", {
          className: "flex w-full flex-wrap items-start",
          children: [
            e.jsxs("div", {
              className:
                "mb-4 flex w-full items-end justify-between border-b dark:border-black-300",
              children: [
                e.jsx(ln, {
                  title: a(
                    t ? "borrow.modify.multiply" : "borrow.borrow.title"
                  ),
                  tooltip: a("borrow.borrow.description"),
                }),
                e.jsx(se, {
                  placement: "right",
                  title: a("Refresh data"),
                  icon: !1,
                  children: e.jsx("button", {
                    className:
                      "mb-2 ml-auto flex items-center rounded-md p-1 dark:bg-black-400",
                    onClick: Ie,
                    children: e.jsx(Ft, {
                      className: `medium !transition-all dark:text-peach-500 ${
                        es
                          ? "animate-reverse disabled motion-safe:animate-spin"
                          : ""
                      } ${G && G.length !== 0 ? "" : "disabled"} ${
                        G && G.length !== 0 && es ? "" : "hover:-rotate-90"
                      } `,
                    }),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex w-full flex-col gap-2 lg:w-1/2 lg:pr-8",
              children: [
                m.map((Q, ne) => {
                  var Le;
                  return e.jsx(
                    Me.Int256,
                    {
                      base: ((Le = m[ne]) == null ? void 0 : Le.decimals) ?? 18,
                      header: [
                        a("Add Collateral"),
                        e.jsx(rt, {
                          onClick: ($e) => {
                            R(ut(P, ne, $e));
                          },
                          value: Xe[ne],
                        }),
                      ],
                      state: [
                        P[ne],
                        ($e) => {
                          R(ut(P, ne, $e));
                        },
                      ],
                      suffix: [
                        e.jsx(Y, {
                          onClick: () => R(ut(P, ne, Xe[ne])),
                          size: "x-small",
                          look: "secondary",
                          children: "MAX",
                        }),
                        e.jsx(Ea, { currency: [Q, ($e) => y(ut(m, ne, $e))] }),
                      ],
                    },
                    ne
                  );
                }),
                j &&
                  e.jsxs(e.Fragment, {
                    children: [
                      m.length < k &&
                        e.jsx(Y, {
                          type: "button",
                          look: "secondary",
                          className: "my-4 ml-auto",
                          onClick: () => {
                            y(ua(m, void 0)),
                              R(ua(P, void 0)),
                              $(ua(C, void 0));
                          },
                          children: a("Add token"),
                        }),
                      m.length > 1 &&
                        e.jsx(Y, {
                          type: "button",
                          look: "secondary",
                          className: "my-4 ml-auto",
                          onClick: () => {
                            y(xa(m)), R(xa(P)), $(xa(C));
                          },
                          children: a("Remove token"),
                        }),
                    ],
                  }),
                t
                  ? e.jsx(Me.Int256, {
                      base: c.decimals,
                      header: [
                        a("borrow.multiply.additional"),
                        e.jsxs("p", {
                          children: [
                            a("Max: "),
                            `${Ce(
                              (($r = M.from(
                                pe == null ? void 0 : pe.sub(K),
                                c == null ? void 0 : c.decimals
                              )) == null
                                ? void 0
                                : $r.toNumber()) -
                                ((Dr =
                                  w == null ? void 0 : w.collateralAmount) ==
                                null
                                  ? void 0
                                  : Dr.toNumber())
                            )}`,
                          ],
                        }),
                      ],
                      state: [
                        I,
                        (Q) => {
                          ee(Q),
                            X(
                              1 +
                                Math.round(
                                  (1e3 * (Q == null ? void 0 : Q.toNumber())) /
                                    ((K == null ? void 0 : K.toNumber()) +
                                      (z == null ? void 0 : z.toNumber()))
                                ) /
                                  1e3
                            );
                        },
                      ],
                      suffix: [
                        e.jsx("div", {
                          className: "flex gap-1",
                          children: [25, 50, 75, 100].map((Q) =>
                            e.jsx(
                              Y,
                              {
                                onClick: () => {
                                  var Le;
                                  const ne =
                                    (Le = pe == null ? void 0 : pe.sub(z)) ==
                                    null
                                      ? void 0
                                      : Le.sub(K);
                                  ee(
                                    Q === 100
                                      ? ne
                                      : ne == null
                                      ? void 0
                                      : ne.mul(Q).div(100)
                                  );
                                },
                                look: "secondary",
                                size: "x-small",
                                children: Q === 100 ? "MAX" : `${Q}%`,
                              },
                              Q
                            )
                          ),
                        }),
                        e.jsx(Y, {
                          type: "button",
                          size: "small",
                          look: "secondary",
                          leftIcon:
                            !!(c != null && c.collatSymbol) &&
                            e.jsx(Be, {
                              token: c == null ? void 0 : c.collateral,
                              className: "h-6 w-auto object-contain",
                            }),
                          children: e.jsx("span", {
                            className: "ease font-bold hover:text-sand-500",
                            children: c == null ? void 0 : c.collatSymbol,
                          }),
                        }),
                      ].flat(),
                    })
                  : e.jsx(Me.Int256, {
                      base: 18,
                      header: [
                        a("Borrow Stablecoin"),
                        e.jsxs("p", {
                          children: [
                            a("Debt Limit: "),
                            hs((Ee == null ? void 0 : Ee.toNumber()) ?? 0),
                          ],
                        }),
                      ],
                      state: [L, O],
                      suffix: [
                        e.jsx(Y, {
                          onClick: () => O(Ee),
                          look: "secondary",
                          size: "x-small",
                          children: "MAX",
                        }),
                        e.jsx(Y, {
                          type: "button",
                          size: "small",
                          look: "secondary",
                          leftIcon:
                            !!De(c) &&
                            e.jsx(Be, {
                              token: c == null ? void 0 : c.stablecoin,
                              className: "h-6 w-auto object-contain",
                            }),
                          children: e.jsx("span", {
                            className: "ease font-bold hover:text-sand-500",
                            children: De(c),
                          }),
                        }),
                      ],
                    }),
                t &&
                  e.jsx(e.Fragment, {
                    children: e.jsxs("div", {
                      className:
                        "mt-2 flex w-full justify-between border-b pb-4 dark:border-black-300 dark:text-black-200",
                      children: [
                        e.jsxs("p", {
                          children: [
                            "Leverage:",
                            e.jsxs("span", {
                              className: "font-bold dark:text-sand-500",
                              children: ["x", Ce(le || 0, 2)],
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          children: ["Max leverage: x", Ce(q || 0, 2)],
                        }),
                      ],
                    }),
                  }),
                e.jsx(ol, {
                  slippage: D,
                  setSlippage: V,
                  className: "mt-2",
                  tooltipText: a("borrow.angleSlippage.tooltip"),
                  text: "Angle Slippage",
                }),
                e.jsx(ol, {
                  slippage: W,
                  setSlippage: me,
                  className: "mt-2",
                  tooltipText: a("borrow.oneInchSlippage.tooltip"),
                  text: "1inch Slippage",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "mb-2 mt-2 flex w-full flex-col md:mb-8 lg:my-0 lg:w-1/2 lg:pl-8",
              children: e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsx(nn, {
                    collatChange:
                      t && I
                        ? (K == null ? void 0 : K.toNumber()) +
                          (I == null ? void 0 : I.toNumber())
                        : K == null
                        ? void 0
                        : K.toNumber(),
                    debtChange: L == null ? void 0 : L.toNumber(),
                    collatBalanceChange: 0,
                    stableBalanceChange: t
                      ? 0
                      : +(L == null ? void 0 : L.toNumber()) *
                        (1 - (c == null ? void 0 : c.borrowFee) / 100),
                    collateralAddress: c.collateral,
                    usedTokens: m,
                    usedTokensChange: P.map(
                      (Q) => -(Q == null ? void 0 : Q.toNumber())
                    ),
                    totalExposure: t ? te : null,
                    lpToken: f,
                    vaultNetAPR:
                      w.id === 0 &&
                      (Or = c == null ? void 0 : c.rewardAPR) != null &&
                      Or.totalAPR
                        ? Hl(
                            c.stabilityFee - 1,
                            (b == null ? void 0 : b[w.collateral]) ??
                              b[c == null ? void 0 : c.collatSymbol],
                            (K == null ? void 0 : K.toNumber()) +
                              (I == null ? void 0 : I.toNumber()),
                            b[De(w)],
                            (L == null ? void 0 : L.toNumber()) ?? 0,
                            (Mr = c == null ? void 0 : c.rewardAPR) == null
                              ? void 0
                              : Mr.totalAPR
                          )
                        : null,
                  }),
                  e.jsx("div", {
                    children: es
                      ? e.jsx(ct, {
                          variant: "rounded",
                          className: "mt-4 w-full min-w-[12rem]",
                          sx: { bgcolor: "#333a54" },
                        })
                      : Ne
                      ? e.jsxs("p", {
                          className:
                            "mx-auto my-4 w-10/12 text-center text-sm dark:text-coral-500",
                          children: [
                            a(
                              "There was an error while preparing for your transaction. Please wait a few moment, or refresh and try again."
                            ),
                            e.jsx(se, {
                              placement: "right",
                              title: a("Refresh data"),
                              icon: !1,
                              children: e.jsx("button", {
                                className:
                                  "mx-auto mb-2 mt-4 flex items-center rounded-md p-1 dark:bg-black-400",
                                onClick: Ie,
                                children: e.jsx(Ft, {
                                  className: `medium !transition-all dark:text-peach-500 ${
                                    es
                                      ? "animate-reverse disabled motion-safe:animate-spin"
                                      : "hover:-rotate-90"
                                  } ${G && G.length !== 0 ? "disabled" : ""}`,
                                }),
                              }),
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          children: [
                            !!_ &&
                              _.length > 0 &&
                              e.jsxs("div", {
                                onClick: () => U(!0),
                                className:
                                  "dim my-6 flex cursor-pointer items-center justify-between border-b pb-2 dark:border-black-300",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      e.jsx("img", {
                                        src: Il,
                                        className: "mr-3 w-12",
                                        alt: "routes logo",
                                      }),
                                      e.jsx("p", {
                                        className: "dark:text-black-100",
                                        children: a("borrow.showrouting"),
                                      }),
                                    ],
                                  }),
                                  e.jsx(ia, {
                                    className: "small mr-1 dark:text-blue-500",
                                  }),
                                ],
                              }),
                            !!G &&
                              G.length !== 0 &&
                              e.jsx(jt, {
                                className: "no-bg my-4 w-full",
                                ghost: !0,
                                children: e.jsx(
                                  jt.Panel,
                                  {
                                    showArrow: !1,
                                    header: e.jsxs("div", {
                                      className:
                                        "dim flex items-center justify-between border-b pb-1 font-bold dark:border-black-300 dark:text-sand-500",
                                      children: [
                                        "Transaction details",
                                        e.jsx(qa, {
                                          className:
                                            "rotation ml-2 dark:text-blue-500",
                                        }),
                                      ],
                                    }),
                                    children: e.jsx("ul", {
                                      className: "mt-2",
                                      dangerouslySetInnerHTML: {
                                        __html:
                                          G == null
                                            ? void 0
                                            : G.reduce(
                                                (Q, ne) =>
                                                  Q +
                                                  '<li class="text-sm py-0 dark:text-sand-500">' +
                                                  ne +
                                                  "</li>",
                                                ""
                                              ),
                                      },
                                    }),
                                  },
                                  "1"
                                ),
                              }),
                            Vs &&
                              e.jsx("p", {
                                className: "py-0 text-sm dark:text-sand-500",
                                children: `Given current market conditions, it is very likely you will not get enough ${f.symbol} after the swap. In this case, your transaction will revert. Try to increase your slippage.`,
                              }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "mt-4 flex w-full flex-1 flex-col items-end justify-end",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Zl, {}),
              e.jsx(rn, { disabled: $s, onClick: (Q) => H(Q, u) }),
              He === _e.APPROVAL
                ? e.jsx(ca, {
                    approve: Re,
                    approvalState: we,
                    usePermit: !1,
                    useETH: !1,
                    className: "button primary",
                    amount: Ve == null ? void 0 : Ve[0].amount,
                  })
                : e.jsx(an, {
                    disabled: $s,
                    warningText: Bs,
                    txState: He,
                    btnText: a(t ? "Leverage" : "Borrow"),
                    onClick: H,
                  }),
            ],
          }),
        }),
      ],
    });
  };
function cl({ value: s, prefix: t, onClick: r }) {
  return e.jsxs("p", {
    onClick: () => (r == null ? void 0 : r(s)),
    className:
      r && "cursor-pointer border-b border-transparent hover:border-black-200",
    children: [
      t ?? "Balance",
      ": ",
      s ? hs(s == null ? void 0 : s.toNumber()) : "-",
    ],
  });
}
const ac = ({ close: s }) => {
  var we, Re, Ve, Je, He, Ye, xs, js, gs, es, is, K;
  const { t: r } = ge();
  Ze();
  const { execTransactions: l } = rs(),
    {
      tokens: a,
      chainId: n,
      provider: d,
      address: o,
      prices: i,
      spy: b,
      isContract: h,
    } = oe(),
    { vault: u, vaultManager: p, setTxBuilderVisible: v } = Us(),
    N = Yl(p.collateral),
    w = Ls(p.stablecoin),
    c =
      (N == null ? void 0 : N.address) !== (p == null ? void 0 : p.collateral),
    [A, f] = x.useState(!1),
    [g, j] = x.useState(M.from(u == null ? void 0 : u.debtString)),
    [k, S] = x.useState(N),
    [m, y] = x.useState(),
    [C, $] = x.useState(),
    [P, R] = x.useState(),
    [L, O] = x.useState(!1),
    [E, U] = x.useState([]),
    [_, F] = x.useState([]),
    [G, re] = x.useState(0),
    [D, V] = x.useState(0),
    [W, me] = x.useState(null),
    { refresh: Ne } = ze("vaults", { age: "5s" }),
    [be, ue] = x.useState(!1),
    [ie, ve] = x.useState(!1),
    z = g == null ? void 0 : g.sub(P ?? M.from(0));
  A
    ? u == null || u.collateralAmount
    : (we = u == null ? void 0 : u.collateralAmount) == null || we.sub(m),
    M.parse(
      (He =
        (Je =
          (Ve =
            (Re = z == null ? void 0 : z.mul(M.parse(1, 18))) == null
              ? void 0
              : Re.div(M.parse(p.rate, 18))) == null
            ? void 0
            : Ve.mul(1e4)) == null
          ? void 0
          : Je.div(1e4 - D * 100)) == null
        ? void 0
        : He.toNumber(),
      N == null ? void 0 : N.decimals
    );
  const B = x.useMemo(() => {
      var Z, Ee, he, Ie;
      return (Ie =
        (he =
          (Ee =
            (Z = C == null ? void 0 : C.rebase(18)) == null
              ? void 0
              : Z.mul(M.parse(p.rate, 18))) == null
            ? void 0
            : Ee.div(M.parse(1, 18))) == null
          ? void 0
          : he.mul(1e4 - D * 100)) == null
        ? void 0
        : Ie.div(1e4);
    }, [C, p.rate, D]),
    I = x.useMemo(() => {
      var Z;
      return A
        ? g
        : (Z = P ?? M.from(0)) == null
        ? void 0
        : Z.add(B ?? M.from(0));
    }, [A, P, B, g]),
    ee = x.useMemo(
      () =>
        tl(u, p) && N != null && N.decimals
          ? M.parse(
              tl(
                u,
                p,
                -Zs.formatEther((I == null ? void 0 : I.raw) ?? 0)
              ).toFixed((N == null ? void 0 : N.decimals) ?? 18),
              (N == null ? void 0 : N.decimals) ?? 0
            )
          : M.from(0),
      [I == null ? void 0 : I.raw, N, u, p]
    ),
    le = x.useMemo(() => {
      var Ee, he, Ie, Xe;
      let Z =
        (Ie =
          (he =
            (Ee =
              m == null
                ? void 0
                : m.mul(M.parse(1, k == null ? void 0 : k.decimals))) == null
              ? void 0
              : Ee.mul(
                  M.parse(i[N == null ? void 0 : N.address] ?? i[N.symbol], 18)
                )) == null
            ? void 0
            : he.div(M.parse(1, (N == null ? void 0 : N.decimals) ?? 18))) ==
        null
          ? void 0
          : Ie.div(M.parse(i[k.address] ?? i[k.symbol] ?? 1, 18));
      return (
        k.address !== N.address &&
          (Z =
            (Xe = Z == null ? void 0 : Z.mul(1e4 - D * 100)) == null
              ? void 0
              : Xe.div(1e4)),
        Z
      );
    }, [
      m,
      N == null ? void 0 : N.address,
      N == null ? void 0 : N.decimals,
      N == null ? void 0 : N.symbol,
      i,
      D,
      k == null ? void 0 : k.address,
      k == null ? void 0 : k.decimals,
      k.symbol,
    ]),
    X = at(u == null ? void 0 : u.stablecoin, !1),
    q =
      ie ||
      ((m == null ? void 0 : m.eq(0)) && (I == null ? void 0 : I.eq(0))) ||
      (u == null ? void 0 : u.id) == null,
    pe =
      ((C == null ? void 0 : C.gt(0)) ||
        ((m == null ? void 0 : m.gt(0)) &&
          Ns(k.address) !== Ns(p.collateral))) &&
      (I == null ? void 0 : I.eq(0)) &&
      !p.isRouterApprovedForAll,
    ye = x.useCallback(() => {
      me(null),
        pa.cancel(),
        !(C != null && C.gt(0)) &&
        !(m != null && m.gt(0)) &&
        !(P != null && P.gt(0))
          ? (ve(!1), U([]), F([]))
          : (ve(!0),
            pa(
              {},
              n,
              A,
              m,
              C,
              P,
              w,
              I,
              I == null ? void 0 : I.gte(u.debtString),
              p.collateral,
              k.address,
              le,
              o,
              U,
              F,
              me,
              ve,
              u == null ? void 0 : u.id,
              p.address,
              D,
              G
            ));
    }, [
      o,
      w,
      n,
      A,
      C,
      m,
      I,
      P,
      G,
      D,
      k.address,
      le,
      u == null ? void 0 : u.debtString,
      u == null ? void 0 : u.id,
      p == null ? void 0 : p.collateral,
      p == null ? void 0 : p.address,
    ]);
  x.useEffect(() => {
    ye();
  }, [ye]);
  const te = () => {
    y(), $(), R(), ye();
  };
  x.useEffect(() => {
    te();
  }, [u == null ? void 0 : u.id]),
    x.useEffect(() => {
      A &&
        (R(X != null && X.gt(g) ? g : X),
        y(u == null ? void 0 : u.collateralAmount));
    }, [A, u == null ? void 0 : u.id]),
    x.useEffect(() => {
      var Ee;
      const Z = M.from(u.debtString);
      P != null &&
        P.gt(0) &&
        P != null &&
        P.lt(X) &&
        R((Ee = P == null ? void 0 : P.add(Z)) == null ? void 0 : Ee.sub(g)),
        j(Z);
    }, [u == null ? void 0 : u.debtString]),
    x.useEffect(() => {
      var Ee, he, Ie, Xe, cs, ss;
      const Z = g;
      if (A && P) {
        const ls = M.parse(
          (cs =
            (Xe =
              (Ie =
                (he =
                  (Ee = Z == null ? void 0 : Z.sub(P)) == null
                    ? void 0
                    : Ee.mul(M.parse(1, 18))) == null
                  ? void 0
                  : he.div(M.parse(p == null ? void 0 : p.rate, 18))) == null
                ? void 0
                : Ie.mul(1e4)) == null
              ? void 0
              : Xe.div(1e4 - D * 100)) == null
            ? void 0
            : cs.toNumber(),
          p == null ? void 0 : p.decimals
        );
        $(ls),
          y(
            (ss = u == null ? void 0 : u.collateralAmount) == null
              ? void 0
              : ss.sub(ls)
          );
      }
    }, [A, P, D]),
    x.useEffect(() => {
      pa.cancel();
    }, [n]),
    x.useEffect(() => {
      S(N);
    }, [N]);
  const ce = async (Z, Ee = b) => {
      var _s, Vs, $s;
      const he = async (H) =>
        ql(
          { vaultPermit: H },
          n,
          A,
          m,
          C,
          P,
          w,
          I,
          I == null ? void 0 : I.gte(u == null ? void 0 : u.debtString),
          p == null ? void 0 : p.collateral,
          k == null ? void 0 : k.address,
          le,
          o,
          () => {},
          () => {},
          () => {},
          () => {},
          u == null ? void 0 : u.id,
          p == null ? void 0 : p.address,
          D,
          G
        );
      let { to: Ie, data: Xe, value: cs, success: ss, error: ls } = await he();
      if (!ss) {
        Ut({
          placement: "topRight",
          icon: "txFailure",
          message: ls,
          duration: 5,
          isTxNotificationWithError: !0,
          summary: "Error",
        });
        return;
      }
      try {
        const H = await (
          await fetch(
            `${Ms}/simulate/multicall?${wt.stringify({
              calls: [
                {
                  chainId: n,
                  from: o,
                  to: p == null ? void 0 : p.address,
                  data: Dt.createInterface().encodeFunctionData(
                    "setApprovalForAll",
                    [(_s = J(n)) == null ? void 0 : _s.AngleRouterV2, !0]
                  ),
                  value: "0",
                },
                { chainId: n, from: o, to: Ie, data: Xe, value: cs },
              ],
            })}`
          )
        ).json();
        Ee && H.url && window.open(H.url, "_blank");
        const ae = Ll(H.transfers);
        if (ae.includes(J(n).AngleRouterV2) || ae.includes(p.swapper)) {
          me("This transaction would lead to lost funds");
          return;
        }
      } catch {
        console.error("failed to simulate transaction on Tenderly");
      }
      if (Ee) return;
      let Bs;
      if (pe && !h) {
        const H = d == null ? void 0 : d.getSigner(o),
          ae = Dt.connect(p.address, H);
        try {
          const Ae = await Ba(
            H,
            Number(await ae.nonces(o)),
            ae.address,
            Number((await d.getBlock("latest")).timestamp) + 3600,
            (Vs = J(n)) == null ? void 0 : Vs.AngleRouterV2,
            !0,
            await ae.name(),
            n
          );
          Bs = Ds.encode(
            [
              "address",
              "address",
              "bool",
              "uint256",
              "uint8",
              "bytes32",
              "bytes32",
            ],
            [Ae.contract, Ae.owner, Ae.approved, Ae.deadline, Ae.v, Ae.r, Ae.s]
          );
        } catch {
          throw Error("Permit rejected");
        }
      } else
        pe &&
          h &&
          (await l.setApprovalForAll(
            Z,
            p.address,
            ($s = J(n)) == null ? void 0 : $s.AngleRouterV2,
            !0
          ));
      ({ to: Ie, data: Xe, value: cs, success: ss, error: ls } = await he(Bs)),
        ss ? (await l.send(Z, Ie, Xe, ht.from(cs)), v(!1)) : me(ls);
    },
    Se =
      (xs =
        (Ye = ee == null ? void 0 : ee.sub(C ?? M.from(0))) == null
          ? void 0
          : Ye.mul(1e4 - D * 100)) == null
        ? void 0
        : xs.div(1e4);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(en, { visible: L, setVisible: O, swaps: E, outputToken: N }),
      e.jsx(ar, {
        currency: k,
        setCurrency: S,
        visible: be,
        setVisible: ue,
        commonCurrencies: [N == null ? void 0 : N.address].concat(
          N == null ? void 0 : N.underlyingTokens
        ),
      }),
      e.jsxs("div", {
        className: "flex w-full flex-wrap items-start",
        children: [
          e.jsxs("div", {
            className:
              "mb-4 flex w-full items-end justify-between border-b dark:border-black-300",
            children: [
              e.jsx(ln, {
                title: r("borrow.repay.title"),
                tooltip: r("borrow.repay.description"),
              }),
              e.jsx(se, {
                placement: "right",
                title: r("Refresh data"),
                icon: !1,
                children: e.jsx("button", {
                  className:
                    "mb-2 ml-auto flex items-center rounded-md p-1 dark:bg-black-400",
                  onClick: Ne,
                  children: e.jsx(Ft, {
                    className: `medium !transition-all dark:text-peach-500 ${
                      ie
                        ? "animate-reverse disabled motion-safe:animate-spin"
                        : "hover:-rotate-90"
                    }`,
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "w-full lg:w-1/2 lg:pr-8",
            children: [
              !A &&
                e.jsx(Me.Int256, {
                  base: N == null ? void 0 : N.decimals,
                  suffix: e.jsx(Y, {
                    type: "button",
                    look: "secondary",
                    size: "small",
                    disabled: !0,
                    leftIcon: e.jsx(T, {
                      token: p == null ? void 0 : p.collateral,
                    }),
                    children: p == null ? void 0 : p.collatSymbol,
                  }),
                  label: e.jsxs("span", {
                    style: { fontSize: "inherit" },
                    children: [
                      r("Remove collateral and "),
                      " ",
                      e.jsx("span", {
                        className: "dark:text-peach-500",
                        children: r("send it to your wallet"),
                      }),
                    ],
                  }),
                  header: [e.jsx(cl, { value: Se, prefix: "Max", onClick: y })],
                  state: [m, y],
                  mutate: (Z) => (Se && Z && Z.gt(Se) ? Se : Z),
                }),
              e.jsx("div", { className: "mb-2" }),
              c &&
                e.jsxs("div", {
                  className:
                    "mb-4 border-b pb-4 dark:border-black-300 md:mb-6 md:pb-6",
                  children: [
                    e.jsxs("div", {
                      className: "mt-3  flex items-center justify-between",
                      children: [
                        e.jsx(se, {
                          placement: "right",
                          title: r("borrow.tokenreceive.tooltip"),
                          children: e.jsx("p", {
                            className: "flex items-center font-bold",
                            children: r("borrow.repay.tokenreceive"),
                          }),
                        }),
                        e.jsx(Ys, {
                          look: "text",
                          state: [
                            k == null ? void 0 : k.address,
                            (Z) => S(a[n][Z]),
                          ],
                          options: [
                            N.address,
                            ...((N == null ? void 0 : N.underlyingTokens) ??
                              []),
                          ].map((Z) => ({
                            label: [e.jsx(T, { token: Z }), a[n][Z].symbol],
                            value: Z,
                          })),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      children:
                        !!le &&
                        le.gt(0) &&
                        e.jsxs("p", {
                          children: [
                            " ",
                            `You will get approximately ${
                              le == null ? void 0 : le.toFixed(3)
                            } ${k == null ? void 0 : k.symbol}.`,
                          ],
                        }),
                    }),
                  ],
                }),
              e.jsx(Me.Int256, {
                size: "l",
                label: e.jsxs(e.Fragment, {
                  children: [
                    r("borrow.repay.repaydebt"),
                    " ",
                    e.jsx("span", {
                      className: "dark:text-peach-500",
                      children: r("borrow.repay.repaydebtEURA.2"),
                    }),
                  ],
                }),
                suffix: e.jsx(Y, {
                  type: "button",
                  look: "secondary",
                  size: "small",
                  disabled: !0,
                  leftIcon: e.jsx(T, {
                    token: u == null ? void 0 : u.stablecoin,
                  }),
                  children: De(p),
                }),
                header: [
                  e.jsx(cl, {
                    value: X != null && X.gt(g) ? g : X,
                    prefix: "Max",
                    onClick: R,
                  }),
                ],
                state: [P, R],
                mutate: (Z) => {
                  const Ee = X != null && X.gt(g) ? g : X;
                  return Z.gt(Ee) ? Ee : Z;
                },
                disabled: A,
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mb-4 mt-4 flex w-full flex-col md:mb-8 lg:my-0 lg:w-1/2 lg:pl-8",
            children: [
              e.jsx(nn, {
                collatChange: A
                  ? -((js = u == null ? void 0 : u.collateralAmount) == null
                      ? void 0
                      : js.toNumber())
                  : -((gs = m ?? M.from(0)) == null ? void 0 : gs.toNumber()) -
                    ((es = C ?? M.from(0)) == null ? void 0 : es.toNumber()),
                debtChange: -((is = I ?? M.from(0)) == null
                  ? void 0
                  : is.toNumber()),
                stableBalanceChange: -((K = P ?? M.from(0)) == null
                  ? void 0
                  : K.toNumber()),
                collateralAddress: p.collateral,
                usedTokens: [k],
                usedTokensChange: [le].map((Z) =>
                  Z == null ? void 0 : Z.toNumber()
                ),
              }),
              e.jsx("div", {
                className: "mt-4",
                children: ie
                  ? e.jsx(ct, {
                      className: "w-full min-w-[12rem]",
                      sx: { bgcolor: "#333a54" },
                    })
                  : W
                  ? e.jsxs("p", {
                      className:
                        "mx-auto my-4 w-10/12 text-center text-sm dark:text-coral-500",
                      children: [
                        "There was an error while preparing for your transaction. Please wait a few moments, or refresh the data and try again.",
                        e.jsx(se, {
                          placement: "right",
                          title: r("Refresh data"),
                          icon: !1,
                          children: e.jsx("button", {
                            className:
                              "mx-auto mb-2 mt-4 flex items-center rounded-md p-1 dark:bg-black-400",
                            onClick: ye,
                            children: e.jsx(Ft, {
                              className: `medium !transition-all dark:text-peach-500 ${
                                ie
                                  ? "animate-reverse disabled motion-safe:animate-spin"
                                  : "hover:-rotate-90"
                              } ${_ && _.length !== 0 ? "disabled" : ""}`,
                            }),
                          }),
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        !!E &&
                          E.length > 0 &&
                          e.jsxs("div", {
                            onClick: () => O(!0),
                            className:
                              "dim my-6 flex cursor-pointer items-center justify-between border-b pb-2 dark:border-black-300",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  e.jsx("img", {
                                    src: Il,
                                    className: "mr-3 w-12",
                                    alt: "routes logo",
                                  }),
                                  e.jsx("p", {
                                    className: "dark:text-black-100",
                                    children: r("borrow.showrouting"),
                                  }),
                                ],
                              }),
                              e.jsx(ia, {
                                className: "small mr-1 dark:text-blue-500",
                              }),
                            ],
                          }),
                        !!_ &&
                          _.length !== 0 &&
                          e.jsx(jt, {
                            className: "no-bg my-4 w-full",
                            ghost: !0,
                            children: e.jsx(
                              jt.Panel,
                              {
                                showArrow: !1,
                                header: e.jsxs("div", {
                                  className:
                                    "dim flex items-center justify-between border-b pb-1 font-bold dark:border-black-300 dark:text-sand-500",
                                  children: [
                                    "Transaction details",
                                    e.jsx(qa, {
                                      className:
                                        "rotation ml-2 dark:text-blue-500",
                                    }),
                                  ],
                                }),
                                children: e.jsx("ul", {
                                  className: "mt-2",
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      _ == null
                                        ? void 0
                                        : _.reduce(
                                            (Z, Ee) =>
                                              Z +
                                              '<li class="text-sm py-0 dark:text-sand-500">' +
                                              Ee +
                                              "</li>",
                                            ""
                                          ),
                                  },
                                }),
                              },
                              "1"
                            ),
                          }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "mt-4 flex w-full flex-1 flex-col items-end justify-end",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx(Zl, {}),
            e.jsx(rn, { disabled: q, onClick: (Z) => ce(Z, o) }),
            e.jsx(an, {
              disabled:
                ((m == null ? void 0 : m.eq(0)) &&
                  (I == null ? void 0 : I.eq(0))) ||
                (u == null ? void 0 : u.id) == null,
              warningText: "",
              btnText:
                !(m != null && m.eq(0)) && I != null && I.eq(0)
                  ? r("Withdraw")
                  : r("Repay"),
              txState: _e.VALID,
              onClick: ce,
            }),
          ],
        }),
      }),
    ],
  });
};
var lr = {},
  rc = Ue;
Object.defineProperty(lr, "__esModule", { value: !0 });
var on = (lr.default = void 0),
  lc = rc(Fe()),
  nc = e;
on = lr.default = (0, lc.default)(
  (0, nc.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z",
  }),
  "Error"
);
const Ra = ({ vault: s, vaultManager: t, interestRate: r }) => {
    var o, i, b, h, u, p, v, N, w;
    const { t: l } = ge(),
      a = bs(),
      { prices: n } = oe(),
      d = Mt(s, t) > 0.9 * (s == null ? void 0 : s.rate);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "inline-flex gap-4 items-center",
          children: [
            e.jsxs("div", {
              className: "flex-1 mb-6",
              children: [
                e.jsxs("div", {
                  className: "relative z-2 mb-1 h-1 w-full rounded-full",
                  children: [
                    ((o = s == null ? void 0 : s.collateralAmount) == null
                      ? void 0
                      : o.toNumber()) > 0 &&
                      e.jsx("div", {
                        className:
                          "absolute left-0 top-0 h-1 rounded-full dark:bg-purple-300",
                        style: {
                          width: `${
                            ((i = s == null ? void 0 : s.collateralAmount) ==
                            null
                              ? void 0
                              : i.toNumber()) > 0
                              ? Math.round(
                                  ((it(s, t) + (s == null ? void 0 : s.debt)) /
                                    (((b =
                                      s == null
                                        ? void 0
                                        : s.collateralAmount) == null
                                      ? void 0
                                      : b.toNumber()) *
                                      (s == null ? void 0 : s.rate))) *
                                    100
                                )
                              : Math.round(
                                  1e4 /
                                    (t == null ? void 0 : t.minCollateralRatio)
                                )
                          }%`,
                        },
                      }),
                    e.jsx("div", {
                      className:
                        "absolute left-0 top-0 h-1 rounded-full dark:bg-purple-700",
                      style: {
                        width: `${
                          ((h = s == null ? void 0 : s.collateralAmount) == null
                            ? void 0
                            : h.toNumber()) > 0
                            ? Math.round(
                                ((it(s, t) + (s == null ? void 0 : s.debt)) /
                                  (((u =
                                    s == null ? void 0 : s.collateralAmount) ==
                                  null
                                    ? void 0
                                    : u.toNumber()) *
                                    (s == null ? void 0 : s.rate))) *
                                  100
                              )
                            : Math.round(
                                1e4 /
                                  (t == null ? void 0 : t.minCollateralRatio)
                              )
                        }%`,
                      },
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "relative h-1 w-full rounded-full dark:bg-green-500",
                }),
              ],
            }),
            d &&
              e.jsx(se, {
                icon: !1,
                placement: "right",
                title:
                  "This vault is dangerously close from liquidation, you may want to take action and repay a portion of your debt or add more collateral!",
                children: e.jsxs("div", {
                  className: " z-3 flex  -translate-y-1/2  rounded-full",
                  style: {
                    left: `${
                      ((p = s == null ? void 0 : s.collateralAmount) == null
                        ? void 0
                        : p.toNumber()) > 0
                        ? Math.round(
                            ((it(s, t) + (s == null ? void 0 : s.debt)) /
                              (((v = s == null ? void 0 : s.collateralAmount) ==
                              null
                                ? void 0
                                : v.toNumber()) *
                                (s == null ? void 0 : s.rate))) *
                              100
                          )
                        : Math.round(
                            1e4 / (t == null ? void 0 : t.minCollateralRatio)
                          )
                    }%`,
                  },
                  children: [
                    e.jsx("span", {
                      className:
                        "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full dark:bg-sand-500",
                    }),
                    e.jsx(on, {
                      className: "z-2 !h-7 !w-7 dark:text-coral-700",
                    }),
                  ],
                }),
              }),
          ],
        }),
        e.jsxs("div", {
          className: "flex gap-4 flex-wrap",
          children: [
            e.jsx("div", {
              className: "",
              children:
                (s == null ? void 0 : s.debt) > 0
                  ? e.jsxs(se, {
                      icon: !1,
                      placement: "left",
                      title: `Yearly Interest Cost: ${a(
                        (s == null ? void 0 : s.debt) * n[De(s)] * r
                      )}`,
                      children: [
                        e.jsxs("div", {
                          className:
                            "mb-1.5 flex items-center dark:text-purple-700",
                          children: [
                            e.jsx("div", {
                              className:
                                "mr-2 h-1.5 w-8 rounded-full dark:bg-purple-700",
                            }),
                            l("borrow.debt"),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "font-bold",
                          children: [
                            Ce(s == null ? void 0 : s.debt),
                            " ",
                            De(s),
                            " ",
                            e.jsx("span", {
                              className: "font-normal dark:text-black-200",
                              children: `~${a(
                                (s == null ? void 0 : s.debt) * n[De(s)]
                              )}`,
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className:
                            "mb-1.5 flex items-center dark:text-purple-700",
                          children: [
                            e.jsx("div", {
                              className:
                                "mr-2 h-1.5 w-8 rounded-full dark:bg-purple-700",
                            }),
                            l("borrow.debt"),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "font-bold",
                          children: [
                            Ce(s == null ? void 0 : s.debt),
                            " ",
                            De(s),
                            " ",
                            e.jsx("span", {
                              className: "font-normal dark:text-black-200",
                              children: `~${a(
                                (s == null ? void 0 : s.debt) * n[De(s)]
                              )}`,
                            }),
                          ],
                        }),
                      ],
                    }),
            }),
            e.jsxs("div", {
              className: "",
              children: [
                e.jsxs("div", {
                  className: "mb-1.5 flex items-center dark:text-purple-300",
                  children: [
                    e.jsx("div", {
                      className:
                        "mr-2 h-1.5 w-8 rounded-full dark:bg-purple-300",
                    }),
                    l("borrow.availableborrow"),
                  ],
                }),
                e.jsxs("p", {
                  className: "font-bold",
                  children: [
                    Ce(it(s, t)),
                    " ",
                    De(s),
                    " ",
                    e.jsx("span", {
                      className: "font-normal dark:text-black-200",
                      children: `~${a(it(s, t) * n[De(s)])}`,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "",
              children: [
                e.jsxs("div", {
                  className: "mb-1.5 flex items-center dark:text-green-500",
                  children: [
                    e.jsx("div", {
                      className:
                        "mr-2 h-1.5 w-8 rounded-full dark:bg-green-500",
                    }),
                    l("borrow.coldeposit"),
                  ],
                }),
                e.jsxs("p", {
                  className: "font-bold",
                  children: [
                    Ce(
                      (N = s == null ? void 0 : s.collateralAmount) == null
                        ? void 0
                        : N.toNumber()
                    ),
                    " ",
                    t == null ? void 0 : t.collatSymbol,
                    " ",
                    e.jsx("span", {
                      className: "font-normal dark:text-black-200",
                      children: `~${a(
                        ((w = s == null ? void 0 : s.collateralAmount) == null
                          ? void 0
                          : w.toNumber()) *
                          (s == null ? void 0 : s.rate) *
                          n[De(s)]
                      )}`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  oc = ({ visible: s, setVisible: t }) => {
    const { t: r } = ge(),
      { vault: l, vaultManager: a, finalVault: n } = Us();
    return e.jsxs(us, {
      title: r("borrow.vaultdetails.title"),
      visible: s,
      onCancel: () => {
        t(!1);
      },
      children: [
        e.jsx("h6", {
          className: "mb-4 dark:text-peach-500",
          children: r("borrow.vaultdetails.current"),
        }),
        e.jsx(Ra, { vault: l, vaultManager: a }),
        e.jsx("h6", {
          className: "mb-4 mt-8 dark:text-peach-500",
          children: r("borrow.vaultdetails.future"),
        }),
        e.jsx(Ra, { vault: n, vaultManager: a }),
      ],
    });
  },
  ic = ({ className: s, callBack: t }) => {
    var A;
    const { chainId: r, address: l } = oe(),
      { data: a } = ze("vaults", { age: "10m" }),
      n = x.useMemo(() => {
        var f;
        return ((f = a == null ? void 0 : a[r]) == null ? void 0 : f[l]) ?? {};
      }, [r, l, a]),
      { data: d } = ze("vaultManagers", { age: "10m" }),
      o = x.useMemo(() => {
        var f;
        return ((f = d == null ? void 0 : d[r]) == null ? void 0 : f[l]) ?? {};
      }, [r, l, d]),
      {
        vaultManager: i,
        vault: b,
        setVKey: h,
        setVmKey: u,
        vmKey: p,
        vKey: v,
      } = Us(),
      { t: N } = ge(),
      w =
        (A = Object.entries(o)) == null
          ? void 0
          : A.map(([f, g]) => {
              if (g.chainId === r && Ss(Rs(De(g)), ["borrow"]).includes(r))
                return {
                  label: e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(T, {
                        className: "z-1 h-5 w-auto object-contain",
                        token: g.collateral,
                      }),
                      e.jsx(T, {
                        className: "z-0 -ml-3 h-5 w-auto",
                        token: g.stablecoin,
                      }),
                      `${g == null ? void 0 : g.collatSymbol}/${De(g)}`,
                    ],
                  }),
                  value: f,
                };
            }).filter((f) => f),
      c = Object.entries(n).map(([f, g]) => ({
        label: e.jsxs(e.Fragment, {
          children: [
            e.jsx(T, {
              className: "z-1 h-5 w-auto object-contain",
              token: g.collateral,
            }),
            e.jsx(T, {
              className: "z-0 -ml-3 h-5 w-auto",
              token: g.stablecoin,
            }),
            [g == null ? void 0 : g.collatSymbol, De(g), g.id].join("-"),
          ],
        }),
        value: f,
      }));
    return e.jsxs("div", {
      className:
        "flex w-full flex-1 flex-wrap items-center gap-2 pl-4 md:gap-2 lg:w-3/4 lg:gap-3",
      children: [
        e.jsx(Ys, {
          state: [
            v === "0" ? v : "null",
            (f) => {
              h(f === "null" ? null : f), t();
            },
          ],
          options: [
            {
              label: e.jsxs(e.Fragment, {
                children: [
                  e.jsx(T, { mui: "Add" }),
                  " ",
                  N("borrow.txbuilder.create"),
                ],
              }),
              value: "0",
            },
            {
              label: e.jsxs(e.Fragment, {
                children: [
                  e.jsx(T, { mui: "Create" }),
                  N("borrow.txbuilder.modify"),
                ],
              }),
              value: "null",
            },
          ],
        }),
        e.jsx("h6", {
          className: "dark:text-sand-500",
          children: N(
            v === "0"
              ? "borrow.txbuilder.phrase2create"
              : "borrow.txbuilder.phrase2modify"
          ),
        }),
        v === "0"
          ? e.jsx(Ys, {
              state: [i == null ? void 0 : i.address, u],
              options: w,
            })
          : e.jsx(Ys, {
              state: [
                b && `${b.address}_${b.id}`,
                (f) => {
                  h(n[f].address + "_" + n[f].id), u(n[f].address);
                },
              ],
              options: c,
            }),
        e.jsx("h6", {
          className: "dark:text-sand-500",
          children: N("borrow.txbuilder.phrase3"),
        }),
      ],
    });
  },
  cc = ({ setTxBuilderVisible: s }) => {
    var _, F, G, re;
    const { t } = ge(),
      {
        subTxList: r,
        transaction: l,
        setSubTxList: a,
        clear: n,
        requiredAllowance: d,
        signed: o,
        vault: i,
        callback: b,
        setBundleCallback: h,
        vKey: u,
        vmKey: p,
        wrap: v,
        wrapRate: N,
        openSubTxBuilder: w,
        txState: c,
        approvalState: A,
        setOpenSubTxBuilder: f,
        error: g,
        gasLimit: j,
      } = Us(),
      { gasPrice: k, prices: S, chainId: m, tokens: y } = oe();
    ps();
    const { setContracts: C } = Ze(),
      $ = bs(),
      [P, R] = x.useState(!1),
      L = x.useCallback((D, V) => {
        a((W) =>
          bi(W, {
            $splice: [
              [D, 1],
              [V, 0, W[D]],
            ],
          })
        );
      }, []),
      O = x.useCallback(
        (D, V) =>
          e.jsx(Ci, { index: V + 1, subTx: D, moveCard: L }, V.toString()),
        []
      ),
      E = x.useCallback(() => {
        f(null);
      }, []),
      U = x.useMemo(() => {
        var D, V, W, me;
        try {
          const Ne = Object.keys(os).find((I) => {
            var ee;
            return (
              ((ee = J(m, I)) == null ? void 0 : ee.AgToken.toLowerCase()) ===
              (i == null ? void 0 : i.stablecoin.toLowerCase())
            );
          });
          if (!Ne) return [];
          const be = os[Ne],
            ue = (D = J(m, Ne)) == null ? void 0 : D.borrowCollaterals,
            ie = i.symbol.replace(`-${be}-vault`, "").replace(Ne, ""),
            ve = Object.keys(ue).find(
              (I) => I.replace("-", "") === ie.replace("-", "")
            ),
            z = (V = ue[ve]) == null ? void 0 : V.VaultManager,
            B =
              (me = (W = ue[ve]) == null ? void 0 : W.additionalProperties) ==
              null
                ? void 0
                : me.Swapper;
          return [{ address: z, name: `${ve} VaultManager`, chainId: m }]
            .concat(
              B ? [{ address: B, name: `${ve} Swapper`, chainId: m }] : []
            )
            .filter(({ address: I }) => I !== void 0);
        } catch (Ne) {
          return console.error("err", Ne), [];
        }
      }, [i, m]);
    return (
      x.useEffect(() => {
        const D = [...U],
          V = D.map(({ address: W }) => W);
        return (
          C((W) => [...W, ...D]),
          () => C((W) => W.filter((me) => !V.includes(me.address)))
        );
      }, [U, C]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(oc, { visible: P, setVisible: R }),
          e.jsxs("div", {
            className:
              "flex w-full flex-1 flex-col justify-between rounded-md dark:bg-black-700",
            children: [
              e.jsxs("div", {
                className:
                  "gradient-purple500-blue500 sticky top-0 z-50 flex flex-wrap gap-2 rounded-t-md ",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center py-3 pl-6 pr-3",
                    children: [
                      e.jsx("img", {
                        src: ji,
                        alt: "Shape of transaction builder",
                        className: "mr-4 w-4",
                      }),
                      e.jsx("h5", { children: t("Transaction Builder") }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-1 items-center py-2 dark:bg-black-400",
                    children: [
                      e.jsx(ic, { callBack: E }),
                      e.jsx("button", {
                        onClick: () => {
                          s(!1), E();
                        },
                        className:
                          "dim absolute right-3.5 top-3.5 ml-auto lg:right-3 lg:top-1/2 lg:-translate-y-1/2",
                        children: e.jsx(Tn, {
                          className: "dark:text-peach-500",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex h-full flex-col",
                children: [
                  e.jsx("div", {
                    className:
                      "border-gradient-purple500-blue500 z-4 mx-auto flex w-full items-center py-5 before:!rounded-none before:!px-0 before:!pt-0 dark:bg-black-700",
                    children: e.jsxs("div", {
                      className:
                        "flex w-full flex-1 flex-wrap items-center gap-3 overflow-y-hidden px-4 transition-all duration-1000 ease-in-out md:px-8 lg:px-14",
                      children: [
                        !!p &&
                          e.jsx(se, {
                            placement: "bottom",
                            icon: !1,
                            title:
                              "Borrow EURA and/or add collateral to your vault.",
                            children: e.jsx(Y, {
                              type: "tag",
                              look: "primary",
                              enabled: w === ns.BORROW,
                              className: `${
                                u === null || (u === "0" && p === null)
                                  ? "-translate-y-full"
                                  : ""
                              }`,
                              onClick: () => {
                                f(ns.BORROW);
                              },
                              children: t("borrow.modify.borrowadd"),
                            }),
                          }),
                        !(!p || u !== "0") &&
                          e.jsx(se, {
                            placement: "bottom",
                            title:
                              "Get leverage by increasing your exposure to the chosen collateral.",
                            icon: !1,
                            children: e.jsx(Y, {
                              type: "tag",
                              look: "primary",
                              className: `${
                                u === null || (u === "0" && p === null)
                                  ? "-translate-y-full"
                                  : ""
                              }`,
                              disabled: !p || (i == null ? void 0 : i.debt) > 0,
                              onClick: () => {
                                f(ns.LEVERAGE);
                              },
                              enabled: w === ns.LEVERAGE,
                              children: t("borrow.modify.multiply"),
                            }),
                          }),
                        !(u === "0" || !p) &&
                          e.jsx(se, {
                            icon: !1,
                            placement: "bottom",
                            title:
                              "Repay your EURA debt and/or remove some collateral from your vault.",
                            children: e.jsx(Y, {
                              type: "tag",
                              look: "primary",
                              className: `${
                                u === null || (u === "0" && p === null)
                                  ? "-translate-y-full"
                                  : ""
                              }`,
                              onClick: () => {
                                f(ns.REPAY);
                              },
                              enabled: w === ns.REPAY,
                              children: t("borrow.modify.repay"),
                            }),
                          }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "z-3 flex-1 dark:bg-black-700 ",
                    children: e.jsxs("div", {
                      className:
                        "flex h-full w-full flex-col flex-wrap justify-center px-4 pb-4 pt-4 md:px-8 md:pb-8 lg:px-14 lg:pb-14",
                      children: [
                        w === ns.BORROW && e.jsx(il, { close: E }),
                        w === ns.REPAY && e.jsx(ac, { close: E }),
                        w === ns.LEVERAGE &&
                          e.jsx(il, { close: E, isLeverage: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: `${
                  (r == null ? void 0 : r.length) < 1 && "hidden"
                } border-gradient-purple500-blue500 mx-auto flex w-full flex-1 flex-wrap rounded-b-md before:!rounded-none before:!px-0 before:!pb-0`,
                children: [
                  e.jsxs("div", {
                    className:
                      "border-gradient-peach500-purple500-blue500 w-full px-4 py-4 before:!rounded-none before:!pl-0 before:pr-0 dark:bg-black-700 md:px-8 lg:w-1/2 lg:px-14 lg:py-6 lg:before:!py-0 lg:before:!pr-px",
                    children: [
                      e.jsx("p", {
                        className:
                          "mb-6 uppercase tracking-widest dark:text-black-100",
                        children: t("borrow.modify.addremove"),
                      }),
                      e.jsx("div", {
                        className: "flex flex-1 flex-wrap",
                        children: e.jsx(Rn, {
                          backend: In,
                          children: e.jsxs("div", {
                            className:
                              "items-between mb-6 flex h-full w-full flex-col",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "custom-scrollbar flex max-h-96 flex-col gap-2 overflow-scroll pr-8 lg:max-h-max",
                                children: [
                                  !(
                                    l != null && l.every((D) => !D.needsWrap)
                                  ) &&
                                    (d == null ? void 0 : d.gt(0)) &&
                                    e.jsx("div", {
                                      className: "draggable-card",
                                      children: e.jsx("div", {
                                        className: "flex w-full items-center",
                                        children: e.jsx("div", {
                                          className: "ml-2 mr-4 w-full",
                                          children: e.jsxs("p", {
                                            className:
                                              "font-bold dark:text-blue-500",
                                            children: [
                                              0,
                                              ".",
                                              " ",
                                              `Wrap ${Ce(
                                                (_ = M.from(d)) == null
                                                  ? void 0
                                                  : _.toNumber(),
                                                3
                                              )} ${
                                                (F = y[m][v]) == null
                                                  ? void 0
                                                  : F.symbol
                                              } to ${Ce(
                                                (re =
                                                  (G = M.from(d)) == null
                                                    ? void 0
                                                    : G.mul(N)) == null
                                                  ? void 0
                                                  : re.toNumber(),
                                                3
                                              )} ${oi(i)}`,
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                  l.map((D, V) => O(D, V)),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "custom-scrollbar mt-2 overflow-scroll pr-8",
                                children:
                                  !!(b != null && b.who) &&
                                  e.jsxs("div", {
                                    className: "draggable-card",
                                    children: [
                                      e.jsx("div", {
                                        className: "flex w-full items-center",
                                        children: e.jsx("div", {
                                          className: "ml-2 mr-4 w-full",
                                          children: e.jsxs("p", {
                                            className:
                                              "font-bold dark:text-blue-500",
                                            children: [
                                              (l == null ? void 0 : l.length) +
                                                1,
                                              ". ",
                                              b == null
                                                ? void 0
                                                : b.description,
                                            ],
                                          }),
                                        }),
                                      }),
                                      e.jsx(Va, {
                                        className:
                                          "enabled dim absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform cursor-pointer !transition-all hover:font-bold dark:text-blue-500",
                                        onClick: () => h(null),
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "sticky top-0 w-full self-start px-4 py-4 dark:bg-black-700 md:px-8 lg:w-1/2 lg:px-14 lg:py-6",
                    children: [
                      e.jsx("p", {
                        className:
                          "mb-6 uppercase tracking-widest dark:text-black-100",
                        children: t("borrow.modify.sendtx"),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex w-full flex-col items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            className: "mb-4 flex w-full flex-col",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "dim mb-2 flex cursor-pointer items-center",
                                onClick: () => !!u && u !== "0" && R(!0),
                                children: [
                                  e.jsx(Ql, {
                                    className: "small mr-2 dark:text-peach-500",
                                  }),
                                  t("borrow.modify.details"),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex w-full items-center justify-between border-t border-black-200 py-1.5",
                                children: [
                                  e.jsx("p", {
                                    className: "p-sm dark:text-black-200",
                                    children: t("borrow.modify.sub"),
                                  }),
                                  e.jsx("p", {
                                    className: "p-sm dark:text-sand-500",
                                    children: l == null ? void 0 : l.length,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "w-full border-y border-black-200 py-1.5",
                                children:
                                  c === _e.PERMIT || c === _e.VAULTPERMIT
                                    ? e.jsx("p", {
                                        className:
                                          "p-sm my-2 w-full dark:text-coral-700",
                                        children: t("borrow.modify.sign"),
                                      })
                                    : c === _e.APPROVAL
                                    ? e.jsx("p", {
                                        className:
                                          "p-sm my-2 w-full dark:text-coral-700",
                                        children: t("borrow.modify.approveuse"),
                                      })
                                    : (l == null ? void 0 : l.length) > 0 &&
                                      (o || Os.APPROVED === A) &&
                                      j === 0
                                    ? e.jsxs("p", {
                                        className:
                                          "p-sm my-2 w-full dark:text-coral-700",
                                        children: [
                                          t("borrow.modify.fail"),
                                          " ",
                                          g,
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "mb-1.5 flex items-center justify-between",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "p-sm dark:text-black-200",
                                                children: t(
                                                  "borrow.modify.estgas"
                                                ),
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "p-sm dark:text-sand-500",
                                                children: j > 0 && hs(j),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "p-sm dark:text-black-200",
                                                children: t(
                                                  "borrow.modify.estcost"
                                                ),
                                              }),
                                              j > 0 &&
                                                e.jsx("p", {
                                                  className:
                                                    "p-sm dark:text-sand-500",
                                                  children: $(
                                                    (j / 1e9) *
                                                      (k / 1e9) *
                                                      S[dt[m]]
                                                  ),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "cta flex w-full items-center justify-between",
                            children: [
                              e.jsx(Y, {
                                type: "button",
                                look: "secondary",
                                disabled:
                                  !l || (l == null ? void 0 : l.length) === 0,
                                onClick: n,
                                leftIcon: e.jsx(T, { mui: "RestartAlt" }),
                                children: t("borrow.modify.clear"),
                              }),
                              e.jsx(Ai, {
                                disabled: !(j !== 0 || c !== _e.VALID),
                                setTxBuilderVisible: s,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  [dc, mc, Qm] = oa({
    collateral: ["Collateral", "minmax(100px, 1fr)"],
    stablecoin: ["Stablecoin", "minmax(75px, 1fr)", "justify-center"],
    interestRate: ["Interest Rate", "minmax(75px, 1fr)", "justify-center"],
    liquidationFee: ["Liquidation Fee", "minmax(75px, 1fr)", "justify-center"],
    maxLTV: ["Max. LTV", "minmax(75px, 1fr)", "justify-center"],
    leftBorrow: ["Left to Borrow", "minmax(100px, 1fr)", "justify-center"],
    buttons: ["", "minmax(150px, 1fr)", "justify-end"],
  });
function uc({
  setTxBuilderVisible: s,
  baseAction: t,
  stables: r,
  searchPhrase: l,
  loading: a,
  header: n,
}) {
  var g;
  const { chainId: d, tokens: o, address: i } = oe(),
    { t: b } = ge(),
    { data: h } = ze("vaultManagers", { age: "10m" }),
    u = x.useMemo(() => {
      var j;
      return ((j = h == null ? void 0 : h[d]) == null ? void 0 : j[i]) ?? {};
    }, [d, i, h]),
    { setVmKey: p, setVKey: v, setOpenSubTxBuilder: N } = Us(),
    w = x.useCallback(
      (j, k = t) => {
        v("0"), p(j.address), s(!0), N(k);
      },
      [v, p, s, N, t]
    ),
    c = !!u && Object.values(u),
    { sample: A, setSorting: f } = na(
      c,
      (j) => {
        var k, S, m, y;
        return j.chainId !== d || j.debtCeiling.lte(0)
          ? !1
          : (l !== "" &&
              (((S =
                (k = j == null ? void 0 : j.symbol) == null
                  ? void 0
                  : k.toLowerCase()) != null &&
                S.includes(l == null ? void 0 : l.toLowerCase())) ||
                ((y =
                  (m = `ag${
                    j.symbol.substring(0, j.symbol.length - 6).split("/")[1]
                  }`) == null
                    ? void 0
                    : m.toLowerCase()) != null &&
                  y.includes(l == null ? void 0 : l.toLowerCase()))),
            !0);
      },
      [u, (g = Object.keys(u || {})) == null ? void 0 : g.length, l, d, r],
      ["collateral", "ascending"],
      (j, k, S, m) => {
        var C, $;
        const y = (P, R) => {
          if (k === "ascending") return (P ?? 0) - (R ?? 0);
          if (k === "descending") return (R ?? 0) - (P ?? 0);
        };
        switch (j) {
          case "collateral":
            return k === "ascending"
              ? (m.symbol ?? "").localeCompare(S.symbol ?? "")
              : (S.symbol ?? "").localeCompare(m.symbol ?? "");
          case "stablecoin":
            return k === "ascending"
              ? (m.symbol ?? "").localeCompare(S.symbol ?? "")
              : (S.symbol ?? "").localeCompare(m.symbol ?? "");
          case "interestRate":
            return y(S.stabilityFee, m.stabilityFee);
          case "liquidationFee":
            return y(S.liquidationPenalty, m.liquidationPenalty);
          case "maxLTV":
            return y(S.minCollateralRatio, m.minCollateralRatio);
          case "leftBorrow":
            return y(
              ((C = S.debtCeiling) == null ? void 0 : C.toNumber()) -
                S.totalDebt,
              (($ = m.debtCeiling) == null ? void 0 : $.toNumber()) -
                m.totalDebt
            );
        }
      }
    );
  return e.jsx(dc, {
    unsortable: ["buttons"],
    loading: a,
    container: !1,
    onSort: (...j) => f(j),
    header: n,
    children:
      A == null
        ? void 0
        : A.filter(
            (j) => j.stablecoin !== "0x0000206329b97DB379d5E1Bf586BbDB969C63274"
          ).map((j) => {
            var k, S, m, y, C, $, P, R, L, O, E;
            return (
              console.log(A),
              e.jsx(mc, {
                className: "[&>*]:font-bold",
                collateralColumn: e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Be, {
                      token: j == null ? void 0 : j.collateral,
                      className: "mr-2 h-8 w-auto object-contain",
                    }),
                    e.jsxs("div", {
                      className:
                        "flex flex-wrap items-center gap-x-2 gap-y-0.5 font-bold",
                      children: [
                        ((S =
                          (k = o == null ? void 0 : o[d]) == null
                            ? void 0
                            : k[j == null ? void 0 : j.collateral]) == null
                          ? void 0
                          : S.wrappingMethod) === "BorrowStaker" ||
                        ((m = o[d][j == null ? void 0 : j.collateral]) !=
                          null &&
                          m.description)
                          ? e.jsx(se, {
                              icon: !1,
                              title: e.jsx("div", {
                                className: "container",
                                dangerouslySetInnerHTML: {
                                  __html:
                                    (y =
                                      o[d][
                                        j == null ? void 0 : j.collateral
                                      ]) == null
                                      ? void 0
                                      : y.description,
                                },
                              }),
                              placement: "left",
                              children: j == null ? void 0 : j.collatSymbol,
                            })
                          : j == null
                          ? void 0
                          : j.collatSymbol,
                        !!(
                          (C = j == null ? void 0 : j.rewardAPR) != null &&
                          C.totalAPR
                        ) &&
                          e.jsx(se, {
                            icon: !1,
                            title: e.jsxs("div", {
                              children: [
                                !!(j != null && j.rewardAPR.breakdown) &&
                                  e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className: "text-center font-bold",
                                        children: "Breakdown",
                                      }),
                                      Object.keys(
                                        ($ =
                                          j == null ? void 0 : j.rewardAPR) ==
                                          null
                                          ? void 0
                                          : $.breakdown
                                      ).map((U, _) => {
                                        var F;
                                        return e.jsx(
                                          "div",
                                          {
                                            children: `${
                                              (F = o[d][Ns(U)]) == null
                                                ? void 0
                                                : F.symbol
                                            }: +${(
                                              100 *
                                              (j == null
                                                ? void 0
                                                : j.rewardAPR.breakdown[U])
                                            ).toFixed(1)}%`,
                                          },
                                          _
                                        );
                                      }),
                                    ],
                                  }),
                                e.jsx("div", {
                                  children: `Up to +${
                                    (R = ii(
                                      100 *
                                        ((P =
                                          j == null ? void 0 : j.rewardAPR) ==
                                        null
                                          ? void 0
                                          : P.totalAPR),
                                      100 /
                                        (j == null
                                          ? void 0
                                          : j.minCollateralRatio),
                                      j == null ? void 0 : j.borrowFee
                                    )) == null
                                      ? void 0
                                      : R.toFixed(0)
                                  }% APR when taking the max leverage`,
                                }),
                              ],
                            }),
                            placement: "right",
                            children: e.jsx(e.Fragment, {
                              children: e.jsxs(Fs, {
                                color: "black",
                                children: [
                                  (
                                    ((L = j == null ? void 0 : j.rewardAPR) ==
                                    null
                                      ? void 0
                                      : L.totalAPR) * 100
                                  ).toFixed(2),
                                  " %",
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                stablecoinColumn: e.jsx(Be, {
                  token: j == null ? void 0 : j.stablecoin,
                  className: "h-8 w-auto object-contain",
                }),
                interestRateColumn: e.jsxs(e.Fragment, {
                  children: [
                    mt(((j == null ? void 0 : j.stabilityFee) - 1) * 100, 2),
                    " %",
                  ],
                }),
                liquidationFeeColumn: e.jsxs(e.Fragment, {
                  children: [
                    hs(j == null ? void 0 : j.liquidationPenalty),
                    " %",
                  ],
                }),
                maxLTVColumn: e.jsxs(e.Fragment, {
                  children: [
                    mt((j == null ? void 0 : j.maxLTV) * 100, 2),
                    " %",
                  ],
                }),
                leftBorrowColumn: e.jsxs("div", {
                  className: "mx-auto flex w-max flex-col items-center",
                  children: [
                    e.jsxs("div", {
                      className: "relative z-2 my-1 h-1 w-14 rounded-full",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute left-0 top-0 h-1 w-full rounded-full dark:bg-black-300",
                          style: { width: "100%" },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute left-0 top-0 h-1 rounded-full dark:bg-green-500",
                          style: {
                            width: `${
                              100 -
                              (j.totalDebt /
                                ((O = j.debtCeiling) == null
                                  ? void 0
                                  : O.toNumber())) *
                                100
                            }%`,
                          },
                        }),
                      ],
                    }),
                    Ce(
                      ((E = j.debtCeiling) == null ? void 0 : E.toNumber()) -
                        j.totalDebt,
                      3
                    ),
                    " ",
                    De(j),
                  ],
                }),
                buttonsColumn: e.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    e.jsx(Y, {
                      type: "button",
                      size: "small",
                      look: "secondary",
                      onClick: () => w(j, ns.BORROW),
                      children: b("borrow.borrow.title"),
                    }),
                    e.jsx(Y, {
                      type: "button",
                      size: "small",
                      look: "primary",
                      onClick: () => w(j, ns.LEVERAGE),
                      children: "Leverage",
                    }),
                  ],
                }),
              })
            );
          }),
  });
}
const [xc, fc, Xm] = oa({
  vaults: [
    e.jsx("h4", { className: "dark:text-sand-500", children: "My Vaults" }),
    "minmax(175px, 1fr)",
  ],
  healthFactor: ["Health Factor", "minmax(100px, 1fr)", "justify-center"],
  ltv: ["Loan To Value", "minmax(90px, 1fr)", "justify-center"],
  interestRate: ["Interest Rate", "minmax(90px, 1fr)", "justify-center"],
  oraclePrice: ["Oracle Price", "minmax(90px, 1fr)", "justify-center"],
  liquidationPrice: ["Liquidation Price", "minmax(90px, 1fr)", "justify-end"],
});
function hc({ setTxBuilderVisible: s, stables: t, loading: r }) {
  var g, j;
  const { t: l } = ge(),
    { prices: a, chainId: n, address: d } = oe(),
    { data: o } = ze("vaults", { age: "10m" }),
    i = x.useMemo(() => {
      var k;
      return ((k = o == null ? void 0 : o[n]) == null ? void 0 : k[d]) ?? {};
    }, [n, d, o]),
    { data: b } = ze("vaultManagers", { age: "10m" }),
    h = x.useMemo(() => {
      var k;
      return ((k = b == null ? void 0 : b[n]) == null ? void 0 : k[d]) ?? {};
    }, [n, d, b]),
    { setVmKey: u, setVKey: p, setOpenSubTxBuilder: v } = Us(),
    N = t.map((k) => {
      var S;
      return (S = J(n, Rs(k))) == null ? void 0 : S.AgToken;
    }),
    w = x.useCallback(
      (k, S, m) => {
        u(S == null ? void 0 : S.address),
          p(`${k == null ? void 0 : k.address}_${k == null ? void 0 : k.id}`),
          s(!0),
          v(m);
      },
      [v, s, p, u]
    ),
    c = !!i && Object.keys(i),
    { sample: A, setSorting: f } = na(
      c,
      (k) => N.includes(i[k].stablecoin),
      [
        (g = Object.keys(h || {})) == null ? void 0 : g.length,
        (j = Object.keys(i || {})) == null ? void 0 : j.length,
        t,
      ],
      ["vaults", "ascending"],
      (k, S, m, y) => {
        const C = (O, E) => {
            if (S === "ascending") return (O ?? 0) - (E ?? 0);
            if (S === "descending") return (E ?? 0) - (O ?? 0);
          },
          $ = i[m],
          P = i[y],
          R = h[$.address],
          L = h[P.address];
        switch (k) {
          case "vaults":
            return S === "ascending"
              ? (
                  P.symbol.substring(0, P.symbol.length - 6).split("/")[0] ?? ""
                ).localeCompare(
                  $.symbol.substring(0, $.symbol.length - 6).split("/")[0] ?? ""
                )
              : (
                  $.symbol.substring(0, $.symbol.length - 6).split("/")[0] ?? ""
                ).localeCompare(
                  P.symbol.substring(0, P.symbol.length - 6).split("/")[0] ?? ""
                );
          case "healthFactor":
            return C(sa($, R), sa(P, L));
          case "ltv":
            return C($.collateralRatio, P.collateralRatio);
          case "interestRate":
            return C(
              R == null ? void 0 : R.stabilityFee,
              L == null ? void 0 : L.stabilityFee
            );
        }
      }
    );
  if (!(!r && A.length === 0))
    return e.jsx(xc, {
      unsortable: ["oraclePrice", "liquidationPrice"],
      loading: r,
      container: !1,
      onSort: (...k) => f(k),
      children:
        A == null
          ? void 0
          : A.map((k) => {
              var y, C, $, P, R, L;
              const S = !!i && i[k],
                m = !!h && h[S == null ? void 0 : S.address];
              return e.jsx(fc, {
                className: "[&>*]:font-bold",
                vaultsColumn: e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Be, {
                      token: m == null ? void 0 : m.collateral,
                      className: "z-1 h-6 w-auto object-contain",
                    }),
                    e.jsx(Be, {
                      token: m == null ? void 0 : m.stablecoin,
                      className: "z-0 -ml-2 mr-2 h-6 w-auto",
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap items-center gap-x-2 gap-y-1",
                      children: [
                        e.jsxs("span", {
                          className: "font-bold dark:text-sand-500",
                          children: [
                            m == null ? void 0 : m.collatSymbol,
                            "-",
                            De(S),
                          ],
                        }),
                        " ",
                        e.jsxs(Y, {
                          type: "tag",
                          look: "secondary",
                          size: "small",
                          className: "whitespace-nowrap",
                          children: ["ID: ", S == null ? void 0 : S.id],
                        }),
                        !!(
                          (y = S == null ? void 0 : S.rewardAPR) != null &&
                          y.totalAPR
                        ) &&
                          e.jsx(se, {
                            icon: !1,
                            title: `This is the net APR of this vault, assuming all your debt was swapped to ${
                              m == null ? void 0 : m.collatSymbol
                            } and re-added to the vault`,
                            children: e.jsx(e.Fragment, {
                              children: e.jsxs(Fs, {
                                color: "blue",
                                children: [
                                  "+",
                                  Hl(
                                    (m == null ? void 0 : m.stabilityFee) - 1,
                                    (a == null ? void 0 : a[S.collateral]) ??
                                      a[m == null ? void 0 : m.collatSymbol],
                                    (C =
                                      S == null
                                        ? void 0
                                        : S.collateralAmount) == null
                                      ? void 0
                                      : C.toNumber(),
                                    a[De(S)],
                                    S.debt,
                                    S.rewardAPR.totalAPR
                                  ).toFixed(2),
                                  "%",
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                healthFactorColumn: e.jsx(Pa, { vault: S, vaultManager: m }),
                ltvColumn: e.jsxs(e.Fragment, {
                  children: [
                    (($ = S == null ? void 0 : S.collateralAmount) == null
                      ? void 0
                      : $.toNumber()) *
                      (S == null ? void 0 : S.rate) >
                    0
                      ? mt(
                          ((S == null ? void 0 : S.debt) * 100) /
                            (((P = S == null ? void 0 : S.collateralAmount) ==
                            null
                              ? void 0
                              : P.toNumber()) *
                              (S == null ? void 0 : S.rate))
                        )
                      : 0,
                    " ",
                    "%",
                  ],
                }),
                interestRateColumn: e.jsxs(e.Fragment, {
                  children: [
                    Ce(((m == null ? void 0 : m.stabilityFee) - 1) * 100, 2),
                    " %",
                  ],
                }),
                oraclePriceColumn: e.jsx(e.Fragment, {
                  children: `${mt(S == null ? void 0 : S.rate, 4)} ${
                    (R = qr[Rs(De(S))]) == null ? void 0 : R.currency
                  }`,
                }),
                liquidationPriceColumn: e.jsx(se, {
                  placement: "top",
                  icon: !1,
                  title: `You may get liquidated if the oracle price decreases by ${(
                    (-Mt(S, m) / (S == null ? void 0 : S.rate) + 1) *
                    100
                  ).toFixed(2)} %.`,
                  children: e.jsx("div", {
                    className: "col-span-2 pr-4 text-right",
                    children: `${mt(Mt(S, m), 4)} ${
                      (L = qr[Rs(De(S))]) == null ? void 0 : L.currency
                    }`,
                  }),
                }),
                children: e.jsx("div", {
                  className:
                    "flex w-full !items-start rounded-b-md dark:bg-black-700 lg:w-full",
                  children: e.jsxs("div", {
                    className: "flex h-full w-full flex-col px-8 py-6",
                    children: [
                      e.jsx(Ra, {
                        interestRate: (m == null ? void 0 : m.stabilityFee) - 1,
                        vault: S,
                        vaultManager: m,
                      }),
                      e.jsxs("div", {
                        className: "mt-4 flex flex-1 flex-wrap items-end gap-2",
                        children: [
                          e.jsx(Y, {
                            className: "w-fit",
                            type: "button",
                            look: "primary",
                            onClick: () => w(S, m, ns.BORROW),
                            children: l("borrow.modify.borrowadd"),
                          }),
                          e.jsx(Y, {
                            type: "button",
                            look: "secondary",
                            onClick: () => w(S, m, ns.REPAY),
                            children: l("borrow.modify.repay"),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
            }),
    });
}
const dl = ({ baseAction: s }) => {
    const { t } = ge(),
      { chainId: r, tokens: l, address: a } = oe(),
      { balances: n } = ps(),
      { setContracts: d } = Ze(),
      o = Hs(r, ["borrow"]),
      [i, b] = x.useState(o.map((y) => os[y])),
      [h, u] = x.useState(""),
      { data: p } = ze("vaults", { age: "20s" }),
      v = x.useMemo(() => {
        var y;
        return ((y = p == null ? void 0 : p[r]) == null ? void 0 : y[a]) ?? {};
      }, [r, a, p]),
      { data: N } = ze("vaultManagers", { age: "30s" }),
      w = x.useMemo(() => {
        var y, C;
        return (
          ((y = N == null ? void 0 : N[r]) == null ? void 0 : y[a]) ===
            void 0 ||
          (a !== st &&
            ((C = p == null ? void 0 : p[r]) == null ? void 0 : C[a]) ===
              void 0)
        );
      }, [r, a, N, p]),
      { execTransactions: c } = rs(),
      [A, f] = x.useState(!1),
      [g, j] = x.useState(!1),
      k = x.useMemo(() => {
        var C, $;
        return i
          .map((P) => {
            var R;
            return {
              address: (R = J(r, Rs(P))) == null ? void 0 : R.AgToken,
              name: P,
              chainId: r,
            };
          })
          .concat([
            {
              address: (C = J(r)) == null ? void 0 : C.AngleRouterV2,
              name: "Router",
              chainId: r,
            },
            {
              address: ($ = J(r)) == null ? void 0 : $.Swapper,
              name: "Swapper",
              chainId: r,
            },
          ]);
      }, [r, i]),
      S = Object.keys(v).reduce((y, C) => (v[C].rewards ? !0 : y), !1),
      m = x.useMemo(() => {
        var C, $, P, R;
        const y = [];
        if (l && l != null && l[r])
          for (const L of Object.keys(l == null ? void 0 : l[r]))
            ((C = l == null ? void 0 : l[r][L]) == null
              ? void 0
              : C.wrappingMethod) === "Convex" &&
              ($ = n == null ? void 0 : n[L]) != null &&
              $.balance &&
              (R = (P = n[L]) == null ? void 0 : P.balance) != null &&
              R.gt(0) &&
              y.push(l == null ? void 0 : l[r][L]);
        return y;
      }, [n, r, l]);
    return (
      x.useEffect(() => {
        d(k);
      }, [k, d]),
      e.jsxs(zl, {
        chains: Ss("EUR", ["borrow"]).flat(),
        loader: el,
        children: [
          e.jsx(ci, { visible: g, setVisible: j }),
          e.jsx(vi, {
            txModalVisible: A,
            setTxBuilderVisible: f,
            children: A
              ? e.jsxs("div", {
                  className: `txbuilder ease custom-scrollbar absolute inset-4 lg:inset-x-8 z-50 min-h-[calc(100vh-4rem)] overflow-y-scroll rounded-md  ${
                    A
                      ? "txbuilder-open dark:bg-black-700 dark:bg-opacity-70"
                      : "pointer-events-none dark:bg-transparent"
                  }`,
                  children: [
                    e.jsx("div", { className: "txbuilder-back rounded-md" }),
                    e.jsx("div", { className: "txbuilder-mid rounded-md" }),
                    e.jsx("div", {
                      className:
                        "txbuilder-wrapper flex w-full flex-col items-center justify-between rounded-md",
                      children: e.jsx(cc, { setTxBuilderVisible: f }),
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "container",
                  children: [
                    e.jsx(_t, {
                      headerLogo: el,
                      headerLogoAlt: "Borrow page logo",
                      title: s === ns.BORROW ? "Borrow" : "Leverage",
                      chainId: r,
                      networksList: o.flatMap((y) => Ss(y, ["borrow"])),
                      logoClassName: "!w-28 xl:!w-32",
                      description:
                        s === ns.BORROW
                          ? "Deposit funds as collateral and borrow Angle stablecoins"
                          : "Deposit funds as collateral and get leverage on it from EURA debt.",
                    }),
                    e.jsxs("div", {
                      className:
                        "mb-4 border-gradient-purple500-blue500 flex items-center justify-between gap-4 rounded-md p-4 before:!py-0 before:!pl-1.5 before:!pr-0 dark:bg-black-300 lg:flex-1",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx(T, { size: "xl", token: "MORPHO" }),
                            e.jsx("p", {
                              className: "dark:text-black-100",
                              children:
                                "Borrow USDA on Ethereum and Base against a wide range of collaterals directly on Morpho Blue.",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          children: e.jsx(Y, {
                            className: "text-nowrap",
                            onClick: () =>
                              window.open(
                                "https://app.morpho.org/borrow",
                                "_blank"
                              ),
                            rightIcon: e.jsx(T, { mui: "OpenInNew" }),
                            children: "Open Morpho",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (S || m.length > 0) &&
                          e.jsxs("div", {
                            className: "flex flex-wrap gap-4 lg:flex-nowrap",
                            children: [
                              m.length > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "border-gradient-purple500-blue500 flex items-center justify-between gap-4 rounded-md p-4 before:!py-0 before:!pl-1.5 before:!pr-0 dark:bg-black-300 lg:flex-1",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        e.jsx(Be, {
                                          className:
                                            "mr-4 h-10 w-10 text-peach-500",
                                          token: "CVX",
                                        }),
                                        e.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            e.jsx("p", {
                                              className: "dark:text-black-100",
                                              children: `${m
                                                .reduce((y, C) => {
                                                  var $, P;
                                                  return `${y} ${hs(
                                                    (P =
                                                      ($ =
                                                        n == null
                                                          ? void 0
                                                          : n[C.address]) ==
                                                      null
                                                        ? void 0
                                                        : $.balance) == null
                                                      ? void 0
                                                      : P.toNumber()
                                                  )} ${C.symbol},`;
                                                }, "You have ")
                                                .slice(0, -1)}. `,
                                            }),
                                            e.jsx("p", {
                                              className: "dark:text-black-100",
                                              children: t(
                                                "borrow.vault.staked.on.convex"
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        e.jsx(
                                          We,
                                          {
                                            className: "small",
                                            look: "secondary",
                                            onClick: async () => "te",
                                            disabled: !1,
                                            children: "Withdraw and unwrap",
                                          },
                                          1
                                        ),
                                        m.map((y, C) =>
                                          e.jsx(
                                            We,
                                            {
                                              className: "small",
                                              look: "secondary",
                                              onClick: async ($) => {
                                                await c.withdrawAllAndUnwrap(
                                                  $,
                                                  y.address
                                                );
                                              },
                                              disabled: !1,
                                              children: "Withdraw and unwrap",
                                            },
                                            C
                                          )
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              !!S &&
                                e.jsxs("div", {
                                  className:
                                    "border-gradient-sand500-peach500 flex items-center justify-between gap-4 rounded-md p-4 before:!py-0 before:!pl-1.5 before:!pr-0 dark:bg-black-300 lg:flex-1",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        e.jsx("img", {
                                          className: "mr-4 w-10",
                                          src: ti,
                                          alt: "star",
                                        }),
                                        e.jsx("p", {
                                          className: "dark:text-black-100",
                                          children: t("borrow.vault.claim"),
                                        }),
                                      ],
                                    }),
                                    e.jsx(Y, {
                                      type: "button",
                                      look: "secondary",
                                      onClick: () => {
                                        j(!0);
                                      },
                                      children: "Claim rewards",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        !w &&
                          e.jsx(hc, {
                            stables: i,
                            setTxBuilderVisible: f,
                            loading: w,
                          }),
                        S ||
                          (m.length > 0 &&
                            e.jsx("hr", {
                              className:
                                "border-gradient-peach500-purple500-blue500 my-2 w-full before:pt-0 lg:my-6",
                            })),
                        e.jsx(uc, {
                          stables: i,
                          setTxBuilderVisible: f,
                          baseAction: s,
                          searchPhrase: h,
                          loading: w,
                          header: e.jsxs("div", {
                            className: "flex flex-wrap items-center gap-4",
                            children: [
                              e.jsx(Me, {
                                state: [h, u],
                                placeholder: "Search collaterals",
                                suffix: e.jsx(T, { mui: "SearchOutlined" }),
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(Y, {
                                    onClick: () => b(o.map((y) => os[y])),
                                    enabled: i.length === o.length,
                                    type: "tag",
                                    look: "primary",
                                    children: "All",
                                  }),
                                  o.map((y) =>
                                    e.jsx(
                                      Y,
                                      {
                                        type: "tag",
                                        look: "token",
                                        onClick: () => b([os[y]]),
                                        token: os[y],
                                        enabled:
                                          (i == null ? void 0 : i.length) ===
                                            1 && i.includes(os[y]),
                                        children: os[y],
                                      },
                                      y
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        ],
      })
    );
  },
  pc = "/assets/bridges-ac2006fe.svg",
  Wt = "BRIDGE_TXS";
function bc(s, t, r, l) {
  var W, me, Ne, be, ue, ie, ve;
  const {
      tokens: a,
      chainId: n,
      provider: d,
      gasPrice: o,
      spy: i,
      isContract: b,
      address: h,
    } = oe(),
    { fetch: u, setToChain: p } = la(),
    { execTransactions: v } = rs(),
    { allowPermit: N } = Ze(),
    { data: w, refresh: c } = ze("layerZero", [l], { age: "30s" }),
    A =
      (me = (W = w == null ? void 0 : w[n]) == null ? void 0 : W[h]) == null
        ? void 0
        : me[r],
    f =
      (be = (Ne = w == null ? void 0 : w[l]) == null ? void 0 : Ne[h]) == null
        ? void 0
        : be[r],
    g = A == null ? void 0 : A.balance,
    j = A == null ? void 0 : A.canonicalTokenAddress,
    k =
      (ie = (ue = a == null ? void 0 : a[n]) == null ? void 0 : ue[j]) == null
        ? void 0
        : ie.hasPermit,
    S = N && !i ? r && !b && k : !1,
    m = (t == null ? void 0 : t.gt(0)) && !!l && !!r,
    y = x.useMemo(
      () =>
        A && f && A.fromLimit.gt(f == null ? void 0 : f.toLimit)
          ? A.fromLimit
          : f == null
          ? void 0
          : f.toLimit,
      [A, f]
    ),
    C = A == null ? void 0 : A.fromLimit,
    $ = f == null ? void 0 : f.toLimit,
    P = x.useMemo(
      () =>
        !!(A != null && A.fromLimit) &&
        !!(f != null && f.toLimit) &&
        (t == null ? void 0 : t.gt(0)) &&
        (t == null ? void 0 : t.lt(A.fromLimit)) &&
        (t == null ? void 0 : t.lt(f.toLimit)) &&
        !!s &&
        !!l,
      [A, f, t, s, l]
    ),
    [R, L] = x.useState(),
    [O, E] = x.useState(
      localStorage.getItem(Wt) ? JSON.parse(localStorage.getItem(Wt)) : []
    ),
    U = x.useMemo(() => {
      if (!(!A || !f || !(A != null && A.oftAddress) || !m))
        return [
          f.lzChainId,
          Tr(["address"], [s]),
          t.raw,
          !1,
          Tr(["uint16", "uint256"], [1, 2e5]),
        ];
    }, [A, f, m, s, t == null ? void 0 : t.raw]);
  x.useEffect(() => {
    async function z() {
      L(void 0);
      const I = await ro
          .connect(A == null ? void 0 : A.oftAddress, d)
          .estimateSendFee(...U),
        ee = S ? 2e4 : 0,
        le = n === je.MAINNET ? 28e4 : 3e5,
        X = ht.from(le + ee);
      L(I[0].add(ht.from(o).mul(X)));
    }
    if (!P || !U) {
      L(void 0);
      return;
    }
    d && z();
  }, [U, d, A, P, o]);
  const _ = Object.keys(je)
      .filter((z) => {
        var I, ee, le, X, q, fe, pe, ye, te, ce, Se, we, Re, Ve, Je;
        const B = Number.parseInt(z);
        if (B === je.MANTLE) return !1;
        if (
          r === "ANGLE" &&
          (ee = (I = J(n)) == null ? void 0 : I.bridges) != null &&
          ee.LayerZero &&
          (le = J(n)) != null &&
          le.ANGLE
        ) {
          const He =
              (q = (X = J(B)) == null ? void 0 : X.bridges) == null
                ? void 0
                : q.LayerZero,
            Ye = (fe = J(B)) == null ? void 0 : fe.ANGLE;
          return !!He && !!Ye;
        } else if (
          (ye = (pe = J(n, Rs(r))) == null ? void 0 : pe.bridges) != null &&
          ye.LayerZero &&
          (te = J(n, Rs(r))) != null &&
          te.AgToken
        ) {
          const He =
              (Se = (ce = J(B, Rs(r))) == null ? void 0 : ce.bridges) == null
                ? void 0
                : Se.LayerZero,
            Ye = (we = J(B, Rs(r))) == null ? void 0 : we.AgToken;
          return !!He && !!Ye;
        } else {
          const He =
              (Ve = (Re = J(B, "EUR")) == null ? void 0 : Re.bridges) == null
                ? void 0
                : Ve.LayerZero,
            Ye = (Je = J(B, "EUR")) == null ? void 0 : Je.AgToken;
          return !!He && !!Ye;
        }
      })
      .map((z) => Number.parseInt(z)),
    F = x.useMemo(() => {
      var z;
      return Object.entries(
        ((z = w == null ? void 0 : w[n]) == null ? void 0 : z[h]) ?? {}
      )
        .map(([B, { canonicalTokenAddress: I }]) => ({ symbol: B, a: I }))
        .filter(({ symbol: B }) => {
          var I, ee;
          return (
            !((I = w == null ? void 0 : w[l]) != null && I[h]) ||
            Object.keys(
              (ee = w == null ? void 0 : w[l]) == null ? void 0 : ee[h]
            ).includes(B)
          );
        })
        .filter(
          ({ symbol: B }) =>
            Rs(B) === void 0 || Ss(Rs(B), ["bridge"]).includes(n)
        );
    }, [w, n, l, h]);
  x.useEffect(() => {
    p(l);
  }, [l, p]);
  const { approval: G, approve: re } = Fl(
    h,
    (ve = a == null ? void 0 : a[n]) == null ? void 0 : ve[j],
    A == null ? void 0 : A.oftAddress,
    t
  );
  async function D(z) {
    const B = (ee) => {
        d == null || d.getTransactionReceipt(ee.hash).then(() => c()),
          E(
            (le) => (
              localStorage.setItem(Wt, JSON.stringify([...le, ee])), [...le, ee]
            )
          );
      },
      I = (ee) => {
        z(ee), B({ hash: ee, amount: t, symbol: r, chainId: n, toChainId: l });
      };
    S
      ? await v.bridgeLayerZeroWithPermit(
          I,
          A == null ? void 0 : A.oftAddress,
          r,
          A.canonicalTokenAddress,
          l,
          f.lzChainId,
          t,
          s
        )
      : await v.bridgeLayerZero(
          I,
          A == null ? void 0 : A.oftAddress,
          r,
          l,
          f.lzChainId,
          t,
          s
        );
  }
  function V(z) {
    E((B) => {
      const I = B.filter((ee) => ee.hash !== z.hash);
      return localStorage.setItem(Wt, JSON.stringify(I)), I;
    });
  }
  return {
    valid: P,
    gas: R,
    availableChains: _,
    availableTokens: F,
    requireApproval: !0,
    approve: re,
    approval: G,
    send: D,
    hasPermit: k,
    limit: y,
    originLimit: C,
    destinationLimit: $,
    balance: g,
    txns: O,
    removeTxn: V,
  };
}
var ml, ul, xl;
function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var l in r) ({}).hasOwnProperty.call(r, l) && (s[l] = r[l]);
          }
          return s;
        }),
    Ia.apply(null, arguments)
  );
}
const cn = (s) =>
  x.createElement(
    "svg",
    Ia(
      {
        xmlns: "http://www.w3.org/2000/svg",
        id: "swap-icon_svg__exFXbPomaOW1",
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        viewBox: "0 0 34 34",
      },
      s
    ),
    ml ||
      (ml = x.createElement(
        "style",
        null,
        "@keyframes exFXbPomaOW4_to__to{0%{transform:translate(0,0);animation-timing-function:cubic-bezier(.445,.05,.55,.95)}50%{transform:translate(0,-2px);animation-timing-function:cubic-bezier(.445,.05,.55,.95)}80%{transform:translate(0,0)}}@keyframes exFXbPomaOW5_to__to{0%{transform:translate(0,0);animation-timing-function:cubic-bezier(.445,.05,.55,.95)}50%{transform:translate(0,2px);animation-timing-function:cubic-bezier(.445,.05,.55,.95)}80%{transform:translate(0,0)}}"
      )),
    ul ||
      (ul = x.createElement(
        "defs",
        null,
        x.createElement(
          "linearGradient",
          {
            id: "swap-icon_svg__exFXbPomaOW3-fill",
            x1: 13.618,
            x2: -14.421,
            y1: -10.967,
            y2: 9.758,
            gradientUnits: "userSpaceOnUse",
            spreadMethod: "pad",
          },
          x.createElement("stop", {
            id: "swap-icon_svg__exFXbPomaOW3-fill-0",
            offset: "0%",
            stopColor: "#76a0fc",
          }),
          x.createElement("stop", {
            id: "swap-icon_svg__exFXbPomaOW3-fill-1",
            offset: "100%",
            stopColor: "#b9aafd",
          })
        )
      )),
    x.createElement(
      "g",
      { transform: "translate(0 -.2)" },
      xl ||
        (xl = x.createElement("circle", {
          r: 17,
          fill: "url(#swap-icon_svg__exFXbPomaOW3-fill)",
          transform: "translate(17 17.2)",
        })),
      x.createElement("path", {
        fill: "#1f2333",
        fillRule: "evenodd",
        d: "m11 9.794 5.703 5.636-1.406 1.423L12 13.594V22.7h-2v-9.106l-3.297 3.259-1.406-1.423z",
        clipRule: "evenodd",
        style: {
          animation:
            "exFXbPomaOW4_to__to 3200ms linear infinite normal forwards",
        },
      }),
      x.createElement("path", {
        fill: "#1f2333",
        fillRule: "evenodd",
        d: "M23 11.2v9.106l3.297-3.258 1.406 1.422L22 24.106l-5.703-5.636 1.406-1.422L21 20.306V11.2z",
        clipRule: "evenodd",
        style: {
          animation:
            "exFXbPomaOW5_to__to 2600ms linear infinite normal forwards",
        },
      })
    )
  );
function jc({ availableChains: s, onDestinationChange: t }) {
  const { t: r } = ge(),
    { chainId: l, switchChain: a } = oe(),
    [n, d] = x.useState();
  function o() {
    d(l), i(n);
  }
  function i(b) {
    a(b);
  }
  return (
    x.useEffect(() => {
      n && t && t(n);
    }, [n]),
    e.jsxs("div", {
      className: "flex flex-col items-end gap-2 md:flex-row md:gap-3",
      children: [
        e.jsxs("div", {
          className: "flex w-full flex-1 flex-col",
          children: [
            e.jsx("p", {
              className: "mb-1 font-bold dark:text-black-100",
              children: r("Origin "),
            }),
            e.jsx(Ys.Chain, {
              state: [l, i],
              options: s == null ? void 0 : s.filter((b) => b !== n),
            }),
          ],
        }),
        e.jsx("button", {
          className: `mx-auto ${!l || !n ? "disabled" : ""}`,
          onClick: o,
          disabled: !l || !n,
          children: e.jsx("div", {
            id: `swapIcon${!l || !n ? "-disabled" : ""}`,
            className: `md:mb-1.5 ${
              !l || !n ? "" : "cursor-pointer"
            } !h-8 !w-8`,
            children: e.jsx(cn, {}),
          }),
        }),
        e.jsxs("div", {
          className: "-mt-4 flex w-full flex-1 flex-col md:mt-0",
          children: [
            e.jsx("p", {
              className: "mb-1 font-bold dark:text-black-100",
              children: r("Destination "),
            }),
            e.jsx(Ys.Chain, {
              state: [n, d],
              options: s == null ? void 0 : s.filter((b) => b !== l),
            }),
          ],
        }),
      ],
    })
  );
}
const gc = {
    testnet: "https://api-testnet.layerzero-scan.com",
    mainnet: "https://api-mainnet.layerzero-scan.com",
    sandbox: "https://api-sandbox.layerzero-scan.com",
  },
  dn = (s, t) => {
    const r = gc[s];
    if (!r) throw new Error(`No endpoint for env ${s}`);
    const l = Gs.create({ baseURL: r });
    return {
      async getMessagesBySrcTxHash(a) {
        if (!a) throw new Error("srcTxHash must be provided");
        const { data: n } = await l.get(`/tx/${a}`);
        return n;
      },
    };
  },
  Nc = ({
    text: s,
    closingFunction: t,
    successful: r,
    failed: l,
    onClick: a,
  }) => {
    const { t: n } = ge();
    return e.jsxs("div", {
      className: `angle-notification dark:bg-black-400 relative flex items-start rounded-md border border-l-[6px] p-4 ${
        l
          ? "dark:border-pink-500"
          : r
          ? "dark:border-green-500"
          : "dark:border-blue-500"
      } `,
      children: [
        l
          ? e.jsx(T, { mui: "Error", className: "mr-2 dark:text-pink-500" })
          : r
          ? e.jsx(T, { mui: "TaskAlt", className: "mr-2 dark:text-green-500" })
          : e.jsx(T, { mui: "Pending", className: "mr-2 dark:text-blue-500" }),
        e.jsxs("div", {
          className: "pr-4",
          children: [
            e.jsx(Y, {
              look: "text",
              onlyIcon: e.jsx(T, { mui: "CloseOutlined" }),
              onClick: t,
              className: "!absolute !right-2 !top-2 dark:!text-peach-500",
            }),
            e.jsx("p", {
              className: "text-sm dark:text-sand-500",
              children: s,
            }),
            e.jsx(Y, {
              type: "button",
              size: "small",
              look: "underlined",
              onClick: a,
              children: n("Check Bridge tx"),
            }),
          ],
        }),
      ],
    });
  },
  fl = "/assets/arrow-gradient-f21bca44.svg";
dn("mainnet");
function yc({ txn: s, txState: t, visible: r, token: l, setVisible: a }) {
  var o, i, b, h;
  const { t: n } = ge(),
    { bridges: d } = ps();
  return e.jsxs(us, {
    centered: !1,
    title: "Bridge status",
    visible: r,
    onCancel: () => {
      a(!1);
    },
    children: [
      e.jsxs("div", {
        className: "flex justify-between flex-col md:flex-row gap-4 md:gap-0",
        children: [
          e.jsxs("div", {
            className: "flex min-h-[140px] min-w-[130px] flex-col items-center",
            children: [
              e.jsx("p", {
                className: "font-bold dark:text-black-100",
                children: n("Origin "),
              }),
              e.jsx("figure", {
                className: "my-1.5 flex h-10 w-10 items-center justify-center",
                children: e.jsx("img", {
                  className: "h-auto w-10",
                  src: tt[s == null ? void 0 : s.chainId],
                  alt: "network",
                }),
              }),
              e.jsx("span", {
                className: "font-bold",
                children: ms[s == null ? void 0 : s.chainId],
              }),
              e.jsx("div", {
                className: "mt-3 flex h-8 items-center",
                children:
                  t != null && t.srcTxHash
                    ? e.jsxs("a", {
                        className: "button small secondary",
                        href: Ps(
                          s == null ? void 0 : s.chainId,
                          t == null ? void 0 : t.srcTxHash,
                          "transaction"
                        ),
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          n("Origin tx"),
                          " ",
                          e.jsx(ma, { className: "small ml-1" }),
                        ],
                      })
                    : e.jsx(ct, {
                        sx: { bgcolor: "#333a54" },
                        width: 120,
                        height: 32,
                      }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-col items-center justify-center",
            children: [
              e.jsx(T, {
                mui: "ArrowDownward",
                className: "md:!hidden mb-4 dark:text-peach-500",
              }),
              e.jsx("div", {
                className: "hidden md:block arrow-wrapper mb-2 overflow-hidden",
                children:
                  t != null && t.srcTxHash
                    ? e.jsx("img", {
                        className: "arrow-moving",
                        src: fl,
                        alt: "gradient arrow",
                      })
                    : e.jsx(Dl.img, {
                        initial: { x: "-30px" },
                        animate: { x: 0 },
                        transition: {
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          repeatType: "reverse",
                        },
                        className: "arrow-moving",
                        src: fl,
                        alt: "gradient arrow",
                      }),
              }),
              e.jsxs("p", {
                className: "flex items-center font-bold dark:text-sand-500",
                children: [
                  `${hs(
                    M.from(s == null ? void 0 : s.amount.value).toNumber()
                  )} ${s == null ? void 0 : s.symbol}`,
                  e.jsx(Be, {
                    className: "ml-2 w-6",
                    token: s == null ? void 0 : s.symbol,
                  }),
                ],
              }),
              e.jsx("div", {
                className: "mt-2 md:mt-4 flex h-8 items-center",
                children:
                  t != null && t.srcTxHash
                    ? e.jsxs("a", {
                        className: "button small secondary",
                        href: `https://layerzeroscan.com/tx/${
                          t == null ? void 0 : t.srcTxHash
                        }`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          n("LayerZero tx"),
                          " ",
                          e.jsx(ma, { className: "small ml-1" }),
                        ],
                      })
                    : e.jsx(ct, {
                        sx: { bgcolor: "#333a54" },
                        width: 120,
                        height: 32,
                      }),
              }),
              e.jsx(T, {
                mui: "ArrowDownward",
                className: "md:!hidden mt-4 dark:text-peach-500",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex min-h-[140px] min-w-[150px] flex-col items-center",
            children: [
              e.jsx("p", {
                className: "font-bold dark:text-black-100",
                children: n("Destination "),
              }),
              e.jsx("figure", {
                className: "my-1.5 flex h-10 w-10 items-center justify-center",
                children: e.jsx("img", {
                  className: "h-auto w-10",
                  src: tt[s == null ? void 0 : s.toChainId],
                  alt: "network",
                }),
              }),
              e.jsx("span", {
                className: "font-bold",
                children: ms[s == null ? void 0 : s.toChainId],
              }),
              e.jsx("div", {
                className: "mt-3 flex h-8 items-center",
                children:
                  t != null && t.dstTxHash
                    ? e.jsxs("a", {
                        className: "button small secondary",
                        href: Ps(
                          s == null ? void 0 : s.toChainId,
                          t == null ? void 0 : t.dstTxHash,
                          "transaction"
                        ),
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          n("Destination tx"),
                          " ",
                          e.jsx(ma, { className: "small ml-1" }),
                        ],
                      })
                    : e.jsx(ct, {
                        sx: { bgcolor: "#333a54" },
                        width: 120,
                        height: 40,
                      }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-4",
        children: [
          !(t != null && t.dstTxHash) &&
            e.jsxs("p", {
              className: "dark:text-black-200",
              children: [
                "Your funds should arrive on your address at the destination chain in a few minutes.",
                t != null && t.srcTxHash
                  ? e.jsx("a", {
                      href: `https://layerzeroscan.com/tx/${t.srcTxHash}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "dim dark:text-purple-500",
                      children:
                        "Follow your bridge transaction on LayerZero scan.",
                    })
                  : e.jsx(ct, { sx: { bgcolor: "#333a54" }, width: 160 }),
              ],
            }),
          e.jsx("div", {
            className: `${
              (h =
                (b =
                  (i =
                    (o = d == null ? void 0 : d.layerZero) == null
                      ? void 0
                      : o[s == null ? void 0 : s.toChainId]) == null
                    ? void 0
                    : i[s == null ? void 0 : s.symbol]) == null
                  ? void 0
                  : b.credit) != null && h.gt(0)
                ? "max-h-96"
                : "max-h-0"
            } relative mt-4 flex items-center overflow-hidden rounded-md !transition-all !duration-1000 before:absolute before:left-0 before:top-0 before:h-1.5 before:w-full before:rounded-t-md before:dark:bg-peach-500`,
            children: e.jsx("div", {
              className: "mt-2 rounded-md p-4 dark:bg-black-500",
              children: e.jsxs("div", {
                className: "mb-2 flex items-start",
                children: [
                  e.jsx(Rl, { className: "mr-2 dark:text-peach-500" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "mb-2 font-bold dark:text-sand-500",
                        children: n("You received lz-EURA instead of EURA"),
                      }),
                      e.jsxs("p", {
                        className: "dark:text-sand-500",
                        children: [
                          n("To find out how you can exchange them for EURA, "),
                          e.jsx("a", {
                            href: ke.bridgesLZ,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "dim inline dark:text-purple-500",
                            children: n("check out this guide."),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
const wc = dn("mainnet");
function kc({ txn: s, onTxnRemove: t }) {
  var b, h, u, p, v, N, w, c;
  const [r, l] = x.useState(!1),
    [a, n] = x.useState(null),
    [d, o] = x.useState(),
    { bridges: i } = ps();
  return (
    x.useEffect(() => {
      clearInterval(a);
      const A = async () => {
        s.hash &&
          wc.getMessagesBySrcTxHash(s.hash).then((g) => {
            o(g.messages[0]);
          });
      };
      A();
      const f = setInterval(A, 3e3);
      return n(f), () => clearInterval(f);
    }, [s]),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(yc, { txn: s, visible: r, setVisible: l, txState: d }),
        e.jsx(Nc, {
          closingFunction: () => {
            t && t(s);
          },
          failed: (d == null ? void 0 : d.status) === "FAILED",
          successful:
            (d == null ? void 0 : d.status) === "DELIVERED" &&
            !(
              (p =
                (u =
                  (h =
                    (b = i == null ? void 0 : i.layerZero) == null
                      ? void 0
                      : b[s == null ? void 0 : s.toChainId]) == null
                    ? void 0
                    : h[s == null ? void 0 : s.symbol]) == null
                  ? void 0
                  : u.credit) != null && p.gt(0)
            ),
          text: `${
            (d == null ? void 0 : d.status) === "FAILED"
              ? "Failed:"
              : (d == null ? void 0 : d.status) === "DELIVERED" &&
                (c =
                  (w =
                    (N =
                      (v = i == null ? void 0 : i.layerZero) == null
                        ? void 0
                        : v[s == null ? void 0 : s.toChainId]) == null
                      ? void 0
                      : N[s == null ? void 0 : s.symbol]) == null
                    ? void 0
                    : w.credit) != null &&
                c.gt(0)
              ? "Partial success:"
              : (d == null ? void 0 : d.status) === "DELIVERED"
              ? "Success:"
              : "Pending:"
          } ${hs(M.from(s.amount.value).toNumber())} ${s.symbol} from ${
            ms[s.chainId]
          } to ${ms[s.toChainId]}.`,
          onClick: () => l(!0),
        }),
      ],
    })
  );
}
function nr({ value: s, symbols: t, onChange: r, extra: l }) {
  return (
    x.useEffect(() => {
      t &&
        !t.find((a) => {
          var n, d;
          return (
            ((n = s == null ? void 0 : s.toLowerCase) == null
              ? void 0
              : n.call(s)) ===
            ((d = a == null ? void 0 : a.toLowerCase) == null
              ? void 0
              : d.call(a))
          );
        }) &&
        r(t.find((a) => a));
    }, [s, t]),
    e.jsx(Ys, {
      state: [s, r],
      size: "s",
      options:
        t == null
          ? void 0
          : t.map((a) => ({
              label: e.jsxs(e.Fragment, {
                children: [
                  e.jsx(T, { size: "l", token: a }),
                  a,
                  l == null ? void 0 : l(a),
                ],
              }),
              value: a,
            })),
    })
  );
}
const vc = ({ slippage: s, slippageValues: t, setSlippage: r }) =>
    e.jsx("div", {
      className: "mr-1 flex items-center gap-1",
      children: t.map((l) =>
        e.jsxs(
          Y,
          {
            type: "tag",
            size: "small",
            look: "primary",
            enabled: l === s,
            onClick: () => r(l),
            children: [l, " %"],
          },
          l
        )
      ),
    }),
  Ac = () => {
    const { allowanceType: s, setAllowanceType: t } = Ze();
    return e.jsxs("div", {
      className: "flex justify-between",
      children: [
        e.jsx(se, {
          placement: "right",
          className: "font-bold",
          dark: !0,
          title:
            "Specify the number of tokens you approve the dApp's smart contract to transfer from your wallet. Choose whether to grant infinite approval or limit it to the transaction amount.",
          children: "Approval",
        }),
        e.jsx("div", {
          className: "ml-8 flex items-center",
          children: e.jsxs(da.Group, {
            onChange: (r) => {
              localStorage.setItem(
                "ALLOWANCE_TYPE",
                JSON.stringify(r.target.value)
              ),
                t(r.target.value);
            },
            value: s,
            children: [
              e.jsx(da, {
                className: "text-sm font-bold",
                value: "limited",
                children: "Limited",
              }),
              e.jsx(da, {
                className: "text-sm font-bold",
                value: "unlimited",
                children: "Unlimited",
              }),
            ],
          }),
        }),
      ],
    });
  },
  Sc = ({
    expertModeVisible: s,
    setExpertModeVisible: t,
    slippage: r,
    setSlippage: l,
    setSlippageWarning: a,
    recipient: n,
    setRecipient: d,
    pageName: o,
  }) => {
    const { allowPermit: i, setAllowPermit: b } = Ze(),
      h = (u) => {
        l(u),
          u > 10
            ? a("Your transaction might be frontrun")
            : u < 0.01
            ? (a(null), l(0.01))
            : a(null);
      };
    return e.jsx(us, {
      title: `${o} settings`,
      wrapClassName: "modal-medium",
      visible: s,
      onCancel: () => {
        t(!1);
      },
      children: e.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          e.jsx(bt, {
            className: "!p-0",
            checked: i,
            onChange: () => {
              localStorage.setItem("USE_PERMIT", JSON.stringify(!i)), b(!i);
            },
            children: e.jsx(se, {
              className: "dark:text-sand-500",
              placement: "right",
              dark: !0,
              title:
                "Permits are offchain signatures that allow you to grant token approvals to the dApp's smart contract. It removes the need to execute new onchain transaction for each signature.",
              children: "Use Permit",
            }),
          }),
          e.jsx(Ac, {}),
          e.jsxs(
            "div",
            {
              className:
                "flex flex-wrap w-full items-center justify-between gap-2",
              children: [
                e.jsx(se, {
                  className: "flex items-center",
                  placement: "right",
                  dark: !0,
                  title:
                    "Slippage is the difference between the expected and actual outcome of a trade due to market fluctuations. Set your slippage tolerance to control the minimum amount of tokens you're willing to receive.",
                  children: e.jsx("p", {
                    className: "font-bold",
                    children: "Slippage tolerance",
                  }),
                }),
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsx(vc, {
                      slippageValues: [0.1, 0.5, 1, 2],
                      slippage: r,
                      setSlippage: h,
                    }),
                    e.jsx(Me, {
                      className: "w-16",
                      type: "number",
                      size: "s",
                      state: [r, h],
                      suffix: "%",
                    }),
                  ],
                }),
              ],
            },
            "slippage-protection"
          ),
          !!d &&
            e.jsxs(
              "div",
              {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                  e.jsx(se, {
                    className: "flex items-center",
                    placement: "right",
                    dark: !0,
                    title:
                      "Choose a different address for receiving the funds. By default, the connected wallet address is used as recipient.",
                    children: e.jsx("p", {
                      className: "font-bold",
                      children: "Destination address",
                    }),
                  }),
                  e.jsx(Me.Address, {
                    className: "w-[40ch]",
                    look: "primary",
                    size: "s",
                    id: "recipient",
                    placeholder: "Add destination address",
                    state: [n, d],
                  }),
                ],
              },
              "recipient"
            ),
        ],
      }),
    });
  },
  or = ({
    wrapperClassname: s,
    chains: t,
    pageSettings: r,
    refreshData: l,
  }) => {
    const { chainId: a, switchChain: n } = oe(),
      [d, o] = x.useState(!1),
      { defaultSlippage: i, setSlippage: b } = Ze(),
      h = zn();
    return e.jsxs("div", {
      className: `${s} ml-auto flex justify-end items-center gap-2 my-2`,
      children: [
        !!t &&
          e.jsx(Ys.Chain, {
            className: "-mr-2",
            size: "s",
            state: [a, n],
            look: "text",
            options: t,
          }),
        !!r &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(Y, {
                onClick: () => o(!0),
                look: "text",
                className: "dim",
                leftIcon: e.jsx(T, { svg: "settingsBars" }),
              }),
              e.jsx(Sc, {
                pageName: h,
                recipient: r == null ? void 0 : r.recipient,
                setRecipient: r == null ? void 0 : r.setRecipient,
                slippage: i,
                setSlippage: b,
                setSlippageWarning: r == null ? void 0 : r.setSlippageWarning,
                expertModeVisible: d,
                setExpertModeVisible: o,
              }),
            ],
          }),
        !!l &&
          e.jsx(Y, {
            type: "button",
            onlyIcon: e.jsxs(se, {
              icon: !1,
              overlayClassName: "p-sm",
              placement: "left",
              title: "Refresh market data",
              children: [
                e.jsx(T, {
                  svg: "refreshData",
                  className: `medium !transition-all ${
                    l != null && l.loading
                      ? "animate-spin"
                      : "hover:rotate-90 active:rotate-45"
                  } dark:text-purple-500`,
                }),
                (l == null ? void 0 : l.lastUpdated) &&
                  !(l != null && l.loading) &&
                  e.jsx("span", {
                    className: "ml-1 text-sm font-bold",
                    children: `${l == null ? void 0 : l.lifetime}s`,
                  }),
              ],
            }),
            look: "text",
            onClick: l == null ? void 0 : l.refresh,
          }),
      ],
    });
  },
  ir = ({
    loading: s,
    exchangeRate: t,
    gas: r,
    routes: l,
    recipient: a,
    priceImpact: n,
    receiveAtLeast: d,
    slippage: o,
  }) => {
    const [i, b] = x.useState(!1),
      h =
        !!o ||
        (d == null ? void 0 : d.condition) ||
        !(n != null && n.noSlippage) ||
        !!(a != null && a.recipient) ||
        !!(l != null && l.condition);
    return e.jsxs("div", {
      className: "rounded-lg dark:bg-black-500",
      children: [
        e.jsxs("div", {
          className: "flex flex-wrap gap-2 md:flex-nowrap",
          children: [
            !!r &&
              e.jsxs("div", {
                className: `flex flex-1 flex-wrap items-center ${
                  t ? "justify-between" : "justify-end"
                } gap-1 pl-3 pr-3 py-2 md:pr-0`,
                children: [
                  !!t &&
                    e.jsx(Te, {
                      loading: s,
                      className: "dark:!text-black-200",
                      value: e.jsx("p", {
                        className: "dark:text-black-100",
                        children: !!t && t,
                      }),
                    }),
                  !!r && r,
                ],
              }),
            o ||
            (d != null && d.condition) ||
            (n != null && n.noSlippage) ||
            (a != null && a.recipient) ||
            l
              ? e.jsx(Y, {
                  type: "button",
                  size: "small",
                  onlyIcon: !0,
                  look: "text",
                  className:
                    "border-l dark:border-purple-500 !rounded-none py-1",
                  onClick: () => b(!i),
                  rightIcon: e.jsx(T, {
                    mui: "KeyboardArrowDownOutlined",
                    className: `${i && "rotate-180"} dark:!text-sand-500`,
                  }),
                })
              : e.jsx("span", { className: "ml-0" }),
          ],
        }),
        h &&
          e.jsx(jt, {
            className: "no-cursor pb-2 dark:bg-black-500 rounded-lg",
            ghost: !0,
            activeKey: i ? 1 : 0,
            children: e.jsxs(
              jt.Panel,
              {
                showArrow: !1,
                header: e.jsx(e.Fragment, {}),
                className: "",
                children: [
                  e.jsx("hr", {
                    className:
                      "border-gradient-multiple before:!rotate-180 before:!rounded-none before:!pt-0",
                  }),
                  e.jsxs("div", {
                    className: "px-3",
                    children: [
                      !!o &&
                        e.jsxs("div", {
                          className:
                            "flex w-full items-center justify-between py-1.5",
                          children: [
                            e.jsx(se, {
                              overlayClassName: "p-sm",
                              placement: "right",
                              dark: !0,
                              icon: !1,
                              title:
                                "You can manually update your slippage tolerance on your swap settings above",
                              children: e.jsx("p", {
                                className: "dark:text-black-100 text-sm",
                                children: "Slippage tolerance",
                              }),
                            }),
                            e.jsx(Te, {
                              loading: s,
                              className: "dark:!text-black-200",
                              value: e.jsxs("p", {
                                className:
                                  "font-bold text-sm dark:text-sand-500",
                                children: [o, " %"],
                              }),
                            }),
                          ],
                        }),
                      (d == null ? void 0 : d.condition) &&
                        e.jsxs("div", {
                          className:
                            "flex w-full items-center justify-between mb-1.5",
                          children: [
                            e.jsx(se, {
                              dark: !0,
                              overlayClassName: "p-sm",
                              className: "flex items-center",
                              placement: "right",
                              icon: !1,
                              title:
                                "Your transaction will revert if you were to get less than this amount of tokens after slippage.",
                              children: e.jsx("p", {
                                className: "dark:text-black-100 text-sm",
                                children: "Receive at least",
                              }),
                            }),
                            e.jsx(Te, {
                              loading: s,
                              className: "dark:!text-black-200",
                              value: d.node,
                            }),
                          ],
                        }),
                      !!(n != null && n.noSlippage) &&
                        e.jsx("div", {
                          className: "flex items-center",
                          children: e.jsxs("div", {
                            className:
                              "flex w-full items-center justify-between pb-1.5",
                            children: [
                              e.jsxs("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                  e.jsx("p", {
                                    className: "dark:text-black-100 text-sm",
                                    children: "Price impact",
                                  }),
                                  (n == null ? void 0 : n.priceImpact) > 3 &&
                                    e.jsx(se, {
                                      overlayClassName: "p-sm",
                                      placement: "right",
                                      icon: !1,
                                      dark: !0,
                                      title:
                                        "The swap you are about to execute might have an important price impact",
                                      children: e.jsx(T, {
                                        mui: "WarningOutlined",
                                        size: "s",
                                        className: "dark:text-coral-500",
                                      }),
                                    }),
                                  e.jsx(se, {
                                    overlayClassName: "p-sm",
                                    className:
                                      "flex items-center text-lg font-bold",
                                    placement: "right",
                                    icon: !1,
                                    dark: !0,
                                    title:
                                      "The difference between the estimated execution price and the current market price",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  e.jsx(T, {
                                    svg: "priceImpact",
                                    className: "mr-1 w-6",
                                    alt: "a token with waves",
                                  }),
                                  e.jsx(Te, {
                                    loading: s,
                                    className: "dark:!text-black-200",
                                    value: n == null ? void 0 : n.node,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      !!(a != null && a.recipient) &&
                        e.jsxs("div", {
                          className:
                            "flex w-full items-center justify-between pb-1.5",
                          children: [
                            e.jsx("p", {
                              className: "dark:text-black-100 text-sm",
                              children: "Recipient",
                            }),
                            e.jsx(Te, {
                              loading: s,
                              className: "dark:!text-black-200",
                              value: a == null ? void 0 : a.node,
                            }),
                          ],
                        }),
                      !!l &&
                        l.condition &&
                        e.jsxs("div", {
                          className:
                            "flex w-full items-center justify-between pb-1.5",
                          children: [
                            e.jsxs("div", {
                              className:
                                "text-sm flex items-center dark:text-black-100",
                              children: [
                                "Routing",
                                e.jsx(T, {
                                  svg: "routes",
                                  className: "ml-2 h-auto",
                                  size: "l",
                                  alt: "routes logo",
                                }),
                              ],
                            }),
                            e.jsx(Te, {
                              loading: s,
                              className: "dark:!text-black-200",
                              value: l == null ? void 0 : l.node,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              },
              "1"
            ),
          }),
      ],
    });
  },
  Ks = {
    [je.MAINNET]: "ETH",
    [je.ARBITRUM]: "ETH",
    [je.OPTIMISM]: "ETH",
    [je.BASE]: "ETH",
    [je.XLAYER]: "OKB",
  };
function hl({ defaultToken: s, onDestinationChainChange: t }) {
  var z;
  const r = $a(),
    l = Nt(),
    [a, n] = x.useState(
      s ?? ((z = r.pathname.split("/")) == null ? void 0 : z[2])
    ),
    [d, o] = x.useState(),
    {
      address: i,
      gasPrice: b,
      tokens: h,
      spy: u,
      isContract: p,
      chainId: v,
      ethBalance: N,
      prices: w,
    } = oe(),
    [c, A] = x.useState(),
    [f, g] = x.useState(),
    [, j] = x.useState(null),
    { allowPermit: k } = Ze();
  x.useEffect(() => {
    var B, I;
    console.log((B = r.pathname.split("/")) == null ? void 0 : B[2]),
      n((I = r.pathname.split("/")) == null ? void 0 : I[2]);
  }, [r]);
  const S = bs(),
    {
      gas: m,
      valid: y,
      availableChains: C,
      availableTokens: $,
      approve: P,
      approval: R,
      hasPermit: L,
      send: O,
      balance: E,
      originLimit: U,
      destinationLimit: _,
      txns: F,
      removeTxn: G,
    } = bc(c && c !== "" ? c : i, d, a, f),
    re = k && !u ? a && !p && L : !1,
    D = 10,
    V = x.useMemo(() => m && b && ht.from(m.add(b)), [m, b]),
    W = V && N && N.gt(V.sub(V.div(D))),
    me = (B) => hs(Number(Zs.formatUnits(B, 18)), 3),
    Ne = x.useMemo(() => {
      if (!V) return;
      const B = (Ks == null ? void 0 : Ks[v]) ?? dt[v];
      return Number.parseFloat(me(V)) * (w == null ? void 0 : w[B]);
    }, [m, V, v, w]),
    be =
      (!!U && (d == null ? void 0 : d.gt(U))) ||
      (!!_ && (d == null ? void 0 : d.gt(_)));
  function ue(B) {
    var ee;
    const I =
      B ?? ((ee = r.pathname.split("/")) == null ? void 0 : ee[2]) ?? "USDA";
    n(I), B && l(`${xe.bridge}/${I}`, { replace: !1 });
  }
  const ie = V && `~${me(V)} ${(Ks == null ? void 0 : Ks[v]) ?? dt[v]}`;
  x.useMemo(() => {
    t == null || t(f);
  }, [f]);
  const ve = x.useMemo(() => {
    if (!f) return "Select a destination chain";
    if (!d) return "Enter amount";
  }, [f, d]);
  return e.jsxs("div", {
    className:
      "-mt-4 flex flex-col gap-3 p-4 pt-2 pb-6 md:pb-10 md:px-5 md:pt-3",
    children: [
      e.jsx(or, {
        wrapperClassname: "-mb-2",
        pageSettings: { recipient: c, setRecipient: A, setSlippageWarning: j },
      }),
      e.jsx(jc, { onDestinationChange: g, availableChains: C }),
      e.jsx(Me.Int256, {
        placeholder: "0.0",
        look: "secondary",
        classNames: { subContainer: "!rounded-xl" },
        state: [d, o],
        header: [
          e.jsxs(
            "span",
            {
              className: "text-uppercase",
              children: [
                "Bridge ",
                d &&
                  e.jsxs("span", {
                    className: "dark:text-black-200",
                    children: ["~", S(d == null ? void 0 : d.toNumber())],
                  }),
              ],
            },
            "bridge-amount"
          ),
          e.jsx(rt, { value: E, onClick: o }, "token-bridger"),
        ],
        suffix: e.jsx(nr, {
          value: a,
          onChange: ue,
          symbols: ($ == null ? void 0 : $.map(({ symbol: B }) => B)) ?? [
            "USDA",
          ],
        }),
      }),
      i &&
        i !== st &&
        f &&
        y &&
        e.jsx(ir, {
          loading:
            !f &&
            Number.isNaN(
              Math.min(
                U == null ? void 0 : U.toNumber(),
                _ == null ? void 0 : _.toNumber()
              )
            ),
          gas: e.jsx(Y, {
            className: `${
              pt.L2.some((B) => B === v) && "hover:dark:!text-sand-500"
            } text-sm`,
            onClick: () =>
              !pt.L2.some((B) => B === v) &&
              window.open(Ps(v, "", "gas"), "_blank"),
            look: "text",
            leftIcon: e.jsx(T, {
              mui: "LocalGasStationSharp",
              className: "dark:!text-blue-500",
            }),
            children: e.jsx(se, {
              title: V ? ie : "-",
              icon: !1,
              children: e.jsx(Te, {
                loading: !m,
                value:
                  m &&
                  e.jsx("span", {
                    className: "whitespace-nowrap",
                    children: S(Ne),
                  }),
              }),
            }),
          }),
        }),
      f &&
        e.jsxs("div", {
          className:
            "relative flex items-center justify-between rounded-md p-4 py-3 dark:bg-black-500",
          children: [
            e.jsxs("p", {
              className: "text-sm font-bold dark:text-sand-500",
              children: [
                "Currently,",
                " ",
                e.jsx(Te, {
                  loading:
                    !f ||
                    Number.isNaN(
                      Math.min(
                        U == null ? void 0 : U.toNumber(),
                        _ == null ? void 0 : _.toNumber()
                      )
                    ),
                  value: e.jsx("span", {
                    className: be
                      ? "dark:text-coral-500"
                      : "dark:text-peach-500",
                    children: `${be ? "only " : " "}${Ce(
                      Math.min(
                        U == null ? void 0 : U.toNumber(),
                        _ == null ? void 0 : _.toNumber()
                      )
                    )} ${a}`,
                  }),
                }),
                " ",
                "can be bridged from ",
                ms[v],
                " to ",
                ms[f],
                " ",
                e.jsx("br", {}),
                "Limit from ",
                ms[v],
                ":",
                " ",
                e.jsx(Te, {
                  loading: Number.isNaN(
                    Math.min(U == null ? void 0 : U.toNumber())
                  ),
                  value: Ce(Math.min(U == null ? void 0 : U.toNumber())),
                }),
                ". ",
                "Limit to ",
                ms[f],
                ":",
                " ",
                e.jsx(Te, {
                  loading: Number.isNaN(
                    Math.min(_ == null ? void 0 : _.toNumber())
                  ),
                  value: Ce(Math.min(_ == null ? void 0 : _.toNumber())),
                }),
                ".",
              ],
            }),
            e.jsx(se, {
              className: "block",
              title: e.jsxs("p", {
                className: "text-center text-sm dark:text-black-100",
                children: [
                  "For security reasons, bridge volumes are limited both hourly and globally. If you encounter any issue with the limits or with this page, check out our comprehensive",
                  " ",
                  e.jsx("a", {
                    className: "dim dark:text-purple-500",
                    href: ke.bridgesDoc,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "user guide here.",
                  }),
                ],
              }),
            }),
          ],
        }),
      !re &&
        !R &&
        e.jsx(ca, {
          className: "large w-full !rounded-full",
          usePermit: re,
          useETH: !1,
          amount: d,
          error: ve,
          approvalState: Os.NOT_APPROVED,
          approve: P,
        }),
      (re || R) &&
        e.jsx(We, {
          usePermit: re,
          disabled: !y || (d && E && E.lt(d)) || (m && !W),
          onClick: O,
          className: "large w-full !rounded-full",
          children: "Bridge",
        }),
      F &&
        e.jsx("div", {
          className:
            "notification-frame flex gap-2 max-h-56 overflow-y-scroll rounded-md flex-col fixed bottom-28 z-30 md:bottom-16 right-4",
          children: F.map((B) => e.jsx(kc, { txn: B, onTxnRemove: G }, B.hash)),
        }),
    ],
  });
}
const ja = ({ presetTokenSymbol: s }) => {
    const { setContracts: t } = Ze(),
      { chainId: r } = oe(),
      [l, a] = x.useState(),
      [n, d] = [r, l].map((i) => {
        var b, h, u, p, v;
        return [
          {
            address: (b = J(i, "EUR")) == null ? void 0 : b.AgToken,
            name: `EURA - ${ms[i]}`,
            chainId: i,
          },
          {
            address: (h = J(i, "USD")) == null ? void 0 : h.AgToken,
            name: `USDA - ${ms[i]}`,
            chainId: i,
          },
          {
            address: (u = J(i)) == null ? void 0 : u.ANGLE,
            name: `ANGLE - ${ms[i]}`,
            chainId: i,
          },
          {
            address:
              (v = (p = J(i, "EUR")) == null ? void 0 : p.bridges) == null
                ? void 0
                : v.LayerZero,
            name: `Layer Zero Bridge EURA - ${ms[i]}`,
            chainId: i,
          },
        ];
      });
    x.useEffect(() => {
      t([...n, ...d]);
    }, [n, t, d]);
    const o = yt.bridge.map((i) => i);
    return e.jsx(zl, {
      loader: pc,
      chains: o,
      children: e.jsx("section", {
        className: "container flex",
        children: e.jsxs("div", {
          className:
            "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 mx-auto md:w-3/4 lg:w-1/2 xl:w-2/5",
          children: [
            e.jsx("hr", {
              className:
                "border-gradient-multiple mb-6 before:!rounded-b-none before:!px-0 before:!py-[5px]",
            }),
            s
              ? e.jsx(hl, { defaultToken: s, onDestinationChainChange: a })
              : e.jsxs(ft, {
                  children: [
                    e.jsx(Pe, {
                      path: ":token",
                      element: e.jsx(hl, { onDestinationChainChange: a }),
                    }),
                    e.jsx(Pe, {
                      index: !0,
                      element: e.jsx(Zt, { to: "USDA" }),
                    }),
                    e.jsx(Pe, {
                      path: "undefined",
                      element: e.jsx(Zt, { to: "../USDA" }),
                    }),
                  ],
                }),
          ],
        }),
      }),
    });
  },
  Cc = "/assets/earn-cdc7a1ae.svg",
  Ec = ({ visible: s, setVisible: t, incentives: r }) => {
    const [l, a] = x.useState(null),
      [n, d] = x.useState(new Array(r == null ? void 0 : r.length).fill(!0)),
      { address: o, provider: i, chainId: b } = oe();
    ps();
    const { execTransactions: h } = rs(),
      { t: u } = ge(),
      p = (N, w) => {
        const c = [...n];
        (c[w] = N.target.checked), d(c);
      };
    x.useEffect(() => {
      var w, c, A, f, g, j, k;
      const N = [...n];
      for (let S = 0; S < (r == null ? void 0 : r.length); S++)
        !(
          (A =
            (c = (w = r[S]) == null ? void 0 : w.rewardTokens) == null
              ? void 0
              : c[0]) != null && A.amount
        ) ||
        ((j =
          (g = (f = r[S]) == null ? void 0 : f.rewardTokens) == null
            ? void 0
            : g[0]) == null
          ? void 0
          : j.amount) < 1 ||
        ((k = r[S]) != null && k.isMerkl)
          ? (N[S] = !1)
          : (N[S] = !0);
      d(N);
    }, [s]),
      x.useEffect(() => {
        a(
          r
            ? r
                .filter((N, w) => !N.isMerkl && n[w])
                .map((N) => {
                  var w;
                  return (w = N == null ? void 0 : N.rewardTokens[0]) == null
                    ? void 0
                    : w.amount;
                })
                .filter((N) => N > 0)
                .reduce((N, w) => N + w, 0)
            : 0
        );
      }, [r, n]);
    const v = async (N) => {
      const w = r.map((c) => c.address).filter((c, A) => n[A]);
      await h.claim_all_rewards(N, l, o, w), t(!1);
    };
    return e.jsxs(us, {
      title: "Claim all your rewards in one transaction",
      visible: s,
      onCancel: () => {
        t(!1);
      },
      children: [
        e.jsx("h5", {
          className: "mb-6 dark:text-sand-500",
          children: u("Select your rewards:"),
        }),
        e.jsx("div", {
          className: "mb-6",
          children:
            r &&
            r.length > 0 &&
            r.map((N, w) => {
              var c, A, f, g;
              return e.jsxs(
                "div",
                {
                  className:
                    "flex items-center border-b py-2 last:border-b-0 dark:border-black-200",
                  children: [
                    e.jsx("div", {
                      className: "flex w-1/12 flex-wrap  justify-center",
                      children: N.isMerkl
                        ? e.jsx(se, {
                            overlayClassName: "text-sm",
                            placement: "right",
                            title:
                              "These ANGLE rewards cannot be claimed here, you need to claim them through the UniswapV3 modal.",
                          })
                        : e.jsx(bt, {
                            checked: n[w],
                            defaultChecked: !0,
                            onChange: (j) => {
                              p(j, w);
                            },
                          }),
                    }),
                    e.jsx("div", {
                      className: "flex w-2/12 items-center justify-center",
                      children:
                        (c = N == null ? void 0 : N.name) != null &&
                        c.startsWith("san")
                          ? e.jsx(Be, {
                              token:
                                (A = N == null ? void 0 : N.underlyingToken) ==
                                null
                                  ? void 0
                                  : A.address,
                              className: "h-7 w-auto",
                            })
                          : e.jsx(Be, {
                              className: "mr-2 h-7 w-auto object-contain",
                              token: N == null ? void 0 : N.icon,
                            }),
                    }),
                    e.jsx("div", {
                      className: "flex w-1/2 flex-wrap items-center",
                      children: e.jsx("p", { children: N.name }),
                    }),
                    e.jsx("div", {
                      className: "w-1/4",
                      children: e.jsxs("p", {
                        className: "flex flex-wrap items-center justify-end",
                        children: [
                          as(
                            (g =
                              (f = N == null ? void 0 : N.rewardTokens) == null
                                ? void 0
                                : f[0]) == null
                              ? void 0
                              : g.amount
                          ),
                          e.jsx("img", {
                            className: "ml-2 h-5 w-auto",
                            src: Ot,
                            alt: "ANGLE logo",
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                (N.address, w)
              );
            }),
        }),
        e.jsx("div", {
          className: "mx-auto lg:w-1/2 xl:w-2/5",
          children: e.jsx(We, {
            look: "secondary",
            className: "w-full",
            disabled: l === 0,
            onClick: v,
            children:
              l !== 0
                ? e.jsxs(e.Fragment, {
                    children: [
                      u("Claim"),
                      " ",
                      as(l),
                      " ANGLE ",
                      e.jsx("img", {
                        className: "ml-2 h-5 w-auto",
                        src: Ot,
                        alt: "angle",
                      }),
                    ],
                  })
                : "Select a farm to claim ANGLE from",
          }),
        }),
      ],
    });
  };
var cr = {},
  Pc = Ue;
Object.defineProperty(cr, "__esModule", { value: !0 });
var mn = (cr.default = void 0),
  Rc = Pc(Fe()),
  Ic = e;
mn = cr.default = (0, Rc.default)(
  (0, Ic.jsx)("path", {
    d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  }),
  "ArrowForwardOutlined"
);
const Lc = ({ apr: s }) => {
    var r, l, a, n, d, o;
    const { t } = ge();
    return e.jsxs("div", {
      className: "w-full",
      children: [
        e.jsxs("p", {
          className: "w-full text-center text-sm font-bold",
          children: ["Breakdown", e.jsx("br", {})],
        }),
        !!((r = s == null ? void 0 : s.details) != null && r.min) &&
          e.jsxs(e.Fragment, {
            children: [
              !!((l = s == null ? void 0 : s.details) != null && l.boost) &&
                e.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    e.jsx("span", {
                      className: "mr-2",
                      children: t("Your ANGLE APR"),
                    }),
                    e.jsxs("span", {
                      className: "flex",
                      children: [
                        e.jsxs("span", {
                          className: "flex text-sm",
                          children: [
                            " ",
                            as(
                              (a = s == null ? void 0 : s.details) == null
                                ? void 0
                                : a.boost
                            ),
                            " %",
                          ],
                        }),
                        e.jsx("br", {}),
                      ],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "flex justify-between",
                children: [
                  e.jsx("span", {
                    className: "mr-2",
                    children: t("Boostable ANGLE APR"),
                  }),
                  e.jsxs("span", {
                    className: "flex",
                    children: [
                      e.jsxs("span", {
                        className: "flex items-center text-sm",
                        children: [
                          as(
                            (n = s == null ? void 0 : s.details) == null
                              ? void 0
                              : n.min
                          ),
                          " ",
                          e.jsx(mn, { className: "small mx-1" }),
                          as(
                            (d = s == null ? void 0 : s.details) == null
                              ? void 0
                              : d.max
                          ),
                          " %",
                        ],
                      }),
                      e.jsx("br", {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
        !!(s != null && s.details) &&
          ((o = Object.keys(s == null ? void 0 : s.details)) == null
            ? void 0
            : o.map((i) => {
                var b, h, u;
                return ["title", "min", "max", "boost", "avg"].includes(i)
                  ? null
                  : e.jsxs(
                      "div",
                      {
                        className: `flex justify-between ${
                          ((b = s == null ? void 0 : s.details[i]) == null
                            ? void 0
                            : b.hasPosition) && "font-bold"
                        }`,
                        children: [
                          e.jsx("span", { className: "mr-2", children: t(i) }),
                          e.jsxs("span", {
                            children: [
                              (h = s == null ? void 0 : s.details[i]) != null &&
                              h.value
                                ? as(
                                    (u = s == null ? void 0 : s.details[i]) ==
                                      null
                                      ? void 0
                                      : u.value
                                  )
                                : s != null && s.details[i]
                                ? as(s == null ? void 0 : s.details[i])
                                : "-",
                              "%",
                            ],
                          }),
                        ],
                      },
                      i
                    );
              })),
      ],
    });
  },
  un = ({ card: s }) => {
    var r;
    const { t } = ge();
    return e.jsx("p", {
      className: "w-full dark:text-black-100",
      children:
        (r = s == null ? void 0 : s.description) == null
          ? void 0
          : r.map((l, a) => {
              var n;
              return (s == null ? void 0 : s.descriptionLinks[a]) === ""
                ? t(l)
                : (n = s == null ? void 0 : s.descriptionLinks[a]) != null &&
                  n.startsWith("http")
                ? e.jsx(
                    "a",
                    {
                      className: "underlined mx-1",
                      href: s == null ? void 0 : s.descriptionLinks[a],
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: t(l),
                    },
                    a
                  )
                : e.jsx(
                    Es,
                    {
                      to: xe[s == null ? void 0 : s.descriptionLinks[a]],
                      className: "underlined mx-1",
                      "aria-label": "Angle Homepage",
                      children: t(l),
                    },
                    a
                  );
            }),
    });
  };
var dr = {},
  $c = Ue;
Object.defineProperty(dr, "__esModule", { value: !0 });
var xn = (dr.default = void 0),
  Dc = $c(Fe()),
  pl = e;
xn = dr.default = (0, Dc.default)(
  [
    (0, pl.jsx)(
      "path",
      {
        d: "m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07z",
      },
      "0"
    ),
    (0, pl.jsx)(
      "path",
      {
        d: "m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52",
      },
      "1"
    ),
  ],
  "LocalFireDepartment"
);
const Oc = ({ card: s }) => {
    const { incentives: t } = ps(),
      { chainId: r, wallet: l, switchChain: a } = oe();
    return (
      ge(),
      e.jsx("div", {
        className: "flex h-full w-full items-center justify-center",
        children: e.jsx(Y, {
          type: "button",
          look: "primary",
          onClick: () => {
            var n, d;
            a(
              ((n = t[s]) == null ? void 0 : n.network) === void 0
                ? 1
                : (d = t[s]) == null
                ? void 0
                : d.network
            );
          },
          disabled: !r || !l,
          children: "Switch network to claim",
        }),
      })
    );
  },
  mr = (s, t) => {
    let r = 0;
    return (
      s.forEach((l) => {
        r += l.amount * t[l.symbol];
      }),
      r
    );
  },
  Mc = ({ card: s }) => {
    var N,
      w,
      c,
      A,
      f,
      g,
      j,
      k,
      S,
      m,
      y,
      C,
      $,
      P,
      R,
      L,
      O,
      E,
      U,
      _,
      F,
      G,
      re,
      D,
      V,
      W,
      me,
      Ne,
      be,
      ue,
      ie,
      ve,
      z,
      B,
      I,
      ee,
      le,
      X,
      q,
      fe,
      pe,
      ye;
    const { t } = ge(),
      { address: r, chainId: l, prices: a } = oe(),
      { incentives: n } = ps(),
      d = bs(),
      [o, i] = x.useState(null),
      [b, h] = x.useState(!1),
      { execTransactions: u } = rs(),
      p = (N = n[s]) == null ? void 0 : N.address;
    let v = e.jsxs("div", {
      className: "flex flex-col lg:pl-8",
      children: [
        e.jsxs("p", {
          className: "mb-1 dark:text-black-100",
          children: [
            "Staked:",
            " ",
            e.jsxs("span", {
              className: "font-bold dark:text-sand-500",
              children: [
                (A =
                  (c = (w = n[s]) == null ? void 0 : w.deposit) == null
                    ? void 0
                    : c.amount) == null
                  ? void 0
                  : A.toFixed(2),
                " ",
                (f = n[s]) == null ? void 0 : f.name,
              ],
            }),
          ],
        }),
        e.jsxs("p", {
          className: "mb-3 dark:text-black-100",
          children: [
            "Available:",
            " ",
            e.jsxs("span", {
              className: "font-bold dark:text-sand-500",
              children: [
                (k =
                  (j = (g = n[s]) == null ? void 0 : g.underlyingToken) == null
                    ? void 0
                    : j.balance) == null
                  ? void 0
                  : k.toFixed(2),
                " ",
                (S = n[s]) == null ? void 0 : S.name,
              ],
            }),
          ],
        }),
        e.jsx(Me.Int256, {
          size: "s",
          state: [o, i],
          base:
            (y = (m = n[s]) == null ? void 0 : m.underlyingToken) == null
              ? void 0
              : y.base,
          placeholder: "0.0",
          suffix: e.jsx(Y, {
            onClick: () => {
              var te, ce;
              return i(
                (ce = (te = n[s]) == null ? void 0 : te.deposit) == null
                  ? void 0
                  : ce.amount
              );
            },
            size: "small",
            look: "secondary",
            children: "max",
          }),
        }),
        ((C = n[s]) == null ? void 0 : C.rewardTokens) &&
          (($ = n[s]) == null ? void 0 : $.rewardTokens.length) > 0 &&
          ((R = (P = n[s]) == null ? void 0 : P.rewardTokens[0]) == null
            ? void 0
            : R.amount) > 0 &&
          e.jsxs("div", {
            className: "my-3 flex items-center justify-between",
            children: [
              e.jsxs("p", {
                className: "mr-2 text-center dark:text-black-200",
                children: [t("Unclaimed Rewards"), " "],
              }),
              e.jsx("div", {
                className:
                  "flex items-center text-center font-bold dark:text-sand-500",
                children: e.jsxs(We, {
                  look: "secondary",
                  className: "small",
                  onClick: async (te) => {
                    var ce, Se, we;
                    return u[
                      `claim${(ce = n[s]) == null ? void 0 : ce.address}`
                    ] !== void 0
                      ? await u[
                          `claim${(Se = n[s]) == null ? void 0 : Se.address}`
                        ](te, p)
                      : await u.claimRewards(
                          te,
                          p,
                          (we = n[s]) == null ? void 0 : we.name
                        );
                  },
                  disabled: !1,
                  children: [
                    "Claim",
                    " ",
                    ((O = (L = n[s]) == null ? void 0 : L.rewardTokens) == null
                      ? void 0
                      : O.length) === 1
                      ? (_ =
                          (U =
                            (E = n[s]) == null ? void 0 : E.rewardTokens[0]) ==
                          null
                            ? void 0
                            : U.amount) == null
                        ? void 0
                        : _.toFixed(2)
                      : d(mr((F = n[s]) == null ? void 0 : F.rewardTokens, a)),
                    " ",
                    ((re = (G = n[s]) == null ? void 0 : G.rewardTokens) == null
                      ? void 0
                      : re.length) === 1 &&
                      e.jsx("img", {
                        alt: "logo",
                        className: "ml-1.5 h-3 w-auto",
                        src: Ot,
                      }),
                  ],
                }),
              }),
            ],
          }),
        (D = n[s]) != null &&
        D.rewardTokens &&
        ((V = n[s]) == null ? void 0 : V.rewardTokens.length) > 0 &&
        ((me = (W = n[s]) == null ? void 0 : W.rewardTokens[0]) == null
          ? void 0
          : me.amount) > 0
          ? e.jsx("hr", {
              className: "mb-3 mt-0 border-b dark:border-blue-500",
            })
          : e.jsx("hr", {
              className: "mb-4 mt-3 border-b dark:border-blue-500",
            }),
        e.jsxs("div", {
          className: "flex w-full flex-wrap items-center justify-between",
          children: [
            ((Ne = n[s]) == null ? void 0 : Ne.rewardTokens) &&
              ((be = n[s]) == null ? void 0 : be.rewardTokens.length) > 0 &&
              ((ie = (ue = n[s]) == null ? void 0 : ue.rewardTokens[0]) == null
                ? void 0
                : ie.amount) > 0 &&
              !((ve = n[s]) != null && ve.automatedClaiming) &&
              e.jsx(bt, {
                className: "font-bold dark:text-sand-500",
                checked: b,
                onChange: () => {
                  h(!b);
                },
                children: t("Claim Rewards"),
              }),
            e.jsx(We, {
              disabled: !o || !o.gt(0),
              onClick: async (te) => {
                var ce, Se, we, Re;
                o &&
                  o.gt(0) &&
                  (u[`unstake${(ce = n[s]) == null ? void 0 : ce.address}`] !==
                  void 0
                    ? await u[
                        `unstake${(Se = n[s]) == null ? void 0 : Se.address}`
                      ](
                        te,
                        o,
                        o.lt(
                          (Re = (we = n[s]) == null ? void 0 : we.deposit) ==
                            null
                            ? void 0
                            : Re.amount
                        ),
                        n[s]
                      )
                    : await u.unstake(te, o, b, n[s]),
                  i(null));
              },
              small: !0,
              children: t("Unstake"),
            }),
            " ",
          ],
        }),
      ],
    });
    return (
      (((z = n[s]) == null ? void 0 : z.network) === void 0
        ? l !== je.MAINNET
        : l !== ((B = n[s]) == null ? void 0 : B.network)) &&
        (v = e.jsx(Oc, { card: s })),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx("div", {
            className: "flex py-2 dark:bg-black-400",
            children: e.jsx(Y, {
              look: "text",
              size: "large",
              enabled: !0,
              onClick: () => {
                var te, ce;
                i(null),
                  h(
                    ((ce = (te = n[s]) == null ? void 0 : te.rewardTokens[0]) ==
                    null
                      ? void 0
                      : ce.amount) > 0
                  );
              },
              children: t("Unstake"),
            }),
          }),
          e.jsxs("div", {
            className:
              "flex w-full flex-wrap border-t px-8 py-4 dark:border-black-400",
            children: [
              e.jsxs("div", {
                className: "w-full lg:w-5/12",
                children: [
                  e.jsx(un, { card: n[s] }),
                  !!((I = n[s]) != null && I.boost) &&
                    !!((ee = n[s]) != null && ee.theoricBoost) &&
                    e.jsx(se, {
                      arrowPointAtCenter: !0,
                      overlayClassName: "text-sm",
                      placement: "bottom",
                      title: e.jsxs("div", {
                        children: [
                          e.jsx("span", {
                            children: `${t("Current boost:")} ${
                              (X = (le = n[s]) == null ? void 0 : le.boost) ==
                              null
                                ? void 0
                                : X.toFixed(2)
                            }`,
                          }),
                          e.jsx("br", {}),
                          e.jsx("span", {
                            children: `${t("Future boost:")} ${
                              (fe =
                                (q = n[s]) == null ? void 0 : q.theoricBoost) ==
                              null
                                ? void 0
                                : fe.toFixed(2)
                            }`,
                          }),
                        ],
                      }),
                      icon: !1,
                      children: e.jsx("div", {
                        className: "inline-block h-fit w-fit",
                        children: e.jsx(We, {
                          className: "small mt-4",
                          look: "secondary",
                          onClick: async (te) => {
                            n[s] && (await u.checkPoint(te, r, n[s]));
                          },
                          disabled: !(
                            ((pe = n[s]) == null ? void 0 : pe.boost) * 1.01 <
                            ((ye = n[s]) == null ? void 0 : ye.theoricBoost)
                          ),
                          children: e.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              e.jsx(xn, { className: "small mr-2" }),
                              t("Apply Boost"),
                            ],
                          }),
                        }),
                      }),
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex w-full flex-col lg:w-7/12",
                children: v,
              }),
            ],
          }),
        ],
      })
    );
  },
  Fc = (s) => {
    let t = "";
    return (
      s == null ||
        s.forEach((r) => {
          t !== "" && (t += ", "), (t += r == null ? void 0 : r.symbol);
        }),
      t
    );
  },
  [Uc, Bc, Km] = oa({
    name: ["Name", "minmax(250px, 1fr)"],
    apr: ["Est. APR", "minmax(80px, 1fr)", "justify-center"],
    tvl: ["TVL", "minmax(80px, 1fr)", "justify-center"],
    rewardTokens: ["Reward Tokens", "minmax(100px, 1fr)", "justify-center"],
    platform: ["Platform", "minmax(70px, 1fr)", "justify-center"],
    network: ["Network", "minmax(70px, 1fr)", "justify-center"],
  });
function _c({ loading: s, header: t, searchPhrase: r }) {
  const { t: l } = ge(),
    { chainId: a, prices: n, address: d } = oe(),
    { incentives: o } = ps(),
    i = bs(),
    [b, h] = x.useState("ALL");
  x.useState(null);
  const [, u] = x.useState(!1),
    [, p] = x.useState(!1),
    v = o ? Object.keys(o) : [],
    { sample: N, setSorting: w } = na(
      v,
      (c) => {
        var f, g, j, k, S, m, y, C, $, P, R, L, O, E, U, _, F;
        let A = !0;
        if (
          (b === "ANGLE" && o[c].type !== 0 && (A = !1),
          b === "DEPRECATED" &&
            (((f = o[c]) != null && f.deprecated) || (A = !1)),
          Object.values(je).includes(b) &&
            (o[c].deprecated ||
              !((g = o[c]) != null && g.network) ||
              ((j = o[c]) == null ? void 0 : j.network) !== b) &&
            (A = !1),
          r !== "" &&
            (!((k = o[c]) != null && k.deprecated) ||
              ((y =
                (m = (S = o[c]) == null ? void 0 : S.deposit) == null
                  ? void 0
                  : m.amount) != null &&
                y.gt(0))))
        ) {
          if (
            (P =
              ($ = (C = o[c]) == null ? void 0 : C.name) == null
                ? void 0
                : $.toLowerCase()) != null &&
            P.includes(r == null ? void 0 : r.toLowerCase())
          )
            return A && !0;
          if ((R = o[c]) != null && R.rewardTokens) {
            for (const re of (L = o[c]) == null ? void 0 : L.rewardTokens)
              if (
                (E = (O = re.symbol) == null ? void 0 : O.toLowerCase()) !=
                  null &&
                E.includes(r == null ? void 0 : r.toLowerCase())
              )
                return A && !0;
          }
          const G =
            (U = o[c]) != null && U.network
              ? ms[(_ = o[c]) == null ? void 0 : _.network]
              : "Ethereum";
          if (
            (F = G == null ? void 0 : G.toLowerCase()) != null &&
            F.includes(r == null ? void 0 : r.toLowerCase())
          )
            return A && !0;
          A = !1;
        }
        return A;
      },
      [a, b, o, r],
      ["desirability", "descending"],
      (c, A, f, g) => {
        var m,
          y,
          C,
          $,
          P,
          R,
          L,
          O,
          E,
          U,
          _,
          F,
          G,
          re,
          D,
          V,
          W,
          me,
          Ne,
          be,
          ue,
          ie,
          ve,
          z,
          B,
          I,
          ee,
          le;
        const j = (X, q) => {
            if (A === "ascending") return (X ?? 0) - (q ?? 0);
            if (A === "descending") return (q ?? 0) - (X ?? 0);
          },
          k =
            (C =
              (y = (m = o[f]) == null ? void 0 : m.rewardTokens) == null
                ? void 0
                : y[0]) != null && C.amount
              ? (R =
                  (P = ($ = o[f]) == null ? void 0 : $.rewardTokens) == null
                    ? void 0
                    : P[0]) == null
                ? void 0
                : R.amount
              : 0,
          S =
            (E =
              (O = (L = o[g]) == null ? void 0 : L.rewardTokens) == null
                ? void 0
                : O[0]) != null && E.amount
              ? (F =
                  (_ = (U = o[g]) == null ? void 0 : U.rewardTokens) == null
                    ? void 0
                    : _[0]) == null
                ? void 0
                : F.amount
              : 0;
        switch (c) {
          case "desirability":
            return k === S && k === 0
              ? !((G = o[f].apr) != null && G.value) &&
                !((re = o[g].apr) != null && re.value)
                ? j(o[f].tvl, o[g].tvl)
                : j(
                    (D = o[f].apr) == null ? void 0 : D.value,
                    (V = o[g].apr) == null ? void 0 : V.value
                  )
              : j(k, S);
          case "name":
            return A === "ascending"
              ? (
                  ((me = (W = o[g]) == null ? void 0 : W.name) == null
                    ? void 0
                    : me.toLowerCase()) ?? ""
                ).localeCompare(
                  ((be = (Ne = o[f]) == null ? void 0 : Ne.name) == null
                    ? void 0
                    : be.toLowerCase()) ?? ""
                )
              : (
                  ((ie = (ue = o[f]) == null ? void 0 : ue.name) == null
                    ? void 0
                    : ie.toLowerCase()) ?? ""
                ).localeCompare(
                  ((z = (ve = o[g]) == null ? void 0 : ve.name) == null
                    ? void 0
                    : z.toLowerCase()) ?? ""
                );
          case "apr":
            return !((B = o[f].apr) != null && B.value) &&
              !((I = o[g].apr) != null && I.value)
              ? j(o[f].tvl, o[g].tvl)
              : j(
                  (ee = o[f].apr) == null ? void 0 : ee.value,
                  (le = o[g].apr) == null ? void 0 : le.value
                );
          case "tvl":
            return j(o[f].tvl, o[g].tvl);
        }
      }
    );
  return (
    x.useEffect(() => {
      var c, A, f, g;
      if (N && !s)
        for (const j of N)
          (c = o[j]) != null &&
            c.deprecated &&
            (g =
              (f = (A = o[j]) == null ? void 0 : A.deposit) == null
                ? void 0
                : f.amount) != null &&
            g.gt(0) &&
            (u(!0),
            Ut({
              placement: "topRight",
              icon: "info",
              message: "Deprecated Contracts",
              description: l(
                "You have funds staked in old contracts. Please visit the Deprecated section of this page to unstake and then head to the All section to re-stake. "
              ),
              duration: 10,
              isTxNotification: !0,
              summary: "Deprecated",
              key: "Deprecated",
            }));
    }, [N]),
    e.jsx(Uc, {
      unsortable: ["rewardTokens", "platform", "network"],
      loading: s,
      onSort: (...c) => w(c),
      container: !1,
      header: t,
      children:
        N == null
          ? void 0
          : N.map((c, A) => {
              var f,
                g,
                j,
                k,
                S,
                m,
                y,
                C,
                $,
                P,
                R,
                L,
                O,
                E,
                U,
                _,
                F,
                G,
                re,
                D,
                V,
                W,
                me,
                Ne,
                be,
                ue,
                ie,
                ve,
                z,
                B,
                I,
                ee,
                le,
                X,
                q,
                fe,
                pe,
                ye,
                te,
                ce,
                Se,
                we,
                Re,
                Ve,
                Je,
                He,
                Ye,
                xs,
                js,
                gs,
                es,
                is,
                K,
                Z,
                Ee,
                he,
                Ie,
                Xe,
                cs,
                ss,
                ls,
                Bs,
                _s,
                Vs,
                $s,
                H,
                ae,
                Ae,
                ts,
                ys,
                ws,
                de,
                ds,
                Ke,
                kt;
              return (f = o[c]) != null && f.deprecated && b === "ALL"
                ? null
                : e.jsx(
                    Io,
                    {
                      onChange: p,
                      className: "dark:text-white select-none",
                      header: e.jsx(Bc, {
                        className: "[&>*]:font-bold",
                        nameColumn: e.jsxs("div", {
                          className: "flex gap-2 items-center",
                          children: [
                            (j = (g = o[c]) == null ? void 0 : g.name) !=
                              null && j.startsWith("san")
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(Be, {
                                      className:
                                        "z-1 h-8 w-auto object-contain",
                                      token: `${
                                        (k = o[c]) == null
                                          ? void 0
                                          : k.icon.split("_")[0]
                                      }`,
                                    }),
                                    e.jsx(Be, {
                                      className: "z-0 -ml-2 mr-2 h-8 w-auto",
                                      token: `ag${
                                        (S = o[c]) == null
                                          ? void 0
                                          : S.icon.split("_")[1]
                                      }`,
                                    }),
                                  ],
                                })
                              : e.jsx(Be, {
                                  className: "h-7 w-auto object-contain",
                                  token: (m = o[c]) == null ? void 0 : m.icon,
                                }),
                            e.jsx("p", {
                              className: "font-bold",
                              children: (y = o[c]) == null ? void 0 : y.name,
                            }),
                            ((C = o[c]) == null ? void 0 : C.type) === 0 ||
                              (!!(($ = o[c]) != null && $.link) &&
                                e.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    ((P = o[c]) == null ? void 0 : P.type) ===
                                      0 &&
                                      ((R = o[c]) == null ? void 0 : R.boost) *
                                        1.02 <
                                        ((L = o[c]) == null
                                          ? void 0
                                          : L.theoricBoost) &&
                                      e.jsx(se, {
                                        overlayClassName: "text-sm",
                                        placement: "right",
                                        title: l("Boost could be increased"),
                                        customIcon: e.jsx(T, {
                                          mui: "WarningSharp",
                                          size: "s",
                                          className: "dark:text-coral-500",
                                        }),
                                      }),
                                    !!((O = o[c]) != null && O.link) &&
                                      e.jsx("a", {
                                        href:
                                          (E = o[c]) == null ? void 0 : E.link,
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        onClick: (nt) => nt.stopPropagation(),
                                        children: e.jsx(T, {
                                          mui: "OpenInNew",
                                        }),
                                      }),
                                  ],
                                })),
                          ],
                        }),
                        aprColumn: e.jsxs(e.Fragment, {
                          children: [
                            !!(
                              (_ = (U = o[c]) == null ? void 0 : U.apr) !=
                                null && _.details
                            ) &&
                              Object.keys(
                                (G = (F = o[c]) == null ? void 0 : F.apr) ==
                                  null
                                  ? void 0
                                  : G.details
                              ).length > 0 &&
                              e.jsx("div", {
                                className: "flex items-center",
                                children:
                                  ((D =
                                    (re = o[c]) == null ? void 0 : re.apr) ==
                                  null
                                    ? void 0
                                    : D.value) > 0 &&
                                  e.jsx(se, {
                                    placement: "right",
                                    overlayClassName: o[c].isMerkl
                                      ? "tooltip-apr-breakdown"
                                      : "",
                                    title: o[c].isMerkl
                                      ? e.jsx(ko, {
                                          apr: {
                                            ...((V = o[c]) == null
                                              ? void 0
                                              : V.apr),
                                            title: "Average APR",
                                            details:
                                              !!(
                                                (me =
                                                  (W = o[c]) == null
                                                    ? void 0
                                                    : W.apr) != null &&
                                                me.details
                                              ) &&
                                              Object.keys(
                                                (be =
                                                  (Ne = o[c]) == null
                                                    ? void 0
                                                    : Ne.apr) == null
                                                  ? void 0
                                                  : be.details
                                              ).reduce((nt, vt) => {
                                                var At, St;
                                                return (
                                                  (nt[vt] = {
                                                    value:
                                                      (St =
                                                        (At = o[c]) == null
                                                          ? void 0
                                                          : At.apr) == null
                                                        ? void 0
                                                        : St.details[vt],
                                                  }),
                                                  nt
                                                );
                                              }, {}),
                                          },
                                          chainId:
                                            (ue = o[c]) == null
                                              ? void 0
                                              : ue.network,
                                        })
                                      : e.jsx(Lc, {
                                          apr:
                                            (ie = o[c]) == null
                                              ? void 0
                                              : ie.apr,
                                        }),
                                    icon: !1,
                                    children: e.jsx(e.Fragment, {
                                      children: e.jsxs(Fs, {
                                        color: "black",
                                        children: [
                                          (z =
                                            (ve = o[c]) == null
                                              ? void 0
                                              : ve.apr) != null && z.value
                                            ? as(
                                                (I =
                                                  (B = o[c]) == null
                                                    ? void 0
                                                    : B.apr) == null
                                                  ? void 0
                                                  : I.value
                                              )
                                            : "-",
                                          " %",
                                        ],
                                      }),
                                    }),
                                  }),
                              }),
                            !((ee = o[c]) != null && ee.isMerkl) &&
                              ((le = o[c]) == null
                                ? void 0
                                : le.rewardTokens) &&
                              ((q =
                                (X = o[c]) == null ? void 0 : X.rewardTokens) ==
                              null
                                ? void 0
                                : q.length) > 0 &&
                              ((pe =
                                (fe = o[c]) == null
                                  ? void 0
                                  : fe.rewardTokens[0]) == null
                                ? void 0
                                : pe.amount) > 0 &&
                              e.jsxs("p", {
                                className:
                                  "flex items-center text-sm opacity-70",
                                children: [
                                  ((te =
                                    (ye = o[c]) == null
                                      ? void 0
                                      : ye.rewardTokens) == null
                                    ? void 0
                                    : te.length) === 1
                                    ? (we =
                                        (Se =
                                          (ce = o[c]) == null
                                            ? void 0
                                            : ce.rewardTokens[0]) == null
                                          ? void 0
                                          : Se.amount) == null
                                      ? void 0
                                      : we.toFixed(2)
                                    : i(
                                        mr(
                                          (Re = o[c]) == null
                                            ? void 0
                                            : Re.rewardTokens,
                                          n
                                        )
                                      ),
                                  " ",
                                  ((Je =
                                    (Ve = o[c]) == null
                                      ? void 0
                                      : Ve.rewardTokens) == null
                                    ? void 0
                                    : Je.length) === 1
                                    ? e.jsx("img", {
                                        className: "mx-1 h-3 w-auto",
                                        src: Ot,
                                        alt: "",
                                      })
                                    : null,
                                  " ",
                                  l("to Claim"),
                                ],
                              }),
                            o[c].isMerkl &&
                              ((He = o[c]) == null
                                ? void 0
                                : He.rewardTokens) &&
                              ((xs =
                                (Ye = o[c]) == null
                                  ? void 0
                                  : Ye.rewardTokens) == null
                                ? void 0
                                : xs.length) > 0 &&
                              ((gs =
                                (js = o[c]) == null
                                  ? void 0
                                  : js.rewardTokens[0]) == null
                                ? void 0
                                : gs.amount) > 0 &&
                              e.jsxs("p", {
                                className:
                                  "flex items-center text-sm opacity-70",
                                children: [
                                  "You have ",
                                  e.jsx("img", {
                                    className: "mx-1 h-3 w-auto",
                                    src: Ot,
                                    alt: "",
                                  }),
                                  " to claim",
                                ],
                              }),
                          ],
                        }),
                        tvlColumn: e.jsxs(e.Fragment, {
                          children: [
                            !((es = o[c]) != null && es.deprecated) &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("p", {
                                    children: `${i(
                                      (is = o[c]) == null ? void 0 : is.tvl
                                    )}`,
                                  }),
                                  ((Ee =
                                    (Z =
                                      (K = o[c]) == null
                                        ? void 0
                                        : K.deposit) == null
                                      ? void 0
                                      : Z.amount) == null
                                    ? void 0
                                    : Ee.gt(0)) &&
                                    e.jsx("p", {
                                      className: "text-sm opacity-70",
                                      children: `${i(
                                        (Ie =
                                          (he = o[c]) == null
                                            ? void 0
                                            : he.deposit) == null
                                          ? void 0
                                          : Ie.usdValue
                                      )} Staked`,
                                    }),
                                ],
                              }),
                            ((Xe = o[c]) == null ? void 0 : Xe.deprecated) &&
                              `${
                                (ss =
                                  (cs = o[c]) == null ? void 0 : cs.deposit) ==
                                null
                                  ? void 0
                                  : ss.amount.toFixed(2)
                              } ${l("to Unstake")}`,
                          ],
                        }),
                        rewardTokensColumn:
                          ((ls = o[c]) == null ? void 0 : ls.type) === 2 &&
                          !((Bs = o[c]) != null && Bs.rewardTokens)
                            ? "ANGLE"
                            : Fc(
                                (_s = o[c]) == null ? void 0 : _s.rewardTokens
                              ),
                        platformColumn: e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx("img", {
                              className: "h-6 w-6",
                              src:
                                (Vs = o[c]) != null && Vs.platform
                                  ? zt[
                                      ($s = o[c]) == null ? void 0 : $s.platform
                                    ]
                                  : zt.ANGLE,
                              alt: "",
                            }),
                            " ",
                            ((H = o[c]) == null ? void 0 : H.platform2) &&
                              e.jsx("img", {
                                className: "h-6 w-6",
                                src: zt[
                                  (ae = o[c]) == null ? void 0 : ae.platform2
                                ],
                                alt: "",
                              }),
                            ((Ae = o[c]) == null ? void 0 : Ae.platform3) &&
                              e.jsx("img", {
                                className: "h-6 w-6",
                                src: zt[
                                  (ts = o[c]) == null ? void 0 : ts.platform3
                                ],
                                alt: "",
                              }),
                          ],
                        }),
                        networkColumn: e.jsx("img", {
                          className: "h-6 w-6",
                          src:
                            (ys = o[c]) != null && ys.network
                              ? tt[(ws = o[c]) == null ? void 0 : ws.network]
                              : tt[1],
                          alt: "network icon",
                        }),
                      }),
                      children:
                        d &&
                        ((de = o[c]) == null ? void 0 : de.type) !== 1 &&
                        (kt =
                          (Ke = (ds = o[c]) == null ? void 0 : ds.deposit) ==
                          null
                            ? void 0
                            : Ke.amount) != null &&
                        kt.gt(0)
                          ? e.jsx(Mc, { card: c })
                          : e.jsx(un, { card: o[c] }),
                    },
                    A
                  );
            }),
    })
  );
}
const Rt = { DEFAULT: "DEFAULT", NAME: "NAME", APR: "APR", TVL: "tvl" },
  ga = () => {
    var O;
    const { t: s } = ge(),
      { chainId: t, prices: r } = oe(),
      { setContracts: l } = Ze(),
      { incentives: a } = ps(),
      { incentivesLoaded: n, fetch: d } = la();
    x.useEffect(() => d(["incentives", "balances", "allowances"]), []);
    const [o, i] = x.useState("ALL");
    x.useState(null);
    const [b, h] = x.useState(""),
      [u, p] = x.useState(Rt.DEFAULT),
      [v, N] = x.useState(-1),
      [w, c] = x.useState(!1),
      [A, f] = x.useState(!1),
      [g, j] = x.useState(),
      [k, S] = x.useState(null),
      [m, y] = x.useState(),
      [C, $] = x.useState(null),
      [P, R] = x.useState(null),
      L = x.useCallback((E) => {
        i(E);
      }, []);
    return (
      x.useEffect(() => {
        var U, _, F, G, re;
        let E = a ? Object.keys(a) : [];
        if (E) {
          for (const D of E)
            (U = a[D]) != null &&
              U.deprecated &&
              (G =
                (F = (_ = a[D]) == null ? void 0 : _.deposit) == null
                  ? void 0
                  : F.amount) != null &&
              G.gt(0) &&
              (c(!0),
              Ut({
                placement: "topRight",
                icon: "info",
                message: "Deprecated Contracts",
                description: s(
                  "You have funds staked in old contracts. Please visit the Deprecated section of this page to unstake and then head to the All section to re-stake. "
                ),
                duration: 10,
                isTxNotification: !0,
                summary: "Deprecated",
                key: "Deprecated",
              }));
          E =
            (re =
              E == null
                ? void 0
                : E.filter((D) => {
                    var W,
                      me,
                      Ne,
                      be,
                      ue,
                      ie,
                      ve,
                      z,
                      B,
                      I,
                      ee,
                      le,
                      X,
                      q,
                      fe,
                      pe,
                      ye;
                    let V = !0;
                    if (
                      (o === "ANGLE" && a[D].type !== 0 && (V = !1),
                      o === "DEPRECATED" &&
                        (((W = a[D]) != null && W.deprecated) || (V = !1)),
                      Object.values(je).includes(o) &&
                        (a[D].deprecated ||
                          !((me = a[D]) != null && me.network) ||
                          ((Ne = a[D]) == null ? void 0 : Ne.network) !== o) &&
                        (V = !1),
                      b !== "" &&
                        (!((be = a[D]) != null && be.deprecated) ||
                          ((ve =
                            (ie = (ue = a[D]) == null ? void 0 : ue.deposit) ==
                            null
                              ? void 0
                              : ie.amount) != null &&
                            ve.gt(0))))
                    ) {
                      if (
                        (I =
                          (B = (z = a[D]) == null ? void 0 : z.name) == null
                            ? void 0
                            : B.toLowerCase()) != null &&
                        I.includes(b == null ? void 0 : b.toLowerCase())
                      )
                        return V && !0;
                      if ((ee = a[D]) != null && ee.rewardTokens) {
                        for (const ce of (le = a[D]) == null
                          ? void 0
                          : le.rewardTokens)
                          if (
                            (q =
                              (X = ce.symbol) == null
                                ? void 0
                                : X.toLowerCase()) != null &&
                            q.includes(b == null ? void 0 : b.toLowerCase())
                          )
                            return V && !0;
                      }
                      const te =
                        (fe = a[D]) != null && fe.network
                          ? ms[(pe = a[D]) == null ? void 0 : pe.network]
                          : "Ethereum";
                      if (
                        (ye = te == null ? void 0 : te.toLowerCase()) != null &&
                        ye.includes(b == null ? void 0 : b.toLowerCase())
                      )
                        return V && !0;
                      V = !1;
                    }
                    return V;
                  })) == null
              ? void 0
              : re.sort((D, V) => {
                  var W,
                    me,
                    Ne,
                    be,
                    ue,
                    ie,
                    ve,
                    z,
                    B,
                    I,
                    ee,
                    le,
                    X,
                    q,
                    fe,
                    pe,
                    ye,
                    te,
                    ce,
                    Se,
                    we,
                    Re,
                    Ve,
                    Je,
                    He,
                    Ye,
                    xs,
                    js,
                    gs,
                    es,
                    is,
                    K,
                    Z,
                    Ee,
                    he,
                    Ie,
                    Xe,
                    cs;
                  if (u === Rt.DEFAULT) {
                    const ss =
                        (Ne =
                          (me = (W = a[D]) == null ? void 0 : W.rewardTokens) ==
                          null
                            ? void 0
                            : me[0]) != null && Ne.amount
                          ? (ie =
                              (ue =
                                (be = a[D]) == null
                                  ? void 0
                                  : be.rewardTokens) == null
                                ? void 0
                                : ue[0]) == null
                            ? void 0
                            : ie.amount
                          : 0,
                      ls =
                        (B =
                          (z =
                            (ve = a[V]) == null ? void 0 : ve.rewardTokens) ==
                          null
                            ? void 0
                            : z[0]) != null && B.amount
                          ? (le =
                              (ee =
                                (I = a[V]) == null ? void 0 : I.rewardTokens) ==
                              null
                                ? void 0
                                : ee[0]) == null
                            ? void 0
                            : le.amount
                          : 0;
                    return ss === ls && ss === 0
                      ? !((X = a[D].apr) != null && X.value) &&
                        !((q = a[V].apr) != null && q.value)
                        ? a[D].tvl > a[V].tvl
                          ? v
                          : -1 * v
                        : ((fe = a[D].apr) == null ? void 0 : fe.value) >
                          ((pe = a[V].apr) == null ? void 0 : pe.value)
                        ? v
                        : -1 * v
                      : ss > ls
                      ? v
                      : -1 * v;
                  }
                  return u === Rt.APR
                    ? !((ye = a[D].apr) != null && ye.value) &&
                      !((te = a[V].apr) != null && te.value)
                      ? a[D].tvl > a[V].tvl
                        ? v
                        : -1 * v
                      : ((ce = a[D].apr) == null ? void 0 : ce.value) >
                        ((Se = a[V].apr) == null ? void 0 : Se.value)
                      ? v
                      : -1 * v
                    : u === Rt.TVL
                    ? a[D].tvl > a[V].tvl
                      ? v
                      : -1 * v
                    : u === Rt.NAME
                    ? ((Re = (we = a[D]) == null ? void 0 : we.name) == null
                        ? void 0
                        : Re.toLowerCase()) >
                      ((Je = (Ve = a[V]) == null ? void 0 : Ve.name) == null
                        ? void 0
                        : Je.toLowerCase())
                      ? v
                      : -1 * v
                    : localStorage.getItem(a[D].address) === "true" &&
                      localStorage.getItem(a[V].address) !== "true"
                    ? -1
                    : localStorage.getItem(a[V].address) === "true" &&
                      localStorage.getItem(a[D].address) !== "true"
                    ? 1
                    : t === ((He = a[D]) == null ? void 0 : He.network) &&
                      t !== ((Ye = a[V]) == null ? void 0 : Ye.network)
                    ? -1
                    : t === ((xs = a[V]) == null ? void 0 : xs.network) &&
                      t !== ((js = a[D]) == null ? void 0 : js.network)
                    ? 1
                    : (gs = a[D].deposit) != null &&
                      gs.usdValue &&
                      !((es = a[V].deposit) != null && es.usdValue)
                    ? -1
                    : !((is = a[D].deposit) != null && is.usdValue) &&
                      (K = a[V].deposit) != null &&
                      K.usdValue
                    ? 1
                    : ((Z = a[D].deposit) == null ? void 0 : Z.usdValue) >
                      ((Ee = a[V].deposit) == null ? void 0 : Ee.usdValue)
                    ? -1
                    : ((he = a[D].deposit) == null ? void 0 : he.usdValue) <
                      ((Ie = a[V].deposit) == null ? void 0 : Ie.usdValue)
                    ? 1
                    : ((Xe = a[D].apr) == null ? void 0 : Xe.value) >
                      ((cs = a[V].apr) == null ? void 0 : cs.value)
                    ? -1
                    : 1;
                });
        }
        j(E);
      }, [t, o, a, u, v, b, n]),
      x.useEffect(() => {
        var D,
          V,
          W,
          me,
          Ne,
          be,
          ue,
          ie,
          ve,
          z,
          B,
          I,
          ee,
          le,
          X,
          q,
          fe,
          pe,
          ye,
          te,
          ce,
          Se,
          we,
          Re,
          Ve,
          Je,
          He,
          Ye,
          xs,
          js,
          gs,
          es,
          is,
          K,
          Z,
          Ee;
        let E = 0,
          U = 0,
          _ = 0,
          F = 0,
          G = !1,
          re = !1;
        if (g)
          for (const he of g)
            r &&
            !((D = a[he]) != null && D.isMerkl) &&
            !((V = a[he]) != null && V.deprecated) &&
            (W = a[he]) != null &&
            W.rewardTokens &&
            ((Ne = (me = a[he]) == null ? void 0 : me.rewardTokens) == null
              ? void 0
              : Ne.length) > 0 &&
            ((ue = (be = a[he]) == null ? void 0 : be.rewardTokens[0]) == null
              ? void 0
              : ue.amount) > 0
              ? ((ve = (ie = a[he]) == null ? void 0 : ie.rewardTokens) == null
                  ? void 0
                  : ve.length) === 1
                ? ((E +=
                    ((B = (z = a[he]) == null ? void 0 : z.rewardTokens[0]) ==
                    null
                      ? void 0
                      : B.amount) * r.ANGLE),
                  a[he].network === je.MAINNET &&
                    (U +=
                      (ee = (I = a[he]) == null ? void 0 : I.rewardTokens[0]) ==
                      null
                        ? void 0
                        : ee.amount))
                : ((E += mr(
                    (le = a[he]) == null ? void 0 : le.rewardTokens,
                    r
                  )),
                  ((q =
                    (X = a[he]) == null
                      ? void 0
                      : X.rewardTokens.filter((Ie) => Ie.symbol === "ANGLE")) ==
                  null
                    ? void 0
                    : q.length) > 0 &&
                    a[he].network === je.MAINNET &&
                    (U +=
                      (pe =
                        (fe = a[he]) == null
                          ? void 0
                          : fe.rewardTokens.filter(
                              (Ie) => Ie.symbol === "ANGLE"
                            )) == null
                        ? void 0
                        : pe[0].amount))
              : r &&
                !G &&
                (ye = a[he]) != null &&
                ye.isMerkl &&
                (te = a[he]) != null &&
                te.rewardTokens &&
                ((Se = (ce = a[he]) == null ? void 0 : ce.rewardTokens) == null
                  ? void 0
                  : Se.length) === 1 &&
                ((Re = (we = a[he]) == null ? void 0 : we.rewardTokens[0]) ==
                null
                  ? void 0
                  : Re.amount) > 0 &&
                ((Ve = a[he]) == null ? void 0 : Ve.network) === je.MAINNET
              ? ((_ +=
                  (He = (Je = a[he]) == null ? void 0 : Je.rewardTokens[0]) ==
                  null
                    ? void 0
                    : He.amount),
                (G = !0))
              : r &&
                !re &&
                (Ye = a[he]) != null &&
                Ye.isMerkl &&
                (xs = a[he]) != null &&
                xs.rewardTokens &&
                ((gs = (js = a[he]) == null ? void 0 : js.rewardTokens) == null
                  ? void 0
                  : gs.length) === 1 &&
                ((is = (es = a[he]) == null ? void 0 : es.rewardTokens[0]) ==
                null
                  ? void 0
                  : is.amount) > 0 &&
                ((K = a[he]) == null ? void 0 : K.network) === je.POLYGON &&
                ((F +=
                  (Ee = (Z = a[he]) == null ? void 0 : Z.rewardTokens[0]) ==
                  null
                    ? void 0
                    : Ee.amount),
                (re = !0));
        S(U), y(E + (_ + F) * (r == null ? void 0 : r.ANGLE)), $(_), R(F);
      }, [g, r, a, n, t]),
      x.useEffect(() => {
        var E;
        l([
          {
            name: "ANGLE",
            address: (E = J(t)) == null ? void 0 : E.ANGLE,
            chainId: t,
          },
        ]);
      }, [t, l]),
      e.jsxs("div", {
        className: "container",
        children: [
          e.jsx(Ec, {
            visible: A,
            setVisible: f,
            incentives:
              g == null
                ? void 0
                : g
                    .filter((E) => a[E].type === 0 && !a[E].deprecated)
                    .map((E) => a[E]),
          }),
          e.jsx(_t, {
            title: "Yields",
            chainId: null,
            headerLogo: Cc,
            headerLogoAlt: "Earn page logo",
            logoClassName: "md:!w-24 xl:!w-28",
            description:
              "Find the best yield opportunities to grow your savings in DeFi using Angle stablecoins",
          }),
          e.jsx(_c, {
            searchPhrase: b,
            loading: !n,
            header: e.jsxs("div", {
              className: "flex flex-wrap items-center justify-between gap-2",
              children: [
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-4",
                  children: [
                    e.jsx(Me, {
                      className: "min-w-[160px]",
                      state: [b, h],
                      placeholder: "Search...",
                      suffix: e.jsx(T, { mui: "SearchOutlined" }),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2 flex-wrap items-center",
                      children: [
                        e.jsx(Y, {
                          type: "tag",
                          look: "primary",
                          onClick: () => {
                            L("ALL");
                          },
                          enabled: o === "ALL",
                          children: "All",
                        }),
                        yt.earn.map((E, U) =>
                          e.jsx(
                            Y,
                            {
                              type: "tag",
                              look: "primary",
                              onClick: () => {
                                L(E);
                              },
                              enabled: o === E,
                              onlyIcon: e.jsx("img", {
                                src: tt[E],
                                alt: E.toString(),
                                className: `chainlogo-${E.toString()} h-5 w-5`,
                              }),
                            },
                            U
                          )
                        ),
                        w &&
                          e.jsx(Y, {
                            type: "tag",
                            look: "primary",
                            onClick: () => {
                              L("DEPRECATED");
                            },
                            enabled: o === "DEPRECATED",
                            children: "Deprecated",
                          }),
                        " ",
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-4",
                  children:
                    t === je.MAINNET &&
                    e.jsxs(Y, {
                      onClick: () => {
                        f(!0);
                      },
                      disabled: !m,
                      type: "button",
                      look: "primary",
                      rightIcon: e.jsx(Be, {
                        token: (O = J(je.MAINNET)) == null ? void 0 : O.ANGLE,
                        className: "h-5 w-auto",
                      }),
                      children: ["Claim ", Ce(k, 4)],
                    }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
var ur = {},
  Vc = Ue;
Object.defineProperty(ur, "__esModule", { value: !0 });
var xr = (ur.default = void 0),
  Tc = Vc(Fe()),
  zc = e;
xr = ur.default = (0, Tc.default)(
  (0, zc.jsx)("path", {
    d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z",
  }),
  "StarBorderOutlined"
);
const Hc = () => (
  ge(),
  e.jsxs(e.Fragment, {
    children: [
      e.jsx("header", {
        className: "container",
        children: e.jsxs("div", {
          className: "mb-6 w-full lg:w-1/2",
          children: [
            e.jsx(Es, {
              to: xe.security,
              className: "ease hover:dark:text-peach-500",
              children: e.jsx(Y, {
                look: "back",
                className: "mb-3",
                children: "Back to Security",
              }),
            }),
            e.jsx("h1", { children: "Insurace" }),
          ],
        }),
      }),
      e.jsx("main", {
        className: "container",
        children: e.jsxs("div", {
          className: "w-full dark:text-sand-500 lg:w-1/2",
          children: [
            e.jsx("h6", {
              className: "mb-3 dark:text-sand-500",
              children: "What is InsurAce?",
            }),
            e.jsx("p", {
              className: "mb-4",
              children:
                "InsurAce.io is a decentralized insurance protocol operating across multiple blockchains. It provides insurance services to DeFi users to protect their investments against smart contract risks.",
            }),
            e.jsx("h6", {
              className: "mb-3 dark:text-sand-500",
              children: "How does it work?",
            }),
            e.jsx("p", {
              className: "mb-4",
              children:
                "If one of Angle's smart contracts fails and you were paying for coverage, InsurAce will cover your loss.",
            }),
            e.jsxs("h6", {
              className: "mb-3 flex items-center dark:text-sand-500",
              children: [
                "What is the premium? ",
                e.jsx(xr, { className: "ml-2 dark:text-peach-500" }),
              ],
            }),
            e.jsx("p", {
              className: "mb-4",
              children:
                "2.99% annually. Use our custom Angle link to enjoy a 5% discount paid in INSUR Token.",
            }),
            e.jsx("h6", {
              className: "mb-3 dark:text-sand-500",
              children: "The cover is sold out, what can I do?",
            }),
            e.jsxs("p", {
              className: "mb-8",
              children: [
                "If you want to buy a significant amount of cover on Angle Smart Contracts and there is not enough available, feel free to reach our team out on",
                " ",
                e.jsx("a", {
                  className: "underlined",
                  href: ke.angleDiscord,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "Telegram.",
                }),
              ],
            }),
            e.jsx(Y, {
              type: "button",
              look: "primary",
              onClick: () => window.open(ke.insurace, "_blank"),
              rightIcon: e.jsx(T, { mui: "CallMadeOutlined" }),
              children: "Buy Insurace cover",
            }),
          ],
        }),
      }),
    ],
  })
);
var fr = {},
  Yc = Ue;
Object.defineProperty(fr, "__esModule", { value: !0 });
var fn = (fr.default = void 0),
  Gc = Yc(Fe()),
  Wc = e;
fn = fr.default = (0, Gc.default)(
  (0, Wc.jsx)("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z",
  }),
  "Lock"
);
var hr = {},
  qc = Ue;
Object.defineProperty(hr, "__esModule", { value: !0 });
var hn = (hr.default = void 0),
  Qc = qc(Fe()),
  Xc = e;
hn = hr.default = (0, Qc.default)(
  (0, Xc.jsx)("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2",
  }),
  "LockOpenOutlined"
);
var pr = {},
  Kc = Ue;
Object.defineProperty(pr, "__esModule", { value: !0 });
var pn = (pr.default = void 0),
  Zc = Kc(Fe()),
  Jc = e;
pn = pr.default = (0, Zc.default)(
  (0, Jc.jsx)("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2",
  }),
  "LockOutlined"
);
var br = {},
  ed = Ue;
Object.defineProperty(br, "__esModule", { value: !0 });
var bn = (br.default = void 0),
  sd = ed(Fe()),
  td = e;
bn = br.default = (0, sd.default)(
  (0, td.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5",
  }),
  "MoodOutlined"
);
const ad = "/assets/lock-3af4d11c.svg",
  rd = "/assets/logo-angle-outline-sand-500-de930f15.svg",
  jr = () => x.useMemo(() => 7 * 86400, []);
function ld(s) {
  const { transactions: t } = rs();
  return !s || !t[s] ? !1 : !t[s].receipt;
}
var gr = {},
  nd = Ue;
Object.defineProperty(gr, "__esModule", { value: !0 });
var jn = (gr.default = void 0),
  od = nd(Fe()),
  id = e;
jn = gr.default = (0, od.default)(
  (0, id.jsx)("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z",
  }),
  "AddBoxOutlined"
);
const cd = () => {
    var N, w, c, A;
    const [s, t] = x.useState(null),
      { execTransactions: r } = rs(),
      { chainId: l, address: a } = oe(),
      { veANGLE: n, ANGLE: d } = ps(),
      [o, i] = za(
        {
          address: (N = J(l)) == null ? void 0 : N.ANGLE,
          allowance: M.from(n == null ? void 0 : n.allowance),
          base: 18,
          balance: M.from(d == null ? void 0 : d.balance),
          symbol: "ANGLE",
        },
        (w = J(l)) == null ? void 0 : w.veANGLE,
        s
      ),
      b = l && a && (n == null ? void 0 : n.endLock),
      h = jr(),
      u = Oe.unix((Math.floor(b / h) + 1) * h),
      p = M.parse(Math.abs(u.diff(Oe(), "days")) / 365),
      v =
        (A = M.from(n == null ? void 0 : n.balance)) == null
          ? void 0
          : A.add((c = M.parse(s)) == null ? void 0 : c.mul(p.div(4)));
    return e.jsxs("div", {
      className: "border-b px-10 py-6 dark:border-blue-500 dark:bg-black-500",
      children: [
        e.jsxs("div", {
          className: "mb-4 flex items-center",
          children: [
            e.jsx(jn, { className: "mr-3 dark:text-blue-500" }),
            e.jsx("h4", {
              className: "dark:text-sand-500",
              children: "Add ANGLE to Lock",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex w-full flex-wrap items-center gap-2 pb-4",
          children: [
            e.jsx(Me.Int256, {
              size: "s",
              className: "flex-1 min-w-[min(400px,100%)]",
              header: [
                "Additional ANGLE",
                e.jsx(rt, {
                  value: M.from(d == null ? void 0 : d.balance),
                  onClick: t,
                }),
              ],
              state: [s, t],
              suffix: e.jsx(Y, {
                onClick: () => t(M.from(d == null ? void 0 : d.balance)),
                look: "secondary",
                size: "x-small",
                children: "MAX",
              }),
            }),
            e.jsx(ca, {
              usePermit: !1,
              useETH: !1,
              amount: s,
              approvalState: o,
              approve: i,
            }),
            e.jsx(We, {
              disabled: o !== Os.APPROVED || !s,
              onClick: async (f) => {
                await r.increase_amount(f, s), t(null);
              },
              leftIcon: e.jsx(T, { mui: "CheckCircleOutlineOutlined" }),
              children: "Confirm",
            }),
          ],
        }),
        e.jsx(se, {
          overlayClassName: "text-sm small",
          className: "small",
          placement: "right",
          title:
            "Remember to apply your updated boost and your votes to benefit from your new veANGLE balance",
          children: e.jsxs("p", {
            className: "flex items-center dark:text-sand-500",
            children: [
              "Your new balance will be approx: ",
              e.jsxs("span", {
                className: "font-bold",
                children: [as(v == null ? void 0 : v.toNumber(1)), " veANGLE"],
              }),
            ],
          }),
        }),
      ],
    });
  },
  dd = ({ claimable: s, setTxHash: t, visible: r, setVisible: l }) => {
    const { address: a, chainId: n } = oe(),
      { execTransactions: d } = rs(),
      [o, i] = x.useState(!1),
      b = async () => {
        var u;
        i(!0), t("");
        const h = (u = J(n)) == null ? void 0 : u.FeeDistributor_sanUSDC_EUR;
        await d.claim_weekly_interests(t, a, h, s), i(!1), l(!1);
      };
    return e.jsxs(us, {
      title: "Claim your interest",
      titleIcon: e.jsx(T, { mui: "MoodOutlined" }),
      visible: r,
      onCancel: () => {
        l(!1);
      },
      children: [
        e.jsx("h6", {
          className: "mb-2 dark:text-sand-500",
          children: s.gt(0)
            ? `You can currently claim ${Ce(
                s == null ? void 0 : s.toNumber()
              )} sanUSDC_EUR.`
            : "You have no sanUSDC_EUR to claim.",
        }),
        e.jsx("p", {
          className: "mb-4 text-lg dark:text-black-100",
          children:
            "Claim your rewards anytime you want, they will never be lost.",
        }),
        e.jsx(Y, {
          type: "button",
          look: "secondary",
          className: "mb-2",
          onClick: b,
          disabled: s.eq(0) || o,
          children: o
            ? e.jsx(Lo, { children: "Sending Transaction" })
            : "Claim interest",
        }),
      ],
    });
  };
var Nr = {},
  md = Ue;
Object.defineProperty(Nr, "__esModule", { value: !0 });
var gn = (Nr.default = void 0),
  ud = md(Fe()),
  bl = e;
gn = Nr.default = (0, ud.default)(
  [
    (0, bl.jsx)(
      "path",
      {
        d: "M6 20V10h12v1c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.42-.6-.75-1.28-.97-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z",
      },
      "0"
    ),
    (0, bl.jsx)(
      "path",
      {
        d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z",
      },
      "1"
    ),
  ],
  "LockClockOutlined"
);
const xd = () => {
    const s = jr(),
      { execTransactions: t } = rs(),
      { veANGLE: r } = ps(),
      [l, a] = x.useState(
        Oe.unix((Math.floor((r == null ? void 0 : r.endLock) / s) + 1) * s)
      );
    return (
      x.useEffect(() => {
        a(Oe.unix((Math.floor((r == null ? void 0 : r.endLock) / s) + 1) * s));
      }, [r == null ? void 0 : r.endLock, s]),
      e.jsxs("div", {
        className: "border-b px-10 py-6 dark:border-blue-500 dark:bg-black-500",
        children: [
          e.jsxs("div", {
            className: "mb-4 flex items-center",
            children: [
              e.jsx(gn, { className: "mr-3 dark:text-blue-500" }),
              e.jsx("h4", {
                className: "dark:text-sand-500",
                children: "Increase Lock until:",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mb-4 mt-2 flex w-full flex-wrap gap-2",
            children: [
              e.jsx(Me.Date, {
                state: [
                  l,
                  (n) => {
                    a(n.startOf("day"));
                  },
                ],
                suffix: [
                  e.jsx(Y, {
                    look: "secondary",
                    size: "x-small",
                    onClick: () =>
                      a(Oe.unix(Oe().unix() + 4 * 365 * 86400 - 3600)),
                    children: "MAX",
                  }),
                  e.jsx(T, { mui: "CalendarMonthOutlined" }),
                ],
              }),
              e.jsx(We, {
                disabled: !1,
                onClick: async (n) => {
                  await t.increase_unlock_time(n, l.unix());
                },
                leftIcon: e.jsx(T, { mui: "CheckCircleOutlineOutlined" }),
                children: "Confirm",
              }),
            ],
          }),
          e.jsx(se, {
            overlayClassName: "text-sm small",
            className: "small",
            placement: "right",
            title:
              "Remember to apply your updated boost and your votes to benefit from your new veANGLE balance",
            children: e.jsxs("p", {
              className: "flex items-center dark:text-sand-500",
              children: [
                "Your new balance will be approx: ",
                e.jsxs("span", {
                  className: "font-bold",
                  children: [
                    hs(
                      ((r == null ? void 0 : r.locked) *
                        (Math.floor((l == null ? void 0 : l.unix()) / s) * s -
                          Oe().unix())) /
                        (Oe().startOf("day").add(4, "y").unix() - Oe().unix())
                    ),
                    " veANGLE",
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Na = "https://api.thegraph.com/subgraphs/name/picodes/",
  fd = (s) =>
    !s || s === je.LOCAL
      ? { token: "", oracles: "", pools: "" }
      : {
          token: Na + "token",
          oracles: Na + "periphery",
          pools: Na + "transaction",
        };
function hd(s) {
  if (s === "ALL") return 0;
  if (s === "DAY") return Oe().subtract(1, "days").startOf("day").unix();
  if (s === "WEEK") return Oe().subtract(1, "weeks").startOf("day").unix();
  if (s === "MONTH") return Oe().subtract(1, "months").startOf("day").unix();
}
const pd = (s, t = "ALL") => {
    const [r, l] = x.useState(),
      a = hd(t),
      n = Da`
    query ($orderBy: lockedANGLEHistorical_orderBy, $where: lockedANGLEHistorical_filter) {
      lockedANGLEHistoricals(orderBy: $orderBy, where: $where, orderDirection: desc, first: 1000) {
        timestamp
        angleLocked
        veSupply
      }
    }
  `,
      d = new Ln({ uri: fd(s).token, cache: new $n() });
    return (
      x.useEffect(() => {
        (async () => {
          try {
            const o = await d.query({
                query: n,
                variables: {
                  orderBy: "timestamp",
                  where: { timestamp_gte: a },
                },
                fetchPolicy: "no-cache",
              }),
              i =
                o == null
                  ? void 0
                  : o.data.lockedANGLEHistoricals.map((b) => ({
                      timestamp: b.timestamp,
                      angleLocked: Number.parseInt(zr(b.angleLocked)),
                      veSupply: Number.parseInt(zr(b.veSupply)),
                    }));
            l(i == null ? void 0 : i.reverse());
          } catch (o) {
            console.error(o);
          }
        })();
      }, [a, s]),
      r
    );
  },
  bd = () => {
    var E, U, _, F, G, re;
    const { t: s } = ge(),
      t = jr(),
      r = bs(),
      { execTransactions: l } = rs(),
      { chainId: a, prices: n, address: d } = oe(),
      { ANGLE: o, veANGLE: i, rewardsData: b } = ps(),
      { daoLoaded: h, fetch: u } = la(),
      { setContracts: p } = Ze();
    x.useEffect(() => u(["dao"]), []);
    const [v, N] = x.useState("ALL");
    pd(a, v);
    const [w, c] = x.useState(""),
      [A, f] = x.useState(!1),
      g = ld(w),
      j = x.useMemo(
        () =>
          (i == null ? void 0 : i.endLock) &&
          Math.floor((i == null ? void 0 : i.endLock) / t) <
            Math.floor((Oe().unix() + 4 * 365 * 86400) / t),
        [i, t]
      ),
      [k, S] = x.useState(null),
      [m, y] = x.useState(null),
      [C, $] = za(
        {
          address: (E = J(a)) == null ? void 0 : E.ANGLE,
          allowance: M.from(i == null ? void 0 : i.allowance),
          base: 18,
          balance: M.from(o == null ? void 0 : o.balance),
          symbol: "ANGLE",
        },
        (U = J(a)) == null ? void 0 : U.veANGLE,
        m
      ),
      P = 1189860 * (n == null ? void 0 : n.sanUSDC_EUR),
      R = 5e5 * (n == null ? void 0 : n.PYTH),
      L = 100943 * (n == null ? void 0 : n.SAFE),
      O = [
        [
          "Distributed over the last 5 months",
          "500,000 PYTH tokens distributed in March 2024 and 100,942 SAFE distributed in June 2024. These tokens can be claimed by veANGLE and sdANGLE holders on Merkl",
          r(R + L),
        ],
        [
          "Distributed since inception",
          e.jsxs(e.Fragment, {
            children: [
              `• 100,942 SAFE (worth ${r(
                L
              )}) in June 2024 (claimable on Merkl)`,
              e.jsx("br", {}),
              `• 500,000 PYTH (worth ${r(
                R
              )}) in March 2024 (claimable on Merkl)`,
              e.jsx("br", {}),
              `• 1,189,860 sanUSDC_EUR (worth ${r(P)}) claimable on this page`,
            ],
          }),
          r(R + P + L),
        ],
      ];
    return (
      x.useEffect(() => {
        var D, V, W;
        p([
          {
            name: "ANGLE",
            address: (D = J(a)) == null ? void 0 : D.ANGLE,
            chainId: a,
          },
          {
            name: "veANGLE",
            address: (V = J(a)) == null ? void 0 : V.veANGLE,
            chainId: a,
          },
          {
            name: "FeeDistributor",
            address: (W = J(a)) == null ? void 0 : W.FeeDistributor_sanUSDC_EUR,
            chainId: a,
          },
        ]);
      }, [a, p]),
      e.jsx("main", {
        className: "container flex justify-center",
        children: e.jsxs("div", {
          className: "lg:w-2/3 xl:w-1/2",
          children: [
            e.jsx(dd, {
              claimable: M.from(b == null ? void 0 : b.totalClaimable, 6),
              setTxHash: c,
              visible: A,
              setVisible: f,
            }),
            e.jsx(_t, {
              chainId: null,
              title: "Lock",
              description:
                "Lock your ANGLE and get veANGLE to vote, boost your rewards, and earn interest.",
              headerLogo: ad,
              headerLogoAlt: "Lock page logo",
              logoClassName: "md:!w-24 xl:!w-28",
            }),
            e.jsxs("section", {
              className: "grid grid-cols-12 gap-4 lg:gap-6",
              children: [
                e.jsxs("div", {
                  className:
                    "col-span-12 w-full rounded-md bg-black-700 p-6 lg:col-span-7",
                  children: [
                    e.jsxs("div", {
                      className: "line mb-1 flex justify-between",
                      children: [
                        e.jsx("p", {
                          className: " flex items-center",
                          children: "veANGLE Supply",
                        }),
                        as(i == null ? void 0 : i.totalSupply),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "line mb-1 flex justify-between",
                      children: [
                        e.jsx(se, {
                          overlayClassName: "text-sm",
                          placement: "right",
                          title:
                            "Percentage of ANGLE locked against the current ANGLE circulating supply.",
                          children: e.jsx("p", {
                            className: "flex items-center",
                            children: "% Circ. ANGLE Supply Locked",
                          }),
                        }),
                        `${as(
                          ((i == null ? void 0 : i.totalLocked) /
                            (o == null ? void 0 : o.circulatingSupply)) *
                            100
                        )} %`,
                      ],
                    }),
                    e.jsxs("div", {
                      className: "line mb-1 flex justify-between",
                      children: [
                        e.jsx("p", {
                          className: "flex items-center",
                          children: "Average Lock Time",
                        }),
                        e.jsx(se, {
                          overlayClassName: "text-sm",
                          placement: "right",
                          title: `${
                            (i == null ? void 0 : i.totalLocked) > 0
                              ? Zr(
                                  ((i == null ? void 0 : i.totalSupply) * 4) /
                                    (i == null ? void 0 : i.totalLocked)
                                )
                              : "0"
                          }`,
                          children: e.jsx("div", {
                            className: "flex items-center",
                            children: `${
                              (i == null ? void 0 : i.totalLocked) > 0
                                ? as(
                                    ((i == null ? void 0 : i.totalSupply) * 4) /
                                      (i == null ? void 0 : i.totalLocked)
                                  )
                                : "0"
                            } years`,
                          }),
                        }),
                      ],
                    }),
                    e.jsx("hr", { className: "my-4" }),
                    e.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        e.jsx("img", {
                          className: "mr-3 w-8",
                          src: rd,
                          alt: "angle logo",
                        }),
                        e.jsxs("div", {
                          className: "w-full",
                          children: [
                            e.jsxs("div", {
                              className: "mb-1 flex w-full justify-between",
                              children: [
                                e.jsx("p", {
                                  className: "flex items-center font-bold",
                                  children: "My veANGLE Balance",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 font-bold",
                                  children: [
                                    as(
                                      (_ = M.from(
                                        i == null ? void 0 : i.balance
                                      )) == null
                                        ? void 0
                                        : _.toNumber()
                                    ),
                                    (i == null ? void 0 : i.locked) > 0 &&
                                      e.jsx(se, {
                                        overlayClassName: "text-sm",
                                        placement: "right",
                                        title:
                                          (i == null ? void 0 : i.locked) > 0 &&
                                          e.jsxs(e.Fragment, {
                                            children: [
                                              as(i == null ? void 0 : i.locked),
                                              " ANGLE Locked Until",
                                              " ",
                                              Oe.unix(
                                                i == null ? void 0 : i.endLock
                                              ).format("MMM Do YYYY"),
                                              " (",
                                              e.jsx(se, {
                                                placement: "top",
                                                overlayClassName: "text-sm",
                                                title: Zr(
                                                  ((i == null
                                                    ? void 0
                                                    : i.endLock) -
                                                    Oe().unix()) /
                                                    (3600 * 24 * 365)
                                                ),
                                                icon: !1,
                                                children: e.jsxs("span", {
                                                  className: "font-bold",
                                                  children: [
                                                    (
                                                      ((i == null
                                                        ? void 0
                                                        : i.endLock) -
                                                        Oe().unix()) /
                                                      (3600 * 24 * 365)
                                                    ).toFixed(3),
                                                    " y",
                                                  ],
                                                }),
                                              }),
                                              ")",
                                            ],
                                          }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex w-full justify-between",
                              children: [
                                e.jsx("p", {
                                  className: "flex items-center font-bold",
                                  children: "My ANGLE Balance",
                                }),
                                e.jsx("div", {
                                  className: "flex items-center font-bold",
                                  children: as(
                                    (F = M.from(
                                      o == null ? void 0 : o.balance
                                    )) == null
                                      ? void 0
                                      : F.toNumber()
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "col-span-12 flex flex-col gap-2 lg:col-span-5",
                  children: O.map(([D, V, W]) =>
                    e.jsx(Ul, {
                      clickable: !1,
                      className: "bg-black-700",
                      title: D,
                      tooltip: V,
                      data: W,
                    })
                  ),
                }),
                e.jsxs("div", {
                  className:
                    "border-gradient-peach500-purple500-blue500 overflow-hidden graph ease col-span-12 row-start-2 h-min w-full lg:col-span-14 lg:row-start-auto",
                  children: [
                    (i == null ? void 0 : i.endLock) > Oe().unix()
                      ? e.jsxs(e.Fragment, {
                          children: [j && e.jsx(xd, {}), e.jsx(cd, {})],
                        })
                      : (i == null ? void 0 : i.endLock) > 0
                      ? e.jsx(e.Fragment, {
                          children: e.jsxs("div", {
                            className:
                              "border-b px-6 py-6 dark:border-blue-500 md:px-10",
                            children: [
                              e.jsxs("div", {
                                className: "flex",
                                children: [
                                  e.jsx(hn, {
                                    className: "mr-4 dark:text-blue-500",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h4", {
                                        className: "mb-1 dark:text-sand-500",
                                        children: s("Your lock has expired"),
                                      }),
                                      e.jsx("p", {
                                        className: "mb-4 dark:text-black-200",
                                        children: `Your lock expired on the ${Oe.unix(
                                          i == null ? void 0 : i.endLock
                                        ).format(
                                          "MMM Do YYYY"
                                        )} and you can withdraw ${as(
                                          i == null ? void 0 : i.locked
                                        )} ANGLE`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(We, {
                                disabled: !1,
                                className: "mx-auto",
                                onClick: async (D) => await l.withdraw(D),
                                children: s("Withdraw Angle"),
                              }),
                            ],
                          }),
                        })
                      : e.jsxs("div", {
                          className: "p-6 dark:bg-black-500",
                          children: [
                            e.jsxs("div", {
                              className: "mb-4 flex gap-2.5",
                              children: [
                                e.jsx(fn, { className: "dark:text-blue-500" }),
                                e.jsxs("div", {
                                  className: "w-full",
                                  children: [
                                    e.jsx("h4", {
                                      className: "mb-1 dark:text-sand-500",
                                      children:
                                        (i == null ? void 0 : i.endLock) > 0
                                          ? "Manage your locked ANGLE"
                                          : "Lock ANGLE",
                                    }),
                                    e.jsx("p", {
                                      className: "dark:text-black-200",
                                      children:
                                        "Get voting power, boost your rewards, and earn interest with veANGLE.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex lg:flex-row flex-col gap-2",
                              children: [
                                e.jsx(Me.Int256, {
                                  className: "w-full",
                                  size: "s",
                                  header: [
                                    "Amount of ANGLE",
                                    e.jsx(rt, {
                                      value: M.from(
                                        o == null ? void 0 : o.balance
                                      ),
                                      onClick: y,
                                    }),
                                  ],
                                  state: [m, y],
                                  suffix: e.jsx(Y, {
                                    onClick: () =>
                                      y(M.from(o == null ? void 0 : o.balance)),
                                    look: "secondary",
                                    size: "x-small",
                                    children: "MAX",
                                  }),
                                }),
                                e.jsx(Me.Date, {
                                  size: "s",
                                  className: "w-full",
                                  header: ["Lock Until"],
                                  state: [k, S],
                                  suffix: [
                                    e.jsx(Y, {
                                      type: "button",
                                      look: "secondary",
                                      size: "x-small",
                                      onClick: () =>
                                        S(Oe().startOf("day").add(1, "y")),
                                      children: s("1y"),
                                    }),
                                    e.jsx(Y, {
                                      type: "button",
                                      look: "secondary",
                                      size: "x-small",
                                      onClick: () =>
                                        S(Oe().startOf("day").add(2, "y")),
                                      children: s("2y"),
                                    }),
                                    e.jsx(Y, {
                                      type: "button",
                                      look: "secondary",
                                      size: "x-small",
                                      onClick: () =>
                                        S(
                                          Oe.unix(
                                            Oe().unix() + 4 * 365 * 86400 - 3600
                                          )
                                        ),
                                      children: s("4y"),
                                    }),
                                    e.jsx(T, { mui: "CalendarMonthOutlined" }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "mb-3 mt-4",
                              children: e.jsxs("p", {
                                className: "dark:text-sand-500",
                                children: [
                                  m != null && m.gt(0)
                                    ? k
                                      ? e.jsxs(e.Fragment, {
                                          children: [
                                            "Your starting balance will be",
                                            " ",
                                            e.jsx("span", {
                                              className: "font-bold",
                                              children:
                                                m && k
                                                  ? as(
                                                      ((m == null
                                                        ? void 0
                                                        : m.toNumber()) *
                                                        ((k == null
                                                          ? void 0
                                                          : k.unix()) -
                                                          Oe().unix())) /
                                                        (Oe()
                                                          .startOf("day")
                                                          .add(4, "y")
                                                          .unix() -
                                                          Oe().unix())
                                                    )
                                                  : "-",
                                            }),
                                            " ",
                                            "veANGLE",
                                          ],
                                        })
                                      : s("Select the date where lock ends")
                                    : s("Select an amount of ANGLE to lock"),
                                  " ",
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex",
                              children: [
                                d !== st &&
                                  e.jsx(ca, {
                                    className: "button primary",
                                    usePermit: !1,
                                    useETH: !1,
                                    amount: m,
                                    approvalState: C,
                                    approve: $,
                                    additionalDisable: !k,
                                  }),
                                e.jsxs(We, {
                                  className: "ml-4",
                                  disabled:
                                    C !== Os.APPROVED ||
                                    !(m != null && m.gt(0)) ||
                                    !k,
                                  onClick: async (D) => {
                                    await l.lock(D, m, k.unix());
                                  },
                                  children: [
                                    e.jsx(pn, { className: "mr-2" }),
                                    "Create Lock",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    M.from(b == null ? void 0 : b.totalClaimable, 6).gt(0) &&
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-y-2 px-6 py-3 md:px-10",
                        children: [
                          e.jsx(bn, { className: "mr-2 dark:text-blue-500" }),
                          e.jsxs("p", {
                            className: "mr-4 dark:text-sand-500",
                            children: [
                              "You can currently claim",
                              " ",
                              e.jsxs("span", {
                                className: "font-bold",
                                children: [
                                  Ce(
                                    (G = M.from(
                                      b == null ? void 0 : b.totalClaimable,
                                      6
                                    )) == null
                                      ? void 0
                                      : G.toNumber(),
                                    3
                                  ),
                                  " sanUSDC_EUR",
                                  n != null && n.sanUSDC_EUR
                                    ? ` (${r(
                                        n.sanUSDC_EUR *
                                          ((re = M.from(
                                            b == null
                                              ? void 0
                                              : b.totalClaimable,
                                            6
                                          )) == null
                                            ? void 0
                                            : re.toNumber())
                                      )})`
                                    : null,
                                ],
                              }),
                            ],
                          }),
                          e.jsx(Y, {
                            type: "button",
                            look: "primary",
                            onClick: () => {
                              f(!0);
                            },
                            disabled:
                              M.from(
                                b == null ? void 0 : b.totalClaimable,
                                6
                              ).eq(0) || g,
                            children: "Claim interest",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  jd = () => (
    ge(),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("header", {
          className: "container",
          children: e.jsxs("div", {
            className: "mb-6 w-full lg:w-1/2",
            children: [
              e.jsx(Es, {
                to: xe.security,
                children: e.jsx(Y, {
                  look: "back",
                  className: "mb-3",
                  children: "Back to Security",
                }),
              }),
              e.jsx("h1", { children: "Nexus Mutual" }),
            ],
          }),
        }),
        e.jsx("main", {
          className: "container",
          children: e.jsxs("div", {
            className: "w-full dark:text-sand-500 lg:w-1/2",
            children: [
              e.jsx("h6", {
                className: "mb-3 dark:text-sand-500",
                children: "What is Nexus Mutual?",
              }),
              e.jsx("p", {
                className: "mb-4",
                children:
                  "Nexus Mutual is a decentralized mutual protocol acting similarly to an insurance. It provides cover to DeFi users to protect their investments against smart contract risks on various protocols.",
              }),
              e.jsx("h6", {
                className: "mb-3 dark:text-sand-500",
                children: "How does it work?",
              }),
              e.jsxs("p", {
                className: "mb-4",
                children: [
                  "If one of Angle`s smart contracts fails and you were paying for coverage, Nexus Mutual members should vote to cover your loss.",
                  e.jsx("br", {}),
                  e.jsx("a", {
                    className: "underlined",
                    href: ke.nexusInfo,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "More information here.",
                  }),
                  " ",
                ],
              }),
              e.jsxs("h6", {
                className: "mb-3 flex items-center dark:text-sand-500",
                children: [
                  "What is the premium? ",
                  e.jsx(xr, { className: "ml-2 dark:text-peach-500" }),
                ],
              }),
              e.jsxs("p", {
                className: "mb-4",
                children: [
                  "Currently 2.60% per year, but it may vary depending on",
                  " ",
                  e.jsx("a", {
                    className: "underlined",
                    href: ke.nexusFactors,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "various factors.",
                  }),
                  " ",
                  "You can also get a discount when paying for the cover in NXM tokens.",
                ],
              }),
              e.jsx("h6", {
                className: "mb-3 dark:text-sand-500",
                children: "The cover is sold out, what can I do?",
              }),
              e.jsxs("p", {
                className: "mb-8",
                children: [
                  "If you want to buy a significant amount of cover on Angle Smart Contracts and there is not enough available, feel free to reach our team out on",
                  " ",
                  e.jsx("a", {
                    className: "underlined",
                    href: ke.angleDiscord,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "Telegram.",
                  }),
                ],
              }),
              e.jsx(Y, {
                type: "button",
                look: "primary",
                onClick: () => window.open(ke.nexus, "_blank"),
                rightIcon: e.jsx(T, { mui: "CallMadeOutlined" }),
                children: "Buy Nexus Mutual cover",
              }),
            ],
          }),
        }),
      ],
    })
  ),
  gd = "/assets/prots-logo-de986d49.svg",
  [Nd, yd, Zm] = oa({
    rank: ["Rank", "minmax(70px,80px)", "justify-start"],
    user: ["Holder", "minmax(100px,1fr)", "justify-start"],
    points: ["Prots", "minmax(100px,1fr)", "justify-end"],
  }),
  wd = () => {
    const { t: s } = ge(),
      { data: t } = ze("points", { age: "5m" }),
      r = x.useMemo(() => {
        var v;
        return (v = Object.entries(t ?? {})) == null
          ? void 0
          : v
              .sort(([N, w], [c, A]) => A - w)
              .map(([N, w], c) => ({ user: N, points: w, rank: `#${c + 1}` }));
      }, [t]),
      l =
        r == null
          ? void 0
          : r.reduce((v, N) => v + (N == null ? void 0 : N.points), 0),
      [a, n] = x.useState(),
      [d, o] = x.useState(10),
      [i, b] = x.useState(),
      {
        sample: h,
        setSorting: u,
        ...p
      } = na(
        r,
        ({ user: v }) => {
          var N;
          return (a && a === "X" && Lt(v)) || (a === "Protocol" && !Lt(v))
            ? !1
            : i
            ? (N = i == null ? void 0 : i.split(" ")) == null
              ? void 0
              : N.every((w) =>
                  v == null
                    ? void 0
                    : v
                        .toLowerCase()
                        .includes(w == null ? void 0 : w.toLowerCase())
                )
            : !0;
        },
        [i, a],
        ["rank", "descending"],
        (v, N, w, c) => {
          var f, g, j, k;
          const A = (S, m) => {
            if (N === "ascending") return (S ?? 0) - (m ?? 0);
            if (N === "descending") return (m ?? 0) - (S ?? 0);
          };
          switch (v) {
            case "rank":
              return A(
                Number.parseInt(
                  (f = c.rank) == null ? void 0 : f.replace(/[^0-9]/g, "")
                ),
                Number.parseInt(
                  (g = w.rank) == null ? void 0 : g.replace(/[^0-9]/g, "")
                )
              );
            case "points":
              return A(
                Number.parseInt(
                  (j = c.rank) == null ? void 0 : j.replace(/[^0-9]/g, "")
                ),
                Number.parseInt(
                  (k = w.rank) == null ? void 0 : k.replace(/[^0-9]/g, "")
                )
              );
          }
        },
        d
      );
    return e.jsx("div", {
      className: "container flex justify-center",
      children: e.jsxs("div", {
        className: "w-full lg:w-2/3 xl:w-1/2",
        children: [
          e.jsx(_t, {
            title: s("Prots Leaderboard"),
            description: s(
              "Create content about Angle's stablecoins or integrate USDA or stUSD in your protocol and earn Prots."
            ),
            headerLogo: gd,
            headerLogoAlt: "Prots page logo",
            logoClassName: "md:!w-28 xl:!w-32",
          }),
          e.jsxs("div", {
            className:
              "grid gap-4 lg:gap-6 items-center grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]",
            children: [
              [
                ["Total Prots Distributed", l],
                ["Total Prots Holders", r == null ? void 0 : r.length],
              ].map(([v, N], w) =>
                e.jsx(
                  Ul,
                  {
                    clickable: !1,
                    className: "dark:!bg-black-700 border-gradient-multiple",
                    title: v,
                    data: N,
                  },
                  w
                )
              ),
              e.jsxs("p", {
                children: [
                  s("Learn how to earn Prots by "),
                  e.jsx(Y, {
                    look: "purple",
                    className: "enabled",
                    onClick: () => {
                      window.open(ke.integrationProgram);
                    },
                    children: s(" integrating USDA/stUSD "),
                  }),
                  s(" or by "),
                  e.jsx(Y, {
                    look: "purple",
                    onClick: () => {
                      window.open(ke.integrationProgramPost);
                    },
                    children: s(" creating content."),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2 items-center mt-8 mb-4",
            children: [
              e.jsx(T, {
                mui: "EmojiEvents",
                size: "l",
                className: "large dark:text-blue-500",
              }),
              e.jsx("h4", {
                className: "dark:text-purple-500",
                children: s("Leaderboard"),
              }),
              e.jsx("span", {
                className: "block mx-1 w-px h-6 dark:bg-purple-500",
              }),
              e.jsx("p", {
                className: "dark:text-purple-100",
                children: s("Updated every day"),
              }),
            ],
          }),
          e.jsx(Nd, {
            unsortable: ["user"],
            container: !1,
            onSort: (...v) => u(v),
            header: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Me, {
                  state: [i, b],
                  className: "min-w-64",
                  placeholder: "Search by handle or address",
                  suffix: e.jsx(T, { mui: "Search" }),
                }),
                e.jsx(Y, {
                  type: "tag",
                  className: a === "X" && "enabled",
                  onClick: () => {
                    n((v) => (v === "X" ? void 0 : "X"));
                  },
                  children: s("X Users"),
                }),
                e.jsx(Y, {
                  type: "tag",
                  className: a === "Protocol" && "enabled",
                  onClick: () => {
                    n((v) => (v === "Protocol" ? void 0 : "Protocol"));
                  },
                  children: s("Protocols"),
                }),
              ],
            }),
            footer: e.jsx(vo, { ...p, amountPerPage: d, setAmountPerPage: o }),
            loading: !(r != null && r.length),
            className: "mt-2",
            children:
              h == null
                ? void 0
                : h.map(({ user: v, points: N, rank: w }, c) => {
                    const A = !Lt(v);
                    return e.jsx(
                      yd,
                      {
                        className: "[&>*]:font-bold",
                        rankColumn: e.jsx(Fs, { color: "purple", children: w }),
                        userColumn: e.jsxs("span", {
                          className: "hidden-actions gap-2 flex",
                          children: [
                            A ? v : e.jsx(Fa, { toCopy: v, children: Ma(v) }),
                            A &&
                              e.jsx(Y, {
                                onClick: () =>
                                  window.open(`https://x.com/${v}`),
                                look: "text",
                                className: "action",
                                onlyIcon: A
                                  ? e.jsx(T, {
                                      className: "dim",
                                      size: "s",
                                      svg: "x",
                                    })
                                  : e.jsx(T, { svg: "etherscan" }),
                              }),
                          ],
                        }),
                        pointsColumn: N,
                      },
                      c
                    );
                  }),
          }),
          e.jsx(Dl.div, {
            className: "mt-8 dark:bg-black-500 !p-4 md:!p-8 rounded-lg",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.7 },
            children: e.jsx(Vl, {
              noDocs: !0,
              embedded: !0,
              faqs: [
                "What are Prots?",
                "How to earn Prots on X?",
                "How to earn Prots by integrating USDA?",
                "Why are there Ethereum addresses and X usernames on the leaderboard?",
                "How will ANGLE tokens be distributed?",
              ],
              title: "FAQ",
            }),
          }),
          " ",
        ],
      }),
    });
  },
  ta = 365 * 24 * 60 * 60;
async function kd(s, t, r) {
  r || (r = "stEUR");
  try {
    return await Ad(s, t, r);
  } catch {
    return await vd(s, t);
  }
}
async function vd(s, t) {
  const r = _l(s),
    l = Da`
        query Query($where: SavingsBalance_filter, $savingsPricesWhere: SavingsPrice_filter, $historicalSavingsBalancesWhere: HistoricalSavingsBalance_filter, $orderBy: HistoricalSavingsBalance_orderBy, $orderDirection: OrderDirection) {
            savingsBalances(where: $where) {
                accrued
                price
                deposited
                shares
            }
            savingsPrices(where: $savingsPricesWhere) {
                price
                lastUpdate
            }
            historicalSavingsBalances(where: $historicalSavingsBalancesWhere, orderBy: $orderBy, orderDirection: $orderDirection) {
                accrued
                deposited
                shares
                id
                timestamp
                user
            }
        }
    `,
    a = 5e3,
    n = r.query({
      query: l,
      variables: {
        where: { id: t.toLowerCase() },
        savingsPricesWhere: { id: "0" },
        historicalSavingsBalancesWhere: { user: t.toLowerCase() },
        orderBy: "timestamp",
        orderDirection: "asc",
      },
    }),
    d = new Promise((o, i) => {
      setTimeout(() => {
        i(new Error("TheGraph query timed out"));
      }, a);
    });
  try {
    const { data: o } = await Promise.race([n, d]);
    if (o.savingsBalances.length > 0) {
      const i = Number.parseFloat(o.savingsBalances[0].accrued),
        b = Number.parseFloat(o.savingsBalances[0].deposited),
        h = Number.parseFloat(o.savingsBalances[0].price),
        u = Number.parseFloat(o.savingsPrices[0].price),
        p = i + (u - h) * (b + i),
        v = new Date().getTime() / 1e3;
      let N = "0%";
      if (o.historicalSavingsBalances.length === 0)
        return { accrued: 0, deposited: 0, shares: 0, apr: "0%" };
      {
        const c = [];
        for (let g = 0; g < o.historicalSavingsBalances.length; g++) {
          const j = o.historicalSavingsBalances[g];
          if (Number.parseInt(j.shares) === 0) continue;
          let k = 0,
            S = 0;
          if (g < o.historicalSavingsBalances.length - 1) {
            const m = o.historicalSavingsBalances[g + 1];
            (S = Number.parseInt(m.timestamp) - Number.parseInt(j.timestamp)),
              (k =
                (((100 * ta) / S) *
                  (Number.parseFloat(m.accrued) -
                    Number.parseFloat(j.accrued))) /
                Number.parseFloat(j.deposited));
          } else
            (S = v - Number.parseInt(j.timestamp)),
              (k =
                (((100 * ta) / S) * (p - Number.parseFloat(j.accrued))) /
                Number.parseFloat(j.deposited));
          c.push({ delta: S, apr: k });
        }
        let A = 0,
          f = 0;
        for (const g of c) (A += g.apr * g.delta), (f += g.delta);
        N = (A / f).toFixed(2) + "%";
      }
      return {
        accrued: p,
        deposited: b,
        shares: Number.parseFloat(o.savingsBalances[0].shares),
        apr: N,
      };
    }
    return { accrued: 0, deposited: 0, shares: 0, apr: "0%" };
  } catch {
    return { accrued: 0, deposited: 0, shares: 0, apr: "0%" };
  }
}
async function Ad(s, t, r) {
  r || (r = "stEUR");
  const l = _l(s),
    a = Da`
        query Query($where: SavingsBalance_filter, $savingsPricesWhere: SavingsPrice_filter, $historicalSavingsBalancesWhere: HistoricalSavingsBalance_filter, $orderBy: HistoricalSavingsBalance_orderBy, $orderDirection: OrderDirection) {
            savingsBalances(where: $where) {
                accrued
                price
                deposited
                shares
            }
            savingsPrices(where: $savingsPricesWhere) {
                price
                lastUpdate
            }
            historicalSavingsBalances(where: $historicalSavingsBalancesWhere, orderBy: $orderBy, orderDirection: $orderDirection) {
                accrued
                deposited
                shares
                id
                timestamp
                user
            }
        }
    `,
    n = 5e3,
    d = l.query({
      query: a,
      variables: {
        where: { id: `${r}_${t.toLowerCase()}` },
        savingsPricesWhere: { id: r },
        historicalSavingsBalancesWhere: {
          user: t.toLowerCase(),
          agTokenSymbol: r,
        },
        orderBy: "timestamp",
        orderDirection: "asc",
      },
    }),
    o = new Promise((b, h) => {
      setTimeout(() => {
        h(new Error("TheGraph query timed out"));
      }, n);
    }),
    { data: i } = await Promise.race([d, o]);
  if (i.savingsBalances.length > 0) {
    const b = Number.parseFloat(i.savingsBalances[0].accrued),
      h = Number.parseFloat(i.savingsBalances[0].deposited),
      u = Number.parseFloat(i.savingsBalances[0].price),
      v = (Number.parseFloat(i.savingsPrices[0].price) / u) * (h + b) - h,
      N = new Date().getTime() / 1e3;
    let w = "0%";
    if (i.historicalSavingsBalances.length === 0)
      return { accrued: 0, deposited: 0, shares: 0, apr: "0%" };
    {
      const A = [];
      for (let j = 0; j < i.historicalSavingsBalances.length; j++) {
        const k = i.historicalSavingsBalances[j];
        if (Number.parseInt(k.shares) === 0) continue;
        let S = 0,
          m = 0;
        if (j < i.historicalSavingsBalances.length - 1) {
          const y = i.historicalSavingsBalances[j + 1];
          (m = Number.parseInt(y.timestamp) - Number.parseInt(k.timestamp)),
            (S =
              (((100 * ta) / m) *
                (Number.parseFloat(y.accrued) - Number.parseFloat(k.accrued))) /
              Number.parseFloat(k.deposited));
        } else
          (m = N - Number.parseInt(k.timestamp)),
            (S =
              (((100 * ta) / m) * (v - Number.parseFloat(k.accrued))) /
              Number.parseFloat(k.deposited));
        A.push({ delta: m, apr: S });
      }
      let f = 0,
        g = 0;
      for (const j of A) (f += j.apr * j.delta), (g += j.delta);
      w = (f / g).toFixed(2) + "%";
    }
    return {
      accrued: v,
      deposited: h,
      shares: Number.parseFloat(i.savingsBalances[0].shares),
      apr: w,
    };
  }
  return { accrued: 0, deposited: 0, shares: 0, apr: "0%" };
}
function lt(s, t, r) {
  var R, L;
  const l = bs(),
    a = os[s],
    { chainId: n, address: d, prices: o } = oe(),
    i = x.useMemo(
      () => (Ss(s, ["savings"]).includes(n) ? n : je.MAINNET),
      [s, n]
    ),
    { data: b } = ze("savings", [i], { age: "10m" }),
    h = x.useMemo(() => (b == null ? void 0 : b[i]) === void 0, [i, b]),
    [u, p] = x.useState(0),
    v = Ls((R = J(i, s)) == null ? void 0 : R.AgToken),
    N = Ls((L = J(i, s)) == null ? void 0 : L.Savings),
    w = at(N == null ? void 0 : N.address, !1),
    [c, A] = x.useState(),
    [f, g] = x.useState(),
    j = !!t && t !== 0,
    k = () => {
      var D, V, W;
      const O = (D = b == null ? void 0 : b[i]) == null ? void 0 : D[a],
        E = O == null ? void 0 : O.apy,
        U =
          (V = O == null ? void 0 : O.totalAssets) == null
            ? void 0
            : V.toNumber(),
        _ =
          (W = O == null ? void 0 : O.totalSupply) == null
            ? void 0
            : W.toNumber(),
        G =
          (((r == null ? void 0 : r.toNumber()) ??
            (w == null ? void 0 : w.toNumber())) *
            U) /
          _,
        re = G * E * (o == null ? void 0 : o[a]);
      return {
        apy: hs((O == null ? void 0 : O.apy) * 100, 2),
        totalStaked: hs(U),
        position: hs(G),
        accrued: l(Math.max(0, u), { overrideCurrency: s }),
        yearlyEarnings: l(re, { overrideCurrency: s }),
        monthlyEarnings: l(re / 12, { overrideCurrency: s }),
      };
    };
  function S() {
    var me, Ne, be;
    if (!j) return {};
    const O = (me = b == null ? void 0 : b[i]) == null ? void 0 : me[a],
      E = O == null ? void 0 : O.apy,
      U =
        (Ne = O == null ? void 0 : O.totalAssets) == null
          ? void 0
          : Ne.toNumber(),
      _ =
        (be = O == null ? void 0 : O.totalSupply) == null
          ? void 0
          : be.toNumber(),
      F = (t * U) / _,
      re =
        (((r == null ? void 0 : r.toNumber()) ??
          (w == null ? void 0 : w.toNumber())) *
          U) /
        _,
      D = re + F,
      W =
        re * E * (o == null ? void 0 : o[a]) +
        F * E * (o == null ? void 0 : o[a]);
    return {
      position: D < 0 ? 0 : hs(Math.max(D, 0)),
      yearlyEarnings: W < 0 ? 0 : l(Math.max(W, 0), { overrideCurrency: s }),
      monthlyEarnings:
        W < 0 ? 0 : l(Math.max(W / 12, 0), { overrideCurrency: s }),
    };
  }
  const m = x.useMemo(k, [b, i, w, r, t, u, v, l]),
    y = x.useMemo(S, [m, j]),
    C = !!u && u > 0;
  x.useEffect(() => {
    !i ||
      !d ||
      !(o != null && o[a]) ||
      kd(i, d, `st${s}`).then((O) => p(O.accrued * o[a]));
  }, [i, d, o, a]),
    x.useEffect(() => {
      async function O(F, G, re) {
        try {
          const D = await (
            await fetch(`${Hn}savingsApr?from=${F}&to=${G}`)
          ).json();
          D && re(D);
        } catch (D) {
          console.error("Could not fetch average APR", D);
        }
      }
      const E = Math.floor(Oe().unix()),
        U = E - 30 * 86400,
        _ = E - 30 * 2 * 86400;
      O(U, E, (F) => A(F)), O(_, E, (F) => g(F));
    }, []);
  const $ = 1695645682,
    P = Math.floor(Oe().unix()) >= $ + 30 * 2 * 86400;
  return {
    ...m,
    loading: h,
    preview: y,
    oneMonthAverageApy: c == null ? void 0 : c[a],
    twoMonthAverageApy: f == null ? void 0 : f[a],
    isAtLeast60DaysSinceDeployment: P,
    earnedAny: C,
  };
}
function Sd({ main: s, stats: t, faq: r }) {
  return e.jsx("section", {
    className: "container",
    children: e.jsxs("div", {
      className:
        "mx-auto md:w-11/12 lg:w-1/2 xl:w-2/5 flex flex-col gap-4 lg:gap-6",
      children: [
        e.jsxs("main", {
          className:
            "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 pb-6 md:pb-10",
          children: [
            e.jsx("hr", {
              className:
                "border-gradient-purple500-blue500 mb-4 md:mb-6 before:!rounded-b-none before:!px-0 before:!py-[5px]",
            }),
            s,
          ],
        }),
        e.jsx("aside", {
          className:
            "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 px-3 md:px-5 pb-4 pt-1",
          children: t,
        }),
        r,
      ],
    }),
  });
}
const aa = (s, t, r, l, a, n = 5, d = "quote", o = "v2", i = !0, b, h) =>
    d === "quote"
      ? {
          url: `https://api.odos.xyz/sor/${d}/${o}`,
          body: {
            chainId: s,
            compact: i,
            inputTokens: [
              {
                amount: a == null ? void 0 : a.toString(),
                tokenAddress: r === Qe ? Hr : r,
              },
            ],
            outputTokens: [{ proportion: 1, tokenAddress: l === Qe ? Hr : l }],
            referralCode: lo,
            userAddr: t,
            slippageLimitPercent: n,
            pathViz: !0,
            pathVizImage: !0,
            pathVizImageConfig: {
              linkColors: Object.values(Yt),
              nodeColor: Yt["black-400"],
              nodeTextColor: Yt["sand-500"],
              legendTextColor: Yt["sand-500"],
              height: 300,
            },
          },
        }
      : {
          url: `https://api.odos.xyz/sor/${d}?`,
          body: { userAddr: t, pathId: b, simulate: !1, receiver: h },
        },
  ya = async (s, t, r, l, a, n, d, o, i, b = je.MAINNET) => {
    let h, u, p, v, N, w, c;
    const A = async () => {
        var S, m;
        let k;
        try {
          const { url: y, body: C } =
            s === "1inch"
              ? ea(
                  b,
                  "v5.2",
                  "quote",
                  l.symbol === dt[b] ? Qe.toLowerCase() : l.address,
                  n.symbol === dt[b] ? Qe.toLowerCase() : n.address,
                  M.parse(a, l.decimals).raw,
                  i
                )
              : aa(b, t, l.address, n.address, a.raw, r, "quote", "v2", !0);
          k = (
            await Gs.post(`${Ms}/aggregator/quote`, {
              aggregator: s,
              url: y,
              body: C,
            })
          ).data;
          const $ = M.parse(a, l.decimals).raw,
            P = k.toAmount;
          return (
            (v = k.path),
            d(M.from(P, n == null ? void 0 : n.decimals)),
            (p =
              (m =
                (S = M.from(P, n == null ? void 0 : n.decimals)) == null
                  ? void 0
                  : S.mul(1e4 - r * 100)) == null
                ? void 0
                : m.div(1e4)),
            (N = k.gasEstimate),
            (w = k == null ? void 0 : k.gasEstimateValue),
            M.from(P, n == null ? void 0 : n.decimals).div(
              M.from($, l == null ? void 0 : l.decimals)
            )
          );
        } catch (y) {
          throw (
            (console.log(`❌ issue when calling quote api on ${s}: 
 ${y}`),
            new Error(
              `${s.toUpperCase()} API failed to return quote price for ${
                l.symbol
              } to ${n.symbol} swap`
            ))
          );
        }
      },
      f = async (k) => {
        let S;
        try {
          const { url: m, body: y } =
            s === "1inch"
              ? ea(
                  b,
                  "v5.2",
                  "quote",
                  l.symbol === dt[b] ? Qe.toLowerCase() : l.address,
                  n.symbol === dt[b] ? Qe.toLowerCase() : n.address,
                  M.parse(k, l.decimals).raw,
                  i
                )
              : aa(
                  b,
                  t,
                  l.address,
                  n.address,
                  M.parse(k, l.decimals).raw,
                  r,
                  "quote",
                  "v2",
                  !0
                );
          S = (
            await Gs.post(`${Ms}/aggregator/quote`, {
              aggregator: s,
              url: m,
              body: y,
            })
          ).data;
          const C = S.toAmount;
          return M.from(C, n == null ? void 0 : n.decimals).div(
            M.parse(k, l == null ? void 0 : l.decimals)
          );
        } catch (m) {
          throw (
            (console.log(`❌ issue when calling quote api on ${s}: 
 ${m}`),
            new Error(
              `${s.toUpperCase()} API failed to return quote price for ${
                l.symbol
              } to ${n.symbol} swap`
            ))
          );
        }
      },
      g = await A(),
      j = (await Promise.allSettled([f(10), f(1e3)])).map(
        (k) => k.status === "fulfilled" && k.value
      );
    (u = g),
      (h = j.reduce((k, S) => (!k || (S != null && S.gt(k)) ? S : k), null)),
      u &&
        h != null &&
        h.gt(0) &&
        (c =
          (((h == null ? void 0 : h.toNumber()) -
            (u == null ? void 0 : u.toNumber())) /
            (h == null ? void 0 : h.toNumber())) *
          100),
      o({
        marketRate: h,
        observedRate: u,
        minToAmount: p,
        routesArray: v,
        estimatedGas: N,
        priceImpact: c,
        gasEstimateValue: w,
      });
  },
  Cd = async (s, t, r, l, a, n, d, o, i, b = !0, h = je.MAINNET, u) => {
    var A, f;
    let p, v, N, w;
    const c = Math.round(o * 85) / 100;
    try {
      if (s === "odos")
        try {
          const { url: j, body: k } = aa(
            h,
            t,
            l.address,
            n.address,
            M.parse(a, l.decimals).raw,
            o,
            "quote",
            "v2",
            !0,
            r
          );
          w = (
            await Gs.post(`${Ms}/aggregator/quote`, {
              aggregator: "odos",
              url: j,
              body: k,
            })
          ).data.pathId;
        } catch (j) {
          throw (
            (console.log(j),
            new Error(`issue when calling quote route in odos api: ${j}`))
          );
        }
      try {
        const { url: j, body: k } =
          s === "1inch"
            ? ea(
                h,
                "v5.2",
                "swap",
                l.symbol === "ETH" ? Qe.toLowerCase() : l.address,
                n.address,
                M.parse(a, l.decimals).raw,
                i,
                t,
                c,
                b,
                Ol,
                r,
                u
              )
            : aa(
                h,
                t,
                l.address,
                n.address,
                M.parse(a, l.decimals).raw,
                o,
                "assemble",
                "v2",
                !0,
                w,
                r
              );
        p = (
          await Gs.post(`${Ms}/aggregator/swap`, {
            url: j,
            body: k,
            aggregator: s,
          })
        ).data;
      } catch (j) {
        throw (
          (console.error(j),
          new Error(`issue when calling swap/assemble route in ${s} api: ${j}`))
        );
      }
      const g =
        (f =
          (A = M.parse(p.toAmount, n == null ? void 0 : n.decimals)) == null
            ? void 0
            : A.mul(1e4 - c * 100)) == null
          ? void 0
          : f.div(1e4);
      if (d.gt(g))
        throw (
          (Ut({
            placement: "topRight",
            icon: "warning",
            message:
              "Transaction failed, please refresh market rates or increase slippage",
            duration: 5,
            isTxNotification: !0,
            summary: "transaction invalid",
          }),
          Error(
            `Market rates are out of date, please refresh them (${
              d == null ? void 0 : d.toExact()
            } vs ${g == null ? void 0 : g.toExact()})`
          ))
        );
      (v = M.parse(p.toAmount, n == null ? void 0 : n.decimals)),
        (N = p.payload);
    } catch (g) {
      console.log(g);
    }
    return { swappedValue: v, payload: N, to: p.to };
  },
  Ed = 10,
  jl = 45 * 1e3,
  Pd = 1e3 / 4;
function yr(s, t, r, l, a, n, d) {
  var z;
  const { t: o } = ge(),
    { chainId: i, provider: b, blockNumber: h, prices: u, gasPrice: p } = oe(),
    { data: v } = ze("savings", [i], { age: "10m" }),
    { execTransactions: N } = rs(),
    w = at(s == null ? void 0 : s.address, !1),
    [c, A] = x.useState(),
    { referrer: f } = Tl(),
    [g, j] = x.useState("odos"),
    [k, S] = x.useState(),
    [m, y] = x.useState({}),
    [C, $] = x.useState({}),
    [P, R] = x.useState();
  Ao(P, () => {
    R(void 0), S(void 0), d == null || d();
  });
  const [L, O] = x.useState(!1),
    [E, U] = x.useState(!1),
    [_, F] = (() => {
      if (E) {
        if ((t == null ? void 0 : t.symbol.substring(0, 2)) === "st")
          return [
            !1,
            o(
              `Can only buy ${t == null ? void 0 : t.symbol} from ${
                t == null ? void 0 : t.symbol.replace("st", "ag")
              } on ${ms[i]}`
            ),
          ];
        if ((s == null ? void 0 : s.symbol.substring(0, 2)) === "st")
          return [
            !1,
            o(
              `Can only sell ${s == null ? void 0 : s.symbol} for ${
                s == null ? void 0 : s.symbol.replace("st", "ag")
              } on ${ms[i]}`
            ),
          ];
      } else
        return !s || !t
          ? [!1, o("Select a token")]
          : !r || r.eq(0)
          ? [!1, o("Enter an amount")]
          : r != null && r.gt(w ?? M.from(0))
          ? [!1, o("Balance too low")]
          : a && !Lt(a)
          ? [!1, o("Recipient is not valid")]
          : L
          ? [!1, o("Unable to fetch route")]
          : [!0, void 0];
    })(),
    G = x.useMemo(() => {
      var le, X;
      if (!k || !C) return;
      const B = C[k];
      if (!B || B === "loading") return;
      const ee = {
        "1inch": (le = et[i]) == null ? void 0 : le.OneInchRouterV5,
        odos: (X = et[i]) == null ? void 0 : X.OdosRouterV2,
        angle: J(i).AngleRouterV2,
      }[B.aggregator];
      return O(!ee), ee ? Ns(ee) : void 0;
    }, [C, k, i]),
    re = Fl(l, s, G, r);
  x.useEffect(
    function () {
      var I;
      (I = et[i]) != null && I.OdosRouterV2 ? j("odos") : j("1inch");
    },
    [i]
  ),
    x.useEffect(
      function () {
        var pe;
        if (
          !s ||
          !t ||
          !r ||
          ((pe = r == null ? void 0 : r.eq) != null && pe.call(r, 0)) ||
          !l
        )
          return;
        let I = r;
        try {
          I = r.rebase(s == null ? void 0 : s.decimals);
        } catch {}
        const ee = {
            slippage: n,
            from: s,
            to: t,
            amount: I,
            address: l,
            chainId: i,
          },
          le = So(ee);
        if (k === le) return;
        const X = Object.keys(m).length + 1,
          q = Ed - X,
          fe =
            q <= 0
              ? Object.entries(m)
                  .sort(
                    ([ye, { timestamp: te }], [ce, { timestamp: Se }]) =>
                      Se - te
                  )
                  .splice(0, 0 - q)
                  .map(([ye]) => ye)
              : [];
        y((ye) => {
          const te = Date.now();
          return (
            ye[le] || (ye[le] = { ...ee, timestamp: te }),
            fe.forEach((ce) => delete ye[ce]),
            { ...ye }
          );
        }),
          S(le);
      },
      [s, t, r, l, i, n]
    );
  const D = x.useMemo(() => {
      var I, ee;
      return i !== je.MAINNET
        ? []
        : [
            ...Hs(i, ["swap"]).map((le) => {
              var X;
              return (X = J(i, Yn[le])) == null ? void 0 : X.AgToken;
            }),
            (I = et[i]) == null ? void 0 : I.ETH,
            (ee = et[i]) == null ? void 0 : ee.USDC,
          ];
    }, [i]),
    V = x.useMemo(() => {
      async function B(X, q) {
        y((fe) => (fe[X] && (fe[X].timestamp = Date.now()), fe)),
          $((fe) => ((fe[X] = q), { ...fe }));
      }
      function I(X, q) {
        const fe = (te, ce) =>
          ((X == null ? void 0 : X.address) === te &&
            (q == null ? void 0 : q.address) === ce) ||
          ((X == null ? void 0 : X.address) === ce &&
            (q == null ? void 0 : q.address) === te);
        return Hs(i, ["savings"]).some((te) => {
          var ce, Se;
          return fe(
            (ce = J(i, te)) == null ? void 0 : ce.AgToken,
            (Se = J(i, te)) == null ? void 0 : Se.Savings
          );
        });
      }
      function ee(X, q) {
        const pe = Hs(i, ["savings", "savingsDirect"]).map((ye) =>
          ye.replace("ag", "st")
        );
        return pe.includes(q.symbol) || pe.includes(X.symbol);
      }
      async function le(X) {
        var pe, ye;
        const q = m[X];
        if (
          !q ||
          (C[X] && q.timestamp + jl >= Date.now()) ||
          ya[X] === "loading"
        )
          return;
        $((te) => ((te[X] = "loading"), { ...te }));
        let fe = {};
        if ((A(void 0), I(q.from, q.to) && v != null && v[q.chainId])) {
          U(!1);
          const te = q.from.symbol.substring(0, 2) !== "st";
          A(te ? "stake" : "unstake");
          const ce =
              (pe = v == null ? void 0 : v[q.chainId]) == null
                ? void 0
                : pe[te ? q.from.symbol : q.to.symbol],
            Se = te
              ? q.amount
                  .mul(ce == null ? void 0 : ce.totalSupply)
                  .div(ce == null ? void 0 : ce.totalAssets)
              : q.amount.mul(ce.totalAssets).div(ce.totalSupply),
            we = Se.div(
              M.parse(q.amount, (ye = q.from) == null ? void 0 : ye.decimals)
            ),
            Re =
              p *
              10 ** -7 *
              143402 *
              10 ** -11 *
              (u == null ? void 0 : u[Ks == null ? void 0 : Ks[i]]);
          (fe = {
            ...fe,
            aggregator: "angle",
            marketRate: we,
            observedRate: we,
            minToAmount: Se,
            amountOut: Se,
            gasEstimateValue: Re,
            noSlippage: !0,
            priceImpact: 0,
          }),
            B(X, fe);
        } else if (ee(q.from, q.to)) U(!0);
        else {
          if ((U(!1), g === "angle")) return;
          const te = ["odos", "1inch"],
            ce = {
              odos: () =>
                ya(
                  "odos",
                  q.address,
                  q.slippage,
                  q.from,
                  q.amount,
                  q.to,
                  (we) => {
                    fe.amountOut = we;
                  },
                  (we) => {
                    fe = { aggregator: "odos", ...fe, ...we };
                  },
                  D,
                  q.chainId
                ),
              "1inch": () =>
                ya(
                  "1inch",
                  q.address,
                  q.slippage,
                  q.from,
                  q.amount,
                  q.to,
                  (we) => {
                    fe.amountOut = we;
                  },
                  (we) => {
                    fe = { aggregator: "1inch", ...fe, ...we };
                  },
                  D,
                  i
                ),
            },
            Se = async (we = 0) => {
              try {
                await (ce == null ? void 0 : ce[te[we]]());
              } catch {
                console.error("Could not fetch swap rate from", te[we]),
                  we < (te == null ? void 0 : te.length) && (await Se(we + 1));
              }
            };
          await Se(), B(X, fe);
        }
      }
      return Vt.debounce(async () => le(k), Pd);
    }, [k, C, m, g, D, i, v, p]);
  function W() {
    C[k] !== "loading" && ($((B) => ((B[k] = void 0), B)), Ne((B) => !B));
  }
  const [me, Ne] = x.useState(!1);
  x.useEffect(() => (V(), () => V.cancel()), [k, me]);
  const [be, ue] = x.useState(!1);
  x.useEffect(() => {
    const B = setInterval(() => ue((I) => !I), 500);
    return () => clearInterval(B);
  }, [k]);
  const ie = x.useMemo(() => {
    var B;
    return (
      C[k] !== void 0 &&
      Math.round(
        Math.max(
          ((B = m[k]) == null ? void 0 : B.timestamp) + jl - Date.now(),
          0
        ) / 1e3
      )
    );
  }, [C, k, m, be]);
  x.useEffect(() => {
    ie !== void 0 && ie < 1 && W();
  }, [ie]);
  const ve = x.useCallback(
    async (B) => {
      const I = C[k] === "loading" ? void 0 : C[k];
      if (!I) return;
      const ee = (le) => {
        no.swap(m[k], I, u), R(le), B(le);
      };
      switch (I == null ? void 0 : I.aggregator) {
        case "angle":
          return ((s == null ? void 0 : s.symbol.substring(0, 2)) === "st"
            ? "redeem"
            : "deposit") === "deposit"
            ? N.deposit4626(ee, !1, s, t, a ?? l, r, I.amountOut, f)
            : N.redeem4626(ee, s, t, a ?? l, r);
        default:
          const { swappedValue: X, payload: q } = await Cd(
            I == null ? void 0 : I.aggregator,
            l,
            a ?? l,
            s,
            r,
            t,
            I.minToAmount,
            n,
            D,
            !0,
            i
          );
          q &&
            (await N.aggregator_swap(
              ee,
              I == null ? void 0 : I.aggregator,
              q,
              s,
              t,
              r.rebase(s == null ? void 0 : s.decimals),
              I == null ? void 0 : I.amountOut,
              (s == null ? void 0 : s.address) === ra
            ));
          break;
      }
    },
    [l, a, r, i, D, k, N, s, C, t, n, f]
  );
  return {
    ...re,
    valid: _,
    reason: F,
    mode: c,
    refresh: W,
    lifetime: ie,
    quote: C[k] === "loading" ? void 0 : C[k],
    input: m[k],
    loading: k && (C[k] === "loading" || !C[k]),
    lastUpdated: (z = m[k]) == null ? void 0 : z.timestamp,
    swap: ve,
  };
}
function Nn({
  title: s,
  stablecoin: t,
  action: r,
  quote: l,
  from: a,
  to: n,
  slippage: d,
  setSlippage: o,
  info: i,
}) {
  var g, j, k, S, m, y, C, $, P, R, L, O, E;
  const { prices: b, chainId: h } = oe(),
    u = bs();
  x.useState(!1);
  const [p, v] = x.useState(!1);
  x.useState(!1);
  const N = Ls((g = J(h, t)) == null ? void 0 : g.Savings),
    w = Ls((j = J(h, t)) == null ? void 0 : j.AgToken),
    c =
      (n == null ? void 0 : n.symbol) === (N == null ? void 0 : N.symbol)
        ? `You will receive Angle Staked ${w == null ? void 0 : w.symbol} (${
            N == null ? void 0 : N.symbol
          }) tokens in exchange for your deposit. ${
            N == null ? void 0 : N.symbol
          } is a yield-bearing asset whose value increases over time by accruing Angle yield. Thus, 1 ${
            N == null ? void 0 : N.symbol
          } is worth more than ${t === "EUR" ? "€" : "$"}1.`
        : `Exchange the Angle ${
            N == null ? void 0 : N.symbol
          } yield-bearing stablecoins you received from depositing assets into the Angle savings solution. Please note that 1 ${
            N == null ? void 0 : N.symbol
          } is not equivalent to ${
            t === "EUR" ? "1€" : "$1"
          }, as its value continuously increases over time.`,
    A =
      (a == null ? void 0 : a.symbol) !==
        `${t == null ? void 0 : t.toUpperCase()}A` &&
      !(
        (a == null ? void 0 : a.symbol) ===
          `st${t == null ? void 0 : t.toUpperCase()}` &&
        (n == null ? void 0 : n.symbol) ===
          `${t == null ? void 0 : t.toUpperCase()}A`
      ),
    f =
      (b == null ? void 0 : b[(n == null ? void 0 : n.symbol) + "-" + h]) ??
      (b == null ? void 0 : b[n == null ? void 0 : n.symbol]);
  return e.jsxs("div", {
    className: "dark:text-white",
    children: [
      e.jsx(Za, {
        visible: p,
        setVisible: v,
        routesArray:
          (k = l == null ? void 0 : l.quote) == null ? void 0 : k.routesArray,
        inputToken: a,
        outputToken: n,
      }),
      e.jsxs("div", {
        className:
          "border-dotted dark:border-purple-500 flex flex-col gap-2 border p-4 rounded-lg gradient-black300-black500",
        children: [
          e.jsx("p", {
            className: "text-sm font-bold dark:text-black-100",
            children: "Transaction overview",
          }),
          s &&
            e.jsx("div", {
              className:
                "flex justify-between items-center border-b dark:border-black-200 pb-2",
              children: s,
            }),
          e.jsx(se, {
            dark: !0,
            title: c,
            children: e.jsxs("p", {
              className: "text-sm",
              children: [
                "Receive",
                " ",
                e.jsx(Te, {
                  loading: l == null ? void 0 : l.loading,
                  value: Ce(
                    ((m =
                      (S = l == null ? void 0 : l.quote) == null
                        ? void 0
                        : S.amountOut) == null
                      ? void 0
                      : m.toNumber()) ?? 0
                  ),
                }),
                " ",
                n == null ? void 0 : n.symbol,
                " worth",
                " ",
                e.jsxs("span", {
                  className: "font-bold dark:text-purple-500",
                  children: [
                    " ",
                    e.jsx(Te, {
                      loading: l == null ? void 0 : l.loading,
                      value: u(
                        f *
                          (((C =
                            (y = l == null ? void 0 : l.quote) == null
                              ? void 0
                              : y.amountOut) == null
                            ? void 0
                            : C.toNumber()) ?? 0),
                        { overrideCurrency: t }
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(ir, {
            loading: l == null ? void 0 : l.loading,
            exchangeRate: e.jsx(
              rr,
              {
                className: "justify-end select-none",
                rate:
                  (P =
                    ($ = l == null ? void 0 : l.quote) == null
                      ? void 0
                      : $.marketRate) == null
                    ? void 0
                    : P.toNumber(),
                inToken: a == null ? void 0 : a.symbol,
                outToken: n == null ? void 0 : n.symbol,
              },
              "exchange"
            ),
            gas: e.jsx(Y, {
              className: `${
                pt.L2.some((U) => U === h) && "hover:dark:!text-sand-500"
              } text-sm`,
              onClick: () =>
                !pt.L2.some((U) => U === h) &&
                window.open(Ps(h, "", "gas"), "_blank"),
              look: "text",
              leftIcon: e.jsx(T, {
                mui: "LocalGasStationSharp",
                className: "dark:!text-blue-500",
              }),
              children: e.jsx(Te, {
                loading:
                  (l == null ? void 0 : l.loading) || !(l != null && l.quote),
                value: u(
                  (R = l == null ? void 0 : l.quote) == null
                    ? void 0
                    : R.gasEstimateValue,
                  { formatNumberCompact: !0 }
                ),
              }),
            }),
            routes: {
              condition: A && "Routing",
              node: e.jsx("div", {
                className: "flex h-5 flex-wrap dark:text-sand-500",
                onClick: () => setShowRouteParser(!0),
                children: e.jsx(
                  Jl,
                  {
                    className: "flex justify-self-end w-fit",
                    onClick: () => v((U) => !U),
                    routesArray:
                      (L = l == null ? void 0 : l.quote) == null
                        ? void 0
                        : L.routesArray,
                    inputToken: a,
                    outputToken: n,
                  },
                  "route"
                ),
              }),
            },
            receiveAtLeast: {
              condition: !0,
              node: e.jsxs("p", {
                className: "dark:text-sand-500 font-bold text-sm",
                children: [
                  Ce(
                    (E =
                      (O = l == null ? void 0 : l.quote) == null
                        ? void 0
                        : O.minToAmount) == null
                      ? void 0
                      : E.toNumber()
                  ),
                  " ",
                  n == null ? void 0 : n.symbol,
                ],
              }),
            },
            slippage: d,
          }),
          e.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              e.jsx(T, {
                svg: "infoGolden",
                className: "text-gradient-sand500-peach500",
              }),
              e.jsx("p", {
                className: "text-sm text-gradient-sand500-peach500",
                children: i,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Rd({ stablecoin: s, tokens: t, recipientState: r }) {
  var y, C, $;
  const { chainId: l, address: a, prices: n } = oe(),
    { defaultSlippage: d, setSlippage: o } = Ze(),
    { refresh: i } = ze("balances"),
    b = Ls((y = J(l, s)) == null ? void 0 : y.Savings),
    h = Ls((C = J(l, s)) == null ? void 0 : C.AgToken),
    u = x.useMemo(() => b, [b]),
    [p, v] = x.useState(),
    [N] = gt([p]),
    w = gt(t),
    c = x.useMemo(() => {
      var O, E, U, _;
      if (w.every((F) => F === void 0)) return [];
      const P = t.map((F, G) =>
          Object.assign(F, { balance: w[G] ?? M.from(0) })
        ),
        R = P.filter(
          ({ symbol: F }) => F !== (h == null ? void 0 : h.symbol)
        ).sort((F, G) => G.balance.sub(F.balance).toNumber());
      return ((U =
        (E =
          (O = P.find(
            ({ symbol: F }) => F === (h == null ? void 0 : h.symbol)
          )) == null
            ? void 0
            : O.balance) == null
          ? void 0
          : E.gt) == null
        ? void 0
        : U.call(E, 0)) &&
        (R == null
          ? void 0
          : R.every(({ balance: F }) => {
              var G;
              return (G = F == null ? void 0 : F.eq) == null
                ? void 0
                : G.call(F, 0);
            }))
        ? P
        : [
            ((_ = R == null ? void 0 : R[0]) == null ? void 0 : _.symbol) !==
            (h == null ? void 0 : h.symbol)
              ? R == null
                ? void 0
                : R[0]
              : void 0,
            P.find(({ symbol: F }) => F === (h == null ? void 0 : h.symbol)),
            ...R.filter((F, G) => {
              var re;
              return (
                ((re = R == null ? void 0 : R[0]) == null
                  ? void 0
                  : re.symbol) === (h == null ? void 0 : h.symbol) || G !== 0
              );
            }),
          ].filter((F) => F);
    }, [w, t, l]);
  x.useEffect(() => {
    v(c == null ? void 0 : c[0]);
  }, [a, l]);
  const [A, f] = x.useState(),
    g = yr(p, b, A, a, r[0] ?? a, d, () => {
      f(void 0), r[1](void 0), i == null || i();
    }),
    j = x.useMemo(() => {
      var P;
      if (!(!n || !p || !u))
        return (P = A == null ? void 0 : A.div) == null
          ? void 0
          : P.call(
              A,
              M.parse(
                (n == null
                  ? void 0
                  : n[`${u == null ? void 0 : u.symbol}-${l}`]) /
                  (n == null ? void 0 : n[s]),
                u == null ? void 0 : u.decimals
              ) ?? 0
            );
    }, [p, u, n, A, l]),
    k = lt(s, 0, j),
    S = x.useMemo(
      () =>
        (g == null ? void 0 : g.quote) &&
        a &&
        a !== st &&
        (g == null ? void 0 : g.valid) &&
        (p == null ? void 0 : p.address) !== ra &&
        !(g != null && g.approval),
      [g, a, p]
    ),
    m = Ss(s, ["savingsNoSlippage"]).includes(l);
  return e.jsxs("div", {
    className: "flex flex-col gap-3",
    children: [
      e.jsx(Me.Int256, {
        placeholder: "0.0",
        look: "secondary",
        className: "!rounded-full",
        classNames: { subContainer: "!rounded-xl" },
        state: [A, f],
        base: p == null ? void 0 : p.decimals,
        header: [
          e.jsx(
            "span",
            { className: "text-uppercase", children: "Deposit" },
            "payer"
          ),
          e.jsx(rt, { value: N, onClick: f }, p == null ? void 0 : p.decimals),
        ],
        suffix:
          (c == null ? void 0 : c.length) &&
          e.jsx(nr, {
            symbols: c == null ? void 0 : c.map(({ symbol: P }) => P),
            value: p == null ? void 0 : p.symbol,
            onChange: (P) =>
              v(t == null ? void 0 : t.find(({ symbol: R }) => $t(R, P))),
          }),
      }),
      S
        ? e.jsx(We, {
            look: "primary",
            disabled:
              (g == null ? void 0 : g.approval) || !(g != null && g.quote),
            onClick: g == null ? void 0 : g.approve,
            className: "large !rounded-full flex-1",
            children: g != null && g.approval ? "Approved" : "Approve",
          })
        : e.jsx(We, {
            look: "primary",
            disabled:
              !(g != null && g.approval) ||
              !(g != null && g.quote) ||
              !(g != null && g.valid),
            onClick: g == null ? void 0 : g.swap,
            className: "large !rounded-full flex-1",
            children:
              (g == null ? void 0 : g.reason) ??
              (g != null && g.loading ? "Loading..." : "Deposit"),
          }),
      (($ = A == null ? void 0 : A.gt) == null ? void 0 : $.call(A, 0)) &&
        (g == null ? void 0 : g.reason) !== "Unable to fetch route" &&
        e.jsx(Nn, {
          info: `No slippage or fees for ${h == null ? void 0 : h.symbol} ${
            m ? `and ${s.toUpperCase()}C` : ""
          } deposits`,
          action: "deposit",
          quote: g,
          stablecoin: s,
          from: p,
          to: u,
          slippage: d,
          setSlippage: o,
          amount: A,
          title: e.jsxs("div", {
            className: "flex justify-between w-full",
            children: [
              e.jsx("p", {
                className: "text-lg font-bold",
                children: "Earnings",
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Te, {
                    loading: !j,
                    value: e.jsxs("p", {
                      className: "dark:text-black-200 font-bold",
                      children: [
                        "~",
                        k == null ? void 0 : k.yearlyEarnings,
                        " per year",
                      ],
                    }),
                  }),
                  e.jsxs(Y, {
                    type: "tag",
                    size: "small",
                    look: "secondary",
                    enabled: !0,
                    children: [k == null ? void 0 : k.apy, "%"],
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Id = ({ apy: s, agTKNBalance: t }) => {
  const [, r] = x.useState(ot(0)),
    [l, a] = x.useState("0"),
    [n, d] = x.useState("000"),
    o = 1e3,
    i = 25,
    [b, h] = x.useState(Math.floor(Date.now() / 1e3)),
    u = (p, v, N) => {
      const w = Math.floor(Date.now() / 1e3) - v,
        c = (1 + N) ** w,
        A = ot(c);
      return p.mul(A).div(ot(1));
    };
  return (
    x.useEffect(() => {
      h(Math.floor(Date.now() / 1e3)),
        r(t == null ? void 0 : t.value),
        a(Qr(t == null ? void 0 : t.value)),
        d(Xr(t == null ? void 0 : t.value, 12 - l.length));
    }, [t]),
    _o(() => {
      const p = s ? (1 + s / 100) ** 31709791983764586e-24 - 1 : 0,
        v = u(t == null ? void 0 : t.value, b, p);
      r((N) => {
        const w = v.sub(N),
          c = ot(i)
            .mul(ot(1 + p))
            .div(ot(o)),
          A = w.mul(c).div(ot(1)),
          f = N.add(A);
        return a(Qr(f)), d(Xr(f, 12 - l.length)), f;
      });
    }, i),
    e.jsxs("p", {
      className: "h4",
      children: [
        l,
        ".",
        e.jsx("span", { className: "h6", children: n }, "fractionalPart"),
      ],
    })
  );
};
function Ld({ onClick: s, savingsData: t }) {
  var d, o;
  const { stTKNBalance: r, agTKNBalance: l, figures: a, stTKN: n } = t;
  if (
    !(
      !r ||
      !l ||
      !(a != null && a.apy) ||
      ((d = l.value) != null && d.eq(0)) ||
      ((o = r.value) != null && o.eq(0))
    )
  )
    return e.jsxs("div", {
      className:
        "w-full md:col-span-2 border-gradient-multiple before:!p-[3px] p-4 gradient-black300-black500 flex flex-col",
      children: [
        e.jsxs("div", {
          className: "border-b dark:border-blue-500 pb-3 mb-3",
          children: [
            e.jsx("p", {
              className: "text-lg font-bold mb-2",
              children: "Your Savings",
            }),
            e.jsxs("div", {
              className: "flex gap-x-2 gap-y-1 mb-1 items-center flex-wrap",
              children: [
                e.jsx(Id, {
                  apy: Number((a == null ? void 0 : a.apy) ?? 0),
                  agTKNBalance: l,
                }),
                e.jsx(se, {
                  title: "Lifetime earned",
                  icon: !1,
                  children: e.jsxs("p", {
                    className:
                      "dark:bg-black-700 px-2 py-1 dark:text-green-500 font-bold rounded-md text-sm",
                    children: ["+", a == null ? void 0 : a.accrued],
                  }),
                }),
              ],
            }),
            e.jsxs("p", {
              className: "dark:text-black-200",
              children: [
                "= ",
                Ce(Qt(r.value)),
                " ",
                n == null ? void 0 : n.symbol,
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex flex-col gap-0.5 mb-2",
          children: [
            ["30-day projection", a == null ? void 0 : a.monthlyEarnings],
            ["APY", `${Ce((a == null ? void 0 : a.apy) ?? 0, 2)}%`],
          ].map(([i, b]) =>
            e.jsxs(
              "p",
              {
                className: "dark:text-black-100 text-sm",
                children: [
                  i,
                  ": ",
                  e.jsx("span", {
                    className: "dark:text-sand-500 font-bold",
                    children: b,
                  }),
                ],
              },
              i
            )
          ),
        }),
        e.jsx(Y, {
          onClick: s,
          size: "small",
          className: "mt-auto",
          children: "Withdraw",
        }),
      ],
    });
}
function $d({ savingsData: s }) {
  var w, c, A, f, g, j, k, S;
  const {
      balances: t,
      chainId: r,
      address: l,
      prices: a,
      stTKNBalance: n,
      agTKNBalance: d,
      stablecoin: o,
      stableTokens: i,
    } = s,
    b = x.useMemo(
      () =>
        i == null
          ? void 0
          : i.reduce((m, y) => {
              var $;
              const C = Object.values(
                (($ = t == null ? void 0 : t[r]) == null ? void 0 : $[l]) ?? {}
              ).find(({ symbol: P }) => $t(P, y == null ? void 0 : y.symbol));
              return Object.assign(m, {
                [y == null ? void 0 : y.symbol]: C == null ? void 0 : C.balance,
              });
            }, {}),
      [t, r, l, i]
    ),
    h = x.useMemo(() => {
      var m;
      return (m = Object.values(b ?? {})) == null
        ? void 0
        : m.reduce((y, C) => y.add(C ?? M.from(0)) ?? M.from(0), M.from(0));
    }, [b]),
    u = x.useMemo(() => !(t && i && b && n && d && h), [t, b, i, n, d, h]),
    p = lt(o, 0, h),
    v = bs(),
    N = x.useMemo(
      () =>
        e.jsxs("span", {
          children: [
            "This represents the current annual interest rate for assets deposited into the",
            " ",
            e.jsx("a", {
              className: "dark:text-blue-300",
              target: "_blank",
              rel: "noreferrer",
              href: `https://angle.money/st${
                o == null ? void 0 : o.toUpperCase()
              }`,
              children: "Angle Savings product.",
            }),
            " ",
            "The yield distributed to users comes from the Protocol's treasury earnings. The yield is stable, though it may fluctuate slightly. Users start earning immediately after depositing into the Savings solution.",
          ],
        }),
      [o]
    );
  if (!(u && (!n || !d || !(p != null && p.apy))))
    return u || (h != null && h.eq(0))
      ? e.jsxs("div", {
          className:
            "w-full first:col-span-5 md:col-span-2 border-gradient-peach500-purple500-blue500 p-4 gradient-black300-black500 flex flex-col h-fit",
          children: [
            e.jsxs("div", {
              className: "flex justify-between mb-1",
              children: [
                e.jsx("p", {
                  className: "text-lg font-bold mb-1",
                  children:
                    (w = n.value) != null && w.eq(0)
                      ? "Savings Opportunity"
                      : "Save More",
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(se, {
                      icon: !1,
                      title: N,
                      children: e.jsxs(Fs, {
                        color: "blue-gradient",
                        size: "small",
                        children: [
                          e.jsx(Te, {
                            loading:
                              !(p != null && p.apy) ||
                              (p == null ? void 0 : p.apy) === "NaN",
                            value: Ce(p == null ? void 0 : p.apy, 2),
                          }),
                          "% APY",
                        ],
                      }),
                    }),
                    e.jsx(se, {
                      dark: !0,
                      icon: !1,
                      title: e.jsxs("span", {
                        children: [
                          "This represents the current annual interest rate for assets deposited into the",
                          " ",
                          e.jsx("a", {
                            className: "dark:text-blue-300",
                            target: "_blank",
                            rel: "noreferrer",
                            href: `https://angle.money/st${
                              o == null ? void 0 : o.toUpperCase()
                            }`,
                            children: "Angle Savings product.",
                          }),
                          " ",
                          "The yield distributed to users comes from the Protocol's treasury earnings. The yield is stable, though it may fluctuate slightly. Users start earning immediately after depositing into the Savings solution.",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(se, {
              dark: !0,
              icon: !1,
              title: `You can deposit stablecoins such as ${
                (c = i == null ? void 0 : i.map(({ symbol: m }) => m)) == null
                  ? void 0
                  : c.join(", ")
              } on different networks.`,
              children: e.jsx("p", {
                className: "text-sm dark:text-black-100",
                children:
                  "Get stablecoins and deposit them to passively earn yield",
              }),
            }),
          ],
        })
      : e.jsxs("div", {
          className: `w-full ${
            (A = n.value) != null && A.eq(0) ? "md:col-span-4" : "md:col-span-2"
          } border-gradient-peach500-purple500-blue500 p-4 gradient-black300-black500 flex flex-col`,
          children: [
            e.jsxs("div", {
              className: "border-b dark:border-blue-500 pb-2 mb-2",
              children: [
                e.jsx("p", {
                  className: "text-lg font-bold mb-1",
                  children:
                    (f = n.value) != null && f.eq(0)
                      ? "Savings Opportunity"
                      : "Save More",
                }),
                e.jsx(se, {
                  icon: !1,
                  cardHeader: e.jsxs(e.Fragment, {
                    children: [
                      "Available Stablecoins",
                      e.jsx("br", {}),
                      e.jsx("span", {
                        className: "text-base font-bold dark:text-sand-100",
                        children: v(
                          Ce(
                            (h == null ? void 0 : h.toNumber()) *
                              (a == null ? void 0 : a[o]),
                            4
                          ),
                          { overrideCurrency: o }
                        ),
                      }),
                    ],
                  }),
                  placement: "right",
                  cardContent: e.jsx("div", {
                    className: "grid grid-cols-2 gap-x-4 gap-y-2",
                    children:
                      (g = Object.entries(b ?? {})) == null
                        ? void 0
                        : g
                            .filter((m) => m)
                            .map(([m, y]) =>
                              e.jsxs(
                                "p",
                                {
                                  className:
                                    "flex font-bold items-center gap-2",
                                  children: [
                                    e.jsx(T, { token: m, size: "l" }),
                                    " ",
                                    Ce(
                                      (y == null ? void 0 : y.toNumber()) ?? 0,
                                      3
                                    ),
                                    " ",
                                    m,
                                  ],
                                },
                                m
                              )
                            ),
                  }),
                  children:
                    (j = n.value) != null && j.gt(0)
                      ? e.jsxs("p", {
                          className:
                            "dark:text-black-100 inline w-full text-sm mr-2",
                          children: [
                            "You still own",
                            " ",
                            e.jsx("span", {
                              className: "font-bold dark:text-sand-500",
                              children: v(
                                (h == null ? void 0 : h.toNumber()) *
                                  (a == null ? void 0 : a[o]),
                                { overrideCurrency: o }
                              ),
                            }),
                            " ",
                            "of stablecoins that aren't generating yield. ",
                            e.jsx("br", {}),
                            "Deposit them and earn more!",
                          ],
                        })
                      : e.jsxs("span", {
                          className: "dark:text-black-100 w-full mr-2",
                          children: [
                            "You own",
                            " ",
                            e.jsx("span", {
                              className: "font-bold dark:text-sand-500",
                              children: v(
                                (h == null ? void 0 : h.toNumber()) *
                                  (a == null ? void 0 : a[o]),
                                { overrideCurrency: o }
                              ),
                            }),
                            " ",
                            "of stablecoins that aren't generating yield.",
                            e.jsx("br", {}),
                            "Deposit them and earn!",
                          ],
                        }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: `${
                (k = n.value) != null && k.eq(0) ? "md:grid-cols-2" : ""
              } grid gap-y-0.5 gap-x-2 w-full h-full`,
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(se, {
                          dark: !0,
                          icon: !1,
                          title:
                            "This is how much you'll earn in 30 days if you were to deposit all your stablecoins.",
                          children: e.jsx("p", {
                            className: "dark:text-black-100 text-sm",
                            children: "30-day projection",
                          }),
                        }),
                        e.jsxs("p", {
                          className: "dark:text-green-500 text-sm font-bold",
                          children: [
                            "+",
                            p == null ? void 0 : p.monthlyEarnings,
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(se, {
                          dark: !0,
                          icon: !1,
                          title:
                            "This is how much you'll earn in 1 year if you were to deposit all your stablecoins.",
                          children: e.jsx("p", {
                            className: "dark:text-black-100 text-sm",
                            children: "1-year projection",
                          }),
                        }),
                        e.jsxs("p", {
                          className:
                            "dark:text-green-500 text-sm font-bold ml-1",
                          children: [
                            "+",
                            p == null ? void 0 : p.yearlyEarnings,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: `${
                    (S = n.value) != null && S.eq(0)
                      ? "row-span-1 items-center"
                      : "mt-auto"
                  } flex gap-1.5`,
                  children: e.jsx(Fs, {
                    color: "blue-gradient",
                    size: "small",
                    children: e.jsxs(se, {
                      dark: !0,
                      icon: !1,
                      title: N,
                      children: [Ce(p == null ? void 0 : p.apy, 2), "% APY"],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
}
function Dd(s, t, r) {
  var h;
  const { chainId: l, prices: a } = Ua(),
    n = Ls((h = J(l, s)) == null ? void 0 : h.Savings),
    d = a == null ? void 0 : a[`${n == null ? void 0 : n.symbol}-${l}`],
    [o] = gt([n]),
    i = x.useMemo(() => {
      var p;
      if (!a) return;
      const u =
        (p = o == null ? void 0 : o.mul) == null
          ? void 0
          : p.call(
              o,
              M.parse(d / (a == null ? void 0 : a[s]), n.decimals) ?? 0
            );
      if (r && r < n.decimals) {
        const v = n.decimals - r,
          w = ((u == null ? void 0 : u.value.toString()) ?? "").slice(0, -v);
        return M.from(w || "0", r);
      }
      return u;
    }, [o, n, a, s, d, r]);
  return [
    x.useMemo(() => {
      var u, p;
      if (!(!a || !i))
        return t != null && t.eq(i)
          ? o
          : (p =
              (u = t == null ? void 0 : t.div) == null
                ? void 0
                : u.call(
                    t,
                    M.parse(
                      d / (a == null ? void 0 : a[s]),
                      n == null ? void 0 : n.decimals
                    ) ?? 0
                  )) == null
          ? void 0
          : p.rebase(n == null ? void 0 : n.decimals);
    }, [o, i, a, n, d, s, t, l]),
    i,
  ];
}
function Od({
  stablecoin: s,
  tokens: t,
  setWithdrawOpen: r,
  recipientState: l,
}) {
  var S, m, y;
  const { chainId: a, address: n } = oe(),
    { defaultSlippage: d, setSlippage: o } = Ze(),
    { refresh: i } = ze("balances"),
    b = Ls((S = J(a, s)) == null ? void 0 : S.Savings),
    h = Ls((m = J(a, s)) == null ? void 0 : m.AgToken),
    u = b,
    [p, v] = x.useState(h),
    [N, w] = x.useState(),
    [c, A] = Dd(s, N, p == null ? void 0 : p.decimals);
  x.useEffect(() => {
    v(h);
  }, [a]);
  const f = yr(u, p, c, n, l[0] ?? n, d, () => {
      w(void 0), l[1](void 0), i == null || i();
    }),
    g = lt(s, 0, c),
    j = Ss(s, ["savingsNoSlippage"]).includes(a),
    k = x.useMemo(
      () =>
        (f == null ? void 0 : f.quote) &&
        n &&
        n !== st &&
        (f == null ? void 0 : f.valid) &&
        (u == null ? void 0 : u.address) !== ra &&
        !(f != null && f.approval),
      [f, n, u]
    );
  return e.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      e.jsx(Me.Int256, {
        placeholder: "0.0",
        look: "secondary",
        className: "!rounded-full",
        classNames: { subContainer: "!rounded-xl" },
        state: [N, w],
        base: p == null ? void 0 : p.decimals,
        header: [
          e.jsx(
            "span",
            { className: "text-uppercase", children: "Withdraw" },
            "payer"
          ),
          e.jsx(rt, { value: A, onClick: w }, u == null ? void 0 : u.decimals),
        ],
        suffix: e.jsx(nr, {
          symbols:
            t == null
              ? void 0
              : t
                  .filter(({ symbol: C }) => j || C === `${s.toUpperCase()}A`)
                  .map(({ symbol: C }) => C),
          value: p == null ? void 0 : p.symbol,
          onChange: (C) =>
            v(t == null ? void 0 : t.find(({ symbol: $ }) => $t($, C))),
        }),
      }),
      k
        ? e.jsx(We, {
            look: "primary",
            disabled:
              (f == null ? void 0 : f.approval) || !(f != null && f.quote),
            onClick: f == null ? void 0 : f.approve,
            className: "large !rounded-full flex-1",
            children: f != null && f.approval ? "Approved" : "Approve",
          })
        : e.jsx(We, {
            look: "primary",
            disabled:
              !(f != null && f.approval) ||
              !(f != null && f.quote) ||
              !(f != null && f.valid),
            onClick: async (C) => {
              await (f == null ? void 0 : f.swap(C)), r(!1);
            },
            className: "large !rounded-full flex-1",
            children:
              (f == null ? void 0 : f.reason) ??
              (f != null && f.loading ? "Loading..." : "Withdraw"),
          }),
      ((y = N == null ? void 0 : N.gt) == null ? void 0 : y.call(N, 0)) &&
        (f == null ? void 0 : f.reason) !== "Unable to fetch route" &&
        e.jsx(Nn, {
          title: e.jsxs("span", {
            className: "block w-full",
            children: [
              "You will miss out on",
              " ",
              e.jsx("span", {
                className: "text-coral-500 font-bold",
                children: e.jsx(Te, {
                  value: g == null ? void 0 : g.monthlyEarnings,
                  loading: !1,
                }),
              }),
              " ",
              "in yield over the next 30 days by withdrawing ",
              Ce(N == null ? void 0 : N.toNumber()),
              " ",
              p == null ? void 0 : p.symbol,
            ],
          }),
          info: `Redeeming ${b == null ? void 0 : b.symbol} for ${
            h == null ? void 0 : h.symbol
          } ${j ? `or ${s}C` : ""} incurs no additional fees and no slippage`,
          action: "withdraw",
          quote: f,
          stablecoin: s,
          from: u,
          to: p,
          slippage: d,
          setSlippage: o,
          amount: N,
        }),
    ],
  });
}
function yn({ for: s, chains: t }) {
  const { chainId: r, switchChain: l } = oe();
  return e.jsxs("div", {
    className: "flex justify-center text-center flex-col w-full md:px-4 pb-4",
    children: [
      e.jsxs("p", {
        className:
          "dark:text-coral-500 font-bold mb-4 flex items-center justify-center gap-1",
        children: [e.jsx(Yr, { chainId: r }), " is not supported for ", s, "."],
      }),
      e.jsx("p", {
        className: "font-bold mb-2",
        children: "Please switch to one of the following networks:",
      }),
      e.jsx("div", {
        className: "px-2 flex justify-center gap-2 flex-wrap",
        children:
          t == null
            ? void 0
            : t.map((a) =>
                e.jsx(
                  Y,
                  {
                    onClick: () => l(a),
                    look: "secondary",
                    size: "small",
                    children: e.jsx(Yr, {
                      className: "align-middle",
                      chainId: a,
                    }),
                  },
                  a
                )
              ),
      }),
    ],
  });
}
La.defaultProps = {
  allowInverse: !0,
  defaultTokens: [void 0, void 0],
  lockOn: [],
  recipientState: [void 0, void 0],
};
function La({ stablecoin: s, recipientState: t }) {
  var A;
  const { data: r } = ze("balances", { age: "10s" }),
    { address: l, chainId: a, tokens: n, prices: d } = Ua(),
    o = Ls((A = J(a, s)) == null ? void 0 : A.Savings),
    { sharesBalance: i, assetsBalance: b } = Co(
      o == null ? void 0 : o.address,
      r
    ),
    h = lt(s, 0),
    u = x.useMemo(
      () =>
        ({
          USD: ["USDA", "USDC", "USDS", "USDT", "DAI"],
          EUR: ["EURA", "EUROC", "EURC"],
        }[s]),
      [s]
    ),
    p = x.useMemo(
      () => ({ USD: ["USDA", "USDC"], EUR: ["EURA", "EUROC", "EURC"] }[s]),
      [s]
    ),
    v = x.useMemo(
      () =>
        u == null
          ? void 0
          : u
              .map((f) => {
                var k;
                const g = Object.values((n == null ? void 0 : n[a]) ?? {}).find(
                    ({ symbol: S }) => $t(S, f)
                  ),
                  j = Object.values(
                    ((k = r == null ? void 0 : r[a]) == null ? void 0 : k[l]) ??
                      {}
                  ).find(({ symbol: S }) => $t(S, f));
                return !g || !j ? null : { ...g, balance: j.balance };
              })
              .filter((f) => f !== null),
      [a, u, r, n, l]
    ),
    [N, w] = x.useState(!1),
    c = x.useMemo(
      () => ({
        figures: h,
        stTKNBalance: i,
        agTKNBalance: b,
        stTKN: o,
        balances: r,
        chainId: a,
        address: l,
        prices: d,
        stablecoin: s,
        stableTokens: v,
      }),
      [h, i, b, o, r, a, l, d, s, v, N]
    );
  return Ss(s, ["savings"]).includes(a)
    ? e.jsxs("div", {
        className: "dark:text-white -mt-4 flex flex-col gap-3  pt-3",
        children: [
          e.jsx(us, {
            wrapClassName: "modal-small modal-light",
            title: "Withdraw from savings",
            onCancel: () => w(!1),
            visible: N,
            children: e.jsx(Od, {
              stablecoin: s,
              tokens:
                v == null
                  ? void 0
                  : v.filter(({ symbol: f }) =>
                      p == null ? void 0 : p.includes(f)
                    ),
              setWithdrawOpen: w,
              recipientState: t,
            }),
          }),
          e.jsxs("div", {
            className: "grid md:grid-cols-4 gap-4",
            children: [
              e.jsx(Ld, { onClick: () => w((f) => !f), savingsData: c }),
              e.jsx($d, { savingsData: c }),
            ],
          }),
          e.jsx(Rd, { stablecoin: s, tokens: v, recipientState: t }),
        ],
      })
    : e.jsx(yn, {
        for: `earning ${s === "EUR" ? "euros" : "dollars"}`,
        chains: Ss(s, ["savings"]),
      });
}
function Md({ stablecoin: s }) {
  const [t, r] = x.useState(""),
    [, l] = x.useState(null),
    a = lt("USD", 0),
    n = lt("EUR", 0),
    d = x.useMemo(
      () => [
        {
          key: "1",
          label: e.jsxs("p", {
            className: "flex items-center gap-2 font-bold",
            children: [
              "Earn Dollars",
              (a == null ? void 0 : a.apy) !== "0" &&
                e.jsxs(Fs, {
                  color: "black",
                  size: "small",
                  children: [
                    e.jsx(Te, {
                      loading:
                        !(a != null && a.apy) ||
                        (a == null ? void 0 : a.apy) === "NaN",
                      value: Ce(a == null ? void 0 : a.apy, 2),
                    }),
                    "%",
                  ],
                }),
            ],
          }),
          children: e.jsx(La, { stablecoin: "USD", recipientState: [t, r] }),
        },
        {
          key: "2",
          label: e.jsxs("p", {
            className: "flex items-center gap-2 font-bold",
            children: [
              "Earn Euros",
              (n == null ? void 0 : n.apy) !== "0" &&
                e.jsxs(Fs, {
                  color: "black",
                  size: "small",
                  children: [
                    e.jsx(Te, {
                      loading:
                        !(n != null && n.apy) ||
                        (n == null ? void 0 : n.apy) === "NaN",
                      value: Ce(n == null ? void 0 : n.apy, 2),
                    }),
                    "%",
                  ],
                }),
            ],
          }),
          children: e.jsx(La, { stablecoin: "EUR", recipientState: [t, r] }),
        },
      ],
      [n, a]
    ),
    o = Nt(),
    i = $a(),
    b = x.useMemo(() => {
      var h;
      return (h = i == null ? void 0 : i.pathname) != null &&
        h.split("/").includes("eur")
        ? "EUR"
        : "USD";
    }, [i]);
  return e.jsx(Bt, {
    extra: e.jsx(or, {
      wrapperClassname: "mt-0",
      chains: Ss(s, ["savings"]),
      pageSettings: { recipient: t, setRecipient: r, setSlippageWarning: l },
    }),
    className: "px-4 md:px-5 [&_.ant-tabs-tab]:!pt-0",
    defaultActiveKey: b === "USD" ? "1" : "2",
    onChange: (h) =>
      h !== "1"
        ? o("/savings/eur", { replace: !0 })
        : o("/savings/usd", { replace: !0 }),
    items: d,
  });
}
function gl({ stablecoin: s, faqs: t }) {
  const { chainId: r, address: l } = oe(),
    { setContracts: a } = Ze();
  bs();
  const [n, d] = x.useState(),
    [o, i] = x.useState(),
    [b, h] = x.useState("stake"),
    u = $a(),
    p = x.useMemo(() => {
      var w;
      return (w = u == null ? void 0 : u.pathname) != null &&
        w.split("/").includes("usd")
        ? "USD"
        : s;
    }, [u, s]),
    v = lt(p, 0),
    N = [
      {
        key: "1",
        label: "Statistics",
        children: e.jsxs("div", {
          className: "flex flex-col gap-1",
          children: [
            e.jsxs("div", {
              className: "flex justify-between gap-2 items-center",
              children: [
                e.jsx(se, {
                  icon: !1,
                  dark: !0,
                  title: "Average annual interest rate over the past 30 days.",
                  children: e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: "30-day average APY",
                  }),
                }),
                e.jsxs("p", {
                  className: "font-bold text-sm dark:text-sand-500",
                  children: [
                    e.jsx(Te, {
                      loading:
                        !(v != null && v.oneMonthAverageApy) ||
                        Number.isNaN(v == null ? void 0 : v.oneMonthAverageApy),
                      value: Ce(
                        (v == null ? void 0 : v.oneMonthAverageApy) * 100,
                        2
                      ),
                    }),
                    "%",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-between gap-2 items-center",
              children: [
                e.jsx(se, {
                  icon: !1,
                  dark: !0,
                  title: "Average annual interest rate over the past 60 days.",
                  children: e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: "60-day average APY",
                  }),
                }),
                e.jsxs("p", {
                  className: "font-bold text-sm dark:text-sand-500",
                  children: [
                    e.jsx(Te, {
                      loading:
                        !(v != null && v.twoMonthAverageApy) ||
                        Number.isNaN(v == null ? void 0 : v.twoMonthAverageApy),
                      value: Ce(
                        (v == null ? void 0 : v.twoMonthAverageApy) * 100,
                        2
                      ),
                    }),
                    "%",
                  ],
                }),
              ],
            }),
            l &&
              (v == null ? void 0 : v.accrued) &&
              "123456789".split("").some((w) => {
                var c;
                return (c = v == null ? void 0 : v.accrued) == null
                  ? void 0
                  : c.includes(w);
              }) &&
              e.jsxs("div", {
                className: "flex justify-between gap-2 items-center",
                children: [
                  e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: "Lifetime earned",
                  }),
                  e.jsx("p", {
                    className: "font-bold text-sm dark:text-sand-500",
                    children: v == null ? void 0 : v.accrued,
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "flex justify-between gap-2 items-center",
              children: [
                e.jsx("p", {
                  className: "text-sm dark:text-black-100",
                  children: "Deposit fees",
                }),
                e.jsx("p", {
                  className: "font-bold text-sm dark:text-sand-500",
                  children: "0%",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-between gap-2 items-center",
              children: [
                e.jsx("p", {
                  className: "text-sm dark:text-black-100",
                  children: "Management fees",
                }),
                e.jsx("p", {
                  className: "font-bold text-sm dark:text-sand-500",
                  children: "0%",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-between gap-2 items-center",
              children: [
                e.jsx("p", {
                  className: "text-sm dark:text-black-100",
                  children: "Withdrawal fees",
                }),
                e.jsx("p", {
                  className: "font-bold text-sm dark:text-sand-500",
                  children: "0%",
                }),
              ],
            }),
          ],
        }),
      },
      {
        key: "2",
        label: "Performance",
        children: e.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            e.jsxs("p", {
              className: "dark:text-sand-500 font-bold mb-2",
              children: [
                "Evolution of a ",
                s === "USD" ? "$100" : "100€",
                " deposit in the Savings product over time",
              ],
            }),
            e.jsx(Fo, { stablecoin: os[p] }),
          ],
        }),
      },
    ];
  return (
    x.useEffect(() => {
      var w, c, A, f;
      a([
        {
          name: os[s],
          address: (w = J(r, s)) == null ? void 0 : w.AgToken,
          chainId: r,
        },
        {
          name: `st${s}`,
          address: (c = J(r, s)) == null ? void 0 : c.Savings,
          chainId: r,
        },
        {
          name: "1inch Router",
          address: (A = et[r]) == null ? void 0 : A.OneInchRouterV5,
          chainId: r,
        },
        {
          name: "Odos Router",
          address: (f = et[r]) == null ? void 0 : f.OdosRouterV2,
          chainId: r,
        },
      ]);
    }, [r, a, s]),
    Ss(s, ["savings"]),
    e.jsx(Sd, {
      main: e.jsx(Md, {
        mode: b,
        stablecoin: s,
        onFromAmountChange: d,
        onToAmountChange: i,
        onModeChange: h,
      }),
      stats: e.jsx(Bt, {
        defaultActiveKey: "1",
        items: N,
        tabBarExtraContent: e.jsx(T, {
          token: `st${p == null ? void 0 : p.toUpperCase()}`,
          size: "l",
        }),
        extra: e.jsx(T, {
          size: "l",
          token: `st${s == null ? void 0 : s.toUpperCase()}`,
        }),
      }),
      faq: e.jsx(Vl, {
        embedded: !0,
        extraButton: e.jsx(Y, {
          type: "button",
          look: "secondary",
          onClick: () => window.open(ke.angleGuides, "_blank"),
          rightIcon: e.jsx(T, { mui: "CallMade" }),
          children: "User guides",
        }),
        faqs: t,
        docUrl: ke.angleSavingsDocs,
      }),
    })
  );
}
function Nl() {
  return e.jsx(e.Fragment, {
    children: e.jsxs(ft, {
      children: [
        e.jsx(Pe, {
          path: "/eur",
          element: e.jsx(gl, {
            stablecoin: "EUR",
            faqs: [
              "How does the Angle savings product work?",
              "What’s stUSD and stEUR?",
              "Where does the yield come from?",
              "When will I start earning?",
              "What are the risks?",
              "What’s Angle Protocol?",
            ],
          }),
        }),
        e.jsx(Pe, {
          index: !0,
          path: "/*",
          element: e.jsx(gl, {
            stablecoin: "USD",
            faqs: [
              "How does the Angle savings product work?",
              "What’s stUSD and stEUR?",
              "Where does the yield come from?",
              "When will I start earning?",
              "What are the risks?",
              "What’s Angle Protocol?",
            ],
          }),
        }),
      ],
    }),
  });
}
const Fd = ({
  recipient: s,
  inputToken: t,
  outputToken: r,
  marketRate: l,
  fromAmount: a,
  slippage: n,
  minOutputAmount: d,
  routesArray: o,
  gasEstimateValue: i,
  shouldMintOrBurn: b = !1,
  actionType: h,
  loading: u = !1,
  priceImpact: p,
  noSlippage: v,
  slippageWarning: N,
}) => {
  const [w, c] = x.useState(!1),
    A = bs(),
    { chainId: f } = oe();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Za, {
        visible: w,
        setVisible: c,
        routesArray: o,
        inputToken: t,
        outputToken: r,
      }),
      !!d &&
        !!t &&
        !!r &&
        !!a &&
        e.jsx(ir, {
          loading: u,
          exchangeRate: e.jsx(rr, {
            rate: l == null ? void 0 : l.toNumber(),
            inToken:
              h === "mint" || h === "swap"
                ? t == null
                  ? void 0
                  : t.symbol
                : r == null
                ? void 0
                : r.symbol,
            outToken:
              h === "mint" || h === "swap"
                ? r == null
                  ? void 0
                  : r.symbol
                : t == null
                ? void 0
                : t.symbol,
          }),
          gas: e.jsx(Y, {
            className: `${
              pt.L2.some((g) => g === f) && "hover:dark:!text-sand-500"
            } text-sm`,
            onClick: () =>
              !pt.L2.some((g) => g === f) &&
              window.open(Ps(f, "", "gas"), "_blank"),
            look: "text",
            leftIcon: e.jsx(T, {
              mui: "LocalGasStationSharp",
              className: "dark:!text-blue-500",
            }),
            children: e.jsx(Te, {
              loading: u,
              value: A(Number.parseFloat(Ce(i, 2))),
            }),
          }),
          routes: {
            condition: (!!o || (b && !!a)) && !!t && !!r,
            node: e.jsx("div", {
              className: "flex h-5 flex-wrap dark:text-sand-500",
              onClick: () => c(!0),
              children: e.jsx(Jl, {
                routesArray: o,
                inputToken: t,
                outputToken: r,
              }),
            }),
          },
          priceImpact: {
            noSlippage: v,
            priceImpact: p,
            node: e.jsxs("p", {
              className: `text-sm font-bold ${
                p > 3 ? "dark:text-coral-500" : "dark:text-sand-500"
              }`,
              children: [
                p <= 0.1 ? "< 0.1" : p == null ? void 0 : p.toFixed(2),
                " %",
              ],
            }),
          },
          receiveAtLeast: {
            condition: !!d && !!t && !!r && !!a,
            node: e.jsx("p", {
              className: "dark:text-sand-500 font-bold text-sm",
              children: `${d == null ? void 0 : d.toFixed(3)} ${
                r == null ? void 0 : r.symbol
              }`,
            }),
          },
          recipient: {
            recipient: s,
            node: e.jsx(Y, {
              look: "text",
              rightIcon: e.jsx(T, { size: "s", mui: "CallMadeOutlined" }),
              onClick: () => window.open(Ps(f, s, "address"), "_blank"),
              className: "font-bold text-sm dark:text-sand-500",
              children: s,
            }),
          },
          slippage: n,
        }),
      !!N &&
        e.jsx("div", {
          className: "flex justify-center font-bold dark:text-coral-500",
          children: N,
        }),
    ],
  });
};
wn.defaultProps = {
  allowInverse: !0,
  defaultTokens: [void 0, void 0],
  lockOn: [],
};
function wn({
  allowInverse: s,
  lockOn: t,
  defaultTokens: r,
  removeSlippageControl: l,
  wipe: a = !0,
  onAmountInChange: n,
  onAmountOutChange: d,
  onTokenInChange: o,
  onTokenOutChange: i,
  hideOutput: b,
}) {
  var ve;
  const { t: h } = ge(),
    { address: u, prices: p, chainId: v } = oe(),
    { defaultSlippage: N, setSlippage: w } = Ze(),
    [c, A] = x.useState(""),
    [f, g] = x.useState(null),
    [j, k] = x.useState(r[0]),
    S = at(j == null ? void 0 : j.address, !1),
    [m, y] = x.useState(r[1]),
    C = at(m == null ? void 0 : m.address, !1),
    [$, P] = x.useState(),
    R = bs(),
    {
      valid: L,
      reason: O,
      quote: E,
      loading: U,
      approval: _,
      lastUpdated: F,
      lifetime: G,
      refresh: re,
      approve: D,
      swap: V,
      mode: W,
    } = yr(
      j,
      m,
      $,
      u,
      (c == null ? void 0 : c.length) > 0 ? c : null,
      N,
      () => {
        P(void 0), A(""), a && k(t == null ? void 0 : t[0]);
      }
    ),
    me = E && u && u !== st && L && (j == null ? void 0 : j.address) !== ra;
  function Ne() {
    let z = [void 0, void 0];
    j && m
      ? (z = [m, j])
      : j && !m
      ? (z = [void 0, j])
      : m && !j && (z = [m, void 0]),
      k(z[0]),
      y(z[1]),
      E && E !== "loading" && P(E == null ? void 0 : E.amountOut);
  }
  x.useEffect(() => {
    n == null || n($);
  }, [$]),
    x.useEffect(() => {
      d == null || d(E !== "loading" && (E == null ? void 0 : E.amountOut));
    }, [E]),
    x.useEffect(() => {
      o == null || o(j);
    }, [j]),
    x.useEffect(() => {
      i == null || i(m);
    }, [m]),
    x.useEffect(() => {
      k(void 0), P(void 0), y(r[1]);
    }, [v]);
  const [be, ue] = x.useMemo(() => {
      const z = (B) =>
        Kt != null && Kt.map((I) => `st${I}`).includes(B)
          ? (p == null ? void 0 : p[`${B}-${v}`]) ?? (p == null ? void 0 : p[B])
          : p == null
          ? void 0
          : p[B];
      return [
        z(j == null ? void 0 : j.symbol),
        z(m == null ? void 0 : m.symbol),
      ];
    }, [j, m, p, v]),
    ie = Array.from(
      [Ss("EUR", ["swap"]), Ss("USD", ["swap"]), yt.swap].reduce((z, B) => {
        for (const I of B) z.add(I);
        return z;
      }, new Set())
    );
  return ie.includes(v)
    ? e.jsxs("div", {
        className:
          "-mt-4 flex flex-col gap-3 px-4 pb-6 md:px-6 md:pb-10 lg:px-5 pt-3",
        children: [
          e.jsx(or, {
            chains: ie,
            pageSettings: {
              recipient: c,
              setRecipient: A,
              setSlippageWarning: g,
            },
            refreshData: {
              loading: U,
              lastUpdated: F,
              lifetime: G,
              refresh: re,
            },
          }),
          e.jsxs("div", {
            children: [
              e.jsx(Me.Int256, {
                placeholder: "0.0",
                look: "secondary",
                className: "!rounded-full",
                classNames: { subContainer: "!rounded-xl" },
                state: [$, P],
                base: j == null ? void 0 : j.decimals,
                header: [
                  e.jsxs(
                    "span",
                    {
                      className: "text-uppercase",
                      children: [
                        "You sell",
                        " ",
                        be &&
                          $ &&
                          e.jsxs("span", {
                            className: "dark:text-black-200",
                            children: [
                              "~",
                              R(be * ($ == null ? void 0 : $.toNumber())),
                            ],
                          }),
                      ],
                    },
                    "payer"
                  ),
                  e.jsx(
                    rt,
                    { value: S, onClick: P },
                    j == null ? void 0 : j.address
                  ),
                ],
                suffix: e.jsx(Ea, {
                  currency: [j, k],
                  disable: [m, j],
                  disabled: t.some(
                    (z) =>
                      (z == null ? void 0 : z.symbol) ===
                        (j == null ? void 0 : j.symbol) && !!j
                  ),
                }),
              }),
              e.jsx("div", {
                className:
                  "relative z-10 flex h-3 w-full items-center overflow-visible",
                children:
                  s &&
                  e.jsx("button", {
                    type: "button",
                    className: "mx-auto",
                    onClick: Ne,
                    children: e.jsx("div", {
                      id: "swapIcon",
                      className: "!h-7 !w-7 cursor-pointer",
                      children: e.jsx(cn, {}),
                    }),
                  }),
              }),
              !b &&
                e.jsx(Me.Int256, {
                  loading: U,
                  placeholder: "0.0",
                  look: "secondary",
                  classNames: { subContainer: "!rounded-xl" },
                  state: [
                    $ && E !== "loading" && (E == null ? void 0 : E.amountOut),
                    P,
                  ],
                  base: m == null ? void 0 : m.decimals,
                  disabled: !0,
                  header: [
                    e.jsxs(
                      "span",
                      {
                        className: "text-uppercase",
                        children: [
                          "YOU RECEIVE",
                          " ",
                          ue &&
                            (E == null ? void 0 : E.amountOut) &&
                            e.jsxs("span", {
                              className: "dark:text-black-200",
                              children: [
                                "~",
                                R(
                                  ue *
                                    ((ve = E == null ? void 0 : E.amountOut) ==
                                    null
                                      ? void 0
                                      : ve.toNumber())
                                ),
                              ],
                            }),
                        ],
                      },
                      "receiver"
                    ),
                    e.jsx(rt, { value: C }, "balance"),
                  ],
                  suffix: e.jsx(Ea, {
                    currency: [m, y],
                    disable: [m, j],
                    disabled: t.some(
                      (z) =>
                        (z == null ? void 0 : z.symbol) ===
                          (m == null ? void 0 : m.symbol) && !!m
                    ),
                  }),
                }),
            ],
          }),
          e.jsx(Fd, {
            noNetworkFee:
              E !== "loading" &&
              (E == null ? void 0 : E.gasEstimateValue) === 0,
            noSlippage:
              l || (E !== "loading" && (E == null ? void 0 : E.noSlippage)),
            recipient: c,
            setRecipient: A,
            inputToken: j,
            outputToken: m,
            marketRate:
              E !== "loading" && (E == null ? void 0 : E.observedRate),
            fromAmount: $ == null ? void 0 : $.toNumber(),
            slippage: N,
            setSlippage: w,
            minOutputAmount:
              E !== "loading" && (E == null ? void 0 : E.minToAmount),
            routesArray:
              E !== "loading" && (E == null ? void 0 : E.routesArray),
            gasEstimateValue:
              E !== "loading" && (E == null ? void 0 : E.gasEstimateValue),
            shouldMintOrBurn: !1,
            actionType: "swap",
            loading: U,
            priceImpact:
              E !== "loading" && (E == null ? void 0 : E.priceImpact),
            slippageWarning: f,
          }),
          e.jsx("div", {
            className: "flex gap-2",
            children:
              me && !_ && L
                ? e.jsx(We, {
                    look: "primary",
                    disabled: _ || !E,
                    onClick: D,
                    className: "large !rounded-full flex-1",
                    children: _ ? "Approved" : "Approve",
                  })
                : e.jsx(We, {
                    look: "primary",
                    disabled: !_ || !E || !L,
                    onClick: V,
                    className: "large !rounded-full flex-1",
                    children: e.jsx(Te, {
                      loading: U,
                      value:
                        O ??
                        h(W ? (W === "stake" ? "Deposit" : "Redeem") : "Swap"),
                    }),
                  }),
          }),
        ],
      })
    : e.jsx(yn, { for: "swaps", chains: ie });
}
const Ud = ({ defaultOutputToken: s }) => {
    const { chainId: t } = oe(),
      { setContracts: r } = Ze(),
      [l, a] = x.useState(null),
      [, n] = x.useState(null),
      [d, o] = x.useState(s),
      [, i] = x.useState(null);
    return (
      x.useEffect(() => {
        var b, h;
        r([
          {
            address: l == null ? void 0 : l.address,
            name: l == null ? void 0 : l.symbol,
            chainId: t,
          },
          {
            address: d == null ? void 0 : d.address,
            name: d == null ? void 0 : d.symbol,
            chainId: t,
          },
          {
            address: (b = et[t]) == null ? void 0 : b.OneInchRouterV5,
            name: "1inch Router",
            chainId: t,
          },
          {
            address: (h = et[t]) == null ? void 0 : h.OdosRouterV2,
            name: "Odos RouterV2",
            chainId: t,
          },
        ]);
      }, [
        t,
        l == null ? void 0 : l.address,
        l == null ? void 0 : l.symbol,
        r,
        d == null ? void 0 : d.address,
        d == null ? void 0 : d.symbol,
      ]),
      e.jsx("section", {
        className: "container flex",
        children: e.jsxs("div", {
          className:
            "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 mx-auto md:w-3/4 lg:w-1/2 xl:w-2/5",
          children: [
            e.jsx("hr", {
              className:
                "border-gradient-multiple mb-6 before:!rounded-b-none before:!px-0 before:!py-[5px]",
            }),
            e.jsx(wn, {
              onTokenInChange: a,
              onTokenOutChange: o,
              onAmountInChange: n,
              onAmountOutChange: i,
              defaultTokens: [void 0, s],
            }),
          ],
        }),
      })
    );
  },
  Bd = "/assets/vote-534b1324.svg",
  qt = [
    "Pending",
    "Active",
    "Canceled",
    "Defeated",
    "Succeeded",
    "Queued",
    "Expired",
    "Executed",
  ],
  _d = [
    "Pending",
    "Active",
    "Canceled",
    "Defeated",
    "Succeeded",
    "Queued",
    "Executed",
  ],
  yl = (s) => new Date(s * 1e3).toLocaleString(),
  It = (s, t) => (s === 1 ? t : `${t}s`),
  wa = (s) => {
    const t = new Date(s),
      r = [];
    if (t.getUTCFullYear() > 1970) {
      const l = t.getUTCFullYear() - 1970;
      r.push(l, It(l, "year"));
    }
    if (t.getUTCMonth() > 0) {
      const l = t.getUTCMonth();
      r.push(l, It(l, "month"));
    }
    if (t.getUTCDate() > 1) {
      const l = t.getUTCDate() - 1;
      r.push(l, It(l, "day"));
    } else {
      const l = t.toISOString().substring(11, 16),
        [a, n] = l.split(":");
      Number.parseInt(a) > 1 && r.push(a, It(a, "hour")),
        Number.parseInt(n) > 1
          ? r.push(n, It(n, "minute"))
          : r.push("< 1", "minute");
    }
    return r.join(" ");
  };
function Vd() {
  const { governanceLoaded: s, fetch: t } = la(),
    { governance: r } = ps(),
    { chainId: l, provider: a, blockNumber: n, address: d } = oe(),
    [o, i] = x.useState([]);
  async function b(c) {
    var k;
    const A = c.description,
      f = "ipfs://";
    let g = "",
      j = "";
    try {
      if (A.substring(0, f.length) !== f)
        return (
          (g = A),
          (j = c == null ? void 0 : c.description.substring(0, 16)),
          { title: j, content: g }
        );
      const S = A.substring(f.length),
        m = await Gs.get(`https://angle-blog.infura-ipfs.io/ipfs/${S}`),
        y = m.data.match(/^#\s+(.*)/m);
      (g = m.data),
        y
          ? ((j = y[1]), (g = g.replace(j, "")))
          : g
          ? (j =
              g.substring(0, 128) +
              ((g == null ? void 0 : g.length) > 128 ? "..." : ""))
          : (j =
              (c == null ? void 0 : c.description.substring(0, 16)) +
              (((k = c == null ? void 0 : c.description) == null
                ? void 0
                : k.length) > 16
                ? "..."
                : ""));
    } catch {}
    return { title: j, content: g };
  }
  function h(c, A, f) {
    const {
        state: g,
        queuedTimestamp: j,
        creationTimestamp: k,
        snapshotTimestamp: S,
        deadlineTimestamp: m,
      } = A,
      y = A.state >= 2,
      C = A.state === 2 || A.state === 3,
      $ = !!A.queuedTimestamp && A.deadlineTimestamp >= A.queuedTimestamp,
      P = (j + f) * 100,
      R = (O, E, U) => ({ state: O, date: E, passed: U }),
      L = (O) => Vt.indexOf(qt, O);
    return _d
      .map((O) => {
        switch (O) {
          case "Pending":
            return ["Created", k, g >= L("Pending")];
          case "Active":
            return ["Active", S, g >= L("Active")];
          case "Succeeded":
            return C
              ? void 0
              : [y ? "Succeeded" : "Verdict", $ ? j : m, g >= L("Succeeded")];
          case "Canceled":
            return g !== L("Canceled") ? void 0 : ["Canceled", m, !0];
          case "Defeated":
            return g !== L("Defeated") ? void 0 : ["Defeated", m, !0];
          case "Queued":
            return !y || C || !j ? void 0 : ["Queued", j, g >= L("Queued")];
          case "Executed":
            return !y || C || !j
              ? void 0
              : ["Executed", j + f, Date.now() >= P];
          default:
            return;
        }
      })
      .filter((O) => O)
      .map(([O, E, U]) => R(O, yl(E), U));
  }
  function u(c, A) {
    if (!c) return { label: "", date: "" };
    const {
        state: f,
        queuedTimestamp: g,
        deadlineTimestamp: j,
        snapshotTimestamp: k,
      } = c,
      S = Date.now() / 1e3,
      m = (y, C) => ({ label: y, date: C });
    switch (qt[f]) {
      case "Pending":
        return k < S
          ? m("Ends in", wa((j - S) * 1e3))
          : m("Active in", wa((k - S) * 1e3));
      case "Active":
        return m("Ends in", wa((j - S) * 1e3));
      case "Succeeded":
        return m("Can be queued", "now");
      case "Executed":
        return g + A <= S
          ? m("Can be executed", "now")
          : m("Can be executed in", yl(g + A - S));
      default:
        return m("", "");
    }
  }
  function p({ state: c, queuedTimestamp: A, snapshotTimestamp: f }, g) {
    const j = Date.now() / 1e3;
    switch (qt[c]) {
      case "Pending":
        return f < j ? "Active" : "Pending";
      case "Queued":
        return "Succeeded";
      case "Executed":
        return A + g <= j ? "Executed" : "Queued";
      default:
        return qt[c];
    }
  }
  function v({ targets: c, calldatas: A, values: f }) {
    return c.map((g, j) => ({ target: g, value: f[j], calldata: A[j] }));
  }
  async function N() {
    if (!r) return;
    const c =
        r.proposals &&
        Object.entries(r.proposals).map(([g, j]) => ({ ...j, id: g })),
      A = await Promise.all(c == null ? void 0 : c.map(async (g) => b(g))),
      f = await Promise.all(
        c.map(async (g, j) => {
          const k = p(g, r.parameters.timelockMinDelay),
            S = k !== "Active" ? g.votes : await w(g.id);
          return {
            state: k,
            id: g.id,
            proposer: g.proposer,
            quorum: g.quorum,
            creationHash: g.creationTxHash,
            total: g.totalVotes,
            calls: v(g),
            votes: {
              ...S,
              count:
                (S == null ? void 0 : S.for) +
                (S == null ? void 0 : S.abstain) +
                (S == null ? void 0 : S.against),
            },
            snapshot: g.snapshotTimestamp,
            nextStep: u(g, r.parameters.timelockMinDelay),
            timeline: h(l, g, r.parameters.timelockMinDelay),
            ...A[j],
          };
        })
      );
    i(f);
  }
  async function w(c) {
    const A = Js[l].AngleGovernor;
    if (!A || !a) return;
    const g = await oo.connect(A, a).proposalVotes(c);
    return {
      for: Qt(g.forVotes),
      against: Qt(g.againstVotes),
      abstain: Qt(g.abstainVotes),
    };
  }
  return (
    x.useEffect(() => {
      async function c() {
        const A = o
            .filter(({ state: j }) => j === "Active")
            .map(({ id: j }) => j),
          f = await Promise.all(A.map((j) => w(j))),
          g = o.map((j) => {
            const k = f[A.indexOf(j.id)];
            return k && (j.votes = { ...j.votes, ...k }), j;
          });
        i(g);
      }
      c();
    }, [n, l, a]),
    x.useEffect(() => {
      t(["governance"]);
    }, []),
    x.useEffect(() => {
      N();
    }, [r]),
    { ...r, loading: !s, proposals: o }
  );
}
function wr({ state: s }) {
  const t = [
      [
        "Pending",
        "The vote will start once the pending period ends",
        { color: "blue" },
      ],
      ["Active", "The proposal is up for votes", { color: "green" }],
      ["Canceled", "The proposal has been cancelled", { color: "purple" }],
      ["Defeated", "The proposal has been defeated", { color: "red" }],
      [
        "Succeeded",
        "The proposal had enough vote and has passed, it will not be able to be exectued until...",
        { color: "green" },
      ],
      [
        "Queued",
        "The proposal has succeeded and queued for execution",
        { color: "green" },
      ],
      [
        "Executed",
        "The proposal has suceeded and executed, its changes are now applied to the protocol",
        { color: "green" },
      ],
    ],
    [r, l, a] = t.find(([n]) => n === s) ?? ["", "", {}];
  return e.jsx(se, {
    placement: "top",
    title: l,
    icon: !1,
    children: e.jsx(e.Fragment, {
      children: e.jsx(Fs, {
        size: "small",
        color: "red",
        ...a,
        icon: !0,
        children: r,
      }),
    }),
  });
}
function Td({ proposals: s }) {
  const { t } = ge(),
    r = Nt(),
    { id: l } = Oa(),
    a = s.find(({ id: d }) => l === d),
    n = x.useMemo(() => {
      var d;
      return [
        {
          key: "1",
          label: e.jsx("p", {
            className: "text-xl font-bold",
            children: t("Proposal overview"),
          }),
          children: e.jsx(e.Fragment, {
            children:
              !!s &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("header", {
                    className: "mb-3 border-b pb-3 dark:border-blue-500",
                    children: [
                      e.jsx("h2", {
                        className: "h4 mb-5 font-bold dark:text-sand-500",
                        children: a == null ? void 0 : a.title,
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap justify-between gap-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex w-full items-center justify-between gap-4 lg:w-auto",
                            children: [
                              e.jsx(wr, {
                                state: a == null ? void 0 : a.state,
                              }),
                              e.jsxs("p", {
                                className: "dark:text-black-200",
                                children: [
                                  a == null ? void 0 : a.nextStep.label,
                                  e.jsx("span", {
                                    className: "ml-1.5 dark:text-sand-500",
                                    children:
                                      a == null ? void 0 : a.nextStep.date,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex w-full items-center justify-between gap-3 lg:w-auto",
                            children: [
                              e.jsxs("p", {
                                className: "flex dark:text-black-100",
                                children: [
                                  t("Proposal ID: "),
                                  " ",
                                  l == null ? void 0 : l.substring(0, 8),
                                  "... ",
                                  e.jsx(Fa, { noLabel: !1, toCopy: l }),
                                ],
                              }),
                              e.jsx(Jt, {
                                address: a == null ? void 0 : a.proposer,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(Dn, {
                    children: (a == null ? void 0 : a.content) ?? "loading...",
                    components: {
                      h2: ({ node: o, ...i }) =>
                        e.jsx("h3", {
                          className: "mb-4 mt-6 font-bold dark:text-sand-500",
                          ...i,
                        }),
                      p: ({ node: o, ...i }) =>
                        e.jsx("p", {
                          className: "my-1 dark:text-black-100",
                          ...i,
                        }),
                      li: ({ node: o, ...i }) =>
                        e.jsx("li", {
                          className: "py-1 dark:text-black-100",
                          ...i,
                        }),
                      h3: ({ node: o, ...i }) =>
                        e.jsx("h4", {
                          className: "mb-2 mt-4 dark:text-sand-500",
                          ...i,
                        }),
                      h1: ({ node: o, ...i }) =>
                        e.jsx("h4", {
                          className: "mb-2 mt-4 dark:text-sand-500",
                          ...i,
                        }),
                    },
                  }),
                ],
              }),
          }),
        },
        {
          key: "2",
          label: e.jsx("p", {
            className: "text-xl font-bold",
            children: t("Executable code"),
          }),
          children: e.jsx(e.Fragment, {
            children:
              (d = a == null ? void 0 : a.calls) == null
                ? void 0
                : d.map(({ target: o, value: i, calldata: b }) =>
                    e.jsxs("div", {
                      className: "mb-2 rounded p-2 last:mb-0 dark:bg-black-300",
                      children: [
                        e.jsx("p", {
                          className: "mb-1 dark:text-black-100",
                          children: "To:",
                        }),
                        e.jsx("p", {
                          children: e.jsx("code", { children: o }),
                        }),
                        e.jsx("p", {
                          className: "mb-1 dark:text-black-100",
                          children: "Value:",
                        }),
                        e.jsx("p", {
                          children: e.jsx("code", { children: i }),
                        }),
                        e.jsx("p", {
                          className: "mb-1 dark:text-black-100",
                          children: "Calldata:",
                        }),
                        e.jsx("p", {
                          className: "break-words",
                          children: e.jsx("code", { children: b }),
                        }),
                      ],
                    })
                  ),
          }),
        },
      ];
    }, []);
  return e.jsxs("div", {
    className: "mb-6",
    children: [
      e.jsx(Y, {
        look: "back",
        className: "mb-4",
        onClick: () => r(xe.governance),
        children: t("Back to list"),
      }),
      e.jsxs("article", {
        className: "overflow-hidden rounded-lg dark:bg-black-700",
        children: [
          e.jsx(mo, { className: "!h-2" }),
          e.jsx("div", {
            className: "px-8 py-6",
            children: e.jsx(Bt, { defaultActiveKey: "1", items: n }),
          }),
        ],
      }),
    ],
  });
}
var kr = {},
  zd = Ue;
Object.defineProperty(kr, "__esModule", { value: !0 });
var vr = (kr.default = void 0),
  Hd = zd(Fe()),
  Yd = e;
vr = kr.default = (0, Hd.default)(
  (0, Yd.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z",
  }),
  "CheckCircle"
);
var Ar = {},
  Gd = Ue;
Object.defineProperty(Ar, "__esModule", { value: !0 });
var Sr = (Ar.default = void 0),
  Wd = Gd(Fe()),
  qd = e;
Sr = Ar.default = (0, Wd.default)(
  (0, qd.jsx)("path", {
    d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
  }),
  "CheckCircleOutline"
);
var Cr = {},
  Qd = Ue;
Object.defineProperty(Cr, "__esModule", { value: !0 });
var kn = (Cr.default = void 0),
  Xd = Qd(Fe()),
  Kd = e;
kn = Cr.default = (0, Xd.default)(
  (0, Kd.jsx)("path", {
    d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12z",
  }),
  "Dangerous"
);
var Er = {},
  Zd = Ue;
Object.defineProperty(Er, "__esModule", { value: !0 });
var Pr = (Er.default = void 0),
  Jd = Zd(Fe()),
  em = e;
Pr = Er.default = (0, Jd.default)(
  (0, em.jsx)("path", {
    d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
  }),
  "HighlightOff"
);
const sm = "/assets/sentiment_neutral-7eb4b439.svg",
  tm = "/assets/thumb_up_gradient-07ae0779.svg";
function ka({ vote: s, quantity: t, total: r }) {
  return e.jsxs("div", {
    className: "mb-2 flex items-start last:mb-0",
    children: [
      e.jsx("img", {
        src: s === "yes" ? tm : s === "no" ? Gn : sm,
        alt: `thumbs oriented in direction of ${s} vote`,
        className: "mr-2 w-5",
      }),
      e.jsxs("div", {
        className: "-mt-1 w-full",
        children: [
          e.jsxs("div", {
            className: "flex w-full items-center justify-between",
            children: [
              e.jsxs("div", {
                className: "flex items-center",
                children: [
                  e.jsx("p", {
                    className: "w-16 uppercase dark:text-black-100",
                    children: s,
                  }),
                  e.jsxs("p", {
                    className: "text-sm dark:text-sand-500",
                    children: [
                      e.jsx("span", {
                        className: "font-bold",
                        children: Ce(t),
                      }),
                      " veANGLE",
                    ],
                  }),
                ],
              }),
              e.jsxs("p", {
                className: "text-sm dark:text-black-200",
                children: [as((r ? (t * 100) / (r * 100) : 0) * 100), "%"],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-2 my-1 h-2 w-full overflow-hidden rounded-full",
            children: [
              e.jsx("div", {
                className:
                  "absolute left-0 top-0 h-2 w-full rounded-full dark:bg-black-300",
                style: { width: "100%" },
              }),
              e.jsx("div", {
                className:
                  "absolute left-0 top-0 h-2 rounded-full dark:bg-green-500",
                style: { width: `${(t / r) * 100}%` },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vn({ proposal: s }) {
  var t, r, l;
  return !s || s.state === "Pending"
    ? e.jsx(e.Fragment, {})
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(ka, {
            vote: "yes",
            quantity:
              (t = s == null ? void 0 : s.votes) == null ? void 0 : t.for,
            total: s == null ? void 0 : s.votes.count,
          }),
          e.jsx(ka, {
            vote: "no",
            quantity:
              (r = s == null ? void 0 : s.votes) == null ? void 0 : r.against,
            total: s == null ? void 0 : s.votes.count,
          }),
          e.jsx(ka, {
            vote: "abstain",
            quantity:
              (l = s == null ? void 0 : s.votes) == null ? void 0 : l.abstain,
            total: s == null ? void 0 : s.votes.count,
          }),
        ],
      });
}
const wl = ({
  noHeader: s = !1,
  wrapperClassName: t = "",
  header: r,
  headerClassName: l = "",
  main: a,
  mainClassName: n = "",
}) =>
  e.jsxs("aside", {
    className: `${t} rounded-lg`,
    children: [
      !s &&
        e.jsx("header", {
          className: `flex items-center gap-2 border-b p-4 ${l}`,
          children: r,
        }),
      e.jsx("main", { className: `p-4 ${n}`, children: a }),
    ],
  });
function am({ proposals: s }) {
  const { t } = ge();
  Nt();
  const { chainId: r } = oe();
  oe(), x.useState(!1), x.useState(!1);
  const { id: l } = Oa(),
    a = s.find(({ id: b }) => l === b);
  if (!a) return e.jsx(e.Fragment, {});
  const n =
      (a == null ? void 0 : a.state) === "Canceled" ||
      (a == null ? void 0 : a.state) === "Defeated",
    d =
      (a == null ? void 0 : a.votes.count) / (a == null ? void 0 : a.quorum) >=
      1,
    o = () =>
      e.jsx(e.Fragment, {
        children: e.jsx(wl, {
          wrapperClassName: "dark:bg-black-400 mb-4",
          header: e.jsxs(e.Fragment, {
            children: [
              e.jsx("img", { className: "w-6", alt: "User icon", src: $l }),
              e.jsx("h6", {
                className: "dark:text-sand-500",
                children: t("Voting results"),
              }),
            ],
          }),
          headerClassName: "dark:border-black-300",
          main: e.jsxs(e.Fragment, {
            children: [
              e.jsx(vn, { proposal: a }),
              e.jsx("hr", { className: "my-3 dark:border-black-300" }),
              e.jsxs("div", {
                className: "mb-2 flex items-start justify-between",
                children: [
                  e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: t("State"),
                  }),
                  e.jsx("div", {
                    className: "flex flex-col items-end",
                    children: e.jsx(wr, {
                      state: a == null ? void 0 : a.state,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mb-2 flex items-start justify-between",
                children: [
                  e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: t("Current votes"),
                  }),
                  e.jsx("div", {
                    className: "flex flex-col items-end",
                    children: e.jsx("p", {
                      className: "font-bold dark:text-sand-500",
                      children: a && Ce(a == null ? void 0 : a.votes.count),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mb-2 flex items-start justify-between",
                children: [
                  e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: t("Quorum"),
                  }),
                  e.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      e.jsx("p", {
                        className: "mr-2 font-bold dark:text-sand-500",
                        children: Ce(a == null ? void 0 : a.quorum),
                      }),
                      !d &&
                        e.jsx("p", {
                          className: "text-sm dark:text-sand-500",
                          children: hs(
                            (a == null ? void 0 : a.quorum) > 0
                              ? (a == null ? void 0 : a.votes.count) /
                                  (a == null ? void 0 : a.quorum)
                              : 0,
                            1,
                            "percent"
                          ),
                        }),
                      d
                        ? e.jsx(e.Fragment, {
                            children: e.jsx(Sr, {
                              className: "small ml-1 dark:text-green-500",
                            }),
                          })
                        : e.jsx(e.Fragment, {
                            children: e.jsx(Pr, {
                              className: "small ml-1 dark:text-coral-500",
                            }),
                          }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsx("p", {
                    className: "text-sm dark:text-black-100",
                    children: t("Total voting power"),
                  }),
                  e.jsx("p", {
                    className: "font-bold dark:text-sand-500",
                    children: a && Ce(a == null ? void 0 : a.total),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    i = () =>
      e.jsx(e.Fragment, {
        children: e.jsx(wl, {
          wrapperClassName: "dark:bg-black-400",
          header: e.jsxs(e.Fragment, {
            children: [
              e.jsx("img", { className: "w-6", alt: "Details icon", src: Wn }),
              e.jsx("h6", {
                className: "dark:text-sand-500",
                children: t("Proposal Details"),
              }),
            ],
          }),
          headerClassName: "dark:border-black-300",
          main: e.jsx(e.Fragment, {
            children: e.jsxs("div", {
              className: "flex",
              children: [
                e.jsx("div", {
                  className: "relative mr-2",
                  children: e.jsx("div", {
                    className: "relative z-1 flex flex-col gap-2",
                    children:
                      a == null
                        ? void 0
                        : a.timeline.map(({ passed: b }, h) =>
                            e.jsx(
                              "div",
                              {
                                className: "h-[33px]",
                                children:
                                  n && (h === 2 || h === 3)
                                    ? e.jsx(kn, {
                                        className: b
                                          ? "dark:text-coral-500"
                                          : "dark:text-black-300",
                                      })
                                    : e.jsx(vr, {
                                        className: b
                                          ? "dark:text-green-500"
                                          : "dark:text-black-300",
                                      }),
                              },
                              h
                            )
                          ),
                  }),
                }),
                e.jsx("div", {
                  className: "flex w-5/6 flex-col gap-0.5",
                  children:
                    a == null
                      ? void 0
                      : a.timeline.map(({ state: b, date: h }, u) =>
                          e.jsxs("div", {
                            children: [
                              u === 0
                                ? e.jsx("a", {
                                    className: "dim flex items-center gap-2",
                                    target: "_blank",
                                    href: Ps(r, a.creationHash, "transaction"),
                                    rel: "noreferrer",
                                    children: e.jsxs("p", {
                                      className:
                                        "flex items-center font-bold dark:text-sand-500",
                                      children: [
                                        t(b),
                                        " ",
                                        u === 0 &&
                                          e.jsx(Zn, {
                                            className:
                                              "small ml-1 dark:text-peach-500",
                                          }),
                                      ],
                                    }),
                                  })
                                : e.jsx("p", {
                                    className:
                                      "flex items-center font-bold dark:text-sand-500",
                                    children: t(b),
                                  }),
                              e.jsx("p", {
                                className: "text-sm dark:text-black-200",
                                children: h,
                              }),
                            ],
                          })
                        ),
                }),
              ],
            }),
          }),
          mainClassName: "",
        }),
      });
  return e.jsxs(e.Fragment, {
    children: [
      (a == null ? void 0 : a.state) !== "Pending" && e.jsx(o, {}),
      e.jsx(i, {}),
    ],
  });
}
function rm({ proposal: s, onClick: t }) {
  var a, n, d, o;
  const r =
      (s == null ? void 0 : s.quorum) <
      ((a = s == null ? void 0 : s.votes) == null ? void 0 : a.count),
    l =
      ((n = s == null ? void 0 : s.nextStep) == null ? void 0 : n.label) === "";
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className:
        "hover:border-gradient-multiple flex min-w-[80vw] cursor-pointer flex-wrap items-center rounded-lg p-6 dark:bg-black-700 md:mb-2 md:min-w-0 md:last:mb-0",
      onClick: t,
      children: [
        e.jsxs("div", {
          className:
            "mb-6 flex w-full flex-col justify-between pr-8 md:w-3/5 lg:mb-0",
          children: [
            e.jsx("h3", {
              className: "h6 mb-2 line-clamp-2 dark:text-sand-500 lg:mb-4",
              children: s == null ? void 0 : s.title,
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center gap-4",
              children: [
                e.jsx(wr, { state: s == null ? void 0 : s.state }),
                !l &&
                  e.jsxs("p", {
                    className: "text-sm dark:text-black-200",
                    children: [
                      (d = s == null ? void 0 : s.nextStep) == null
                        ? void 0
                        : d.label,
                      " ",
                      e.jsx("span", {
                        className: "dark:text-sand-500",
                        children:
                          (o = s == null ? void 0 : s.nextStep) == null
                            ? void 0
                            : o.date,
                      }),
                    ],
                  }),
                e.jsxs("p", {
                  className: "text-sm font-bold dark:text-sand-500",
                  children: [
                    "Quorum",
                    r
                      ? e.jsx(Sr, {
                          className: "small ml-1 dark:text-green-500",
                        })
                      : e.jsx(Pr, {
                          className: "small ml-1 dark:text-coral-500",
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "w-full md:w-2/5",
          children: e.jsx(vn, { proposal: s }),
        }),
      ],
    }),
  });
}
const kl = [
  "Pending",
  "Active",
  "Canceled",
  "Defeated",
  "Succeeded",
  "Queued",
  "Executed",
];
function lm({ proposals: s }) {
  const { t } = ge(),
    r = Nt(),
    [l, a] = x.useState(""),
    [n, d] = x.useState({
      Active: !0,
      Succeeded: !0,
      Queued: !0,
      Pending: !0,
      Executed: !0,
      Defeated: !0,
      Canceled: !0,
    }),
    o = !kl.find((u) => !n[u]),
    [i, b] = x.useState(!1),
    h = x.useRef(null);
  return (
    Bl(h, () => b(!1)),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("p", {
          className: "mb-4 dark:text-black-100",
          children: t(
            "Angle is a fully decentralized protocol governed by the community of veANGLE token holders. veANGLE holders collectively discuss, propose, and vote on upgrades to the protocol. They can either vote themselves on new proposals or delegate to an address of choice."
          ),
        }),
        e.jsxs("p", {
          className:
            "mb-4 flex items-center gap-1 font-bold dark:text-black-100",
          children: [
            t("Only available on"),
            " ",
            e.jsx("img", {
              className: "h-4 w-auto",
              src: tt[1],
              alt: "network",
            }),
            "Ethereum Mainnet",
          ],
        }),
        e.jsxs("div", {
          className: "mb-2 overflow-hidden rounded-lg dark:bg-black-400",
          children: [
            e.jsx("hr", {
              className: "gradient-multiple h-2 w-full border-none",
            }),
            e.jsxs("div", {
              className:
                "flex flex-wrap items-center justify-between gap-2 px-4 py-3",
              children: [
                e.jsx("h4", {
                  className: "dark:text-sand-500",
                  children: t("Recent proposals"),
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2 md:justify-end",
                  children: [
                    e.jsx(Aa, {
                      content: [
                        e.jsx(bt, {
                          checked: o,
                          onChange: () => {
                            d((u) => ({
                              Active: !o,
                              Succeeded: !o,
                              Queued: !o,
                              Pending: !o,
                              Executed: !o,
                              Defeated: !o,
                              Canceled: !o,
                            }));
                          },
                          children: "All",
                        }),
                        ...kl.map((u) =>
                          e.jsx("div", {
                            className: "flex w-full items-center",
                            children: e.jsx(bt, {
                              checked: n[u],
                              onChange: () => {
                                d((p) => ((p[u] = !p[u]), { ...p }));
                              },
                              children: u,
                            }),
                          })
                        ),
                      ],
                      children: t("Filter proposals"),
                    }),
                    e.jsx(Me, {
                      look: "secondary",
                      state: [l, a],
                      placeholder: t("Search..."),
                      suffix: e.jsx(T, { mui: "SearchOutlined" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "custom-scrollbar flex gap-4 overflow-x-scroll md:block md:overflow-x-visible",
          children:
            s == null
              ? void 0
              : s
                  .sort((u, p) => p.snapshot - u.snapshot)
                  .filter(
                    ({ title: u, content: p }) =>
                      u.toLowerCase().includes(l) || p.toLowerCase().includes(l)
                  )
                  .filter(({ state: u }) => n[u])
                  .map((u) =>
                    e.jsx(
                      rm,
                      {
                        proposal: u,
                        onClick: () => r(`${xe.governance}/proposal/${u.id}`),
                      },
                      u.id
                    )
                  ),
        }),
      ],
    })
  );
}
const nm = ({
    noHeader: s = !1,
    wrapperClassName: t = "",
    header: r,
    headerClassName: l = "",
    main: a,
    mainClassName: n = "",
  }) =>
    e.jsxs("aside", {
      className: `${t} min-w-[250px] rounded-lg`,
      children: [
        !s &&
          e.jsx("header", {
            className: `flex items-center gap-2 border-b p-4 ${l}`,
            children: r,
          }),
        e.jsx("main", { className: `p-4 ${n}`, children: a }),
      ],
    }),
  zs = ({ link: s, text: t }) =>
    e.jsx(Y, {
      type: "button",
      size: "small",
      look: "underlined",
      onClick: () => window.open(s, "_blank"),
      rightIcon: e.jsx(T, { mui: "CallMadeOutlined" }),
      children: t,
    });
function om() {
  var o, i, b, h, u, p, v, N, w;
  const { t: s } = ge(),
    [t, r] = x.useState(!1),
    [l, a] = x.useState(!1),
    { governance: n } = ps(),
    d =
      n != null && n.parameters
        ? [
            [
              "Voting Delay",
              Xt(
                "0",
                (i =
                  (o = n == null ? void 0 : n.parameters) == null
                    ? void 0
                    : o.votingDelay) == null
                  ? void 0
                  : i.toString()
              ),
              "Delay between when a proposal is created and when vote for it starts",
            ],
            [
              "Voting Period",
              Xt(
                "0",
                (h =
                  (b = n == null ? void 0 : n.parameters) == null
                    ? void 0
                    : b.votingPeriod) == null
                  ? void 0
                  : h.toString()
              ),
              "Delay between the vote start and vote end",
            ],
            [
              "Quorum",
              hs(
                (u = n == null ? void 0 : n.parameters) == null
                  ? void 0
                  : u.quorumPercent,
                0,
                "percent"
              ),
              "Minimum percentage of veANGLE that must have voted on a vote for it to be executable",
            ],
            [
              "Shortcircuit",
              hs(
                (p = n == null ? void 0 : n.parameters) == null
                  ? void 0
                  : p.shortCircuitPercent,
                0,
                "percent"
              ),
              "Quorum value above which proposals can be executed before the end of the voting period",
            ],
            [
              "Proposal Threshold",
              ((v = n == null ? void 0 : n.parameters) == null
                ? void 0
                : v.proposalThreshold) + " veANGLE",
              "Minimum veANGLE balance needed for an address to submit a proposal",
            ],
            [
              "Timelock Minimum Delay",
              Xt(
                "0",
                (w =
                  (N = n == null ? void 0 : n.parameters) == null
                    ? void 0
                    : N.timelockMinDelay) == null
                  ? void 0
                  : w.toString()
              ),
              "Minimum amount of time before proposals successfully voted by governance can be executed onchain",
            ],
          ]
        : [];
  return e.jsx(nm, {
    wrapperClassName: "hidden dark:bg-black-400 lg:block mb-4",
    header: e.jsxs(e.Fragment, {
      children: [
        e.jsx("img", { className: "w-6", alt: "Docs icon", src: qn }),
        e.jsx("h6", {
          className: "dark:text-sand-500",
          children: s("Resources"),
        }),
      ],
    }),
    headerClassName: "dark:border-black-300",
    main: e.jsxs(e.Fragment, {
      children: [
        e.jsx(us, {
          title: s("Governance Parameters"),
          titleIcon: e.jsx(T, { mui: "Settings" }),
          wrapClassName: "modal-50",
          visible: t,
          onCancel: () => {
            r(!1);
          },
          children: d.map(([c, A, f]) =>
            e.jsxs("div", {
              className: "mb-2 flex items-start justify-between",
              children: [
                e.jsx(se, {
                  title: f,
                  children: e.jsx("p", { className: "text-m", children: c }),
                }),
                e.jsx("p", { className: "font-bold", children: A }),
              ],
            })
          ),
        }),
        e.jsx(us, {
          title: s("Governance Contracts"),
          titleIcon: e.jsx(T, { mui: "CodeOutlined" }),
          wrapClassName: "modal-50",
          visible: l,
          onCancel: () => {
            a(!1);
          },
          children: e.jsxs("div", {
            children: [
              e.jsxs("div", {
                className: "mb-2 flex gap-3",
                children: [
                  e.jsx(zs, {
                    link: Ps(1, Js[1].AngleGovernor, "address"),
                    text: "Angle Governor",
                  }),
                  e.jsx(zs, {
                    link: Ps(1, Js[1].ProposalSender, "address"),
                    text: "Proposal Sender",
                  }),
                  e.jsx(zs, {
                    link: Ps(1, Js[1].Timelock, "address"),
                    text: "Timelock",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mb-2 flex gap-3",
                children: [
                  e.jsx(zs, {
                    link: Ps(1, Js[1].veANGLE, "address"),
                    text: "veANGLE",
                  }),
                  e.jsx(zs, {
                    link: Ps(1, Js[1].veANGLEDelegation, "address"),
                    text: "veANGLEDelegation",
                  }),
                ],
              }),
              e.jsx(zs, {
                link: "https://developers.angle.money/governance-and-cross-module-contracts/governance-contracts",
                text: "Learn more on our dev docs",
              }),
            ],
          }),
        }),
        e.jsx(Y, {
          type: "button",
          size: "small",
          look: "underlined",
          onClick: () => r(!0),
          rightIcon: e.jsx(T, { mui: "Settings" }),
          children: s("Governance Parameters"),
        }),
        e.jsx(Y, {
          type: "button",
          size: "small",
          look: "underlined",
          onClick: () => a(!0),
          rightIcon: e.jsx(T, { mui: "CodeOutlined" }),
          children: s("Contracts"),
        }),
        e.jsx(zs, { link: ke.angleDocs, text: "Docs" }),
        e.jsx(zs, { link: ke.angleGovernance, text: "Forum" }),
        e.jsx(zs, { link: ke.angleGithub, text: "Github" }),
        e.jsx(zs, { link: ke.angleSnapshot, text: "Snapshot" }),
      ],
    }),
    mainClassName: "flex flex-wrap items-center gap-x-3 gap-y-2",
  });
}
function An(s, t) {
  const [r, l] = x.useState(),
    [a, n] = x.useState(),
    [d, o] = x.useState(),
    [i, b] = x.useState(!1),
    { chainId: h, provider: u } = oe();
  async function p() {
    const w = Js[h].veANGLEDelegation;
    if (!w || !u) return;
    b(!0);
    const c = Kr.connect(w, u),
      A = await (t
        ? c["getVotes(address,uint256)"](s, t)
        : c["getVotes(address)"](s));
    l(A), b(!1);
  }
  async function v() {
    const w = Js[h].veANGLE;
    if (!w || !u) return;
    b(!0);
    const c = io.connect(w, u),
      A = await (t
        ? c["balanceOf(address,uint256)"](s, t)
        : c["balanceOf(address)"](s));
    o(A), b(!1);
  }
  async function N() {
    const w = Js[h].veANGLEDelegation;
    if (!w || !u) return;
    b(!0);
    const A = await Kr.connect(w, u)["delegates(address)"](s);
    n(A), b(!1);
  }
  return (
    x.useEffect(() => {
      s && p(), s && v(), s && N();
    }, [s, t, u, h]),
    {
      votingPower: r,
      veAngleBalance: d,
      delegatee: a,
      updateDelegate: N,
      loading: i,
    }
  );
}
var Rr = {},
  im = Ue;
Object.defineProperty(Rr, "__esModule", { value: !0 });
var Sn = (Rr.default = void 0),
  cm = im(Fe()),
  dm = e;
Sn = Rr.default = (0, cm.default)(
  (0, dm.jsx)("path", {
    d: "M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35",
  }),
  "PeopleOutlineOutlined"
);
function vl({ children: s, onSuccess: t }) {
  const { t: r } = ge(),
    [l, a] = x.useState(!1),
    [n, d] = x.useState(),
    { execTransactions: o } = rs(),
    { address: i, provider: b, blockNumber: h } = oe(),
    { veAngleBalance: u } = An(i),
    p = new Date(new Date(Date.now()).setUTCHours(0, 0, 0, 0)),
    v = p.setUTCDate(p.getDate() + 1),
    N = Xt((Date.now() / 1e3).toString(), (v / 1e3).toString()),
    [w, c] = x.useState();
  async function A(f) {
    await o.delegate(async (g) => {
      f(g), c(g);
    }, n);
  }
  return (
    x.useEffect(() => {
      async function f(g) {
        const j = await b.getTransactionReceipt(g);
        j &&
          j.status === 1 &&
          j.confirmations > 3 &&
          (c(void 0), t == null || t());
      }
      w && f(w);
    }, [w, h, b]),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(Y, {
          type: "button",
          look: "primary",
          size: "small",
          onClick: () => {
            a(!0);
          },
          leftIcon: e.jsx(T, { mui: "PeopleOutlineOutlined" }),
          children: s ?? r("Set up delegation"),
        }),
        e.jsxs(us, {
          title: r("Delegate your voting power"),
          titleIcon: e.jsx(T, { mui: "PeopleOutlineOutlined" }),
          wrapClassName: "modal-50",
          visible: l,
          onCancel: () => {
            a(!1);
          },
          children: [
            e.jsxs("ul", {
              className: "mb-4 dark:text-black-100",
              children: [
                e.jsx("li", {
                  className: "py-0",
                  children: r(
                    "If you own veANGLE, you don't need to delegate it to vote."
                  ),
                }),
                e.jsx("li", {
                  className: "py-0",
                  children: r(
                    "If you delegate your voting power to another address than yourself, you will not be able to vote on Angle proposal: the address to which you delegated your voting power to will."
                  ),
                }),
                e.jsx("li", {
                  className: "py-0",
                  children: r("You can update your delegation anytime."),
                }),
                e.jsx("li", {
                  className: "py-0",
                  children: r(
                    "If you have delegated once to another address and want to delegate to yourself, you need to run a delegation again."
                  ),
                }),
                e.jsx("li", {
                  className: "py-0",
                  children: r(
                    "If you have delegated your voting power and you update your lock or lock more ANGLE, you'll need to delegate again for your updated lock or ANGLE amount to be taken into account. "
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-wrap gap-2",
              children: [
                e.jsx("p", {
                  className: "w-full font-bold dark:text-sand-500",
                  children: r("Delegate address"),
                }),
                e.jsx(Me.Address, {
                  className: "flex-1",
                  placeholder: r("Select or search for an address"),
                  state: [n, d],
                }),
                e.jsxs(We, {
                  onClick: A,
                  disabled: !1,
                  children: [
                    e.jsx(Sn, { className: "mr-1 dark:text-black-500" }),
                    r("Delegate votes"),
                  ],
                }),
                e.jsxs("p", {
                  className: "w-full dark:text-sand-500",
                  children: [
                    "Your ",
                    !!u && Ce(M.from(u).toNumber(18)),
                    " veANGLE delegation will take effect in ",
                    N,
                    ".",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var Ir = {},
  mm = Ue;
Object.defineProperty(Ir, "__esModule", { value: !0 });
var Cn = (Ir.default = void 0),
  um = mm(Fe()),
  xm = e;
Cn = Ir.default = (0, um.default)(
  (0, xm.jsx)("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z",
  }),
  "Cancel"
);
var Lr = {},
  fm = Ue;
Object.defineProperty(Lr, "__esModule", { value: !0 });
var En = (Lr.default = void 0),
  hm = fm(Fe()),
  pm = e;
En = Lr.default = (0, hm.default)(
  (0, pm.jsx)("path", {
    d: "M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19c1.1 0 2-.89 2-2v-4zm-1-5.05-4.95 4.95-3.54-3.54 4.95-4.95zm-4.24-5.66L6.39 8.66c-.39.39-.39 1.02 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36c.39-.39.39-1.02 0-1.41L14.16 2.3c-.38-.4-1.01-.4-1.4-.01",
  }),
  "HowToVote"
);
function bm({ id: s, proposal: t, power: r }) {
  const { t: l } = ge(),
    { governance: a } = ps(),
    [n, d] = x.useState(!1),
    [o, i] = x.useState(0),
    [b, h] = x.useState(0),
    [u, p] = x.useState(100),
    [v, N] = x.useState(""),
    { execTransactions: w } = rs();
  async function c(f) {
    var k;
    const g =
        (k = a == null ? void 0 : a.user) == null ? void 0 : k.votingBalance,
      j = { for: 0, against: 0, abstain: 0 };
    try {
      (j.for = Number((o / 100) * g)
        .toFixed(18)
        .replace(".", "")),
        (j.against = Number((b / 100) * g)
          .toFixed(18)
          .replace(".", "")),
        (j.abstain = Number((u / 100) * g)
          .toFixed(18)
          .replace(".", "")),
        await w.castVote(f, s, j, v);
    } catch (S) {
      console.error("error: ", S);
    }
  }
  function A(f, g) {
    const j = f === "for" ? i : h;
    if (g === void 0 || Number.isNaN(g)) A(f, 0);
    else {
      const k = f === "for" ? b : o,
        S = 100 - g - k;
      if (S < 0) return;
      p(S), j(Math.round(g * 100) / 100);
    }
  }
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Y, {
        type: "button",
        look: "primary",
        size: "small",
        onClick: () => {
          d(!0);
        },
        leftIcon: e.jsx(T, { mui: "HowToVote" }),
        children: l("Vote"),
      }),
      e.jsx(us, {
        titleIcon: e.jsx(T, { mui: "HowToVote" }),
        title: l("Vote"),
        wrapClassName: "modal-small",
        visible: n,
        onCancel: () => {
          d(!1);
        },
        children: e.jsxs("div", {
          className: "p-6 pt-2",
          children: [
            e.jsx("h4", {
              className:
                "mb-4 border-b pb-4 font-bold dark:border-black-300 dark:text-sand-500",
              children: t == null ? void 0 : t.title,
            }),
            e.jsxs("div", {
              className: "mb-4 flex items-center justify-between",
              children: [
                e.jsxs("p", {
                  className: "flex dark:text-black-100",
                  children: [
                    l("Proposal ID: "),
                    " ",
                    s.substring(0, 8),
                    "... ",
                    e.jsx(Fa, { noLabel: !0, toCopy: s }),
                  ],
                }),
                e.jsx(Jt, { address: t == null ? void 0 : t.proposer }),
              ],
            }),
            e.jsxs("div", {
              className: "border-gradient-multiple mb-4 rounded-md p-4 pt-3",
              children: [
                e.jsxs("div", {
                  className:
                    "mb-2 flex items-center justify-between border-b pb-2 dark:border-black-300",
                  children: [
                    e.jsx("p", {
                      className: "dark:text-black-100",
                      children: l("Your voting power: "),
                    }),
                    e.jsxs("p", {
                      className: "h6 dark:text-sand-500",
                      children: [r, " ANGLE"],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-sm dark:text-black-100",
                  children: l(
                    "Your voting power is computed by suming, at the time at which the vote for the proposal started, your veANGLE balance and the amount of veANGLE delegated to your address."
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                e.jsx("p", {
                  className:
                    "w-full border-b pb-1 text-xl dark:border-black-300 dark:text-sand-500",
                  children: l("Time to vote"),
                }),
                e.jsxs("div", {
                  className:
                    "mb-2 flex items-center justify-between border-b px-2 pb-2 dark:border-black-300",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(vr, { className: "dark:text-green-500" }),
                        e.jsx("p", {
                          className: "font-bold dark:text-black-100",
                          children: l("For"),
                        }),
                      ],
                    }),
                    e.jsx(Me.Number, {
                      state: [o, (f) => A("for", f)],
                      placeholder: l("For"),
                      size: "s",
                      suffix: "%",
                      mutate: (f) => Math.max(f, 0),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mb-2 flex items-center justify-between border-b px-2 pb-2 dark:border-black-300",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Cn, { className: "dark:text-coral-500" }),
                        e.jsx("p", {
                          className: "font-bold dark:text-black-100",
                          children: l("Against"),
                        }),
                      ],
                    }),
                    e.jsx(Me.Number, {
                      state: [b, (f) => A("against", f)],
                      placeholder: l("Against"),
                      size: "s",
                      suffix: "%",
                      mutate: (f) => Math.max(f, 0),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mb-4 flex items-center justify-between border-b px-2 pb-2 dark:border-black-300",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Qn, { className: "dark:text-black-100" }),
                        e.jsx("p", {
                          className: "font-bold dark:text-black-100",
                          children: l("Abstain"),
                        }),
                      ],
                    }),
                    e.jsx(Me.Number, {
                      state: [u, () => {}],
                      placeholder: l("Against"),
                      size: "s",
                      suffix: "%",
                      mutate: (f) => Math.min(f, 0),
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "font-bold",
                  children: l("Add comment"),
                }),
                e.jsx(Me, {
                  className: "mb-4",
                  placeholder: l("Add a comment for your vote"),
                  state: [v, N],
                }),
                e.jsxs(We, {
                  onClick: c,
                  disabled: !1,
                  children: [
                    e.jsx(En, { className: "mr-1 dark:text-black-500" }),
                    l("Vote"),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const jm = ({
  noHeader: s = !1,
  wrapperClassName: t = "",
  header: r,
  headerClassName: l = "",
  main: a,
  mainClassName: n = "",
}) =>
  e.jsxs("aside", {
    className: `${t} rounded-lg`,
    children: [
      !s &&
        e.jsx("header", {
          className: `flex items-center gap-2 border-b p-4 ${l}`,
          children: r,
        }),
      e.jsx("main", { className: `p-4 ${n}`, children: a }),
    ],
  });
function Al({ proposals: s }) {
  const { governance: t } = ps(),
    { address: r, connect: l } = oe(),
    { t: a } = ge();
  x.useState(!1);
  const { id: n } = Oa(),
    d = s == null ? void 0 : s.find(({ id: f }) => n === f),
    o = t == null ? void 0 : t.user,
    i = r !== st,
    {
      votingPower: b,
      veAngleBalance: h,
      delegatee: u,
      updateDelegate: p,
    } = An(r, d == null ? void 0 : d.snapshot),
    v = b && Ce(M.from(b).toNumber(18)),
    N =
      o &&
      (o == null ? void 0 : o.delegatee) !==
        "0x0000000000000000000000000000000000000000",
    w = u ?? (o == null ? void 0 : o.delegatee),
    c =
      !d &&
      i &&
      o &&
      !N &&
      (o == null ? void 0 : o.votingBalance) > 0 &&
      (h == null ? void 0 : h.gt(0)),
    A =
      !!d &&
      (d == null ? void 0 : d.state) === "Active" &&
      i &&
      o &&
      b &&
      (b == null ? void 0 : b.gt(0));
  return e.jsx(e.Fragment, {
    children: e.jsx(jm, {
      wrapperClassName: "dark:bg-black-400 mb-4",
      header: i
        ? e.jsx(Jt, { address: r, border: !1, withName: !1 })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("img", { className: "w-6", alt: "User icon", src: $l }),
              e.jsx("h6", {
                className: "dark:text-sand-500",
                children: a("Your info"),
              }),
            ],
          }),
      headerClassName: "dark:border-black-200",
      main: i
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("p", {
                className: "mb-1 dark:text-black-100",
                children: e.jsx(se, {
                  title: a(
                    d
                      ? "This is the value of your voting power taken at the activation of the proposal."
                      : "This is the current value of your voting power. Note that your voting power may vary depending on the proposals you are voting for as every proposal is looking into your voting power at the timestamp at which the proposal got activated. Note also that your voting power may be greater than your veANGLE balance if you have received delegations from other veANGLE holders."
                  ),
                  children: a(
                    d
                      ? "Voting power for this proposal"
                      : "Current voting power"
                  ),
                }),
              }),
              e.jsxs("p", {
                className: "mb-2 font-bold",
                children: [v, " veANGLE"],
              }),
              e.jsx("div", {
                className: "gap-2",
                children:
                  i &&
                  o &&
                  e.jsxs(e.Fragment, {
                    children: [
                      !d &&
                        i &&
                        !N &&
                        (o == null ? void 0 : o.votingBalance) === 0 &&
                        e.jsx("p", {
                          className: "mb-2 dark:text-black-100",
                          children: a(
                            "You do not own veANGLE to delegate your voting power"
                          ),
                        }),
                      c &&
                        e.jsx(vl, {
                          disabled:
                            (o == null ? void 0 : o.votingBalance) === 0,
                        }),
                      (d == null ? void 0 : d.state) === "Active" &&
                        e.jsx(bm, {
                          disabled: !A,
                          power: v,
                          proposal: d,
                          id: n,
                        }),
                      !d &&
                        N &&
                        w &&
                        e.jsxs("div", {
                          className: "mt-2 flex flex-col",
                          children: [
                            e.jsx("p", {
                              className: "mb-2 dark:text-black-100",
                              children: a("Your voting power is delegated:"),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx(Jt, { address: w }),
                                e.jsx("br", {}),
                                e.jsx(vl, {
                                  onSuccess: p,
                                  children: a("Update delegation"),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("p", {
                className: "mb-2 dark:text-sand-500",
                children: a(
                  "Please connect a wallet to view your personal information here."
                ),
              }),
              e.jsx(Y, {
                type: "button",
                look: "primary",
                onClick: l,
                rightIcon: e.jsx(T, { mui: "Wallet" }),
                children: "Connect wallet",
              }),
            ],
          }),
    }),
  });
}
const Sl = ({ chainId: s }) => {
    const { t } = ge(),
      { proposals: r, loading: l } = Vd();
    return e.jsx("div", {
      className: "container",
      children: e.jsxs("div", {
        className: "mx-auto lg:w-10/12 xl:w-2/3",
        children: [
          e.jsx(_t, {
            title: t("Governance"),
            description: "Participate in Angle Protocol governance.",
            chainId: s,
            headerLogo: Bd,
            headerLogoAlt: "Vote page logo",
            logoClassName: "md:!w-24 xl:!w-28",
          }),
          e.jsxs("div", {
            className: "grid grid-cols-10 gap-4 lg:gap-6",
            children: [
              e.jsx("main", {
                className: "col-span-10 lg:col-span-7",
                children: e.jsx(Te, {
                  loading: l,
                  className: "dark:text-purple-500",
                  value: e.jsxs(ft, {
                    children: [
                      e.jsx(Pe, {
                        path: "/",
                        element: !l && e.jsx(lm, { proposals: r }),
                      }),
                      e.jsx(Pe, {
                        path: "/proposal/:id",
                        element: e.jsx(Td, { proposals: r }),
                      }),
                    ],
                  }),
                  variant: "rounded",
                  width: "100%",
                  height: "70%",
                }),
              }),
              e.jsxs("aside", {
                className:
                  "custom-scrollbar col-span-10 flex items-start gap-4 overflow-x-scroll lg:col-span-3 lg:block lg:overflow-x-visible",
                children: [
                  e.jsx(om, {}),
                  e.jsxs(ft, {
                    children: [
                      e.jsx(Pe, {
                        path: "/",
                        element: e.jsx(Al, { proposals: r }),
                      }),
                      e.jsx(Pe, {
                        path: "/proposal/:id",
                        element: e.jsx(Al, { proposals: r }),
                      }),
                    ],
                  }),
                  e.jsx(ft, {
                    children: e.jsx(Pe, {
                      path: "/proposal/:id",
                      element: e.jsx(am, { proposals: r }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Cl = "/assets/bleap-19e85350.png",
  gm = "/assets/nash-e7958589.png",
  Nm = "/assets/ramp-beb16291.svg",
  ym = "/assets/spendit-7f71a4cc.png",
  wm = "/assets/transak-5c04acbb.png",
  km = "/assets/offramp-4edb15b1.svg",
  vm = "/assets/c14-be6eabca.svg",
  Am = "/assets/fizen-eefd65fd.svg",
  Sm = "/assets/mt-pelerin-928812b7.svg",
  Cm = "/assets/cede-1cdd7c98.svg",
  Em = "/assets/stably-1a95c6d9.svg",
  Pm = () => {
    const s = [
      {
        key: "1",
        label: e.jsx("p", { children: "Buy & sell" }),
        children: e.jsxs("div", {
          className:
            "grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 lg:px-12 pb-12",
          children: [
            e.jsx(qe, {
              serviceLogo: Nm,
              serviceLogoAlt: "Ramp Logo",
              description:
                "Buy and sell USDA by card or by bank transfer with Ramp. Available directly from a wide range of different wallets.",
              externalPageURL: ke.ramp,
              imgClassName: "w-36 md:w-24 lg:w-52",
            }),
            e.jsx(qe, {
              serviceLogo: gm,
              serviceLogoAlt: "Nash Logo",
              description:
                "Buy and sell stEUR and stUSD by bank transfer or from your Revolut account on Arbitrum.",
              externalPageURL: ke.nash,
              imgClassName: "w-20 md:w-24 lg:w-auto",
            }),
            e.jsx(qe, {
              serviceLogo: Cl,
              serviceLogoAlt: "Bleap Logo",
              description:
                "Buy and sell EURA and USDA with no fees from a bank account or a credit card.",
              externalPageURL: ke.bleap,
              imgClassName: "w-20 md:w-24 lg:w-auto",
            }),
            e.jsx(qe, {
              serviceLogo: Sm,
              serviceLogoAlt: "MtPelerin Logo",
              description:
                "Buy and sell EURA by card or by bank transfer, without KYC on Ethereum, Polygon and Optimism. Regulated in Switzerland.",
              externalPageURL: ke.mtPelerin,
              imgClassName: "w-36",
            }),
            e.jsx(qe, {
              serviceLogo: wm,
              serviceLogoAlt: "Transak Logo",
              description:
                "Buy and sell EURA by card or by bank transfer with Transak. Also available directly from Metamask.",
              externalPageURL: ke.transak,
              imgClassName: "w-44 md:w-52",
            }),
            e.jsx(qe, {
              serviceLogo: Em,
              serviceLogoAlt: "Stably Logo",
              description:
                "Buy, sell or swap EURA with fees as low as 0.5% and from 170+ different countries/regions.",
              externalPageURL: ke.stably,
              imgClassName: "w-24",
            }),
            e.jsx(qe, {
              serviceLogo: km,
              serviceLogoAlt: "Offramp Logo",
              description:
                "Buy and sell Angle stablecoins on Polygon and Arbitrum with a bank transfer with a flat 0.99 USDC fee per transaction.",
              externalPageURL: ke.offramp,
              imgClassName: "w-48",
            }),
            e.jsx(qe, {
              serviceLogo: Cm,
              serviceLogoAlt: "Cede Logo",
              description:
                "Low on funds? Fund your wallet with crypto assets from your CEX (Binance, Bybit, OKX,…) to buy Angle stablecoins.",
              externalPageURL: ke.cede,
              imgClassName: "w-52",
            }),
            e.jsx(qe, {
              serviceLogo: Am,
              serviceLogoAlt: "Fizen Logo",
              description:
                "Pay for goods and services within the Fizen ecosystem in EURA.",
              externalPageURL: ke.fizen,
              imgClassName: "w-16",
            }),
            e.jsx(qe, {
              serviceLogo: vm,
              serviceLogoAlt: "C14 Logo",
              description: "Buy EURA on any network with a card.",
              externalPageURL: ke.c14,
              imgClassName: "w-12 md:w-16",
            }),
          ],
        }),
      },
      {
        key: "2",
        label: e.jsx("p", { children: "Spend" }),
        children: e.jsxs("div", {
          className:
            "grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 lg:px-12 pb-12",
          children: [
            e.jsx(qe, {
              serviceLogo: Cl,
              serviceLogoAlt: "Spendit Logo",
              description:
                "Spend your EURA and USDA with Bleap debit card all over the world with no fees.",
              externalPageURL: ke.bleap,
              imgClassName: "w-24",
            }),
            " ",
            e.jsx(qe, {
              serviceLogo: ym,
              serviceLogoAlt: "Spendit Logo",
              description:
                "Fund an anynonymous virtual Visa prepaid card with your EURA.",
              externalPageURL: ke.spendit,
              imgClassName: "w-24",
            }),
            " ",
            e.jsx(qe, {
              serviceLogo: Uo,
              serviceLogoAlt: "Holyheld Logo",
              description:
                "Spend your EURA directly with a debit card all over the world. With Holyheld, 1 EURA = 1 EUR.",
              externalPageURL: ke.holyheld,
              imgClassName: "w-16 md:w-24",
            }),
          ],
        }),
      },
    ];
    return e.jsx("main", {
      className: "container flex",
      children: e.jsxs("div", {
        className:
          "flex w-full flex-col overflow-hidden rounded-lg dark:bg-black-400 mx-auto lg:w-2/3 xl:w-1/2",
        children: [
          e.jsx("hr", {
            className:
              "border-gradient-multiple mb-6 before:!rounded-b-none before:!px-0 before:!py-1",
          }),
          e.jsx("div", {
            className: "px-4 md:px-6",
            children: e.jsx(Bt, {
              size: "l",
              defaultActiveKey: "1",
              centered: !0,
              items: s,
            }),
          }),
        ],
      }),
    });
  },
  Rm = () => {
    var l;
    const { t: s } = ge(),
      { chainId: t } = oe(),
      r = Ls((l = J(t, "USD")) == null ? void 0 : l.AgToken);
    return e.jsxs(ft, {
      children: [
        e.jsx(Pe, {
          path: xe.home,
          element: e.jsx(Zt, { to: `${xe.savingsRate}/usd`, replace: !0 }),
        }),
        e.jsx(Pe, {
          path: `${xe.governance}/*`,
          element: e.jsx(Sl, { chainId: null }),
        }),
        e.jsx(Pe, {
          path: xe.borrow,
          element: e.jsx(dl, { baseAction: ns.BORROW }),
        }),
        e.jsx(Pe, {
          path: xe.leverage,
          element: e.jsx(dl, { baseAction: ns.LEVERAGE }),
        }),
        e.jsx(Pe, { path: xe.lock, element: e.jsx(bd, {}) }),
        e.jsx(Pe, { path: xe.earn, element: e.jsx(ga, {}) }),
        e.jsx(Pe, { path: xe.yields, element: e.jsx(ga, {}) }),
        e.jsx(Pe, { path: xe.pointsProgram, element: e.jsx(wd, {}) }),
        e.jsx(Pe, { path: xe.incentives, element: e.jsx(ga, {}) }),
        e.jsx(Pe, {
          path: xe.swap,
          element: e.jsx(Ud, {
            defaultOutputToken: r,
            title: "Buy",
            description: s("Buy Angle stablecoins at the best market price"),
            logo: Yo,
            defaultMode: "SWAP",
          }),
        }),
        e.jsx(Pe, { path: xe.vote, element: e.jsx(Sl, { chainId: null }) }),
        e.jsx(Pe, { path: xe.security, element: e.jsx(ha, {}) }),
        e.jsx(Pe, { path: xe.audits, element: e.jsx(ha, {}) }),
        e.jsx(Pe, { path: xe.insurances, element: e.jsx(ha, {}) }),
        e.jsx(Pe, { path: xe.insurace, element: e.jsx(Hc, {}) }),
        e.jsx(Pe, { path: xe.nexus, element: e.jsx(jd, {}) }),
        e.jsx(Pe, { path: `${xe.bridge}/*`, element: e.jsx(ja, {}) }),
        e.jsx(Pe, {
          path: xe.bridgeANGLE,
          element: e.jsx(ja, { presetTokenSymbol: "ANGLE" }),
        }),
        e.jsx(Pe, {
          path: xe.bridgeAgEUR,
          element: e.jsx(ja, { presetTokenSymbol: "EURA" }),
        }),
        e.jsx(Pe, { path: xe.buy, element: e.jsx(Pm, {}) }),
        e.jsx(Pe, { path: `${xe.savingsRate}/*`, element: e.jsx(Nl, {}) }),
        e.jsx(Pe, { path: `${xe.savingsRate}/old`, element: e.jsx(Nl, {}) }),
        e.jsx(Pe, { path: xe.vesting, element: e.jsx(Do, {}) }),
        e.jsx(Pe, { path: xe.terms, element: e.jsx(Bo, {}) }),
        e.jsx(Pe, { path: xe.design, element: e.jsx(Eo, {}) }),
        e.jsx(Pe, { path: xe.privacy, element: e.jsx(Mo, {}) }),
        e.jsx(Pe, { path: xe.blocked, element: e.jsx(si, {}) }),
        e.jsx(Pe, { path: "*", element: e.jsx(Zt, { to: xe.home }) }),
      ],
    });
  },
  El = (s) => {
    const t = new Set();
    return (
      Object.entries(yt)
        .filter(([r]) => s.includes(r))
        .forEach(([, r]) => r.forEach((l) => t.add(l))),
      Array.from(t)
    );
  },
  Im = {
    merkl: El(["merkl"]),
    app: El(Object.keys(yt).filter((s) => s !== "merkl")),
  }[Vo],
  Lm = () => {
    const [, s] = On(),
      [t, r] = x.useState(!1),
      { chainId: l, switchChain: a, initialized: n, address: d, spy: o } = Ua(),
      i = x.useRef(null);
    Bl(i, () => {
      r(!t);
    });
    const b = d && d !== st && n,
      [h, u] = x.useState(!1),
      p = lt("USD", 0);
    return e.jsx(uo, {
      app: "angle",
      logo: e.jsx(xo, {
        logo: e.jsxs(e.Fragment, {
          children: [
            e.jsx(T, {
              size: "xxl",
              className: "!w-32 hidden md:block",
              svg: "angleText",
              alt: "angle text logo",
            }),
            e.jsx(T, {
              size: "xl",
              className: "!w-fit md:hidden my-2",
              svg: "angleGradientSolo",
              alt: "angle text logo",
            }),
          ],
        }),
        app: "angle",
        nav: fo,
      }),
      mainNav: e.jsxs(e.Fragment, {
        children: [
          Ss("USD", ["savings"]).length > 0 &&
            e.jsxs(Es, {
              to: `${xe.savingsRate}`,
              className: "page-item",
              children: [
                e.jsx(T, { svg: "animatedEarn", size: "m" }),
                "Earn",
                e.jsxs(Fs, {
                  color: "golden",
                  children: [
                    e.jsx(Te, {
                      loading:
                        !(p != null && p.apy) ||
                        (p == null ? void 0 : p.apy) === "NaN",
                      value: Ce(p == null ? void 0 : p.apy, 2),
                    }),
                    "%",
                  ],
                }),
              ],
            }),
          e.jsxs(Es, {
            to: xe.swap,
            className: "page-item",
            children: [e.jsx(T, { svg: "swapLogo", size: "m" }), "Swap"],
          }),
          e.jsxs(Es, {
            to: xe.bridge,
            className: "page-item",
            children: [e.jsx(T, { svg: "bridgeLogo", size: "m" }), "Bridge"],
          }),
          e.jsxs(Es, {
            to: xe.buy,
            className: "page-item",
            children: [e.jsx(T, { svg: "buyLogo", size: "m" }), "Buy"],
          }),
          e.jsx(Aa, {
            look: "text",
            trigger: ["hover", "click"],
            placement: "bottomRight",
            contentClassName: "no-supp-div",
            parentClassName:
              "dark:bg-black-400 px-2 py-1 dark:text-sand-500 rounded-md",
            content: [
              e.jsxs(
                Es,
                {
                  className:
                    "border-b dark:border-black-300 w-full !justify-start hover:dark:text-peach-500 flex items-center gap-1 !py-1",
                  to: xe.borrow,
                  rel: "noreferrer noopener",
                  children: [
                    e.jsx(T, { svg: "borrowMenuIcon" }),
                    "Borrow/Leverage",
                  ],
                },
                xe.borrow
              ),
              e.jsxs(
                Es,
                {
                  className:
                    "border-b dark:border-black-300 w-full !justify-start hover:dark:text-peach-500 flex items-center gap-1 !py-1",
                  to: xe.yields,
                  rel: "noreferrer noopener",
                  children: [e.jsx(T, { svg: "yieldMenuIcon" }), "Yields"],
                },
                xe.yields
              ),
              e.jsxs(
                Es,
                {
                  className:
                    "border-b dark:border-black-300 w-full !justify-start hover:dark:text-peach-500 flex items-center gap-1 !py-1",
                  to: xe.pointsProgram,
                  rel: "noreferrer noopener",
                  children: [
                    e.jsx(T, { svg: "protsMenuIcon" }),
                    "Prots leaderboard",
                  ],
                },
                xe.pointsProgram
              ),
              e.jsxs(
                Es,
                {
                  className:
                    "border-b dark:border-black-300 w-full !justify-start hover:dark:text-peach-500 flex items-center gap-1 !py-1",
                  to: xe.lock,
                  rel: "noreferrer noopener",
                  children: [e.jsx(T, { svg: "lockMenuIcon" }), "Lock"],
                },
                xe.lock
              ),
              e.jsxs(
                Es,
                {
                  className:
                    "w-full flex items-center gap-1 hover:dark:text-peach-500 !justify-start !py-1",
                  to: xe.governance,
                  rel: "noreferrer noopener",
                  children: [
                    e.jsx(T, { svg: "governanceMenuIcon" }),
                    "Governance",
                  ],
                },
                xe.governance
              ),
            ],
            override: e.jsx(Y, {
              look: "text",
              className: "page-item",
              rightIcon: e.jsx(T, {
                mui: "KeyboardArrowDown",
                className: "dark:!text-purple-500",
              }),
              children: "More",
            }),
          }),
        ],
      }),
      rightNav: {
        extra: e.jsxs(e.Fragment, {
          children: [
            e.jsx(Aa, {
              look: "text",
              trigger: ["hover", "click"],
              arrow: !1,
              placement: "bottomRight",
              content: Im.filter(
                (v) =>
                  !Object.values(yt).every(
                    (N) => !N.includes(Number.parseInt(v))
                  )
              ).map((v) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex gap-2 items-center text-sm font-bold",
                    onClick: () => a(Number.parseInt(v)),
                    children: [
                      e.jsx("figure", {
                        onClick: () => setShowTxs(!0),
                        children: e.jsx("img", {
                          className: "h-4 w-auto",
                          src: tt[v],
                          alt: "network",
                        }),
                      }),
                      ms[v],
                    ],
                  },
                  v
                )
              ),
              children: l
                ? Jr(l)
                  ? e.jsx("figure", {
                      className: "flex h-5 w-5 items-center my-2",
                      onClick: () => setShowTxs(!0),
                      children: Jr(l)
                        ? e.jsx("img", {
                            className: "h-5 w-auto",
                            src: tt[l],
                            alt: "network",
                          })
                        : e.jsx(T, {
                            mui: "ErrorOutlined",
                            className: "dark:text-coral-500",
                          }),
                    })
                  : e.jsx("span", {
                      className: "dark:text-coral-500",
                      children: "Unsupported network",
                    })
                : "Select a network",
            }),
            e.jsx(Po, { visible: h, setVisible: (v) => u(v) }),
            b
              ? e.jsx(Y, {
                  look: "secondary",
                  type: "button",
                  onClick: () => {
                    u((v) => !v);
                  },
                  leftIcon: o && e.jsx(T, { mui: "Visibility" }),
                  children: Ma(d),
                })
              : e.jsx(Y, {
                  type: "button",
                  look: "secondary",
                  onClick: () => s(),
                  children: "Connect wallet",
                }),
          ],
        }),
        help: ho.filter((v) => v.location === "header"),
        settings: e.jsx(Ro, {}),
      },
    });
  },
  Jm = () => {
    const [s, t] = x.useState(!1);
    return (
      Tl(),
      e.jsx(x.Suspense, {
        fallback: null,
        children: e.jsx(Xn, {
          children: e.jsx(No, {
            ready: s,
            children: e.jsx(co, {
              children: e.jsx(Ho, {
                children: e.jsx(po, {
                  scrollbar: !0,
                  containerClassName:
                    "pt-2 lg:pt-10 flex flex-col justify-between flex-1",
                  beforeComponent: e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(zo, { handleAccepted: () => t(!0) }),
                      e.jsx(Lm, {}),
                      e.jsx(Kn, {}),
                    ],
                  }),
                  afterComponent: e.jsx(bo, {
                    logo: e.jsx(T, {
                      svg: "angleText",
                      className: "h-auto",
                      size: "xxxl",
                    }),
                    app: "angle",
                  }),
                  children: s && e.jsx(Rm, {}),
                }),
              }),
            }),
          }),
        }),
      })
    );
  };
export { Jm as default };
