export const APP_BUNDLE_JS = "(()=>{var V,a,oe,Pe,P,Z,re,$,He,A={},ie=[],De=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function E(t,e){for(var n in e)t[n]=e[n];return t}function ue(t){var e=t.parentNode;e&&e.removeChild(t)}function K(t,e,n){var o,i,r,l={};for(r in e)r==\"key\"?o=e[r]:r==\"ref\"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):n),typeof t==\"function\"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return I(t,l,o,i,null)}function I(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++oe};return i==null&&a.vnode!=null&&a.vnode(r),r}function H(t){return t.children}function L(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type==\"function\"?F(t):null}function le(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return le(t)}}function ee(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!T.__r++||Z!==a.debounceRendering)&&((Z=a.debounceRendering)||re)(T)}function T(){var t,e,n,o,i,r,l,c,s;for(P.sort($);t=P.shift();)t.__d&&(e=P.length,o=void 0,i=void 0,r=void 0,c=(l=(n=t).__v).__e,(s=n.__P)&&(o=[],i=[],(r=E({},l)).__v=l.__v+1,G(s,l,r,n.__n,s.ownerSVGElement!==void 0,l.__h!=null?[c]:null,o,c??F(l),l.__h,i),fe(o,l,i),l.__e!=c&&le(l)),P.length>e&&P.sort($));T.__r=0}function se(t,e,n,o,i,r,l,c,s,y,d){var _,m,f,u,p,D,g,S,C,k=0,b=o&&o.__k||ie,M=b.length,w=M,U=e.length;for(n.__k=[],_=0;_<U;_++)(u=n.__k[_]=(u=e[_])==null||typeof u==\"boolean\"||typeof u==\"function\"?null:typeof u==\"string\"||typeof u==\"number\"||typeof u==\"bigint\"?I(null,u,null,null,u):O(u)?I(H,{children:u},null,null,null):u.__b>0?I(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=n,u.__b=n.__b+1,(S=Ue(u,b,g=_+k,w))===-1?f=A:(f=b[S]||A,b[S]=void 0,w--),G(t,u,f,i,r,l,c,s,y,d),p=u.__e,(m=u.ref)&&f.ref!=m&&(f.ref&&z(f.ref,null,u),d.push(m,u.__c||p,u)),p!=null&&(D==null&&(D=p),(C=f===A||f.__v===null)?S==-1&&k--:S!==g&&(S===g+1?k++:S>g?w>U-g?k+=S-g:k--:k=S<g&&S==g-1?S-g:0),g=_+k,typeof u.type!=\"function\"||S===g&&f.__k!==u.__k?typeof u.type==\"function\"||S===g&&!C?u.__d!==void 0?(s=u.__d,u.__d=void 0):s=p.nextSibling:s=ce(t,p,s):s=ae(u,s,t),typeof n.type==\"function\"&&(n.__d=s))):(f=b[_])&&f.key==null&&f.__e&&(f.__e==s&&(s=F(f)),q(f,f,!1),b[_]=null);for(n.__e=D,_=M;_--;)b[_]!=null&&(typeof n.type==\"function\"&&b[_].__e!=null&&b[_].__e==n.__d&&(n.__d=b[_].__e.nextSibling),q(b[_],b[_]))}function ae(t,e,n){for(var o,i=t.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=t,e=typeof o.type==\"function\"?ae(o,e,n):ce(n,o.__e,e));return e}function ce(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Ue(t,e,n,o){var i=t.key,r=t.type,l=n-1,c=n+1,s=e[n];if(s===null||s&&i==s.key&&r===s.type)return n;if(o>(s!=null?1:0))for(;l>=0||c<e.length;){if(l>=0){if((s=e[l])&&i==s.key&&r===s.type)return l;l--}if(c<e.length){if((s=e[c])&&i==s.key&&r===s.type)return c;c++}}return-1}function Ae(t,e,n,o,i){var r;for(r in n)r===\"children\"||r===\"key\"||r in e||B(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!=\"function\"||r===\"children\"||r===\"key\"||r===\"value\"||r===\"checked\"||n[r]===e[r]||B(t,r,e[r],n[r],o)}function te(t,e,n){e[0]===\"-\"?t.setProperty(e,n??\"\"):t[e]=n==null?\"\":typeof n!=\"number\"||De.test(e)?n:n+\"px\"}function B(t,e,n,o,i){var r;e:if(e===\"style\")if(typeof n==\"string\")t.style.cssText=n;else{if(typeof o==\"string\"&&(t.style.cssText=o=\"\"),o)for(e in o)n&&e in n||te(t.style,e,\"\");if(n)for(e in n)o&&n[e]===o[e]||te(t.style,e,n[e])}else if(e[0]===\"o\"&&e[1]===\"n\")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,\"$1\")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?_e:ne,r):t.removeEventListener(e,r?_e:ne,r);else if(e!==\"dangerouslySetInnerHTML\"){if(i)e=e.replace(/xlink(H|:h)/,\"h\").replace(/sName$/,\"s\");else if(e!==\"width\"&&e!==\"height\"&&e!==\"href\"&&e!==\"list\"&&e!==\"form\"&&e!==\"tabIndex\"&&e!==\"download\"&&e!==\"rowSpan\"&&e!==\"colSpan\"&&e in t)try{t[e]=n??\"\";break e}catch{}typeof n==\"function\"||(n==null||n===!1&&e[4]!==\"-\"?t.removeAttribute(e):t.setAttribute(e,n))}}function ne(t){return this.l[t.type+!1](a.event?a.event(t):t)}function _e(t){return this.l[t.type+!0](a.event?a.event(t):t)}function G(t,e,n,o,i,r,l,c,s,y){var d,_,m,f,u,p,D,g,S,C,k,b,M,w,U,x=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,c=e.__e=n.__e,e.__h=null,r=[c]),(d=a.__b)&&d(e);e:if(typeof x==\"function\")try{if(g=e.props,S=(d=x.contextType)&&o[d.__c],C=d?S?S.props.value:d.__:o,n.__c?D=(_=e.__c=n.__c).__=_.__E:(\"prototype\"in x&&x.prototype.render?e.__c=_=new x(g,C):(e.__c=_=new L(g,C),_.constructor=x,_.render=Fe),S&&S.sub(_),_.props=g,_.state||(_.state={}),_.context=C,_.__n=o,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),x.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=E({},_.__s)),E(_.__s,x.getDerivedStateFromProps(g,_.__s))),f=_.props,u=_.state,_.__v=e,m)x.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(x.getDerivedStateFromProps==null&&g!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(g,C),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(g,_.__s,C)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=g,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),k=0;k<_._sb.length;k++)_.__h.push(_._sb[k]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(g,_.__s,C),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,u,p)})}if(_.context=C,_.props=g,_.__P=t,_.__e=!1,b=a.__r,M=0,\"prototype\"in x&&x.prototype.render){for(_.state=_.__s,_.__d=!1,b&&b(e),d=_.render(_.props,_.state,_.context),w=0;w<_._sb.length;w++)_.__h.push(_._sb[w]);_._sb=[]}else do _.__d=!1,b&&b(e),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++M<25);_.state=_.__s,_.getChildContext!=null&&(o=E(E({},o),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(f,u)),se(t,O(U=d!=null&&d.type===H&&d.key==null?d.props.children:d)?U:[U],e,n,o,i,r,l,c,s,y),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),D&&(_.__E=_.__=null)}catch(N){e.__v=null,(s||r!=null)&&(e.__e=c,e.__h=!!s,r[r.indexOf(c)]=null),a.__e(N,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Me(n.__e,e,n,o,i,r,l,s,y);(d=a.diffed)&&d(e)}function fe(t,e,n){for(var o=0;o<n.length;o++)z(n[o],n[++o],n[++o]);a.__c&&a.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){a.__e(r,i.__v)}})}function Me(t,e,n,o,i,r,l,c,s){var y,d,_,m=n.props,f=e.props,u=e.type,p=0;if(u===\"svg\"&&(i=!0),r!=null){for(;p<r.length;p++)if((y=r[p])&&\"setAttribute\"in y==!!u&&(u?y.localName===u:y.nodeType===3)){t=y,r[p]=null;break}}if(t==null){if(u===null)return document.createTextNode(f);t=i?document.createElementNS(\"http://www.w3.org/2000/svg\",u):document.createElement(u,f.is&&f),r=null,c=!1}if(u===null)m===f||c&&t.data===f||(t.data=f);else{if(r=r&&V.call(t.childNodes),d=(m=n.props||A).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!c){if(r!=null)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||\"\"))}if(Ae(t,f,m,i,c),_)e.__k=[];else if(se(t,O(p=e.props.children)?p:[p],e,n,o,i&&u!==\"foreignObject\",r,l,r?r[0]:n.__k&&F(n,0),c,s),r!=null)for(p=r.length;p--;)r[p]!=null&&ue(r[p]);c||(\"value\"in f&&(p=f.value)!==void 0&&(p!==t.value||u===\"progress\"&&!p||u===\"option\"&&p!==m.value)&&B(t,\"value\",p,m.value,!1),\"checked\"in f&&(p=f.checked)!==void 0&&p!==t.checked&&B(t,\"checked\",p,m.checked,!1))}return t}function z(t,e,n){try{typeof t==\"function\"?t(e):t.current=e}catch(o){a.__e(o,n)}}function q(t,e,n){var o,i;if(a.unmount&&a.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||z(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){a.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&q(o[i],e,n||typeof t.type!=\"function\");n||t.__e==null||ue(t.__e),t.__=t.__e=t.__d=void 0}function Fe(t,e,n){return this.constructor(t,n)}function Ne(t,e,n){var o,i,r,l;a.__&&a.__(t,e),i=(o=typeof n==\"function\")?null:n&&n.__k||e.__k,r=[],l=[],G(e,t=(!o&&n||e).__k=K(H,null,[t]),i||A,A,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?V.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,l),fe(r,t,l)}function J(t,e){Ne(t,e,J)}V=ie.slice,a={__e:function(t,e,n,o){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),l=i.__d),l)return i.__E=i}catch(c){t=c}throw t}},oe=0,Pe=function(t){return t!=null&&t.constructor===void 0},L.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof t==\"function\"&&(t=t(E({},n),this.props)),t&&E(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ee(this))},L.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ee(this))},L.prototype.render=H,P=[],re=typeof Promise==\"function\"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(t,e){return t.__v.__b-e.__v.__b},T.__r=0,He=0;var j,v,Q,pe,X=0,Se=[],W=[],de=a.__b,me=a.__r,he=a.diffed,ge=a.__c,ve=a.unmount;function be(t,e){a.__h&&a.__h(v,t,X||e),X=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:W}),n.__[t]}function ke(t){return X=1,Ie(Ce,t)}function Ie(t,e,n){var o=be(j++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):Ce(void 0,e),function(c){var s=o.__N?o.__N[0]:o.__[0],y=o.t(s,c);s!==y&&(o.__N=[y,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var i=function(c,s,y){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(m){return m.__c});if(d.every(function(m){return!m.__N}))return!r||r.call(this,c,s,y);var _=!1;return d.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(_=!0)}}),!(!_&&o.__c.props===c)&&(!r||r.call(this,c,s,y))};v.u=!0;var r=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(c,s,y){if(this.__e){var d=r;r=void 0,i(c,s,y),r=d}l&&l.call(this,c,s,y)},v.shouldComponentUpdate=i}return o.__N||o.__}function xe(t,e){var n=be(j++,3);!a.__s&&Be(n.__H,e)&&(n.__=t,n.i=e,v.__H.__h.push(n))}function Le(){for(var t;t=Se.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(R),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],a.__e(e,t.__v)}}a.__b=function(t){v=null,de&&de(t)},a.__r=function(t){me&&me(t),j=0;var e=(v=t.__c).__H;e&&(Q===v?(e.__h=[],v.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(e.__h.forEach(R),e.__h.forEach(Y),e.__h=[],j=0)),Q=v},a.diffed=function(t){he&&he(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Se.push(e)!==1&&pe===a.requestAnimationFrame||((pe=a.requestAnimationFrame)||Te)(Le)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),Q=v=null},a.__c=function(t,e){e.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(o){return!o.__||Y(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],a.__e(o,n.__v)}}),ge&&ge(t,e)},a.unmount=function(t){ve&&ve(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{R(o)}catch(i){e=i}}),n.__H=void 0,e&&a.__e(e,n.__v))};var ye=typeof requestAnimationFrame==\"function\";function Te(t){var e,n=function(){clearTimeout(o),ye&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);ye&&(e=requestAnimationFrame(n))}function R(t){var e=v,n=t.__c;typeof n==\"function\"&&(t.__c=void 0,n()),v=e}function Y(t){var e=v;t.__c=t.__(),v=e}function Be(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Ce(t,e){return typeof e==\"function\"?e(t):e}function we(t){let{stewConfig:e}=t,[n,o]=ke({loadingStatus:\"loading\",segmentKey:e.stewSegments[0].segmentKey});return xe(()=>{Ve({segmentState:n,setSegmentState:o})},[n.segmentKey]),h(\"div\",null,h(\"div\",{style:{display:\"flex\",flexDirection:\"row\"}},e.stewSegments.map(i=>h(\"div\",{style:{padding:8,color:\"purple\",cursor:\"pointer\",fontWeight:700},onClick:()=>{o({loadingStatus:\"loading\",segmentKey:i.segmentKey})}},i.segmentKey))),h(\"div\",{style:{padding:8,fontWeight:300}},n.segmentKey),n.loadingStatus===\"success\"?h(H,null,h(n.segmentModule.SegmentItemDisplay,{someSegmentItem:n.segmentDataset[0]}),h(\"style\",null,n.segmentCss)):null)}async function Ve(t){let{segmentState:e,setSegmentState:n}=t,[o,i,r]=await Promise.all([fetch(`/public/datasets/${e.segmentKey}.json`).then(l=>l.json()),fetch(`/public/modules/${e.segmentKey}.js`).then(l=>l.text()).then(l=>new Function(`${l}return segmentModuleResult.default`)()),fetch(`/public/css/${e.segmentKey}.css`).then(l=>l.text())]);n({loadingStatus:\"success\",segmentKey:e.segmentKey,segmentDataset:o,segmentModule:i,segmentCss:r})}function Ee(t){throw new Error(`invalid path: ${t}`)}window.h=K;Ke();async function Ke(){let e=await(await fetch(\"/public/stew.config.json\")).json();J(K(we,{stewConfig:e}),document.getElementById(\"appContainer\")??Ee(\"hydrate.appContainer\")),console.info(e)}})();"