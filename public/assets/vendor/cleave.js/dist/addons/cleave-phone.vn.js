!function () {
  function n(n, t) {
    var l = n.split("."),
      e = U;
    l[0] in e || !e.execScript || e.execScript("var " + l[0]);
    for (var r; l.length && (r = l.shift()); )
      l.length || void 0 === t ? (e = e[r] ? e[r] : (e[r] = {})) : (e[r] = t);
  }
  function t(n, t) {
    function l() {}
    (l.prototype = t.prototype),
      (n.M = t.prototype),
      (n.prototype = new l()),
      (n.prototype.constructor = n),
      (n.N = function (n, l, e) {
        for (
          var r = Array(arguments.length - 2), u = 2;
          u < arguments.length;
          u++
        )
          r[u - 2] = arguments[u];
        return t.prototype[l].apply(n, r);
      });
  }
  function l(n, t) {
    null != n && this.a.apply(this, arguments);
  }
  function e(n) {
    n.b = "";
  }
  function r(n, t) {
    n.sort(t || u);
  }
  function u(n, t) {
    return n > t ? 1 : n < t ? -1 : 0;
  }
  function i(n) {
    var t,
      l = [],
      e = 0;
    for (t in n) l[e++] = n[t];
    return l;
  }
  function a(n, t) {
    (this.b = n), (this.a = {});
    for (var l = 0; l < t.length; l++) {
      var e = t[l];
      this.a[e.b] = e;
    }
  }
  function o(n) {
    return (
      (n = i(n.a)),
      r(n, function (n, t) {
        return n.b - t.b;
      }),
      n
    );
  }
  function s(n, t) {
    switch (
      ((this.b = n),
      (this.g = !!t.v),
      (this.a = t.c),
      (this.i = t.type),
      (this.h = !1),
      this.a)
    ) {
      case J:
      case K:
      case L:
      case O:
      case Z:
      case k:
      case Y:
        this.h = !0;
    }
    this.f = t.defaultValue;
  }
  function f() {
    (this.a = {}), (this.f = this.j().a), (this.b = this.g = null);
  }
  function p(n, t) {
    for (var l = o(n.j()), e = 0; e < l.length; e++) {
      var r = l[e],
        u = r.b;
      if (null != t.a[u]) {
        n.b && delete n.b[r.b];
        var i = 11 == r.a || 10 == r.a;
        if (r.g)
          for (var r = c(t, u) || [], a = 0; a < r.length; a++) {
            var s = n,
              f = u,
              h = i ? r[a].clone() : r[a];
            s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
          }
        else
          (r = c(t, u)),
            i ? ((i = c(n, u)) ? p(i, r) : m(n, u, r.clone())) : m(n, u, r);
      }
    }
  }
  function c(n, t) {
    var l = n.a[t];
    if (null == l) return null;
    if (n.g) {
      if (!(t in n.b)) {
        var e = n.g,
          r = n.f[t];
        if (null != l)
          if (r.g) {
            for (var u = [], i = 0; i < l.length; i++) u[i] = e.b(r, l[i]);
            l = u;
          } else l = e.b(r, l);
        return (n.b[t] = l);
      }
      return n.b[t];
    }
    return l;
  }
  function h(n, t, l) {
    var e = c(n, t);
    return n.f[t].g ? e[l || 0] : e;
  }
  function g(n, t) {
    var l;
    if (null != n.a[t]) l = h(n, t, void 0);
    else
      n: {
        if (((l = n.f[t]), void 0 === l.f)) {
          var e = l.i;
          if (e === Boolean) l.f = !1;
          else if (e === Number) l.f = 0;
          else {
            if (e !== String) {
              l = new e();
              break n;
            }
            l.f = l.h ? "0" : "";
          }
        }
        l = l.f;
      }
    return l;
  }
  function d(n, t) {
    return n.f[t].g
      ? null != n.a[t]
        ? n.a[t].length
        : 0
      : null != n.a[t]
      ? 1
      : 0;
  }
  function m(n, t, l) {
    (n.a[t] = l), n.b && (n.b[t] = l);
  }
  function b(n, t) {
    var l,
      e = [];
    for (l in t) 0 != l && e.push(new s(l, t[l]));
    return new a(n, e);
  } /*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function y() {
    f.call(this);
  }
  function v() {
    f.call(this);
  }
  function _() {
    f.call(this);
  }
  function $() {}
  function S() {}
  function w() {} /*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function x() {
    this.a = {};
  }
  function N(n) {
    return 0 == n.length || un.test(n);
  }
  function A(n, t) {
    if (null == t) return null;
    t = t.toUpperCase();
    var l = n.a[t];
    if (null == l) {
      if (((l = tn[t]), null == l)) return null;
      (l = new w().a(_.j(), l)), (n.a[t] = l);
    }
    return l;
  }
  function j(n) {
    return (n = nn[n]), null == n ? "ZZ" : n[0];
  }
  function E(n) {
    (this.H = RegExp(" ")),
      (this.C = ""),
      (this.m = new l()),
      (this.w = ""),
      (this.i = new l()),
      (this.u = new l()),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.G = x.b()),
      (this.s = 0),
      (this.b = new l()),
      (this.B = !1),
      (this.h = ""),
      (this.a = new l()),
      (this.f = []),
      (this.D = n),
      (this.J = this.g = B(this, this.D));
  }
  function B(n, t) {
    var l;
    if (null != t && isNaN(t) && t.toUpperCase() in tn) {
      if (((l = A(n.G, t)), null == l))
        throw Error("Invalid region code: " + t);
      l = g(l, 10);
    } else l = 0;
    return (l = A(n.G, j(l))), null != l ? l : an;
  }
  function R(n) {
    for (var t = n.f.length, l = 0; l < t; ++l) {
      var r = n.f[l],
        u = g(r, 1);
      if (n.w == u) return !1;
      var i;
      i = n;
      var a = r,
        o = g(a, 1);
      if (-1 != o.indexOf("|")) i = !1;
      else {
        (o = o.replace(on, "\\d")), (o = o.replace(sn, "\\d")), e(i.m);
        var s;
        s = i;
        var a = g(a, 2),
          f = "999999999999999".match(o)[0];
        f.length < s.a.b.length
          ? (s = "")
          : ((s = f.replace(new RegExp(o, "g"), a)),
            (s = s.replace(RegExp("9", "g"), " "))),
          0 < s.length ? (i.m.a(s), (i = !0)) : (i = !1);
      }
      if (i) return (n.w = u), (n.B = pn.test(h(r, 4))), (n.s = 0), !0;
    }
    return (n.l = !1);
  }
  function F(n, t) {
    for (var l = [], e = t.length - 3, r = n.f.length, u = 0; u < r; ++u) {
      var i = n.f[u];
      0 == d(i, 3)
        ? l.push(n.f[u])
        : ((i = h(i, 3, Math.min(e, d(i, 3) - 1))),
          0 == t.search(i) && l.push(n.f[u]));
    }
    n.f = l;
  }
  function C(n, t) {
    n.i.a(t);
    var l = t;
    if (rn.test(l) || (1 == n.i.b.length && en.test(l))) {
      var r,
        l = t;
      "+" == l ? ((r = l), n.u.a(l)) : ((r = ln[l]), n.u.a(r), n.a.a(r)),
        (t = r);
    } else (n.l = !1), (n.F = !0);
    if (!n.l) {
      if (!n.F)
        if (P(n)) {
          if (q(n)) return I(n);
        } else if (
          (0 < n.h.length &&
            ((l = n.a.toString()),
            e(n.a),
            n.a.a(n.h),
            n.a.a(l),
            (l = n.b.toString()),
            (r = l.lastIndexOf(n.h)),
            e(n.b),
            n.b.a(l.substring(0, r))),
          n.h != H(n))
        )
          return n.b.a(" "), I(n);
      return n.i.toString();
    }
    switch (n.u.b.length) {
      case 0:
      case 1:
      case 2:
        return n.i.toString();
      case 3:
        if (!P(n)) return (n.h = H(n)), M(n);
        n.A = !0;
      default:
        return n.A
          ? (q(n) && (n.A = !1), n.b.toString() + n.a.toString())
          : 0 < n.f.length
          ? ((l = T(n, t)),
            (r = V(n)),
            0 < r.length
              ? r
              : (F(n, n.a.toString()),
                R(n) ? G(n) : n.l ? D(n, l) : n.i.toString()))
          : M(n);
    }
  }
  function I(n) {
    return (
      (n.l = !0), (n.A = !1), (n.f = []), (n.s = 0), e(n.m), (n.w = ""), M(n)
    );
  }
  function V(n) {
    for (var t = n.a.toString(), l = n.f.length, e = 0; e < l; ++e) {
      var r = n.f[e],
        u = g(r, 1);
      if (new RegExp("^(?:" + u + ")$").test(t))
        return (
          (n.B = pn.test(h(r, 4))),
          (t = t.replace(new RegExp(u, "g"), h(r, 2))),
          D(n, t)
        );
    }
    return "";
  }
  function D(n, t) {
    var l = n.b.b.length;
    return n.B && 0 < l && " " != n.b.toString().charAt(l - 1)
      ? n.b + " " + t
      : n.b + t;
  }
  function M(n) {
    var t = n.a.toString();
    if (3 <= t.length) {
      for (
        var l =
            n.o && 0 == n.h.length && 0 < d(n.g, 20)
              ? c(n.g, 20) || []
              : c(n.g, 19) || [],
          e = l.length,
          r = 0;
        r < e;
        ++r
      ) {
        var u = l[r];
        (0 < n.h.length && N(g(u, 4)) && !h(u, 6) && null == u.a[5]) ||
          ((0 != n.h.length || n.o || N(g(u, 4)) || h(u, 6)) &&
            fn.test(g(u, 2)) &&
            n.f.push(u));
      }
      return (
        F(n, t), (t = V(n)), 0 < t.length ? t : R(n) ? G(n) : n.i.toString()
      );
    }
    return D(n, t);
  }
  function G(n) {
    var t = n.a.toString(),
      l = t.length;
    if (0 < l) {
      for (var e = "", r = 0; r < l; r++) e = T(n, t.charAt(r));
      return n.l ? D(n, e) : n.i.toString();
    }
    return n.b.toString();
  }
  function H(n) {
    var t,
      l = n.a.toString(),
      r = 0;
    return (
      1 != h(n.g, 10)
        ? (t = !1)
        : ((t = n.a.toString()),
          (t = "1" == t.charAt(0) && "0" != t.charAt(1) && "1" != t.charAt(1))),
      t
        ? ((r = 1), n.b.a("1").a(" "), (n.o = !0))
        : null != n.g.a[15] &&
          ((t = new RegExp("^(?:" + h(n.g, 15) + ")")),
          (t = l.match(t)),
          null != t &&
            null != t[0] &&
            0 < t[0].length &&
            ((n.o = !0), (r = t[0].length), n.b.a(l.substring(0, r)))),
      e(n.a),
      n.a.a(l.substring(r)),
      l.substring(0, r)
    );
  }
  function P(n) {
    var t = n.u.toString(),
      l = new RegExp("^(?:\\+|" + h(n.g, 11) + ")"),
      l = t.match(l);
    return (
      null != l &&
      null != l[0] &&
      0 < l[0].length &&
      ((n.o = !0),
      (l = l[0].length),
      e(n.a),
      n.a.a(t.substring(l)),
      e(n.b),
      n.b.a(t.substring(0, l)),
      "+" != t.charAt(0) && n.b.a(" "),
      !0)
    );
  }
  function q(n) {
    if (0 == n.a.b.length) return !1;
    var t,
      r = new l();
    n: {
      if (((t = n.a.toString()), 0 != t.length && "0" != t.charAt(0)))
        for (var u, i = t.length, a = 1; 3 >= a && a <= i; ++a)
          if (((u = parseInt(t.substring(0, a), 10)), u in nn)) {
            r.a(t.substring(a)), (t = u);
            break n;
          }
      t = 0;
    }
    return (
      0 != t &&
      (e(n.a),
      n.a.a(r.toString()),
      (r = j(t)),
      "001" == r ? (n.g = A(n.G, "" + t)) : r != n.D && (n.g = B(n, r)),
      n.b.a("" + t).a(" "),
      (n.h = ""),
      !0)
    );
  }
  function T(n, t) {
    var l = n.m.toString();
    if (0 <= l.substring(n.s).search(n.H)) {
      var r = l.search(n.H),
        l = l.replace(n.H, t);
      return e(n.m), n.m.a(l), (n.s = r), l.substring(0, n.s + 1);
    }
    return 1 == n.f.length && (n.l = !1), (n.w = ""), n.i.toString();
  }
  var U = this;
  (l.prototype.b = ""),
    (l.prototype.set = function (n) {
      this.b = "" + n;
    }),
    (l.prototype.a = function (n, t, l) {
      if (((this.b += String(n)), null != t))
        for (var e = 1; e < arguments.length; e++) this.b += arguments[e];
      return this;
    }),
    (l.prototype.toString = function () {
      return this.b;
    });
  var Y = 1,
    k = 2,
    J = 3,
    K = 4,
    L = 6,
    O = 16,
    Z = 18;
  (f.prototype.set = function (n, t) {
    m(this, n.b, t);
  }),
    (f.prototype.clone = function () {
      var n = new this.constructor();
      return n != this && ((n.a = {}), n.b && (n.b = {}), p(n, this)), n;
    }),
    t(y, f);
  var z = null;
  t(v, f);
  var Q = null;
  t(_, f);
  var W = null;
  (y.prototype.j = function () {
    var n = z;
    return (
      n ||
        (z = n =
          b(y, {
            0: { name: "NumberFormat", I: "i18n.phonenumbers.NumberFormat" },
            1: { name: "pattern", required: !0, c: 9, type: String },
            2: { name: "format", required: !0, c: 9, type: String },
            3: { name: "leading_digits_pattern", v: !0, c: 9, type: String },
            4: { name: "national_prefix_formatting_rule", c: 9, type: String },
            6: {
              name: "national_prefix_optional_when_formatting",
              c: 8,
              defaultValue: !1,
              type: Boolean,
            },
            5: {
              name: "domestic_carrier_code_formatting_rule",
              c: 9,
              type: String,
            },
          })),
      n
    );
  }),
    (y.j = y.prototype.j),
    (v.prototype.j = function () {
      var n = Q;
      return (
        n ||
          (Q = n =
            b(v, {
              0: {
                name: "PhoneNumberDesc",
                I: "i18n.phonenumbers.PhoneNumberDesc",
              },
              2: { name: "national_number_pattern", c: 9, type: String },
              9: { name: "possible_length", v: !0, c: 5, type: Number },
              10: {
                name: "possible_length_local_only",
                v: !0,
                c: 5,
                type: Number,
              },
              6: { name: "example_number", c: 9, type: String },
            })),
        n
      );
    }),
    (v.j = v.prototype.j),
    (_.prototype.j = function () {
      var n = W;
      return (
        n ||
          (W = n =
            b(_, {
              0: {
                name: "PhoneMetadata",
                I: "i18n.phonenumbers.PhoneMetadata",
              },
              1: { name: "general_desc", c: 11, type: v },
              2: { name: "fixed_line", c: 11, type: v },
              3: { name: "mobile", c: 11, type: v },
              4: { name: "toll_free", c: 11, type: v },
              5: { name: "premium_rate", c: 11, type: v },
              6: { name: "shared_cost", c: 11, type: v },
              7: { name: "personal_number", c: 11, type: v },
              8: { name: "voip", c: 11, type: v },
              21: { name: "pager", c: 11, type: v },
              25: { name: "uan", c: 11, type: v },
              27: { name: "emergency", c: 11, type: v },
              28: { name: "voicemail", c: 11, type: v },
              29: { name: "short_code", c: 11, type: v },
              30: { name: "standard_rate", c: 11, type: v },
              31: { name: "carrier_specific", c: 11, type: v },
              33: { name: "sms_services", c: 11, type: v },
              24: { name: "no_international_dialling", c: 11, type: v },
              9: { name: "id", required: !0, c: 9, type: String },
              10: { name: "country_code", c: 5, type: Number },
              11: { name: "international_prefix", c: 9, type: String },
              17: {
                name: "preferred_international_prefix",
                c: 9,
                type: String,
              },
              12: { name: "national_prefix", c: 9, type: String },
              13: { name: "preferred_extn_prefix", c: 9, type: String },
              15: { name: "national_prefix_for_parsing", c: 9, type: String },
              16: {
                name: "national_prefix_transform_rule",
                c: 9,
                type: String,
              },
              18: {
                name: "same_mobile_and_fixed_line_pattern",
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
              19: { name: "number_format", v: !0, c: 11, type: y },
              20: { name: "intl_number_format", v: !0, c: 11, type: y },
              22: {
                name: "main_country_for_code",
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
              23: { name: "leading_digits", c: 9, type: String },
              26: {
                name: "leading_zero_possible",
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
            })),
        n
      );
    }),
    (_.j = _.prototype.j),
    ($.prototype.a = function (n) {
      throw (new n.b(), Error("Unimplemented"));
    }),
    ($.prototype.b = function (n, t) {
      if (11 == n.a || 10 == n.a)
        return t instanceof f ? t : this.a(n.i.prototype.j(), t);
      if (14 == n.a) {
        if ("string" == typeof t && X.test(t)) {
          var l = Number(t);
          if (0 < l) return l;
        }
        return t;
      }
      if (!n.h) return t;
      if (((l = n.i), l === String)) {
        if ("number" == typeof t) return String(t);
      } else if (
        l === Number &&
        "string" == typeof t &&
        ("Infinity" === t || "-Infinity" === t || "NaN" === t || X.test(t))
      )
        return Number(t);
      return t;
    });
  var X = /^-?[0-9]+$/;
  t(S, $),
    (S.prototype.a = function (n, t) {
      var l = new n.b();
      return (l.g = this), (l.a = t), (l.b = {}), l;
    }),
    t(w, S),
    (w.prototype.b = function (n, t) {
      return 8 == n.a ? !!t : $.prototype.b.apply(this, arguments);
    }),
    (w.prototype.a = function (n, t) {
      return w.M.a.call(this, n, t);
    }); /*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var nn = { 84: ["VN"] },
    tn = {
      VN: [
        null,
        [
          null,
          null,
          "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}",
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 8, 9, 10],
        ],
        [
          null,
          null,
          "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}",
          null,
          null,
          null,
          "2101234567",
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          "(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5689]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}",
          null,
          null,
          null,
          "912345678",
          null,
          null,
          [9],
        ],
        [
          null,
          null,
          "1800\\d{4,6}",
          null,
          null,
          null,
          "1800123456",
          null,
          null,
          [8, 9, 10],
        ],
        [
          null,
          null,
          "1900\\d{4,6}",
          null,
          null,
          null,
          "1900123456",
          null,
          null,
          [8, 9, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "(?:67|99)2\\d{6}",
          null,
          null,
          null,
          "992012345",
          null,
          null,
          [9],
        ],
        "VN",
        84,
        "00",
        "0",
        null,
        null,
        "0",
        null,
        null,
        null,
        [
          [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
          [null, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", null, 1],
          [null, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", null, 1],
          [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
          [
            null,
            "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
            "$1 $2 $3 $4",
            ["[69]"],
            "0$1",
            null,
            1,
          ],
          [
            null,
            "(\\d{3})(\\d{3})(\\d{3})",
            "$1 $2 $3",
            ["[3578]"],
            "0$1",
            null,
            1,
          ],
          [
            null,
            "(\\d{2})(\\d{4})(\\d{4})",
            "$1 $2 $3",
            ["2[48]"],
            "0$1",
            null,
            1,
          ],
          [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1],
        ],
        [
          [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
          [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
          [
            null,
            "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
            "$1 $2 $3 $4",
            ["[69]"],
            "0$1",
            null,
            1,
          ],
          [
            null,
            "(\\d{3})(\\d{3})(\\d{3})",
            "$1 $2 $3",
            ["[3578]"],
            "0$1",
            null,
            1,
          ],
          [
            null,
            "(\\d{2})(\\d{4})(\\d{4})",
            "$1 $2 $3",
            ["2[48]"],
            "0$1",
            null,
            1,
          ],
          [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [
          null,
          null,
          "(?:[17]99|69\\d\\d?)\\d{4}",
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 8],
        ],
        [
          null,
          null,
          "(?:[17]99|69\\d\\d?|80\\d)\\d{4}",
          null,
          null,
          null,
          "1992000",
          null,
          null,
          [7, 8],
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    };
  x.b = function () {
    return x.a ? x.a : (x.a = new x());
  };
  var ln = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "０": "0",
      "１": "1",
      "２": "2",
      "３": "3",
      "４": "4",
      "５": "5",
      "６": "6",
      "７": "7",
      "８": "8",
      "９": "9",
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    },
    en = RegExp("[+＋]+"),
    rn = RegExp("([0-9０-９٠-٩۰-۹])"),
    un = /^\(?\$1\)?$/,
    an = new _();
  m(an, 11, "NA");
  var on = /\[([^\[\]])*\]/g,
    sn = /\d(?=[^,}][^,}])/g,
    fn = RegExp(
      "^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$",
    ),
    pn = /[- ]/;
  (E.prototype.K = function () {
    (this.C = ""),
      e(this.i),
      e(this.u),
      e(this.m),
      (this.s = 0),
      (this.w = ""),
      e(this.b),
      (this.h = ""),
      e(this.a),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.f = []),
      (this.B = !1),
      this.g != this.J && (this.g = B(this, this.D));
  }),
    (E.prototype.L = function (n) {
      return (this.C = C(this, n));
    }),
    n("Cleave.AsYouTypeFormatter", E),
    n("Cleave.AsYouTypeFormatter.prototype.inputDigit", E.prototype.L),
    n("Cleave.AsYouTypeFormatter.prototype.clear", E.prototype.K);
}.call("object" == typeof global && global ? global : window);
