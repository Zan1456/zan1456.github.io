"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{1476:function(e,n,t){t.d(n,{ZP:function(){return K}});var r=t(6168);function i(e,n,t,r){return new(t||(t=Promise))((function(i,u){function o(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}c((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(a){u=[6,a],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var o,a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},g=new WeakMap,p=0,b=function(e){var n,t,r=typeof e,i=e&&e.constructor,u=i==Date;if(f(e)!==e||u||i==RegExp)n=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=g.get(e))return n;if(n=++p+"~",g.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=b(e[t])+",";g.set(e,n)}if(i==f){n="#";for(var o=f.keys(e).sort();!s(t=o.pop());)s(e[t])||(n+=t+":"+b(e[t])+",");g.set(e,n)}}return n},y=!0,w=h(),m=typeof document!=v,k=w&&window.addEventListener?window.addEventListener.bind(window):a,E=m?document.addEventListener.bind(document):a,R=w&&window.removeEventListener?window.removeEventListener.bind(window):a,O=m?document.removeEventListener.bind(document):a,S={isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return!!s(e)||"hidden"!==e}},T={initFocus:function(e){return E("visibilitychange",e),k("focus",e),function(){O("visibilitychange",e),R("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return k("online",n),k("offline",t),function(){R("online",n),R("offline",t)}}},V=!h()||"Deno"in window,C=V?r.useEffect:r.useLayoutEffect,x="undefined"!==typeof navigator&&navigator.connection,D=!V&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),I=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",n,e?"$err$"+e:"",e?"$req$"+e:""]},L=new WeakMap,P=function(e,n,t,r,i,u){for(var o=L.get(e),a=o[0],c=o[1],f=o[4],s=o[5],l=a[n],d=c[n]||[],v=0;v<d.length;++v)d[v](t,r,i);return u&&(delete f[n],delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},F=0,M=function(){return++F},A=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,f,s,d,v,h,g,p,b;return u(this,(function(u){switch(u.label){case 0:if(n=e[0],t=e[1],r=!1!==e[3],i=e[2],o=I(t),a=o[0],f=o[2],!a)return[2];if(s=L.get(n),d=s[2],v=s[3],e.length<3)return[2,P(n,a,n.get(a),n.get(f),c,r)];if(p=d[a]=M(),v[a]=0,l(i))try{i=i(n.get(a))}catch(y){g=y}return i&&l(i.then)?[4,i.catch((function(e){g=e}))]:[3,2];case 1:if(h=u.sent(),p!==d[a]){if(g)throw g;return[2,h]}return[3,3];case 2:h=i,u.label=3;case 3:return g||n.set(a,h),n.set(f,g),v[a]=M(),[4,P(n,a,h,g,c,r)];case 4:if(b=u.sent(),g)throw g;return[2,b]}}))}))},N=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},W=function(e,n){if(!L.has(e)){var t=d(T,n),r={},i=A.bind(c,e),u=a;if(L.set(e,[r,{},{},{},{},{},i]),!V){var o=t.initFocus(N.bind(c,r,0)),f=t.initReconnect(N.bind(c,r,1));u=function(){o&&o(),f&&f(),L.delete(e)}}return[e,i,u]}return[e,L.get(e)[6]]},$=W(new Map),_=$[0],q=$[1],J=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){if(S.isVisible()){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;!s(u)&&o>u||setTimeout(r,a,i)}},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:_,mutate:q,fallback:{}},S),j=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,u=n.use,o=n.fallback;r&&u&&(t.use=r.concat(u)),i&&o&&(t.fallback=d(i,o))}return t},G=(0,r.createContext)({}),H=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},Z=function(){return d(J,(0,r.useContext)(G))},z=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},B={dedupe:!0},K=(f.defineProperty((function(e){var n=e.value,t=j((0,r.useContext)(G),n),i=n&&n.provider,u=(0,r.useState)((function(){return i?W(i(t.cache||_),n):c}))[0];return u&&(t.cache=u[0],t.mutate=u[1]),C((function(){return u?u[2]:c}),[]),(0,r.createElement)(G.Provider,d(e,{value:t}))}),"default",{value:J}),o=function(e,n,t){var o=t.cache,a=t.compare,f=t.fallbackData,v=t.suspense,g=t.revalidateOnMount,p=t.refreshInterval,b=t.refreshWhenHidden,y=t.refreshWhenOffline,w=L.get(o),m=w[0],k=w[1],E=w[2],R=w[3],O=w[4],S=w[5],T=I(e),x=T[0],D=T[1],F=T[2],N=T[3],W=(0,r.useRef)(!1),$=(0,r.useRef)(!1),_=(0,r.useRef)(x),q=(0,r.useRef)(t),J=function(){return q.current},j=o.get(x),G=s(f)?t.fallback[x]:f,H=s(j)?G:j,Z=o.get(F),K=function(){return s(g)?!J().isPaused()&&(v?!s(H):s(H)||t.revalidateIfStale):g},Q=!(!x||!n)&&(!!o.get(N)||!W.current&&K()),U=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),u=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,r.useCallback)((function(e){var r=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return C((function(){i.current=e})),[i,u.current,o]}({data:H,error:Z,isValidating:Q},$),X=U[0],Y=U[1],ee=U[2],ne=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var r,i,f,l,d,v,h,g,p,b;return u(this,(function(u){switch(u.label){case 0:if(!x||!n||$.current||J().isPaused())return[2,!1];f=!0,l=e||{},d=s(O[x])||!l.dedupe,v=function(){return!$.current&&x===_.current&&W.current},h=function(){S[x]===i&&(delete O[x],delete S[x])},g={isValidating:!1},p=function(){o.set(N,!1),v()&&ee(g)},o.set(N,!0),ee({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),d&&(P(o,x,X.current.data,X.current.error,!0),t.loadingTimeout&&!o.get(x)&&setTimeout((function(){f&&v()&&J().onLoadingSlow(x,t)}),t.loadingTimeout),S[x]=M(),O[x]=n.apply(void 0,D)),i=S[x],[4,O[x]];case 2:return r=u.sent(),d&&setTimeout(h,t.dedupingInterval),S[x]!==i?(d&&v()&&J().onDiscarded(x),[2,!1]):(o.set(F,c),g.error=c,!s(E[x])&&(i<=E[x]||i<=R[x]||0===R[x])?(p(),d&&v()&&J().onDiscarded(x),[2,!1]):(a(X.current.data,r)?g.data=X.current.data:g.data=r,a(o.get(x),r)||o.set(x,r),d&&v()&&J().onSuccess(r,x,t),[3,4]));case 3:return b=u.sent(),h(),J().isPaused()||(o.set(F,b),g.error=b,d&&v()&&(J().onError(b,x,t),t.shouldRetryOnError&&J().onErrorRetry(b,x,t,ne,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,p(),v()&&d&&P(o,x,g.data,g.error,!1),[2,!0]}}))}))}),[x]),te=(0,r.useCallback)(A.bind(c,o,(function(){return _.current})),[]);if(C((function(){q.current=t})),C((function(){if(x){var e,n=W.current,t=ne.bind(c,B),r=function(){return J().isVisible()&&J().isOnline()},i=0,u=z(x,k,(function(e,n,t){ee(d({error:n,isValidating:t},a(X.current.data,e)?c:{data:e}))})),o=z(x,m,(function(e){if(0==e){var n=Date.now();J().revalidateOnFocus&&n>i&&r()&&(i=n+J().focusThrottleInterval,t())}else if(1==e)J().revalidateOnReconnect&&r()&&t();else if(2==e)return ne()}));return $.current=!1,_.current=x,W.current=!0,n&&ee({data:H,error:Z,isValidating:Q}),K()&&(s(H)||V?t():(e=t,h()?window.requestAnimationFrame(e):setTimeout(e,1))),function(){$.current=!0,u(),o()}}}),[x,ne]),C((function(){var e;function n(){var n=l(p)?p(H):p;n&&-1!==e&&(e=setTimeout(t,n))}function t(){X.current.error||!b&&!J().isVisible()||!y&&!J().isOnline()?n():ne(B).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[p,b,y,ne]),(0,r.useDebugValue)(H),v&&s(H)&&x)throw s(Z)?ne(B):Z;return{mutate:te,get data(){return Y.data=!0,H},get error(){return Y.error=!0,Z},get isValidating(){return Y.isValidating=!0,Q}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Z(),r=H(e),i=r[0],u=r[1],a=r[2],c=j(t,a),f=o,s=c.use;if(s)for(var l=s.length;l-->0;)f=s[l](f);return f(i,u||c.fetcher,c)})}}]);