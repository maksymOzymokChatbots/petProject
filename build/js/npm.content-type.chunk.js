(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(e,r,t){"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var n=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,a=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,o=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,i=/\\([\u000b\u0020-\u00ff])/g,u=/([\\"])/g,f=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function p(e){var r=String(e);if(o.test(r))return r;if(r.length>0&&!a.test(r))throw new TypeError("invalid parameter value");return'"'+r.replace(u,"\\$1")+'"'}function s(e){this.parameters=Object.create(null),this.type=e}r.format=function(e){if(!e||"object"!=typeof e)throw new TypeError("argument obj is required");var r=e.parameters,t=e.type;if(!t||!f.test(t))throw new TypeError("invalid type");var n=t;if(r&&"object"==typeof r)for(var a,i=Object.keys(r).sort(),u=0;u<i.length;u++){if(a=i[u],!o.test(a))throw new TypeError("invalid parameter name");n+="; "+a+"="+p(r[a])}return n},r.parse=function(e){if(!e)throw new TypeError("argument string is required");var r="object"==typeof e?function(e){var r;"function"==typeof e.getHeader?r=e.getHeader("content-type"):"object"==typeof e.headers&&(r=e.headers&&e.headers["content-type"]);if("string"!=typeof r)throw new TypeError("content-type header is missing from object");return r}(e):e;if("string"!=typeof r)throw new TypeError("argument string is required to be a string");var t=r.indexOf(";"),a=-1!==t?r.substr(0,t).trim():r.trim();if(!f.test(a))throw new TypeError("invalid media type");var o=new s(a.toLowerCase());if(-1!==t){var u,p,w;for(n.lastIndex=t;p=n.exec(r);){if(p.index!==t)throw new TypeError("invalid parameter format");t+=p[0].length,u=p[1].toLowerCase(),'"'===(w=p[2])[0]&&(w=w.substr(1,w.length-2).replace(i,"$1")),o.parameters[u]=w}if(t!==r.length)throw new TypeError("invalid parameter format")}return o}}}]);