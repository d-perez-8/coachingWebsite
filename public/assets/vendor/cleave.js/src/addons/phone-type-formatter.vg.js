!function () {
  var aa = this;
  function h(a, c) {
    var b = a.split("."),
      d = aa;
    b[0] in d || !d.execScript || d.execScript("var " + b[0]);
    for (var f; b.length && (f = b.shift()); )
      b.length || void 0 === c
        ? d[f]
          ? (d = d[f])
          : (d = d[f] = {})
        : (d[f] = c);
  }
  function l(a, c) {
    function b() {}
    b.prototype = c.prototype;
    a.M = c.prototype;
    a.prototype = new b();
    a.prototype.constructor = a;
    a.N = function (a, b, e) {
      for (
        var g = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        g[k - 2] = arguments[k];
      return c.prototype[b].apply(a, g);
    };
  }
  function n(a, c) {
    null != a && this.a.apply(this, arguments);
  }
  n.prototype.b = "";
  n.prototype.set = function (a) {
    this.b = "" + a;
  };
  n.prototype.a = function (a, c, b) {
    this.b += String(a);
    if (null != c)
      for (var d = 1; d < arguments.length; d++) this.b += arguments[d];
    return this;
  };
  function p(a) {
    a.b = "";
  }
  n.prototype.toString = function () {
    return this.b;
  };
  function ba(a, c) {
    a.sort(c || ca);
  }
  function ca(a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  }
  function da(a) {
    var c = [],
      b = 0,
      d;
    for (d in a) c[b++] = a[d];
    return c;
  }
  function ea(a, c) {
    this.b = a;
    this.a = {};
    for (var b = 0; b < c.length; b++) {
      var d = c[b];
      this.a[d.b] = d;
    }
  }
  function fa(a) {
    a = da(a.a);
    ba(a, function (a, b) {
      return a.b - b.b;
    });
    return a;
  }
  function ga(a, c) {
    this.b = a;
    this.g = !!c.v;
    this.a = c.c;
    this.i = c.type;
    this.h = !1;
    switch (this.a) {
      case ha:
      case ia:
      case ja:
      case ka:
      case la:
      case ma:
      case na:
        this.h = !0;
    }
    this.f = c.defaultValue;
  }
  var na = 1,
    ma = 2,
    ha = 3,
    ia = 4,
    ja = 6,
    ka = 16,
    la = 18;
  function q() {
    this.a = {};
    this.f = this.j().a;
    this.b = this.g = null;
  }
  q.prototype.set = function (a, c) {
    r(this, a.b, c);
  };
  function u(a, c) {
    for (var b = fa(a.j()), d = 0; d < b.length; d++) {
      var f = b[d],
        e = f.b;
      if (null != c.a[e]) {
        a.b && delete a.b[f.b];
        var g = 11 == f.a || 10 == f.a;
        if (f.g)
          for (var f = v(c, e) || [], k = 0; k < f.length; k++) {
            var m = a,
              t = e,
              ta = g ? f[k].clone() : f[k];
            m.a[t] || (m.a[t] = []);
            m.a[t].push(ta);
            m.b && delete m.b[t];
          }
        else
          (f = v(c, e)),
            g ? ((g = v(a, e)) ? u(g, f) : r(a, e, f.clone())) : r(a, e, f);
      }
    }
  }
  q.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.a = {}), a.b && (a.b = {}), u(a, this));
    return a;
  };
  function v(a, c) {
    var b = a.a[c];
    if (null == b) return null;
    if (a.g) {
      if (!(c in a.b)) {
        var d = a.g,
          f = a.f[c];
        if (null != b)
          if (f.g) {
            for (var e = [], g = 0; g < b.length; g++) e[g] = d.b(f, b[g]);
            b = e;
          } else b = d.b(f, b);
        return (a.b[c] = b);
      }
      return a.b[c];
    }
    return b;
  }
  function w(a, c, b) {
    var d = v(a, c);
    return a.f[c].g ? d[b || 0] : d;
  }
  function x(a, c) {
    var b;
    if (null != a.a[c]) b = w(a, c, void 0);
    else
      a: {
        b = a.f[c];
        if (void 0 === b.f) {
          var d = b.i;
          if (d === Boolean) b.f = !1;
          else if (d === Number) b.f = 0;
          else if (d === String) b.f = b.h ? "0" : "";
          else {
            b = new d();
            break a;
          }
        }
        b = b.f;
      }
    return b;
  }
  function y(a, c) {
    return a.f[c].g
      ? null != a.a[c]
        ? a.a[c].length
        : 0
      : null != a.a[c]
      ? 1
      : 0;
  }
  function r(a, c, b) {
    a.a[c] = b;
    a.b && (a.b[c] = b);
  }
  function z(a, c) {
    var b = [],
      d;
    for (d in c) 0 != d && b.push(new ga(d, c[d]));
    return new ea(a, b);
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
  function A() {
    q.call(this);
  }
  l(A, q);
  var B = null;
  function C() {
    q.call(this);
  }
  l(C, q);
  var D = null;
  function E() {
    q.call(this);
  }
  l(E, q);
  var F = null;
  A.prototype.j = function () {
    var a = B;
    a ||
      (B = a =
        z(A, {
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
        }));
    return a;
  };
  A.j = A.prototype.j;
  C.prototype.j = function () {
    var a = D;
    a ||
      (D = a =
        z(C, {
          0: {
            name: "PhoneNumberDesc",
            I: "i18n.phonenumbers.PhoneNumberDesc",
          },
          2: { name: "national_number_pattern", c: 9, type: String },
          9: { name: "possible_length", v: !0, c: 5, type: Number },
          10: { name: "possible_length_local_only", v: !0, c: 5, type: Number },
          6: { name: "example_number", c: 9, type: String },
        }));
    return a;
  };
  C.j = C.prototype.j;
  E.prototype.j = function () {
    var a = F;
    a ||
      (F = a =
        z(E, {
          0: { name: "PhoneMetadata", I: "i18n.phonenumbers.PhoneMetadata" },
          1: { name: "general_desc", c: 11, type: C },
          2: { name: "fixed_line", c: 11, type: C },
          3: { name: "mobile", c: 11, type: C },
          4: { name: "toll_free", c: 11, type: C },
          5: { name: "premium_rate", c: 11, type: C },
          6: { name: "shared_cost", c: 11, type: C },
          7: { name: "personal_number", c: 11, type: C },
          8: { name: "voip", c: 11, type: C },
          21: { name: "pager", c: 11, type: C },
          25: { name: "uan", c: 11, type: C },
          27: { name: "emergency", c: 11, type: C },
          28: { name: "voicemail", c: 11, type: C },
          29: { name: "short_code", c: 11, type: C },
          30: { name: "standard_rate", c: 11, type: C },
          31: { name: "carrier_specific", c: 11, type: C },
          33: { name: "sms_services", c: 11, type: C },
          24: { name: "no_international_dialling", c: 11, type: C },
          9: { name: "id", required: !0, c: 9, type: String },
          10: { name: "country_code", c: 5, type: Number },
          11: { name: "international_prefix", c: 9, type: String },
          17: { name: "preferred_international_prefix", c: 9, type: String },
          12: { name: "national_prefix", c: 9, type: String },
          13: { name: "preferred_extn_prefix", c: 9, type: String },
          15: { name: "national_prefix_for_parsing", c: 9, type: String },
          16: { name: "national_prefix_transform_rule", c: 9, type: String },
          18: {
            name: "same_mobile_and_fixed_line_pattern",
            c: 8,
            defaultValue: !1,
            type: Boolean,
          },
          19: { name: "number_format", v: !0, c: 11, type: A },
          20: { name: "intl_number_format", v: !0, c: 11, type: A },
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
        }));
    return a;
  };
  E.j = E.prototype.j;
  function G() {}
  G.prototype.a = function (a) {
    new a.b();
    throw Error("Unimplemented");
  };
  G.prototype.b = function (a, c) {
    if (11 == a.a || 10 == a.a)
      return c instanceof q ? c : this.a(a.i.prototype.j(), c);
    if (14 == a.a) {
      if ("string" == typeof c && H.test(c)) {
        var b = Number(c);
        if (0 < b) return b;
      }
      return c;
    }
    if (!a.h) return c;
    b = a.i;
    if (b === String) {
      if ("number" == typeof c) return String(c);
    } else if (
      b === Number &&
      "string" == typeof c &&
      ("Infinity" === c || "-Infinity" === c || "NaN" === c || H.test(c))
    )
      return Number(c);
    return c;
  };
  var H = /^-?[0-9]+$/;
  function I() {}
  l(I, G);
  I.prototype.a = function (a, c) {
    var b = new a.b();
    b.g = this;
    b.a = c;
    b.b = {};
    return b;
  };
  function J() {}
  l(J, I);
  J.prototype.b = function (a, c) {
    return 8 == a.a ? !!c : G.prototype.b.apply(this, arguments);
  };
  J.prototype.a = function (a, c) {
    return J.M.a.call(this, a, c);
  }; /*

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
  var K = {
      1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(
        " ",
      ),
    },
    L = {
      AG: [
        null,
        [
          null,
          null,
          "(?:268|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",
          null,
          null,
          null,
          "2684601234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}",
          null,
          null,
          null,
          "2684641234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [
          null,
          null,
          "26848[01]\\d{4}",
          null,
          null,
          null,
          "2684801234",
          null,
          null,
          null,
          [7],
        ],
        "AG",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [
          null,
          null,
          "26840[69]\\d{4}",
          null,
          null,
          null,
          "2684061234",
          null,
          null,
          null,
          [7],
        ],
        null,
        "268",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      AI: [
        null,
        [
          null,
          null,
          "(?:264|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "2644(?:6[12]|9[78])\\d{4}",
          null,
          null,
          null,
          "2644612345",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",
          null,
          null,
          null,
          "2642351234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "AI",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "264",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      AS: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|684|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "6846(?:22|33|44|55|77|88|9[19])\\d{4}",
          null,
          null,
          null,
          "6846221234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",
          null,
          null,
          null,
          "6847331234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "AS",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "684",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      BB: [
        null,
        [
          null,
          null,
          "(?:246|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",
          null,
          null,
          null,
          "2464123456",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",
          null,
          null,
          null,
          "2462501234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [
          null,
          null,
          "(?:246976|900[2-9]\\d\\d)\\d{4}",
          null,
          null,
          null,
          "9002123456",
          null,
          null,
          null,
          [7],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [
          null,
          null,
          "24631\\d{5}",
          null,
          null,
          null,
          "2463101234",
          null,
          null,
          null,
          [7],
        ],
        "BB",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "246",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",
          null,
          null,
          null,
          "2464301234",
          null,
          null,
          null,
          [7],
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      BM: [
        null,
        [
          null,
          null,
          "(?:441|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}",
          null,
          null,
          null,
          "4412345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "441(?:[37]\\d|5[0-39])\\d{5}",
          null,
          null,
          null,
          "4413701234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "BM",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "441",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      BS: [
        null,
        [
          null,
          null,
          "(?:242|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",
          null,
          null,
          null,
          "2423456789",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",
          null,
          null,
          null,
          "2423591234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}",
          null,
          null,
          null,
          "8002123456",
          null,
          null,
          null,
          [7],
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "BS",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "242",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, "242225[0-46-9]\\d{3}", null, null, null, "2422250123"],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      CA: [
        null,
        [
          null,
          null,
          "(?:[2-8]\\d|90)\\d{8}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
          null,
          null,
          null,
          "5062345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
          null,
          null,
          null,
          "5062345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, "600[2-9]\\d{6}", null, null, null, "6002012345"],
        "CA",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      DM: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|767|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",
          null,
          null,
          null,
          "7674201234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}",
          null,
          null,
          null,
          "7672251234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "DM",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "767",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      DO: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",
          null,
          null,
          null,
          "8092345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8[024]9[2-9]\\d{6}",
          null,
          null,
          null,
          "8092345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "DO",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "8[024]9",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      GD: [
        null,
        [
          null,
          null,
          "(?:473|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
          null,
          null,
          null,
          "4732691234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",
          null,
          null,
          null,
          "4734031234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "GD",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "473",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      GU: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|671|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
          null,
          null,
          null,
          "6713001234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
          null,
          null,
          null,
          "6713001234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "GU",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "671",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      JM: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|658|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",
          null,
          null,
          null,
          "8765230123",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",
          null,
          null,
          null,
          "8762101234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "JM",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "658|876",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      KN: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",
          null,
          null,
          null,
          "8692361234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",
          null,
          null,
          null,
          "8697652917",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "KN",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "869",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      KY: [
        null,
        [
          null,
          null,
          "(?:345|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",
          null,
          null,
          null,
          "3452221234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}",
          null,
          null,
          null,
          "3453231234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [
          null,
          null,
          "(?:345976|900[2-9]\\d\\d)\\d{4}",
          null,
          null,
          null,
          "9002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "KY",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, "345849\\d{4}", null, null, null, "3458491234"],
        null,
        "345",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      LC: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|758|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",
          null,
          null,
          null,
          "7584305678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}",
          null,
          null,
          null,
          "7582845678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "LC",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "758",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      MP: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|(?:67|90)0)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
          null,
          null,
          null,
          "6702345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
          null,
          null,
          null,
          "6702345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "MP",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "670",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      MS: [
        null,
        [
          null,
          null,
          "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "664491\\d{4}",
          null,
          null,
          null,
          "6644912345",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "66449[2-6]\\d{4}",
          null,
          null,
          null,
          "6644923456",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "MS",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "664",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      PR: [
        null,
        [
          null,
          null,
          "(?:[589]\\d\\d|787)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "(?:787|939)[2-9]\\d{6}",
          null,
          null,
          null,
          "7872345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "(?:787|939)[2-9]\\d{6}",
          null,
          null,
          null,
          "7872345678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "PR",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "787|939",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      SX: [
        null,
        [
          null,
          null,
          "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "7215(?:4[2-8]|8[239]|9[056])\\d{4}",
          null,
          null,
          null,
          "7215425678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",
          null,
          null,
          null,
          "7215205678",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002123456",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "SX",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "721",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      TC: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|649|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "649(?:712|9(?:4\\d|50))\\d{4}",
          null,
          null,
          null,
          "6497121234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",
          null,
          null,
          null,
          "6492311234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [
          null,
          null,
          "64971[01]\\d{4}",
          null,
          null,
          null,
          "6497101234",
          null,
          null,
          null,
          [7],
        ],
        "TC",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "649",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      TT: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",
          null,
          null,
          null,
          "8682211234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}",
          null,
          null,
          null,
          "8682911234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "TT",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "868",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [
          null,
          null,
          "868619\\d{4}",
          null,
          null,
          null,
          "8686191234",
          null,
          null,
          null,
          [7],
        ],
      ],
      US: [
        null,
        [
          null,
          null,
          "[2-9]\\d{9}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
          null,
          null,
          null,
          "2015550123",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
          null,
          null,
          null,
          "2015550123",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "US",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        [
          [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
          [
            null,
            "(\\d{3})(\\d{3})(\\d{4})",
            "($1) $2-$3",
            ["[2-9]"],
            null,
            null,
            1,
          ],
        ],
        [[null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        1,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, "710[2-9]\\d{6}", null, null, null, "7102123456"],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      VC: [
        null,
        [
          null,
          null,
          "(?:[58]\\d\\d|784|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",
          null,
          null,
          null,
          "7842661234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}",
          null,
          null,
          null,
          "7844301234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "VC",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "784",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      VG: [
        null,
        [
          null,
          null,
          "(?:284|[58]\\d\\d|900)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}",
          null,
          null,
          null,
          "2842291234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}",
          null,
          null,
          null,
          "2843001234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "VG",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "284",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      VI: [
        null,
        [
          null,
          null,
          "(?:(?:34|90)0|[58]\\d\\d)\\d{7}",
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [7],
        ],
        [
          null,
          null,
          "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",
          null,
          null,
          null,
          "3406421234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",
          null,
          null,
          null,
          "3406421234",
          null,
          null,
          null,
          [7],
        ],
        [
          null,
          null,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "8002345678",
        ],
        [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
          null,
          null,
          null,
          "5002345678",
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        "VI",
        1,
        "011",
        "1",
        null,
        null,
        "1",
        null,
        null,
        1,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        "340",
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    }; /*

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
  function M() {
    this.a = {};
  }
  M.b = function () {
    return M.a ? M.a : (M.a = new M());
  };
  var oa = {
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
      "\uff10": "0",
      "\uff11": "1",
      "\uff12": "2",
      "\uff13": "3",
      "\uff14": "4",
      "\uff15": "5",
      "\uff16": "6",
      "\uff17": "7",
      "\uff18": "8",
      "\uff19": "9",
      "\u0660": "0",
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u06f0": "0",
      "\u06f1": "1",
      "\u06f2": "2",
      "\u06f3": "3",
      "\u06f4": "4",
      "\u06f5": "5",
      "\u06f6": "6",
      "\u06f7": "7",
      "\u06f8": "8",
      "\u06f9": "9",
    },
    pa = RegExp("[+\uff0b]+"),
    qa = RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),
    ra = /^\(?\$1\)?$/;
  function N(a) {
    return 0 == a.length || ra.test(a);
  }
  function O(a, c) {
    if (null == c) return null;
    c = c.toUpperCase();
    var b = a.a[c];
    if (null == b) {
      b = L[c];
      if (null == b) return null;
      b = new J().a(E.j(), b);
      a.a[c] = b;
    }
    return b;
  }
  function P(a) {
    a = K[a];
    return null == a ? "ZZ" : a[0];
  }
  function Q(a) {
    this.H = RegExp("\u2008");
    this.C = "";
    this.m = new n();
    this.w = "";
    this.i = new n();
    this.u = new n();
    this.l = !0;
    this.A = this.o = this.F = !1;
    this.G = M.b();
    this.s = 0;
    this.b = new n();
    this.B = !1;
    this.h = "";
    this.a = new n();
    this.f = [];
    this.D = a;
    this.J = this.g = R(this, this.D);
  }
  var S = new E();
  r(S, 11, "NA");
  var sa = /\[([^\[\]])*\]/g,
    ua = /\d(?=[^,}][^,}])/g,
    va = RegExp(
      "^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$",
    ),
    T = /[- ]/;
  function R(a, c) {
    var b;
    if (null != c && isNaN(c) && c.toUpperCase() in L) {
      b = O(a.G, c);
      if (null == b) throw Error("Invalid region code: " + c);
      b = x(b, 10);
    } else b = 0;
    b = O(a.G, P(b));
    return null != b ? b : S;
  }
  function U(a) {
    for (var c = a.f.length, b = 0; b < c; ++b) {
      var d = a.f[b],
        f = x(d, 1);
      if (a.w == f) return !1;
      var e;
      e = a;
      var g = d,
        k = x(g, 1);
      if (-1 != k.indexOf("|")) e = !1;
      else {
        k = k.replace(sa, "\\d");
        k = k.replace(ua, "\\d");
        p(e.m);
        var m;
        m = e;
        var g = x(g, 2),
          t = "999999999999999".match(k)[0];
        t.length < m.a.b.length
          ? (m = "")
          : ((m = t.replace(new RegExp(k, "g"), g)),
            (m = m.replace(RegExp("9", "g"), "\u2008")));
        0 < m.length ? (e.m.a(m), (e = !0)) : (e = !1);
      }
      if (e) return (a.w = f), (a.B = T.test(w(d, 4))), (a.s = 0), !0;
    }
    return (a.l = !1);
  }
  function V(a, c) {
    for (var b = [], d = c.length - 3, f = a.f.length, e = 0; e < f; ++e) {
      var g = a.f[e];
      0 == y(g, 3)
        ? b.push(a.f[e])
        : ((g = w(g, 3, Math.min(d, y(g, 3) - 1))),
          0 == c.search(g) && b.push(a.f[e]));
    }
    a.f = b;
  }
  Q.prototype.K = function () {
    this.C = "";
    p(this.i);
    p(this.u);
    p(this.m);
    this.s = 0;
    this.w = "";
    p(this.b);
    this.h = "";
    p(this.a);
    this.l = !0;
    this.A = this.o = this.F = !1;
    this.f = [];
    this.B = !1;
    this.g != this.J && (this.g = R(this, this.D));
  };
  Q.prototype.L = function (a) {
    return (this.C = wa(this, a));
  };
  function wa(a, c) {
    a.i.a(c);
    var b = c;
    if (qa.test(b) || (1 == a.i.b.length && pa.test(b))) {
      var b = c,
        d;
      "+" == b ? ((d = b), a.u.a(b)) : ((d = oa[b]), a.u.a(d), a.a.a(d));
      c = d;
    } else (a.l = !1), (a.F = !0);
    if (!a.l) {
      if (!a.F)
        if (W(a)) {
          if (X(a)) return xa(a);
        } else if (
          (0 < a.h.length &&
            ((b = a.a.toString()),
            p(a.a),
            a.a.a(a.h),
            a.a.a(b),
            (b = a.b.toString()),
            (d = b.lastIndexOf(a.h)),
            p(a.b),
            a.b.a(b.substring(0, d))),
          a.h != ya(a))
        )
          return a.b.a(" "), xa(a);
      return a.i.toString();
    }
    switch (a.u.b.length) {
      case 0:
      case 1:
      case 2:
        return a.i.toString();
      case 3:
        if (W(a)) a.A = !0;
        else return (a.h = ya(a)), Y(a);
      default:
        if (a.A) return X(a) && (a.A = !1), a.b.toString() + a.a.toString();
        if (0 < a.f.length) {
          b = za(a, c);
          d = Aa(a);
          if (0 < d.length) return d;
          V(a, a.a.toString());
          return U(a) ? Ba(a) : a.l ? Z(a, b) : a.i.toString();
        }
        return Y(a);
    }
  }
  function xa(a) {
    a.l = !0;
    a.A = !1;
    a.f = [];
    a.s = 0;
    p(a.m);
    a.w = "";
    return Y(a);
  }
  function Aa(a) {
    for (var c = a.a.toString(), b = a.f.length, d = 0; d < b; ++d) {
      var f = a.f[d],
        e = x(f, 1);
      if (new RegExp("^(?:" + e + ")$").test(c))
        return (
          (a.B = T.test(w(f, 4))),
          (c = c.replace(new RegExp(e, "g"), w(f, 2))),
          Z(a, c)
        );
    }
    return "";
  }
  function Z(a, c) {
    var b = a.b.b.length;
    return a.B && 0 < b && " " != a.b.toString().charAt(b - 1)
      ? a.b + " " + c
      : a.b + c;
  }
  function Y(a) {
    var c = a.a.toString();
    if (3 <= c.length) {
      for (
        var b =
            a.o && 0 == a.h.length && 0 < y(a.g, 20)
              ? v(a.g, 20) || []
              : v(a.g, 19) || [],
          d = b.length,
          f = 0;
        f < d;
        ++f
      ) {
        var e = b[f];
        (0 < a.h.length && N(x(e, 4)) && !w(e, 6) && null == e.a[5]) ||
          ((0 != a.h.length || a.o || N(x(e, 4)) || w(e, 6)) &&
            va.test(x(e, 2)) &&
            a.f.push(e));
      }
      V(a, c);
      c = Aa(a);
      return 0 < c.length ? c : U(a) ? Ba(a) : a.i.toString();
    }
    return Z(a, c);
  }
  function Ba(a) {
    var c = a.a.toString(),
      b = c.length;
    if (0 < b) {
      for (var d = "", f = 0; f < b; f++) d = za(a, c.charAt(f));
      return a.l ? Z(a, d) : a.i.toString();
    }
    return a.b.toString();
  }
  function ya(a) {
    var c = a.a.toString(),
      b = 0,
      d;
    1 != w(a.g, 10)
      ? (d = !1)
      : ((d = a.a.toString()),
        (d = "1" == d.charAt(0) && "0" != d.charAt(1) && "1" != d.charAt(1)));
    d
      ? ((b = 1), a.b.a("1").a(" "), (a.o = !0))
      : null != a.g.a[15] &&
        ((d = new RegExp("^(?:" + w(a.g, 15) + ")")),
        (d = c.match(d)),
        null != d &&
          null != d[0] &&
          0 < d[0].length &&
          ((a.o = !0), (b = d[0].length), a.b.a(c.substring(0, b))));
    p(a.a);
    a.a.a(c.substring(b));
    return c.substring(0, b);
  }
  function W(a) {
    var c = a.u.toString(),
      b = new RegExp("^(?:\\+|" + w(a.g, 11) + ")"),
      b = c.match(b);
    return null != b && null != b[0] && 0 < b[0].length
      ? ((a.o = !0),
        (b = b[0].length),
        p(a.a),
        a.a.a(c.substring(b)),
        p(a.b),
        a.b.a(c.substring(0, b)),
        "+" != c.charAt(0) && a.b.a(" "),
        !0)
      : !1;
  }
  function X(a) {
    if (0 == a.a.b.length) return !1;
    var c = new n(),
      b;
    a: {
      b = a.a.toString();
      if (0 != b.length && "0" != b.charAt(0))
        for (var d, f = b.length, e = 1; 3 >= e && e <= f; ++e)
          if (((d = parseInt(b.substring(0, e), 10)), d in K)) {
            c.a(b.substring(e));
            b = d;
            break a;
          }
      b = 0;
    }
    if (0 == b) return !1;
    p(a.a);
    a.a.a(c.toString());
    c = P(b);
    "001" == c ? (a.g = O(a.G, "" + b)) : c != a.D && (a.g = R(a, c));
    a.b.a("" + b).a(" ");
    a.h = "";
    return !0;
  }
  function za(a, c) {
    var b = a.m.toString();
    if (0 <= b.substring(a.s).search(a.H)) {
      var d = b.search(a.H),
        b = b.replace(a.H, c);
      p(a.m);
      a.m.a(b);
      a.s = d;
      return b.substring(0, a.s + 1);
    }
    1 == a.f.length && (a.l = !1);
    a.w = "";
    return a.i.toString();
  }
  h("Cleave.AsYouTypeFormatter", Q);
  h("Cleave.AsYouTypeFormatter.prototype.inputDigit", Q.prototype.L);
  h("Cleave.AsYouTypeFormatter.prototype.clear", Q.prototype.K);
}.call(typeof global === "object" && global ? global : window);
