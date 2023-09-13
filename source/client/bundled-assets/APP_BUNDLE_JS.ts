export const APP_BUNDLE_JS = "(()=>{var K,a,_e,Pe,P,Y,oe,j,He,U={},re=[],De=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function E(t,e){for(var n in e)t[n]=e[n];return t}function ie(t){var e=t.parentNode;e&&e.removeChild(t)}function V(t,e,n){var o,i,r,u={};for(r in e)r==\"key\"?o=e[r]:r==\"ref\"?i=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?K.call(arguments,2):n),typeof t==\"function\"&&t.defaultProps!=null)for(r in t.defaultProps)u[r]===void 0&&(u[r]=t.defaultProps[r]);return L(t,u,o,i,null)}function L(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++_e};return i==null&&a.vnode!=null&&a.vnode(r),r}function A(t){return t.children}function B(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type==\"function\"?I(t):null}function le(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return le(t)}}function Z(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!F.__r++||Y!==a.debounceRendering)&&((Y=a.debounceRendering)||oe)(F)}function F(){var t,e,n,o,i,r,u,c,s;for(P.sort(j);t=P.shift();)t.__d&&(e=P.length,o=void 0,i=void 0,r=void 0,c=(u=(n=t).__v).__e,(s=n.__P)&&(o=[],i=[],(r=E({},u)).__v=u.__v+1,G(s,u,r,n.__n,s.ownerSVGElement!==void 0,u.__h!=null?[c]:null,o,c??I(u),u.__h,i),ce(o,u,i),u.__e!=c&&le(u)),P.length>e&&P.sort(j));F.__r=0}function ue(t,e,n,o,i,r,u,c,s,y,d){var _,m,f,l,p,H,g,S,x,k=0,b=o&&o.__k||re,M=b.length,w=M,D=e.length;for(n.__k=[],_=0;_<D;_++)(l=n.__k[_]=(l=e[_])==null||typeof l==\"boolean\"||typeof l==\"function\"?null:typeof l==\"string\"||typeof l==\"number\"||typeof l==\"bigint\"?L(null,l,null,null,l):O(l)?L(A,{children:l},null,null,null):l.__b>0?L(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null?(l.__=n,l.__b=n.__b+1,(S=Ue(l,b,g=_+k,w))===-1?f=U:(f=b[S]||U,b[S]=void 0,w--),G(t,l,f,i,r,u,c,s,y,d),p=l.__e,(m=l.ref)&&f.ref!=m&&(f.ref&&z(f.ref,null,l),d.push(m,l.__c||p,l)),p!=null&&(H==null&&(H=p),(x=f===U||f.__v===null)?S==-1&&k--:S!==g&&(S===g+1?k++:S>g?w>D-g?k+=S-g:k--:k=S<g&&S==g-1?S-g:0),g=_+k,typeof l.type!=\"function\"||S===g&&f.__k!==l.__k?typeof l.type==\"function\"||S===g&&!x?l.__d!==void 0?(s=l.__d,l.__d=void 0):s=p.nextSibling:s=ae(t,p,s):s=se(l,s,t),typeof n.type==\"function\"&&(n.__d=s))):(f=b[_])&&f.key==null&&f.__e&&(f.__e==s&&(s=I(f)),q(f,f,!1),b[_]=null);for(n.__e=H,_=M;_--;)b[_]!=null&&(typeof n.type==\"function\"&&b[_].__e!=null&&b[_].__e==n.__d&&(n.__d=b[_].__e.nextSibling),q(b[_],b[_]))}function se(t,e,n){for(var o,i=t.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=t,e=typeof o.type==\"function\"?se(o,e,n):ae(n,o.__e,e));return e}function ae(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Ue(t,e,n,o){var i=t.key,r=t.type,u=n-1,c=n+1,s=e[n];if(s===null||s&&i==s.key&&r===s.type)return n;if(o>(s!=null?1:0))for(;u>=0||c<e.length;){if(u>=0){if((s=e[u])&&i==s.key&&r===s.type)return u;u--}if(c<e.length){if((s=e[c])&&i==s.key&&r===s.type)return c;c++}}return-1}function Ae(t,e,n,o,i){var r;for(r in n)r===\"children\"||r===\"key\"||r in e||T(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!=\"function\"||r===\"children\"||r===\"key\"||r===\"value\"||r===\"checked\"||n[r]===e[r]||T(t,r,e[r],n[r],o)}function ee(t,e,n){e[0]===\"-\"?t.setProperty(e,n??\"\"):t[e]=n==null?\"\":typeof n!=\"number\"||De.test(e)?n:n+\"px\"}function T(t,e,n,o,i){var r;e:if(e===\"style\")if(typeof n==\"string\")t.style.cssText=n;else{if(typeof o==\"string\"&&(t.style.cssText=o=\"\"),o)for(e in o)n&&e in n||ee(t.style,e,\"\");if(n)for(e in n)o&&n[e]===o[e]||ee(t.style,e,n[e])}else if(e[0]===\"o\"&&e[1]===\"n\")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,\"$1\")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?ne:te,r):t.removeEventListener(e,r?ne:te,r);else if(e!==\"dangerouslySetInnerHTML\"){if(i)e=e.replace(/xlink(H|:h)/,\"h\").replace(/sName$/,\"s\");else if(e!==\"width\"&&e!==\"height\"&&e!==\"href\"&&e!==\"list\"&&e!==\"form\"&&e!==\"tabIndex\"&&e!==\"download\"&&e!==\"rowSpan\"&&e!==\"colSpan\"&&e in t)try{t[e]=n??\"\";break e}catch{}typeof n==\"function\"||(n==null||n===!1&&e[4]!==\"-\"?t.removeAttribute(e):t.setAttribute(e,n))}}function te(t){return this.l[t.type+!1](a.event?a.event(t):t)}function ne(t){return this.l[t.type+!0](a.event?a.event(t):t)}function G(t,e,n,o,i,r,u,c,s,y){var d,_,m,f,l,p,H,g,S,x,k,b,M,w,D,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,c=e.__e=n.__e,e.__h=null,r=[c]),(d=a.__b)&&d(e);e:if(typeof C==\"function\")try{if(g=e.props,S=(d=C.contextType)&&o[d.__c],x=d?S?S.props.value:d.__:o,n.__c?H=(_=e.__c=n.__c).__=_.__E:(\"prototype\"in C&&C.prototype.render?e.__c=_=new C(g,x):(e.__c=_=new B(g,x),_.constructor=C,_.render=Ie),S&&S.sub(_),_.props=g,_.state||(_.state={}),_.context=x,_.__n=o,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),C.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=E({},_.__s)),E(_.__s,C.getDerivedStateFromProps(g,_.__s))),f=_.props,l=_.state,_.__v=e,m)C.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(C.getDerivedStateFromProps==null&&g!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(g,x),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(g,_.__s,x)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=g,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),k=0;k<_._sb.length;k++)_.__h.push(_._sb[k]);_._sb=[],_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(g,_.__s,x),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,l,p)})}if(_.context=x,_.props=g,_.__P=t,_.__e=!1,b=a.__r,M=0,\"prototype\"in C&&C.prototype.render){for(_.state=_.__s,_.__d=!1,b&&b(e),d=_.render(_.props,_.state,_.context),w=0;w<_._sb.length;w++)_.__h.push(_._sb[w]);_._sb=[]}else do _.__d=!1,b&&b(e),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++M<25);_.state=_.__s,_.getChildContext!=null&&(o=E(E({},o),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(f,l)),ue(t,O(D=d!=null&&d.type===A&&d.key==null?d.props.children:d)?D:[D],e,n,o,i,r,u,c,s,y),_.base=e.__e,e.__h=null,_.__h.length&&u.push(_),H&&(_.__E=_.__=null)}catch(N){e.__v=null,(s||r!=null)&&(e.__e=c,e.__h=!!s,r[r.indexOf(c)]=null),a.__e(N,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Me(n.__e,e,n,o,i,r,u,s,y);(d=a.diffed)&&d(e)}function ce(t,e,n){for(var o=0;o<n.length;o++)z(n[o],n[++o],n[++o]);a.__c&&a.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){a.__e(r,i.__v)}})}function Me(t,e,n,o,i,r,u,c,s){var y,d,_,m=n.props,f=e.props,l=e.type,p=0;if(l===\"svg\"&&(i=!0),r!=null){for(;p<r.length;p++)if((y=r[p])&&\"setAttribute\"in y==!!l&&(l?y.localName===l:y.nodeType===3)){t=y,r[p]=null;break}}if(t==null){if(l===null)return document.createTextNode(f);t=i?document.createElementNS(\"http://www.w3.org/2000/svg\",l):document.createElement(l,f.is&&f),r=null,c=!1}if(l===null)m===f||c&&t.data===f||(t.data=f);else{if(r=r&&K.call(t.childNodes),d=(m=n.props||U).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!c){if(r!=null)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||\"\"))}if(Ae(t,f,m,i,c),_)e.__k=[];else if(ue(t,O(p=e.props.children)?p:[p],e,n,o,i&&l!==\"foreignObject\",r,u,r?r[0]:n.__k&&I(n,0),c,s),r!=null)for(p=r.length;p--;)r[p]!=null&&ie(r[p]);c||(\"value\"in f&&(p=f.value)!==void 0&&(p!==t.value||l===\"progress\"&&!p||l===\"option\"&&p!==m.value)&&T(t,\"value\",p,m.value,!1),\"checked\"in f&&(p=f.checked)!==void 0&&p!==t.checked&&T(t,\"checked\",p,m.checked,!1))}return t}function z(t,e,n){try{typeof t==\"function\"?t(e):t.current=e}catch(o){a.__e(o,n)}}function q(t,e,n){var o,i;if(a.unmount&&a.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||z(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){a.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&q(o[i],e,n||typeof t.type!=\"function\");n||t.__e==null||ie(t.__e),t.__=t.__e=t.__d=void 0}function Ie(t,e,n){return this.constructor(t,n)}function fe(t,e,n){var o,i,r,u;a.__&&a.__(t,e),i=(o=typeof n==\"function\")?null:n&&n.__k||e.__k,r=[],u=[],G(e,t=(!o&&n||e).__k=V(A,null,[t]),i||U,U,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?K.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,u),ce(r,t,u)}K=re.slice,a={__e:function(t,e,n,o){for(var i,r,u;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),u=i.__d),u)return i.__E=i}catch(c){t=c}throw t}},_e=0,Pe=function(t){return t!=null&&t.constructor===void 0},B.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof t==\"function\"&&(t=t(E({},n),this.props)),t&&E(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Z(this))},B.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Z(this))},B.prototype.render=A,P=[],oe=typeof Promise==\"function\"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(t,e){return t.__v.__b-e.__v.__b},F.__r=0,He=0;function pe(t){throw new Error(`invalid path: ${t}`)}var $,v,J,de,Q=0,be=[],W=[],me=a.__b,he=a.__r,ge=a.diffed,ve=a.__c,ye=a.unmount;function ke(t,e){a.__h&&a.__h(v,t,Q||e),Q=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:W}),n.__[t]}function Ce(t){return Q=1,Ne(we,t)}function Ne(t,e,n){var o=ke($++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):we(void 0,e),function(c){var s=o.__N?o.__N[0]:o.__[0],y=o.t(s,c);s!==y&&(o.__N=[y,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var i=function(c,s,y){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(m){return m.__c});if(d.every(function(m){return!m.__N}))return!r||r.call(this,c,s,y);var _=!1;return d.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(_=!0)}}),!(!_&&o.__c.props===c)&&(!r||r.call(this,c,s,y))};v.u=!0;var r=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(c,s,y){if(this.__e){var d=r;r=void 0,i(c,s,y),r=d}u&&u.call(this,c,s,y)},v.shouldComponentUpdate=i}return o.__N||o.__}function xe(t,e){var n=ke($++,3);!a.__s&&Fe(n.__H,e)&&(n.__=t,n.i=e,v.__H.__h.push(n))}function Le(){for(var t;t=be.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(R),t.__H.__h.forEach(X),t.__H.__h=[]}catch(e){t.__H.__h=[],a.__e(e,t.__v)}}a.__b=function(t){v=null,me&&me(t)},a.__r=function(t){he&&he(t),$=0;var e=(v=t.__c).__H;e&&(J===v?(e.__h=[],v.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(e.__h.forEach(R),e.__h.forEach(X),e.__h=[],$=0)),J=v},a.diffed=function(t){ge&&ge(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(be.push(e)!==1&&de===a.requestAnimationFrame||((de=a.requestAnimationFrame)||Be)(Le)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),J=v=null},a.__c=function(t,e){e.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(o){return!o.__||X(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],a.__e(o,n.__v)}}),ve&&ve(t,e)},a.unmount=function(t){ye&&ye(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{R(o)}catch(i){e=i}}),n.__H=void 0,e&&a.__e(e,n.__v))};var Se=typeof requestAnimationFrame==\"function\";function Be(t){var e,n=function(){clearTimeout(o),Se&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);Se&&(e=requestAnimationFrame(n))}function R(t){var e=v,n=t.__c;typeof n==\"function\"&&(t.__c=void 0,n()),v=e}function X(t){var e=v;t.__c=t.__(),v=e}function Fe(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function we(t,e){return typeof e==\"function\"?e(t):e}function Ee(t){let{stewConfig:e}=t,[n,o]=Ce({loadingStatus:\"loading\",segmentKey:e.stewSegments[0].segmentKey});return xe(()=>{Te({segmentState:n,setSegmentState:o})},[n.segmentKey]),h(\"div\",null,h(\"div\",{style:{display:\"flex\",flexDirection:\"row\"}},e.stewSegments.map(i=>h(\"div\",{style:{padding:8,color:\"purple\",cursor:\"pointer\",fontWeight:700},onClick:()=>{o({loadingStatus:\"loading\",segmentKey:i.segmentKey})}},i.segmentKey))),h(\"div\",{style:{padding:8,fontWeight:300}},n.segmentKey),n.loadingStatus===\"success\"?h(A,null,h(n.segmentModule.SegmentItemDisplay,{someSegmentItem:n.segmentDataset[0]}),h(\"style\",null,n.segmentCss)):null)}async function Te(t){let{segmentState:e,setSegmentState:n}=t,[o,i,r]=await Promise.all([fetch(`/public/datasets/${e.segmentKey}.json`).then(u=>u.json()),fetch(`/public/modules/${e.segmentKey}.js`).then(u=>u.text()).then(u=>new Function(`${u}return segmentModuleResult.default`)()),fetch(`/public/css/${e.segmentKey}.css`).then(u=>u.text())]);n({loadingStatus:\"success\",segmentKey:e.segmentKey,segmentDataset:o,segmentModule:i,segmentCss:r})}window.h=V;Ke();async function Ke(){let e=await(await fetch(\"/public/stew.config.json\")).json();fe(V(Ee,{stewConfig:e}),document.getElementById(\"appContainer\")??pe(\"hydrate.appContainer\")),document.getElementById(\"splashPageStyle\")?.remove(),console.info(e)}})();"