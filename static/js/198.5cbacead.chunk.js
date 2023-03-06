(self.webpackChunkbestchange=self.webpackChunkbestchange||[]).push([[198],{6198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ae}});var a=r(9439),n=r(2791),s=r(7022),i=r(3531),o=r(3713),c=r(1413),l=r(5987),u=r(1694),f=r.n(u),d=r(2007),v=r.n(d),p=r(184),m=["as","className","type","tooltip"],y={type:v().string,tooltip:v().bool,as:v().elementType},h=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,n=e.className,s=e.type,i=void 0===s?"valid":s,o=e.tooltip,u=void 0!==o&&o,d=(0,l.Z)(e,m);return(0,p.jsx)(a,(0,c.Z)((0,c.Z)({},d),{},{ref:t,className:f()(n,"".concat(i,"-").concat(u?"tooltip":"feedback"))}))}));h.displayName="Feedback",h.propTypes=y;var x=h,b=n.createContext({}),g=r(162),N=["id","bsPrefix","className","type","isValid","isInvalid","as"],C=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,s=e.className,i=e.type,o=void 0===i?"checkbox":i,u=e.isValid,d=void 0!==u&&u,v=e.isInvalid,m=void 0!==v&&v,y=e.as,h=void 0===y?"input":y,x=(0,l.Z)(e,N),C=(0,n.useContext)(b).controlId;return a=(0,g.vE)(a,"form-check-input"),(0,p.jsx)(h,(0,c.Z)((0,c.Z)({},x),{},{ref:t,type:o,id:r||C,className:f()(s,a,d&&"is-valid",m&&"is-invalid")}))}));C.displayName="FormCheckInput";var j=C,Z=["bsPrefix","className","htmlFor"],E=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,s=e.htmlFor,i=(0,l.Z)(e,Z),o=(0,n.useContext)(b).controlId;return r=(0,g.vE)(r,"form-check-label"),(0,p.jsx)("label",(0,c.Z)((0,c.Z)({},i),{},{ref:t,htmlFor:s||o,className:f()(a,r)}))}));E.displayName="FormCheckLabel";var I=E;var O=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],T=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,s=e.bsSwitchPrefix,i=e.inline,o=void 0!==i&&i,u=e.reverse,d=void 0!==u&&u,v=e.disabled,m=void 0!==v&&v,y=e.isValid,h=void 0!==y&&y,N=e.isInvalid,C=void 0!==N&&N,Z=e.feedbackTooltip,E=void 0!==Z&&Z,T=e.feedback,P=e.feedbackType,M=e.className,R=e.style,A=e.title,k=void 0===A?"":A,S=e.type,w=void 0===S?"checkbox":S,F=e.label,V=e.children,Q=e.as,_=void 0===Q?"input":Q,z=(0,l.Z)(e,O);a=(0,g.vE)(a,"form-check"),s=(0,g.vE)(s,"form-switch");var U=(0,n.useContext)(b).controlId,D=(0,n.useMemo)((function(){return{controlId:r||U}}),[U,r]),L=!V&&null!=F&&!1!==F||function(e,t){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===t}))}(V,I),q=(0,p.jsx)(j,(0,c.Z)((0,c.Z)({},z),{},{type:"switch"===w?"checkbox":w,ref:t,isValid:h,isInvalid:C,disabled:m,as:_}));return(0,p.jsx)(b.Provider,{value:D,children:(0,p.jsx)("div",{style:R,className:f()(M,L&&a,o&&"".concat(a,"-inline"),d&&"".concat(a,"-reverse"),"switch"===w&&s),children:V||(0,p.jsxs)(p.Fragment,{children:[q,L&&(0,p.jsx)(I,{title:k,children:F}),T&&(0,p.jsx)(x,{type:P,tooltip:E,children:T})]})})})}));T.displayName="FormCheck";var P=Object.assign(T,{Input:j,Label:I}),M=r(4942),R=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),A=n.forwardRef((function(e,t){var r,a,s=e.bsPrefix,i=e.type,o=e.size,u=e.htmlSize,d=e.id,v=e.className,m=e.isValid,y=void 0!==m&&m,h=e.isInvalid,x=void 0!==h&&h,N=e.plaintext,C=e.readOnly,j=e.as,Z=void 0===j?"input":j,E=(0,l.Z)(e,R),I=(0,n.useContext)(b).controlId;(s=(0,g.vE)(s,"form-control"),N)?r=(0,M.Z)({},"".concat(s,"-plaintext"),!0):(a={},(0,M.Z)(a,s,!0),(0,M.Z)(a,"".concat(s,"-").concat(o),o),r=a);return(0,p.jsx)(Z,(0,c.Z)((0,c.Z)({},E),{},{type:i,size:u,ref:t,readOnly:C,id:d||I,className:f()(v,r,y&&"is-valid",x&&"is-invalid","color"===i&&"".concat(s,"-color"))}))}));A.displayName="FormControl";var k=Object.assign(A,{Feedback:x}),S=/-(.)/g;var w=["className","bsPrefix","as"],F=function(e){return e[0].toUpperCase()+(t=e,t.replace(S,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.displayName,a=void 0===r?F(e):r,s=t.Component,i=t.defaultProps,o=n.forwardRef((function(t,r){var a=t.className,n=t.bsPrefix,i=t.as,o=void 0===i?s||"div":i,u=(0,l.Z)(t,w),d=(0,g.vE)(n,e);return(0,p.jsx)(o,(0,c.Z)({ref:r,className:f()(a,d)},u))}));return o.defaultProps=i,o.displayName=a,o}var Q=V("form-floating"),_=["controlId","as"],z=n.forwardRef((function(e,t){var r=e.controlId,a=e.as,s=void 0===a?"div":a,i=(0,l.Z)(e,_),o=(0,n.useMemo)((function(){return{controlId:r}}),[r]);return(0,p.jsx)(b.Provider,{value:o,children:(0,p.jsx)(s,(0,c.Z)((0,c.Z)({},i),{},{ref:t}))})}));z.displayName="FormGroup";var U=z,D=["as","bsPrefix","className"],L=["className"];var q=n.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,a=e.className,n=(0,l.Z)(e,D);r=(0,g.vE)(r,"col");var s=(0,g.pi)(),i=(0,g.zG)(),o=[],u=[];return s.forEach((function(e){var t,a,s,c=n[e];delete n[e],"object"===typeof c&&null!=c?(t=c.span,a=c.offset,s=c.order):t=c;var l=e!==i?"-".concat(e):"";t&&o.push(!0===t?"".concat(r).concat(l):"".concat(r).concat(l,"-").concat(t)),null!=s&&u.push("order".concat(l,"-").concat(s)),null!=a&&u.push("offset".concat(l,"-").concat(a))})),[(0,c.Z)((0,c.Z)({},n),{},{className:f().apply(void 0,[a].concat(o,u))}),{as:t,bsPrefix:r,spans:o}]}(e),n=(0,a.Z)(r,2),s=n[0],i=s.className,o=(0,l.Z)(s,L),u=n[1],d=u.as,v=void 0===d?"div":d,m=u.bsPrefix,y=u.spans;return(0,p.jsx)(v,(0,c.Z)((0,c.Z)({},o),{},{ref:t,className:f()(i,!y.length&&m)}))}));q.displayName="Col";var G=q,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],W=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"label":r,s=e.bsPrefix,i=e.column,o=e.visuallyHidden,u=e.className,d=e.htmlFor,v=(0,l.Z)(e,H),m=(0,n.useContext)(b).controlId;s=(0,g.vE)(s,"form-label");var y="col-form-label";"string"===typeof i&&(y="".concat(y," ").concat(y,"-").concat(i));var h=f()(u,s,o&&"visually-hidden",i&&y);return d=d||m,i?(0,p.jsx)(G,(0,c.Z)({ref:t,as:"label",className:h,htmlFor:d},v)):(0,p.jsx)(a,(0,c.Z)({ref:t,className:h,htmlFor:d},v))}));W.displayName="FormLabel",W.defaultProps={column:!1,visuallyHidden:!1};var X=W,Y=["bsPrefix","className","id"],$=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,s=e.id,i=(0,l.Z)(e,Y),o=(0,n.useContext)(b).controlId;return r=(0,g.vE)(r,"form-range"),(0,p.jsx)("input",(0,c.Z)((0,c.Z)({},i),{},{type:"range",ref:t,className:f()(a,r),id:s||o}))}));$.displayName="FormRange";var B=$,J=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,s=e.htmlSize,i=e.className,o=e.isValid,u=void 0!==o&&o,d=e.isInvalid,v=void 0!==d&&d,m=e.id,y=(0,l.Z)(e,J),h=(0,n.useContext)(b).controlId;return r=(0,g.vE)(r,"form-select"),(0,p.jsx)("select",(0,c.Z)((0,c.Z)({},y),{},{size:s,ref:t,className:f()(i,r,a&&"".concat(r,"-").concat(a),u&&"is-valid",v&&"is-invalid"),id:m||h}))}));K.displayName="FormSelect";var ee=K,te=["bsPrefix","className","as","muted"],re=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.as,s=void 0===n?"small":n,i=e.muted,o=(0,l.Z)(e,te);return r=(0,g.vE)(r,"form-text"),(0,p.jsx)(s,(0,c.Z)((0,c.Z)({},o),{},{ref:t,className:f()(a,r,i&&"text-muted")}))}));re.displayName="FormText";var ae=re,ne=n.forwardRef((function(e,t){return(0,p.jsx)(P,(0,c.Z)((0,c.Z)({},e),{},{ref:t,type:"switch"}))}));ne.displayName="Switch";var se=Object.assign(ne,{Input:P.Input,Label:P.Label}),ie=["bsPrefix","className","children","controlId","label"],oe=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.children,s=e.controlId,i=e.label,o=(0,l.Z)(e,ie);return r=(0,g.vE)(r,"form-floating"),(0,p.jsxs)(U,(0,c.Z)((0,c.Z)({ref:t,className:f()(a,r),controlId:s},o),{},{children:[n,(0,p.jsx)("label",{htmlFor:s,children:i})]}))}));oe.displayName="FloatingLabel";var ce=oe,le=["className","validated","as"],ue={_ref:v().any,validated:v().bool,as:v().elementType},fe=n.forwardRef((function(e,t){var r=e.className,a=e.validated,n=e.as,s=void 0===n?"form":n,i=(0,l.Z)(e,le);return(0,p.jsx)(s,(0,c.Z)((0,c.Z)({},i),{},{ref:t,className:f()(r,a&&"was-validated")}))}));fe.displayName="Form",fe.propTypes=ue;var de=Object.assign(fe,{Group:U,Control:k,Floating:Q,Check:P,Switch:se,Label:X,Text:ae,Range:B,Select:ee,FloatingLabel:ce});var ve=r.p+"static/media/transfer-svgrepo-com.ca8cefb698bcc67c2c11cfcff5b71e83.svg",pe={reverseImg:"Calculator_reverseImg__Sqzvi",ErrorMessage:"Calculator_ErrorMessage__FyhcN",kurs:"Calculator_kurs__fz68a",Container:"Calculator_Container__ji8oz"},me=n.createContext(null);me.displayName="InputGroupContext";var ye=me,he=["bsPrefix","size","hasValidation","className","as"],xe=V("input-group-text",{Component:"span"}),be=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,s=e.hasValidation,i=e.className,o=e.as,u=void 0===o?"div":o,d=(0,l.Z)(e,he);r=(0,g.vE)(r,"input-group");var v=(0,n.useMemo)((function(){return{}}),[]);return(0,p.jsx)(ye.Provider,{value:v,children:(0,p.jsx)(u,(0,c.Z)((0,c.Z)({ref:t},d),{},{className:f()(i,r,a&&"".concat(r,"-").concat(a),s&&"has-validation")}))})}));be.displayName="InputGroup";var ge=Object.assign(be,{Text:xe,Radio:function(e){return(0,p.jsx)(xe,{children:(0,p.jsx)(j,(0,c.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,p.jsx)(xe,{children:(0,p.jsx)(j,(0,c.Z)({type:"checkbox"},e))})}}),Ne="common_pageHeader__3DX9g",Ce=function(e){var t=e.selectValue1,r=e.selectValue2,a=(e.Qty1,e.Qty2,e.setQty1AC),n=e.setQty2AC,i=e.setSelectValue1,o=e.setSelectValue2,c=e.MyPairData,l=e.Range1,u=e.Range2,f=e.Errors,d=e.Qty1String,v=e.setQty1String,m=e.Qty2String,y=e.setQty2String,h=e.reverseCurrency,x=e.setErrorsAC,b=Object.assign({},f),g=function(e,t,r,a){var n=e.currentTarget.value;Number(n)&&t(Number(n)),r(n),x(a)},N=c.IN>c.OUT?"\u041a\u0443\u0440\u0441 ".concat(Math.round(100*c.IN/c.OUT)/100," ").concat(c.FROM," =  1  ").concat(c.TO," "):"\u041a\u0443\u0440\u0441 1  ".concat(c.FROM," = ").concat(Math.round(100*c.OUT/c.IN)/100," ").concat(c.TO,"  "),C=(0,p.jsxs)("div",{children:[" ",(0,p.jsx)(de.Select,{className:"my-2",value:t,onChange:function(e){i(e.currentTarget.value)},children:l.map((function(e){return(0,p.jsx)("option",{children:e},e)}))}),(0,p.jsxs)(ge,{children:[(0,p.jsx)(ge.Text,{className:pe.labelWidth,children:"\u041e\u0442\u0434\u0430\u044e:"}),(0,p.jsx)(de.Control,{name:"Qty1",type:"text",value:d,onChange:function(e){!function(e){b.ErrorInput1="",g(e,a,v,b)}(e)}})]}),(0,p.jsxs)("div",{className:pe.ErrorMessage,children:[f.ErrorInput1," "]}),(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,p.jsx)("img",{onClick:function(){h()},className:pe.reverseImg,src:ve,alt:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u043c\u0435\u0441\u0442\u0430\u043c\u0438",title:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u043c\u0435\u0441\u0442\u0430\u043c\u0438"})}),(0,p.jsx)(de.Select,{className:"my-2",value:r,onChange:function(e){o(e.currentTarget.value)},children:u.map((function(e){return(0,p.jsx)("option",{children:e},e)}))}),(0,p.jsxs)(ge,{children:[(0,p.jsx)(ge.Text,{className:pe.labelWidth,children:"\u041f\u043e\u043b\u0443\u0447\u0430\u044e:"}),(0,p.jsx)(de.Control,{name:"Qty2",type:"text",value:m,onChange:function(e){!function(e){b.ErrorInput2="",g(e,n,y,b)}(e)}})]}),(0,p.jsxs)("div",{className:pe.ErrorMessage,children:[f.ErrorInput2," "]})]});return(0,p.jsxs)(s.Z,{className:pe.Container,children:[(0,p.jsx)("h2",{className:Ne,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})," ",(0,p.jsx)("div",{className:pe.kurs,children:N}),(0,p.jsx)("div",{children:C})]})},je="NOT_FOUND";var Ze=function(e,t){return e===t};function Ee(e,t){var r="object"===typeof t?t:{equalityCheck:t},a=r.equalityCheck,n=void 0===a?Ze:a,s=r.maxSize,i=void 0===s?1:s,o=r.resultEqualityCheck,c=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var a=t.length,n=0;n<a;n++)if(!e(t[n],r[n]))return!1;return!0}}(n),l=1===i?function(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:je},put:function(e,r){t={key:e,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var r=[];function a(e){var a=r.findIndex((function(r){return t(e,r.key)}));if(a>-1){var n=r[a];return a>0&&(r.splice(a,1),r.unshift(n)),n.value}return je}return{get:a,put:function(t,n){a(t)===je&&(r.unshift({key:t,value:n}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,c);function u(){var t=l.get(arguments);if(t===je){if(t=e.apply(null,arguments),o){var r=l.getEntries().find((function(e){return o(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return u.clearCache=function(){return l.clear()},u}function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var s,i=0,o={memoizeOptions:void 0},c=a.pop();if("object"===typeof c&&(o=c,c=a.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=o.memoizeOptions,u=void 0===l?r:l,f=Array.isArray(u)?u:[u],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}(a),v=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),p=e((function(){for(var e=[],t=d.length,r=0;r<t;r++)e.push(d[r].apply(null,arguments));return s=v.apply(null,e)}));return Object.assign(p,{resultFunc:c,memoizedResultFunc:v,dependencies:d,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),p}}var Oe=Ie(Ee),Te=function(e){var t=[];return e.bestChange.bestChangeData&&e.bestChange.bestChangeData.forEach((function(r){r.FROM===e.bestChange.MyPairData.FROM&&t.push(r.TO)})),t},Pe=function(e){return e.bestChange.MyPairData},Me=Oe((function(e){var t=[];return e.bestChange.bestChangeData&&e.bestChange.bestChangeData.forEach((function(r){r.TO===e.bestChange.MyPairData.TO&&t.push(r.FROM)})),t}),(function(e){return e})),Re=Oe(Te,(function(e){return e})),Ae=(0,i.$j)((function(e){return{MyPairData:Pe(e),selectValue1:e.bestChange.selectValue1,selectValue2:e.bestChange.selectValue2,Qty1:e.bestChange.Qty1,Qty2:e.bestChange.Qty2,Range1:Me(e),Range2:Re(e),Errors:e.bestChange.Errors}}),{selectValue1AC:o.VM,selectValue2AC:o.xN,setQty1AC:o.Yr,setQty2AC:o.vE,setMyPairDataAC:o.V$,setRangesAC:o.wR,setErrorsAC:o.su})((function(e){var t=e.MyPairData,r=e.selectValue1,i=e.selectValue2,o=e.Qty1,c=e.Qty2,l=e.selectValue1AC,u=e.selectValue2AC,f=e.setQty1AC,d=e.setQty2AC,v=e.Range1,m=e.Range2,y=e.setMyPairDataAC,h=e.setRangesAC,x=e.Errors,b=e.setErrorsAC,g=(0,n.useState)(o.toString()),N=(0,a.Z)(g,2),C=N[0],j=N[1],Z=(0,n.useState)(c.toString()),E=(0,a.Z)(Z,2),I=E[0],O=E[1];(0,n.useEffect)((function(){h(v,m),f(t.MINAMOUNT)}),[r,i]),(0,n.useEffect)((function(){var e=Object.assign({},x);o>=t.MAXAMOUNT&&(e.ErrorInput1="\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ".concat(t.MAXAMOUNT)),o<=t.MINAMOUNT&&(e.ErrorInput1="\u043c\u0438\u043d\u0438\u043c\u0443\u043c  ".concat(t.MINAMOUNT)),o>=t.MINAMOUNT&&o<=t.MAXAMOUNT&&(e.ErrorInput1=""),c>t.AMOUNT&&(e.ErrorInput2="\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ".concat(t.AMOUNT)),c<0&&(e.ErrorInput2="\u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 0"),c>0&&c<=t.AMOUNT&&(e.ErrorInput2=""),b(e)}),[o,c,t.MAXAMOUNT,t.MINAMOUNT]);(0,n.useEffect)((function(){l(t.FROM),u(t.TO)}),[t.FROM,t.TO]),(0,n.useEffect)((function(){j(o.toString()),O(c.toString())}),[j,o,O,c]);var T=(0,p.jsx)("div",{children:(0,p.jsx)(s.Z,{className:"lg-3",children:(0,p.jsx)(Ce,{selectValue1:r,selectValue2:i,Qty1:o,Qty2:c,setQty1AC:f,setQty2AC:d,setSelectValue1:function(e){l(e);var r=t.TO;y(e,r)},setSelectValue2:function(e){u(e);var r=t.FROM;y(r,e)},MyPairData:t,Range1:v,Range2:m,Errors:x,Qty1String:C,setQty1String:j,Qty2String:I,setQty2String:O,reverseCurrency:function(){y(i,r)},setErrorsAC:b})})});return(0,p.jsx)("div",{children:T})}))},888:function(e,t,r){"use strict";var a=r(9047);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2391:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=198.5cbacead.chunk.js.map