!function() {
	function t(t, e, n) {
		var r, i, o = document.querySelector('meta[name="viewport"]'),
			a = document.documentElement.clientWidth;
		switch (t) {
		case "fixed":
			r = e, i = a / e;
			break;
		case "rem":
			var s = window.devicePixelRatio || 1;
			r = a * s, i = 1 / s, document.documentElement.style.fontSize = 100 * (a * s / e) + "px"
		}
		o.setAttribute("content", "width=" + r + ",initial-scale=" + i + ",maximum-scale=" + i + ",minimum-scale=" + i), n && window.addEventListener("DOMContentLoaded", function() {
			document.body.style.fontSize = 50 / i + "px"
		})
	}
	t("fixed", 750)
}();
var Zepto = function() {
		function t(t) {
			return null == t ? String(t) : z[Y.call(t)] || "object"
		}
		function e(e) {
			return "function" == t(e)
		}
		function n(t) {
			return null != t && t == t.window
		}
		function r(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function i(e) {
			return "object" == t(e)
		}
		function o(t) {
			return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function a(t) {
			return "number" == typeof t.length
		}
		function s(t) {
			return S.call(t, function(t) {
				return null != t
			})
		}
		function u(t) {
			return t.length > 0 ? A.fn.concat.apply([], t) : t
		}
		function c(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function l(t) {
			return t in O ? O[t] : O[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function h(t, e) {
			return "number" != typeof e || I[c(t)] ? e : e + "px"
		}
		function f(t) {
			var e, n;
			return N[t] || (e = M.createElement(t), M.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), N[t] = n), N[t]
		}
		function p(t) {
			return "children" in t ? D.call(t.children) : A.map(t.childNodes, function(t) {
				if (1 == t.nodeType) return t
			})
		}
		function d(t, e) {
			var n, r = t ? t.length : 0;
			for (n = 0; n < r; n++) this[n] = t[n];
			this.length = r, this.selector = e || ""
		}
		function m(t, e, n) {
			for (T in e) n && (o(e[T]) || V(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), V(e[T]) && !V(t[T]) && (t[T] = []), m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
		}
		function g(t, e) {
			return null == e ? A(t) : A(t).filter(e)
		}
		function v(t, n, r, i) {
			return e(n) ? n.call(t, r, i) : n
		}
		function y(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}
		function w(t, e) {
			var n = t.className || "",
				r = n && n.baseVal !== E;
			return e === E ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
		}
		function _(t) {
			try {
				return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? A.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function b(t, e) {
			e(t);
			for (var n = 0, r = t.childNodes.length; n < r; n++) b(t.childNodes[n], e)
		}
		var E, T, A, x, C, k, P = [],
			L = P.concat,
			S = P.filter,
			D = P.slice,
			M = window.document,
			N = {},
			O = {},
			I = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			R = /^\s*<(\w+|!)[^>]*>/,
			B = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			j = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			$ = /^(?:body|html)$/i,
			H = /([A-Z])/g,
			U = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			q = ["after", "prepend", "before", "append"],
			F = M.createElement("table"),
			W = M.createElement("tr"),
			Z = {
				tr: M.createElement("tbody"),
				tbody: F,
				thead: F,
				tfoot: F,
				td: W,
				th: W,
				"*": M.createElement("div")
			},
			X = /complete|loaded|interactive/,
			J = /^[\w-]*$/,
			z = {},
			Y = z.toString,
			G = {},
			K = M.createElement("div"),
			Q = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			V = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return G.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var r, i = t.parentNode,
				o = !i;
			return o && (i = K).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && K.removeChild(t), r
		}, C = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, k = function(t) {
			return S.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, G.fragment = function(t, e, n) {
			var r, i, a;
			return B.test(t) && (r = A(M.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(j, "<$1></$2>")), e === E && (e = R.test(t) && RegExp.$1), e in Z || (e = "*"), a = Z[e], a.innerHTML = "" + t, r = A.each(D.call(a.childNodes), function() {
				a.removeChild(this)
			})), o(n) && (i = A(r), A.each(n, function(t, e) {
				U.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
			})), r
		}, G.Z = function(t, e) {
			return new d(t, e)
		}, G.isZ = function(t) {
			return t instanceof G.Z
		}, G.init = function(t, n) {
			var r;
			if (!t) return G.Z();
			if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && R.test(t)) r = G.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== E) return A(n).find(t);
				r = G.qsa(M, t)
			} else {
				if (e(t)) return A(M).ready(t);
				if (G.isZ(t)) return t;
				if (V(t)) r = s(t);
				else if (i(t)) r = [t], t = null;
				else if (R.test(t)) r = G.fragment(t.trim(), RegExp.$1, n), t = null;
				else {
					if (n !== E) return A(n).find(t);
					r = G.qsa(M, t)
				}
			}
			return G.Z(r, t)
		}, A = function(t, e) {
			return G.init(t, e)
		}, A.extend = function(t) {
			var e, n = D.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				m(t, n, e)
			}), t
		}, G.qsa = function(t, e) {
			var n, r = "#" == e[0],
				i = !r && "." == e[0],
				o = r || i ? e.slice(1) : e,
				a = J.test(o);
			return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, A.contains = M.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, A.type = t, A.isFunction = e, A.isWindow = n, A.isArray = V, A.isPlainObject = o, A.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, A.inArray = function(t, e, n) {
			return P.indexOf.call(e, t, n)
		}, A.camelCase = C, A.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, A.uuid = 0, A.support = {}, A.expr = {}, A.noop = function() {}, A.map = function(t, e) {
			var n, r, i, o = [];
			if (a(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n);
			else for (i in t) n = e(t[i], i), null != n && o.push(n);
			return u(o)
		}, A.each = function(t, e) {
			var n, r;
			if (a(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
			return t
		}, A.grep = function(t, e) {
			return S.call(t, e)
		}, window.JSON && (A.parseJSON = JSON.parse), A.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			z["[object " + e + "]"] = e.toLowerCase()
		}), A.fn = {
			constructor: G.Z,
			length: 0,
			forEach: P.forEach,
			reduce: P.reduce,
			push: P.push,
			sort: P.sort,
			splice: P.splice,
			indexOf: P.indexOf,
			concat: function() {
				var t, e, n = [];
				for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
				return L.apply(G.isZ(this) ? this.toArray() : this, n)
			},
			map: function(t) {
				return A(A.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return A(D.apply(this, arguments))
			},
			ready: function(t) {
				return X.test(M.readyState) && M.body ? t(A) : M.addEventListener("DOMContentLoaded", function() {
					t(A)
				}, !1), this
			},
			get: function(t) {
				return t === E ? D.call(this) : this[t >= 0 ? t : t + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return P.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return e(t) ? this.not(this.not(t)) : A(S.call(this, function(e) {
					return G.matches(e, t)
				}))
			},
			add: function(t, e) {
				return A(k(this.concat(A(t, e))))
			},
			is: function(t) {
				return this.length > 0 && G.matches(this[0], t)
			},
			not: function(t) {
				var n = [];
				if (e(t) && t.call !== E) this.each(function(e) {
					t.call(this, e) || n.push(this)
				});
				else {
					var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? D.call(t) : A(t);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && n.push(t)
					})
				}
				return A(n)
			},
			has: function(t) {
				return this.filter(function() {
					return i(t) ? A.contains(this, t) : A(this).find(t).size()
				})
			},
			eq: function(t) {
				return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !i(t) ? t : A(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !i(t) ? t : A(t)
			},
			find: function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? A(t).filter(function() {
					var t = this;
					return P.some.call(n, function(e) {
						return A.contains(e, t)
					})
				}) : 1 == this.length ? A(G.qsa(this[0], t)) : this.map(function() {
					return G.qsa(this, t)
				}) : A()
			},
			closest: function(t, e) {
				var n = this[0],
					i = !1;
				for ("object" == typeof t && (i = A(t)); n && !(i ? i.indexOf(n) >= 0 : G.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
				return A(n)
			},
			parents: function(t) {
				for (var e = [], n = this; n.length > 0;) n = A.map(n, function(t) {
					if ((t = t.parentNode) && !r(t) && e.indexOf(t) < 0) return e.push(t), t
				});
				return g(e, t)
			},
			parent: function(t) {
				return g(k(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return g(this.map(function() {
					return p(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return this.contentDocument || D.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return g(this.map(function(t, e) {
					return S.call(p(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return A.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = f(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var n = e(t);
				if (this[0] && !n) var r = A(t).get(0),
					i = r.parentNode || this.length > 1;
				return this.each(function(e) {
					A(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					A(this[0]).before(t = A(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					A(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var n = e(t);
				return this.each(function(e) {
					var r = A(this),
						i = r.contents(),
						o = n ? t.call(this, e) : t;
					i.length ? i.wrapAll(o) : r.append(o)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					A(this).replaceWith(A(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(t) {
				return this.each(function() {
					var e = A(this);
					(t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
				})
			},
			prev: function(t) {
				return A(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return A(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = this.innerHTML;
					A(this).empty().append(v(this, t, e, n))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = v(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(t, e) {
				var n;
				return "string" != typeof t || 1 in arguments ? this.each(function(n) {
					if (1 === this.nodeType) if (i(t)) for (T in t) y(this, T, t[T]);
					else y(this, t, v(this, e, n, this.getAttribute(t)))
				}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						y(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = Q[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = v(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(t, e) {
				var n = "data-" + t.replace(H, "-$1").toLowerCase(),
					r = 1 in arguments ? this.attr(n, e) : this.attr(n);
				return null !== r ? _(r) : E
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = v(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? A(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var n = A(this),
						r = v(this, t, e, n.offset()),
						i = n.offsetParent().offset(),
						o = {
							top: r.top - i.top,
							left: r.left - i.left
						};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
				if (!this.length) return null;
				if (!A.contains(M.documentElement, this[0])) return {
					top: 0,
					left: 0
				};
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(e, n) {
				if (arguments.length < 2) {
					var r, i = this[0];
					if (!i) return;
					if (r = getComputedStyle(i, ""), "string" == typeof e) return i.style[C(e)] || r.getPropertyValue(e);
					if (V(e)) {
						var o = {};
						return A.each(e, function(t, e) {
							o[e] = i.style[C(e)] || r.getPropertyValue(e)
						}), o
					}
				}
				var a = "";
				if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + h(e, n) : this.each(function() {
					this.style.removeProperty(c(e))
				});
				else for (T in e) e[T] || 0 === e[T] ? a += c(T) + ":" + h(T, e[T]) + ";" : this.each(function() {
					this.style.removeProperty(c(T))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(A(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return !!t && P.some.call(this, function(t) {
					return this.test(w(t))
				}, l(t))
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						x = [];
						var n = w(this),
							r = v(this, t, e, n);
						r.split(/\s+/g).forEach(function(t) {
							A(this).hasClass(t) || x.push(t)
						}, this), x.length && w(this, n + (n ? " " : "") + x.join(" "))
					}
				}) : this
			},
			removeClass: function(t) {
				return this.each(function(e) {
					if ("className" in this) {
						if (t === E) return w(this, "");
						x = w(this), v(this, t, e, x).split(/\s+/g).forEach(function(t) {
							x = x.replace(l(t), " ")
						}), w(this, x.trim())
					}
				})
			},
			toggleClass: function(t, e) {
				return t ? this.each(function(n) {
					var r = A(this),
						i = v(this, t, n, w(this));
					i.split(/\s+/g).forEach(function(t) {
						(e === E ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
					})
				}) : this
			},
			scrollTop: function(t) {
				if (this.length) {
					var e = "scrollTop" in this[0];
					return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ?
					function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft: function(t) {
				if (this.length) {
					var e = "scrollLeft" in this[0];
					return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ?
					function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						n = this.offset(),
						r = $.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return n.top -= parseFloat(A(t).css("margin-top")) || 0, n.left -= parseFloat(A(t).css("margin-left")) || 0, r.top += parseFloat(A(e[0]).css("border-top-width")) || 0, r.left += parseFloat(A(e[0]).css("border-left-width")) || 0, {
						top: n.top - r.top,
						left: n.left - r.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || M.body; t && !$.test(t.nodeName) && "static" == A(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, A.fn.detach = A.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			A.fn[t] = function(i) {
				var o, a = this[0];
				return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
					a = A(this), a.css(t, v(this, i, e, a[t]()))
				})
			}
		}), q.forEach(function(e, n) {
			var r = n % 2;
			A.fn[e] = function() {
				var e, i, o = A.map(arguments, function(n) {
					return e = t(n), "object" == e || "array" == e || null == n ? n : G.fragment(n)
				}),
					a = this.length > 1;
				return o.length < 1 ? this : this.each(function(t, e) {
					i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
					var s = A.contains(M.documentElement, i);
					o.forEach(function(t) {
						if (a) t = t.cloneNode(!0);
						else if (!i) return A(t).remove();
						i.insertBefore(t, e), s && b(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, A.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
				return A(t)[e](this), this
			}
		}), G.Z.prototype = d.prototype = A.fn, G.uniq = k, G.deserializeValue = _, A.zepto = G, A
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function e(e, n, r) {
		var i = t.Event(n);
		return t(e).trigger(i, r), !i.isDefaultPrevented()
	}
	function n(t, n, r, i) {
		if (t.global) return e(n || y, r, i)
	}
	function r(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}
	function i(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}
	function o(t, e) {
		var r = e.context;
		return e.beforeSend.call(r, t, e) !== !1 && n(e, r, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, r, "ajaxSend", [t, e])
	}
	function a(t, e, r, i) {
		var o = r.context,
			a = "success";
		r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
	}
	function s(t, e, r, i, o) {
		var a = i.context;
		i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
	}
	function u(t, e, r) {
		var o = r.context;
		r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
	}
	function c() {}
	function l(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : _.test(t) ? "script" : b.test(t) && "xml") || "text"
	}
	function h(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function f(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = h(e.url, e.data), e.data = void 0)
	}
	function p(e, n, r, i) {
		return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
			url: e,
			data: n,
			success: r,
			dataType: i
		}
	}
	function d(e, n, r, i) {
		var o, a = t.isArray(n),
			s = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
		})
	}
	var m, g, v = 0,
		y = window.document,
		w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		_ = /^(?:text|application)\/javascript/i,
		b = /^(?:text|application)\/xml/i,
		E = "application/json",
		T = "text/html",
		A = /^\s*$/,
		x = y.createElement("a");
	x.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e)) return t.ajax(e);
		var r, i, u = e.jsonpCallback,
			c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
			l = y.createElement("script"),
			h = window[c],
			f = function(e) {
				t(l).triggerHandler("error", e || "abort")
			},
			p = {
				abort: f
			};
		return n && n.promise(p), t(l).on("load error", function(o, u) {
			clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = h, r && t.isFunction(h) && h(r[0]), h = r = void 0
		}), o(p, e) === !1 ? (f("abort"), p) : (window[c] = function() {
			r = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function() {
			f("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: c,
		success: c,
		error: c,
		complete: c,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: E,
			xml: "application/xml, text/xml",
			html: T,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var n, i, u = t.extend({}, e || {}),
			p = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
		r(u), u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = x.protocol + "//" + x.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)), f(u);
		var d = u.dataType,
			v = /\?.+=\?/.test(u.url);
		if (v && (d = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = h(u.url, "_=" + Date.now())), "jsonp" == d) return v || (u.url = h(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(u, p);
		var w, _ = u.accepts[d],
			b = {},
			E = function(t, e) {
				b[t.toLowerCase()] = [t, e]
			},
			T = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol,
			C = u.xhr(),
			k = C.setRequestHeader;
		if (p && p.promise(C), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), E("Accept", _ || "*/*"), (_ = u.mimeType || _) && (_.indexOf(",") > -1 && (_ = _.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(_)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers) for (g in u.headers) E(g, u.headers[g]);
		if (C.setRequestHeader = E, C.onreadystatechange = function() {
			if (4 == C.readyState) {
				C.onreadystatechange = c, clearTimeout(w);
				var e, n = !1;
				if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == T) {
					d = d || l(u.mimeType || C.getResponseHeader("content-type")), e = C.responseText;
					try {
						"script" == d ? (0, eval)(e) : "xml" == d ? e = C.responseXML : "json" == d && (e = A.test(e) ? null : t.parseJSON(e))
					} catch (r) {
						n = r
					}
					n ? s(n, "parsererror", C, u, p) : a(e, C, u, p)
				} else s(C.statusText || null, C.status ? "error" : "abort", C, u, p)
			}
		}, o(C, u) === !1) return C.abort(), s(null, "abort", C, u, p), C;
		if (u.xhrFields) for (g in u.xhrFields) C[g] = u.xhrFields[g];
		var P = !("async" in u) || u.async;
		C.open(u.type, u.url, P, u.username, u.password);
		for (g in b) k.apply(C, b[g]);
		return u.timeout > 0 && (w = setTimeout(function() {
			C.onreadystatechange = c, C.abort(), s(null, "timeout", C, u, p)
		}, u.timeout)), C.send(u.data ? u.data : null), C
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, r) {
		if (!this.length) return this;
		var i, o = this,
			a = e.split(/\s/),
			s = p(e, n, r),
			u = s.success;
		return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(e) {
			o.html(i ? t("<div>").html(e.replace(w, "")).find(i) : e), u && u.apply(o, arguments)
		}, t.ajax(s), this
	};
	var C = encodeURIComponent;
	t.param = function(e, n) {
		var r = [];
		return r.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
		}, d(r, e, n), r.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	function e(t, e) {
		var n = this.os = {},
			r = this.browser = {},
			i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
			a = !! t.match(/\(Macintosh\; Intel /),
			s = t.match(/(iPad).*OS\s([\d_]+)/),
			u = t.match(/(iPod)(.*OS\s([\d_]+))?/),
			c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
			l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			h = /Win\d{2}|Windows/.test(e),
			f = t.match(/Windows Phone ([\d.]+)/),
			p = l && t.match(/TouchPad/),
			d = t.match(/Kindle\/([\d.]+)/),
			m = t.match(/Silk\/([\d._]+)/),
			g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
			v = t.match(/(BB10).*Version\/([\d.]+)/),
			y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			w = t.match(/PlayBook/),
			_ = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
			b = t.match(/Firefox\/([\d.]+)/),
			E = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
			T = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
			A = !_ && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
			x = A || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
		(r.webkit = !! i) && (r.version = i[1]), o && (n.android = !0, n.version = o[2]), c && !u && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), f && (n.wp = !0, n.version = f[1]), l && (n.webos = !0, n.version = l[2]), p && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), w && (r.playbook = !0), d && (n.kindle = !0, n.version = d[1]), m && (r.silk = !0, r.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (r.silk = !0), _ && (r.chrome = !0, r.version = _[1]), b && (r.firefox = !0, r.version = b[1]), E && (n.firefoxos = !0, n.version = E[1]), T && (r.ie = !0, r.version = T[1]), x && (a || n.ios || h) && (r.safari = !0, n.ios || (r.version = x[1])), A && (r.webview = !0), n.tablet = !! (s || w || o && !t.match(/Mobile/) || b && t.match(/Tablet/) || T && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || c || l || g || v || _ && t.match(/Android/) || _ && t.match(/CriOS\/([\d.]+)/) || b && t.match(/Mobile/) || T && t.match(/Touch/)))
	}
	e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function(t) {
	function e(t) {
		return t._zid || (t._zid = f++)
	}
	function n(t, n, o, a) {
		if (n = r(n), n.ns) var s = i(n.ns);
		return (g[e(t)] || []).filter(function(t) {
			return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
		})
	}
	function r(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function i(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function o(t, e) {
		return t.del && !y && t.e in w || !! e
	}
	function a(t) {
		return _[t] || y && w[t] || t
	}
	function s(n, i, s, u, l, f, p) {
		var d = e(n),
			m = g[d] || (g[d] = []);
		i.split(/\s/).forEach(function(e) {
			if ("ready" == e) return t(document).ready(s);
			var i = r(e);
			i.fn = s, i.sel = l, i.e in _ && (s = function(e) {
				var n = e.relatedTarget;
				if (!n || n !== this && !t.contains(this, n)) return i.fn.apply(this, arguments)
			}), i.del = f;
			var d = f || s;
			i.proxy = function(t) {
				if (t = c(t), !t.isImmediatePropagationStopped()) {
					t.data = u;
					var e = d.apply(n, t._args == h ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
		})
	}
	function u(t, r, i, s, u) {
		var c = e(t);
		(r || "").split(/\s/).forEach(function(e) {
			n(t, e, i, s).forEach(function(e) {
				delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
			})
		})
	}
	function c(e, n) {
		return !n && e.isDefaultPrevented || (n || (n = e), t.each(A, function(t, r) {
			var i = n[t];
			e[t] = function() {
				return this[r] = b, i && i.apply(n, arguments)
			}, e[r] = E
		}), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
	}
	function l(t) {
		var e, n = {
			originalEvent: t
		};
		for (e in t) T.test(e) || t[e] === h || (n[e] = t[e]);
		return c(n, t)
	}
	var h, f = 1,
		p = Array.prototype.slice,
		d = t.isFunction,
		m = function(t) {
			return "string" == typeof t
		},
		g = {},
		v = {},
		y = "onfocusin" in window,
		w = {
			focus: "focusin",
			blur: "focusout"
		},
		_ = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
		add: s,
		remove: u
	}, t.proxy = function(n, r) {
		var i = 2 in arguments && p.call(arguments, 2);
		if (d(n)) {
			var o = function() {
					return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
				};
			return o._zid = e(n), o
		}
		if (m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, r) {
		return this.on(t, e, n, r, 1)
	};
	var b = function() {
			return !0
		},
		E = function() {
			return !1
		},
		T = /^([A-Z]|returnValue$|layer[XY]$)/,
		A = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, r, i, o) {
		var a, c, f = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			f.on(t, n, r, e, o)
		}), f) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = h), i !== h && r !== !1 || (i = r, r = h), i === !1 && (i = E), f.each(function(h, f) {
			o && (a = function(t) {
				return u(f, t.type, i), i.apply(this, arguments)
			}), n && (c = function(e) {
				var r, o = t(e.target).closest(n, f).get(0);
				if (o && o !== f) return r = t.extend(l(e), {
					currentTarget: o,
					liveFired: f
				}), (a || i).apply(o, [r].concat(p.call(arguments, 1)))
			}), s(f, e, i, r, n, c || a)
		}))
	}, t.fn.off = function(e, n, r) {
		var i = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			i.off(t, n, e)
		}), i) : (m(n) || d(r) || r === !1 || (r = n, n = h), r === !1 && (r = E), i.each(function() {
			u(this, e, r, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
			e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, r) {
		var i, o;
		return this.each(function(a, s) {
			i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function(t, e) {
				if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1
			})
		}), o
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		m(t) || (e = t, t = e.type);
		var n = document.createEvent(v[t] || "Events"),
			r = !0;
		if (e) for (var i in e)"bubbles" == i ? r = !! e[i] : n[i] = e[i];
		return n.initEvent(t, r, !0), c(n)
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, r = [],
			i = function(t) {
				return t.forEach ? t.forEach(i) : void r.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(r, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
		}), r
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t, e) {
	function n(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}
	function r(t) {
		return i ? i + t : t.toLowerCase()
	}
	var i, o, a, s, u, c, l, h, f, p, d = "",
		m = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		g = document.createElement("div"),
		v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		y = {};
	t.each(m, function(t, n) {
		if (g.style[t + "TransitionProperty"] !== e) return d = "-" + t.toLowerCase() + "-", i = n, !1
	}), o = d + "transform", y[a = d + "transition-property"] = y[s = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[h = d + "animation-duration"] = y[p = d + "animation-delay"] = y[f = d + "animation-timing-function"] = "", t.fx = {
		off: i === e && g.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: d,
		transitionEnd: r("TransitionEnd"),
		animationEnd: r("AnimationEnd")
	}, t.fn.animate = function(n, r, i, o, a) {
		return t.isFunction(r) && (o = r, i = e, r = e), t.isFunction(i) && (o = i, i = e), t.isPlainObject(r) && (i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a)
	}, t.fn.anim = function(r, i, d, m, g) {
		var w, _, b, E = {},
			T = "",
			A = this,
			x = t.fx.transitionEnd,
			C = !1;
		if (i === e && (i = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (i = 0), "string" == typeof r) E[l] = r, E[h] = i + "s", E[p] = g + "s", E[f] = d || "linear", x = t.fx.animationEnd;
		else {
			_ = [];
			for (w in r) v.test(w) ? T += w + "(" + r[w] + ") " : (E[w] = r[w], _.push(n(w)));
			T && (E[o] = T, _.push(o)), i > 0 && "object" == typeof r && (E[a] = _.join(", "), E[s] = i + "s", E[c] = g + "s", E[u] = d || "linear")
		}
		return b = function(e) {
			if ("undefined" != typeof e) {
				if (e.target !== e.currentTarget) return;
				t(e.target).unbind(x, b)
			} else t(this).unbind(x, b);
			C = !0, t(this).css(y), m && m.call(this)
		}, i > 0 && (this.bind(x, b), setTimeout(function() {
			C || b.call(A)
		}, 1e3 * (i + g) + 25)), this.size() && this.get(0).clientLeft, this.css(E), i <= 0 && setTimeout(function() {
			A.each(function() {
				b.call(this)
			})
		}, 0), this
	}, g = null
}(Zepto), function(t, e) {
	function n(n, r, i, o, a) {
		"function" != typeof r || a || (a = r, r = e);
		var s = {
			opacity: i
		};
		return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a)
	}
	function r(e, r, i, o) {
		return n(e, r, 0, i, function() {
			a.call(t(this)), o && o.call(this)
		})
	}
	var i = window.document,
		o = (i.documentElement, t.fn.show),
		a = t.fn.hide,
		s = t.fn.toggle;
	t.fn.show = function(t, r) {
		return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", r)
	}, t.fn.hide = function(t, n) {
		return t === e ? a.call(this) : r(this, t, "0,0", n)
	}, t.fn.toggle = function(n, r) {
		return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
			var e = t(this);
			e["none" == e.css("display") ? "show" : "hide"](n, r)
		})
	}, t.fn.fadeTo = function(t, e, r) {
		return n(this, t, e, null, r)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return r(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var r = t(this);
			r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn" : "fadeOut"](e, n)
		})
	}
}(Zepto), function(t) {
	function e(t) {
		return "tagName" in t ? t : t.parentNode
	}
	if (t.os.ios) {
		var n, r = {};
		t(document).bind("gesturestart", function(t) {
			var i = Date.now();
			i - (r.last || i);
			r.target = e(t.target), n && clearTimeout(n), r.e1 = t.scale, r.last = i
		}).bind("gesturechange", function(t) {
			r.e2 = t.scale
		}).bind("gestureend", function(e) {
			r.e2 > 0 ? (0 != Math.abs(r.e1 - r.e2) && t(r.target).trigger("pinch") && t(r.target).trigger("pinch" + (r.e1 - r.e2 > 0 ? "In" : "Out")), r.e1 = r.e2 = r.last = 0) : "last" in r && (r = {})
		}), ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
			t.fn[e] = function(t) {
				return this.bind(e, t)
			}
		})
	}
}(Zepto), function(t) {
	function e(e) {
		return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
	}
	function n(t, e) {
		t = t.replace(/=#\]/g, '="#"]');
		var n, r, i = s.exec(t);
		if (i && i[2] in a && (n = a[i[2]], r = i[3], t = i[1], r)) {
			var o = Number(r);
			r = isNaN(o) ? r.replace(/^["']|["']$/g, "") : o
		}
		return e(t, n, r)
	}
	var r = t.zepto,
		i = r.qsa,
		o = r.matches,
		a = t.expr[":"] = {
			visible: function() {
				if (e(this)) return this
			},
			hidden: function() {
				if (!e(this)) return this
			},
			selected: function() {
				if (this.selected) return this
			},
			checked: function() {
				if (this.checked) return this
			},
			parent: function() {
				return this.parentNode
			},
			first: function(t) {
				if (0 === t) return this
			},
			last: function(t, e) {
				if (t === e.length - 1) return this
			},
			eq: function(t, e, n) {
				if (t === n) return this
			},
			contains: function(e, n, r) {
				if (t(this).text().indexOf(r) > -1) return this;
			},
			has: function(t, e, n) {
				if (r.qsa(this, n).length) return this
			}
		},
		s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
		u = /^\s*>/,
		c = "Zepto" + +new Date;
	r.qsa = function(e, o) {
		return n(o, function(n, a, s) {
			try {
				var l;
				!n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
				var h = i(e, n)
			} catch (f) {
				throw console.error("error performing selector: %o", o), f
			} finally {
				l && l.removeClass(c)
			}
			return a ? r.uniq(t.map(h, function(t, e) {
				return a.call(t, e, h, s)
			})) : h
		})
	}, r.matches = function(t, e) {
		return n(e, function(e, n, r) {
			return (!e || o(t, e)) && (!n || n.call(t, null, r) === t)
		})
	}
}(Zepto), function(t) {
	t.fn.end = function() {
		return this.prevObject || t()
	}, t.fn.andSelf = function() {
		return this.add(this.prevObject || t())
	}, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = n.apply(this, arguments);
			return t.prevObject = this, t
		}
	})
}(Zepto), function(t) {
	function e(t, e, n, r) {
		return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
	}
	function n() {
		l = null, f.last && (f.el.trigger("longTap"), f = {})
	}
	function r() {
		l && clearTimeout(l), l = null
	}
	function i() {
		s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, f = {}
	}
	function o(t) {
		return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
	}
	function a(t, e) {
		return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
	}
	var s, u, c, l, h, f = {},
		p = 750;
	t(document).ready(function() {
		var d, m, g, v, y = 0,
			w = 0;
		"MSGesture" in window && (h = new MSGesture, h.target = document.body), t(document).bind("MSGestureEnd", function(t) {
			var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
			e && (f.el.trigger("swipe"), f.el.trigger("swipe" + e))
		}).on("touchstart MSPointerDown pointerdown", function(e) {
			(v = a(e, "down")) && !o(e) || (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && f.x2 && (f.x2 = void 0, f.y2 = void 0), d = Date.now(), m = d - (f.last || d), f.el = t("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), f.x1 = g.pageX, f.y1 = g.pageY, m > 0 && m <= 250 && (f.isDoubleTap = !0), f.last = d, l = setTimeout(n, p), h && v && h.addPointer(e.pointerId))
		}).on("touchmove MSPointerMove pointermove", function(t) {
			(v = a(t, "move")) && !o(t) || (g = v ? t : t.touches[0], r(), f.x2 = g.pageX, f.y2 = g.pageY, y += Math.abs(f.x1 - f.x2), w += Math.abs(f.y1 - f.y2))
		}).on("touchend MSPointerUp pointerup", function(n) {
			(v = a(n, "up")) && !o(n) || (r(), f.x2 && Math.abs(f.x1 - f.x2) > 30 || f.y2 && Math.abs(f.y1 - f.y2) > 30 ? c = setTimeout(function() {
				f.el.trigger("swipe"), f.el.trigger("swipe" + e(f.x1, f.x2, f.y1, f.y2)), f = {}
			}, 0) : "last" in f && (y < 30 && w < 30 ? u = setTimeout(function() {
				var e = t.Event("tap");
				e.cancelTouch = i, f.el.trigger(e), f.isDoubleTap ? (f.el && f.el.trigger("doubleTap"), f = {}) : s = setTimeout(function() {
					s = null, f.el && f.el.trigger("singleTap"), f = {}
				}, 250)
			}, 0) : f = {}), y = w = 0)
		}).on("touchcancel MSPointerCancel pointercancel", i), t(window).on("scroll", i)
	}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
		t.fn[e] = function(t) {
			return this.on(e, t)
		}
	})
}(Zepto);
var QRCode;
!
function() {
	function t(t) {
		this.mode = c.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
		for (var e = 0, n = this.data.length; e < n; e++) {
			var r = [],
				i = this.data.charCodeAt(e);
			i > 65536 ? (r[0] = 240 | (1835008 & i) >>> 18, r[1] = 128 | (258048 & i) >>> 12, r[2] = 128 | (4032 & i) >>> 6, r[3] = 128 | 63 & i) : i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12, r[1] = 128 | (4032 & i) >>> 6, r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6, r[1] = 128 | 63 & i) : r[0] = i, this.parsedData.push(r)
		}
		this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
	}
	function e(t, e) {
		this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
	}
	function n(t, e) {
		if (void 0 == t.length) throw new Error(t.length + "/" + e);
		for (var n = 0; n < t.length && 0 == t[n];) n++;
		this.num = new Array(t.length - n + e);
		for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n]
	}
	function r(t, e) {
		this.totalCount = t, this.dataCount = e
	}
	function i() {
		this.buffer = [], this.length = 0
	}
	function o() {
		return "undefined" != typeof CanvasRenderingContext2D
	}
	function a() {
		var t = !1,
			e = navigator.userAgent;
		return /android/i.test(e) && (t = !0, aMat = e.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (t = parseFloat(aMat[1]))), t
	}
	function s(t, e) {
		for (var n = 1, r = u(t), i = 0, o = m.length; i <= o; i++) {
			var a = 0;
			switch (e) {
			case l.L:
				a = m[i][0];
				break;
			case l.M:
				a = m[i][1];
				break;
			case l.Q:
				a = m[i][2];
				break;
			case l.H:
				a = m[i][3]
			}
			if (r <= a) break;
			n++
		}
		if (n > m.length) throw new Error("Too long data");
		return n
	}
	function u(t) {
		var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
		return e.length + (e.length != t ? 3 : 0)
	}
	t.prototype = {
		getLength: function(t) {
			return this.parsedData.length
		},
		write: function(t) {
			for (var e = 0, n = this.parsedData.length; e < n; e++) t.put(this.parsedData[e], 8)
		}
	}, e.prototype = {
		addData: function(e) {
			var n = new t(e);
			this.dataList.push(n), this.dataCache = null
		},
		isDark: function(t, e) {
			if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
			return this.modules[t][e]
		},
		getModuleCount: function() {
			return this.moduleCount
		},
		make: function() {
			this.makeImpl(!1, this.getBestMaskPattern())
		},
		makeImpl: function(t, n) {
			this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
			for (var r = 0; r < this.moduleCount; r++) {
				this.modules[r] = new Array(this.moduleCount);
				for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null
			}
			this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, n), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
		},
		setupPositionProbePattern: function(t, e) {
			for (var n = -1; n <= 7; n++) if (!(t + n <= -1 || this.moduleCount <= t + n)) for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? this.modules[t + n][e + r] = !0 : this.modules[t + n][e + r] = !1)
		},
		getBestMaskPattern: function() {
			for (var t = 0, e = 0, n = 0; n < 8; n++) {
				this.makeImpl(!0, n);
				var r = f.getLostPoint(this);
				(0 == n || t > r) && (t = r, e = n)
			}
			return e
		},
		createMovieClip: function(t, e, n) {
			var r = t.createEmptyMovieClip(e, n),
				i = 1;
			this.make();
			for (var o = 0; o < this.modules.length; o++) for (var a = o * i, s = 0; s < this.modules[o].length; s++) {
				var u = s * i,
					c = this.modules[o][s];
				c && (r.beginFill(0, 100), r.moveTo(u, a), r.lineTo(u + i, a), r.lineTo(u + i, a + i), r.lineTo(u, a + i), r.endFill())
			}
			return r
		},
		setupTimingPattern: function() {
			for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
			for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
		},
		setupPositionAdjustPattern: function() {
			for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
				var r = t[e],
					i = t[n];
				if (null == this.modules[r][i]) for (var o = -2; o <= 2; o++) for (var a = -2; a <= 2; a++) o == -2 || 2 == o || a == -2 || 2 == a || 0 == o && 0 == a ? this.modules[r + o][i + a] = !0 : this.modules[r + o][i + a] = !1
			}
		},
		setupTypeNumber: function(t) {
			for (var e = f.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
				var r = !t && 1 == (e >> n & 1);
				this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
			}
			for (var n = 0; n < 18; n++) {
				var r = !t && 1 == (e >> n & 1);
				this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
			}
		},
		setupTypeInfo: function(t, e) {
			for (var n = this.errorCorrectLevel << 3 | e, r = f.getBCHTypeInfo(n), i = 0; i < 15; i++) {
				var o = !t && 1 == (r >> i & 1);
				i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
			}
			for (var i = 0; i < 15; i++) {
				var o = !t && 1 == (r >> i & 1);
				i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
			}
			this.modules[this.moduleCount - 8][8] = !t
		},
		mapData: function(t, e) {
			for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;;) {
				for (var s = 0; s < 2; s++) if (null == this.modules[r][a - s]) {
					var u = !1;
					o < t.length && (u = 1 == (t[o] >>> i & 1));
					var c = f.getMask(e, r, a - s);
					c && (u = !u), this.modules[r][a - s] = u, i--, i == -1 && (o++, i = 7)
				}
				if (r += n, r < 0 || this.moduleCount <= r) {
					r -= n, n = -n;
					break
				}
			}
		}
	}, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(t, n, o) {
		for (var a = r.getRSBlocks(t, n), s = new i, u = 0; u < o.length; u++) {
			var c = o[u];
			s.put(c.mode, 4), s.put(c.getLength(), f.getLengthInBits(c.mode, t)), c.write(s)
		}
		for (var l = 0, u = 0; u < a.length; u++) l += a[u].dataCount;
		if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
		for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
		for (; !(s.getLengthInBits() >= 8 * l) && (s.put(e.PAD0, 8), !(s.getLengthInBits() >= 8 * l));) s.put(e.PAD1, 8);
		return e.createBytes(s, a)
	}, e.createBytes = function(t, e) {
		for (var r = 0, i = 0, o = 0, a = new Array(e.length), s = new Array(e.length), u = 0; u < e.length; u++) {
			var c = e[u].dataCount,
				l = e[u].totalCount - c;
			i = Math.max(i, c), o = Math.max(o, l), a[u] = new Array(c);
			for (var h = 0; h < a[u].length; h++) a[u][h] = 255 & t.buffer[h + r];
			r += c;
			var p = f.getErrorCorrectPolynomial(l),
				d = new n(a[u], p.getLength() - 1),
				m = d.mod(p);
			s[u] = new Array(p.getLength() - 1);
			for (var h = 0; h < s[u].length; h++) {
				var g = h + m.getLength() - s[u].length;
				s[u][h] = g >= 0 ? m.get(g) : 0
			}
		}
		for (var v = 0, h = 0; h < e.length; h++) v += e[h].totalCount;
		for (var y = new Array(v), w = 0, h = 0; h < i; h++) for (var u = 0; u < e.length; u++) h < a[u].length && (y[w++] = a[u][h]);
		for (var h = 0; h < o; h++) for (var u = 0; u < e.length; u++) h < s[u].length && (y[w++] = s[u][h]);
		return y
	};
	for (var c = {
		MODE_NUMBER: 1,
		MODE_ALPHA_NUM: 2,
		MODE_8BIT_BYTE: 4,
		MODE_KANJI: 8
	}, l = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	}, h = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	}, f = {
		PATTERN_POSITION_TABLE: [
			[],
			[6, 18],
			[6, 22],
			[6, 26],
			[6, 30],
			[6, 34],
			[6, 22, 38],
			[6, 24, 42],
			[6, 26, 46],
			[6, 28, 50],
			[6, 30, 54],
			[6, 32, 58],
			[6, 34, 62],
			[6, 26, 46, 66],
			[6, 26, 48, 70],
			[6, 26, 50, 74],
			[6, 30, 54, 78],
			[6, 30, 56, 82],
			[6, 30, 58, 86],
			[6, 34, 62, 90],
			[6, 28, 50, 72, 94],
			[6, 26, 50, 74, 98],
			[6, 30, 54, 78, 102],
			[6, 28, 54, 80, 106],
			[6, 32, 58, 84, 110],
			[6, 30, 58, 86, 114],
			[6, 34, 62, 90, 118],
			[6, 26, 50, 74, 98, 122],
			[6, 30, 54, 78, 102, 126],
			[6, 26, 52, 78, 104, 130],
			[6, 30, 56, 82, 108, 134],
			[6, 34, 60, 86, 112, 138],
			[6, 30, 58, 86, 114, 142],
			[6, 34, 62, 90, 118, 146],
			[6, 30, 54, 78, 102, 126, 150],
			[6, 24, 50, 76, 102, 128, 154],
			[6, 28, 54, 80, 106, 132, 158],
			[6, 32, 58, 84, 110, 136, 162],
			[6, 26, 54, 82, 110, 138, 166],
			[6, 30, 58, 86, 114, 142, 170]
		],
		G15: 1335,
		G18: 7973,
		G15_MASK: 21522,
		getBCHTypeInfo: function(t) {
			for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
			return (t << 10 | e) ^ f.G15_MASK
		},
		getBCHTypeNumber: function(t) {
			for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
			return t << 12 | e
		},
		getBCHDigit: function(t) {
			for (var e = 0; 0 != t;) e++, t >>>= 1;
			return e
		},
		getPatternPosition: function(t) {
			return f.PATTERN_POSITION_TABLE[t - 1]
		},
		getMask: function(t, e, n) {
			switch (t) {
			case h.PATTERN000:
				return (e + n) % 2 == 0;
			case h.PATTERN001:
				return e % 2 == 0;
			case h.PATTERN010:
				return n % 3 == 0;
			case h.PATTERN011:
				return (e + n) % 3 == 0;
			case h.PATTERN100:
				return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
			case h.PATTERN101:
				return e * n % 2 + e * n % 3 == 0;
			case h.PATTERN110:
				return (e * n % 2 + e * n % 3) % 2 == 0;
			case h.PATTERN111:
				return (e * n % 3 + (e + n) % 2) % 2 == 0;
			default:
				throw new Error("bad maskPattern:" + t)
			}
		},
		getErrorCorrectPolynomial: function(t) {
			for (var e = new n([1], 0), r = 0; r < t; r++) e = e.multiply(new n([1, p.gexp(r)], 0));
			return e
		},
		getLengthInBits: function(t, e) {
			if (1 <= e && e < 10) switch (t) {
			case c.MODE_NUMBER:
				return 10;
			case c.MODE_ALPHA_NUM:
				return 9;
			case c.MODE_8BIT_BYTE:
				return 8;
			case c.MODE_KANJI:
				return 8;
			default:
				throw new Error("mode:" + t)
			} else if (e < 27) switch (t) {
			case c.MODE_NUMBER:
				return 12;
			case c.MODE_ALPHA_NUM:
				return 11;
			case c.MODE_8BIT_BYTE:
				return 16;
			case c.MODE_KANJI:
				return 10;
			default:
				throw new Error("mode:" + t)
			} else {
				if (!(e < 41)) throw new Error("type:" + e);
				switch (t) {
				case c.MODE_NUMBER:
					return 14;
				case c.MODE_ALPHA_NUM:
					return 13;
				case c.MODE_8BIT_BYTE:
					return 16;
				case c.MODE_KANJI:
					return 12;
				default:
					throw new Error("mode:" + t)
				}
			}
		},
		getLostPoint: function(t) {
			for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++) for (var i = 0; i < e; i++) {
				for (var o = 0, a = t.isDark(r, i), s = -1; s <= 1; s++) if (!(r + s < 0 || e <= r + s)) for (var u = -1; u <= 1; u++) i + u < 0 || e <= i + u || 0 == s && 0 == u || a == t.isDark(r + s, i + u) && o++;
				o > 5 && (n += 3 + o - 5)
			}
			for (var r = 0; r < e - 1; r++) for (var i = 0; i < e - 1; i++) {
				var c = 0;
				t.isDark(r, i) && c++, t.isDark(r + 1, i) && c++, t.isDark(r, i + 1) && c++, t.isDark(r + 1, i + 1) && c++, 0 != c && 4 != c || (n += 3)
			}
			for (var r = 0; r < e; r++) for (var i = 0; i < e - 6; i++) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
			for (var i = 0; i < e; i++) for (var r = 0; r < e - 6; r++) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
			for (var l = 0, i = 0; i < e; i++) for (var r = 0; r < e; r++) t.isDark(r, i) && l++;
			var h = Math.abs(100 * l / e / e - 50) / 5;
			return n += 10 * h
		}
	}, p = {
		glog: function(t) {
			if (t < 1) throw new Error("glog(" + t + ")");
			return p.LOG_TABLE[t]
		},
		gexp: function(t) {
			for (; t < 0;) t += 255;
			for (; t >= 256;) t -= 255;
			return p.EXP_TABLE[t]
		},
		EXP_TABLE: new Array(256),
		LOG_TABLE: new Array(256)
	}, d = 0; d < 8; d++) p.EXP_TABLE[d] = 1 << d;
	for (var d = 8; d < 256; d++) p.EXP_TABLE[d] = p.EXP_TABLE[d - 4] ^ p.EXP_TABLE[d - 5] ^ p.EXP_TABLE[d - 6] ^ p.EXP_TABLE[d - 8];
	for (var d = 0; d < 255; d++) p.LOG_TABLE[p.EXP_TABLE[d]] = d;
	n.prototype = {
		get: function(t) {
			return this.num[t]
		},
		getLength: function() {
			return this.num.length
		},
		multiply: function(t) {
			for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var i = 0; i < t.getLength(); i++) e[r + i] ^= p.gexp(p.glog(this.get(r)) + p.glog(t.get(i)));
			return new n(e, 0)
		},
		mod: function(t) {
			if (this.getLength() - t.getLength() < 0) return this;
			for (var e = p.glog(this.get(0)) - p.glog(t.get(0)), r = new Array(this.getLength()), i = 0; i < this.getLength(); i++) r[i] = this.get(i);
			for (var i = 0; i < t.getLength(); i++) r[i] ^= p.gexp(p.glog(t.get(i)) + e);
			return new n(r, 0).mod(t)
		}
	}, r.RS_BLOCK_TABLE = [
		[1, 26, 19],
		[1, 26, 16],
		[1, 26, 13],
		[1, 26, 9],
		[1, 44, 34],
		[1, 44, 28],
		[1, 44, 22],
		[1, 44, 16],
		[1, 70, 55],
		[1, 70, 44],
		[2, 35, 17],
		[2, 35, 13],
		[1, 100, 80],
		[2, 50, 32],
		[2, 50, 24],
		[4, 25, 9],
		[1, 134, 108],
		[2, 67, 43],
		[2, 33, 15, 2, 34, 16],
		[2, 33, 11, 2, 34, 12],
		[2, 86, 68],
		[4, 43, 27],
		[4, 43, 19],
		[4, 43, 15],
		[2, 98, 78],
		[4, 49, 31],
		[2, 32, 14, 4, 33, 15],
		[4, 39, 13, 1, 40, 14],
		[2, 121, 97],
		[2, 60, 38, 2, 61, 39],
		[4, 40, 18, 2, 41, 19],
		[4, 40, 14, 2, 41, 15],
		[2, 146, 116],
		[3, 58, 36, 2, 59, 37],
		[4, 36, 16, 4, 37, 17],
		[4, 36, 12, 4, 37, 13],
		[2, 86, 68, 2, 87, 69],
		[4, 69, 43, 1, 70, 44],
		[6, 43, 19, 2, 44, 20],
		[6, 43, 15, 2, 44, 16],
		[4, 101, 81],
		[1, 80, 50, 4, 81, 51],
		[4, 50, 22, 4, 51, 23],
		[3, 36, 12, 8, 37, 13],
		[2, 116, 92, 2, 117, 93],
		[6, 58, 36, 2, 59, 37],
		[4, 46, 20, 6, 47, 21],
		[7, 42, 14, 4, 43, 15],
		[4, 133, 107],
		[8, 59, 37, 1, 60, 38],
		[8, 44, 20, 4, 45, 21],
		[12, 33, 11, 4, 34, 12],
		[3, 145, 115, 1, 146, 116],
		[4, 64, 40, 5, 65, 41],
		[11, 36, 16, 5, 37, 17],
		[11, 36, 12, 5, 37, 13],
		[5, 109, 87, 1, 110, 88],
		[5, 65, 41, 5, 66, 42],
		[5, 54, 24, 7, 55, 25],
		[11, 36, 12],
		[5, 122, 98, 1, 123, 99],
		[7, 73, 45, 3, 74, 46],
		[15, 43, 19, 2, 44, 20],
		[3, 45, 15, 13, 46, 16],
		[1, 135, 107, 5, 136, 108],
		[10, 74, 46, 1, 75, 47],
		[1, 50, 22, 15, 51, 23],
		[2, 42, 14, 17, 43, 15],
		[5, 150, 120, 1, 151, 121],
		[9, 69, 43, 4, 70, 44],
		[17, 50, 22, 1, 51, 23],
		[2, 42, 14, 19, 43, 15],
		[3, 141, 113, 4, 142, 114],
		[3, 70, 44, 11, 71, 45],
		[17, 47, 21, 4, 48, 22],
		[9, 39, 13, 16, 40, 14],
		[3, 135, 107, 5, 136, 108],
		[3, 67, 41, 13, 68, 42],
		[15, 54, 24, 5, 55, 25],
		[15, 43, 15, 10, 44, 16],
		[4, 144, 116, 4, 145, 117],
		[17, 68, 42],
		[17, 50, 22, 6, 51, 23],
		[19, 46, 16, 6, 47, 17],
		[2, 139, 111, 7, 140, 112],
		[17, 74, 46],
		[7, 54, 24, 16, 55, 25],
		[34, 37, 13],
		[4, 151, 121, 5, 152, 122],
		[4, 75, 47, 14, 76, 48],
		[11, 54, 24, 14, 55, 25],
		[16, 45, 15, 14, 46, 16],
		[6, 147, 117, 4, 148, 118],
		[6, 73, 45, 14, 74, 46],
		[11, 54, 24, 16, 55, 25],
		[30, 46, 16, 2, 47, 17],
		[8, 132, 106, 4, 133, 107],
		[8, 75, 47, 13, 76, 48],
		[7, 54, 24, 22, 55, 25],
		[22, 45, 15, 13, 46, 16],
		[10, 142, 114, 2, 143, 115],
		[19, 74, 46, 4, 75, 47],
		[28, 50, 22, 6, 51, 23],
		[33, 46, 16, 4, 47, 17],
		[8, 152, 122, 4, 153, 123],
		[22, 73, 45, 3, 74, 46],
		[8, 53, 23, 26, 54, 24],
		[12, 45, 15, 28, 46, 16],
		[3, 147, 117, 10, 148, 118],
		[3, 73, 45, 23, 74, 46],
		[4, 54, 24, 31, 55, 25],
		[11, 45, 15, 31, 46, 16],
		[7, 146, 116, 7, 147, 117],
		[21, 73, 45, 7, 74, 46],
		[1, 53, 23, 37, 54, 24],
		[19, 45, 15, 26, 46, 16],
		[5, 145, 115, 10, 146, 116],
		[19, 75, 47, 10, 76, 48],
		[15, 54, 24, 25, 55, 25],
		[23, 45, 15, 25, 46, 16],
		[13, 145, 115, 3, 146, 116],
		[2, 74, 46, 29, 75, 47],
		[42, 54, 24, 1, 55, 25],
		[23, 45, 15, 28, 46, 16],
		[17, 145, 115],
		[10, 74, 46, 23, 75, 47],
		[10, 54, 24, 35, 55, 25],
		[19, 45, 15, 35, 46, 16],
		[17, 145, 115, 1, 146, 116],
		[14, 74, 46, 21, 75, 47],
		[29, 54, 24, 19, 55, 25],
		[11, 45, 15, 46, 46, 16],
		[13, 145, 115, 6, 146, 116],
		[14, 74, 46, 23, 75, 47],
		[44, 54, 24, 7, 55, 25],
		[59, 46, 16, 1, 47, 17],
		[12, 151, 121, 7, 152, 122],
		[12, 75, 47, 26, 76, 48],
		[39, 54, 24, 14, 55, 25],
		[22, 45, 15, 41, 46, 16],
		[6, 151, 121, 14, 152, 122],
		[6, 75, 47, 34, 76, 48],
		[46, 54, 24, 10, 55, 25],
		[2, 45, 15, 64, 46, 16],
		[17, 152, 122, 4, 153, 123],
		[29, 74, 46, 14, 75, 47],
		[49, 54, 24, 10, 55, 25],
		[24, 45, 15, 46, 46, 16],
		[4, 152, 122, 18, 153, 123],
		[13, 74, 46, 32, 75, 47],
		[48, 54, 24, 14, 55, 25],
		[42, 45, 15, 32, 46, 16],
		[20, 147, 117, 4, 148, 118],
		[40, 75, 47, 7, 76, 48],
		[43, 54, 24, 22, 55, 25],
		[10, 45, 15, 67, 46, 16],
		[19, 148, 118, 6, 149, 119],
		[18, 75, 47, 31, 76, 48],
		[34, 54, 24, 34, 55, 25],
		[20, 45, 15, 61, 46, 16]
	], r.getRSBlocks = function(t, e) {
		var n = r.getRsBlockTable(t, e);
		if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
		for (var i = n.length / 3, o = [], a = 0; a < i; a++) for (var s = n[3 * a + 0], u = n[3 * a + 1], c = n[3 * a + 2], l = 0; l < s; l++) o.push(new r(u, c));
		return o
	}, r.getRsBlockTable = function(t, e) {
		switch (e) {
		case l.L:
			return r.RS_BLOCK_TABLE[4 * (t - 1) + 0];
		case l.M:
			return r.RS_BLOCK_TABLE[4 * (t - 1) + 1];
		case l.Q:
			return r.RS_BLOCK_TABLE[4 * (t - 1) + 2];
		case l.H:
			return r.RS_BLOCK_TABLE[4 * (t - 1) + 3];
		default:
			return
		}
	}, i.prototype = {
		get: function(t) {
			var e = Math.floor(t / 8);
			return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
		},
		put: function(t, e) {
			for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
		},
		getLengthInBits: function() {
			return this.length
		},
		putBit: function(t) {
			var e = Math.floor(this.length / 8);
			this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
		}
	};
	var m = [
		[17, 14, 11, 7],
		[32, 26, 20, 14],
		[53, 42, 32, 24],
		[78, 62, 46, 34],
		[106, 84, 60, 44],
		[134, 106, 74, 58],
		[154, 122, 86, 64],
		[192, 152, 108, 84],
		[230, 180, 130, 98],
		[271, 213, 151, 119],
		[321, 251, 177, 137],
		[367, 287, 203, 155],
		[425, 331, 241, 177],
		[458, 362, 258, 194],
		[520, 412, 292, 220],
		[586, 450, 322, 250],
		[644, 504, 364, 280],
		[718, 560, 394, 310],
		[792, 624, 442, 338],
		[858, 666, 482, 382],
		[929, 711, 509, 403],
		[1003, 779, 565, 439],
		[1091, 857, 611, 461],
		[1171, 911, 661, 511],
		[1273, 997, 715, 535],
		[1367, 1059, 751, 593],
		[1465, 1125, 805, 625],
		[1528, 1190, 868, 658],
		[1628, 1264, 908, 698],
		[1732, 1370, 982, 742],
		[1840, 1452, 1030, 790],
		[1952, 1538, 1112, 842],
		[2068, 1628, 1168, 898],
		[2188, 1722, 1228, 958],
		[2303, 1809, 1283, 983],
		[2431, 1911, 1351, 1051],
		[2563, 1989, 1423, 1093],
		[2699, 2099, 1499, 1139],
		[2809, 2213, 1579, 1219],
		[2953, 2331, 1663, 1273]
	],
		g = function() {
			var t = function(t, e) {
					this._el = t, this._htOption = e
				};
			return t.prototype.draw = function(t) {
				function e(t, e) {
					var n = document.createElementNS("http://www.w3.org/2000/svg", t);
					for (var r in e) e.hasOwnProperty(r) && n.setAttribute(r, e[r]);
					return n
				}
				var n = this._htOption,
					r = this._el,
					i = t.getModuleCount();
				Math.floor(n.width / i), Math.floor(n.height / i);
				this.clear();
				var o = e("svg", {
					viewBox: "0 0 " + String(i) + " " + String(i),
					width: "100%",
					height: "100%",
					fill: n.colorLight
				});
				o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(o), o.appendChild(e("rect", {
					fill: n.colorDark,
					width: "1",
					height: "1",
					id: "template"
				}));
				for (var a = 0; a < i; a++) for (var s = 0; s < i; s++) if (t.isDark(a, s)) {
					var u = e("use", {
						x: String(a),
						y: String(s)
					});
					u.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(u)
				}
			}, t.prototype.clear = function() {
				for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
			}, t
		}(),
		v = "svg" === document.documentElement.tagName.toLowerCase(),
		y = v ? g : o() ?
	function() {
		function t() {
			this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
		}
		function e(t, e) {
			var n = this;
			if (n._fFail = e, n._fSuccess = t, null === n._bSupportDataURI) {
				var r = document.createElement("img"),
					i = function() {
						n._bSupportDataURI = !1, n._fFail && _fFail.call(n)
					},
					o = function() {
						n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
					};
				return r.onabort = i, r.onerror = i, r.onload = o, void(r.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
			}
			n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
		}
		if (this._android && this._android <= 2.1) {
			var n = 1 / window.devicePixelRatio,
				r = CanvasRenderingContext2D.prototype.drawImage;
			CanvasRenderingContext2D.prototype.drawImage = function(t, e, i, o, a, s, u, c, l) {
				if ("nodeName" in t && /img/i.test(t.nodeName)) for (var h = arguments.length - 1; h >= 1; h--) arguments[h] = arguments[h] * n;
				else "undefined" == typeof c && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
				r.apply(this, arguments)
			}
		}
		var i = function(t, e) {
				this._bIsPainted = !1, this._android = a(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
			};
		return i.prototype.draw = function(t) {
			var e = this._elImage,
				n = this._oContext,
				r = this._htOption,
				i = t.getModuleCount(),
				o = r.width / i,
				a = r.height / i,
				s = Math.round(o),
				u = Math.round(a);
			e.style.display = "none", this.clear();
			for (var c = 0; c < i; c++) for (var l = 0; l < i; l++) {
				var h = t.isDark(c, l),
					f = l * o,
					p = c * a;
				n.strokeStyle = h ? r.colorDark : r.colorLight, n.lineWidth = 1, n.fillStyle = h ? r.colorDark : r.colorLight, n.fillRect(f, p, o, a), n.strokeRect(Math.floor(f) + .5, Math.floor(p) + .5, s, u), n.strokeRect(Math.ceil(f) - .5, Math.ceil(p) - .5, s, u)
			}
			this._bIsPainted = !0
		}, i.prototype.makeImage = function() {
			this._bIsPainted && e.call(this, t)
		}, i.prototype.isPainted = function() {
			return this._bIsPainted
		}, i.prototype.clear = function() {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
		}, i.prototype.round = function(t) {
			return t ? Math.floor(1e3 * t) / 1e3 : t
		}, i
	}() : function() {
		var t = function(t, e) {
				this._el = t, this._htOption = e
			};
		return t.prototype.draw = function(t) {
			for (var e = this._htOption, n = this._el, r = t.getModuleCount(), i = Math.floor(e.width / r), o = Math.floor(e.height / r), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < r; s++) {
				a.push("<tr>");
				for (var u = 0; u < r; u++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + o + "px;background-color:" + (t.isDark(s, u) ? e.colorDark : e.colorLight) + ';"></td>');
				a.push("</tr>")
			}
			a.push("</table>"), n.innerHTML = a.join("");
			var c = n.childNodes[0],
				l = (e.width - c.offsetWidth) / 2,
				h = (e.height - c.offsetHeight) / 2;
			l > 0 && h > 0 && (c.style.margin = h + "px " + l + "px")
		}, t.prototype.clear = function() {
			this._el.innerHTML = ""
		}, t
	}();
	QRCode = function(t, e) {
		if (this._htOption = {
			width: 256,
			height: 256,
			typeNumber: 4,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: l.H
		}, "string" == typeof e && (e = {
			text: e
		}), e) for (var n in e) this._htOption[n] = e[n];
		"string" == typeof t && (t = document.getElementById(t)), this._android = a(), this._el = t, this._oQRCode = null, this._oDrawing = new y(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
	}, QRCode.prototype.makeCode = function(t) {
		this._oQRCode = new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
	}, QRCode.prototype.makeImage = function() {
		"function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
	}, QRCode.prototype.clear = function() {
		this._oDrawing.clear()
	}, QRCode.CorrectLevel = l
}(), function() {
	var t, e, n, r, i, o, a, s, u, c, l, h, f, p, d, m, g, v, y, w, _, b, E, T, A, x, C, k, P, L, S, D, M, N, O, I, R, B, j, $, H, U, q, F, W, Z, X, J, z, Y = [].slice,
		G = {}.hasOwnProperty,
		K = function(t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) G.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
		},
		Q = [].indexOf ||
	function(t) {
		for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
		return -1
	};
	for (_ = {
		catchupTime: 100,
		initialRate: .03,
		minTime: 250,
		ghostTime: 100,
		maxProgressPerFrame: 20,
		easeFactor: 1.25,
		startOnPageLoad: !0,
		restartOnPushState: !0,
		restartOnRequestAfter: 500,
		target: "#common-loading-center",
		elements: {
			checkInterval: 100,
			selectors: ["body"]
		},
		eventLag: {
			minSamples: 10,
			sampleCount: 3,
			lagThreshold: 3
		},
		ajax: {
			trackMethods: ["GET"],
			trackWebSockets: !0,
			ignoreURLs: []
		}
	}, P = function() {
		var t;
		return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
	}, S = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, w = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == S && (S = function(t) {
		return setTimeout(t, 50)
	}, w = function(t) {
		return clearTimeout(t)
	}), M = function(t) {
		var e, n;
		return e = P(), (n = function() {
			var r;
			return r = P() - e, r >= 33 ? (e = P(), t(r, function() {
				return S(n)
			})) : setTimeout(n, 33 - r)
		})()
	}, D = function() {
		var t, e, n;
		return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Y.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
	}, b = function() {
		var t, e, n, r, i, o, a;
		for (e = arguments[0], r = 2 <= arguments.length ? Y.call(arguments, 1) : [], o = 0, a = r.length; o < a; o++) if (n = r[o]) for (t in n) G.call(n, t) && (i = n[t], null != e[t] && "object" == typeof e[t] && null != i && "object" == typeof i ? b(e[t], i) : e[t] = i);
		return e
	}, g = function(t) {
		var e, n, r, i, o;
		for (n = e = 0, i = 0, o = t.length; i < o; i++) r = t[i], n += Math.abs(r), e++;
		return n / e
	}, T = function(t, e) {
		var n, r, i;
		if (null == t && (t = "options"), null == e && (e = !0), i = document.querySelector("[data-pace-" + t + "]")) {
			if (n = i.getAttribute("data-pace-" + t), !e) return n;
			try {
				return JSON.parse(n)
			} catch (o) {
				return r = o, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
			}
		}
	}, a = function() {
		function t() {}
		return t.prototype.on = function(t, e, n, r) {
			var i;
			return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push({
				handler: e,
				ctx: n,
				once: r
			})
		}, t.prototype.once = function(t, e, n) {
			return this.on(t, e, n, !0)
		}, t.prototype.off = function(t, e) {
			var n, r, i;
			if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
				if (null == e) return delete this.bindings[t];
				for (n = 0, i = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? i.push(this.bindings[t].splice(n, 1)) : i.push(n++);
				return i
			}
		}, t.prototype.trigger = function() {
			var t, e, n, r, i, o, a, s, u;
			if (n = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
				for (i = 0, u = []; i < this.bindings[n].length;) s = this.bindings[n][i], r = s.handler, e = s.ctx, o = s.once, r.apply(null != e ? e : this, t), o ? u.push(this.bindings[n].splice(i, 1)) : u.push(i++);
				return u
			}
		}, t
	}(), c = window.Pace || {}, window.Pace = c, b(c, a.prototype), L = c.options = b({}, _, window.paceOptions, T()), X = ["ajax", "document", "eventLag", "elements"], q = 0, W = X.length; q < W; q++) R = X[q], L[R] === !0 && (L[R] = _[R]);
	u = function(t) {
		function e() {
			return J = e.__super__.constructor.apply(this, arguments)
		}
		return K(e, t), e
	}(Error), e = function() {
		function t() {
			this.progress = 0
		}
		return t.prototype.getElement = function() {
			if (null == this.el && (this.el = document.querySelector(L.target), !this.el)) throw new u;
			return this.el
		}, t.prototype.finish = function() {
			var t;
			t = this.getElement(), t.parentNode.style.display = "none";
			var e = document.createEvent("HTMLEvents");
			e.initEvent("preloaddone", !1, !1), document.dispatchEvent(e)
		}, t.prototype.update = function(t) {
			return this.progress = t, this.render()
		}, t.prototype.destroy = function() {
			try {
				this.getElement().parentNode.removeChild(this.getElement())
			} catch (t) {
				u = t
			}
			return this.el = void 0
		}, t.prototype.render = function() {
			var t;
			return t = this.getElement(), (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.innerHTML = (0 | this.progress) + "%", t.setAttribute("data-progress", 0 | this.progress)), this.lastRenderedProgress = this.progress
		}, t.prototype.done = function() {
			return this.progress >= 100
		}, t
	}(), s = function() {
		function t() {
			this.bindings = {}
		}
		return t.prototype.trigger = function(t, e) {
			var n, r, i, o, a;
			if (null != this.bindings[t]) {
				for (o = this.bindings[t], a = [], r = 0, i = o.length; r < i; r++) n = o[r], a.push(n.call(this, e));
				return a
			}
		}, t.prototype.on = function(t, e) {
			var n;
			return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
		}, t
	}(), U = window.XMLHttpRequest, H = window.XDomainRequest, $ = window.WebSocket, E = function(t, e) {
		var n, r, i;
		i = [];
		for (r in e.prototype) try {
			null == t[r] && "function" != typeof e[r] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(t, r, {
				get: function() {
					return e.prototype[r]
				},
				configurable: !0,
				enumerable: !0
			})) : i.push(t[r] = e.prototype[r]) : i.push(void 0)
		} catch (o) {
			n = o
		}
		return i
	}, C = [], c.ignore = function() {
		var t, e, n;
		return e = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], C.unshift("ignore"), n = e.apply(null, t), C.shift(), n
	}, c.track = function() {
		var t, e, n;
		return e = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], C.unshift("track"), n = e.apply(null, t), C.shift(), n
	}, I = function(t) {
		var e;
		if (null == t && (t = "GET"), "track" === C[0]) return "force";
		if (!C.length && L.ajax) {
			if ("socket" === t && L.ajax.trackWebSockets) return !0;
			if (e = t.toUpperCase(), Q.call(L.ajax.trackMethods, e) >= 0) return !0
		}
		return !1
	}, l = function(t) {
		function e() {
			var t, n = this;
			e.__super__.constructor.apply(this, arguments), t = function(t) {
				var e;
				return e = t.open, t.open = function(r, i, o) {
					return I(r) && n.trigger("request", {
						type: r,
						url: i,
						request: t
					}), e.apply(t, arguments)
				}
			}, window.XMLHttpRequest = function(e) {
				var n;
				return n = new U(e), t(n), n
			};
			try {
				E(window.XMLHttpRequest, U)
			} catch (r) {}
			if (null != H) {
				window.XDomainRequest = function() {
					var e;
					return e = new H, t(e), e
				};
				try {
					E(window.XDomainRequest, H)
				} catch (r) {}
			}
			if (null != $ && L.ajax.trackWebSockets) {
				window.WebSocket = function(t, e) {
					var r;
					return r = null != e ? new $(t, e) : new $(t), I("socket") && n.trigger("request", {
						type: "socket",
						url: t,
						protocols: e,
						request: r
					}), r
				};
				try {
					E(window.WebSocket, $)
				} catch (r) {}
			}
		}
		return K(e, t), e
	}(s), F = null, A = function() {
		return null == F && (F = new l), F
	}, O = function(t) {
		var e, n, r, i;
		for (i = L.ajax.ignoreURLs, n = 0, r = i.length; n < r; n++) if (e = i[n], "string" == typeof e) {
			if (t.indexOf(e) !== -1) return !0
		} else if (e.test(t)) return !0;
		return !1
	}, A().on("request", function(e) {
		var n, r, i, o, a;
		if (o = e.type, i = e.request, a = e.url, !O(a)) return c.running || L.restartOnRequestAfter === !1 && "force" !== I(o) ? void 0 : (r = arguments, n = L.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function() {
			var e, n, a, s, u, l;
			if (e = "socket" === o ? i.readyState < 2 : 0 < (s = i.readyState) && s < 4) {
				for (c.restart(), u = c.sources, l = [], n = 0, a = u.length; n < a; n++) {
					if (R = u[n], R instanceof t) {
						R.watch.apply(R, r);
						break
					}
					l.push(void 0)
				}
				return l
			}
		}, n))
	}), t = function() {
		function t() {
			var t = this;
			this.elements = [], A().on("request", function() {
				return t.watch.apply(t, arguments)
			})
		}
		return t.prototype.watch = function(t) {
			var e, n, r, i;
			if (r = t.type, e = t.request, i = t.url, !O(i)) return n = "socket" === r ? new p(e) : new d(e), this.elements.push(n)
		}, t
	}(), d = function() {
		function t(t) {
			var e, n, r, i, o, a, s = this;
			if (this.progress = 0, null != window.ProgressEvent) for (n = null, t.addEventListener("progress", function(t) {
				return t.lengthComputable ? s.progress = 100 * t.loaded / t.total : s.progress = s.progress + (100 - s.progress) / 2
			}, !1), a = ["load", "abort", "timeout", "error"], r = 0, i = a.length; r < i; r++) e = a[r], t.addEventListener(e, function() {
				return s.progress = 100
			}, !1);
			else o = t.onreadystatechange, t.onreadystatechange = function() {
				var e;
				return 0 === (e = t.readyState) || 4 === e ? s.progress = 100 : 3 === t.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
			}
		}
		return t
	}(), p = function() {
		function t(t) {
			var e, n, r, i, o = this;
			for (this.progress = 0, i = ["error", "open"], n = 0, r = i.length; n < r; n++) e = i[n], t.addEventListener(e, function() {
				return o.progress = 100
			}, !1)
		}
		return t
	}(), r = function() {
		function t(t) {
			var e, n, r, o;
			for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, r = o.length; n < r; n++) e = o[n], this.elements.push(new i(e))
		}
		return t
	}(), i = function() {
		function t(t) {
			this.selector = t, this.progress = 0, this.check()
		}
		return t.prototype.check = function() {
			var t = this;
			return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
				return t.check()
			}, L.elements.checkInterval)
		}, t.prototype.done = function() {
			return this.progress = 100
		}, t
	}(), n = function() {
		function t() {
			var t, e, n = this;
			this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
				return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
			}
		}
		return t.prototype.states = {
			loading: 0,
			interactive: 50,
			complete: 100
		}, t
	}(), o = function() {
		function t() {
			var t, e, n, r, i, o = this;
			this.progress = 0, t = 0, i = [], r = 0, n = P(), e = setInterval(function() {
				var a;
				return a = P() - n - 50, n = P(), i.push(a), i.length > L.eventLag.sampleCount && i.shift(), t = g(i), ++r >= L.eventLag.minSamples && t < L.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
			}, 50)
		}
		return t
	}(), f = function() {
		function t(t) {
			this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = L.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = D(this.source, "progress"))
		}
		return t.prototype.tick = function(t, e) {
			var n;
			return null == e && (e = D(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / L.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, L.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + L.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
		}, t
	}(), B = null, N = null, v = null, j = null, m = null, y = null, c.running = !1, x = function() {
		if (L.restartOnPushState) return c.restart()
	}, null != window.history.pushState && (Z = window.history.pushState, window.history.pushState = function() {
		return x(), Z.apply(window.history, arguments)
	}), null != window.history.replaceState && (z = window.history.replaceState, window.history.replaceState = function() {
		return x(), z.apply(window.history, arguments)
	}), h = {
		ajax: t,
		elements: r,
		document: n,
		eventLag: o
	}, (k = function() {
		var t, n, r, i, o, a, s, u;
		for (c.sources = B = [], a = ["ajax", "elements", "document", "eventLag"], n = 0, i = a.length; n < i; n++) t = a[n], L[t] !== !1 && B.push(new h[t](L[t]));
		for (u = null != (s = L.extraSources) ? s : [], r = 0, o = u.length; r < o; r++) R = u[r], B.push(new R(L));
		return c.bar = v = new e, N = [], j = new f
	})(), c.stop = function() {
		return c.trigger("stop"), c.running = !1, v.destroy(), y = !0, null != m && ("function" == typeof w && w(m), m = null), k()
	}, c.restart = function() {
		return c.trigger("restart"), c.stop(), c.start()
	}, c.go = function() {
		var t;
		return c.running = !0, v.render(), t = P(), y = !1, m = M(function(e, n) {
			var r, i, o, a, s, u, l, h, p, d, m, g, w, _, b, E;
			for (h = 100 - v.progress, i = m = 0, o = !0, u = g = 0, _ = B.length; g < _; u = ++g) for (R = B[u], d = null != N[u] ? N[u] : N[u] = [], s = null != (E = R.elements) ? E : [R], l = w = 0, b = s.length; w < b; l = ++w) a = s[l], p = null != d[l] ? d[l] : d[l] = new f(a), o &= p.done, p.done || (i++, m += p.tick(e));
			return r = m / i, v.update(j.tick(e, r)), v.done() || o || y ? (v.update(100), c.trigger("done"), setTimeout(function() {
				return v.finish(), c.running = !1, c.trigger("hide")
			}, Math.max(L.ghostTime, Math.max(L.minTime - (P() - t), 0)))) : n()
		})
	}, c.start = function(t) {
		b(L, t), c.running = !0;
		try {
			v.render()
		} catch (e) {
			u = e
		}
		return document.querySelector(L.target) ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
	}, "function" == typeof define && define.amd ? define(["pace"], function() {
		return c
	}) : "object" == typeof exports ? module.exports = c : L.startOnPageLoad && c.start()
}.call(this), function(t) {
	function e(e) {
		function n() {
			D = !0
		}
		function r() {
			return L || D
		}
		function i(t, n) {
			if (e(t, !0), D && n) {
				var r = t.match(/[\w]:\/\/(.*)/);
				n(r && r[1])
			}
		}
		function o(t, e) {
			if (k[e] && k[e].length > 0) {
				var n = k[e].shift();
				n && n.call(this, t)
			}
		}
		function a() {
			i(P.updateprofile)
		}
		function s(t) {
			k.afterLogin.push(t), i(P.login, t)
		}
		function u(t) {
			k.afterUserinfo.push(t), i(P.userinfo, t)
		}
		function c(t) {
			k.afterDevice.push(t), i(P.device, t)
		}
		function l(t, e) {
			k.afterShare.push(t), i(P.share.replace("{TYPE}", e || ""), t)
		}
		function h(t) {
			i(P.pushview.replace("{TYPE}", t))
		}
		function f(e, n) {
			k.afterEncrypt.push(n), t.extra && t.extra.__newsapp_encrypt ? o(t.extra.__newsapp_encrypt(e), "afterEncrypt") : i(P.encrypt + encodeURIComponent(e), n)
		}
		function p(t, e, n) {
			k.afterUploadImage.push(n), i(P.uploadImageByCamera.replace("{W}", t).replace("{H}", e), n)
		}
		function d(t, e, n) {
			k.afterUploadImage.push(n), i(P.uploadImageByAlbum.replace("{W}", t).replace("{H}", e), n)
		}
		function m(t, e, n) {
			i(P.openComment.replace("{BOARD_ID}", t).replace("{DOC_ID}", e).replace("{TITLE}", n || ""))
		}
		function g(t) {
			k.afterComment.push(t), i(P.comment, t)
		}
		function v(t, e) {
			k.afterOtherappinfo.push(e), i(P.otherappinfo + t, e)
		}
		function y(t) {
			i(P.copy + t)
		}
		function w(t) {
			i(P.toolbar.replace("{COMMAND}", t))
		}
		function _(t) {
			document.title = t || document.title, i(P.modifytitle.replace("{TITLE}", encodeURIComponent(t)))
		}
		function b(t, e) {
			k.afterActionbutton.push(e), i(P.actionbutton.replace("{NAME}", encodeURIComponent(t)), e)
		}
		function E(e) {
			k.afterAddAlarm.push(e), t.extra && t.extra.__newsapp_alarm_add_done ? o(t.extra.__newsapp_alarm_add_done(), "afterAddAlarm") : i(P.addAlarm, e)
		}
		function T(e) {
			k.afterRemoveAlarm.push(e), t.extra && t.extra.__newsapp_alarm_remove_done ? o(t.extra.__newsapp_alarm_remove_done(), "afterRemoveAlarm") : i(P.removeAlarm, e)
		}
		function A(e) {
			k.afterCheckAlarm.push(e), t.extra && t.extra.__newsapp_alarm_check_done ? o(t.extra.__newsapp_alarm_check_done(), "afterCheckAlarm") : i(P.checkAlarm, e)
		}
		function x(t) {
			k.afterTrashId.push(t), i(P.trashid, t)
		}
		function C(t) {
			k.afterLocation.push(t), i(P.location, t)
		}
		var k, P, L = /NewsApp/gi.test(navigator.userAgent),
			S = /Android/gi,
			D = !1,
			M = S.test(navigator.platform) || S.test(navigator.userAgent);
		return k = {
			afterEncrypt: [],
			afterShare: [],
			afterUserinfo: [],
			afterLogin: [],
			afterDevice: [],
			afterUploadImage: [],
			afterComment: [],
			afterOtherappinfo: [],
			afterActionbutton: [],
			afterAddAlarm: [],
			afterRemoveAlarm: [],
			afterCheckAlarm: [],
			afterTrashId: [],
			afterLocation: []
		}, P = {
			share: "share://{TYPE}",
			updateprofile: "updateprofile://",
			encrypt: "encrypt://",
			pushview: "pushview://{TYPE}",
			userinfo: "userinfo://",
			login: "login://",
			device: "device://",
			uploadImageByCamera: "uploadimage://camera/{W}_{H}",
			uploadImageByAlbum: "uploadimage://album/{W}_{H}",
			openComment: "newsapp://comment/{BOARD_ID}/{DOC_ID}/{TITLE}",
			comment: "comment://",
			otherappinfo: M ? "otherappinfo://" : "otherappinfo://intent/",
			copy: "copy://",
			toolbar: "docmode://toolbar/{COMMAND}",
			modifytitle: "docmode://modifytitle/{TITLE}",
			actionbutton: "docmode://actionbutton/{NAME}",
			addAlarm: "alarm://add",
			removeAlarm: "alarm://remove",
			checkAlarm: "alarm://check",
			trashid: "trashid://",
			location: "location://current"
		}, t.__newsapp_share_done = function(t) {
			o(t, "afterShare")
		}, t.__newsapp_encrypt_done = function(t) {
			o(t, "afterEncrypt")
		}, t.__newsapp_userinfo_done = function(t) {
			o(t, "afterUserinfo")
		}, t.__newsapp_login_done = function(t) {
			o(t, "afterLogin")
		}, t.__newsapp_device_done = function(t) {
			o(t, "afterDevice")
		}, t.__newsapp_upload_image_done = function(t) {
			o(t, "afterUploadImage")
		}, t.__newsapp_comment_done = function(t) {
			o(t, "afterComment")
		}, t.__newsapp_otherappinfo_done = function(t) {
			o(t, "afterOtherappinfo")
		}, t.__newsapp_browser_actionbutton = function(t) {
			o(t, "afterActionbutton")
		}, t.__newsapp_alarm_add_done = function(t) {
			o(t, "afterAddAlarm")
		}, t.__newsapp_alarm_remove_done = function(t) {
			o(t, "afterRemoveAlarm")
		}, t.__newsapp_alarm_check_done = function(t) {
			o(t, "afterCheckAlarm")
		}, t.__newsapp_trashid_done = function(t) {
			o(t, "afterTrashId")
		}, t.__newsapp_location_done = function(t) {
			o(t, "afterLocation")
		}, {
			isNewsApp: r,
			login: s,
			userInfo: u,
			device: c,
			share: l,
			encrypt: f,
			updateProfile: a,
			uploadImageByCamera: p,
			uploadImageByAlbum: d,
			pushView: h,
			openComment: m,
			comment: g,
			otherappinfo: v,
			copy: y,
			toolbar: w,
			modifyTitle: _,
			actionbutton: b,
			enableDebug: n,
			addAlarm: E,
			removeAlarm: T,
			checkAlarm: A,
			trashId: x,
			location: C,
			protocol: i,
			Callbacks: k
		}
	}
	var n = function() {
			function e(t) {
				var e = document.createElement("iframe");
				return e.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;"), e.setAttribute("height", "0px"), e.setAttribute("width", "0px"), e.setAttribute("frameborder", "0"), t ? e.setAttribute("src", t) : document.documentElement.appendChild(e), e
			}
			function n(t) {
				t && t.parentNode.removeChild(t)
			}
			function r(r, o, s) {
				var u, c;
				return s ? void(t.location.href = r) : void(o ? (a ? (u = e(), u.setAttribute("src", r)) : (u = e(r), document.documentElement.appendChild(u)), c = setTimeout(function() {
					u && n(u)
				}, 3e4), u.onload = u.onreadystatechange = function() {
					c && clearTimeout(c), u && n(u)
				}) : (i = i || e(), i.setAttribute("src", r)))
			}
			var i, o = /Android/gi,
				a = o.test(navigator.platform) || o.test(navigator.userAgent);
			return i = null, {
				protocol: r
			}
		}();
	t.NewsAppClient = e(n.protocol)
}(window), function() {
	"use strict";

	function t() {
		e(), n(), r(), i(), o()
	}
	function e() {
		a = $("#common-landscape"), s = $("#common-pc"), u = $("#common-share"), c = $(".common-container")
	}
	//判断横竖屏
	function n() {
		var t = function() {
				switch (window.orientation) {
				case 0:
				case 180:
					a.hide();
					break;
				case -90:
				case 90:
					a.show()
				}
			};
		t(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", t, !1)
	}
	function r() {
		$.os.phone || $.os.tablet || (new QRCode(s.children()[0]).makeCode(location.href), $("body").children().hide(), s.show())
	}
	function i() {
		var aaa = /yixin/.test(navigator.userAgent.toLowerCase()) ? "资深" : "骨灰";
		window.NewsAppShare = {
			shareData: {
				title: "网易首发跟贴大数据：广东人话最多 " + aaa + "用户跟贴14年",
				desc: "24%网友看完标题直奔跟贴区，精分青年比斜杠青年更流行",
				img_url: "http://c.m.163.com/nc/qa/activity/tiewhitepaper20170628/img/share_img0.jpg",
				link: "https://c.m.163.com/nc/qa/activity/tiewhitepaper20170628/index.html"
			},
			update: function(t) {
				for (var e in t) this.shareData.hasOwnProperty(e) && (this.shareData[e] = t[e]);
				document.getElementById("__newsapp_sharetext").innerHTML = this.shareData.title + " " + this.shareData.link, document.getElementById("__newsapp_sharephotourl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxtitle").innerHTML = this.shareData.title, document.getElementById("__newsapp_sharewxtext").innerHTML = this.shareData.desc, document.getElementById("__newsapp_sharewxthumburl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxurl").innerHTML = this.shareData.link
			},
			show: function() {
				NewsAppClient.isNewsApp() ? NewsAppClient.share() : (u.fadeIn(300), setTimeout(function() {
					u.fadeOut(300)
				}, 2e3))
			},
			getAbsPath: function(t) {
				if (t) {
					var e = document.createElement("a");
					return e.href = t, e.href
				}
				return location.href.replace(/(\?|#).*/, "")
			}
		};
		NewsAppShare.update({
			title: "网易首发跟贴大数据：广东人话最多 " + aaa + "用户跟贴14年",
			desc: "24%网友看完标题直奔跟贴区，精分青年比斜杠青年更流行",
			img_url: "http://c.m.163.com/nc/qa/activity/tiewhitepaper20170628/img/share_img0.jpg",
			link: NewsAppShare.getAbsPath()
		});
		document.addEventListener("WeixinJSBridgeReady", function() {
			WeixinJSBridge.on("menu:share:timeline", function() {
				WeixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function() {})
			}), WeixinJSBridge.on("menu:share:appmessage", function() {
				WeixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function() {})
			})
		}, !1);
		document.addEventListener("YixinJSBridgeReady", function() {
			YixinJSBridge.on("menu:share:timeline", function() {
				YixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function() {})
			}), YixinJSBridge.on("menu:share:appmessage", function() {
				YixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function() {})
			})
		}, !1)
	}
	function o() {
		var t = document.documentElement.clientHeight,
			e = parseInt(c.css("height"));
		c.animate({
			scale: Math.min(t / e, 1),
			top: -(e - t) / 2
		}, 0)
	}
	var a, s, u, c;
	$(t)
}(), function() {
	"use strict";

	function t() {
		e(), n()
	}
	function e() {
		setTimeout(function() {
			$(".cover").addClass("active")
		}, 1e3), setTimeout(function() {
			$(".letter_jiu_hand").addClass("active"), $(".letter_lei_hand").addClass("active")
		}, 4e3), setTimeout(function() {
			$(".non").addClass("active")
		}, 2250), setTimeout(function() {
			$(".ele3_light").addClass("active")
		}, 3400)
	}
	function n() {
		function t(t) {
			var e = document.getElementById(t),
				n = function() {
					document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), e.play()
				};
			e.play(), window.WeixinJSBridge && e.play(), "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", n, !1) : (document.addEventListener("YixinJSBridgeReady", n, !1), e.play())
		}
		$(".btn_start").on("touchend", function() {
			$(".cover").hide(), $(".content").show(), setTimeout(function() {
				$(".content .page1 .block1").addClass("active")
			}, 100), setTimeout(function() {
				$(".content .page1 .title1").addClass("active")
			}, 600)
		});
		var e = $(".music"),
			n = $("#audio")[0];
		e.on("click", function() {
			n.paused ? (n.play(), e.addClass("music_on")) : (n.pause(), e.removeClass("music_on"))
		}), t("audio"), e.addClass("music_on"), $(".point").on("click", function() {
			var t = this.className.split("point point")[1];
			$(".pop .pop_cnt")[0].className = "pop_cnt pop_cnt" + t, $(".pop").show(), $(".common-container").css({
				overflow: "hidden"
			})
		}), $(".pop .pop_close").on("click", function() {
			$(".pop").hide(), $(".common-container").css({
				overflow: "auto"
			})
		}), $(".btn_share").on("click", function() {
			NewsAppShare && NewsAppShare.show()
		}), $(".btn_app").on("click", function() {
			window.location.href = "http://m.163.com/newsapp/applinks.html?s=tiewhitepaper20170628"
		});
		
	}
	$(t)
}();