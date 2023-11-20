/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t, i, s, n;
const e = globalThis.trustedTypes,
  o = e ? e.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  h = `lit$${(Math.random() + "").slice(9)}$`,
  r = "?" + h,
  l = `<${r}>`,
  a = document,
  u = (t = "") => a.createComment(t),
  c = (t) => null === t || ("object" != typeof t && "function" != typeof t),
  d = Array.isArray,
  g = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  f = /-->/g,
  v = />/g,
  m =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  p = /'/g,
  b = /"/g,
  y = /^(?:script|style|textarea)$/i,
  w = (
    (t) =>
    (i, ...s) => ({ _$litType$: t, strings: i, values: s })
  )(1),
  x = Symbol.for("lit-noChange"),
  T = Symbol.for("lit-nothing"),
  S = new WeakMap(),
  k = a.createTreeWalker(a, 129, null, !1),
  M = (t, i) => {
    const s = t.length - 1,
      n = [];
    let e,
      r = 2 === i ? "<svg>" : "",
      a = g;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let o,
        u,
        c = -1,
        d = 0;
      for (; d < s.length && ((a.lastIndex = d), (u = a.exec(s)), null !== u); )
        (d = a.lastIndex),
          a === g
            ? "!--" === u[1]
              ? (a = f)
              : void 0 !== u[1]
              ? (a = v)
              : void 0 !== u[2]
              ? (y.test(u[2]) && (e = RegExp("</" + u[2], "g")), (a = m))
              : void 0 !== u[3] && (a = m)
            : a === m
            ? ">" === u[0]
              ? ((a = null != e ? e : g), (c = -1))
              : void 0 === u[1]
              ? (c = -2)
              : ((c = a.lastIndex - u[2].length),
                (o = u[1]),
                (a = void 0 === u[3] ? m : '"' === u[3] ? b : p))
            : a === b || a === p
            ? (a = m)
            : a === f || a === v
            ? (a = g)
            : ((a = m), (e = void 0));
      const w = a === m && t[i + 1].startsWith("/>") ? " " : "";
      r +=
        a === g
          ? s + l
          : c >= 0
          ? (n.push(o), s.slice(0, c) + "$lit$" + s.slice(c) + h + w)
          : s + h + (-2 === c ? (n.push(void 0), i) : w);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    return [void 0 !== o ? o.createHTML(u) : u, n];
  };
