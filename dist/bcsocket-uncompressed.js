(function(){
function f(a) {
  throw a;
}
var h = void 0, j = !0, k = null, p = !1;
function r() {
  return function() {
  }
}
function t(a) {
  return function(b) {
    this[a] = b
  }
}
function aa(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var u, ca = ca || {}, v = this;
function da(a) {
  for(var a = a.split("."), b = v, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function ea() {
}
function fa(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function w(a) {
  return"array" == fa(a)
}
function ga(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function x(a) {
  return"string" == typeof a
}
function ha(a) {
  return"function" == fa(a)
}
function y(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ja = 0;
function ka(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function la(a, b, c) {
  a || f(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function z(a, b, c) {
  z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
  return z.apply(k, arguments)
}
var A = Date.now || function() {
  return+new Date
};
function B(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.oa = b.prototype;
  a.prototype = new c
}
;function ma(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function na(a) {
  if(!oa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
  return a
}
var pa = /&/g, qa = /</g, ra = />/g, sa = /\"/g, oa = /[&<>\"]/;
var ta, ua, va, wa;
function xa() {
  return v.navigator ? v.navigator.userAgent : k
}
wa = va = ua = ta = p;
var za;
if(za = xa()) {
  var Aa = v.navigator;
  ta = 0 == za.indexOf("Opera");
  ua = !ta && -1 != za.indexOf("MSIE");
  va = !ta && -1 != za.indexOf("WebKit");
  wa = !ta && !va && "Gecko" == Aa.product
}
var Ba = ta, C = ua, Ca = wa, D = va, Da = v.navigator, Ea = -1 != (Da && Da.platform || "").indexOf("Mac");
function Fa() {
  var a = v.document;
  return a ? a.documentMode : h
}
var Ga;
a: {
  var Ha = "", Ia;
  if(Ba && v.opera) {
    var Ja = v.opera.version, Ha = "function" == typeof Ja ? Ja() : Ja
  }else {
    if(Ca ? Ia = /rv\:([^\);]+)(\)|;)/ : C ? Ia = /MSIE\s+([^\);]+)(\)|;)/ : D && (Ia = /WebKit\/(\S+)/), Ia) {
      var Ka = Ia.exec(xa()), Ha = Ka ? Ka[1] : ""
    }
  }
  if(C) {
    var La = Fa();
    if(La > parseFloat(Ha)) {
      Ga = String(La);
      break a
    }
  }
  Ga = Ha
}
var Ma = {};
function E(a) {
  var b;
  if(!(b = Ma[a])) {
    b = 0;
    for(var c = String(Ga).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var i = c[g] || "", l = d[g] || "", q = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = q.exec(i) || ["", "", ""], s = m.exec(l) || ["", "", ""];
        if(0 == n[0].length && 0 == s[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == s[2].length) ? -1 : (0 == n[2].length) > (0 == s[2].length) ? 1 : 0) || (n[2] < s[2] ? -1 : n[2] > s[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ma[a] = 0 <= b
  }
  return b
}
var Na = v.document, Oa = !Na || !C ? h : Fa() || ("CSS1Compat" == Na.compatMode ? parseInt(Ga, 10) : 5);
function Pa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Pa) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
B(Pa, Error);
Pa.prototype.name = "CustomError";
function Qa(a, b) {
  b.unshift(a);
  Pa.call(this, ma.apply(k, b));
  b.shift();
  this.Ic = a
}
B(Qa, Pa);
Qa.prototype.name = "AssertionError";
function Ra(a, b) {
  f(new Qa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Sa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ua(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Va.length;g++) {
      c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var F = Array.prototype, Xa = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(x(a)) {
    return!x(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ya = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = x(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
};
function Za(a) {
  return F.concat.apply(F, arguments)
}
function $a(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function ab(a) {
  if("function" == typeof a.L) {
    return a.L()
  }
  if(x(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ta(a)
}
function bb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || x(a)) {
      Ya(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ga) {
        d = a.ga()
      }else {
        if("function" != typeof a.L) {
          if(ga(a) || x(a)) {
            d = [];
            for(var e = a.length, g = 0;g < e;g++) {
              d.push(g)
            }
          }else {
            d = Ua(a)
          }
        }else {
          d = h
        }
      }
      for(var e = ab(a), g = e.length, i = 0;i < g;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
;function cb(a, b) {
  this.N = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof cb ? (c = a.ga(), d = a.L()) : (c = Ua(a), d = Ta(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
u = cb.prototype;
u.f = 0;
u.$b = 0;
u.L = function() {
  db(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.N[this.j[b]])
  }
  return a
};
u.ga = function() {
  db(this);
  return this.j.concat()
};
u.ea = function(a) {
  return eb(this.N, a)
};
u.remove = function(a) {
  return eb(this.N, a) ? (delete this.N[a], this.f--, this.$b++, this.j.length > 2 * this.f && db(this), j) : p
};
function db(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      eb(a.N, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], eb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
u.get = function(a, b) {
  return eb(this.N, a) ? this.N[a] : b
};
u.set = function(a, b) {
  eb(this.N, a) || (this.f++, this.j.push(a), this.$b++);
  this.N[a] = b
};
u.n = function() {
  return new cb(this)
};
function eb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function H(a, b) {
  var c;
  if(a instanceof H) {
    this.A = b !== h ? b : a.A, fb(this, a.na), c = a.Xa, I(this), this.Xa = c, gb(this, a.fa), hb(this, a.za), ib(this, a.G), jb(this, a.Q.n()), c = a.Ja, I(this), this.Ja = c
  }else {
    if(a && (c = String(a).match(Sa))) {
      this.A = !!b;
      fb(this, c[1] || "", j);
      var d = c[2] || "";
      I(this);
      this.Xa = d ? decodeURIComponent(d) : "";
      gb(this, c[3] || "", j);
      hb(this, c[4]);
      ib(this, c[5] || "", j);
      jb(this, c[6] || "", j);
      c = c[7] || "";
      I(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.A = !!b, this.Q = new kb(k, 0, this.A)
    }
  }
}
u = H.prototype;
u.na = "";
u.Xa = "";
u.fa = "";
u.za = k;
u.G = "";
u.Ja = "";
u.lc = p;
u.A = p;
u.toString = function() {
  var a = [], b = this.na;
  b && a.push(lb(b, mb), ":");
  if(b = this.fa) {
    a.push("//");
    var c = this.Xa;
    c && a.push(lb(c, mb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.za;
    b != k && a.push(":", String(b))
  }
  if(b = this.G) {
    this.fa && "/" != b.charAt(0) && a.push("/"), a.push(lb(b, "/" == b.charAt(0) ? nb : ob))
  }
  (b = this.Q.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", lb(b, pb));
  return a.join("")
};
u.n = function() {
  return new H(this)
};
function fb(a, b, c) {
  I(a);
  a.na = c ? b ? decodeURIComponent(b) : "" : b;
  a.na && (a.na = a.na.replace(/:$/, ""))
}
function gb(a, b, c) {
  I(a);
  a.fa = c ? b ? decodeURIComponent(b) : "" : b
}
function hb(a, b) {
  I(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.za = b) : a.za = k
}
function ib(a, b, c) {
  I(a);
  a.G = c ? b ? decodeURIComponent(b) : "" : b
}
function jb(a, b, c) {
  I(a);
  b instanceof kb ? (a.Q = b, a.Q.nb(a.A)) : (c || (b = lb(b, qb)), a.Q = new kb(b, 0, a.A))
}
function J(a, b, c) {
  I(a);
  a.Q.set(b, c)
}
function rb(a, b, c) {
  I(a);
  w(c) || (c = [String(c)]);
  sb(a.Q, b, c)
}
function K(a) {
  I(a);
  J(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ A()).toString(36));
  return a
}
function I(a) {
  a.lc && f(Error("Tried to modify a read-only Uri"))
}
u.nb = function(a) {
  this.A = a;
  this.Q && this.Q.nb(a);
  return this
};
function lb(a, b) {
  return x(a) ? encodeURI(a).replace(b, tb) : k
}
function tb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var mb = /[#\/\?@]/g, ob = /[\#\?:]/g, nb = /[\#\?]/g, qb = /[\#\?@]/g, pb = /#/g;
function kb(a, b, c) {
  this.z = a || k;
  this.A = !!c
}
function L(a) {
  if(!a.i && (a.i = new cb, a.f = 0, a.z)) {
    for(var b = a.z.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = M(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
u = kb.prototype;
u.i = k;
u.f = k;
u.add = function(a, b) {
  L(this);
  this.z = k;
  var a = M(this, a), c = this.i.get(a);
  c || this.i.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
u.remove = function(a) {
  L(this);
  a = M(this, a);
  return this.i.ea(a) ? (this.z = k, this.f -= this.i.get(a).length, this.i.remove(a)) : p
};
u.ea = function(a) {
  L(this);
  a = M(this, a);
  return this.i.ea(a)
};
u.ga = function() {
  L(this);
  for(var a = this.i.L(), b = this.i.ga(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], g = 0;g < e.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
u.L = function(a) {
  L(this);
  var b = [];
  if(a) {
    this.ea(a) && (b = Za(b, this.i.get(M(this, a))))
  }else {
    for(var a = this.i.L(), c = 0;c < a.length;c++) {
      b = Za(b, a[c])
    }
  }
  return b
};
u.set = function(a, b) {
  L(this);
  this.z = k;
  a = M(this, a);
  this.ea(a) && (this.f -= this.i.get(a).length);
  this.i.set(a, [b]);
  this.f++;
  return this
};
u.get = function(a, b) {
  var c = a ? this.L(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
function sb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.z = k, a.i.set(M(a, b), $a(c)), a.f += c.length)
}
u.toString = function() {
  if(this.z) {
    return this.z
  }
  if(!this.i) {
    return""
  }
  for(var a = [], b = this.i.ga(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent(String(d)), d = this.L(d), g = 0;g < d.length;g++) {
      var i = e;
      "" !== d[g] && (i += "=" + encodeURIComponent(String(d[g])));
      a.push(i)
    }
  }
  return this.z = a.join("&")
};
u.n = function() {
  var a = new kb;
  a.z = this.z;
  this.i && (a.i = this.i.n(), a.f = this.f);
  return a
};
function M(a, b) {
  var c = String(b);
  a.A && (c = c.toLowerCase());
  return c
}
u.nb = function(a) {
  a && !this.A && (L(this), this.z = k, bb(this.i, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), sb(this, d, a))
  }, this));
  this.A = a
};
function ub() {
}
ub.prototype.Ea = k;
var vb;
function wb() {
}
B(wb, ub);
function xb(a) {
  return(a = yb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function zb(a) {
  var b = {};
  yb(a) && (b[0] = j, b[1] = j);
  return b
}
function yb(a) {
  if(!a.Eb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Eb = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Eb
}
vb = new wb;
function Ab() {
}
var Bb = 0;
u = Ab.prototype;
u.key = 0;
u.la = p;
u.tb = p;
u.La = function(a, b, c, d, e, g) {
  ha(a) ? this.Gb = j : a && a.handleEvent && ha(a.handleEvent) ? this.Gb = p : f(Error("Invalid listener argument"));
  this.xa = a;
  this.Sb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ib = g;
  this.tb = p;
  this.key = ++Bb;
  this.la = p
};
u.handleEvent = function(a) {
  return this.Gb ? this.xa.call(this.ib || this.src, a) : this.xa.handleEvent.call(this.xa, a)
};
var Cb = !C || C && 9 <= Oa, Db = C && !E("9");
!D || E("528");
Ca && E("1.9b") || C && E("8") || Ba && E("9.5") || D && E("528");
Ca && !E("8") || C && E("9");
function N() {
  0 != Eb && (this.Fc = Error().stack, Fb[y(this)] = this)
}
var Eb = 0, Fb = {};
N.prototype.xb = p;
N.prototype.Fa = function() {
  if(!this.xb && (this.xb = j, this.t(), 0 != Eb)) {
    var a = y(this);
    delete Fb[a]
  }
};
N.prototype.t = function() {
  this.hc && Gb.apply(k, this.hc);
  if(this.Lb) {
    for(;this.Lb.length;) {
      this.Lb.shift()()
    }
  }
};
function Hb(a) {
  a && "function" == typeof a.Fa && a.Fa()
}
function Gb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Gb.apply(k, d) : Hb(d)
  }
}
;function O(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
u = O.prototype;
u.t = r();
u.Fa = r();
u.ja = p;
u.defaultPrevented = p;
u.Ta = j;
u.preventDefault = function() {
  this.defaultPrevented = j;
  this.Ta = p
};
function Ib(a) {
  Ib[" "](a);
  return a
}
Ib[" "] = ea;
function Jb(a, b) {
  a && this.La(a, b)
}
B(Jb, O);
u = Jb.prototype;
u.target = k;
u.relatedTarget = k;
u.offsetX = 0;
u.offsetY = 0;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.button = 0;
u.keyCode = 0;
u.charCode = 0;
u.ctrlKey = p;
u.altKey = p;
u.shiftKey = p;
u.metaKey = p;
u.xc = p;
u.yb = k;
u.La = function(a, b) {
  var c = this.type = a.type;
  O.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ca) {
      var e;
      a: {
        try {
          Ib(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = p
      }
      e || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = D || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = D || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.xc = Ea ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.yb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ja
};
u.preventDefault = function() {
  Jb.oa.preventDefault.call(this);
  var a = this.yb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = p, Db) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
u.t = r();
var Kb = {}, P = {}, Q = {}, Lb = {};
function Mb(a, b, c, d, e) {
  if(b) {
    if(w(b)) {
      for(var g = 0;g < b.length;g++) {
        Mb(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, i = P;
    b in i || (i[b] = {f:0, B:0});
    i = i[b];
    d in i || (i[d] = {f:0, B:0}, i.f++);
    var i = i[d], l = y(a), q;
    i.B++;
    if(i[l]) {
      q = i[l];
      for(g = 0;g < q.length;g++) {
        if(i = q[g], i.xa == c && i.ib == e) {
          if(i.la) {
            break
          }
          return q[g].key
        }
      }
    }else {
      q = i[l] = [], i.f++
    }
    var m = Nb, n = Cb ? function(a) {
      return m.call(n.src, n.key, a)
    } : function(a) {
      a = m.call(n.src, n.key, a);
      if(!a) {
        return a
      }
    }, g = n;
    g.src = a;
    i = new Ab;
    i.La(c, g, a, b, d, e);
    c = i.key;
    g.key = c;
    q.push(i);
    Kb[c] = i;
    Q[l] || (Q[l] = []);
    Q[l].push(i);
    a.addEventListener ? (a == v || !a.vb) && a.addEventListener(b, g, d) : a.attachEvent(b in Lb ? Lb[b] : Lb[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Ob(a, b, c, d, e) {
  if(w(b)) {
    for(var g = 0;g < b.length;g++) {
      Ob(a, b[g], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      g = P;
      if(b in g && (g = g[b], d in g && (g = g[d], a = y(a), g[a]))) {
        a = g[a];
        break a
      }
      a = k
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].xa == c && a[g].capture == d && a[g].ib == e) {
          Pb(a[g].key);
          break
        }
      }
    }
  }
}
function Pb(a) {
  if(!Kb[a]) {
    return p
  }
  var b = Kb[a];
  if(b.la) {
    return p
  }
  var c = b.src, d = b.type, e = b.Sb, g = b.capture;
  c.removeEventListener ? (c == v || !c.vb) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Lb ? Lb[d] : Lb[d] = "on" + d, e);
  c = y(c);
  if(Q[c]) {
    var e = Q[c], i = Xa(e, b);
    0 <= i && F.splice.call(e, i, 1);
    0 == e.length && delete Q[c]
  }
  b.la = j;
  if(b = P[d][g][c]) {
    b.Kb = j, Qb(d, g, c, b)
  }
  delete Kb[a];
  return j
}
function Qb(a, b, c, d) {
  if(!d.Na && d.Kb) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].la ? d[e].Sb.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Kb = p;
    0 == g && (delete P[a][b][c], P[a][b].f--, 0 == P[a][b].f && (delete P[a][b], P[a].f--), 0 == P[a].f && delete P[a])
  }
}
function Rb(a, b, c, d, e) {
  var g = 1, b = y(b);
  if(a[b]) {
    a.B--;
    a = a[b];
    a.Na ? a.Na++ : a.Na = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var q = a[l];
        q && !q.la && (g &= Sb(q, e) !== p)
      }
    }finally {
      a.Na--, Qb(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Sb(a, b) {
  a.tb && Pb(a.key);
  return a.handleEvent(b)
}
function Nb(a, b) {
  if(!Kb[a]) {
    return j
  }
  var c = Kb[a], d = c.type, e = P;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, i;
  if(!Cb) {
    g = b || da("window.event");
    var l = j in e, q = p in e;
    if(l) {
      if(0 > g.keyCode || g.returnValue != h) {
        return j
      }
      a: {
        var m = p;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(n) {
            m = j
          }
        }
        if(m || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    m = new Jb;
    m.La(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], ya = m.currentTarget;ya;ya = ya.parentNode) {
          s.push(ya)
        }
        i = e[j];
        i.B = i.f;
        for(var G = s.length - 1;!m.ja && 0 <= G && i.B;G--) {
          m.currentTarget = s[G], g &= Rb(i, s[G], d, j, m)
        }
        if(q) {
          i = e[p];
          i.B = i.f;
          for(G = 0;!m.ja && G < s.length && i.B;G++) {
            m.currentTarget = s[G], g &= Rb(i, s[G], d, p, m)
          }
        }
      }else {
        g = Sb(c, m)
      }
    }finally {
      s && (s.length = 0)
    }
    return g
  }
  d = new Jb(b, this);
  return g = Sb(c, d)
}
;function Tb() {
  N.call(this)
}
B(Tb, N);
u = Tb.prototype;
u.vb = j;
u.mb = k;
u.addEventListener = function(a, b, c, d) {
  Mb(this, a, b, c, d)
};
u.removeEventListener = function(a, b, c, d) {
  Ob(this, a, b, c, d)
};
u.dispatchEvent = function(a) {
  var b = a.type || a, c = P;
  if(b in c) {
    if(x(a)) {
      a = new O(a, this)
    }else {
      if(a instanceof O) {
        a.target = a.target || this
      }else {
        var d = a, a = new O(b, this);
        Wa(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.mb) {
        e.push(g)
      }
      g = c[j];
      g.B = g.f;
      for(var i = e.length - 1;!a.ja && 0 <= i && g.B;i--) {
        a.currentTarget = e[i], d &= Rb(g, e[i], a.type, j, a) && a.Ta != p
      }
    }
    if(p in c) {
      if(g = c[p], g.B = g.f, b) {
        for(i = 0;!a.ja && i < e.length && g.B;i++) {
          a.currentTarget = e[i], d &= Rb(g, e[i], a.type, p, a) && a.Ta != p
        }
      }else {
        for(e = this;!a.ja && e && g.B;e = e.mb) {
          a.currentTarget = e, d &= Rb(g, e, a.type, p, a) && a.Ta != p
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
u.t = function() {
  Tb.oa.t.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    var d = function(d) {
      for(var e = d.length - 1;0 <= e;e--) {
        var g = d[e];
        if(c || a == g.capture) {
          Pb(g.key), b++
        }
      }
    }, e;
    for(e in Q) {
      d.call(h, Q[e])
    }
  }else {
    if(d = y(this), Q[d]) {
      d = Q[d];
      for(e = d.length - 1;0 <= e;e--) {
        var g = d[e];
        if(c || a == g.capture) {
          Pb(g.key), b++
        }
      }
    }
  }
  this.mb = k
};
function Ub(a, b) {
  N.call(this);
  this.aa = a || 1;
  this.Ca = b || R;
  this.ab = z(this.Dc, this);
  this.lb = A()
}
B(Ub, Tb);
Ub.prototype.enabled = p;
var R = v.window;
u = Ub.prototype;
u.r = k;
u.setInterval = function(a) {
  this.aa = a;
  this.r && this.enabled ? (this.stop(), this.start()) : this.r && this.stop()
};
u.Dc = function() {
  if(this.enabled) {
    var a = A() - this.lb;
    0 < a && a < 0.8 * this.aa ? this.r = this.Ca.setTimeout(this.ab, this.aa - a) : (this.dispatchEvent(Vb), this.enabled && (this.r = this.Ca.setTimeout(this.ab, this.aa), this.lb = A()))
  }
};
u.start = function() {
  this.enabled = j;
  this.r || (this.r = this.Ca.setTimeout(this.ab, this.aa), this.lb = A())
};
u.stop = function() {
  this.enabled = p;
  this.r && (this.Ca.clearTimeout(this.r), this.r = k)
};
u.t = function() {
  Ub.oa.t.call(this);
  this.stop();
  delete this.Ca
};
var Vb = "tick";
function Wb(a) {
  N.call(this);
  this.e = a;
  this.j = []
}
B(Wb, N);
var Xb = [];
function Yb(a, b, c, d) {
  w(c) || (Xb[0] = c, c = Xb);
  for(var e = 0;e < c.length;e++) {
    var g = Mb(b, c[e], d || a, p, a.e || a);
    a.j.push(g)
  }
}
Wb.prototype.t = function() {
  Wb.oa.t.call(this);
  Ya(this.j, Pb);
  this.j.length = 0
};
Wb.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Zb(a, b, c) {
  N.call(this);
  this.mc = a;
  this.aa = b;
  this.e = c;
  this.fc = z(this.sc, this)
}
B(Zb, N);
u = Zb.prototype;
u.Ua = p;
u.Rb = 0;
u.r = k;
u.stop = function() {
  this.r && (R.clearTimeout(this.r), this.r = k, this.Ua = p)
};
u.t = function() {
  Zb.oa.t.call(this);
  this.stop()
};
u.sc = function() {
  this.r = k;
  this.Ua && !this.Rb && (this.Ua = p, $b(this))
};
function $b(a) {
  var b;
  b = a.fc;
  var c = a.aa;
  ha(b) || (b && "function" == typeof b.handleEvent ? b = z(b.handleEvent, b) : f(Error("Invalid listener argument")));
  b = 2147483647 < c ? -1 : R.setTimeout(b, c || 0);
  a.r = b;
  a.mc.call(a.e)
}
;function S(a, b, c, d, e) {
  this.b = a;
  this.a = b;
  this.X = c;
  this.C = d;
  this.Aa = e || 1;
  this.Ba = ac;
  this.gb = new Wb(this);
  this.Pa = new Ub;
  this.Pa.setInterval(bc)
}
u = S.prototype;
u.u = k;
u.I = p;
u.sa = k;
u.qb = k;
u.ma = k;
u.pa = k;
u.S = k;
u.v = k;
u.V = k;
u.l = k;
u.Da = 0;
u.J = k;
u.qa = k;
u.p = k;
u.h = -1;
u.Vb = j;
u.Y = p;
u.ka = 0;
u.Qa = k;
var ac = 45E3, bc = 250;
function cc(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var dc = {}, ec = {};
function fc() {
  return!C || C && 10 <= Oa
}
u = S.prototype;
u.W = t("u");
u.setTimeout = t("Ba");
u.Yb = t("ka");
function gc(a, b, c) {
  a.pa = 1;
  a.S = K(b.n());
  a.V = c;
  a.wb = j;
  hc(a, k)
}
function ic(a, b, c, d, e) {
  a.pa = 1;
  a.S = K(b.n());
  a.V = k;
  a.wb = c;
  e && (a.Vb = p);
  hc(a, d)
}
function hc(a, b) {
  a.ma = A();
  jc(a);
  a.v = a.S.n();
  rb(a.v, "t", a.Aa);
  a.Da = 0;
  a.l = a.b.eb(a.b.Va() ? b : k);
  0 < a.ka && (a.Qa = new Zb(z(a.bc, a, a.l), a.ka));
  Yb(a.gb, a.l, "readystatechange", a.zc);
  var c;
  if(a.u) {
    c = a.u;
    var d = {}, e;
    for(e in c) {
      d[e] = c[e]
    }
    c = d
  }else {
    c = {}
  }
  a.V ? (a.qa = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.l.send(a.v, a.qa, a.V, c)) : (a.qa = "GET", a.Vb && !D && (c.Connection = "close"), a.l.send(a.v, a.qa, k, c));
  a.b.F(kc);
  if(d = a.V) {
    c = "";
    d = d.split("&");
    for(e = 0;e < d.length;e++) {
      var g = d[e].split("=");
      if(1 < g.length) {
        var i = g[0], g = g[1], l = i.split("_");
        c = 2 <= l.length && "type" == l[1] ? c + (i + "=" + g + "&") : c + (i + "=redacted&")
      }
    }
  }else {
    c = k
  }
  a.a.info("XMLHTTP REQ (" + a.C + ") [attempt " + a.Aa + "]: " + a.qa + "\n" + a.v + "\n" + c)
}
u.zc = function(a) {
  var a = a.target, b = this.Qa;
  b && 3 == T(a) ? (this.a.debug("Throttling readystatechange."), !b.r && !b.Rb ? $b(b) : b.Ua = j) : this.bc(a)
};
u.bc = function(a) {
  try {
    if(a == this.l) {
      a: {
        var b = T(this.l), c = this.l.ha, d = lc(this.l);
        if(!fc() || D && !E("420+")) {
          if(4 > b) {
            break a
          }
        }else {
          if(3 > b || 3 == b && !Ba && !mc(this.l)) {
            break a
          }
        }
        !this.Y && (4 == b && c != nc) && (c == oc || 0 >= d ? this.b.F(pc) : this.b.F(qc));
        rc(this);
        var e = lc(this.l);
        this.h = e;
        var g = mc(this.l);
        g || this.a.debug("No response text for uri " + this.v + " status " + e);
        this.I = 200 == e;
        this.a.info("XMLHTTP RESP (" + this.C + ") [ attempt " + this.Aa + "]: " + this.qa + "\n" + this.v + "\n" + b + " " + e);
        this.I ? (4 == b && U(this), this.wb ? (sc(this, b, g), Ba && 3 == b && (Yb(this.gb, this.Pa, Vb, this.yc), this.Pa.start())) : (tc(this.a, this.C, g, k), uc(this, g)), this.I && !this.Y && (4 == b ? this.b.ia(this) : (this.I = p, jc(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.p = 3, V(vc)) : (this.p = 0, V(wc)), tc(this.a, this.C, g), U(this), xc(this))
      }
    }else {
      this.a.ra("Called back with an unexpected xmlhttp")
    }
  }catch(i) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.l && mc(this.l) ? yc(this.a, i, "ResponseText: " + mc(this.l)) : yc(this.a, i, "No response text")
  }finally {
  }
};
function sc(a, b, c) {
  for(var d = j;!a.Y && a.Da < c.length;) {
    var e = zc(a, c);
    if(e == ec) {
      4 == b && (a.p = 4, V(Ac), d = p);
      tc(a.a, a.C, k, "[Incomplete Response]");
      break
    }else {
      if(e == dc) {
        a.p = 4;
        V(Bc);
        tc(a.a, a.C, c, "[Invalid Chunk]");
        d = p;
        break
      }else {
        tc(a.a, a.C, e, k), uc(a, e)
      }
    }
  }
  4 == b && 0 == c.length && (a.p = 1, V(Cc), d = p);
  a.I = a.I && d;
  d || (tc(a.a, a.C, c, "[Invalid Chunked Response]"), U(a), xc(a))
}
u.yc = function() {
  var a = T(this.l), b = mc(this.l);
  this.Da < b.length && (rc(this), sc(this, a, b), this.I && 4 != a && jc(this))
};
function zc(a, b) {
  var c = a.Da, d = b.indexOf("\n", c);
  if(-1 == d) {
    return ec
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return dc
  }
  d += 1;
  if(d + c > b.length) {
    return ec
  }
  var e = b.substr(d, c);
  a.Da = d + c;
  return e
}
function Dc(a, b) {
  a.ma = A();
  jc(a);
  var c = b ? window.location.hostname : "";
  a.v = a.S.n();
  J(a.v, "DOMAIN", c);
  J(a.v, "t", a.Aa);
  try {
    a.J = new ActiveXObject("htmlfile")
  }catch(d) {
    a.a.H("ActiveX blocked");
    U(a);
    a.p = 7;
    V(Ec);
    xc(a);
    return
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"<\/script>');
  e += "</body></html>";
  a.J.open();
  a.J.write(e);
  a.J.close();
  a.J.parentWindow.m = z(a.vc, a);
  a.J.parentWindow.d = z(a.Qb, a, j);
  a.J.parentWindow.rpcClose = z(a.Qb, a, p);
  c = a.J.createElement("div");
  a.J.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.v + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.C + ") [ attempt " + a.Aa + "]: GET\n" + a.v);
  a.b.F(kc)
}
u.vc = function(a) {
  W(z(this.uc, this, a), 0)
};
u.uc = function(a) {
  if(!this.Y) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.C + "): " + Fc(b, a));
    rc(this);
    uc(this, a);
    jc(this)
  }
};
u.Qb = function(a) {
  W(z(this.tc, this, a), 0)
};
u.tc = function(a) {
  this.Y || (this.a.info("TRIDENT TEXT (" + this.C + "): " + a ? "success" : "failure"), U(this), this.I = a, this.b.ia(this), this.b.F(Gc))
};
u.kc = function() {
  rc(this);
  this.b.ia(this)
};
u.cancel = function() {
  this.Y = j;
  U(this)
};
function jc(a) {
  a.qb = A() + a.Ba;
  Hc(a, a.Ba)
}
function Hc(a, b) {
  a.sa != k && f(Error("WatchDog timer not null"));
  a.sa = W(z(a.wc, a), b)
}
function rc(a) {
  a.sa && (v.clearTimeout(a.sa), a.sa = k)
}
u.wc = function() {
  this.sa = k;
  var a = A();
  0 <= a - this.qb ? (this.I && this.a.H("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.v), 2 != this.pa && this.b.F(pc), U(this), this.p = 2, V(Ic), xc(this)) : (this.a.ra("WatchDog timer called too early"), Hc(this, this.qb - a))
};
function xc(a) {
  !a.b.Fb() && !a.Y && a.b.ia(a)
}
function U(a) {
  rc(a);
  Hb(a.Qa);
  a.Qa = k;
  a.Pa.stop();
  var b = a.gb;
  Ya(b.j, Pb);
  b.j.length = 0;
  a.l && (b = a.l, a.l = k, b.abort(), b.Fa());
  a.J && (a.J = k)
}
u.Cb = aa("p");
function uc(a, b) {
  try {
    a.b.Nb(a, b), a.b.F(Gc)
  }catch(c) {
    yc(a.a, c, "Error in httprequest callback")
  }
}
;function Jc(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Kc(a) {
  return eval("(" + a + ")")
}
function Lc(a) {
  var b = [];
  Mc(new Nc(h), a, b);
  return b.join("")
}
function Nc(a) {
  this.Sa = a
}
function Mc(a, b, c) {
  switch(typeof b) {
    case "string":
      Oc(b, c);
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
      if(b == k) {
        c.push("null");
        break
      }
      if(w(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Mc(a, a.Sa ? a.Sa.call(b, String(g), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Oc(g, c), c.push(":"), Mc(a, a.Sa ? a.Sa.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Pc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Qc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Oc(a, b) {
  b.push('"', a.replace(Qc, function(a) {
    if(a in Pc) {
      return Pc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Pc[a] = e + b.toString(16)
  }), '"')
}
;function Rc(a) {
  return Sc(a || arguments.callee.caller, [])
}
function Sc(a, b) {
  var c = [];
  if(0 <= Xa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Tc(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
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
            g = (g = Tc(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Sc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Tc(a) {
  if(Uc[a]) {
    return Uc[a]
  }
  a = String(a);
  if(!Uc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Uc[a] = b ? b[1] : "[Anonymous]"
  }
  return Uc[a]
}
var Uc = {};
function Vc(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Vc.prototype.Bc = 0;
Vc.prototype.Ab = k;
Vc.prototype.zb = k;
var Wc = 0;
Vc.prototype.reset = function(a, b, c, d, e) {
  this.Bc = "number" == typeof e ? e : Wc++;
  this.Pc = d || A();
  this.wa = a;
  this.nc = b;
  this.Hc = c;
  delete this.Ab;
  delete this.zb
};
Vc.prototype.Wb = t("wa");
function Xc(a) {
  this.oc = a
}
Xc.prototype.Oa = k;
Xc.prototype.wa = k;
Xc.prototype.bb = k;
Xc.prototype.Db = k;
function Yc(a, b) {
  this.name = a;
  this.value = b
}
Yc.prototype.toString = aa("name");
var Zc = new Yc("SEVERE", 1E3), $c = new Yc("WARNING", 900), ad = new Yc("INFO", 800), bd = new Yc("CONFIG", 700), cd = new Yc("FINE", 500);
u = Xc.prototype;
u.getParent = aa("Oa");
u.Wb = t("wa");
function dd(a) {
  if(a.wa) {
    return a.wa
  }
  if(a.Oa) {
    return dd(a.Oa)
  }
  Ra("Root logger has no level set.");
  return k
}
u.log = function(a, b, c) {
  if(a.value >= dd(this).value) {
    a = this.jc(a, b, c);
    b = "log:" + a.nc;
    v.console && (v.console.timeStamp ? v.console.timeStamp(b) : v.console.markTimeline && v.console.markTimeline(b));
    v.msWriteProfilerMark && v.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Db) {
        for(var e = 0, g = h;g = c.Db[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
u.jc = function(a, b, c) {
  var d = new Vc(a, String(b), this.oc);
  if(c) {
    d.Ab = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = da("window.location.href");
      if(x(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var q, m, n = p;
        try {
          q = c.lineNumber || c.Gc || "Not available"
        }catch(s) {
          q = "Not available", n = j
        }
        try {
          m = c.fileName || c.filename || c.sourceURL || l
        }catch(ya) {
          m = "Not available", n = j
        }
        i = n || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:q, fileName:m, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + na(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + na(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + na(Rc(g) + "-> ")
    }catch(G) {
      e = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.zb = e
  }
  return d
};
u.H = function(a, b) {
  this.log(Zc, a, b)
};
u.ra = function(a, b) {
  this.log($c, a, b)
};
u.info = function(a, b) {
  this.log(ad, a, b)
};
function X(a, b) {
  a.log(cd, b, h)
}
var ed = {}, fd = k;
function gd(a) {
  fd || (fd = new Xc(""), ed[""] = fd, fd.Wb(bd));
  var b;
  if(!(b = ed[a])) {
    b = new Xc(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = gd(a.substr(0, c));
    c.bb || (c.bb = {});
    c.bb[d] = b;
    b.Oa = c;
    ed[a] = b
  }
  return b
}
;function hd() {
  this.q = gd("goog.net.BrowserChannel")
}
function tc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Fc(a, c) + (d ? " " + d : ""))
}
hd.prototype.debug = function(a) {
  this.info(a)
};
function yc(a, b, c) {
  a.H((c || "Exception") + b)
}
hd.prototype.info = function(a) {
  this.q.info(a)
};
hd.prototype.ra = function(a) {
  this.q.ra(a)
};
hd.prototype.H = function(a) {
  this.q.H(a)
};
function Fc(a, b) {
  if(!b || b == id) {
    return b
  }
  try {
    var c = Kc(b);
    if(c) {
      for(var d = 0;d < c.length;d++) {
        if(w(c[d])) {
          var e = c[d];
          if(!(2 > e.length)) {
            var g = e[1];
            if(w(g) && !(1 > g.length)) {
              var i = g[0];
              if("noop" != i && "stop" != i) {
                for(var l = 1;l < g.length;l++) {
                  g[l] = ""
                }
              }
            }
          }
        }
      }
    }
    return Lc(c)
  }catch(q) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b
  }
}
;function jd(a, b) {
  this.Nc = new Nc(a);
  this.O = b ? Kc : Jc
}
jd.prototype.parse = function(a) {
  return this.O(a)
};
var nc = 7, oc = 8;
function kd(a) {
  N.call(this);
  this.headers = new cb;
  this.ta = a || k
}
B(kd, Tb);
kd.prototype.q = gd("goog.net.XhrIo");
var ld = /^https?$/i;
u = kd.prototype;
u.R = p;
u.g = k;
u.Ya = k;
u.Ma = "";
u.Hb = "";
u.ha = 0;
u.p = "";
u.fb = p;
u.Ka = p;
u.jb = p;
u.$ = p;
u.Wa = 0;
u.ba = k;
u.Ub = "";
u.ac = p;
u.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request=" + this.Ma + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.Ma = a;
  this.p = "";
  this.ha = 0;
  this.Hb = b;
  this.fb = p;
  this.R = j;
  this.g = this.ta ? xb(this.ta) : xb(vb);
  this.Ya = this.ta ? this.ta.Ea || (this.ta.Ea = zb(this.ta)) : vb.Ea || (vb.Ea = zb(vb));
  this.g.onreadystatechange = z(this.Mb, this);
  try {
    X(this.q, Y(this, "Opening Xhr")), this.jb = j, this.g.open(b, a, j), this.jb = p
  }catch(e) {
    X(this.q, Y(this, "Error opening Xhr: " + e.message));
    md(this, e);
    return
  }
  var a = c || "", g = this.headers.n();
  d && bb(d, function(a, b) {
    g.set(b, a)
  });
  d = v.FormData && a instanceof v.FormData;
  "POST" == b && (!g.ea("Content-Type") && !d) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  bb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  this.Ub && (this.g.responseType = this.Ub);
  "withCredentials" in this.g && (this.g.withCredentials = this.ac);
  try {
    this.ba && (R.clearTimeout(this.ba), this.ba = k), 0 < this.Wa && (X(this.q, Y(this, "Will abort after " + this.Wa + "ms if incomplete")), this.ba = R.setTimeout(z(this.Ba, this), this.Wa)), X(this.q, Y(this, "Sending request")), this.Ka = j, this.g.send(a), this.Ka = p
  }catch(i) {
    X(this.q, Y(this, "Send error: " + i.message)), md(this, i)
  }
};
u.Ba = function() {
  "undefined" != typeof ca && this.g && (this.p = "Timed out after " + this.Wa + "ms, aborting", this.ha = oc, X(this.q, Y(this, this.p)), this.dispatchEvent("timeout"), this.abort(oc))
};
function md(a, b) {
  a.R = p;
  a.g && (a.$ = j, a.g.abort(), a.$ = p);
  a.p = b;
  a.ha = 5;
  nd(a);
  od(a)
}
function nd(a) {
  a.fb || (a.fb = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
u.abort = function(a) {
  this.g && this.R && (X(this.q, Y(this, "Aborting")), this.R = p, this.$ = j, this.g.abort(), this.$ = p, this.ha = a || nc, this.dispatchEvent("complete"), this.dispatchEvent("abort"), od(this))
};
u.t = function() {
  this.g && (this.R && (this.R = p, this.$ = j, this.g.abort(), this.$ = p), od(this, j));
  kd.oa.t.call(this)
};
u.Mb = function() {
  !this.jb && !this.Ka && !this.$ ? this.rc() : pd(this)
};
u.rc = function() {
  pd(this)
};
function pd(a) {
  if(a.R && "undefined" != typeof ca) {
    if(a.Ya[1] && 4 == T(a) && 2 == lc(a)) {
      X(a.q, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.Ka && 4 == T(a)) {
        R.setTimeout(z(a.Mb, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == T(a)) {
          X(a.q, Y(a, "Request complete"));
          a.R = p;
          try {
            var b = lc(a), c, d;
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
                  d = j;
                  break a;
                default:
                  d = p
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var g = String(a.Ma).match(Sa)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                e = !ld.test(g ? g.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.ha = 6;
              var l;
              try {
                l = 2 < T(a) ? a.g.statusText : ""
              }catch(q) {
                X(a.q, "Can not get status: " + q.message), l = ""
              }
              a.p = l + " [" + lc(a) + "]";
              nd(a)
            }
          }finally {
            od(a)
          }
        }
      }
    }
  }
}
function od(a, b) {
  if(a.g) {
    var c = a.g, d = a.Ya[0] ? ea : k;
    a.g = k;
    a.Ya = k;
    a.ba && (R.clearTimeout(a.ba), a.ba = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.q.H("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
u.isActive = function() {
  return!!this.g
};
function T(a) {
  return a.g ? a.g.readyState : 0
}
function lc(a) {
  try {
    return 2 < T(a) ? a.g.status : -1
  }catch(b) {
    return a.q.ra("Can not get status: " + b.message), -1
  }
}
function mc(a) {
  try {
    return a.g ? a.g.responseText : ""
  }catch(b) {
    return X(a.q, "Can not get responseText: " + b.message), ""
  }
}
u.Cb = function() {
  return x(this.p) ? this.p : String(this.p)
};
function Y(a, b) {
  return b + " [" + a.Hb + " " + a.Ma + " " + lc(a) + "]"
}
;function qd() {
  this.Tb = A()
}
new qd;
qd.prototype.set = t("Tb");
qd.prototype.reset = function() {
  this.set(A())
};
qd.prototype.get = aa("Tb");
function rd(a, b, c, d, e) {
  (new hd).debug("TestLoadImageWithRetries: " + e);
  if(0 == d) {
    c(p)
  }else {
    var g = e || 0;
    d--;
    sd(a, b, function(e) {
      e ? c(j) : v.setTimeout(function() {
        rd(a, b, c, d, g)
      }, g)
    })
  }
}
function sd(a, b, c) {
  var d = new hd;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image, g = k;
  createHandler = function(a, b) {
    return function() {
      try {
        d.debug("TestLoadImage: " + b), e.onload = k, e.onerror = k, e.onabort = k, e.ontimeout = k, v.clearTimeout(g), c(a)
      }catch(q) {
        yc(d, q)
      }
    }
  };
  e.onload = createHandler(j, "loaded");
  e.onerror = createHandler(p, "error");
  e.onabort = createHandler(p, "abort");
  e.ontimeout = createHandler(p, "timeout");
  g = v.setTimeout(function() {
    if(e.ontimeout) {
      e.ontimeout()
    }
  }, b);
  e.src = a
}
;function td(a, b) {
  this.b = a;
  this.a = b;
  this.O = new jd(k, j)
}
u = td.prototype;
u.u = k;
u.w = k;
u.Ra = p;
u.Zb = k;
u.Ha = k;
u.kb = k;
u.G = k;
u.c = k;
u.h = -1;
u.M = k;
u.$a = k;
u.W = t("u");
u.Xb = t("O");
u.cb = function(a) {
  this.G = a;
  a = ud(this.b, this.G);
  V(vd);
  rb(a, "MODE", "init");
  this.w = new S(this, this.a, h, h, h);
  this.w.W(this.u);
  ic(this.w, a, p, k, j);
  this.c = 0;
  this.Zb = A()
};
u.gc = function(a) {
  if(a) {
    this.c = 2, wd(this)
  }else {
    V(xd);
    var b = this.b;
    b.a.debug("Test Connection Blocked");
    b.h = b.T.h;
    Z(b, 9)
  }
  a && this.F(qc)
};
function wd(a) {
  a.a.debug("TestConnection: starting stage 2");
  a.w = new S(a, a.a, h, h, h);
  a.w.W(a.u);
  var b = yd(a.b, a.M, a.G);
  V(zd);
  if(fc()) {
    rb(b, "TYPE", "xmlhttp"), ic(a.w, b, p, a.M, p)
  }else {
    rb(b, "TYPE", "html");
    var c = a.w, a = Boolean(a.M);
    c.pa = 3;
    c.S = K(b.n());
    Dc(c, a)
  }
}
u.eb = function(a) {
  return this.b.eb(a)
};
u.abort = function() {
  this.w && (this.w.cancel(), this.w = k);
  this.h = -1
};
u.Fb = ba(p);
u.Nb = function(a, b) {
  this.h = a.h;
  if(0 == this.c) {
    if(this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.O.parse(b)
      }catch(d) {
        yc(this.a, d);
        Ad(this.b, this);
        return
      }
      this.M = this.b.correctHostPrefix(c[0]);
      this.$a = c[1]
    }else {
      this.a.debug("TestConnection: Null responseText"), Ad(this.b, this)
    }
  }else {
    if(2 == this.c) {
      if(this.Ra) {
        V(Bd), this.kb = A()
      }else {
        if("11111" == b) {
          if(V(Cd), this.Ra = j, this.Ha = A(), c = this.Ha - this.Zb, fc() || 500 > c) {
            this.h = 200, this.w.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), V(Dd), Ed(this.b, this, j)
          }
        }else {
          V(Fd), this.Ha = this.kb = A(), this.Ra = p
        }
      }
    }
  }
};
u.ia = function() {
  this.h = this.w.h;
  if(this.w.I) {
    if(0 == this.c) {
      if(this.a.debug("TestConnection: request complete for initial check"), this.$a) {
        this.c = 1;
        var a = Gd(this.b, this.$a, "/mail/images/cleardot.gif");
        K(a);
        rd(a.toString(), 5E3, z(this.gc, this), 3, 2E3);
        this.F(kc)
      }else {
        this.c = 2, wd(this)
      }
    }else {
      2 == this.c && (this.a.debug("TestConnection: request complete for stage 2"), a = p, (a = fc() ? this.Ra : 200 > this.kb - this.Ha ? p : j) ? (this.a.debug("Test connection succeeded; using streaming connection"), V(Dd), Ed(this.b, this, j)) : (this.a.debug("Test connection failed; not using streaming"), V(Hd), Ed(this.b, this, p)))
    }
  }else {
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? V(Id) : 2 == this.c && V(Jd), Ad(this.b, this)
  }
};
u.Va = function() {
  return this.b.Va()
};
u.isActive = function() {
  return this.b.isActive()
};
u.F = function(a) {
  this.b.F(a)
};
function Kd(a) {
  this.ub = a || k;
  this.c = Ld;
  this.s = [];
  this.P = [];
  this.a = new hd;
  this.O = new jd(k, j)
}
function Md(a, b) {
  this.Jb = a;
  this.map = b;
  this.Ec = k
}
u = Kd.prototype;
u.u = k;
u.ua = k;
u.o = k;
u.k = k;
u.G = k;
u.Ia = k;
u.sb = k;
u.M = k;
u.dc = j;
u.ya = 0;
u.pc = 0;
u.Ga = p;
u.e = k;
u.D = k;
u.K = k;
u.Z = k;
u.T = k;
u.pb = k;
u.cc = j;
u.va = -1;
u.Ib = -1;
u.h = -1;
u.U = 0;
u.ca = 0;
u.ec = 5E3;
u.Ac = 1E4;
u.hb = 2;
u.Bb = 2E4;
u.ka = 0;
u.ob = p;
u.da = 8;
var Ld = 1, Nd = new Tb;
function Od(a, b) {
  O.call(this, "statevent", a);
  this.Oc = b
}
B(Od, O);
function Pd(a, b, c, d) {
  O.call(this, "timingevent", a);
  this.size = b;
  this.Mc = c;
  this.Lc = d
}
B(Pd, O);
var kc = 1, qc = 2, pc = 3, Gc = 4;
function Qd(a, b) {
  O.call(this, "serverreachability", a);
  this.Kc = b
}
B(Qd, O);
var vd = 3, xd = 4, zd = 5, Cd = 6, Bd = 7, Fd = 8, Id = 9, Jd = 10, Hd = 11, Dd = 12, vc = 13, wc = 14, Ac = 15, Bc = 16, Cc = 17, Ic = 18, Ec = 22, id = "y2f%";
u = Kd.prototype;
u.cb = function(a, b, c, d, e) {
  this.a.debug("connect()");
  V(0);
  this.G = b;
  this.ua = c || {};
  d && e !== h && (this.ua.OSID = d, this.ua.OAID = e);
  this.a.debug("connectTest_()");
  Rd(this) && (this.T = new td(this, this.a), this.T.W(this.u), this.T.Xb(this.O), this.T.cb(a))
};
function Sd(a) {
  a.T && (a.T.abort(), a.T = k);
  a.k && (a.k.cancel(), a.k = k);
  a.K && (v.clearTimeout(a.K), a.K = k);
  Td(a);
  a.o && (a.o.cancel(), a.o = k);
  a.D && (v.clearTimeout(a.D), a.D = k)
}
u.W = t("u");
u.Yb = t("ka");
u.Fb = function() {
  return 0 == this.c
};
u.Xb = t("O");
function Ud(a) {
  !a.o && !a.D && (a.D = W(z(a.Pb, a), 0), a.U = 0)
}
u.Pb = function(a) {
  this.D = k;
  this.a.debug("startForwardChannel_");
  if(Rd(this)) {
    if(this.c == Ld) {
      if(a) {
        this.a.H("Not supposed to retry the open")
      }else {
        this.a.debug("open_()");
        this.ya = Math.floor(1E5 * Math.random());
        var a = this.ya++, b = new S(this, this.a, "", a, h);
        b.W(this.u);
        var c = Vd(this), d = this.Ia.n();
        J(d, "RID", a);
        this.ub && J(d, "CVER", this.ub);
        Wd(this, d);
        gc(b, d, c);
        this.o = b;
        this.c = 2
      }
    }else {
      3 == this.c && (a ? Xd(this, a) : 0 == this.s.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.o ? this.a.H("startForwardChannel_ returned: connection already in progress") : (Xd(this), this.a.debug("startForwardChannel_ finished, sent request")))
    }
  }
};
function Xd(a, b) {
  var c, d;
  b ? 6 < a.da ? (a.s = a.P.concat(a.s), a.P.length = 0, c = a.ya - 1, d = Vd(a)) : (c = b.C, d = b.V) : (c = a.ya++, d = Vd(a));
  var e = a.Ia.n();
  J(e, "SID", a.X);
  J(e, "RID", c);
  J(e, "AID", a.va);
  Wd(a, e);
  c = new S(a, a.a, a.X, c, a.U + 1);
  c.W(a.u);
  c.setTimeout(Math.round(0.5 * a.Bb) + Math.round(0.5 * a.Bb * Math.random()));
  a.o = c;
  gc(c, e, d)
}
function Wd(a, b) {
  if(a.e) {
    var c = a.e.getAdditionalParams(a);
    c && bb(c, function(a, c) {
      J(b, c, a)
    })
  }
}
function Vd(a) {
  var b = Math.min(a.s.length, 1E3), c = ["count=" + b], d;
  6 < a.da && 0 < b ? (d = a.s[0].Jb, c.push("ofs=" + d)) : d = 0;
  for(var e = 0;e < b;e++) {
    var g = a.s[e].Jb, i = a.s[e].map, g = 6 >= a.da ? e : g - d;
    try {
      bb(i, function(a, b) {
        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(l) {
      c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, i)
    }
  }
  a.P = a.P.concat(a.s.splice(0, b));
  return c.join("&")
}
function Yd(a) {
  !a.k && !a.K && (a.rb = 1, a.K = W(z(a.Ob, a), 0), a.ca = 0)
}
function Zd(a) {
  if(a.k || a.K) {
    return a.a.H("Request already in progress"), p
  }
  if(3 <= a.ca) {
    return p
  }
  a.a.debug("Going to retry GET");
  a.rb++;
  a.K = W(z(a.Ob, a), $d(a, a.ca));
  a.ca++;
  return j
}
u.Ob = function() {
  this.K = k;
  if(Rd(this)) {
    this.a.debug("Creating new HttpRequest");
    this.k = new S(this, this.a, this.X, "rpc", this.rb);
    this.k.W(this.u);
    this.k.Yb(this.ka);
    var a = this.sb.n();
    J(a, "RID", "rpc");
    J(a, "SID", this.X);
    J(a, "CI", this.pb ? "0" : "1");
    J(a, "AID", this.va);
    Wd(this, a);
    if(fc()) {
      J(a, "TYPE", "xmlhttp"), ic(this.k, a, j, this.M, p)
    }else {
      J(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.M);
      b.pa = 3;
      b.S = K(a.n());
      Dc(b, c)
    }
    this.a.debug("New Request created")
  }
};
function Rd(a) {
  if(a.e) {
    var b = a.e.okToMakeRequest(a);
    if(0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), p
    }
  }
  return j
}
function Ed(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.pb = a.cc && c;
  a.h = b.h;
  a.a.debug("connectChannel_()");
  a.ic(Ld, 0);
  a.Ia = ud(a, a.G);
  Ud(a)
}
function Ad(a, b) {
  a.a.debug("Test Connection Failed");
  a.h = b.h;
  Z(a, 2)
}
u.Nb = function(a, b) {
  if(!(0 == this.c || this.k != a && this.o != a)) {
    if(this.h = a.h, this.o == a && 3 == this.c) {
      if(7 < this.da) {
        var c;
        try {
          c = this.O.parse(b)
        }catch(d) {
          c = k
        }
        if(w(c) && 3 == c.length) {
          var e = c;
          if(0 == e[0]) {
            a: {
              if(this.a.debug("Server claims our backchannel is missing."), this.K) {
                this.a.debug("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.ma + 3E3 < this.o.ma) {
                    Td(this), this.k.cancel(), this.k = k
                  }else {
                    break a
                  }
                }else {
                  this.a.ra("We do not have a BackChannel established")
                }
                Zd(this);
                V(19)
              }
            }
          }else {
            this.Ib = e[1], c = this.Ib - this.va, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && (this.pb && 0 == this.ca) && !this.Z && (this.Z = W(z(this.qc, this), 6E3)))
          }
        }else {
          this.a.debug("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != id && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && Td(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.O.parse(b);
        for(var e = this.e && this.e.channelHandleMultipleArrays ? [] : k, g = 0;g < c.length;g++) {
          var i = c[g];
          this.va = i[0];
          i = i[1];
          2 == this.c ? "c" == i[0] ? (this.X = i[1], this.M = this.correctHostPrefix(i[2]), i = i[3], this.da = i != k ? i : 6, this.c = 3, this.e && this.e.channelOpened(this), this.sb = yd(this, this.M, this.G), Yd(this)) : "stop" == i[0] && Z(this, 7) : 3 == this.c && ("stop" == i[0] ? (e && e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != i[0] && (e ? e.push(i) : this.e && this.e.channelHandleArray(this, i)), this.ca = 0)
        }
        e && e.length && this.e.channelHandleMultipleArrays(this, e)
      }
    }
  }
};
u.correctHostPrefix = function(a) {
  return this.dc ? this.e ? this.e.correctHostPrefix(a) : a : k
};
u.qc = function() {
  this.Z != k && (this.Z = k, this.k.cancel(), this.k = k, Zd(this), V(20))
};
function Td(a) {
  a.Z != k && (v.clearTimeout(a.Z), a.Z = k)
}
u.ia = function(a) {
  this.a.debug("Request complete");
  var b;
  if(this.k == a) {
    Td(this), this.k = k, b = 2
  }else {
    if(this.o == a) {
      this.o = k, b = 1
    }else {
      return
    }
  }
  this.h = a.h;
  if(0 != this.c) {
    if(a.I) {
      1 == b ? (b = A() - a.ma, Nd.dispatchEvent(new Pd(Nd, a.V ? a.V.length : 0, b, this.U)), Ud(this), this.P.length = 0) : Yd(this)
    }else {
      var c = a.Cb();
      if(3 == c || 7 == c || 0 == c && 0 < this.h) {
        this.a.debug("Not retrying due to error type")
      }else {
        this.a.debug("Maybe retrying, last error: " + cc(c, this.h));
        var d;
        if(d = 1 == b) {
          this.o || this.D ? (this.a.H("Request already in progress"), d = p) : this.c == Ld || this.U >= (this.Ga ? 0 : this.hb) ? d = p : (this.a.debug("Going to retry POST"), this.D = W(z(this.Pb, this, a), $d(this, this.U)), this.U++, d = j)
        }
        if(d || 2 == b && Zd(this)) {
          return
        }
        this.a.debug("Exceeded max number of retries")
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
          Z(this, 2)
      }
    }
  }
};
function $d(a, b) {
  var c = a.ec + Math.floor(Math.random() * a.Ac);
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b
}
u.ic = function(a) {
  0 <= Xa(arguments, this.c) || f(Error("Unexpected channel state: " + this.c))
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(2 == b || 9 == b) {
    var c = k;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = z(a.Cc, a);
    c || (c = new H("//www.google.com/images/cleardot.gif"), K(c));
    sd(c.toString(), 1E4, d)
  }else {
    V(2)
  }
  ae(a, b)
}
u.Cc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), V(2)) : (this.a.info("Failed to ping google.com"), V(1), ae(this, 8))
};
function ae(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.c = 0;
  a.e && a.e.channelError(a, b);
  be(a);
  Sd(a)
}
function be(a) {
  a.c = 0;
  a.h = -1;
  if(a.e) {
    if(0 == a.P.length && 0 == a.s.length) {
      a.e.channelClosed(a)
    }else {
      a.a.debug("Number of undelivered maps, pending: " + a.P.length + ", outgoing: " + a.s.length);
      var b = $a(a.P), c = $a(a.s);
      a.P.length = 0;
      a.s.length = 0;
      a.e.channelClosed(a, b, c)
    }
  }
}
function ud(a, b) {
  var c = Gd(a, k, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c
}
function yd(a, b, c) {
  b = Gd(a, a.Va() ? b : k, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b
}
function Gd(a, b, c) {
  var d;
  d = c instanceof H ? c.n() : new H(c, h);
  if("" != d.fa) {
    b && gb(d, b + "." + d.fa), hb(d, d.za)
  }else {
    var e = window.location, g = e.protocol, b = b ? b + "." + e.hostname : e.hostname, e = e.port, i = new H(k, h);
    g && fb(i, g);
    b && gb(i, b);
    e && hb(i, e);
    c && ib(i, c);
    d = i
  }
  a.ua && bb(a.ua, function(a, b) {
    J(d, b, a)
  });
  J(d, "VER", a.da);
  Wd(a, d);
  return d
}
u.eb = function(a) {
  a && !this.ob && f(Error("Can't create secondary domain capable XhrIo object."));
  a = new kd;
  a.ac = this.ob;
  return a
};
u.isActive = function() {
  return!!this.e && this.e.isActive(this)
};
function W(a, b) {
  ha(a) || f(Error("Fn must not be null and must be a function"));
  return v.setTimeout(function() {
    a()
  }, b)
}
u.F = function(a) {
  Nd.dispatchEvent(new Qd(Nd, a))
};
function V(a) {
  Nd.dispatchEvent(new Od(Nd, a))
}
u.Va = function() {
  return this.ob || !fc()
};
function ce() {
}
u = ce.prototype;
u.channelHandleMultipleArrays = k;
u.okToMakeRequest = ba(0);
u.channelOpened = r();
u.channelHandleArray = r();
u.channelError = r();
u.channelClosed = r();
u.getAdditionalParams = function() {
  return{}
};
u.getNetworkTestImageUri = ba(k);
u.isActive = ba(j);
u.badMapError = r();
u.correctHostPrefix = function(a) {
  return a
};
var $, de, ee = [].slice;
de = {"0":"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, g, i, l, q, m, n, s;
  m = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  if(w(b || "string" === typeof b)) {
    b = {}
  }
  l = b.reconnectTime || 3E3;
  s = function(a) {
    m.readyState = m.readyState = a
  };
  s(this.CLOSED);
  n = k;
  g = b.Jc;
  c = function() {
    var a, b;
    b = arguments[0];
    a = 2 <= arguments.length ? ee.call(arguments, 1) : [];
    try {
      return"function" === typeof m[b] ? m[b].apply(m, a) : h
    }catch(c) {
      "undefined" !== typeof console && console !== k && console.error(c.stack), f(c)
    }
  };
  d = new ce;
  d.channelOpened = function() {
    g = n;
    s($.OPEN);
    return c("onopen")
  };
  e = k;
  d.channelError = function(a, b) {
    var d;
    d = de[b];
    e = b;
    s($.Za);
    return c("onerror", d, b)
  };
  q = k;
  d.channelClosed = function(a, d, g) {
    if(m.readyState !== $.CLOSED) {
      n = k;
      a = e ? de[e] : "Closed";
      s($.CLOSED);
      try {
        c("onclose", a, d, g)
      }catch(fe) {
      }
      b.reconnect && (7 !== e && 0 !== e) && (d = 6 === e ? 0 : l, clearTimeout(q), q = setTimeout(i, d));
      return e = k
    }
  };
  d.channelHandleArray = function(a, b) {
    return c("onmessage", b)
  };
  i = function() {
    n && f(Error("Reconnect() called from invalid state"));
    s($.CONNECTING);
    c("onconnecting");
    clearTimeout(q);
    n = new Kd(b.appVersion);
    n.e = d;
    e = k;
    if(b.failFast) {
      var i = n;
      i.Ga = j;
      i.a.info("setFailFast: true");
      if((i.o || i.D) && i.U > (i.Ga ? 0 : i.hb)) {
        i.a.info("Retry count " + i.U + " > new maxRetries " + (i.Ga ? 0 : i.hb) + ". Fail immediately!"), i.o ? (i.o.cancel(), i.ia(i.o)) : (v.clearTimeout(i.D), i.D = k, Z(i, 2))
      }
    }
    return n.cb("" + a + "/test", "" + a + "/bind", k, g != k ? g.X : h, g != k ? g.va : h)
  };
  this.open = function() {
    m.readyState !== m.CLOSED && f(Error("Already open"));
    return i()
  };
  this.close = function() {
    clearTimeout(q);
    e = 0;
    if(m.readyState !== $.CLOSED) {
      s($.Za);
      var a = n;
      a.a.debug("disconnect()");
      Sd(a);
      if(3 == a.c) {
        var b = a.ya++, c = a.Ia.n();
        J(c, "SID", a.X);
        J(c, "RID", b);
        J(c, "TYPE", "terminate");
        Wd(a, c);
        b = new S(a, a.a, a.X, b, h);
        b.pa = 2;
        b.S = K(c.n());
        c = new Image;
        c.src = b.S;
        c.onload = c.onerror = z(b.kc, b);
        b.ma = A();
        jc(b)
      }
      be(a)
    }
  };
  this.sendMap = function(a) {
    var b;
    ((b = m.readyState) === $.Za || b === $.CLOSED) && f(Error("Cannot send to a closed connection"));
    b = n;
    0 == b.c && f(Error("Invalid operation: sending map when state is closed"));
    1E3 == b.s.length && b.a.H("Already have 1000 queued maps upon queueing " + Lc(a));
    b.s.push(new Md(b.pc++, a));
    (2 == b.c || 3 == b.c) && Ud(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:Lc(a)})
  };
  i();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.Za = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && exports !== k ? exports : window).BCSocket = $;

})();
