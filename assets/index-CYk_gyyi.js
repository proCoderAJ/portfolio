function fy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function py(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zp={exports:{}},Ls={},Op={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=Symbol.for("react.element"),hy=Symbol.for("react.portal"),my=Symbol.for("react.fragment"),gy=Symbol.for("react.strict_mode"),yy=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),xy=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),Sy=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),td=Symbol.iterator;function Py(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Up={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||$p}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hp(){}Hp.prototype=Ir.prototype;function ju(e,t,n){this.props=e,this.context=t,this.refs=Up,this.updater=n||$p}var Fu=ju.prototype=new Hp;Fu.constructor=ju;Bp(Fu,Ir.prototype);Fu.isPureReactComponent=!0;var nd=Array.isArray,Wp=Object.prototype.hasOwnProperty,Du={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Wp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ui,type:e,key:o,ref:s,props:i,_owner:Du.current}}function by(e,t){return{$$typeof:Ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ui}function Ty(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rd=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ty(""+e.key):t.toString(36)}function jo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ui:case hy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+da(s,0):r,nd(i)?(n="",e!=null&&(n=e.replace(rd,"$&/")+"/"),jo(i,t,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=by(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(rd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+da(o,a);s+=jo(o,t,n,l,i)}else if(l=Py(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+da(o,a++),s+=jo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function to(e,t,n){if(e==null)return e;var r=[],i=0;return jo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Fo={transition:null},jy={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Du};function Yp(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Ir;O.Fragment=my;O.Profiler=yy;O.PureComponent=ju;O.StrictMode=gy;O.Suspense=ky;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;O.act=Yp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Wp.call(t,l)&&!Gp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ui,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:xy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vy,_context:e},e.Consumer=e};O.createElement=Kp;O.createFactory=function(e){var t=Kp.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:wy,render:e}};O.isValidElement=Mu;O.lazy=function(e){return{$$typeof:Cy,_payload:{_status:-1,_result:e},_init:Ey}};O.memo=function(e,t){return{$$typeof:Sy,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};O.unstable_act=Yp;O.useCallback=function(e,t){return Ae.current.useCallback(e,t)};O.useContext=function(e){return Ae.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ae.current.useEffect(e,t)};O.useId=function(){return Ae.current.useId()};O.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ae.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};O.useRef=function(e){return Ae.current.useRef(e)};O.useState=function(e){return Ae.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ae.current.useTransition()};O.version="18.3.1";Op.exports=O;var k=Op.exports;const Ue=py(k),Fy=fy({__proto__:null,default:Ue},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=k,My=Symbol.for("react.element"),Ay=Symbol.for("react.fragment"),Ry=Object.prototype.hasOwnProperty,Ly=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ry.call(t,r)&&!Vy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:My,type:e,key:o,ref:s,props:i,_owner:Ly.current}}Ls.Fragment=Ay;Ls.jsx=Qp;Ls.jsxs=Qp;zp.exports=Ls;var m=zp.exports,sl={},Xp={exports:{}},Ye={},Zp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,A){var N=F.length;F.push(A);e:for(;0<N;){var L=N-1>>>1,$=F[L];if(0<i($,A))F[L]=A,F[N]=$,N=L;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var A=F[0],N=F.pop();if(N!==A){F[0]=N;e:for(var L=0,$=F.length,vt=$>>>1;L<vt;){var Le=2*(L+1)-1,at=F[Le],fe=Le+1,Xe=F[fe];if(0>i(at,N))fe<$&&0>i(Xe,at)?(F[L]=Xe,F[fe]=N,L=fe):(F[L]=at,F[Le]=N,L=Le);else if(fe<$&&0>i(Xe,N))F[L]=Xe,F[fe]=N,L=fe;else break e}}return A}function i(F,A){var N=F.sortIndex-A.sortIndex;return N!==0?N:F.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(F){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=F)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(F){if(x=!1,h(F),!v)if(n(l)!==null)v=!0,Z(P);else{var A=n(u);A!==null&&Se(w,A.startTime-F)}}function P(F,A){v=!1,x&&(x=!1,y(E),E=-1),g=!0;var N=f;try{for(h(A),d=n(l);d!==null&&(!(d.expirationTime>A)||F&&!oe());){var L=d.callback;if(typeof L=="function"){d.callback=null,f=d.priorityLevel;var $=L(d.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),h(A)}else r(l);d=n(l)}if(d!==null)var vt=!0;else{var Le=n(u);Le!==null&&Se(w,Le.startTime-A),vt=!1}return vt}finally{d=null,f=N,g=!1}}var T=!1,b=null,E=-1,R=5,V=-1;function oe(){return!(e.unstable_now()-V<R)}function de(){if(b!==null){var F=e.unstable_now();V=F;var A=!0;try{A=b(!0,F)}finally{A?ve():(T=!1,b=null)}}else T=!1}var ve;if(typeof p=="function")ve=function(){p(de)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,yt=se.port2;se.port1.onmessage=de,ve=function(){yt.postMessage(null)}}else ve=function(){S(de,0)};function Z(F){b=F,T||(T=!0,ve())}function Se(F,A){E=S(function(){F(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Z(P))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var N=f;f=A;try{return F()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,A){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var N=f;f=F;try{return A()}finally{f=N}},e.unstable_scheduleCallback=function(F,A,N){var L=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?L+N:L):N=L,F){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=N+$,F={id:c++,callback:A,priorityLevel:F,startTime:N,expirationTime:$,sortIndex:-1},N>L?(F.sortIndex=N,t(u,F),n(l)===null&&F===n(u)&&(x?(y(E),E=-1):x=!0,Se(w,N-L))):(F.sortIndex=$,t(l,F),v||g||(v=!0,Z(P))),F},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(F){var A=f;return function(){var N=f;f=A;try{return F.apply(this,arguments)}finally{f=N}}}})(qp);Zp.exports=qp;var Iy=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=k,Ge=Iy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,vi={};function $n(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(vi[e]=t,e=0;e<t.length;e++)Jp.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,_y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},od={};function zy(e){return al.call(od,e)?!0:al.call(id,e)?!1:_y.test(e)?od[e]=!0:(id[e]=!0,!1)}function Oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $y(e,t,n,r){if(t===null||typeof t>"u"||Oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Au,Ru);ke[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Au,Ru);ke[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Au,Ru);ke[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($y(t,n,i,r)&&(n=null),r||i===null?zy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),sd=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=sd&&e[sd]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,fa;function Zr(e){if(fa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fa=t&&t[1]||""}return`
`+fa+e}var pa=!1;function ha(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function By(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case qn:return"Portal";case ll:return"Profiler";case Vu:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case th:return(e.displayName||"Context")+".Consumer";case eh:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function Uy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hy(e){var t=rh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Hy(e))}function ih(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oh(e,t){t=t.checked,t!=null&&Lu(e,"checked",t,!1)}function pl(e,t){oh(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(qr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function sh(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ah(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ah(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,lh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wy=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){Wy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gy=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(Gy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,gr=null,yr=null;function dd(e){if(e=Gi(e)){if(typeof wl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=zs(t),wl(e.stateNode,e.type,t))}}function dh(e){gr?yr?yr.push(e):yr=[e]:gr=e}function fh(){if(gr){var e=gr,t=yr;if(yr=gr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function ph(e,t){return e(t)}function hh(){}var ma=!1;function mh(e,t,n){if(ma)return e(t,n);ma=!0;try{return ph(e,t,n)}finally{ma=!1,(gr!==null||yr!==null)&&(hh(),fh())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=zs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var kl=!1;if(It)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){kl=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{kl=!1}function Ky(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ii=!1,Xo=null,Zo=!1,Sl=null,Yy={onError:function(e){ii=!0,Xo=e}};function Qy(e,t,n,r,i,o,s,a,l){ii=!1,Xo=null,Ky.apply(Yy,arguments)}function Xy(e,t,n,r,i,o,s,a,l){if(Qy.apply(this,arguments),ii){if(ii){var u=Xo;ii=!1,Xo=null}else throw Error(j(198));Zo||(Zo=!0,Sl=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fd(e){if(Bn(e)!==e)throw Error(j(188))}function Zy(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fd(i),e;if(o===r)return fd(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function yh(e){return e=Zy(e),e!==null?vh(e):null}function vh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vh(e);if(t!==null)return t;e=e.sibling}return null}var xh=Ge.unstable_scheduleCallback,pd=Ge.unstable_cancelCallback,qy=Ge.unstable_shouldYield,Jy=Ge.unstable_requestPaint,re=Ge.unstable_now,ev=Ge.unstable_getCurrentPriorityLevel,zu=Ge.unstable_ImmediatePriority,wh=Ge.unstable_UserBlockingPriority,qo=Ge.unstable_NormalPriority,tv=Ge.unstable_LowPriority,kh=Ge.unstable_IdlePriority,Vs=null,Ct=null;function nv(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Vs,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:ov,rv=Math.log,iv=Math.LN2;function ov(e){return e>>>=0,e===0?32:31-(rv(e)/iv|0)|0}var oo=64,so=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Jr(a):(o&=s,o!==0&&(r=Jr(o)))}else s=n&~i,s!==0?r=Jr(s):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function sv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function av(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=sv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sh(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function lv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ph,$u,bh,Th,Eh,Pl=!1,ao=[],en=null,tn=null,nn=null,ki=new Map,Si=new Map,Qt=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&$u(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cv(e,t,n,r,i){switch(t){case"focusin":return en=Ur(en,e,t,n,r,i),!0;case"dragenter":return tn=Ur(tn,e,t,n,r,i),!0;case"mouseover":return nn=Ur(nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,Ur(ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Ur(Si.get(o)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=En(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=gh(n),t!==null){e.blockedOn=t,Eh(e.priority,function(){bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=Gi(n),t!==null&&$u(t),e.blockedOn=n,!1;t.shift()}return!0}function md(e,t,n){Do(e)&&n.delete(t)}function dv(){Pl=!1,en!==null&&Do(en)&&(en=null),tn!==null&&Do(tn)&&(tn=null),nn!==null&&Do(nn)&&(nn=null),ki.forEach(md),Si.forEach(md)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,dv)))}function Ci(e){function t(i){return Hr(i,e)}if(0<ao.length){Hr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Hr(en,e),tn!==null&&Hr(tn,e),nn!==null&&Hr(nn,e),ki.forEach(t),Si.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Qt.shift()}var vr=$t.ReactCurrentBatchConfig,es=!0;function fv(e,t,n,r){var i=H,o=vr.transition;vr.transition=null;try{H=1,Bu(e,t,n,r)}finally{H=i,vr.transition=o}}function pv(e,t,n,r){var i=H,o=vr.transition;vr.transition=null;try{H=4,Bu(e,t,n,r)}finally{H=i,vr.transition=o}}function Bu(e,t,n,r){if(es){var i=bl(e,t,n,r);if(i===null)Ta(e,t,r,ts,n),hd(e,r);else if(cv(i,e,t,n,r))r.stopPropagation();else if(hd(e,r),t&4&&-1<uv.indexOf(e)){for(;i!==null;){var o=Gi(i);if(o!==null&&Ph(o),o=bl(e,t,n,r),o===null&&Ta(e,t,r,ts,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var ts=null;function bl(e,t,n,r){if(ts=null,e=_u(r),e=En(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ts=e,null}function Fh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ev()){case zu:return 1;case wh:return 4;case qo:case tv:return 16;case kh:return 536870912;default:return 16}default:return 16}}var Zt=null,Uu=null,Mo=null;function Dh(){if(Mo)return Mo;var e,t=Uu,n=t.length,r,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mo=i.slice(e,1<r?1-r:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function gd(){return!1}function Qe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lo:gd,this.isPropagationStopped=gd,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=Qe(Nr),Wi=te({},Nr,{view:0,detail:0}),hv=Qe(Wi),ya,va,Wr,Is=te({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(ya=e.screenX-Wr.screenX,va=e.screenY-Wr.screenY):va=ya=0,Wr=e),ya)},movementY:function(e){return"movementY"in e?e.movementY:va}}),yd=Qe(Is),mv=te({},Is,{dataTransfer:0}),gv=Qe(mv),yv=te({},Wi,{relatedTarget:0}),xa=Qe(yv),vv=te({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Qe(vv),wv=te({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=Qe(wv),Sv=te({},Nr,{data:0}),vd=Qe(Sv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bv[e])?!!t[e]:!1}function Wu(){return Tv}var Ev=te({},Wi,{key:function(e){if(e.key){var t=Cv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jv=Qe(Ev),Fv=te({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Qe(Fv),Dv=te({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),Mv=Qe(Dv),Av=te({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Qe(Av),Lv=te({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Qe(Lv),Iv=[9,13,27,32],Gu=It&&"CompositionEvent"in window,oi=null;It&&"documentMode"in document&&(oi=document.documentMode);var Nv=It&&"TextEvent"in window&&!oi,Mh=It&&(!Gu||oi&&8<oi&&11>=oi),wd=" ",kd=!1;function Ah(e,t){switch(e){case"keyup":return Iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function _v(e,t){switch(e){case"compositionend":return Rh(t);case"keypress":return t.which!==32?null:(kd=!0,wd);case"textInput":return e=t.data,e===wd&&kd?null:e;default:return null}}function zv(e,t){if(er)return e==="compositionend"||!Gu&&Ah(e,t)?(e=Dh(),Mo=Uu=Zt=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mh&&t.locale!=="ko"?null:t.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ov[e.type]:t==="textarea"}function Lh(e,t,n,r){dh(r),t=ns(t,"onChange"),0<t.length&&(n=new Hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,Pi=null;function $v(e){Wh(e,0)}function Ns(e){var t=rr(e);if(ih(t))return e}function Bv(e,t){if(e==="change")return t}var Vh=!1;if(It){var wa;if(It){var ka="oninput"in document;if(!ka){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),ka=typeof Cd.oninput=="function"}wa=ka}else wa=!1;Vh=wa&&(!document.documentMode||9<document.documentMode)}function Pd(){si&&(si.detachEvent("onpropertychange",Ih),Pi=si=null)}function Ih(e){if(e.propertyName==="value"&&Ns(Pi)){var t=[];Lh(t,Pi,e,_u(e)),mh($v,t)}}function Uv(e,t,n){e==="focusin"?(Pd(),si=t,Pi=n,si.attachEvent("onpropertychange",Ih)):e==="focusout"&&Pd()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(Pi)}function Wv(e,t){if(e==="click")return Ns(t)}function Gv(e,t){if(e==="input"||e==="change")return Ns(t)}function Kv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Kv;function bi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!al.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Td(e,t){var n=bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bd(n)}}function Nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _h(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yv(e){var t=_h(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nh(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Td(n,o);var s=Td(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qv=It&&"documentMode"in document&&11>=document.documentMode,tr=null,Tl=null,ai=null,El=!1;function Ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||tr==null||tr!==Qo(r)||(r=tr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&bi(ai,r)||(ai=r,r=ns(Tl,"onSelect"),0<r.length&&(t=new Hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Sa={},zh={};It&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function _s(e){if(Sa[e])return Sa[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zh)return Sa[e]=t[n];return e}var Oh=_s("animationend"),$h=_s("animationiteration"),Bh=_s("animationstart"),Uh=_s("transitionend"),Hh=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Hh.set(e,t),$n(t,[e])}for(var Ca=0;Ca<jd.length;Ca++){var Pa=jd[Ca],Xv=Pa.toLowerCase(),Zv=Pa[0].toUpperCase()+Pa.slice(1);gn(Xv,"on"+Zv)}gn(Oh,"onAnimationEnd");gn($h,"onAnimationIteration");gn(Bh,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Uh,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Fd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xy(r,t,void 0,e),e.currentTarget=null}function Wh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}}}if(Zo)throw e=Sl,Zo=!1,Sl=null,e}function K(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Gh(t,e,2,!1),n.add(r))}function ba(e,t,n){var r=0;t&&(r|=4),Gh(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[co]){e[co]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(qv.has(n)||ba(n,!1,e),ba(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,ba("selectionchange",!1,t))}}function Gh(e,t,n,r){switch(Fh(t)){case 1:var i=fv;break;case 4:i=pv;break;default:i=Bu}n=i.bind(null,t,n,e),i=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=En(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mh(function(){var u=o,c=_u(n),d=[];e:{var f=Hh.get(e);if(f!==void 0){var g=Hu,v=e;switch(e){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":g=jv;break;case"focusin":v="focus",g=xa;break;case"focusout":v="blur",g=xa;break;case"beforeblur":case"afterblur":g=xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mv;break;case Oh:case $h:case Bh:g=xv;break;case Uh:g=Rv;break;case"scroll":g=hv;break;case"wheel":g=Vv;break;case"copy":case"cut":case"paste":g=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xd}var x=(t&4)!==0,S=!x&&e==="scroll",y=x?f!==null?f+"Capture":null:f;x=[];for(var p=u,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,y!==null&&(w=wi(p,y),w!=null&&x.push(Ei(p,w,h)))),S)break;p=p.return}0<x.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==xl&&(v=n.relatedTarget||n.fromElement)&&(En(v)||v[Nt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?En(v):null,v!==null&&(S=Bn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=yd,w="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=xd,w="onPointerLeave",y="onPointerEnter",p="pointer"),S=g==null?f:rr(g),h=v==null?f:rr(v),f=new x(w,p+"leave",g,n,c),f.target=S,f.relatedTarget=h,w=null,En(c)===u&&(x=new x(y,p+"enter",v,n,c),x.target=h,x.relatedTarget=S,w=x),S=w,g&&v)t:{for(x=g,y=v,p=0,h=x;h;h=Kn(h))p++;for(h=0,w=y;w;w=Kn(w))h++;for(;0<p-h;)x=Kn(x),p--;for(;0<h-p;)y=Kn(y),h--;for(;p--;){if(x===y||y!==null&&x===y.alternate)break t;x=Kn(x),y=Kn(y)}x=null}else x=null;g!==null&&Dd(d,f,g,x,!1),v!==null&&S!==null&&Dd(d,S,v,x,!0)}}e:{if(f=u?rr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var P=Bv;else if(Sd(f))if(Vh)P=Gv;else{P=Hv;var T=Uv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Wv);if(P&&(P=P(e,u))){Lh(d,P,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&hl(f,"number",f.value)}switch(T=u?rr(u):window,e){case"focusin":(Sd(T)||T.contentEditable==="true")&&(tr=T,Tl=u,ai=null);break;case"focusout":ai=Tl=tr=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,Ed(d,n,c);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":Ed(d,n,c)}var b;if(Gu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else er?Ah(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Mh&&n.locale!=="ko"&&(er||E!=="onCompositionStart"?E==="onCompositionEnd"&&er&&(b=Dh()):(Zt=c,Uu="value"in Zt?Zt.value:Zt.textContent,er=!0)),T=ns(u,E),0<T.length&&(E=new vd(E,e,null,n,c),d.push({event:E,listeners:T}),b?E.data=b:(b=Rh(n),b!==null&&(E.data=b)))),(b=Nv?_v(e,n):zv(e,n))&&(u=ns(u,"onBeforeInput"),0<u.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Wh(d,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ns(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wi(e,n),o!=null&&r.unshift(Ei(e,o,i)),o=wi(e,t),o!=null&&r.push(Ei(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wi(n,o),l!=null&&s.unshift(Ei(n,l,a))):i||(l=wi(n,o),l!=null&&s.push(Ei(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Jv=/\r\n?/g,e1=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(Jv,`
`).replace(e1,"")}function fo(e,t,n){if(t=Md(t),Md(e)!==t&&n)throw Error(j(425))}function rs(){}var jl=null,Fl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(r1)}:Ml;function r1(e){setTimeout(function(){throw e})}function Ea(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),St="__reactFiber$"+_r,ji="__reactProps$"+_r,Nt="__reactContainer$"+_r,Al="__reactEvents$"+_r,i1="__reactListeners$"+_r,o1="__reactHandles$"+_r;function En(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[St])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[St]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function zs(e){return e[ji]||null}var Rl=[],ir=-1;function yn(e){return{current:e}}function Q(e){0>ir||(e.current=Rl[ir],Rl[ir]=null,ir--)}function W(e,t){ir++,Rl[ir]=e.current,e.current=t}var pn={},je=yn(pn),Ne=yn(!1),In=pn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function is(){Q(Ne),Q(je)}function Ld(e,t,n){if(je.current!==pn)throw Error(j(168));W(je,t),W(Ne,n)}function Kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Uy(e)||"Unknown",i));return te({},n,r)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,In=je.current,W(je,e),W(Ne,Ne.current),!0}function Vd(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Kh(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(je),W(je,e)):Q(Ne),W(Ne,n)}var Ft=null,Os=!1,ja=!1;function Yh(e){Ft===null?Ft=[e]:Ft.push(e)}function s1(e){Os=!0,Yh(e)}function vn(){if(!ja&&Ft!==null){ja=!0;var e=0,t=H;try{var n=Ft;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Os=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),xh(zu,vn),i}finally{H=t,ja=!1}}return null}var or=[],sr=0,ss=null,as=0,et=[],tt=0,Nn=null,Dt=1,Mt="";function Sn(e,t){or[sr++]=as,or[sr++]=ss,ss=e,as=t}function Qh(e,t,n){et[tt++]=Dt,et[tt++]=Mt,et[tt++]=Nn,Nn=e;var r=Dt;e=Mt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Dt=1<<32-pt(t)+i|n<<i|r,Mt=o+e}else Dt=1<<o|n<<i|r,Mt=e}function Yu(e){e.return!==null&&(Sn(e,1),Qh(e,1,0))}function Qu(e){for(;e===ss;)ss=or[--sr],or[sr]=null,as=or[--sr],or[sr]=null;for(;e===Nn;)Nn=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null,Dt=et[--tt],et[tt]=null}var We=null,He=null,X=!1,ft=null;function Xh(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Id(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Dt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(X){var t=He;if(t){var n=t;if(!Id(e,t)){if(Ll(e))throw Error(j(418));t=rn(n.nextSibling);var r=We;t&&Id(e,t)?Xh(r,n):(e.flags=e.flags&-4097|2,X=!1,We=e)}}else{if(Ll(e))throw Error(j(418));e.flags=e.flags&-4097|2,X=!1,We=e}}}function Nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function po(e){if(e!==We)return!1;if(!X)return Nd(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=He)){if(Ll(e))throw Zh(),Error(j(418));for(;t;)Xh(e,t),t=rn(t.nextSibling)}if(Nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?rn(e.stateNode.nextSibling):null;return!0}function Zh(){for(var e=He;e;)e=rn(e.nextSibling)}function Pr(){He=We=null,X=!1}function Xu(e){ft===null?ft=[e]:ft.push(e)}var a1=$t.ReactCurrentBatchConfig;function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _d(e){var t=e._init;return t(e._payload)}function qh(e){function t(y,p){if(e){var h=y.deletions;h===null?(y.deletions=[p],y.flags|=16):h.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=ln(y,p),y.index=0,y.sibling=null,y}function o(y,p,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<p?(y.flags|=2,p):h):(y.flags|=2,p)):(y.flags|=1048576,p)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,p,h,w){return p===null||p.tag!==6?(p=Va(h,y.mode,w),p.return=y,p):(p=i(p,h),p.return=y,p)}function l(y,p,h,w){var P=h.type;return P===Jn?c(y,p,h.props.children,w,h.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gt&&_d(P)===p.type)?(w=i(p,h.props),w.ref=Gr(y,p,h),w.return=y,w):(w=zo(h.type,h.key,h.props,null,y.mode,w),w.ref=Gr(y,p,h),w.return=y,w)}function u(y,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ia(h,y.mode,w),p.return=y,p):(p=i(p,h.children||[]),p.return=y,p)}function c(y,p,h,w,P){return p===null||p.tag!==7?(p=Rn(h,y.mode,w,P),p.return=y,p):(p=i(p,h),p.return=y,p)}function d(y,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Va(""+p,y.mode,h),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case no:return h=zo(p.type,p.key,p.props,null,y.mode,h),h.ref=Gr(y,null,p),h.return=y,h;case qn:return p=Ia(p,y.mode,h),p.return=y,p;case Gt:var w=p._init;return d(y,w(p._payload),h)}if(qr(p)||$r(p))return p=Rn(p,y.mode,h,null),p.return=y,p;ho(y,p)}return null}function f(y,p,h,w){var P=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:a(y,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case no:return h.key===P?l(y,p,h,w):null;case qn:return h.key===P?u(y,p,h,w):null;case Gt:return P=h._init,f(y,p,P(h._payload),w)}if(qr(h)||$r(h))return P!==null?null:c(y,p,h,w,null);ho(y,h)}return null}function g(y,p,h,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(h)||null,a(p,y,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case no:return y=y.get(w.key===null?h:w.key)||null,l(p,y,w,P);case qn:return y=y.get(w.key===null?h:w.key)||null,u(p,y,w,P);case Gt:var T=w._init;return g(y,p,h,T(w._payload),P)}if(qr(w)||$r(w))return y=y.get(h)||null,c(p,y,w,P,null);ho(p,w)}return null}function v(y,p,h,w){for(var P=null,T=null,b=p,E=p=0,R=null;b!==null&&E<h.length;E++){b.index>E?(R=b,b=null):R=b.sibling;var V=f(y,b,h[E],w);if(V===null){b===null&&(b=R);break}e&&b&&V.alternate===null&&t(y,b),p=o(V,p,E),T===null?P=V:T.sibling=V,T=V,b=R}if(E===h.length)return n(y,b),X&&Sn(y,E),P;if(b===null){for(;E<h.length;E++)b=d(y,h[E],w),b!==null&&(p=o(b,p,E),T===null?P=b:T.sibling=b,T=b);return X&&Sn(y,E),P}for(b=r(y,b);E<h.length;E++)R=g(b,y,E,h[E],w),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?E:R.key),p=o(R,p,E),T===null?P=R:T.sibling=R,T=R);return e&&b.forEach(function(oe){return t(y,oe)}),X&&Sn(y,E),P}function x(y,p,h,w){var P=$r(h);if(typeof P!="function")throw Error(j(150));if(h=P.call(h),h==null)throw Error(j(151));for(var T=P=null,b=p,E=p=0,R=null,V=h.next();b!==null&&!V.done;E++,V=h.next()){b.index>E?(R=b,b=null):R=b.sibling;var oe=f(y,b,V.value,w);if(oe===null){b===null&&(b=R);break}e&&b&&oe.alternate===null&&t(y,b),p=o(oe,p,E),T===null?P=oe:T.sibling=oe,T=oe,b=R}if(V.done)return n(y,b),X&&Sn(y,E),P;if(b===null){for(;!V.done;E++,V=h.next())V=d(y,V.value,w),V!==null&&(p=o(V,p,E),T===null?P=V:T.sibling=V,T=V);return X&&Sn(y,E),P}for(b=r(y,b);!V.done;E++,V=h.next())V=g(b,y,E,V.value,w),V!==null&&(e&&V.alternate!==null&&b.delete(V.key===null?E:V.key),p=o(V,p,E),T===null?P=V:T.sibling=V,T=V);return e&&b.forEach(function(de){return t(y,de)}),X&&Sn(y,E),P}function S(y,p,h,w){if(typeof h=="object"&&h!==null&&h.type===Jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case no:e:{for(var P=h.key,T=p;T!==null;){if(T.key===P){if(P=h.type,P===Jn){if(T.tag===7){n(y,T.sibling),p=i(T,h.props.children),p.return=y,y=p;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gt&&_d(P)===T.type){n(y,T.sibling),p=i(T,h.props),p.ref=Gr(y,T,h),p.return=y,y=p;break e}n(y,T);break}else t(y,T);T=T.sibling}h.type===Jn?(p=Rn(h.props.children,y.mode,w,h.key),p.return=y,y=p):(w=zo(h.type,h.key,h.props,null,y.mode,w),w.ref=Gr(y,p,h),w.return=y,y=w)}return s(y);case qn:e:{for(T=h.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(y,p.sibling),p=i(p,h.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=Ia(h,y.mode,w),p.return=y,y=p}return s(y);case Gt:return T=h._init,S(y,p,T(h._payload),w)}if(qr(h))return v(y,p,h,w);if($r(h))return x(y,p,h,w);ho(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,h),p.return=y,y=p):(n(y,p),p=Va(h,y.mode,w),p.return=y,y=p),s(y)):n(y,p)}return S}var br=qh(!0),Jh=qh(!1),ls=yn(null),us=null,ar=null,Zu=null;function qu(){Zu=ar=us=null}function Ju(e){var t=ls.current;Q(ls),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){us=e,Zu=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(us===null)throw Error(j(308));ar=e,us.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var jn=null;function ec(e){jn===null?jn=[e]:jn.push(e)}function em(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}function zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cs(e,t,n,r){var i=e.updateQueue;Kt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=te({},d,f);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=d}}function Od(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ki={},Pt=yn(Ki),Fi=yn(Ki),Di=yn(Ki);function Fn(e){if(e===Ki)throw Error(j(174));return e}function nc(e,t){switch(W(Di,t),W(Fi,e),W(Pt,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}Q(Pt),W(Pt,t)}function Tr(){Q(Pt),Q(Fi),Q(Di)}function nm(e){Fn(Di.current);var t=Fn(Pt.current),n=gl(t,e.type);t!==n&&(W(Fi,e),W(Pt,n))}function rc(e){Fi.current===e&&(Q(Pt),Q(Fi))}var q=yn(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function ic(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var Lo=$t.ReactCurrentDispatcher,Da=$t.ReactCurrentBatchConfig,_n=0,ee=null,pe=null,me=null,fs=!1,li=!1,Mi=0,l1=0;function Ce(){throw Error(j(321))}function oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function sc(e,t,n,r,i,o){if(_n=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?f1:p1,e=n(r,i),li){o=0;do{if(li=!1,Mi=0,25<=o)throw Error(j(301));o+=1,me=pe=null,t.updateQueue=null,Lo.current=h1,e=n(r,i)}while(li)}if(Lo.current=ps,t=pe!==null&&pe.next!==null,_n=0,me=pe=ee=null,fs=!1,t)throw Error(j(300));return e}function ac(){var e=Mi!==0;return Mi=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ee.memoizedState=me=e:me=me.next=e,me}function ot(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?ee.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(j(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?ee.memoizedState=me=e:me=me.next=e}return me}function Ai(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((_n&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ee.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,gt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Aa(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);gt(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rm(){}function im(e,t){var n=ee,r=ot(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,lc(am.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Ri(9,sm.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(j(349));_n&30||om(n,t,i)}return i}function om(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sm(e,t,n,r){t.value=n,t.getSnapshot=r,lm(t)&&um(e)}function am(e,t,n){return n(function(){lm(t)&&um(e)})}function lm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function um(e){var t=_t(e,1);t!==null&&ht(t,e,1,-1)}function $d(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=d1.bind(null,ee,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cm(){return ot().memoizedState}function Vo(e,t,n,r){var i=wt();ee.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function $s(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(pe!==null){var s=pe.memoizedState;if(o=s.destroy,r!==null&&oc(r,s.deps)){i.memoizedState=Ri(t,n,o,r);return}}ee.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function Bd(e,t){return Vo(8390656,8,e,t)}function lc(e,t){return $s(2048,8,e,t)}function dm(e,t){return $s(4,2,e,t)}function fm(e,t){return $s(4,4,e,t)}function pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hm(e,t,n){return n=n!=null?n.concat([e]):null,$s(4,4,pm.bind(null,t,e),n)}function uc(){}function mm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ym(e,t,n){return _n&21?(gt(n,t)||(n=Sh(),ee.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function u1(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Da.transition;Da.transition={};try{e(!1),t()}finally{H=n,Da.transition=r}}function vm(){return ot().memoizedState}function c1(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xm(e))wm(t,n);else if(n=em(e,t,n,r),n!==null){var i=Me();ht(n,e,r,i),km(n,t,r)}}function d1(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xm(e))wm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,gt(a,s)){var l=t.interleaved;l===null?(i.next=i,ec(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=em(e,t,i,r),n!==null&&(i=Me(),ht(n,e,r,i),km(n,t,r))}}function xm(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function wm(e,t){li=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function km(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}var ps={readContext:it,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},f1={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=c1.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:$d,useDebugValue:uc,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=$d(!1),t=e[0];return e=u1.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=wt();if(X){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ye===null)throw Error(j(349));_n&30||om(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bd(am.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,sm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=ye.identifierPrefix;if(X){var n=Mt,r=Dt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},p1={readContext:it,useCallback:mm,useContext:it,useEffect:lc,useImperativeHandle:hm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:gm,useReducer:Ma,useRef:cm,useState:function(){return Ma(Ai)},useDebugValue:uc,useDeferredValue:function(e){var t=ot();return ym(t,pe.memoizedState,e)},useTransition:function(){var e=Ma(Ai)[0],t=ot().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:vm,unstable_isNewReconciler:!1},h1={readContext:it,useCallback:mm,useContext:it,useEffect:lc,useImperativeHandle:hm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:gm,useReducer:Aa,useRef:cm,useState:function(){return Aa(Ai)},useDebugValue:uc,useDeferredValue:function(e){var t=ot();return pe===null?t.memoizedState=e:ym(t,pe.memoizedState,e)},useTransition:function(){var e=Aa(Ai)[0],t=ot().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:vm,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=an(e),o=Rt(r,i);o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(ht(t,e,i,r),Ro(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=an(e),o=Rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(ht(t,e,i,r),Ro(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=an(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,r),t!==null&&(ht(t,e,r,n),Ro(t,e,r))}};function Ud(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!bi(n,r)||!bi(i,o):!0}function Sm(e,t,n){var r=!1,i=pn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=_e(t)?In:je.current,r=t.contextTypes,o=(r=r!=null)?Cr(e,i):pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=_e(t)?In:je.current,i.context=Cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Nl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bs.enqueueReplaceState(i,i.state,null),cs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",r=t;do n+=By(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function Cm(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ms||(ms=!0,Ql=r),zl(e,t)},n}function Pm(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=F1.bind(null,e,t,n),t.then(e,e))}function Gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var g1=$t.ReactCurrentOwner,Ie=!1;function De(e,t,n,r){t.child=e===null?Jh(t,null,n,r):br(t,e.child,n,r)}function Yd(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=sc(e,t,n,r,o,i),n=ac(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(X&&n&&Yu(t),t.flags|=1,De(e,t,r,i),t.child)}function Qd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bm(e,t,o,r,i)):(e=zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(s,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(bi(o,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,zt(e,t,i)}return Ol(e,t,n,r,i)}function Tm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(ur,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(ur,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(ur,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(ur,Be),Be|=r;return De(e,t,i,n),t.child}function Em(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=_e(n)?In:je.current;return o=Cr(t,o),xr(t,i),n=sc(e,t,n,r,o,i),r=ac(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(X&&r&&Yu(t),t.flags|=1,De(e,t,n,i),t.child)}function Xd(e,t,n,r,i){if(_e(n)){var o=!0;os(t)}else o=!1;if(xr(t,i),t.stateNode===null)Io(e,t),Sm(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=_e(n)?In:je.current,u=Cr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hd(t,s,r,u),Kt=!1;var f=t.memoizedState;s.state=f,cs(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ne.current||Kt?(typeof c=="function"&&(Nl(t,n,c,r),l=t.memoizedState),(a=Kt||Ud(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=_e(n)?In:je.current,l=Cr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hd(t,s,r,l),Kt=!1,f=t.memoizedState,s.state=f,cs(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Ne.current||Kt?(typeof g=="function"&&(Nl(t,n,g,r),v=t.memoizedState),(u=Kt||Ud(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,o,i)}function $l(e,t,n,r,i,o){Em(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Vd(t,n,!1),zt(e,t,o);r=t.stateNode,g1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=br(t,e.child,null,o),t.child=br(t,null,a,o)):De(e,t,a,o),t.memoizedState=r.state,i&&Vd(t,n,!0),t.child}function jm(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),nc(e,t.containerInfo)}function Zd(e,t,n,r,i){return Pr(),Xu(i),t.flags|=256,De(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fm(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ws(s,r,0,null),e=Rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ul(n),t.memoizedState=Bl,e):cc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return y1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ln(a,o):(o=Rn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ul(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return o=e.child,e=o.sibling,r=ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cc(e,t){return t=Ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&Xu(r),br(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ra(Error(j(422))),mo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ws({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&br(t,e.child,null,s),t.child.memoizedState=Ul(s),t.memoizedState=Bl,o);if(!(t.mode&1))return mo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=Ra(o,r,void 0),mo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ie||a){if(r=ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),ht(r,e,i,-1))}return gc(),r=Ra(Error(j(421))),mo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=D1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=rn(i.nextSibling),We=t,X=!0,ft=null,e!==null&&(et[tt++]=Dt,et[tt++]=Mt,et[tt++]=Nn,Dt=e.id,Mt=e.overflow,Nn=t),t=cc(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function La(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Dm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ds(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ds(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,o);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v1(e,t,n){switch(t.tag){case 3:jm(t),Pr();break;case 5:nm(t);break;case 1:_e(t.type)&&os(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ls,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Fm(e,t,n):(W(q,q.current&1),e=zt(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Tm(e,t,n)}return zt(e,t,n)}var Mm,Hl,Am,Rm;Mm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};Am=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Pt.current);var o=null;switch(n){case"input":i=fl(e,i),r=fl(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=ml(e,i),r=ml(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rs)}yl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function x1(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return _e(t.type)&&is(),Pe(t),null;case 3:return r=t.stateNode,Tr(),Q(Ne),Q(je),ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(ql(ft),ft=null))),Hl(e,t),Pe(t),null;case 5:rc(t);var i=Fn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)Am(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Pe(t),null}if(e=Fn(Pt.current),po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[ji]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)K(ei[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":ad(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":ud(r,o),K("invalid",r)}yl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":ro(r),ld(r,o,!0);break;case"textarea":ro(r),cd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ah(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[ji]=r,Mm(e,t,!1,!1),t.stateNode=e;e:{switch(s=vl(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)K(ei[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":ad(e,r),i=fl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),K("invalid",e);break;case"textarea":ud(e,r),i=ml(e,r),K("invalid",e);break;default:i=r}yl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ch(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(e,l):typeof l=="number"&&xi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&Lu(e,o,l,s))}switch(n){case"input":ro(e),ld(e,r,!1);break;case"textarea":ro(e),cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Fn(Di.current),Fn(Pt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Pe(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&He!==null&&t.mode&1&&!(t.flags&128))Zh(),Pr(),t.flags|=98560,o=!1;else if(o=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[St]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ft!==null&&(ql(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?he===0&&(he=3):gc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Tr(),Hl(e,t),e===null&&Ti(t.stateNode.containerInfo),Pe(t),null;case 10:return Ju(t.type._context),Pe(t),null;case 17:return _e(t.type)&&is(),Pe(t),null;case 19:if(Q(q),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Kr(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ds(e),s!==null){for(t.flags|=128,Kr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>jr&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ds(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return Pe(t),null}else 2*re()-o.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function w1(e,t){switch(Qu(t),t.tag){case 1:return _e(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Q(Ne),Q(je),ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Tr(),null;case 10:return Ju(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var go=!1,Te=!1,k1=typeof WeakSet=="function"?WeakSet:Set,M=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Jd=!1;function S1(e,t){if(jl=es,e=_h(),Ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},es=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:ct(t.type,x),S);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Jd,Jd=!1,v}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Wl(t,n,o)}i=i.next}while(i!==r)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ji],delete t[Al],delete t[i1],delete t[o1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vm(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rs));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var xe=null,dt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Im(e,t,n),n=n.sibling}function Im(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Vs,n)}catch{}switch(n.tag){case 5:Te||lr(n,t);case 6:var r=xe,i=dt;xe=null,Ut(e,t,n),xe=r,dt=i,xe!==null&&(dt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(dt?(e=xe,n=n.stateNode,e.nodeType===8?Ea(e.parentNode,n):e.nodeType===1&&Ea(e,n),Ci(e)):Ea(xe,n.stateNode));break;case 4:r=xe,i=dt,xe=n.stateNode.containerInfo,dt=!0,Ut(e,t,n),xe=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Wl(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Te&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Ut(e,t,n),Te=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,dt=!1;break e;case 3:xe=a.stateNode.containerInfo,dt=!0;break e;case 4:xe=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(xe===null)throw Error(j(160));Im(o,s,i),xe=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nm(t,e),t=t.sibling}function Nm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),xt(e),r&4){try{ui(3,e,e.return),Us(3,e)}catch(x){ne(e,e.return,x)}try{ui(5,e,e.return)}catch(x){ne(e,e.return,x)}}break;case 1:ut(t,e),xt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(ut(t,e),xt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(x){ne(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&oh(i,o),vl(a,s);var u=vl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?ch(i,d):c==="dangerouslySetInnerHTML"?lh(i,d):c==="children"?xi(i,d):Lu(i,c,d,u)}switch(a){case"input":pl(i,o);break;case"textarea":sh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?mr(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(x){ne(e,e.return,x)}}break;case 6:if(ut(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ne(e,e.return,x)}}break;case 3:if(ut(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(x){ne(e,e.return,x)}break;case 4:ut(t,e),xt(e);break;case 13:ut(t,e),xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(pc=re())),r&4&&tf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,ut(t,e),Te=u):ut(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:ui(4,f,f.return);break;case 1:lr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ne(r,n,x)}}break;case 5:lr(f,f.return);break;case 22:if(f.memoizedState!==null){rf(d);continue}}g!==null?(g.return=f,M=g):rf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uh("display",s))}catch(x){ne(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ne(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(t,e),xt(e),r&4&&tf(e);break;case 21:break;default:ut(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vm(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var o=ef(e);Yl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ef(e);Kl(e,a,s);break;default:throw Error(j(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C1(e,t,n){M=e,_m(e)}function _m(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||go;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=go;var u=Te;if(go=s,(Te=l)&&!u)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?of(i):l!==null?(l.return=s,M=l):of(i);for(;o!==null;)M=o,_m(o),o=o.sibling;M=i,go=a,Te=u}nf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):nf(e)}}function nf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Od(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Od(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ci(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Te||t.flags&512&&Gl(t)}catch(f){ne(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function rf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function of(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Us(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{Gl(t)}catch(l){ne(t,o,l)}break;case 5:var s=t.return;try{Gl(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var P1=Math.ceil,hs=$t.ReactCurrentDispatcher,dc=$t.ReactCurrentOwner,rt=$t.ReactCurrentBatchConfig,B=0,ye=null,ue=null,we=0,Be=0,ur=yn(0),he=0,Li=null,zn=0,Hs=0,fc=0,ci=null,Ve=null,pc=0,jr=1/0,Et=null,ms=!1,Ql=null,sn=null,yo=!1,qt=null,gs=0,di=0,Xl=null,No=-1,_o=0;function Me(){return B&6?re():No!==-1?No:No=re()}function an(e){return e.mode&1?B&2&&we!==0?we&-we:a1.transition!==null?(_o===0&&(_o=Sh()),_o):(e=H,e!==0||(e=window.event,e=e===void 0?16:Fh(e.type)),e):1}function ht(e,t,n,r){if(50<di)throw di=0,Xl=null,Error(j(185));Hi(e,n,r),(!(B&2)||e!==ye)&&(e===ye&&(!(B&2)&&(Hs|=n),he===4&&Xt(e,we)),ze(e,r),n===1&&B===0&&!(t.mode&1)&&(jr=re()+500,Os&&vn()))}function ze(e,t){var n=e.callbackNode;av(e,t);var r=Jo(e,e===ye?we:0);if(r===0)n!==null&&pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pd(n),t===1)e.tag===0?s1(sf.bind(null,e)):Yh(sf.bind(null,e)),n1(function(){!(B&6)&&vn()}),n=null;else{switch(Ch(r)){case 1:n=zu;break;case 4:n=wh;break;case 16:n=qo;break;case 536870912:n=kh;break;default:n=qo}n=Gm(n,zm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zm(e,t){if(No=-1,_o=0,B&6)throw Error(j(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Jo(e,e===ye?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ys(e,r);else{t=r;var i=B;B|=2;var o=$m();(ye!==e||we!==t)&&(Et=null,jr=re()+500,An(e,t));do try{E1();break}catch(a){Om(e,a)}while(!0);qu(),hs.current=o,B=i,ue!==null?t=0:(ye=null,we=0,t=he)}if(t!==0){if(t===2&&(i=Cl(e),i!==0&&(r=i,t=Zl(e,i))),t===1)throw n=Li,An(e,0),Xt(e,r),ze(e,re()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!b1(i)&&(t=ys(e,r),t===2&&(o=Cl(e),o!==0&&(r=o,t=Zl(e,o))),t===1))throw n=Li,An(e,0),Xt(e,r),ze(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Cn(e,Ve,Et);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=pc+500-re(),10<t)){if(Jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ml(Cn.bind(null,e,Ve,Et),t);break}Cn(e,Ve,Et);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P1(r/1960))-r,10<r){e.timeoutHandle=Ml(Cn.bind(null,e,Ve,Et),r);break}Cn(e,Ve,Et);break;case 5:Cn(e,Ve,Et);break;default:throw Error(j(329))}}}return ze(e,re()),e.callbackNode===n?zm.bind(null,e):null}function Zl(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=ys(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&ql(t)),e}function ql(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function b1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~fc,t&=~Hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function sf(e){if(B&6)throw Error(j(327));wr();var t=Jo(e,0);if(!(t&1))return ze(e,re()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=Li,An(e,0),Xt(e,t),ze(e,re()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Ve,Et),ze(e,re()),null}function hc(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(jr=re()+500,Os&&vn())}}function On(e){qt!==null&&qt.tag===0&&!(B&6)&&wr();var t=B;B|=1;var n=rt.transition,r=H;try{if(rt.transition=null,H=1,e)return e()}finally{H=r,rt.transition=n,B=t,!(B&6)&&vn()}}function mc(){Be=ur.current,Q(ur)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,t1(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&is();break;case 3:Tr(),Q(Ne),Q(je),ic();break;case 5:rc(r);break;case 4:Tr();break;case 13:Q(q);break;case 19:Q(q);break;case 10:Ju(r.type._context);break;case 22:case 23:mc()}n=n.return}if(ye=e,ue=e=ln(e.current,null),we=Be=t,he=0,Li=null,fc=Hs=zn=0,Ve=ci=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}jn=null}return e}function Om(e,t){do{var n=ue;try{if(qu(),Lo.current=ps,fs){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fs=!1}if(_n=0,me=pe=ee=null,li=!1,Mi=0,dc.current=null,n===null||n.return===null){he=1,Li=t,ue=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Gd(s);if(g!==null){g.flags&=-257,Kd(g,s,a,o,t),g.mode&1&&Wd(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Wd(o,u,t),gc();break e}l=Error(j(426))}}else if(X&&a.mode&1){var S=Gd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Kd(S,s,a,o,t),Xu(Er(l,a));break e}}o=l=Er(l,a),he!==4&&(he=2),ci===null?ci=[o]:ci.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Cm(o,l,t);zd(o,y);break e;case 1:a=l;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(sn===null||!sn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Pm(o,a,t);zd(o,w);break e}}o=o.return}while(o!==null)}Um(n)}catch(P){t=P,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function $m(){var e=hs.current;return hs.current=ps,e===null?ps:e}function gc(){(he===0||he===3||he===2)&&(he=4),ye===null||!(zn&268435455)&&!(Hs&268435455)||Xt(ye,we)}function ys(e,t){var n=B;B|=2;var r=$m();(ye!==e||we!==t)&&(Et=null,An(e,t));do try{T1();break}catch(i){Om(e,i)}while(!0);if(qu(),B=n,hs.current=r,ue!==null)throw Error(j(261));return ye=null,we=0,he}function T1(){for(;ue!==null;)Bm(ue)}function E1(){for(;ue!==null&&!qy();)Bm(ue)}function Bm(e){var t=Wm(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Um(e):ue=t,dc.current=null}function Um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w1(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,ue=null;return}}else if(n=x1(n,t,Be),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);he===0&&(he=5)}function Cn(e,t,n){var r=H,i=rt.transition;try{rt.transition=null,H=1,j1(e,t,n,r)}finally{rt.transition=i,H=r}return null}function j1(e,t,n,r){do wr();while(qt!==null);if(B&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lv(e,o),e===ye&&(ue=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,Gm(qo,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var s=H;H=1;var a=B;B|=4,dc.current=null,S1(e,n),Nm(n,e),Yv(Fl),es=!!jl,Fl=jl=null,e.current=n,C1(n),Jy(),B=a,H=s,rt.transition=o}else e.current=n;if(yo&&(yo=!1,qt=e,gs=i),o=e.pendingLanes,o===0&&(sn=null),nv(n.stateNode),ze(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ms)throw ms=!1,e=Ql,Ql=null,e;return gs&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===Xl?di++:(di=0,Xl=e):di=0,vn(),null}function wr(){if(qt!==null){var e=Ch(gs),t=rt.transition,n=H;try{if(rt.transition=null,H=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,gs=0,B&6)throw Error(j(331));var i=B;for(B|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:ui(8,c,o)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,g=c.return;if(Lm(c),c===u){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,M=y;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){s=M;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,M=h;else e:for(s=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Us(9,a)}}catch(P){ne(a,a.return,P)}if(a===s){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(B=i,vn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Vs,e)}catch{}r=!0}return r}finally{H=n,rt.transition=t}}return!1}function af(e,t,n){t=Er(n,t),t=Cm(e,t,1),e=on(e,t,1),t=Me(),e!==null&&(Hi(e,1,t),ze(e,t))}function ne(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=Er(n,e),e=Pm(t,e,1),t=on(t,e,1),e=Me(),t!==null&&(Hi(t,1,e),ze(t,e));break}}t=t.return}}function F1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(he===4||he===3&&(we&130023424)===we&&500>re()-pc?An(e,0):fc|=n),ze(e,t)}function Hm(e,t){t===0&&(e.mode&1?(t=so,so<<=1,!(so&130023424)&&(so=4194304)):t=1);var n=Me();e=_t(e,t),e!==null&&(Hi(e,t,n),ze(e,n))}function D1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hm(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Hm(e,n)}var Wm;Wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,v1(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,X&&t.flags&1048576&&Qh(t,as,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var i=Cr(t,je.current);xr(t,n),i=sc(null,t,r,e,i,n);var o=ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,os(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tc(t),i.updater=Bs,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=$l(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Yu(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=R1(r),e=ct(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Xd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Qd(null,t,r,ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Xd(e,t,r,i,n);case 3:e:{if(jm(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tm(e,t),cs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Er(Error(j(423)),t),t=Zd(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(j(424)),t),t=Zd(e,t,r,n,i);break e}else for(He=rn(t.stateNode.containerInfo.firstChild),We=t,X=!0,ft=null,n=Jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){t=zt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return nm(t),e===null&&Vl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Dl(r,i)?s=null:o!==null&&Dl(r,o)&&(t.flags|=32),Em(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Vl(t),null;case 13:return Fm(e,t,n);case 4:return nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Yd(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(ls,r._currentValue),r._currentValue=s,o!==null)if(gt(o.value,s)){if(o.children===i.children&&!Ne.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Rt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Il(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Il(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=it(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Qd(e,t,r,i,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Io(e,t),t.tag=1,_e(r)?(e=!0,os(t)):e=!1,xr(t,n),Sm(t,r,i),_l(t,r,i,n),$l(null,t,r,!0,e,n);case 19:return Dm(e,t,n);case 22:return Tm(e,t,n)}throw Error(j(156,t.tag))};function Gm(e,t){return xh(e,t)}function A1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new A1(e,t,n,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R1(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===Nu)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")yc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jn:return Rn(n.children,i,o,t);case Vu:s=8,i|=8;break;case ll:return e=nt(12,n,t,i|2),e.elementType=ll,e.lanes=o,e;case ul:return e=nt(13,n,t,i),e.elementType=ul,e.lanes=o,e;case cl:return e=nt(19,n,t,i),e.elementType=cl,e.lanes=o,e;case nh:return Ws(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eh:s=10;break e;case th:s=9;break e;case Iu:s=11;break e;case Nu:s=14;break e;case Gt:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=nt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Ws(e,t,n,r){return e=nt(22,e,r,t),e.elementType=nh,e.lanes=n,e.stateNode={isHidden:!1},e}function Va(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Ia(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,i,o,s,a,l){return e=new L1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(o),e}function V1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Km(e){if(!e)return pn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(_e(n))return Kh(e,n,t)}return t}function Ym(e,t,n,r,i,o,s,a,l){return e=vc(n,r,!0,e,i,o,s,a,l),e.context=Km(null),n=e.current,r=Me(),i=an(n),o=Rt(r,i),o.callback=t??null,on(n,o,i),e.current.lanes=i,Hi(e,i,r),ze(e,r),e}function Gs(e,t,n,r){var i=t.current,o=Me(),s=an(i);return n=Km(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(i,t,s),e!==null&&(ht(e,i,s,o),Ro(e,i,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xc(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function I1(){return null}var Qm=typeof reportError=="function"?reportError:function(e){console.error(e)};function wc(e){this._internalRoot=e}Ks.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Gs(e,t,null,null)};Ks.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Gs(null,e,null,null)}),t[Nt]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Th();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&jh(e)}};function kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function N1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vs(s);o.call(u)}}var s=Ym(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=s,e[Nt]=s.current,Ti(e.nodeType===8?e.parentNode:e),On(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vs(l);a.call(u)}}var l=vc(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Nt]=l.current,Ti(e.nodeType===8?e.parentNode:e),On(function(){Gs(t,l,n,r)}),l}function Qs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vs(s);a.call(l)}}Gs(t,s,e,i)}else s=N1(n,t,e,i,r);return vs(s)}Ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Ou(t,n|1),ze(t,re()),!(B&6)&&(jr=re()+500,vn()))}break;case 13:On(function(){var r=_t(e,1);if(r!==null){var i=Me();ht(r,e,1,i)}}),xc(e,1)}};$u=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Me();ht(t,e,134217728,n)}xc(e,134217728)}};bh=function(e){if(e.tag===13){var t=an(e),n=_t(e,t);if(n!==null){var r=Me();ht(n,e,t,r)}xc(e,t)}};Th=function(){return H};Eh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};wl=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zs(r);if(!i)throw Error(j(90));ih(r),pl(r,i)}}}break;case"textarea":sh(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};ph=hc;hh=On;var _1={usingClientEntryPoint:!1,Events:[Gi,rr,zs,dh,fh,hc]},Yr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z1={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yh(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Vs=vo.inject(z1),Ct=vo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(t))throw Error(j(200));return V1(e,t,null,n)};Ye.createRoot=function(e,t){if(!kc(e))throw Error(j(299));var n=!1,r="",i=Qm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,Ti(e.nodeType===8?e.parentNode:e),new wc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=yh(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return On(e)};Ye.hydrate=function(e,t,n){if(!Ys(t))throw Error(j(200));return Qs(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!kc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Qm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ym(t,null,e,1,n??null,i,!1,o,s),e[Nt]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ks(t)};Ye.render=function(e,t,n){if(!Ys(t))throw Error(j(200));return Qs(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Ys(e))throw Error(j(40));return e._reactRootContainer?(On(function(){Qs(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ye.unstable_batchedUpdates=hc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ys(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Qs(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xm)}catch(e){console.error(e)}}Xm(),Xp.exports=Ye;var O1=Xp.exports,cf=O1;sl.createRoot=cf.createRoot,sl.hydrateRoot=cf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const df="popstate";function $1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Jl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xs(i)}return U1(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function B1(){return Math.random().toString(36).substr(2,8)}function ff(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zr(t):t,{state:n,key:t&&t.key||r||B1()})}function xs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function U1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Jt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Vi({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Jt.Pop;let S=c(),y=S==null?null:S-u;u=S,l&&l({action:a,location:x.location,delta:y})}function f(S,y){a=Jt.Push;let p=Jl(x.location,S,y);u=c()+1;let h=ff(p,u),w=x.createHref(p);try{s.pushState(h,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function g(S,y){a=Jt.Replace;let p=Jl(x.location,S,y);u=c();let h=ff(p,u),w=x.createHref(p);s.replaceState(h,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:xs(S);return p=p.replace(/ $/,"%20"),ce(y,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,y)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(df,d),l=S,()=>{i.removeEventListener(df,d),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let y=v(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:g,go(S){return s.go(S)}};return x}var pf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pf||(pf={}));function H1(e,t,n){return n===void 0&&(n="/"),W1(e,t,n)}function W1(e,t,n,r){let i=typeof t=="string"?zr(t):t,o=Sc(i.pathname||"/",n);if(o==null)return null;let s=qm(e);G1(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=ix(o);a=tx(s[l],u)}return a}function qm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=un([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:J1(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Jm(o.path))i(o,s,l)}),t}function Jm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Jm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function G1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ex(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K1=/^:[\w-]+$/,Y1=3,Q1=2,X1=1,Z1=10,q1=-2,hf=e=>e==="*";function J1(e,t){let n=e.split("/"),r=n.length;return n.some(hf)&&(r+=q1),t&&(r+=Q1),n.filter(i=>!hf(i)).reduce((i,o)=>i+(K1.test(o)?Y1:o===""?X1:Z1),r)}function ex(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=nx({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:un([o,d.pathname]),pathnameBase:lx(un([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=un([o,d.pathnameBase]))}return s}function nx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:g}=c;if(f==="*"){let x=a[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function rx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ix(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ox(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zr(e):e;return{pathname:n?n.startsWith("/")?n:sx(n,t):t,search:ux(r),hash:cx(i)}}function sx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Na(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ax(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function eg(e,t){let n=ax(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zr(e):(i=Vi({},e),ce(!i.pathname||!i.pathname.includes("?"),Na("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),Na("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),Na("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=ox(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const un=e=>e.join("/").replace(/\/\/+/g,"/"),lx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ux=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ng=["post","put","patch","delete"];new Set(ng);const fx=["get",...ng];new Set(fx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}const Cc=k.createContext(null),px=k.createContext(null),Un=k.createContext(null),Xs=k.createContext(null),Hn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),rg=k.createContext(null);function hx(e,t){let{relative:n}=t===void 0?{}:t;Yi()||ce(!1);let{basename:r,navigator:i}=k.useContext(Un),{hash:o,pathname:s,search:a}=og(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:un([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Yi(){return k.useContext(Xs)!=null}function Qi(){return Yi()||ce(!1),k.useContext(Xs).location}function ig(e){k.useContext(Un).static||k.useLayoutEffect(e)}function mx(){let{isDataRoute:e}=k.useContext(Hn);return e?jx():gx()}function gx(){Yi()||ce(!1);let e=k.useContext(Cc),{basename:t,future:n,navigator:r}=k.useContext(Un),{matches:i}=k.useContext(Hn),{pathname:o}=Qi(),s=JSON.stringify(eg(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return ig(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=tg(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:un([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,o,e])}function og(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Un),{matches:i}=k.useContext(Hn),{pathname:o}=Qi(),s=JSON.stringify(eg(i,r.v7_relativeSplatPath));return k.useMemo(()=>tg(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function yx(e,t){return vx(e,t)}function vx(e,t,n,r){Yi()||ce(!1);let{navigator:i}=k.useContext(Un),{matches:o}=k.useContext(Hn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Qi(),c;if(t){var d;let S=typeof t=="string"?zr(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||ce(!1),c=S}else c=u;let f=c.pathname||"/",g=f;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=H1(e,{pathname:g}),x=Cx(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:un([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:un([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?k.createElement(Xs.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Jt.Pop}},x):x}function xx(){let e=Ex(),t=dx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const wx=k.createElement(xx,null);class kx extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Hn.Provider,{value:this.props.routeContext},k.createElement(rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sx(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Cc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Hn.Provider,{value:t},r)}function Cx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||ce(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:g}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let g,v=!1,x=null,S=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||wx,l&&(u<0&&f===0?(Fx("route-fallback"),v=!0,S=null):u===f&&(v=!0,S=d.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,f+1)),p=()=>{let h;return g?h=x:v?h=S:d.route.Component?h=k.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=c,k.createElement(Sx,{match:d,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(kx,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}var sg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sg||{}),ag=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ag||{});function Px(e){let t=k.useContext(Cc);return t||ce(!1),t}function bx(e){let t=k.useContext(px);return t||ce(!1),t}function Tx(e){let t=k.useContext(Hn);return t||ce(!1),t}function lg(e){let t=Tx(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Ex(){var e;let t=k.useContext(rg),n=bx(ag.UseRouteError),r=lg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jx(){let{router:e}=Px(sg.UseNavigateStable),t=lg(),n=k.useRef(!1);return ig(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ii({fromRouteId:t},o)))},[e,t])}const mf={};function Fx(e,t,n){mf[e]||(mf[e]=!0)}function Dx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function eu(e){ce(!1)}function Mx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:o,static:s=!1,future:a}=e;Yi()&&ce(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:o,static:s,future:Ii({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=zr(r));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,x=k.useMemo(()=>{let S=Sc(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:v},navigationType:i}},[l,c,d,f,g,v,i]);return x==null?null:k.createElement(Un.Provider,{value:u},k.createElement(Xs.Provider,{children:n,value:x}))}function Ax(e){let{children:t,location:n}=e;return yx(tu(t),n)}new Promise(()=>{});function tu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,tu(r.props.children,o));return}r.type!==eu&&ce(!1),!r.props.index||!r.props.children||ce(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=tu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(this,arguments)}function Rx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Lx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vx(e,t){return e.button===0&&(!t||t==="_self")&&!Lx(e)}const Ix=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nx="6";try{window.__reactRouterVersion=Nx}catch{}const _x="startTransition",gf=Fy[_x];function zx(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=$1({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&gf?gf(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>s.listen(c),[s,c]),k.useEffect(()=>Dx(r),[r]),k.createElement(Mx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ug=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,f=Rx(t,Ix),{basename:g}=k.useContext(Un),v,x=!1;if(typeof u=="string"&&$x.test(u)&&(v=u,Ox))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),P=Sc(w.pathname,g);w.origin===h.origin&&P!=null?u=P+w.search+w.hash:x=!0}catch{}let S=hx(u,{relative:i}),y=Bx(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function p(h){r&&r(h),h.defaultPrevented||y(h)}return k.createElement("a",nu({},f,{href:v||S,onClick:x||o?r:p,ref:n,target:l}))});var yf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yf||(yf={}));var vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));function Bx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=mx(),u=Qi(),c=og(e,{relative:s});return k.useCallback(d=>{if(Vx(d,n)){d.preventDefault();let f=r!==void 0?r:xs(u)===xs(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}const cg=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Zs=k.createContext({}),qs=k.createContext(null),Js=typeof document<"u",Pc=Js?k.useLayoutEffect:k.useEffect,dg=k.createContext({strict:!1}),bc=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ux="framerAppearId",fg="data-"+bc(Ux);function Hx(e,t,n,r){const{visualElement:i}=k.useContext(Zs),o=k.useContext(dg),s=k.useContext(qs),a=k.useContext(cg).reducedMotion,l=k.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;k.useInsertionEffect(()=>{u&&u.update(n,s)});const c=k.useRef(!!(n[fg]&&!window.HandoffComplete));return Pc(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),k.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function cr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Wx(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):cr(n)&&(n.current=r))},[t])}function Ni(e){return typeof e=="string"||Array.isArray(e)}function ea(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Tc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ec=["initial",...Tc];function ta(e){return ea(e.animate)||Ec.some(t=>Ni(e[t]))}function pg(e){return!!(ta(e)||e.variants)}function Gx(e,t){if(ta(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ni(n)?n:void 0,animate:Ni(r)?r:void 0}}return e.inherit!==!1?t:{}}function Kx(e){const{initial:t,animate:n}=Gx(e,k.useContext(Zs));return k.useMemo(()=>({initial:t,animate:n}),[xf(t),xf(n)])}function xf(e){return Array.isArray(e)?e.join(" "):e}const wf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},_i={};for(const e in wf)_i[e]={isEnabled:t=>wf[e].some(n=>!!t[n])};function Yx(e){for(const t in e)_i[t]={..._i[t],...e[t]}}const jc=k.createContext({}),hg=k.createContext({}),Qx=Symbol.for("motionComponentSymbol");function Xx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Yx(e);function o(a,l){let u;const c={...k.useContext(cg),...a,layoutId:Zx(a)},{isStatic:d}=c,f=Kx(a),g=r(a,d);if(!d&&Js){f.visualElement=Hx(i,g,c,t);const v=k.useContext(hg),x=k.useContext(dg).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,x,e,v))}return k.createElement(Zs.Provider,{value:f},u&&f.visualElement?k.createElement(u,{visualElement:f.visualElement,...c}):null,n(i,a,Wx(g,f.visualElement,l),g,d,f.visualElement))}const s=k.forwardRef(o);return s[Qx]=i,s}function Zx({layoutId:e}){const t=k.useContext(jc).id;return t&&e!==void 0?t+"-"+e:e}function qx(e){function t(r,i={}){return Xx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Jx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fc(e){return typeof e!="string"||e.includes("-")?!1:!!(Jx.indexOf(e)>-1||/[A-Z]/.test(e))}const ws={};function e2(e){Object.assign(ws,e)}const Xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wn=new Set(Xi);function mg(e,{layout:t,layoutId:n}){return Wn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ws[e]||e==="opacity")}const Oe=e=>!!(e&&e.getVelocity),t2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},n2=Xi.length;function r2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<n2;s++){const a=Xi[s];if(e[a]!==void 0){const l=t2[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const gg=e=>t=>typeof t=="string"&&t.startsWith(e),yg=gg("--"),ru=gg("var(--"),i2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,o2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,hn=(e,t,n)=>Math.min(Math.max(n,e),t),Gn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},fi={...Gn,transform:e=>hn(0,1,e)},xo={...Gn,default:1},pi=e=>Math.round(e*1e5)/1e5,na=/(-)?([\d]*\.?[\d])+/g,vg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,s2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Zi(e){return typeof e=="string"}const qi=e=>({test:t=>Zi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ht=qi("deg"),bt=qi("%"),I=qi("px"),a2=qi("vh"),l2=qi("vw"),kf={...bt,parse:e=>bt.parse(e)/100,transform:e=>bt.transform(e*100)},Sf={...Gn,transform:Math.round},xg={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,radius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,size:I,top:I,right:I,bottom:I,left:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,rotate:Ht,rotateX:Ht,rotateY:Ht,rotateZ:Ht,scale:xo,scaleX:xo,scaleY:xo,scaleZ:xo,skew:Ht,skewX:Ht,skewY:Ht,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:fi,originX:kf,originY:kf,originZ:I,zIndex:Sf,fillOpacity:fi,strokeOpacity:fi,numOctaves:Sf};function Dc(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(yg(d)){o[d]=f;continue}const g=xg[d],v=o2(f,g);if(Wn.has(d)){if(l=!0,s[d]=v,!c)continue;f!==(g.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=r2(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:g=0}=a;i.transformOrigin=`${d} ${f} ${g}`}}const Mc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function wg(e,t,n){for(const r in t)!Oe(t[r])&&!mg(r,n)&&(e[r]=t[r])}function u2({transformTemplate:e},t,n){return k.useMemo(()=>{const r=Mc();return Dc(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function c2(e,t,n){const r=e.style||{},i={};return wg(i,r,e),Object.assign(i,u2(e,t,n)),e.transformValues?e.transformValues(i):i}function d2(e,t,n){const r={},i=c2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const f2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ks(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||f2.has(e)}let kg=e=>!ks(e);function p2(e){e&&(kg=t=>t.startsWith("on")?!ks(t):e(t))}try{p2(require("@emotion/is-prop-valid").default)}catch{}function h2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(kg(i)||n===!0&&ks(i)||!t&&!ks(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Cf(e,t,n){return typeof e=="string"?e:I.transform(t+n*e)}function m2(e,t,n){const r=Cf(t,e.x,e.width),i=Cf(n,e.y,e.height);return`${r} ${i}`}const g2={offset:"stroke-dashoffset",array:"stroke-dasharray"},y2={offset:"strokeDashoffset",array:"strokeDasharray"};function v2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?g2:y2;e[o.offset]=I.transform(-r);const s=I.transform(t),a=I.transform(n);e[o.array]=`${s} ${a}`}function Ac(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(Dc(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=m2(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),s!==void 0&&v2(g,s,a,l,!1)}const Sg=()=>({...Mc(),attrs:{}}),Rc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function x2(e,t,n,r){const i=k.useMemo(()=>{const o=Sg();return Ac(o,t,{enableHardwareAcceleration:!1},Rc(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};wg(o,e.style,e),i.style={...o,...i.style}}return i}function w2(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Fc(n)?x2:d2)(r,o,s,n),c={...h2(r,typeof n=="string",e),...l,ref:i},{children:d}=r,f=k.useMemo(()=>Oe(d)?d.get():d,[d]);return k.createElement(n,{...c,children:f})}}function Cg(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Pg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function bg(e,t,n,r){Cg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Pg.has(i)?i:bc(i),t.attrs[i])}function Lc(e,t){const{style:n}=e,r={};for(const i in n)(Oe(n[i])||t.style&&Oe(t.style[i])||mg(i,e))&&(r[i]=n[i]);return r}function Tg(e,t){const n=Lc(e,t);for(const r in e)if(Oe(e[r])||Oe(t[r])){const i=Xi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Vc(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Eg(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ss=e=>Array.isArray(e),k2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),S2=e=>Ss(e)?e[e.length-1]||0:e;function Oo(e){const t=Oe(e)?e.get():e;return k2(t)?t.toValue():t}function C2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:P2(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const jg=e=>(t,n)=>{const r=k.useContext(Zs),i=k.useContext(qs),o=()=>C2(e,t,r,i);return n?o():Eg(o)};function P2(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Oo(o[f]);let{initial:s,animate:a}=e;const l=ta(e),u=pg(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!ea(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const v=Vc(e,g);if(!v)return;const{transitionEnd:x,transition:S,...y}=v;for(const p in y){let h=y[p];if(Array.isArray(h)){const w=c?h.length-1:0;h=h[w]}h!==null&&(i[p]=h)}for(const p in x)i[p]=x[p]}),i}const ie=e=>e;class Pf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function b2(e){let t=new Pf,n=new Pf,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];c(l),s.has(c)&&(a.schedule(c),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const wo=["prepare","read","update","preRender","render","postRender"],T2=40;function E2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=wo.reduce((d,f)=>(d[f]=b2(()=>n=!0),d),{}),s=d=>o[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,T2),1),i.timestamp=d,i.isProcessing=!0,wo.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:wo.reduce((d,f)=>{const g=o[f];return d[f]=(v,x=!1,S=!1)=>(n||l(),g.schedule(v,x,S)),d},{}),cancel:d=>wo.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:G,cancel:Ot,state:be,steps:_a}=E2(typeof requestAnimationFrame<"u"?requestAnimationFrame:ie,!0),j2={useVisualState:jg({scrapeMotionValuesFromProps:Tg,createRenderState:Sg,onMount:(e,t,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{Ac(n,r,{enableHardwareAcceleration:!1},Rc(t.tagName),e.transformTemplate),bg(t,n)})}})},F2={useVisualState:jg({scrapeMotionValuesFromProps:Lc,createRenderState:Mc})};function D2(e,{forwardMotionProps:t=!1},n,r){return{...Fc(e)?j2:F2,preloadedFeatures:n,useRender:w2(t),createVisualElement:r,Component:e}}function At(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Fg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ra(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const M2=e=>t=>Fg(t)&&e(t,ra(t));function Lt(e,t,n,r){return At(e,t,M2(n),r)}const A2=(e,t)=>n=>t(e(n)),cn=(...e)=>e.reduce(A2);function Dg(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const bf=Dg("dragHorizontal"),Tf=Dg("dragVertical");function Mg(e){let t=!1;if(e==="y")t=Tf();else if(e==="x")t=bf();else{const n=bf(),r=Tf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Ag(){const e=Mg(!0);return e?(e(),!1):!0}class xn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Ef(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Ag())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&G.update(()=>a[r](o,s))};return Lt(e.current,n,i,{passive:!e.getProps()[r]})}class R2 extends xn{mount(){this.unmount=cn(Ef(this.node,!0),Ef(this.node,!1))}unmount(){}}class L2 extends xn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cn(At(this.node.current,"focus",()=>this.onFocus()),At(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Rg=(e,t)=>t?e===t?!0:Rg(e,t.parentElement):!1;function za(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ra(n))}class V2 extends xn{constructor(){super(...arguments),this.removeStartListeners=ie,this.removeEndListeners=ie,this.removeAccessibleListeners=ie,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Lt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();G.update(()=>{!d&&!Rg(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Lt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=cn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||za("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&G.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=At(this.node.current,"keyup",s),za("down",(a,l)=>{this.startPress(a,l)})},n=At(this.node.current,"keydown",t),r=()=>{this.isPressing&&za("cancel",(o,s)=>this.cancelPress(o,s))},i=At(this.node.current,"blur",r);this.removeAccessibleListeners=cn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&G.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ag()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&G.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Lt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=At(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=cn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const iu=new WeakMap,Oa=new WeakMap,I2=e=>{const t=iu.get(e.target);t&&t(e)},N2=e=>{e.forEach(I2)};function _2({root:e,...t}){const n=e||document;Oa.has(n)||Oa.set(n,{});const r=Oa.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(N2,{root:e,...t})),r[i]}function z2(e,t,n){const r=_2(t);return iu.set(e,n),r.observe(e),()=>{iu.delete(e),r.unobserve(e)}}const O2={some:0,all:1};class $2 extends xn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:O2[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return z2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(B2(t,n))&&this.startObserver()}unmount(){}}function B2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const U2={inView:{Feature:$2},tap:{Feature:V2},focus:{Feature:L2},hover:{Feature:R2}};function Lg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function H2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function W2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ia(e,t,n){const r=e.getProps();return Vc(r,t,n!==void 0?n:r.custom,H2(e),W2(e))}let Ic=ie;const Ln=e=>e*1e3,Vt=e=>e/1e3,G2={current:!1},Vg=e=>Array.isArray(e)&&typeof e[0]=="number";function Ig(e){return!!(!e||typeof e=="string"&&Ng[e]||Vg(e)||Array.isArray(e)&&e.every(Ig))}const ti=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ng={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ti([0,.65,.55,1]),circOut:ti([.55,0,1,.45]),backIn:ti([.31,.01,.66,-.59]),backOut:ti([.33,1.53,.69,.99])};function _g(e){if(e)return Vg(e)?ti(e):Array.isArray(e)?e.map(_g):Ng[e]}function K2(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=_g(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Y2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const zg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Q2=1e-7,X2=12;function Z2(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=zg(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Q2&&++a<X2);return s}function Ji(e,t,n,r){if(e===t&&n===r)return ie;const i=o=>Z2(o,0,1,e,n);return o=>o===0||o===1?o:zg(i(o),t,r)}const q2=Ji(.42,0,1,1),J2=Ji(0,0,.58,1),Og=Ji(.42,0,.58,1),ew=e=>Array.isArray(e)&&typeof e[0]!="number",$g=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Bg=e=>t=>1-e(1-t),Nc=e=>1-Math.sin(Math.acos(e)),Ug=Bg(Nc),tw=$g(Nc),Hg=Ji(.33,1.53,.69,.99),_c=Bg(Hg),nw=$g(_c),rw=e=>(e*=2)<1?.5*_c(e):.5*(2-Math.pow(2,-10*(e-1))),iw={linear:ie,easeIn:q2,easeInOut:Og,easeOut:J2,circIn:Nc,circInOut:tw,circOut:Ug,backIn:_c,backInOut:nw,backOut:Hg,anticipate:rw},jf=e=>{if(Array.isArray(e)){Ic(e.length===4);const[t,n,r,i]=e;return Ji(t,n,r,i)}else if(typeof e=="string")return iw[e];return e},zc=(e,t)=>n=>!!(Zi(n)&&s2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Wg=(e,t,n)=>r=>{if(!Zi(r))return r;const[i,o,s,a]=r.match(na);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},ow=e=>hn(0,255,e),$a={...Gn,transform:e=>Math.round(ow(e))},Dn={test:zc("rgb","red"),parse:Wg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+$a.transform(e)+", "+$a.transform(t)+", "+$a.transform(n)+", "+pi(fi.transform(r))+")"};function sw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ou={test:zc("#"),parse:sw,transform:Dn.transform},dr={test:zc("hsl","hue"),parse:Wg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+bt.transform(pi(t))+", "+bt.transform(pi(n))+", "+pi(fi.transform(r))+")"},Fe={test:e=>Dn.test(e)||ou.test(e)||dr.test(e),parse:e=>Dn.test(e)?Dn.parse(e):dr.test(e)?dr.parse(e):ou.parse(e),transform:e=>Zi(e)?e:e.hasOwnProperty("red")?Dn.transform(e):dr.transform(e)},J=(e,t,n)=>-n*e+n*t+e;function Ba(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function aw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Ba(l,a,e+1/3),o=Ba(l,a,e),s=Ba(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Ua=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},lw=[ou,Dn,dr],uw=e=>lw.find(t=>t.test(e));function Ff(e){const t=uw(e);let n=t.parse(e);return t===dr&&(n=aw(n)),n}const Gg=(e,t)=>{const n=Ff(e),r=Ff(t),i={...n};return o=>(i.red=Ua(n.red,r.red,o),i.green=Ua(n.green,r.green,o),i.blue=Ua(n.blue,r.blue,o),i.alpha=J(n.alpha,r.alpha,o),Dn.transform(i))};function cw(e){var t,n;return isNaN(e)&&Zi(e)&&(((t=e.match(na))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(vg))===null||n===void 0?void 0:n.length)||0)>0}const Kg={regex:i2,countKey:"Vars",token:"${v}",parse:ie},Yg={regex:vg,countKey:"Colors",token:"${c}",parse:Fe.parse},Qg={regex:na,countKey:"Numbers",token:"${n}",parse:Gn.parse};function Ha(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Cs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ha(n,Kg),Ha(n,Yg),Ha(n,Qg),n}function Xg(e){return Cs(e).values}function Zg(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Cs(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(Kg.token,s[l]):l<r+n?a=a.replace(Yg.token,Fe.transform(s[l])):a=a.replace(Qg.token,pi(s[l]));return a}}const dw=e=>typeof e=="number"?0:e;function fw(e){const t=Xg(e);return Zg(e)(t.map(dw))}const mn={test:cw,parse:Xg,createTransformer:Zg,getAnimatableNone:fw},qg=(e,t)=>n=>`${n>0?t:e}`;function Jg(e,t){return typeof e=="number"?n=>J(e,t,n):Fe.test(e)?Gg(e,t):e.startsWith("var(")?qg(e,t):t0(e,t)}const e0=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>Jg(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},pw=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Jg(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},t0=(e,t)=>{const n=mn.createTransformer(t),r=Cs(e),i=Cs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?cn(e0(r.values,i.values),n):qg(e,t)},zi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Df=(e,t)=>n=>J(e,t,n);function hw(e){return typeof e=="number"?Df:typeof e=="string"?Fe.test(e)?Gg:t0:Array.isArray(e)?e0:typeof e=="object"?pw:Df}function mw(e,t,n){const r=[],i=n||hw(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ie:t;a=cn(l,a)}r.push(a)}return r}function n0(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Ic(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=mw(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=zi(e[c],e[c+1],u);return s[c](d)};return n?u=>l(hn(e[0],e[o-1],u)):l}function gw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=zi(0,t,r);e.push(J(n,1,i))}}function yw(e){const t=[0];return gw(t,e.length-1),t}function vw(e,t){return e.map(n=>n*t)}function xw(e,t){return e.map(()=>t||Og).splice(0,e.length-1)}function Ps({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=ew(r)?r.map(jf):jf(r),o={done:!1,value:t[0]},s=vw(n&&n.length===t.length?n:yw(t),e),a=n0(s,t,{ease:Array.isArray(i)?i:xw(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function r0(e,t){return t?e*(1e3/t):0}const ww=5;function i0(e,t,n){const r=Math.max(t-ww,0);return r0(n-e(r),t-r)}const Wa=.001,kw=.01,Sw=10,Cw=.05,Pw=1;function bw({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=hn(Cw,Pw,s),e=hn(kw,Sw,Vt(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,g=su(u,s),v=Math.exp(-d);return Wa-f/g*v},o=u=>{const d=u*s*e,f=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=su(Math.pow(u,2),s);return(-i(u)+Wa>0?-1:1)*((f-g)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Wa+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=Ew(i,o,a);if(e=Ln(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const Tw=12;function Ew(e,t,n){let r=n;for(let i=1;i<Tw;i++)r=r-e(r)/t(r);return r}function su(e,t){return e*Math.sqrt(1-t*t)}const jw=["duration","bounce"],Fw=["stiffness","damping","mass"];function Mf(e,t){return t.some(n=>e[n]!==void 0)}function Dw(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Mf(e,Fw)&&Mf(e,jw)){const n=bw(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function o0({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=Dw({...r,velocity:-Vt(r.velocity||0)}),g=d||0,v=l/(2*Math.sqrt(a*u)),x=o-i,S=Vt(Math.sqrt(a/u)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let p;if(v<1){const h=su(S,v);p=w=>{const P=Math.exp(-v*S*w);return o-P*((g+v*S*x)/h*Math.sin(h*w)+x*Math.cos(h*w))}}else if(v===1)p=h=>o-Math.exp(-S*h)*(x+(g+S*x)*h);else{const h=S*Math.sqrt(v*v-1);p=w=>{const P=Math.exp(-v*S*w),T=Math.min(h*w,300);return o-P*((g+v*S*x)*Math.sinh(T)+h*x*Math.cosh(T))/h}}return{calculatedDuration:f&&c||null,next:h=>{const w=p(h);if(f)s.done=h>=c;else{let P=g;h!==0&&(v<1?P=i0(p,h,w):P=0);const T=Math.abs(P)<=n,b=Math.abs(o-w)<=t;s.done=T&&b}return s.value=s.done?o:w,s}}}function Af({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},g=E=>a!==void 0&&E<a||l!==void 0&&E>l,v=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const S=d+x,y=s===void 0?S:s(S);y!==S&&(x=y-d);const p=E=>-x*Math.exp(-E/r),h=E=>y+p(E),w=E=>{const R=p(E),V=h(E);f.done=Math.abs(R)<=u,f.value=f.done?y:V};let P,T;const b=E=>{g(f.value)&&(P=E,T=o0({keyframes:[f.value,v(f.value)],velocity:i0(h,E,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return b(0),{calculatedDuration:null,next:E=>{let R=!1;return!T&&P===void 0&&(R=!0,w(E),b(E)),P!==void 0&&E>P?T.next(E-P):(!R&&w(E),f)}}}const Mw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>G.update(t,!0),stop:()=>Ot(t),now:()=>be.isProcessing?be.timestamp:performance.now()}},Rf=2e4;function Lf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Rf;)t+=n,r=e.next(t);return t>=Rf?1/0:t}const Aw={decay:Af,inertia:Af,tween:Ps,keyframes:Ps,spring:o0};function bs({autoplay:e=!0,delay:t=0,driver:n=Mw,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let g=1,v=!1,x,S;const y=()=>{S=new Promise(L=>{x=L})};y();let p;const h=Aw[i]||Ps;let w;h!==Ps&&typeof r[0]!="number"&&(w=n0([0,100],r,{clamp:!1}),r=[0,100]);const P=h({...f,keyframes:r});let T;a==="mirror"&&(T=h({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let b="idle",E=null,R=null,V=null;P.calculatedDuration===null&&o&&(P.calculatedDuration=Lf(P));const{calculatedDuration:oe}=P;let de=1/0,ve=1/0;oe!==null&&(de=oe+s,ve=de*(o+1)-s);let se=0;const yt=L=>{if(R===null)return;g>0&&(R=Math.min(R,L)),g<0&&(R=Math.min(L-ve/g,R)),E!==null?se=E:se=Math.round(L-R)*g;const $=se-t*(g>=0?1:-1),vt=g>=0?$<0:$>ve;se=Math.max($,0),b==="finished"&&E===null&&(se=ve);let Le=se,at=P;if(o){const lt=Math.min(se,ve)/de;let Bt=Math.floor(lt),Ze=lt%1;!Ze&&lt>=1&&(Ze=1),Ze===1&&Bt--,Bt=Math.min(Bt,o+1),!!(Bt%2)&&(a==="reverse"?(Ze=1-Ze,s&&(Ze-=s/de)):a==="mirror"&&(at=T)),Le=hn(0,1,Ze)*de}const fe=vt?{done:!1,value:r[0]}:at.next(Le);w&&(fe.value=w(fe.value));let{done:Xe}=fe;!vt&&oe!==null&&(Xe=g>=0?se>=ve:se<=0);const wn=E===null&&(b==="finished"||b==="running"&&Xe);return d&&d(fe.value),wn&&F(),fe},Z=()=>{p&&p.stop(),p=void 0},Se=()=>{b="idle",Z(),x(),y(),R=V=null},F=()=>{b="finished",c&&c(),Z(),x()},A=()=>{if(v)return;p||(p=n(yt));const L=p.now();l&&l(),E!==null?R=L-E:(!R||b==="finished")&&(R=L),b==="finished"&&y(),V=R,E=null,b="running",p.start()};e&&A();const N={then(L,$){return S.then(L,$)},get time(){return Vt(se)},set time(L){L=Ln(L),se=L,E!==null||!p||g===0?E=L:R=p.now()-L/g},get duration(){const L=P.calculatedDuration===null?Lf(P):P.calculatedDuration;return Vt(L)},get speed(){return g},set speed(L){L===g||!p||(g=L,N.time=Vt(se))},get state(){return b},play:A,pause:()=>{b="paused",E=se},stop:()=>{v=!0,b!=="idle"&&(b="idle",u&&u(),Se())},cancel:()=>{V!==null&&yt(V),Se()},complete:()=>{b="finished"},sample:L=>(R=0,yt(L))};return N}function Rw(e){let t;return()=>(t===void 0&&(t=e()),t)}const Lw=Rw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ko=10,Iw=2e4,Nw=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Ig(t.ease);function _w(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Lw()&&Vw.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(h=>{a=h})};c();let{keyframes:d,duration:f=300,ease:g,times:v}=i;if(Nw(t,i)){const h=bs({...i,repeat:0,delay:0});let w={done:!1,value:d[0]};const P=[];let T=0;for(;!w.done&&T<Iw;)w=h.sample(T),P.push(w.value),T+=ko;v=void 0,d=P,f=T-ko,g="linear"}const x=K2(e.owner.current,t,d,{...i,duration:f,ease:g,times:v}),S=()=>{u=!1,x.cancel()},y=()=>{u=!0,G.update(S),a(),c()};return x.onfinish=()=>{u||(e.set(Y2(d,i)),r&&r(),y())},{then(h,w){return l.then(h,w)},attachTimeline(h){return x.timeline=h,x.onfinish=null,ie},get time(){return Vt(x.currentTime||0)},set time(h){x.currentTime=Ln(h)},get speed(){return x.playbackRate},set speed(h){x.playbackRate=h},get duration(){return Vt(f)},play:()=>{s||(x.play(),Ot(S))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:h}=x;if(h){const w=bs({...i,autoplay:!1});e.setWithVelocity(w.sample(h-ko).value,w.sample(h).value,ko)}y()},complete:()=>{u||x.finish()},cancel:y}}function zw({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ie,pause:ie,stop:ie,then:o=>(o(),Promise.resolve()),cancel:ie,complete:ie});return t?bs({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Ow={type:"spring",stiffness:500,damping:25,restSpeed:10},$w=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Bw={type:"keyframes",duration:.8},Uw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Hw=(e,{keyframes:t})=>t.length>2?Bw:Wn.has(e)?e.startsWith("scale")?$w(t[1]):Ow:Uw,au=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(mn.test(t)||t==="0")&&!t.startsWith("url(")),Ww=new Set(["brightness","contrast","saturate","opacity"]);function Gw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(na)||[];if(!r)return e;const i=n.replace(r,"");let o=Ww.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Kw=/([a-z-]*)\(.*?\)/g,lu={...mn,getAnimatableNone:e=>{const t=e.match(Kw);return t?t.map(Gw).join(" "):e}},Yw={...xg,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:lu,WebkitFilter:lu},Oc=e=>Yw[e];function s0(e,t){let n=Oc(e);return n!==lu&&(n=mn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const a0=e=>/^0[^.\s]+$/.test(e);function Qw(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||a0(e)}function Xw(e,t,n,r){const i=au(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),Qw(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];o[c]=s0(t,a)}return o}function Zw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function $c(e,t){return e[t]||e.default||e}const qw={skipAnimations:!1},Bc=(e,t,n,r={})=>i=>{const o=$c(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Ln(s);const l=Xw(t,e,n,o),u=l[0],c=l[l.length-1],d=au(e,u),f=au(e,c);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Zw(o)||(g={...g,...Hw(e,g)}),g.duration&&(g.duration=Ln(g.duration)),g.repeatDelay&&(g.repeatDelay=Ln(g.repeatDelay)),!d||!f||G2.current||o.type===!1||qw.skipAnimations)return zw(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=_w(t,e,g);if(v)return v}return bs(g)};function Ts(e){return!!(Oe(e)&&e.add)}const l0=e=>/^\-?\d*\.?\d+$/.test(e);function Uc(e,t){e.indexOf(t)===-1&&e.push(t)}function Hc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Wc{constructor(){this.subscriptions=[]}add(t){return Uc(this.subscriptions,t),()=>Hc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jw=e=>!isNaN(parseFloat(e));class e5{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=be;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,G.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>G.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Jw(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Wc);const r=this.events[t].add(n);return t==="change"?()=>{r(),G.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?r0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fr(e,t){return new e5(e,t)}const u0=e=>t=>t.test(e),t5={test:e=>e==="auto",parse:e=>e},c0=[Gn,I,bt,Ht,l2,a2,t5],Qr=e=>c0.find(u0(e)),n5=[...c0,Fe,mn],r5=e=>n5.find(u0(e));function i5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fr(n))}function o5(e,t){const n=ia(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=S2(o[s]);i5(e,s,a)}}function s5(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(l0(c)||a0(c))?c=parseFloat(c):!r5(c)&&mn.test(u)&&(c=s0(l,u)),e.addValue(l,Fr(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function a5(e,t){return t?(t[e]||t.default||t).from:void 0}function l5(e,t,n){const r={};for(const i in e){const o=a5(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function u5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function c5(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function d0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),g=a[d];if(!f||g===void 0||c&&u5(c,d))continue;const v={delay:n,elapsed:0,...$c(o||{},d)};if(window.HandoffAppearAnimations){const y=e.getProps()[fg];if(y){const p=window.HandoffAppearAnimations(y,d,f,G);p!==null&&(v.elapsed=p,v.isHandoff=!0)}}let x=!v.isHandoff&&!c5(f,g);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(Bc(d,f,g,e.shouldReduceMotion&&Wn.has(d)?{type:!1}:v));const S=f.animation;Ts(l)&&(l.add(d),S.then(()=>l.remove(d))),u.push(S)}return s&&Promise.all(u).then(()=>{s&&o5(e,s)}),u}function uu(e,t,n={}){const r=ia(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(d0(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=i;return d5(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function d5(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(f5).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(uu(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function f5(e,t){return e.sortNodePosition(t)}function p5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>uu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=uu(e,t,n);else{const i=typeof t=="function"?ia(e,t,n.custom):t;r=Promise.all(d0(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const h5=[...Tc].reverse(),m5=Tc.length;function g5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>p5(e,n,r)))}function y5(e){let t=g5(e);const n=x5();let r=!0;const i=(l,u)=>{const c=ia(e,u);if(c){const{transition:d,transitionEnd:f,...g}=c;l={...l,...g,...f}}return l};function o(l){t=l(e)}function s(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],g=new Set;let v={},x=1/0;for(let y=0;y<m5;y++){const p=h5[y],h=n[p],w=c[p]!==void 0?c[p]:d[p],P=Ni(w),T=p===u?h.isActive:null;T===!1&&(x=y);let b=w===d[p]&&w!==c[p]&&P;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...v},!h.isActive&&T===null||!w&&!h.prevProp||ea(w)||typeof w=="boolean")continue;let R=v5(h.prevProp,w)||p===u&&h.isActive&&!b&&P||y>x&&P,V=!1;const oe=Array.isArray(w)?w:[w];let de=oe.reduce(i,{});T===!1&&(de={});const{prevResolvedValues:ve={}}=h,se={...ve,...de},yt=Z=>{R=!0,g.has(Z)&&(V=!0,g.delete(Z)),h.needsAnimating[Z]=!0};for(const Z in se){const Se=de[Z],F=ve[Z];if(v.hasOwnProperty(Z))continue;let A=!1;Ss(Se)&&Ss(F)?A=!Lg(Se,F):A=Se!==F,A?Se!==void 0?yt(Z):g.add(Z):Se!==void 0&&g.has(Z)?yt(Z):h.protectedKeys[Z]=!0}h.prevProp=w,h.prevResolvedValues=de,h.isActive&&(v={...v,...de}),r&&e.blockInitialAnimation&&(R=!1),R&&(!b||V)&&f.push(...oe.map(Z=>({animation:Z,options:{type:p,...l}})))}if(g.size){const y={};g.forEach(p=>{const h=e.getBaseTarget(p);h!==void 0&&(y[p]=h)}),f.push({animation:y})}let S=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(f):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=s(c,l);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function v5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Lg(t,e):!1}function kn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function x5(){return{animate:kn(!0),whileInView:kn(),whileHover:kn(),whileTap:kn(),whileDrag:kn(),whileFocus:kn(),exit:kn()}}class w5 extends xn{constructor(t){super(t),t.animationState||(t.animationState=y5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ea(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let k5=0;class S5 extends xn{constructor(){super(...arguments),this.id=k5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const C5={animation:{Feature:w5},exit:{Feature:S5}},Vf=(e,t)=>Math.abs(e-t);function P5(e,t){const n=Vf(e.x,t.x),r=Vf(e.y,t.y);return Math.sqrt(n**2+r**2)}class f0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Ka(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=P5(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=d,{timestamp:x}=be;this.history.push({...v,timestamp:x});const{onStart:S,onMove:y}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ga(f,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Ka(d.type==="pointercancel"?this.lastMoveEventInfo:Ga(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,S),v&&v(d,S)},!Fg(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ra(t),a=Ga(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=be;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Ka(a,this.history)),this.removeListeners=cn(Lt(this.contextWindow,"pointermove",this.handlePointerMove),Lt(this.contextWindow,"pointerup",this.handlePointerUp),Lt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ot(this.updatePoint)}}function Ga(e,t){return t?{point:t(e.point)}:e}function If(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ka({point:e},t){return{point:e,delta:If(e,p0(t)),offset:If(e,b5(t)),velocity:T5(t,.1)}}function b5(e){return e[0]}function p0(e){return e[e.length-1]}function T5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=p0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ln(t)));)n--;if(!r)return{x:0,y:0};const o=Vt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ke(e){return e.max-e.min}function cu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Nf(e,t,n,r=.5){e.origin=r,e.originPoint=J(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),(cu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=J(n.min,n.max,e.origin)-e.originPoint,(cu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function hi(e,t,n,r){Nf(e.x,t.x,n.x,r?r.originX:void 0),Nf(e.y,t.y,n.y,r?r.originY:void 0)}function _f(e,t,n){e.min=n.min+t.min,e.max=e.min+Ke(t)}function E5(e,t,n){_f(e.x,t.x,n.x),_f(e.y,t.y,n.y)}function zf(e,t,n){e.min=t.min-n.min,e.max=e.min+Ke(t)}function mi(e,t,n){zf(e.x,t.x,n.x),zf(e.y,t.y,n.y)}function j5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?J(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?J(n,e,r.max):Math.min(e,n)),e}function Of(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function F5(e,{top:t,left:n,bottom:r,right:i}){return{x:Of(e.x,n,i),y:Of(e.y,t,r)}}function $f(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function D5(e,t){return{x:$f(e.x,t.x),y:$f(e.y,t.y)}}function M5(e,t){let n=.5;const r=Ke(e),i=Ke(t);return i>r?n=zi(t.min,t.max-r,e.min):r>i&&(n=zi(e.min,e.max-i,t.min)),hn(0,1,n)}function A5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const du=.35;function R5(e=du){return e===!1?e=0:e===!0&&(e=du),{x:Bf(e,"left","right"),y:Bf(e,"top","bottom")}}function Bf(e,t,n){return{min:Uf(e,t),max:Uf(e,n)}}function Uf(e,t){return typeof e=="number"?e:e[t]||0}const Hf=()=>({translate:0,scale:1,origin:0,originPoint:0}),fr=()=>({x:Hf(),y:Hf()}),Wf=()=>({min:0,max:0}),ae=()=>({x:Wf(),y:Wf()});function Je(e){return[e("x"),e("y")]}function h0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function L5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function V5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ya(e){return e===void 0||e===1}function fu({scale:e,scaleX:t,scaleY:n}){return!Ya(e)||!Ya(t)||!Ya(n)}function Pn(e){return fu(e)||m0(e)||e.z||e.rotate||e.rotateX||e.rotateY}function m0(e){return Gf(e.x)||Gf(e.y)}function Gf(e){return e&&e!=="0%"}function Es(e,t,n){const r=e-n,i=t*r;return n+i}function Kf(e,t,n,r,i){return i!==void 0&&(e=Es(e,i,r)),Es(e,n,r)+t}function pu(e,t=0,n=1,r,i){e.min=Kf(e.min,t,n,r,i),e.max=Kf(e.max,t,n,r,i)}function g0(e,{x:t,y:n}){pu(e.x,t.translate,t.scale,t.originPoint),pu(e.y,n.translate,n.scale,n.originPoint)}function I5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&pr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,g0(e,s)),r&&Pn(o.latestValues)&&pr(e,o.latestValues))}t.x=Yf(t.x),t.y=Yf(t.y)}function Yf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Yt(e,t){e.min=e.min+t,e.max=e.max+t}function Qf(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=J(e.min,e.max,o);pu(e,t[n],t[r],s,t.scale)}const N5=["x","scaleX","originX"],_5=["y","scaleY","originY"];function pr(e,t){Qf(e.x,t,N5),Qf(e.y,t,_5)}function y0(e,t){return h0(V5(e.getBoundingClientRect(),t))}function z5(e,t,n){const r=y0(e,n),{scroll:i}=t;return i&&(Yt(r.x,i.offset.x),Yt(r.y,i.offset.y)),r}const v0=({current:e})=>e?e.ownerDocument.defaultView:null,O5=new WeakMap;class $5{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ra(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:g,onDragStart:v}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Mg(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Je(S=>{let y=this.getAxisMotionValue(S).get()||0;if(bt.test(y)){const{projection:p}=this.visualElement;if(p&&p.layout){const h=p.layout.layoutBox[S];h&&(y=Ke(h)*(parseFloat(y)/100))}}this.originPoint[S]=y}),v&&G.update(()=>v(c,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=d;if(g&&this.currentDirection===null){this.currentDirection=B5(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Je(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new f0(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:v0(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&G.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!So(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=j5(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&cr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=F5(i.layoutBox,n):this.constraints=!1,this.elastic=R5(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Je(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=A5(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!cr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=z5(r,i.root,this.visualElement.getTransformPagePoint());let s=D5(i.layout.layoutBox,o);if(n){const a=n(L5(s));this.hasMutatedConstraints=!!a,a&&(s=h0(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Je(c=>{if(!So(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Bc(t,r,0,n))}stopAnimation(){Je(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Je(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Je(n=>{const{drag:r}=this.getProps();if(!So(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-J(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!cr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Je(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=M5({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Je(s=>{if(!So(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(J(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;O5.set(this.visualElement,this);const t=this.visualElement.current,n=Lt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();cr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=At(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Je(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=du,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function So(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function B5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class U5 extends xn{constructor(t){super(t),this.removeGroupControls=ie,this.removeListeners=ie,this.controls=new $5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ie}unmount(){this.removeGroupControls(),this.removeListeners()}}const Xf=e=>(t,n)=>{e&&G.update(()=>e(t,n))};class H5 extends xn{constructor(){super(...arguments),this.removePointerDownListener=ie}onPointerDown(t){this.session=new f0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:v0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Xf(t),onStart:Xf(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&G.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Lt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function W5(){const e=k.useContext(qs);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=k.useId();return k.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const $o={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Xr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(I.test(e))e=parseFloat(e);else return e;const n=Zf(e,t.target.x),r=Zf(e,t.target.y);return`${n}% ${r}%`}},G5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=mn.parse(e);if(i.length>5)return r;const o=mn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=J(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class K5 extends Ue.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;e2(Y5),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),$o.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||G.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function x0(e){const[t,n]=W5(),r=k.useContext(jc);return Ue.createElement(K5,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(hg),isPresent:t,safeToRemove:n})}const Y5={borderRadius:{...Xr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xr,borderTopRightRadius:Xr,borderBottomLeftRadius:Xr,borderBottomRightRadius:Xr,boxShadow:G5},w0=["TopLeft","TopRight","BottomLeft","BottomRight"],Q5=w0.length,qf=e=>typeof e=="string"?parseFloat(e):e,Jf=e=>typeof e=="number"||I.test(e);function X5(e,t,n,r,i,o){i?(e.opacity=J(0,n.opacity!==void 0?n.opacity:1,Z5(r)),e.opacityExit=J(t.opacity!==void 0?t.opacity:1,0,q5(r))):o&&(e.opacity=J(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Q5;s++){const a=`border${w0[s]}Radius`;let l=ep(t,a),u=ep(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Jf(l)===Jf(u)?(e[a]=Math.max(J(qf(l),qf(u),r),0),(bt.test(u)||bt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=J(t.rotate||0,n.rotate||0,r))}function ep(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Z5=k0(0,.5,Ug),q5=k0(.5,.95,ie);function k0(e,t,n){return r=>r<e?0:r>t?1:n(zi(e,t,r))}function tp(e,t){e.min=t.min,e.max=t.max}function qe(e,t){tp(e.x,t.x),tp(e.y,t.y)}function np(e,t,n,r,i){return e-=t,e=Es(e,1/n,r),i!==void 0&&(e=Es(e,1/i,r)),e}function J5(e,t=0,n=1,r=.5,i,o=e,s=e){if(bt.test(t)&&(t=parseFloat(t),t=J(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=J(o.min,o.max,r);e===o&&(a-=t),e.min=np(e.min,t,n,a,i),e.max=np(e.max,t,n,a,i)}function rp(e,t,[n,r,i],o,s){J5(e,t[n],t[r],t[i],t.scale,o,s)}const ek=["x","scaleX","originX"],tk=["y","scaleY","originY"];function ip(e,t,n,r){rp(e.x,t,ek,n?n.x:void 0,r?r.x:void 0),rp(e.y,t,tk,n?n.y:void 0,r?r.y:void 0)}function op(e){return e.translate===0&&e.scale===1}function S0(e){return op(e.x)&&op(e.y)}function nk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function C0(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function sp(e){return Ke(e.x)/Ke(e.y)}class rk{constructor(){this.members=[]}add(t){Uc(this.members,t),t.scheduleRender()}remove(t){if(Hc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ap(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const ik=(e,t)=>e.depth-t.depth;class ok{constructor(){this.children=[],this.isDirty=!1}add(t){Uc(this.children,t),this.isDirty=!0}remove(t){Hc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ik),this.isDirty=!1,this.children.forEach(t)}}function sk(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Ot(r),e(o-t))};return G.read(r,!0),()=>Ot(r)}function ak(e){window.MotionDebug&&window.MotionDebug.record(e)}function lk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function uk(e,t,n){const r=Oe(e)?e:Fr(e);return r.start(Bc("",r,t,n)),r.animation}const lp=["","X","Y","Z"],ck={visibility:"hidden"},up=1e3;let dk=0;const bn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function P0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=dk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bn.totalNodes=bn.resolvedTargetDeltas=bn.recalculatedProjection=0,this.nodes.forEach(hk),this.nodes.forEach(xk),this.nodes.forEach(wk),this.nodes.forEach(mk),ak(bn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ok)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Wc),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=lk(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=sk(f,250),$o.hasAnimatedSinceResize&&($o.hasAnimatedSinceResize=!1,this.nodes.forEach(dp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||bk,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=c.getProps(),p=!this.targetLayout||!C0(this.targetLayout,v)||g,h=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const w={...$c(x,"layout"),onPlay:S,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||dp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ot(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cp);return}this.isUpdating||this.nodes.forEach(yk),this.isUpdating=!1,this.nodes.forEach(vk),this.nodes.forEach(fk),this.nodes.forEach(pk),this.clearAllSnapshots();const a=performance.now();be.delta=hn(0,1e3/60,a-be.timestamp),be.timestamp=a,be.isProcessing=!0,_a.update.process(be),_a.preRender.process(be),_a.render.process(be),be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(gk),this.sharedNodes.forEach(Sk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!S0(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Pn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Tk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ae();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Yt(a.x,l.offset.x),Yt(a.y,l.offset.y)),a}removeElementScroll(s){const a=ae();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){qe(a,s);const{scroll:f}=this.root;f&&(Yt(a.x,-f.offset.x),Yt(a.y,-f.offset.y))}Yt(a.x,c.offset.x),Yt(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=ae();qe(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&pr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Pn(c.latestValues)&&pr(l,c.latestValues)}return Pn(this.latestValues)&&pr(l,this.latestValues),l}removeTransform(s){const a=ae();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Pn(u.latestValues))continue;fu(u.latestValues)&&u.updateSnapshot();const c=ae(),d=u.measurePageBox();qe(c,d),ip(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Pn(this.latestValues)&&ip(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=be.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),mi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),g0(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),mi(this.relativeTargetOrigin,this.target,g.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||fu(this.parent.latestValues)||m0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===be.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;I5(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=fr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=fr(),this.projectionDeltaWithTransform=fr());const x=this.projectionTransform;hi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=ap(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),bn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=fr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ae(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,S=this.getStack(),y=!S||S.members.length<=1,p=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(Pk));this.animationProgress=0;let h;this.mixTargetDelta=w=>{const P=w/1e3;fp(d.x,s.x,P),fp(d.y,s.y,P),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ck(this.relativeTarget,this.relativeTargetOrigin,f,P),h&&nk(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=ae()),qe(h,this.relativeTarget)),x&&(this.animationValues=c,X5(c,u,this.latestValues,P,p,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ot(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{$o.hasAnimatedSinceResize=!0,this.currentAnimation=uk(0,up,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(up),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&b0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ae();const d=Ke(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Ke(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}qe(a,l),pr(a,c),hi(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new rk),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<lp.length;c++){const d="rotate"+lp[c];l[d]&&(u[d]=l[d],s.setStaticValue(d,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ck;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Oo(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Oo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Pn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=ap(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ws){if(f[x]===void 0)continue;const{correct:S,applyTo:y}=ws[x],p=u.transform==="none"?f[x]:S(f[x],d);if(y){const h=y.length;for(let w=0;w<h;w++)u[y[w]]=p}else u[x]=p}return this.options.layoutId&&(u.pointerEvents=d===this?Oo(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(cp),this.root.sharedNodes.clear()}}}function fk(e){e.updateLayout()}function pk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Je(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Ke(f);f.min=r[d].min,f.max=f.min+g}):b0(o,n.layoutBox,r)&&Je(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Ke(r[d]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=fr();hi(a,r,n.layoutBox);const l=fr();s?hi(l,e.applyTransform(i,!0),n.measuredBox):hi(l,r,n.layoutBox);const u=!S0(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const v=ae();mi(v,n.layoutBox,f.layoutBox);const x=ae();mi(x,r,g.layoutBox),C0(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function hk(e){bn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function mk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function gk(e){e.clearSnapshot()}function cp(e){e.clearMeasurements()}function yk(e){e.isLayoutDirty=!1}function vk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xk(e){e.resolveTargetDelta()}function wk(e){e.calcProjection()}function kk(e){e.resetRotation()}function Sk(e){e.removeLeadSnapshot()}function fp(e,t,n){e.translate=J(t.translate,0,n),e.scale=J(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function pp(e,t,n,r){e.min=J(t.min,n.min,r),e.max=J(t.max,n.max,r)}function Ck(e,t,n,r){pp(e.x,t.x,n.x,r),pp(e.y,t.y,n.y,r)}function Pk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const bk={duration:.45,ease:[.4,0,.1,1]},hp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),mp=hp("applewebkit/")&&!hp("chrome/")?Math.round:ie;function gp(e){e.min=mp(e.min),e.max=mp(e.max)}function Tk(e){gp(e.x),gp(e.y)}function b0(e,t,n){return e==="position"||e==="preserve-aspect"&&!cu(sp(t),sp(n),.2)}const Ek=P0({attachResizeListener:(e,t)=>At(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qa={current:void 0},T0=P0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Qa.current){const e=new Ek({});e.mount(window),e.setOptions({layoutScroll:!0}),Qa.current=e}return Qa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),jk={pan:{Feature:H5},drag:{Feature:U5,ProjectionNode:T0,MeasureLayout:x0}},Fk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Dk(e){const t=Fk.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function hu(e,t,n=1){const[r,i]=Dk(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return l0(s)?parseFloat(s):s}else return ru(i)?hu(i,t,n+1):i}function Mk(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!ru(o))return;const s=hu(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!ru(o))continue;const s=hu(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const Ak=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),E0=e=>Ak.has(e),Rk=e=>Object.keys(e).some(E0),yp=e=>e===Gn||e===I,vp=(e,t)=>parseFloat(e.split(", ")[t]),xp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return vp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?vp(o[1],e):0}},Lk=new Set(["x","y","z"]),Vk=Xi.filter(e=>!Lk.has(e));function Ik(e){const t=[];return Vk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Dr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:xp(4,13),y:xp(5,14)};Dr.translateX=Dr.x;Dr.translateY=Dr.y;const Nk=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Dr[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Dr[u](l,o)}),e},_k=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(E0);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Qr(c);const f=t[l];let g;if(Ss(f)){const v=f.length,x=f[0]===null?1:0;c=f[x],d=Qr(c);for(let S=x;S<v&&f[S]!==null;S++)g?Ic(Qr(f[S])===g):g=Qr(f[S])}else g=Qr(f);if(d!==g)if(yp(d)&&yp(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&g===I&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(c===0||f===0)?c===0?u.set(g.transform(c)):t[l]=d.transform(f):(s||(o=Ik(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=Nk(t,e,a);return o.length&&o.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Js&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function zk(e,t,n,r){return Rk(t)?_k(e,t,n,r):{target:t,transitionEnd:r}}const Ok=(e,t,n,r)=>{const i=Mk(e,t,r);return t=i.target,r=i.transitionEnd,zk(e,t,n,r)},mu={current:null},j0={current:!1};function $k(){if(j0.current=!0,!!Js)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>mu.current=e.matches;e.addListener(t),t()}else mu.current=!1}function Bk(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Oe(o))e.addValue(i,o),Ts(r)&&r.add(i);else if(Oe(s))e.addValue(i,Fr(o,{owner:e})),Ts(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Fr(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const wp=new WeakMap,F0=Object.keys(_i),Uk=F0.length,kp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Hk=Ec.length;class Wk{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>G.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=ta(n),this.isVariantNode=pg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];a[d]!==void 0&&Oe(f)&&(f.set(a[d],!1),Ts(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,wp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),j0.current||$k(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){wp.delete(this.current),this.projection&&this.projection.unmount(),Ot(this.notifyUpdate),Ot(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Wn.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&G.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Uk;l++){const u=F0[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:g}=_i[u];f&&(s=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&cr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<kp.length;r++){const i=kp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Bk(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Hk;r++){const i=Ec[r],o=this.props[i];(Ni(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Fr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Vc(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Oe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Wc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class D0 extends Wk{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=l5(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){s5(this,r,s);const a=Ok(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Gk(e){return window.getComputedStyle(e)}class Kk extends D0{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Wn.has(n)){const r=Oc(n);return r&&r.default||0}else{const r=Gk(t),i=(yg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return y0(t,n)}build(t,n,r,i){Dc(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Lc(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Oe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Cg(t,n,r,i)}}class Yk extends D0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Wn.has(n)){const r=Oc(n);return r&&r.default||0}return n=Pg.has(n)?n:bc(n),t.getAttribute(n)}measureInstanceViewportBox(){return ae()}scrapeMotionValuesFromProps(t,n){return Tg(t,n)}build(t,n,r,i){Ac(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){bg(t,n,r,i)}mount(t){this.isSVGTag=Rc(t.tagName),super.mount(t)}}const Qk=(e,t)=>Fc(e)?new Yk(t,{enableHardwareAcceleration:!1}):new Kk(t,{enableHardwareAcceleration:!0}),Xk={layout:{ProjectionNode:T0,MeasureLayout:x0}},Zk={...C5,...U2,...jk,...Xk},D=qx((e,t)=>D2(e,t,Zk,Qk));function M0(){const e=k.useRef(!1);return Pc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function qk(){const e=M0(),[t,n]=k.useState(0),r=k.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.useCallback(()=>G.postRender(r),[r]),t]}class Jk extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function eS({children:e,isPresent:t}){const n=k.useId(),r=k.useRef(null),i=k.useRef({width:0,height:0,top:0,left:0});return k.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),k.createElement(Jk,{isPresent:t,childRef:r,sizeRef:i},k.cloneElement(e,{ref:r}))}const Xa=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Eg(tS),l=k.useId(),u=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?void 0:[n]);return k.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),k.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=k.createElement(eS,{isPresent:n},e)),k.createElement(qs.Provider,{value:u},e)};function tS(){return new Map}function nS(e){return k.useEffect(()=>()=>e(),[])}const Tn=e=>e.key||"";function rS(e,t){e.forEach(n=>{const r=Tn(n);t.set(r,n)})}function iS(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const oS=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=k.useContext(jc).forceRender||qk()[0],l=M0(),u=iS(e);let c=u;const d=k.useRef(new Map).current,f=k.useRef(c),g=k.useRef(new Map).current,v=k.useRef(!0);if(Pc(()=>{v.current=!1,rS(u,g),f.current=c}),nS(()=>{v.current=!0,g.clear(),d.clear()}),v.current)return k.createElement(k.Fragment,null,c.map(p=>k.createElement(Xa,{key:Tn(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},p)));c=[...c];const x=f.current.map(Tn),S=u.map(Tn),y=x.length;for(let p=0;p<y;p++){const h=x[p];S.indexOf(h)===-1&&!d.has(h)&&d.set(h,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((p,h)=>{if(S.indexOf(h)!==-1)return;const w=g.get(h);if(!w)return;const P=x.indexOf(h);let T=p;if(!T){const b=()=>{d.delete(h);const E=Array.from(g.keys()).filter(R=>!S.includes(R));if(E.forEach(R=>g.delete(R)),f.current=u.filter(R=>{const V=Tn(R);return V===h||E.includes(V)}),!d.size){if(l.current===!1)return;a(),r&&r()}};T=k.createElement(Xa,{key:Tn(w),isPresent:!1,onExitComplete:b,custom:t,presenceAffectsLayout:o,mode:s},w),d.set(h,T)}c.splice(P,0,T)}),c=c.map(p=>{const h=p.key;return d.has(h)?p:k.createElement(Xa,{key:Tn(p),isPresent:!0,presenceAffectsLayout:o,mode:s},p)}),k.createElement(k.Fragment,null,d.size?c:c.map(p=>k.cloneElement(p)))};var Ee=function(){return Ee=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ee.apply(this,arguments)};function Oi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",gi="-moz-",U="-webkit-",A0="comm",oa="rule",Gc="decl",sS="@import",R0="@keyframes",aS="@layer",L0=Math.abs,Kc=String.fromCharCode,gu=Object.assign;function lS(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function V0(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function Bo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function I0(e){return e.length}function ni(e,t){return t.push(e),e}function uS(e,t){return e.map(t).join("")}function Sp(e,t){return e.filter(function(n){return!jt(n,t)})}var sa=1,Ar=1,N0=0,st=0,le=0,Or="";function aa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:sa,column:Ar,length:s,return:"",siblings:a}}function Wt(e,t){return gu(aa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yn(e){for(;e.root;)e=Wt(e.root,{children:[e]});ni(e,e.siblings)}function cS(){return le}function dS(){return le=st>0?ge(Or,--st):0,Ar--,le===10&&(Ar=1,sa--),le}function mt(){return le=st<N0?ge(Or,st++):0,Ar++,le===10&&(Ar=1,sa++),le}function Vn(){return ge(Or,st)}function Uo(){return st}function la(e,t){return Mr(Or,e,t)}function yu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fS(e){return sa=Ar=1,N0=kt(Or=e),st=0,[]}function pS(e){return Or="",e}function Za(e){return V0(la(st-1,vu(e===91?e+2:e===40?e+1:e)))}function hS(e){for(;(le=Vn())&&le<33;)mt();return yu(e)>2||yu(le)>3?"":" "}function mS(e,t){for(;--t&&mt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return la(e,Uo()+(t<6&&Vn()==32&&mt()==32))}function vu(e){for(;mt();)switch(le){case e:return st;case 34:case 39:e!==34&&e!==39&&vu(le);break;case 40:e===41&&vu(e);break;case 92:mt();break}return st}function gS(e,t){for(;mt()&&e+le!==57;)if(e+le===84&&Vn()===47)break;return"/*"+la(t,st-1)+"*"+Kc(e===47?e:mt())}function yS(e){for(;!yu(Vn());)mt();return la(e,st)}function vS(e){return pS(Ho("",null,null,null,[""],e=fS(e),0,[0],e))}function Ho(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,g=0,v=0,x=1,S=1,y=1,p=0,h="",w=i,P=o,T=r,b=h;S;)switch(v=p,p=mt()){case 40:if(v!=108&&ge(b,d-1)==58){Bo(b+=_(Za(p),"&","&\f"),"&\f",L0(u?a[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:b+=Za(p);break;case 9:case 10:case 13:case 32:b+=hS(v);break;case 92:b+=mS(Uo()-1,7);continue;case 47:switch(Vn()){case 42:case 47:ni(xS(gS(mt(),Uo()),t,n,l),l);break;default:b+="/"}break;case 123*x:a[u++]=kt(b)*y;case 125*x:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:y==-1&&(b=_(b,/\f/g,"")),g>0&&kt(b)-d&&ni(g>32?Pp(b+";",r,n,d-1,l):Pp(_(b," ","")+";",r,n,d-2,l),l);break;case 59:b+=";";default:if(ni(T=Cp(b,t,n,u,c,i,a,h,w=[],P=[],d,o),o),p===123)if(c===0)Ho(b,t,T,T,w,o,d,a,P);else switch(f===99&&ge(b,3)===110?100:f){case 100:case 108:case 109:case 115:Ho(e,T,T,r&&ni(Cp(e,T,T,0,0,i,a,h,i,w=[],d,P),P),i,P,d,a,r?w:P);break;default:Ho(b,T,T,T,[""],P,0,a,P)}}u=c=g=0,x=y=1,h=b="",d=s;break;case 58:d=1+kt(b),g=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&dS()==125)continue}switch(b+=Kc(p),p*x){case 38:y=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(kt(b)-1)*y,y=1;break;case 64:Vn()===45&&(b+=Za(mt())),f=Vn(),c=d=kt(h=b+=yS(Uo())),p++;break;case 45:v===45&&kt(b)==2&&(x=0)}}return o}function Cp(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,g=i===0?o:[""],v=I0(g),x=0,S=0,y=0;x<r;++x)for(var p=0,h=Mr(e,f+1,f=L0(S=s[x])),w=e;p<v;++p)(w=V0(S>0?g[p]+" "+h:_(h,/&\f/g,g[p])))&&(l[y++]=w);return aa(e,t,n,i===0?oa:a,l,u,c,d)}function xS(e,t,n,r){return aa(e,t,n,A0,Kc(cS()),Mr(e,2,-2),0,r)}function Pp(e,t,n,r,i){return aa(e,t,n,Gc,Mr(e,0,r),Mr(e,r+1,-1),r,i)}function _0(e,t,n){switch(lS(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+gi+e+Y+e+e;case 5936:switch(ge(e,t+11)){case 114:return U+e+Y+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Y+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Y+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Y+e+e;case 6165:return U+e+Y+"flex-"+e+e;case 5187:return U+e+_(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return U+e+Y+"flex-item-"+_(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":Y+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return U+e+Y+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Y+_(e,"shrink","negative")+e;case 5292:return U+e+Y+_(e,"basis","preferred-size")+e;case 6060:return U+"box-"+_(e,"-grow","")+U+e+Y+_(e,"grow","positive")+e;case 4554:return U+_(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!jt(e,/flex-|baseline/))return Y+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return Y+_(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~Bo(e+(n=n[t].value),"span",0)?e:Y+_(e,"-start","")+e+Y+"grid-row-span:"+(~Bo(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":Y+_(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:Y+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+gi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bo(e,"stretch",0)?_0(_(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Y+i+":"+o+u+(s?Y+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ge(e,t+6)===121)return _(e,":",":"+U)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ge(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Y+"$2box$3")+e;case 100:return _(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function js(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wS(e,t,n,r){switch(e.type){case aS:if(e.children.length)break;case sS:case Gc:return e.return=e.return||e.value;case A0:return"";case R0:return e.return=e.value+"{"+js(e.children,r)+"}";case oa:if(!kt(e.value=e.props.join(",")))return""}return kt(n=js(e.children,r))?e.return=e.value+"{"+n+"}":""}function kS(e){var t=I0(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function SS(e){return function(t){t.root||(t=t.return)&&e(t)}}function CS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gc:e.return=_0(e.value,e.length,n);return;case R0:return js([Wt(e,{value:_(e.value,"@","@"+U)})],r);case oa:if(e.length)return uS(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(Wt(e,{props:[_(i,/:(read-\w+)/,":"+gi+"$1")]})),Yn(Wt(e,{props:[i]})),gu(e,{props:Sp(n,r)});break;case"::placeholder":Yn(Wt(e,{props:[_(i,/:(plac\w+)/,":"+U+"input-$1")]})),Yn(Wt(e,{props:[_(i,/:(plac\w+)/,":"+gi+"$1")]})),Yn(Wt(e,{props:[_(i,/:(plac\w+)/,Y+"input-$1")]})),Yn(Wt(e,{props:[i]})),gu(e,{props:Sp(n,r)});break}return""})}}var PS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},Rr=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",z0="active",O0="data-styled-version",ua="6.1.19",Yc=`/*!sc*/
`,Fs=typeof window<"u"&&typeof document<"u",bS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),TS={},ca=Object.freeze([]),Lr=Object.freeze({});function $0(e,t,n){return n===void 0&&(n=Lr),e.theme!==n.theme&&e.theme||t||n.theme}var B0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ES=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jS=/(^-|-$)/g;function bp(e){return e.replace(ES,"-").replace(jS,"")}var FS=/(a)(d)/gi,Co=52,Tp=function(e){return String.fromCharCode(e+(e>25?39:97))};function xu(e){var t,n="";for(t=Math.abs(e);t>Co;t=t/Co|0)n=Tp(t%Co)+n;return(Tp(t%Co)+n).replace(FS,"$1-$2")}var qa,U0=5381,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},H0=function(e){return hr(U0,e)};function W0(e){return xu(H0(e)>>>0)}function DS(e){return e.displayName||e.name||"Component"}function Ja(e){return typeof e=="string"&&!0}var G0=typeof Symbol=="function"&&Symbol.for,K0=G0?Symbol.for("react.memo"):60115,MS=G0?Symbol.for("react.forward_ref"):60112,AS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LS=((qa={})[MS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qa[K0]=Y0,qa);function Ep(e){return("type"in(t=e)&&t.type.$$typeof)===K0?Y0:"$$typeof"in e?LS[e.$$typeof]:AS;var t}var VS=Object.defineProperty,IS=Object.getOwnPropertyNames,jp=Object.getOwnPropertySymbols,NS=Object.getOwnPropertyDescriptor,_S=Object.getPrototypeOf,Fp=Object.prototype;function Q0(e,t,n){if(typeof t!="string"){if(Fp){var r=_S(t);r&&r!==Fp&&Q0(e,r,n)}var i=IS(t);jp&&(i=i.concat(jp(t)));for(var o=Ep(e),s=Ep(t),a=0;a<i.length;++a){var l=i[a];if(!(l in RS||n&&n[l]||s&&l in s||o&&l in o)){var u=NS(t,l);try{VS(e,l,u)}catch{}}}}return e}function Vr(e){return typeof e=="function"}function Qc(e){return typeof e=="object"&&"styledComponentId"in e}function Mn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function $i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ku(e,t,n){if(n===void 0&&(n=!1),!n&&!$i(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ku(e[r],t[r]);else if($i(t))for(var r in t)e[r]=ku(e[r],t[r]);return e}function Xc(e,t){Object.defineProperty(e,"toString",{value:t})}function eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw eo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Yc);return n},e}(),Wo=new Map,Ds=new Map,Go=1,Po=function(e){if(Wo.has(e))return Wo.get(e);for(;Ds.has(Go);)Go++;var t=Go++;return Wo.set(e,t),Ds.set(t,e),t},OS=function(e,t){Go=t+1,Wo.set(e,t),Ds.set(t,e)},$S="style[".concat(Rr,"][").concat(O0,'="').concat(ua,'"]'),BS=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),US=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},HS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(BS);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(OS(c,u),US(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Dp=function(e){for(var t=document.querySelectorAll($S),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Rr)!==z0&&(HS(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function WS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Rr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Rr,z0),r.setAttribute(O0,ua);var s=WS();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},GS=function(){function e(t){this.element=X0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw eo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),KS=function(){function e(t){this.element=X0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),YS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Mp=Fs,QS={isServer:!Fs,useCSSOMInjection:!bS},Ms=function(){function e(t,n,r){t===void 0&&(t=Lr),n===void 0&&(n={});var i=this;this.options=Ee(Ee({},QS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fs&&Mp&&(Mp=!1,Dp(this)),Xc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(y){return Ds.get(y)}(d);if(f===void 0)return"continue";var g=o.names.get(f),v=s.getGroup(d);if(g===void 0||!g.size||v.length===0)return"continue";var x="".concat(Rr,".g").concat(d,'[id="').concat(f,'"]'),S="";g!==void 0&&g.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),l+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(Yc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Po(t)},e.prototype.rehydrate=function(){!this.server&&Fs&&Dp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ee(Ee({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new YS(i):r?new GS(i):new KS(i)}(this.options),new zS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Po(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Po(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Po(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),XS=/&/g,ZS=/^\s*\/\/.*$/gm;function Z0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Z0(n.children,t)),n})}function qS(e){var t,n,r,i=Lr,o=i.options,s=o===void 0?Lr:o,a=i.plugins,l=a===void 0?ca:a,u=function(f,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===oa&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(XS,n).replace(r,u))}),s.prefix&&c.push(CS),c.push(wS);var d=function(f,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(ZS,""),y=vS(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);s.namespace&&(y=Z0(y,s.namespace));var p=[];return js(y,kS(c.concat(SS(function(h){return p.push(h)})))),p};return d.hash=l.length?l.reduce(function(f,g){return g.name||eo(15),hr(f,g.name)},U0).toString():"",d}var JS=new Ms,Su=qS(),q0=Ue.createContext({shouldForwardProp:void 0,styleSheet:JS,stylis:Su});q0.Consumer;Ue.createContext(void 0);function Cu(){return k.useContext(q0)}var eC=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Su);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Xc(this,function(){throw eo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Su),this.name+t.hash},e}(),tC=function(e){return e>="A"&&e<="Z"};function Ap(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;tC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var J0=function(e){return e==null||e===!1||e===""},ey=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!J0(o)&&(Array.isArray(o)&&o.isCss||Vr(o)?r.push("".concat(Ap(i),":"),o,";"):$i(o)?r.push.apply(r,Oi(Oi(["".concat(i," {")],ey(o),!1),["}"],!1)):r.push("".concat(Ap(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in PS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dn(e,t,n,r){if(J0(e))return[];if(Qc(e))return[".".concat(e.styledComponentId)];if(Vr(e)){if(!Vr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return dn(i,t,n,r)}var o;return e instanceof eC?n?(e.inject(n,r),[e.getName(r)]):[e]:$i(e)?ey(e):Array.isArray(e)?Array.prototype.concat.apply(ca,e.map(function(s){return dn(s,t,n,r)})):[e.toString()]}function ty(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vr(n)&&!Qc(n))return!1}return!0}var nC=H0(ua),rC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ty(t),this.componentId=n,this.baseHash=hr(nC,n),this.baseStyle=r,Ms.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mn(i,this.staticRulesId);else{var o=wu(dn(this.rules,t,n,r)),s=xu(hr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Mn(i,s),this.staticRulesId=s}else{for(var l=hr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=wu(dn(d,t,n,r));l=hr(l,f+c),u+=f}}if(u){var g=xu(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Mn(i,g)}}return i},e}(),Zc=Ue.createContext(void 0);Zc.Consumer;var el={};function iC(e,t,n){var r=Qc(e),i=e,o=!Ja(e),s=t.attrs,a=s===void 0?ca:s,l=t.componentId,u=l===void 0?function(w,P){var T=typeof w!="string"?"sc":bp(w);el[T]=(el[T]||0)+1;var b="".concat(T,"-").concat(W0(ua+T+el[T]));return P?"".concat(P,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Ja(w)?"styled.".concat(w):"Styled(".concat(DS(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(bp(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,P){return x(w,P)&&S(w,P)}}else v=x}var y=new rC(n,f,r?i.componentStyle:void 0);function p(w,P){return function(T,b,E){var R=T.attrs,V=T.componentStyle,oe=T.defaultProps,de=T.foldedComponentIds,ve=T.styledComponentId,se=T.target,yt=Ue.useContext(Zc),Z=Cu(),Se=T.shouldForwardProp||Z.shouldForwardProp,F=$0(b,yt,oe)||Lr,A=function(at,fe,Xe){for(var wn,lt=Ee(Ee({},fe),{className:void 0,theme:Xe}),Bt=0;Bt<at.length;Bt+=1){var Ze=Vr(wn=at[Bt])?wn(lt):wn;for(var Tt in Ze)lt[Tt]=Tt==="className"?Mn(lt[Tt],Ze[Tt]):Tt==="style"?Ee(Ee({},lt[Tt]),Ze[Tt]):Ze[Tt]}return fe.className&&(lt.className=Mn(lt.className,fe.className)),lt}(R,b,F),N=A.as||se,L={};for(var $ in A)A[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&A.theme===F||($==="forwardedAs"?L.as=A.forwardedAs:Se&&!Se($,N)||(L[$]=A[$]));var vt=function(at,fe){var Xe=Cu(),wn=at.generateAndInjectStyles(fe,Xe.styleSheet,Xe.stylis);return wn}(V,A),Le=Mn(de,ve);return vt&&(Le+=" "+vt),A.className&&(Le+=" "+A.className),L[Ja(N)&&!B0.has(N)?"class":"className"]=Le,E&&(L.ref=E),k.createElement(N,L)}(h,w,P)}p.displayName=d;var h=Ue.forwardRef(p);return h.attrs=g,h.componentStyle=y,h.displayName=d,h.shouldForwardProp=v,h.foldedComponentIds=r?Mn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=f,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var T=[],b=1;b<arguments.length;b++)T[b-1]=arguments[b];for(var E=0,R=T;E<R.length;E++)ku(P,R[E],!0);return P}({},i.defaultProps,w):w}}),Xc(h,function(){return".".concat(h.styledComponentId)}),o&&Q0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Rp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Lp=function(e){return Object.assign(e,{isCss:!0})};function ny(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vr(e)||$i(e))return Lp(dn(Rp(ca,Oi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?dn(r):Lp(dn(Rp(r,t)))}function Pu(e,t,n){if(n===void 0&&(n=Lr),!t)throw eo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,ny.apply(void 0,Oi([i],o,!1)))};return r.attrs=function(i){return Pu(e,t,Ee(Ee({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Pu(e,t,Ee(Ee({},n),i))},r}var ry=function(e){return Pu(iC,e)},C=ry;B0.forEach(function(e){C[e]=ry(e)});var oC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ty(t),Ms.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(wu(dn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ms.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function sC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ny.apply(void 0,Oi([e],t,!1)),i="sc-global-".concat(W0(JSON.stringify(r))),o=new oC(r,i),s=function(l){var u=Cu(),c=Ue.useContext(Zc),d=Ue.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Ue.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,TS,c,f);else{var g=Ee(Ee({},u),{theme:$0(u,d,s.defaultProps)});o.renderStyles(l,g,c,f)}}return Ue.memo(s)}const aC=sC`
  @keyframes float {
    0% { 
      transform: translateY(100vh) rotate(0deg); 
    }
    100% { 
      transform: translateY(-100px) rotate(360deg); 
    }
  }

  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes textGlow {
    0% { 
      filter: brightness(1); 
    }
    100% { 
      filter: brightness(1.2); 
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  // Enhanced focus styles
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 2px solid #FFD700;
    outline-offset: 2px;
    border-radius: 4px;
  }

  // Smooth transitions for interactive elements
  button, 
  input, 
  textarea, 
  select, 
  a {
    transition: all 0.3s ease;
  }
`;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},c)=>k.createElement("svg",{ref:c,...lC,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${uC(e)}`,a].join(" "),...u},[...t.map(([d,f])=>k.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=z("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=z("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=z("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=z("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=z("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=z("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=z("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=z("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=z("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=z("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=z("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=z("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=z("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=z("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=z("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=z("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=z("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),jC=C(D.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &.scrolled {
    background: rgba(0, 0, 0, 0.95);
    padding: 0.5rem 0;
  }
`,FC=C.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,DC=C(D.div)`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FFD700, #FF4444);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`,MC=C.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transform: translateX(${e=>e.isOpen?"0":"100%"});
    transition: transform 0.3s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`,Ip=C(D.li)`
  position: relative;
`,AC=C.a`
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 500;

  &:hover {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.1);
  }

  &.active {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #FFD700, #FF4444);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after,
  &.active::after {
    width: 80%;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,RC=C(ug)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 212, 0, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,LC=C.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`,VC=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!1),i=Qi();k.useEffect(()=>{const a=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{if(r(!1),i.pathname!=="/"){window.location.href=`/#${a}`;return}const l=document.getElementById(a);l&&l.scrollIntoView({behavior:"smooth"})},s=[{id:"home",label:"Home",icon:wC},{id:"about",label:"About",icon:bC},{id:"skills",label:"Skills",icon:Jc},{id:"projects",label:"Projects",icon:iy},{id:"experience",label:"Experience",icon:As},{id:"certifications",label:"Certifications",icon:As}];return m.jsx(jC,{className:e?"scrolled":"",initial:{y:-100},animate:{y:0},transition:{duration:.5},children:m.jsxs(FC,{children:[m.jsx(DC,{onClick:()=>o("home"),whileHover:{scale:1.1},whileTap:{scale:.95},children:"AJ"}),m.jsxs(MC,{isOpen:n,children:[s.map(a=>{const l=a.icon;return m.jsx(Ip,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsxs(AC,{href:`#${a.id}`,onClick:u=>{u.preventDefault(),o(a.id)},className:i.hash===`#${a.id}`?"active":"",children:[m.jsx(l,{}),a.label]})},a.id)}),m.jsx(Ip,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsxs(RC,{to:"/contact",onClick:()=>r(!1),children:[m.jsx(kr,{}),"Contact"]})})]}),m.jsx(LC,{onClick:()=>r(!n),"aria-label":"Toggle mobile menu",children:n?m.jsx(EC,{}):m.jsx(kC,{})})]})})},IC=C.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(68, 68, 255, 0.1), transparent);
  overflow: hidden;
`,NC=C(D.div)`
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`,_C=C(D.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGlow 3s ease-in-out infinite alternate;
  font-weight: 800;
  line-height: 1.2;
`,zC=C(D.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #cccccc;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.4;
`,OC=C(D.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(255, 212, 0, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,$C=C(D.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,tl=C(D.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #ffffff;
  
  svg {
    width: 16px;
    height: 16px;
    color: #FFD700;
  }
`,BC=C(D.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }
`,UC=C(D.div)`
  position: absolute;
  color: rgba(255, 212, 0, 0.3);
  pointer-events: none;
  
  svg {
    width: 30px;
    height: 30px;
  }
`,HC=()=>{const[e,t]=k.useState(""),n="Full Stack Web Developer & Data Analyst";k.useEffect(()=>{let a=0;const l=setInterval(()=>{a<=n.length?(t(n.slice(0,a)),a++):clearInterval(l)},100);return()=>clearInterval(l)},[]);const r=()=>{const a=document.getElementById("about");a&&a.scrollIntoView({behavior:"smooth"})},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},o={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},s=[{Icon:Ko,delay:0,x:"10%",y:"20%"},{Icon:Tu,delay:2,x:"85%",y:"30%"},{Icon:Yo,delay:4,x:"15%",y:"70%"},{Icon:Ko,delay:6,x:"80%",y:"75%"}];return m.jsxs(IC,{id:"home",children:[s.map(({Icon:a,delay:l,x:u,y:c},d)=>m.jsx(UC,{initial:{opacity:0,scale:0},animate:{opacity:[0,1,0],scale:[0,1,0],rotate:360},transition:{duration:4,delay:l,repeat:1/0,repeatDelay:8},style:{left:u,top:c},children:m.jsx(a,{})},d)),m.jsxs(NC,{variants:i,initial:"hidden",animate:"visible",children:[m.jsx(_C,{variants:o,children:"Abhishek Joshi"}),m.jsxs(zC,{variants:o,children:[e,m.jsx(D.span,{animate:{opacity:[1,0]},transition:{duration:.5,repeat:1/0,repeatType:"reverse"},children:"|"})]}),m.jsxs($C,{variants:o,children:[m.jsxs(tl,{whileHover:{scale:1.05,backgroundColor:"rgba(255, 212, 0, 0.2)"},children:[m.jsx(Ko,{}),"React & Node.js"]}),m.jsxs(tl,{whileHover:{scale:1.05,backgroundColor:"rgba(255, 68, 68, 0.2)"},children:[m.jsx(Tu,{}),"Data Analytics"]}),m.jsxs(tl,{whileHover:{scale:1.05,backgroundColor:"rgba(68, 68, 255, 0.2)"},children:[m.jsx(Yo,{}),"Problem Solver"]})]}),m.jsxs(OC,{variants:o,onClick:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(Yo,{}),"Explore My Work"]}),m.jsxs(BC,{variants:o,onClick:r,whileHover:{scale:1.1},children:[m.jsx("span",{children:"Scroll to discover"}),m.jsx(mC,{})]})]})]})},WC=C.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,GC=C(D.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`,KC=C(D.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,YC=C(D.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: center;
    color: #e0e0e0;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
`,QC=C(D.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`,XC=C(D.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #FFD700;
    box-shadow: 0 15px 30px rgba(255, 212, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  }
`,ZC=C.div`
  color: #FFD700;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
  }
`,qC=C.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 700;
`,JC=C.p`
  color: #cccccc;
  font-size: 0.9rem;
  margin: 0;
`,e4=C(D.div)`
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(68, 68, 255, 0.1));
  border: 1px solid rgba(255, 212, 0, 0.3);
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  position: relative;

  p {
    margin: 0;
    font-size: 1rem;
    color: #FFD700;
    font-weight: 600;
  }

  &::before {
    content: '⭐';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.2rem;
  }
`,t4=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},t={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},n=[{icon:xC,value:"8.21/10.0",label:"CGPA"},{icon:Bi,value:"Kanpur, UP",label:"Location"},{icon:qc,value:"2022-2026",label:"BTech CSE"},{icon:cy,value:"5⭐ & 200+",label:"HackerRank & LeetCode"}];return m.jsx(WC,{id:"about",children:m.jsxs(D.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[m.jsx(GC,{variants:t,children:"About Me"}),m.jsxs(KC,{children:[m.jsxs(YC,{variants:t,whileHover:{scale:1.02},children:[m.jsx("p",{children:"I am a passionate Full Stack Web Developer and Data Analyst with a solid foundation in modern technologies. Currently pursuing BTech in Computer Science from Maharana Pratap Engineering College with a CGPA of 8.21/10.0."}),m.jsx("p",{children:"I love building visually appealing and efficient websites while conducting through data analysis. My expertise spans across multiple programming languages and frameworks, with a strong focus on creating innovative solutions that make a difference."}),m.jsx(e4,{whileHover:{scale:1.05},whileTap:{scale:.95},children:m.jsx("p",{children:"“Passionate about turning complex problems into elegant solutions through code and data insights”"})})]}),m.jsx(QC,{variants:t,children:n.map((r,i)=>{const o=r.icon;return m.jsxs(XC,{variants:t,whileHover:{scale:1.05,rotateY:5,rotateX:5},whileTap:{scale:.95},children:[m.jsx(ZC,{children:m.jsx(o,{})}),m.jsx(qC,{children:r.value}),m.jsx(JC,{children:r.label})]},i)})})]})]})})},n4=C.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,r4=C(D.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`,i4=C(D.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,o4=C(D.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  border-left: 4px solid;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:nth-child(8n+1) { border-left-color: #FFD700; }
  &:nth-child(8n+2) { border-left-color: #FF4444; }
  &:nth-child(8n+3) { border-left-color: #4444FF; }
  &:nth-child(8n+4) { border-left-color: #00FF88; }
  &:nth-child(8n+5) { border-left-color: #FF6B6B; }
  &:nth-child(8n+6) { border-left-color: #4ECDC4; }
  &:nth-child(8n+7) { border-left-color: #45B7D1; }
  &:nth-child(8n+8) { border-left-color: #96CEB4; }

  &:hover {
    transform: translateY(-10px) translateX(10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,s4=C.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,a4=C.div`
  color: ${e=>e.color||"#FFD700"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,l4=C.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`,u4=C.div`
  position: relative;
  z-index: 2;
`,c4=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,d4=C(D.span)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 212, 0, 0.2);
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.05);
  }
`,f4=C.p`
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin: 1rem 0;
`,p4=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},t={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},n=[{icon:Jc,title:"Languages",description:"Core programming languages for versatile development",tags:["C/C++","Python","JavaScript","TypeScript"],color:"#FFD700"},{icon:vC,title:"Frontend",description:"Modern frontend technologies for responsive UIs",tags:["HTML5","CSS3","Tailwind CSS","React.js","Next.js"],color:"#FF4444"},{icon:uy,title:"Backend",description:"Server-side technologies for robust applications",tags:["Node.js","Express.js","REST APIs"],color:"#4444FF"},{icon:Tu,title:"Databases",description:"Data storage and management solutions",tags:["MySQL","MongoDB"],color:"#00FF88"},{icon:Rs,title:"Cloud Services",description:"Cloud platforms for scalable deployment",tags:["Google Cloud Platform","Microsoft Azure","AWS"],color:"#FF6B6B"},{icon:TC,title:"Tools & Analytics",description:"Development and analytics tools",tags:["Git","VS Code","Tableau","Power BI","Docker"],color:"#4ECDC4"},{icon:pC,title:"Core Concepts",description:"Fundamental computer science concepts",tags:["DSA","OOPs","Operating Systems","System Design"],color:"#45B7D1"},{icon:cy,title:"Achievements",description:"Programming challenges",tags:["200+ LeetCode","5⭐ HackerRank in C++, Python, Problem Solving"],color:"#96CEB4"}];return m.jsx(n4,{id:"skills",children:m.jsxs(D.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[m.jsx(r4,{variants:t,children:"Technical Skills"}),m.jsx(i4,{children:n.map((r,i)=>{const o=r.icon;return m.jsxs(o4,{variants:t,whileHover:{scale:1.02,rotateY:5},whileTap:{scale:.98},children:[m.jsxs(s4,{children:[m.jsx(a4,{color:r.color,children:m.jsx(o,{})}),m.jsx(l4,{children:r.title})]}),m.jsxs(u4,{children:[m.jsx(f4,{children:r.description}),m.jsx(c4,{children:r.tags.map((s,a)=>m.jsx(d4,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s},a))})]})]},i)})})]})})},h4=C.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,m4=C(D.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`,g4=C(D.div)`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #FFD700, #FF4444, #4444FF);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`,y4=C(D.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) .timeline-content {
    margin-right: auto;
    margin-left: 0;
    text-align: right;

    @media (max-width: 768px) {
      margin-left: 60px !important;
      margin-right: 0;
      text-align: left !important;
    }
  }

  &:nth-child(even) .timeline-content {
    margin-left: auto;
    margin-right: 0;

    @media (max-width: 768px) {
      margin-left: 60px !important;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`,v4=C(D.div)`
  width: 45%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
  }
`,x4=C.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,w4=C.div`
  color: ${e=>e.color||"#FFD700"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,k4=C.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`,S4=C.p`
  color: #FFD700;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`,C4=C.p`
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`,P4=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,b4=C(D.span)`
  background: ${e=>e.bgColor||"rgba(255, 212, 0, 0.2)"};
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${e=>e.borderColor||"rgba(255, 212, 0, 0.3)"};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`,T4=C.div`
  display: flex;
  gap: 1rem;
  justify-content: ${e=>e.align||"flex-start"};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`,E4=C(D.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,j4=C.div`
  position: absolute;
  left: 50%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(0, 0, 0, 0.8);

  &:nth-child(odd) { 
    background: #FFD700; 
    color: #000;
  }
  &:nth-child(even) { 
    background: #FF4444; 
    color: #fff;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 768px) {
    left: 20px !important;
  }
`,F4=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},t={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},n=[{icon:ay,title:"Heart Disease Prediction Web Application",date:"Jan 2025 - Feb 2025",description:"A sophisticated web application to predict heart disease risks using machine learning. Built with technologies and frameworks like React 18, Vite, CSS, Lucide Reactand ESLint.",techStack:[{name:"Python",bgColor:"rgba(255, 212, 0, 0.2)",borderColor:"rgba(255, 212, 0, 0.3)"},{name:"Machine Learning",bgColor:"rgba(68, 68, 255, 0.2)",borderColor:"rgba(68, 68, 255, 0.3)"},{name:"Scikit-learn",bgColor:"rgba(255, 68, 68, 0.2)",borderColor:"rgba(255, 68, 68, 0.3)"},{name:"JavaScript",bgColor:"rgba(0, 255, 136, 0.2)",borderColor:"rgba(0, 255, 136, 0.3)"}],links:[{type:"github",url:"https://github.com/proCoderAJ/Heart_Disease_web_App.git",label:"View Code"},{type:"demo",url:"https://heart-disease-web-app-five.vercel.app/",label:"Live Demo"}],color:"#FFD700"},{icon:iy,title:"Job & Internship Portal",date:"Aug 2024 - Nov 2024",description:"A dynamic platform connecting job seekers and recruiters. Features include responsive React.js frontend, Node.js backend with MongoDB, job posting capabilities, advanced filtering, and secure user authentication.",techStack:[{name:"React.js",bgColor:"rgba(255, 212, 0, 0.2)",borderColor:"rgba(255, 212, 0, 0.3)"},{name:"Node.js",bgColor:"rgba(68, 68, 255, 0.2)",borderColor:"rgba(68, 68, 255, 0.3)"},{name:"MongoDB",bgColor:"rgba(255, 68, 68, 0.2)",borderColor:"rgba(255, 68, 68, 0.3)"},{name:"Express.js",bgColor:"rgba(0, 255, 136, 0.2)",borderColor:"rgba(0, 255, 136, 0.3)"}],links:[{type:"github",url:"#",label:"View Code"},{type:"demo",url:"#",label:"Live Demo"}],color:"#FF4444"}];return m.jsx(h4,{id:"projects",children:m.jsxs(D.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[m.jsx(m4,{variants:t,children:"Projects"}),m.jsx(g4,{children:n.map((r,i)=>{const o=r.icon,s=i%2===0;return m.jsxs(y4,{variants:t,children:[m.jsxs(v4,{className:"timeline-content",whileHover:{scale:1.02},children:[m.jsxs(x4,{children:[m.jsx(w4,{color:r.color,children:m.jsx(o,{})}),m.jsx(k4,{children:r.title})]}),m.jsxs(S4,{children:[m.jsx(qc,{}),r.date]}),m.jsx(C4,{children:r.description}),m.jsx(P4,{children:r.techStack.map((a,l)=>m.jsx(b4,{bgColor:a.bgColor,borderColor:a.borderColor,whileHover:{scale:1.05},whileTap:{scale:.95},children:a.name},l))}),m.jsx(T4,{align:s?"flex-end":"flex-start",children:r.links.map((a,l)=>m.jsxs(E4,{href:a.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.type==="github"?m.jsx(ed,{}):m.jsx(sy,{}),a.label]},l))})]}),m.jsx(j4,{children:m.jsx(o,{})})]},i)})})]})})},D4=C.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,M4=C(D.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`,A4=C(D.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #FFD700;
    box-shadow: 0 25px 50px rgba(255, 212, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
    border-radius: 25px 25px 0 0;
  }
`,R4=C.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,L4=C.div`
  background: linear-gradient(45deg, #FFD700, #FF4444);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 80px;
  box-shadow: 0 10px 30px rgba(255, 212, 0, 0.3);

  svg {
    width: 40px;
    height: 40px;
    color: #000;
  }
`,V4=C.div`
  flex: 1;
`,I4=C.h3`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`,N4=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`,_4=C.p`
  color: #FFD700;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`,z4=C.div`
  display: flex;
  gap: 2rem;
  color: #cccccc;
  font-size: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,O4=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #FF4444;
  }
`,$4=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #4444FF;
  }
`,B4=C.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
`,U4=C(D.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 3px solid #FFD700;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`,H4=C.div`
  color: #00FF88;
  margin-top: 0.2rem;
  min-width: 20px;

  svg {
    width: 20px;
    height: 20px;
  }
`,W4=C.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`,G4=C.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,K4=C.h4`
  color: #FFD700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`,Y4=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,Q4=C(D.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 212, 0, 0.1);
    border-color: #FFD700;
    transform: scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    color: #FFD700;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
  }
`,X4=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},t={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},n=["Worked with Google Cloud services including Compute Engine, Cloud Storage, and App Engine","Collaborated with senior developers to automate infrastructure tasks using Infrastructure-as-Code (IaC)","Enhanced deployment efficiency and scalability using cloud-native tools on Google Cloud Platform"],r=[{icon:Rs,name:"Google Cloud Platform"},{icon:uy,name:"Compute Engine"},{icon:yC,name:"Infrastructure as Code"},{icon:Eu,name:"Cloud Automation"}];return m.jsx(D4,{id:"experience",children:m.jsxs(D.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[m.jsx(M4,{variants:t,children:"Experience"}),m.jsxs(A4,{variants:t,whileHover:{scale:1.02},children:[m.jsxs(R4,{children:[m.jsx(L4,{children:m.jsx(Rs,{})}),m.jsxs(V4,{children:[m.jsx(I4,{children:"Cloud Computing Intern"}),m.jsxs(N4,{children:[m.jsxs(_4,{children:[m.jsx(bu,{}),"Innovate Intern - Tamil Nadu"]}),m.jsxs(z4,{children:[m.jsxs(O4,{children:[m.jsx(qc,{}),"June 2024 – Oct 2024"]}),m.jsxs($4,{children:[m.jsx(Bi,{}),"Tamil Nadu, India"]})]})]})]})]}),m.jsx(B4,{children:n.map((i,o)=>m.jsxs(U4,{variants:t,whileHover:{scale:1.02},children:[m.jsx(H4,{children:m.jsx(oy,{})}),m.jsx(W4,{children:i})]},o))}),m.jsxs(G4,{children:[m.jsxs(K4,{children:[m.jsx(Eu,{}),"Key Technologies & Skills"]}),m.jsx(Y4,{children:r.map((i,o)=>{const s=i.icon;return m.jsxs(Q4,{variants:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(s,{}),m.jsx("p",{children:i.name})]},o)})})]})]})]})})},Z4=C.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,q4=C(D.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`,J4=C(D.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,eP=C(D.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #FFD700;
    box-shadow: 0 25px 50px rgba(255, 212, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.gradient||"linear-gradient(45deg, #FFD700, #FF4444)"};
    border-radius: 20px 20px 0 0;
  }
`,tP=C.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,nP=C.div`
  background: ${e=>e.bgColor||"linear-gradient(45deg, #FFD700, #FF4444)"};
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  svg {
    width: 28px;
    height: 28px;
    color: ${e=>e.iconColor||"#000"};
  }
`,rP=C.div`
  flex: 1;
`,iP=C.h3`
  color: #FFD700;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`,oP=C.h4`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
`,sP=C.p`
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1rem 0;
`,aP=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`,lP=C(D.span)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 212, 0, 0.2);
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.05);
  }
`,uP=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,cP=C.div`
  color: #888;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 14px;
    height: 14px;
  }
`,dP=C(D.a)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,fP=C.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(68, 68, 255, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,nl=C(D.div)`
  text-align: center;
  
  h3 {
    color: #FFD700;
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  p {
    color: #cccccc;
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
    font-weight: 500;
  }
`,pP=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},t={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},n=[{issuer:"GeeksForGeeks",title:"Mastering Data Analytics",description:"Comprehensive course covering data analysis techniques, statistical methods, and visualization tools for data-driven decision making.",icon:fC,bgColor:"linear-gradient(45deg, #00C851, #FFD700)",iconColor:"#000",gradient:"linear-gradient(45deg, #00C851, #FFD700)",skills:["Data Analysis","Statistics","Python","Visualization"],date:"2025",url:"https://media.geeksforgeeks.org/courses/certificates/64c978b99ac32a275fb8d27719bc63da.pdf"},{issuer:"Microsoft",title:"Microsoft Azure Data Fundamentals",description:"Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",icon:CC,bgColor:"linear-gradient(45deg, #0078D4, #40E0D0)",iconColor:"#fff",gradient:"linear-gradient(45deg, #0078D4, #40E0D0)",skills:["Azure","Data Services","Cloud Data","SQL"],date:"2025",url:"https://drive.google.com/file/d/1Cf8PxpIvzTR8Qt3cOG5sUYxbcciru1kz/view?usp=drivesdk"},{issuer:"Microsoft",title:"Effective Prompting for Microsoft 365 Copilot",description:"Advanced techniques for creating effective prompts and maximizing productivity with Microsoft 365 Copilot AI tools.",icon:hC,bgColor:"linear-gradient(45deg, #FF4081, #9C27B0)",iconColor:"#fff",gradient:"linear-gradient(45deg, #FF4081, #9C27B0)",skills:["AI Prompting","Microsoft 365","Productivity","Copilot"],date:"2025",url:"https://drive.google.com/file/d/1Cs70eTAim9-lIZOy6Q8bKnuvPMev3X6c/view?usp=drivesdk"},{issuer:"AICTE & MSME",title:"Cloud Computing on Google Cloud",description:"Comprehensive training on Google Cloud Platform services, deployment strategies, and cloud infrastructure management.",icon:Rs,bgColor:"linear-gradient(45deg, #4285F4, #34A853)",iconColor:"#fff",gradient:"linear-gradient(45deg, #4285F4, #34A853)",skills:["Google Cloud","Cloud Architecture","DevOps","Infrastructure"],date:"2024",url:"https://drive.google.com/file/d/1eyrepfHT6bpacMiA5MLh4wotSC6yYAMF/view?usp=drivesdk"},{issuer:"DevTown",title:"C++ and Data Structures & Algorithms",description:"In-depth course covering C++ programming fundamentals and comprehensive data structures and algorithms implementation.",icon:Ko,bgColor:"linear-gradient(45deg, #FF6B35, #F7931E)",iconColor:"#000",gradient:"linear-gradient(45deg, #FF6B35, #F7931E)",skills:["C++","Data Structures","Algorithms","Problem Solving"],date:"2024",url:"https://www.cert.devtown.in/verify/14rQ34"}];return m.jsx(Z4,{id:"certifications",children:m.jsxs(D.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[m.jsx(q4,{variants:t,children:"Certifications"}),m.jsxs(fP,{children:[m.jsxs(nl,{variants:t,children:[m.jsxs("h3",{children:[m.jsx(As,{}),"5+"]}),m.jsx("p",{children:"Professional Certifications"})]}),m.jsxs(nl,{variants:t,children:[m.jsxs("h3",{children:[m.jsx(bu,{}),"4"]}),m.jsx("p",{children:"Major Tech Companies"})]}),m.jsxs(nl,{variants:t,children:[m.jsxs("h3",{children:[m.jsx(PC,{}),"100%"]}),m.jsx("p",{children:"Completion Rate"})]})]}),m.jsx(J4,{children:n.map((r,i)=>{const o=r.icon;return m.jsxs(eP,{variants:t,gradient:r.gradient,whileHover:{scale:1.03,rotateY:5},whileTap:{scale:.98},children:[m.jsxs(tP,{children:[m.jsx(nP,{bgColor:r.bgColor,iconColor:r.iconColor,children:m.jsx(o,{})}),m.jsxs(rP,{children:[m.jsxs(iP,{children:[m.jsx(bu,{}),r.issuer]}),m.jsx(oP,{children:r.title})]})]}),m.jsx(sP,{children:r.description}),m.jsx(aP,{children:r.skills.map((s,a)=>m.jsx(lP,{whileHover:{scale:1.05},whileTap:{scale:.95},children:s},a))}),m.jsxs(uP,{children:[m.jsxs(cP,{children:[m.jsx(As,{}),"Certified ",r.date]}),m.jsxs(dP,{href:r.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(sy,{}),"View Certificate"]})]})]},i)})})]})})},hP=C.footer`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 26, 46, 0.9));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #FF4444, #4444FF, #FFD700);
  }
`,mP=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
`,gP=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,rl=C(D.div)`
  h3 {
    color: #FFD700;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,yP=C.p`
  color: #cccccc;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`,vP=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,il=C(D.a)`
  color: #cccccc;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.1);
    transform: translateX(5px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: #FFD700;
  }
`,xP=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Qn=C(D.a)`
  color: #cccccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.1);
    transform: translateX(5px);
  }
`,wP=C.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,bo=C(D.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, rgba(255, 212, 0, 0.2), rgba(68, 68, 255, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    border-color: #FFD700;
    box-shadow: 0 10px 25px rgba(255, 212, 0, 0.3);
  }

  &:nth-child(1):hover { background: linear-gradient(45deg, #0077b5, #FFD700); }
  &:nth-child(2):hover { background: linear-gradient(45deg, #333, #FFD700); }
  &:nth-child(3):hover { background: linear-gradient(45deg, #FF4444, #FFD700); }
  &:nth-child(4):hover { background: linear-gradient(45deg, #4444FF, #FFD700); }

  svg {
    width: 20px;
    height: 20px;
  }
`,kP=C.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,SP=C.p`
  color: #888;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #FF4444;
  }
`,CP=C(D.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  border: none;
  border-radius: 12px;
  color: #000;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,PP=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})},t=i=>{const o=document.getElementById(i);o&&o.scrollIntoView({behavior:"smooth"})},n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},r={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(hP,{children:m.jsx(mP,{children:m.jsxs(D.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[m.jsxs(gP,{children:[m.jsxs(rl,{variants:r,children:[m.jsxs("h3",{children:[m.jsx(Jc,{}),"About Abhishek"]}),m.jsx(yP,{children:"Passionate Full Stack Developer and Data Analyst dedicated to creating innovative solutions. I love turning complex problems into elegant, user-friendly applications while continuously learning and growing in the tech industry."}),m.jsxs(wP,{children:[m.jsx(bo,{href:"https://linkedin.com/in/abhishek-joshi-188010264",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx(ly,{})}),m.jsx(bo,{href:"https://github.com/proCoderAJ",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx(ed,{})}),m.jsx(bo,{href:"mailto:abhishekjoshi2026@gmail.com",whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx(kr,{})}),m.jsx(bo,{href:"tel:+917897681083",whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx(yi,{})})]})]}),m.jsxs(rl,{variants:r,children:[m.jsxs("h3",{children:[m.jsx(Vp,{}),"Quick Links"]}),m.jsxs(xP,{children:[m.jsx(Qn,{href:"#home",onClick:i=>{i.preventDefault(),t("home")},whileHover:{x:5},children:"Home"}),m.jsx(Qn,{href:"#about",onClick:i=>{i.preventDefault(),t("about")},whileHover:{x:5},children:"About Me"}),m.jsx(Qn,{href:"#skills",onClick:i=>{i.preventDefault(),t("skills")},whileHover:{x:5},children:"Skills"}),m.jsx(Qn,{href:"#projects",onClick:i=>{i.preventDefault(),t("projects")},whileHover:{x:5},children:"Projects"}),m.jsx(Qn,{href:"#experience",onClick:i=>{i.preventDefault(),t("experience")},whileHover:{x:5},children:"Experience"}),m.jsx(Qn,{href:"#certifications",onClick:i=>{i.preventDefault(),t("certifications")},whileHover:{x:5},children:"Certifications"})]})]}),m.jsxs(rl,{variants:r,children:[m.jsxs("h3",{children:[m.jsx(Bi,{}),"Contact Info"]}),m.jsxs(vP,{children:[m.jsxs(il,{href:"mailto:abhishekjoshi2026@gmail.com",whileHover:{x:5},children:[m.jsx(kr,{}),"abhishekjoshi2026@gmail.com"]}),m.jsxs(il,{href:"tel:+917897681083",whileHover:{x:5},children:[m.jsx(yi,{}),"+91 7897681083"]}),m.jsxs(il,{as:"div",whileHover:{x:5},children:[m.jsx(Bi,{}),"Kanpur, Uttar Pradesh, India"]})]})]})]}),m.jsxs(kP,{children:[m.jsxs(SP,{children:[m.jsx(ay,{}),"© 2025 Abhishek Joshi. Crafted with passion and creativity."]}),m.jsxs(CP,{onClick:e,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(Vp,{}),"Back to Top"]})]})]})})})},bP=C(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #FF4444, #4444FF);
  transform-origin: 0%;
  z-index: 9999;
  border-radius: 0 0 2px 2px;
`,TP=()=>{const[e,t]=k.useState(0);return k.useEffect(()=>{const n=()=>{const r=window.scrollY,i=document.documentElement.scrollHeight-window.innerHeight,o=r/i;t(o)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),m.jsx(bP,{style:{scaleX:e},initial:{scaleX:0},transition:{duration:.1,ease:"easeOut"}})},EP=()=>m.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[m.jsx(TP,{}),m.jsx(VC,{}),m.jsx(HC,{}),m.jsx(t4,{}),m.jsx(p4,{}),m.jsx(F4,{}),m.jsx(X4,{}),m.jsx(pP,{}),m.jsx(PP,{})]}),jP=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`,FP=C(D.div)`
  position: absolute;
  opacity: 0.1;
  
  &.shape-1 {
    background: #FFD700;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  &.shape-2 {
    background: #FF4444;
    width: 60px;
    height: 60px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  
  &.shape-3 {
    background: #4444FF;
    width: 100px;
    height: 40px;
    border-radius: 20px;
  }
  
  &.shape-4 {
    background: #FFD700;
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
  }
`,dy=()=>{const[e,t]=k.useState([]);return k.useEffect(()=>{const n=()=>{const i=[];["shape-1","shape-2","shape-3","shape-4","shape-1","shape-2"].forEach((s,a)=>{i.push({id:a,type:s,top:Math.random()*100,left:Math.random()*100,delay:Math.random()*20})}),t(i)};n();const r=setInterval(n,3e4);return()=>clearInterval(r)},[]),m.jsx(jP,{children:e.map(n=>m.jsx(FP,{className:n.type,initial:{top:"100vh",left:`${n.left}%`,rotate:0},animate:{top:"-100px",rotate:360},transition:{duration:20,delay:n.delay,repeat:1/0,ease:"linear"},style:{left:`${n.left}%`}},n.id))})},DP=C(D.div)`
  min-height: 100vh;
  padding-top: 100px;
`,MP=C.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,AP=C.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,RP=C(D.div)`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FFD700, #FF4444);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,LP=C(ug)`
  background: linear-gradient(45deg, #4444FF, #FFD700);
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(68, 68, 255, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,VP=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,IP=C(D.div)`
  text-align: center;
  margin-bottom: 4rem;
`,NP=C.h1`
  font-size: clamp(3rem, 8vw, 4rem);
  background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  animation: textGlow 3s ease-in-out infinite alternate;
  font-weight: 800;
`,_P=C.p`
  font-size: 1.3rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,zP=C(D.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,OP=C.div`
  display: grid;
  gap: 2rem;
`,$P=C(D.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: #FFD700;
    box-shadow: 0 25px 50px rgba(255, 212, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }
`,BP=C.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  color: ${e=>e.color||"#FFD700"};

  svg {
    width: 48px;
    height: 48px;
  }
`,UP=C.h3`
  color: #FFD700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,Np=C.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`,HP=C.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: #FFD700;
  }
`,WP=C(D.div)`
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 212, 0, 0.05), transparent);
    animation: rotate 20s linear infinite;
  }
`,GP=C.h2`
  color: #FFD700;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 800;
  position: relative;
  z-index: 2;
`,KP=C.form`
  position: relative;
  z-index: 2;
`,_p=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xn=C.div`
  margin-bottom: 2rem;
`,Zn=C.label`
  display: block;
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,To=C.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`,YP=C.select`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`,QP=C.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`,XP=C(D.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 212, 0, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,ZP=C(D.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.success {
    background: linear-gradient(45deg, rgba(0, 255, 136, 0.2), rgba(68, 68, 255, 0.2));
    border: 1px solid #00FF88;
    color: #00FF88;
  }

  &.error {
    background: linear-gradient(45deg, rgba(255, 68, 68, 0.2), rgba(255, 212, 0, 0.2));
    border: 1px solid #FF4444;
    color: #FF4444;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,qP=C(D.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.2), rgba(255, 68, 68, 0.2));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,JP=C.h3`
  color: #FFD700;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
`,eb=C.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`,Eo=C(D.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(255, 212, 0, 0.2), rgba(68, 68, 255, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.1);
    border-color: #FFD700;
    box-shadow: 0 15px 30px rgba(255, 212, 0, 0.3);
  }

  &:nth-child(1):hover { background: linear-gradient(45deg, #0077b5, #FFD700); }
  &:nth-child(2):hover { background: linear-gradient(45deg, #333, #FFD700); }
  &:nth-child(3):hover { background: linear-gradient(45deg, #FF4444, #FFD700); }
  &:nth-child(4):hover { background: linear-gradient(45deg, #4444FF, #FFD700); }

  svg {
    width: 32px;
    height: 32px;
  }
`,tb=C.div`
  text-align: center;
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.15), rgba(255, 212, 0, 0.15));
  border: 2px solid rgba(255, 68, 68, 0.3);
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 68, 68, 0.1), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  &::after {
    content: '🚨';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.5rem;
    border: 2px solid #FF4444;
  }
`,nb=C.h3`
  color: #FF4444;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;

  svg {
    width: 24px;
    height: 24px;
    color: #FFD700;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`,rb=C.p`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,ib=C.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`,ol=C(D.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 68, 68, 0.4);
  }

  &.whatsapp {
    background: linear-gradient(45deg, #25D366, #FFD700);
    
    &:hover {
      box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
    }
  }

  &.email {
    background: linear-gradient(45deg, #4444FF, #FFD700);
    
    &:hover {
      box-shadow: 0 15px 35px rgba(68, 68, 255, 0.4);
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`,ob=()=>{const[e,t]=k.useState({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""}),[n,r]=k.useState(!1),[i,o]=k.useState({text:"",type:""}),s=f=>{t({...e,[f.target.name]:f.target.value})},a=()=>{const{firstName:f,lastName:g,email:v,subject:x,message:S}=e;return!f||!g||!v||!x||!S?"Please fill in all required fields.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?null:"Please enter a valid email address."},l=async f=>{f.preventDefault();const g=a();if(g){o({text:g,type:"error"});return}r(!0),o({text:"",type:""});try{if((await fetch("https://formspree.io/f/xpwlyrpq",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${e.firstName} ${e.lastName}`,email:e.email,phone:e.phone,subject:e.subject,message:e.message})})).ok)r(!1),o({text:"🎉 Thank you for your message! I'll get back to you within 24 hours.",type:"success"}),t({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>{o({text:"",type:""})},5e3);else throw new Error("Form submission failed")}catch{r(!1);const x=encodeURIComponent(`${e.subject} - Message from ${e.firstName} ${e.lastName}`),S=encodeURIComponent(`Hi Abhishek,

${e.message}

Best regards,
${e.firstName} ${e.lastName}
Email: ${e.email}
Phone: ${e.phone||"Not provided"}`),y=`mailto:abhishekjoshi2026@gmail.com?subject=${x}&body=${S}`;o({text:"❌ Form submission failed. Opening your email client as backup...",type:"error"}),setTimeout(()=>{window.open(y,"_blank"),o({text:"📧 Email client opened! Please send the pre-filled message or try the form again.",type:"error"})},1500),setTimeout(()=>{o({text:"",type:""})},8e3)}},u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},c={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}},d=[{icon:kr,title:"Email Address",text:"Feel free to send me an email anytime!",link:"mailto:abhishekjoshi2026@gmail.com",linkText:"abhishekjoshi2026@gmail.com",color:"#FFD700"},{icon:yi,title:"Phone Number",text:"Available for calls and WhatsApp messages",link:"tel:+917897681083",linkText:"+91 7897681083",color:"#FF4444"},{icon:Bi,title:"Location",text:"Based in Kanpur, Uttar Pradesh, India",linkText:"Open to remote opportunities worldwide",color:"#4444FF"},{icon:gC,title:"Response Time",text:"I typically respond within 24 hours",linkText:"Best time to reach: 9 AM - 8 PM IST",color:"#00FF88"}];return m.jsxs(DP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[m.jsx(dy,{}),m.jsx(MP,{children:m.jsxs(AP,{children:[m.jsx(RP,{whileHover:{scale:1.1},whileTap:{scale:.95},children:"AJ"}),m.jsxs(LP,{to:"/",children:[m.jsx(dC,{}),"Back to Portfolio"]})]})}),m.jsx(VP,{children:m.jsxs(D.div,{variants:u,initial:"hidden",animate:"visible",children:[m.jsxs(IP,{variants:c,children:[m.jsx(NP,{children:"Let's Connect!"}),m.jsx(_P,{children:"Ready to collaborate on exciting projects? Have a question about my work? Or just want to say hello? I'd love to hear from you! Drop me a message below or reach out through any of my social channels."})]}),m.jsxs(zP,{children:[m.jsx(D.div,{variants:c,children:m.jsx(OP,{children:d.map((f,g)=>{const v=f.icon;return m.jsxs($P,{whileHover:{scale:1.02},children:[m.jsx(BP,{color:f.color,children:m.jsx(v,{})}),m.jsx(UP,{children:f.title}),m.jsx(Np,{children:f.text}),f.link?m.jsx(HP,{href:f.link,children:f.linkText}):m.jsx(Np,{style:{color:"#ffffff",fontWeight:600},children:f.linkText})]},g)})})}),m.jsxs(WP,{variants:c,children:[m.jsx(GP,{children:"Send Me a Message"}),m.jsxs(KP,{onSubmit:l,children:[m.jsxs(_p,{children:[m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"firstName",children:"First Name *"}),m.jsx(To,{type:"text",id:"firstName",name:"firstName",value:e.firstName,onChange:s,required:!0})]}),m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"lastName",children:"Last Name *"}),m.jsx(To,{type:"text",id:"lastName",name:"lastName",value:e.lastName,onChange:s,required:!0})]})]}),m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"email",children:"Email Address *"}),m.jsx(To,{type:"email",id:"email",name:"email",value:e.email,onChange:s,required:!0})]}),m.jsxs(_p,{children:[m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"phone",children:"Phone Number"}),m.jsx(To,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:s})]}),m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"subject",children:"Subject *"}),m.jsxs(YP,{id:"subject",name:"subject",value:e.subject,onChange:s,required:!0,children:[m.jsx("option",{value:"",children:"Select a subject"}),m.jsx("option",{value:"project",children:"Project Collaboration"}),m.jsx("option",{value:"job",children:"Job Opportunity"}),m.jsx("option",{value:"freelance",children:"Freelance Work"}),m.jsx("option",{value:"consultation",children:"Technical Consultation"}),m.jsx("option",{value:"general",children:"General Inquiry"})]})]})]}),m.jsxs(Xn,{children:[m.jsx(Zn,{htmlFor:"message",children:"Your Message *"}),m.jsx(QP,{id:"message",name:"message",value:e.message,onChange:s,placeholder:"Tell me more about your project, opportunity, or just say hello!",required:!0})]}),m.jsx(XP,{type:"submit",disabled:n,whileHover:{scale:n?1:1.02},whileTap:{scale:n?1:.98},children:n?m.jsxs(m.Fragment,{children:[m.jsx(D.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:m.jsx(Yo,{})}),"Sending..."]}):m.jsxs(m.Fragment,{children:[m.jsx(SC,{}),"Send Message"]})}),i.text&&m.jsxs(ZP,{className:i.type,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[i.type==="success"?m.jsx(oy,{}):m.jsx(cC,{}),i.text]})]})]})]}),m.jsx(D.div,{variants:c,children:m.jsxs(tb,{children:[m.jsxs(nb,{children:[m.jsx(Eu,{}),"Need Urgent Response?"]}),m.jsx(rb,{children:"For time-sensitive projects or urgent queries, reach out directly via phone or WhatsApp for immediate assistance."}),m.jsxs(ib,{children:[m.jsxs(ol,{href:"tel:+917897681083",whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(yi,{}),"Call Now"]}),m.jsx(ol,{href:"https://wa.me/917897681083?text=Hi%20Abhishek%2C%20I%20have%20an%20urgent%20query%20regarding...",target:"_blank",rel:"noopener noreferrer",className:"whatsapp",whileHover:{scale:1.05},whileTap:{scale:.95},children:"📱 WhatsApp"}),m.jsxs(ol,{href:"mailto:abhishekjoshi2026@gmail.com?subject=URGENT:%20&body=Hi%20Abhishek%2C%0A%0AThis%20is%20urgent.%20",className:"email",whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(kr,{}),"Urgent Email"]})]})]})}),m.jsxs(qP,{variants:c,children:[m.jsx(JP,{children:"Connect With Me"}),m.jsxs(eb,{children:[m.jsx(Eo,{href:"https://linkedin.com/in/abhishek-joshi-188010264",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:m.jsx(ly,{})}),m.jsx(Eo,{href:"https://github.com/proCoderAJ",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:m.jsx(ed,{})}),m.jsx(Eo,{href:"mailto:abhishekjoshi2026@gmail.com",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:m.jsx(kr,{})}),m.jsx(Eo,{href:"tel:+917897681083",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.9},children:m.jsx(yi,{})})]})]})]})})]})};function sb(){return m.jsxs(zx,{basename:"/portfolio",children:[m.jsx(aC,{}),m.jsx(dy,{}),m.jsx(oS,{mode:"wait",children:m.jsxs(Ax,{children:[m.jsx(eu,{path:"/",element:m.jsx(EP,{})}),m.jsx(eu,{path:"/contact",element:m.jsx(ob,{})})]})})]})}sl.createRoot(document.getElementById("root")).render(m.jsx(Ue.StrictMode,{children:m.jsx(sb,{})}));
