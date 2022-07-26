"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[156],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},7059:function(e,t,r){r.d(t,{G:function(){return T},L:function(){return f},M:function(){return E},P:function(){return b},S:function(){return Z},_:function(){return l},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return s}});var n=r(7294),a=(r(4811),r(5697)),i=r.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var g,p=["children"],m=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=l(e,p);return n.createElement(n.Fragment,null,n.createElement(m,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,h);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},C=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,o({},c,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},C.displayName="Picture",C.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,r=l(e,w);return t?n.createElement(C,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};b.displayName="Placeholder",b.propTypes={fallback:a.string,sources:null==(g=C.propTypes)?void 0:g.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(C,o({},e)),n.createElement("noscript",null,n.createElement(C,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=C.propTypes;var x,k,L=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},z={image:i().object.isRequired,alt:L},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],S=new Set,N=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,g=e.class,p=e.onStartLoad,m=e.onLoad,f=e.onError,h=l(e,O),v=i.width,y=i.height,C=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(v,y,C),b=w.style,E=w.className,L=l(w,M),z=(0,n.useRef)(),N=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);g&&(d=g);var T=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(C,v,y);return(0,n.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(680)]).then(r.bind(r,8680)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=z.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(N)):k&&S.has(N)?void 0:(x.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;z.current&&(z.current.innerHTML=n(o({isLoading:!0,isLoaded:S.has(N),image:i},h)),S.has(N)||(e=requestAnimationFrame((function(){z.current&&(t=a(z.current,N,S,c,p,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){S.has(N)&&k&&(z.current.innerHTML=k(o({isLoading:S.has(N),isLoaded:S.has(N),image:i},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},L,{style:o({},b,c,{backgroundColor:u}),className:E+(d?" "+d:""),ref:z,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(N,e):null}));T.propTypes=z,T.displayName="GatsbyImage";var I,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],P=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:L,width:P,height:P,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Z=(I=T,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=l(e,j);return a&&console.warn(a),r?n.createElement(I,o({image:r},i)):(console.warn("Image not loaded",t),null)});Z.displayName="StaticImage",Z.propTypes=q},7004:function(e,t,r){r.d(t,{PO:function(){return s},qZ:function(){return d},aC:function(){return g},B_:function(){return u},cu:function(){return c}});var n=r(4942),a=r(7294),i=function(e){var t=e.width,r=e.height,n=e.fill,i=e.className,o=e.viewBox,l=e.paths;return a.createElement("svg",{className:i,xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:o,fill:n},l)};function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return i(l(l({},e),{},{viewBox:"0 0 24 24",paths:a.createElement(a.Fragment,null,a.createElement("rect",{fill:"none",height:"24",width:"24"}),a.createElement("path",{d:"M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"}))}))},c=function(e){return i(l(l({},e),{},{viewBox:"0 0 24 24",paths:a.createElement(a.Fragment,null,a.createElement("rect",{fill:"none",height:"24",width:"24"}),a.createElement("path",{d:"M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})," ")}))},u=function(e){return i(l(l({},e),{},{viewBox:"0 0 24 24",paths:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}))},d=function(e){return i(l(l({},e),{},{viewBox:"0 0 24 24",paths:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}))}))},g=function(e){return i(l(l({},e),{},{viewBox:"0 0 256 250",paths:a.createElement(a.Fragment,null,a.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"}))}))}},8689:function(e,t,r){var n=r(7294),a=r(1597),i=r(7004);t.Z=function(e){var t=e.pageTitle,r=e.children,o=e.darkModeState,l=o[0],s=o[1],c=(0,a.K2)("3159585216"),u=24;return n.createElement("div",{className:(l?"dark":"")+"  flex flex-col items-center gap-8 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white"},n.createElement("header",{className:"sticky top-0 z-50 select-none w-full flex items-center justify-between p-2 text-lg bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-b-2 border-zinc-100 dark:border-zinc-800 shadow-md shadow-zinc-300/50 dark:shadow-zinc-700/50"},n.createElement(a.rU,{className:"cursor-pointer flex items-center gap-1 group",to:"/"},n.createElement(i.B_,{className:"fill-zinc-800 dark:fill-zinc-100 group-hover:fill-violet-700 dark:group-hover:fill-peach-500",width:u,height:u,fill:"#000000"}),n.createElement("p",{className:"text-xl font-bold group-hover:text-violet-700 dark:group-hover:text-peach-500 group-hover:underline underline-offset-1"},t||c.site.siteMetadata.title)),n.createElement("figure",{className:"flex flex-col items-center gap-1 cursor-pointer group",onClick:function(){return s(!l)}},l?n.createElement(n.Fragment,null,n.createElement(i.cu,{className:"fill-zinc-100 group-hover:fill-peach-500",width:u,height:u,fill:"#000000"}),n.createElement("figcaption",{className:"text-xs group-hover:text-peach-500 group-hover:underline underline-offset-1"},"환하게")):n.createElement(n.Fragment,null,n.createElement(i.PO,{className:"fill-zinc-800 group-hover:fill-violet-700",width:u,height:u,fill:"#000000"}),n.createElement("figcaption",{className:"text-xs group-hover:text-violet-700 group-hover:underline underline-offset-1"},"어둡게")))),n.createElement(n.Fragment,null,r))}},466:function(e,t,r){r.d(t,{z:function(){return n}});var n=["bg-zinc-50","dark:bg-zinc-900","text-black","dark:text-white"]},9213:function(e,t,r){var n=r(5785),a=r(7294);t.Z=function(e){var t=(0,a.useState)(!1),r=t[0],i=t[1];return(0,a.useEffect)((function(){var t;(t=document.getElementsByTagName("body")[0].classList).add.apply(t,(0,n.Z)(e));var r="true"===localStorage.getItem("darkMode");i(r)}),[]),(0,a.useEffect)((function(){!function(e,t){t?null==e||e.classList.add("dark"):null==e||e.classList.remove("dark")}(document.getElementsByTagName("html")[0],r),localStorage.setItem("darkMode",r.toString())}),[r]),t}}}]);
//# sourceMappingURL=7fdc34ca3d837c026f97cc8696d9eeac979076fa-bd51eaea1ef10307813f.js.map