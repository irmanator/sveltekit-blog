import{S as P,i as C,s as G,j as q,m as B,o as D,x as H,u as U,v as F,e as A,t as d,c as j,a as S,g as c,d as m,b as _,f as k,H as i,h as p,k as I,n as J}from"../../chunks/vendor-30ebcf7e.js";import K from"./cardAuthor.svelte-161e575f.js";/* empty css                                                            */function L(o){let e,a=o[0].name+"",t;return{c(){e=A("span"),t=d(a),this.h()},l(s){e=j(s,"SPAN",{slot:!0});var r=S(e);t=c(r,a),r.forEach(m),this.h()},h(){_(e,"slot","name")},m(s,r){k(s,e,r),i(e,t)},p(s,r){r&1&&a!==(a=s[0].name+"")&&p(t,a)},d(s){s&&m(e)}}}function M(o){let e,a=o[0].address.street+"",t,s,r=o[0].address.suite+"",$,b,f=o[0].address.city+"",g,y,h=o[0].address.zipcode+"",v,z,u,E,w;return{c(){e=A("span"),t=d(a),s=d(`,\r
            `),$=d(r),b=d(`,\r
            `),g=d(f),y=d(`,\r
            `),v=d(h),z=I(),u=A("a"),E=d("Go to"),this.h()},l(l){e=j(l,"SPAN",{slot:!0});var n=S(e);t=c(n,a),s=c(n,`,\r
            `),$=c(n,r),b=c(n,`,\r
            `),g=c(n,f),y=c(n,`,\r
            `),v=c(n,h),z=J(n),u=j(n,"A",{href:!0});var N=S(u);E=c(N,"Go to"),N.forEach(m),n.forEach(m),this.h()},h(){_(u,"href",w=`https://www.google.com/maps/@${o[0].address.geo.lat},${o[0].address.geo.lng},18z`),_(e,"slot","address")},m(l,n){k(l,e,n),i(e,t),i(e,s),i(e,$),i(e,b),i(e,g),i(e,y),i(e,v),i(e,z),i(e,u),i(u,E)},p(l,n){n&1&&a!==(a=l[0].address.street+"")&&p(t,a),n&1&&r!==(r=l[0].address.suite+"")&&p($,r),n&1&&f!==(f=l[0].address.city+"")&&p(g,f),n&1&&h!==(h=l[0].address.zipcode+"")&&p(v,h),n&1&&w!==(w=`https://www.google.com/maps/@${l[0].address.geo.lat},${l[0].address.geo.lng},18z`)&&_(u,"href",w)},d(l){l&&m(e)}}}function O(o){let e,a=o[0].email+"",t;return{c(){e=A("span"),t=d(a),this.h()},l(s){e=j(s,"SPAN",{slot:!0});var r=S(e);t=c(r,a),r.forEach(m),this.h()},h(){_(e,"slot","email")},m(s,r){k(s,e,r),i(e,t)},p(s,r){r&1&&a!==(a=s[0].email+"")&&p(t,a)},d(s){s&&m(e)}}}function Q(o){let e,a;return e=new K({props:{$$slots:{email:[O],address:[M],name:[L]},$$scope:{ctx:o}}}),{c(){q(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){D(e,t,s),a=!0},p(t,[s]){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){U(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}const X=async({page:o,fetch:e})=>{const a=o.params.id;return{props:{user:await(await e(`https://jsonplaceholder.typicode.com/users/${a}`)).json()}}};function R(o,e,a){let{user:t}=e;return o.$$set=s=>{"user"in s&&a(0,t=s.user)},[t]}class Y extends P{constructor(e){super();C(this,e,R,Q,G,{user:0})}}export{Y as default,X as load};
