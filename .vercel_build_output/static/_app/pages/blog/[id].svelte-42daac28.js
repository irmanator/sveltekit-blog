import{S as B,i as C,s as U,e as v,t as m,k as N,c as y,a as b,g as j,d,n as O,b as P,f as V,H as s,h as S,I as A}from"../../chunks/vendor-30ebcf7e.js";function z(r){let e,n,l=r[0].title+"",o,i,u,_=r[0].body+"",w,k,c,D,h,f=r[1].name+"",g,E,H,p=JSON.stringify({user:r[1]})+"",I;return{c(){e=v("div"),n=v("h2"),o=m(l),i=N(),u=v("p"),w=m(_),k=N(),c=v("p"),D=m("Written by "),h=v("a"),g=m(f),H=N(),I=m(p),this.h()},l(a){e=y(a,"DIV",{class:!0});var t=b(e);n=y(t,"H2",{});var R=b(n);o=j(R,l),R.forEach(d),i=O(t),u=y(t,"P",{});var W=b(u);w=j(W,_),W.forEach(d),k=O(t),c=y(t,"P",{});var J=b(c);D=j(J,"Written by "),h=y(J,"A",{href:!0});var q=b(h);g=j(q,f),q.forEach(d),J.forEach(d),H=O(t),I=j(t,p),t.forEach(d),this.h()},h(){P(h,"href",E=`/authors/${r[0].userId}`),P(e,"class","post svelte-1wbhwjv")},m(a,t){V(a,e,t),s(e,n),s(n,o),s(e,i),s(e,u),s(u,w),s(e,k),s(e,c),s(c,D),s(c,h),s(h,g),s(e,H),s(e,I)},p(a,[t]){t&1&&l!==(l=a[0].title+"")&&S(o,l),t&1&&_!==(_=a[0].body+"")&&S(w,_),t&2&&f!==(f=a[1].name+"")&&S(g,f),t&1&&E!==(E=`/authors/${a[0].userId}`)&&P(h,"href",E),t&2&&p!==(p=JSON.stringify({user:a[1]})+"")&&S(I,p)},i:A,o:A,d(a){a&&d(e)}}}const K=async({page:r,fetch:e})=>{const n=r.params.id,o=await(await e(`https://jsonplaceholder.typicode.com/posts/${n}`)).json(),u=await(await e(`https://jsonplaceholder.typicode.com/users/${o.userId}`)).json();return{props:{post:o,user:u}}};function F(r,e,n){let{post:l}=e,{user:o}=e;return r.$$set=i=>{"post"in i&&n(0,l=i.post),"user"in i&&n(1,o=i.user)},[l,o]}class L extends B{constructor(e){super();C(this,e,F,z,U,{post:0,user:1})}}export{L as default,K as load};
