Array.prototype.First=function(t){if(null==t||"function"!=typeof t)throw"Predicate is not a function!";for(var e,n=0;n<this.length;++n)t(this[n])&&(e=this[n]);return e},Array.prototype.Last=function(t){if(null!==t){var e=this.filter(t);return e[e.length-1]}return this[this.length-1]},Array.prototype.Where=function(t){return this.filter(t)},Array.prototype.Select=function(t,e){var n=new Array;if(null==t||"function"!=typeof t)throw"Action is not a function!";for(var r=0;r<this.length;++r)n.push(t(this[r],e));return n},Element.prototype.All=function(t){if(null==t||"function"!=typeof t)throw"Predicate is not a function!";return this.GetIterator(t).ToList()},Element.prototype.AllChildren=function(t){var e=this.firstElementChild,n=new Array;if(null!==e){n.push(e);for(var r=e.nextElementSibling;null!=r;)n.push(r),r=r.nextElementSibling;return n}},Object.prototype.IsArray=function(){return null!=this&&void 0!==this.length},Object.prototype.HasProperty=function(t){return void 0!==this[t]},Object.prototype.AddProperty=function(t,e){return this.HasProperty(t)||(this[t]=e),this};var GetById=function(t){var e=document.getElementById(t);return null!==e&&void 0!==e.length&&e.length>=1?e[0].AddProperty("Type",e[0].nodeName.toLowerCase()):e.AddProperty("Type",e.nodeName.toLowerCase())},GetByClass=function(t){return document.getElementsByClassName(t)},GetByTagName=function(t){return document.getElementsByTagName(t)},RemoveAllFromDom=function(t){for(var e=GetByTagName(t)[0];null!==e;)e.remove(),e=GetByTagName(t)[0]},IsPrimitive=function(t){var e=typeof t;return"number"===e||"string"===e||"boolean"===e},IsUndefined=function(t){return void 0===t},IsFunction=function(t){return"function"==typeof t},IsObject=function(t){return"object"==typeof t},HtmlTags={div:"div",image:"img",link:"a",script:"script",iframe:"iframe"},Children={isImage:function(t){return null!=t&&null!=t.firstElementChild&&t.firstElementChild.tagName.toLocaleLowerCase()===HtmlTags.image},isDiv:function(t){return null!=t&&null!=t.firstElementChild&&t.firstElementChild.tagName.toLocaleLowerCase()===HtmlTags.div},isThumbnail:function(t){if(null==t||null==t.firstElementChild)return!1;var e=t.firstElementChild,n=e.firstElementChild;return null!=e&&null!=n&&(e.tagName.toLocaleLowerCase()===HtmlTags.div&&n.tagName.toLocaleLowerCase()===HtmlTags.image)}},Thumbail={GetImageSrc:function(t){var e=t.firstElementChild,n=e.firstElementChild;return null!=e&&null!=n&&n.getAttribute("src")},ToDownloadable:function(t,e){var n;return t.removeAttribute("onclick"),n=null===e?Thumbail.GetDefaultImageData(t):e(Thumbail.GetImageSrc(t)),t.setAttribute("download",n.Title),t.setAttribute("src",n.NewSrc),t},GetDefaultImageData:function(t){var e=Thumbail.GetImageSrc(t);return{Title:e.split("/").Last().split(".").Last(),NewSrc:e}}};