import{S as Y,i as Z,s as $,e as _,t as S,k as j,c as d,a as E,g,d as o,n as N,b as H,f as c,H as f,J as G,K as x,I as O,L as ee,h as K,l as Q,M as te}from"../chunks/vendor-30ebcf7e.js";/* empty css                                                         */function W(n,t,r){const i=n.slice();return i[6]=t[r],i}function le(n){let t,r,i,l;return{c(){t=_("p"),r=S('No post found with "'),i=S(n[0]),l=S('" keyword')},l(a){t=d(a,"P",{});var s=E(t);r=g(s,'No post found with "'),i=g(s,n[0]),l=g(s,'" keyword'),s.forEach(o)},m(a,s){c(a,t,s),f(t,r),f(t,i),f(t,l)},p(a,s){s&1&&K(i,a[0])},d(a){a&&o(t)}}}function se(n){let t,r=n[1],i=[];for(let l=0;l<r.length;l+=1)i[l]=X(W(n,r,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();t=Q()},l(l){for(let a=0;a<i.length;a+=1)i[a].l(l);t=Q()},m(l,a){for(let s=0;s<i.length;s+=1)i[s].m(l,a);c(l,t,a)},p(l,a){if(a&2){r=l[1];let s;for(s=0;s<r.length;s+=1){const v=W(l,r,s);i[s]?i[s].p(v,a):(i[s]=X(v),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=r.length}},d(l){te(i,l),l&&o(t)}}}function X(n){let t,r,i=n[6].title.substring(0,30)+"",l,a,s,v=n[6].body.substring(0,120)+"",h,P,b,y,A,R,m;return{c(){t=_("div"),r=_("h2"),l=S(i),a=j(),s=_("p"),h=S(v),P=j(),b=_("p"),y=_("a"),A=S("Read more"),m=j(),this.h()},l(k){t=d(k,"DIV",{class:!0});var u=E(t);r=d(u,"H2",{class:!0});var B=E(r);l=g(B,i),B.forEach(o),a=N(u),s=d(u,"P",{});var D=E(s);h=g(D,v),D.forEach(o),P=N(u),b=d(u,"P",{class:!0});var V=E(b);y=d(V,"A",{href:!0,"sveltekit:prefetch":!0});var I=E(y);A=g(I,"Read more"),I.forEach(o),V.forEach(o),m=N(u),u.forEach(o),this.h()},h(){H(r,"class","svelte-vvd523"),H(y,"href",R=`/blog/${n[6].id}`),H(y,"sveltekit:prefetch",""),H(b,"class","link svelte-vvd523"),H(t,"class","post svelte-vvd523")},m(k,u){c(k,t,u),f(t,r),f(r,l),f(t,a),f(t,s),f(s,h),f(t,P),f(t,b),f(b,y),f(y,A),f(t,m)},p(k,u){u&2&&i!==(i=k[6].title.substring(0,30)+"")&&K(l,i),u&2&&v!==(v=k[6].body.substring(0,120)+"")&&K(h,v),u&2&&R!==(R=`/blog/${k[6].id}`)&&H(y,"href",R)},d(k){k&&o(t)}}}function ie(n){let t,r,i,l,a,s,v,h,P,b,y,A,R,m,k,u,B,D,V,I,z,L;function M(e,p){return e[1].length?se:le}let q=M(n),w=q(n);return{c(){t=_("h1"),r=S("Posts"),i=j(),l=_("p"),a=_("i"),s=S('Script context="module"'),v=S(", dia akan merender sblm ter-load semua, shg bisa menyiapkan fetching data sblm tampil"),h=j(),P=_("p"),b=_("i"),y=S("a href pakai sveltekit:prefetch"),A=S(", untuk mengeksekusi perintah fetching saat hover pada link"),R=j(),m=_("input"),k=j(),u=_("br"),B=j(),D=_("br"),V=j(),I=_("div"),w.c(),this.h()},l(e){t=d(e,"H1",{});var p=E(t);r=g(p,"Posts"),p.forEach(o),i=N(e),l=d(e,"P",{});var C=E(l);a=d(C,"I",{});var T=E(a);s=g(T,'Script context="module"'),T.forEach(o),v=g(C,", dia akan merender sblm ter-load semua, shg bisa menyiapkan fetching data sblm tampil"),C.forEach(o),h=N(e),P=d(e,"P",{});var J=E(P);b=d(J,"I",{});var U=E(b);y=g(U,"a href pakai sveltekit:prefetch"),U.forEach(o),A=g(J,", untuk mengeksekusi perintah fetching saat hover pada link"),J.forEach(o),R=N(e),m=d(e,"INPUT",{type:!0,placeholder:!0}),k=N(e),u=d(e,"BR",{}),B=N(e),D=d(e,"BR",{}),V=N(e),I=d(e,"DIV",{class:!0});var F=E(I);w.l(F),F.forEach(o),this.h()},h(){H(m,"type","text"),H(m,"placeholder","Search..."),H(I,"class","posts svelte-vvd523")},m(e,p){c(e,t,p),f(t,r),c(e,i,p),c(e,l,p),f(l,a),f(a,s),f(l,v),c(e,h,p),c(e,P,p),f(P,b),f(b,y),f(P,A),c(e,R,p),c(e,m,p),G(m,n[0]),c(e,k,p),c(e,u,p),c(e,B,p),c(e,D,p),c(e,V,p),c(e,I,p),w.m(I,null),z||(L=x(m,"input",n[3]),z=!0)},p(e,[p]){p&1&&m.value!==e[0]&&G(m,e[0]),q===(q=M(e))&&w?w.p(e,p):(w.d(1),w=q(e),w&&(w.c(),w.m(I,null)))},i:O,o:O,d(e){e&&o(t),e&&o(i),e&&o(l),e&&o(h),e&&o(P),e&&o(R),e&&o(m),e&&o(k),e&&o(u),e&&o(B),e&&o(D),e&&o(V),e&&o(I),w.d(),z=!1,L()}}}const fe=async({fetch:n})=>({props:{posts:await(await n("https://jsonplaceholder.typicode.com/posts")).json()}});let ae=1,re=4;function oe(n,t,r){let i,{posts:l}=t,a=l,s="";function v(){s=this.value,r(0,s)}return n.$$set=h=>{"posts"in h&&r(2,l=h.posts)},n.$$.update=()=>{n.$$.dirty&5&&r(1,i=l.filter(h=>h.title.includes(s)||h.body.includes(s)))},ee({items:a,pageSize:re,currentPage:ae}),[s,i,l,v]}class ue extends Y{constructor(t){super();Z(this,t,oe,ie,$,{posts:2})}}export{ue as default,fe as load};
