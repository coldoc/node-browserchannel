(function(){
var f, aa = aa || {}, l = this;
function ba(a) {
  a = a.split(".");
  for (var b = l, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ca() {
}
function da(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function m(a) {
  return "array" == da(a);
}
function ea(a) {
  var b = da(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function n(a) {
  return "string" == typeof a;
}
function fa(a) {
  return "function" == da(a);
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function p(a, b, c) {
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
  return p.apply(null, arguments);
}
var q = Date.now || function() {
  return+new Date;
};
function s(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.oa = b.prototype;
  a.prototype = new c;
  a.jc = function(a, c, g) {
    var h = Array.prototype.slice.call(arguments, 2);
    b.prototype[c].apply(a, h);
  };
}
;function ka(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function la(a) {
  if (!ma.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(na, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(oa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(pa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ra, "&#39;"));
  return a;
}
var na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, ma = /[&<>"']/;
function sa() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36);
}
function ta(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var x, ua, va, wa;
function xa() {
  return l.navigator ? l.navigator.userAgent : null;
}
wa = va = ua = x = !1;
var ya;
if (ya = xa()) {
  var za = l.navigator;
  x = 0 == ya.lastIndexOf("Opera", 0);
  ua = !x && (-1 != ya.indexOf("MSIE") || -1 != ya.indexOf("Trident"));
  va = !x && -1 != ya.indexOf("WebKit");
  wa = !x && !va && !ua && "Gecko" == za.product;
}
var Aa = x, y = ua, Ba = wa, z = va;
function Ca() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Da;
a: {
  var Ea = "", Fa;
  if (Aa && l.opera) {
    var Ga = l.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga
  } else {
    if (Ba ? Fa = /rv\:([^\);]+)(\)|;)/ : y ? Fa = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z && (Fa = /WebKit\/(\S+)/), Fa) {
      var Ha = Fa.exec(xa()), Ea = Ha ? Ha[1] : ""
    }
  }
  if (y) {
    var Ia = Ca();
    if (Ia > parseFloat(Ea)) {
      Da = String(Ia);
      break a;
    }
  }
  Da = Ea;
}
var Ka = {};
function A(a) {
  var b;
  if (!(b = Ka[a])) {
    b = 0;
    for (var c = String(Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", u = RegExp("(\\d*)(\\D*)", "g"), K = RegExp("(\\d*)(\\D*)", "g");
      do {
        var v = u.exec(h) || ["", "", ""], r = K.exec(k) || ["", "", ""];
        if (0 == v[0].length && 0 == r[0].length) {
          break;
        }
        b = ta(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ta(0 == v[2].length, 0 == r[2].length) || ta(v[2], r[2]);
      } while (0 == b);
    }
    b = Ka[a] = 0 <= b;
  }
  return b;
}
var La = l.document, Ma = La && y ? Ca() || ("CSS1Compat" == La.compatMode ? parseInt(Da, 10) : 5) : void 0;
function Na(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Na);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
s(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, ka.apply(null, b));
  b.shift();
}
s(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  throw new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {
  if (Sa) {
    Sa = !1;
    var b = l.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Ra(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw Sa = !0, Error();
      }
    }
  }
  return a.match(Qa);
}
var Sa = z;
function Ta(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Ua(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Va.length;g++) {
      c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;var B = Array.prototype, Xa = B.indexOf ? function(a, b, c) {
  return B.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ya = B.forEach ? function(a, b, c) {
  B.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = n(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
};
function Za(a) {
  var b;
  a: {
    b = $a;
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}
function ab(a) {
  return B.concat.apply(B, arguments);
}
function bb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function cb(a, b) {
  this.O = {};
  this.j = [];
  this.o = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof cb ? (c = a.ba(), d = a.N()) : (c = Ua(a), d = Ta(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
f = cb.prototype;
f.N = function() {
  db(this);
  for (var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.O[this.j[b]]);
  }
  return a;
};
f.ba = function() {
  db(this);
  return this.j.concat();
};
f.va = function(a) {
  return C(this.O, a);
};
f.remove = function(a) {
  return C(this.O, a) ? (delete this.O[a], this.o--, this.j.length > 2 * this.o && db(this), !0) : !1;
};
function db(a) {
  if (a.o != a.j.length) {
    for (var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      C(a.O, d) && (a.j[c++] = d);
      b++;
    }
    a.j.length = c;
  }
  if (a.o != a.j.length) {
    for (var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], C(e, d) || (a.j[c++] = d, e[d] = 1), b++;
    }
    a.j.length = c;
  }
}
f.get = function(a, b) {
  return C(this.O, a) ? this.O[a] : b;
};
f.set = function(a, b) {
  C(this.O, a) || (this.o++, this.j.push(a));
  this.O[a] = b;
};
f.n = function() {
  return new cb(this);
};
function C(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function eb(a) {
  if ("function" == typeof a.N) {
    return a.N();
  }
  if (n(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ta(a);
}
function fb(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || n(a)) {
      Ya(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.ba) {
        d = a.ba();
      } else {
        if ("function" != typeof a.N) {
          if (ea(a) || n(a)) {
            d = [];
            for (var e = a.length, g = 0;g < e;g++) {
              d.push(g);
            }
          } else {
            d = Ua(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = eb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
}
;function D(a, b) {
  var c;
  if (a instanceof D) {
    this.D = void 0 !== b ? b : a.D, gb(this, a.na), c = a.fb, E(this), this.fb = c, hb(this, a.ia), ib(this, a.Ca), jb(this, a.I), kb(this, a.R.n()), c = a.Oa, E(this), this.Oa = c;
  } else {
    if (a && (c = Ra(String(a)))) {
      this.D = !!b;
      gb(this, c[1] || "", !0);
      var d = c[2] || "";
      E(this);
      this.fb = d ? decodeURIComponent(d) : "";
      hb(this, c[3] || "", !0);
      ib(this, c[4]);
      jb(this, c[5] || "", !0);
      kb(this, c[6] || "", !0);
      c = c[7] || "";
      E(this);
      this.Oa = c ? decodeURIComponent(c) : "";
    } else {
      this.D = !!b, this.R = new lb(null, 0, this.D);
    }
  }
}
f = D.prototype;
f.na = "";
f.fb = "";
f.ia = "";
f.Ca = null;
f.I = "";
f.Oa = "";
f.pc = !1;
f.D = !1;
f.toString = function() {
  var a = [], b = this.na;
  b && a.push(mb(b, nb), ":");
  if (b = this.ia) {
    a.push("//");
    var c = this.fb;
    c && a.push(mb(c, nb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.Ca;
    null != b && a.push(":", String(b));
  }
  if (b = this.I) {
    this.ia && "/" != b.charAt(0) && a.push("/"), a.push(mb(b, "/" == b.charAt(0) ? ob : pb));
  }
  (b = this.R.toString()) && a.push("?", b);
  (b = this.Oa) && a.push("#", mb(b, qb));
  return a.join("");
};
f.n = function() {
  return new D(this);
};
function gb(a, b, c) {
  E(a);
  a.na = c ? b ? decodeURIComponent(b) : "" : b;
  a.na && (a.na = a.na.replace(/:$/, ""));
}
function hb(a, b, c) {
  E(a);
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
}
function ib(a, b) {
  E(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.Ca = b;
  } else {
    a.Ca = null;
  }
}
function jb(a, b, c) {
  E(a);
  a.I = c ? b ? decodeURIComponent(b) : "" : b;
}
function kb(a, b, c) {
  E(a);
  b instanceof lb ? (a.R = b, a.R.ub(a.D)) : (c || (b = mb(b, rb)), a.R = new lb(b, 0, a.D));
}
function F(a, b, c) {
  E(a);
  a.R.set(b, c);
}
function sb(a, b, c) {
  E(a);
  m(c) || (c = [String(c)]);
  tb(a.R, b, c);
}
function G(a) {
  E(a);
  F(a, "zx", sa());
  return a;
}
function E(a) {
  if (a.pc) {
    throw Error("Tried to modify a read-only Uri");
  }
}
f.ub = function(a) {
  this.D = a;
  this.R && this.R.ub(a);
  return this;
};
function ub(a) {
  return a instanceof D ? a.n() : new D(a, void 0);
}
function vb(a, b, c, d) {
  var e = new D(null, void 0);
  a && gb(e, a);
  b && hb(e, b);
  c && ib(e, c);
  d && jb(e, d);
  return e;
}
function mb(a, b) {
  return n(a) ? encodeURI(a).replace(b, wb) : null;
}
function wb(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var nb = /[#\/\?@]/g, pb = /[\#\?:]/g, ob = /[\#\?]/g, rb = /[\#\?@]/g, qb = /#/g;
function lb(a, b, c) {
  this.C = a || null;
  this.D = !!c;
}
function H(a) {
  if (!a.h && (a.h = new cb, a.o = 0, a.C)) {
    for (var b = a.C.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = null, g = null;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = I(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
    }
  }
}
f = lb.prototype;
f.h = null;
f.o = null;
f.add = function(a, b) {
  H(this);
  this.C = null;
  a = I(this, a);
  var c = this.h.get(a);
  c || this.h.set(a, c = []);
  c.push(b);
  this.o++;
  return this;
};
f.remove = function(a) {
  H(this);
  a = I(this, a);
  return this.h.va(a) ? (this.C = null, this.o -= this.h.get(a).length, this.h.remove(a)) : !1;
};
f.va = function(a) {
  H(this);
  a = I(this, a);
  return this.h.va(a);
};
f.ba = function() {
  H(this);
  for (var a = this.h.N(), b = this.h.ba(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], g = 0;g < e.length;g++) {
      c.push(b[d]);
    }
  }
  return c;
};
f.N = function(a) {
  H(this);
  var b = [];
  if (n(a)) {
    this.va(a) && (b = ab(b, this.h.get(I(this, a))));
  } else {
    a = this.h.N();
    for (var c = 0;c < a.length;c++) {
      b = ab(b, a[c]);
    }
  }
  return b;
};
f.set = function(a, b) {
  H(this);
  this.C = null;
  a = I(this, a);
  this.va(a) && (this.o -= this.h.get(a).length);
  this.h.set(a, [b]);
  this.o++;
  return this;
};
f.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
function tb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.C = null, a.h.set(I(a, b), bb(c)), a.o += c.length);
}
f.toString = function() {
  if (this.C) {
    return this.C;
  }
  if (!this.h) {
    return "";
  }
  for (var a = [], b = this.h.ba(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {
      var h = e;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h);
    }
  }
  return this.C = a.join("&");
};
f.n = function() {
  var a = new lb;
  a.C = this.C;
  this.h && (a.h = this.h.n(), a.o = this.o);
  return a;
};
function I(a, b) {
  var c = String(b);
  a.D && (c = c.toLowerCase());
  return c;
}
f.ub = function(a) {
  a && !this.D && (H(this), this.C = null, fb(this.h, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), tb(this, d, a));
  }, this));
  this.D = a;
};
function xb(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function yb(a) {
  return eval("(" + a + ")");
}
function zb(a) {
  var b = [];
  Ab(new Bb, a, b);
  return b.join("");
}
function Bb() {
  this.Za = void 0;
}
function Ab(a, b, c) {
  switch(typeof b) {
    case "string":
      Cb(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if (null == b) {
        c.push("null");
        break;
      }
      if (m(b)) {
        var d = b.length;
        c.push("[");
        for (var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Ab(a, a.Za ? a.Za.call(b, String(g), e) : e, c), e = ",";
        }
        c.push("]");
        break;
      }
      c.push("{");
      d = "";
      for (g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Cb(g, c), c.push(":"), Ab(a, a.Za ? a.Za.call(b, g, e) : e, c), d = ","));
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);;
  }
}
var Db = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Eb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Cb(a, b) {
  b.push('"', a.replace(Eb, function(a) {
    if (a in Db) {
      return Db[a];
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Db[a] = e + b.toString(16);
  }), '"');
}
;function Fb(a) {
  return Gb(a || arguments.callee.caller, []);
}
function Gb(a, b) {
  var c = [];
  if (0 <= Xa(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Hb(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Hb(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Gb(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Hb(a) {
  if (Ib[a]) {
    return Ib[a];
  }
  a = String(a);
  if (!Ib[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ib[a] = b ? b[1] : "[Anonymous]";
  }
  return Ib[a];
}
var Ib = {};
function Jb(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Jb.prototype.Gb = null;
Jb.prototype.Fb = null;
var Kb = 0;
Jb.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Kb++;
  d || q();
  this.za = a;
  this.rc = b;
  delete this.Gb;
  delete this.Fb;
};
Jb.prototype.ac = function(a) {
  this.za = a;
};
function Lb(a) {
  this.sc = a;
  this.Kb = this.kb = this.za = this.Ta = null;
}
function Mb(a, b) {
  this.name = a;
  this.value = b;
}
Mb.prototype.toString = function() {
  return this.name;
};
var Nb = new Mb("SEVERE", 1E3), Ob = new Mb("WARNING", 900), Pb = new Mb("INFO", 800), Qb = new Mb("CONFIG", 700), Rb = new Mb("FINE", 500);
f = Lb.prototype;
f.getParent = function() {
  return this.Ta;
};
f.ac = function(a) {
  this.za = a;
};
function Sb(a) {
  if (a.za) {
    return a.za;
  }
  if (a.Ta) {
    return Sb(a.Ta);
  }
  Pa("Root logger has no level set.");
  return null;
}
f.log = function(a, b, c) {
  if (a.value >= Sb(this).value) {
    for (fa(b) && (b = b()), a = this.oc(a, b, c), b = "log:" + a.rc, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Kb) {
        for (var e = 0, g = void 0;g = c.Kb[e];e++) {
          g(d);
        }
      }
      b = b.getParent();
    }
  }
};
f.oc = function(a, b, c) {
  var d = new Jb(a, String(b), this.sc);
  if (c) {
    d.Gb = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var k = ba("window.location.href");
      if (n(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var u, K, v = !1;
        try {
          u = c.lineNumber || c.Hc || "Not available";
        } catch (r) {
          u = "Not available", v = !0;
        }
        try {
          K = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k;
        } catch (Ja) {
          K = "Not available", v = !0;
        }
        h = !v && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:u, fileName:K, stack:c.stack || "Not available"};
      }
      e = "Message: " + la(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + la(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + la(Fb(g) + "-> ");
    } catch (w) {
      e = "Exception trying to expose exception! You win, we lose. " + w;
    }
    d.Fb = e;
  }
  return d;
};
f.J = function(a, b) {
  this.log(Nb, a, b);
};
f.fa = function(a, b) {
  this.log(Ob, a, b);
};
f.info = function(a, b) {
  this.log(Pb, a, b);
};
var Tb = {}, Ub = null;
function Vb(a) {
  Ub || (Ub = new Lb(""), Tb[""] = Ub, Ub.ac(Qb));
  var b;
  if (!(b = Tb[a])) {
    b = new Lb(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Vb(a.substr(0, c));
    c.kb || (c.kb = {});
    c.kb[d] = b;
    b.Ta = c;
    Tb[a] = b;
  }
  return b;
}
;function J(a, b) {
  a && a.log(Rb, b, void 0);
}
;function L() {
  this.r = Vb("goog.net.BrowserChannel");
}
function Wb(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Xb(a, c) + (d ? " " + d : ""));
}
L.prototype.debug = function(a) {
  this.info(a);
};
function M(a, b, c) {
  a.J((c || "Exception") + b);
}
L.prototype.info = function(a) {
  var b = this.r;
  b && b.info(a, void 0);
};
L.prototype.fa = function(a) {
  var b = this.r;
  b && b.fa(a, void 0);
};
L.prototype.J = function(a) {
  var b = this.r;
  b && b.J(a, void 0);
};
function Xb(a, b) {
  if (!b || b == Yb) {
    return b;
  }
  try {
    var c = yb(b);
    if (c) {
      for (var d = 0;d < c.length;d++) {
        if (m(c[d])) {
          var e = c[d];
          if (!(2 > e.length)) {
            var g = e[1];
            if (m(g) && !(1 > g.length)) {
              var h = g[0];
              if ("noop" != h && "stop" != h) {
                for (var k = 1;k < g.length;k++) {
                  g[k] = "";
                }
              }
            }
          }
        }
      }
    }
    return zb(c);
  } catch (u) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b;
  }
}
;function Zb(a, b) {
  this.P = b ? yb : xb;
}
Zb.prototype.parse = function(a) {
  return this.P(a);
};
function N() {
  0 != $b && (ac[this[ga] || (this[ga] = ++ha)] = this);
}
var $b = 0, ac = {};
N.prototype.mb = !1;
N.prototype.Ka = function() {
  if (!this.mb && (this.mb = !0, this.u(), 0 != $b)) {
    var a = this[ga] || (this[ga] = ++ha);
    delete ac[a];
  }
};
N.prototype.u = function() {
  if (this.Qb) {
    for (;this.Qb.length;) {
      this.Qb.shift()();
    }
  }
};
var bc = "closure_listenable_" + (1E6 * Math.random() | 0);
function cc(a) {
  try {
    return!(!a || !a[bc]);
  } catch (b) {
    return!1;
  }
}
var dc = 0;
function ec(a, b, c, d, e) {
  this.ea = a;
  this.Va = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.Pa = e;
  this.key = ++dc;
  this.ma = this.Ia = !1;
}
function fc(a) {
  a.ma = !0;
  a.ea = null;
  a.Va = null;
  a.src = null;
  a.Pa = null;
}
;function O(a) {
  this.src = a;
  this.s = {};
  this.Ga = 0;
}
O.prototype.add = function(a, b, c, d, e) {
  var g = this.s[a];
  g || (g = this.s[a] = [], this.Ga++);
  var h = gc(g, b, d, e);
  -1 < h ? (a = g[h], c || (a.Ia = !1)) : (a = new ec(b, this.src, a, !!d, e), a.Ia = c, g.push(a));
  return a;
};
O.prototype.remove = function(a, b, c, d) {
  if (!(a in this.s)) {
    return!1;
  }
  var e = this.s[a];
  b = gc(e, b, c, d);
  return-1 < b ? (fc(e[b]), B.splice.call(e, b, 1), 0 == e.length && (delete this.s[a], this.Ga--), !0) : !1;
};
function hc(a, b) {
  var c = b.type;
  if (!(c in a.s)) {
    return!1;
  }
  var d = a.s[c], e = Xa(d, b), g;
  (g = 0 <= e) && B.splice.call(d, e, 1);
  g && (fc(b), 0 == a.s[c].length && (delete a.s[c], a.Ga--));
  return g;
}
O.prototype.Ya = function(a) {
  var b = 0, c;
  for (c in this.s) {
    if (!a || c == a) {
      for (var d = this.s[c], e = 0;e < d.length;e++) {
        ++b, fc(d[e]);
      }
      delete this.s[c];
      this.Ga--;
    }
  }
  return b;
};
O.prototype.xa = function(a, b, c, d) {
  a = this.s[a];
  var e = -1;
  a && (e = gc(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function gc(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.ma && g.ea == b && g.capture == !!c && g.Pa == d) {
      return e;
    }
  }
  return-1;
}
;var ic = !y || y && 9 <= Ma, jc = y && !A("9");
!z || A("528");
Ba && A("1.9b") || y && A("8") || Aa && A("9.5") || z && A("528");
Ba && !A("8") || y && A("9");
function P(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.ka = !1;
  this.Zb = !0;
}
P.prototype.u = function() {
};
P.prototype.Ka = function() {
};
P.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Zb = !1;
};
function kc(a) {
  kc[" "](a);
  return a;
}
kc[" "] = ca;
function Q(a, b) {
  Q.jc(this, "constructor", a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Eb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Ba) {
        var e;
        a: {
          try {
            kc(d.nodeName);
            e = !0;
            break a;
          } catch (g) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Eb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
s(Q, P);
Q.prototype.preventDefault = function() {
  Q.oa.preventDefault.call(this);
  var a = this.Eb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, jc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
Q.prototype.u = function() {
};
var lc = "closure_lm_" + (1E6 * Math.random() | 0), mc = {}, nc = 0;
function oc(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      oc(a, b[g], c, d, e);
    }
    return null;
  }
  c = pc(c);
  if (cc(a)) {
    a = a.Sa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var g = !!d, h = qc(a);
    h || (a[lc] = h = new O(a));
    c = h.add(b, c, !1, d, e);
    c.Va || (d = rc(), c.Va = d, d.src = a, d.ea = c, a.addEventListener ? a.addEventListener(b, d, g) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, d), nc++);
    a = c;
  }
  return a;
}
function rc() {
  var a = sc, b = ic ? function(c) {
    return a.call(b.src, b.ea, c);
  } : function(c) {
    c = a.call(b.src, b.ea, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function tc(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      tc(a, b[g], c, d, e);
    }
  } else {
    c = pc(c), cc(a) ? a.vb(b, c, d, e) : a && (a = qc(a)) && (b = a.xa(b, c, !!d, e)) && uc(b);
  }
}
function uc(a) {
  if ("number" == typeof a || !a || a.ma) {
    return!1;
  }
  var b = a.src;
  if (cc(b)) {
    return hc(b.W, a);
  }
  var c = a.type, d = a.Va;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in mc ? mc[c] : mc[c] = "on" + c, d);
  nc--;
  (c = qc(b)) ? (hc(c, a), 0 == c.Ga && (c.src = null, b[lc] = null)) : fc(a);
  return!0;
}
function vc(a, b, c, d) {
  var e = 1;
  if (a = qc(a)) {
    if (b = a.s[b]) {
      for (b = bb(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.ma && (e &= !1 !== wc(g, d));
      }
    }
  }
  return Boolean(e);
}
function wc(a, b) {
  var c = a.ea, d = a.Pa || a.src;
  a.Ia && uc(a);
  return c.call(d, b);
}
function sc(a, b) {
  if (a.ma) {
    return!0;
  }
  if (!ic) {
    var c = b || ba("window.event"), d = new Q(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, k = c.length - 1;!d.ka && 0 <= k;k--) {
        d.currentTarget = c[k], e &= vc(c[k], g, !0, d);
      }
      for (k = 0;!d.ka && k < c.length;k++) {
        d.currentTarget = c[k], e &= vc(c[k], g, !1, d);
      }
    }
    return e;
  }
  return wc(a, new Q(b, this));
}
function qc(a) {
  a = a[lc];
  return a instanceof O ? a : null;
}
var xc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function pc(a) {
  return fa(a) ? a : a[xc] || (a[xc] = function(b) {
    return a.handleEvent(b);
  });
}
;function R() {
  N.call(this);
  this.W = new O(this);
  this.gc = this;
}
s(R, N);
R.prototype[bc] = !0;
f = R.prototype;
f.tb = null;
f.addEventListener = function(a, b, c, d) {
  oc(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  tc(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.tb;
  if (c) {
    for (b = [];c;c = c.tb) {
      b.push(c);
    }
  }
  var c = this.gc, d = a.type || a;
  if (n(a)) {
    a = new P(a, c);
  } else {
    if (a instanceof P) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new P(d, c);
      Wa(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.ka && 0 <= h;h--) {
      g = a.currentTarget = b[h], e = yc(g, d, !0, a) && e;
    }
  }
  a.ka || (g = a.currentTarget = c, e = yc(g, d, !0, a) && e, a.ka || (e = yc(g, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.ka && h < b.length;h++) {
      g = a.currentTarget = b[h], e = yc(g, d, !1, a) && e;
    }
  }
  return e;
};
f.u = function() {
  R.oa.u.call(this);
  this.W && this.W.Ya(void 0);
  this.tb = null;
};
f.Sa = function(a, b, c, d) {
  return this.W.add(String(a), b, !1, c, d);
};
f.vb = function(a, b, c, d) {
  return this.W.remove(String(a), b, c, d);
};
function yc(a, b, c, d) {
  b = a.W.s[String(b)];
  if (!b) {
    return!0;
  }
  b = bb(b);
  for (var e = !0, g = 0;g < b.length;++g) {
    var h = b[g];
    if (h && !h.ma && h.capture == c) {
      var k = h.ea, u = h.Pa || h.src;
      h.Ia && hc(a.W, h);
      e = !1 !== k.call(u, d) && e;
    }
  }
  return e && !1 != d.Zb;
}
f.xa = function(a, b, c, d) {
  return this.W.xa(String(a), b, c, d);
};
function zc(a, b) {
  R.call(this);
  this.da = a || 1;
  this.qa = b || Ac;
  this.jb = p(this.Gc, this);
  this.sb = q();
}
s(zc, R);
zc.prototype.enabled = !1;
var Ac = l;
f = zc.prototype;
f.l = null;
f.setInterval = function(a) {
  this.da = a;
  this.l && this.enabled ? (this.stop(), this.start()) : this.l && this.stop();
};
f.Gc = function() {
  if (this.enabled) {
    var a = q() - this.sb;
    0 < a && a < 0.8 * this.da ? this.l = this.qa.setTimeout(this.jb, this.da - a) : (this.l && (this.qa.clearTimeout(this.l), this.l = null), this.dispatchEvent(Bc), this.enabled && (this.l = this.qa.setTimeout(this.jb, this.da), this.sb = q()));
  }
};
f.start = function() {
  this.enabled = !0;
  this.l || (this.l = this.qa.setTimeout(this.jb, this.da), this.sb = q());
};
f.stop = function() {
  this.enabled = !1;
  this.l && (this.qa.clearTimeout(this.l), this.l = null);
};
f.u = function() {
  zc.oa.u.call(this);
  this.stop();
  delete this.qa;
};
var Bc = "tick";
function Cc(a, b, c) {
  if (fa(a)) {
    c && (a = p(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = p(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : Ac.setTimeout(a, b || 0);
}
;function Dc() {
}
Dc.prototype.Ab = null;
function Ec(a) {
  var b;
  (b = a.Ab) || (b = {}, Fc(a) && (b[0] = !0, b[1] = !0), b = a.Ab = b);
  return b;
}
;var Gc;
function Hc() {
}
s(Hc, Dc);
function Ic(a) {
  return(a = Fc(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Fc(a) {
  if (!a.Lb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Lb = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Lb;
}
Gc = new Hc;
function Jc(a) {
  R.call(this);
  this.headers = new cb;
  this.hb = a || null;
  this.T = !1;
  this.gb = this.f = null;
  this.Nb = this.Ra = "";
  this.ja = 0;
  this.q = "";
  this.ca = this.qb = this.Qa = this.nb = !1;
  this.Fa = 0;
  this.cb = null;
  this.Yb = Kc;
  this.eb = this.ec = !1;
}
s(Jc, R);
var Kc = "";
Jc.prototype.r = Vb("goog.net.XhrIo");
var Lc = /^https?$/i, Mc = ["POST", "PUT"];
f = Jc.prototype;
f.send = function(a, b, c, d) {
  if (this.f) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ra + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Ra = a;
  this.q = "";
  this.ja = 0;
  this.Nb = b;
  this.nb = !1;
  this.T = !0;
  this.f = this.Cb();
  this.gb = this.hb ? Ec(this.hb) : Ec(Gc);
  this.f.onreadystatechange = p(this.Rb, this);
  try {
    J(this.r, S(this, "Opening Xhr")), this.qb = !0, this.f.open(b, String(a), !0), this.qb = !1;
  } catch (e) {
    J(this.r, S(this, "Error opening Xhr: " + e.message));
    Nc(this, e);
    return;
  }
  a = c || "";
  var g = this.headers.n();
  d && fb(d, function(a, b) {
    g.set(b, a);
  });
  d = Za(g.ba());
  c = l.FormData && a instanceof l.FormData;
  !(0 <= Xa(Mc, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  fb(g, function(a, b) {
    this.f.setRequestHeader(b, a);
  }, this);
  this.Yb && (this.f.responseType = this.Yb);
  "withCredentials" in this.f && (this.f.withCredentials = this.ec);
  try {
    Oc(this), 0 < this.Fa && (this.eb = Pc(this.f), J(this.r, S(this, "Will abort after " + this.Fa + "ms if incomplete, xhr2 " + this.eb)), this.eb ? (this.f.timeout = this.Fa, this.f.ontimeout = p(this.pa, this)) : this.cb = Cc(this.pa, this.Fa, this)), J(this.r, S(this, "Sending request")), this.Qa = !0, this.f.send(a), this.Qa = !1;
  } catch (h) {
    J(this.r, S(this, "Send error: " + h.message)), Nc(this, h);
  }
};
function Pc(a) {
  return y && A(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
}
function $a(a) {
  return "content-type" == a.toLowerCase();
}
f.Cb = function() {
  return this.hb ? Ic(this.hb) : Ic(Gc);
};
f.pa = function() {
  "undefined" != typeof aa && this.f && (this.q = "Timed out after " + this.Fa + "ms, aborting", this.ja = 8, J(this.r, S(this, this.q)), this.dispatchEvent("timeout"), this.abort(8));
};
function Nc(a, b) {
  a.T = !1;
  a.f && (a.ca = !0, a.f.abort(), a.ca = !1);
  a.q = b;
  a.ja = 5;
  Qc(a);
  Rc(a);
}
function Qc(a) {
  a.nb || (a.nb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
f.abort = function(a) {
  this.f && this.T && (J(this.r, S(this, "Aborting")), this.T = !1, this.ca = !0, this.f.abort(), this.ca = !1, this.ja = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Rc(this));
};
f.u = function() {
  this.f && (this.T && (this.T = !1, this.ca = !0, this.f.abort(), this.ca = !1), Rc(this, !0));
  Jc.oa.u.call(this);
};
f.Rb = function() {
  this.mb || (this.qb || this.Qa || this.ca ? Sc(this) : this.vc());
};
f.vc = function() {
  Sc(this);
};
function Sc(a) {
  if (a.T && "undefined" != typeof aa) {
    if (a.gb[1] && 4 == T(a) && 2 == Tc(a)) {
      J(a.r, S(a, "Local request error detected and ignored"));
    } else {
      if (a.Qa && 4 == T(a)) {
        Cc(a.Rb, 0, a);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == T(a)) {
          J(a.r, S(a, "Request complete"));
          a.T = !1;
          try {
            var b = Tc(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  d = !0;
                  break a;
                default:
                  d = !1;
              }
            }
            if (!(c = d)) {
              var e;
              if (e = 0 === b) {
                var g = Ra(String(a.Ra))[1] || null;
                if (!g && self.location) {
                  var h = self.location.protocol, g = h.substr(0, h.length - 1)
                }
                e = !Lc.test(g ? g.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              a.ja = 6;
              var k;
              try {
                k = 2 < T(a) ? a.f.statusText : "";
              } catch (u) {
                J(a.r, "Can not get status: " + u.message), k = "";
              }
              a.q = k + " [" + Tc(a) + "]";
              Qc(a);
            }
          } finally {
            Rc(a);
          }
        }
      }
    }
  }
}
function Rc(a, b) {
  if (a.f) {
    Oc(a);
    var c = a.f, d = a.gb[0] ? ca : null;
    a.f = null;
    a.gb = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      (c = a.r) && c.J("Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Oc(a) {
  a.f && a.eb && (a.f.ontimeout = null);
  "number" == typeof a.cb && (Ac.clearTimeout(a.cb), a.cb = null);
}
f.isActive = function() {
  return!!this.f;
};
function T(a) {
  return a.f ? a.f.readyState : 0;
}
function Tc(a) {
  try {
    return 2 < T(a) ? a.f.status : -1;
  } catch (b) {
    return-1;
  }
}
function Uc(a) {
  try {
    return a.f ? a.f.responseText : "";
  } catch (b) {
    return J(a.r, "Can not get responseText: " + b.message), "";
  }
}
f.Jb = function() {
  return n(this.q) ? this.q : String(this.q);
};
function S(a, b) {
  return b + " [" + a.Nb + " " + a.Ra + " " + Tc(a) + "]";
}
;function Vc() {
  this.Xb = q();
}
new Vc;
Vc.prototype.set = function(a) {
  this.Xb = a;
};
Vc.prototype.reset = function() {
  this.set(q());
};
Vc.prototype.get = function() {
  return this.Xb;
};
function Wc(a) {
  N.call(this);
  this.e = a;
  this.j = {};
}
s(Wc, N);
var Xc = [];
f = Wc.prototype;
f.Sa = function(a, b, c, d) {
  m(b) || (Xc[0] = b, b = Xc);
  for (var e = 0;e < b.length;e++) {
    var g = oc(a, b[e], c || this.handleEvent, d || !1, this.e || this);
    if (!g) {
      break;
    }
    this.j[g.key] = g;
  }
  return this;
};
f.vb = function(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      this.vb(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.e || this, c = pc(c), d = !!d, b = cc(a) ? a.xa(b, c, d, e) : a ? (a = qc(a)) ? a.xa(b, c, d, e) : null : null, b && (uc(b), delete this.j[b.key]);
  }
  return this;
};
f.Ya = function() {
  var a = this.j, b = uc, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
  this.j = {};
};
f.u = function() {
  Wc.oa.u.call(this);
  this.Ya();
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Yc(a, b, c) {
  N.call(this);
  this.qc = a;
  this.da = b;
  this.e = c;
  this.lc = p(this.wc, this);
}
s(Yc, N);
f = Yc.prototype;
f.$a = !1;
f.Wb = 0;
f.l = null;
f.stop = function() {
  this.l && (Ac.clearTimeout(this.l), this.l = null, this.$a = !1);
};
f.u = function() {
  Yc.oa.u.call(this);
  this.stop();
};
f.wc = function() {
  this.l = null;
  this.$a && !this.Wb && (this.$a = !1, Zc(this));
};
function Zc(a) {
  a.l = Cc(a.lc, a.da);
  a.qc.call(a.e);
}
;function U(a, b, c, d, e) {
  this.b = a;
  this.a = b;
  this.Y = c;
  this.B = d;
  this.Ea = e || 1;
  this.pa = $c;
  this.ob = new Wc(this);
  this.Ua = new zc;
  this.Ua.setInterval(ad);
}
f = U.prototype;
f.v = null;
f.F = !1;
f.ta = null;
f.xb = null;
f.Da = null;
f.ra = null;
f.U = null;
f.w = null;
f.X = null;
f.k = null;
f.Ha = 0;
f.K = null;
f.sa = null;
f.q = null;
f.g = -1;
f.$b = !0;
f.Z = !1;
f.la = 0;
f.Wa = null;
var $c = 45E3, ad = 250;
function bd(a, b) {
  switch(a) {
    case 0:
      return "Non-200 return code (" + b + ")";
    case 1:
      return "XMLHTTP failure (no data)";
    case 2:
      return "HttpConnection timeout";
    default:
      return "Unknown error";
  }
}
var cd = {}, dd = {};
function ed() {
  return!y || y && 10 <= Ma;
}
f = U.prototype;
f.S = function(a) {
  this.v = a;
};
f.setTimeout = function(a) {
  this.pa = a;
};
f.cc = function(a) {
  this.la = a;
};
function fd(a, b, c) {
  a.ra = 1;
  a.U = G(b.n());
  a.X = c;
  a.Db = !0;
  gd(a, null);
}
function hd(a, b, c, d, e) {
  a.ra = 1;
  a.U = G(b.n());
  a.X = null;
  a.Db = c;
  e && (a.$b = !1);
  gd(a, d);
}
function gd(a, b) {
  a.Da = q();
  id(a);
  a.w = a.U.n();
  sb(a.w, "t", a.Ea);
  a.Ha = 0;
  a.k = a.b.Ja(a.b.ab() ? b : null);
  0 < a.la && (a.Wa = new Yc(p(a.fc, a, a.k), a.la));
  a.ob.Sa(a.k, "readystatechange", a.Cc);
  var c;
  if (a.v) {
    c = a.v;
    var d = {}, e;
    for (e in c) {
      d[e] = c[e];
    }
    c = d;
  } else {
    c = {};
  }
  a.X ? (a.sa = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.k.send(a.w, a.sa, a.X, c)) : (a.sa = "GET", a.$b && !z && (c.Connection = "close"), a.k.send(a.w, a.sa, null, c));
  a.b.H(jd);
  if (d = a.X) {
    for (c = "", d = d.split("&"), e = 0;e < d.length;e++) {
      var g = d[e].split("=");
      if (1 < g.length) {
        var h = g[0], g = g[1], k = h.split("_");
        c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&");
      }
    }
  } else {
    c = null;
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.Ea + "]: " + a.sa + "\n" + a.w + "\n" + c);
}
f.Cc = function(a) {
  a = a.target;
  var b = this.Wa;
  b && 3 == T(a) ? (this.a.debug("Throttling readystatechange."), b.l || b.Wb ? b.$a = !0 : Zc(b)) : this.fc(a);
};
f.fc = function(a) {
  try {
    if (a == this.k) {
      a: {
        var b = T(this.k), c = this.k.ja, d = Tc(this.k);
        if (!ed() || z && !A("420+")) {
          if (4 > b) {
            break a;
          }
        } else {
          if (3 > b || 3 == b && !Aa && !Uc(this.k)) {
            break a;
          }
        }
        this.Z || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.H(kd) : this.b.H(ld));
        md(this);
        var e = Tc(this.k);
        this.g = e;
        var g = Uc(this.k);
        g || this.a.debug("No response text for uri " + this.w + " status " + e);
        this.F = 200 == e;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.Ea + "]: " + this.sa + "\n" + this.w + "\n" + b + " " + e);
        this.F ? (4 == b && V(this), this.Db ? (nd(this, b, g), Aa && this.F && 3 == b && (this.ob.Sa(this.Ua, Bc, this.Bc), this.Ua.start())) : (Wb(this.a, this.B, g, null), od(this, g)), this.F && !this.Z && (4 == b ? this.b.Ba(this) : (this.F = !1, id(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.q = 3, W(), this.a.fa("XMLHTTP Unknown SID (" + this.B + ")")) : (this.q = 0, W(), this.a.fa("XMLHTTP Bad status " + e + " (" + this.B + ")")), V(this), pd(this));
      }
    } else {
      this.a.fa("Called back with an unexpected xmlhttp");
    }
  } catch (h) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.k && Uc(this.k) ? M(this.a, h, "ResponseText: " + Uc(this.k)) : M(this.a, h, "No response text");
  } finally {
  }
};
function nd(a, b, c) {
  for (var d = !0;!a.Z && a.Ha < c.length;) {
    var e = qd(a, c);
    if (e == dd) {
      4 == b && (a.q = 4, W(), d = !1);
      Wb(a.a, a.B, null, "[Incomplete Response]");
      break;
    } else {
      if (e == cd) {
        a.q = 4;
        W();
        Wb(a.a, a.B, c, "[Invalid Chunk]");
        d = !1;
        break;
      } else {
        Wb(a.a, a.B, e, null), od(a, e);
      }
    }
  }
  4 == b && 0 == c.length && (a.q = 1, W(), d = !1);
  a.F = a.F && d;
  d || (Wb(a.a, a.B, c, "[Invalid Chunked Response]"), V(a), pd(a));
}
f.Bc = function() {
  var a = T(this.k), b = Uc(this.k);
  this.Ha < b.length && (md(this), nd(this, a, b), this.F && 4 != a && id(this));
};
function qd(a, b) {
  var c = a.Ha, d = b.indexOf("\n", c);
  if (-1 == d) {
    return dd;
  }
  c = Number(b.substring(c, d));
  if (isNaN(c)) {
    return cd;
  }
  d += 1;
  if (d + c > b.length) {
    return dd;
  }
  var e = b.substr(d, c);
  a.Ha = d + c;
  return e;
}
function rd(a, b) {
  a.Da = q();
  id(a);
  var c = b ? window.location.hostname : "";
  a.w = a.U.n();
  F(a.w, "DOMAIN", c);
  F(a.w, "t", a.Ea);
  try {
    a.K = new ActiveXObject("htmlfile");
  } catch (d) {
    a.a.J("ActiveX blocked");
    V(a);
    a.q = 7;
    W();
    pd(a);
    return;
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"\x3c/script>');
  e += "</body></html>";
  a.K.open();
  a.K.write(e);
  a.K.close();
  a.K.parentWindow.m = p(a.zc, a);
  a.K.parentWindow.d = p(a.Vb, a, !0);
  a.K.parentWindow.rpcClose = p(a.Vb, a, !1);
  c = a.K.createElement("div");
  a.K.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.w + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.Ea + "]: GET\n" + a.w);
  a.b.H(jd);
}
f.zc = function(a) {
  X(p(this.yc, this, a), 0);
};
f.yc = function(a) {
  if (!this.Z) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + Xb(b, a));
    md(this);
    od(this, a);
    id(this);
  }
};
f.Vb = function(a) {
  X(p(this.xc, this, a), 0);
};
f.xc = function(a) {
  this.Z || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), V(this), this.F = a, this.b.Ba(this), this.b.H(sd));
};
f.cancel = function() {
  this.Z = !0;
  V(this);
};
function id(a) {
  a.xb = q() + a.pa;
  td(a, a.pa);
}
function td(a, b) {
  if (null != a.ta) {
    throw Error("WatchDog timer not null");
  }
  a.ta = X(p(a.Ac, a), b);
}
function md(a) {
  a.ta && (l.clearTimeout(a.ta), a.ta = null);
}
f.Ac = function() {
  this.ta = null;
  var a = q();
  0 <= a - this.xb ? (this.F && this.a.J("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.w), 2 != this.ra && this.b.H(kd), V(this), this.q = 2, W(), pd(this)) : (this.a.fa("WatchDog timer called too early"), td(this, this.xb - a));
};
function pd(a) {
  a.b.Mb() || a.Z || a.b.Ba(a);
}
function V(a) {
  md(a);
  var b = a.Wa;
  b && "function" == typeof b.Ka && b.Ka();
  a.Wa = null;
  a.Ua.stop();
  a.ob.Ya();
  a.k && (b = a.k, a.k = null, b.abort(), b.Ka());
  a.K && (a.K = null);
}
f.Jb = function() {
  return this.q;
};
function od(a, b) {
  try {
    a.b.Sb(a, b), a.b.H(sd);
  } catch (c) {
    M(a.a, c, "Error in httprequest callback");
  }
}
;function ud(a, b, c, d, e) {
  (new L).debug("TestLoadImageWithRetries: " + e);
  if (0 == d) {
    c(!1);
  } else {
    var g = e || 0;
    d--;
    vd(a, b, function(e) {
      e ? c(!0) : l.setTimeout(function() {
        ud(a, b, c, d, g);
      }, g);
    });
  }
}
function vd(a, b, c) {
  var d = new L;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image;
  e.onload = function() {
    try {
      d.debug("TestLoadImage: loaded"), wd(e), c(!0);
    } catch (a) {
      M(d, a);
    }
  };
  e.onerror = function() {
    try {
      d.debug("TestLoadImage: error"), wd(e), c(!1);
    } catch (a) {
      M(d, a);
    }
  };
  e.onabort = function() {
    try {
      d.debug("TestLoadImage: abort"), wd(e), c(!1);
    } catch (a) {
      M(d, a);
    }
  };
  e.ontimeout = function() {
    try {
      d.debug("TestLoadImage: timeout"), wd(e), c(!1);
    } catch (a) {
      M(d, a);
    }
  };
  l.setTimeout(function() {
    if (e.ontimeout) {
      e.ontimeout();
    }
  }, b);
  e.src = a;
}
function wd(a) {
  a.onload = null;
  a.onerror = null;
  a.onabort = null;
  a.ontimeout = null;
}
;function xd(a, b) {
  this.b = a;
  this.a = b;
  this.P = new Zb(0, !0);
}
f = xd.prototype;
f.v = null;
f.A = null;
f.Xa = !1;
f.dc = null;
f.Ma = null;
f.rb = null;
f.I = null;
f.c = null;
f.g = -1;
f.L = null;
f.ua = null;
f.S = function(a) {
  this.v = a;
};
f.bc = function(a) {
  this.P = a;
};
f.lb = function(a) {
  this.I = a;
  a = yd(this.b, this.I);
  W();
  this.dc = q();
  var b = this.b.Hb;
  null != b ? (this.L = this.b.correctHostPrefix(b[0]), (this.ua = b[1]) ? (this.c = 1, zd(this)) : (this.c = 2, Ad(this))) : (sb(a, "MODE", "init"), this.A = new U(this, this.a, void 0, void 0, void 0), this.A.S(this.v), hd(this.A, a, !1, null, !0), this.c = 0);
};
function zd(a) {
  var b = Bd(a.b, a.ua, "/mail/images/cleardot.gif");
  G(b);
  ud(b.toString(), 5E3, p(a.mc, a), 3, 2E3);
  a.H(jd);
}
f.mc = function(a) {
  if (a) {
    this.c = 2, Ad(this);
  } else {
    W();
    var b = this.b;
    b.a.debug("Test Connection Blocked");
    b.g = b.V.g;
    Z(b, 9);
  }
  a && this.H(ld);
};
function Ad(a) {
  a.a.debug("TestConnection: starting stage 2");
  var b = a.b.Ec;
  if (null != b) {
    a.a.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), W(), b ? (W(), Cd(a.b, a, !1)) : (W(), Cd(a.b, a, !0));
  } else {
    if (a.A = new U(a, a.a, void 0, void 0, void 0), a.A.S(a.v), b = Dd(a.b, a.L, a.I), W(), ed()) {
      sb(b, "TYPE", "xmlhttp"), hd(a.A, b, !1, a.L, !1);
    } else {
      sb(b, "TYPE", "html");
      var c = a.A;
      a = Boolean(a.L);
      c.ra = 3;
      c.U = G(b.n());
      rd(c, a);
    }
  }
}
f.Ja = function(a) {
  return this.b.Ja(a);
};
f.abort = function() {
  this.A && (this.A.cancel(), this.A = null);
  this.g = -1;
};
f.Mb = function() {
  return!1;
};
f.Sb = function(a, b) {
  this.g = a.g;
  if (0 == this.c) {
    if (this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.P.parse(b);
      } catch (d) {
        M(this.a, d);
        Ed(this.b, this);
        return;
      }
      this.L = this.b.correctHostPrefix(c[0]);
      this.ua = c[1];
    } else {
      this.a.debug("TestConnection: Null responseText"), Ed(this.b, this);
    }
  } else {
    if (2 == this.c) {
      if (this.Xa) {
        W(), this.rb = q();
      } else {
        if ("11111" == b) {
          if (W(), this.Xa = !0, this.Ma = q(), c = this.Ma - this.dc, ed() || 500 > c) {
            this.g = 200, this.A.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), W(), Cd(this.b, this, !0);
          }
        } else {
          W(), this.Ma = this.rb = q(), this.Xa = !1;
        }
      }
    }
  }
};
f.Ba = function() {
  this.g = this.A.g;
  if (!this.A.F) {
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? W() : 2 == this.c && W(), Ed(this.b, this);
  } else {
    if (0 == this.c) {
      this.a.debug("TestConnection: request complete for initial check"), this.ua ? (this.c = 1, zd(this)) : (this.c = 2, Ad(this));
    } else {
      if (2 == this.c) {
        this.a.debug("TestConnection: request complete for stage 2");
        var a = !1;
        (a = ed() ? this.Xa : 200 > this.rb - this.Ma ? !1 : !0) ? (this.a.debug("Test connection succeeded; using streaming connection"), W(), Cd(this.b, this, !0)) : (this.a.debug("Test connection failed; not using streaming"), W(), Cd(this.b, this, !1));
      }
    }
  }
};
f.ab = function() {
  return this.b.ab();
};
f.isActive = function() {
  return this.b.isActive();
};
f.H = function(a) {
  this.b.H(a);
};
function Fd(a, b, c) {
  this.Bb = a || null;
  this.c = Gd;
  this.t = [];
  this.Q = [];
  this.a = new L;
  this.P = new Zb(0, !0);
  this.Hb = b || null;
  this.Ec = null != c ? c : null;
}
function Hd(a, b) {
  this.Pb = a;
  this.map = b;
}
f = Fd.prototype;
f.v = null;
f.wa = null;
f.p = null;
f.i = null;
f.I = null;
f.Na = null;
f.zb = null;
f.L = null;
f.ic = !0;
f.Aa = 0;
f.tc = 0;
f.La = !1;
f.e = null;
f.G = null;
f.M = null;
f.$ = null;
f.V = null;
f.wb = null;
f.hc = !0;
f.ya = -1;
f.Ob = -1;
f.g = -1;
f.aa = 0;
f.ga = 0;
f.kc = 5E3;
f.Dc = 1E4;
f.pb = 2;
f.Ib = 2E4;
f.la = 0;
f.bb = !1;
f.ha = 8;
var Gd = 1, Id = new R;
function Jd(a) {
  P.call(this, "statevent", a);
}
s(Jd, P);
function Kd(a, b) {
  P.call(this, "timingevent", a);
  this.size = b;
}
s(Kd, P);
var jd = 1, ld = 2, kd = 3, sd = 4;
function Ld(a) {
  P.call(this, "serverreachability", a);
}
s(Ld, P);
var Yb = "y2f%";
f = Fd.prototype;
f.lb = function(a, b, c, d, e) {
  this.a.debug("connect()");
  W();
  this.I = b;
  this.wa = c || {};
  d && void 0 !== e && (this.wa.OSID = d, this.wa.OAID = e);
  this.a.debug("connectTest_()");
  Md(this) && (this.V = new xd(this, this.a), this.V.S(this.v), this.V.bc(this.P), this.V.lb(a));
};
f.disconnect = function() {
  this.a.debug("disconnect()");
  Nd(this);
  if (3 == this.c) {
    var a = this.Aa++, b = this.Na.n();
    F(b, "SID", this.Y);
    F(b, "RID", a);
    F(b, "TYPE", "terminate");
    Od(this, b);
    a = new U(this, this.a, this.Y, a, void 0);
    a.ra = 2;
    a.U = G(b.n());
    (new Image).src = a.U;
    a.Da = q();
    id(a);
  }
  Pd(this);
};
function Nd(a) {
  a.V && (a.V.abort(), a.V = null);
  a.i && (a.i.cancel(), a.i = null);
  a.M && (l.clearTimeout(a.M), a.M = null);
  Qd(a);
  a.p && (a.p.cancel(), a.p = null);
  a.G && (l.clearTimeout(a.G), a.G = null);
}
f.S = function(a) {
  this.v = a;
};
f.cc = function(a) {
  this.la = a;
};
f.Mb = function() {
  return 0 == this.c;
};
f.bc = function(a) {
  this.P = a;
};
function Rd(a) {
  a.p || a.G || (a.G = X(p(a.Ub, a), 0), a.aa = 0);
}
f.Ub = function(a) {
  this.G = null;
  this.a.debug("startForwardChannel_");
  if (Md(this)) {
    if (this.c == Gd) {
      if (a) {
        this.a.J("Not supposed to retry the open");
      } else {
        this.a.debug("open_()");
        this.Aa = Math.floor(1E5 * Math.random());
        a = this.Aa++;
        var b = new U(this, this.a, "", a, void 0);
        b.S(this.v);
        var c = Sd(this), d = this.Na.n();
        F(d, "RID", a);
        this.Bb && F(d, "CVER", this.Bb);
        Od(this, d);
        fd(b, d, c);
        this.p = b;
        this.c = 2;
      }
    } else {
      3 == this.c && (a ? Td(this, a) : 0 == this.t.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.p ? this.a.J("startForwardChannel_ returned: connection already in progress") : (Td(this), this.a.debug("startForwardChannel_ finished, sent request")));
    }
  }
};
function Td(a, b) {
  var c, d;
  b ? 6 < a.ha ? (a.t = a.Q.concat(a.t), a.Q.length = 0, c = a.Aa - 1, d = Sd(a)) : (c = b.B, d = b.X) : (c = a.Aa++, d = Sd(a));
  var e = a.Na.n();
  F(e, "SID", a.Y);
  F(e, "RID", c);
  F(e, "AID", a.ya);
  Od(a, e);
  c = new U(a, a.a, a.Y, c, a.aa + 1);
  c.S(a.v);
  c.setTimeout(Math.round(0.5 * a.Ib) + Math.round(0.5 * a.Ib * Math.random()));
  a.p = c;
  fd(c, e, d);
}
function Od(a, b) {
  if (a.e) {
    var c = a.e.getAdditionalParams(a);
    c && fb(c, function(a, c) {
      F(b, c, a);
    });
  }
}
function Sd(a) {
  var b = Math.min(a.t.length, 1E3), c = ["count=" + b], d;
  6 < a.ha && 0 < b ? (d = a.t[0].Pb, c.push("ofs=" + d)) : d = 0;
  for (var e = 0;e < b;e++) {
    var g = a.t[e].Pb, h = a.t[e].map, g = 6 >= a.ha ? e : g - d;
    try {
      fb(h, function(a, b) {
        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a));
      });
    } catch (k) {
      c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, h);
    }
  }
  a.Q = a.Q.concat(a.t.splice(0, b));
  return c.join("&");
}
function Ud(a) {
  a.i || a.M || (a.yb = 1, a.M = X(p(a.Tb, a), 0), a.ga = 0);
}
function Vd(a) {
  if (a.i || a.M) {
    return a.a.J("Request already in progress"), !1;
  }
  if (3 <= a.ga) {
    return!1;
  }
  a.a.debug("Going to retry GET");
  a.yb++;
  a.M = X(p(a.Tb, a), Wd(a, a.ga));
  a.ga++;
  return!0;
}
f.Tb = function() {
  this.M = null;
  if (Md(this)) {
    this.a.debug("Creating new HttpRequest");
    this.i = new U(this, this.a, this.Y, "rpc", this.yb);
    this.i.S(this.v);
    this.i.cc(this.la);
    var a = this.zb.n();
    F(a, "RID", "rpc");
    F(a, "SID", this.Y);
    F(a, "CI", this.wb ? "0" : "1");
    F(a, "AID", this.ya);
    Od(this, a);
    if (ed()) {
      F(a, "TYPE", "xmlhttp"), hd(this.i, a, !0, this.L, !1);
    } else {
      F(a, "TYPE", "html");
      var b = this.i, c = Boolean(this.L);
      b.ra = 3;
      b.U = G(a.n());
      rd(b, c);
    }
    this.a.debug("New Request created");
  }
};
function Md(a) {
  if (a.e) {
    var b = a.e.okToMakeRequest(a);
    if (0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), !1;
    }
  }
  return!0;
}
function Cd(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.wb = a.hc && c;
  a.g = b.g;
  a.a.debug("connectChannel_()");
  a.nc(Gd, 0);
  a.Na = yd(a, a.I);
  Rd(a);
}
function Ed(a, b) {
  a.a.debug("Test Connection Failed");
  a.g = b.g;
  Z(a, 2);
}
f.Sb = function(a, b) {
  if (0 != this.c && (this.i == a || this.p == a)) {
    if (this.g = a.g, this.p == a && 3 == this.c) {
      if (7 < this.ha) {
        var c;
        try {
          c = this.P.parse(b);
        } catch (d) {
          c = null;
        }
        if (m(c) && 3 == c.length) {
          var e = c;
          if (0 == e[0]) {
            a: {
              if (this.a.debug("Server claims our backchannel is missing."), this.M) {
                this.a.debug("But we are currently starting the request.");
              } else {
                if (this.i) {
                  if (this.i.Da + 3E3 < this.p.Da) {
                    Qd(this), this.i.cancel(), this.i = null;
                  } else {
                    break a;
                  }
                } else {
                  this.a.fa("We do not have a BackChannel established");
                }
                Vd(this);
                W();
              }
            }
          } else {
            this.Ob = e[1], c = this.Ob - this.ya, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.wb && 0 == this.ga && !this.$ && (this.$ = X(p(this.uc, this), 6E3)));
          }
        } else {
          this.a.debug("Bad POST response data returned"), Z(this, 11);
        }
      } else {
        b != Yb && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11));
      }
    } else {
      if (this.i == a && Qd(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.P.parse(b);
        for (var e = this.e && this.e.channelHandleMultipleArrays ? [] : null, g = 0;g < c.length;g++) {
          var h = c[g];
          this.ya = h[0];
          h = h[1];
          2 == this.c ? "c" == h[0] ? (this.Y = h[1], this.L = this.correctHostPrefix(h[2]), h = h[3], this.ha = null != h ? h : 6, this.c = 3, this.e && this.e.channelOpened(this), this.zb = Dd(this, this.L, this.I), Ud(this)) : "stop" == h[0] && Z(this, 7) : 3 == this.c && ("stop" == h[0] ? (e && 0 != e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != h[0] && (e ? e.push(h) : this.e && this.e.channelHandleArray(this, h)), this.ga = 0);
        }
        e && 0 != e.length && this.e.channelHandleMultipleArrays(this, e);
      }
    }
  }
};
f.correctHostPrefix = function(a) {
  return this.ic ? this.e ? this.e.correctHostPrefix(a) : a : null;
};
f.uc = function() {
  null != this.$ && (this.$ = null, this.i.cancel(), this.i = null, Vd(this), W());
};
function Qd(a) {
  null != a.$ && (l.clearTimeout(a.$), a.$ = null);
}
f.Ba = function(a) {
  this.a.debug("Request complete");
  var b;
  if (this.i == a) {
    Qd(this), this.i = null, b = 2;
  } else {
    if (this.p == a) {
      this.p = null, b = 1;
    } else {
      return;
    }
  }
  this.g = a.g;
  if (0 != this.c) {
    if (a.F) {
      1 == b ? (q(), Id.dispatchEvent(new Kd(Id, a.X ? a.X.length : 0)), Rd(this), this.Q.length = 0) : Ud(this);
    } else {
      var c = a.Jb();
      if (3 == c || 7 == c || 0 == c && 0 < this.g) {
        this.a.debug("Not retrying due to error type");
      } else {
        this.a.debug("Maybe retrying, last error: " + bd(c, this.g));
        var d;
        if (d = 1 == b) {
          this.p || this.G ? (this.a.J("Request already in progress"), d = !1) : this.c == Gd || this.aa >= (this.La ? 0 : this.pb) ? d = !1 : (this.a.debug("Going to retry POST"), this.G = X(p(this.Ub, this, a), Wd(this, this.aa)), this.aa++, d = !0);
        }
        if (d || 2 == b && Vd(this)) {
          return;
        }
        this.a.debug("Exceeded max number of retries");
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2);
      }
    }
  }
};
function Wd(a, b) {
  var c = a.kc + Math.floor(Math.random() * a.Dc);
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b;
}
f.nc = function(a) {
  if (!(0 <= Xa(arguments, this.c))) {
    throw Error("Unexpected channel state: " + this.c);
  }
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if (2 == b || 9 == b) {
    var c = null;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = p(a.Fc, a);
    c || (c = new D("//www.google.com/images/cleardot.gif"), G(c));
    vd(c.toString(), 1E4, d);
  } else {
    W();
  }
  Xd(a, b);
}
f.Fc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), W()) : (this.a.info("Failed to ping google.com"), W(), Xd(this, 8));
};
function Xd(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.c = 0;
  a.e && a.e.channelError(a, b);
  Pd(a);
  Nd(a);
}
function Pd(a) {
  a.c = 0;
  a.g = -1;
  if (a.e) {
    if (0 == a.Q.length && 0 == a.t.length) {
      a.e.channelClosed(a);
    } else {
      a.a.debug("Number of undelivered maps, pending: " + a.Q.length + ", outgoing: " + a.t.length);
      var b = bb(a.Q), c = bb(a.t);
      a.Q.length = 0;
      a.t.length = 0;
      a.e.channelClosed(a, b, c);
    }
  }
}
function yd(a, b) {
  var c = Bd(a, null, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c;
}
function Dd(a, b, c) {
  b = Bd(a, a.ab() ? b : null, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b;
}
function Bd(a, b, c) {
  var d = ub(c);
  if ("" != d.ia) {
    b && hb(d, b + "." + d.ia), ib(d, d.Ca);
  } else {
    var e = window.location, d = vb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.wa && fb(a.wa, function(a, b) {
    F(d, b, a);
  });
  F(d, "VER", a.ha);
  Od(a, d);
  return d;
}
f.Ja = function(a) {
  if (a && !this.bb) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new Jc;
  a.ec = this.bb;
  return a;
};
f.isActive = function() {
  return!!this.e && this.e.isActive(this);
};
function X(a, b) {
  if (!fa(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return l.setTimeout(function() {
    a();
  }, b);
}
f.H = function() {
  Id.dispatchEvent(new Ld(Id));
};
function W() {
  Id.dispatchEvent(new Jd(Id));
}
f.ab = function() {
  return this.bb || !ed();
};
function Yd() {
}
f = Yd.prototype;
f.channelHandleMultipleArrays = null;
f.okToMakeRequest = function() {
  return 0;
};
f.channelOpened = function() {
};
f.channelHandleArray = function() {
};
f.channelError = function() {
};
f.channelClosed = function() {
};
f.getAdditionalParams = function() {
  return{};
};
f.getNetworkTestImageUri = function() {
  return null;
};
f.isActive = function() {
  return!0;
};
f.badMapError = function() {
};
f.correctHostPrefix = function(a) {
  return a;
};
var $, Zd, $d = [].slice;
Zd = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, g, h, k, u, K, v, r, Ja, w, Y;
  r = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  m(b || "string" === typeof b) && (b = {});
  K = b.reconnectTime || 3E3;
  c = b.extraHeaders || null;
  d = b.extraParams || null;
  null !== b.affinity && (d || (d = {}), b.affinityParam || (b.affinityParam = "a"), this.affinity = b.affinity || sa(), d[b.affinityParam] = this.affinity);
  Y = function(a) {
    r.readyState = r.readyState = a;
  };
  Y(this.CLOSED);
  w = null;
  k = b.Ic;
  e = function() {
    var a, b;
    b = arguments[0];
    a = 2 <= arguments.length ? $d.call(arguments, 1) : [];
    try {
      return "function" === typeof r[b] ? r[b].apply(r, a) : void 0;
    } catch (c) {
      throw a = c, "undefined" !== typeof console && null !== console && console.error(a.stack), a;
    }
  };
  g = new Yd;
  g.channelOpened = function() {
    k = w;
    Y($.OPEN);
    return e("onopen");
  };
  h = null;
  g.channelError = function(a, b) {
    var c;
    c = Zd[b];
    h = b;
    r.readyState !== $.CLOSED && Y($.ib);
    try {
      return e("onerror", c, b);
    } catch (d) {
    }
  };
  v = null;
  g.channelClosed = function(a, c, d) {
    var g;
    if (r.readyState !== $.CLOSED) {
      w = null;
      a = h ? Zd[h] : "Closed";
      Y($.CLOSED);
      b.reconnect && 7 !== h && 0 !== h && (g = 6 === h ? 0 : K, clearTimeout(v), v = setTimeout(u, g));
      try {
        e("onclose", a, c, d);
      } catch (k) {
      }
      return h = null;
    }
  };
  g.channelHandleArray = function(a, b) {
    return e("onmessage", b);
  };
  u = function() {
    if (w) {
      throw Error("Reconnect() called from invalid state");
    }
    Y($.CONNECTING);
    e("onconnecting");
    clearTimeout(v);
    w = new Fd(b.appVersion, null != k ? k.Hb : void 0);
    b.crossDomainXhr && (w.bb = !0);
    w.e = g;
    c && w.S(c);
    h = null;
    if (b.failFast) {
      var t = w;
      t.La = !0;
      t.a.info("setFailFast: true");
      (t.p || t.G) && t.aa > (t.La ? 0 : t.pb) && (t.a.info("Retry count " + t.aa + " > new maxRetries " + (t.La ? 0 : t.pb) + ". Fail immediately!"), t.p ? (t.p.cancel(), t.Ba(t.p)) : (l.clearTimeout(t.G), t.G = null, Z(t, 2)));
    }
    return w.lb("" + a + "/test", "" + a + "/bind", d, null != k ? k.Y : void 0, null != k ? k.ya : void 0);
  };
  this.open = function() {
    if (r.readyState !== r.CLOSED) {
      throw Error("Already open");
    }
    return u();
  };
  this.close = function() {
    clearTimeout(v);
    h = 0;
    if (r.readyState !== $.CLOSED) {
      return Y($.ib), w.disconnect();
    }
  };
  this.sendMap = Ja = function(a) {
    var b;
    if ((b = r.readyState) === $.ib || b === $.CLOSED) {
      throw Error("Cannot send to a closed connection");
    }
    b = w;
    if (0 == b.c) {
      throw Error("Invalid operation: sending map when state is closed");
    }
    1E3 == b.t.length && b.a.J("Already have 1000 queued maps upon queueing " + zb(a));
    b.t.push(new Hd(b.tc++, a));
    2 != b.c && 3 != b.c || Rd(b);
  };
  this.send = function(a) {
    return "string" === typeof a ? Ja({_S:a}) : Ja({JSON:zb(a)});
  };
  u();
  return this;
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.ib = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = $;
var Image, XMLHttpRequest, ae, be, window;
ae = require("request");
Image = function() {
  this.__defineSetter__("src", function(a) {
    return function(b) {
      b = b.toString();
      b.match(/^\/\//) && (b = "http:" + b);
      return ae(b, function(b) {
        return null != b ? "function" === typeof a.onerror ? a.onerror() : void 0 : "function" === typeof a.onload ? a.onload() : void 0;
      });
    };
  }(this));
  return this;
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
Fd.prototype.Ja = function() {
  var a;
  a = new Jc;
  a.Cb = function() {
    return new XMLHttpRequest;
  };
  return a;
};
l = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, console:console, location:null, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
be = require("url");
exports.setDefaultLocation = function(a) {
  "string" === typeof a && (a = be.parse(a));
  return window.location = a;
};

})();
