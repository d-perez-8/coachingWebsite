!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("lit-element"))
    : "function" == typeof define && define.amd
    ? define(["exports", "lit-element"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self)[
          "lottie-player"
        ] = {}),
        t.litElement,
      );
})(this, function (exports, litElement) {
  "use strict";
  function ownKeys(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, i);
    }
    return r;
  }
  function _objectSpread2(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ownKeys(Object(r), !0).forEach(function (e) {
            _defineProperty(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ownKeys(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function asyncGeneratorStep(t, e, r, i, s, a, n) {
    try {
      var o = t[a](n),
        h = o.value;
    } catch (t) {
      return void r(t);
    }
    o.done ? e(h) : Promise.resolve(h).then(i, s);
  }
  function _asyncToGenerator(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (i, s) {
        var a = t.apply(e, r);
        function n(t) {
          asyncGeneratorStep(a, i, s, n, o, "next", t);
        }
        function o(t) {
          asyncGeneratorStep(a, i, s, n, o, "throw", t);
        }
        n(void 0);
      });
    };
  }
  function _defineProperty(t, e, r) {
    return (
      (e = _toPropertyKey(e)) in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function _taggedTemplateLiteral(t, e) {
    return (
      e || (e = t.slice(0)),
      Object.freeze(
        Object.defineProperties(t, { raw: { value: Object.freeze(e) } }),
      )
    );
  }
  function _toPrimitive(t, e) {
    if ("object" != typeof t || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var i = r.call(t, e || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var e = _toPrimitive(t, "string");
    return "symbol" == typeof e ? e : String(e);
  }
  function __decorate(t, e, r, i) {
    var s,
      a = arguments.length,
      n =
        a < 3
          ? e
          : null === i
          ? (i = Object.getOwnPropertyDescriptor(e, r))
          : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      n = Reflect.decorate(t, e, r, i);
    else
      for (var o = t.length - 1; o >= 0; o--)
        (s = t[o]) && (n = (a < 3 ? s(n) : a > 3 ? s(e, r, n) : s(e, r)) || n);
    return a > 3 && n && Object.defineProperty(e, r, n), n;
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  }
  var e$4 = (t) => (e) =>
      "function" == typeof e
        ? ((t, e) => (customElements.define(t, e), e))(t, e)
        : ((t, e) => {
            var { kind: r, elements: i } = e;
            return {
              kind: r,
              elements: i,
              finisher(e) {
                customElements.define(t, e);
              },
            };
          })(t, e),
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ i$3 = (t, e) =>
      "method" === e.kind && e.descriptor && !("value" in e.descriptor)
        ? _objectSpread2(
            _objectSpread2({}, e),
            {},
            {
              finisher(r) {
                r.createProperty(e.key, t);
              },
            },
          )
        : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer() {
              "function" == typeof e.initializer &&
                (this[e.key] = e.initializer.call(this));
            },
            finisher(r) {
              r.createProperty(e.key, t);
            },
          };
  function e$3(t) {
    return (e, r) =>
      void 0 !== r
        ? ((t, e, r) => {
            e.constructor.createProperty(r, t);
          })(t, e, r)
        : i$3(t, e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var o$4 = (t) => {
      var { finisher: e, descriptor: r } = t;
      return (t, i) => {
        var s;
        if (void 0 === i) {
          var a = null !== (s = t.originalKey) && void 0 !== s ? s : t.key,
            n =
              null != r
                ? {
                    kind: "method",
                    placement: "prototype",
                    key: a,
                    descriptor: r(t.key),
                  }
                : _objectSpread2(_objectSpread2({}, t), {}, { key: a });
          return (
            null != e &&
              (n.finisher = function (t) {
                e(t, a);
              }),
            n
          );
        }
        var o = t.constructor;
        void 0 !== r && Object.defineProperty(t, i, r(i)), null == e || e(o, i);
      };
    },
    n$4;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function i$2(t, e) {
    return o$4({
      descriptor: (r) => {
        var i = {
          get() {
            var e, r;
            return null !==
              (r =
                null === (e = this.renderRoot) || void 0 === e
                  ? void 0
                  : e.querySelector(t)) && void 0 !== r
              ? r
              : null;
          },
          enumerable: !0,
          configurable: !0,
        };
        if (e) {
          var s = "symbol" == typeof r ? Symbol() : "__" + r;
          i.get = function () {
            var e, r;
            return (
              void 0 === this[s] &&
                (this[s] =
                  null !==
                    (r =
                      null === (e = this.renderRoot) || void 0 === e
                        ? void 0
                        : e.querySelector(t)) && void 0 !== r
                    ? r
                    : null),
              this[s]
            );
          };
        }
        return i;
      },
    });
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ null === (n$4 = window.HTMLSlotElement) ||
    void 0 === n$4 ||
    n$4.prototype.assignedElements;
  /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  var Z_FIXED$1 = 4,
    Z_BINARY = 0,
    Z_TEXT = 1,
    Z_UNKNOWN$1 = 2;
  function zero$1(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  var STORED_BLOCK = 0,
    STATIC_TREES = 1,
    DYN_TREES = 2,
    MIN_MATCH$1 = 3,
    MAX_MATCH$1 = 258,
    LENGTH_CODES$1 = 29,
    LITERALS$1 = 256,
    L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1,
    D_CODES$1 = 30,
    BL_CODES$1 = 19,
    HEAP_SIZE$1 = 2 * L_CODES$1 + 1,
    MAX_BITS$1 = 15,
    Buf_size = 16,
    MAX_BL_BITS = 7,
    END_BLOCK = 256,
    REP_3_6 = 16,
    REPZ_3_10 = 17,
    REPZ_11_138 = 18,
    extra_lbits = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ]),
    extra_dbits = new Uint8Array([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ]),
    extra_blbits = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
    ]),
    bl_order = new Uint8Array([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    DIST_CODE_LEN = 512,
    static_ltree = new Array(2 * (L_CODES$1 + 2));
  zero$1(static_ltree);
  var static_dtree = new Array(2 * D_CODES$1);
  zero$1(static_dtree);
  var _dist_code = new Array(DIST_CODE_LEN);
  zero$1(_dist_code);
  var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
  zero$1(_length_code);
  var base_length = new Array(LENGTH_CODES$1);
  zero$1(base_length);
  var base_dist = new Array(D_CODES$1),
    static_l_desc,
    static_d_desc,
    static_bl_desc;
  function StaticTreeDesc(t, e, r, i, s) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = r),
      (this.elems = i),
      (this.max_length = s),
      (this.has_stree = t && t.length);
  }
  function TreeDesc(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  zero$1(base_dist);
  var d_code = (t) => (t < 256 ? _dist_code[t] : _dist_code[256 + (t >>> 7)]),
    put_short = (t, e) => {
      (t.pending_buf[t.pending++] = 255 & e),
        (t.pending_buf[t.pending++] = (e >>> 8) & 255);
    },
    send_bits = (t, e, r) => {
      t.bi_valid > Buf_size - r
        ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
          put_short(t, t.bi_buf),
          (t.bi_buf = e >> (Buf_size - t.bi_valid)),
          (t.bi_valid += r - Buf_size))
        : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
    },
    send_code = (t, e, r) => {
      send_bits(t, r[2 * e], r[2 * e + 1]);
    },
    bi_reverse = (t, e) => {
      var r = 0;
      do {
        (r |= 1 & t), (t >>>= 1), (r <<= 1);
      } while (--e > 0);
      return r >>> 1;
    },
    bi_flush = (t) => {
      16 === t.bi_valid
        ? (put_short(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
        : t.bi_valid >= 8 &&
          ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
          (t.bi_buf >>= 8),
          (t.bi_valid -= 8));
    },
    gen_bitlen = (t, e) => {
      var r,
        i,
        s,
        a,
        n,
        o,
        h = e.dyn_tree,
        l = e.max_code,
        p = e.stat_desc.static_tree,
        f = e.stat_desc.has_stree,
        d = e.stat_desc.extra_bits,
        c = e.stat_desc.extra_base,
        m = e.stat_desc.max_length,
        u = 0;
      for (a = 0; a <= MAX_BITS$1; a++) t.bl_count[a] = 0;
      for (
        h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1;
        r < HEAP_SIZE$1;
        r++
      )
        (a = h[2 * h[2 * (i = t.heap[r]) + 1] + 1] + 1) > m && ((a = m), u++),
          (h[2 * i + 1] = a),
          i > l ||
            (t.bl_count[a]++,
            (n = 0),
            i >= c && (n = d[i - c]),
            (o = h[2 * i]),
            (t.opt_len += o * (a + n)),
            f && (t.static_len += o * (p[2 * i + 1] + n)));
      if (0 !== u) {
        do {
          for (a = m - 1; 0 === t.bl_count[a]; ) a--;
          t.bl_count[a]--, (t.bl_count[a + 1] += 2), t.bl_count[m]--, (u -= 2);
        } while (u > 0);
        for (a = m; 0 !== a; a--)
          for (i = t.bl_count[a]; 0 !== i; )
            (s = t.heap[--r]) > l ||
              (h[2 * s + 1] !== a &&
                ((t.opt_len += (a - h[2 * s + 1]) * h[2 * s]),
                (h[2 * s + 1] = a)),
              i--);
      }
    },
    gen_codes = (t, e, r) => {
      var i,
        s,
        a = new Array(MAX_BITS$1 + 1),
        n = 0;
      for (i = 1; i <= MAX_BITS$1; i++) (n = (n + r[i - 1]) << 1), (a[i] = n);
      for (s = 0; s <= e; s++) {
        var o = t[2 * s + 1];
        0 !== o && (t[2 * s] = bi_reverse(a[o]++, o));
      }
    },
    tr_static_init = () => {
      var t,
        e,
        r,
        i,
        s,
        a = new Array(MAX_BITS$1 + 1);
      for (r = 0, i = 0; i < LENGTH_CODES$1 - 1; i++)
        for (base_length[i] = r, t = 0; t < 1 << extra_lbits[i]; t++)
          _length_code[r++] = i;
      for (_length_code[r - 1] = i, s = 0, i = 0; i < 16; i++)
        for (base_dist[i] = s, t = 0; t < 1 << extra_dbits[i]; t++)
          _dist_code[s++] = i;
      for (s >>= 7; i < D_CODES$1; i++)
        for (base_dist[i] = s << 7, t = 0; t < 1 << (extra_dbits[i] - 7); t++)
          _dist_code[256 + s++] = i;
      for (e = 0; e <= MAX_BITS$1; e++) a[e] = 0;
      for (t = 0; t <= 143; ) (static_ltree[2 * t + 1] = 8), t++, a[8]++;
      for (; t <= 255; ) (static_ltree[2 * t + 1] = 9), t++, a[9]++;
      for (; t <= 279; ) (static_ltree[2 * t + 1] = 7), t++, a[7]++;
      for (; t <= 287; ) (static_ltree[2 * t + 1] = 8), t++, a[8]++;
      for (gen_codes(static_ltree, L_CODES$1 + 1, a), t = 0; t < D_CODES$1; t++)
        (static_dtree[2 * t + 1] = 5), (static_dtree[2 * t] = bi_reverse(t, 5));
      (static_l_desc = new StaticTreeDesc(
        static_ltree,
        extra_lbits,
        LITERALS$1 + 1,
        L_CODES$1,
        MAX_BITS$1,
      )),
        (static_d_desc = new StaticTreeDesc(
          static_dtree,
          extra_dbits,
          0,
          D_CODES$1,
          MAX_BITS$1,
        )),
        (static_bl_desc = new StaticTreeDesc(
          new Array(0),
          extra_blbits,
          0,
          BL_CODES$1,
          MAX_BL_BITS,
        ));
    },
    init_block = (t) => {
      var e;
      for (e = 0; e < L_CODES$1; e++) t.dyn_ltree[2 * e] = 0;
      for (e = 0; e < D_CODES$1; e++) t.dyn_dtree[2 * e] = 0;
      for (e = 0; e < BL_CODES$1; e++) t.bl_tree[2 * e] = 0;
      (t.dyn_ltree[2 * END_BLOCK] = 1),
        (t.opt_len = t.static_len = 0),
        (t.sym_next = t.matches = 0);
    },
    bi_windup = (t) => {
      t.bi_valid > 8
        ? put_short(t, t.bi_buf)
        : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
        (t.bi_buf = 0),
        (t.bi_valid = 0);
    },
    smaller = (t, e, r, i) => {
      var s = 2 * e,
        a = 2 * r;
      return t[s] < t[a] || (t[s] === t[a] && i[e] <= i[r]);
    },
    pqdownheap = (t, e, r) => {
      for (
        var i = t.heap[r], s = r << 1;
        s <= t.heap_len &&
        (s < t.heap_len && smaller(e, t.heap[s + 1], t.heap[s], t.depth) && s++,
        !smaller(e, i, t.heap[s], t.depth));

      )
        (t.heap[r] = t.heap[s]), (r = s), (s <<= 1);
      t.heap[r] = i;
    },
    compress_block = (t, e, r) => {
      var i,
        s,
        a,
        n,
        o = 0;
      if (0 !== t.sym_next)
        do {
          (i = 255 & t.pending_buf[t.sym_buf + o++]),
            (i += (255 & t.pending_buf[t.sym_buf + o++]) << 8),
            (s = t.pending_buf[t.sym_buf + o++]),
            0 === i
              ? send_code(t, s, e)
              : ((a = _length_code[s]),
                send_code(t, a + LITERALS$1 + 1, e),
                0 !== (n = extra_lbits[a]) &&
                  ((s -= base_length[a]), send_bits(t, s, n)),
                i--,
                (a = d_code(i)),
                send_code(t, a, r),
                0 !== (n = extra_dbits[a]) &&
                  ((i -= base_dist[a]), send_bits(t, i, n)));
        } while (o < t.sym_next);
      send_code(t, END_BLOCK, e);
    },
    build_tree = (t, e) => {
      var r,
        i,
        s,
        a = e.dyn_tree,
        n = e.stat_desc.static_tree,
        o = e.stat_desc.has_stree,
        h = e.stat_desc.elems,
        l = -1;
      for (t.heap_len = 0, t.heap_max = HEAP_SIZE$1, r = 0; r < h; r++)
        0 !== a[2 * r]
          ? ((t.heap[++t.heap_len] = l = r), (t.depth[r] = 0))
          : (a[2 * r + 1] = 0);
      for (; t.heap_len < 2; )
        (a[2 * (s = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1),
          (t.depth[s] = 0),
          t.opt_len--,
          o && (t.static_len -= n[2 * s + 1]);
      for (e.max_code = l, r = t.heap_len >> 1; r >= 1; r--)
        pqdownheap(t, a, r);
      s = h;
      do {
        (r = t.heap[1]),
          (t.heap[1] = t.heap[t.heap_len--]),
          pqdownheap(t, a, 1),
          (i = t.heap[1]),
          (t.heap[--t.heap_max] = r),
          (t.heap[--t.heap_max] = i),
          (a[2 * s] = a[2 * r] + a[2 * i]),
          (t.depth[s] =
            (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1),
          (a[2 * r + 1] = a[2 * i + 1] = s),
          (t.heap[1] = s++),
          pqdownheap(t, a, 1);
      } while (t.heap_len >= 2);
      (t.heap[--t.heap_max] = t.heap[1]),
        gen_bitlen(t, e),
        gen_codes(a, l, t.bl_count);
    },
    scan_tree = (t, e, r) => {
      var i,
        s,
        a = -1,
        n = e[1],
        o = 0,
        h = 7,
        l = 4;
      for (
        0 === n && ((h = 138), (l = 3)), e[2 * (r + 1) + 1] = 65535, i = 0;
        i <= r;
        i++
      )
        (s = n),
          (n = e[2 * (i + 1) + 1]),
          (++o < h && s === n) ||
            (o < l
              ? (t.bl_tree[2 * s] += o)
              : 0 !== s
              ? (s !== a && t.bl_tree[2 * s]++, t.bl_tree[2 * REP_3_6]++)
              : o <= 10
              ? t.bl_tree[2 * REPZ_3_10]++
              : t.bl_tree[2 * REPZ_11_138]++,
            (o = 0),
            (a = s),
            0 === n
              ? ((h = 138), (l = 3))
              : s === n
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4)));
    },
    send_tree = (t, e, r) => {
      var i,
        s,
        a = -1,
        n = e[1],
        o = 0,
        h = 7,
        l = 4;
      for (0 === n && ((h = 138), (l = 3)), i = 0; i <= r; i++)
        if (((s = n), (n = e[2 * (i + 1) + 1]), !(++o < h && s === n))) {
          if (o < l)
            do {
              send_code(t, s, t.bl_tree);
            } while (0 != --o);
          else
            0 !== s
              ? (s !== a && (send_code(t, s, t.bl_tree), o--),
                send_code(t, REP_3_6, t.bl_tree),
                send_bits(t, o - 3, 2))
              : o <= 10
              ? (send_code(t, REPZ_3_10, t.bl_tree), send_bits(t, o - 3, 3))
              : (send_code(t, REPZ_11_138, t.bl_tree), send_bits(t, o - 11, 7));
          (o = 0),
            (a = s),
            0 === n
              ? ((h = 138), (l = 3))
              : s === n
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4));
        }
    },
    build_bl_tree = (t) => {
      var e;
      for (
        scan_tree(t, t.dyn_ltree, t.l_desc.max_code),
          scan_tree(t, t.dyn_dtree, t.d_desc.max_code),
          build_tree(t, t.bl_desc),
          e = BL_CODES$1 - 1;
        e >= 3 && 0 === t.bl_tree[2 * bl_order[e] + 1];
        e--
      );
      return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
    },
    send_all_trees = (t, e, r, i) => {
      var s;
      for (
        send_bits(t, e - 257, 5),
          send_bits(t, r - 1, 5),
          send_bits(t, i - 4, 4),
          s = 0;
        s < i;
        s++
      )
        send_bits(t, t.bl_tree[2 * bl_order[s] + 1], 3);
      send_tree(t, t.dyn_ltree, e - 1), send_tree(t, t.dyn_dtree, r - 1);
    },
    detect_data_type = (t) => {
      var e,
        r = 4093624447;
      for (e = 0; e <= 31; e++, r >>>= 1)
        if (1 & r && 0 !== t.dyn_ltree[2 * e]) return Z_BINARY;
      if (
        0 !== t.dyn_ltree[18] ||
        0 !== t.dyn_ltree[20] ||
        0 !== t.dyn_ltree[26]
      )
        return Z_TEXT;
      for (e = 32; e < LITERALS$1; e++)
        if (0 !== t.dyn_ltree[2 * e]) return Z_TEXT;
      return Z_BINARY;
    },
    static_init_done = !1,
    _tr_init$1 = (t) => {
      static_init_done || (tr_static_init(), (static_init_done = !0)),
        (t.l_desc = new TreeDesc(t.dyn_ltree, static_l_desc)),
        (t.d_desc = new TreeDesc(t.dyn_dtree, static_d_desc)),
        (t.bl_desc = new TreeDesc(t.bl_tree, static_bl_desc)),
        (t.bi_buf = 0),
        (t.bi_valid = 0),
        init_block(t);
    },
    _tr_stored_block$1 = (t, e, r, i) => {
      send_bits(t, (STORED_BLOCK << 1) + (i ? 1 : 0), 3),
        bi_windup(t),
        put_short(t, r),
        put_short(t, ~r),
        r && t.pending_buf.set(t.window.subarray(e, e + r), t.pending),
        (t.pending += r);
    },
    _tr_align$1 = (t) => {
      send_bits(t, STATIC_TREES << 1, 3),
        send_code(t, END_BLOCK, static_ltree),
        bi_flush(t);
    },
    _tr_flush_block$1 = (t, e, r, i) => {
      var s,
        a,
        n = 0;
      t.level > 0
        ? (t.strm.data_type === Z_UNKNOWN$1 &&
            (t.strm.data_type = detect_data_type(t)),
          build_tree(t, t.l_desc),
          build_tree(t, t.d_desc),
          (n = build_bl_tree(t)),
          (s = (t.opt_len + 3 + 7) >>> 3),
          (a = (t.static_len + 3 + 7) >>> 3) <= s && (s = a))
        : (s = a = r + 5),
        r + 4 <= s && -1 !== e
          ? _tr_stored_block$1(t, e, r, i)
          : t.strategy === Z_FIXED$1 || a === s
          ? (send_bits(t, (STATIC_TREES << 1) + (i ? 1 : 0), 3),
            compress_block(t, static_ltree, static_dtree))
          : (send_bits(t, (DYN_TREES << 1) + (i ? 1 : 0), 3),
            send_all_trees(
              t,
              t.l_desc.max_code + 1,
              t.d_desc.max_code + 1,
              n + 1,
            ),
            compress_block(t, t.dyn_ltree, t.dyn_dtree)),
        init_block(t),
        i && bi_windup(t);
    },
    _tr_tally$1 = (t, e, r) => (
      (t.pending_buf[t.sym_buf + t.sym_next++] = e),
      (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
      (t.pending_buf[t.sym_buf + t.sym_next++] = r),
      0 === e
        ? t.dyn_ltree[2 * r]++
        : (t.matches++,
          e--,
          t.dyn_ltree[2 * (_length_code[r] + LITERALS$1 + 1)]++,
          t.dyn_dtree[2 * d_code(e)]++),
      t.sym_next === t.sym_end
    ),
    _tr_init_1 = _tr_init$1,
    _tr_stored_block_1 = _tr_stored_block$1,
    _tr_flush_block_1 = _tr_flush_block$1,
    _tr_tally_1 = _tr_tally$1,
    _tr_align_1 = _tr_align$1,
    trees = {
      _tr_init: _tr_init_1,
      _tr_stored_block: _tr_stored_block_1,
      _tr_flush_block: _tr_flush_block_1,
      _tr_tally: _tr_tally_1,
      _tr_align: _tr_align_1,
    },
    adler32 = (t, e, r, i) => {
      for (
        var s = (65535 & t) | 0, a = ((t >>> 16) & 65535) | 0, n = 0;
        0 !== r;

      ) {
        r -= n = r > 2e3 ? 2e3 : r;
        do {
          a = (a + (s = (s + e[i++]) | 0)) | 0;
        } while (--n);
        (s %= 65521), (a %= 65521);
      }
      return s | (a << 16) | 0;
    },
    adler32_1 = adler32,
    makeTable = () => {
      for (var t, e = [], r = 0; r < 256; r++) {
        t = r;
        for (var i = 0; i < 8; i++)
          t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
        e[r] = t;
      }
      return e;
    },
    crcTable = new Uint32Array(makeTable()),
    crc32 = (t, e, r, i) => {
      var s = crcTable,
        a = i + r;
      t ^= -1;
      for (var n = i; n < a; n++) t = (t >>> 8) ^ s[255 & (t ^ e[n])];
      return -1 ^ t;
    },
    crc32_1 = crc32,
    messages = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    },
    constants$2 = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    },
    {
      _tr_init: _tr_init,
      _tr_stored_block: _tr_stored_block,
      _tr_flush_block: _tr_flush_block,
      _tr_tally: _tr_tally,
      _tr_align: _tr_align,
    } = trees,
    {
      Z_NO_FLUSH: Z_NO_FLUSH$2,
      Z_PARTIAL_FLUSH: Z_PARTIAL_FLUSH,
      Z_FULL_FLUSH: Z_FULL_FLUSH$1,
      Z_FINISH: Z_FINISH$3,
      Z_BLOCK: Z_BLOCK$1,
      Z_OK: Z_OK$3,
      Z_STREAM_END: Z_STREAM_END$3,
      Z_STREAM_ERROR: Z_STREAM_ERROR$2,
      Z_DATA_ERROR: Z_DATA_ERROR$2,
      Z_BUF_ERROR: Z_BUF_ERROR$1,
      Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
      Z_FILTERED: Z_FILTERED,
      Z_HUFFMAN_ONLY: Z_HUFFMAN_ONLY,
      Z_RLE: Z_RLE,
      Z_FIXED: Z_FIXED,
      Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
      Z_UNKNOWN: Z_UNKNOWN,
      Z_DEFLATED: Z_DEFLATED$2,
    } = constants$2,
    MAX_MEM_LEVEL = 9,
    MAX_WBITS$1 = 15,
    DEF_MEM_LEVEL = 8,
    LENGTH_CODES = 29,
    LITERALS = 256,
    L_CODES = LITERALS + 1 + LENGTH_CODES,
    D_CODES = 30,
    BL_CODES = 19,
    HEAP_SIZE = 2 * L_CODES + 1,
    MAX_BITS = 15,
    MIN_MATCH = 3,
    MAX_MATCH = 258,
    MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1,
    PRESET_DICT = 32,
    INIT_STATE = 42,
    GZIP_STATE = 57,
    EXTRA_STATE = 69,
    NAME_STATE = 73,
    COMMENT_STATE = 91,
    HCRC_STATE = 103,
    BUSY_STATE = 113,
    FINISH_STATE = 666,
    BS_NEED_MORE = 1,
    BS_BLOCK_DONE = 2,
    BS_FINISH_STARTED = 3,
    BS_FINISH_DONE = 4,
    OS_CODE = 3,
    err = (t, e) => ((t.msg = messages[e]), e),
    rank = (t) => 2 * t - (t > 4 ? 9 : 0),
    zero = (t) => {
      for (var e = t.length; --e >= 0; ) t[e] = 0;
    },
    slide_hash = (t) => {
      var e,
        r,
        i,
        s = t.w_size;
      i = e = t.hash_size;
      do {
        (r = t.head[--i]), (t.head[i] = r >= s ? r - s : 0);
      } while (--e);
      i = e = s;
      do {
        (r = t.prev[--i]), (t.prev[i] = r >= s ? r - s : 0);
      } while (--e);
    },
    HASH_ZLIB = (t, e, r) => ((e << t.hash_shift) ^ r) & t.hash_mask,
    HASH = HASH_ZLIB,
    flush_pending = (t) => {
      var e = t.state,
        r = e.pending;
      r > t.avail_out && (r = t.avail_out),
        0 !== r &&
          (t.output.set(
            e.pending_buf.subarray(e.pending_out, e.pending_out + r),
            t.next_out,
          ),
          (t.next_out += r),
          (e.pending_out += r),
          (t.total_out += r),
          (t.avail_out -= r),
          (e.pending -= r),
          0 === e.pending && (e.pending_out = 0));
    },
    flush_block_only = (t, e) => {
      _tr_flush_block(
        t,
        t.block_start >= 0 ? t.block_start : -1,
        t.strstart - t.block_start,
        e,
      ),
        (t.block_start = t.strstart),
        flush_pending(t.strm);
    },
    put_byte = (t, e) => {
      t.pending_buf[t.pending++] = e;
    },
    putShortMSB = (t, e) => {
      (t.pending_buf[t.pending++] = (e >>> 8) & 255),
        (t.pending_buf[t.pending++] = 255 & e);
    },
    read_buf = (t, e, r, i) => {
      var s = t.avail_in;
      return (
        s > i && (s = i),
        0 === s
          ? 0
          : ((t.avail_in -= s),
            e.set(t.input.subarray(t.next_in, t.next_in + s), r),
            1 === t.state.wrap
              ? (t.adler = adler32_1(t.adler, e, s, r))
              : 2 === t.state.wrap && (t.adler = crc32_1(t.adler, e, s, r)),
            (t.next_in += s),
            (t.total_in += s),
            s)
      );
    },
    longest_match = (t, e) => {
      var r,
        i,
        s = t.max_chain_length,
        a = t.strstart,
        n = t.prev_length,
        o = t.nice_match,
        h =
          t.strstart > t.w_size - MIN_LOOKAHEAD
            ? t.strstart - (t.w_size - MIN_LOOKAHEAD)
            : 0,
        l = t.window,
        p = t.w_mask,
        f = t.prev,
        d = t.strstart + MAX_MATCH,
        c = l[a + n - 1],
        m = l[a + n];
      t.prev_length >= t.good_match && (s >>= 2),
        o > t.lookahead && (o = t.lookahead);
      do {
        if (
          l[(r = e) + n] === m &&
          l[r + n - 1] === c &&
          l[r] === l[a] &&
          l[++r] === l[a + 1]
        ) {
          (a += 2), r++;
          do {} while (
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            l[++a] === l[++r] &&
            a < d
          );
          if (((i = MAX_MATCH - (d - a)), (a = d - MAX_MATCH), i > n)) {
            if (((t.match_start = e), (n = i), i >= o)) break;
            (c = l[a + n - 1]), (m = l[a + n]);
          }
        }
      } while ((e = f[e & p]) > h && 0 != --s);
      return n <= t.lookahead ? n : t.lookahead;
    },
    fill_window = (t) => {
      var e,
        r,
        i,
        s = t.w_size;
      do {
        if (
          ((r = t.window_size - t.lookahead - t.strstart),
          t.strstart >= s + (s - MIN_LOOKAHEAD) &&
            (t.window.set(t.window.subarray(s, s + s - r), 0),
            (t.match_start -= s),
            (t.strstart -= s),
            (t.block_start -= s),
            t.insert > t.strstart && (t.insert = t.strstart),
            slide_hash(t),
            (r += s)),
          0 === t.strm.avail_in)
        )
          break;
        if (
          ((e = read_buf(t.strm, t.window, t.strstart + t.lookahead, r)),
          (t.lookahead += e),
          t.lookahead + t.insert >= MIN_MATCH)
        )
          for (
            i = t.strstart - t.insert,
              t.ins_h = t.window[i],
              t.ins_h = HASH(t, t.ins_h, t.window[i + 1]);
            t.insert &&
            ((t.ins_h = HASH(t, t.ins_h, t.window[i + MIN_MATCH - 1])),
            (t.prev[i & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = i),
            i++,
            t.insert--,
            !(t.lookahead + t.insert < MIN_MATCH));

          );
      } while (t.lookahead < MIN_LOOKAHEAD && 0 !== t.strm.avail_in);
    },
    deflate_stored = (t, e) => {
      var r,
        i,
        s,
        a =
          t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5,
        n = 0,
        o = t.strm.avail_in;
      do {
        if (((r = 65535), (s = (t.bi_valid + 42) >> 3), t.strm.avail_out < s))
          break;
        if (
          ((s = t.strm.avail_out - s),
          r > (i = t.strstart - t.block_start) + t.strm.avail_in &&
            (r = i + t.strm.avail_in),
          r > s && (r = s),
          r < a &&
            ((0 === r && e !== Z_FINISH$3) ||
              e === Z_NO_FLUSH$2 ||
              r !== i + t.strm.avail_in))
        )
          break;
        (n = e === Z_FINISH$3 && r === i + t.strm.avail_in ? 1 : 0),
          _tr_stored_block(t, 0, 0, n),
          (t.pending_buf[t.pending - 4] = r),
          (t.pending_buf[t.pending - 3] = r >> 8),
          (t.pending_buf[t.pending - 2] = ~r),
          (t.pending_buf[t.pending - 1] = ~r >> 8),
          flush_pending(t.strm),
          i &&
            (i > r && (i = r),
            t.strm.output.set(
              t.window.subarray(t.block_start, t.block_start + i),
              t.strm.next_out,
            ),
            (t.strm.next_out += i),
            (t.strm.avail_out -= i),
            (t.strm.total_out += i),
            (t.block_start += i),
            (r -= i)),
          r &&
            (read_buf(t.strm, t.strm.output, t.strm.next_out, r),
            (t.strm.next_out += r),
            (t.strm.avail_out -= r),
            (t.strm.total_out += r));
      } while (0 === n);
      return (
        (o -= t.strm.avail_in) &&
          (o >= t.w_size
            ? ((t.matches = 2),
              t.window.set(
                t.strm.input.subarray(
                  t.strm.next_in - t.w_size,
                  t.strm.next_in,
                ),
                0,
              ),
              (t.strstart = t.w_size),
              (t.insert = t.strstart))
            : (t.window_size - t.strstart <= o &&
                ((t.strstart -= t.w_size),
                t.window.set(
                  t.window.subarray(t.w_size, t.w_size + t.strstart),
                  0,
                ),
                t.matches < 2 && t.matches++,
                t.insert > t.strstart && (t.insert = t.strstart)),
              t.window.set(
                t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in),
                t.strstart,
              ),
              (t.strstart += o),
              (t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o)),
          (t.block_start = t.strstart)),
        t.high_water < t.strstart && (t.high_water = t.strstart),
        n
          ? BS_FINISH_DONE
          : e !== Z_NO_FLUSH$2 &&
            e !== Z_FINISH$3 &&
            0 === t.strm.avail_in &&
            t.strstart === t.block_start
          ? BS_BLOCK_DONE
          : ((s = t.window_size - t.strstart),
            t.strm.avail_in > s &&
              t.block_start >= t.w_size &&
              ((t.block_start -= t.w_size),
              (t.strstart -= t.w_size),
              t.window.set(
                t.window.subarray(t.w_size, t.w_size + t.strstart),
                0,
              ),
              t.matches < 2 && t.matches++,
              (s += t.w_size),
              t.insert > t.strstart && (t.insert = t.strstart)),
            s > t.strm.avail_in && (s = t.strm.avail_in),
            s &&
              (read_buf(t.strm, t.window, t.strstart, s),
              (t.strstart += s),
              (t.insert += s > t.w_size - t.insert ? t.w_size - t.insert : s)),
            t.high_water < t.strstart && (t.high_water = t.strstart),
            (s = (t.bi_valid + 42) >> 3),
            (a =
              (s =
                t.pending_buf_size - s > 65535
                  ? 65535
                  : t.pending_buf_size - s) > t.w_size
                ? t.w_size
                : s),
            ((i = t.strstart - t.block_start) >= a ||
              ((i || e === Z_FINISH$3) &&
                e !== Z_NO_FLUSH$2 &&
                0 === t.strm.avail_in &&
                i <= s)) &&
              ((r = i > s ? s : i),
              (n =
                e === Z_FINISH$3 && 0 === t.strm.avail_in && r === i ? 1 : 0),
              _tr_stored_block(t, t.block_start, r, n),
              (t.block_start += r),
              flush_pending(t.strm)),
            n ? BS_FINISH_STARTED : BS_NEED_MORE)
      );
    },
    deflate_fast = (t, e) => {
      for (var r, i; ; ) {
        if (t.lookahead < MIN_LOOKAHEAD) {
          if (
            (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
          )
            return BS_NEED_MORE;
          if (0 === t.lookahead) break;
        }
        if (
          ((r = 0),
          t.lookahead >= MIN_MATCH &&
            ((t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1])),
            (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart)),
          0 !== r &&
            t.strstart - r <= t.w_size - MIN_LOOKAHEAD &&
            (t.match_length = longest_match(t, r)),
          t.match_length >= MIN_MATCH)
        )
          if (
            ((i = _tr_tally(
              t,
              t.strstart - t.match_start,
              t.match_length - MIN_MATCH,
            )),
            (t.lookahead -= t.match_length),
            t.match_length <= t.max_lazy_match && t.lookahead >= MIN_MATCH)
          ) {
            t.match_length--;
            do {
              t.strstart++,
                (t.ins_h = HASH(
                  t,
                  t.ins_h,
                  t.window[t.strstart + MIN_MATCH - 1],
                )),
                (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart);
            } while (0 != --t.match_length);
            t.strstart++;
          } else
            (t.strstart += t.match_length),
              (t.match_length = 0),
              (t.ins_h = t.window[t.strstart]),
              (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + 1]));
        else
          (i = _tr_tally(t, 0, t.window[t.strstart])),
            t.lookahead--,
            t.strstart++;
        if (i && (flush_block_only(t, !1), 0 === t.strm.avail_out))
          return BS_NEED_MORE;
      }
      return (
        (t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1),
        e === Z_FINISH$3
          ? (flush_block_only(t, !0),
            0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE)
          : t.sym_next && (flush_block_only(t, !1), 0 === t.strm.avail_out)
          ? BS_NEED_MORE
          : BS_BLOCK_DONE
      );
    },
    deflate_slow = (t, e) => {
      for (var r, i, s; ; ) {
        if (t.lookahead < MIN_LOOKAHEAD) {
          if (
            (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
          )
            return BS_NEED_MORE;
          if (0 === t.lookahead) break;
        }
        if (
          ((r = 0),
          t.lookahead >= MIN_MATCH &&
            ((t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1])),
            (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart)),
          (t.prev_length = t.match_length),
          (t.prev_match = t.match_start),
          (t.match_length = MIN_MATCH - 1),
          0 !== r &&
            t.prev_length < t.max_lazy_match &&
            t.strstart - r <= t.w_size - MIN_LOOKAHEAD &&
            ((t.match_length = longest_match(t, r)),
            t.match_length <= 5 &&
              (t.strategy === Z_FILTERED ||
                (t.match_length === MIN_MATCH &&
                  t.strstart - t.match_start > 4096)) &&
              (t.match_length = MIN_MATCH - 1)),
          t.prev_length >= MIN_MATCH && t.match_length <= t.prev_length)
        ) {
          (s = t.strstart + t.lookahead - MIN_MATCH),
            (i = _tr_tally(
              t,
              t.strstart - 1 - t.prev_match,
              t.prev_length - MIN_MATCH,
            )),
            (t.lookahead -= t.prev_length - 1),
            (t.prev_length -= 2);
          do {
            ++t.strstart <= s &&
              ((t.ins_h = HASH(
                t,
                t.ins_h,
                t.window[t.strstart + MIN_MATCH - 1],
              )),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart));
          } while (0 != --t.prev_length);
          if (
            ((t.match_available = 0),
            (t.match_length = MIN_MATCH - 1),
            t.strstart++,
            i && (flush_block_only(t, !1), 0 === t.strm.avail_out))
          )
            return BS_NEED_MORE;
        } else if (t.match_available) {
          if (
            ((i = _tr_tally(t, 0, t.window[t.strstart - 1])) &&
              flush_block_only(t, !1),
            t.strstart++,
            t.lookahead--,
            0 === t.strm.avail_out)
          )
            return BS_NEED_MORE;
        } else (t.match_available = 1), t.strstart++, t.lookahead--;
      }
      return (
        t.match_available &&
          ((i = _tr_tally(t, 0, t.window[t.strstart - 1])),
          (t.match_available = 0)),
        (t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1),
        e === Z_FINISH$3
          ? (flush_block_only(t, !0),
            0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE)
          : t.sym_next && (flush_block_only(t, !1), 0 === t.strm.avail_out)
          ? BS_NEED_MORE
          : BS_BLOCK_DONE
      );
    },
    deflate_rle = (t, e) => {
      for (var r, i, s, a, n = t.window; ; ) {
        if (t.lookahead <= MAX_MATCH) {
          if ((fill_window(t), t.lookahead <= MAX_MATCH && e === Z_NO_FLUSH$2))
            return BS_NEED_MORE;
          if (0 === t.lookahead) break;
        }
        if (
          ((t.match_length = 0),
          t.lookahead >= MIN_MATCH &&
            t.strstart > 0 &&
            (i = n[(s = t.strstart - 1)]) === n[++s] &&
            i === n[++s] &&
            i === n[++s])
        ) {
          a = t.strstart + MAX_MATCH;
          do {} while (
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            i === n[++s] &&
            s < a
          );
          (t.match_length = MAX_MATCH - (a - s)),
            t.match_length > t.lookahead && (t.match_length = t.lookahead);
        }
        if (
          (t.match_length >= MIN_MATCH
            ? ((r = _tr_tally(t, 1, t.match_length - MIN_MATCH)),
              (t.lookahead -= t.match_length),
              (t.strstart += t.match_length),
              (t.match_length = 0))
            : ((r = _tr_tally(t, 0, t.window[t.strstart])),
              t.lookahead--,
              t.strstart++),
          r && (flush_block_only(t, !1), 0 === t.strm.avail_out))
        )
          return BS_NEED_MORE;
      }
      return (
        (t.insert = 0),
        e === Z_FINISH$3
          ? (flush_block_only(t, !0),
            0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE)
          : t.sym_next && (flush_block_only(t, !1), 0 === t.strm.avail_out)
          ? BS_NEED_MORE
          : BS_BLOCK_DONE
      );
    },
    deflate_huff = (t, e) => {
      for (var r; ; ) {
        if (0 === t.lookahead && (fill_window(t), 0 === t.lookahead)) {
          if (e === Z_NO_FLUSH$2) return BS_NEED_MORE;
          break;
        }
        if (
          ((t.match_length = 0),
          (r = _tr_tally(t, 0, t.window[t.strstart])),
          t.lookahead--,
          t.strstart++,
          r && (flush_block_only(t, !1), 0 === t.strm.avail_out))
        )
          return BS_NEED_MORE;
      }
      return (
        (t.insert = 0),
        e === Z_FINISH$3
          ? (flush_block_only(t, !0),
            0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE)
          : t.sym_next && (flush_block_only(t, !1), 0 === t.strm.avail_out)
          ? BS_NEED_MORE
          : BS_BLOCK_DONE
      );
    };
  function Config(t, e, r, i, s) {
    (this.good_length = t),
      (this.max_lazy = e),
      (this.nice_length = r),
      (this.max_chain = i),
      (this.func = s);
  }
  var configuration_table = [
      new Config(0, 0, 0, 0, deflate_stored),
      new Config(4, 4, 8, 4, deflate_fast),
      new Config(4, 5, 16, 8, deflate_fast),
      new Config(4, 6, 32, 32, deflate_fast),
      new Config(4, 4, 16, 16, deflate_slow),
      new Config(8, 16, 32, 32, deflate_slow),
      new Config(8, 16, 128, 128, deflate_slow),
      new Config(8, 32, 128, 256, deflate_slow),
      new Config(32, 128, 258, 1024, deflate_slow),
      new Config(32, 258, 258, 4096, deflate_slow),
    ],
    lm_init = (t) => {
      (t.window_size = 2 * t.w_size),
        zero(t.head),
        (t.max_lazy_match = configuration_table[t.level].max_lazy),
        (t.good_match = configuration_table[t.level].good_length),
        (t.nice_match = configuration_table[t.level].nice_length),
        (t.max_chain_length = configuration_table[t.level].max_chain),
        (t.strstart = 0),
        (t.block_start = 0),
        (t.lookahead = 0),
        (t.insert = 0),
        (t.match_length = t.prev_length = MIN_MATCH - 1),
        (t.match_available = 0),
        (t.ins_h = 0);
    };
  function DeflateState() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = Z_DEFLATED$2),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new Uint16Array(2 * HEAP_SIZE)),
      (this.dyn_dtree = new Uint16Array(2 * (2 * D_CODES + 1))),
      (this.bl_tree = new Uint16Array(2 * (2 * BL_CODES + 1))),
      zero(this.dyn_ltree),
      zero(this.dyn_dtree),
      zero(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new Uint16Array(MAX_BITS + 1)),
      (this.heap = new Uint16Array(2 * L_CODES + 1)),
      zero(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new Uint16Array(2 * L_CODES + 1)),
      zero(this.depth),
      (this.sym_buf = 0),
      (this.lit_bufsize = 0),
      (this.sym_next = 0),
      (this.sym_end = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  var deflateStateCheck = (t) => {
      if (!t) return 1;
      var e = t.state;
      return !e ||
        e.strm !== t ||
        (e.status !== INIT_STATE &&
          e.status !== GZIP_STATE &&
          e.status !== EXTRA_STATE &&
          e.status !== NAME_STATE &&
          e.status !== COMMENT_STATE &&
          e.status !== HCRC_STATE &&
          e.status !== BUSY_STATE &&
          e.status !== FINISH_STATE)
        ? 1
        : 0;
    },
    deflateResetKeep = (t) => {
      if (deflateStateCheck(t)) return err(t, Z_STREAM_ERROR$2);
      (t.total_in = t.total_out = 0), (t.data_type = Z_UNKNOWN);
      var e = t.state;
      return (
        (e.pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status =
          2 === e.wrap ? GZIP_STATE : e.wrap ? INIT_STATE : BUSY_STATE),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = -2),
        _tr_init(e),
        Z_OK$3
      );
    },
    deflateReset = (t) => {
      var e = deflateResetKeep(t);
      return e === Z_OK$3 && lm_init(t.state), e;
    },
    deflateSetHeader = (t, e) =>
      deflateStateCheck(t) || 2 !== t.state.wrap
        ? Z_STREAM_ERROR$2
        : ((t.state.gzhead = e), Z_OK$3),
    deflateInit2 = (t, e, r, i, s, a) => {
      if (!t) return Z_STREAM_ERROR$2;
      var n = 1;
      if (
        (e === Z_DEFAULT_COMPRESSION$1 && (e = 6),
        i < 0 ? ((n = 0), (i = -i)) : i > 15 && ((n = 2), (i -= 16)),
        s < 1 ||
          s > MAX_MEM_LEVEL ||
          r !== Z_DEFLATED$2 ||
          i < 8 ||
          i > 15 ||
          e < 0 ||
          e > 9 ||
          a < 0 ||
          a > Z_FIXED ||
          (8 === i && 1 !== n))
      )
        return err(t, Z_STREAM_ERROR$2);
      8 === i && (i = 9);
      var o = new DeflateState();
      return (
        (t.state = o),
        (o.strm = t),
        (o.status = INIT_STATE),
        (o.wrap = n),
        (o.gzhead = null),
        (o.w_bits = i),
        (o.w_size = 1 << o.w_bits),
        (o.w_mask = o.w_size - 1),
        (o.hash_bits = s + 7),
        (o.hash_size = 1 << o.hash_bits),
        (o.hash_mask = o.hash_size - 1),
        (o.hash_shift = ~~((o.hash_bits + MIN_MATCH - 1) / MIN_MATCH)),
        (o.window = new Uint8Array(2 * o.w_size)),
        (o.head = new Uint16Array(o.hash_size)),
        (o.prev = new Uint16Array(o.w_size)),
        (o.lit_bufsize = 1 << (s + 6)),
        (o.pending_buf_size = 4 * o.lit_bufsize),
        (o.pending_buf = new Uint8Array(o.pending_buf_size)),
        (o.sym_buf = o.lit_bufsize),
        (o.sym_end = 3 * (o.lit_bufsize - 1)),
        (o.level = e),
        (o.strategy = a),
        (o.method = r),
        deflateReset(t)
      );
    },
    deflateInit = (t, e) =>
      deflateInit2(
        t,
        e,
        Z_DEFLATED$2,
        MAX_WBITS$1,
        DEF_MEM_LEVEL,
        Z_DEFAULT_STRATEGY$1,
      ),
    deflate$2 = (t, e) => {
      if (deflateStateCheck(t) || e > Z_BLOCK$1 || e < 0)
        return t ? err(t, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
      var r = t.state;
      if (
        !t.output ||
        (0 !== t.avail_in && !t.input) ||
        (r.status === FINISH_STATE && e !== Z_FINISH$3)
      )
        return err(t, 0 === t.avail_out ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
      var i = r.last_flush;
      if (((r.last_flush = e), 0 !== r.pending)) {
        if ((flush_pending(t), 0 === t.avail_out))
          return (r.last_flush = -1), Z_OK$3;
      } else if (0 === t.avail_in && rank(e) <= rank(i) && e !== Z_FINISH$3)
        return err(t, Z_BUF_ERROR$1);
      if (r.status === FINISH_STATE && 0 !== t.avail_in)
        return err(t, Z_BUF_ERROR$1);
      if (
        (r.status === INIT_STATE && 0 === r.wrap && (r.status = BUSY_STATE),
        r.status === INIT_STATE)
      ) {
        var s = (Z_DEFLATED$2 + ((r.w_bits - 8) << 4)) << 8;
        if (
          ((s |=
            (r.strategy >= Z_HUFFMAN_ONLY || r.level < 2
              ? 0
              : r.level < 6
              ? 1
              : 6 === r.level
              ? 2
              : 3) << 6),
          0 !== r.strstart && (s |= PRESET_DICT),
          putShortMSB(r, (s += 31 - (s % 31))),
          0 !== r.strstart &&
            (putShortMSB(r, t.adler >>> 16), putShortMSB(r, 65535 & t.adler)),
          (t.adler = 1),
          (r.status = BUSY_STATE),
          flush_pending(t),
          0 !== r.pending)
        )
          return (r.last_flush = -1), Z_OK$3;
      }
      if (r.status === GZIP_STATE)
        if (
          ((t.adler = 0),
          put_byte(r, 31),
          put_byte(r, 139),
          put_byte(r, 8),
          r.gzhead)
        )
          put_byte(
            r,
            (r.gzhead.text ? 1 : 0) +
              (r.gzhead.hcrc ? 2 : 0) +
              (r.gzhead.extra ? 4 : 0) +
              (r.gzhead.name ? 8 : 0) +
              (r.gzhead.comment ? 16 : 0),
          ),
            put_byte(r, 255 & r.gzhead.time),
            put_byte(r, (r.gzhead.time >> 8) & 255),
            put_byte(r, (r.gzhead.time >> 16) & 255),
            put_byte(r, (r.gzhead.time >> 24) & 255),
            put_byte(
              r,
              9 === r.level
                ? 2
                : r.strategy >= Z_HUFFMAN_ONLY || r.level < 2
                ? 4
                : 0,
            ),
            put_byte(r, 255 & r.gzhead.os),
            r.gzhead.extra &&
              r.gzhead.extra.length &&
              (put_byte(r, 255 & r.gzhead.extra.length),
              put_byte(r, (r.gzhead.extra.length >> 8) & 255)),
            r.gzhead.hcrc &&
              (t.adler = crc32_1(t.adler, r.pending_buf, r.pending, 0)),
            (r.gzindex = 0),
            (r.status = EXTRA_STATE);
        else if (
          (put_byte(r, 0),
          put_byte(r, 0),
          put_byte(r, 0),
          put_byte(r, 0),
          put_byte(r, 0),
          put_byte(
            r,
            9 === r.level
              ? 2
              : r.strategy >= Z_HUFFMAN_ONLY || r.level < 2
              ? 4
              : 0,
          ),
          put_byte(r, OS_CODE),
          (r.status = BUSY_STATE),
          flush_pending(t),
          0 !== r.pending)
        )
          return (r.last_flush = -1), Z_OK$3;
      if (r.status === EXTRA_STATE) {
        if (r.gzhead.extra) {
          for (
            var a = r.pending, n = (65535 & r.gzhead.extra.length) - r.gzindex;
            r.pending + n > r.pending_buf_size;

          ) {
            var o = r.pending_buf_size - r.pending;
            if (
              (r.pending_buf.set(
                r.gzhead.extra.subarray(r.gzindex, r.gzindex + o),
                r.pending,
              ),
              (r.pending = r.pending_buf_size),
              r.gzhead.hcrc &&
                r.pending > a &&
                (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - a, a)),
              (r.gzindex += o),
              flush_pending(t),
              0 !== r.pending)
            )
              return (r.last_flush = -1), Z_OK$3;
            (a = 0), (n -= o);
          }
          var h = new Uint8Array(r.gzhead.extra);
          r.pending_buf.set(h.subarray(r.gzindex, r.gzindex + n), r.pending),
            (r.pending += n),
            r.gzhead.hcrc &&
              r.pending > a &&
              (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - a, a)),
            (r.gzindex = 0);
        }
        r.status = NAME_STATE;
      }
      if (r.status === NAME_STATE) {
        if (r.gzhead.name) {
          var l,
            p = r.pending;
          do {
            if (r.pending === r.pending_buf_size) {
              if (
                (r.gzhead.hcrc &&
                  r.pending > p &&
                  (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - p, p)),
                flush_pending(t),
                0 !== r.pending)
              )
                return (r.last_flush = -1), Z_OK$3;
              p = 0;
            }
            (l =
              r.gzindex < r.gzhead.name.length
                ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                : 0),
              put_byte(r, l);
          } while (0 !== l);
          r.gzhead.hcrc &&
            r.pending > p &&
            (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - p, p)),
            (r.gzindex = 0);
        }
        r.status = COMMENT_STATE;
      }
      if (r.status === COMMENT_STATE) {
        if (r.gzhead.comment) {
          var f,
            d = r.pending;
          do {
            if (r.pending === r.pending_buf_size) {
              if (
                (r.gzhead.hcrc &&
                  r.pending > d &&
                  (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - d, d)),
                flush_pending(t),
                0 !== r.pending)
              )
                return (r.last_flush = -1), Z_OK$3;
              d = 0;
            }
            (f =
              r.gzindex < r.gzhead.comment.length
                ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                : 0),
              put_byte(r, f);
          } while (0 !== f);
          r.gzhead.hcrc &&
            r.pending > d &&
            (t.adler = crc32_1(t.adler, r.pending_buf, r.pending - d, d));
        }
        r.status = HCRC_STATE;
      }
      if (r.status === HCRC_STATE) {
        if (r.gzhead.hcrc) {
          if (
            r.pending + 2 > r.pending_buf_size &&
            (flush_pending(t), 0 !== r.pending)
          )
            return (r.last_flush = -1), Z_OK$3;
          put_byte(r, 255 & t.adler),
            put_byte(r, (t.adler >> 8) & 255),
            (t.adler = 0);
        }
        if (((r.status = BUSY_STATE), flush_pending(t), 0 !== r.pending))
          return (r.last_flush = -1), Z_OK$3;
      }
      if (
        0 !== t.avail_in ||
        0 !== r.lookahead ||
        (e !== Z_NO_FLUSH$2 && r.status !== FINISH_STATE)
      ) {
        var c =
          0 === r.level
            ? deflate_stored(r, e)
            : r.strategy === Z_HUFFMAN_ONLY
            ? deflate_huff(r, e)
            : r.strategy === Z_RLE
            ? deflate_rle(r, e)
            : configuration_table[r.level].func(r, e);
        if (
          ((c !== BS_FINISH_STARTED && c !== BS_FINISH_DONE) ||
            (r.status = FINISH_STATE),
          c === BS_NEED_MORE || c === BS_FINISH_STARTED)
        )
          return 0 === t.avail_out && (r.last_flush = -1), Z_OK$3;
        if (
          c === BS_BLOCK_DONE &&
          (e === Z_PARTIAL_FLUSH
            ? _tr_align(r)
            : e !== Z_BLOCK$1 &&
              (_tr_stored_block(r, 0, 0, !1),
              e === Z_FULL_FLUSH$1 &&
                (zero(r.head),
                0 === r.lookahead &&
                  ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
          flush_pending(t),
          0 === t.avail_out)
        )
          return (r.last_flush = -1), Z_OK$3;
      }
      return e !== Z_FINISH$3
        ? Z_OK$3
        : r.wrap <= 0
        ? Z_STREAM_END$3
        : (2 === r.wrap
            ? (put_byte(r, 255 & t.adler),
              put_byte(r, (t.adler >> 8) & 255),
              put_byte(r, (t.adler >> 16) & 255),
              put_byte(r, (t.adler >> 24) & 255),
              put_byte(r, 255 & t.total_in),
              put_byte(r, (t.total_in >> 8) & 255),
              put_byte(r, (t.total_in >> 16) & 255),
              put_byte(r, (t.total_in >> 24) & 255))
            : (putShortMSB(r, t.adler >>> 16), putShortMSB(r, 65535 & t.adler)),
          flush_pending(t),
          r.wrap > 0 && (r.wrap = -r.wrap),
          0 !== r.pending ? Z_OK$3 : Z_STREAM_END$3);
    },
    deflateEnd = (t) => {
      if (deflateStateCheck(t)) return Z_STREAM_ERROR$2;
      var e = t.state.status;
      return (
        (t.state = null), e === BUSY_STATE ? err(t, Z_DATA_ERROR$2) : Z_OK$3
      );
    },
    deflateSetDictionary = (t, e) => {
      var r = e.length;
      if (deflateStateCheck(t)) return Z_STREAM_ERROR$2;
      var i = t.state,
        s = i.wrap;
      if (2 === s || (1 === s && i.status !== INIT_STATE) || i.lookahead)
        return Z_STREAM_ERROR$2;
      if (
        (1 === s && (t.adler = adler32_1(t.adler, e, r, 0)),
        (i.wrap = 0),
        r >= i.w_size)
      ) {
        0 === s &&
          (zero(i.head), (i.strstart = 0), (i.block_start = 0), (i.insert = 0));
        var a = new Uint8Array(i.w_size);
        a.set(e.subarray(r - i.w_size, r), 0), (e = a), (r = i.w_size);
      }
      var n = t.avail_in,
        o = t.next_in,
        h = t.input;
      for (
        t.avail_in = r, t.next_in = 0, t.input = e, fill_window(i);
        i.lookahead >= MIN_MATCH;

      ) {
        var l = i.strstart,
          p = i.lookahead - (MIN_MATCH - 1);
        do {
          (i.ins_h = HASH(i, i.ins_h, i.window[l + MIN_MATCH - 1])),
            (i.prev[l & i.w_mask] = i.head[i.ins_h]),
            (i.head[i.ins_h] = l),
            l++;
        } while (--p);
        (i.strstart = l), (i.lookahead = MIN_MATCH - 1), fill_window(i);
      }
      return (
        (i.strstart += i.lookahead),
        (i.block_start = i.strstart),
        (i.insert = i.lookahead),
        (i.lookahead = 0),
        (i.match_length = i.prev_length = MIN_MATCH - 1),
        (i.match_available = 0),
        (t.next_in = o),
        (t.input = h),
        (t.avail_in = n),
        (i.wrap = s),
        Z_OK$3
      );
    },
    deflateInit_1 = deflateInit,
    deflateInit2_1 = deflateInit2,
    deflateReset_1 = deflateReset,
    deflateResetKeep_1 = deflateResetKeep,
    deflateSetHeader_1 = deflateSetHeader,
    deflate_2$1 = deflate$2,
    deflateEnd_1 = deflateEnd,
    deflateSetDictionary_1 = deflateSetDictionary,
    deflateInfo = "pako deflate (from Nodeca project)",
    deflate_1$2 = {
      deflateInit: deflateInit_1,
      deflateInit2: deflateInit2_1,
      deflateReset: deflateReset_1,
      deflateResetKeep: deflateResetKeep_1,
      deflateSetHeader: deflateSetHeader_1,
      deflate: deflate_2$1,
      deflateEnd: deflateEnd_1,
      deflateSetDictionary: deflateSetDictionary_1,
      deflateInfo: deflateInfo,
    },
    _has = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
        var r = e.shift();
        if (r) {
          if ("object" != typeof r)
            throw new TypeError(r + "must be non-object");
          for (var i in r) _has(r, i) && (t[i] = r[i]);
        }
      }
      return t;
    },
    flattenChunks = (t) => {
      for (var e = 0, r = 0, i = t.length; r < i; r++) e += t[r].length;
      for (var s = new Uint8Array(e), a = 0, n = 0, o = t.length; a < o; a++) {
        var h = t[a];
        s.set(h, n), (n += h.length);
      }
      return s;
    },
    common = { assign: assign, flattenChunks: flattenChunks },
    STR_APPLY_UIA_OK = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    STR_APPLY_UIA_OK = !1;
  }
  for (var _utf8len = new Uint8Array(256), q = 0; q < 256; q++)
    _utf8len[q] =
      q >= 252
        ? 6
        : q >= 248
        ? 5
        : q >= 240
        ? 4
        : q >= 224
        ? 3
        : q >= 192
        ? 2
        : 1;
  _utf8len[254] = _utf8len[254] = 1;
  var string2buf = (t) => {
      if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
        return new TextEncoder().encode(t);
      var e,
        r,
        i,
        s,
        a,
        n = t.length,
        o = 0;
      for (s = 0; s < n; s++)
        55296 == (64512 & (r = t.charCodeAt(s))) &&
          s + 1 < n &&
          56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
          (o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
      for (e = new Uint8Array(o), a = 0, s = 0; a < o; s++)
        55296 == (64512 & (r = t.charCodeAt(s))) &&
          s + 1 < n &&
          56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
          r < 128
            ? (e[a++] = r)
            : r < 2048
            ? ((e[a++] = 192 | (r >>> 6)), (e[a++] = 128 | (63 & r)))
            : r < 65536
            ? ((e[a++] = 224 | (r >>> 12)),
              (e[a++] = 128 | ((r >>> 6) & 63)),
              (e[a++] = 128 | (63 & r)))
            : ((e[a++] = 240 | (r >>> 18)),
              (e[a++] = 128 | ((r >>> 12) & 63)),
              (e[a++] = 128 | ((r >>> 6) & 63)),
              (e[a++] = 128 | (63 & r)));
      return e;
    },
    buf2binstring = (t, e) => {
      if (e < 65534 && t.subarray && STR_APPLY_UIA_OK)
        return String.fromCharCode.apply(
          null,
          t.length === e ? t : t.subarray(0, e),
        );
      for (var r = "", i = 0; i < e; i++) r += String.fromCharCode(t[i]);
      return r;
    },
    buf2string = (t, e) => {
      var r,
        i,
        s = e || t.length;
      if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
        return new TextDecoder().decode(t.subarray(0, e));
      var a = new Array(2 * s);
      for (i = 0, r = 0; r < s; ) {
        var n = t[r++];
        if (n < 128) a[i++] = n;
        else {
          var o = _utf8len[n];
          if (o > 4) (a[i++] = 65533), (r += o - 1);
          else {
            for (n &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s; )
              (n = (n << 6) | (63 & t[r++])), o--;
            o > 1
              ? (a[i++] = 65533)
              : n < 65536
              ? (a[i++] = n)
              : ((n -= 65536),
                (a[i++] = 55296 | ((n >> 10) & 1023)),
                (a[i++] = 56320 | (1023 & n)));
          }
        }
      }
      return buf2binstring(a, i);
    },
    utf8border = (t, e) => {
      (e = e || t.length) > t.length && (e = t.length);
      for (var r = e - 1; r >= 0 && 128 == (192 & t[r]); ) r--;
      return r < 0 || 0 === r ? e : r + _utf8len[t[r]] > e ? r : e;
    },
    strings = {
      string2buf: string2buf,
      buf2string: buf2string,
      utf8border: utf8border,
    };
  function ZStream() {
    (this.input = null),
      (this.next_in = 0),
      (this.avail_in = 0),
      (this.total_in = 0),
      (this.output = null),
      (this.next_out = 0),
      (this.avail_out = 0),
      (this.total_out = 0),
      (this.msg = ""),
      (this.state = null),
      (this.data_type = 2),
      (this.adler = 0);
  }
  var zstream = ZStream,
    toString$1 = Object.prototype.toString,
    {
      Z_NO_FLUSH: Z_NO_FLUSH$1,
      Z_SYNC_FLUSH: Z_SYNC_FLUSH,
      Z_FULL_FLUSH: Z_FULL_FLUSH,
      Z_FINISH: Z_FINISH$2,
      Z_OK: Z_OK$2,
      Z_STREAM_END: Z_STREAM_END$2,
      Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION,
      Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY,
      Z_DEFLATED: Z_DEFLATED$1,
    } = constants$2;
  function Deflate$1(t) {
    this.options = common.assign(
      {
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED$1,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
      },
      t || {},
    );
    var e = this.options;
    e.raw && e.windowBits > 0
      ? (e.windowBits = -e.windowBits)
      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new zstream()),
      (this.strm.avail_out = 0);
    var r = deflate_1$2.deflateInit2(
      this.strm,
      e.level,
      e.method,
      e.windowBits,
      e.memLevel,
      e.strategy,
    );
    if (r !== Z_OK$2) throw new Error(messages[r]);
    if (
      (e.header && deflate_1$2.deflateSetHeader(this.strm, e.header),
      e.dictionary)
    ) {
      var i;
      if (
        ((i =
          "string" == typeof e.dictionary
            ? strings.string2buf(e.dictionary)
            : "[object ArrayBuffer]" === toString$1.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        (r = deflate_1$2.deflateSetDictionary(this.strm, i)) !== Z_OK$2)
      )
        throw new Error(messages[r]);
      this._dict_set = !0;
    }
  }
  (Deflate$1.prototype.push = function (t, e) {
    var r,
      i,
      s = this.strm,
      a = this.options.chunkSize;
    if (this.ended) return !1;
    for (
      i = e === ~~e ? e : !0 === e ? Z_FINISH$2 : Z_NO_FLUSH$1,
        "string" == typeof t
          ? (s.input = strings.string2buf(t))
          : "[object ArrayBuffer]" === toString$1.call(t)
          ? (s.input = new Uint8Array(t))
          : (s.input = t),
        s.next_in = 0,
        s.avail_in = s.input.length;
      ;

    )
      if (
        (0 === s.avail_out &&
          ((s.output = new Uint8Array(a)), (s.next_out = 0), (s.avail_out = a)),
        (i === Z_SYNC_FLUSH || i === Z_FULL_FLUSH) && s.avail_out <= 6)
      )
        this.onData(s.output.subarray(0, s.next_out)), (s.avail_out = 0);
      else {
        if ((r = deflate_1$2.deflate(s, i)) === Z_STREAM_END$2)
          return (
            s.next_out > 0 && this.onData(s.output.subarray(0, s.next_out)),
            (r = deflate_1$2.deflateEnd(this.strm)),
            this.onEnd(r),
            (this.ended = !0),
            r === Z_OK$2
          );
        if (0 !== s.avail_out) {
          if (i > 0 && s.next_out > 0)
            this.onData(s.output.subarray(0, s.next_out)), (s.avail_out = 0);
          else if (0 === s.avail_in) break;
        } else this.onData(s.output);
      }
    return !0;
  }),
    (Deflate$1.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Deflate$1.prototype.onEnd = function (t) {
      t === Z_OK$2 && (this.result = common.flattenChunks(this.chunks)),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var BAD$1 = 16209,
    TYPE$1 = 16191,
    inffast = function (t, e) {
      var r,
        i,
        s,
        a,
        n,
        o,
        h,
        l,
        p,
        f,
        d,
        c,
        m,
        u,
        y,
        g,
        _,
        v,
        b,
        E,
        S,
        A,
        P,
        x,
        T = t.state;
      (r = t.next_in),
        (P = t.input),
        (i = r + (t.avail_in - 5)),
        (s = t.next_out),
        (x = t.output),
        (a = s - (e - t.avail_out)),
        (n = s + (t.avail_out - 257)),
        (o = T.dmax),
        (h = T.wsize),
        (l = T.whave),
        (p = T.wnext),
        (f = T.window),
        (d = T.hold),
        (c = T.bits),
        (m = T.lencode),
        (u = T.distcode),
        (y = (1 << T.lenbits) - 1),
        (g = (1 << T.distbits) - 1);
      t: do {
        c < 15 && ((d += P[r++] << c), (c += 8), (d += P[r++] << c), (c += 8)),
          (_ = m[d & y]);
        e: for (;;) {
          if (((d >>>= v = _ >>> 24), (c -= v), 0 === (v = (_ >>> 16) & 255)))
            x[s++] = 65535 & _;
          else {
            if (!(16 & v)) {
              if (0 == (64 & v)) {
                _ = m[(65535 & _) + (d & ((1 << v) - 1))];
                continue e;
              }
              if (32 & v) {
                T.mode = TYPE$1;
                break t;
              }
              (t.msg = "invalid literal/length code"), (T.mode = BAD$1);
              break t;
            }
            (b = 65535 & _),
              (v &= 15) &&
                (c < v && ((d += P[r++] << c), (c += 8)),
                (b += d & ((1 << v) - 1)),
                (d >>>= v),
                (c -= v)),
              c < 15 &&
                ((d += P[r++] << c), (c += 8), (d += P[r++] << c), (c += 8)),
              (_ = u[d & g]);
            r: for (;;) {
              if (
                ((d >>>= v = _ >>> 24),
                (c -= v),
                !(16 & (v = (_ >>> 16) & 255)))
              ) {
                if (0 == (64 & v)) {
                  _ = u[(65535 & _) + (d & ((1 << v) - 1))];
                  continue r;
                }
                (t.msg = "invalid distance code"), (T.mode = BAD$1);
                break t;
              }
              if (
                ((E = 65535 & _),
                c < (v &= 15) &&
                  ((d += P[r++] << c),
                  (c += 8) < v && ((d += P[r++] << c), (c += 8))),
                (E += d & ((1 << v) - 1)) > o)
              ) {
                (t.msg = "invalid distance too far back"), (T.mode = BAD$1);
                break t;
              }
              if (((d >>>= v), (c -= v), E > (v = s - a))) {
                if ((v = E - v) > l && T.sane) {
                  (t.msg = "invalid distance too far back"), (T.mode = BAD$1);
                  break t;
                }
                if (((S = 0), (A = f), 0 === p)) {
                  if (((S += h - v), v < b)) {
                    b -= v;
                    do {
                      x[s++] = f[S++];
                    } while (--v);
                    (S = s - E), (A = x);
                  }
                } else if (p < v) {
                  if (((S += h + p - v), (v -= p) < b)) {
                    b -= v;
                    do {
                      x[s++] = f[S++];
                    } while (--v);
                    if (((S = 0), p < b)) {
                      b -= v = p;
                      do {
                        x[s++] = f[S++];
                      } while (--v);
                      (S = s - E), (A = x);
                    }
                  }
                } else if (((S += p - v), v < b)) {
                  b -= v;
                  do {
                    x[s++] = f[S++];
                  } while (--v);
                  (S = s - E), (A = x);
                }
                for (; b > 2; )
                  (x[s++] = A[S++]),
                    (x[s++] = A[S++]),
                    (x[s++] = A[S++]),
                    (b -= 3);
                b && ((x[s++] = A[S++]), b > 1 && (x[s++] = A[S++]));
              } else {
                S = s - E;
                do {
                  (x[s++] = x[S++]),
                    (x[s++] = x[S++]),
                    (x[s++] = x[S++]),
                    (b -= 3);
                } while (b > 2);
                b && ((x[s++] = x[S++]), b > 1 && (x[s++] = x[S++]));
              }
              break;
            }
          }
          break;
        }
      } while (r < i && s < n);
      (r -= b = c >> 3),
        (d &= (1 << (c -= b << 3)) - 1),
        (t.next_in = r),
        (t.next_out = s),
        (t.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
        (t.avail_out = s < n ? n - s + 257 : 257 - (s - n)),
        (T.hold = d),
        (T.bits = c);
    },
    MAXBITS = 15,
    ENOUGH_LENS$1 = 852,
    ENOUGH_DISTS$1 = 592,
    CODES$1 = 0,
    LENS$1 = 1,
    DISTS$1 = 2,
    lbase = new Uint16Array([
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ]),
    lext = new Uint8Array([
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ]),
    dbase = new Uint16Array([
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ]),
    dext = new Uint8Array([
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ]),
    inflate_table = (t, e, r, i, s, a, n, o) => {
      var h,
        l,
        p,
        f,
        d,
        c,
        m,
        u,
        y,
        g = o.bits,
        _ = 0,
        v = 0,
        b = 0,
        E = 0,
        S = 0,
        A = 0,
        P = 0,
        x = 0,
        T = 0,
        w = 0,
        C = null,
        k = new Uint16Array(MAXBITS + 1),
        D = new Uint16Array(MAXBITS + 1),
        M = null;
      for (_ = 0; _ <= MAXBITS; _++) k[_] = 0;
      for (v = 0; v < i; v++) k[e[r + v]]++;
      for (S = g, E = MAXBITS; E >= 1 && 0 === k[E]; E--);
      if ((S > E && (S = E), 0 === E))
        return (s[a++] = 20971520), (s[a++] = 20971520), (o.bits = 1), 0;
      for (b = 1; b < E && 0 === k[b]; b++);
      for (S < b && (S = b), x = 1, _ = 1; _ <= MAXBITS; _++)
        if (((x <<= 1), (x -= k[_]) < 0)) return -1;
      if (x > 0 && (t === CODES$1 || 1 !== E)) return -1;
      for (D[1] = 0, _ = 1; _ < MAXBITS; _++) D[_ + 1] = D[_] + k[_];
      for (v = 0; v < i; v++) 0 !== e[r + v] && (n[D[e[r + v]]++] = v);
      if (
        (t === CODES$1
          ? ((C = M = n), (c = 20))
          : t === LENS$1
          ? ((C = lbase), (M = lext), (c = 257))
          : ((C = dbase), (M = dext), (c = 0)),
        (w = 0),
        (v = 0),
        (_ = b),
        (d = a),
        (A = S),
        (P = 0),
        (p = -1),
        (f = (T = 1 << S) - 1),
        (t === LENS$1 && T > ENOUGH_LENS$1) ||
          (t === DISTS$1 && T > ENOUGH_DISTS$1))
      )
        return 1;
      for (;;) {
        (m = _ - P),
          n[v] + 1 < c
            ? ((u = 0), (y = n[v]))
            : n[v] >= c
            ? ((u = M[n[v] - c]), (y = C[n[v] - c]))
            : ((u = 96), (y = 0)),
          (h = 1 << (_ - P)),
          (b = l = 1 << A);
        do {
          s[d + (w >> P) + (l -= h)] = (m << 24) | (u << 16) | y | 0;
        } while (0 !== l);
        for (h = 1 << (_ - 1); w & h; ) h >>= 1;
        if ((0 !== h ? ((w &= h - 1), (w += h)) : (w = 0), v++, 0 == --k[_])) {
          if (_ === E) break;
          _ = e[r + n[v]];
        }
        if (_ > S && (w & f) !== p) {
          for (
            0 === P && (P = S), d += b, x = 1 << (A = _ - P);
            A + P < E && !((x -= k[A + P]) <= 0);

          )
            A++, (x <<= 1);
          if (
            ((T += 1 << A),
            (t === LENS$1 && T > ENOUGH_LENS$1) ||
              (t === DISTS$1 && T > ENOUGH_DISTS$1))
          )
            return 1;
          s[(p = w & f)] = (S << 24) | (A << 16) | (d - a) | 0;
        }
      }
      return (
        0 !== w && (s[d + w] = ((_ - P) << 24) | (64 << 16) | 0),
        (o.bits = S),
        0
      );
    },
    inftrees = inflate_table,
    CODES = 0,
    LENS = 1,
    DISTS = 2,
    {
      Z_FINISH: Z_FINISH$1,
      Z_BLOCK: Z_BLOCK,
      Z_TREES: Z_TREES,
      Z_OK: Z_OK$1,
      Z_STREAM_END: Z_STREAM_END$1,
      Z_NEED_DICT: Z_NEED_DICT$1,
      Z_STREAM_ERROR: Z_STREAM_ERROR$1,
      Z_DATA_ERROR: Z_DATA_ERROR$1,
      Z_MEM_ERROR: Z_MEM_ERROR$1,
      Z_BUF_ERROR: Z_BUF_ERROR,
      Z_DEFLATED: Z_DEFLATED,
    } = constants$2,
    HEAD = 16180,
    FLAGS = 16181,
    TIME = 16182,
    OS = 16183,
    EXLEN = 16184,
    EXTRA = 16185,
    NAME = 16186,
    COMMENT = 16187,
    HCRC = 16188,
    DICTID = 16189,
    DICT = 16190,
    TYPE = 16191,
    TYPEDO = 16192,
    STORED = 16193,
    COPY_ = 16194,
    COPY = 16195,
    TABLE = 16196,
    LENLENS = 16197,
    CODELENS = 16198,
    LEN_ = 16199,
    LEN = 16200,
    LENEXT = 16201,
    DIST = 16202,
    DISTEXT = 16203,
    MATCH = 16204,
    LIT = 16205,
    CHECK = 16206,
    LENGTH = 16207,
    DONE = 16208,
    BAD = 16209,
    MEM = 16210,
    SYNC = 16211,
    ENOUGH_LENS = 852,
    ENOUGH_DISTS = 592,
    MAX_WBITS = 15,
    DEF_WBITS = MAX_WBITS,
    zswap32 = (t) =>
      ((t >>> 24) & 255) +
      ((t >>> 8) & 65280) +
      ((65280 & t) << 8) +
      ((255 & t) << 24);
  function InflateState() {
    (this.strm = null),
      (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new Uint16Array(320)),
      (this.work = new Uint16Array(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  var inflateStateCheck = (t) => {
      if (!t) return 1;
      var e = t.state;
      return !e || e.strm !== t || e.mode < HEAD || e.mode > SYNC ? 1 : 0;
    },
    inflateResetKeep = (t) => {
      if (inflateStateCheck(t)) return Z_STREAM_ERROR$1;
      var e = t.state;
      return (
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = HEAD),
        (e.last = 0),
        (e.havedict = 0),
        (e.flags = -1),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new Int32Array(ENOUGH_LENS)),
        (e.distcode = e.distdyn = new Int32Array(ENOUGH_DISTS)),
        (e.sane = 1),
        (e.back = -1),
        Z_OK$1
      );
    },
    inflateReset = (t) => {
      if (inflateStateCheck(t)) return Z_STREAM_ERROR$1;
      var e = t.state;
      return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), inflateResetKeep(t);
    },
    inflateReset2 = (t, e) => {
      var r;
      if (inflateStateCheck(t)) return Z_STREAM_ERROR$1;
      var i = t.state;
      return (
        e < 0 ? ((r = 0), (e = -e)) : ((r = 5 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || e > 15)
          ? Z_STREAM_ERROR$1
          : (null !== i.window && i.wbits !== e && (i.window = null),
            (i.wrap = r),
            (i.wbits = e),
            inflateReset(t))
      );
    },
    inflateInit2 = (t, e) => {
      if (!t) return Z_STREAM_ERROR$1;
      var r = new InflateState();
      (t.state = r), (r.strm = t), (r.window = null), (r.mode = HEAD);
      var i = inflateReset2(t, e);
      return i !== Z_OK$1 && (t.state = null), i;
    },
    inflateInit = (t) => inflateInit2(t, DEF_WBITS),
    virgin = !0,
    lenfix,
    distfix,
    fixedtables = (t) => {
      if (virgin) {
        (lenfix = new Int32Array(512)), (distfix = new Int32Array(32));
        for (var e = 0; e < 144; ) t.lens[e++] = 8;
        for (; e < 256; ) t.lens[e++] = 9;
        for (; e < 280; ) t.lens[e++] = 7;
        for (; e < 288; ) t.lens[e++] = 8;
        for (
          inftrees(LENS, t.lens, 0, 288, lenfix, 0, t.work, { bits: 9 }), e = 0;
          e < 32;

        )
          t.lens[e++] = 5;
        inftrees(DISTS, t.lens, 0, 32, distfix, 0, t.work, { bits: 5 }),
          (virgin = !1);
      }
      (t.lencode = lenfix),
        (t.lenbits = 9),
        (t.distcode = distfix),
        (t.distbits = 5);
    },
    updatewindow = (t, e, r, i) => {
      var s,
        a = t.state;
      return (
        null === a.window &&
          ((a.wsize = 1 << a.wbits),
          (a.wnext = 0),
          (a.whave = 0),
          (a.window = new Uint8Array(a.wsize))),
        i >= a.wsize
          ? (a.window.set(e.subarray(r - a.wsize, r), 0),
            (a.wnext = 0),
            (a.whave = a.wsize))
          : ((s = a.wsize - a.wnext) > i && (s = i),
            a.window.set(e.subarray(r - i, r - i + s), a.wnext),
            (i -= s)
              ? (a.window.set(e.subarray(r - i, r), 0),
                (a.wnext = i),
                (a.whave = a.wsize))
              : ((a.wnext += s),
                a.wnext === a.wsize && (a.wnext = 0),
                a.whave < a.wsize && (a.whave += s))),
        0
      );
    },
    inflate$2 = (t, e) => {
      var r,
        i,
        s,
        a,
        n,
        o,
        h,
        l,
        p,
        f,
        d,
        c,
        m,
        u,
        y,
        g,
        _,
        v,
        b,
        E,
        S,
        A,
        P,
        x,
        T = 0,
        w = new Uint8Array(4),
        C = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
      if (inflateStateCheck(t) || !t.output || (!t.input && 0 !== t.avail_in))
        return Z_STREAM_ERROR$1;
      (r = t.state).mode === TYPE && (r.mode = TYPEDO),
        (n = t.next_out),
        (s = t.output),
        (h = t.avail_out),
        (a = t.next_in),
        (i = t.input),
        (o = t.avail_in),
        (l = r.hold),
        (p = r.bits),
        (f = o),
        (d = h),
        (A = Z_OK$1);
      t: for (;;)
        switch (r.mode) {
          case HEAD:
            if (0 === r.wrap) {
              r.mode = TYPEDO;
              break;
            }
            for (; p < 16; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if (2 & r.wrap && 35615 === l) {
              0 === r.wbits && (r.wbits = 15),
                (r.check = 0),
                (w[0] = 255 & l),
                (w[1] = (l >>> 8) & 255),
                (r.check = crc32_1(r.check, w, 2, 0)),
                (l = 0),
                (p = 0),
                (r.mode = FLAGS);
              break;
            }
            if (
              (r.head && (r.head.done = !1),
              !(1 & r.wrap) || (((255 & l) << 8) + (l >> 8)) % 31)
            ) {
              (t.msg = "incorrect header check"), (r.mode = BAD);
              break;
            }
            if ((15 & l) !== Z_DEFLATED) {
              (t.msg = "unknown compression method"), (r.mode = BAD);
              break;
            }
            if (
              ((p -= 4),
              (S = 8 + (15 & (l >>>= 4))),
              0 === r.wbits && (r.wbits = S),
              S > 15 || S > r.wbits)
            ) {
              (t.msg = "invalid window size"), (r.mode = BAD);
              break;
            }
            (r.dmax = 1 << r.wbits),
              (r.flags = 0),
              (t.adler = r.check = 1),
              (r.mode = 512 & l ? DICTID : TYPE),
              (l = 0),
              (p = 0);
            break;
          case FLAGS:
            for (; p < 16; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if (((r.flags = l), (255 & r.flags) !== Z_DEFLATED)) {
              (t.msg = "unknown compression method"), (r.mode = BAD);
              break;
            }
            if (57344 & r.flags) {
              (t.msg = "unknown header flags set"), (r.mode = BAD);
              break;
            }
            r.head && (r.head.text = (l >> 8) & 1),
              512 & r.flags &&
                4 & r.wrap &&
                ((w[0] = 255 & l),
                (w[1] = (l >>> 8) & 255),
                (r.check = crc32_1(r.check, w, 2, 0))),
              (l = 0),
              (p = 0),
              (r.mode = TIME);
          case TIME:
            for (; p < 32; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            r.head && (r.head.time = l),
              512 & r.flags &&
                4 & r.wrap &&
                ((w[0] = 255 & l),
                (w[1] = (l >>> 8) & 255),
                (w[2] = (l >>> 16) & 255),
                (w[3] = (l >>> 24) & 255),
                (r.check = crc32_1(r.check, w, 4, 0))),
              (l = 0),
              (p = 0),
              (r.mode = OS);
          case OS:
            for (; p < 16; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            r.head && ((r.head.xflags = 255 & l), (r.head.os = l >> 8)),
              512 & r.flags &&
                4 & r.wrap &&
                ((w[0] = 255 & l),
                (w[1] = (l >>> 8) & 255),
                (r.check = crc32_1(r.check, w, 2, 0))),
              (l = 0),
              (p = 0),
              (r.mode = EXLEN);
          case EXLEN:
            if (1024 & r.flags) {
              for (; p < 16; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (r.length = l),
                r.head && (r.head.extra_len = l),
                512 & r.flags &&
                  4 & r.wrap &&
                  ((w[0] = 255 & l),
                  (w[1] = (l >>> 8) & 255),
                  (r.check = crc32_1(r.check, w, 2, 0))),
                (l = 0),
                (p = 0);
            } else r.head && (r.head.extra = null);
            r.mode = EXTRA;
          case EXTRA:
            if (
              1024 & r.flags &&
              ((c = r.length) > o && (c = o),
              c &&
                (r.head &&
                  ((S = r.head.extra_len - r.length),
                  r.head.extra ||
                    (r.head.extra = new Uint8Array(r.head.extra_len)),
                  r.head.extra.set(i.subarray(a, a + c), S)),
                512 & r.flags &&
                  4 & r.wrap &&
                  (r.check = crc32_1(r.check, i, c, a)),
                (o -= c),
                (a += c),
                (r.length -= c)),
              r.length)
            )
              break t;
            (r.length = 0), (r.mode = NAME);
          case NAME:
            if (2048 & r.flags) {
              if (0 === o) break t;
              c = 0;
              do {
                (S = i[a + c++]),
                  r.head &&
                    S &&
                    r.length < 65536 &&
                    (r.head.name += String.fromCharCode(S));
              } while (S && c < o);
              if (
                (512 & r.flags &&
                  4 & r.wrap &&
                  (r.check = crc32_1(r.check, i, c, a)),
                (o -= c),
                (a += c),
                S)
              )
                break t;
            } else r.head && (r.head.name = null);
            (r.length = 0), (r.mode = COMMENT);
          case COMMENT:
            if (4096 & r.flags) {
              if (0 === o) break t;
              c = 0;
              do {
                (S = i[a + c++]),
                  r.head &&
                    S &&
                    r.length < 65536 &&
                    (r.head.comment += String.fromCharCode(S));
              } while (S && c < o);
              if (
                (512 & r.flags &&
                  4 & r.wrap &&
                  (r.check = crc32_1(r.check, i, c, a)),
                (o -= c),
                (a += c),
                S)
              )
                break t;
            } else r.head && (r.head.comment = null);
            r.mode = HCRC;
          case HCRC:
            if (512 & r.flags) {
              for (; p < 16; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              if (4 & r.wrap && l !== (65535 & r.check)) {
                (t.msg = "header crc mismatch"), (r.mode = BAD);
                break;
              }
              (l = 0), (p = 0);
            }
            r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
              (t.adler = r.check = 0),
              (r.mode = TYPE);
            break;
          case DICTID:
            for (; p < 32; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            (t.adler = r.check = zswap32(l)), (l = 0), (p = 0), (r.mode = DICT);
          case DICT:
            if (0 === r.havedict)
              return (
                (t.next_out = n),
                (t.avail_out = h),
                (t.next_in = a),
                (t.avail_in = o),
                (r.hold = l),
                (r.bits = p),
                Z_NEED_DICT$1
              );
            (t.adler = r.check = 1), (r.mode = TYPE);
          case TYPE:
            if (e === Z_BLOCK || e === Z_TREES) break t;
          case TYPEDO:
            if (r.last) {
              (l >>>= 7 & p), (p -= 7 & p), (r.mode = CHECK);
              break;
            }
            for (; p < 3; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            switch (((r.last = 1 & l), (p -= 1), 3 & (l >>>= 1))) {
              case 0:
                r.mode = STORED;
                break;
              case 1:
                if ((fixedtables(r), (r.mode = LEN_), e === Z_TREES)) {
                  (l >>>= 2), (p -= 2);
                  break t;
                }
                break;
              case 2:
                r.mode = TABLE;
                break;
              case 3:
                (t.msg = "invalid block type"), (r.mode = BAD);
            }
            (l >>>= 2), (p -= 2);
            break;
          case STORED:
            for (l >>>= 7 & p, p -= 7 & p; p < 32; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if ((65535 & l) != ((l >>> 16) ^ 65535)) {
              (t.msg = "invalid stored block lengths"), (r.mode = BAD);
              break;
            }
            if (
              ((r.length = 65535 & l),
              (l = 0),
              (p = 0),
              (r.mode = COPY_),
              e === Z_TREES)
            )
              break t;
          case COPY_:
            r.mode = COPY;
          case COPY:
            if ((c = r.length)) {
              if ((c > o && (c = o), c > h && (c = h), 0 === c)) break t;
              s.set(i.subarray(a, a + c), n),
                (o -= c),
                (a += c),
                (h -= c),
                (n += c),
                (r.length -= c);
              break;
            }
            r.mode = TYPE;
            break;
          case TABLE:
            for (; p < 14; ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if (
              ((r.nlen = 257 + (31 & l)),
              (l >>>= 5),
              (p -= 5),
              (r.ndist = 1 + (31 & l)),
              (l >>>= 5),
              (p -= 5),
              (r.ncode = 4 + (15 & l)),
              (l >>>= 4),
              (p -= 4),
              r.nlen > 286 || r.ndist > 30)
            ) {
              (t.msg = "too many length or distance symbols"), (r.mode = BAD);
              break;
            }
            (r.have = 0), (r.mode = LENLENS);
          case LENLENS:
            for (; r.have < r.ncode; ) {
              for (; p < 3; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (r.lens[C[r.have++]] = 7 & l), (l >>>= 3), (p -= 3);
            }
            for (; r.have < 19; ) r.lens[C[r.have++]] = 0;
            if (
              ((r.lencode = r.lendyn),
              (r.lenbits = 7),
              (P = { bits: r.lenbits }),
              (A = inftrees(CODES, r.lens, 0, 19, r.lencode, 0, r.work, P)),
              (r.lenbits = P.bits),
              A)
            ) {
              (t.msg = "invalid code lengths set"), (r.mode = BAD);
              break;
            }
            (r.have = 0), (r.mode = CODELENS);
          case CODELENS:
            for (; r.have < r.nlen + r.ndist; ) {
              for (
                ;
                (g =
                  ((T = r.lencode[l & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                  (_ = 65535 & T),
                  !((y = T >>> 24) <= p);

              ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              if (_ < 16) (l >>>= y), (p -= y), (r.lens[r.have++] = _);
              else {
                if (16 === _) {
                  for (x = y + 2; p < x; ) {
                    if (0 === o) break t;
                    o--, (l += i[a++] << p), (p += 8);
                  }
                  if (((l >>>= y), (p -= y), 0 === r.have)) {
                    (t.msg = "invalid bit length repeat"), (r.mode = BAD);
                    break;
                  }
                  (S = r.lens[r.have - 1]),
                    (c = 3 + (3 & l)),
                    (l >>>= 2),
                    (p -= 2);
                } else if (17 === _) {
                  for (x = y + 3; p < x; ) {
                    if (0 === o) break t;
                    o--, (l += i[a++] << p), (p += 8);
                  }
                  (p -= y),
                    (S = 0),
                    (c = 3 + (7 & (l >>>= y))),
                    (l >>>= 3),
                    (p -= 3);
                } else {
                  for (x = y + 7; p < x; ) {
                    if (0 === o) break t;
                    o--, (l += i[a++] << p), (p += 8);
                  }
                  (p -= y),
                    (S = 0),
                    (c = 11 + (127 & (l >>>= y))),
                    (l >>>= 7),
                    (p -= 7);
                }
                if (r.have + c > r.nlen + r.ndist) {
                  (t.msg = "invalid bit length repeat"), (r.mode = BAD);
                  break;
                }
                for (; c--; ) r.lens[r.have++] = S;
              }
            }
            if (r.mode === BAD) break;
            if (0 === r.lens[256]) {
              (t.msg = "invalid code -- missing end-of-block"), (r.mode = BAD);
              break;
            }
            if (
              ((r.lenbits = 9),
              (P = { bits: r.lenbits }),
              (A = inftrees(LENS, r.lens, 0, r.nlen, r.lencode, 0, r.work, P)),
              (r.lenbits = P.bits),
              A)
            ) {
              (t.msg = "invalid literal/lengths set"), (r.mode = BAD);
              break;
            }
            if (
              ((r.distbits = 6),
              (r.distcode = r.distdyn),
              (P = { bits: r.distbits }),
              (A = inftrees(
                DISTS,
                r.lens,
                r.nlen,
                r.ndist,
                r.distcode,
                0,
                r.work,
                P,
              )),
              (r.distbits = P.bits),
              A)
            ) {
              (t.msg = "invalid distances set"), (r.mode = BAD);
              break;
            }
            if (((r.mode = LEN_), e === Z_TREES)) break t;
          case LEN_:
            r.mode = LEN;
          case LEN:
            if (o >= 6 && h >= 258) {
              (t.next_out = n),
                (t.avail_out = h),
                (t.next_in = a),
                (t.avail_in = o),
                (r.hold = l),
                (r.bits = p),
                inffast(t, d),
                (n = t.next_out),
                (s = t.output),
                (h = t.avail_out),
                (a = t.next_in),
                (i = t.input),
                (o = t.avail_in),
                (l = r.hold),
                (p = r.bits),
                r.mode === TYPE && (r.back = -1);
              break;
            }
            for (
              r.back = 0;
              (g = ((T = r.lencode[l & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                (_ = 65535 & T),
                !((y = T >>> 24) <= p);

            ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if (g && 0 == (240 & g)) {
              for (
                v = y, b = g, E = _;
                (g =
                  ((T = r.lencode[E + ((l & ((1 << (v + b)) - 1)) >> v)]) >>>
                    16) &
                  255),
                  (_ = 65535 & T),
                  !(v + (y = T >>> 24) <= p);

              ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (l >>>= v), (p -= v), (r.back += v);
            }
            if (
              ((l >>>= y), (p -= y), (r.back += y), (r.length = _), 0 === g)
            ) {
              r.mode = LIT;
              break;
            }
            if (32 & g) {
              (r.back = -1), (r.mode = TYPE);
              break;
            }
            if (64 & g) {
              (t.msg = "invalid literal/length code"), (r.mode = BAD);
              break;
            }
            (r.extra = 15 & g), (r.mode = LENEXT);
          case LENEXT:
            if (r.extra) {
              for (x = r.extra; p < x; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (r.length += l & ((1 << r.extra) - 1)),
                (l >>>= r.extra),
                (p -= r.extra),
                (r.back += r.extra);
            }
            (r.was = r.length), (r.mode = DIST);
          case DIST:
            for (
              ;
              (g =
                ((T = r.distcode[l & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                (_ = 65535 & T),
                !((y = T >>> 24) <= p);

            ) {
              if (0 === o) break t;
              o--, (l += i[a++] << p), (p += 8);
            }
            if (0 == (240 & g)) {
              for (
                v = y, b = g, E = _;
                (g =
                  ((T = r.distcode[E + ((l & ((1 << (v + b)) - 1)) >> v)]) >>>
                    16) &
                  255),
                  (_ = 65535 & T),
                  !(v + (y = T >>> 24) <= p);

              ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (l >>>= v), (p -= v), (r.back += v);
            }
            if (((l >>>= y), (p -= y), (r.back += y), 64 & g)) {
              (t.msg = "invalid distance code"), (r.mode = BAD);
              break;
            }
            (r.offset = _), (r.extra = 15 & g), (r.mode = DISTEXT);
          case DISTEXT:
            if (r.extra) {
              for (x = r.extra; p < x; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              (r.offset += l & ((1 << r.extra) - 1)),
                (l >>>= r.extra),
                (p -= r.extra),
                (r.back += r.extra);
            }
            if (r.offset > r.dmax) {
              (t.msg = "invalid distance too far back"), (r.mode = BAD);
              break;
            }
            r.mode = MATCH;
          case MATCH:
            if (0 === h) break t;
            if (((c = d - h), r.offset > c)) {
              if ((c = r.offset - c) > r.whave && r.sane) {
                (t.msg = "invalid distance too far back"), (r.mode = BAD);
                break;
              }
              c > r.wnext
                ? ((c -= r.wnext), (m = r.wsize - c))
                : (m = r.wnext - c),
                c > r.length && (c = r.length),
                (u = r.window);
            } else (u = s), (m = n - r.offset), (c = r.length);
            c > h && (c = h), (h -= c), (r.length -= c);
            do {
              s[n++] = u[m++];
            } while (--c);
            0 === r.length && (r.mode = LEN);
            break;
          case LIT:
            if (0 === h) break t;
            (s[n++] = r.length), h--, (r.mode = LEN);
            break;
          case CHECK:
            if (r.wrap) {
              for (; p < 32; ) {
                if (0 === o) break t;
                o--, (l |= i[a++] << p), (p += 8);
              }
              if (
                ((d -= h),
                (t.total_out += d),
                (r.total += d),
                4 & r.wrap &&
                  d &&
                  (t.adler = r.check =
                    r.flags
                      ? crc32_1(r.check, s, d, n - d)
                      : adler32_1(r.check, s, d, n - d)),
                (d = h),
                4 & r.wrap && (r.flags ? l : zswap32(l)) !== r.check)
              ) {
                (t.msg = "incorrect data check"), (r.mode = BAD);
                break;
              }
              (l = 0), (p = 0);
            }
            r.mode = LENGTH;
          case LENGTH:
            if (r.wrap && r.flags) {
              for (; p < 32; ) {
                if (0 === o) break t;
                o--, (l += i[a++] << p), (p += 8);
              }
              if (4 & r.wrap && l !== (4294967295 & r.total)) {
                (t.msg = "incorrect length check"), (r.mode = BAD);
                break;
              }
              (l = 0), (p = 0);
            }
            r.mode = DONE;
          case DONE:
            A = Z_STREAM_END$1;
            break t;
          case BAD:
            A = Z_DATA_ERROR$1;
            break t;
          case MEM:
            return Z_MEM_ERROR$1;
          default:
            return Z_STREAM_ERROR$1;
        }
      return (
        (t.next_out = n),
        (t.avail_out = h),
        (t.next_in = a),
        (t.avail_in = o),
        (r.hold = l),
        (r.bits = p),
        (r.wsize ||
          (d !== t.avail_out &&
            r.mode < BAD &&
            (r.mode < CHECK || e !== Z_FINISH$1))) &&
          updatewindow(t, t.output, t.next_out, d - t.avail_out),
        (f -= t.avail_in),
        (d -= t.avail_out),
        (t.total_in += f),
        (t.total_out += d),
        (r.total += d),
        4 & r.wrap &&
          d &&
          (t.adler = r.check =
            r.flags
              ? crc32_1(r.check, s, d, t.next_out - d)
              : adler32_1(r.check, s, d, t.next_out - d)),
        (t.data_type =
          r.bits +
          (r.last ? 64 : 0) +
          (r.mode === TYPE ? 128 : 0) +
          (r.mode === LEN_ || r.mode === COPY_ ? 256 : 0)),
        ((0 === f && 0 === d) || e === Z_FINISH$1) &&
          A === Z_OK$1 &&
          (A = Z_BUF_ERROR),
        A
      );
    },
    inflateEnd = (t) => {
      if (inflateStateCheck(t)) return Z_STREAM_ERROR$1;
      var e = t.state;
      return e.window && (e.window = null), (t.state = null), Z_OK$1;
    },
    inflateGetHeader = (t, e) => {
      if (inflateStateCheck(t)) return Z_STREAM_ERROR$1;
      var r = t.state;
      return 0 == (2 & r.wrap)
        ? Z_STREAM_ERROR$1
        : ((r.head = e), (e.done = !1), Z_OK$1);
    },
    inflateSetDictionary = (t, e) => {
      var r,
        i = e.length;
      return inflateStateCheck(t) ||
        (0 !== (r = t.state).wrap && r.mode !== DICT)
        ? Z_STREAM_ERROR$1
        : r.mode === DICT && adler32_1(1, e, i, 0) !== r.check
        ? Z_DATA_ERROR$1
        : updatewindow(t, e, i, i)
        ? ((r.mode = MEM), Z_MEM_ERROR$1)
        : ((r.havedict = 1), Z_OK$1);
    },
    inflateReset_1 = inflateReset,
    inflateReset2_1 = inflateReset2,
    inflateResetKeep_1 = inflateResetKeep,
    inflateInit_1 = inflateInit,
    inflateInit2_1 = inflateInit2,
    inflate_2$1 = inflate$2,
    inflateEnd_1 = inflateEnd,
    inflateGetHeader_1 = inflateGetHeader,
    inflateSetDictionary_1 = inflateSetDictionary,
    inflateInfo = "pako inflate (from Nodeca project)",
    inflate_1$2 = {
      inflateReset: inflateReset_1,
      inflateReset2: inflateReset2_1,
      inflateResetKeep: inflateResetKeep_1,
      inflateInit: inflateInit_1,
      inflateInit2: inflateInit2_1,
      inflate: inflate_2$1,
      inflateEnd: inflateEnd_1,
      inflateGetHeader: inflateGetHeader_1,
      inflateSetDictionary: inflateSetDictionary_1,
      inflateInfo: inflateInfo,
    };
  function GZheader() {
    (this.text = 0),
      (this.time = 0),
      (this.xflags = 0),
      (this.os = 0),
      (this.extra = null),
      (this.extra_len = 0),
      (this.name = ""),
      (this.comment = ""),
      (this.hcrc = 0),
      (this.done = !1);
  }
  var gzheader = GZheader,
    toString = Object.prototype.toString,
    {
      Z_NO_FLUSH: Z_NO_FLUSH,
      Z_FINISH: Z_FINISH,
      Z_OK: Z_OK,
      Z_STREAM_END: Z_STREAM_END,
      Z_NEED_DICT: Z_NEED_DICT,
      Z_STREAM_ERROR: Z_STREAM_ERROR,
      Z_DATA_ERROR: Z_DATA_ERROR,
      Z_MEM_ERROR: Z_MEM_ERROR,
    } = constants$2;
  function Inflate$1(t) {
    this.options = common.assign(
      { chunkSize: 65536, windowBits: 15, to: "" },
      t || {},
    );
    var e = this.options;
    e.raw &&
      e.windowBits >= 0 &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits),
      0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) ||
        (t && t.windowBits) ||
        (e.windowBits += 32),
      e.windowBits > 15 &&
        e.windowBits < 48 &&
        0 == (15 & e.windowBits) &&
        (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new zstream()),
      (this.strm.avail_out = 0);
    var r = inflate_1$2.inflateInit2(this.strm, e.windowBits);
    if (r !== Z_OK) throw new Error(messages[r]);
    if (
      ((this.header = new gzheader()),
      inflate_1$2.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        ("string" == typeof e.dictionary
          ? (e.dictionary = strings.string2buf(e.dictionary))
          : "[object ArrayBuffer]" === toString.call(e.dictionary) &&
            (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw &&
          (r = inflate_1$2.inflateSetDictionary(this.strm, e.dictionary)) !==
            Z_OK))
    )
      throw new Error(messages[r]);
  }
  function inflate$1(t, e) {
    var r = new Inflate$1(e);
    if ((r.push(t), r.err)) throw r.msg || messages[r.err];
    return r.result;
  }
  function inflateRaw$1(t, e) {
    return ((e = e || {}).raw = !0), inflate$1(t, e);
  }
  (Inflate$1.prototype.push = function (t, e) {
    var r,
      i,
      s,
      a = this.strm,
      n = this.options.chunkSize,
      o = this.options.dictionary;
    if (this.ended) return !1;
    for (
      i = e === ~~e ? e : !0 === e ? Z_FINISH : Z_NO_FLUSH,
        "[object ArrayBuffer]" === toString.call(t)
          ? (a.input = new Uint8Array(t))
          : (a.input = t),
        a.next_in = 0,
        a.avail_in = a.input.length;
      ;

    ) {
      for (
        0 === a.avail_out &&
          ((a.output = new Uint8Array(n)), (a.next_out = 0), (a.avail_out = n)),
          (r = inflate_1$2.inflate(a, i)) === Z_NEED_DICT &&
            o &&
            ((r = inflate_1$2.inflateSetDictionary(a, o)) === Z_OK
              ? (r = inflate_1$2.inflate(a, i))
              : r === Z_DATA_ERROR && (r = Z_NEED_DICT));
        a.avail_in > 0 &&
        r === Z_STREAM_END &&
        a.state.wrap > 0 &&
        0 !== t[a.next_in];

      )
        inflate_1$2.inflateReset(a), (r = inflate_1$2.inflate(a, i));
      switch (r) {
        case Z_STREAM_ERROR:
        case Z_DATA_ERROR:
        case Z_NEED_DICT:
        case Z_MEM_ERROR:
          return this.onEnd(r), (this.ended = !0), !1;
      }
      if (
        ((s = a.avail_out),
        a.next_out && (0 === a.avail_out || r === Z_STREAM_END))
      )
        if ("string" === this.options.to) {
          var h = strings.utf8border(a.output, a.next_out),
            l = a.next_out - h,
            p = strings.buf2string(a.output, h);
          (a.next_out = l),
            (a.avail_out = n - l),
            l && a.output.set(a.output.subarray(h, h + l), 0),
            this.onData(p);
        } else
          this.onData(
            a.output.length === a.next_out
              ? a.output
              : a.output.subarray(0, a.next_out),
          );
      if (r !== Z_OK || 0 !== s) {
        if (r === Z_STREAM_END)
          return (
            (r = inflate_1$2.inflateEnd(this.strm)),
            this.onEnd(r),
            (this.ended = !0),
            !0
          );
        if (0 === a.avail_in) break;
      }
    }
    return !0;
  }),
    (Inflate$1.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Inflate$1.prototype.onEnd = function (t) {
      t === Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = common.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var Inflate_1$1 = Inflate$1,
    inflate_2 = inflate$1,
    inflateRaw_1$1 = inflateRaw$1,
    ungzip$1 = inflate$1,
    constants = constants$2,
    inflate_1$1 = {
      Inflate: Inflate_1$1,
      inflate: inflate_2,
      inflateRaw: inflateRaw_1$1,
      ungzip: ungzip$1,
      constants: constants,
    },
    {
      Inflate: Inflate,
      inflate: inflate,
      inflateRaw: inflateRaw,
      ungzip: ungzip,
    } = inflate_1$1,
    inflate_1 = inflate,
    t$1 = window,
    e$2 =
      t$1.ShadowRoot &&
      (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    s$3 = Symbol(),
    n$3 = new WeakMap();
  class o$3 {
    constructor(t, e, r) {
      if (((this._$cssResult$ = !0), r !== s$3))
        throw Error(
          "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
        );
      (this.cssText = t), (this.t = e);
    }
    get styleSheet() {
      var t = this.o,
        e = this.t;
      if (e$2 && void 0 === t) {
        var r = void 0 !== e && 1 === e.length;
        r && (t = n$3.get(e)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
            r && n$3.set(e, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  }
  var r$2 = (t) => new o$3("string" == typeof t ? t : t + "", void 0, s$3),
    i$1 = function (t) {
      for (
        var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
        i < e;
        i++
      )
        r[i - 1] = arguments[i];
      var s =
        1 === t.length
          ? t[0]
          : r.reduce(
              (e, r, i) =>
                e +
                ((t) => {
                  if (!0 === t._$cssResult$) return t.cssText;
                  if ("number" == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                  );
                })(r) +
                t[i + 1],
              t[0],
            );
      return new o$3(s, t, s$3);
    },
    S$1 = (t, e) => {
      e$2
        ? (t.adoptedStyleSheets = e.map((t) =>
            t instanceof CSSStyleSheet ? t : t.styleSheet,
          ))
        : e.forEach((e) => {
            var r = document.createElement("style"),
              i = t$1.litNonce;
            void 0 !== i && r.setAttribute("nonce", i),
              (r.textContent = e.cssText),
              t.appendChild(r);
          });
    },
    c$1 = e$2
      ? (t) => t
      : (t) =>
          t instanceof CSSStyleSheet
            ? ((t) => {
                var e = "";
                for (var r of t.cssRules) e += r.cssText;
                return r$2(e);
              })(t)
            : t,
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ s$2,
    e$1 = window,
    r$1 = e$1.trustedTypes,
    h$1 = r$1 ? r$1.emptyScript : "",
    o$2 = e$1.reactiveElementPolyfillSupport,
    n$2 = {
      toAttribute(t, e) {
        switch (e) {
          case Boolean:
            t = t ? h$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, e) {
        var r = t;
        switch (e) {
          case Boolean:
            r = null !== t;
            break;
          case Number:
            r = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              r = JSON.parse(t);
            } catch (t) {
              r = null;
            }
        }
        return r;
      },
    },
    a$1 = (t, e) => e !== t && (e == e || t == t),
    l$2 = {
      attribute: !0,
      type: String,
      converter: n$2,
      reflect: !1,
      hasChanged: a$1,
    },
    t;
  class d$1 extends HTMLElement {
    constructor() {
      super(),
        (this._$Ei = new Map()),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$El = null),
        this.u();
    }
    static addInitializer(t) {
      var e;
      this.finalize(),
        (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
    }
    static get observedAttributes() {
      this.finalize();
      var t = [];
      return (
        this.elementProperties.forEach((e, r) => {
          var i = this._$Ep(r, e);
          void 0 !== i && (this._$Ev.set(i, r), t.push(i));
        }),
        t
      );
    }
    static createProperty(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l$2;
      if (
        (e.state && (e.attribute = !1),
        this.finalize(),
        this.elementProperties.set(t, e),
        !e.noAccessor && !this.prototype.hasOwnProperty(t))
      ) {
        var r = "symbol" == typeof t ? Symbol() : "__" + t,
          i = this.getPropertyDescriptor(t, r, e);
        void 0 !== i && Object.defineProperty(this.prototype, t, i);
      }
    }
    static getPropertyDescriptor(t, e, r) {
      return {
        get() {
          return this[e];
        },
        set(i) {
          var s = this[t];
          (this[e] = i), this.requestUpdate(t, s, r);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || l$2;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);
      if (
        (t.finalize(),
        void 0 !== t.h && (this.h = [...t.h]),
        (this.elementProperties = new Map(t.elementProperties)),
        (this._$Ev = new Map()),
        this.hasOwnProperty("properties"))
      ) {
        var e = this.properties,
          r = [
            ...Object.getOwnPropertyNames(e),
            ...Object.getOwnPropertySymbols(e),
          ];
        for (var i of r) this.createProperty(i, e[i]);
      }
      return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(t) {
      var e = [];
      if (Array.isArray(t)) {
        var r = new Set(t.flat(1 / 0).reverse());
        for (var i of r) e.unshift(c$1(i));
      } else void 0 !== t && e.push(c$1(t));
      return e;
    }
    static _$Ep(t, e) {
      var r = e.attribute;
      return !1 === r
        ? void 0
        : "string" == typeof r
        ? r
        : "string" == typeof t
        ? t.toLowerCase()
        : void 0;
    }
    u() {
      var t;
      (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$Eg(),
        this.requestUpdate(),
        null === (t = this.constructor.h) ||
          void 0 === t ||
          t.forEach((t) => t(this));
    }
    addController(t) {
      var e, r;
      (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
        void 0 !== this.renderRoot &&
          this.isConnected &&
          (null === (r = t.hostConnected) || void 0 === r || r.call(t));
    }
    removeController(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t, e) => {
        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
      });
    }
    createRenderRoot() {
      var t,
        e =
          null !== (t = this.shadowRoot) && void 0 !== t
            ? t
            : this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (t = this._$ES) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostConnected) || void 0 === e
              ? void 0
              : e.call(t);
          });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      var t;
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostDisconnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
    }
    attributeChangedCallback(t, e, r) {
      this._$AK(t, r);
    }
    _$EO(t, e) {
      var r,
        i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l$2,
        s = this.constructor._$Ep(t, i);
      if (void 0 !== s && !0 === i.reflect) {
        var a = (
          void 0 !==
          (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
            ? i.converter
            : n$2
        ).toAttribute(e, i.type);
        (this._$El = t),
          null == a ? this.removeAttribute(s) : this.setAttribute(s, a),
          (this._$El = null);
      }
    }
    _$AK(t, e) {
      var r,
        i = this.constructor,
        s = i._$Ev.get(t);
      if (void 0 !== s && this._$El !== s) {
        var a = i.getPropertyOptions(s),
          n =
            "function" == typeof a.converter
              ? { fromAttribute: a.converter }
              : void 0 !==
                (null === (r = a.converter) || void 0 === r
                  ? void 0
                  : r.fromAttribute)
              ? a.converter
              : n$2;
        (this._$El = s),
          (this[s] = n.fromAttribute(e, a.type)),
          (this._$El = null);
      }
    }
    requestUpdate(t, e, r) {
      var i = !0;
      void 0 !== t &&
        (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || a$1)(
          this[t],
          e,
        )
          ? (this._$AL.has(t) || this._$AL.set(t, e),
            !0 === r.reflect &&
              this._$El !== t &&
              (void 0 === this._$EC && (this._$EC = new Map()),
              this._$EC.set(t, r)))
          : (i = !1)),
        !this.isUpdatePending && i && (this._$E_ = this._$Ej());
    }
    _$Ej() {
      var t = this;
      return _asyncToGenerator(function* () {
        t.isUpdatePending = !0;
        try {
          yield t._$E_;
        } catch (e) {
          Promise.reject(e);
        }
        var e = t.scheduleUpdate();
        return null != e && (yield e), !t.isUpdatePending;
      })();
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (this.isUpdatePending) {
        this.hasUpdated,
          this._$Ei &&
            (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
        var e = !1,
          r = this._$AL;
        try {
          (e = this.shouldUpdate(r))
            ? (this.willUpdate(r),
              null === (t = this._$ES) ||
                void 0 === t ||
                t.forEach((t) => {
                  var e;
                  return null === (e = t.hostUpdate) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
              this.update(r))
            : this._$Ek();
        } catch (t) {
          throw ((e = !1), this._$Ek(), t);
        }
        e && this._$AE(r);
      }
    }
    willUpdate(t) {}
    _$AE(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((t) => {
          var e;
          return null === (e = t.hostUpdated) || void 0 === e
            ? void 0
            : e.call(t);
        }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
        this.updated(t);
    }
    _$Ek() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t) {
      return !0;
    }
    update(t) {
      void 0 !== this._$EC &&
        (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
        (this._$EC = void 0)),
        this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
  }
  (d$1.finalized = !0),
    (d$1.elementProperties = new Map()),
    (d$1.elementStyles = []),
    (d$1.shadowRootOptions = { mode: "open" }),
    null == o$2 || o$2({ ReactiveElement: d$1 }),
    (null !== (s$2 = e$1.reactiveElementVersions) && void 0 !== s$2
      ? s$2
      : (e$1.reactiveElementVersions = [])
    ).push("1.4.2");
  var i = window,
    s$1 = i.trustedTypes,
    e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
    o$1 = "lit$".concat((Math.random() + "").slice(9), "$"),
    n$1 = "?" + o$1,
    l$1 = "<".concat(n$1, ">"),
    h = document,
    r = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return h.createComment(t);
    },
    d = (t) => null === t || ("object" != typeof t && "function" != typeof t),
    u = Array.isArray,
    c = (t) =>
      u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    a = /-->/g,
    f = />/g,
    _ = RegExp(
      ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
      "g",
    ),
    m = /'/g,
    p = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    g = (t) =>
      function (e) {
        for (
          var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1;
          s < r;
          s++
        )
          i[s - 1] = arguments[s];
        return { _$litType$: t, strings: e, values: i };
      },
    y = g(1),
    x = Symbol.for("lit-noChange"),
    b = Symbol.for("lit-nothing"),
    T = new WeakMap(),
    A = h.createTreeWalker(h, 129, null, !1),
    E = (t, r) => {
      for (
        var i,
          s = t.length - 1,
          n = [],
          o = 2 === r ? "<svg>" : "",
          h = v,
          l = 0;
        l < s;
        l++
      ) {
        for (
          var d = t[l], c = void 0, u = void 0, y = -1, g = 0;
          g < d.length && ((h.lastIndex = g), null !== (u = h.exec(d)));

        )
          (g = h.lastIndex),
            h === v
              ? "!--" === u[1]
                ? (h = a)
                : void 0 !== u[1]
                ? (h = f)
                : void 0 !== u[2]
                ? ($.test(u[2]) && (i = RegExp("</" + u[2], "g")), (h = _))
                : void 0 !== u[3] && (h = _)
              : h === _
              ? ">" === u[0]
                ? ((h = null != i ? i : v), (y = -1))
                : void 0 === u[1]
                ? (y = -2)
                : ((y = h.lastIndex - u[2].length),
                  (c = u[1]),
                  (h = void 0 === u[3] ? _ : '"' === u[3] ? p : m))
              : h === p || h === m
              ? (h = _)
              : h === a || h === f
              ? (h = v)
              : ((h = _), (i = void 0));
        var b = h === _ && t[l + 1].startsWith("/>") ? " " : "";
        o +=
          h === v
            ? d + l$1
            : y >= 0
            ? (n.push(c), d.slice(0, y) + "$lit$" + d.slice(y) + o$1 + b)
            : d + o$1 + (-2 === y ? (n.push(void 0), l) : b);
      }
      var E = o + (t[s] || "<?>") + (2 === r ? "</svg>" : "");
      if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return [void 0 !== e ? e.createHTML(E) : E, n];
    };
  class C {
    constructor(t, e) {
      var i,
        { strings: s, _$litType$: a } = t;
      this.parts = [];
      var n = 0,
        o = 0,
        h = s.length - 1,
        l = this.parts,
        [p, f] = E(s, a);
      if (
        ((this.el = C.createElement(p, e)),
        (A.currentNode = this.el.content),
        2 === a)
      ) {
        var d = this.el.content,
          c = d.firstChild;
        c.remove(), d.append(...c.childNodes);
      }
      for (; null !== (i = A.nextNode()) && l.length < h; ) {
        if (1 === i.nodeType) {
          if (i.hasAttributes()) {
            var m = [];
            for (var u of i.getAttributeNames())
              if (u.endsWith("$lit$") || u.startsWith(o$1)) {
                var y = f[o++];
                if ((m.push(u), void 0 !== y)) {
                  var g = i.getAttribute(y.toLowerCase() + "$lit$").split(o$1),
                    _ = /([.?@])?(.*)/.exec(y);
                  l.push({
                    type: 1,
                    index: n,
                    name: _[2],
                    strings: g,
                    ctor:
                      "." === _[1]
                        ? M
                        : "?" === _[1]
                        ? k
                        : "@" === _[1]
                        ? H
                        : S,
                  });
                } else l.push({ type: 6, index: n });
              }
            for (var v of m) i.removeAttribute(v);
          }
          if ($.test(i.tagName)) {
            var b = i.textContent.split(o$1),
              P = b.length - 1;
            if (P > 0) {
              i.textContent = s$1 ? s$1.emptyScript : "";
              for (var x = 0; x < P; x++)
                i.append(b[x], r()),
                  A.nextNode(),
                  l.push({ type: 2, index: ++n });
              i.append(b[P], r());
            }
          }
        } else if (8 === i.nodeType)
          if (i.data === n$1) l.push({ type: 2, index: n });
          else
            for (var T = -1; -1 !== (T = i.data.indexOf(o$1, T + 1)); )
              l.push({ type: 7, index: n }), (T += o$1.length - 1);
        n++;
      }
    }
    static createElement(t, e) {
      var r = h.createElement("template");
      return (r.innerHTML = t), r;
    }
  }
  function P(t, e) {
    var r,
      i,
      s,
      a,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (e === x) return e;
    var h =
        void 0 !== o
          ? null === (r = n._$Co) || void 0 === r
            ? void 0
            : r[o]
          : n._$Cl,
      l = d(e) ? void 0 : e._$litDirective$;
    return (
      (null == h ? void 0 : h.constructor) !== l &&
        (null === (i = null == h ? void 0 : h._$AO) ||
          void 0 === i ||
          i.call(h, !1),
        void 0 === l ? (h = void 0) : (h = new l(t))._$AT(t, n, o),
        void 0 !== o
          ? ((null !== (s = (a = n)._$Co) && void 0 !== s ? s : (a._$Co = []))[
              o
            ] = h)
          : (n._$Cl = h)),
      void 0 !== h && (e = P(t, h._$AS(t, e.values), h, o)),
      e
    );
  }
  class V {
    constructor(t, e) {
      (this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t) {
      var e,
        {
          el: { content: r },
          parts: i,
        } = this._$AD,
        s = (
          null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
            ? e
            : h
        ).importNode(r, !0);
      A.currentNode = s;
      for (var a = A.nextNode(), n = 0, o = 0, l = i[0]; void 0 !== l; ) {
        if (n === l.index) {
          var p = void 0;
          2 === l.type
            ? (p = new N(a, a.nextSibling, this, t))
            : 1 === l.type
            ? (p = new l.ctor(a, l.name, l.strings, this, t))
            : 6 === l.type && (p = new I(a, this, t)),
            this.u.push(p),
            (l = i[++o]);
        }
        n !== (null == l ? void 0 : l.index) && ((a = A.nextNode()), n++);
      }
      return s;
    }
    p(t) {
      var e = 0;
      for (var r of this.u)
        void 0 !== r &&
          (void 0 !== r.strings
            ? (r._$AI(t, r, e), (e += r.strings.length - 2))
            : r._$AI(t[e])),
          e++;
    }
  }
  class N {
    constructor(t, e, r, i) {
      var s;
      (this.type = 2),
        (this._$AH = b),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = e),
        (this._$AM = r),
        (this.options = i),
        (this._$Cm =
          null === (s = null == i ? void 0 : i.isConnected) ||
          void 0 === s ||
          s);
    }
    get _$AU() {
      var t, e;
      return null !==
        (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
        void 0 !== e
        ? e
        : this._$Cm;
    }
    get parentNode() {
      var t = this._$AA.parentNode,
        e = this._$AM;
      return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t) {
      (t = P(
        this,
        t,
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
      )),
        d(t)
          ? t === b || null == t || "" === t
            ? (this._$AH !== b && this._$AR(), (this._$AH = b))
            : t !== this._$AH && t !== x && this.g(t)
          : void 0 !== t._$litType$
          ? this.$(t)
          : void 0 !== t.nodeType
          ? this.T(t)
          : c(t)
          ? this.k(t)
          : this.g(t);
    }
    O(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : this._$AB;
      return this._$AA.parentNode.insertBefore(t, e);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
    }
    g(t) {
      this._$AH !== b && d(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(h.createTextNode(t)),
        (this._$AH = t);
    }
    $(t) {
      var e,
        { values: r, _$litType$: i } = t,
        s =
          "number" == typeof i
            ? this._$AC(t)
            : (void 0 === i.el && (i.el = C.createElement(i.h, this.options)),
              i);
      if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === s)
        this._$AH.p(r);
      else {
        var a = new V(s, this),
          n = a.v(this.options);
        a.p(r), this.T(n), (this._$AH = a);
      }
    }
    _$AC(t) {
      var e = T.get(t.strings);
      return void 0 === e && T.set(t.strings, (e = new C(t))), e;
    }
    k(t) {
      u(this._$AH) || ((this._$AH = []), this._$AR());
      var e,
        i = this._$AH,
        s = 0;
      for (var a of t)
        s === i.length
          ? i.push((e = new N(this.O(r()), this.O(r()), this, this.options)))
          : (e = i[s]),
          e._$AI(a),
          s++;
      s < i.length && (this._$AR(e && e._$AB.nextSibling, s), (i.length = s));
    }
    _$AR() {
      var t,
        e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this._$AA.nextSibling,
        r = arguments.length > 1 ? arguments[1] : void 0;
      for (
        null === (t = this._$AP) || void 0 === t || t.call(this, !1, !0, r);
        e && e !== this._$AB;

      ) {
        var i = e.nextSibling;
        e.remove(), (e = i);
      }
    }
    setConnected(t) {
      var e;
      void 0 === this._$AM &&
        ((this._$Cm = t),
        null === (e = this._$AP) || void 0 === e || e.call(this, t));
    }
  }
  class S {
    constructor(t, e, r, i, s) {
      (this.type = 1),
        (this._$AH = b),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = e),
        (this._$AM = i),
        (this.options = s),
        r.length > 2 || "" !== r[0] || "" !== r[1]
          ? ((this._$AH = Array(r.length - 1).fill(new String())),
            (this.strings = r))
          : (this._$AH = b);
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = this.strings,
        a = !1;
      if (void 0 === s)
        (t = P(this, t, e, 0)),
          (a = !d(t) || (t !== this._$AH && t !== x)) && (this._$AH = t);
      else {
        var n,
          o,
          h = t;
        for (t = s[0], n = 0; n < s.length - 1; n++)
          (o = P(this, h[r + n], e, n)) === x && (o = this._$AH[n]),
            a || (a = !d(o) || o !== this._$AH[n]),
            o === b
              ? (t = b)
              : t !== b && (t += (null != o ? o : "") + s[n + 1]),
            (this._$AH[n] = o);
      }
      a && !i && this.j(t);
    }
    j(t) {
      t === b
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }
  class M extends S {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(t) {
      this.element[this.name] = t === b ? void 0 : t;
    }
  }
  var R = s$1 ? s$1.emptyScript : "";
  class k extends S {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(t) {
      t && t !== b
        ? this.element.setAttribute(this.name, R)
        : this.element.removeAttribute(this.name);
    }
  }
  class H extends S {
    constructor(t, e, r, i, s) {
      super(t, e, r, i, s), (this.type = 5);
    }
    _$AI(t) {
      var e;
      if (
        (t =
          null !==
            (e = P(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this,
              0,
            )) && void 0 !== e
            ? e
            : b) !== x
      ) {
        var r = this._$AH,
          i =
            (t === b && r !== b) ||
            t.capture !== r.capture ||
            t.once !== r.once ||
            t.passive !== r.passive,
          s = t !== b && (r === b || i);
        i && this.element.removeEventListener(this.name, this, r),
          s && this.element.addEventListener(this.name, this, t),
          (this._$AH = t);
      }
    }
    handleEvent(t) {
      var e, r;
      "function" == typeof this._$AH
        ? this._$AH.call(
            null !==
              (r =
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.host) && void 0 !== r
              ? r
              : this.element,
            t,
          )
        : this._$AH.handleEvent(t);
    }
  }
  class I {
    constructor(t, e, r) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = e),
        (this.options = r);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      P(this, t);
    }
  }
  var z = i.litHtmlPolyfillSupport;
  null == z || z(C, N),
    (null !== (t = i.litHtmlVersions) && void 0 !== t
      ? t
      : (i.litHtmlVersions = [])
    ).push("2.4.0");
  var Z = (t, e, i) => {
      var s,
        a,
        n =
          null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s
            ? s
            : e,
        o = n._$litPart$;
      if (void 0 === o) {
        var h =
          null !== (a = null == i ? void 0 : i.renderBefore) && void 0 !== a
            ? a
            : null;
        n._$litPart$ = o = new N(
          e.insertBefore(r(), h),
          h,
          void 0,
          null != i ? i : {},
        );
      }
      return o._$AI(t), o;
    },
    l,
    o;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class s extends d$1 {
    constructor() {
      super(...arguments),
        (this.renderOptions = { host: this }),
        (this._$Do = void 0);
    }
    createRenderRoot() {
      var t,
        e,
        r = super.createRenderRoot();
      return (
        (null !== (t = (e = this.renderOptions).renderBefore) &&
          void 0 !== t) ||
          (e.renderBefore = r.firstChild),
        r
      );
    }
    update(t) {
      var e = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Do = Z(e, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
      return x;
    }
  }
  (s.finalized = !0),
    (s._$litElement$ = !0),
    null === (l = globalThis.litElementHydrateSupport) ||
      void 0 === l ||
      l.call(globalThis, { LitElement: s });
  var n = globalThis.litElementPolyfillSupport;
  null == n || n({ LitElement: s }),
    (null !== (o = globalThis.litElementVersions) && void 0 !== o
      ? o
      : (globalThis.litElementVersions = [])
    ).push("3.2.2");
  var commonjsGlobal =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    lottie = { exports: {} },
    _templateObject$2;
  (function (module, exports) {
    var factory;
    "undefined" != typeof navigator &&
      ((factory = function () {
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function (t) {
            _useWebWorker = !!t;
          },
          getWebWorker = function () {
            return _useWebWorker;
          },
          setLocationHref = function (t) {
            locationHref = t;
          },
          getLocationHref = function () {
            return locationHref;
          };
        function createTag(t) {
          return document.createElement(t);
        }
        function extendPrototype(t, e) {
          var r,
            i,
            s = t.length;
          for (r = 0; r < s; r += 1)
            for (var a in (i = t[r].prototype))
              Object.prototype.hasOwnProperty.call(i, a) &&
                (e.prototype[a] = i[a]);
        }
        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
          function e() {}
          return (e.prototype = t), e;
        }
        var audioControllerFactory = (function () {
            function t(t) {
              (this.audios = []),
                (this.audioFactory = t),
                (this._volume = 1),
                (this._isMuted = !1);
            }
            return (
              (t.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause();
                },
                resume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume();
                },
                setRate: function (t) {
                  var e,
                    r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : window.Howl
                    ? new window.Howl({ src: [t] })
                    : {
                        isPlaying: !1,
                        play: function () {
                          this.isPlaying = !0;
                        },
                        seek: function () {
                          this.isPlaying = !1;
                        },
                        playing: function () {},
                        rate: function () {},
                        setVolume: function () {},
                      };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  (this._volume = t), this._updateVolume();
                },
                mute: function () {
                  (this._isMuted = !0), this._updateVolume();
                },
                unmute: function () {
                  (this._isMuted = !1), this._updateVolume();
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1)
                    this.audios[t].volume(
                      this._volume * (this._isMuted ? 0 : 1),
                    );
                },
              }),
              function () {
                return new t();
              }
            );
          })(),
          createTypedArray = (function () {
            function t(t, e) {
              var r,
                i = 0,
                s = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1;
              }
              for (i = 0; i < e; i += 1) s.push(r);
              return s;
            }
            return "function" == typeof Uint8ClampedArray &&
              "function" == typeof Float32Array
              ? function (e, r) {
                  return "float32" === e
                    ? new Float32Array(r)
                    : "int16" === e
                    ? new Int16Array(r)
                    : "uint8c" === e
                    ? new Uint8ClampedArray(r)
                    : t(e, r);
                }
              : t;
          })();
        function createSizedArray(t) {
          return Array.apply(null, { length: t });
        }
        function _typeof$6(t) {
          return (
            (_typeof$6 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$6(t)
          );
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};
        !(function () {
          var t,
            e = [
              "abs",
              "acos",
              "acosh",
              "asin",
              "asinh",
              "atan",
              "atanh",
              "atan2",
              "ceil",
              "cbrt",
              "expm1",
              "clz32",
              "cos",
              "cosh",
              "exp",
              "floor",
              "fround",
              "hypot",
              "imul",
              "log",
              "log1p",
              "log2",
              "log10",
              "max",
              "min",
              "pow",
              "random",
              "round",
              "sign",
              "sin",
              "sinh",
              "sqrt",
              "tan",
              "tanh",
              "trunc",
              "E",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "PI",
              "SQRT1_2",
              "SQRT2",
            ],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
        })(),
          (BMMath.random = Math.random),
          (BMMath.abs = function (t) {
            if ("object" === _typeof$6(t) && t.length) {
              var e,
                r = createSizedArray(t.length),
                i = t.length;
              for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
              return r;
            }
            return Math.abs(t);
          });
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = 0.5519;
        function styleDiv(t) {
          (t.style.position = "absolute"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.display = "block"),
            (t.style.transformOrigin = "0 0"),
            (t.style.webkitTransformOrigin = "0 0"),
            (t.style.backfaceVisibility = "visible"),
            (t.style.webkitBackfaceVisibility = "visible"),
            (t.style.transformStyle = "preserve-3d"),
            (t.style.webkitTransformStyle = "preserve-3d"),
            (t.style.mozTransformStyle = "preserve-3d");
        }
        function BMEnterFrameEvent(t, e, r, i) {
          (this.type = t),
            (this.currentTime = e),
            (this.totalTime = r),
            (this.direction = i < 0 ? -1 : 1);
        }
        function BMCompleteEvent(t, e) {
          (this.type = t), (this.direction = e < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(t, e, r, i) {
          (this.type = t),
            (this.currentLoop = r),
            (this.totalLoops = e),
            (this.direction = i < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(t, e, r) {
          (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
        }
        function BMDestroyEvent(t, e) {
          (this.type = t), (this.target = e);
        }
        function BMRenderFrameErrorEvent(t, e) {
          (this.type = "renderFrameError"),
            (this.nativeError = t),
            (this.currentTime = e);
        }
        function BMConfigErrorEvent(t) {
          (this.type = "configError"), (this.nativeError = t);
        }
        var createElementID =
            ((_count = 0),
            function () {
              return idPrefix$1 + "__lottie_element_" + (_count += 1);
            }),
          _count;
        function HSVtoRGB(t, e, r) {
          var i, s, a, n, o, h, l, p;
          switch (
            ((h = r * (1 - e)),
            (l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
            (p = r * (1 - (1 - o) * e)),
            n % 6)
          ) {
            case 0:
              (i = r), (s = p), (a = h);
              break;
            case 1:
              (i = l), (s = r), (a = h);
              break;
            case 2:
              (i = h), (s = r), (a = p);
              break;
            case 3:
              (i = h), (s = l), (a = r);
              break;
            case 4:
              (i = p), (s = h), (a = r);
              break;
            case 5:
              (i = r), (s = h), (a = l);
          }
          return [i, s, a];
        }
        function RGBtoHSV(t, e, r) {
          var i,
            s = Math.max(t, e, r),
            a = Math.min(t, e, r),
            n = s - a,
            o = 0 === s ? 0 : n / s,
            h = s / 255;
          switch (s) {
            case a:
              i = 0;
              break;
            case t:
              (i = e - r + n * (e < r ? 6 : 0)), (i /= 6 * n);
              break;
            case e:
              (i = r - t + 2 * n), (i /= 6 * n);
              break;
            case r:
              (i = t - e + 4 * n), (i /= 6 * n);
          }
          return [i, o, h];
        }
        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[1] += e),
            r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[2] += e),
            r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[0] += e / 360),
            r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        var rgbToHex = (function () {
            var t,
              e,
              r = [];
            for (t = 0; t < 256; t += 1)
              (e = t.toString(16)), (r[t] = 1 === e.length ? "0" + e : e);
            return function (t, e, i) {
              return (
                t < 0 && (t = 0),
                e < 0 && (e = 0),
                i < 0 && (i = 0),
                "#" + r[t] + r[e] + r[i]
              );
            };
          })(),
          setSubframeEnabled = function (t) {
            subframeEnabled = !!t;
          },
          getSubframeEnabled = function () {
            return subframeEnabled;
          },
          setExpressionsPlugin = function (t) {
            expressionsPlugin = t;
          },
          getExpressionsPlugin = function () {
            return expressionsPlugin;
          },
          setExpressionInterfaces = function (t) {
            expressionsInterfaces = t;
          },
          getExpressionInterfaces = function () {
            return expressionsInterfaces;
          },
          setDefaultCurveSegments = function (t) {
            defaultCurveSegments = t;
          },
          getDefaultCurveSegments = function () {
            return defaultCurveSegments;
          },
          setIdPrefix = function (t) {
            idPrefix$1 = t;
          };
        function createNS(t) {
          return document.createElementNS(svgNS, t);
        }
        function _typeof$5(t) {
          return (
            (_typeof$5 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$5(t)
          );
        }
        var dataManager = (function () {
            var t,
              e,
              r = 1,
              i = [],
              s = {
                onmessage: function () {},
                postMessage: function (e) {
                  t({ data: e });
                },
              },
              a = {
                postMessage: function (t) {
                  s.onmessage({ data: t });
                },
              };
            function n() {
              e ||
                ((e = (function (e) {
                  if (window.Worker && window.Blob && getWebWorker()) {
                    var r = new Blob(
                        [
                          "var _workerSelf = self; self.onmessage = ",
                          e.toString(),
                        ],
                        { type: "text/javascript" },
                      ),
                      i = URL.createObjectURL(r);
                    return new Worker(i);
                  }
                  return (t = e), s;
                })(function (t) {
                  if (
                    (a.dataManager ||
                      (a.dataManager = (function () {
                        function t(s, a) {
                          var n,
                            o,
                            h,
                            l,
                            p,
                            d,
                            c = s.length;
                          for (o = 0; o < c; o += 1)
                            if ("ks" in (n = s[o]) && !n.completed) {
                              if (((n.completed = !0), n.hasMask)) {
                                var m = n.masksProperties;
                                for (l = m.length, h = 0; h < l; h += 1)
                                  if (m[h].pt.k.i) i(m[h].pt.k);
                                  else
                                    for (
                                      d = m[h].pt.k.length, p = 0;
                                      p < d;
                                      p += 1
                                    )
                                      m[h].pt.k[p].s && i(m[h].pt.k[p].s[0]),
                                        m[h].pt.k[p].e && i(m[h].pt.k[p].e[0]);
                              }
                              0 === n.ty
                                ? ((n.layers = e(n.refId, a)), t(n.layers, a))
                                : 4 === n.ty
                                ? r(n.shapes)
                                : 5 === n.ty && f(n);
                            }
                        }
                        function e(t, e) {
                          var r = (function (t, e) {
                            for (var r = 0, i = e.length; r < i; ) {
                              if (e[r].id === t) return e[r];
                              r += 1;
                            }
                            return null;
                          })(t, e);
                          return r
                            ? r.layers.__used
                              ? JSON.parse(JSON.stringify(r.layers))
                              : ((r.layers.__used = !0), r.layers)
                            : null;
                        }
                        function r(t) {
                          var e, s, a;
                          for (e = t.length - 1; e >= 0; e -= 1)
                            if ("sh" === t[e].ty)
                              if (t[e].ks.k.i) i(t[e].ks.k);
                              else
                                for (a = t[e].ks.k.length, s = 0; s < a; s += 1)
                                  t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]),
                                    t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
                            else "gr" === t[e].ty && r(t[e].it);
                        }
                        function i(t) {
                          var e,
                            r = t.i.length;
                          for (e = 0; e < r; e += 1)
                            (t.i[e][0] += t.v[e][0]),
                              (t.i[e][1] += t.v[e][1]),
                              (t.o[e][0] += t.v[e][0]),
                              (t.o[e][1] += t.v[e][1]);
                        }
                        function s(t, e) {
                          var r = e ? e.split(".") : [100, 100, 100];
                          return (
                            t[0] > r[0] ||
                            (!(r[0] > t[0]) &&
                              (t[1] > r[1] ||
                                (!(r[1] > t[1]) &&
                                  (t[2] > r[2] || (!(r[2] > t[2]) && null)))))
                          );
                        }
                        var a,
                          n = (function () {
                            var t = [4, 4, 14];
                            function e(t) {
                              var e,
                                r,
                                i,
                                s = t.length;
                              for (e = 0; e < s; e += 1)
                                5 === t[e].ty &&
                                  ((i = void 0),
                                  (i = (r = t[e]).t.d),
                                  (r.t.d = { k: [{ s: i, t: 0 }] }));
                            }
                            return function (r) {
                              if (s(t, r.v) && (e(r.layers), r.assets)) {
                                var i,
                                  a = r.assets.length;
                                for (i = 0; i < a; i += 1)
                                  r.assets[i].layers && e(r.assets[i].layers);
                              }
                            };
                          })(),
                          o =
                            ((a = [4, 7, 99]),
                            function (t) {
                              if (t.chars && !s(a, t.v)) {
                                var e,
                                  i = t.chars.length;
                                for (e = 0; e < i; e += 1) {
                                  var n = t.chars[e];
                                  n.data &&
                                    n.data.shapes &&
                                    (r(n.data.shapes),
                                    (n.data.ip = 0),
                                    (n.data.op = 99999),
                                    (n.data.st = 0),
                                    (n.data.sr = 1),
                                    (n.data.ks = {
                                      p: { k: [0, 0], a: 0 },
                                      s: { k: [100, 100], a: 0 },
                                      a: { k: [0, 0], a: 0 },
                                      r: { k: 0, a: 0 },
                                      o: { k: 100, a: 0 },
                                    }),
                                    t.chars[e].t ||
                                      (n.data.shapes.push({ ty: "no" }),
                                      n.data.shapes[0].it.push({
                                        p: { k: [0, 0], a: 0 },
                                        s: { k: [100, 100], a: 0 },
                                        a: { k: [0, 0], a: 0 },
                                        r: { k: 0, a: 0 },
                                        o: { k: 100, a: 0 },
                                        sk: { k: 0, a: 0 },
                                        sa: { k: 0, a: 0 },
                                        ty: "tr",
                                      })));
                                }
                              }
                            }),
                          h = (function () {
                            var t = [5, 7, 15];
                            function e(t) {
                              var e,
                                r,
                                i = t.length;
                              for (e = 0; e < i; e += 1)
                                5 === t[e].ty &&
                                  ((r = void 0),
                                  "number" == typeof (r = t[e].t.p).a &&
                                    (r.a = { a: 0, k: r.a }),
                                  "number" == typeof r.p &&
                                    (r.p = { a: 0, k: r.p }),
                                  "number" == typeof r.r &&
                                    (r.r = { a: 0, k: r.r }));
                            }
                            return function (r) {
                              if (s(t, r.v) && (e(r.layers), r.assets)) {
                                var i,
                                  a = r.assets.length;
                                for (i = 0; i < a; i += 1)
                                  r.assets[i].layers && e(r.assets[i].layers);
                              }
                            };
                          })(),
                          l = (function () {
                            var t = [4, 1, 9];
                            function e(t) {
                              var r,
                                i,
                                s,
                                a = t.length;
                              for (r = 0; r < a; r += 1)
                                if ("gr" === t[r].ty) e(t[r].it);
                                else if ("fl" === t[r].ty || "st" === t[r].ty)
                                  if (t[r].c.k && t[r].c.k[0].i)
                                    for (
                                      s = t[r].c.k.length, i = 0;
                                      i < s;
                                      i += 1
                                    )
                                      t[r].c.k[i].s &&
                                        ((t[r].c.k[i].s[0] /= 255),
                                        (t[r].c.k[i].s[1] /= 255),
                                        (t[r].c.k[i].s[2] /= 255),
                                        (t[r].c.k[i].s[3] /= 255)),
                                        t[r].c.k[i].e &&
                                          ((t[r].c.k[i].e[0] /= 255),
                                          (t[r].c.k[i].e[1] /= 255),
                                          (t[r].c.k[i].e[2] /= 255),
                                          (t[r].c.k[i].e[3] /= 255));
                                  else
                                    (t[r].c.k[0] /= 255),
                                      (t[r].c.k[1] /= 255),
                                      (t[r].c.k[2] /= 255),
                                      (t[r].c.k[3] /= 255);
                            }
                            function r(t) {
                              var r,
                                i = t.length;
                              for (r = 0; r < i; r += 1)
                                4 === t[r].ty && e(t[r].shapes);
                            }
                            return function (e) {
                              if (s(t, e.v) && (r(e.layers), e.assets)) {
                                var i,
                                  a = e.assets.length;
                                for (i = 0; i < a; i += 1)
                                  e.assets[i].layers && r(e.assets[i].layers);
                              }
                            };
                          })(),
                          p = (function () {
                            var t = [4, 4, 18];
                            function e(t) {
                              var r, i, s;
                              for (r = t.length - 1; r >= 0; r -= 1)
                                if ("sh" === t[r].ty)
                                  if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                  else
                                    for (
                                      s = t[r].ks.k.length, i = 0;
                                      i < s;
                                      i += 1
                                    )
                                      t[r].ks.k[i].s &&
                                        (t[r].ks.k[i].s[0].c = t[r].closed),
                                        t[r].ks.k[i].e &&
                                          (t[r].ks.k[i].e[0].c = t[r].closed);
                                else "gr" === t[r].ty && e(t[r].it);
                            }
                            function r(t) {
                              var r,
                                i,
                                s,
                                a,
                                n,
                                o,
                                h = t.length;
                              for (i = 0; i < h; i += 1) {
                                if ((r = t[i]).hasMask) {
                                  var l = r.masksProperties;
                                  for (a = l.length, s = 0; s < a; s += 1)
                                    if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                    else
                                      for (
                                        o = l[s].pt.k.length, n = 0;
                                        n < o;
                                        n += 1
                                      )
                                        l[s].pt.k[n].s &&
                                          (l[s].pt.k[n].s[0].c = l[s].cl),
                                          l[s].pt.k[n].e &&
                                            (l[s].pt.k[n].e[0].c = l[s].cl);
                                }
                                4 === r.ty && e(r.shapes);
                              }
                            }
                            return function (e) {
                              if (s(t, e.v) && (r(e.layers), e.assets)) {
                                var i,
                                  a = e.assets.length;
                                for (i = 0; i < a; i += 1)
                                  e.assets[i].layers && r(e.assets[i].layers);
                              }
                            };
                          })();
                        function f(t) {
                          0 === t.t.a.length && t.t.p;
                        }
                        var d = {
                          completeData: function (r) {
                            r.__complete ||
                              (l(r),
                              n(r),
                              o(r),
                              h(r),
                              p(r),
                              t(r.layers, r.assets),
                              (function (r, i) {
                                if (r) {
                                  var s = 0,
                                    a = r.length;
                                  for (s = 0; s < a; s += 1)
                                    1 === r[s].t &&
                                      ((r[s].data.layers = e(
                                        r[s].data.refId,
                                        i,
                                      )),
                                      t(r[s].data.layers, i));
                                }
                              })(r.chars, r.assets),
                              (r.__complete = !0));
                          },
                        };
                        return (
                          (d.checkColors = l),
                          (d.checkChars = o),
                          (d.checkPathProperties = h),
                          (d.checkShapes = p),
                          (d.completeLayers = t),
                          d
                        );
                      })()),
                    a.assetLoader ||
                      (a.assetLoader = (function () {
                        function t(t) {
                          var e = t.getResponseHeader("content-type");
                          return (e &&
                            "json" === t.responseType &&
                            -1 !== e.indexOf("json")) ||
                            (t.response && "object" === _typeof$5(t.response))
                            ? t.response
                            : t.response && "string" == typeof t.response
                            ? JSON.parse(t.response)
                            : t.responseText
                            ? JSON.parse(t.responseText)
                            : null;
                        }
                        return {
                          load: function (e, r, i, s) {
                            var a,
                              n = new XMLHttpRequest();
                            try {
                              n.responseType = "json";
                            } catch (t) {}
                            n.onreadystatechange = function () {
                              if (4 === n.readyState)
                                if (200 === n.status) (a = t(n)), i(a);
                                else
                                  try {
                                    (a = t(n)), i(a);
                                  } catch (t) {
                                    s && s(t);
                                  }
                            };
                            try {
                              n.open(["G", "E", "T"].join(""), e, !0);
                            } catch (t) {
                              n.open(["G", "E", "T"].join(""), r + "/" + e, !0);
                            }
                            n.send();
                          },
                        };
                      })()),
                    "loadAnimation" === t.data.type)
                  )
                    a.assetLoader.load(
                      t.data.path,
                      t.data.fullPath,
                      function (e) {
                        a.dataManager.completeData(e),
                          a.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                      },
                      function () {
                        a.postMessage({ id: t.data.id, status: "error" });
                      },
                    );
                  else if ("complete" === t.data.type) {
                    var e = t.data.animation;
                    a.dataManager.completeData(e),
                      a.postMessage({
                        id: t.data.id,
                        payload: e,
                        status: "success",
                      });
                  } else
                    "loadData" === t.data.type &&
                      a.assetLoader.load(
                        t.data.path,
                        t.data.fullPath,
                        function (e) {
                          a.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                        },
                        function () {
                          a.postMessage({ id: t.data.id, status: "error" });
                        },
                      );
                })),
                (e.onmessage = function (t) {
                  var e = t.data,
                    r = e.id,
                    s = i[r];
                  (i[r] = null),
                    "success" === e.status
                      ? s.onComplete(e.payload)
                      : s.onError && s.onError();
                }));
            }
            function o(t, e) {
              var s = "processId_" + (r += 1);
              return (i[s] = { onComplete: t, onError: e }), s;
            }
            return {
              loadAnimation: function (t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s,
                });
              },
              loadData: function (t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s,
                });
              },
              completeAnimation: function (t, r, i) {
                n();
                var s = o(r, i);
                e.postMessage({ type: "complete", animation: t, id: s });
              },
            };
          })(),
          ImagePreloader = (function () {
            var t = (function () {
              var t = createTag("canvas");
              (t.width = 1), (t.height = 1);
              var e = t.getContext("2d");
              return (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t;
            })();
            function e() {
              (this.loadedAssets += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function r() {
              (this.loadedFootagesCount += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function i(t, e, r) {
              var i = "";
              if (t.e) i = t.p;
              else if (e) {
                var s = t.p;
                -1 !== s.indexOf("images/") && (s = s.split("/")[1]),
                  (i = e + s);
              } else (i = r), (i += t.u ? t.u : ""), (i += t.p);
              return i;
            }
            function s(t) {
              var e = 0,
                r = setInterval(
                  function () {
                    (t.getBBox().width || e > 500) &&
                      (this._imageLoaded(), clearInterval(r)),
                      (e += 1);
                  }.bind(this),
                  50,
                );
            }
            function a(t) {
              var e = { assetData: t },
                r = i(t, this.assetsPath, this.path);
              return (
                dataManager.loadData(
                  r,
                  function (t) {
                    (e.img = t), this._footageLoaded();
                  }.bind(this),
                  function () {
                    (e.img = {}), this._footageLoaded();
                  }.bind(this),
                ),
                e
              );
            }
            function n() {
              (this._imageLoaded = e.bind(this)),
                (this._footageLoaded = r.bind(this)),
                (this.testImageLoaded = s.bind(this)),
                (this.createFootageData = a.bind(this)),
                (this.assetsPath = ""),
                (this.path = ""),
                (this.totalImages = 0),
                (this.totalFootages = 0),
                (this.loadedAssets = 0),
                (this.loadedFootagesCount = 0),
                (this.imagesLoadedCb = null),
                (this.images = []);
            }
            return (
              (n.prototype = {
                loadAssets: function (t, e) {
                  var r;
                  this.imagesLoadedCb = e;
                  var i = t.length;
                  for (r = 0; r < i; r += 1)
                    t[r].layers ||
                      (t[r].t && "seq" !== t[r].t
                        ? 3 === t[r].t &&
                          ((this.totalFootages += 1),
                          this.images.push(this.createFootageData(t[r])))
                        : ((this.totalImages += 1),
                          this.images.push(this._createImageData(t[r]))));
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || "";
                },
                setPath: function (t) {
                  this.path = t || "";
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  (this.imagesLoadedCb = null), (this.images.length = 0);
                },
                getAsset: function (t) {
                  for (var e = 0, r = this.images.length; e < r; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    s = createTag("img");
                  (s.crossOrigin = "anonymous"),
                    s.addEventListener("load", this._imageLoaded, !1),
                    s.addEventListener(
                      "error",
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1,
                    ),
                    (s.src = r);
                  var a = { img: s, assetData: e };
                  return a;
                },
                createImageData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    s = createNS("image");
                  isSafari
                    ? this.testImageLoaded(s)
                    : s.addEventListener("load", this._imageLoaded, !1),
                    s.addEventListener(
                      "error",
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1,
                    ),
                    s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                    this._elementHelper.append
                      ? this._elementHelper.append(s)
                      : this._elementHelper.appendChild(s);
                  var a = { img: s, assetData: e };
                  return a;
                },
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: function (t, e) {
                  "svg" === t
                    ? ((this._elementHelper = e),
                      (this._createImageData = this.createImageData.bind(this)))
                    : (this._createImageData = this.createImgData.bind(this));
                },
              }),
              n
            );
          })();
        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function (t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e);
          },
          addEventListener: function (t, e) {
            return (
              this._cbs[t] || (this._cbs[t] = []),
              this._cbs[t].push(e),
              function () {
                this.removeEventListener(t, e);
              }.bind(this)
            );
          },
          removeEventListener: function (t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i; )
                  this._cbs[t][r] === e &&
                    (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)),
                    (r += 1);
                this._cbs[t].length || (this._cbs[t] = null);
              }
            } else this._cbs[t] = null;
          },
        };
        var markerParser = (function () {
            function t(t) {
              for (
                var e, r = t.split("\r\n"), i = {}, s = 0, a = 0;
                a < r.length;
                a += 1
              )
                2 === (e = r[a].split(":")).length &&
                  ((i[e[0]] = e[1].trim()), (s += 1));
              if (0 === s) throw new Error();
              return i;
            }
            return function (e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var s = e[i],
                  a = { time: s.tm, duration: s.dr };
                try {
                  a.payload = JSON.parse(e[i].cm);
                } catch (r) {
                  try {
                    a.payload = t(e[i].cm);
                  } catch (t) {
                    a.payload = { name: e[i].cm };
                  }
                }
                r.push(a);
              }
              return r;
            };
          })(),
          ProjectInterface = (function () {
            function t(t) {
              this.compositions.push(t);
            }
            return function () {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                  if (
                    this.compositions[e].data &&
                    this.compositions[e].data.nm === t
                  )
                    return (
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame),
                      this.compositions[e].compInterface
                    );
                  e += 1;
                }
                return null;
              }
              return (
                (e.compositions = []),
                (e.currentFrame = 0),
                (e.registerComposition = t),
                e
              );
            };
          })(),
          renderers = {},
          registerRenderer = function (t, e) {
            renderers[t] = e;
          };
        function getRenderer(t) {
          return renderers[t];
        }
        function _typeof$4(t) {
          return (
            (_typeof$4 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$4(t)
          );
        }
        var AnimationItem = function () {
          (this._cbs = []),
            (this.name = ""),
            (this.path = ""),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.firstFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = createElementID()),
            (this.assetsPath = ""),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.isSubframeEnabled = getSubframeEnabled()),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = ProjectInterface()),
            (this.imagePreloader = new ImagePreloader()),
            (this.audioController = audioControllerFactory()),
            (this.markers = []),
            (this.configAnimation = this.configAnimation.bind(this)),
            (this.onSetupError = this.onSetupError.bind(this)),
            (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
            (this.drawnFrameEvent = new BMEnterFrameEvent(
              "drawnFrame",
              0,
              0,
              0,
            ));
        };
        extendPrototype([BaseEvent], AnimationItem),
          (AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) &&
              (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            (this.renderer = new r(this, t.rendererSettings)),
              this.imagePreloader.setCacheType(
                e,
                this.renderer.globalData.defs,
              ),
              this.renderer.setProjectInterface(this.projectInterface),
              (this.animType = e),
              "" === t.loop ||
              null === t.loop ||
              void 0 === t.loop ||
              !0 === t.loop
                ? (this.loop = !0)
                : !1 === t.loop
                ? (this.loop = !1)
                : (this.loop = parseInt(t.loop, 10)),
              (this.autoplay = !("autoplay" in t) || t.autoplay),
              (this.name = t.name ? t.name : ""),
              (this.autoloadSegments =
                !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ||
                t.autoloadSegments),
              (this.assetsPath = t.assetsPath),
              (this.initialSegment = t.initialSegment),
              t.audioFactory &&
                this.audioController.setAudioFactory(t.audioFactory),
              t.animationData
                ? this.setupAnimation(t.animationData)
                : t.path &&
                  (-1 !== t.path.lastIndexOf("\\")
                    ? (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("\\") + 1,
                      ))
                    : (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("/") + 1,
                      )),
                  (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                  (this.fileName = this.fileName.substr(
                    0,
                    this.fileName.lastIndexOf(".json"),
                  )),
                  dataManager.loadAnimation(
                    t.path,
                    this.configAnimation,
                    this.onSetupError,
                  ));
          }),
          (AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed");
          }),
          (AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation);
          }),
          (AnimationItem.prototype.setData = function (t, e) {
            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
            var r = { wrapper: t, animationData: e },
              i = t.attributes;
            (r.path = i.getNamedItem("data-animation-path")
              ? i.getNamedItem("data-animation-path").value
              : i.getNamedItem("data-bm-path")
              ? i.getNamedItem("data-bm-path").value
              : i.getNamedItem("bm-path")
              ? i.getNamedItem("bm-path").value
              : ""),
              (r.animType = i.getNamedItem("data-anim-type")
                ? i.getNamedItem("data-anim-type").value
                : i.getNamedItem("data-bm-type")
                ? i.getNamedItem("data-bm-type").value
                : i.getNamedItem("bm-type")
                ? i.getNamedItem("bm-type").value
                : i.getNamedItem("data-bm-renderer")
                ? i.getNamedItem("data-bm-renderer").value
                : i.getNamedItem("bm-renderer")
                ? i.getNamedItem("bm-renderer").value
                : "canvas");
            var s = i.getNamedItem("data-anim-loop")
              ? i.getNamedItem("data-anim-loop").value
              : i.getNamedItem("data-bm-loop")
              ? i.getNamedItem("data-bm-loop").value
              : i.getNamedItem("bm-loop")
              ? i.getNamedItem("bm-loop").value
              : "";
            "false" === s
              ? (r.loop = !1)
              : "true" === s
              ? (r.loop = !0)
              : "" !== s && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay")
              ? i.getNamedItem("data-anim-autoplay").value
              : i.getNamedItem("data-bm-autoplay")
              ? i.getNamedItem("data-bm-autoplay").value
              : !i.getNamedItem("bm-autoplay") ||
                i.getNamedItem("bm-autoplay").value;
            (r.autoplay = "false" !== a),
              (r.name = i.getNamedItem("data-name")
                ? i.getNamedItem("data-name").value
                : i.getNamedItem("data-bm-name")
                ? i.getNamedItem("data-bm-name").value
                : i.getNamedItem("bm-name")
                ? i.getNamedItem("bm-name").value
                : ""),
              "false" ===
                (i.getNamedItem("data-anim-prerender")
                  ? i.getNamedItem("data-anim-prerender").value
                  : i.getNamedItem("data-bm-prerender")
                  ? i.getNamedItem("data-bm-prerender").value
                  : i.getNamedItem("bm-prerender")
                  ? i.getNamedItem("bm-prerender").value
                  : "") && (r.prerender = !1),
              this.setParams(r);
          }),
          (AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op &&
              ((this.animationData.op = t.op),
              (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
            var e,
              r,
              i = this.animationData.layers,
              s = i.length,
              a = t.layers,
              n = a.length;
            for (r = 0; r < n; r += 1)
              for (e = 0; e < s; ) {
                if (i[e].id === a[r].id) {
                  i[e] = a[r];
                  break;
                }
                e += 1;
              }
            if (
              ((t.chars || t.fonts) &&
                (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(
                  t.fonts,
                  this.renderer.globalData.defs,
                )),
              t.assets)
            )
              for (s = t.assets.length, e = 0; e < s; e += 1)
                this.animationData.assets.push(t.assets[e]);
            (this.animationData.__complete = !1),
              dataManager.completeAnimation(
                this.animationData,
                this.onSegmentComplete,
              );
          }),
          (AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment();
          }),
          (AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
              return (
                this.trigger("data_ready"),
                void (this.timeCompleted = this.totalFrames)
              );
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            (this.segmentPos += 1),
              dataManager.loadData(
                r,
                this.includeLayers.bind(this),
                function () {
                  this.trigger("data_failed");
                }.bind(this),
              );
          }),
          (AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments ||
              (this.timeCompleted = this.totalFrames),
              this.loadNextSegment();
          }),
          (AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded();
          }),
          (AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(
                this.animationData.assets,
                this.imagesLoaded.bind(this),
              );
          }),
          (AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
              try {
                (this.animationData = t),
                  this.initialSegment
                    ? ((this.totalFrames = Math.floor(
                        this.initialSegment[1] - this.initialSegment[0],
                      )),
                      (this.firstFrame = Math.round(this.initialSegment[0])))
                    : ((this.totalFrames = Math.floor(
                        this.animationData.op - this.animationData.ip,
                      )),
                      (this.firstFrame = Math.round(this.animationData.ip))),
                  this.renderer.configAnimation(t),
                  t.assets || (t.assets = []),
                  (this.assets = this.animationData.assets),
                  (this.frameRate = this.animationData.fr),
                  (this.frameMult = this.animationData.fr / 1e3),
                  this.renderer.searchExtraCompositions(t.assets),
                  (this.markers = markerParser(t.markers || [])),
                  this.trigger("config_ready"),
                  this.preloadImages(),
                  this.loadSegments(),
                  this.updaFrameModifier(),
                  this.waitForFontsLoaded(),
                  this.isPaused && this.audioController.pause();
              } catch (t) {
                this.triggerConfigError(t);
              }
          }),
          (AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }),
          (AnimationItem.prototype.checkLoaded = function () {
            if (
              !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() ||
                "canvas" !== this.renderer.rendererType) &&
              this.imagePreloader.loadedFootages()
            ) {
              this.isLoaded = !0;
              var t = getExpressionsPlugin();
              t && t.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0,
                ),
                this.gotoFrame(),
                this.autoplay && this.play();
            }
          }),
          (AnimationItem.prototype.resize = function (t, e) {
            var r = "number" == typeof t ? t : void 0,
              i = "number" == typeof e ? e : void 0;
            this.renderer.updateContainerSize(r, i);
          }),
          (AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
          }),
          (AnimationItem.prototype.gotoFrame = function () {
            (this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame),
              this.timeCompleted !== this.totalFrames &&
                this.currentFrame > this.timeCompleted &&
                (this.currentFrame = this.timeCompleted),
              this.trigger("enterFrame"),
              this.renderFrame(),
              this.trigger("drawnFrame");
          }),
          (AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          }),
          (AnimationItem.prototype.play = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused &&
                ((this.isPaused = !1),
                this.trigger("_pause"),
                this.audioController.resume(),
                this._idle && ((this._idle = !1), this.trigger("_active"))));
          }),
          (AnimationItem.prototype.pause = function (t) {
            (t && this.name !== t) ||
              (!1 === this.isPaused &&
                ((this.isPaused = !0),
                this.trigger("_play"),
                (this._idle = !0),
                this.trigger("_idle"),
                this.audioController.pause()));
          }),
          (AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused ? this.play() : this.pause());
          }),
          (AnimationItem.prototype.stop = function (t) {
            (t && this.name !== t) ||
              (this.pause(),
              (this.playCount = 0),
              (this._completedLoop = !1),
              this.setCurrentRawFrameValue(0));
          }),
          (AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
              if ((e = this.markers[r]).payload && e.payload.name === t)
                return e;
            return null;
          }),
          (AnimationItem.prototype.goToAndStop = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var s = this.getMarkerData(t);
                s && this.goToAndStop(s.time, !0);
              } else
                e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          }),
          (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var s = this.getMarkerData(t);
                s &&
                  (s.duration
                    ? this.playSegments([s.time, s.time + s.duration], !0)
                    : this.goToAndStop(s.time, !0));
              } else this.goToAndStop(i, e, r);
              this.play();
            }
          }),
          (AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier,
                r = !1;
              e >= this.totalFrames - 1 && this.frameModifier > 0
                ? this.loop && this.playCount !== this.loop
                  ? e >= this.totalFrames
                    ? ((this.playCount += 1),
                      this.checkSegments(e % this.totalFrames) ||
                        (this.setCurrentRawFrameValue(e % this.totalFrames),
                        (this._completedLoop = !0),
                        this.trigger("loopComplete")))
                    : this.setCurrentRawFrameValue(e)
                  : this.checkSegments(
                      e > this.totalFrames ? e % this.totalFrames : 0,
                    ) || ((r = !0), (e = this.totalFrames - 1))
                : e < 0
                ? this.checkSegments(e % this.totalFrames) ||
                  (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                    ? ((r = !0), (e = 0))
                    : (this.setCurrentRawFrameValue(
                        this.totalFrames + (e % this.totalFrames),
                      ),
                      this._completedLoop
                        ? this.trigger("loopComplete")
                        : (this._completedLoop = !0)))
                : this.setCurrentRawFrameValue(e),
                r &&
                  (this.setCurrentRawFrameValue(e),
                  this.pause(),
                  this.trigger("complete"));
            }
          }),
          (AnimationItem.prototype.adjustSegment = function (t, e) {
            (this.playCount = 0),
              t[1] < t[0]
                ? (this.frameModifier > 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(-1)),
                  (this.totalFrames = t[0] - t[1]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[1]),
                  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                : t[1] > t[0] &&
                  (this.frameModifier < 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(1)),
                  (this.totalFrames = t[1] - t[0]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[0]),
                  this.setCurrentRawFrameValue(0.001 + e)),
              this.trigger("segmentStart");
          }),
          (AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            this.isPaused &&
              (this.currentRawFrame + this.firstFrame < t
                ? (r = t)
                : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
              (this.firstFrame = t),
              (this.totalFrames = e - t),
              (this.timeCompleted = this.totalFrames),
              -1 !== r && this.goToAndStop(r, !0);
          }),
          (AnimationItem.prototype.playSegments = function (t, e) {
            if (
              (e && (this.segments.length = 0), "object" === _typeof$4(t[0]))
            ) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) this.segments.push(t[r]);
            } else this.segments.push(t);
            this.segments.length &&
              e &&
              this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play();
          }),
          (AnimationItem.prototype.resetSegments = function (t) {
            (this.segments.length = 0),
              this.segments.push([
                this.animationData.ip,
                this.animationData.op,
              ]),
              t && this.checkSegments(0);
          }),
          (AnimationItem.prototype.checkSegments = function (t) {
            return (
              !!this.segments.length &&
              (this.adjustSegment(this.segments.shift(), t), !0)
            );
          }),
          (AnimationItem.prototype.destroy = function (t) {
            (t && this.name !== t) ||
              !this.renderer ||
              (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger("destroy"),
              (this._cbs = null),
              (this.onEnterFrame = null),
              (this.onLoopComplete = null),
              (this.onComplete = null),
              (this.onSegmentStart = null),
              (this.onDestroy = null),
              (this.renderer = null),
              (this.renderer = null),
              (this.imagePreloader = null),
              (this.projectInterface = null));
          }),
          (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            (this.currentRawFrame = t), this.gotoFrame();
          }),
          (AnimationItem.prototype.setSpeed = function (t) {
            (this.playSpeed = t), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setDirection = function (t) {
            (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
          }),
          (AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
          }),
          (AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
          }),
          (AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
          }),
          (AnimationItem.prototype.updaFrameModifier = function () {
            (this.frameModifier =
              this.frameMult * this.playSpeed * this.playDirection),
              this.audioController.setRate(this.playSpeed * this.playDirection);
          }),
          (AnimationItem.prototype.getPath = function () {
            return this.path;
          }),
          (AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
              var r = t.p;
              -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                (e = this.assetsPath + r);
            } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
            return e;
          }),
          (AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
              if (t === this.assets[e].id) return this.assets[e];
              e += 1;
            }
            return null;
          }),
          (AnimationItem.prototype.hide = function () {
            this.renderer.hide();
          }),
          (AnimationItem.prototype.show = function () {
            this.renderer.show();
          }),
          (AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          }),
          (AnimationItem.prototype.updateDocumentData = function (t, e, r) {
            try {
              this.renderer.getElementByPath(t).updateDocumentData(e, r);
            } catch (t) {}
          }),
          (AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case "enterFrame":
                  this.triggerEvent(
                    t,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier,
                    ),
                  );
                  break;
                case "drawnFrame":
                  (this.drawnFrameEvent.currentTime = this.currentFrame),
                    (this.drawnFrameEvent.totalTime = this.totalFrames),
                    (this.drawnFrameEvent.direction = this.frameModifier),
                    this.triggerEvent(t, this.drawnFrameEvent);
                  break;
                case "loopComplete":
                  this.triggerEvent(
                    t,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult,
                    ),
                  );
                  break;
                case "complete":
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(
                    t,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames,
                    ),
                  );
                  break;
                case "destroy":
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            "enterFrame" === t &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(
                  t,
                  this.currentFrame,
                  this.totalFrames,
                  this.frameMult,
                ),
              ),
              "loopComplete" === t &&
                this.onLoopComplete &&
                this.onLoopComplete.call(
                  this,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult,
                  ),
                ),
              "complete" === t &&
                this.onComplete &&
                this.onComplete.call(
                  this,
                  new BMCompleteEvent(t, this.frameMult),
                ),
              "segmentStart" === t &&
                this.onSegmentStart &&
                this.onSegmentStart.call(
                  this,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames),
                ),
              "destroy" === t &&
                this.onDestroy &&
                this.onDestroy.call(this, new BMDestroyEvent(t, this));
          }),
          (AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e);
          }),
          (AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e);
          });
        var animationManager = (function () {
            var t = {},
              e = [],
              r = 0,
              i = 0,
              s = 0,
              a = !0,
              n = !1;
            function o(t) {
              for (var r = 0, s = t.target; r < i; )
                e[r].animation === s &&
                  (e.splice(r, 1), (r -= 1), (i -= 1), s.isPaused || p()),
                  (r += 1);
            }
            function h(t, r) {
              if (!t) return null;
              for (var s = 0; s < i; ) {
                if (e[s].elem === t && null !== e[s].elem)
                  return e[s].animation;
                s += 1;
              }
              var a = new AnimationItem();
              return f(a, t), a.setData(t, r), a;
            }
            function l() {
              (s += 1), m();
            }
            function p() {
              s -= 1;
            }
            function f(t, r) {
              t.addEventListener("destroy", o),
                t.addEventListener("_active", l),
                t.addEventListener("_idle", p),
                e.push({ elem: r, animation: t }),
                (i += 1);
            }
            function d(t) {
              var o,
                h = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
              (r = t), s && !n ? window.requestAnimationFrame(d) : (a = !0);
            }
            function c(t) {
              (r = t), window.requestAnimationFrame(d);
            }
            function m() {
              !n && s && a && (window.requestAnimationFrame(c), (a = !1));
            }
            return (
              (t.registerAnimation = h),
              (t.loadAnimation = function (t) {
                var e = new AnimationItem();
                return f(e, null), e.setParams(t), e;
              }),
              (t.setSpeed = function (t, r) {
                var s;
                for (s = 0; s < i; s += 1) e[s].animation.setSpeed(t, r);
              }),
              (t.setDirection = function (t, r) {
                var s;
                for (s = 0; s < i; s += 1) e[s].animation.setDirection(t, r);
              }),
              (t.play = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.play(t);
              }),
              (t.pause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.pause(t);
              }),
              (t.stop = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.stop(t);
              }),
              (t.togglePause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.togglePause(t);
              }),
              (t.searchAnimations = function (t, e, r) {
                var i,
                  s = [].concat(
                    [].slice.call(document.getElementsByClassName("lottie")),
                    [].slice.call(document.getElementsByClassName("bodymovin")),
                  ),
                  a = s.length;
                for (i = 0; i < a; i += 1)
                  r && s[i].setAttribute("data-bm-type", r), h(s[i], t);
                if (e && 0 === a) {
                  r || (r = "svg");
                  var n = document.getElementsByTagName("body")[0];
                  n.innerText = "";
                  var o = createTag("div");
                  (o.style.width = "100%"),
                    (o.style.height = "100%"),
                    o.setAttribute("data-bm-type", r),
                    n.appendChild(o),
                    h(o, t);
                }
              }),
              (t.resize = function () {
                var t;
                for (t = 0; t < i; t += 1) e[t].animation.resize();
              }),
              (t.goToAndStop = function (t, r, s) {
                var a;
                for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, s);
              }),
              (t.destroy = function (t) {
                var r;
                for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
              }),
              (t.freeze = function () {
                n = !0;
              }),
              (t.unfreeze = function () {
                (n = !1), m();
              }),
              (t.setVolume = function (t, r) {
                var s;
                for (s = 0; s < i; s += 1) e[s].animation.setVolume(t, r);
              }),
              (t.mute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.mute(t);
              }),
              (t.unmute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.unmute(t);
              }),
              (t.getRegisteredAnimations = function () {
                var t,
                  r = e.length,
                  i = [];
                for (t = 0; t < r; t += 1) i.push(e[t].animation);
                return i;
              }),
              t
            );
          })(),
          BezierFactory = (function () {
            var t = {
                getBezierEasing: function (t, r, i, s, a) {
                  var n =
                    a ||
                    ("bez_" + t + "_" + r + "_" + i + "_" + s).replace(
                      /\./g,
                      "p",
                    );
                  if (e[n]) return e[n];
                  var o = new l([t, r, i, s]);
                  return (e[n] = o), o;
                },
              },
              e = {},
              r = 0.1,
              i = "function" == typeof Float32Array;
            function s(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function a(t, e) {
              return 3 * e - 6 * t;
            }
            function n(t) {
              return 3 * t;
            }
            function o(t, e, r) {
              return ((s(e, r) * t + a(e, r)) * t + n(e)) * t;
            }
            function h(t, e, r) {
              return 3 * s(e, r) * t * t + 2 * a(e, r) * t + n(e);
            }
            function l(t) {
              (this._p = t),
                (this._mSampleValues = i
                  ? new Float32Array(11)
                  : new Array(11)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this));
            }
            return (
              (l.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    r = this._p[1],
                    i = this._p[2],
                    s = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === r && i === s
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : o(this._getTForX(t), r, s)
                  );
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    r = this._p[2],
                    i = this._p[3];
                  (this._precomputed = !0),
                    (t === e && r === i) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)
                    this._mSampleValues[i] = o(i * r, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      i = this._p[2],
                      s = this._mSampleValues,
                      a = 0,
                      n = 1;
                    10 !== n && s[n] <= t;
                    ++n
                  )
                    a += r;
                  var l = a + ((t - s[--n]) / (s[n + 1] - s[n])) * r,
                    p = h(l, e, i);
                  return p >= 0.001
                    ? (function (t, e, r, i) {
                        for (var s = 0; s < 4; ++s) {
                          var a = h(e, r, i);
                          if (0 === a) return e;
                          e -= (o(e, r, i) - t) / a;
                        }
                        return e;
                      })(t, l, e, i)
                    : 0 === p
                    ? l
                    : (function (t, e, r, i, s) {
                        var a,
                          n,
                          h = 0;
                        do {
                          (a = o((n = e + (r - e) / 2), i, s) - t) > 0
                            ? (r = n)
                            : (e = n);
                        } while (Math.abs(a) > 1e-7 && ++h < 10);
                        return n;
                      })(t, a, a + r, e, i);
                },
              }),
              t
            );
          })(),
          pooling = {
            double: function (t) {
              return t.concat(createSizedArray(t.length));
            },
          },
          poolFactory = function (t, e, r) {
            var i = 0,
              s = t,
              a = createSizedArray(s);
            return {
              newElement: function () {
                return i ? a[(i -= 1)] : e();
              },
              release: function (t) {
                i === s && ((a = pooling.double(a)), (s *= 2)),
                  r && r(t),
                  (a[i] = t),
                  (i += 1);
              },
            };
          },
          bezierLengthPool = poolFactory(8, function () {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments()),
            };
          }),
          segmentsLengthPool = poolFactory(
            8,
            function () {
              return { lengths: [], totalLength: 0 };
            },
            function (t) {
              var e,
                r = t.lengths.length;
              for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
              t.lengths.length = 0;
            },
          );
        function bezFunction() {
          var t = Math;
          function e(t, e, r, i, s, a) {
            var n = t * i + e * s + r * a - s * i - a * t - r * e;
            return n > -0.001 && n < 0.001;
          }
          var r = function (t, e, r, i) {
            var s,
              a,
              n,
              o,
              h,
              l,
              p = getDefaultCurveSegments(),
              f = 0,
              d = [],
              c = [],
              m = bezierLengthPool.newElement();
            for (n = r.length, s = 0; s < p; s += 1) {
              for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1)
                (o =
                  bmPow(1 - h, 3) * t[a] +
                  3 * bmPow(1 - h, 2) * h * r[a] +
                  3 * (1 - h) * bmPow(h, 2) * i[a] +
                  bmPow(h, 3) * e[a]),
                  (d[a] = o),
                  null !== c[a] && (l += bmPow(d[a] - c[a], 2)),
                  (c[a] = d[a]);
              l && (f += l = bmSqrt(l)),
                (m.percents[s] = h),
                (m.lengths[s] = f);
            }
            return (m.addedLength = f), m;
          };
          function i(t) {
            (this.segmentLength = 0), (this.points = new Array(t));
          }
          function s(t, e) {
            (this.partialLength = t), (this.point = e);
          }
          var a,
            n =
              ((a = {}),
              function (t, r, n, o) {
                var h = (
                  t[0] +
                  "_" +
                  t[1] +
                  "_" +
                  r[0] +
                  "_" +
                  r[1] +
                  "_" +
                  n[0] +
                  "_" +
                  n[1] +
                  "_" +
                  o[0] +
                  "_" +
                  o[1]
                ).replace(/\./g, "p");
                if (!a[h]) {
                  var l,
                    p,
                    f,
                    d,
                    c,
                    m,
                    u,
                    y = getDefaultCurveSegments(),
                    g = 0,
                    _ = null;
                  2 === t.length &&
                    (t[0] !== r[0] || t[1] !== r[1]) &&
                    e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) &&
                    e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                    (y = 2);
                  var v = new i(y);
                  for (f = n.length, l = 0; l < y; l += 1) {
                    for (
                      u = createSizedArray(f), c = l / (y - 1), m = 0, p = 0;
                      p < f;
                      p += 1
                    )
                      (d =
                        bmPow(1 - c, 3) * t[p] +
                        3 * bmPow(1 - c, 2) * c * (t[p] + n[p]) +
                        3 * (1 - c) * bmPow(c, 2) * (r[p] + o[p]) +
                        bmPow(c, 3) * r[p]),
                        (u[p] = d),
                        null !== _ && (m += bmPow(u[p] - _[p], 2));
                    (g += m = bmSqrt(m)), (v.points[l] = new s(m, u)), (_ = u);
                  }
                  (v.segmentLength = g), (a[h] = v);
                }
                return a[h];
              });
          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              s = r.length,
              a = bmFloor((s - 1) * t),
              n = t * e.addedLength,
              o = 0;
            if (a === s - 1 || 0 === a || n === i[a]) return r[a];
            for (var h = i[a] > n ? -1 : 1, l = !0; l; )
              if (
                (i[a] <= n && i[a + 1] > n
                  ? ((o = (n - i[a]) / (i[a + 1] - i[a])), (l = !1))
                  : (a += h),
                a < 0 || a >= s - 1)
              ) {
                if (a === s - 1) return r[a];
                l = !1;
              }
            return r[a] + (r[a + 1] - r[a]) * o;
          }
          var h = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function (t) {
              var e,
                i = segmentsLengthPool.newElement(),
                s = t.c,
                a = t.v,
                n = t.o,
                o = t.i,
                h = t._length,
                l = i.lengths,
                p = 0;
              for (e = 0; e < h - 1; e += 1)
                (l[e] = r(a[e], a[e + 1], n[e], o[e + 1])),
                  (p += l[e].addedLength);
              return (
                s &&
                  h &&
                  ((l[e] = r(a[e], a[0], n[e], o[0])), (p += l[e].addedLength)),
                (i.totalLength = p),
                i
              );
            },
            getNewSegment: function (e, r, i, s, a, n, l) {
              a < 0 ? (a = 0) : a > 1 && (a = 1);
              var p,
                f = o(a, l),
                d = o((n = n > 1 ? 1 : n), l),
                c = e.length,
                m = 1 - f,
                u = 1 - d,
                y = m * m * m,
                g = f * m * m * 3,
                _ = f * f * m * 3,
                v = f * f * f,
                b = m * m * u,
                E = f * m * u + m * f * u + m * m * d,
                S = f * f * u + m * f * d + f * m * d,
                A = f * f * d,
                P = m * u * u,
                x = f * u * u + m * d * u + m * u * d,
                T = f * d * u + m * d * d + f * u * d,
                w = f * d * d,
                C = u * u * u,
                k = d * u * u + u * d * u + u * u * d,
                D = d * d * u + u * d * d + d * u * d,
                M = d * d * d;
              for (p = 0; p < c; p += 1)
                (h[4 * p] =
                  t.round(1e3 * (y * e[p] + g * i[p] + _ * s[p] + v * r[p])) /
                  1e3),
                  (h[4 * p + 1] =
                    t.round(1e3 * (b * e[p] + E * i[p] + S * s[p] + A * r[p])) /
                    1e3),
                  (h[4 * p + 2] =
                    t.round(1e3 * (P * e[p] + x * i[p] + T * s[p] + w * r[p])) /
                    1e3),
                  (h[4 * p + 3] =
                    t.round(1e3 * (C * e[p] + k * i[p] + D * s[p] + M * r[p])) /
                    1e3);
              return h;
            },
            getPointInSegment: function (e, r, i, s, a, n) {
              var h = o(a, n),
                l = 1 - h;
              return [
                t.round(
                  1e3 *
                    (l * l * l * e[0] +
                      (h * l * l + l * h * l + l * l * h) * i[0] +
                      (h * h * l + l * h * h + h * l * h) * s[0] +
                      h * h * h * r[0]),
                ) / 1e3,
                t.round(
                  1e3 *
                    (l * l * l * e[1] +
                      (h * l * l + l * h * l + l * l * h) * i[1] +
                      (h * h * l + l * h * h + h * l * h) * s[1] +
                      h * h * h * r[1]),
                ) / 1e3,
              ];
            },
            buildBezierData: n,
            pointOnLine2D: e,
            pointOnLine3D: function (r, i, s, a, n, o, h, l, p) {
              if (0 === s && 0 === o && 0 === p) return e(r, i, a, n, h, l);
              var f,
                d = t.sqrt(t.pow(a - r, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)),
                c = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - s, 2)),
                m = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
              return (
                (f =
                  d > c
                    ? d > m
                      ? d - c - m
                      : m - c - d
                    : m > c
                    ? m - c - d
                    : c - d - m) > -1e-4 && f < 1e-4
              );
            },
          };
        }
        var bez = bezFunction(),
          PropertyFactory = (function () {
            var t = initialDefaultFrame,
              e = Math.abs;
            function r(t, e) {
              var r,
                s = this.offsetTime;
              "multidimensional" === this.propType &&
                (r = createTypedArray("float32", this.pv.length));
              for (
                var a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  d,
                  c,
                  m = e.lastIndex,
                  u = m,
                  y = this.keyframes.length - 1,
                  g = !0;
                g;

              ) {
                if (
                  ((a = this.keyframes[u]),
                  (n = this.keyframes[u + 1]),
                  u === y - 1 && t >= n.t - s)
                ) {
                  a.h && (a = n), (m = 0);
                  break;
                }
                if (n.t - s > t) {
                  m = u;
                  break;
                }
                u < y - 1 ? (u += 1) : ((m = 0), (g = !1));
              }
              o = this.keyframesMetadata[u] || {};
              var _,
                v,
                b,
                E,
                S,
                A,
                P,
                x,
                T,
                w,
                C = n.t - s,
                k = a.t - s;
              if (a.to) {
                o.bezierData ||
                  (o.bezierData = bez.buildBezierData(
                    a.s,
                    n.s || a.e,
                    a.to,
                    a.ti,
                  ));
                var D = o.bezierData;
                if (t >= C || t < k) {
                  var M = t >= C ? D.points.length - 1 : 0;
                  for (l = D.points[M].point.length, h = 0; h < l; h += 1)
                    r[h] = D.points[M].point[h];
                } else {
                  o.__fnct
                    ? (c = o.__fnct)
                    : ((c = BezierFactory.getBezierEasing(
                        a.o.x,
                        a.o.y,
                        a.i.x,
                        a.i.y,
                        a.n,
                      ).get),
                      (o.__fnct = c)),
                    (p = c((t - k) / (C - k)));
                  var I,
                    F = D.segmentLength * p,
                    R =
                      e.lastFrame < t && e._lastKeyframeIndex === u
                        ? e._lastAddedLength
                        : 0;
                  for (
                    d =
                      e.lastFrame < t && e._lastKeyframeIndex === u
                        ? e._lastPoint
                        : 0,
                      g = !0,
                      f = D.points.length;
                    g;

                  ) {
                    if (
                      ((R += D.points[d].partialLength),
                      0 === F || 0 === p || d === D.points.length - 1)
                    ) {
                      for (l = D.points[d].point.length, h = 0; h < l; h += 1)
                        r[h] = D.points[d].point[h];
                      break;
                    }
                    if (F >= R && F < R + D.points[d + 1].partialLength) {
                      for (
                        I = (F - R) / D.points[d + 1].partialLength,
                          l = D.points[d].point.length,
                          h = 0;
                        h < l;
                        h += 1
                      )
                        r[h] =
                          D.points[d].point[h] +
                          (D.points[d + 1].point[h] - D.points[d].point[h]) * I;
                      break;
                    }
                    d < f - 1 ? (d += 1) : (g = !1);
                  }
                  (e._lastPoint = d),
                    (e._lastAddedLength = R - D.points[d].partialLength),
                    (e._lastKeyframeIndex = u);
                }
              } else {
                var B, L, O, $, N;
                if (((y = a.s.length), (_ = n.s || a.e), this.sh && 1 !== a.h))
                  if (t >= C) (r[0] = _[0]), (r[1] = _[1]), (r[2] = _[2]);
                  else if (t <= k)
                    (r[0] = a.s[0]), (r[1] = a.s[1]), (r[2] = a.s[2]);
                  else {
                    var z = i(a.s),
                      V = i(_);
                    (v = r),
                      (b = (function (t, e, r) {
                        var i,
                          s,
                          a,
                          n,
                          o,
                          h = [],
                          l = t[0],
                          p = t[1],
                          f = t[2],
                          d = t[3],
                          c = e[0],
                          m = e[1],
                          u = e[2],
                          y = e[3];
                        return (
                          (s = l * c + p * m + f * u + d * y) < 0 &&
                            ((s = -s), (c = -c), (m = -m), (u = -u), (y = -y)),
                          1 - s > 1e-6
                            ? ((i = Math.acos(s)),
                              (a = Math.sin(i)),
                              (n = Math.sin((1 - r) * i) / a),
                              (o = Math.sin(r * i) / a))
                            : ((n = 1 - r), (o = r)),
                          (h[0] = n * l + o * c),
                          (h[1] = n * p + o * m),
                          (h[2] = n * f + o * u),
                          (h[3] = n * d + o * y),
                          h
                        );
                      })(z, V, (t - k) / (C - k))),
                      (E = b[0]),
                      (S = b[1]),
                      (A = b[2]),
                      (P = b[3]),
                      (x = Math.atan2(
                        2 * S * P - 2 * E * A,
                        1 - 2 * S * S - 2 * A * A,
                      )),
                      (T = Math.asin(2 * E * S + 2 * A * P)),
                      (w = Math.atan2(
                        2 * E * P - 2 * S * A,
                        1 - 2 * E * E - 2 * A * A,
                      )),
                      (v[0] = x / degToRads),
                      (v[1] = T / degToRads),
                      (v[2] = w / degToRads);
                  }
                else
                  for (u = 0; u < y; u += 1)
                    1 !== a.h &&
                      (t >= C
                        ? (p = 1)
                        : t < k
                        ? (p = 0)
                        : (a.o.x.constructor === Array
                            ? (o.__fnct || (o.__fnct = []),
                              o.__fnct[u]
                                ? (c = o.__fnct[u])
                                : ((B =
                                    void 0 === a.o.x[u] ? a.o.x[0] : a.o.x[u]),
                                  (L =
                                    void 0 === a.o.y[u] ? a.o.y[0] : a.o.y[u]),
                                  (O =
                                    void 0 === a.i.x[u] ? a.i.x[0] : a.i.x[u]),
                                  ($ =
                                    void 0 === a.i.y[u] ? a.i.y[0] : a.i.y[u]),
                                  (c = BezierFactory.getBezierEasing(
                                    B,
                                    L,
                                    O,
                                    $,
                                  ).get),
                                  (o.__fnct[u] = c)))
                            : o.__fnct
                            ? (c = o.__fnct)
                            : ((B = a.o.x),
                              (L = a.o.y),
                              (O = a.i.x),
                              ($ = a.i.y),
                              (c = BezierFactory.getBezierEasing(
                                B,
                                L,
                                O,
                                $,
                              ).get),
                              (a.keyframeMetadata = c)),
                          (p = c((t - k) / (C - k))))),
                      (_ = n.s || a.e),
                      (N = 1 === a.h ? a.s[u] : a.s[u] + (_[u] - a.s[u]) * p),
                      "multidimensional" === this.propType
                        ? (r[u] = N)
                        : (r = N);
              }
              return (e.lastIndex = m), r;
            }
            function i(t) {
              var e = t[0] * degToRads,
                r = t[1] * degToRads,
                i = t[2] * degToRads,
                s = Math.cos(e / 2),
                a = Math.cos(r / 2),
                n = Math.cos(i / 2),
                o = Math.sin(e / 2),
                h = Math.sin(r / 2),
                l = Math.sin(i / 2);
              return [
                o * h * n + s * a * l,
                o * a * n + s * h * l,
                s * h * n - o * a * l,
                s * a * n - o * h * l,
              ];
            }
            function s() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (
                !(
                  e === this._caching.lastFrame ||
                  (this._caching.lastFrame !== t &&
                    ((this._caching.lastFrame >= i && e >= i) ||
                      (this._caching.lastFrame < r && e < r)))
                )
              ) {
                this._caching.lastFrame >= e &&
                  ((this._caching._lastKeyframeIndex = -1),
                  (this._caching.lastIndex = 0));
                var s = this.interpolateValue(e, this._caching);
                this.pv = s;
              }
              return (this._caching.lastFrame = e), this.pv;
            }
            function a(t) {
              var r;
              if ("unidimensional" === this.propType)
                (r = t * this.mult),
                  e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0));
              else
                for (var i = 0, s = this.v.length; i < s; )
                  (r = t[i] * this.mult),
                    e(this.v[i] - r) > 1e-5 &&
                      ((this.v[i] = r), (this._mdf = !0)),
                    (i += 1);
            }
            function n() {
              if (
                this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length
              )
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t;
                  (this.lock = !0), (this._mdf = this._isFirstFrame);
                  var e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                  this.setVValue(r),
                    (this._isFirstFrame = !1),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
            }
            function o(t) {
              this.effectsSequence.push(t),
                this.container.addDynamicProperty(this);
            }
            function h(t, e, r, i) {
              (this.propType = "unidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this.v = r ? e.k * r : e.k),
                (this.pv = e.k),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.vel = 0),
                (this.effectsSequence = []),
                (this._isFirstFrame = !0),
                (this.getValue = n),
                (this.setVValue = a),
                (this.addEffect = o);
            }
            function l(t, e, r, i) {
              var s;
              (this.propType = "multidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.frameId = -1);
              var h = e.k.length;
              for (
                this.v = createTypedArray("float32", h),
                  this.pv = createTypedArray("float32", h),
                  this.vel = createTypedArray("float32", h),
                  s = 0;
                s < h;
                s += 1
              )
                (this.v[s] = e.k[s] * this.mult), (this.pv[s] = e.k[s]);
              (this._isFirstFrame = !0),
                (this.effectsSequence = []),
                (this.getValue = n),
                (this.setVValue = a),
                (this.addEffect = o);
            }
            function p(e, i, h, l) {
              (this.propType = "unidimensional"),
                (this.keyframes = i.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: 0,
                  _lastKeyframeIndex: -1,
                }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = i),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.v = t),
                (this.pv = t),
                (this._isFirstFrame = !0),
                (this.getValue = n),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.effectsSequence = [s.bind(this)]),
                (this.addEffect = o);
            }
            function f(e, i, h, l) {
              var p;
              this.propType = "multidimensional";
              var f,
                d,
                c,
                m,
                u = i.k.length;
              for (p = 0; p < u - 1; p += 1)
                i.k[p].to &&
                  i.k[p].s &&
                  i.k[p + 1] &&
                  i.k[p + 1].s &&
                  ((f = i.k[p].s),
                  (d = i.k[p + 1].s),
                  (c = i.k[p].to),
                  (m = i.k[p].ti),
                  ((2 === f.length &&
                    (f[0] !== d[0] || f[1] !== d[1]) &&
                    bez.pointOnLine2D(
                      f[0],
                      f[1],
                      d[0],
                      d[1],
                      f[0] + c[0],
                      f[1] + c[1],
                    ) &&
                    bez.pointOnLine2D(
                      f[0],
                      f[1],
                      d[0],
                      d[1],
                      d[0] + m[0],
                      d[1] + m[1],
                    )) ||
                    (3 === f.length &&
                      (f[0] !== d[0] || f[1] !== d[1] || f[2] !== d[2]) &&
                      bez.pointOnLine3D(
                        f[0],
                        f[1],
                        f[2],
                        d[0],
                        d[1],
                        d[2],
                        f[0] + c[0],
                        f[1] + c[1],
                        f[2] + c[2],
                      ) &&
                      bez.pointOnLine3D(
                        f[0],
                        f[1],
                        f[2],
                        d[0],
                        d[1],
                        d[2],
                        d[0] + m[0],
                        d[1] + m[1],
                        d[2] + m[2],
                      ))) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)),
                  f[0] === d[0] &&
                    f[1] === d[1] &&
                    0 === c[0] &&
                    0 === c[1] &&
                    0 === m[0] &&
                    0 === m[1] &&
                    (2 === f.length ||
                      (f[2] === d[2] && 0 === c[2] && 0 === m[2])) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)));
              (this.effectsSequence = [s.bind(this)]),
                (this.data = i),
                (this.keyframes = i.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.k = !0),
                (this.kf = !0),
                (this._isFirstFrame = !0),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.getValue = n),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.frameId = -1);
              var y = i.k[0].s.length;
              for (
                this.v = createTypedArray("float32", y),
                  this.pv = createTypedArray("float32", y),
                  p = 0;
                p < y;
                p += 1
              )
                (this.v[p] = t), (this.pv[p] = t);
              (this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: createTypedArray("float32", y),
              }),
                (this.addEffect = o);
            }
            var d = {
              getProp: function (t, e, r, i, s) {
                var a;
                if (e.k.length)
                  if ("number" == typeof e.k[0]) a = new l(t, e, i, s);
                  else
                    switch (r) {
                      case 0:
                        a = new p(t, e, i, s);
                        break;
                      case 1:
                        a = new f(t, e, i, s);
                    }
                else a = new h(t, e, i, s);
                return a.effectsSequence.length && s.addDynamicProperty(a), a;
              },
            };
            return d;
          })();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              (this.dynamicProperties.push(t),
              this.container.addDynamicProperty(this),
              (this._isAnimated = !0));
          },
          iterateDynamicProperties: function () {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue(),
                this.dynamicProperties[t]._mdf && (this._mdf = !0);
          },
          initDynamicPropertyContainer: function (t) {
            (this.container = t),
              (this.dynamicProperties = []),
              (this._mdf = !1),
              (this._isAnimated = !1);
          },
        };
        var pointPool = poolFactory(8, function () {
          return createTypedArray("float32", 2);
        });
        function ShapePath() {
          (this.c = !1),
            (this._length = 0),
            (this._maxLength = 8),
            (this.v = createSizedArray(this._maxLength)),
            (this.o = createSizedArray(this._maxLength)),
            (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (t, e) {
          (this.c = t), this.setLength(e);
          for (var r = 0; r < e; )
            (this.v[r] = pointPool.newElement()),
              (this.o[r] = pointPool.newElement()),
              (this.i[r] = pointPool.newElement()),
              (r += 1);
        }),
          (ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t; ) this.doubleArrayLength();
            this._length = t;
          }),
          (ShapePath.prototype.doubleArrayLength = function () {
            (this.v = this.v.concat(createSizedArray(this._maxLength))),
              (this.i = this.i.concat(createSizedArray(this._maxLength))),
              (this.o = this.o.concat(createSizedArray(this._maxLength))),
              (this._maxLength *= 2);
          }),
          (ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
            var a;
            switch (
              ((this._length = Math.max(this._length, i + 1)),
              this._length >= this._maxLength && this.doubleArrayLength(),
              r)
            ) {
              case "v":
                a = this.v;
                break;
              case "i":
                a = this.i;
                break;
              case "o":
                a = this.o;
                break;
              default:
                a = [];
            }
            (!a[i] || (a[i] && !s)) && (a[i] = pointPool.newElement()),
              (a[i][0] = t),
              (a[i][1] = e);
          }),
          (ShapePath.prototype.setTripleAt = function (t, e, r, i, s, a, n, o) {
            this.setXYAt(t, e, "v", n, o),
              this.setXYAt(r, i, "o", n, o),
              this.setXYAt(s, a, "i", n, o);
          }),
          (ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
              r = this.o,
              i = this.i,
              s = 0;
            this.c &&
              (t.setTripleAt(
                e[0][0],
                e[0][1],
                i[0][0],
                i[0][1],
                r[0][0],
                r[0][1],
                0,
                !1,
              ),
              (s = 1));
            var a,
              n = this._length - 1,
              o = this._length;
            for (a = s; a < o; a += 1)
              t.setTripleAt(
                e[n][0],
                e[n][1],
                i[n][0],
                i[n][1],
                r[n][0],
                r[n][1],
                a,
                !1,
              ),
                (n -= 1);
            return t;
          }),
          (ShapePath.prototype.length = function () {
            return this._length;
          });
        var shapePool =
            ((factory = poolFactory(
              4,
              function () {
                return new ShapePath();
              },
              function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1)
                  pointPool.release(t.v[e]),
                    pointPool.release(t.i[e]),
                    pointPool.release(t.o[e]),
                    (t.v[e] = null),
                    (t.i[e] = null),
                    (t.o[e] = null);
                (t._length = 0), (t.c = !1);
              },
            )),
            (factory.clone = function (t) {
              var e,
                r = factory.newElement(),
                i = void 0 === t._length ? t.v.length : t._length;
              for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
                r.setTripleAt(
                  t.v[e][0],
                  t.v[e][1],
                  t.o[e][0],
                  t.o[e][1],
                  t.i[e][0],
                  t.i[e][1],
                  e,
                );
              return r;
            }),
            factory),
          factory;
        function ShapeCollection() {
          (this._length = 0),
            (this._maxLength = 4),
            (this.shapes = createSizedArray(this._maxLength));
        }
        (ShapeCollection.prototype.addShape = function (t) {
          this._length === this._maxLength &&
            ((this.shapes = this.shapes.concat(
              createSizedArray(this._maxLength),
            )),
            (this._maxLength *= 2)),
            (this.shapes[this._length] = t),
            (this._length += 1);
        }),
          (ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1)
              shapePool.release(this.shapes[t]);
            this._length = 0;
          });
        var shapeCollectionPool =
            ((ob = {
              newShapeCollection: function () {
                return _length ? pool[(_length -= 1)] : new ShapeCollection();
              },
              release: function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                (t._length = 0),
                  _length === _maxLength &&
                    ((pool = pooling.double(pool)), (_maxLength *= 2)),
                  (pool[_length] = t),
                  (_length += 1);
              },
            }),
            (_length = 0),
            (_maxLength = 4),
            (pool = createSizedArray(_maxLength)),
            ob),
          ob,
          _length,
          _maxLength,
          pool,
          ShapePropertyFactory = (function () {
            var t = -999999;
            function e(t, e, r) {
              var i,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                f,
                d = r.lastIndex,
                c = this.keyframes;
              if (t < c[0].t - this.offsetTime)
                (i = c[0].s[0]), (a = !0), (d = 0);
              else if (t >= c[c.length - 1].t - this.offsetTime)
                (i = c[c.length - 1].s
                  ? c[c.length - 1].s[0]
                  : c[c.length - 2].e[0]),
                  (a = !0);
              else {
                for (
                  var m, u, y, g = d, _ = c.length - 1, v = !0;
                  v && ((m = c[g]), !((u = c[g + 1]).t - this.offsetTime > t));

                )
                  g < _ - 1 ? (g += 1) : (v = !1);
                if (
                  ((y = this.keyframesMetadata[g] || {}),
                  (d = g),
                  !(a = 1 === m.h))
                ) {
                  if (t >= u.t - this.offsetTime) p = 1;
                  else if (t < m.t - this.offsetTime) p = 0;
                  else {
                    var b;
                    y.__fnct
                      ? (b = y.__fnct)
                      : ((b = BezierFactory.getBezierEasing(
                          m.o.x,
                          m.o.y,
                          m.i.x,
                          m.i.y,
                        ).get),
                        (y.__fnct = b)),
                      (p = b(
                        (t - (m.t - this.offsetTime)) /
                          (u.t - this.offsetTime - (m.t - this.offsetTime)),
                      ));
                  }
                  s = u.s ? u.s[0] : m.e[0];
                }
                i = m.s[0];
              }
              for (
                h = e._length, l = i.i[0].length, r.lastIndex = d, n = 0;
                n < h;
                n += 1
              )
                for (o = 0; o < l; o += 1)
                  (f = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p),
                    (e.i[n][o] = f),
                    (f = a
                      ? i.o[n][o]
                      : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p),
                    (e.o[n][o] = f),
                    (f = a
                      ? i.v[n][o]
                      : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p),
                    (e.v[n][o] = f);
            }
            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                s = this._caching.lastFrame;
              return (
                (s !== t && ((s < r && e < r) || (s > i && e > i))) ||
                  ((this._caching.lastIndex =
                    s < e ? this._caching.lastIndex : 0),
                  this.interpolateShape(e, this.pv, this._caching)),
                (this._caching.lastFrame = e),
                this.pv
              );
            }
            function i() {
              this.paths = this.localShapeCollection;
            }
            function s(t) {
              (function (t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r,
                  i = t._length;
                for (r = 0; r < i; r += 1)
                  if (
                    t.v[r][0] !== e.v[r][0] ||
                    t.v[r][1] !== e.v[r][1] ||
                    t.o[r][0] !== e.o[r][0] ||
                    t.o[r][1] !== e.o[r][1] ||
                    t.i[r][0] !== e.i[r][0] ||
                    t.i[r][1] !== e.i[r][1]
                  )
                    return !1;
                return !0;
              })(this.v, t) ||
                ((this.v = shapePool.clone(t)),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                (this._mdf = !0),
                (this.paths = this.localShapeCollection));
            }
            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    (this.lock = !0),
                      (this._mdf = !1),
                      (t = this.kf
                        ? this.pv
                        : this.data.ks
                        ? this.data.ks.k
                        : this.data.pt.k);
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                else this._mdf = !1;
            }
            function n(t, e, r) {
              (this.propType = "shape"),
                (this.comp = t.comp),
                (this.container = t),
                (this.elem = t),
                (this.data = e),
                (this.k = !1),
                (this.kf = !1),
                (this._mdf = !1);
              var s = 3 === r ? e.pt.k : e.ks.k;
              (this.v = shapePool.clone(s)),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.reset = i),
                (this.effectsSequence = []);
            }
            function o(t) {
              this.effectsSequence.push(t),
                this.container.addDynamicProperty(this);
            }
            function h(e, s, a) {
              (this.propType = "shape"),
                (this.comp = e.comp),
                (this.elem = e),
                (this.container = e),
                (this.offsetTime = e.data.st),
                (this.keyframes = 3 === a ? s.pt.k : s.ks.k),
                (this.keyframesMetadata = []),
                (this.k = !0),
                (this.kf = !0);
              var n = this.keyframes[0].s[0].i.length;
              (this.v = shapePool.newElement()),
                this.v.setPathData(this.keyframes[0].s[0].c, n),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.lastFrame = t),
                (this.reset = i),
                (this._caching = { lastFrame: t, lastIndex: 0 }),
                (this.effectsSequence = [r.bind(this)]);
            }
            (n.prototype.interpolateShape = e),
              (n.prototype.getValue = a),
              (n.prototype.setVValue = s),
              (n.prototype.addEffect = o),
              (h.prototype.getValue = a),
              (h.prototype.interpolateShape = e),
              (h.prototype.setVValue = s),
              (h.prototype.addEffect = o);
            var l = (function () {
                var t = roundCorner;
                function e(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = e.d),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertEllToPath());
                }
                return (
                  (e.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var e = this.p.v[0],
                        r = this.p.v[1],
                        i = this.s.v[0] / 2,
                        s = this.s.v[1] / 2,
                        a = 3 !== this.d,
                        n = this.v;
                      (n.v[0][0] = e),
                        (n.v[0][1] = r - s),
                        (n.v[1][0] = a ? e + i : e - i),
                        (n.v[1][1] = r),
                        (n.v[2][0] = e),
                        (n.v[2][1] = r + s),
                        (n.v[3][0] = a ? e - i : e + i),
                        (n.v[3][1] = r),
                        (n.i[0][0] = a ? e - i * t : e + i * t),
                        (n.i[0][1] = r - s),
                        (n.i[1][0] = a ? e + i : e - i),
                        (n.i[1][1] = r - s * t),
                        (n.i[2][0] = a ? e + i * t : e - i * t),
                        (n.i[2][1] = r + s),
                        (n.i[3][0] = a ? e - i : e + i),
                        (n.i[3][1] = r + s * t),
                        (n.o[0][0] = a ? e + i * t : e - i * t),
                        (n.o[0][1] = r - s),
                        (n.o[1][0] = a ? e + i : e - i),
                        (n.o[1][1] = r + s * t),
                        (n.o[2][0] = a ? e - i * t : e + i * t),
                        (n.o[2][1] = r + s),
                        (n.o[3][0] = a ? e - i : e + i),
                        (n.o[3][1] = r - s * t);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], e),
                  e
                );
              })(),
              p = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.data = e),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy
                      ? ((this.ir = PropertyFactory.getProp(
                          t,
                          e.ir,
                          0,
                          0,
                          this,
                        )),
                        (this.is = PropertyFactory.getProp(
                          t,
                          e.is,
                          0,
                          0.01,
                          this,
                        )),
                        (this.convertToPath = this.convertStarToPath))
                      : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(
                      t,
                      e.r,
                      0,
                      degToRads,
                      this,
                    )),
                    (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                    (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertToPath());
                }
                return (
                  (t.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var t,
                        e,
                        r,
                        i,
                        s = 2 * Math.floor(this.pt.v),
                        a = (2 * Math.PI) / s,
                        n = !0,
                        o = this.or.v,
                        h = this.ir.v,
                        l = this.os.v,
                        p = this.is.v,
                        f = (2 * Math.PI * o) / (2 * s),
                        d = (2 * Math.PI * h) / (2 * s),
                        c = -Math.PI / 2;
                      c += this.r.v;
                      var m = 3 === this.data.d ? -1 : 1;
                      for (this.v._length = 0, t = 0; t < s; t += 1) {
                        (r = n ? l : p), (i = n ? f : d);
                        var u = (e = n ? o : h) * Math.cos(c),
                          y = e * Math.sin(c),
                          g =
                            0 === u && 0 === y
                              ? 0
                              : y / Math.sqrt(u * u + y * y),
                          _ =
                            0 === u && 0 === y
                              ? 0
                              : -u / Math.sqrt(u * u + y * y);
                        (u += +this.p.v[0]),
                          (y += +this.p.v[1]),
                          this.v.setTripleAt(
                            u,
                            y,
                            u - g * i * r * m,
                            y - _ * i * r * m,
                            u + g * i * r * m,
                            y + _ * i * r * m,
                            t,
                            !0,
                          ),
                          (n = !n),
                          (c += a * m);
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        r = (2 * Math.PI) / e,
                        i = this.or.v,
                        s = this.os.v,
                        a = (2 * Math.PI * i) / (4 * e),
                        n = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      for (
                        n += this.r.v, this.v._length = 0, t = 0;
                        t < e;
                        t += 1
                      ) {
                        var h = i * Math.cos(n),
                          l = i * Math.sin(n),
                          p =
                            0 === h && 0 === l
                              ? 0
                              : l / Math.sqrt(h * h + l * l),
                          f =
                            0 === h && 0 === l
                              ? 0
                              : -h / Math.sqrt(h * h + l * l);
                        (h += +this.p.v[0]),
                          (l += +this.p.v[1]),
                          this.v.setTripleAt(
                            h,
                            l,
                            h - p * a * s * o,
                            l - f * a * s * o,
                            h + p * a * s * o,
                            l + f * a * s * o,
                            t,
                            !0,
                          ),
                          (n += r * o);
                      }
                      (this.paths.length = 0), (this.paths[0] = this.v);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              f = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertRectToPath());
                }
                return (
                  (t.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        s = bmMin(r, i, this.r.v),
                        a = s * (1 - roundCorner);
                      (this.v._length = 0),
                        2 === this.d || 1 === this.d
                          ? (this.v.setTripleAt(
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + a,
                              0,
                              !0,
                            ),
                            this.v.setTripleAt(
                              t + r,
                              e + i - s,
                              t + r,
                              e + i - a,
                              t + r,
                              e + i - s,
                              1,
                              !0,
                            ),
                            0 !== s
                              ? (this.v.setTripleAt(
                                  t + r - s,
                                  e + i,
                                  t + r - s,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r + s,
                                  e + i,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - a,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + s,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e - i,
                                  t - r + s,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r - s,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  t + r - s,
                                  e - i,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r,
                                  e + i,
                                  2,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i,
                                  3,
                                )))
                          : (this.v.setTripleAt(
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + s,
                              0,
                              !0,
                            ),
                            0 !== s
                              ? (this.v.setTripleAt(
                                  t + r - s,
                                  e - i,
                                  t + r - s,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r + s,
                                  e - i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + a,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - s,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e + i,
                                  t - r + s,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r - s,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r - s,
                                  e + i,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i - s,
                                  t + r,
                                  e + i - s,
                                  t + r,
                                  e + i - a,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r,
                                  e - i,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r,
                                  e + i,
                                  3,
                                  !0,
                                )));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: i,
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              d = {
                getShapeProp: function (t, e, r) {
                  var i;
                  return (
                    3 === r || 4 === r
                      ? (i = (3 === r ? e.pt : e.ks).k.length
                          ? new h(t, e, r)
                          : new n(t, e, r))
                      : 5 === r
                      ? (i = new f(t, e))
                      : 6 === r
                      ? (i = new l(t, e))
                      : 7 === r && (i = new p(t, e)),
                    i.k && t.addDynamicProperty(i),
                    i
                  );
                },
                getConstructorFunction: function () {
                  return n;
                },
                getKeyframedConstructorFunction: function () {
                  return h;
                },
              };
            return d;
          })(),
          Matrix = (function () {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;
            function s() {
              return (
                (this.props[0] = 1),
                (this.props[1] = 0),
                (this.props[2] = 0),
                (this.props[3] = 0),
                (this.props[4] = 0),
                (this.props[5] = 1),
                (this.props[6] = 0),
                (this.props[7] = 0),
                (this.props[8] = 0),
                (this.props[9] = 0),
                (this.props[10] = 1),
                (this.props[11] = 0),
                (this.props[12] = 0),
                (this.props[13] = 0),
                (this.props[14] = 0),
                (this.props[15] = 1),
                this
              );
            }
            function a(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(1, 0, 0, 0, 0, i, -s, 0, 0, s, i, 0, 0, 0, 0, 1);
            }
            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, 0, s, 0, 0, 1, 0, 0, -s, 0, i, 0, 0, 0, 0, 1);
            }
            function h(r) {
              if (0 === r) return this;
              var i = t(r),
                s = e(r);
              return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l(t, e) {
              return this._t(1, e, t, 1, 0, 0);
            }
            function p(t, e) {
              return this.shear(r(t), r(e));
            }
            function f(i, s) {
              var a = t(s),
                n = e(s);
              return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function d(t, e, r) {
              return (
                r || 0 === r || (r = 1),
                1 === t && 1 === e && 1 === r
                  ? this
                  : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
              );
            }
            function c(t, e, r, i, s, a, n, o, h, l, p, f, d, c, m, u) {
              return (
                (this.props[0] = t),
                (this.props[1] = e),
                (this.props[2] = r),
                (this.props[3] = i),
                (this.props[4] = s),
                (this.props[5] = a),
                (this.props[6] = n),
                (this.props[7] = o),
                (this.props[8] = h),
                (this.props[9] = l),
                (this.props[10] = p),
                (this.props[11] = f),
                (this.props[12] = d),
                (this.props[13] = c),
                (this.props[14] = m),
                (this.props[15] = u),
                this
              );
            }
            function m(t, e, r) {
              return (
                (r = r || 0),
                0 !== t || 0 !== e || 0 !== r
                  ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                  : this
              );
            }
            function u(t, e, r, i, s, a, n, o, h, l, p, f, d, c, m, u) {
              var y = this.props;
              if (
                1 === t &&
                0 === e &&
                0 === r &&
                0 === i &&
                0 === s &&
                1 === a &&
                0 === n &&
                0 === o &&
                0 === h &&
                0 === l &&
                1 === p &&
                0 === f
              )
                return (
                  (y[12] = y[12] * t + y[15] * d),
                  (y[13] = y[13] * a + y[15] * c),
                  (y[14] = y[14] * p + y[15] * m),
                  (y[15] *= u),
                  (this._identityCalculated = !1),
                  this
                );
              var g = y[0],
                _ = y[1],
                v = y[2],
                b = y[3],
                E = y[4],
                S = y[5],
                A = y[6],
                P = y[7],
                x = y[8],
                T = y[9],
                w = y[10],
                C = y[11],
                k = y[12],
                D = y[13],
                M = y[14],
                I = y[15];
              return (
                (y[0] = g * t + _ * s + v * h + b * d),
                (y[1] = g * e + _ * a + v * l + b * c),
                (y[2] = g * r + _ * n + v * p + b * m),
                (y[3] = g * i + _ * o + v * f + b * u),
                (y[4] = E * t + S * s + A * h + P * d),
                (y[5] = E * e + S * a + A * l + P * c),
                (y[6] = E * r + S * n + A * p + P * m),
                (y[7] = E * i + S * o + A * f + P * u),
                (y[8] = x * t + T * s + w * h + C * d),
                (y[9] = x * e + T * a + w * l + C * c),
                (y[10] = x * r + T * n + w * p + C * m),
                (y[11] = x * i + T * o + w * f + C * u),
                (y[12] = k * t + D * s + M * h + I * d),
                (y[13] = k * e + D * a + M * l + I * c),
                (y[14] = k * r + D * n + M * p + I * m),
                (y[15] = k * i + D * o + M * f + I * u),
                (this._identityCalculated = !1),
                this
              );
            }
            function y() {
              return (
                this._identityCalculated ||
                  ((this._identity = !(
                    1 !== this.props[0] ||
                    0 !== this.props[1] ||
                    0 !== this.props[2] ||
                    0 !== this.props[3] ||
                    0 !== this.props[4] ||
                    1 !== this.props[5] ||
                    0 !== this.props[6] ||
                    0 !== this.props[7] ||
                    0 !== this.props[8] ||
                    0 !== this.props[9] ||
                    1 !== this.props[10] ||
                    0 !== this.props[11] ||
                    0 !== this.props[12] ||
                    0 !== this.props[13] ||
                    0 !== this.props[14] ||
                    1 !== this.props[15]
                  )),
                  (this._identityCalculated = !0)),
                this._identity
              );
            }
            function g(t) {
              for (var e = 0; e < 16; ) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1;
              }
              return !0;
            }
            function _(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t;
            }
            function v(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e];
            }
            function b(t, e, r) {
              return {
                x:
                  t * this.props[0] +
                  e * this.props[4] +
                  r * this.props[8] +
                  this.props[12],
                y:
                  t * this.props[1] +
                  e * this.props[5] +
                  r * this.props[9] +
                  this.props[13],
                z:
                  t * this.props[2] +
                  e * this.props[6] +
                  r * this.props[10] +
                  this.props[14],
              };
            }
            function E(t, e, r) {
              return (
                t * this.props[0] +
                e * this.props[4] +
                r * this.props[8] +
                this.props[12]
              );
            }
            function S(t, e, r) {
              return (
                t * this.props[1] +
                e * this.props[5] +
                r * this.props[9] +
                this.props[13]
              );
            }
            function A(t, e, r) {
              return (
                t * this.props[2] +
                e * this.props[6] +
                r * this.props[10] +
                this.props[14]
              );
            }
            function P() {
              var t =
                  this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                s = this.props[0] / t,
                a =
                  (this.props[4] * this.props[13] -
                    this.props[5] * this.props[12]) /
                  t,
                n =
                  -(
                    this.props[0] * this.props[13] -
                    this.props[1] * this.props[12]
                  ) / t,
                o = new Matrix();
              return (
                (o.props[0] = e),
                (o.props[1] = r),
                (o.props[4] = i),
                (o.props[5] = s),
                (o.props[12] = a),
                (o.props[13] = n),
                o
              );
            }
            function x(t) {
              return this.getInverseMatrix().applyToPointArray(
                t[0],
                t[1],
                t[2] || 0,
              );
            }
            function T(t) {
              var e,
                r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = x(t[e]);
              return i;
            }
            function w(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity())
                (i[0] = t[0]),
                  (i[1] = t[1]),
                  (i[2] = e[0]),
                  (i[3] = e[1]),
                  (i[4] = r[0]),
                  (i[5] = r[1]);
              else {
                var s = this.props[0],
                  a = this.props[1],
                  n = this.props[4],
                  o = this.props[5],
                  h = this.props[12],
                  l = this.props[13];
                (i[0] = t[0] * s + t[1] * n + h),
                  (i[1] = t[0] * a + t[1] * o + l),
                  (i[2] = e[0] * s + e[1] * n + h),
                  (i[3] = e[0] * a + e[1] * o + l),
                  (i[4] = r[0] * s + r[1] * n + h),
                  (i[5] = r[0] * a + r[1] * o + l);
              }
              return i;
            }
            function C(t, e, r) {
              return this.isIdentity()
                ? [t, e, r]
                : [
                    t * this.props[0] +
                      e * this.props[4] +
                      r * this.props[8] +
                      this.props[12],
                    t * this.props[1] +
                      e * this.props[5] +
                      r * this.props[9] +
                      this.props[13],
                    t * this.props[2] +
                      e * this.props[6] +
                      r * this.props[10] +
                      this.props[14],
                  ];
            }
            function k(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return (
                Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                "," +
                Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
              );
            }
            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                (r += i(1e4 * e[t]) / 1e4),
                  (r += 15 === t ? ")" : ","),
                  (t += 1);
              return r;
            }
            function M(t) {
              return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                ? i(1e4 * t) / 1e4
                : t;
            }
            function I() {
              var t = this.props;
              return (
                "matrix(" +
                M(t[0]) +
                "," +
                M(t[1]) +
                "," +
                M(t[4]) +
                "," +
                M(t[5]) +
                "," +
                M(t[12]) +
                "," +
                M(t[13]) +
                ")"
              );
            }
            return function () {
              (this.reset = s),
                (this.rotate = a),
                (this.rotateX = n),
                (this.rotateY = o),
                (this.rotateZ = h),
                (this.skew = p),
                (this.skewFromAxis = f),
                (this.shear = l),
                (this.scale = d),
                (this.setTransform = c),
                (this.translate = m),
                (this.transform = u),
                (this.applyToPoint = b),
                (this.applyToX = E),
                (this.applyToY = S),
                (this.applyToZ = A),
                (this.applyToPointArray = C),
                (this.applyToTriplePoints = w),
                (this.applyToPointStringified = k),
                (this.toCSS = D),
                (this.to2dCSS = I),
                (this.clone = _),
                (this.cloneFromProps = v),
                (this.equals = g),
                (this.inversePoints = T),
                (this.inversePoint = x),
                (this.getInverseMatrix = P),
                (this._t = this.transform),
                (this.isIdentity = y),
                (this._identity = !0),
                (this._identityCalculated = !1),
                (this.props = createTypedArray("float32", 16)),
                this.reset();
            };
          })();
        function _typeof$3(t) {
          return (
            (_typeof$3 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$3(t)
          );
        }
        var lottie = {};
        function setLocation(t) {
          setLocationHref(t);
        }
        function searchAnimations() {
          animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
          setSubframeEnabled(t);
        }
        function setPrefix(t) {
          setIdPrefix(t);
        }
        function loadAnimation(t) {
          return animationManager.loadAnimation(t);
        }
        function setQuality(t) {
          if ("string" == typeof t)
            switch (t) {
              case "high":
                setDefaultCurveSegments(200);
                break;
              default:
              case "medium":
                setDefaultCurveSegments(50);
                break;
              case "low":
                setDefaultCurveSegments(10);
            }
          else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
        }
        function inBrowser() {
          return "undefined" != typeof navigator;
        }
        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e);
        }
        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null;
          }
        }
        function checkReady() {
          "complete" === document.readyState &&
            (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
          }
          return null;
        }
        (lottie.play = animationManager.play),
          (lottie.pause = animationManager.pause),
          (lottie.setLocationHref = setLocation),
          (lottie.togglePause = animationManager.togglePause),
          (lottie.setSpeed = animationManager.setSpeed),
          (lottie.setDirection = animationManager.setDirection),
          (lottie.stop = animationManager.stop),
          (lottie.searchAnimations = searchAnimations),
          (lottie.registerAnimation = animationManager.registerAnimation),
          (lottie.loadAnimation = loadAnimation),
          (lottie.setSubframeRendering = setSubframeRendering),
          (lottie.resize = animationManager.resize),
          (lottie.goToAndStop = animationManager.goToAndStop),
          (lottie.destroy = animationManager.destroy),
          (lottie.setQuality = setQuality),
          (lottie.inBrowser = inBrowser),
          (lottie.installPlugin = installPlugin),
          (lottie.freeze = animationManager.freeze),
          (lottie.unfreeze = animationManager.unfreeze),
          (lottie.setVolume = animationManager.setVolume),
          (lottie.mute = animationManager.mute),
          (lottie.unmute = animationManager.unmute),
          (lottie.getRegisteredAnimations =
            animationManager.getRegisteredAnimations),
          (lottie.useWebWorker = setWebWorker),
          (lottie.setIDPrefix = setPrefix),
          (lottie.__getFactory = getFactory),
          (lottie.version = "5.10.0");
        var queryString = "",
          scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || { src: "" };
        (queryString = myScript.src
          ? myScript.src.replace(/^[^\?]+\??/, "")
          : ""),
          getQueryVariable("renderer");
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && (window.bodymovin = lottie);
        } catch (t) {}
        var ShapeModifiers = (function () {
          var t = {},
            e = {};
          return (
            (t.registerModifier = function (t, r) {
              e[t] || (e[t] = r);
            }),
            (t.getModifier = function (t, r, i) {
              return new e[t](r, i);
            }),
            t
          );
        })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function PuckerAndBloatModifier() {}
        (ShapeModifier.prototype.initModifierProperties = function () {}),
          (ShapeModifier.prototype.addShapeToModifier = function () {}),
          (ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollectionPool.newShapeCollection(),
              };
              this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated();
            }
          }),
          (ShapeModifier.prototype.init = function (t, e) {
            (this.shapes = []),
              (this.elem = t),
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e),
              (this.frameId = initialDefaultFrame),
              (this.closed = !1),
              (this.k = !1),
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          extendPrototype([DynamicPropertyContainer], ShapeModifier),
          extendPrototype([ShapeModifier], TrimModifier),
          (TrimModifier.prototype.initModifierProperties = function (t, e) {
            (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
              (this.sValue = 0),
              (this.eValue = 0),
              (this.getValue = this.processKeys),
              (this.m = e.m),
              (this._isAnimated =
                !!this.s.effectsSequence.length ||
                !!this.e.effectsSequence.length ||
                !!this.o.effectsSequence.length);
          }),
          (TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
          }),
          (TrimModifier.prototype.calculateShapeEdges = function (
            t,
            e,
            r,
            i,
            s,
          ) {
            var a = [];
            e <= 1
              ? a.push({ s: t, e: e })
              : t >= 1
              ? a.push({ s: t - 1, e: e - 1 })
              : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
            var n,
              o,
              h = [],
              l = a.length;
            for (n = 0; n < l; n += 1) {
              var p, f;
              (o = a[n]).e * s < i ||
                o.s * s > i + r ||
                ((p = o.s * s <= i ? 0 : (o.s * s - i) / r),
                (f = o.e * s >= i + r ? 1 : (o.e * s - i) / r),
                h.push([p, f]));
            }
            return h.length || h.push([0, 0]), h;
          }),
          (TrimModifier.prototype.releasePathsData = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return (t.length = 0), t;
          }),
          (TrimModifier.prototype.processShapes = function (t) {
            var e, r, i, s;
            if (this._mdf || t) {
              var a = (this.o.v % 360) / 360;
              if (
                (a < 0 && (a += 1),
                (e =
                  this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
                  (r =
                    this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a))
              ) {
                var n = e;
                (e = r), (r = n);
              }
              (e = 1e-4 * Math.round(1e4 * e)),
                (r = 1e-4 * Math.round(1e4 * r)),
                (this.sValue = e),
                (this.eValue = r);
            } else (e = this.sValue), (r = this.eValue);
            var o,
              h,
              l,
              p,
              f,
              d = this.shapes.length,
              c = 0;
            if (r === e)
              for (s = 0; s < d; s += 1)
                this.shapes[s].localShapeCollection.releaseShapes(),
                  (this.shapes[s].shape._mdf = !0),
                  (this.shapes[s].shape.paths =
                    this.shapes[s].localShapeCollection),
                  this._mdf && (this.shapes[s].pathsData.length = 0);
            else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
              if (this._mdf)
                for (s = 0; s < d; s += 1)
                  (this.shapes[s].pathsData.length = 0),
                    (this.shapes[s].shape._mdf = !0);
            } else {
              var m,
                u,
                y = [];
              for (s = 0; s < d; s += 1)
                if (
                  (m = this.shapes[s]).shape._mdf ||
                  this._mdf ||
                  t ||
                  2 === this.m
                ) {
                  if (
                    ((h = (i = m.shape.paths)._length),
                    (f = 0),
                    !m.shape._mdf && m.pathsData.length)
                  )
                    f = m.totalShapeLength;
                  else {
                    for (
                      l = this.releasePathsData(m.pathsData), o = 0;
                      o < h;
                      o += 1
                    )
                      (p = bez.getSegmentsLength(i.shapes[o])),
                        l.push(p),
                        (f += p.totalLength);
                    (m.totalShapeLength = f), (m.pathsData = l);
                  }
                  (c += f), (m.shape._mdf = !0);
                } else m.shape.paths = m.localShapeCollection;
              var g,
                _ = e,
                v = r,
                b = 0;
              for (s = d - 1; s >= 0; s -= 1)
                if ((m = this.shapes[s]).shape._mdf) {
                  for (
                    (u = m.localShapeCollection).releaseShapes(),
                      2 === this.m && d > 1
                        ? ((g = this.calculateShapeEdges(
                            e,
                            r,
                            m.totalShapeLength,
                            b,
                            c,
                          )),
                          (b += m.totalShapeLength))
                        : (g = [[_, v]]),
                      h = g.length,
                      o = 0;
                    o < h;
                    o += 1
                  ) {
                    (_ = g[o][0]),
                      (v = g[o][1]),
                      (y.length = 0),
                      v <= 1
                        ? y.push({
                            s: m.totalShapeLength * _,
                            e: m.totalShapeLength * v,
                          })
                        : _ >= 1
                        ? y.push({
                            s: m.totalShapeLength * (_ - 1),
                            e: m.totalShapeLength * (v - 1),
                          })
                        : (y.push({
                            s: m.totalShapeLength * _,
                            e: m.totalShapeLength,
                          }),
                          y.push({ s: 0, e: m.totalShapeLength * (v - 1) }));
                    var E = this.addShapes(m, y[0]);
                    if (y[0].s !== y[0].e) {
                      if (y.length > 1)
                        if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                          var S = E.pop();
                          this.addPaths(E, u), (E = this.addShapes(m, y[1], S));
                        } else
                          this.addPaths(E, u), (E = this.addShapes(m, y[1]));
                      this.addPaths(E, u);
                    }
                  }
                  m.shape.paths = u;
                }
            }
          }),
          (TrimModifier.prototype.addPaths = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r]);
          }),
          (TrimModifier.prototype.addSegment = function (t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a),
              s.setXYAt(r[0], r[1], "i", a + 1),
              n && s.setXYAt(t[0], t[1], "v", a),
              s.setXYAt(i[0], i[1], "v", a + 1);
          }),
          (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r),
              e.setXYAt(t[2], t[6], "i", r + 1),
              i && e.setXYAt(t[0], t[4], "v", r),
              e.setXYAt(t[3], t[7], "v", r + 1);
          }),
          (TrimModifier.prototype.addShapes = function (t, e, r) {
            var i,
              s,
              a,
              n,
              o,
              h,
              l,
              p,
              f = t.pathsData,
              d = t.shape.paths.shapes,
              c = t.shape.paths._length,
              m = 0,
              u = [],
              y = !0;
            for (
              r
                ? ((o = r._length), (p = r._length))
                : ((r = shapePool.newElement()), (o = 0), (p = 0)),
                u.push(r),
                i = 0;
              i < c;
              i += 1
            ) {
              for (
                h = f[i].lengths,
                  r.c = d[i].c,
                  a = d[i].c ? h.length : h.length + 1,
                  s = 1;
                s < a;
                s += 1
              )
                if (m + (n = h[s - 1]).addedLength < e.s)
                  (m += n.addedLength), (r.c = !1);
                else {
                  if (m > e.e) {
                    r.c = !1;
                    break;
                  }
                  e.s <= m && e.e >= m + n.addedLength
                    ? (this.addSegment(
                        d[i].v[s - 1],
                        d[i].o[s - 1],
                        d[i].i[s],
                        d[i].v[s],
                        r,
                        o,
                        y,
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        d[i].v[s - 1],
                        d[i].v[s],
                        d[i].o[s - 1],
                        d[i].i[s],
                        (e.s - m) / n.addedLength,
                        (e.e - m) / n.addedLength,
                        h[s - 1],
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1)),
                    (m += n.addedLength),
                    (o += 1);
                }
              if (d[i].c && h.length) {
                if (((n = h[s - 1]), m <= e.e)) {
                  var g = h[s - 1].addedLength;
                  e.s <= m && e.e >= m + g
                    ? (this.addSegment(
                        d[i].v[s - 1],
                        d[i].o[s - 1],
                        d[i].i[0],
                        d[i].v[0],
                        r,
                        o,
                        y,
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        d[i].v[s - 1],
                        d[i].v[0],
                        d[i].o[s - 1],
                        d[i].i[0],
                        (e.s - m) / g,
                        (e.e - m) / g,
                        h[s - 1],
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1));
                } else r.c = !1;
                (m += n.addedLength), (o += 1);
              }
              if (
                (r._length &&
                  (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
                  r.setXYAt(
                    r.v[r._length - 1][0],
                    r.v[r._length - 1][1],
                    "o",
                    r._length - 1,
                  )),
                m > e.e)
              )
                break;
              i < c - 1 &&
                ((r = shapePool.newElement()), (y = !0), u.push(r), (o = 0));
            }
            return u;
          }),
          extendPrototype([ShapeModifier], PuckerAndBloatModifier),
          (PuckerAndBloatModifier.prototype.initModifierProperties = function (
            t,
            e,
          ) {
            (this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this._isAnimated = !!this.amount.effectsSequence.length);
          }),
          (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var r = e / 100,
              i = [0, 0],
              s = t._length,
              a = 0;
            for (a = 0; a < s; a += 1) (i[0] += t.v[a][0]), (i[1] += t.v[a][1]);
            (i[0] /= s), (i[1] /= s);
            var n,
              o,
              h,
              l,
              p,
              f,
              d = shapePool.newElement();
            for (d.c = t.c, a = 0; a < s; a += 1)
              (n = t.v[a][0] + (i[0] - t.v[a][0]) * r),
                (o = t.v[a][1] + (i[1] - t.v[a][1]) * r),
                (h = t.o[a][0] + (i[0] - t.o[a][0]) * -r),
                (l = t.o[a][1] + (i[1] - t.o[a][1]) * -r),
                (p = t.i[a][0] + (i[0] - t.i[a][0]) * -r),
                (f = t.i[a][1] + (i[1] - t.i[a][1]) * -r),
                d.setTripleAt(n, o, h, l, p, f, a);
            return d;
          }),
          (PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              s,
              a,
              n,
              o = this.shapes.length,
              h = this.amount.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((n = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    n.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      s = a.shape.paths._length,
                      i = 0;
                    i < s;
                    i += 1
                  )
                    n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          });
        var TransformPropertyFactory = (function () {
          var t = [0, 0];
          function e(t, e, r) {
            if (
              ((this.elem = t),
              (this.frameId = -1),
              (this.propType = "transform"),
              (this.data = e),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(r || t),
              e.p && e.p.s
                ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                  e.p.z &&
                    (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    t,
                    e.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this,
                  )),
              e.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  t,
                  e.rx,
                  0,
                  degToRads,
                  this,
                )),
                (this.ry = PropertyFactory.getProp(
                  t,
                  e.ry,
                  0,
                  degToRads,
                  this,
                )),
                (this.rz = PropertyFactory.getProp(
                  t,
                  e.rz,
                  0,
                  degToRads,
                  this,
                )),
                e.or.k[0].ti)
              ) {
                var i,
                  s = e.or.k.length;
                for (i = 0; i < s; i += 1)
                  (e.or.k[i].to = null), (e.or.k[i].ti = null);
              }
              (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                t,
                e.r || { k: 0 },
                0,
                degToRads,
                this,
              );
            e.sk &&
              ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: [0, 0, 0] },
                1,
                0,
                this,
              )),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: [100, 100, 100] },
                1,
                0.01,
                this,
              )),
              e.o
                ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0);
          }
          return (
            (e.prototype = {
              applyToMatrix: function (t) {
                var e = this._mdf;
                this.iterateDynamicProperties(),
                  (this._mdf = this._mdf || e),
                  this.a &&
                    t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                  this.r
                    ? t.rotate(-this.r.v)
                    : t
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                  this.data.p.s
                    ? this.data.p.z
                      ? t.translate(this.px.v, this.py.v, -this.pz.v)
                      : t.translate(this.px.v, this.py.v, 0)
                    : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              },
              getValue: function (e) {
                if (this.elem.globalData.frameId !== this.frameId) {
                  if (
                    (this._isDirty &&
                      (this.precalculateMatrix(), (this._isDirty = !1)),
                    this.iterateDynamicProperties(),
                    this._mdf || e)
                  ) {
                    var r;
                    if (
                      (this.v.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1 &&
                        this.v.translate(
                          -this.a.v[0],
                          -this.a.v[1],
                          this.a.v[2],
                        ),
                      this.appliedTransformations < 2 &&
                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk &&
                        this.appliedTransformations < 3 &&
                        this.v.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r && this.appliedTransformations < 4
                        ? this.v.rotate(-this.r.v)
                        : !this.r &&
                          this.appliedTransformations < 4 &&
                          this.v
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.autoOriented)
                    ) {
                      var i, s;
                      if (
                        ((r = this.elem.globalData.frameRate),
                        this.p && this.p.keyframes && this.p.getValueAtTime)
                      )
                        this.p._caching.lastFrame + this.p.offsetTime <=
                        this.p.keyframes[0].t
                          ? ((i = this.p.getValueAtTime(
                              (this.p.keyframes[0].t + 0.01) / r,
                              0,
                            )),
                            (s = this.p.getValueAtTime(
                              this.p.keyframes[0].t / r,
                              0,
                            )))
                          : this.p._caching.lastFrame + this.p.offsetTime >=
                            this.p.keyframes[this.p.keyframes.length - 1].t
                          ? ((i = this.p.getValueAtTime(
                              this.p.keyframes[this.p.keyframes.length - 1].t /
                                r,
                              0,
                            )),
                            (s = this.p.getValueAtTime(
                              (this.p.keyframes[this.p.keyframes.length - 1].t -
                                0.05) /
                                r,
                              0,
                            )))
                          : ((i = this.p.pv),
                            (s = this.p.getValueAtTime(
                              (this.p._caching.lastFrame +
                                this.p.offsetTime -
                                0.01) /
                                r,
                              this.p.offsetTime,
                            )));
                      else if (
                        this.px &&
                        this.px.keyframes &&
                        this.py.keyframes &&
                        this.px.getValueAtTime &&
                        this.py.getValueAtTime
                      ) {
                        (i = []), (s = []);
                        var a = this.px,
                          n = this.py;
                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t
                          ? ((i[0] = a.getValueAtTime(
                              (a.keyframes[0].t + 0.01) / r,
                              0,
                            )),
                            (i[1] = n.getValueAtTime(
                              (n.keyframes[0].t + 0.01) / r,
                              0,
                            )),
                            (s[0] = a.getValueAtTime(a.keyframes[0].t / r, 0)),
                            (s[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)))
                          : a._caching.lastFrame + a.offsetTime >=
                            a.keyframes[a.keyframes.length - 1].t
                          ? ((i[0] = a.getValueAtTime(
                              a.keyframes[a.keyframes.length - 1].t / r,
                              0,
                            )),
                            (i[1] = n.getValueAtTime(
                              n.keyframes[n.keyframes.length - 1].t / r,
                              0,
                            )),
                            (s[0] = a.getValueAtTime(
                              (a.keyframes[a.keyframes.length - 1].t - 0.01) /
                                r,
                              0,
                            )),
                            (s[1] = n.getValueAtTime(
                              (n.keyframes[n.keyframes.length - 1].t - 0.01) /
                                r,
                              0,
                            )))
                          : ((i = [a.pv, n.pv]),
                            (s[0] = a.getValueAtTime(
                              (a._caching.lastFrame + a.offsetTime - 0.01) / r,
                              a.offsetTime,
                            )),
                            (s[1] = n.getValueAtTime(
                              (n._caching.lastFrame + n.offsetTime - 0.01) / r,
                              n.offsetTime,
                            )));
                      } else i = s = t;
                      this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                    }
                    this.data.p && this.data.p.s
                      ? this.data.p.z
                        ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                        : this.v.translate(this.px.v, this.py.v, 0)
                      : this.v.translate(
                          this.p.v[0],
                          this.p.v[1],
                          -this.p.v[2],
                        );
                  }
                  this.frameId = this.elem.globalData.frameId;
                }
              },
              precalculateMatrix: function () {
                if (
                  !this.a.k &&
                  (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  (this.appliedTransformations = 1),
                  !this.s.effectsSequence.length)
                ) {
                  if (
                    (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    (this.appliedTransformations = 2),
                    this.sk)
                  ) {
                    if (
                      this.sk.effectsSequence.length ||
                      this.sa.effectsSequence.length
                    )
                      return;
                    this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                      (this.appliedTransformations = 3);
                  }
                  this.r
                    ? this.r.effectsSequence.length ||
                      (this.pre.rotate(-this.r.v),
                      (this.appliedTransformations = 4))
                    : this.rz.effectsSequence.length ||
                      this.ry.effectsSequence.length ||
                      this.rx.effectsSequence.length ||
                      this.or.effectsSequence.length ||
                      (this.pre
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                      (this.appliedTransformations = 4));
                }
              },
              autoOrient: function () {},
            }),
            extendPrototype([DynamicPropertyContainer], e),
            (e.prototype.addDynamicProperty = function (t) {
              this._addDynamicProperty(t),
                this.elem.addDynamicProperty(t),
                (this._isDirty = !0);
            }),
            (e.prototype._addDynamicProperty =
              DynamicPropertyContainer.prototype.addDynamicProperty),
            {
              getTransformProperty: function (t, r, i) {
                return new e(t, r, i);
              },
            }
          );
        })();
        function RepeaterModifier() {}
        function RoundCornersModifier() {}
        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
        }
        function floatZero(t) {
          return Math.abs(t) <= 1e-5;
        }
        function lerp(t, e, r) {
          return t * (1 - r) + e * r;
        }
        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
        }
        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var i = e * e - 4 * t * r;
          if (i < 0) return [];
          var s = -e / (2 * t);
          if (0 === i) return [s];
          var a = Math.sqrt(i) / (2 * t);
          return [s - a, s + a];
        }
        function polynomialCoefficients(t, e, r, i) {
          return [
            3 * e - t - 3 * r + i,
            3 * t - 6 * e + 3 * r,
            -3 * t + 3 * e,
            t,
          ];
        }
        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1);
        }
        function PolynomialBezier(t, e, r, i, s) {
          s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)),
            s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
            n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
          (this.a = [a[0], n[0]]),
            (this.b = [a[1], n[1]]),
            (this.c = [a[2], n[2]]),
            (this.d = [a[3], n[3]]),
            (this.points = [t, e, r, i]);
        }
        function extrema(t, e) {
          var r = t.points[0][e],
            i = t.points[t.points.length - 1][e];
          if (r > i) {
            var s = i;
            (i = r), (r = s);
          }
          for (
            var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0;
            n < a.length;
            n += 1
          )
            if (a[n] > 0 && a[n] < 1) {
              var o = t.point(a[n])[e];
              o < r ? (r = o) : o > i && (i = o);
            }
          return { min: r, max: i };
        }
        function intersectData(t, e, r) {
          var i = t.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r,
          };
        }
        function splitData(t) {
          var e = t.bez.split(0.5);
          return [
            intersectData(e[0], t.t1, t.t),
            intersectData(e[1], t.t, t.t2),
          ];
        }
        function boxIntersect(t, e) {
          return (
            2 * Math.abs(t.cx - e.cx) < t.width + e.width &&
            2 * Math.abs(t.cy - e.cy) < t.height + e.height
          );
        }
        function intersectsImpl(t, e, r, i, s, a) {
          if (boxIntersect(t, e))
            if (
              r >= a ||
              (t.width <= i && t.height <= i && e.width <= i && e.height <= i)
            )
              s.push([t.t, e.t]);
            else {
              var n = splitData(t),
                o = splitData(e);
              intersectsImpl(n[0], o[0], r + 1, i, s, a),
                intersectsImpl(n[0], o[1], r + 1, i, s, a),
                intersectsImpl(n[1], o[0], r + 1, i, s, a),
                intersectsImpl(n[1], o[1], r + 1, i, s, a);
            }
        }
        function crossProduct(t, e) {
          return [
            t[1] * e[2] - t[2] * e[1],
            t[2] * e[0] - t[0] * e[2],
            t[0] * e[1] - t[1] * e[0],
          ];
        }
        function lineIntersection(t, e, r, i) {
          var s = [t[0], t[1], 1],
            a = [e[0], e[1], 1],
            n = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            h = crossProduct(crossProduct(s, a), crossProduct(n, o));
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
        }
        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
        }
        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
        }
        function ZigZagModifier() {}
        function setPoint(t, e, r, i, s, a, n) {
          var o = r - Math.PI / 2,
            h = r + Math.PI / 2,
            l = e[0] + Math.cos(r) * i * s,
            p = e[1] - Math.sin(r) * i * s;
          t.setTripleAt(
            l,
            p,
            l + Math.cos(o) * a,
            p - Math.sin(o) * a,
            l + Math.cos(h) * n,
            p - Math.sin(h) * n,
            t.length(),
          );
        }
        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = 0.5 * -Math.PI;
          return [
            Math.cos(i) * r[0] - Math.sin(i) * r[1],
            Math.sin(i) * r[0] + Math.cos(i) * r[1],
          ];
        }
        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            i = (e + 1) % t.length(),
            s = getPerpendicularVector(t.v[r], t.v[i]);
          return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
        }
        function zigZagCorner(t, e, r, i, s, a, n) {
          var o = getProjectingAngle(e, r),
            h = e.v[r % e._length],
            l = e.v[0 === r ? e._length - 1 : r - 1],
            p = e.v[(r + 1) % e._length],
            f =
              2 === a
                ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2))
                : 0,
            d =
              2 === a
                ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2))
                : 0;
          setPoint(
            t,
            e.v[r % e._length],
            o,
            n,
            i,
            d / (2 * (s + 1)),
            f / (2 * (s + 1)),
          );
        }
        function zigZagSegment(t, e, r, i, s, a) {
          for (var n = 0; n < i; n += 1) {
            var o = (n + 1) / (i + 1),
              h =
                2 === s
                  ? Math.sqrt(
                      Math.pow(e.points[3][0] - e.points[0][0], 2) +
                        Math.pow(e.points[3][1] - e.points[0][1], 2),
                    )
                  : 0,
              l = e.normalAngle(o);
            setPoint(
              t,
              e.point(o),
              l,
              a,
              r,
              h / (2 * (i + 1)),
              h / (2 * (i + 1)),
            ),
              (a = -a);
          }
          return a;
        }
        function linearOffset(t, e, r) {
          var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, i, r), polarOffset(e, i, r)];
        }
        function offsetSegment(t, e) {
          var r, i, s, a, n, o, h;
          (r = (h = linearOffset(t.points[0], t.points[1], e))[0]),
            (i = h[1]),
            (s = (h = linearOffset(t.points[1], t.points[2], e))[0]),
            (a = h[1]),
            (n = (h = linearOffset(t.points[2], t.points[3], e))[0]),
            (o = h[1]);
          var l = lineIntersection(r, i, s, a);
          null === l && (l = i);
          var p = lineIntersection(n, o, s, a);
          return null === p && (p = n), new PolynomialBezier(r, l, p, o);
        }
        function joinLines(t, e, r, i, s) {
          var a = e.points[3],
            n = r.points[0];
          if (3 === i) return a;
          if (pointEqual(a, n)) return a;
          if (2 === i) {
            var o = -e.tangentAngle(1),
              h = -r.tangentAngle(0) + Math.PI,
              l = lineIntersection(
                a,
                polarOffset(a, o + Math.PI / 2, 100),
                n,
                polarOffset(n, o + Math.PI / 2, 100),
              ),
              p = l ? pointDistance(l, a) : pointDistance(a, n) / 2,
              f = polarOffset(a, o, 2 * p * roundCorner);
            return (
              t.setXYAt(f[0], f[1], "o", t.length() - 1),
              (f = polarOffset(n, h, 2 * p * roundCorner)),
              t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()),
              n
            );
          }
          var d = lineIntersection(
            pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
            a,
            n,
            pointEqual(n, r.points[1]) ? r.points[3] : r.points[1],
          );
          return d && pointDistance(d, a) < s
            ? (t.setTripleAt(d[0], d[1], d[0], d[1], d[0], d[1], t.length()), d)
            : a;
        }
        function getIntersection(t, e) {
          var r = t.intersections(e);
          return (
            r.length && floatEqual(r[0][0], 1) && r.shift(),
            r.length ? r[0] : null
          );
        }
        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            i = e.slice(),
            s = getIntersection(t[t.length - 1], e[0]);
          return (
            s &&
              ((r[t.length - 1] = t[t.length - 1].split(s[0])[0]),
              (i[0] = e[0].split(s[1])[1])),
            t.length > 1 &&
            e.length > 1 &&
            (s = getIntersection(t[0], e[e.length - 1]))
              ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]]
              : [r, i]
          );
        }
        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1)
            (e = pruneSegmentIntersection(t[r - 1], t[r])),
              (t[r - 1] = e[0]),
              (t[r] = e[1]);
          return (
            t.length > 1 &&
              ((e = pruneSegmentIntersection(t[t.length - 1], t[0])),
              (t[t.length - 1] = e[0]),
              (t[0] = e[1])),
            t
          );
        }
        function offsetSegmentSplit(t, e) {
          var r,
            i,
            s,
            a,
            n = t.inflectionPoints();
          if (0 === n.length) return [offsetSegment(t, e)];
          if (1 === n.length || floatEqual(n[1], 1))
            return (
              (r = (s = t.split(n[0]))[0]),
              (i = s[1]),
              [offsetSegment(r, e), offsetSegment(i, e)]
            );
          r = (s = t.split(n[0]))[0];
          var o = (n[1] - n[0]) / (1 - n[0]);
          return (
            (a = (s = s[1].split(o))[0]),
            (i = s[1]),
            [offsetSegment(r, e), offsetSegment(a, e), offsetSegment(i, e)]
          );
        }
        function OffsetPathModifier() {}
        function getFontProperties(t) {
          for (
            var e = t.fStyle ? t.fStyle.split(" ") : [],
              r = "normal",
              i = "normal",
              s = e.length,
              a = 0;
            a < s;
            a += 1
          )
            switch (e[a].toLowerCase()) {
              case "italic":
                i = "italic";
                break;
              case "bold":
                r = "700";
                break;
              case "black":
                r = "900";
                break;
              case "medium":
                r = "500";
                break;
              case "regular":
              case "normal":
                r = "400";
                break;
              case "light":
              case "thin":
                r = "200";
            }
          return { style: i, weight: t.fWeight || r };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
          (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
              (this.tr = TransformPropertyFactory.getTransformProperty(
                t,
                e.tr,
                this,
              )),
              (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
              (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
              (this.data = e),
              this.dynamicProperties.length || this.getValue(!0),
              (this._isAnimated = !!this.dynamicProperties.length),
              (this.pMatrix = new Matrix()),
              (this.rMatrix = new Matrix()),
              (this.sMatrix = new Matrix()),
              (this.tMatrix = new Matrix()),
              (this.matrix = new Matrix());
          }),
          (RepeaterModifier.prototype.applyTransforms = function (
            t,
            e,
            r,
            i,
            s,
            a,
          ) {
            var n = a ? -1 : 1,
              o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
              h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
              e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              e.rotate(-i.r.v * n * s),
              e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
              r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              r.scale(a ? 1 / o : o, a ? 1 / h : h),
              r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }),
          (RepeaterModifier.prototype.init = function (t, e, r, i) {
            for (
              this.elem = t,
                this.arr = e,
                this.pos = r,
                this.elemsData = i,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[r]);
              r > 0;

            )
              (r -= 1), this._elements.unshift(e[r]);
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (RepeaterModifier.prototype.resetElements = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              (t[e]._processed = !1),
                "gr" === t[e].ty && this.resetElements(t[e].it);
          }),
          (RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
          }),
          (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              (t[r]._render = e),
                "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
          }),
          (RepeaterModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              s,
              a,
              n = !1;
            if (this._mdf || t) {
              var o,
                h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var l = { it: this.cloneElements(this._elements), ty: "gr" };
                  l.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: "Transform",
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: "tr",
                  }),
                    this.arr.splice(0, 0, l),
                    this._groups.splice(0, 0, l),
                    (this._currentCopies += 1);
                }
                this.elem.reloadShapes(), (n = !0);
              }
              for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                if (
                  ((o = a < h),
                  (this._groups[i]._render = o),
                  this.changeGroupRender(this._groups[i].it, o),
                  !o)
                ) {
                  var p = this.elemsData[i].it,
                    f = p[p.length - 1];
                  0 !== f.transform.op.v
                    ? ((f.transform.op._mdf = !0), (f.transform.op.v = 0))
                    : (f.transform.op._mdf = !1);
                }
                a += 1;
              }
              this._currentCopies = h;
              var d = this.o.v,
                c = d % 1,
                m = d > 0 ? Math.floor(d) : Math.ceil(d),
                u = this.pMatrix.props,
                y = this.rMatrix.props,
                g = this.sMatrix.props;
              this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
              var _,
                v,
                b = 0;
              if (d > 0) {
                for (; b < m; )
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1,
                  ),
                    (b += 1);
                c &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    c,
                    !1,
                  ),
                  (b += c));
              } else if (d < 0) {
                for (; b > m; )
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !0,
                  ),
                    (b -= 1);
                c &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    -c,
                    !0,
                  ),
                  (b -= c));
              }
              for (
                i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                  s = 1 === this.data.m ? 1 : -1,
                  a = this._currentCopies;
                a;

              ) {
                if (
                  ((v = (r = (e = this.elemsData[i].it)[e.length - 1].transform
                    .mProps.v.props).length),
                  (e[e.length - 1].transform.mProps._mdf = !0),
                  (e[e.length - 1].transform.op._mdf = !0),
                  (e[e.length - 1].transform.op.v =
                    1 === this._currentCopies
                      ? this.so.v
                      : this.so.v +
                        (this.eo.v - this.so.v) *
                          (i / (this._currentCopies - 1))),
                  0 !== b)
                ) {
                  for (
                    ((0 !== i && 1 === s) ||
                      (i !== this._currentCopies - 1 && -1 === s)) &&
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1,
                      ),
                      this.matrix.transform(
                        y[0],
                        y[1],
                        y[2],
                        y[3],
                        y[4],
                        y[5],
                        y[6],
                        y[7],
                        y[8],
                        y[9],
                        y[10],
                        y[11],
                        y[12],
                        y[13],
                        y[14],
                        y[15],
                      ),
                      this.matrix.transform(
                        g[0],
                        g[1],
                        g[2],
                        g[3],
                        g[4],
                        g[5],
                        g[6],
                        g[7],
                        g[8],
                        g[9],
                        g[10],
                        g[11],
                        g[12],
                        g[13],
                        g[14],
                        g[15],
                      ),
                      this.matrix.transform(
                        u[0],
                        u[1],
                        u[2],
                        u[3],
                        u[4],
                        u[5],
                        u[6],
                        u[7],
                        u[8],
                        u[9],
                        u[10],
                        u[11],
                        u[12],
                        u[13],
                        u[14],
                        u[15],
                      ),
                      _ = 0;
                    _ < v;
                    _ += 1
                  )
                    r[_] = this.matrix.props[_];
                  this.matrix.reset();
                } else
                  for (this.matrix.reset(), _ = 0; _ < v; _ += 1)
                    r[_] = this.matrix.props[_];
                (b += 1), (a -= 1), (i += s);
              }
            } else
              for (a = this._currentCopies, i = 0, s = 1; a; )
                (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v
                  .props),
                  (e[e.length - 1].transform.mProps._mdf = !1),
                  (e[e.length - 1].transform.op._mdf = !1),
                  (a -= 1),
                  (i += s);
            return n;
          }),
          (RepeaterModifier.prototype.addShape = function () {}),
          extendPrototype([ShapeModifier], RoundCornersModifier),
          (RoundCornersModifier.prototype.initModifierProperties = function (
            t,
            e,
          ) {
            (this.getValue = this.processKeys),
              (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this._isAnimated = !!this.rd.effectsSequence.length);
          }),
          (RoundCornersModifier.prototype.processPath = function (t, e) {
            var r,
              i = shapePool.newElement();
            i.c = t.c;
            var s,
              a,
              n,
              o,
              h,
              l,
              p,
              f,
              d,
              c,
              m,
              u,
              y = t._length,
              g = 0;
            for (r = 0; r < y; r += 1)
              (s = t.v[r]),
                (n = t.o[r]),
                (a = t.i[r]),
                s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1]
                  ? (0 !== r && r !== y - 1) || t.c
                    ? ((o = 0 === r ? t.v[y - 1] : t.v[r - 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2),
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = m = s[0] + (o[0] - s[0]) * l),
                      (f = u = s[1] - (s[1] - o[1]) * l),
                      (d = p - (p - s[0]) * roundCorner),
                      (c = f - (f - s[1]) * roundCorner),
                      i.setTripleAt(p, f, d, c, m, u, g),
                      (g += 1),
                      (o = r === y - 1 ? t.v[0] : t.v[r + 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2),
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = d = s[0] + (o[0] - s[0]) * l),
                      (f = c = s[1] + (o[1] - s[1]) * l),
                      (m = p - (p - s[0]) * roundCorner),
                      (u = f - (f - s[1]) * roundCorner),
                      i.setTripleAt(p, f, d, c, m, u, g),
                      (g += 1))
                    : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g),
                      (g += 1))
                  : (i.setTripleAt(
                      t.v[r][0],
                      t.v[r][1],
                      t.o[r][0],
                      t.o[r][1],
                      t.i[r][0],
                      t.i[r][1],
                      g,
                    ),
                    (g += 1));
            return i;
          }),
          (RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              s,
              a,
              n,
              o = this.shapes.length,
              h = this.rd.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((n = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    n.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      s = a.shape.paths._length,
                      i = 0;
                    i < s;
                    i += 1
                  )
                    n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          (PolynomialBezier.prototype.point = function (t) {
            return [
              ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
              ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1],
            ];
          }),
          (PolynomialBezier.prototype.derivative = function (t) {
            return [
              (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
              (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1],
            ];
          }),
          (PolynomialBezier.prototype.tangentAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0]);
          }),
          (PolynomialBezier.prototype.normalAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1]);
          }),
          (PolynomialBezier.prototype.inflectionPoints = function () {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e =
                (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / t,
              r =
                e * e -
                ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i)
              ? i > 0 && i < 1
                ? [e]
                : []
              : [e - i, e + i].filter(function (t) {
                  return t > 0 && t < 1;
                });
          }),
          (PolynomialBezier.prototype.split = function (t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1)
              return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t),
              r = lerpPoint(this.points[1], this.points[2], t),
              i = lerpPoint(this.points[2], this.points[3], t),
              s = lerpPoint(e, r, t),
              a = lerpPoint(r, i, t),
              n = lerpPoint(s, a, t);
            return [
              new PolynomialBezier(this.points[0], e, s, n, !0),
              new PolynomialBezier(n, a, i, this.points[3], !0),
            ];
          }),
          (PolynomialBezier.prototype.bounds = function () {
            return { x: extrema(this, 0), y: extrema(this, 1) };
          }),
          (PolynomialBezier.prototype.boundingBox = function () {
            var t = this.bounds();
            return {
              left: t.x.min,
              right: t.x.max,
              top: t.y.min,
              bottom: t.y.max,
              width: t.x.max - t.x.min,
              height: t.y.max - t.y.min,
              cx: (t.x.max + t.x.min) / 2,
              cy: (t.y.max + t.y.min) / 2,
            };
          }),
          (PolynomialBezier.prototype.intersections = function (t, e, r) {
            void 0 === e && (e = 2), void 0 === r && (r = 7);
            var i = [];
            return (
              intersectsImpl(
                intersectData(this, 0, 1),
                intersectData(t, 0, 1),
                0,
                e,
                i,
                r,
              ),
              i
            );
          }),
          (PolynomialBezier.shapeSegment = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
          }),
          (PolynomialBezier.shapeSegmentInverted = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
          }),
          extendPrototype([ShapeModifier], ZigZagModifier),
          (ZigZagModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this)),
              (this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this.pointsType = PropertyFactory.getProp(
                t,
                e.pt,
                0,
                null,
                this,
              )),
              (this._isAnimated =
                0 !== this.amplitude.effectsSequence.length ||
                0 !== this.frequency.effectsSequence.length ||
                0 !== this.pointsType.effectsSequence.length);
          }),
          (ZigZagModifier.prototype.processPath = function (t, e, r, i) {
            var s = t._length,
              a = shapePool.newElement();
            if (((a.c = t.c), t.c || (s -= 1), 0 === s)) return a;
            var n = -1,
              o = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, r, i, n);
            for (var h = 0; h < s; h += 1)
              (n = zigZagSegment(a, o, e, r, i, -n)),
                (o =
                  h !== s - 1 || t.c
                    ? PolynomialBezier.shapeSegment(t, (h + 1) % s)
                    : null),
                zigZagCorner(a, t, h + 1, e, r, i, n);
            return a;
          }),
          (ZigZagModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              s,
              a,
              n,
              o = this.shapes.length,
              h = this.amplitude.v,
              l = Math.max(0, Math.round(this.frequency.v)),
              p = this.pointsType.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((n = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    n.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      s = a.shape.paths._length,
                      i = 0;
                    i < s;
                    i += 1
                  )
                    n.addShape(this.processPath(e[i], h, l, p));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          extendPrototype([ShapeModifier], OffsetPathModifier),
          (OffsetPathModifier.prototype.initModifierProperties = function (
            t,
            e,
          ) {
            (this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this.miterLimit = PropertyFactory.getProp(
                t,
                e.ml,
                0,
                null,
                this,
              )),
              (this.lineJoin = e.lj),
              (this._isAnimated = 0 !== this.amount.effectsSequence.length);
          }),
          (OffsetPathModifier.prototype.processPath = function (t, e, r, i) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a,
              n,
              o,
              h = t.length();
            t.c || (h -= 1);
            var l = [];
            for (a = 0; a < h; a += 1)
              (o = PolynomialBezier.shapeSegment(t, a)),
                l.push(offsetSegmentSplit(o, e));
            if (!t.c)
              for (a = h - 1; a >= 0; a -= 1)
                (o = PolynomialBezier.shapeSegmentInverted(t, a)),
                  l.push(offsetSegmentSplit(o, e));
            l = pruneIntersections(l);
            var p = null,
              f = null;
            for (a = 0; a < l.length; a += 1) {
              var d = l[a];
              for (
                f && (p = joinLines(s, f, d[0], r, i)),
                  f = d[d.length - 1],
                  n = 0;
                n < d.length;
                n += 1
              )
                (o = d[n]),
                  p && pointEqual(o.points[0], p)
                    ? s.setXYAt(
                        o.points[1][0],
                        o.points[1][1],
                        "o",
                        s.length() - 1,
                      )
                    : s.setTripleAt(
                        o.points[0][0],
                        o.points[0][1],
                        o.points[1][0],
                        o.points[1][1],
                        o.points[0][0],
                        o.points[0][1],
                        s.length(),
                      ),
                  s.setTripleAt(
                    o.points[3][0],
                    o.points[3][1],
                    o.points[3][0],
                    o.points[3][1],
                    o.points[2][0],
                    o.points[2][1],
                    s.length(),
                  ),
                  (p = o.points[3]);
            }
            return l.length && joinLines(s, f, l[0][0], r, i), s;
          }),
          (OffsetPathModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              s,
              a,
              n,
              o = this.shapes.length,
              h = this.amount.v,
              l = this.miterLimit.v,
              p = this.lineJoin;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((n = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    n.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      s = a.shape.paths._length,
                      i = 0;
                    i < s;
                    i += 1
                  )
                    n.addShape(this.processPath(e[i], h, p, l));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          });
        var FontManager = (function () {
          var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
            e = [];
          e = e.concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ]);
          var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
            i = [65039, 8205];
          function s(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), (r.style.fontFamily = e);
            var i = createTag("span");
            (i.innerText = "giItT1WQy@!-/#"),
              (r.style.position = "absolute"),
              (r.style.left = "-10000px"),
              (r.style.top = "-10000px"),
              (r.style.fontSize = "300px"),
              (r.style.fontVariant = "normal"),
              (r.style.fontStyle = "normal"),
              (r.style.fontWeight = "normal"),
              (r.style.letterSpacing = "0"),
              r.appendChild(i),
              document.body.appendChild(r);
            var s = i.offsetWidth;
            return (
              (i.style.fontFamily =
                (function (t) {
                  var e,
                    r = t.split(","),
                    i = r.length,
                    s = [];
                  for (e = 0; e < i; e += 1)
                    "sans-serif" !== r[e] &&
                      "monospace" !== r[e] &&
                      s.push(r[e]);
                  return s.join(",");
                })(t) +
                ", " +
                e),
              { node: i, w: s, parent: r }
            );
          }
          function a(t, e) {
            var r,
              i = document.body && e ? "svg" : "canvas",
              s = getFontProperties(t);
            if ("svg" === i) {
              var a = createNS("text");
              (a.style.fontSize = "100px"),
                a.setAttribute("font-family", t.fFamily),
                a.setAttribute("font-style", s.style),
                a.setAttribute("font-weight", s.weight),
                (a.textContent = "1"),
                t.fClass
                  ? ((a.style.fontFamily = "inherit"),
                    a.setAttribute("class", t.fClass))
                  : (a.style.fontFamily = t.fFamily),
                e.appendChild(a),
                (r = a);
            } else {
              var n = new OffscreenCanvas(500, 500).getContext("2d");
              (n.font = s.style + " " + s.weight + " 100px " + t.fFamily),
                (r = n);
            }
            return {
              measureText: function (t) {
                return "svg" === i
                  ? ((r.textContent = t), r.getComputedTextLength())
                  : r.measureText(t).width;
              },
            };
          }
          var n = function () {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
          };
          (n.isModifier = function (t, e) {
            var i = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(i);
          }),
            (n.isZeroWidthJoiner = function (t, e) {
              return e ? t === i[0] && e === i[1] : t === i[1];
            }),
            (n.isCombinedCharacter = function (t) {
              return -1 !== e.indexOf(t);
            });
          var o = {
            addChars: function (t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r,
                  i,
                  s = t.length,
                  a = this.chars.length;
                for (e = 0; e < s; e += 1) {
                  for (r = 0, i = !1; r < a; )
                    this.chars[r].style === t[e].style &&
                      this.chars[r].fFamily === t[e].fFamily &&
                      this.chars[r].ch === t[e].ch &&
                      (i = !0),
                      (r += 1);
                  i || (this.chars.push(t[e]), (a += 1));
                }
              }
            },
            addFonts: function (t, e) {
              if (t) {
                if (this.chars)
                  return (this.isLoaded = !0), void (this.fonts = t.list);
                if (!document.body)
                  return (
                    (this.isLoaded = !0),
                    t.list.forEach(function (t) {
                      (t.helper = a(t)), (t.cache = {});
                    }),
                    void (this.fonts = t.list)
                  );
                var r,
                  i = t.list,
                  n = i.length,
                  o = n;
                for (r = 0; r < n; r += 1) {
                  var h,
                    l,
                    p = !0;
                  if (
                    ((i[r].loaded = !1),
                    (i[r].monoCase = s(i[r].fFamily, "monospace")),
                    (i[r].sansCase = s(i[r].fFamily, "sans-serif")),
                    i[r].fPath)
                  ) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if (
                        ((h = document.querySelectorAll(
                          'style[f-forigin="p"][f-family="' +
                            i[r].fFamily +
                            '"], style[f-origin="3"][f-family="' +
                            i[r].fFamily +
                            '"]',
                        )).length > 0 && (p = !1),
                        p)
                      ) {
                        var f = createTag("style");
                        f.setAttribute("f-forigin", i[r].fOrigin),
                          f.setAttribute("f-origin", i[r].origin),
                          f.setAttribute("f-family", i[r].fFamily),
                          (f.type = "text/css"),
                          (f.innerText =
                            "@font-face {font-family: " +
                            i[r].fFamily +
                            "; font-style: normal; src: url('" +
                            i[r].fPath +
                            "');}"),
                          e.appendChild(f);
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (
                        h = document.querySelectorAll(
                          'link[f-forigin="g"], link[f-origin="1"]',
                        ),
                          l = 0;
                        l < h.length;
                        l += 1
                      )
                        -1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                      if (p) {
                        var d = createTag("link");
                        d.setAttribute("f-forigin", i[r].fOrigin),
                          d.setAttribute("f-origin", i[r].origin),
                          (d.type = "text/css"),
                          (d.rel = "stylesheet"),
                          (d.href = i[r].fPath),
                          document.body.appendChild(d);
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (
                        h = document.querySelectorAll(
                          'script[f-forigin="t"], script[f-origin="2"]',
                        ),
                          l = 0;
                        l < h.length;
                        l += 1
                      )
                        i[r].fPath === h[l].src && (p = !1);
                      if (p) {
                        var c = createTag("link");
                        c.setAttribute("f-forigin", i[r].fOrigin),
                          c.setAttribute("f-origin", i[r].origin),
                          c.setAttribute("rel", "stylesheet"),
                          c.setAttribute("href", i[r].fPath),
                          e.appendChild(c);
                      }
                    }
                  } else (i[r].loaded = !0), (o -= 1);
                  (i[r].helper = a(i[r], e)),
                    (i[r].cache = {}),
                    this.fonts.push(i[r]);
                }
                0 === o
                  ? (this.isLoaded = !0)
                  : setTimeout(this.checkLoadedFonts.bind(this), 100);
              } else this.isLoaded = !0;
            },
            getCharData: function (e, r, i) {
              for (var s = 0, a = this.chars.length; s < a; ) {
                if (
                  this.chars[s].ch === e &&
                  this.chars[s].style === r &&
                  this.chars[s].fFamily === i
                )
                  return this.chars[s];
                s += 1;
              }
              return (
                (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                  console &&
                  console.warn &&
                  !this._warned &&
                  ((this._warned = !0),
                  console.warn(
                    "Missing character from exported characters list: ",
                    e,
                    r,
                    i,
                  )),
                t
              );
            },
            getFontByName: function (t) {
              for (var e = 0, r = this.fonts.length; e < r; ) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1;
              }
              return this.fonts[0];
            },
            measureText: function (t, e, r) {
              var i = this.getFontByName(e),
                s = t.charCodeAt(0);
              if (!i.cache[s + 1]) {
                var a = i.helper;
                if (" " === t) {
                  var n = a.measureText("|" + t + "|"),
                    o = a.measureText("||");
                  i.cache[s + 1] = (n - o) / 100;
                } else i.cache[s + 1] = a.measureText(t) / 100;
              }
              return i.cache[s + 1] * r;
            },
            checkLoadedFonts: function () {
              var t,
                e,
                r,
                i = this.fonts.length,
                s = i;
              for (t = 0; t < i; t += 1)
                this.fonts[t].loaded
                  ? (s -= 1)
                  : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin
                  ? (this.fonts[t].loaded = !0)
                  : ((e = this.fonts[t].monoCase.node),
                    (r = this.fonts[t].monoCase.w),
                    e.offsetWidth !== r
                      ? ((s -= 1), (this.fonts[t].loaded = !0))
                      : ((e = this.fonts[t].sansCase.node),
                        (r = this.fonts[t].sansCase.w),
                        e.offsetWidth !== r &&
                          ((s -= 1), (this.fonts[t].loaded = !0))),
                    this.fonts[t].loaded &&
                      (this.fonts[t].sansCase.parent.parentNode.removeChild(
                        this.fonts[t].sansCase.parent,
                      ),
                      this.fonts[t].monoCase.parent.parentNode.removeChild(
                        this.fonts[t].monoCase.parent,
                      )));
              0 !== s && Date.now() - this.initTime < 5e3
                ? setTimeout(this.checkLoadedFontsBinded, 20)
                : setTimeout(this.setIsLoadedBinded, 10);
            },
            setIsLoaded: function () {
              this.isLoaded = !0;
            },
          };
          return (n.prototype = o), n;
        })();
        function RenderableElement() {}
        RenderableElement.prototype = {
          initRenderable: function () {
            (this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []);
          },
          addRenderableComponent: function (t) {
            -1 === this.renderableComponents.indexOf(t) &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            -1 !== this.renderableComponents.indexOf(t) &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1,
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? !0 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : !1 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            var t,
              e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return 5 === this.data.ty
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        };
        var getBlendMode =
            ((blendModeEnums = {
              0: "source-over",
              1: "multiply",
              2: "screen",
              3: "overlay",
              4: "darken",
              5: "lighten",
              6: "color-dodge",
              7: "color-burn",
              8: "hard-light",
              9: "soft-light",
              10: "difference",
              11: "exclusion",
              12: "hue",
              13: "saturation",
              14: "color",
              15: "luminosity",
            }),
            function (t) {
              return blendModeEnums[t] || "";
            }),
          blendModeEnums;
        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(t, e) {
          var r,
            i = t.ef || [];
          this.effectElements = [];
          var s,
            a = i.length;
          for (r = 0; r < a; r += 1)
            (s = new GroupEffect(i[r], e)), this.effectElements.push(s);
        }
        function GroupEffect(t, e) {
          this.init(t, e);
        }
        function BaseElement() {}
        function FrameElement() {}
        function FootageElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            (this.footageData = e.imageLoader.getAsset(this.assetData)),
            this.initBaseData(t, e, r);
        }
        function AudioElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            this.initBaseData(t, e, r),
            (this._isPlaying = !1),
            (this._canPlay = !1);
          var i = this.globalData.getAssetsPath(this.assetData);
          (this.audio = this.globalData.audioController.createAudio(i)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this._volumeMultiplier = 1),
            (this._volume = 1),
            (this._previousVolume = null),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }),
            (this.lv = PropertyFactory.getProp(
              this,
              t.au && t.au.lv ? t.au.lv : { k: [100] },
              1,
              0.01,
              this,
            ));
        }
        function BaseRenderer() {}
        function TransformElement() {}
        function MaskElement(t, e, r) {
          (this.data = t),
            (this.element = e),
            (this.globalData = r),
            (this.storedData = []),
            (this.masksProperties = this.data.masksProperties || []),
            (this.maskElement = null);
          var i,
            s,
            a = this.globalData.defs,
            n = this.masksProperties ? this.masksProperties.length : 0;
          (this.viewData = createSizedArray(n)), (this.solidPath = "");
          var o,
            h,
            l,
            p,
            f,
            d,
            c = this.masksProperties,
            m = 0,
            u = [],
            y = createElementID(),
            g = "clipPath",
            _ = "clip-path";
          for (i = 0; i < n; i += 1)
            if (
              ((("a" !== c[i].mode && "n" !== c[i].mode) ||
                c[i].inv ||
                100 !== c[i].o.k ||
                c[i].o.x) &&
                ((g = "mask"), (_ = "mask")),
              ("s" !== c[i].mode && "i" !== c[i].mode) || 0 !== m
                ? (l = null)
                : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
                  l.setAttribute("width", this.element.comp.data.w || 0),
                  l.setAttribute("height", this.element.comp.data.h || 0),
                  u.push(l)),
              (s = createNS("path")),
              "n" === c[i].mode)
            )
              (this.viewData[i] = {
                op: PropertyFactory.getProp(
                  this.element,
                  c[i].o,
                  0,
                  0.01,
                  this.element,
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                elem: s,
                lastPath: "",
              }),
                a.appendChild(s);
            else {
              var v;
              if (
                ((m += 1),
                s.setAttribute(
                  "fill",
                  "s" === c[i].mode ? "#000000" : "#ffffff",
                ),
                s.setAttribute("clip-rule", "nonzero"),
                0 !== c[i].x.k
                  ? ((g = "mask"),
                    (_ = "mask"),
                    (d = PropertyFactory.getProp(
                      this.element,
                      c[i].x,
                      0,
                      null,
                      this.element,
                    )),
                    (v = createElementID()),
                    (p = createNS("filter")).setAttribute("id", v),
                    (f = createNS("feMorphology")).setAttribute(
                      "operator",
                      "erode",
                    ),
                    f.setAttribute("in", "SourceGraphic"),
                    f.setAttribute("radius", "0"),
                    p.appendChild(f),
                    a.appendChild(p),
                    s.setAttribute(
                      "stroke",
                      "s" === c[i].mode ? "#000000" : "#ffffff",
                    ))
                  : ((f = null), (d = null)),
                (this.storedData[i] = {
                  elem: s,
                  x: d,
                  expan: f,
                  lastPath: "",
                  lastOperator: "",
                  filterId: v,
                  lastRadius: 0,
                }),
                "i" === c[i].mode)
              ) {
                h = u.length;
                var b = createNS("g");
                for (o = 0; o < h; o += 1) b.appendChild(u[o]);
                var E = createNS("mask");
                E.setAttribute("mask-type", "alpha"),
                  E.setAttribute("id", y + "_" + m),
                  E.appendChild(s),
                  a.appendChild(E),
                  b.setAttribute(
                    "mask",
                    "url(" + getLocationHref() + "#" + y + "_" + m + ")",
                  ),
                  (u.length = 0),
                  u.push(b);
              } else u.push(s);
              c[i].inv &&
                !this.solidPath &&
                (this.solidPath = this.createLayerSolidPath()),
                (this.viewData[i] = {
                  elem: s,
                  lastPath: "",
                  op: PropertyFactory.getProp(
                    this.element,
                    c[i].o,
                    0,
                    0.01,
                    this.element,
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    c[i],
                    3,
                  ),
                  invRect: l,
                }),
                this.viewData[i].prop.k ||
                  this.drawPath(
                    c[i],
                    this.viewData[i].prop.v,
                    this.viewData[i],
                  );
            }
          for (
            this.maskElement = createNS(g), n = u.length, i = 0;
            i < n;
            i += 1
          )
            this.maskElement.appendChild(u[i]);
          m > 0 &&
            (this.maskElement.setAttribute("id", y),
            this.element.maskedElement.setAttribute(
              _,
              "url(" + getLocationHref() + "#" + y + ")",
            ),
            a.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this);
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect),
          (GroupEffect.prototype.getValue =
            GroupEffect.prototype.iterateDynamicProperties),
          (GroupEffect.prototype.init = function (t, e) {
            var r;
            (this.data = t),
              (this.effectElements = []),
              this.initDynamicPropertyContainer(e);
            var i,
              s = this.data.ef.length,
              a = this.data.ef;
            for (r = 0; r < s; r += 1) {
              switch (((i = null), a[r].ty)) {
                case 0:
                  i = new SliderEffect(a[r], e, this);
                  break;
                case 1:
                  i = new AngleEffect(a[r], e, this);
                  break;
                case 2:
                  i = new ColorEffect(a[r], e, this);
                  break;
                case 3:
                  i = new PointEffect(a[r], e, this);
                  break;
                case 4:
                case 7:
                  i = new CheckboxEffect(a[r], e, this);
                  break;
                case 10:
                  i = new LayerIndexEffect(a[r], e, this);
                  break;
                case 11:
                  i = new MaskIndexEffect(a[r], e, this);
                  break;
                case 5:
                  i = new EffectsManager(a[r], e);
                  break;
                default:
                  i = new NoValueEffect(a[r]);
              }
              i && this.effectElements.push(i);
            }
          }),
          (BaseElement.prototype = {
            checkMasks: function () {
              if (!this.data.hasMask) return !1;
              for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if (
                  "n" !== this.data.masksProperties[t].mode &&
                  !1 !== this.data.masksProperties[t].cl
                )
                  return !0;
                t += 1;
              }
              return !1;
            },
            initExpressions: function () {
              var t = getExpressionInterfaces();
              if (t) {
                var e = t("layer"),
                  r = t("effects"),
                  i = t("shape"),
                  s = t("text"),
                  a = t("comp");
                (this.layerInterface = e(this)),
                  this.data.hasMask &&
                    this.maskManager &&
                    this.layerInterface.registerMaskInterface(this.maskManager);
                var n = r.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(n),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = a(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface = i(
                        this.shapesData,
                        this.itemsData,
                        this.layerInterface,
                      )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface = s(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface));
              }
            },
            setBlendMode: function () {
              var t = getBlendMode(this.data.bm);
              (this.baseElement || this.layerElement).style["mix-blend-mode"] =
                t;
            },
            initBaseData: function (t, e, r) {
              (this.globalData = e),
                (this.comp = r),
                (this.data = t),
                (this.layerId = createElementID()),
                this.data.sr || (this.data.sr = 1),
                (this.effectsManager = new EffectsManager(
                  this.data,
                  this,
                  this.dynamicProperties,
                ));
            },
            getType: function () {
              return this.type;
            },
            sourceRectAtTime: function () {},
          }),
          (FrameElement.prototype = {
            initFrame: function () {
              (this._isFirstFrame = !1),
                (this.dynamicProperties = []),
                (this._mdf = !1);
            },
            prepareProperties: function (t, e) {
              var r,
                i = this.dynamicProperties.length;
              for (r = 0; r < i; r += 1)
                (e ||
                  (this._isParent &&
                    "transform" === this.dynamicProperties[r].propType)) &&
                  (this.dynamicProperties[r].getValue(),
                  this.dynamicProperties[r]._mdf &&
                    ((this.globalData._mdf = !0), (this._mdf = !0)));
            },
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                this.dynamicProperties.push(t);
            },
          }),
          (FootageElement.prototype.prepareFrame = function () {}),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            FootageElement,
          ),
          (FootageElement.prototype.getBaseElement = function () {
            return null;
          }),
          (FootageElement.prototype.renderFrame = function () {}),
          (FootageElement.prototype.destroy = function () {}),
          (FootageElement.prototype.initExpressions = function () {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("footage");
              this.layerInterface = e(this);
            }
          }),
          (FootageElement.prototype.getFootageData = function () {
            return this.footageData;
          }),
          (AudioElement.prototype.prepareFrame = function (t) {
            if (
              (this.prepareRenderableFrame(t, !0),
              this.prepareProperties(t, !0),
              this.tm._placeholder)
            )
              this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r &&
              ((this._previousVolume = r), this.audio.volume(r));
          }),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            AudioElement,
          ),
          (AudioElement.prototype.renderFrame = function () {
            this.isInRange &&
              this._canPlay &&
              (this._isPlaying
                ? (!this.audio.playing() ||
                    Math.abs(
                      this._currentTime / this.globalData.frameRate -
                        this.audio.seek(),
                    ) > 0.1) &&
                  this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(),
                  this.audio.seek(
                    this._currentTime / this.globalData.frameRate,
                  ),
                  (this._isPlaying = !0)));
          }),
          (AudioElement.prototype.show = function () {}),
          (AudioElement.prototype.hide = function () {
            this.audio.pause(), (this._isPlaying = !1);
          }),
          (AudioElement.prototype.pause = function () {
            this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
          }),
          (AudioElement.prototype.resume = function () {
            this._canPlay = !0;
          }),
          (AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
          }),
          (AudioElement.prototype.volume = function (t) {
            (this._volumeMultiplier = t),
              (this._previousVolume = t * this._volume),
              this.audio.volume(this._previousVolume);
          }),
          (AudioElement.prototype.getBaseElement = function () {
            return null;
          }),
          (AudioElement.prototype.destroy = function () {}),
          (AudioElement.prototype.sourceRectAtTime = function () {}),
          (AudioElement.prototype.initExpressions = function () {}),
          (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              r,
              i = this.layers.length;
            for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
              this.elements[e] ||
                ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                  r.op - r.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers =
                  !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
              default:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
            }
          }),
          (BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }),
          (BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.buildAllItems = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.includeLayers = function (t) {
            var e;
            this.completeLayers = !1;
            var r,
              i = t.length,
              s = this.layers.length;
            for (e = 0; e < i; e += 1)
              for (r = 0; r < s; ) {
                if (this.layers[r].id === t[e].id) {
                  this.layers[r] = t[e];
                  break;
                }
                r += 1;
              }
          }),
          (BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
          }),
          (BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          }),
          (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (
              var i = this.elements, s = this.layers, a = 0, n = s.length;
              a < n;

            )
              s[a].ind == e &&
                (i[a] && !0 !== i[a]
                  ? (r.push(i[a]),
                    i[a].setAsParent(),
                    void 0 !== s[a].parent
                      ? this.buildElementParenting(t, s[a].parent, r)
                      : t.setHierarchy(r))
                  : (this.buildItem(a), this.addPendingElement(t))),
                (a += 1);
          }),
          (BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
          }),
          (BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(),
                  this.globalData.projectInterface.registerComposition(i);
              }
          }),
          (BaseRenderer.prototype.getElementByPath = function (t) {
            var e,
              r = t.shift();
            if ("number" == typeof r) e = this.elements[r];
            else {
              var i,
                s = this.elements.length;
              for (i = 0; i < s; i += 1)
                if (this.elements[i].data.nm === r) {
                  e = this.elements[i];
                  break;
                }
            }
            return 0 === t.length ? e : e.getElementByPath(t);
          }),
          (BaseRenderer.prototype.setupGlobalData = function (t, e) {
            (this.globalData.fontManager = new FontManager()),
              this.globalData.fontManager.addChars(t.chars),
              this.globalData.fontManager.addFonts(t.fonts, e),
              (this.globalData.getAssetData =
                this.animationItem.getAssetData.bind(this.animationItem)),
              (this.globalData.getAssetsPath =
                this.animationItem.getAssetsPath.bind(this.animationItem)),
              (this.globalData.imageLoader = this.animationItem.imagePreloader),
              (this.globalData.audioController =
                this.animationItem.audioController),
              (this.globalData.frameId = 0),
              (this.globalData.frameRate = t.fr),
              (this.globalData.nm = t.nm),
              (this.globalData.compSize = { w: t.w, h: t.h });
          }),
          (TransformElement.prototype = {
            initTransform: function () {
              (this.finalTransform = {
                mProp: this.data.ks
                  ? TransformPropertyFactory.getTransformProperty(
                      this,
                      this.data.ks,
                      this,
                    )
                  : { o: 0 },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix(),
              }),
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty;
            },
            renderTransform: function () {
              if (
                ((this.finalTransform._opMdf =
                  this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                (this.finalTransform._matMdf =
                  this.finalTransform.mProp._mdf || this._isFirstFrame),
                this.hierarchy)
              ) {
                var t,
                  e = this.finalTransform.mat,
                  r = 0,
                  i = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                  for (; r < i; ) {
                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                      this.finalTransform._matMdf = !0;
                      break;
                    }
                    r += 1;
                  }
                if (this.finalTransform._matMdf)
                  for (
                    t = this.finalTransform.mProp.v.props,
                      e.cloneFromProps(t),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    (t = this.hierarchy[r].finalTransform.mProp.v.props),
                      e.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15],
                      );
              }
            },
            globalToLocal: function (t) {
              var e = [];
              e.push(this.finalTransform);
              for (var r, i = !0, s = this.comp; i; )
                s.finalTransform
                  ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                    (s = s.comp))
                  : (i = !1);
              var a,
                n = e.length;
              for (r = 0; r < n; r += 1)
                (a = e[r].mat.applyToPointArray(0, 0, 0)),
                  (t = [t[0] - a[0], t[1] - a[1], 0]);
              return t;
            },
            mHelper: new Matrix(),
          }),
          (MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
          }),
          (MaskElement.prototype.renderFrame = function (t) {
            var e,
              r = this.element.finalTransform.mat,
              i = this.masksProperties.length;
            for (e = 0; e < i; e += 1)
              if (
                ((this.viewData[e].prop._mdf || t) &&
                  this.drawPath(
                    this.masksProperties[e],
                    this.viewData[e].prop.v,
                    this.viewData[e],
                  ),
                (this.viewData[e].op._mdf || t) &&
                  this.viewData[e].elem.setAttribute(
                    "fill-opacity",
                    this.viewData[e].op.v,
                  ),
                "n" !== this.masksProperties[e].mode &&
                  (this.viewData[e].invRect &&
                    (this.element.finalTransform.mProp._mdf || t) &&
                    this.viewData[e].invRect.setAttribute(
                      "transform",
                      r.getInverseMatrix().to2dCSS(),
                    ),
                  this.storedData[e].x && (this.storedData[e].x._mdf || t)))
              ) {
                var s = this.storedData[e].expan;
                this.storedData[e].x.v < 0
                  ? ("erode" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "erode"),
                      this.storedData[e].elem.setAttribute(
                        "filter",
                        "url(" +
                          getLocationHref() +
                          "#" +
                          this.storedData[e].filterId +
                          ")",
                      )),
                    s.setAttribute("radius", -this.storedData[e].x.v))
                  : ("dilate" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "dilate"),
                      this.storedData[e].elem.setAttribute("filter", null)),
                    this.storedData[e].elem.setAttribute(
                      "stroke-width",
                      2 * this.storedData[e].x.v,
                    ));
              }
          }),
          (MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
          }),
          (MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return (
              (t += " h" + this.globalData.compSize.w),
              (t += " v" + this.globalData.compSize.h),
              (t += " h-" + this.globalData.compSize.w),
              (t += " v-" + this.globalData.compSize.h + " ")
            );
          }),
          (MaskElement.prototype.drawPath = function (t, e, r) {
            var i,
              s,
              a = " M" + e.v[0][0] + "," + e.v[0][1];
            for (s = e._length, i = 1; i < s; i += 1)
              a +=
                " C" +
                e.o[i - 1][0] +
                "," +
                e.o[i - 1][1] +
                " " +
                e.i[i][0] +
                "," +
                e.i[i][1] +
                " " +
                e.v[i][0] +
                "," +
                e.v[i][1];
            if (
              (e.c &&
                s > 1 &&
                (a +=
                  " C" +
                  e.o[i - 1][0] +
                  "," +
                  e.o[i - 1][1] +
                  " " +
                  e.i[0][0] +
                  "," +
                  e.i[0][1] +
                  " " +
                  e.v[0][0] +
                  "," +
                  e.v[0][1]),
              r.lastPath !== a)
            ) {
              var n = "";
              r.elem &&
                (e.c && (n = t.inv ? this.solidPath + a : a),
                r.elem.setAttribute("d", n)),
                (r.lastPath = a);
            }
          }),
          (MaskElement.prototype.destroy = function () {
            (this.element = null),
              (this.globalData = null),
              (this.maskElement = null),
              (this.data = null),
              (this.masksProperties = null);
          });
        var filtersFactory = (function () {
            var t = {
              createFilter: function (t, e) {
                var r = createNS("filter");
                return (
                  r.setAttribute("id", t),
                  !0 !== e &&
                    (r.setAttribute("filterUnits", "objectBoundingBox"),
                    r.setAttribute("x", "0%"),
                    r.setAttribute("y", "0%"),
                    r.setAttribute("width", "100%"),
                    r.setAttribute("height", "100%")),
                  r
                );
              },
              createAlphaToLuminanceFilter: function () {
                var t = createNS("feColorMatrix");
                return (
                  t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1",
                  ),
                  t
                );
              },
            };
            return t;
          })(),
          featureSupport = (function () {
            var t = { maskType: !0 };
            return (
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (t.maskType = !1),
              t
            );
          })(),
          registeredEffects = {},
          idPrefix = "filter_result_";
        function SVGEffects(t) {
          var e,
            r,
            i = "SourceGraphic",
            s = t.data.ef ? t.data.ef.length : 0,
            a = createElementID(),
            n = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], e = 0; e < s; e += 1) {
            r = null;
            var h = t.data.ef[e].ty;
            registeredEffects[h] &&
              ((r = new (0, registeredEffects[h].effect)(
                n,
                t.effectsManager.effectElements[e],
                t,
                idPrefix + o,
                i,
              )),
              (i = idPrefix + o),
              registeredEffects[h].countsAsEffect && (o += 1)),
              r && this.filters.push(r);
          }
          o &&
            (t.globalData.defs.appendChild(n),
            t.layerElement.setAttribute(
              "filter",
              "url(" + getLocationHref() + "#" + a + ")",
            )),
            this.filters.length && t.addRenderableComponent(this);
        }
        function registerEffect(t, e, r) {
          registeredEffects[t] = { effect: e, countsAsEffect: r };
        }
        function SVGBaseElement() {}
        function HierarchyElement() {}
        function RenderableDOMElement() {}
        function IImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            this.initElement(t, e, r),
            (this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            });
        }
        function ProcessedElement(t, e) {
          (this.elem = t), (this.pos = e);
        }
        function IShapeElement() {}
        (SVGEffects.prototype.renderFrame = function (t) {
          var e,
            r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
        }),
          (SVGBaseElement.prototype = {
            initRendererElement: function () {
              this.layerElement = createNS("g");
            },
            createContainerElements: function () {
              (this.matteElement = createNS("g")),
                (this.transformedElement = this.layerElement),
                (this.maskedElement = this.layerElement),
                (this._sizeChanged = !1);
              var t = null;
              if (this.data.td) {
                this.matteMasks = {};
                var e = createNS("symbol");
                e.setAttribute("id", this.layerId);
                var r = createNS("g");
                r.appendChild(this.layerElement),
                  e.appendChild(r),
                  (t = r),
                  this.globalData.defs.appendChild(e);
              } else
                this.data.tt
                  ? (this.matteElement.appendChild(this.layerElement),
                    (t = this.matteElement),
                    (this.baseElement = this.matteElement))
                  : (this.baseElement = this.layerElement);
              if (
                (this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 === this.data.ty && !this.data.hd)
              ) {
                var i = createNS("clipPath"),
                  s = createNS("path");
                s.setAttribute(
                  "d",
                  "M0,0 L" +
                    this.data.w +
                    ",0 L" +
                    this.data.w +
                    "," +
                    this.data.h +
                    " L0," +
                    this.data.h +
                    "z",
                );
                var a = createElementID();
                if (
                  (i.setAttribute("id", a),
                  i.appendChild(s),
                  this.globalData.defs.appendChild(i),
                  this.checkMasks())
                ) {
                  var n = createNS("g");
                  n.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + a + ")",
                  ),
                    n.appendChild(this.layerElement),
                    (this.transformedElement = n),
                    t
                      ? t.appendChild(this.transformedElement)
                      : (this.baseElement = this.transformedElement);
                } else
                  this.layerElement.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + a + ")",
                  );
              }
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              this.finalTransform._matMdf &&
                this.transformedElement.setAttribute(
                  "transform",
                  this.finalTransform.mat.to2dCSS(),
                ),
                this.finalTransform._opMdf &&
                  this.transformedElement.setAttribute(
                    "opacity",
                    this.finalTransform.mProp.o.v,
                  );
            },
            destroyBaseElement: function () {
              (this.layerElement = null),
                (this.matteElement = null),
                this.maskManager.destroy();
            },
            getBaseElement: function () {
              return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
              (this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData,
              )),
                (this.renderableEffectsManager = new SVGEffects(this));
            },
            getMatte: function (t) {
              if (!this.matteMasks[t]) {
                var e,
                  r,
                  i,
                  s,
                  a = this.layerId + "_" + t;
                if (1 === t || 3 === t) {
                  var n = createNS("mask");
                  n.setAttribute("id", a),
                    n.setAttribute(
                      "mask-type",
                      3 === t ? "luminance" : "alpha",
                    ),
                    (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId,
                    ),
                    n.appendChild(i),
                    this.globalData.defs.appendChild(n),
                    featureSupport.maskType ||
                      1 !== t ||
                      (n.setAttribute("mask-type", "luminance"),
                      (e = createElementID()),
                      (r = filtersFactory.createFilter(e)),
                      this.globalData.defs.appendChild(r),
                      r.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter(),
                      ),
                      (s = createNS("g")).appendChild(i),
                      n.appendChild(s),
                      s.setAttribute(
                        "filter",
                        "url(" + getLocationHref() + "#" + e + ")",
                      ));
                } else if (2 === t) {
                  var o = createNS("mask");
                  o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                  var h = createNS("g");
                  o.appendChild(h),
                    (e = createElementID()),
                    (r = filtersFactory.createFilter(e));
                  var l = createNS("feComponentTransfer");
                  l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
                  var p = createNS("feFuncA");
                  p.setAttribute("type", "table"),
                    p.setAttribute("tableValues", "1.0 0.0"),
                    l.appendChild(p),
                    this.globalData.defs.appendChild(r);
                  var f = createNS("rect");
                  f.setAttribute("width", this.comp.data.w),
                    f.setAttribute("height", this.comp.data.h),
                    f.setAttribute("x", "0"),
                    f.setAttribute("y", "0"),
                    f.setAttribute("fill", "#ffffff"),
                    f.setAttribute("opacity", "0"),
                    h.setAttribute(
                      "filter",
                      "url(" + getLocationHref() + "#" + e + ")",
                    ),
                    h.appendChild(f),
                    (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId,
                    ),
                    h.appendChild(i),
                    featureSupport.maskType ||
                      (o.setAttribute("mask-type", "luminance"),
                      r.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter(),
                      ),
                      (s = createNS("g")),
                      h.appendChild(f),
                      s.appendChild(this.layerElement),
                      h.appendChild(s)),
                    this.globalData.defs.appendChild(o);
                }
                this.matteMasks[t] = a;
              }
              return this.matteMasks[t];
            },
            setMatte: function (t) {
              this.matteElement &&
                this.matteElement.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + t + ")",
                );
            },
          }),
          (HierarchyElement.prototype = {
            initHierarchy: function () {
              (this.hierarchy = []),
                (this._isParent = !1),
                this.checkParenting();
            },
            setHierarchy: function (t) {
              this.hierarchy = t;
            },
            setAsParent: function () {
              this._isParent = !0;
            },
            checkParenting: function () {
              void 0 !== this.data.parent &&
                this.comp.buildElementParenting(this, this.data.parent, []);
            },
          }),
          extendPrototype(
            [
              RenderableElement,
              createProxyFunction({
                initElement: function (t, e, r) {
                  this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initTransform(t, e, r),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide();
                },
                hide: function () {
                  this.hidden ||
                    (this.isInRange && !this.isTransparent) ||
                    (((this.baseElement || this.layerElement).style.display =
                      "none"),
                    (this.hidden = !0));
                },
                show: function () {
                  this.isInRange &&
                    !this.isTransparent &&
                    (this.data.hd ||
                      ((this.baseElement || this.layerElement).style.display =
                        "block"),
                    (this.hidden = !1),
                    (this._isFirstFrame = !0));
                },
                renderFrame: function () {
                  this.data.hd ||
                    this.hidden ||
                    (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function () {},
                prepareFrame: function (t) {
                  (this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency();
                },
                destroy: function () {
                  (this.innerElem = null), this.destroyBaseElement();
                },
              }),
            ],
            RenderableDOMElement,
          ),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            IImageElement,
          ),
          (IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            (this.innerElem = createNS("image")),
              this.innerElem.setAttribute("width", this.assetData.w + "px"),
              this.innerElem.setAttribute("height", this.assetData.h + "px"),
              this.innerElem.setAttribute(
                "preserveAspectRatio",
                this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio,
              ),
              this.innerElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t,
              ),
              this.layerElement.appendChild(this.innerElem);
          }),
          (IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          }),
          (IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
              var e,
                r = this.shapeModifiers.length;
              for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
              for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
              return !1;
            },
            renderModifiers: function () {
              if (this.shapeModifiers.length) {
                var t,
                  e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (
                  t = (e = this.shapeModifiers.length) - 1;
                  t >= 0 &&
                  !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  t -= 1
                );
              }
            },
            searchProcessedElement: function (t) {
              for (
                var e = this.processedElements, r = 0, i = e.length;
                r < i;

              ) {
                if (e[r].elem === t) return e[r].pos;
                r += 1;
              }
              return 0;
            },
            addProcessedElement: function (t, e) {
              for (var r = this.processedElements, i = r.length; i; )
                if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
              r.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
              this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange);
            },
          });
        var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
          lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
        function SVGShapeData(t, e, r) {
          (this.caches = []),
            (this.styles = []),
            (this.transformers = t),
            (this.lStr = ""),
            (this.sh = r),
            (this.lvl = e),
            (this._isAnimated = !!r.k);
          for (var i = 0, s = t.length; i < s; ) {
            if (t[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break;
            }
            i += 1;
          }
        }
        function SVGStyleData(t, e) {
          (this.data = t),
            (this.type = t.ty),
            (this.d = ""),
            (this.lvl = e),
            (this._mdf = !1),
            (this.closed = !0 === t.hd),
            (this.pElem = createNS("path")),
            (this.msElem = null);
        }
        function DashProperty(t, e, r, i) {
          var s;
          (this.elem = t),
            (this.frameId = -1),
            (this.dataProps = createSizedArray(e.length)),
            (this.renderer = r),
            (this.k = !1),
            (this.dashStr = ""),
            (this.dashArray = createTypedArray(
              "float32",
              e.length ? e.length - 1 : 0,
            )),
            (this.dashoffset = createTypedArray("float32", 1)),
            this.initDynamicPropertyContainer(i);
          var a,
            n = e.length || 0;
          for (s = 0; s < n; s += 1)
            (a = PropertyFactory.getProp(t, e[s].v, 0, 0, this)),
              (this.k = a.k || this.k),
              (this.dataProps[s] = { n: e[s].n, p: a });
          this.k || this.getValue(!0), (this._isAnimated = this.k);
        }
        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r),
            (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r);
        }
        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.style = r);
        }
        function GradientProperty(t, e, r) {
          (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
          var i = e.k.k[0].s
            ? e.k.k[0].s.length - 4 * e.p
            : e.k.k.length - 4 * e.p;
          (this.o = createTypedArray("float32", i)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = i),
            this.initDynamicPropertyContainer(r),
            (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0);
        }
        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            this.initGradientData(t, e, r);
        }
        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            this.initGradientData(t, e, r),
            (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
          (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
        }
        function SVGTransformData(t, e, r) {
          (this.transform = { mProps: t, op: e, container: r }),
            (this.elements = []),
            (this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length);
        }
        (SVGShapeData.prototype.setAsAnimated = function () {
          this._isAnimated = !0;
        }),
          (SVGStyleData.prototype.reset = function () {
            (this.d = ""), (this._mdf = !1);
          }),
          (DashProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId || t) &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties(),
              (this._mdf = this._mdf || t),
              this._mdf)
            ) {
              var e = 0,
                r = this.dataProps.length;
              for (
                "svg" === this.renderer && (this.dashStr = ""), e = 0;
                e < r;
                e += 1
              )
                "o" !== this.dataProps[e].n
                  ? "svg" === this.renderer
                    ? (this.dashStr += " " + this.dataProps[e].p.v)
                    : (this.dashArray[e] = this.dataProps[e].p.v)
                  : (this.dashoffset[0] = this.dataProps[e].p.v);
            }
          }),
          extendPrototype([DynamicPropertyContainer], DashProperty),
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
          extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
          (GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, i = this.o.length / 2; r < i; ) {
              if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
              r += 1;
            }
            return !0;
          }),
          (GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                  return !1;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          }),
          (GradientProperty.prototype.getValue = function (t) {
            if (
              (this.prop.getValue(),
              (this._mdf = !1),
              (this._cmdf = !1),
              (this._omdf = !1),
              this.prop._mdf || t)
            ) {
              var e,
                r,
                i,
                s = 4 * this.data.p;
              for (e = 0; e < s; e += 1)
                (r = e % 4 == 0 ? 100 : 255),
                  (i = Math.round(this.prop.v[e] * r)),
                  this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t));
              if (this.o.length)
                for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
                  (r = e % 2 == 0 ? 100 : 1),
                    (i =
                      e % 2 == 0
                        ? Math.round(100 * this.prop.v[e])
                        : this.prop.v[e]),
                    this.o[e - 4 * this.data.p] !== i &&
                      ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t));
              this._mdf = !t;
            }
          }),
          extendPrototype([DynamicPropertyContainer], GradientProperty),
          (SVGGradientFillStyleData.prototype.initGradientData = function (
            t,
            e,
            r,
          ) {
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
              (this.h = PropertyFactory.getProp(
                t,
                e.h || { k: 0 },
                0,
                0.01,
                this,
              )),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: 0 },
                0,
                degToRads,
                this,
              )),
              (this.g = new GradientProperty(t, e.g, this)),
              (this.style = r),
              (this.stops = []),
              this.setGradientData(r.pElem, e),
              this.setGradientOpacity(e, r),
              (this._isAnimated = !!this._isAnimated);
          }),
          (SVGGradientFillStyleData.prototype.setGradientData = function (
            t,
            e,
          ) {
            var r = createElementID(),
              i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r),
              i.setAttribute("spreadMethod", "pad"),
              i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s,
              a,
              n,
              o = [];
            for (n = 4 * e.g.p, a = 0; a < n; a += 4)
              (s = createNS("stop")), i.appendChild(s), o.push(s);
            t.setAttribute(
              "gf" === e.ty ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + r + ")",
            ),
              (this.gf = i),
              (this.cst = o);
          }),
          (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
            t,
            e,
          ) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r,
                i,
                s,
                a = createNS("mask"),
                n = createNS("path");
              a.appendChild(n);
              var o = createElementID(),
                h = createElementID();
              a.setAttribute("id", h);
              var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
              l.setAttribute("id", o),
                l.setAttribute("spreadMethod", "pad"),
                l.setAttribute("gradientUnits", "userSpaceOnUse"),
                (s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
              var p = this.stops;
              for (i = 4 * t.g.p; i < s; i += 2)
                (r = createNS("stop")).setAttribute(
                  "stop-color",
                  "rgb(255,255,255)",
                ),
                  l.appendChild(r),
                  p.push(r);
              n.setAttribute(
                "gf" === t.ty ? "fill" : "stroke",
                "url(" + getLocationHref() + "#" + o + ")",
              ),
                "gs" === t.ty &&
                  (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                  n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                  1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                (this.of = l),
                (this.ms = a),
                (this.ost = p),
                (this.maskId = h),
                (e.msElem = n);
            }
          }),
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
          extendPrototype(
            [SVGGradientFillStyleData, DynamicPropertyContainer],
            SVGGradientStrokeStyleData,
          );
        var buildShapeString = function (t, e, r, i) {
            if (0 === e) return "";
            var s,
              a = t.o,
              n = t.i,
              o = t.v,
              h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (s = 1; s < e; s += 1)
              h +=
                " C" +
                i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                " " +
                i.applyToPointStringified(n[s][0], n[s][1]) +
                " " +
                i.applyToPointStringified(o[s][0], o[s][1]);
            return (
              r &&
                e &&
                ((h +=
                  " C" +
                  i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                  " " +
                  i.applyToPointStringified(n[0][0], n[0][1]) +
                  " " +
                  i.applyToPointStringified(o[0][0], o[0][1])),
                (h += "z")),
              h
            );
          },
          SVGElementsRenderer = (function () {
            var t = new Matrix(),
              e = new Matrix();
            function r(t, e, r) {
              (r || e.transform.op._mdf) &&
                e.transform.container.setAttribute("opacity", e.transform.op.v),
                (r || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute(
                    "transform",
                    e.transform.mProps.v.to2dCSS(),
                  );
            }
            function i() {}
            function s(r, i, s) {
              var a,
                n,
                o,
                h,
                l,
                p,
                f,
                d,
                c,
                m,
                u,
                y = i.styles.length,
                g = i.lvl;
              for (p = 0; p < y; p += 1) {
                if (((h = i.sh._mdf || s), i.styles[p].lvl < g)) {
                  for (
                    d = e.reset(),
                      m = g - i.styles[p].lvl,
                      u = i.transformers.length - 1;
                    !h && m > 0;

                  )
                    (h = i.transformers[u].mProps._mdf || h),
                      (m -= 1),
                      (u -= 1);
                  if (h)
                    for (
                      m = g - i.styles[p].lvl, u = i.transformers.length - 1;
                      m > 0;

                    )
                      (c = i.transformers[u].mProps.v.props),
                        d.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15],
                        ),
                        (m -= 1),
                        (u -= 1);
                } else d = t;
                if (((n = (f = i.sh.paths)._length), h)) {
                  for (o = "", a = 0; a < n; a += 1)
                    (l = f.shapes[a]) &&
                      l._length &&
                      (o += buildShapeString(l, l._length, l.c, d));
                  i.caches[p] = o;
                } else o = i.caches[p];
                (i.styles[p].d += !0 === r.hd ? "" : o),
                  (i.styles[p]._mdf = h || i.styles[p]._mdf);
              }
            }
            function a(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) &&
                i.pElem.setAttribute(
                  "fill",
                  "rgb(" +
                    bmFloor(e.c.v[0]) +
                    "," +
                    bmFloor(e.c.v[1]) +
                    "," +
                    bmFloor(e.c.v[2]) +
                    ")",
                ),
                (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v);
            }
            function n(t, e, r) {
              o(t, e, r), h(0, e, r);
            }
            function o(t, e, r) {
              var i,
                s,
                a,
                n,
                o,
                h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                f = e.e.v;
              if (e.o._mdf || r) {
                var d = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(d, e.o.v);
              }
              if (e.s._mdf || r) {
                var c = 1 === t.t ? "x1" : "cx",
                  m = "x1" === c ? "y1" : "cy";
                h.setAttribute(c, p[0]),
                  h.setAttribute(m, p[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute(c, p[0]), e.of.setAttribute(m, p[1]));
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var u = e.g.c;
                for (a = i.length, s = 0; s < a; s += 1)
                  (n = i[s]).setAttribute("offset", u[4 * s] + "%"),
                    n.setAttribute(
                      "stop-color",
                      "rgb(" +
                        u[4 * s + 1] +
                        "," +
                        u[4 * s + 2] +
                        "," +
                        u[4 * s + 3] +
                        ")",
                    );
              }
              if (l && (e.g._omdf || r)) {
                var y = e.g.o;
                for (
                  a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0;
                  s < a;
                  s += 1
                )
                  (n = i[s]),
                    e.g._collapsable ||
                      n.setAttribute("offset", y[2 * s] + "%"),
                    n.setAttribute("stop-opacity", y[2 * s + 1]);
              }
              if (1 === t.t)
                (e.e._mdf || r) &&
                  (h.setAttribute("x2", f[0]),
                  h.setAttribute("y2", f[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("x2", f[0]),
                    e.of.setAttribute("y2", f[1])));
              else if (
                ((e.s._mdf || e.e._mdf || r) &&
                  ((o = Math.sqrt(
                    Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2),
                  )),
                  h.setAttribute("r", o),
                  l && !e.g._collapsable && e.of.setAttribute("r", o)),
                e.e._mdf || e.h._mdf || e.a._mdf || r)
              ) {
                o ||
                  (o = Math.sqrt(
                    Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2),
                  ));
                var g = Math.atan2(f[1] - p[1], f[0] - p[0]),
                  _ = e.h.v;
                _ >= 1 ? (_ = 0.99) : _ <= -1 && (_ = -0.99);
                var v = o * _,
                  b = Math.cos(g + e.a.v) * v + p[0],
                  E = Math.sin(g + e.a.v) * v + p[1];
                h.setAttribute("fx", b),
                  h.setAttribute("fy", E),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E));
              }
            }
            function h(t, e, r) {
              var i = e.style,
                s = e.d;
              s &&
                (s._mdf || r) &&
                s.dashStr &&
                (i.pElem.setAttribute("stroke-dasharray", s.dashStr),
                i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])),
                e.c &&
                  (e.c._mdf || r) &&
                  i.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      bmFloor(e.c.v[0]) +
                      "," +
                      bmFloor(e.c.v[1]) +
                      "," +
                      bmFloor(e.c.v[2]) +
                      ")",
                  ),
                (e.o._mdf || r) &&
                  i.pElem.setAttribute("stroke-opacity", e.o.v),
                (e.w._mdf || r) &&
                  (i.pElem.setAttribute("stroke-width", e.w.v),
                  i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
            }
            return {
              createRenderFunction: function (t) {
                switch (t.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return n;
                  case "st":
                    return h;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return s;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null;
                }
              },
            };
          })();
        function SVGShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(t, e, r),
            (this.prevViewData = []);
        }
        function LetterProps(t, e, r, i, s, a) {
          (this.o = t),
            (this.sw = e),
            (this.sc = r),
            (this.fc = i),
            (this.m = s),
            (this.p = a),
            (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 });
        }
        function TextProperty(t, e) {
          (this._frameId = initialDefaultFrame),
            (this.pv = ""),
            (this.v = ""),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: "",
              fStyle: "",
              fWeight: "",
              fc: "",
              j: "",
              justifyOffset: "",
              l: [],
              lh: 0,
              lineWidths: [],
              ls: "",
              of: "",
              s: "",
              sc: "",
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData);
        }
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          SVGShapeElement,
        ),
          (SVGShapeElement.prototype.initSecondaryElement = function () {}),
          (SVGShapeElement.prototype.identityMatrix = new Matrix()),
          (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
          (SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0,
            ),
              this.filterUniqueShapes();
          }),
          (SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t,
              e,
              r,
              i,
              s = this.shapes.length,
              a = this.stylesList.length,
              n = [],
              o = !1;
            for (r = 0; r < a; r += 1) {
              for (
                i = this.stylesList[r], o = !1, n.length = 0, t = 0;
                t < s;
                t += 1
              )
                -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                  (n.push(e), (o = e._isAnimated || o));
              n.length > 1 && o && this.setShapesAsAnimated(n);
            }
          }),
          (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated();
          }),
          (SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r,
              i = new SVGStyleData(t, e),
              s = i.pElem;
            return (
              "st" === t.ty
                ? (r = new SVGStrokeStyleData(this, t, i))
                : "fl" === t.ty
                ? (r = new SVGFillStyleData(this, t, i))
                : "gf" === t.ty || "gs" === t.ty
                ? ((r = new (
                    "gf" === t.ty
                      ? SVGGradientFillStyleData
                      : SVGGradientStrokeStyleData
                  )(this, t, i)),
                  this.globalData.defs.appendChild(r.gf),
                  r.maskId &&
                    (this.globalData.defs.appendChild(r.ms),
                    this.globalData.defs.appendChild(r.of),
                    s.setAttribute(
                      "mask",
                      "url(" + getLocationHref() + "#" + r.maskId + ")",
                    )))
                : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)),
              ("st" !== t.ty && "gs" !== t.ty) ||
                (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                s.setAttribute("fill-opacity", "0"),
                1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
              2 === t.r && s.setAttribute("fill-rule", "evenodd"),
              t.ln && s.setAttribute("id", t.ln),
              t.cl && s.setAttribute("class", t.cl),
              t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
              this.stylesList.push(i),
              this.addToAnimatedContents(t, r),
              r
            );
          }),
          (SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            return (
              t.ln && e.gr.setAttribute("id", t.ln),
              t.cl && e.gr.setAttribute("class", t.cl),
              t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
              e
            );
          }),
          (SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this,
              ),
              i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i;
          }),
          (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var i = 4;
            "rc" === t.ty
              ? (i = 5)
              : "el" === t.ty
              ? (i = 6)
              : "sr" === t.ty && (i = 7);
            var s = new SVGShapeData(
              e,
              r,
              ShapePropertyFactory.getShapeProp(this, t, i, this),
            );
            return (
              this.shapes.push(s),
              this.addShapeToModifiers(s),
              this.addToAnimatedContents(t, s),
              s
            );
          }),
          (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i; ) {
              if (this.animatedContents[r].element === e) return;
              r += 1;
            }
            this.animatedContents.push({
              fn: SVGElementsRenderer.createRenderFunction(t),
              element: e,
              data: t,
            });
          }),
          (SVGShapeElement.prototype.setElementStyles = function (t) {
            var e,
              r = t.styles,
              i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
              this.stylesList[e].closed || r.push(this.stylesList[e]);
          }),
          (SVGShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0,
              ),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers();
          }),
          (SVGShapeElement.prototype.searchShapes = function (
            t,
            e,
            r,
            i,
            s,
            a,
            n,
          ) {
            var o,
              h,
              l,
              p,
              f,
              d,
              c = [].concat(a),
              m = t.length - 1,
              u = [],
              y = [];
            for (o = m; o >= 0; o -= 1) {
              if (
                ((d = this.searchProcessedElement(t[o]))
                  ? (e[o] = r[d - 1])
                  : (t[o]._render = n),
                "fl" === t[o].ty ||
                  "st" === t[o].ty ||
                  "gf" === t[o].ty ||
                  "gs" === t[o].ty ||
                  "no" === t[o].ty)
              )
                d
                  ? (e[o].style.closed = !1)
                  : (e[o] = this.createStyleElement(t[o], s)),
                  t[o]._render &&
                    e[o].style.pElem.parentNode !== i &&
                    i.appendChild(e[o].style.pElem),
                  u.push(e[o].style);
              else if ("gr" === t[o].ty) {
                if (d)
                  for (l = e[o].it.length, h = 0; h < l; h += 1)
                    e[o].prevViewData[h] = e[o].it[h];
                else e[o] = this.createGroupElement(t[o]);
                this.searchShapes(
                  t[o].it,
                  e[o].it,
                  e[o].prevViewData,
                  e[o].gr,
                  s + 1,
                  c,
                  n,
                ),
                  t[o]._render &&
                    e[o].gr.parentNode !== i &&
                    i.appendChild(e[o].gr);
              } else
                "tr" === t[o].ty
                  ? (d || (e[o] = this.createTransformElement(t[o], i)),
                    (p = e[o].transform),
                    c.push(p))
                  : "sh" === t[o].ty ||
                    "rc" === t[o].ty ||
                    "el" === t[o].ty ||
                    "sr" === t[o].ty
                  ? (d || (e[o] = this.createShapeElement(t[o], c, s)),
                    this.setElementStyles(e[o]))
                  : "tm" === t[o].ty ||
                    "rd" === t[o].ty ||
                    "ms" === t[o].ty ||
                    "pb" === t[o].ty ||
                    "zz" === t[o].ty ||
                    "op" === t[o].ty
                  ? (d
                      ? ((f = e[o]).closed = !1)
                      : ((f = ShapeModifiers.getModifier(t[o].ty)).init(
                          this,
                          t[o],
                        ),
                        (e[o] = f),
                        this.shapeModifiers.push(f)),
                    y.push(f))
                  : "rp" === t[o].ty &&
                    (d
                      ? ((f = e[o]).closed = !0)
                      : ((f = ShapeModifiers.getModifier(t[o].ty)),
                        (e[o] = f),
                        f.init(this, t, o, e),
                        this.shapeModifiers.push(f),
                        (n = !1)),
                    y.push(f));
              this.addProcessedElement(t[o], o + 1);
            }
            for (m = u.length, o = 0; o < m; o += 1) u[o].closed = !0;
            for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0;
          }),
          (SVGShapeElement.prototype.renderInnerContent = function () {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)
              (this.stylesList[t]._mdf || this._isFirstFrame) &&
                (this.stylesList[t].msElem &&
                  (this.stylesList[t].msElem.setAttribute(
                    "d",
                    this.stylesList[t].d,
                  ),
                  (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                this.stylesList[t].pElem.setAttribute(
                  "d",
                  this.stylesList[t].d || "M0 0",
                ));
          }),
          (SVGShapeElement.prototype.renderShape = function () {
            var t,
              e,
              r = this.animatedContents.length;
            for (t = 0; t < r; t += 1)
              (e = this.animatedContents[t]),
                (this._isFirstFrame || e.element._isAnimated) &&
                  !0 !== e.data &&
                  e.fn(e.data, e.element, this._isFirstFrame);
          }),
          (SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(),
              (this.shapesData = null),
              (this.itemsData = null);
          }),
          (LetterProps.prototype.update = function (t, e, r, i, s, a) {
            (this._mdf.o = !1),
              (this._mdf.sw = !1),
              (this._mdf.sc = !1),
              (this._mdf.fc = !1),
              (this._mdf.m = !1),
              (this._mdf.p = !1);
            var n = !1;
            return (
              this.o !== t && ((this.o = t), (this._mdf.o = !0), (n = !0)),
              this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
              this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (n = !0)),
              this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (n = !0)),
              this.m !== s && ((this.m = s), (this._mdf.m = !0), (n = !0)),
              !a.length ||
                (this.p[0] === a[0] &&
                  this.p[1] === a[1] &&
                  this.p[4] === a[4] &&
                  this.p[5] === a[5] &&
                  this.p[12] === a[12] &&
                  this.p[13] === a[13]) ||
                ((this.p = a), (this._mdf.p = !0), (n = !0)),
              n
            );
          }),
          (TextProperty.prototype.defaultBoxWidth = [0, 0]),
          (TextProperty.prototype.copyData = function (t, e) {
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }),
          (TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t),
              (this.currentData = t),
              (this.currentData.boxWidth =
                this.currentData.boxWidth || this.defaultBoxWidth),
              (this._mdf = !0);
          }),
          (TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
          }),
          (TextProperty.prototype.searchKeyframes = function () {
            return (
              (this.kf = this.data.d.k.length > 1),
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
            );
          }),
          (TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length) ||
              t
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData,
                r = this.keysIndex;
              if (this.lock) this.setCurrentData(this.currentData);
              else {
                var i;
                (this.lock = !0), (this._mdf = !1);
                var s = this.effectsSequence.length,
                  a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1)
                  a =
                    r !== this.keysIndex
                      ? this.effectsSequence[i](a, a.t)
                      : this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a),
                  (this.v = this.currentData),
                  (this.pv = this.v),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
            }
          }),
          (TextProperty.prototype.getKeyframeValue = function () {
            for (
              var t = this.data.d.k,
                e = this.elem.comp.renderedFrame,
                r = 0,
                i = t.length;
              r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

            )
              r += 1;
            return (
              this.keysIndex !== r && (this.keysIndex = r),
              this.data.d.k[this.keysIndex].s
            );
          }),
          (TextProperty.prototype.buildFinalText = function (t) {
            for (var e, r, i = [], s = 0, a = t.length, n = !1; s < a; )
              (e = t.charCodeAt(s)),
                FontManager.isCombinedCharacter(e)
                  ? (i[i.length - 1] += t.charAt(s))
                  : e >= 55296 && e <= 56319
                  ? (r = t.charCodeAt(s + 1)) >= 56320 && r <= 57343
                    ? (n || FontManager.isModifier(e, r)
                        ? ((i[i.length - 1] += t.substr(s, 2)), (n = !1))
                        : i.push(t.substr(s, 2)),
                      (s += 1))
                    : i.push(t.charAt(s))
                  : e > 56319
                  ? ((r = t.charCodeAt(s + 1)),
                    FontManager.isZeroWidthJoiner(e, r)
                      ? ((n = !0),
                        (i[i.length - 1] += t.substr(s, 2)),
                        (s += 1))
                      : i.push(t.charAt(s)))
                  : FontManager.isZeroWidthJoiner(e)
                  ? ((i[i.length - 1] += t.charAt(s)), (n = !0))
                  : i.push(t.charAt(s)),
                (s += 1);
            return i;
          }),
          (TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
              r,
              i,
              s,
              a,
              n,
              o,
              h = this.elem.globalData.fontManager,
              l = this.data,
              p = [],
              f = 0,
              d = l.m.g,
              c = 0,
              m = 0,
              u = 0,
              y = [],
              g = 0,
              _ = 0,
              v = h.getFontByName(t.f),
              b = 0,
              E = getFontProperties(v);
            (t.fWeight = E.weight),
              (t.fStyle = E.style),
              (t.finalSize = t.s),
              (t.finalText = this.buildFinalText(t.t)),
              (r = t.finalText.length),
              (t.finalLineHeight = t.lh);
            var S,
              A = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
              for (var P, x, T = !0, w = t.sz[0], C = t.sz[1]; T; ) {
                (P = 0),
                  (g = 0),
                  (r = (x = this.buildFinalText(t.t)).length),
                  (A = (t.tr / 1e3) * t.finalSize);
                var k = -1;
                for (e = 0; e < r; e += 1)
                  (S = x[e].charCodeAt(0)),
                    (i = !1),
                    " " === x[e]
                      ? (k = e)
                      : (13 !== S && 3 !== S) ||
                        ((g = 0),
                        (i = !0),
                        (P += t.finalLineHeight || 1.2 * t.finalSize)),
                    h.chars
                      ? ((o = h.getCharData(x[e], v.fStyle, v.fFamily)),
                        (b = i ? 0 : (o.w * t.finalSize) / 100))
                      : (b = h.measureText(x[e], t.f, t.finalSize)),
                    g + b > w && " " !== x[e]
                      ? (-1 === k ? (r += 1) : (e = k),
                        (P += t.finalLineHeight || 1.2 * t.finalSize),
                        x.splice(e, k === e ? 1 : 0, "\r"),
                        (k = -1),
                        (g = 0))
                      : ((g += b), (g += A));
                (P += (v.ascent * t.finalSize) / 100),
                  this.canResize && t.finalSize > this.minimumFontSize && C < P
                    ? ((t.finalSize -= 1),
                      (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                    : ((t.finalText = x), (r = t.finalText.length), (T = !1));
              }
            (g = -A), (b = 0);
            var D,
              M = 0;
            for (e = 0; e < r; e += 1)
              if (
                ((i = !1),
                13 === (S = (D = t.finalText[e]).charCodeAt(0)) || 3 === S
                  ? ((M = 0),
                    y.push(g),
                    (_ = g > _ ? g : _),
                    (g = -2 * A),
                    (s = ""),
                    (i = !0),
                    (u += 1))
                  : (s = D),
                h.chars
                  ? ((o = h.getCharData(
                      D,
                      v.fStyle,
                      h.getFontByName(t.f).fFamily,
                    )),
                    (b = i ? 0 : (o.w * t.finalSize) / 100))
                  : (b = h.measureText(s, t.f, t.finalSize)),
                " " === D ? (M += b + A) : ((g += b + A + M), (M = 0)),
                p.push({
                  l: b,
                  an: b,
                  add: c,
                  n: i,
                  anIndexes: [],
                  val: s,
                  line: u,
                  animatorJustifyOffset: 0,
                }),
                2 == d)
              ) {
                if (((c += b), "" === s || " " === s || e === r - 1)) {
                  for (("" !== s && " " !== s) || (c -= b); m <= e; )
                    (p[m].an = c), (p[m].ind = f), (p[m].extra = b), (m += 1);
                  (f += 1), (c = 0);
                }
              } else if (3 == d) {
                if (((c += b), "" === s || e === r - 1)) {
                  for ("" === s && (c -= b); m <= e; )
                    (p[m].an = c), (p[m].ind = f), (p[m].extra = b), (m += 1);
                  (c = 0), (f += 1);
                }
              } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
            if (((t.l = p), (_ = g > _ ? g : _), y.push(g), t.sz))
              (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
            else
              switch (((t.boxWidth = _), t.j)) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            t.lineWidths = y;
            var I,
              F,
              R,
              B,
              L = l.a;
            n = L.length;
            var O = [];
            for (a = 0; a < n; a += 1) {
              for (
                (I = L[a]).a.sc && (t.strokeColorAnim = !0),
                  I.a.sw && (t.strokeWidthAnim = !0),
                  (I.a.fc || I.a.fh || I.a.fs || I.a.fb) &&
                    (t.fillColorAnim = !0),
                  B = 0,
                  R = I.s.b,
                  e = 0;
                e < r;
                e += 1
              )
                ((F = p[e]).anIndexes[a] = B),
                  ((1 == R && "" !== F.val) ||
                    (2 == R && "" !== F.val && " " !== F.val) ||
                    (3 == R && (F.n || " " == F.val || e == r - 1)) ||
                    (4 == R && (F.n || e == r - 1))) &&
                    (1 === I.s.rn && O.push(B), (B += 1));
              l.a[a].s.totalChars = B;
              var $,
                N = -1;
              if (1 === I.s.rn)
                for (e = 0; e < r; e += 1)
                  N != (F = p[e]).anIndexes[a] &&
                    ((N = F.anIndexes[a]),
                    ($ = O.splice(Math.floor(Math.random() * O.length), 1)[0])),
                    (F.anIndexes[a] = $);
            }
            (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
              (t.ls = t.ls || 0),
              (t.ascent = (v.ascent * t.finalSize) / 100);
          }),
          (TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            (r = this.copyData(r, t)),
              (this.data.d.k[e].s = r),
              this.recalculate(e),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            (e.__complete = !1),
              (this.keysIndex = 0),
              (this._isFirstFrame = !0),
              this.getValue(e);
          }),
          (TextProperty.prototype.canResizeFont = function (t) {
            (this.canResize = t),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.setMinimumFontSize = function (t) {
            (this.minimumFontSize = Math.floor(t) || 1),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          });
        var TextSelectorProp = (function () {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;
          function i(t, e) {
            (this._currentTextLength = -1),
              (this.k = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = t.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(t),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: 0 },
                0,
                0,
                this,
              )),
              (this.e =
                "e" in e
                  ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                  : { v: 100 }),
              (this.o = PropertyFactory.getProp(
                t,
                e.o || { k: 0 },
                0,
                0,
                this,
              )),
              (this.xe = PropertyFactory.getProp(
                t,
                e.xe || { k: 0 },
                0,
                0,
                this,
              )),
              (this.ne = PropertyFactory.getProp(
                t,
                e.ne || { k: 0 },
                0,
                0,
                this,
              )),
              (this.sm = PropertyFactory.getProp(
                t,
                e.sm || { k: 100 },
                0,
                0,
                this,
              )),
              (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue();
          }
          return (
            (i.prototype = {
              getMult: function (i) {
                this._currentTextLength !==
                  this.elem.textProperty.currentData.l.length &&
                  this.getValue();
                var s = 0,
                  a = 0,
                  n = 1,
                  o = 1;
                this.ne.v > 0 ? (s = this.ne.v / 100) : (a = -this.ne.v / 100),
                  this.xe.v > 0
                    ? (n = 1 - this.xe.v / 100)
                    : (o = 1 + this.xe.v / 100);
                var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                  l = 0,
                  p = this.finalS,
                  f = this.finalE,
                  d = this.data.sh;
                if (2 === d)
                  l = h(
                    (l =
                      f === p
                        ? i >= f
                          ? 1
                          : 0
                        : t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1))),
                  );
                else if (3 === d)
                  l = h(
                    (l =
                      f === p
                        ? i >= f
                          ? 0
                          : 1
                        : 1 - t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1))),
                  );
                else if (4 === d)
                  f === p
                    ? (l = 0)
                    : (l = t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1))) < 0.5
                    ? (l *= 2)
                    : (l = 1 - 2 * (l - 0.5)),
                    (l = h(l));
                else if (5 === d) {
                  if (f === p) l = 0;
                  else {
                    var c = f - p,
                      m = -c / 2 + (i = e(t(0, i + 0.5 - p), f - p)),
                      u = c / 2;
                    l = Math.sqrt(1 - (m * m) / (u * u));
                  }
                  l = h(l);
                } else
                  6 === d
                    ? (f === p
                        ? (l = 0)
                        : ((i = e(t(0, i + 0.5 - p), f - p)),
                          (l =
                            (1 +
                              Math.cos(Math.PI + (2 * Math.PI * i) / (f - p))) /
                            2)),
                      (l = h(l)))
                    : (i >= r(p) &&
                        (l = t(0, e(i - p < 0 ? e(f, 1) - (p - i) : f - i, 1))),
                      (l = h(l)));
                if (100 !== this.sm.v) {
                  var y = 0.01 * this.sm.v;
                  0 === y && (y = 1e-8);
                  var g = 0.5 - 0.5 * y;
                  l < g ? (l = 0) : (l = (l - g) / y) > 1 && (l = 1);
                }
                return l * this.a.v;
              },
              getValue: function (t) {
                this.iterateDynamicProperties(),
                  (this._mdf = t || this._mdf),
                  (this._currentTextLength =
                    this.elem.textProperty.currentData.l.length || 0),
                  t &&
                    2 === this.data.r &&
                    (this.e.v = this._currentTextLength);
                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                  r = this.o.v / e,
                  i = this.s.v / e + r,
                  s = this.e.v / e + r;
                if (i > s) {
                  var a = i;
                  (i = s), (s = a);
                }
                (this.finalS = i), (this.finalE = s);
              },
            }),
            extendPrototype([DynamicPropertyContainer], i),
            {
              getTextSelectorProp: function (t, e, r) {
                return new i(t, e);
              },
            }
          );
        })();
        function TextAnimatorDataProperty(t, e, r) {
          var i = { propType: !1 },
            s = PropertyFactory.getProp,
            a = e.a;
          (this.a = {
            r: a.r ? s(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? s(t, a.s, 1, 0.01, r) : i,
            a: a.a ? s(t, a.a, 1, 0, r) : i,
            o: a.o ? s(t, a.o, 0, 0.01, r) : i,
            p: a.p ? s(t, a.p, 1, 0, r) : i,
            sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
            fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
            t: a.t ? s(t, a.t, 0, 0, r) : i,
          }),
            (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
            (this.s.t = e.s.t);
        }
        function TextAnimatorProperty(t, e, r) {
          (this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = t),
            (this._renderType = e),
            (this._elem = r),
            (this._animatorsData = createSizedArray(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = { alignment: {} }),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(r);
        }
        function ITextElement() {}
        (TextAnimatorProperty.prototype.searchProperties = function () {
          var t,
            e,
            r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1)
            (e = this._textData.a[t]),
              (this._animatorsData[t] = new TextAnimatorDataProperty(
                this._elem,
                e,
                this,
              ));
          this._textData.p && "m" in this._textData.p
            ? ((this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              }),
              (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = i(
              this._elem,
              this._textData.m.a,
              1,
              0,
              this,
            ));
        }),
          (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (
              ((this.lettersChangedFlag = e),
              this._mdf ||
                this._isFirstFrame ||
                e ||
                (this._hasMaskedPath && this._pathData.m._mdf))
            ) {
              this._isFirstFrame = !1;
              var r,
                i,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                f,
                d,
                c,
                m,
                u,
                y,
                g,
                _,
                v,
                b,
                E = this._moreOptions.alignment.v,
                S = this._animatorsData,
                A = this._textData,
                P = this.mHelper,
                x = this._renderType,
                T = this.renderedLetters.length,
                w = t.l;
              if (this._hasMaskedPath) {
                if (
                  ((b = this._pathData.m),
                  !this._pathData.n || this._pathData._mdf)
                ) {
                  var C,
                    k = b.v;
                  for (
                    this._pathData.r.v && (k = k.reverse()),
                      n = { tLength: 0, segments: [] },
                      a = k._length - 1,
                      g = 0,
                      s = 0;
                    s < a;
                    s += 1
                  )
                    (C = bez.buildBezierData(
                      k.v[s],
                      k.v[s + 1],
                      [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]],
                      [
                        k.i[s + 1][0] - k.v[s + 1][0],
                        k.i[s + 1][1] - k.v[s + 1][1],
                      ],
                    )),
                      (n.tLength += C.segmentLength),
                      n.segments.push(C),
                      (g += C.segmentLength);
                  (s = a),
                    b.v.c &&
                      ((C = bez.buildBezierData(
                        k.v[s],
                        k.v[0],
                        [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]],
                        [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]],
                      )),
                      (n.tLength += C.segmentLength),
                      n.segments.push(C),
                      (g += C.segmentLength)),
                    (this._pathData.pi = n);
                }
                if (
                  ((n = this._pathData.pi),
                  (o = this._pathData.f.v),
                  (d = 0),
                  (f = 1),
                  (l = 0),
                  (p = !0),
                  (u = n.segments),
                  o < 0 && b.v.c)
                )
                  for (
                    n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                      f = (m = u[(d = u.length - 1)].points).length - 1;
                    o < 0;

                  )
                    (o += m[f].partialLength),
                      (f -= 1) < 0 && (f = (m = u[(d -= 1)].points).length - 1);
                (c = (m = u[d].points)[f - 1]), (y = (h = m[f]).partialLength);
              }
              (a = w.length), (r = 0), (i = 0);
              var D,
                M,
                I,
                F,
                R,
                B = 1.2 * t.finalSize * 0.714,
                L = !0;
              I = S.length;
              var O,
                $,
                N,
                z,
                V,
                H,
                G,
                Z,
                j,
                U,
                q,
                K,
                Y = -1,
                X = o,
                W = d,
                J = f,
                Q = -1,
                tt = "",
                et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var rt = 0,
                  it = 0,
                  st = 2 === t.j ? -0.5 : -1,
                  at = 0,
                  nt = !0;
                for (s = 0; s < a; s += 1)
                  if (w[s].n) {
                    for (rt && (rt += it); at < s; )
                      (w[at].animatorJustifyOffset = rt), (at += 1);
                    (rt = 0), (nt = !0);
                  } else {
                    for (M = 0; M < I; M += 1)
                      (D = S[M].a).t.propType &&
                        (nt && 2 === t.j && (it += D.t.v * st),
                        (R = S[M].s.getMult(
                          w[s].anIndexes[M],
                          A.a[M].s.totalChars,
                        )).length
                          ? (rt += D.t.v * R[0] * st)
                          : (rt += D.t.v * R * st));
                    nt = !1;
                  }
                for (rt && (rt += it); at < s; )
                  (w[at].animatorJustifyOffset = rt), (at += 1);
              }
              for (s = 0; s < a; s += 1) {
                if ((P.reset(), (z = 1), w[s].n))
                  (r = 0),
                    (i += t.yOffset),
                    (i += L ? 1 : 0),
                    (o = X),
                    (L = !1),
                    this._hasMaskedPath &&
                      ((f = J),
                      (c = (m = u[(d = W)].points)[f - 1]),
                      (y = (h = m[f]).partialLength),
                      (l = 0)),
                    (tt = ""),
                    (q = ""),
                    (j = ""),
                    (K = ""),
                    (et = this.defaultPropsArray);
                else {
                  if (this._hasMaskedPath) {
                    if (Q !== w[s].line) {
                      switch (t.j) {
                        case 1:
                          o += g - t.lineWidths[w[s].line];
                          break;
                        case 2:
                          o += (g - t.lineWidths[w[s].line]) / 2;
                      }
                      Q = w[s].line;
                    }
                    Y !== w[s].ind &&
                      (w[Y] && (o += w[Y].extra),
                      (o += w[s].an / 2),
                      (Y = w[s].ind)),
                      (o += E[0] * w[s].an * 0.005);
                    var ot = 0;
                    for (M = 0; M < I; M += 1)
                      (D = S[M].a).p.propType &&
                        ((R = S[M].s.getMult(
                          w[s].anIndexes[M],
                          A.a[M].s.totalChars,
                        )).length
                          ? (ot += D.p.v[0] * R[0])
                          : (ot += D.p.v[0] * R)),
                        D.a.propType &&
                          ((R = S[M].s.getMult(
                            w[s].anIndexes[M],
                            A.a[M].s.totalChars,
                          )).length
                            ? (ot += D.a.v[0] * R[0])
                            : (ot += D.a.v[0] * R));
                    for (
                      p = !0,
                        this._pathData.a.v &&
                          ((o =
                            0.5 * w[0].an +
                            ((g -
                              this._pathData.f.v -
                              0.5 * w[0].an -
                              0.5 * w[w.length - 1].an) *
                              Y) /
                              (a - 1)),
                          (o += this._pathData.f.v));
                      p;

                    )
                      l + y >= o + ot || !m
                        ? ((_ = (o + ot - l) / h.partialLength),
                          ($ = c.point[0] + (h.point[0] - c.point[0]) * _),
                          (N = c.point[1] + (h.point[1] - c.point[1]) * _),
                          P.translate(
                            -E[0] * w[s].an * 0.005,
                            -E[1] * B * 0.01,
                          ),
                          (p = !1))
                        : m &&
                          ((l += h.partialLength),
                          (f += 1) >= m.length &&
                            ((f = 0),
                            u[(d += 1)]
                              ? (m = u[d].points)
                              : b.v.c
                              ? ((f = 0), (m = u[(d = 0)].points))
                              : ((l -= h.partialLength), (m = null))),
                          m && ((c = h), (y = (h = m[f]).partialLength)));
                    (O = w[s].an / 2 - w[s].add), P.translate(-O, 0, 0);
                  } else
                    (O = w[s].an / 2 - w[s].add),
                      P.translate(-O, 0, 0),
                      P.translate(-E[0] * w[s].an * 0.005, -E[1] * B * 0.01, 0);
                  for (M = 0; M < I; M += 1)
                    (D = S[M].a).t.propType &&
                      ((R = S[M].s.getMult(
                        w[s].anIndexes[M],
                        A.a[M].s.totalChars,
                      )),
                      (0 === r && 0 === t.j) ||
                        (this._hasMaskedPath
                          ? R.length
                            ? (o += D.t.v * R[0])
                            : (o += D.t.v * R)
                          : R.length
                          ? (r += D.t.v * R[0])
                          : (r += D.t.v * R)));
                  for (
                    t.strokeWidthAnim && (H = t.sw || 0),
                      t.strokeColorAnim &&
                        (V = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                      t.fillColorAnim &&
                        t.fc &&
                        (G = [t.fc[0], t.fc[1], t.fc[2]]),
                      M = 0;
                    M < I;
                    M += 1
                  )
                    (D = S[M].a).a.propType &&
                      ((R = S[M].s.getMult(
                        w[s].anIndexes[M],
                        A.a[M].s.totalChars,
                      )).length
                        ? P.translate(
                            -D.a.v[0] * R[0],
                            -D.a.v[1] * R[1],
                            D.a.v[2] * R[2],
                          )
                        : P.translate(
                            -D.a.v[0] * R,
                            -D.a.v[1] * R,
                            D.a.v[2] * R,
                          ));
                  for (M = 0; M < I; M += 1)
                    (D = S[M].a).s.propType &&
                      ((R = S[M].s.getMult(
                        w[s].anIndexes[M],
                        A.a[M].s.totalChars,
                      )).length
                        ? P.scale(
                            1 + (D.s.v[0] - 1) * R[0],
                            1 + (D.s.v[1] - 1) * R[1],
                            1,
                          )
                        : P.scale(
                            1 + (D.s.v[0] - 1) * R,
                            1 + (D.s.v[1] - 1) * R,
                            1,
                          ));
                  for (M = 0; M < I; M += 1) {
                    if (
                      ((D = S[M].a),
                      (R = S[M].s.getMult(
                        w[s].anIndexes[M],
                        A.a[M].s.totalChars,
                      )),
                      D.sk.propType &&
                        (R.length
                          ? P.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1])
                          : P.skewFromAxis(-D.sk.v * R, D.sa.v * R)),
                      D.r.propType &&
                        (R.length
                          ? P.rotateZ(-D.r.v * R[2])
                          : P.rotateZ(-D.r.v * R)),
                      D.ry.propType &&
                        (R.length
                          ? P.rotateY(D.ry.v * R[1])
                          : P.rotateY(D.ry.v * R)),
                      D.rx.propType &&
                        (R.length
                          ? P.rotateX(D.rx.v * R[0])
                          : P.rotateX(D.rx.v * R)),
                      D.o.propType &&
                        (R.length
                          ? (z += (D.o.v * R[0] - z) * R[0])
                          : (z += (D.o.v * R - z) * R)),
                      t.strokeWidthAnim &&
                        D.sw.propType &&
                        (R.length ? (H += D.sw.v * R[0]) : (H += D.sw.v * R)),
                      t.strokeColorAnim && D.sc.propType)
                    )
                      for (Z = 0; Z < 3; Z += 1)
                        R.length
                          ? (V[Z] += (D.sc.v[Z] - V[Z]) * R[0])
                          : (V[Z] += (D.sc.v[Z] - V[Z]) * R);
                    if (t.fillColorAnim && t.fc) {
                      if (D.fc.propType)
                        for (Z = 0; Z < 3; Z += 1)
                          R.length
                            ? (G[Z] += (D.fc.v[Z] - G[Z]) * R[0])
                            : (G[Z] += (D.fc.v[Z] - G[Z]) * R);
                      D.fh.propType &&
                        (G = R.length
                          ? addHueToRGB(G, D.fh.v * R[0])
                          : addHueToRGB(G, D.fh.v * R)),
                        D.fs.propType &&
                          (G = R.length
                            ? addSaturationToRGB(G, D.fs.v * R[0])
                            : addSaturationToRGB(G, D.fs.v * R)),
                        D.fb.propType &&
                          (G = R.length
                            ? addBrightnessToRGB(G, D.fb.v * R[0])
                            : addBrightnessToRGB(G, D.fb.v * R));
                    }
                  }
                  for (M = 0; M < I; M += 1)
                    (D = S[M].a).p.propType &&
                      ((R = S[M].s.getMult(
                        w[s].anIndexes[M],
                        A.a[M].s.totalChars,
                      )),
                      this._hasMaskedPath
                        ? R.length
                          ? P.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1])
                          : P.translate(0, D.p.v[1] * R, -D.p.v[2] * R)
                        : R.length
                        ? P.translate(
                            D.p.v[0] * R[0],
                            D.p.v[1] * R[1],
                            -D.p.v[2] * R[2],
                          )
                        : P.translate(
                            D.p.v[0] * R,
                            D.p.v[1] * R,
                            -D.p.v[2] * R,
                          ));
                  if (
                    (t.strokeWidthAnim && (j = H < 0 ? 0 : H),
                    t.strokeColorAnim &&
                      (U =
                        "rgb(" +
                        Math.round(255 * V[0]) +
                        "," +
                        Math.round(255 * V[1]) +
                        "," +
                        Math.round(255 * V[2]) +
                        ")"),
                    t.fillColorAnim &&
                      t.fc &&
                      (q =
                        "rgb(" +
                        Math.round(255 * G[0]) +
                        "," +
                        Math.round(255 * G[1]) +
                        "," +
                        Math.round(255 * G[2]) +
                        ")"),
                    this._hasMaskedPath)
                  ) {
                    if (
                      (P.translate(0, -t.ls),
                      P.translate(0, E[1] * B * 0.01 + i, 0),
                      this._pathData.p.v)
                    ) {
                      v = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                      var ht = (180 * Math.atan(v)) / Math.PI;
                      h.point[0] < c.point[0] && (ht += 180),
                        P.rotate((-ht * Math.PI) / 180);
                    }
                    P.translate($, N, 0),
                      (o -= E[0] * w[s].an * 0.005),
                      w[s + 1] &&
                        Y !== w[s + 1].ind &&
                        ((o += w[s].an / 2), (o += 0.001 * t.tr * t.finalSize));
                  } else {
                    switch (
                      (P.translate(r, i, 0),
                      t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                      t.j)
                    ) {
                      case 1:
                        P.translate(
                          w[s].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[w[s].line]),
                          0,
                          0,
                        );
                        break;
                      case 2:
                        P.translate(
                          w[s].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[w[s].line]) / 2,
                          0,
                          0,
                        );
                    }
                    P.translate(0, -t.ls),
                      P.translate(O, 0, 0),
                      P.translate(E[0] * w[s].an * 0.005, E[1] * B * 0.01, 0),
                      (r += w[s].l + 0.001 * t.tr * t.finalSize);
                  }
                  "html" === x
                    ? (tt = P.toCSS())
                    : "svg" === x
                    ? (tt = P.to2dCSS())
                    : (et = [
                        P.props[0],
                        P.props[1],
                        P.props[2],
                        P.props[3],
                        P.props[4],
                        P.props[5],
                        P.props[6],
                        P.props[7],
                        P.props[8],
                        P.props[9],
                        P.props[10],
                        P.props[11],
                        P.props[12],
                        P.props[13],
                        P.props[14],
                        P.props[15],
                      ]),
                    (K = z);
                }
                T <= s
                  ? ((F = new LetterProps(K, j, U, q, tt, et)),
                    this.renderedLetters.push(F),
                    (T += 1),
                    (this.lettersChangedFlag = !0))
                  : ((F = this.renderedLetters[s]),
                    (this.lettersChangedFlag =
                      F.update(K, j, U, q, tt, et) || this.lettersChangedFlag));
              }
            }
          }),
          (TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId &&
              ((this._frameId = this._elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          (TextAnimatorProperty.prototype.mHelper = new Matrix()),
          (TextAnimatorProperty.prototype.defaultPropsArray = []),
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
          (ITextElement.prototype.initElement = function (t, e, r) {
            (this.lettersChangedFlag = !0),
              this.initFrame(),
              this.initBaseData(t, e, r),
              (this.textProperty = new TextProperty(
                this,
                t.t,
                this.dynamicProperties,
              )),
              (this.textAnimator = new TextAnimatorProperty(
                t.t,
                this.renderType,
                this,
              )),
              this.initTransform(t, e, r),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide(),
              this.textAnimator.searchProperties(this.dynamicProperties);
          }),
          (ITextElement.prototype.prepareFrame = function (t) {
            (this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                (this.buildNewText(),
                (this.textProperty._isFirstFrame = !1),
                (this.textProperty._mdf = !1));
          }),
          (ITextElement.prototype.createPathShape = function (t, e) {
            var r,
              i,
              s = e.length,
              a = "";
            for (r = 0; r < s; r += 1)
              "sh" === e[r].ty &&
                ((i = e[r].ks.k),
                (a += buildShapeString(i, i.i.length, !0, t)));
            return a;
          }),
          (ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
          }),
          (ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
          }),
          (ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
          }),
          (ITextElement.prototype.applyTextPropertiesToMatrix = function (
            t,
            e,
            r,
            i,
            s,
          ) {
            switch (
              (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
              e.translate(0, -t.ls, 0),
              t.j)
            ) {
              case 1:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                  0,
                  0,
                );
                break;
              case 2:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                  0,
                  0,
                );
            }
            e.translate(i, s, 0);
          }),
          (ITextElement.prototype.buildColor = function (t) {
            return (
              "rgb(" +
              Math.round(255 * t[0]) +
              "," +
              Math.round(255 * t[1]) +
              "," +
              Math.round(255 * t[2]) +
              ")"
            );
          }),
          (ITextElement.prototype.emptyProp = new LetterProps()),
          (ITextElement.prototype.destroy = function () {});
        var emptyShapeData = { shapes: [] };
        function SVGTextLottieElement(t, e, r) {
          (this.textSpans = []),
            (this.renderType = "svg"),
            this.initElement(t, e, r);
        }
        function ISolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function NullElement(t, e, r) {
          this.initFrame(),
            this.initBaseData(t, e, r),
            this.initFrame(),
            this.initTransform(t, e, r),
            this.initHierarchy();
        }
        function SVGRendererBase() {}
        function ICompElement() {}
        function SVGCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function SVGRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.svgElement = createNS("svg"));
          var r = "";
          if (e && e.title) {
            var i = createNS("title"),
              s = createElementID();
            i.setAttribute("id", s),
              (i.textContent = e.title),
              this.svgElement.appendChild(i),
              (r += s);
          }
          if (e && e.description) {
            var a = createNS("desc"),
              n = createElementID();
            a.setAttribute("id", n),
              (a.textContent = e.description),
              this.svgElement.appendChild(a),
              (r += " " + n);
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          this.svgElement.appendChild(h),
            (this.layerElement = h),
            (this.renderConfig = {
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              progressiveLoad: (e && e.progressiveLoad) || !1,
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              viewBoxOnly: (e && e.viewBoxOnly) || !1,
              viewBoxSize: (e && e.viewBoxSize) || !1,
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              focusable: e && e.focusable,
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "100%",
                height: (e && e.filterSize && e.filterSize.height) || "100%",
                x: (e && e.filterSize && e.filterSize.x) || "0%",
                y: (e && e.filterSize && e.filterSize.y) || "0%",
              },
              width: e && e.width,
              height: e && e.height,
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: o,
              renderConfig: this.renderConfig,
            }),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = "svg");
        }
        function CVContextData() {
          var t;
          for (
            this.saved = [],
              this.cArrPos = 0,
              this.cTr = new Matrix(),
              this.cO = 1,
              this.savedOp = createTypedArray("float32", 15),
              t = 0;
            t < 15;
            t += 1
          )
            this.saved[t] = createTypedArray("float32", 16);
          this._length = 15;
        }
        function ShapeTransformManager() {
          (this.sequences = {}),
            (this.sequenceList = []),
            (this.transform_key_count = 0);
        }
        function CVEffects() {}
        function CVMaskElement(t, e) {
          var r;
          (this.data = t),
            (this.element = e),
            (this.masksProperties = this.data.masksProperties || []),
            (this.viewData = createSizedArray(this.masksProperties.length));
          var i = this.masksProperties.length,
            s = !1;
          for (r = 0; r < i; r += 1)
            "n" !== this.masksProperties[r].mode && (s = !0),
              (this.viewData[r] = ShapePropertyFactory.getShapeProp(
                this.element,
                this.masksProperties[r],
                3,
              ));
          (this.hasMasks = s), s && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {}
        function CVShapeData(t, e, r, i) {
          (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
          var s,
            a = 4;
          "rc" === e.ty
            ? (a = 5)
            : "el" === e.ty
            ? (a = 6)
            : "sr" === e.ty && (a = 7),
            (this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t));
          var n,
            o = r.length;
          for (s = 0; s < o; s += 1)
            r[s].closed ||
              ((n = {
                transforms: i.addTransformSequence(r[s].transforms),
                trNodes: [],
              }),
              this.styledShapes.push(n),
              r[s].elements.push(n));
        }
        function CVShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new ShapeTransformManager()),
            this.initElement(t, e, r);
        }
        function CVTextElement(t, e, r) {
          (this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = "canvas"),
            (this.values = {
              fill: "rgba(0,0,0,0)",
              stroke: "rgba(0,0,0,0)",
              sWidth: 0,
              fValue: "",
            }),
            this.initElement(t, e, r);
        }
        function CVImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            (this.img = e.imageLoader.getAsset(this.assetData)),
            this.initElement(t, e, r);
        }
        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function CanvasRendererBase(t, e) {
          (this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas");
        }
        function CVCompElement(t, e, r) {
          (this.completeLayers = !1),
            (this.layers = t.layers),
            (this.pendingElements = []),
            (this.elements = createSizedArray(this.layers.length)),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function CanvasRenderer(t, e) {
          (this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas");
        }
        function HBaseElement() {}
        function HSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function HShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            (this.shapesContainer = createNS("g")),
            this.initElement(t, e, r),
            (this.prevViewData = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
        }
        function HTextElement(t, e, r) {
          (this.textSpans = []),
            (this.textPaths = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
            (this.renderType = "svg"),
            (this.isMasked = !1),
            this.initElement(t, e, r);
        }
        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (
            ((this.pe = i(this, t.pe, 0, 0, this)),
            t.ks.p.s
              ? ((this.px = i(this, t.ks.p.x, 1, 0, this)),
                (this.py = i(this, t.ks.p.y, 1, 0, this)),
                (this.pz = i(this, t.ks.p.z, 1, 0, this)))
              : (this.p = i(this, t.ks.p, 1, 0, this)),
            t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to)
          ) {
            var s,
              a = t.ks.or.k.length;
            for (s = 0; s < a; s += 1)
              (t.ks.or.k[s].to = null), (t.ks.or.k[s].ti = null);
          }
          (this.or = i(this, t.ks.or, 1, degToRads, this)),
            (this.or.sh = !0),
            (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
            (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
            (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
            (this.mat = new Matrix()),
            (this._prevMat = new Matrix()),
            (this._isFirstFrame = !0),
            (this.finalTransform = { mProp: this });
        }
        function HImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
        }
        function HybridRendererBase(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
        }
        function HCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !t.hasMask),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function HybridRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
        }
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          SVGTextLottieElement,
        ),
          (SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = createNS("text"));
          }),
          (SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r; )
              t[e] === String.fromCharCode(13) ||
              t[e] === String.fromCharCode(3)
                ? (i.push(s), (s = ""))
                : (s += t[e]),
                (e += 1);
            return i.push(s), i;
          }),
          (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            if (t.shapes && t.shapes.length) {
              var r = t.shapes[0];
              if (r.it) {
                var i = r.it[r.it.length - 1];
                i.s && ((i.s.k[0] = e), (i.s.k[1] = e));
              }
            }
            return t;
          }),
          (SVGTextLottieElement.prototype.buildNewText = function () {
            var t, e;
            this.addDynamicProperty(this);
            var r = this.textProperty.currentData;
            (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
              r.fc
                ? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
                : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
              r.sc &&
                (this.layerElement.setAttribute(
                  "stroke",
                  this.buildColor(r.sc),
                ),
                this.layerElement.setAttribute("stroke-width", r.sw)),
              this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
              this.layerElement.setAttribute("font-family", i.fFamily);
              var s = r.fWeight,
                a = r.fStyle;
              this.layerElement.setAttribute("font-style", a),
                this.layerElement.setAttribute("font-weight", s);
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n,
              o = r.l || [],
              h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l = this.mHelper,
              p = this.data.singleShape,
              f = 0,
              d = 0,
              c = !0,
              m = 0.001 * r.tr * r.finalSize;
            if (!p || h || r.sz) {
              var u,
                y = this.textSpans.length;
              for (t = 0; t < e; t += 1) {
                if (
                  (this.textSpans[t] ||
                    (this.textSpans[t] = {
                      span: null,
                      childSpan: null,
                      glyph: null,
                    }),
                  !h || !p || 0 === t)
                ) {
                  if (
                    ((n =
                      y > t
                        ? this.textSpans[t].span
                        : createNS(h ? "g" : "text")),
                    y <= t)
                  ) {
                    if (
                      (n.setAttribute("stroke-linecap", "butt"),
                      n.setAttribute("stroke-linejoin", "round"),
                      n.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[t].span = n),
                      h)
                    ) {
                      var g = createNS("g");
                      n.appendChild(g), (this.textSpans[t].childSpan = g);
                    }
                    (this.textSpans[t].span = n),
                      this.layerElement.appendChild(n);
                  }
                  n.style.display = "inherit";
                }
                if (
                  (l.reset(),
                  p &&
                    (o[t].n &&
                      ((f = -m), (d += r.yOffset), (d += c ? 1 : 0), (c = !1)),
                    this.applyTextPropertiesToMatrix(r, l, o[t].line, f, d),
                    (f += o[t].l || 0),
                    (f += m)),
                  h)
                ) {
                  var _;
                  if (
                    1 ===
                    (u = this.globalData.fontManager.getCharData(
                      r.finalText[t],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(r.f).fFamily,
                    )).t
                  )
                    _ = new SVGCompElement(u.data, this.globalData, this);
                  else {
                    var v = emptyShapeData;
                    u.data &&
                      u.data.shapes &&
                      (v = this.buildShapeData(u.data, r.finalSize)),
                      (_ = new SVGShapeElement(v, this.globalData, this));
                  }
                  if (this.textSpans[t].glyph) {
                    var b = this.textSpans[t].glyph;
                    this.textSpans[t].childSpan.removeChild(b.layerElement),
                      b.destroy();
                  }
                  (this.textSpans[t].glyph = _),
                    (_._debug = !0),
                    _.prepareFrame(0),
                    _.renderFrame(),
                    this.textSpans[t].childSpan.appendChild(_.layerElement),
                    1 === u.t &&
                      this.textSpans[t].childSpan.setAttribute(
                        "transform",
                        "scale(" +
                          r.finalSize / 100 +
                          "," +
                          r.finalSize / 100 +
                          ")",
                      );
                } else
                  p &&
                    n.setAttribute(
                      "transform",
                      "translate(" + l.props[12] + "," + l.props[13] + ")",
                    ),
                    (n.textContent = o[t].val),
                    n.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve",
                    );
              }
              p && n && n.setAttribute("d", "");
            } else {
              var E = this.textContainer,
                S = "start";
              switch (r.j) {
                case 1:
                  S = "end";
                  break;
                case 2:
                  S = "middle";
                  break;
                default:
                  S = "start";
              }
              E.setAttribute("text-anchor", S),
                E.setAttribute("letter-spacing", m);
              var A = this.buildTextContents(r.finalText);
              for (
                e = A.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
                t < e;
                t += 1
              )
                ((n = this.textSpans[t].span || createNS("tspan")).textContent =
                  A[t]),
                  n.setAttribute("x", 0),
                  n.setAttribute("y", d),
                  (n.style.display = "inherit"),
                  E.appendChild(n),
                  this.textSpans[t] ||
                    (this.textSpans[t] = { span: null, glyph: null }),
                  (this.textSpans[t].span = n),
                  (d += r.finalLineHeight);
              this.layerElement.appendChild(E);
            }
            for (; t < this.textSpans.length; )
              (this.textSpans[t].span.style.display = "none"), (t += 1);
            this._sizeChanged = !0;
          }),
          (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (
              (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged)
            ) {
              this._sizeChanged = !1;
              var t = this.layerElement.getBBox();
              this.bbox = {
                top: t.y,
                left: t.x,
                width: t.width,
                height: t.height,
              };
            }
            return this.bbox;
          }),
          (SVGTextLottieElement.prototype.getValue = function () {
            var t,
              e,
              r = this.textSpans.length;
            for (
              this.renderedFrame = this.comp.renderedFrame, t = 0;
              t < r;
              t += 1
            )
              (e = this.textSpans[t].glyph) &&
                (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                e._mdf && (this._mdf = !0));
          }),
          (SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (
              (!this.data.singleShape || this._mdf) &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag,
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var t, e;
              this._sizeChanged = !0;
              var r,
                i,
                s,
                a = this.textAnimator.renderedLetters,
                n = this.textProperty.currentData.l;
              for (e = n.length, t = 0; t < e; t += 1)
                n[t].n ||
                  ((r = a[t]),
                  (i = this.textSpans[t].span),
                  (s = this.textSpans[t].glyph) && s.renderFrame(),
                  r._mdf.m && i.setAttribute("transform", r.m),
                  r._mdf.o && i.setAttribute("opacity", r.o),
                  r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                  r._mdf.sc && i.setAttribute("stroke", r.sc),
                  r._mdf.fc && i.setAttribute("fill", r.fc));
            }
          }),
          extendPrototype([IImageElement], ISolidElement),
          (ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.layerElement.appendChild(t);
          }),
          (NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (NullElement.prototype.renderFrame = function () {}),
          (NullElement.prototype.getBaseElement = function () {
            return null;
          }),
          (NullElement.prototype.destroy = function () {}),
          (NullElement.prototype.sourceRectAtTime = function () {}),
          (NullElement.prototype.hide = function () {}),
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement],
            NullElement,
          ),
          extendPrototype([BaseRenderer], SVGRendererBase),
          (SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
              this.svgElement.setAttribute(
                "xmlns:xlink",
                "http://www.w3.org/1999/xlink",
              ),
              this.renderConfig.viewBoxSize
                ? this.svgElement.setAttribute(
                    "viewBox",
                    this.renderConfig.viewBoxSize,
                  )
                : this.svgElement.setAttribute(
                    "viewBox",
                    "0 0 " + t.w + " " + t.h,
                  ),
              this.renderConfig.viewBoxOnly ||
                (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                (this.svgElement.style.width = "100%"),
                (this.svgElement.style.height = "100%"),
                (this.svgElement.style.transform = "translate3d(0,0,0)"),
                (this.svgElement.style.contentVisibility =
                  this.renderConfig.contentVisibility)),
              this.renderConfig.width &&
                this.svgElement.setAttribute("width", this.renderConfig.width),
              this.renderConfig.height &&
                this.svgElement.setAttribute(
                  "height",
                  this.renderConfig.height,
                ),
              this.renderConfig.className &&
                this.svgElement.setAttribute(
                  "class",
                  this.renderConfig.className,
                ),
              this.renderConfig.id &&
                this.svgElement.setAttribute("id", this.renderConfig.id),
              void 0 !== this.renderConfig.focusable &&
                this.svgElement.setAttribute(
                  "focusable",
                  this.renderConfig.focusable,
                ),
              this.svgElement.setAttribute(
                "preserveAspectRatio",
                this.renderConfig.preserveAspectRatio,
              ),
              this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.data = t);
            var r = createNS("clipPath"),
              i = createNS("rect");
            i.setAttribute("width", t.w),
              i.setAttribute("height", t.h),
              i.setAttribute("x", 0),
              i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s),
              r.appendChild(i),
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + s + ")",
              ),
              e.appendChild(r),
              (this.layers = t.layers),
              (this.elements = createSizedArray(t.layers.length));
          }),
          (SVGRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.layerElement = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null);
          }),
          (SVGRendererBase.prototype.updateContainerSize = function () {}),
          (SVGRendererBase.prototype.findIndexByInd = function (t) {
            var e = 0,
              r = this.layers.length;
            for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
            return -1;
          }),
          (SVGRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = !0;
              var r = this.createItem(this.layers[t]);
              if (
                ((e[t] = r),
                getExpressionsPlugin() &&
                  (0 === this.layers[t].ty &&
                    this.globalData.projectInterface.registerComposition(r),
                  r.initExpressions()),
                this.appendElementInPos(r, t),
                this.layers[t].tt)
              ) {
                var i =
                  "tp" in this.layers[t]
                    ? this.findIndexByInd(this.layers[t].tp)
                    : t - 1;
                if (-1 === i) return;
                if (this.elements[i] && !0 !== this.elements[i]) {
                  var s = e[i].getMatte(this.layers[t].tt);
                  r.setMatte(s);
                } else this.buildItem(i), this.addPendingElement(r);
              }
            }
          }),
          (SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              if ((t.checkParenting(), t.data.tt))
                for (var e = 0, r = this.elements.length; e < r; ) {
                  if (this.elements[e] === t) {
                    var i =
                        "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                      s = this.elements[i].getMatte(this.layers[e].tt);
                    t.setMatte(s);
                    break;
                  }
                  e += 1;
                }
            }
          }),
          (SVGRendererBase.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              var e;
              null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
                (this.globalData.frameNum = t),
                (this.globalData.frameId += 1),
                (this.globalData.projectInterface.currentFrame = t),
                (this.globalData._mdf = !1);
              var r = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), e = r - 1;
                e >= 0;
                e -= 1
              )
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].renderFrame();
            }
          }),
          (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              for (var i, s = 0; s < e; )
                this.elements[s] &&
                  !0 !== this.elements[s] &&
                  this.elements[s].getBaseElement() &&
                  (i = this.elements[s].getBaseElement()),
                  (s += 1);
              i
                ? this.layerElement.insertBefore(r, i)
                : this.layerElement.appendChild(r);
            }
          }),
          (SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none";
          }),
          (SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block";
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            ICompElement,
          ),
          (ICompElement.prototype.initElement = function (t, e, r) {
            this.initFrame(),
              this.initBaseData(t, e, r),
              this.initTransform(t, e, r),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
              this.hide();
          }),
          (ICompElement.prototype.prepareFrame = function (t) {
            if (
              ((this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.isInRange || this.data.xt)
            ) {
              if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1),
                  (this.renderedFrame = e);
              }
              var r,
                i = this.elements.length;
              for (
                this.completeLayers || this.checkLayers(this.renderedFrame),
                  r = i - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  (this.elements[r].prepareFrame(
                    this.renderedFrame - this.layers[r].st,
                  ),
                  this.elements[r]._mdf && (this._mdf = !0));
            }
          }),
          (ICompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (ICompElement.prototype.setElements = function (t) {
            this.elements = t;
          }),
          (ICompElement.prototype.getElements = function () {
            return this.elements;
          }),
          (ICompElement.prototype.destroyElements = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
          }),
          (ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement();
          }),
          extendPrototype(
            [SVGRendererBase, ICompElement, SVGBaseElement],
            SVGCompElement,
          ),
          (SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          extendPrototype([SVGRendererBase], SVGRenderer),
          (SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          (CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
              e = this.savedOp;
            (this.savedOp = createTypedArray("float32", t)),
              this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1)
              this.saved[r] = createTypedArray("float32", 16);
            this._length = t;
          }),
          (CVContextData.prototype.reset = function () {
            (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
          }),
          (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              var e,
                r = t.length,
                i = "_";
              for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
              var s = this.sequences[i];
              return (
                s ||
                  ((s = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1,
                  }),
                  (this.sequences[i] = s),
                  this.sequenceList.push(s)),
                s
              );
            },
            processSequence: function (t, e) {
              for (
                var r, i = 0, s = t.transforms.length, a = e;
                i < s && !e;

              ) {
                if (t.transforms[i].transform.mProps._mdf) {
                  a = !0;
                  break;
                }
                i += 1;
              }
              if (a)
                for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
                  (r = t.transforms[i].transform.mProps.v.props),
                    t.finalTransform.transform(
                      r[0],
                      r[1],
                      r[2],
                      r[3],
                      r[4],
                      r[5],
                      r[6],
                      r[7],
                      r[8],
                      r[9],
                      r[10],
                      r[11],
                      r[12],
                      r[13],
                      r[14],
                      r[15],
                    );
              t._mdf = a;
            },
            processSequences: function (t) {
              var e,
                r = this.sequenceList.length;
              for (e = 0; e < r; e += 1)
                this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function () {
              return (
                (this.transform_key_count += 1), "_" + this.transform_key_count
              );
            },
          }),
          (CVEffects.prototype.renderFrame = function () {}),
          (CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
              var t,
                e,
                r,
                i,
                s = this.element.finalTransform.mat,
                a = this.element.canvasContext,
                n = this.masksProperties.length;
              for (a.beginPath(), t = 0; t < n; t += 1)
                if ("n" !== this.masksProperties[t].mode) {
                  var o;
                  this.masksProperties[t].inv &&
                    (a.moveTo(0, 0),
                    a.lineTo(this.element.globalData.compSize.w, 0),
                    a.lineTo(
                      this.element.globalData.compSize.w,
                      this.element.globalData.compSize.h,
                    ),
                    a.lineTo(0, this.element.globalData.compSize.h),
                    a.lineTo(0, 0)),
                    (i = this.viewData[t].v),
                    (e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                    a.moveTo(e[0], e[1]);
                  var h = i._length;
                  for (o = 1; o < h; o += 1)
                    (r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o])),
                      a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  (r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0])),
                    a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                }
              this.element.globalData.renderer.save(!0), a.clip();
            }
          }),
          (CVMaskElement.prototype.getMaskProperty =
            MaskElement.prototype.getMaskProperty),
          (CVMaskElement.prototype.destroy = function () {
            this.element = null;
          }),
          (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
              (this.canvasContext = this.globalData.canvasContext),
                (this.renderableEffectsManager = new CVEffects());
            },
            createContent: function () {},
            setBlendMode: function () {
              var t = this.globalData;
              if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function () {
              this.hidden ||
                (this.isInRange && !this.isTransparent) ||
                (this.hidden = !0);
            },
            showElement: function () {
              this.isInRange &&
                !this.isTransparent &&
                ((this.hidden = !1),
                (this._isFirstFrame = !0),
                (this.maskManager._isFirstFrame = !0));
            },
            renderFrame: function () {
              if (!this.hidden && !this.data.hd) {
                this.renderTransform(),
                  this.renderRenderable(),
                  this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t),
                  this.globalData.renderer.ctxTransform(
                    this.finalTransform.mat.props,
                  ),
                  this.globalData.renderer.ctxOpacity(
                    this.finalTransform.mProp.o.v,
                  ),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(t),
                  this.maskManager.hasMasks &&
                    this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1);
              }
            },
            destroy: function () {
              (this.canvasContext = null),
                (this.data = null),
                (this.globalData = null),
                this.maskManager.destroy();
            },
            mHelper: new Matrix(),
          }),
          (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
          (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
          (CVShapeData.prototype.setAsAnimated =
            SVGShapeData.prototype.setAsAnimated),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVShapeElement,
          ),
          (CVShapeElement.prototype.initElement =
            RenderableDOMElement.prototype.initElement),
          (CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1,
          }),
          (CVShapeElement.prototype.dashResetter = []),
          (CVShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              [],
            );
          }),
          (CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd,
              },
              i = {};
            if (
              ("fl" === t.ty || "st" === t.ty
                ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                  i.c.k ||
                    (r.co =
                      "rgb(" +
                      bmFloor(i.c.v[0]) +
                      "," +
                      bmFloor(i.c.v[1]) +
                      "," +
                      bmFloor(i.c.v[2]) +
                      ")"))
                : ("gf" !== t.ty && "gs" !== t.ty) ||
                  ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                  (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                  (i.h = PropertyFactory.getProp(
                    this,
                    t.h || { k: 0 },
                    0,
                    0.01,
                    this,
                  )),
                  (i.a = PropertyFactory.getProp(
                    this,
                    t.a || { k: 0 },
                    0,
                    degToRads,
                    this,
                  )),
                  (i.g = new GradientProperty(this, t.g, this))),
              (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
              "st" === t.ty || "gs" === t.ty)
            ) {
              if (
                ((r.lc = lineCapEnum[t.lc || 2]),
                (r.lj = lineJoinEnum[t.lj || 2]),
                1 == t.lj && (r.ml = t.ml),
                (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                i.w.k || (r.wi = i.w.v),
                t.d)
              ) {
                var s = new DashProperty(this, t.d, "canvas", this);
                (i.d = s),
                  i.d.k || ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
              }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), (i.style = r), i;
          }),
          (CVShapeElement.prototype.createGroupElement = function () {
            return { it: [], prevViewData: [] };
          }),
          (CVShapeElement.prototype.createTransformElement = function (t) {
            return {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this,
                ),
              },
            };
          }),
          (CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(
              this,
              t,
              this.stylesList,
              this.transformsManager,
            );
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
          }),
          (CVShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                [],
              ),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame);
          }),
          (CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e,
              r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed ||
                this.stylesList[e].transforms.push(t);
          }),
          (CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }),
          (CVShapeElement.prototype.closeStyles = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0;
          }),
          (CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) {
            var a,
              n,
              o,
              h,
              l,
              p,
              f = t.length - 1,
              d = [],
              c = [],
              m = [].concat(s);
            for (a = f; a >= 0; a -= 1) {
              if (
                ((h = this.searchProcessedElement(t[a]))
                  ? (e[a] = r[h - 1])
                  : (t[a]._shouldRender = i),
                "fl" === t[a].ty ||
                  "st" === t[a].ty ||
                  "gf" === t[a].ty ||
                  "gs" === t[a].ty)
              )
                h
                  ? (e[a].style.closed = !1)
                  : (e[a] = this.createStyleElement(t[a], m)),
                  d.push(e[a].style);
              else if ("gr" === t[a].ty) {
                if (h)
                  for (o = e[a].it.length, n = 0; n < o; n += 1)
                    e[a].prevViewData[n] = e[a].it[n];
                else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, m);
              } else
                "tr" === t[a].ty
                  ? (h || ((p = this.createTransformElement(t[a])), (e[a] = p)),
                    m.push(e[a]),
                    this.addTransformToStyleList(e[a]))
                  : "sh" === t[a].ty ||
                    "rc" === t[a].ty ||
                    "el" === t[a].ty ||
                    "sr" === t[a].ty
                  ? h || (e[a] = this.createShapeElement(t[a]))
                  : "tm" === t[a].ty ||
                    "rd" === t[a].ty ||
                    "pb" === t[a].ty ||
                    "zz" === t[a].ty ||
                    "op" === t[a].ty
                  ? (h
                      ? ((l = e[a]).closed = !1)
                      : ((l = ShapeModifiers.getModifier(t[a].ty)).init(
                          this,
                          t[a],
                        ),
                        (e[a] = l),
                        this.shapeModifiers.push(l)),
                    c.push(l))
                  : "rp" === t[a].ty &&
                    (h
                      ? ((l = e[a]).closed = !0)
                      : ((l = ShapeModifiers.getModifier(t[a].ty)),
                        (e[a] = l),
                        l.init(this, t, a, e),
                        this.shapeModifiers.push(l),
                        (i = !1)),
                    c.push(l));
              this.addProcessedElement(t[a], a + 1);
            }
            for (
              this.removeTransformFromStyleList(),
                this.closeStyles(d),
                f = c.length,
                a = 0;
              a < f;
              a += 1
            )
              c[a].closed = !0;
          }),
          (CVShapeElement.prototype.renderInnerContent = function () {
            (this.transformHelper.opacity = 1),
              (this.transformHelper._opMdf = !1),
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(
                this.transformHelper,
                this.shapesData,
                this.itemsData,
                !0,
              );
          }),
          (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) &&
              ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
          }),
          (CVShapeElement.prototype.drawLayer = function () {
            var t,
              e,
              r,
              i,
              s,
              a,
              n,
              o,
              h,
              l = this.stylesList.length,
              p = this.globalData.renderer,
              f = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
              if (
                (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o) ||
                  0 !== h.wi) &&
                h.data._shouldRender &&
                0 !== h.coOp &&
                0 !== this.globalData.currentGlobalAlpha
              ) {
                for (
                  p.save(),
                    a = h.elements,
                    "st" === o || "gs" === o
                      ? ((f.strokeStyle = "st" === o ? h.co : h.grd),
                        (f.lineWidth = h.wi),
                        (f.lineCap = h.lc),
                        (f.lineJoin = h.lj),
                        (f.miterLimit = h.ml || 0))
                      : (f.fillStyle = "fl" === o ? h.co : h.grd),
                    p.ctxOpacity(h.coOp),
                    "st" !== o && "gs" !== o && f.beginPath(),
                    p.ctxTransform(h.preTransforms.finalTransform.props),
                    r = a.length,
                    e = 0;
                  e < r;
                  e += 1
                ) {
                  for (
                    ("st" !== o && "gs" !== o) ||
                      (f.beginPath(),
                      h.da && (f.setLineDash(h.da), (f.lineDashOffset = h.do))),
                      s = (n = a[e].trNodes).length,
                      i = 0;
                    i < s;
                    i += 1
                  )
                    "m" === n[i].t
                      ? f.moveTo(n[i].p[0], n[i].p[1])
                      : "c" === n[i].t
                      ? f.bezierCurveTo(
                          n[i].pts[0],
                          n[i].pts[1],
                          n[i].pts[2],
                          n[i].pts[3],
                          n[i].pts[4],
                          n[i].pts[5],
                        )
                      : f.closePath();
                  ("st" !== o && "gs" !== o) ||
                    (f.stroke(), h.da && f.setLineDash(this.dashResetter));
                }
                "st" !== o && "gs" !== o && f.fill(h.r), p.restore();
              }
          }),
          (CVShapeElement.prototype.renderShape = function (t, e, r, i) {
            var s, a;
            for (a = t, s = e.length - 1; s >= 0; s -= 1)
              "tr" === e[s].ty
                ? ((a = r[s].transform), this.renderShapeTransform(t, a))
                : "sh" === e[s].ty ||
                  "el" === e[s].ty ||
                  "rc" === e[s].ty ||
                  "sr" === e[s].ty
                ? this.renderPath(e[s], r[s])
                : "fl" === e[s].ty
                ? this.renderFill(e[s], r[s], a)
                : "st" === e[s].ty
                ? this.renderStroke(e[s], r[s], a)
                : "gf" === e[s].ty || "gs" === e[s].ty
                ? this.renderGradientFill(e[s], r[s], a)
                : "gr" === e[s].ty
                ? this.renderShape(a, e[s].it, r[s].it)
                : e[s].ty;
            i && this.drawLayer();
          }),
          (CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r,
                i,
                s,
                a = t.trNodes,
                n = e.paths,
                o = n._length;
              a.length = 0;
              var h = t.transforms.finalTransform;
              for (s = 0; s < o; s += 1) {
                var l = n.shapes[s];
                if (l && l.v) {
                  for (i = l._length, r = 1; r < i; r += 1)
                    1 === r &&
                      a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      }),
                      a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]),
                      });
                  1 === i &&
                    a.push({
                      t: "m",
                      p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                    }),
                    l.c &&
                      i &&
                      (a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]),
                      }),
                      a.push({ t: "z" }));
                }
              }
              t.trNodes = a;
            }
          }),
          (CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
              var r,
                i = e.styledShapes.length;
              for (r = 0; r < i; r += 1)
                this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }),
          (CVShapeElement.prototype.renderFill = function (t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) &&
              (i.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity);
          }),
          (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var i,
              s = e.style;
            if (
              !s.grd ||
              e.g._mdf ||
              e.s._mdf ||
              e.e._mdf ||
              (1 !== t.t && (e.h._mdf || e.a._mdf))
            ) {
              var a,
                n = this.globalData.canvasContext,
                o = e.s.v,
                h = e.e.v;
              if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
              else {
                var l = Math.sqrt(
                    Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2),
                  ),
                  p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                  f = e.h.v;
                f >= 1 ? (f = 0.99) : f <= -1 && (f = -0.99);
                var d = l * f,
                  c = Math.cos(p + e.a.v) * d + o[0],
                  m = Math.sin(p + e.a.v) * d + o[1];
                i = n.createRadialGradient(c, m, 0, o[0], o[1], l);
              }
              var u = t.g.p,
                y = e.g.c,
                g = 1;
              for (a = 0; a < u; a += 1)
                e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]),
                  i.addColorStop(
                    y[4 * a] / 100,
                    "rgba(" +
                      y[4 * a + 1] +
                      "," +
                      y[4 * a + 2] +
                      "," +
                      y[4 * a + 3] +
                      "," +
                      g +
                      ")",
                  );
              s.grd = i;
            }
            s.coOp = e.o.v * r.opacity;
          }),
          (CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var i = e.style,
              s = e.d;
            s &&
              (s._mdf || this._isFirstFrame) &&
              ((i.da = s.dashArray), (i.do = s.dashoffset[0])),
              (e.c._mdf || this._isFirstFrame) &&
                (i.co =
                  "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity),
              (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
          }),
          (CVShapeElement.prototype.destroy = function () {
            (this.shapesData = null),
              (this.globalData = null),
              (this.canvasContext = null),
              (this.stylesList.length = 0),
              (this.itemsData.length = 0);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
              ITextElement,
            ],
            CVTextElement,
          ),
          (CVTextElement.prototype.tHelper =
            createTag("canvas").getContext("2d")),
          (CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc
              ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
              : (this.values.fill = "rgba(0,0,0,0)"),
              (this.fill = e);
            var r = !1;
            t.sc &&
              ((r = !0),
              (this.values.stroke = this.buildColor(t.sc)),
              (this.values.sWidth = t.sw));
            var i,
              s,
              a,
              n,
              o,
              h,
              l,
              p,
              f,
              d,
              c,
              m,
              u = this.globalData.fontManager.getFontByName(t.f),
              y = t.l,
              g = this.mHelper;
            (this.stroke = r),
              (this.values.fValue =
                t.finalSize +
                "px " +
                this.globalData.fontManager.getFontByName(t.f).fFamily),
              (s = t.finalText.length);
            var _ = this.data.singleShape,
              v = 0.001 * t.tr * t.finalSize,
              b = 0,
              E = 0,
              S = !0,
              A = 0;
            for (i = 0; i < s; i += 1) {
              (n =
                ((a = this.globalData.fontManager.getCharData(
                  t.finalText[i],
                  u.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily,
                )) &&
                  a.data) ||
                {}),
                g.reset(),
                _ &&
                  y[i].n &&
                  ((b = -v), (E += t.yOffset), (E += S ? 1 : 0), (S = !1)),
                (f = (l = n.shapes ? n.shapes[0].it : []).length),
                g.scale(t.finalSize / 100, t.finalSize / 100),
                _ && this.applyTextPropertiesToMatrix(t, g, y[i].line, b, E),
                (c = createSizedArray(f - 1));
              var P = 0;
              for (p = 0; p < f; p += 1)
                if ("sh" === l[p].ty) {
                  for (
                    h = l[p].ks.k.i.length, d = l[p].ks.k, m = [], o = 1;
                    o < h;
                    o += 1
                  )
                    1 === o &&
                      m.push(
                        g.applyToX(d.v[0][0], d.v[0][1], 0),
                        g.applyToY(d.v[0][0], d.v[0][1], 0),
                      ),
                      m.push(
                        g.applyToX(d.o[o - 1][0], d.o[o - 1][1], 0),
                        g.applyToY(d.o[o - 1][0], d.o[o - 1][1], 0),
                        g.applyToX(d.i[o][0], d.i[o][1], 0),
                        g.applyToY(d.i[o][0], d.i[o][1], 0),
                        g.applyToX(d.v[o][0], d.v[o][1], 0),
                        g.applyToY(d.v[o][0], d.v[o][1], 0),
                      );
                  m.push(
                    g.applyToX(d.o[o - 1][0], d.o[o - 1][1], 0),
                    g.applyToY(d.o[o - 1][0], d.o[o - 1][1], 0),
                    g.applyToX(d.i[0][0], d.i[0][1], 0),
                    g.applyToY(d.i[0][0], d.i[0][1], 0),
                    g.applyToX(d.v[0][0], d.v[0][1], 0),
                    g.applyToY(d.v[0][0], d.v[0][1], 0),
                  ),
                    (c[P] = m),
                    (P += 1);
                }
              _ && ((b += y[i].l), (b += v)),
                this.textSpans[A]
                  ? (this.textSpans[A].elem = c)
                  : (this.textSpans[A] = { elem: c }),
                (A += 1);
            }
          }),
          (CVTextElement.prototype.renderInnerContent = function () {
            var t,
              e,
              r,
              i,
              s,
              a,
              n = this.canvasContext;
            (n.font = this.values.fValue),
              (n.lineCap = "butt"),
              (n.lineJoin = "miter"),
              (n.miterLimit = 4),
              this.data.singleShape ||
                this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag,
                );
            var o,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            e = l.length;
            var p,
              f,
              d = null,
              c = null,
              m = null;
            for (t = 0; t < e; t += 1)
              if (!l[t].n) {
                if (
                  ((o = h[t]) &&
                    (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(o.p),
                    this.globalData.renderer.ctxOpacity(o.o)),
                  this.fill)
                ) {
                  for (
                    o && o.fc
                      ? d !== o.fc && ((d = o.fc), (n.fillStyle = o.fc))
                      : d !== this.values.fill &&
                        ((d = this.values.fill),
                        (n.fillStyle = this.values.fill)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      a = (f = p[r]).length,
                        this.globalData.canvasContext.moveTo(f[0], f[1]),
                        s = 2;
                      s < a;
                      s += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        f[s],
                        f[s + 1],
                        f[s + 2],
                        f[s + 3],
                        f[s + 4],
                        f[s + 5],
                      );
                  this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                  for (
                    o && o.sw
                      ? m !== o.sw && ((m = o.sw), (n.lineWidth = o.sw))
                      : m !== this.values.sWidth &&
                        ((m = this.values.sWidth),
                        (n.lineWidth = this.values.sWidth)),
                      o && o.sc
                        ? c !== o.sc && ((c = o.sc), (n.strokeStyle = o.sc))
                        : c !== this.values.stroke &&
                          ((c = this.values.stroke),
                          (n.strokeStyle = this.values.stroke)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      a = (f = p[r]).length,
                        this.globalData.canvasContext.moveTo(f[0], f[1]),
                        s = 2;
                      s < a;
                      s += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        f[s],
                        f[s + 1],
                        f[s + 2],
                        f[s + 3],
                        f[s + 4],
                        f[s + 5],
                      );
                  this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
              }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVImageElement,
          ),
          (CVImageElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVImageElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVImageElement.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width ||
                this.assetData.h !== this.img.height)
            ) {
              var t = createTag("canvas");
              (t.width = this.assetData.w), (t.height = this.assetData.h);
              var e,
                r,
                i = t.getContext("2d"),
                s = this.img.width,
                a = this.img.height,
                n = s / a,
                o = this.assetData.w / this.assetData.h,
                h =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio;
              (n > o && "xMidYMid slice" === h) ||
              (n < o && "xMidYMid slice" !== h)
                ? (e = (r = a) * o)
                : (r = (e = s) / o),
                i.drawImage(
                  this.img,
                  (s - e) / 2,
                  (a - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h,
                ),
                (this.img = t);
            }
          }),
          (CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          }),
          (CVImageElement.prototype.destroy = function () {
            this.img = null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVSolidElement,
          ),
          (CVSolidElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVSolidElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            (t.fillStyle = this.data.sc),
              t.fillRect(0, 0, this.data.sw, this.data.sh);
          }),
          extendPrototype([BaseRenderer], CanvasRendererBase),
          (CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (CanvasRendererBase.prototype.ctxTransform = function (t) {
            if (
              1 !== t[0] ||
              0 !== t[1] ||
              0 !== t[4] ||
              1 !== t[5] ||
              0 !== t[12] ||
              0 !== t[13]
            )
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15],
                ),
                  this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(
                  r[0],
                  r[1],
                  r[4],
                  r[5],
                  r[12],
                  r[13],
                );
              } else
                this.canvasContext.transform(
                  t[0],
                  t[1],
                  t[4],
                  t[5],
                  t[12],
                  t[13],
                );
          }),
          (CanvasRendererBase.prototype.ctxOpacity = function (t) {
            if (!this.renderConfig.clearCanvas)
              return (
                (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                void (this.globalData.currentGlobalAlpha = this.contextData.cO)
              );
            (this.contextData.cO *= t < 0 ? 0 : t),
              this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                ((this.canvasContext.globalAlpha = this.contextData.cO),
                (this.globalData.currentGlobalAlpha = this.contextData.cO));
          }),
          (CanvasRendererBase.prototype.reset = function () {
            this.renderConfig.clearCanvas
              ? this.contextData.reset()
              : this.canvasContext.restore();
          }),
          (CanvasRendererBase.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e,
                r = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos &&
                this.contextData.duplicate();
              var i = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              (this.contextData.savedOp[this.contextData.cArrPos] =
                this.contextData.cO),
                (this.contextData.cArrPos += 1);
            } else this.canvasContext.save();
          }),
          (CanvasRendererBase.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
              t &&
                (this.canvasContext.restore(),
                (this.globalData.blendMode = "source-over")),
                (this.contextData.cArrPos -= 1);
              var e,
                r = this.contextData.saved[this.contextData.cArrPos],
                i = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              this.canvasContext.setTransform(
                r[0],
                r[1],
                r[4],
                r[5],
                r[12],
                r[13],
              ),
                (r = this.contextData.savedOp[this.contextData.cArrPos]),
                (this.contextData.cO = r),
                this.globalData.currentGlobalAlpha !== r &&
                  ((this.canvasContext.globalAlpha = r),
                  (this.globalData.currentGlobalAlpha = r));
            } else this.canvasContext.restore();
          }),
          (CanvasRendererBase.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              (e.width = "100%"), (e.height = "100%");
              var r = "0px 0px 0px";
              (e.transformOrigin = r),
                (e.mozTransformOrigin = r),
                (e.webkitTransformOrigin = r),
                (e["-webkit-transform"] = r),
                (e.contentVisibility = this.renderConfig.contentVisibility),
                this.animationItem.wrapper.appendChild(
                  this.animationItem.container,
                ),
                (this.canvasContext =
                  this.animationItem.container.getContext("2d")),
                this.renderConfig.className &&
                  this.animationItem.container.setAttribute(
                    "class",
                    this.renderConfig.className,
                  ),
                this.renderConfig.id &&
                  this.animationItem.container.setAttribute(
                    "id",
                    this.renderConfig.id,
                  );
            } else this.canvasContext = this.renderConfig.context;
            (this.data = t),
              (this.layers = t.layers),
              (this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0,
              }),
              this.setupGlobalData(t, document.body),
              (this.globalData.canvasContext = this.canvasContext),
              (this.globalData.renderer = this),
              (this.globalData.isDashed = !1),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.globalData.transformCanvas = this.transformCanvas),
              (this.elements = createSizedArray(t.layers.length)),
              this.updateContainerSize();
          }),
          (CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
            var r, i, s, a;
            if (
              (this.reset(),
              t
                ? ((r = t),
                  (i = e),
                  (this.canvasContext.canvas.width = r),
                  (this.canvasContext.canvas.height = i))
                : (this.animationItem.wrapper && this.animationItem.container
                    ? ((r = this.animationItem.wrapper.offsetWidth),
                      (i = this.animationItem.wrapper.offsetHeight))
                    : ((r = this.canvasContext.canvas.width),
                      (i = this.canvasContext.canvas.height)),
                  (this.canvasContext.canvas.width = r * this.renderConfig.dpr),
                  (this.canvasContext.canvas.height =
                    i * this.renderConfig.dpr)),
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
            ) {
              var n = this.renderConfig.preserveAspectRatio.split(" "),
                o = n[1] || "meet",
                h = n[0] || "xMidYMid",
                l = h.substr(0, 4),
                p = h.substr(4);
              (s = r / i),
                ((a = this.transformCanvas.w / this.transformCanvas.h) > s &&
                  "meet" === o) ||
                (a < s && "slice" === o)
                  ? ((this.transformCanvas.sx =
                      r / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      r / (this.transformCanvas.w / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx =
                      i / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      i / (this.transformCanvas.h / this.renderConfig.dpr))),
                (this.transformCanvas.tx =
                  "xMid" === l &&
                  ((a < s && "meet" === o) || (a > s && "slice" === o))
                    ? ((r -
                        this.transformCanvas.w * (i / this.transformCanvas.h)) /
                        2) *
                      this.renderConfig.dpr
                    : "xMax" === l &&
                      ((a < s && "meet" === o) || (a > s && "slice" === o))
                    ? (r -
                        this.transformCanvas.w * (i / this.transformCanvas.h)) *
                      this.renderConfig.dpr
                    : 0),
                (this.transformCanvas.ty =
                  "YMid" === p &&
                  ((a > s && "meet" === o) || (a < s && "slice" === o))
                    ? ((i -
                        this.transformCanvas.h * (r / this.transformCanvas.w)) /
                        2) *
                      this.renderConfig.dpr
                    : "YMax" === p &&
                      ((a > s && "meet" === o) || (a < s && "slice" === o))
                    ? (i -
                        this.transformCanvas.h * (r / this.transformCanvas.w)) *
                      this.renderConfig.dpr
                    : 0);
            } else
              "none" === this.renderConfig.preserveAspectRatio
                ? ((this.transformCanvas.sx =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    i / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0))
                : ((this.transformCanvas.sx = this.renderConfig.dpr),
                  (this.transformCanvas.sy = this.renderConfig.dpr),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0));
            (this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ]),
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(
                0,
                0,
                this.transformCanvas.w,
                this.transformCanvas.h,
              ),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0);
          }),
          (CanvasRendererBase.prototype.destroy = function () {
            var t;
            for (
              this.renderConfig.clearCanvas &&
                this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ""),
                t = (this.layers ? this.layers.length : 0) - 1;
              t >= 0;
              t -= 1
            )
              this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0),
              (this.globalData.canvasContext = null),
              (this.animationItem.container = null),
              (this.destroyed = !0);
          }),
          (CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if (
              (this.renderedFrame !== t ||
                !0 !== this.renderConfig.clearCanvas ||
                e) &&
              !this.destroyed &&
              -1 !== t
            ) {
              var r;
              (this.renderedFrame = t),
                (this.globalData.frameNum =
                  t - this.animationItem._isFirstFrame),
                (this.globalData.frameId += 1),
                (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                (this.globalData.projectInterface.currentFrame = t);
              var i = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), r = 0;
                r < i;
                r += 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (
                  !0 === this.renderConfig.clearCanvas
                    ? this.canvasContext.clearRect(
                        0,
                        0,
                        this.transformCanvas.w,
                        this.transformCanvas.h,
                      )
                    : this.save(),
                    r = i - 1;
                  r >= 0;
                  r -= 1
                )
                  (this.completeLayers || this.elements[r]) &&
                    this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          }),
          (CanvasRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              (e[t] = r), r.initExpressions();
            }
          }),
          (CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          }),
          (CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
          }),
          (CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block";
          }),
          extendPrototype(
            [CanvasRendererBase, ICompElement, CVBaseElement],
            CVCompElement,
          ),
          (CVCompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.canvasContext;
            for (
              e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(this.data.w, 0),
                e.lineTo(this.data.w, this.data.h),
                e.lineTo(0, this.data.h),
                e.lineTo(0, 0),
                e.clip(),
                t = this.layers.length - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            (this.layers = null), (this.elements = null);
          }),
          (CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          extendPrototype([CanvasRendererBase], CanvasRenderer),
          (CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          (HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
              (this.baseElement = createTag(this.data.tg || "div")),
                this.data.hasMask
                  ? ((this.svgElement = createNS("svg")),
                    (this.layerElement = createNS("g")),
                    (this.maskedElement = this.layerElement),
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement))
                  : (this.layerElement = this.baseElement),
                styleDiv(this.baseElement);
            },
            createContainerElements: function () {
              (this.renderableEffectsManager = new CVEffects()),
                (this.transformedElement = this.baseElement),
                (this.maskedElement = this.layerElement),
                this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              var t = this.transformedElement
                ? this.transformedElement.style
                : {};
              if (this.finalTransform._matMdf) {
                var e = this.finalTransform.mat.toCSS();
                (t.transform = e), (t.webkitTransform = e);
              }
              this.finalTransform._opMdf &&
                (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
              this.data.hd ||
                this.hidden ||
                (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function () {
              (this.layerElement = null),
                (this.transformedElement = null),
                this.matteElement && (this.matteElement = null),
                this.maskManager &&
                  (this.maskManager.destroy(), (this.maskManager = null));
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData,
              );
            },
            addEffects: function () {},
            setMatte: function () {},
          }),
          (HBaseElement.prototype.getBaseElement =
            SVGBaseElement.prototype.getBaseElement),
          (HBaseElement.prototype.destroyBaseElement =
            HBaseElement.prototype.destroy),
          (HBaseElement.prototype.buildElementParenting =
            BaseRenderer.prototype.buildElementParenting),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            HSolidElement,
          ),
          (HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask
              ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.svgElement.setAttribute("width", this.data.sw),
                this.svgElement.setAttribute("height", this.data.sh))
              : (((t = createTag("div")).style.width = this.data.sw + "px"),
                (t.style.height = this.data.sh + "px"),
                (t.style.backgroundColor = this.data.sc)),
              this.layerElement.appendChild(t);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HSolidElement,
              SVGShapeElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HShapeElement,
          ),
          (HShapeElement.prototype._renderShapeFrame =
            HShapeElement.prototype.renderInnerContent),
          (HShapeElement.prototype.createContent = function () {
            var t;
            if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
              this.layerElement.appendChild(this.shapesContainer),
                (t = this.svgElement);
            else {
              t = createNS("svg");
              var e = this.comp.data
                ? this.comp.data
                : this.globalData.compSize;
              t.setAttribute("width", e.w),
                t.setAttribute("height", e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t);
            }
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.shapesContainer,
              0,
              [],
              !0,
            ),
              this.filterUniqueShapes(),
              (this.shapeCont = t);
          }),
          (HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          }),
          (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r,
              i,
              s,
              a,
              n,
              o = t.sh.v,
              h = t.transformers,
              l = o._length;
            if (!(l <= 1)) {
              for (r = 0; r < l - 1; r += 1)
                (i = this.getTransformedPoint(h, o.v[r])),
                  (s = this.getTransformedPoint(h, o.o[r])),
                  (a = this.getTransformedPoint(h, o.i[r + 1])),
                  (n = this.getTransformedPoint(h, o.v[r + 1])),
                  this.checkBounds(i, s, a, n, e);
              o.c &&
                ((i = this.getTransformedPoint(h, o.v[r])),
                (s = this.getTransformedPoint(h, o.o[r])),
                (a = this.getTransformedPoint(h, o.i[0])),
                (n = this.getTransformedPoint(h, o.v[0])),
                this.checkBounds(i, s, a, n, e));
            }
          }),
          (HShapeElement.prototype.checkBounds = function (t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            (s.x = bmMin(a.left, s.x)),
              (s.xMax = bmMax(a.right, s.xMax)),
              (s.y = bmMin(a.top, s.y)),
              (s.yMax = bmMax(a.bottom, s.yMax));
          }),
          (HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }),
          (HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0,
          }),
          (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
            for (
              var s,
                a,
                n,
                o,
                h,
                l,
                p,
                f = [
                  [t[0], i[0]],
                  [t[1], i[1]],
                ],
                d = 0;
              d < 2;
              ++d
            )
              (a = 6 * t[d] - 12 * e[d] + 6 * r[d]),
                (s = -3 * t[d] + 9 * e[d] - 9 * r[d] + 3 * i[d]),
                (n = 3 * e[d] - 3 * t[d]),
                (a |= 0),
                (n |= 0),
                (0 == (s |= 0) && 0 === a) ||
                  (0 === s
                    ? (o = -n / a) > 0 &&
                      o < 1 &&
                      f[d].push(this.calculateF(o, t, e, r, i, d))
                    : (h = a * a - 4 * n * s) >= 0 &&
                      ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 &&
                        l < 1 &&
                        f[d].push(this.calculateF(l, t, e, r, i, d)),
                      (p = (-a - bmSqrt(h)) / (2 * s)) > 0 &&
                        p < 1 &&
                        f[d].push(this.calculateF(p, t, e, r, i, d))));
            (this.shapeBoundingBox.left = bmMin.apply(null, f[0])),
              (this.shapeBoundingBox.top = bmMin.apply(null, f[1])),
              (this.shapeBoundingBox.right = bmMax.apply(null, f[0])),
              (this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]));
          }),
          (HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) {
            return (
              bmPow(1 - t, 3) * e[a] +
              3 * bmPow(1 - t, 2) * t * r[a] +
              3 * (1 - t) * bmPow(t, 2) * i[a] +
              bmPow(t, 3) * s[a]
            );
          }),
          (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              t[r] && t[r].sh
                ? this.calculateShapeBoundingBox(t[r], e)
                : t[r] && t[r].it
                ? this.calculateBoundingBox(t[r].it, e)
                : t[r] &&
                  t[r].style &&
                  t[r].w &&
                  this.expandStrokeBoundingBox(t[r].w, e);
          }),
          (HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
            var r = 0;
            if (t.keyframes) {
              for (var i = 0; i < t.keyframes.length; i += 1) {
                var s = t.keyframes[i].s;
                s > r && (r = s);
              }
              r *= t.mult;
            } else r = t.v * t.mult;
            (e.x -= r), (e.xMax += r), (e.y -= r), (e.yMax += r);
          }),
          (HShapeElement.prototype.currentBoxContains = function (t) {
            return (
              this.currentBBox.x <= t.x &&
              this.currentBBox.y <= t.y &&
              this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
              this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            );
          }),
          (HShapeElement.prototype.renderInnerContent = function () {
            if (
              (this._renderShapeFrame(),
              !this.hidden && (this._isFirstFrame || this._mdf))
            ) {
              var t = this.tempBoundingBox,
                e = 999999;
              if (
                ((t.x = e),
                (t.xMax = -e),
                (t.y = e),
                (t.yMax = -e),
                this.calculateBoundingBox(this.itemsData, t),
                (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                this.currentBoxContains(t))
              )
                return;
              var r = !1;
              if (
                (this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute("width", t.width),
                  (r = !0)),
                this.currentBBox.h !== t.height &&
                  ((this.currentBBox.h = t.height),
                  this.shapeCont.setAttribute("height", t.height),
                  (r = !0)),
                r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
              ) {
                (this.currentBBox.w = t.width),
                  (this.currentBBox.h = t.height),
                  (this.currentBBox.x = t.x),
                  (this.currentBBox.y = t.y),
                  this.shapeCont.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h,
                  );
                var i = this.shapeCont.style,
                  s =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                (i.transform = s), (i.webkitTransform = s);
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            HTextElement,
          ),
          (HTextElement.prototype.createContent = function () {
            if (((this.isMasked = this.checkMasks()), this.isMasked)) {
              (this.renderType = "svg"),
                (this.compW = this.comp.data.w),
                (this.compH = this.comp.data.h),
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH);
              var t = createNS("g");
              this.maskedElement.appendChild(t), (this.innerElem = t);
            } else
              (this.renderType = "html"), (this.innerElem = this.layerElement);
            this.checkParenting();
          }),
          (HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
              r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            (e.fill = r),
              (e.color = r),
              t.sc &&
                ((e.stroke = this.buildColor(t.sc)),
                (e.strokeWidth = t.sw + "px"));
            var i,
              s,
              a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
              if (
                ((e.fontSize = t.finalSize + "px"),
                (e.lineHeight = t.finalSize + "px"),
                a.fClass)
              )
                this.innerElem.className = a.fClass;
              else {
                e.fontFamily = a.fFamily;
                var n = t.fWeight,
                  o = t.fStyle;
                (e.fontStyle = o), (e.fontWeight = n);
              }
            var h,
              l,
              p,
              f = t.l;
            s = f.length;
            var d,
              c = this.mHelper,
              m = "",
              u = 0;
            for (i = 0; i < s; i += 1) {
              if (
                (this.globalData.fontManager.chars
                  ? (this.textPaths[u]
                      ? (h = this.textPaths[u])
                      : ((h = createNS("path")).setAttribute(
                          "stroke-linecap",
                          lineCapEnum[1],
                        ),
                        h.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                        h.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked ||
                      (this.textSpans[u]
                        ? (p = (l = this.textSpans[u]).children[0])
                        : (((l = createTag("div")).style.lineHeight = 0),
                          (p = createNS("svg")).appendChild(h),
                          styleDiv(l))))
                  : this.isMasked
                  ? (h = this.textPaths[u]
                      ? this.textPaths[u]
                      : createNS("text"))
                  : this.textSpans[u]
                  ? ((l = this.textSpans[u]), (h = this.textPaths[u]))
                  : (styleDiv((l = createTag("span"))),
                    styleDiv((h = createTag("span"))),
                    l.appendChild(h)),
                this.globalData.fontManager.chars)
              ) {
                var y,
                  g = this.globalData.fontManager.getCharData(
                    t.finalText[i],
                    a.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily,
                  );
                if (
                  ((y = g ? g.data : null),
                  c.reset(),
                  y &&
                    y.shapes &&
                    y.shapes.length &&
                    ((d = y.shapes[0].it),
                    c.scale(t.finalSize / 100, t.finalSize / 100),
                    (m = this.createPathShape(c, d)),
                    h.setAttribute("d", m)),
                  this.isMasked)
                )
                  this.innerElem.appendChild(h);
                else {
                  if ((this.innerElem.appendChild(l), y && y.shapes)) {
                    document.body.appendChild(p);
                    var _ = p.getBBox();
                    p.setAttribute("width", _.width + 2),
                      p.setAttribute("height", _.height + 2),
                      p.setAttribute(
                        "viewBox",
                        _.x -
                          1 +
                          " " +
                          (_.y - 1) +
                          " " +
                          (_.width + 2) +
                          " " +
                          (_.height + 2),
                      );
                    var v = p.style,
                      b = "translate(" + (_.x - 1) + "px," + (_.y - 1) + "px)";
                    (v.transform = b),
                      (v.webkitTransform = b),
                      (f[i].yOffset = _.y - 1);
                  } else
                    p.setAttribute("width", 1), p.setAttribute("height", 1);
                  l.appendChild(p);
                }
              } else if (
                ((h.textContent = f[i].val),
                h.setAttributeNS(
                  "http://www.w3.org/XML/1998/namespace",
                  "xml:space",
                  "preserve",
                ),
                this.isMasked)
              )
                this.innerElem.appendChild(h);
              else {
                this.innerElem.appendChild(l);
                var E = h.style,
                  S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                (E.transform = S), (E.webkitTransform = S);
              }
              this.isMasked ? (this.textSpans[u] = h) : (this.textSpans[u] = l),
                (this.textSpans[u].style.display = "block"),
                (this.textPaths[u] = h),
                (u += 1);
            }
            for (; u < this.textSpans.length; )
              (this.textSpans[u].style.display = "none"), (u += 1);
          }),
          (HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag) return;
              if (this.isMasked && this.finalTransform._matMdf) {
                this.svgElement.setAttribute(
                  "viewBox",
                  -this.finalTransform.mProp.p.v[0] +
                    " " +
                    -this.finalTransform.mProp.p.v[1] +
                    " " +
                    this.compW +
                    " " +
                    this.compH,
                ),
                  (t = this.svgElement.style);
                var e =
                  "translate(" +
                  -this.finalTransform.mProp.p.v[0] +
                  "px," +
                  -this.finalTransform.mProp.p.v[1] +
                  "px)";
                (t.transform = e), (t.webkitTransform = e);
              }
            }
            if (
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag,
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var r,
                i,
                s,
                a,
                n,
                o = 0,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              for (i = l.length, r = 0; r < i; r += 1)
                l[r].n
                  ? (o += 1)
                  : ((a = this.textSpans[r]),
                    (n = this.textPaths[r]),
                    (s = h[o]),
                    (o += 1),
                    s._mdf.m &&
                      (this.isMasked
                        ? a.setAttribute("transform", s.m)
                        : ((a.style.webkitTransform = s.m),
                          (a.style.transform = s.m))),
                    (a.style.opacity = s.o),
                    s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw),
                    s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc),
                    s.fc &&
                      s._mdf.fc &&
                      (n.setAttribute("fill", s.fc), (n.style.color = s.fc)));
              if (
                this.innerElem.getBBox &&
                !this.hidden &&
                (this._isFirstFrame || this._mdf)
              ) {
                var p = this.innerElem.getBBox();
                if (
                  (this.currentBBox.w !== p.width &&
                    ((this.currentBBox.w = p.width),
                    this.svgElement.setAttribute("width", p.width)),
                  this.currentBBox.h !== p.height &&
                    ((this.currentBBox.h = p.height),
                    this.svgElement.setAttribute("height", p.height)),
                  this.currentBBox.w !== p.width + 2 ||
                    this.currentBBox.h !== p.height + 2 ||
                    this.currentBBox.x !== p.x - 1 ||
                    this.currentBBox.y !== p.y - 1)
                ) {
                  (this.currentBBox.w = p.width + 2),
                    (this.currentBBox.h = p.height + 2),
                    (this.currentBBox.x = p.x - 1),
                    (this.currentBBox.y = p.y - 1),
                    this.svgElement.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h,
                    ),
                    (t = this.svgElement.style);
                  var f =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                  (t.transform = f), (t.webkitTransform = f);
                }
              }
            }
          }),
          extendPrototype(
            [BaseElement, FrameElement, HierarchyElement],
            HCameraElement,
          ),
          (HCameraElement.prototype.setup = function () {
            var t,
              e,
              r,
              i,
              s = this.comp.threeDElements.length;
            for (t = 0; t < s; t += 1)
              if ("3d" === (e = this.comp.threeDElements[t]).type) {
                (r = e.perspectiveElem.style), (i = e.container.style);
                var a = this.pe.v + "px",
                  n = "0px 0px 0px",
                  o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (r.perspective = a),
                  (r.webkitPerspective = a),
                  (i.transformOrigin = n),
                  (i.mozTransformOrigin = n),
                  (i.webkitTransformOrigin = n),
                  (r.transform = o),
                  (r.webkitTransform = o);
              }
          }),
          (HCameraElement.prototype.createElements = function () {}),
          (HCameraElement.prototype.hide = function () {}),
          (HCameraElement.prototype.renderFrame = function () {
            var t,
              e,
              r = this._isFirstFrame;
            if (this.hierarchy)
              for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (
              r ||
              this.pe._mdf ||
              (this.p && this.p._mdf) ||
              (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
              this.rx._mdf ||
              this.ry._mdf ||
              this.rz._mdf ||
              this.or._mdf ||
              (this.a && this.a._mdf)
            ) {
              if ((this.mat.reset(), this.hierarchy))
                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                  var i = this.hierarchy[t].finalTransform.mProp;
                  this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                    this.mat
                      .rotateX(-i.or.v[0])
                      .rotateY(-i.or.v[1])
                      .rotateZ(i.or.v[2]),
                    this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                    this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                    this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }
              if (
                (this.p
                  ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                  : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a)
              ) {
                var s;
                s = this.p
                  ? [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ]
                  : [
                      this.px.v - this.a.v[0],
                      this.py.v - this.a.v[1],
                      this.pz.v - this.a.v[2],
                    ];
                var a = Math.sqrt(
                    Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2),
                  ),
                  n = [s[0] / a, s[1] / a, s[2] / a],
                  o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                  h = Math.atan2(n[1], o),
                  l = Math.atan2(n[0], -n[2]);
                this.mat.rotateY(l).rotateX(-h);
              }
              this.mat
                .rotateX(-this.rx.v)
                .rotateY(-this.ry.v)
                .rotateZ(this.rz.v),
                this.mat
                  .rotateX(-this.or.v[0])
                  .rotateY(-this.or.v[1])
                  .rotateZ(this.or.v[2]),
                this.mat.translate(
                  this.globalData.compSize.w / 2,
                  this.globalData.compSize.h / 2,
                  0,
                ),
                this.mat.translate(0, 0, this.pe.v);
              var p = !this._prevMat.equals(this.mat);
              if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var f, d, c;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                  if ("3d" === (f = this.comp.threeDElements[t]).type) {
                    if (p) {
                      var m = this.mat.toCSS();
                      ((c = f.container.style).transform = m),
                        (c.webkitTransform = m);
                    }
                    this.pe._mdf &&
                      (((d = f.perspectiveElem.style).perspective =
                        this.pe.v + "px"),
                      (d.webkitPerspective = this.pe.v + "px"));
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = !1;
          }),
          (HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (HCameraElement.prototype.destroy = function () {}),
          (HCameraElement.prototype.getBaseElement = function () {
            return null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HSolidElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HImageElement,
          ),
          (HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
              e = new Image();
            this.data.hasMask
              ? ((this.imageElem = createNS("image")),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t,
                ),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h))
              : this.layerElement.appendChild(e),
              (e.crossOrigin = "anonymous"),
              (e.src = t),
              this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
          }),
          extendPrototype([BaseRenderer], HybridRendererBase),
          (HybridRendererBase.prototype.buildItem =
            SVGRenderer.prototype.buildItem),
          (HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          }),
          (HybridRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              var i = this.layers[e];
              if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
              else if (this.threeDElements) this.addTo3dContainer(r, e);
              else {
                for (var s, a, n = 0; n < e; )
                  this.elements[n] &&
                    !0 !== this.elements[n] &&
                    this.elements[n].getBaseElement &&
                    ((a = this.elements[n]),
                    (s =
                      (this.layers[n].ddd
                        ? this.getThreeDContainerByPos(n)
                        : a.getBaseElement()) || s)),
                    (n += 1);
                s
                  ? (i.ddd && this.supports3d) ||
                    this.layerElement.insertBefore(r, s)
                  : (i.ddd && this.supports3d) ||
                    this.layerElement.appendChild(r);
              }
            }
          }),
          (HybridRendererBase.prototype.createShape = function (t) {
            return this.supports3d
              ? new HShapeElement(t, this.globalData, this)
              : new SVGShapeElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createText = function (t) {
            return this.supports3d
              ? new HTextElement(t, this.globalData, this)
              : new SVGTextLottieElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createCamera = function (t) {
            return (
              (this.camera = new HCameraElement(t, this.globalData, this)),
              this.camera
            );
          }),
          (HybridRendererBase.prototype.createImage = function (t) {
            return this.supports3d
              ? new HImageElement(t, this.globalData, this)
              : new IImageElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createSolid = function (t) {
            return this.supports3d
              ? new HSolidElement(t, this.globalData, this)
              : new ISolidElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
              if (
                this.threeDElements[e].startPos <= t &&
                this.threeDElements[e].endPos >= t
              )
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          }),
          (HybridRendererBase.prototype.createThreeDContainer = function (
            t,
            e,
          ) {
            var r,
              i,
              s = createTag("div");
            styleDiv(s);
            var a = createTag("div");
            if ((styleDiv(a), "3d" === e)) {
              ((r = s.style).width = this.globalData.compSize.w + "px"),
                (r.height = this.globalData.compSize.h + "px");
              var n = "50% 50%";
              (r.webkitTransformOrigin = n),
                (r.mozTransformOrigin = n),
                (r.transformOrigin = n);
              var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              ((i = a.style).transform = o), (i.webkitTransform = o);
            }
            s.appendChild(a);
            var h = {
              container: a,
              perspectiveElem: s,
              startPos: t,
              endPos: t,
              type: e,
            };
            return this.threeDElements.push(h), h;
          }),
          (HybridRendererBase.prototype.build3dContainers = function () {
            var t,
              e,
              r = this.layers.length,
              i = "";
            for (t = 0; t < r; t += 1)
              this.layers[t].ddd && 3 !== this.layers[t].ty
                ? ("3d" !== i &&
                    ((i = "3d"), (e = this.createThreeDContainer(t, "3d"))),
                  (e.endPos = Math.max(e.endPos, t)))
                : ("2d" !== i &&
                    ((i = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                  (e.endPos = Math.max(e.endPos, t)));
            for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
              this.resizerElem.appendChild(
                this.threeDElements[t].perspectiveElem,
              );
          }),
          (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i; ) {
              if (e <= this.threeDElements[r].endPos) {
                for (var s, a = this.threeDElements[r].startPos; a < e; )
                  this.elements[a] &&
                    this.elements[a].getBaseElement &&
                    (s = this.elements[a].getBaseElement()),
                    (a += 1);
                s
                  ? this.threeDElements[r].container.insertBefore(t, s)
                  : this.threeDElements[r].container.appendChild(t);
                break;
              }
              r += 1;
            }
          }),
          (HybridRendererBase.prototype.configAnimation = function (t) {
            var e = createTag("div"),
              r = this.animationItem.wrapper,
              i = e.style;
            (i.width = t.w + "px"),
              (i.height = t.h + "px"),
              (this.resizerElem = e),
              styleDiv(e),
              (i.transformStyle = "flat"),
              (i.mozTransformStyle = "flat"),
              (i.webkitTransformStyle = "flat"),
              this.renderConfig.className &&
                e.setAttribute("class", this.renderConfig.className),
              r.appendChild(e),
              (i.overflow = "hidden");
            var s = createNS("svg");
            s.setAttribute("width", "1"),
              s.setAttribute("height", "1"),
              styleDiv(s),
              this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a),
              (this.data = t),
              this.setupGlobalData(t, s),
              (this.globalData.defs = a),
              (this.layers = t.layers),
              (this.layerElement = this.resizerElem),
              this.build3dContainers(),
              this.updateContainerSize();
          }),
          (HybridRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.animationItem.container = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            (this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null);
          }),
          (HybridRendererBase.prototype.updateContainerSize = function () {
            var t,
              e,
              r,
              i,
              s = this.animationItem.wrapper.offsetWidth,
              a = this.animationItem.wrapper.offsetHeight,
              n = s / a;
            this.globalData.compSize.w / this.globalData.compSize.h > n
              ? ((t = s / this.globalData.compSize.w),
                (e = s / this.globalData.compSize.w),
                (r = 0),
                (i =
                  (a -
                    this.globalData.compSize.h *
                      (s / this.globalData.compSize.w)) /
                  2))
              : ((t = a / this.globalData.compSize.h),
                (e = a / this.globalData.compSize.h),
                (r =
                  (s -
                    this.globalData.compSize.w *
                      (a / this.globalData.compSize.h)) /
                  2),
                (i = 0));
            var o = this.resizerElem.style;
            (o.webkitTransform =
              "matrix3d(" +
              t +
              ",0,0,0,0," +
              e +
              ",0,0,0,0,1,0," +
              r +
              "," +
              i +
              ",0,1)"),
              (o.transform = o.webkitTransform);
          }),
          (HybridRendererBase.prototype.renderFrame =
            SVGRenderer.prototype.renderFrame),
          (HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none";
          }),
          (HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block";
          }),
          (HybridRendererBase.prototype.initItems = function () {
            if ((this.buildAllItems(), this.camera)) this.camera.setup();
            else {
              var t,
                e = this.globalData.compSize.w,
                r = this.globalData.compSize.h,
                i = this.threeDElements.length;
              for (t = 0; t < i; t += 1) {
                var s = this.threeDElements[t].perspectiveElem.style;
                (s.webkitPerspective =
                  Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"),
                  (s.perspective = s.webkitPerspective);
              }
            }
          }),
          (HybridRendererBase.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length,
              i = createTag("div");
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var s = this.createComp(t[e], i, this.globalData.comp, null);
                s.initExpressions(),
                  this.globalData.projectInterface.registerComposition(s);
              }
          }),
          extendPrototype(
            [HybridRendererBase, ICompElement, HBaseElement],
            HCompElement,
          ),
          (HCompElement.prototype._createBaseContainerElements =
            HCompElement.prototype.createContainerElements),
          (HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(),
              this.data.hasMask
                ? (this.svgElement.setAttribute("width", this.data.w),
                  this.svgElement.setAttribute("height", this.data.h),
                  (this.transformedElement = this.baseElement))
                : (this.transformedElement = this.layerElement);
          }),
          (HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r, i = 0; i < e; )
              this.elements[i] &&
                this.elements[i].getBaseElement &&
                (r = this.elements[i].getBaseElement()),
                (i += 1);
            r
              ? this.layerElement.insertBefore(t, r)
              : this.layerElement.appendChild(t);
          }),
          (HCompElement.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          }),
          extendPrototype([HybridRendererBase], HybridRenderer),
          (HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          });
        var CompExpressionInterface = function (t) {
            function e(e) {
              for (var r = 0, i = t.layers.length; r < i; ) {
                if (t.layers[r].nm === e || t.layers[r].ind === e)
                  return t.elements[r].layerInterface;
                r += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(e, "_name", { value: t.data.nm }),
              (e.layer = e),
              (e.pixelAspect = 1),
              (e.height = t.data.h || t.globalData.compSize.h),
              (e.width = t.data.w || t.globalData.compSize.w),
              (e.pixelAspect = 1),
              (e.frameDuration = 1 / t.globalData.frameRate),
              (e.displayStartTime = 0),
              (e.numLayers = t.layers.length),
              e
            );
          },
          Expressions = (function () {
            var t = {
              initExpressions: function (t) {
                var e = 0,
                  r = [];
                (t.renderer.compInterface = CompExpressionInterface(
                  t.renderer,
                )),
                  t.renderer.globalData.projectInterface.registerComposition(
                    t.renderer,
                  ),
                  (t.renderer.globalData.pushExpression = function () {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function () {
                    0 == (e -= 1) &&
                      (function () {
                        var t,
                          e = r.length;
                        for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function (
                    t,
                  ) {
                    -1 === r.indexOf(t) && r.push(t);
                  });
              },
            };
            return t;
          })(),
          MaskManagerInterface = (function () {
            function t(t, e) {
              (this._mask = t), (this._data = e);
            }
            return (
              Object.defineProperty(t.prototype, "maskPath", {
                get: function () {
                  return (
                    this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                  );
                },
              }),
              Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                  return (
                    this._mask.op.k && this._mask.op.getValue(),
                    100 * this._mask.op.v
                  );
                },
              }),
              function (e) {
                var r,
                  i = createSizedArray(e.viewData.length),
                  s = e.viewData.length;
                for (r = 0; r < s; r += 1)
                  i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function (t) {
                  for (r = 0; r < s; ) {
                    if (e.masksProperties[r].nm === t) return i[r];
                    r += 1;
                  }
                  return null;
                };
              }
            );
          })(),
          ExpressionPropertyInterface = (function () {
            var t = { pv: 0, v: 0, mult: 1 },
              e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function () {
                  return e.getVelocityAtTime(e.comp.currentFrame);
                },
              }),
                (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                (t.key = function (i) {
                  if (!t.numKeys) return 0;
                  var s = "";
                  s =
                    "s" in e.keyframes[i - 1]
                      ? e.keyframes[i - 1].s
                      : "e" in e.keyframes[i - 2]
                      ? e.keyframes[i - 2].e
                      : e.keyframes[i - 2].s;
                  var a =
                    "unidimensional" === r
                      ? new Number(s)
                      : Object.assign({}, s);
                  return (
                    (a.time =
                      e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate),
                    (a.value = "unidimensional" === r ? s[0] : s),
                    a
                  );
                }),
                (t.valueAtTime = e.getValueAtTime),
                (t.speedAtTime = e.getSpeedAtTime),
                (t.velocityAtTime = e.getVelocityAtTime),
                (t.propertyGroup = e.propertyGroup);
            }
            function i() {
              return t;
            }
            return function (s) {
              return s
                ? "unidimensional" === s.propType
                  ? (function (e) {
                      (e && "pv" in e) || (e = t);
                      var i = 1 / e.mult,
                        s = e.pv * i,
                        a = new Number(s);
                      return (
                        (a.value = s),
                        r(a, e, "unidimensional"),
                        function () {
                          return (
                            e.k && e.getValue(),
                            (s = e.v * i),
                            a.value !== s &&
                              (((a = new Number(s)).value = s),
                              r(a, e, "unidimensional")),
                            a
                          );
                        }
                      );
                    })(s)
                  : (function (t) {
                      (t && "pv" in t) || (t = e);
                      var i = 1 / t.mult,
                        s = (t.data && t.data.l) || t.pv.length,
                        a = createTypedArray("float32", s),
                        n = createTypedArray("float32", s);
                      return (
                        (a.value = n),
                        r(a, t, "multidimensional"),
                        function () {
                          t.k && t.getValue();
                          for (var e = 0; e < s; e += 1)
                            (n[e] = t.v[e] * i), (a[e] = n[e]);
                          return a;
                        }
                      );
                    })(s)
                : i;
            };
          })(),
          TransformExpressionInterface = function (t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            var r, i, s, a;
            return (
              Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t.r || t.rz),
              }),
              Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r),
              }),
              Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx),
              }),
              Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry),
              }),
              Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s),
              }),
              t.p
                ? (a = ExpressionPropertyInterface(t.p))
                : ((r = ExpressionPropertyInterface(t.px)),
                  (i = ExpressionPropertyInterface(t.py)),
                  t.pz && (s = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, "position", {
                get: function () {
                  return t.p ? a() : [r(), i(), s ? s() : 0];
                },
              }),
              Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px),
              }),
              Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py),
              }),
              Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz),
              }),
              Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a),
              }),
              Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o),
              }),
              Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk),
              }),
              Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa),
              }),
              Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or),
              }),
              e
            );
          },
          LayerExpressionInterface = (function () {
            function t(t) {
              var e = new Matrix();
              return (
                void 0 !== t
                  ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                  : this._elem.finalTransform.mProp.applyToMatrix(e),
                e
              );
            }
            function e(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.applyPoint(r, t)
              );
            }
            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t);
            }
            function i(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.invertPoint(r, t)
              );
            }
            function s(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t);
            }
            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function n(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.inversePoint(e);
            }
            function o(t) {
              var e = new Matrix();
              if (
                (e.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(e),
                this._elem.hierarchy && this._elem.hierarchy.length)
              ) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
              }
              return e.inversePoint(t);
            }
            function h() {
              return [1, 1, 1, 1];
            }
            return function (l) {
              var p;
              function f(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return f.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return f.effect;
                  case "ADBE Text Properties":
                    return f.textInterface;
                  default:
                    return null;
                }
              }
              (f.getMatrix = t),
                (f.invertPoint = n),
                (f.applyPoint = a),
                (f.toWorld = r),
                (f.toWorldVec = e),
                (f.fromWorld = s),
                (f.fromWorldVec = i),
                (f.toComp = r),
                (f.fromComp = o),
                (f.sampleImage = h),
                (f.sourceRectAtTime = l.sourceRectAtTime.bind(l)),
                (f._elem = l);
              var d = getDescriptor(
                (p = TransformExpressionInterface(l.finalTransform.mProp)),
                "anchorPoint",
              );
              return (
                Object.defineProperties(f, {
                  hasParent: {
                    get: function () {
                      return l.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return l.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(p, "rotation"),
                  scale: getDescriptor(p, "scale"),
                  position: getDescriptor(p, "position"),
                  opacity: getDescriptor(p, "opacity"),
                  anchorPoint: d,
                  anchor_point: d,
                  transform: {
                    get: function () {
                      return p;
                    },
                  },
                  active: {
                    get: function () {
                      return l.isInRange;
                    },
                  },
                }),
                (f.startTime = l.data.st),
                (f.index = l.data.ind),
                (f.source = l.data.refId),
                (f.height = 0 === l.data.ty ? l.data.h : 100),
                (f.width = 0 === l.data.ty ? l.data.w : 100),
                (f.inPoint = l.data.ip / l.comp.globalData.frameRate),
                (f.outPoint = l.data.op / l.comp.globalData.frameRate),
                (f._name = l.data.nm),
                (f.registerMaskInterface = function (t) {
                  f.mask = new MaskManagerInterface(t, l);
                }),
                (f.registerEffectsInterface = function (t) {
                  f.effect = t;
                }),
                f
              );
            };
          })(),
          propertyGroupFactory = function (t, e) {
            return function (r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
            };
          },
          PropertyInterface = function (t, e) {
            var r = { _name: t };
            return function (t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
            };
          },
          EffectsExpressionInterface = (function () {
            var t = {
              createEffectsInterface: function (t, r) {
                if (t.effectsManager) {
                  var i,
                    s = [],
                    a = t.data.ef,
                    n = t.effectsManager.effectElements.length;
                  for (i = 0; i < n; i += 1)
                    s.push(e(a[i], t.effectsManager.effectElements[i], r, t));
                  var o = t.data.ef || [],
                    h = function (t) {
                      for (i = 0, n = o.length; i < n; ) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix)
                          return s[i];
                        i += 1;
                      }
                      return null;
                    };
                  return (
                    Object.defineProperty(h, "numProperties", {
                      get: function () {
                        return o.length;
                      },
                    }),
                    h
                  );
                }
                return null;
              },
            };
            function e(t, i, s, a) {
              function n(e) {
                for (var r = t.ef, i = 0, s = r.length; i < s; ) {
                  if (e === r[i].nm || e === r[i].mn || e === r[i].ix)
                    return 5 === r[i].ty ? l[i] : l[i]();
                  i += 1;
                }
                throw new Error();
              }
              var o,
                h = propertyGroupFactory(n, s),
                l = [],
                p = t.ef.length;
              for (o = 0; o < p; o += 1)
                5 === t.ef[o].ty
                  ? l.push(
                      e(
                        t.ef[o],
                        i.effectElements[o],
                        i.effectElements[o].propertyGroup,
                        a,
                      ),
                    )
                  : l.push(r(i.effectElements[o], t.ef[o].ty, a, h));
              return (
                "ADBE Color Control" === t.mn &&
                  Object.defineProperty(n, "color", {
                    get: function () {
                      return l[0]();
                    },
                  }),
                Object.defineProperties(n, {
                  numProperties: {
                    get: function () {
                      return t.np;
                    },
                  },
                  _name: { value: t.nm },
                  propertyGroup: { value: h },
                }),
                (n.enabled = 0 !== t.en),
                (n.active = n.enabled),
                n
              );
            }
            function r(t, e, r, i) {
              var s = ExpressionPropertyInterface(t.p);
              return (
                t.p.setGroupProperty &&
                  t.p.setGroupProperty(PropertyInterface("", i)),
                function () {
                  return 10 === e ? r.comp.compInterface(t.p.v) : s();
                }
              );
            }
            return t;
          })(),
          ShapePathInterface = function (t, e, r) {
            var i = e.sh;
            function s(t) {
              return "Shape" === t ||
                "shape" === t ||
                "Path" === t ||
                "path" === t ||
                "ADBE Vector Shape" === t ||
                2 === t
                ? s.path
                : null;
            }
            var a = propertyGroupFactory(s, r);
            return (
              i.setGroupProperty(PropertyInterface("Path", a)),
              Object.defineProperties(s, {
                path: {
                  get: function () {
                    return i.k && i.getValue(), i;
                  },
                },
                shape: {
                  get: function () {
                    return i.k && i.getValue(), i;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: r },
              }),
              s
            );
          },
          ShapeExpressionInterface = (function () {
            function t(t, n, d) {
              var c,
                m = [],
                u = t ? t.length : 0;
              for (c = 0; c < u; c += 1)
                "gr" === t[c].ty
                  ? m.push(e(t[c], n[c], d))
                  : "fl" === t[c].ty
                  ? m.push(r(t[c], n[c], d))
                  : "st" === t[c].ty
                  ? m.push(s(t[c], n[c], d))
                  : "tm" === t[c].ty
                  ? m.push(a(t[c], n[c], d))
                  : "tr" === t[c].ty ||
                    ("el" === t[c].ty
                      ? m.push(o(t[c], n[c], d))
                      : "sr" === t[c].ty
                      ? m.push(h(t[c], n[c], d))
                      : "sh" === t[c].ty
                      ? m.push(ShapePathInterface(t[c], n[c], d))
                      : "rc" === t[c].ty
                      ? m.push(l(t[c], n[c], d))
                      : "rd" === t[c].ty
                      ? m.push(p(t[c], n[c], d))
                      : "rp" === t[c].ty
                      ? m.push(f(t[c], n[c], d))
                      : "gf" === t[c].ty
                      ? m.push(i(t[c], n[c], d))
                      : m.push(
                          (t[c],
                          n[c],
                          function () {
                            return null;
                          }),
                        ));
              return m;
            }
            function e(e, r, i) {
              var s = function (t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return s.content;
                  default:
                    return s.transform;
                }
              };
              s.propertyGroup = propertyGroupFactory(s, i);
              var a = (function (e, r, i) {
                  var s,
                    a = function (t) {
                      for (var e = 0, r = s.length; e < r; ) {
                        if (
                          s[e]._name === t ||
                          s[e].mn === t ||
                          s[e].propertyIndex === t ||
                          s[e].ix === t ||
                          s[e].ind === t
                        )
                          return s[e];
                        e += 1;
                      }
                      return "number" == typeof t ? s[t - 1] : null;
                    };
                  (a.propertyGroup = propertyGroupFactory(a, i)),
                    (s = t(e.it, r.it, a.propertyGroup)),
                    (a.numProperties = s.length);
                  var o = n(
                    e.it[e.it.length - 1],
                    r.it[r.it.length - 1],
                    a.propertyGroup,
                  );
                  return (
                    (a.transform = o),
                    (a.propertyIndex = e.cix),
                    (a._name = e.nm),
                    a
                  );
                })(e, r, s.propertyGroup),
                o = n(
                  e.it[e.it.length - 1],
                  r.it[r.it.length - 1],
                  s.propertyGroup,
                );
              return (
                (s.content = a),
                (s.transform = o),
                Object.defineProperty(s, "_name", {
                  get: function () {
                    return e.nm;
                  },
                }),
                (s.numProperties = e.np),
                (s.propertyIndex = e.ix),
                (s.nm = e.nm),
                (s.mn = e.mn),
                s
              );
            }
            function r(t, e, r) {
              function i(t) {
                return "Color" === t || "color" === t
                  ? i.color
                  : "Opacity" === t || "opacity" === t
                  ? i.opacity
                  : null;
              }
              return (
                Object.defineProperties(i, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function i(t, e, r) {
              function i(t) {
                return "Start Point" === t || "start point" === t
                  ? i.startPoint
                  : "End Point" === t || "end point" === t
                  ? i.endPoint
                  : "Opacity" === t || "opacity" === t
                  ? i.opacity
                  : null;
              }
              return (
                Object.defineProperties(i, {
                  startPoint: { get: ExpressionPropertyInterface(e.s) },
                  endPoint: { get: ExpressionPropertyInterface(e.e) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  type: {
                    get: function () {
                      return "a";
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.s.setGroupProperty(PropertyInterface("Start Point", r)),
                e.e.setGroupProperty(PropertyInterface("End Point", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function s(t, e, r) {
              var i,
                s = propertyGroupFactory(l, r),
                a = propertyGroupFactory(h, s);
              function n(r) {
                Object.defineProperty(h, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p),
                });
              }
              var o = t.d ? t.d.length : 0,
                h = {};
              for (i = 0; i < o; i += 1)
                n(i), e.d.dataProps[i].p.setGroupProperty(a);
              function l(t) {
                return "Color" === t || "color" === t
                  ? l.color
                  : "Opacity" === t || "opacity" === t
                  ? l.opacity
                  : "Stroke Width" === t || "stroke width" === t
                  ? l.strokeWidth
                  : null;
              }
              return (
                Object.defineProperties(l, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                  dash: {
                    get: function () {
                      return h;
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", s)),
                e.o.setGroupProperty(PropertyInterface("Opacity", s)),
                e.w.setGroupProperty(PropertyInterface("Stroke Width", s)),
                l
              );
            }
            function a(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e
                  ? i.end
                  : e === t.s.ix
                  ? i.start
                  : e === t.o.ix
                  ? i.offset
                  : null;
              }
              var s = propertyGroupFactory(i, r);
              return (
                (i.propertyIndex = t.ix),
                e.s.setGroupProperty(PropertyInterface("Start", s)),
                e.e.setGroupProperty(PropertyInterface("End", s)),
                e.o.setGroupProperty(PropertyInterface("Offset", s)),
                (i.propertyIndex = t.ix),
                (i.propertyGroup = r),
                Object.defineProperties(i, {
                  start: { get: ExpressionPropertyInterface(e.s) },
                  end: { get: ExpressionPropertyInterface(e.e) },
                  offset: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function n(t, e, r) {
              function i(e) {
                return t.a.ix === e || "Anchor Point" === e
                  ? i.anchorPoint
                  : t.o.ix === e || "Opacity" === e
                  ? i.opacity
                  : t.p.ix === e || "Position" === e
                  ? i.position
                  : t.r.ix === e ||
                    "Rotation" === e ||
                    "ADBE Vector Rotation" === e
                  ? i.rotation
                  : t.s.ix === e || "Scale" === e
                  ? i.scale
                  : (t.sk && t.sk.ix === e) || "Skew" === e
                  ? i.skew
                  : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                  ? i.skewAxis
                  : null;
              }
              var s = propertyGroupFactory(i, r);
              return (
                e.transform.mProps.o.setGroupProperty(
                  PropertyInterface("Opacity", s),
                ),
                e.transform.mProps.p.setGroupProperty(
                  PropertyInterface("Position", s),
                ),
                e.transform.mProps.a.setGroupProperty(
                  PropertyInterface("Anchor Point", s),
                ),
                e.transform.mProps.s.setGroupProperty(
                  PropertyInterface("Scale", s),
                ),
                e.transform.mProps.r.setGroupProperty(
                  PropertyInterface("Rotation", s),
                ),
                e.transform.mProps.sk &&
                  (e.transform.mProps.sk.setGroupProperty(
                    PropertyInterface("Skew", s),
                  ),
                  e.transform.mProps.sa.setGroupProperty(
                    PropertyInterface("Skew Angle", s),
                  )),
                e.transform.op.setGroupProperty(
                  PropertyInterface("Opacity", s),
                ),
                Object.defineProperties(i, {
                  opacity: {
                    get: ExpressionPropertyInterface(e.transform.mProps.o),
                  },
                  position: {
                    get: ExpressionPropertyInterface(e.transform.mProps.p),
                  },
                  anchorPoint: {
                    get: ExpressionPropertyInterface(e.transform.mProps.a),
                  },
                  scale: {
                    get: ExpressionPropertyInterface(e.transform.mProps.s),
                  },
                  rotation: {
                    get: ExpressionPropertyInterface(e.transform.mProps.r),
                  },
                  skew: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sk),
                  },
                  skewAxis: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sa),
                  },
                  _name: { value: t.nm },
                }),
                (i.ty = "tr"),
                (i.mn = t.mn),
                (i.propertyGroup = r),
                i
              );
            }
            function o(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
              }
              var s = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                a.s.setGroupProperty(PropertyInterface("Size", s)),
                a.p.setGroupProperty(PropertyInterface("Position", s)),
                Object.defineProperties(i, {
                  size: { get: ExpressionPropertyInterface(a.s) },
                  position: { get: ExpressionPropertyInterface(a.p) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                  ? i.rotation
                  : t.pt.ix === e
                  ? i.points
                  : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                  ? i.outerRadius
                  : t.os.ix === e
                  ? i.outerRoundness
                  : !t.ir ||
                    (t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e)
                  ? t.is && t.is.ix === e
                    ? i.innerRoundness
                    : null
                  : i.innerRadius;
              }
              var s = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                a.or.setGroupProperty(PropertyInterface("Outer Radius", s)),
                a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)),
                a.pt.setGroupProperty(PropertyInterface("Points", s)),
                a.p.setGroupProperty(PropertyInterface("Position", s)),
                a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                t.ir &&
                  (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)),
                  a.is.setGroupProperty(
                    PropertyInterface("Inner Roundness", s),
                  )),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  rotation: { get: ExpressionPropertyInterface(a.r) },
                  points: { get: ExpressionPropertyInterface(a.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(a.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                  innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                  ? i.roundness
                  : t.s.ix === e ||
                    "Size" === e ||
                    "ADBE Vector Rect Size" === e
                  ? i.size
                  : null;
              }
              var s = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                a.p.setGroupProperty(PropertyInterface("Position", s)),
                a.s.setGroupProperty(PropertyInterface("Size", s)),
                a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  roundness: { get: ExpressionPropertyInterface(a.r) },
                  size: { get: ExpressionPropertyInterface(a.s) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function p(t, e, r) {
              function i(e) {
                return t.r.ix === e || "Round Corners 1" === e
                  ? i.radius
                  : null;
              }
              var s = propertyGroupFactory(i, r),
                a = e;
              return (
                (i.propertyIndex = t.ix),
                a.rd.setGroupProperty(PropertyInterface("Radius", s)),
                Object.defineProperties(i, {
                  radius: { get: ExpressionPropertyInterface(a.rd) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function f(t, e, r) {
              function i(e) {
                return t.c.ix === e || "Copies" === e
                  ? i.copies
                  : t.o.ix === e || "Offset" === e
                  ? i.offset
                  : null;
              }
              var s = propertyGroupFactory(i, r),
                a = e;
              return (
                (i.propertyIndex = t.ix),
                a.c.setGroupProperty(PropertyInterface("Copies", s)),
                a.o.setGroupProperty(PropertyInterface("Offset", s)),
                Object.defineProperties(i, {
                  copies: { get: ExpressionPropertyInterface(a.c) },
                  offset: { get: ExpressionPropertyInterface(a.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            return function (e, r, i) {
              var s;
              function a(t) {
                if ("number" == typeof t)
                  return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
                for (var e = 0, r = s.length; e < r; ) {
                  if (s[e]._name === t) return s[e];
                  e += 1;
                }
                return null;
              }
              return (
                (a.propertyGroup = propertyGroupFactory(a, function () {
                  return i;
                })),
                (s = t(e, r, a.propertyGroup)),
                (a.numProperties = s.length),
                (a._name = "Contents"),
                a
              );
            };
          })(),
          TextExpressionInterface = function (t) {
            var e, r;
            function i(t) {
              return "ADBE Text Document" === t ? i.sourceText : null;
            }
            return (
              Object.defineProperty(i, "sourceText", {
                get: function () {
                  t.textProperty.getValue();
                  var i = t.textProperty.currentData.t;
                  return (
                    i !== e &&
                      ((t.textProperty.currentData.t = e),
                      ((r = new String(i)).value = i || new String(i))),
                    r
                  );
                },
              }),
              i
            );
          };
        function _typeof$2(t) {
          return (
            (_typeof$2 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$2(t)
          );
        }
        var FootageInterface =
            ((dataInterfaceFactory = function (t) {
              function e(t) {
                return "Outline" === t ? e.outlineInterface() : null;
              }
              return (
                (e._name = "Outline"),
                (e.outlineInterface = (function (t) {
                  var e = "",
                    r = t.getFootageData();
                  function i(t) {
                    if (r[t])
                      return (
                        (e = t), "object" === _typeof$2((r = r[t])) ? i : r
                      );
                    var s = t.indexOf(e);
                    if (-1 !== s) {
                      var a = parseInt(t.substr(s + e.length), 10);
                      return "object" === _typeof$2((r = r[a])) ? i : r;
                    }
                    return "";
                  }
                  return function () {
                    return (e = ""), (r = t.getFootageData()), i;
                  };
                })(t)),
                e
              );
            }),
            function (t) {
              function e(t) {
                return "Data" === t ? e.dataInterface : null;
              }
              return (
                (e._name = "Data"),
                (e.dataInterface = dataInterfaceFactory(t)),
                e
              );
            }),
          dataInterfaceFactory,
          interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface,
          };
        function getInterface(t) {
          return interfaces[t] || null;
        }
        function _typeof$1(t) {
          return (
            (_typeof$1 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$1(t)
          );
        }
        function seedRandom(t, e) {
          var r = this,
            i = 256,
            s = e.pow(i, 6),
            a = e.pow(2, 52),
            n = 2 * a,
            o = 255;
          function h(t) {
            var e,
              r = t.length,
              s = this,
              a = 0,
              n = (s.i = s.j = 0),
              h = (s.S = []);
            for (r || (t = [r++]); a < i; ) h[a] = a++;
            for (a = 0; a < i; a++)
              (h[a] = h[(n = o & (n + t[a % r] + (e = h[a])))]), (h[n] = e);
            s.g = function (t) {
              for (var e, r = 0, a = s.i, n = s.j, h = s.S; t--; )
                (e = h[(a = o & (a + 1))]),
                  (r =
                    r * i +
                    h[o & ((h[a] = h[(n = o & (n + e))]) + (h[n] = e))]);
              return (s.i = a), (s.j = n), r;
            };
          }
          function l(t, e) {
            return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
          }
          function p(t, e) {
            var r,
              i = [],
              s = _typeof$1(t);
            if (e && "object" == s)
              for (r in t)
                try {
                  i.push(p(t[r], e - 1));
                } catch (t) {}
            return i.length ? i : "string" == s ? t : t + "\0";
          }
          function f(t, e) {
            for (var r, i = t + "", s = 0; s < i.length; )
              e[o & s] = o & ((r ^= 19 * e[o & s]) + i.charCodeAt(s++));
            return d(e);
          }
          function d(t) {
            return String.fromCharCode.apply(0, t);
          }
          (e.seedrandom = function (o, c, m) {
            var u = [],
              y = f(
                p(
                  (c = !0 === c ? { entropy: !0 } : c || {}).entropy
                    ? [o, d(t)]
                    : null === o
                    ? (function () {
                        try {
                          var e = new Uint8Array(i);
                          return (
                            (r.crypto || r.msCrypto).getRandomValues(e), d(e)
                          );
                        } catch (e) {
                          var s = r.navigator,
                            a = s && s.plugins;
                          return [+new Date(), r, a, r.screen, d(t)];
                        }
                      })()
                    : o,
                  3,
                ),
                u,
              ),
              g = new h(u),
              _ = function () {
                for (var t = g.g(6), e = s, r = 0; t < a; )
                  (t = (t + r) * i), (e *= i), (r = g.g(1));
                for (; t >= n; ) (t /= 2), (e /= 2), (r >>>= 1);
                return (t + r) / e;
              };
            return (
              (_.int32 = function () {
                return 0 | g.g(4);
              }),
              (_.quick = function () {
                return g.g(4) / 4294967296;
              }),
              (_.double = _),
              f(d(g.S), t),
              (
                c.pass ||
                m ||
                function (t, r, i, s) {
                  return (
                    s &&
                      (s.S && l(s, g),
                      (t.state = function () {
                        return l(g, {});
                      })),
                    i ? ((e.random = t), r) : t
                  );
                }
              )(_, y, "global" in c ? c.global : this == e, c.state)
            );
          }),
            f(e.random(), t);
        }
        function initialize$2(t) {
          seedRandom([], t);
        }
        var propTypes = { SHAPE: "shape" };
        function _typeof(t) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof(t)
          );
        }
        var ExpressionManager = (function () {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null;
            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
              return (
                "number" === t ||
                "boolean" === t ||
                "string" === t ||
                e instanceof Number
              );
            }
            function $bm_neg(t) {
              var e = _typeof(t);
              if ("number" === e || "boolean" === e || t instanceof Number)
                return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r,
                  i = t.length,
                  s = [];
                for (r = 0; r < i; r += 1) s[r] = -t[r];
                return s;
              }
              return t.propType ? t.v : -t;
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(
                0.333,
                0,
                0.833,
                0.833,
                "easeIn",
              ).get,
              easeOutBez = BezierFactory.getBezierEasing(
                0.167,
                0.167,
                0.667,
                1,
                "easeOut",
              ).get,
              easeInOutBez = BezierFactory.getBezierEasing(
                0.33,
                0,
                0.667,
                1,
                "easeInOut",
              ).get;
            function sum(t, e) {
              var r = _typeof(t),
                i = _typeof(e);
              if ("string" === r || "string" === i) return t + e;
              if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return ((t = t.slice(0))[0] += e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t + e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var s = 0, a = t.length, n = e.length, o = [];
                  s < a || s < n;

                )
                  ("number" == typeof t[s] || t[s] instanceof Number) &&
                  ("number" == typeof e[s] || e[s] instanceof Number)
                    ? (o[s] = t[s] + e[s])
                    : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                    (s += 1);
                return o;
              }
              return 0;
            }
            var add = sum;
            function sub(t, e) {
              var r = _typeof(t),
                i = _typeof(e);
              if (isNumerable(r, t) && isNumerable(i, e))
                return (
                  "string" === r && (t = parseInt(t, 10)),
                  "string" === i && (e = parseInt(e, 10)),
                  t - e
                );
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return ((t = t.slice(0))[0] -= e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t - e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var s = 0, a = t.length, n = e.length, o = [];
                  s < a || s < n;

                )
                  ("number" == typeof t[s] || t[s] instanceof Number) &&
                  ("number" == typeof e[s] || e[s] instanceof Number)
                    ? (o[s] = t[s] - e[s])
                    : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                    (s += 1);
                return o;
              }
              return 0;
            }
            function mul(t, e) {
              var r,
                i,
                s,
                a = _typeof(t),
                n = _typeof(e);
              if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (
                  s = t.length, r = createTypedArray("float32", s), i = 0;
                  i < s;
                  i += 1
                )
                  r[i] = t[i] * e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (
                  s = e.length, r = createTypedArray("float32", s), i = 0;
                  i < s;
                  i += 1
                )
                  r[i] = t * e[i];
                return r;
              }
              return 0;
            }
            function div(t, e) {
              var r,
                i,
                s,
                a = _typeof(t),
                n = _typeof(e);
              if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (
                  s = t.length, r = createTypedArray("float32", s), i = 0;
                  i < s;
                  i += 1
                )
                  r[i] = t[i] / e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (
                  s = e.length, r = createTypedArray("float32", s), i = 0;
                  i < s;
                  i += 1
                )
                  r[i] = t / e[i];
                return r;
              }
              return 0;
            }
            function mod(t, e) {
              return (
                "string" == typeof t && (t = parseInt(t, 10)),
                "string" == typeof e && (e = parseInt(e, 10)),
                t % e
              );
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;
            function clamp(t, e, r) {
              if (e > r) {
                var i = r;
                (r = e), (e = i);
              }
              return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
              return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
              return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
              if ("number" == typeof t || t instanceof Number)
                return (e = e || 0), Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length),
                s = 0;
              for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(s);
            }
            function normalize(t) {
              return div(t, length(t));
            }
            function rgbToHsl(t) {
              var e,
                r,
                i = t[0],
                s = t[1],
                a = t[2],
                n = Math.max(i, s, a),
                o = Math.min(i, s, a),
                h = (n + o) / 2;
              if (n === o) (e = 0), (r = 0);
              else {
                var l = n - o;
                switch (((r = h > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
                  case i:
                    e = (s - a) / l + (s < a ? 6 : 0);
                    break;
                  case s:
                    e = (a - i) / l + 2;
                    break;
                  case a:
                    e = (i - s) / l + 4;
                }
                e /= 6;
              }
              return [e, r, h, t[3]];
            }
            function hue2rgb(t, e, r) {
              return (
                r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                  ? e
                  : r < 2 / 3
                  ? t + (e - t) * (2 / 3 - r) * 6
                  : t
              );
            }
            function hslToRgb(t) {
              var e,
                r,
                i,
                s = t[0],
                a = t[1],
                n = t[2];
              if (0 === a) (e = n), (i = n), (r = n);
              else {
                var o = n < 0.5 ? n * (1 + a) : n + a - n * a,
                  h = 2 * n - o;
                (e = hue2rgb(h, o, s + 1 / 3)),
                  (r = hue2rgb(h, o, s)),
                  (i = hue2rgb(h, o, s - 1 / 3));
              }
              return [e, r, i, t[3]];
            }
            function linear(t, e, r, i, s) {
              if (
                ((void 0 !== i && void 0 !== s) ||
                  ((i = e), (s = r), (e = 0), (r = 1)),
                r < e)
              ) {
                var a = r;
                (r = e), (e = a);
              }
              if (t <= e) return i;
              if (t >= r) return s;
              var n,
                o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (s - i) * o;
              var h = i.length,
                l = createTypedArray("float32", h);
              for (n = 0; n < h; n += 1) l[n] = i[n] + (s[n] - i[n]) * o;
              return l;
            }
            function random(t, e) {
              if (
                (void 0 === e &&
                  (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
                e.length)
              ) {
                var r,
                  i = e.length;
                t || (t = createTypedArray("float32", i));
                var s = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                return s;
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
            }
            function createPath(t, e, r, i) {
              var s,
                a = t.length,
                n = shapePool.newElement();
              n.setPathData(!!i, a);
              var o,
                h,
                l = [0, 0];
              for (s = 0; s < a; s += 1)
                (o = e && e[s] ? e[s] : l),
                  (h = r && r[s] ? r[s] : l),
                  n.setTripleAt(
                    t[s][0],
                    t[s][1],
                    h[0] + t[s][0],
                    h[1] + t[s][1],
                    o[0] + t[s][0],
                    o[1] + t[s][1],
                    s,
                    !0,
                  );
              return n;
            }
            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t;
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform,
                $bm_transform,
                content,
                effect,
                thisProperty = property;
              (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                Object.defineProperty(thisProperty, "value", {
                  get: function () {
                    return thisProperty.v;
                  },
                }),
                (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                (elem.comp.displayStartTime = 0);
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn,
                loop_in,
                loopOut,
                loop_out,
                smooth,
                toWorld,
                fromWorld,
                fromComp,
                toComp,
                fromCompToSurface,
                position,
                rotation,
                anchorPoint,
                scale,
                thisLayer,
                thisComp,
                mask,
                valueAtTime,
                velocityAtTime,
                scoped_bm_rt,
                expression_function = eval(
                  "[function _expression_function(){" +
                    val +
                    ";scoped_bm_rt=$bm_rt}]",
                )[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function (t, e) {
                  var r,
                    i,
                    s = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", s),
                    n = Math.floor(5 * time);
                  for (r = 0, i = 0; r < n; ) {
                    for (i = 0; i < s; i += 1)
                      a[i] += -e + 2 * e * BMMath.random();
                    r += 1;
                  }
                  var o = 5 * time,
                    h = o - Math.floor(o),
                    l = createTypedArray("float32", s);
                  if (s > 1) {
                    for (i = 0; i < s; i += 1)
                      l[i] =
                        this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l;
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                }.bind(this);
              function loopInDuration(t, e) {
                return loopIn(t, e, !0);
              }
              function loopOutDuration(t, e) {
                return loopOut(t, e, !0);
              }
              thisProperty.loopIn &&
                ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                (loop_in = loopIn)),
                thisProperty.loopOut &&
                  ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                  (loop_out = loopOut)),
                thisProperty.smooth &&
                  (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime &&
                  (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime &&
                  (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(
                  elem.comp.globalData.projectInterface,
                ),
                time,
                velocity,
                value,
                text,
                textIndex,
                textTotal,
                selectorValue;
              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  i =
                    Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) /
                    degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
              }
              function easeOut(t, e, r, i, s) {
                return applyEase(easeOutBez, t, e, r, i, s);
              }
              function easeIn(t, e, r, i, s) {
                return applyEase(easeInBez, t, e, r, i, s);
              }
              function ease(t, e, r, i, s) {
                return applyEase(easeInOutBez, t, e, r, i, s);
              }
              function applyEase(t, e, r, i, s, a) {
                void 0 === s ? ((s = r), (a = i)) : (e = (e - r) / (i - r)),
                  e > 1 ? (e = 1) : e < 0 && (e = 0);
                var n = t(e);
                if ($bm_isInstanceOfArray(s)) {
                  var o,
                    h = s.length,
                    l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                  return l;
                }
                return (a - s) * n + s;
              }
              function nearestKey(t) {
                var e,
                  r,
                  i,
                  s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (
                    ((r = -1),
                    (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                  )
                    (r = 1), (i = data.k[0].t);
                  else {
                    for (e = 0; e < s - 1; e += 1) {
                      if (t === data.k[e].t) {
                        (r = e + 1), (i = data.k[e].t);
                        break;
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t
                          ? ((r = e + 2), (i = data.k[e + 1].t))
                          : ((r = e + 1), (i = data.k[e].t));
                        break;
                      }
                    }
                    -1 === r && ((r = e + 1), (i = data.k[e].t));
                  }
                else (r = 0), (i = 0);
                var a = {};
                return (
                  (a.index = r),
                  (a.time = i / elem.comp.globalData.frameRate),
                  a
                );
              }
              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0])
                  throw new Error("The property has no keyframe at index " + t);
                (t -= 1),
                  (e = {
                    time: data.k[t].t / elem.comp.globalData.frameRate,
                    value: [],
                  });
                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                  ? data.k[t].s
                  : data.k[t - 1].e;
                for (i = s.length, r = 0; r < i; r += 1)
                  (e[r] = s[r]), (e.value[r] = s[r]);
                return e;
              }
              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e;
              }
              function timeToFrames(t, e) {
                return (
                  t || 0 === t || (t = time),
                  e || (e = elem.comp.globalData.frameRate),
                  t * e
                );
              }
              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
              }
              function sourceRectAtTime() {
                return elem.sourceRectAtTime();
              }
              function substring(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substring(t)
                    : value.substring(t, e)
                  : "";
              }
              function substr(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substr(t)
                    : value.substr(t, e)
                  : "";
              }
              function posterizeTime(t) {
                (time = 0 === t ? 0 : Math.floor(time * t) / t),
                  (value = valueAtTime(time));
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent,
                randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;
              function executeExpression(t) {
                return (
                  (value = t),
                  this.frameExpressionId === elem.globalData.frameId &&
                  "textSelector" !== this.propType
                    ? value
                    : ("textSelector" === this.propType &&
                        ((textIndex = this.textIndex),
                        (textTotal = this.textTotal),
                        (selectorValue = this.selectorValue)),
                      thisLayer ||
                        ((text = elem.layerInterface.text),
                        (thisLayer = elem.layerInterface),
                        (thisComp = elem.comp.compInterface),
                        (toWorld = thisLayer.toWorld.bind(thisLayer)),
                        (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                        (fromComp = thisLayer.fromComp.bind(thisLayer)),
                        (toComp = thisLayer.toComp.bind(thisLayer)),
                        (mask = thisLayer.mask
                          ? thisLayer.mask.bind(thisLayer)
                          : null),
                        (fromCompToSurface = fromComp)),
                      transform ||
                        ((transform = elem.layerInterface(
                          "ADBE Transform Group",
                        )),
                        ($bm_transform = transform),
                        transform && (anchorPoint = transform.anchorPoint)),
                      4 !== elemType ||
                        content ||
                        (content = thisLayer("ADBE Root Vectors Group")),
                      effect || (effect = thisLayer(4)),
                      (hasParent = !(
                        !elem.hierarchy || !elem.hierarchy.length
                      )) &&
                        !parent &&
                        (parent = elem.hierarchy[0].layerInterface),
                      (time =
                        this.comp.renderedFrame /
                        this.comp.globalData.frameRate),
                      _needsRandom && seedRandom(randSeed + time),
                      needsVelocity && (velocity = velocityAtTime(time)),
                      expression_function(),
                      (this.frameExpressionId = elem.globalData.frameId),
                      (scoped_bm_rt =
                        scoped_bm_rt.propType === propTypes.SHAPE
                          ? scoped_bm_rt.v
                          : scoped_bm_rt))
                );
              }
              return (
                (executeExpression.__preventDeadCodeRemoval = [
                  $bm_transform,
                  anchorPoint,
                  time,
                  velocity,
                  inPoint,
                  outPoint,
                  width,
                  height,
                  name,
                  loop_in,
                  loop_out,
                  smooth,
                  toComp,
                  fromCompToSurface,
                  toWorld,
                  fromWorld,
                  mask,
                  position,
                  rotation,
                  scale,
                  thisComp,
                  numKeys,
                  active,
                  wiggle,
                  loopInDuration,
                  loopOutDuration,
                  comp,
                  lookAt,
                  easeOut,
                  easeIn,
                  ease,
                  nearestKey,
                  key,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue,
                  framesToTime,
                  timeToFrames,
                  sourceRectAtTime,
                  substring,
                  substr,
                  posterizeTime,
                  index,
                  globalData,
                ]),
                executeExpression
              );
            }
            return (
              (ob.initiateExpression = initiateExpression),
              (ob.__preventDeadCodeRemoval = [
                window,
                document,
                XMLHttpRequest,
                fetch,
                frames,
                $bm_neg,
                add,
                $bm_sum,
                $bm_sub,
                $bm_mul,
                $bm_div,
                $bm_mod,
                clamp,
                radians_to_degrees,
                degreesToRadians,
                degrees_to_radians,
                normalize,
                rgbToHsl,
                hslToRgb,
                linear,
                random,
                createPath,
              ]),
              ob
            );
          })(),
          expressionHelpers = {
            searchExpressions: function (t, e, r) {
              e.x &&
                ((r.k = !0),
                (r.x = !0),
                (r.initiateExpression = ExpressionManager.initiateExpression),
                r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
            },
            getSpeedAtTime: function (t) {
              var e = this.getValueAtTime(t),
                r = this.getValueAtTime(t + -0.01),
                i = 0;
              if (e.length) {
                var s;
                for (s = 0; s < e.length; s += 1) i += Math.pow(r[s] - e[s], 2);
                i = 100 * Math.sqrt(i);
              } else i = 0;
              return i;
            },
            getVelocityAtTime: function (t) {
              if (void 0 !== this.vel) return this.vel;
              var e,
                r,
                i = -0.001,
                s = this.getValueAtTime(t),
                a = this.getValueAtTime(t + i);
              if (s.length)
                for (
                  e = createTypedArray("float32", s.length), r = 0;
                  r < s.length;
                  r += 1
                )
                  e[r] = (a[r] - s[r]) / i;
              else e = (a - s) / i;
              return e;
            },
            getValueAtTime: function (t) {
              return (
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastFrame < t
                      ? this._cachingAtTime.lastIndex
                      : 0),
                  (this._cachingAtTime.value = this.interpolateValue(
                    t,
                    this._cachingAtTime,
                  )),
                  (this._cachingAtTime.lastFrame = t)),
                this._cachingAtTime.value
              );
            },
            getStaticValueAtTime: function () {
              return this.pv;
            },
            setGroupProperty: function (t) {
              this.propertyGroup = t;
            },
          };
        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              s,
              a,
              n,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (
              (r
                ? (s =
                    p -
                    (i = e
                      ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, p - this.elem.data.ip)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = p - (s = l[l.length - 1 - e].t))),
              "pingpong" === t)
            ) {
              if (Math.floor((h - s) / i) % 2 != 0)
                return this.getValueAtTime(
                  (i - ((h - s) % i) + s) / this.comp.globalData.frameRate,
                  0,
                );
            } else {
              if ("offset" === t) {
                var f = this.getValueAtTime(
                    s / this.comp.globalData.frameRate,
                    0,
                  ),
                  d = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  c = this.getValueAtTime(
                    (((h - s) % i) + s) / this.comp.globalData.frameRate,
                    0,
                  ),
                  m = Math.floor((h - s) / i);
                if (this.pv.length) {
                  for (
                    n = (o = new Array(f.length)).length, a = 0;
                    a < n;
                    a += 1
                  )
                    o[a] = (d[a] - f[a]) * m + c[a];
                  return o;
                }
                return (d - f) * m + c;
              }
              if ("continue" === t) {
                var u = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  y = this.getValueAtTime(
                    (p - 0.001) / this.comp.globalData.frameRate,
                    0,
                  );
                if (this.pv.length) {
                  for (
                    n = (o = new Array(u.length)).length, a = 0;
                    a < n;
                    a += 1
                  )
                    o[a] =
                      u[a] +
                      ((u[a] - y[a]) *
                        ((h - p) / this.comp.globalData.frameRate)) /
                        5e-4;
                  return o;
                }
                return u + ((h - p) / 0.001) * (u - y);
              }
            }
            return this.getValueAtTime(
              (((h - s) % i) + s) / this.comp.globalData.frameRate,
              0,
            );
          }
          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              s,
              a,
              n,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[0].t;
            if (h >= p) return this.pv;
            if (
              (r
                ? (s =
                    p +
                    (i = e
                      ? Math.abs(this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, this.elem.data.op - p)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = (s = l[e].t) - p)),
              "pingpong" === t)
            ) {
              if (Math.floor((p - h) / i) % 2 == 0)
                return this.getValueAtTime(
                  (((p - h) % i) + p) / this.comp.globalData.frameRate,
                  0,
                );
            } else {
              if ("offset" === t) {
                var f = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  d = this.getValueAtTime(
                    s / this.comp.globalData.frameRate,
                    0,
                  ),
                  c = this.getValueAtTime(
                    (i - ((p - h) % i) + p) / this.comp.globalData.frameRate,
                    0,
                  ),
                  m = Math.floor((p - h) / i) + 1;
                if (this.pv.length) {
                  for (
                    n = (o = new Array(f.length)).length, a = 0;
                    a < n;
                    a += 1
                  )
                    o[a] = c[a] - (d[a] - f[a]) * m;
                  return o;
                }
                return c - (d - f) * m;
              }
              if ("continue" === t) {
                var u = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  y = this.getValueAtTime(
                    (p + 0.001) / this.comp.globalData.frameRate,
                    0,
                  );
                if (this.pv.length) {
                  for (
                    n = (o = new Array(u.length)).length, a = 0;
                    a < n;
                    a += 1
                  )
                    o[a] = u[a] + ((u[a] - y[a]) * (p - h)) / 0.001;
                  return o;
                }
                return u + ((u - y) * (p - h)) / 0.001;
              }
            }
            return this.getValueAtTime(
              (i - (((p - h) % i) + p)) / this.comp.globalData.frameRate,
              0,
            );
          }
          function r(t, e) {
            if (!this.k) return this.pv;
            if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
              return this.pv;
            var r,
              i,
              s = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = s - t,
              n = e > 1 ? (s + t - a) / (e - 1) : 1,
              o = 0,
              h = 0;
            for (
              r = this.pv.length
                ? createTypedArray("float32", this.pv.length)
                : 0;
              o < e;

            ) {
              if (((i = this.getValueAtTime(a + o * n)), this.pv.length))
                for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
              else r += i;
              o += 1;
            }
            if (this.pv.length)
              for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
            else r /= e;
            return r;
          }
          function i(t) {
            this._transformCachingAtTime ||
              (this._transformCachingAtTime = { v: new Matrix() });
            var e = this._transformCachingAtTime.v;
            if (
              (e.cloneFromProps(this.pre.props),
              this.appliedTransformations < 1)
            ) {
              var r = this.a.getValueAtTime(t);
              e.translate(
                -r[0] * this.a.mult,
                -r[1] * this.a.mult,
                r[2] * this.a.mult,
              );
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(t);
              e.scale(
                i[0] * this.s.mult,
                i[1] * this.s.mult,
                i[2] * this.s.mult,
              );
            }
            if (this.sk && this.appliedTransformations < 3) {
              var s = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
            }
            if (this.r && this.appliedTransformations < 4) {
              var n = this.r.getValueAtTime(t);
              e.rotate(-n * this.r.mult);
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                h = this.ry.getValueAtTime(t),
                l = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult)
                .rotateY(h * this.ry.mult)
                .rotateX(l * this.rx.mult)
                .rotateZ(-p[2] * this.or.mult)
                .rotateY(p[1] * this.or.mult)
                .rotateX(p[0] * this.or.mult);
            }
            if (this.data.p && this.data.p.s) {
              var f = this.px.getValueAtTime(t),
                d = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var c = this.pz.getValueAtTime(t);
                e.translate(
                  f * this.px.mult,
                  d * this.py.mult,
                  -c * this.pz.mult,
                );
              } else e.translate(f * this.px.mult, d * this.py.mult, 0);
            } else {
              var m = this.p.getValueAtTime(t);
              e.translate(
                m[0] * this.p.mult,
                m[1] * this.p.mult,
                -m[2] * this.p.mult,
              );
            }
            return e;
          }
          function s() {
            return this.v.clone(new Matrix());
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function (t, e, r) {
            var n = a(t, e, r);
            return (
              n.dynamicProperties.length
                ? (n.getValueAtTime = i.bind(n))
                : (n.getValueAtTime = s.bind(n)),
              (n.setGroupProperty = expressionHelpers.setGroupProperty),
              n
            );
          };
          var n = PropertyFactory.getProp;
          PropertyFactory.getProp = function (i, s, a, o, h) {
            var l = n(i, s, a, o, h);
            l.kf
              ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
              : (l.getValueAtTime =
                  expressionHelpers.getStaticValueAtTime.bind(l)),
              (l.setGroupProperty = expressionHelpers.setGroupProperty),
              (l.loopOut = t),
              (l.loopIn = e),
              (l.smooth = r),
              (l.getVelocityAtTime =
                expressionHelpers.getVelocityAtTime.bind(l)),
              (l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l)),
              (l.numKeys = 1 === s.a ? s.k.length : 0),
              (l.propertyIndex = s.ix);
            var p = 0;
            return (
              0 !== a &&
                (p = createTypedArray(
                  "float32",
                  1 === s.a ? s.k[0].s.length : s.k.length,
                )),
              (l._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: p,
              }),
              expressionHelpers.searchExpressions(i, s, l),
              l.k && h.addDynamicProperty(l),
              l
            );
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            h = ShapePropertyFactory.getKeyframedConstructorFunction();
          function l() {}
          (l.prototype = {
            vertices: function (t, e) {
              this.k && this.getValue();
              var r,
                i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var s = i._length,
                a = i[t],
                n = i.v,
                o = createSizedArray(s);
              for (r = 0; r < s; r += 1)
                o[r] =
                  "i" === t || "o" === t
                    ? [a[r][0] - n[r][0], a[r][1] - n[r][1]]
                    : [a[r][0], a[r][1]];
              return o;
            },
            points: function (t) {
              return this.vertices("v", t);
            },
            inTangents: function (t) {
              return this.vertices("i", t);
            },
            outTangents: function (t) {
              return this.vertices("o", t);
            },
            isClosed: function () {
              return this.v.c;
            },
            pointOnPath: function (t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)),
                this._segmentsLength ||
                  (this._segmentsLength = bez.getSegmentsLength(r));
              for (
                var i,
                  s = this._segmentsLength,
                  a = s.lengths,
                  n = s.totalLength * t,
                  o = 0,
                  h = a.length,
                  l = 0;
                o < h;

              ) {
                if (l + a[o].addedLength > n) {
                  var p = o,
                    f = r.c && o === h - 1 ? 0 : o + 1,
                    d = (n - l) / a[o].addedLength;
                  i = bez.getPointInSegment(
                    r.v[p],
                    r.v[f],
                    r.o[p],
                    r.i[f],
                    d,
                    a[o],
                  );
                  break;
                }
                (l += a[o].addedLength), (o += 1);
              }
              return (
                i ||
                  (i = r.c
                    ? [r.v[0][0], r.v[0][1]]
                    : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                i
              );
            },
            vectorOnPath: function (t, e, r) {
              1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
              var i = this.pointOnPath(t, e),
                s = this.pointOnPath(t + 0.001, e),
                a = s[0] - i[0],
                n = s[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
              return 0 === o
                ? [0, 0]
                : "tangent" === r
                ? [a / o, n / o]
                : [-n / o, a / o];
            },
            tangentOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "tangent");
            },
            normalOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime,
          }),
            extendPrototype([l], o),
            extendPrototype([l], h),
            (h.prototype.getValueAtTime = function (t) {
              return (
                this._cachingAtTime ||
                  (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame,
                  }),
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastTime < t
                      ? this._caching.lastIndex
                      : 0),
                  (this._cachingAtTime.lastTime = t),
                  this.interpolateShape(
                    t,
                    this._cachingAtTime.shapeValue,
                    this._cachingAtTime,
                  )),
                this._cachingAtTime.shapeValue
              );
            }),
            (h.prototype.initiateExpression =
              ExpressionManager.initiateExpression);
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) {
            var a = p(t, e, r, i, s);
            return (
              (a.propertyIndex = e.ix),
              (a.lock = !1),
              3 === r
                ? expressionHelpers.searchExpressions(t, e.pt, a)
                : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
              a.k && t.addDynamicProperty(a),
              a
            );
          };
        }
        function initialize$1() {
          addPropertyDecorator();
        }
        function addDecorator() {
          (TextProperty.prototype.getExpressionValue = function (t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var i = {};
              return (
                this.copyData(i, t),
                (i.t = r.toString()),
                (i.__complete = !1),
                i
              );
            }
            return t;
          }),
            (TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
              return this.data.d.x
                ? ((this.calculateExpression =
                    ExpressionManager.initiateExpression.bind(this)(
                      this.elem,
                      this.data.d,
                      this,
                    )),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0)
                : null;
            });
        }
        function initialize() {
          addDecorator();
        }
        function SVGComposableEffect() {}
        function SVGTintFilter(t, e, r, i, s) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "linearRGB"),
            a.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0",
            ),
            a.setAttribute("result", i + "_tint_1"),
            t.appendChild(a),
            (a = createNS("feColorMatrix")).setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            a.setAttribute("result", i + "_tint_2"),
            t.appendChild(a),
            (this.matrixFilter = a);
          var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
          t.appendChild(n);
        }
        function SVGFillFilter(t, e, r, i) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"),
            s.setAttribute("color-interpolation-filters", "sRGB"),
            s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            s.setAttribute("result", i),
            t.appendChild(s),
            (this.matrixFilter = s);
        }
        function SVGStrokeEffect(t, e, r) {
          (this.initialized = !1),
            (this.filterManager = e),
            (this.elem = r),
            (this.paths = []);
        }
        function SVGTritoneFilter(t, e, r, i) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"),
            s.setAttribute("color-interpolation-filters", "linearRGB"),
            s.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0",
            ),
            t.appendChild(s);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("result", i),
            (this.matrixFilter = a);
          var n = createNS("feFuncR");
          n.setAttribute("type", "table"), a.appendChild(n), (this.feFuncR = n);
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), (this.feFuncG = o);
          var h = createNS("feFuncB");
          h.setAttribute("type", "table"),
            a.appendChild(h),
            (this.feFuncB = h),
            t.appendChild(a);
        }
        function SVGProLevelsFilter(t, e, r, i) {
          this.filterManager = e;
          var s = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (s[10].p.k ||
            0 !== s[10].p.v ||
            s[11].p.k ||
            1 !== s[11].p.v ||
            s[12].p.k ||
            1 !== s[12].p.v ||
            s[13].p.k ||
            0 !== s[13].p.v ||
            s[14].p.k ||
            1 !== s[14].p.v) &&
            (this.feFuncR = this.createFeFunc("feFuncR", a)),
            (s[17].p.k ||
              0 !== s[17].p.v ||
              s[18].p.k ||
              1 !== s[18].p.v ||
              s[19].p.k ||
              1 !== s[19].p.v ||
              s[20].p.k ||
              0 !== s[20].p.v ||
              s[21].p.k ||
              1 !== s[21].p.v) &&
              (this.feFuncG = this.createFeFunc("feFuncG", a)),
            (s[24].p.k ||
              0 !== s[24].p.v ||
              s[25].p.k ||
              1 !== s[25].p.v ||
              s[26].p.k ||
              1 !== s[26].p.v ||
              s[27].p.k ||
              0 !== s[27].p.v ||
              s[28].p.k ||
              1 !== s[28].p.v) &&
              (this.feFuncB = this.createFeFunc("feFuncB", a)),
            (s[31].p.k ||
              0 !== s[31].p.v ||
              s[32].p.k ||
              1 !== s[32].p.v ||
              s[33].p.k ||
              1 !== s[33].p.v ||
              s[34].p.k ||
              0 !== s[34].p.v ||
              s[35].p.k ||
              1 !== s[35].p.v) &&
              (this.feFuncA = this.createFeFunc("feFuncA", a)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
              (a.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(a)),
            (s[3].p.k ||
              0 !== s[3].p.v ||
              s[4].p.k ||
              1 !== s[4].p.v ||
              s[5].p.k ||
              1 !== s[5].p.v ||
              s[6].p.k ||
              0 !== s[6].p.v ||
              s[7].p.k ||
              1 !== s[7].p.v) &&
              ((a = createNS("feComponentTransfer")).setAttribute(
                "color-interpolation-filters",
                "sRGB",
              ),
              a.setAttribute("result", i),
              t.appendChild(a),
              (this.feFuncRComposed = this.createFeFunc("feFuncR", a)),
              (this.feFuncGComposed = this.createFeFunc("feFuncG", a)),
              (this.feFuncBComposed = this.createFeFunc("feFuncB", a)));
        }
        function SVGDropShadowEffect(t, e, r, i, s) {
          var a = e.container.globalData.renderConfig.filterSize,
            n = e.data.fs || a;
          t.setAttribute("x", n.x || a.x),
            t.setAttribute("y", n.y || a.y),
            t.setAttribute("width", n.width || a.width),
            t.setAttribute("height", n.height || a.height),
            (this.filterManager = e);
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"),
            o.setAttribute("result", i + "_drop_shadow_1"),
            o.setAttribute("stdDeviation", "0"),
            (this.feGaussianBlur = o),
            t.appendChild(o);
          var h = createNS("feOffset");
          h.setAttribute("dx", "25"),
            h.setAttribute("dy", "0"),
            h.setAttribute("in", i + "_drop_shadow_1"),
            h.setAttribute("result", i + "_drop_shadow_2"),
            (this.feOffset = h),
            t.appendChild(h);
          var l = createNS("feFlood");
          l.setAttribute("flood-color", "#00ff00"),
            l.setAttribute("flood-opacity", "1"),
            l.setAttribute("result", i + "_drop_shadow_3"),
            (this.feFlood = l),
            t.appendChild(l);
          var p = createNS("feComposite");
          p.setAttribute("in", i + "_drop_shadow_3"),
            p.setAttribute("in2", i + "_drop_shadow_2"),
            p.setAttribute("operator", "in"),
            p.setAttribute("result", i + "_drop_shadow_4"),
            t.appendChild(p);
          var f = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
          t.appendChild(f);
        }
        (SVGComposableEffect.prototype = {
          createMergeNode: function (t, e) {
            var r,
              i,
              s = createNS("feMerge");
            for (s.setAttribute("result", t), i = 0; i < e.length; i += 1)
              (r = createNS("feMergeNode")).setAttribute("in", e[i]),
                s.appendChild(r),
                s.appendChild(r);
            return s;
          },
        }),
          extendPrototype([SVGComposableEffect], SVGTintFilter),
          (SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute(
                "values",
                r[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (r[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (r[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  i +
                  " 0",
              );
            }
          }),
          (SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v,
                r = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute(
                "values",
                "0 0 0 0 " +
                  e[0] +
                  " 0 0 0 0 " +
                  e[1] +
                  " 0 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  r +
                  " 0",
              );
            }
          }),
          (SVGStrokeEffect.prototype.initialize = function () {
            var t,
              e,
              r,
              i,
              s =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
            for (
              1 === this.filterManager.effectElements[1].p.v
                ? ((i = this.elem.maskManager.masksProperties.length), (r = 0))
                : (i = 1 + (r = this.filterManager.effectElements[0].p.v - 1)),
                (e = createNS("g")).setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1);
              r < i;
              r += 1
            )
              (t = createNS("path")),
                e.appendChild(t),
                this.paths.push({ p: t, m: r });
            if (3 === this.filterManager.effectElements[10].p.v) {
              var a = createNS("mask"),
                n = createElementID();
              a.setAttribute("id", n),
                a.setAttribute("mask-type", "alpha"),
                a.appendChild(e),
                this.elem.globalData.defs.appendChild(a);
              var o = createNS("g");
              for (
                o.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + n + ")",
                );
                s[0];

              )
                o.appendChild(s[0]);
              this.elem.layerElement.appendChild(o),
                (this.masker = a),
                e.setAttribute("stroke", "#fff");
            } else if (
              1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v
            ) {
              if (2 === this.filterManager.effectElements[10].p.v)
                for (
                  s =
                    this.elem.layerElement.children ||
                    this.elem.layerElement.childNodes;
                  s.length;

                )
                  this.elem.layerElement.removeChild(s[0]);
              this.elem.layerElement.appendChild(e),
                this.elem.layerElement.removeAttribute("mask"),
                e.setAttribute("stroke", "#fff");
            }
            (this.initialized = !0), (this.pathMasker = e);
          }),
          (SVGStrokeEffect.prototype.renderFrame = function (t) {
            var e;
            this.initialized || this.initialize();
            var r,
              i,
              s = this.paths.length;
            for (e = 0; e < s; e += 1)
              if (
                -1 !== this.paths[e].m &&
                ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                (i = this.paths[e].p),
                (t || this.filterManager._mdf || r.prop._mdf) &&
                  i.setAttribute("d", r.lastPath),
                t ||
                  this.filterManager.effectElements[9].p._mdf ||
                  this.filterManager.effectElements[4].p._mdf ||
                  this.filterManager.effectElements[7].p._mdf ||
                  this.filterManager.effectElements[8].p._mdf ||
                  r.prop._mdf)
              ) {
                var a;
                if (
                  0 !== this.filterManager.effectElements[7].p.v ||
                  100 !== this.filterManager.effectElements[8].p.v
                ) {
                  var n =
                      0.01 *
                      Math.min(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v,
                      ),
                    o =
                      0.01 *
                      Math.max(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v,
                      ),
                    h = i.getTotalLength();
                  a = "0 0 0 " + h * n + " ";
                  var l,
                    p = h * (o - n),
                    f =
                      1 +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01,
                    d = Math.floor(p / f);
                  for (l = 0; l < d; l += 1)
                    a +=
                      "1 " +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01 +
                      " ";
                  a += "0 " + 10 * h + " 0 0";
                } else
                  a =
                    "1 " +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01;
                i.setAttribute("stroke-dasharray", a);
              }
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.pathMasker.setAttribute(
                  "stroke-width",
                  2 * this.filterManager.effectElements[4].p.v,
                ),
              (t || this.filterManager.effectElements[6].p._mdf) &&
                this.pathMasker.setAttribute(
                  "opacity",
                  this.filterManager.effectElements[6].p.v,
                ),
              (1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v) &&
                (t || this.filterManager.effectElements[3].p._mdf))
            ) {
              var c = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute(
                "stroke",
                "rgb(" +
                  bmFloor(255 * c[0]) +
                  "," +
                  bmFloor(255 * c[1]) +
                  "," +
                  bmFloor(255 * c[2]) +
                  ")",
              );
            }
          }),
          (SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v,
                s = i[0] + " " + r[0] + " " + e[0],
                a = i[1] + " " + r[1] + " " + e[1],
                n = i[2] + " " + r[2] + " " + e[2];
              this.feFuncR.setAttribute("tableValues", s),
                this.feFuncG.setAttribute("tableValues", a),
                this.feFuncB.setAttribute("tableValues", n);
            }
          }),
          (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r;
          }),
          (SVGProLevelsFilter.prototype.getTableValue = function (
            t,
            e,
            r,
            i,
            s,
          ) {
            for (
              var a,
                n,
                o = 0,
                h = Math.min(t, e),
                l = Math.max(t, e),
                p = Array.call(null, { length: 256 }),
                f = 0,
                d = s - i,
                c = e - t;
              o <= 256;

            )
              (n =
                (a = o / 256) <= h
                  ? c < 0
                    ? s
                    : i
                  : a >= l
                  ? c < 0
                    ? i
                    : s
                  : i + d * Math.pow((a - t) / c, 1 / r)),
                (p[f] = n),
                (f += 1),
                (o += 256 / 255);
            return p.join(" ");
          }),
          (SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e,
                r = this.filterManager.effectElements;
              this.feFuncRComposed &&
                (t ||
                  r[3].p._mdf ||
                  r[4].p._mdf ||
                  r[5].p._mdf ||
                  r[6].p._mdf ||
                  r[7].p._mdf) &&
                ((e = this.getTableValue(
                  r[3].p.v,
                  r[4].p.v,
                  r[5].p.v,
                  r[6].p.v,
                  r[7].p.v,
                )),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR &&
                  (t ||
                    r[10].p._mdf ||
                    r[11].p._mdf ||
                    r[12].p._mdf ||
                    r[13].p._mdf ||
                    r[14].p._mdf) &&
                  ((e = this.getTableValue(
                    r[10].p.v,
                    r[11].p.v,
                    r[12].p.v,
                    r[13].p.v,
                    r[14].p.v,
                  )),
                  this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG &&
                  (t ||
                    r[17].p._mdf ||
                    r[18].p._mdf ||
                    r[19].p._mdf ||
                    r[20].p._mdf ||
                    r[21].p._mdf) &&
                  ((e = this.getTableValue(
                    r[17].p.v,
                    r[18].p.v,
                    r[19].p.v,
                    r[20].p.v,
                    r[21].p.v,
                  )),
                  this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB &&
                  (t ||
                    r[24].p._mdf ||
                    r[25].p._mdf ||
                    r[26].p._mdf ||
                    r[27].p._mdf ||
                    r[28].p._mdf) &&
                  ((e = this.getTableValue(
                    r[24].p.v,
                    r[25].p.v,
                    r[26].p.v,
                    r[27].p.v,
                    r[28].p.v,
                  )),
                  this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA &&
                  (t ||
                    r[31].p._mdf ||
                    r[32].p._mdf ||
                    r[33].p._mdf ||
                    r[34].p._mdf ||
                    r[35].p._mdf) &&
                  ((e = this.getTableValue(
                    r[31].p.v,
                    r[32].p.v,
                    r[33].p.v,
                    r[34].p.v,
                    r[35].p.v,
                  )),
                  this.feFuncA.setAttribute("tableValues", e));
            }
          }),
          extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
          (SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.feGaussianBlur.setAttribute(
                    "stdDeviation",
                    this.filterManager.effectElements[4].p.v / 4,
                  ),
                t || this.filterManager.effectElements[0].p._mdf)
              ) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute(
                  "flood-color",
                  rgbToHex(
                    Math.round(255 * e[0]),
                    Math.round(255 * e[1]),
                    Math.round(255 * e[2]),
                  ),
                );
              }
              if (
                ((t || this.filterManager.effectElements[1].p._mdf) &&
                  this.feFlood.setAttribute(
                    "flood-opacity",
                    this.filterManager.effectElements[1].p.v / 255,
                  ),
                t ||
                  this.filterManager.effectElements[2].p._mdf ||
                  this.filterManager.effectElements[3].p._mdf)
              ) {
                var r = this.filterManager.effectElements[3].p.v,
                  i =
                    (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                  s = r * Math.cos(i),
                  a = r * Math.sin(i);
                this.feOffset.setAttribute("dx", s),
                  this.feOffset.setAttribute("dy", a);
              }
            }
          });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
          (this.initialized = !1),
            (this.filterManager = e),
            (this.filterElem = t),
            (this.elem = r),
            (r.matteElement = createNS("g")),
            r.matteElement.appendChild(r.layerElement),
            r.matteElement.appendChild(r.transformedElement),
            (r.baseElement = r.matteElement);
        }
        function SVGGaussianBlurEffect(t, e, r, i) {
          t.setAttribute("x", "-100%"),
            t.setAttribute("y", "-100%"),
            t.setAttribute("width", "300%"),
            t.setAttribute("height", "300%"),
            (this.filterManager = e);
          var s = createNS("feGaussianBlur");
          s.setAttribute("result", i),
            t.appendChild(s),
            (this.feGaussianBlur = s);
        }
        return (
          (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
          (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
              for (
                var i, s = r.children, a = 0, n = s.length;
                a < n && s[a] !== t.layerElement;

              )
                a += 1;
              a <= n - 2 && (i = s[a + 1]);
              var o = createNS("use");
              o.setAttribute("href", "#" + e),
                i ? r.insertBefore(o, i) : r.appendChild(o);
            }
          }),
          (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
              var r = createElementID(),
                i = createNS("mask");
              i.setAttribute("id", e.layerId),
                i.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e);
              var s = t.globalData.defs;
              s.appendChild(i);
              var a = createNS("symbol");
              a.setAttribute("id", r),
                this.replaceInParent(e, r),
                a.appendChild(e.layerElement),
                s.appendChild(a);
              var n = createNS("use");
              n.setAttribute("href", "#" + r),
                i.appendChild(n),
                (e.data.hd = !1),
                e.show();
            }
            t.setMatte(e.layerId);
          }),
          (SVGMatte3Effect.prototype.initialize = function () {
            for (
              var t = this.filterManager.effectElements[0].p.v,
                e = this.elem.comp.elements,
                r = 0,
                i = e.length;
              r < i;

            )
              e[r] &&
                e[r].data.ind === t &&
                this.setElementAsMask(this.elem, e[r]),
                (r += 1);
            this.initialized = !0;
          }),
          (SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize();
          }),
          (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = 3 == r ? 0 : e,
                s = 2 == r ? 0 : e;
              this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
              var a =
                1 == this.filterManager.effectElements[2].p.v
                  ? "wrap"
                  : "duplicate";
              this.feGaussianBlur.setAttribute("edgeMode", a);
            }
          }),
          registerRenderer("canvas", CanvasRenderer),
          registerRenderer("html", HybridRenderer),
          registerRenderer("svg", SVGRenderer),
          ShapeModifiers.registerModifier("tm", TrimModifier),
          ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
          ShapeModifiers.registerModifier("rp", RepeaterModifier),
          ShapeModifiers.registerModifier("rd", RoundCornersModifier),
          ShapeModifiers.registerModifier("zz", ZigZagModifier),
          ShapeModifiers.registerModifier("op", OffsetPathModifier),
          setExpressionsPlugin(Expressions),
          setExpressionInterfaces(getInterface),
          initialize$1(),
          initialize(),
          registerEffect(20, SVGTintFilter, !0),
          registerEffect(21, SVGFillFilter, !0),
          registerEffect(22, SVGStrokeEffect, !1),
          registerEffect(23, SVGTritoneFilter, !0),
          registerEffect(24, SVGProLevelsFilter, !0),
          registerEffect(25, SVGDropShadowEffect, !0),
          registerEffect(28, SVGMatte3Effect, !1),
          registerEffect(29, SVGGaussianBlurEffect, !0),
          lottie
        );
      }),
      (module.exports = factory()));
  })(lottie, lottie.exports);
  var styles$1 = i$1(
      _templateObject$2 ||
        (_templateObject$2 = _taggedTemplateLiteral([
          "\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n",
        ])),
    ),
    _templateObject$1,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    PlayerState,
    PlayMode,
    PlayerEvents;
  function parseSrc(t) {
    if ("object" == typeof t) return t;
    try {
      return JSON.parse(t);
    } catch (e) {
      return new URL(t, window.location.href).toString();
    }
  }
  function isLottie(t) {
    return ["v", "ip", "op", "layers", "fr", "w", "h"].every((e) =>
      Object.prototype.hasOwnProperty.call(t, e),
    );
  }
  function fromURL(t) {
    return _fromURL.apply(this, arguments);
  }
  function _fromURL() {
    return (_fromURL = _asyncToGenerator(function* (t) {
      if ("string" != typeof t)
        throw new Error("The url value must be a string");
      var e;
      try {
        var r = new URL(t),
          i = yield fetch(r.toString());
        e = yield i.json();
      } catch (t) {
        throw new Error(
          "An error occurred while trying to load the Lottie file from URL",
        );
      }
      return e;
    })).apply(this, arguments);
  }
  !(function (t) {
    (t.Destroyed = "destroyed"),
      (t.Error = "error"),
      (t.Frozen = "frozen"),
      (t.Loading = "loading"),
      (t.Paused = "paused"),
      (t.Playing = "playing"),
      (t.Stopped = "stopped");
  })(PlayerState || (PlayerState = {})),
    (function (t) {
      (t.Bounce = "bounce"), (t.Normal = "normal");
    })(PlayMode || (PlayMode = {})),
    (function (t) {
      (t.Complete = "complete"),
        (t.Destroyed = "destroyed"),
        (t.Error = "error"),
        (t.Frame = "frame"),
        (t.Freeze = "freeze"),
        (t.Load = "load"),
        (t.Loop = "loop"),
        (t.Pause = "pause"),
        (t.Play = "play"),
        (t.Ready = "ready"),
        (t.Rendered = "rendered"),
        (t.Stop = "stop");
    })(PlayerEvents || (PlayerEvents = {}));
  var LottiePlayer = class extends s {
      constructor() {
        super(...arguments),
          (this.autoplay = !1),
          (this.background = "transparent"),
          (this.controls = !1),
          (this.currentState = PlayerState.Loading),
          (this.description = "Lottie animation"),
          (this.direction = 1),
          (this.disableCheck = !1),
          (this.hover = !1),
          (this.intermission = 1),
          (this.loop = !1),
          (this.mode = PlayMode.Normal),
          (this.preserveAspectRatio = "xMidYMid meet"),
          (this.renderer = "svg"),
          (this.speed = 1),
          (this._io = void 0),
          (this._counter = 1);
      }
      load(t) {
        var e = this;
        return _asyncToGenerator(function* () {
          if (e.shadowRoot) {
            var r = {
              container: e.container,
              loop: !1,
              autoplay: !1,
              renderer: e.renderer,
              rendererSettings: {
                preserveAspectRatio: e.preserveAspectRatio,
                clearCanvas: !1,
                progressiveLoad: !0,
                hideOnTransparent: !0,
              },
            };
            try {
              var i = parseSrc(t),
                s = {},
                a = "string" == typeof i ? "path" : "animationData";
              e._lottie && e._lottie.destroy(),
                e.webworkers && lottie.exports.useWebWorker(!0),
                (e._lottie = lottie.exports.loadAnimation(
                  Object.assign(Object.assign({}, r), { [a]: i }),
                )),
                e._attachEventListeners(),
                e.disableCheck ||
                  ("path" === a
                    ? ((s = yield fromURL(i)), (a = "animationData"))
                    : (s = i),
                  isLottie(s) ||
                    ((e.currentState = PlayerState.Error),
                    e.dispatchEvent(new CustomEvent(PlayerEvents.Error))));
            } catch (t) {
              (e.currentState = PlayerState.Error),
                e.dispatchEvent(new CustomEvent(PlayerEvents.Error));
            }
          }
        })();
      }
      getLottie() {
        return this._lottie;
      }
      play() {
        this._lottie &&
          (this._lottie.play(),
          (this.currentState = PlayerState.Playing),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Play)));
      }
      pause() {
        this._lottie &&
          (this._lottie.pause(),
          (this.currentState = PlayerState.Paused),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)));
      }
      stop() {
        this._lottie &&
          ((this._counter = 1),
          this._lottie.stop(),
          (this.currentState = PlayerState.Stopped),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)));
      }
      destroy() {
        this._lottie &&
          (this._lottie.destroy(),
          (this._lottie = null),
          (this.currentState = PlayerState.Destroyed),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)),
          this.remove());
      }
      seek(t) {
        if (this._lottie) {
          var e = /^(\d+)(%?)$/.exec(t.toString());
          if (e) {
            var r =
              "%" === e[2]
                ? (this._lottie.totalFrames * Number(e[1])) / 100
                : Number(e[1]);
            (this.seeker = r),
              this.currentState === PlayerState.Playing
                ? this._lottie.goToAndPlay(r, !0)
                : (this._lottie.goToAndStop(r, !0), this._lottie.pause());
          }
        }
      }
      snapshot() {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.shadowRoot) {
          var e = this.shadowRoot.querySelector(".animation svg"),
            r = new XMLSerializer().serializeToString(e);
          if (t) {
            var i = document.createElement("a");
            (i.href = "data:image/svg+xml;charset=utf-8,".concat(
              encodeURIComponent(r),
            )),
              (i.download = "download_".concat(this.seeker, ".svg")),
              document.body.appendChild(i),
              i.click(),
              document.body.removeChild(i);
          }
          return r;
        }
      }
      setSpeed() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._lottie && this._lottie.setSpeed(t);
      }
      setDirection(t) {
        this._lottie && this._lottie.setDirection(t);
      }
      setLooping(t) {
        this._lottie && ((this.loop = t), (this._lottie.loop = t));
      }
      togglePlay() {
        return this.currentState === PlayerState.Playing
          ? this.pause()
          : this.play();
      }
      toggleLooping() {
        this.setLooping(!this.loop);
      }
      resize() {
        this._lottie && this._lottie.resize();
      }
      static get styles() {
        return styles$1;
      }
      disconnectedCallback() {
        this.isConnected ||
          (this._io && (this._io.disconnect(), (this._io = void 0)),
          document.removeEventListener("visibilitychange", () =>
            this._onVisibilityChange(),
          ),
          this.destroy());
      }
      render() {
        var t = this.controls ? "main controls" : "main",
          e = this.controls ? "animation controls" : "animation";
        return y(
          _templateObject$1 ||
            (_templateObject$1 = _taggedTemplateLiteral([
              ' <div\n      id="animation-container"\n      class=',
              '\n      lang="en"\n      aria-label=',
              '\n      role="img"\n    >\n      <div\n        id="animation"\n        class=',
              '\n        style="background:',
              ';"\n      >\n        ',
              "\n      </div>\n      ",
              "\n    </div>",
            ])),
          t,
          this.description,
          e,
          this.background,
          this.currentState === PlayerState.Error
            ? y(
                _templateObject2 ||
                  (_templateObject2 = _taggedTemplateLiteral([
                    '<div class="error">⚠️</div>',
                  ])),
              )
            : void 0,
          this.controls ? this.renderControls() : void 0,
        );
      }
      firstUpdated() {
        "IntersectionObserver" in window &&
          ((this._io = new IntersectionObserver((t) => {
            t[0].isIntersecting
              ? this.currentState === PlayerState.Frozen && this.play()
              : this.currentState === PlayerState.Playing && this.freeze();
          })),
          this._io.observe(this.container)),
          void 0 !== document.hidden &&
            document.addEventListener("visibilitychange", () =>
              this._onVisibilityChange(),
            ),
          this.src && this.load(this.src),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered));
      }
      renderControls() {
        var t = this.currentState === PlayerState.Playing,
          e = this.currentState === PlayerState.Paused,
          r = this.currentState === PlayerState.Stopped;
        return y(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteral([
              '\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ',
              '\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',
              "\n          @input=",
              "\n          @mousedown=",
              "\n          @mouseup=",
              '\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=',
              '\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    ',
            ])),
          this.togglePlay,
          t || e ? "active" : "",
          y(
            t
              ? _templateObject4 ||
                  (_templateObject4 = _taggedTemplateLiteral([
                    '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>',
                  ]))
              : _templateObject5 ||
                  (_templateObject5 = _taggedTemplateLiteral([
                    '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>',
                  ])),
          ),
          this.stop,
          r ? "active" : "",
          this.seeker,
          this._handleSeekChange,
          () => {
            (this._prevState = this.currentState), this.freeze();
          },
          () => {
            this._prevState === PlayerState.Playing && this.play();
          },
          this.seeker,
          this.toggleLooping,
          this.loop ? "active" : "",
        );
      }
      _onVisibilityChange() {
        !0 === document.hidden && this.currentState === PlayerState.Playing
          ? this.freeze()
          : this.currentState === PlayerState.Frozen && this.play();
      }
      _handleSeekChange(t) {
        if (this._lottie && !isNaN(t.target.value)) {
          var e = (t.target.value / 100) * this._lottie.totalFrames;
          this.seek(e);
        }
      }
      _attachEventListeners() {
        this._lottie.addEventListener("enterFrame", () => {
          (this.seeker =
            (this._lottie.currentFrame / this._lottie.totalFrames) * 100),
            this.dispatchEvent(
              new CustomEvent(PlayerEvents.Frame, {
                detail: {
                  frame: this._lottie.currentFrame,
                  seeker: this.seeker,
                },
              }),
            );
        }),
          this._lottie.addEventListener("complete", () => {
            if (this.currentState === PlayerState.Playing) {
              if (!this.loop || (this.count && this._counter >= this.count)) {
                if (
                  (this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)),
                  this.mode !== PlayMode.Bounce)
                )
                  return;
                if (0 === this._lottie.currentFrame) return;
              }
              this.mode === PlayMode.Bounce
                ? (this.count && (this._counter += 0.5),
                  setTimeout(() => {
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                      this.currentState === PlayerState.Playing &&
                        (this._lottie.setDirection(
                          -1 * this._lottie.playDirection,
                        ),
                        this._lottie.play());
                  }, this.intermission))
                : (this.count && (this._counter += 1),
                  window.setTimeout(() => {
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                      this.currentState === PlayerState.Playing &&
                        (-1 === this.direction
                          ? (this.seek("99%"), this.play())
                          : (this._lottie.stop(), this._lottie.play()));
                  }, this.intermission));
            } else this.dispatchEvent(new CustomEvent(PlayerEvents.Complete));
          }),
          this._lottie.addEventListener("DOMLoaded", () => {
            this.setSpeed(this.speed),
              this.setDirection(this.direction),
              this.autoplay &&
                (-1 === this.direction && this.seek("100%"), this.play()),
              this.dispatchEvent(new CustomEvent(PlayerEvents.Ready));
          }),
          this._lottie.addEventListener("data_ready", () => {
            this.dispatchEvent(new CustomEvent(PlayerEvents.Load));
          }),
          this._lottie.addEventListener("data_failed", () => {
            (this.currentState = PlayerState.Error),
              this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
          }),
          this.container.addEventListener("mouseenter", () => {
            this.hover &&
              this.currentState !== PlayerState.Playing &&
              this.play();
          }),
          this.container.addEventListener("mouseleave", () => {
            this.hover &&
              this.currentState === PlayerState.Playing &&
              this.stop();
          });
      }
      freeze() {
        this._lottie &&
          (this._lottie.pause(),
          (this.currentState = PlayerState.Frozen),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)));
      }
    },
    _templateObject;
  __decorate(
    [e$3({ type: Boolean })],
    LottiePlayer.prototype,
    "autoplay",
    void 0,
  ),
    __decorate(
      [e$3({ type: String, reflect: !0 })],
      LottiePlayer.prototype,
      "background",
      void 0,
    ),
    __decorate(
      [e$3({ type: Boolean })],
      LottiePlayer.prototype,
      "controls",
      void 0,
    ),
    __decorate(
      [e$3({ type: Number })],
      LottiePlayer.prototype,
      "count",
      void 0,
    ),
    __decorate(
      [e$3({ type: String })],
      LottiePlayer.prototype,
      "currentState",
      void 0,
    ),
    __decorate(
      [e$3({ type: String })],
      LottiePlayer.prototype,
      "description",
      void 0,
    ),
    __decorate(
      [e$3({ type: Number })],
      LottiePlayer.prototype,
      "direction",
      void 0,
    ),
    __decorate(
      [e$3({ type: Boolean })],
      LottiePlayer.prototype,
      "disableCheck",
      void 0,
    ),
    __decorate(
      [e$3({ type: Boolean })],
      LottiePlayer.prototype,
      "hover",
      void 0,
    ),
    __decorate([e$3()], LottiePlayer.prototype, "intermission", void 0),
    __decorate(
      [e$3({ type: Boolean, reflect: !0 })],
      LottiePlayer.prototype,
      "loop",
      void 0,
    ),
    __decorate([e$3()], LottiePlayer.prototype, "mode", void 0),
    __decorate(
      [e$3({ type: String })],
      LottiePlayer.prototype,
      "preserveAspectRatio",
      void 0,
    ),
    __decorate(
      [e$3({ type: String })],
      LottiePlayer.prototype,
      "renderer",
      void 0,
    ),
    __decorate([e$3()], LottiePlayer.prototype, "seeker", void 0),
    __decorate(
      [e$3({ type: Number })],
      LottiePlayer.prototype,
      "speed",
      void 0,
    ),
    __decorate([e$3({ type: String })], LottiePlayer.prototype, "src", void 0),
    __decorate(
      [e$3({ type: Boolean })],
      LottiePlayer.prototype,
      "webworkers",
      void 0,
    ),
    __decorate(
      [i$2(".animation")],
      LottiePlayer.prototype,
      "container",
      void 0,
    ),
    (LottiePlayer = __decorate([e$4("lottie-player")], LottiePlayer));
  var styles = litElement.css(
    _templateObject ||
      (_templateObject = _taggedTemplateLiteral([
        "\n  ",
        "\n\n  :host {\n    width: 512px;\n    height: 512px;\n  }\n",
      ])),
    styles$1,
  );
  function fetchPath(t) {
    return _fetchPath.apply(this, arguments);
  }
  function _fetchPath() {
    return (
      (_fetchPath = _asyncToGenerator(function* (t) {
        return new Promise((e, r) => {
          var i = new XMLHttpRequest();
          i.open("GET", t, !0),
            (i.responseType = "arraybuffer"),
            i.send(),
            (i.onreadystatechange = function () {
              if (4 == i.readyState && 200 == i.status)
                try {
                  var t = String.fromCharCode.apply(
                    null,
                    new Uint8Array(i.response),
                  );
                  return e(JSON.parse(t));
                } catch (t) {
                  try {
                    var s = inflate_1(i.response, { to: "string" });
                    return e(JSON.parse(s));
                  } catch (t) {
                    return r(t);
                  }
                }
            });
        });
      })),
      _fetchPath.apply(this, arguments)
    );
  }
  (exports.TGSPlayer = class extends LottiePlayer {
    constructor() {
      super(...arguments), (this.strict = !0);
    }
    load(t) {
      var e = () => super.load,
        r = this;
      return _asyncToGenerator(function* () {
        var i = parseSrc(t);
        if (
          ("path" === ("string" == typeof i ? "path" : "animationData") &&
            (i = yield fetchPath(i)),
          !0 === r.strict)
        ) {
          var s = r.formatCheck(i);
          0 !== s.length &&
            r.dispatchEvent(new CustomEvent(PlayerEvents.Error, { detail: s }));
        }
        return delete i.tgs, e().call(r, i);
      })();
    }
    static get styles() {
      return styles;
    }
    formatCheck(t) {
      var e = [];
      return (
        ("tgs" in t && 1 === t.tgs) ||
          e.push("Must be marked as a TGS Lottie variant"),
        (t.op - t.ip) / t.fr > 3 && e.push("Longer than 3 seconds"),
        (512 == t.w && 512 == t.h) ||
          e.push("Dimensions should be exactly 512pxx512px"),
        null != t.ddd && 0 != t.ddd && e.push("Must not have 3D layers"),
        "markers" in t && e.push("Must not have markers"),
        null != t.assets &&
          t.assets.forEach((t) => {
            e.concat(this.checkLayer(t.layers));
          }),
        t.layers.forEach((t) => {
          e.concat(this.checkLayer(t));
        }),
        e
      );
    }
    checkLayer(t) {
      var e = [];
      return (
        null != t.ddd &&
          0 != t.ddd &&
          e.push("Composition should not include any 3D Layers"),
        null != t.sr &&
          1 != t.sr &&
          e.push("Composition should not include any Time Stretching"),
        null != t.tm &&
          e.push("Composition should not include any Time Remapping"),
        1 === t.ty && e.push("Composition should not include any Solids"),
        2 === t.ty && e.push("Composition should not include any Images"),
        5 === t.ty && e.push("Composition should not include any Texts"),
        (!0 !== t.hasMask && null == t.masksProperties) ||
          e.push("Composition should not include any Masks"),
        null != t.tt && e.push("Composition should not include any Mattes"),
        1 === t.ao &&
          e.push("Composition should not include any Auto-Oriented Layers"),
        null != t.ef &&
          e.push("Composition should not include any Layer Effects"),
        e.concat(this.checkItems(t.shapes, !0)),
        e
      );
    }
    checkItems(t, e) {
      var r = [];
      return (
        null != t &&
          t.forEach((t) => {
            "rp" == t.ty &&
              r.push("Composition should not include any Repeaters"),
              "sr" == t.ty &&
                r.push("Composition should not include any Star Shapes"),
              "mm" == t.ty &&
                r.push("Composition should not include any Merge Paths"),
              "gs" == t.ty &&
                r.push("Composition should not include any Gradient Strokes"),
              !0 === e && r.concat(this.checkItems(t.it, !1));
          }),
        r
      );
    }
  }),
    __decorate(
      [e$3({ type: Boolean })],
      exports.TGSPlayer.prototype,
      "strict",
      void 0,
    ),
    (exports.TGSPlayer = __decorate([e$4("tgs-player")], exports.TGSPlayer)),
    Object.defineProperty(exports, "__esModule", { value: !0 });
});
//# sourceMappingURL=tgs-player.js.map
