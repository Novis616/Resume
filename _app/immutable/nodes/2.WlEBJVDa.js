import{a as N,t as S}from"../chunks/disclose-version.CvARbPmp.js";import"../chunks/legacy.CPnMCMcc.js";import{$ as xe,ad as ue,ap as le,h as H,Q as B,a as pe,J as ge,q as he,Z as oe,af as me,ag as te,O as G,T as L,V as _e,aq as q,ah as ve,a0 as ce,ai as be,al as ye,m as ae,ar as P,as as re,at as Q,au as we,Y as Ee,av as ke,aw as Ae,H as Te,ax as Ie,E as Ne,s as ne,ay as Se,M as Ce,p as He,az as Me,a7 as O,aa as h,a8 as d,a9 as v,k as I,aA as De}from"../chunks/runtime.N1cC8Er5.js";import{s as k}from"../chunks/render.CB4UT2AD.js";import{p as D}from"../chunks/props.CrdReMw4.js";/* empty css                    */function V(a,e){return e}function Re(a,e,t,r){for(var s=[],c=e.length,i=0;i<c;i++)we(e[i].e,s,!0);var f=c>0&&s.length===0&&t!==null;if(f){var x=t.parentNode;Ee(x),x.append(t),r.clear(),M(a,e[0].prev,e[c-1].next)}ke(s,()=>{for(var b=0;b<c;b++){var u=e[b];f||(r.delete(u.k),M(a,u.prev,u.next)),Ae(u.e,!f)}})}function Y(a,e,t,r,s,c=null){var i=a,f={flags:e,items:new Map,first:null},x=(e&le)!==0;if(x){var b=a;i=H?B(ge(b)):b.appendChild(xe())}H&&pe();var u=null,m=!1;ue(()=>{var _=t(),n=he(_)?_:_==null?[]:oe(_),l=n.length;if(m&&l===0)return;m=l===0;let g=!1;if(H){var T=i.data===me;T!==(l===0)&&(i=te(),B(i),G(!1),g=!0)}if(H){for(var w=null,y,E=0;E<l;E++){if(L.nodeType===8&&L.data===_e){i=L,g=!0,G(!1);break}var A=n[E],o=r(A,E);y=de(L,f,w,null,A,o,E,s,e),f.items.set(o,y),w=y}l>0&&B(te())}if(!H){var p=Te;Le(n,f,i,s,e,(p.f&q)!==0,r)}c!==null&&(l===0?u?ve(u):u=ce(()=>c(i)):u!==null&&be(u,()=>{u=null})),g&&G(!0),t()}),H&&(i=L)}function Le(a,e,t,r,s,c,i,f){var X,Z,W,j;var x=(s&Ie)!==0,b=(s&(P|Q))!==0,u=a.length,m=e.items,_=e.first,n=_,l,g=null,T,w=[],y=[],E,A,o,p;if(x)for(p=0;p<u;p+=1)E=a[p],A=i(E,p),o=m.get(A),o!==void 0&&((X=o.a)==null||X.measure(),(T??(T=new Set)).add(o));for(p=0;p<u;p+=1){if(E=a[p],A=i(E,p),o=m.get(A),o===void 0){var F=n?n.e.nodes_start:t;g=de(F,e,g,g===null?e.first:g.next,E,A,p,r,s),m.set(A,g),w=[],y=[],n=g.next;continue}if(b&&Oe(o,E,p,s),o.e.f&q&&(ve(o.e),x&&((Z=o.a)==null||Z.unfix(),(T??(T=new Set)).delete(o))),o!==n){if(l!==void 0&&l.has(o)){if(w.length<y.length){var $=y[0],C;g=$.prev;var U=w[0],J=w[w.length-1];for(C=0;C<w.length;C+=1)se(w[C],$,t);for(C=0;C<y.length;C+=1)l.delete(y[C]);M(e,U.prev,J.next),M(e,g,U),M(e,J,$),n=$,g=J,p-=1,w=[],y=[]}else l.delete(o),se(o,n,t),M(e,o.prev,o.next),M(e,o,g===null?e.first:g.next),M(e,g,o),g=o;continue}for(w=[],y=[];n!==null&&n.k!==A;)(c||!(n.e.f&q))&&(l??(l=new Set)).add(n),y.push(n),n=n.next;if(n===null)continue;o=n}w.push(o),g=o,n=o.next}if(n!==null||l!==void 0){for(var R=l===void 0?[]:oe(l);n!==null;)(c||!(n.e.f&q))&&R.push(n),n=n.next;var z=R.length;if(z>0){var fe=s&le&&u===0?t:null;if(x){for(p=0;p<z;p+=1)(W=R[p].a)==null||W.measure();for(p=0;p<z;p+=1)(j=R[p].a)==null||j.fix()}Re(e,R,fe,m)}}x&&ye(()=>{var ee;if(T!==void 0)for(o of T)(ee=o.a)==null||ee.apply()}),ae.first=e.first&&e.first.e,ae.last=g&&g.e}function Oe(a,e,t,r){r&P&&re(a.v,e),r&Q?re(a.i,t):a.i=t}function de(a,e,t,r,s,c,i,f,x,b){var u=(x&P)!==0,m=(x&Se)===0,_=u?m?Ne(s):ne(s):s,n=x&Q?ne(i):i,l={i:n,v:_,k:c,a:null,e:null,prev:t,next:r};try{return l.e=ce(()=>f(a,_,n),H),l.e.prev=t&&t.e,l.e.next=r&&r.e,t===null?e.first=l:(t.next=l,t.e.next=l.e),r!==null&&(r.prev=l,r.e.prev=l.e),l}finally{}}function se(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,s=e?e.e.nodes_start:t,c=a.e.nodes_start;c!==r;){var i=Ce(c);s.before(c),c=i}}function M(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function K(a,e,t,r){var s=a.__attributes??(a.__attributes={});H&&(s[e]=a.getAttribute(e),a.nodeName==="LINK")||s[e]!==(s[e]=t)&&(t==null?a.removeAttribute(e):typeof t!="string"&&$e(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var ie=new Map;function $e(a){var e=ie.get(a.nodeName);if(e)return e;ie.set(a.nodeName,e=[]);for(var t,r=a,s=Element.prototype;s!==r;){t=Me(r);for(var c in t)t[c].set&&e.push(c);r=He(r)}return e}var qe=S('<section id="personal-info" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10 svelte-1mym0pf"><h2 class="font-heading text-4xl text-primary mb-4 text-center">Контактная информация</h2> <div class="space-y-4 text-center"><p class="text-lg"><strong>Имя:</strong> <span class="text-lg leading-relaxed text-center"> </span></p> <p class="text-lg"><strong>Должность:</strong> <span class="text-lg leading-relaxed text-center"> </span></p> <p class="text-lg"><strong>Email:</strong> <a class="text-lg leading-relaxed text-center"> </a></p> <p class="text-lg"><strong>Телефон:</strong> <span class="text-lg leading-relaxed text-center"> </span></p> <p class="text-lg"><strong>Telegram:</strong> <a target="_blank" class="text-lg leading-relaxed text-center hover:text-blue-700"> </a></p></div></section>');function Ve(a,e){let t=D(e,"name",8,"Руслан Соколов"),r=D(e,"position",8,"Frontend Developer"),s=D(e,"email",8,"ruslasha616@gmail.com"),c=D(e,"phone",8,"+7 (996) 008-96-52"),i=D(e,"linkedin",8,"https://t.me/Novis616");var f=qe(),x=h(d(f),2),b=d(x),u=h(d(b),2),m=d(u,!0);v(u),v(b);var _=h(b,2),n=h(d(_),2),l=d(n,!0);v(n),v(_);var g=h(_,2),T=h(d(g),2),w=d(T,!0);v(T),v(g);var y=h(g,2),E=h(d(y),2),A=d(E,!0);v(E),v(y);var o=h(y,2),p=h(d(o),2),F=d(p,!0);v(p),v(o),v(x),v(f),O(()=>{k(m,t()),k(l,r()),K(T,"href",`mailto:${s()??""}`),k(w,s()),k(A,c()),K(p,"href",`https://${i()??""}`),k(F,i())}),N(a,f)}var Ye=S('<li class="text-lg leading-relaxed text-center svelte-nbdvy3"> </li>'),Fe=S('<section id="skills" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10 svelte-nbdvy3"><h2 class="font-heading text-4xl text-primary mb-4 text-center">Навыки</h2> <ul class="list-disc pl-6 space-y-3"></ul></section>');function Je(a,e){let t=D(e,"skills",24,()=>["JavaScript","Svelte","HTML","CSS","Git","Node.js"]);var r=Fe(),s=h(d(r),2);Y(s,5,t,V,(c,i)=>{var f=Ye(),x=d(f,!0);v(f),O(()=>k(x,I(i))),N(c,f)}),v(s),v(r),N(a,r)}var ze=S('<div class="mb-6"><h3 class="text-xl font-semibold text-gray-800 text-center"> </h3> <p class="text-lg text-black-600 text-center"><strong> </strong> </p> <p class="text-lg leading-relaxed text-center"> </p></div>'),Be=S('<section id="experience" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10 svelte-1mym0pf"><h2 class="font-heading text-4xl text-primary mb-4 text-center">Опыт работы</h2> <!></section>');function Ge(a,e){let t=D(e,"experiences",24,()=>[{company:"Фриланс",role:"Frontend Developer",period:"2022 - 2023",description:"Разработка и оптимизация интерфейсов для веб-приложений."}]);var r=Be(),s=h(d(r),2);Y(s,1,t,V,(c,i)=>{var f=ze(),x=d(f),b=d(x,!0);v(x);var u=h(x,2),m=d(u),_=d(m,!0);v(m);var n=h(m);v(u);var l=h(u,2),g=d(l,!0);v(l),v(f),O(()=>{k(b,I(i).company),k(_,I(i).role),k(n,` (${I(i).period??""})`),k(g,I(i).description)}),N(c,f)}),v(r),N(a,r)}var Ke=S('<div class="mb-6"><h3 class="text-xl font-semibold text-gray-800 text-center"> </h3> <p class="text-lg text-black-600 text-center"><strong> </strong> </p></div>'),Pe=S('<section id="education" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10 svelte-1mym0pf"><h2 class="font-heading text-4xl text-primary mb-4 text-center">Образование</h2> <!></section>');function Qe(a,e){let t=D(e,"education",24,()=>[{institution:"ННГАСУ",degree:"Бакалавр, Программная инженерия",period:"2021 - 2024"},{institution:"ПГТУ",degree:"Бакалавр, Программная инженерия",period:"2024 - 2026"}]);var r=Pe(),s=h(d(r),2);Y(s,1,t,V,(c,i)=>{var f=Ke(),x=d(f),b=d(x,!0);v(x);var u=h(x,2),m=d(u),_=d(m,!0);v(m);var n=h(m);v(u),v(f),O(()=>{k(b,I(i).institution),k(_,I(i).degree),k(n,` (${I(i).period??""})`)}),N(c,f)}),v(r),N(a,r)}var Ue=S('<li><a class="hover:text-secondary"> </a></li>'),Xe=S('<main class="bg-background text-text min-h-screen"><nav class="bg-primary text-white py-4"><div class="container mx-auto flex justify-between items-center svelte-bb7tsf"><h1 class="font-heading text-2xl">Мое Резюме</h1> <ul class="flex gap-6"></ul></div></nav> <section class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10"><h2 class="font-heading text-4xl text-primary mb-4 text-center">Добро пожаловать!</h2> <p class="text-lg leading-relaxed text-center">Я — разработчик, увлеченный созданием красивых и функциональных интерфейсов. Это мое резюме, где вы можете узнать больше обо мне, моих навыках и опыте.</p></section> <!> <!> <!> <!> <footer class="bg-primary text-white py-6"><div class="container mx-auto text-center svelte-bb7tsf"><p class="font-sans text-sm">&copy; 2025 Руслан Соколов. Все права защищены.</p></div></footer></main>');function rt(a){const e=[{name:"Контакты",id:"personal-info"},{name:"Навыки",id:"skills"},{name:"Образование",id:"education"},{name:"Опыт работы",id:"experience"}];var t=Xe(),r=d(t),s=d(r),c=h(d(s),2);Y(c,5,()=>e,V,(u,m)=>{var _=Ue(),n=d(_),l=d(n,!0);v(n),v(_),O(()=>{K(n,"href",`#${I(m).id??""}`),k(l,I(m).name)}),N(u,_)}),v(c),v(s),v(r);var i=h(r,4);Ve(i,{});var f=h(i,2);Je(f,{});var x=h(f,2);Qe(x,{});var b=h(x,2);Ge(b,{}),De(2),v(t),N(a,t)}export{rt as component};
