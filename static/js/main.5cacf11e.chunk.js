(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(23),a=n.n(s),r=(n(29),n(5)),i=(n(30),n(18)),l="https://reactnd-books-api.udacity.com",h=localStorage.token;h||(h=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:h},b=(n(31),n(1));var d=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"header-parent",children:Object(b.jsx)("h1",{children:"My Reads"})})})},u=n(24),O=n.n(u),f=n(8);var g=function(e){var t=e.book,n=e.changeShelf,c=t.imageLinks?t.imageLinks.thumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"book",children:[Object(b.jsxs)("div",{className:"book-top",children:[Object(b.jsx)(f.b,{to:"/book/".concat(t.id),children:Object(b.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(c,'")')}})}),Object(b.jsx)("div",{className:"book-shelf-changer",children:Object(b.jsxs)("select",{onChange:function(e){var c=e.target.value;n(t,c),O()("Done!","You changed the book shelf to ".concat(c,"!"),"success")},value:t.shelf,children:[Object(b.jsx)("option",{value:"none",disabled:!0,children:"Move to..."}),Object(b.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(b.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(b.jsx)("option",{value:"read",children:"Read"}),Object(b.jsx)("option",{value:"none",children:"None"})]})})]}),Object(b.jsx)("div",{className:"book-title",children:t.title}),Object(b.jsx)("div",{className:"book-authors",children:t.authors?t.authors[0]:"Auther is Unknown"})]})},t.id)})};var x=function(e){var t=e.title,n=e.Books,c=e.changeShelf;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"bookshelf",children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:t}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:n.map((function(e){return Object(b.jsx)(g,{book:e,changeShelf:c},e.id)}))})})]})})};var m=function(e){var t=e.allBooks,n=e.changeShelf,c=t.filter((function(e){return"currentlyReading"===e.shelf})),o=t.filter((function(e){return"wantToRead"===e.shelf})),s=t.filter((function(e){return"read"===e.shelf}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"list-books-content",children:[Object(b.jsx)(x,{title:"Currently reading",Books:c,changeShelf:n}),Object(b.jsx)(x,{title:"Want To Read",Books:o,changeShelf:n}),Object(b.jsx)(x,{title:"Read",Books:s,changeShelf:n})]})})},k=n(3);var v=function(e){var t=e.allBooks,n=e.changeShelf,o=Object(c.useState)([]),s=Object(r.a)(o,2),a=s[0],h=s[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"search-books",children:[Object(b.jsxs)("div",{className:"search-books-bar",children:[Object(b.jsx)(f.b,{to:"/",className:"close-search",children:"Close"}),Object(b.jsx)("div",{className:"search-books-input-wrapper",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",onChange:function(e){var n=e.target.value;n?function(e,t){return fetch("".concat(l,"/search"),{method:"POST",headers:Object(i.a)(Object(i.a)({},j),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))}(n,20).then((function(e){if(e&&!e.error){var n=e.map((function(e){var n=t.find((function(t){return t.id===e.id}));return e.shelf=n?n.shelf:"none",e}));h(n)}else h([])})):h([])}})})]}),Object(b.jsx)("div",{className:"search-books-results",children:Object(b.jsx)("ol",{className:"books-grid",children:a.map((function(e){return Object(b.jsx)(g,{book:e,changeShelf:n},e.id)}))})})]})})};n(36);var p=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(k.n)();console.log(s);var a=n.imageLinks?n.imageLinks.thumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif";return Object(c.useEffect)((function(){var e;(e=s.bookId,fetch("".concat(l,"/books/").concat(e),{headers:j}).then((function(e){return e.json()})).then((function(e){return e.book}))).then((function(e){o(e),console.log(e)}))}),[s.bookId]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"holder",children:[Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:n.title}),Object(b.jsxs)("p",{children:["page count : ",n.pageCount]}),Object(b.jsx)("p",{children:n.description}),Object(b.jsx)("p",{children:n.publishedDate})]}),Object(b.jsx)("div",{className:"image-holder",style:{backgroundImage:'url("'.concat(a,'")')}})]})})};var N=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){fetch("".concat(l,"/books"),{headers:j}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(e){o(e),console.log(e)}))}),[]);var s=function(e,t){e.shelf=t,o((function(t){return t.filter((function(t){return t.id!==e.id})).concat([e])})),function(e,t){fetch("".concat(l,"/books/").concat(e.id),{method:"PUT",headers:Object(i.a)(Object(i.a)({},j),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}(e,t)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(k.c,{children:[Object(b.jsx)(k.a,{path:"/",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),0!==n.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{allBooks:n,changeShelf:s}),Object(b.jsx)("div",{className:"open-search",children:Object(b.jsx)(f.b,{to:"/search",children:"Add Book"})})]}):Object(b.jsx)("h1",{className:"loader",children:"Loading..."})]})}),Object(b.jsx)(k.a,{path:"/search",element:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{allBooks:n,changeShelf:s})})}),Object(b.jsx)(k.a,{path:"book/:bookId",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(p,{})]})})]})})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5cacf11e.chunk.js.map