class C {
  constructor({ strings: t, _$litType$: i }, s) {
    let n;
    this.parts = [];
    let o = 0,
      l = 0;
    const a = t.length - 1,
      c = this.parts,
      [d, g] = M(t, i);
    if (
      ((this.el = C.createElement(d, s)),
      (k.currentNode = this.el.content),
      2 === i)
    ) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (n = k.nextNode()) && c.length < a; ) {
      if (1 === n.nodeType) {
        if (n.hasAttributes()) {
          const t = [];
          for (const i of n.getAttributeNames())
            if (i.endsWith("$lit$") || i.startsWith(h)) {
              const s = g[l++];
              if ((t.push(i), void 0 !== s)) {
                const t = n.getAttribute(s.toLowerCase() + "$lit$").split(h),
                  i = /([.?@])?(.*)/.exec(s);
                c.push({
                  type: 1,
                  index: o,
                  name: i[2],
                  strings: t,
                  ctor:
                    "." === i[1] ? I : "?" === i[1] ? $ : "@" === i[1] ? E : j,
                });
              } else c.push({ type: 6, index: o });
            }
          for (const i of t) n.removeAttribute(i);
        }
        if (y.test(n.tagName)) {
          const t = n.textContent.split(h),
            i = t.length - 1;
          if (i > 0) {
            n.textContent = e ? e.emptyScript : "";
            for (let s = 0; s < i; s++)
              n.append(t[s], u()),
                k.nextNode(),
                c.push({ type: 2, index: ++o });
            n.append(t[i], u());
          }
        }
      } else if (8 === n.nodeType)
        if (n.data === r) c.push({ type: 2, index: o });
        else {
          let t = -1;
          for (; -1 !== (t = n.data.indexOf(h, t + 1)); )
            c.push({ type: 7, index: o }), (t += h.length - 1);
        }
      o++;
    }
  }
  static createElement(t, i) {
    const s = a.createElement("template");
    return (s.innerHTML = t), s;
  }
}
function z(t, i, s = t, n) {
  var e, o, h, r;
  if (i === x) return i;
  let l =
    void 0 !== n ? (null === (e = s.Σi) || void 0 === e ? void 0 : e[n]) : s.Σo;
  const a = c(i) ? void 0 : i._$litDirective$;
  return (
    (null == l ? void 0 : l.constructor) !== a &&
      (null === (o = null == l ? void 0 : l.O) || void 0 === o || o.call(l, !1),
      void 0 === a ? (l = void 0) : ((l = new a(t)), l.T(t, s, n)),
      void 0 !== n
        ? ((null !== (h = (r = s).Σi) && void 0 !== h ? h : (r.Σi = []))[n] = l)
        : (s.Σo = l)),
    void 0 !== l && (i = z(t, l.S(t, i.values), l, n)),
    i
  );
}
class A {
  constructor(t, i) {
    (this.l = []), (this.N = void 0), (this.D = t), (this.M = i);
  }
  u(t) {
    var i;
    const {
        el: { content: s },
        parts: n,
      } = this.D,
      e = (
        null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i
          ? i
          : a
      ).importNode(s, !0);
    k.currentNode = e;
    let o = k.nextNode(),
      h = 0,
      r = 0,
      l = n[0];
    for (; void 0 !== l; ) {
      if (h === l.index) {
        let i;
        2 === l.type
          ? (i = new O(o, o.nextSibling, this, t))
          : 1 === l.type
          ? (i = new l.ctor(o, l.name, l.strings, this, t))
          : 6 === l.type && (i = new P(o, this, t)),
          this.l.push(i),
          (l = n[++r]);
      }
      h !== (null == l ? void 0 : l.index) && ((o = k.nextNode()), h++);
    }
    return e;
  }
  v(t) {
    let i = 0;
    for (const s of this.l)
      void 0 !== s &&
        (void 0 !== s.strings
          ? (s.I(t, s, i), (i += s.strings.length - 2))
          : s.I(t[i])),
        i++;
  }
}
class O {
  constructor(t, i, s, n) {
    (this.type = 2),
      (this.N = void 0),
      (this.A = t),
      (this.B = i),
      (this.M = s),
      (this.options = n);
  }
  setConnected(t) {
    var i;
    null === (i = this.P) || void 0 === i || i.call(this, t);
  }
  get parentNode() {
    return this.A.parentNode;
  }
  get startNode() {
    return this.A;
  }
  get endNode() {
    return this.B;
  }
  I(t, i = this) {
    (t = z(this, t, i)),
      c(t)
        ? t === T || null == t || "" === t
          ? (this.H !== T && this.R(), (this.H = T))
          : t !== this.H && t !== x && this.m(t)
        : void 0 !== t._$litType$
        ? this._(t)
        : void 0 !== t.nodeType
        ? this.$(t)
        : ((t) => {
            var i;
            return (
              d(t) ||
              "function" ==
                typeof (null === (i = t) || void 0 === i
                  ? void 0
                  : i[Symbol.iterator])
            );
          })(t)
        ? this.g(t)
        : this.m(t);
  }
  k(t, i = this.B) {
    return this.A.parentNode.insertBefore(t, i);
  }
  $(t) {
    this.H !== t && (this.R(), (this.H = this.k(t)));
  }
  m(t) {
    const i = this.A.nextSibling;
    null !== i &&
    3 === i.nodeType &&
    (null === this.B ? null === i.nextSibling : i === this.B.previousSibling)
      ? (i.data = t)
      : this.$(a.createTextNode(t)),
      (this.H = t);
  }
  _(t) {
    var i;
    const { values: s, _$litType$: n } = t,
      e =
        "number" == typeof n
          ? this.C(t)
          : (void 0 === n.el && (n.el = C.createElement(n.h, this.options)), n);
    if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === e)
      this.H.v(s);
    else {
      const t = new A(e, this),
        i = t.u(this.options);
      t.v(s), this.$(i), (this.H = t);
    }
  }
  C(t) {
    let i = S.get(t.strings);
    return void 0 === i && S.set(t.strings, (i = new C(t))), i;
  }
  g(t) {
    d(this.H) || ((this.H = []), this.R());
    const i = this.H;
    let s,
      n = 0;
    for (const e of t)
      n === i.length
        ? i.push((s = new O(this.k(u()), this.k(u()), this, this.options)))
        : (s = i[n]),
        s.I(e),
        n++;
    n < i.length && (this.R(s && s.B.nextSibling, n), (i.length = n));
  }
  R(t = this.A.nextSibling, i) {
    var s;
    for (
      null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i);
      t && t !== this.B;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
}
class j {
  constructor(t, i, s, n, e) {
    (this.type = 1),
      (this.H = T),
      (this.N = void 0),
      (this.V = void 0),
      (this.element = t),
      (this.name = i),
      (this.M = n),
      (this.options = e),
      s.length > 2 || "" !== s[0] || "" !== s[1]
        ? ((this.H = Array(s.length - 1).fill(T)), (this.strings = s))
        : (this.H = T);
  }
  get tagName() {
    return this.element.tagName;
  }
  I(t, i = this, s, n) {
    const e = this.strings;
    let o = !1;
    if (void 0 === e)
      (t = z(this, t, i, 0)),
        (o = !c(t) || (t !== this.H && t !== x)),
        o && (this.H = t);
    else {
      const n = t;
      let h, r;
      for (t = e[0], h = 0; h < e.length - 1; h++)
        (r = z(this, n[s + h], i, h)),
          r === x && (r = this.H[h]),
          o || (o = !c(r) || r !== this.H[h]),
          r === T ? (t = T) : t !== T && (t += (null != r ? r : "") + e[h + 1]),
          (this.H[h] = r);
    }
    o && !n && this.W(t);
  }
  W(t) {
    t === T
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class I extends j {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  W(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class $ extends j {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  W(t) {
    t && t !== T
      ? this.element.setAttribute(this.name, "")
      : this.element.removeAttribute(this.name);
  }
}
class E extends j {
  constructor() {
    super(...arguments), (this.type = 5);
  }
  I(t, i = this) {
    var s;
    if ((t = null !== (s = z(this, t, i, 0)) && void 0 !== s ? s : T) === x)
      return;
    const n = this.H,
      e =
        (t === T && n !== T) ||
        t.capture !== n.capture ||
        t.once !== n.once ||
        t.passive !== n.passive,
      o = t !== T && (n === T || e);
    e && this.element.removeEventListener(this.name, this, n),
      o && this.element.addEventListener(this.name, this, t),
      (this.H = t);
  }
  handleEvent(t) {
    var i, s;
    "function" == typeof this.H
      ? this.H.call(
          null !==
            (s =
              null === (i = this.options) || void 0 === i ? void 0 : i.host) &&
            void 0 !== s
            ? s
            : this.element,
          t,
        )
      : this.H.handleEvent(t);
  }
}
class P {
  constructor(t, i, s) {
    (this.element = t),
      (this.type = 6),
      (this.N = void 0),
      (this.V = void 0),
      (this.M = i),
      (this.options = s);
  }
  I(t) {
    z(this, t);
  }
}
null === (i = (t = globalThis).litHtmlPlatformSupport) ||
  void 0 === i ||
  i.call(t, C, O),
  (null !== (s = (n = globalThis).litHtmlVersions) && void 0 !== s
    ? s
    : (n.litHtmlVersions = [])
  ).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  U = Symbol();
class D {
  constructor(t, i) {
    if (i !== U)
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    this.cssText = t;
  }
  get styleSheet() {
    return (
      F &&
        void 0 === this.t &&
        ((this.t = new CSSStyleSheet()), this.t.replaceSync(this.cssText)),
      this.t
    );
  }
  toString() {
    return this.cssText;
  }
}
const _ = F
  ? (t) => t
  : (t) =>
      t instanceof CSSStyleSheet
        ? ((t) => {
            let i = "";
            for (const s of t.cssRules) i += s.cssText;
            return ((t) => new D(t + "", U))(i);
          })(t)
        : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var H, N, B, R;
const G = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? "" : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    },
  },
  W = (t, i) => i !== t && (i == i || t == t),
  L = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: W };
class Y extends HTMLElement {
  constructor() {
    super(),
      (this.Πi = new Map()),
      (this.Πo = void 0),
      (this.Πl = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this.Πh = null),
      this.u();
  }
  static addInitializer(t) {
    var i;
    (null !== (i = this.v) && void 0 !== i) || (this.v = []), this.v.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((i, s) => {
        const n = this.Πp(s, i);
        void 0 !== n && (this.Πm.set(n, s), t.push(n));
      }),
      t
    );
  }
  static createProperty(t, i = L) {
    if (
      (i.state && (i.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, i),
      !i.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
        n = this.getPropertyDescriptor(t, s, i);
      void 0 !== n && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },
      set(n) {
        const e = this[t];
        (this[i] = n), this.requestUpdate(t, e, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || L;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this.Πm = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const t = this.properties,
        i = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const s of i) this.createProperty(s, t[s]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const t of s) i.unshift(_(t));
    } else void 0 !== t && i.push(_(t));
    return i;
  }
  static Πp(t, i) {
    const s = i.attribute;
    return !1 === s
      ? void 0
      : "string" == typeof s
      ? s
      : "string" == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  u() {
    var t;
    (this.Πg = new Promise((t) => (this.enableUpdating = t))),
      (this.L = new Map()),
      this.Π_(),
      this.requestUpdate(),
      null === (t = this.constructor.v) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this.ΠU) && void 0 !== i ? i : (this.ΠU = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this.ΠU) ||
      void 0 === i ||
      i.splice(this.ΠU.indexOf(t) >>> 0, 1);
  }
  Π_() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this.Πi.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const i =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, i) => {
        F
          ? (t.adoptedStyleSheets = i.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : i.forEach((i) => {
              const s = document.createElement("style");
              (s.textContent = i.cssText), t.appendChild(s);
            });
      })(i, this.constructor.elementStyles),
      i
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this.ΠU) ||
        void 0 === t ||
        t.forEach((t) => {
          var i;
          return null === (i = t.hostConnected) || void 0 === i
            ? void 0
            : i.call(t);
        }),
      this.Πl && (this.Πl(), (this.Πo = this.Πl = void 0));
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this.ΠU) ||
      void 0 === t ||
      t.forEach((t) => {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i
          ? void 0
          : i.call(t);
      }),
      (this.Πo = new Promise((t) => (this.Πl = t)));
  }
  attributeChangedCallback(t, i, s) {
    this.K(t, s);
  }
  Πj(t, i, s = L) {
    var n, e;
    const o = this.constructor.Πp(t, s);
    if (void 0 !== o && !0 === s.reflect) {
      const h = (
        null !==
          (e =
            null === (n = s.converter) || void 0 === n
              ? void 0
              : n.toAttribute) && void 0 !== e
          ? e
          : G.toAttribute
      )(i, s.type);
      (this.Πh = t),
        null == h ? this.removeAttribute(o) : this.setAttribute(o, h),
        (this.Πh = null);
    }
  }
  K(t, i) {
    var s, n, e;
    const o = this.constructor,
      h = o.Πm.get(t);
    if (void 0 !== h && this.Πh !== h) {
      const t = o.getPropertyOptions(h),
        r = t.converter,
        l =
          null !==
            (e =
              null !==
                (n =
                  null === (s = r) || void 0 === s
                    ? void 0
                    : s.fromAttribute) && void 0 !== n
                ? n
                : "function" == typeof r
                ? r
                : null) && void 0 !== e
            ? e
            : G.fromAttribute;
      (this.Πh = h), (this[h] = l(i, t.type)), (this.Πh = null);
    }
  }
  requestUpdate(t, i, s) {
    let n = !0;
    void 0 !== t &&
      (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || W)(
        this[t],
        i,
      )
        ? (this.L.has(t) || this.L.set(t, i),
          !0 === s.reflect &&
            this.Πh !== t &&
            (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s)))
        : (n = !1)),
      !this.isUpdatePending && n && (this.Πg = this.Πq());
  }
  async Πq() {
    this.isUpdatePending = !0;
    try {
      for (await this.Πg; this.Πo; ) await this.Πo;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.performUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this.Πi && (this.Πi.forEach((t, i) => (this[i] = t)), (this.Πi = void 0));
    let i = !1;
    const s = this.L;
    try {
      (i = this.shouldUpdate(s)),
        i
          ? (this.willUpdate(s),
            null === (t = this.ΠU) ||
              void 0 === t ||
              t.forEach((t) => {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i
                  ? void 0
                  : i.call(t);
              }),
            this.update(s))
          : this.Π$();
    } catch (t) {
      throw ((i = !1), this.Π$(), t);
    }
    i && this.E(s);
  }
  willUpdate(t) {}
  E(t) {
    var i;
    null === (i = this.ΠU) ||
      void 0 === i ||
      i.forEach((t) => {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i
          ? void 0
          : i.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  Π$() {
    (this.L = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.Πg;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this.Πk &&
      (this.Πk.forEach((t, i) => this.Πj(i, this[i], t)), (this.Πk = void 0)),
      this.Π$();
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q, J, K, X, V, Z;
(Y.finalized = !0),
  (Y.shadowRootOptions = { mode: "open" }),
  null === (N = (H = globalThis).reactiveElementPlatformSupport) ||
    void 0 === N ||
    N.call(H, { ReactiveElement: Y }),
  (null !== (B = (R = globalThis).reactiveElementVersions) && void 0 !== B
    ? B
    : (R.reactiveElementVersions = [])
  ).push("1.0.0-rc.1"),
  (null !== (q = (Z = globalThis).litElementVersions) && void 0 !== q
    ? q
    : (Z.litElementVersions = [])
  ).push("3.0.0-rc.1");
class Q extends Y {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this.Φt = void 0);
  }
  createRenderRoot() {
    var t, i;
    const s = super.createRenderRoot();
    return (
      (null !== (t = (i = this.renderOptions).renderBefore) && void 0 !== t) ||
        (i.renderBefore = s.firstChild),
      s
    );
  }
  update(t) {
    const i = this.render();
    super.update(t),
      (this.Φt = ((t, i, s) => {
        var n, e;
        const o =
          null !== (n = null == s ? void 0 : s.renderBefore) && void 0 !== n
            ? n
            : i;
        let h = o._$litPart$;
        if (void 0 === h) {
          const t =
            null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e
              ? e
              : null;
          o._$litPart$ = h = new O(i.insertBefore(u(), t), t, void 0, s);
        }
        return h.I(t), h;
      })(i, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return x;
  }
}
(Q.finalized = !0),
  (Q._$litElement$ = !0),
  null === (K = (J = globalThis).litElementHydrateSupport) ||
    void 0 === K ||
    K.call(J, { LitElement: Q }),
  null === (V = (X = globalThis).litElementPlatformSupport) ||
    void 0 === V ||
    V.call(X, { LitElement: Q });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (t, i) =>
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
var it = function () {
  return (it =
    Object.assign ||
    function (t) {
      for (var i, s = 1, n = arguments.length; s < n; s++)
        for (var e in (i = arguments[s]))
          Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
      return t;
    }).apply(this, arguments);
};
var st = "lgAfterAppendSlide",
  nt = "lgInit",
  et = "lgHasVideo",
  ot = "lgContainerResize",
  ht = "lgUpdateSlides",
  rt = "lgAfterAppendSubHtml",
  lt = "lgBeforeOpen",
  at = "lgAfterOpen",
  ut = "lgSlideItemLoad",
  ct = "lgBeforeSlide",
  dt = "lgAfterSlide",
  gt = "lgPosterClick",
  ft = "lgDragStart",
  vt = "lgDragMove",
  mt = "lgDragEnd",
  pt = "lgBeforeNextSlide",
  bt = "lgBeforePrevSlide",
  yt = "lgBeforeClose",
  wt = "lgAfterClose",
  xt = {
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
  };
var Tt = (function () {
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
      return St(this._getSelector(t, this.selector));
    }),
    (t.prototype.first = function () {
      return this.selector && void 0 !== this.selector.length
        ? St(this.selector[0])
        : St(this.selector);
    }),
    (t.prototype.eq = function (t) {
      return St(this.selector[t]);
    }),
    (t.prototype.parent = function () {
      return St(this.selector.parentElement);
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
      return !!this.firstElement && this.firstElement.classList.contains(t);
    }),
    (t.prototype.hasAttribute = function (t) {
      return !!this.firstElement && this.firstElement.hasAttribute(t);
    }),
    (t.prototype.toggleClass = function (t) {
      return this.firstElement
        ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this)
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
            Array.isArray(t.eventListeners[i]) || (t.eventListeners[i] = []),
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
        i = St("body").style().marginLeft;
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
function St(t) {
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
    new Tt(t)
  );
}
var kt = [
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
function Mt(t) {
  return "href" === t
    ? "src"
    : (t = (t =
        (t = t.replace("data-", "")).charAt(0).toLowerCase() +
        t.slice(1)).replace(/-([a-z])/g, function (t) {
        return t[1].toUpperCase();
      }));
}
var Ct = function (t, i, s, n) {
    void 0 === s && (s = 0);
    var e = St(t).attr("data-lg-size") || n;
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
  zt = function (t, i, s, n, e) {
    if (e) {
      var o = St(t).find("img").first();
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
            St(window).scrollLeft() +
            h.left,
          g =
            (l - u) / 2 -
            o.offset().top +
            (parseFloat(c.paddingTop) || 0) +
            (parseFloat(c.borderTop) || 0) +
            St(window).scrollTop() +
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
  At = function (t, i, s, n, e, o) {
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
  Ot = function (t, i, s, n, e, o) {
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
    o &&
      (r = ("string" == typeof o ? JSON.parse(o) : o).map(function (t) {
        var i = "";
        return (
          Object.keys(t).forEach(function (s) {
            i += " " + s + '="' + t[s] + '"';
          }),
          "<source " + i + "></source>"
        );
      }));
    return "" + r + h;
  },
  jt = function (t) {
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
  It = function (t) {
    return !!t && !!t.complete && 0 !== t.naturalWidth;
  },
  $t = function (t, i, s, n, e) {
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
  Et = function (t) {
    var i = t.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
    );
    return [].filter.call(i, function (t) {
      var i = window.getComputedStyle(t);
      return "none" !== i.display && "hidden" !== i.visibility;
    });
  },
  Pt = function (t, i, s, n) {
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
      })(kt, i);
    return (
      [].forEach.call(t, function (t) {
        for (var i = {}, h = 0; h < t.attributes.length; h++) {
          var r = t.attributes[h];
          if (r.specified) {
            var l = Mt(r.name),
              a = "";
            o.indexOf(l) > -1 && (a = l), a && (i[a] = r.value);
          }
        }
        var u = St(t),
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
  Ft = function () {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },
  Ut = function (t, i, s) {
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
    return n ? { youtube: n } : e ? { vimeo: e } : o ? { wistia: o } : void 0;
  },
  Dt = 0,
  _t = (function () {
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
        (Dt++,
        (this.lgId = Dt),
        (this.el = t),
        (this.LGel = St(t)),
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
          ((this.settings = it(it({}, xt), t)),
          this.settings.isMobile && "function" == typeof this.settings.isMobile
            ? this.settings.isMobile()
            : Ft())
        ) {
          var i = it(
            it({}, this.settings.mobileSettings),
            this.settings.mobileSettings,
          );
          this.settings = it(it({}, this.settings), i);
        }
      }),
      (t.prototype.normalizeSettings = function () {
        this.settings.slideEndAnimation &&
          (this.settings.hideControlOnEnd = !1),
          this.settings.closable || (this.settings.swipeToClose = !1),
          (this.zoomFromOrigin = this.settings.zoomFromOrigin),
          this.settings.dynamic && (this.zoomFromOrigin = !1),
          this.settings.container || (this.settings.container = document.body),
          (this.settings.preload = Math.min(
            this.settings.preload,
            this.galleryItems.length,
          ));
      }),
      (t.prototype.init = function () {
        var t = this;
        this.addSlideVideoInfo(this.galleryItems),
          this.buildStructure(),
          this.LGel.trigger(nt, { instance: this }),
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
                e = St(n),
                o = Tt.generateUUID();
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
          t.plugins.push(new i(t, St));
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
        return St(this.getSlideItemId(t));
      }),
      (t.prototype.getSlideItemId = function (t) {
        return "#lg-item-" + this.lgId + "-" + t;
      }),
      (t.prototype.getIdName = function (t) {
        return t + "-" + this.lgId;
      }),
      (t.prototype.getElementById = function (t) {
        return St("#" + this.getIdName(t));
      }),
      (t.prototype.manageSingleSlideClassName = function () {
        this.galleryItems.length < 2
          ? this.outer.addClass("lg-single-item")
          : this.outer.removeClass("lg-single-item");
      }),
      (t.prototype.buildStructure = function () {
        var t = this;
        if (!(this.$container && this.$container.get())) {
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
              (document.body !== this.settings.container ? "lg-inline" : ""),
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
          St(this.settings.container).append(a),
            document.body !== this.settings.container &&
              St(this.settings.container).css("position", "relative"),
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
            this.$inner.css("transition-timing-function", this.settings.easing),
            this.$inner.css("transition-duration", this.settings.speed + "ms"),
            this.settings.download &&
              this.$toolbar.append(
                '<a id="' +
                  this.getIdName("lg-download") +
                  '" target="_blank" rel="noopener" aria-label="' +
                  this.settings.strings.download +
                  '" download class="lg-download lg-icon"></a>',
              ),
            this.counter(),
            St(window).on(
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
          var t = this.galleryItems[this.index].i;
          this.mediaContainerPosition = this.getMediaContainerPosition();
          var i = this.mediaContainerPosition,
            s = i.top,
            n = i.bottom;
          if (
            ((this.currentImageSize = Ct(
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
          this.LGel.trigger(ot);
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
            this.LGel.trigger(ht);
        } else this.closeGallery();
      }),
      (t.prototype.getItems = function () {
        if (((this.items = []), this.settings.dynamic))
          return this.settings.dynamicEl || [];
        if ("this" === this.settings.selector) this.items.push(this.el);
        else if (this.settings.selector)
          if ("string" == typeof this.settings.selector)
            if (this.settings.selectWithin) {
              var t = St(this.settings.selectWithin);
              this.items = t.find(this.settings.selector).get();
            } else
              this.items = this.el.querySelectorAll(this.settings.selector);
          else this.items = this.settings.selector;
        else this.items = this.el.children;
        return Pt(
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
          this.bodyPaddingRight = parseFloat(St("body").style().paddingRight);
          var t = document.documentElement.getBoundingClientRect(),
            i = window.innerWidth - t.width;
          St(document.body).css(
            "padding-right",
            i + this.bodyPaddingRight + "px",
          ),
            St(document.body).addClass("lg-overlay-open");
        }
      }),
      (t.prototype.resetScrollBar = function () {
        this.shouldHideScrollbar() &&
          (St(document.body).css("padding-right", this.bodyPaddingRight + "px"),
          St(document.body).removeClass("lg-overlay-open"));
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
          var a = this.galleryItems[t].i;
          this.zoomFromOrigin &&
            i &&
            ((this.currentImageSize = Ct(
              i,
              this.outer,
              r + l,
              a && this.settings.videoMaxSize,
            )),
            (o = zt(i, this.outer, r, l, this.currentImageSize))),
            (this.zoomFromOrigin && o) ||
              (this.outer.addClass(this.settings.startClass),
              this.getSlideItem(t).removeClass("lg-complete"));
          var u = this.settings.zoomFromOrigin
            ? 100
            : this.settings.backdropDuration;
          setTimeout(function () {
            s.outer.addClass("lg-components-open");
          }, u),
            (this.index = t),
            this.LGel.trigger(lt),
            this.getSlideItem(t).addClass("lg-current"),
            (this.lGalleryOn = !1),
            (this.prevScrollTop = St(window).scrollTop()),
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
                s.$backdrop.addClass("in"), s.$container.addClass("lg-show-in");
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
                s.LGel.trigger(at);
            }),
            document.body === this.settings.container &&
              St("html").addClass("lg-on");
        }
      }),
      (t.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
        var t = this.$toolbar.get().clientHeight || 0,
          i = this.outer.find(".lg-components .lg-sub-html").get(),
          s = this.settings.defaultCaptionHeight || (i && i.clientHeight) || 0,
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
              (t.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                t.outer.removeClass("lg-hide-items"),
                  clearTimeout(t.hideBarTimeout),
                  (t.hideBarTimeout = setTimeout(function () {
                    t.outer.addClass("lg-hide-items");
                  }, t.settings.hideBarsDelay));
              }),
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
                this.settings.subHtmlSelectorRelative && !this.settings.dynamic
                  ? St(this.items).eq(t).find(i).first().html()
                  : St(i).first().html());
          } else i = "";
        if (".lg-item" !== this.settings.appendSubHtmlTo)
          s
            ? this.outer.find(".lg-sub-html").load(s)
            : this.outer.find(".lg-sub-html").html(i);
        else {
          var e = St(this.getSlideItemId(t));
          s ? e.load(s) : e.append('<div class="lg-sub-html">' + i + "</div>");
        }
        null != i &&
          ("" === i
            ? this.outer
                .find(this.settings.appendSubHtmlTo)
                .addClass("lg-empty-html")
            : this.outer
                .find(this.settings.appendSubHtmlTo)
                .removeClass("lg-empty-html")),
          this.LGel.trigger(rt, { index: t });
      }),
      (t.prototype.preload = function (t) {
        for (
          var i = 1;
          i <= this.settings.preload && !(i >= this.galleryItems.length - t);
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
        if ((this.settings.dynamic || (n = St(this.items).eq(i)), n)) {
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
              : Ot(s, t, l, o, h, r)) +
            "</picture>";
        i.prepend(a);
      }),
      (t.prototype.onSlideObjectLoad = function (t, i, s, n) {
        var e = t.find(".lg-object").first();
        It(e.get()) || i
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
            o.LGel.trigger(ut, { index: i, delay: s || 0, isFirstSlide: e });
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
          (t.i = Ut(t.src, !!t.video, s)),
            t.i &&
              i.settings.loadYouTubePoster &&
              !t.poster &&
              t.i.youtube &&
              (t.poster =
                "//img.youtube.com/vi/" +
                t.i.youtube[1] +
                "/maxresdefault.jpg");
        });
      }),
      (t.prototype.loadContent = function (t, i) {
        var s = this,
          n = this.galleryItems[t],
          e = St(this.getSlideItemId(t)),
          o = n.poster,
          h = n.srcset,
          r = n.sizes,
          l = n.sources,
          a = n.src,
          u = n.video,
          c = u && "string" == typeof u ? JSON.parse(u) : u;
        if (n.responsive) {
          var d = n.responsive.split(",");
          a = jt(d) || a;
        }
        var g = n.i,
          f = "",
          v = !!n.iframe,
          m = !this.lGalleryOn,
          p = 0;
        if (
          (m &&
            (p =
              this.zoomFromOrigin && this.currentImageSize
                ? this.settings.startAnimationDuration + 10
                : this.settings.backdropDuration + 10),
          !e.hasClass("lg-loaded"))
        ) {
          if (g) {
            var b = this.mediaContainerPosition,
              y = b.top,
              w = b.bottom,
              x = Ct(
                this.items[t],
                this.outer,
                y + w,
                g && this.settings.videoMaxSize,
              );
            f = this.getVideoContStyle(x);
          }
          if (v) {
            var T = At(
              this.settings.iframeWidth,
              this.settings.iframeHeight,
              this.settings.iframeMaxWidth,
              this.settings.iframeMaxHeight,
              a,
              n.iframeTitle,
            );
            e.prepend(T);
          } else if (o) {
            var S = "";
            m &&
              this.zoomFromOrigin &&
              this.currentImageSize &&
              (S = this.getDummyImageContent(e, t, ""));
            T = $t(o, S || "", f, this.settings.strings.playVideo, g);
            e.prepend(T);
          } else if (g) {
            T = '<div class="lg-video-cont " style="' + f + '"></div>';
            e.prepend(T);
          } else if ((this.setImgMarkup(a, e, t), h || l)) {
            var k = e.find(".lg-object");
            this.initPictureFill(k);
          }
          (o || g) &&
            this.LGel.trigger(et, {
              index: t,
              src: a,
              html5Video: c,
              hasPoster: !!o,
            }),
            this.LGel.trigger(st, { index: t }),
            this.lGalleryOn &&
              ".lg-item" === this.settings.appendSubHtmlTo &&
              this.addHtml(t);
        }
        var M = 0;
        p && !St(document.body).hasClass("lg-from-hash") && (M = p),
          this.isFirstSlideWithZoomAnimation() &&
            (setTimeout(function () {
              e.removeClass(
                "lg-start-end-progress lg-start-progress",
              ).removeAttr("style");
            }, this.settings.startAnimationDuration + 100),
            e.hasClass("lg-loaded") ||
              setTimeout(function () {
                if ("image" === s.getSlideType(n)) {
                  var i = n.alt,
                    u = i ? 'alt="' + i + '"' : "";
                  if (
                    (e
                      .find(".lg-img-wrap")
                      .append(Ot(t, a, u, h, r, n.sources)),
                    h || l)
                  ) {
                    var c = e.find(".lg-object");
                    s.initPictureFill(c);
                  }
                }
                ("image" === s.getSlideType(n) ||
                  ("video" === s.getSlideType(n) && o)) &&
                  (s.onLgObjectLoad(e, t, p, M, !0, !1),
                  s.onSlideObjectLoad(
                    e,
                    !(!g || !g.html5 || o),
                    function () {
                      s.loadContentOnFirstSlideLoad(t, e, M);
                    },
                    function () {
                      s.loadContentOnFirstSlideLoad(t, e, M);
                    },
                  ));
              }, this.settings.startAnimationDuration + 100)),
          e.addClass("lg-loaded"),
          (this.isFirstSlideWithZoomAnimation() &&
            ("video" !== this.getSlideType(n) || o)) ||
            this.onLgObjectLoad(e, t, p, M, m, !(!g || !g.html5 || o)),
          (this.zoomFromOrigin && this.currentImageSize) ||
            !e.hasClass("lg-complete_") ||
            this.lGalleryOn ||
            setTimeout(function () {
              e.addClass("lg-complete");
            }, this.settings.backdropDuration),
          (this.lGalleryOn = !0),
          !0 === i &&
            (e.hasClass("lg-complete_")
              ? this.preload(t)
              : e
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
          for (r = t; r <= this.galleryItems.length - 1 && r < t + o / 2; r++)
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
                  "lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1),
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
            -1 === n.indexOf(t) && St("#" + t).remove();
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
                  ? (i.addClass("lg-prev-slide"), s.addClass("lg-next-slide"))
                  : (i.addClass("lg-next-slide"), s.addClass("lg-prev-slide")),
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
              u = a.i;
            if (
              (this.outer.attr("data-lg-slide-type", this.getSlideType(a)),
              this.setDownloadValue(t),
              u)
            ) {
              var c = this.mediaContainerPosition,
                d = c.top,
                g = c.bottom,
                f = Ct(
                  this.items[t],
                  this.outer,
                  d + g,
                  u && this.settings.videoMaxSize,
                );
              this.resizeVideoSlide(t, f);
            }
            if (
              (this.LGel.trigger(ct, {
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
              var v = void 0,
                m = void 0;
              h > 2
                ? ((v = t - 1),
                  (m = t + 1),
                  ((0 === t && o === h - 1) || (t === h - 1 && 0 === o)) &&
                    ((m = 0), (v = h - 1)))
                : ((v = 0), (m = 1)),
                "prev" === n
                  ? this.getSlideItem(m).addClass("lg-next-slide")
                  : this.getSlideItem(v).addClass("lg-prev-slide"),
                r.addClass("lg-current");
            } else this.makeSlideAnimation(n, r, l);
            this.lGalleryOn
              ? setTimeout(
                  function () {
                    e.loadContent(t, !0),
                      ".lg-item" !== e.settings.appendSubHtmlTo && e.addHtml(t);
                  },
                  this.settings.speed + 50 + (i ? 0 : this.settings.slideDelay),
                )
              : this.loadContent(t, !0),
              setTimeout(
                function () {
                  (e.lgBusy = !1),
                    l.removeClass("lg-slide-progress"),
                    e.LGel.trigger(dt, {
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
        return t.i ? "video" : t.iframe ? "iframe" : "image";
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
        "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
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
              var r = St(s.target);
              e.isPosterElement(r) && e.LGel.trigger(gt);
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
            (!St(s.target).hasClass("lg-item") &&
              !n.get().contains(s.target)) ||
              t.outer.hasClass("lg-zoomed") ||
              t.lgBusy ||
              1 !== s.touches.length ||
              ((e = !0),
              (t.touchAction = "swipe"),
              t.manageSwipeClass(),
              (i = { pageX: s.touches[0].pageX, pageY: s.touches[0].pageY }));
          }),
          this.$inner.on("touchmove.lg", function (o) {
            e &&
              "swipe" === t.touchAction &&
              1 === o.touches.length &&
              ((s = { pageX: o.touches[0].pageX, pageY: o.touches[0].pageY }),
              t.touchMove(i, s, o),
              (n = !0));
          }),
          this.$inner.on("touchend.lg", function (o) {
            if ("swipe" === t.touchAction) {
              if (n) (n = !1), t.touchEnd(s, i, o);
              else if (e) {
                var h = St(o.target);
                t.isPosterElement(h) && t.LGel.trigger(gt);
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
            (St(s.target).hasClass("lg-item") || e.get().contains(s.target)) &&
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
                  t.LGel.trigger(ft))));
          }),
          St(window).on("mousemove.lg.global" + this.lgId, function (o) {
            n &&
              t.lgOpened &&
              ((e = !0),
              (s = { pageX: o.pageX, pageY: o.pageY }),
              t.touchMove(i, s),
              t.LGel.trigger(vt));
          }),
          St(window).on("mouseup.lg.global" + this.lgId, function (o) {
            if (t.lgOpened) {
              var h = St(o.target);
              e
                ? ((e = !1), t.touchEnd(s, i, o), t.LGel.trigger(mt))
                : t.isPosterElement(h) && t.LGel.trigger(gt),
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
            t.isPosterElement(St(i.target)) &&
            t.LGel.trigger(gt);
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
                this.LGel.trigger(pt, { index: this.index }),
                this.slide(this.index, !!t, !1, "next"))
              : s
              ? ((this.index = 0),
                this.LGel.trigger(pt, { index: this.index }),
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
                this.LGel.trigger(bt, { index: this.index, fromTouch: t }),
                this.slide(this.index, !!t, !1, "prev"))
              : s
              ? ((this.index = this.galleryItems.length - 1),
                this.LGel.trigger(bt, { index: this.index, fromTouch: t }),
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
        St(window).on("keydown.lg.global" + this.lgId, function (i) {
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
          var i = St(this.items[t]);
          i.off("click.lgcustom-item-" + i.attr("data-lg-id"));
        }
      }),
      (t.prototype.trapFocus = function () {
        var t = this;
        this.$container.get().focus({ preventScroll: !0 }),
          St(window).on("keydown.lg.global" + this.lgId, function (i) {
            if (t.lgOpened && ("Tab" === i.key || 9 === i.keyCode)) {
              var s = Et(t.$container.get()),
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
                var n = St(s.target);
                i = !!t.isSlideElement(n);
              }),
              this.outer.on("mousemove.lg", function () {
                i = !1;
              }),
              this.outer.on("mouseup.lg", function (s) {
                var n = St(s.target);
                t.isSlideElement(n) &&
                  i &&
                  (t.outer.hasClass("lg-dragging") || t.closeGallery());
              }));
        }
      }),
      (t.prototype.closeGallery = function (t) {
        var i = this;
        if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
        this.LGel.trigger(yt),
          this.settings.resetScrollPosition &&
            !this.settings.hideScrollbar &&
            St(window).scrollTop(this.prevScrollTop);
        var s,
          n = this.items[this.index];
        if (this.zoomFromOrigin && n) {
          var e = this.mediaContainerPosition,
            o = e.top,
            h = e.bottom,
            r = this.galleryItems[this.index],
            l = r.i,
            a = r.poster,
            u = Ct(n, this.outer, o + h, l && a && this.settings.videoMaxSize);
          s = zt(n, this.outer, o, h, u);
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
          St("html").removeClass("lg-on"),
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
            i.zoomFromOrigin && s && i.outer.removeClass("lg-zoom-from-image"),
              i.$container.removeClass("lg-show"),
              i.resetScrollBar(),
              i.$backdrop
                .removeAttr("style")
                .css("transition-duration", i.settings.backdropDuration + "ms"),
              i.outer.removeClass("lg-closing " + i.settings.startClass),
              i.getSlideItem(i.index).removeClass("lg-start-end-progress"),
              i.$inner.empty(),
              i.lgOpened && i.LGel.trigger(wt, { instance: i }),
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
          this.LGel.trigger(ht);
      }),
      (t.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems),
          this.updateCounterTotal(),
          this.manageSingleSlideClassName();
      }),
      (t.prototype.destroyGallery = function () {
        this.destroyModules(!0),
          this.settings.dynamic || this.invalidateItems(),
          St(window).off(".lg.global" + this.lgId),
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
  })();
var Ht = function (t, i, s, n) {
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
    (e = t[r]) && (h = (o < 3 ? e(h) : o > 3 ? e(i, s, h) : e(i, s)) || h);
  return o > 3 && h && Object.defineProperty(i, s, h), h;
};
let Nt = class extends Q {
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
    this.galleryInstance = new _t(this, s);
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
    return w`
            <div id="container">
                <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
        `;
  }
};
Ht(
  [
    (function (t) {
      return (i, s) =>
        void 0 !== s
          ? ((t, i, s) => {
              i.constructor.createProperty(s, t);
            })(t, i, s)
          : tt(t, i);
    })({ type: Object }),
  ],
  Nt.prototype,
  "settings",
  void 0,
),
  (Nt = Ht(
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
    Nt,
  ));
export { Nt as LightGalleryLit };
