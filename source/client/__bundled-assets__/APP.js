var __moduleIifeResult=(()=>{var R,c,te,Ie,I,ne,ie,q,ke,D={},oe=[],De=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function K(t,e){for(var n in e)t[n]=e[n];return t}function re(t){var e=t.parentNode;e&&e.removeChild(t)}function _e(t,e,n){var o,_,r,s={};for(r in e)r=="key"?o=e[r]:r=="ref"?_=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?R.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)s[r]===void 0&&(s[r]=t.defaultProps[r]);return N(t,s,o,_,null)}function N(t,e,n,o,_){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_??++te};return _==null&&c.vnode!=null&&c.vnode(r),r}function O(t){return t.children}function U(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function se(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return se(t)}}function le(t){(!t.__d&&(t.__d=!0)&&I.push(t)&&!L.__r++||ne!==c.debounceRendering)&&((ne=c.debounceRendering)||ie)(L)}function L(){var t,e,n,o,_,r,s,u,l;for(I.sort(q);t=I.shift();)t.__d&&(e=I.length,o=void 0,_=void 0,r=void 0,u=(s=(n=t).__v).__e,(l=n.__P)&&(o=[],_=[],(r=K({},s)).__v=s.__v+1,G(l,s,r,n.__n,l.ownerSVGElement!==void 0,s.__h!=null?[u]:null,o,u??E(s),s.__h,_),me(o,s,_),s.__e!=u&&se(s)),I.length>e&&I.sort(q));L.__r=0}function ae(t,e,n,o,_,r,s,u,l,d,m){var i,p,f,a,g,b,v,y,x,V=0,S=o&&o.__k||oe,T=S.length,C=T,M=e.length;for(n.__k=[],i=0;i<M;i++)(a=n.__k[i]=(a=e[i])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?N(null,a,null,null,a):z(a)?N(O,{children:a},null,null,null):a.__b>0?N(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null?(a.__=n,a.__b=n.__b+1,(y=Me(a,S,v=i+V,C))===-1?f=D:(f=S[y]||D,S[y]=void 0,C--),G(t,a,f,_,r,s,u,l,d,m),g=a.__e,(p=a.ref)&&f.ref!=p&&(f.ref&&Y(f.ref,null,a),m.push(p,a.__c||g,a)),g!=null&&(b==null&&(b=g),(x=f===D||f.__v===null)?y==-1&&V--:y!==v&&(y===v+1?V++:y>v?C>M-v?V+=y-v:V--:V=y<v&&y==v-1?y-v:0),v=i+V,typeof a.type!="function"||y===v&&f.__k!==a.__k?typeof a.type=="function"||y===v&&!x?a.__d!==void 0?(l=a.__d,a.__d=void 0):l=g.nextSibling:l=ce(t,g,l):l=ue(a,l,t),typeof n.type=="function"&&(n.__d=l))):(f=S[i])&&f.key==null&&f.__e&&(f.__e==l&&(l=E(f)),J(f,f,!1),S[i]=null);for(n.__e=b,i=T;i--;)S[i]!=null&&(typeof n.type=="function"&&S[i].__e!=null&&S[i].__e==n.__d&&(n.__d=S[i].__e.nextSibling),J(S[i],S[i]))}function ue(t,e,n){for(var o,_=t.__k,r=0;_&&r<_.length;r++)(o=_[r])&&(o.__=t,e=typeof o.type=="function"?ue(o,e,n):ce(n,o.__e,e));return e}function ce(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Me(t,e,n,o){var _=t.key,r=t.type,s=n-1,u=n+1,l=e[n];if(l===null||l&&_==l.key&&r===l.type)return n;if(o>(l!=null?1:0))for(;s>=0||u<e.length;){if(s>=0){if((l=e[s])&&_==l.key&&r===l.type)return s;s--}if(u<e.length){if((l=e[u])&&_==l.key&&r===l.type)return u;u++}}return-1}function Oe(t,e,n,o,_){var r;for(r in n)r==="children"||r==="key"||r in e||W(t,r,null,n[r],o);for(r in e)_&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||W(t,r,e[r],n[r],o)}function fe(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||De.test(e)?n:n+"px"}function W(t,e,n,o,_){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||fe(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||fe(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?pe:ge,r):t.removeEventListener(e,r?pe:ge,r);else if(e!=="dangerouslySetInnerHTML"){if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ge(t){return this.l[t.type+!1](c.event?c.event(t):t)}function pe(t){return this.l[t.type+!0](c.event?c.event(t):t)}function G(t,e,n,o,_,r,s,u,l,d){var m,i,p,f,a,g,b,v,y,x,V,S,T,C,M,P=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,u=e.__e=n.__e,e.__h=null,r=[u]),(m=c.__b)&&m(e);e:if(typeof P=="function")try{if(v=e.props,y=(m=P.contextType)&&o[m.__c],x=m?y?y.props.value:m.__:o,n.__c?b=(i=e.__c=n.__c).__=i.__E:("prototype"in P&&P.prototype.render?e.__c=i=new P(v,x):(e.__c=i=new U(v,x),i.constructor=P,i.render=$e),y&&y.sub(i),i.props=v,i.state||(i.state={}),i.context=x,i.__n=o,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),P.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=K({},i.__s)),K(i.__s,P.getDerivedStateFromProps(v,i.__s))),f=i.props,a=i.state,i.__v=e,p)P.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(P.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,x),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,x)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=v,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(Q){Q&&(Q.__=e)}),V=0;V<i._sb.length;V++)i.__h.push(i._sb[V]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,x),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,a,g)})}if(i.context=x,i.props=v,i.__P=t,i.__e=!1,S=c.__r,T=0,"prototype"in P&&P.prototype.render){for(i.state=i.__s,i.__d=!1,S&&S(e),m=i.render(i.props,i.state,i.context),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[]}else do i.__d=!1,S&&S(e),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++T<25);i.state=i.__s,i.getChildContext!=null&&(o=K(K({},o),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(g=i.getSnapshotBeforeUpdate(f,a)),ae(t,z(M=m!=null&&m.type===O&&m.key==null?m.props.children:m)?M:[M],e,n,o,_,r,s,u,l,d),i.base=e.__e,e.__h=null,i.__h.length&&s.push(i),b&&(i.__E=i.__=null)}catch(Q){e.__v=null,(l||r!=null)&&(e.__e=u,e.__h=!!l,r[r.indexOf(u)]=null),c.__e(Q,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ee(n.__e,e,n,o,_,r,s,l,d);(m=c.diffed)&&m(e)}function me(t,e,n){for(var o=0;o<n.length;o++)Y(n[o],n[++o],n[++o]);c.__c&&c.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){c.__e(r,_.__v)}})}function Ee(t,e,n,o,_,r,s,u,l){var d,m,i,p=n.props,f=e.props,a=e.type,g=0;if(a==="svg"&&(_=!0),r!=null){for(;g<r.length;g++)if((d=r[g])&&"setAttribute"in d==!!a&&(a?d.localName===a:d.nodeType===3)){t=d,r[g]=null;break}}if(t==null){if(a===null)return document.createTextNode(f);t=_?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,f.is&&f),r=null,u=!1}if(a===null)p===f||u&&t.data===f||(t.data=f);else{if(r=r&&R.call(t.childNodes),m=(p=n.props||D).dangerouslySetInnerHTML,i=f.dangerouslySetInnerHTML,!u){if(r!=null)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(i||m)&&(i&&(m&&i.__html==m.__html||i.__html===t.innerHTML)||(t.innerHTML=i&&i.__html||""))}if(Oe(t,f,p,_,u),i)e.__k=[];else if(ae(t,z(g=e.props.children)?g:[g],e,n,o,_&&a!=="foreignObject",r,s,r?r[0]:n.__k&&E(n,0),u,l),r!=null)for(g=r.length;g--;)r[g]!=null&&re(r[g]);u||("value"in f&&(g=f.value)!==void 0&&(g!==t.value||a==="progress"&&!g||a==="option"&&g!==p.value)&&W(t,"value",g,p.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==t.checked&&W(t,"checked",g,p.checked,!1))}return t}function Y(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){c.__e(o,n)}}function J(t,e,n){var o,_;if(c.unmount&&c.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||Y(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){c.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&J(o[_],e,n||typeof t.type!="function");n||t.__e==null||re(t.__e),t.__=t.__e=t.__d=void 0}function $e(t,e,n){return this.constructor(t,n)}function He(t,e,n){var o,_,r,s;c.__&&c.__(t,e),_=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],s=[],G(e,t=(!o&&n||e).__k=_e(O,null,[t]),_||D,D,e.ownerSVGElement!==void 0,!o&&n?[n]:_?null:e.firstChild?R.call(e.childNodes):null,r,!o&&n?n:_?_.__e:e.firstChild,o,s),me(r,t,s)}R=oe.slice,c={__e:function(t,e,n,o){for(var _,r,s;e=e.__;)if((_=e.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(t)),s=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,o||{}),s=_.__d),s)return _.__E=_}catch(u){t=u}throw t}},te=0,Ie=function(t){return t!=null&&t.constructor===void 0},U.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=K({},this.state),typeof t=="function"&&(t=t(K({},n),this.props)),t&&K(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),le(this))},U.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),le(this))},U.prototype.render=O,I=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(t,e){return t.__v.__b-e.__v.__b},L.__r=0,ke=0;function k(t){throw new Error(`invalid path: ${t}`)}function Te(t){const{stewBuildId:e}=t,n=`/stew_${e}`;return{stewResourcesDirectoryPath:n,indexHtml:"/index.html",appScript:`/app.${e}.js`,appCss:`/app.${e}.css`,configPath:`${n}/stew.config.json`,modulesDirectoryPath:`${n}/modules`,datasetsDirectoryPath:`${n}/datasets`,stylesDirectoryPath:`${n}/styles`,viewsDirectoryPath:`${n}/views`}}function de(t){const{stewResourceMap:e,someSegmentKey:n}=t;return Promise.all([fetch(`${e.datasetsDirectoryPath}/${n}.json`).then(o=>o.json()),fetch(`${e.modulesDirectoryPath}/${n}.js`).then(o=>o.text()).then(o=>new Function(`${o}return __moduleIifeResult.default`)()),fetch(`${e.viewsDirectoryPath}/${n}.json`).then(o=>o.json()),fetch(`${e.stylesDirectoryPath}/${n}.css`).then(o=>o.text())])}var $,w,X,he,j=0,ve=[],A=[],we=c.__b,ye=c.__r,Se=c.diffed,Ve=c.__c,Pe=c.unmount;function Z(t,e){c.__h&&c.__h(w,t,j||e),j=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:A}),n.__[t]}function Re(t){return j=1,Ne(Ce,t)}function Ne(t,e,n){var o=Z($++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):Ce(void 0,e),function(u){var l=o.__N?o.__N[0]:o.__[0],d=o.t(l,u);l!==d&&(o.__N=[d,o.__[1]],o.__c.setState({}))}],o.__c=w,!w.u)){var _=function(u,l,d){if(!o.__c.__H)return!0;var m=o.__c.__H.__.filter(function(p){return p.__c});if(m.every(function(p){return!p.__N}))return!r||r.call(this,u,l,d);var i=!1;return m.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&o.__c.props===u)&&(!r||r.call(this,u,l,d))};w.u=!0;var r=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(u,l,d){if(this.__e){var m=r;r=void 0,_(u,l,d),r=m}s&&s.call(this,u,l,d)},w.shouldComponentUpdate=_}return o.__N||o.__}function xe(t,e){var n=Z($++,3);!c.__s&&Ke(n.__H,e)&&(n.__=t,n.i=e,w.__H.__h.push(n))}function Ue(t){return j=5,F(function(){return{current:t}},[])}function F(t,e){var n=Z($++,7);return Ke(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Le(){for(var t;t=ve.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(B),t.__H.__h.forEach(ee),t.__H.__h=[]}catch(e){t.__H.__h=[],c.__e(e,t.__v)}}c.__b=function(t){w=null,we&&we(t)},c.__r=function(t){ye&&ye(t),$=0;var e=(w=t.__c).__H;e&&(X===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=A,n.__N=n.i=void 0})):(e.__h.forEach(B),e.__h.forEach(ee),e.__h=[],$=0)),X=w},c.diffed=function(t){Se&&Se(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ve.push(e)!==1&&he===c.requestAnimationFrame||((he=c.requestAnimationFrame)||We)(Le)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==A&&(n.__=n.__V),n.i=void 0,n.__V=A})),X=w=null},c.__c=function(t,e){e.some(function(n){try{n.__h.forEach(B),n.__h=n.__h.filter(function(o){return!o.__||ee(o)})}catch(o){e.some(function(_){_.__h&&(_.__h=[])}),e=[],c.__e(o,n.__v)}}),Ve&&Ve(t,e)},c.unmount=function(t){Pe&&Pe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{B(o)}catch(_){e=_}}),n.__H=void 0,e&&c.__e(e,n.__v))};var be=typeof requestAnimationFrame=="function";function We(t){var e,n=function(){clearTimeout(o),be&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);be&&(e=requestAnimationFrame(n))}function B(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function ee(t){var e=w;t.__c=t.__(),w=e}function Ke(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Ce(t,e){return typeof e=="function"?e(t):e}function H(t){const{someMap:e,itemSearchKey:n,itemTargetValue:o}=t;return Object.values(e).find(_=>_[n]===o)}function je(t){const{initialSegmentViewState:e,stewConfig:n,stewResourceMap:o}=t,[_,r]=Re(e),{segmentViewMutations:s}=Ae({stewConfig:n,setSegmentViewState:r}),{segmentViewData:u}=Be({stewConfig:n,segmentViewState:_,viewPageItemSize:6});return Fe({stewResourceMap:o,segmentViewState:_,updateSegmentComponents:s.updateSegmentComponents}),Qe({segmentViewState:_}),{segmentViewState:_,segmentViewMutations:s,segmentViewData:u}}function Ae(t){const{stewConfig:e,setSegmentViewState:n}=t;return{segmentViewMutations:F(()=>({selectStewSegment:_=>{const r=H({itemTargetValue:0,itemSearchKey:"viewIndex",someMap:e.stewSegments[_].segmentViews})??k("defaultSegmentViewConfig"),s=H({itemTargetValue:0,itemSearchKey:"sortOptionIndex",someMap:e.stewSegments[_].segmentSortOptions})??k("defaultSegmentSortOptionConfig");n({viewPageIndex:0,viewSearchQuery:"",segmentStatus:"loadingSegment",segmentViewKey:r.viewKey,segmentSortOptionKey:s.sortOptionKey,segmentKey:_})},updateSegmentComponents:([_,r,s,u])=>{n(l=>({...l,segmentStatus:"segmentLoaded",segmentDataset:_,segmentModule:r,segmentViewsMap:s,segmentCss:u}))},selectSegmentView:_=>{n(r=>({...r,viewPageIndex:0,segmentViewKey:_}))},selectSegmentSortOption:_=>{n(r=>({...r,viewPageIndex:0,segmentSortOptionKey:_}))},updateSegmentViewSearch:_=>{n(r=>({...r,viewPageIndex:0,viewSearchQuery:_}))},clearSegmentViewSearch:()=>{n(_=>({..._,viewPageIndex:0,viewSearchQuery:""}))},gotoPreviousViewPage:()=>{n(_=>({..._,viewPageIndex:_.viewPageIndex-1}))},gotoNextViewPage:()=>{n(_=>({..._,viewPageIndex:_.viewPageIndex-1}))}}),[e,n])}}function Fe(t){const{segmentViewState:e,stewResourceMap:n,updateSegmentComponents:o}=t,_=Ue(0);xe(()=>{if(e.segmentStatus==="loadingSegment"){_.current+=1;const r=_.current;de({stewResourceMap:n,someSegmentKey:e.segmentKey}).then(s=>{r===_.current&&o(s)})}},[e.segmentKey])}function Be(t){const{segmentViewState:e,stewConfig:n,viewPageItemSize:o}=t,{searchedAndSortedViewItems:_}=F(()=>({searchedAndSortedViewItems:e.segmentStatus==="segmentLoaded"?e.segmentViewsMap[e.segmentViewKey].reduce((u,l)=>{const d=e.segmentDataset[l];return d.__segment_item_search_space.includes(e.viewSearchQuery)&&u.push(d),u},[]).sort(e.segmentModule.segmentSortOptions[n.stewSegments[e.segmentKey].segmentSortOptions[e.segmentSortOptionKey].sortOptionIndex].getSortOrder):[]}),[e.segmentKey,e.segmentStatus,e.segmentViewKey,e.viewSearchQuery,e.segmentSortOptionKey]),{viewPageItems:r,viewPagesCount:s}=F(()=>{const u=Math.ceil(_.length/o)||1,l=o*e.viewPageIndex,d=_.slice(l,l+o);return{viewPagesCount:u,viewPageItems:d}},[_,e.viewPageIndex]);return{segmentViewData:{viewPageItems:r,viewPagesCount:s}}}function Qe(t){const{segmentViewState:e}=t;xe(()=>{const n=new URLSearchParams;n.set("sort",`${e.segmentSortOptionKey}`),e.viewSearchQuery.length>0&&n.set("search",e.viewSearchQuery),window.history.replaceState(null,"noop",`/${e.segmentKey}/${e.segmentViewKey}?${n.toString()}`)},[e.segmentKey,e.segmentViewKey,e.segmentSortOptionKey,e.viewSearchQuery])}function qe(t){const{stewConfig:e,stewResourceMap:n,initialSegmentViewState:o}=t,{segmentViewState:_,segmentViewData:r,segmentViewMutations:s}=je({stewConfig:e,stewResourceMap:n,initialSegmentViewState:o});return h(ze,{stewConfig:e,segmentViewState:_,segmentViewData:r,selectStewSegment:s.selectStewSegment,selectSegmentView:s.selectSegmentView,selectSegmentSortOption:s.selectSegmentSortOption,updateSegmentViewSearch:s.updateSegmentViewSearch,clearSegmentViewSearch:s.clearSegmentViewSearch,gotoPreviousViewPage:s.gotoPreviousViewPage,gotoNextViewPage:s.gotoNextViewPage})}function ze(t){const{stewConfig:e,segmentViewState:n,selectStewSegment:o,selectSegmentView:_,selectSegmentSortOption:r,updateSegmentViewSearch:s,clearSegmentViewSearch:u,gotoPreviousViewPage:l,gotoNextViewPage:d,segmentViewData:m}=t;return h("div",null,h("div",{style:{display:"flex",flexDirection:"row"}},Object.values(e.stewSegments).sort((i,p)=>i.segmentIndex-p.segmentIndex).map(i=>h("div",{style:{padding:8,color:"purple",cursor:"pointer",fontWeight:700,textDecoration:n.segmentKey===i.segmentKey?"underline":"none"},onClick:()=>{n.segmentKey!==i.segmentKey&&o(i.segmentKey)}},i.segmentLabel))),h("div",{style:{display:"flex",flexDirection:"row"}},Object.values(e.stewSegments[n.segmentKey].segmentViews).sort((i,p)=>i.viewIndex-p.viewIndex).map(i=>h("div",{style:{padding:8,color:"blue",cursor:"pointer",fontWeight:700,textDecoration:n.segmentViewKey===i.viewKey?"underline":"none"},onClick:()=>{n.segmentViewKey!==i.viewKey&&_(i.viewKey)}},i.viewLabel))),h("div",{style:{display:"flex",flexDirection:"row"}},Object.values(e.stewSegments[n.segmentKey].segmentSortOptions).sort((i,p)=>i.sortOptionIndex-p.sortOptionIndex).map(i=>h("div",{style:{padding:8,color:"green",cursor:"pointer",fontWeight:700,textDecoration:n.segmentSortOptionKey===i.sortOptionKey?"underline":"none"},onClick:()=>{n.segmentSortOptionKey!==i.sortOptionKey&&r(i.sortOptionKey)}},i.sortOptionLabel))),h("div",{style:{display:"flex",flexDirection:"row",padding:8}},h("input",{value:n.viewSearchQuery,onInput:i=>{s(i.currentTarget.value)}}),h("div",{style:{color:"red",cursor:"pointer",fontWeight:700},onClick:()=>{u()}},"clear")),h("div",{style:{display:"flex",flexDirection:"row"}},h("div",{style:{padding:8,color:"orange",cursor:"pointer",fontWeight:700},onClick:()=>{n.viewPageIndex>0&&l()}},"prev"),h("div",{style:{padding:8,color:"orange",cursor:"pointer",fontWeight:700},onClick:()=>{n.viewPageIndex<m.viewPagesCount-1&&d()}},"next"),h("div",{style:{padding:8,color:"black",cursor:"pointer",fontWeight:700,fontStyle:"italic"}},`${n.viewPageIndex+1} / ${m.viewPagesCount}`)),n.segmentStatus==="segmentLoaded"?h(O,null,h("div",{style:{display:"flex",flexDirection:"column",padding:8,paddingTop:12}},m.viewPageItems.map(i=>h("div",{style:{paddingBottom:8}},h(n.segmentModule.SegmentItemDisplay,{someSegmentItem:i})))),h("style",null,n.segmentCss)):null)}function Ge(t){const{stewConfig:e,stewResourceMap:n,initialSegmentViewState:o}=t;return h(qe,{stewConfig:e,stewResourceMap:n,initialSegmentViewState:o})}window.h=_e,Ye();async function Ye(){const{stewConfig:t,stewResourceMap:e,initialSegmentViewState:n}=await Je();He(h(Ge,{stewConfig:t,stewResourceMap:e,initialSegmentViewState:n}),document.getElementById("appContainer")??k("hydrate.appContainer")),document.getElementById("splashPageStyle")?.remove(),console.info(t)}async function Je(){const t=new Promise(b=>{setTimeout(()=>{b()},700)}),e=document.getElementById("appScript")?.dataset.stew_build_id??k("loadStewResources.stewBuildId"),n=Te({stewBuildId:e}),o=await fetch(n.configPath).then(b=>b.json()),[_,r,s]=window.location.pathname.split("/"),u=new URLSearchParams(window.location.search),l=o.stewSegments[r]??H({itemTargetValue:0,itemSearchKey:"segmentIndex",someMap:o.stewSegments})??k("initialSegmentConfig"),d=de({stewResourceMap:n,someSegmentKey:l.segmentKey}),m=l.segmentViews[s]??H({itemTargetValue:0,itemSearchKey:"viewIndex",someMap:l.segmentViews})??k("initialSegmentViewConfig"),i=l.segmentSortOptions[u.get("sort")??"__EMPTY_SORT_KEY__"]??H({itemTargetValue:0,itemSearchKey:"sortOptionIndex",someMap:l.segmentSortOptions})??k("initialSegmentSortOptionConfig"),[[p,f,a,g]]=await Promise.all([d,t]);return{stewResourceMap:n,stewConfig:o,initialSegmentViewState:{viewPageIndex:0,segmentStatus:"segmentLoaded",segmentDataset:p,segmentModule:f,segmentViewsMap:a,segmentCss:g,segmentKey:l.segmentKey,segmentViewKey:m.viewKey,segmentSortOptionKey:i.sortOptionKey,viewSearchQuery:u.get("search")??""}}}})();
