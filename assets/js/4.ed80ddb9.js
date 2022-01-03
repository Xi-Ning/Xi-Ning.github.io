(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{329:function(t,s,a){t.exports=a.p+"assets/img/EDO-S01-01.794a9199.jpg"},330:function(t,s,a){t.exports=a.p+"assets/img/EDO-S01-02.f06cf6ac.jpg"},331:function(t,s,a){t.exports=a.p+"assets/img/EDO-S01-03.ca370f6c.jpg"},383:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-数据去重"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据去重"}},[t._v("#")]),t._v(" 1 数据去重")]),t._v(" "),n("Seal",{attrs:{title:"数据去重",createDate:"2021.03.31"}}),t._v(" "),n("p",[t._v("数据去重，首先要明确能够定义重复的字段范围，样例表中的主键id就不作为判断数据是否重复的条件：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(329),alt:""}})]),t._v(" "),n("blockquote",[n("p",[t._v("（1）查看目标表当前记录总数：")])]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表 t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("blockquote",[n("p",[t._v("（2）建立备份表：")])]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 目标表_bak "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("安全第一！")]),t._v(" "),n("p",[t._v("进行数据处理前，一定要对目标表进行备份，以确保数据可回退。")])]),t._v(" "),n("blockquote",[n("p",[t._v("（3）根据判定数据是否重复的字段，建立临时表（重点是要根据判定数据是否重复的字段进行分组，且记录每组数据的最大rowid）：")])]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 目标表_tmp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" dataid "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表 t \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("字段n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("样例表所生成的临时表效果如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(330),alt:""}})]),t._v(" "),n("blockquote",[n("p",[t._v("（4）将rowid不在临时表中的目标表的数据删除：")])]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表 t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表_tmp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" dataid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("blockquote",[n("p",[t._v("（5）查看目标表删除重复数据后的记录总数：")])]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 目标表 t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("样例表去重后效果如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(331),alt:""}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);