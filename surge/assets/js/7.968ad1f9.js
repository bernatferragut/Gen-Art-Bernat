(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("In order to animate we need to decide on a parameter to work with. Here we will start to animate along X axis. The concept that will fuel the X coordinate movement is a variable that changes constantly.")]),t._m(2),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/BkqUfLnum",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/BkqUfLnum"}}),t._m(3),t._m(4),a("p",[t._v("We can then simply add another variable to X such as speed or velocity. This value will allows to control the amount the dot translates and the direction can be driven by a negative number.")]),a("p",[t._v("In this example, we achieve a rebound effect by changing the velocity sign every time certain condition is reached  (here when the dot leaves the canvas). To achieve a rebound in all 4 direction, the effect could also be include in the Y coordinate.")]),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/B1hdy8num",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/B1hdy8num"}}),t._m(5),t._m(6),t._m(7),a("p",[t._v("The modulo operator allows us to define oscillations.")]),t._m(8),t._m(9),t._m(10),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/rkGMf0pu7",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/rkGMf0pu7"}}),t._m(11),t._m(12),t._m(13),a("p",[t._v("The sin() function takes a single parameter and evaluates to a number between -1 and 1.")]),a("p",[t._v("Most of the time, using the sin() function should be combined with two other values: the amplitude of the oscillation (i.e., how big the numbers get) and the frequency of the oscillation (i.e., how fast it goes).")]),t._m(14),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/SJYUZayKX",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/SJYUZayKX"}}),t._m(15),a("p",[t._v("Finally, by combining the sin() function with the cos() function we can achieve circular movements when using even amounts. With uneven amounts we can achieve beautiful elliptical forms and shapes.")]),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/SJteE6JFQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/SJteE6JFQ"}}),t._m(16),t._m(17),a("p",[t._v("Generative Art starts getting more interesting when we include a surprise factor. This computer generated surprise factor is called a random result.")]),a("p",[t._v("The random() function with no value specified produces a result between 0-1. Or, we can choose to specify the minimum and maximum value we want and we'll get a value between those.")]),a("p",[a("a",{attrs:{href:"https://editor.p5js.org/bernatferragut/sketches/rJGvEHxdQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO TO EDITOR"),a("OutboundLink")],1)]),a("iframe",{staticStyle:{width:"732px",height:"250px",border:"4px solid #000000","border-radius":"6px",overflow:"hidden",position:"relative"},attrs:{frameborder:"0",border:"0",cellspacing:"0",scrolling:"no",src:"https://editor.p5js.org/embed/rJGvEHxdQ"}}),t._m(18),a("p",[a("strong",[t._v("MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | "),a("a",{attrs:{href:"http://bernatferragut.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bernatferragut.com"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dot-animation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dot-animation","aria-hidden":"true"}},[this._v("#")]),this._v(" DOT ANIMATION")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"translation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translation","aria-hidden":"true"}},[this._v("#")]),this._v(" Translation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In P5JS we have several variables that could be used to accomplish this. We will use "),s("strong",[this._v("frameCount")]),this._v(" which constantly changes to drive the X coordinate.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  frameCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rebound"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rebound","aria-hidden":"true"}},[this._v("#")]),this._v(" Rebound")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vel"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" w "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vel "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vel "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"oscillation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oscillation","aria-hidden":"true"}},[this._v("#")]),this._v(" Oscillation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"modulo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modulo","aria-hidden":"true"}},[this._v("#")]),this._v(" Modulo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("These oscillations or cycles will be limited by the variable number the modulo operator is applied to.\nFor instance, if we apply modulo 10 to an ever increasing number like "),s("strong",[this._v("frameCount")]),this._v(",\nit will return numbers between 0-9 and repeat this cycle over and over. More examples:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("console.log(frameCount % 2) => 0,1...cycle to infinity")]),s("li",[this._v("console.log(frameCount % 5) => 0,1,2,3,4...cycle to infinity")]),s("li",[this._v("console.log(frameCount % 10) => 0,1,2,3,4,5,6,7,8,9...cycle to infinity")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By applying the modulo operator to "),s("strong",[this._v("frameCount")]),this._v(" which grows continuously thereby providing a source of change,\nwe get an ascending pattern.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// this.x = frameCount % w;")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  w"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" frameCount "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// We limit the cycle to 200 units in x")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" h"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" frameCount "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// We limit the cycle to 10 units in y")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sin-cos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sin-cos","aria-hidden":"true"}},[this._v("#")]),this._v(" sin(), cos()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The modulo technique is great however it can only easily produce loops that grow linearly and loop abruptly. An easy technique for making animations that appear to grow and shrink/recede smoothly is to calculate the "),s("strong",[this._v("sin")]),this._v(" of the "),s("strong",[this._v("frameCount")]),this._v(" variable.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Where x, y, and z are all numbers. Making "),s("strong",[this._v("y")]),this._v(" bigger will make the oscillation slower; making "),s("strong",[this._v("z")]),this._v(" bigger will make the oscillation larger. The x value is the oscillation’s center point, i.e., what value is the “resting place” of the oscillation.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("oscillate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  w"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frameCount"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("oscillate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  w"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frameCount"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  h"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cos")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frameCount"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random","aria-hidden":"true"}},[this._v("#")]),this._v(" Random")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("randomize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);