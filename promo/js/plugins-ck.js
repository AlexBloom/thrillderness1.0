// Avoid `console` errors in browsers that lack a console.
(function(){var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};while(r--){e=n[r];i[e]||(i[e]=t)}})();(function(e){function n(e){return typeof e=="object"?e:{top:e,left:e}}var t=e.scrollTo=function(t,n,r){e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}typeof s=="function"&&(s={onAfter:s});r=="max"&&(r=9e9);s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;s.queue&&(i/=2);s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function d(e){u.animate(c,i,s.easing,e&&function(){e.call(this,a,s)})}if(r==null)return;var o=this,u=e(o),a=r,l,c={},p=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=e(a,this);if(!a.length)return;case"object":if(a.is||a.style)l=(a=e(a)).offset()}e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),f="scroll"+r,v=o[f],m=t.max(o,n);if(l){c[f]=l[i]+(p?0:v-u.offset()[i]);if(s.margin){c[f]-=parseInt(a.css("margin"+r))||0;c[f]-=parseInt(a.css("border"+r+"Width"))||0}c[f]+=s.offset[i]||0;s.over[i]&&(c[f]+=a[n=="x"?"width":"height"]()*s.over[i])}else{var y=a[i];c[f]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*m:y}s.limit&&/^\d+$/.test(c[f])&&(c[f]=c[f]<=0?0:Math.min(c[f],m));if(!e&&s.queue){v!=c[f]&&d(s.onAfterFirst);delete c[f]}});d(s.onAfter)}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])}})(jQuery);(function(e){function r(t,n,r){var i=n.hash.slice(1),s=document.getElementById(i)||document.getElementsByName(i)[0];if(!s)return;t&&t.preventDefault();var o=e(r.target);if(r.lock&&o.is(":animated")||r.onBefore&&r.onBefore(t,s,o)===!1)return;r.stop&&o._scrollable().stop(!0);if(r.hash){var u=r.offset;u=u&&u.top||u||0;var a=s.id==i?"id":"name",f=e("<a> </a>").attr(a,i).css({position:"absolute",top:e(window).scrollTop()+u,left:e(window).scrollLeft()});s[a]="";e("body").prepend(f);location=n.hash;f.remove();s[a]=i}o.scrollTo(s,r).trigger("notify.serialScroll",[s])}var t=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:350,axis:"y",event:"click",stop:!0,target:window};n.hash=function(t){if(location.hash){t=e.extend({},n.defaults,t);t.hash=!1;if(t.reset){var s=t.duration;delete t.duration;e(t.target).scrollTo(0,t);t.duration=s}r(0,location,t)}};e.fn.localScroll=function(s){function o(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!s.filter||e(this).is(s.filter))}s=e.extend({},n.defaults,s);return s.lazy?this.bind(s.event,function(t){var n=e([t.target,t.target.parentNode]).filter(o)[0];n&&r(t,n,s)}):this.find("a,area").filter(o).bind(s.event,function(e){r(e,this,s)}).end().end()}})(jQuery);!function(e,t,n,r){function i(t,n){this.element=t,this.options=e.extend({},o,n),this._defaults=o,this._name=s,this.init()}var s="stellar",o={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},u={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return-1*parseInt(e.css("left"),10)},getTop:function(e){return-1*parseInt(e.css("top"),10)}},margin:{getLeft:function(e){return-1*parseInt(e.css("margin-left"),10)},getTop:function(e){return-1*parseInt(e.css("margin-top"),10)}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[l];return"none"!==t?-1*parseInt(t.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(e){var t=getComputedStyle(e[0])[l];return"none"!==t?-1*parseInt(t.match(/(-?[0-9]+)/g)[5],10):0}}},a={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[l]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},f=function(){var t,n=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,r=e("script")[0].style,i="";for(t in r)if(n.test(t)){i=t.match(n)[0];break}return"WebkitOpacity"in r&&(i="Webkit"),"KhtmlOpacity"in r&&(i="Khtml"),function(e){return i+(i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),l=f("transform"),c=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,h=c?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},p=c?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},d=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};i.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=u[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=u[t.options.scrollProperty],r=a[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft="function"==typeof i?function(e){i(t.$scrollElement,e)}:e.noop,this._setScrollTop="function"==typeof s?function(e){s(t.$scrollElement,e)}:e.noop,this._setPosition=r.setPosition||function(e,n,i,s,o){t.options.horizontalScrolling&&r.setLeft(e,n,i),t.options.verticalScrolling&&r.setTop(e,s,o)}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);n.options.responsive&&r.bind("load."+this.name,function(){n.refresh()}),r.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();n&&n.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1),r._setScrollTop(t+1),r._setScrollLeft(e),r._setScrollTop(t)}),this._setScrollLeft(i),this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=null!==e&&e!==r;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this;this._getScrollLeft(),this._getScrollTop();if(this.particles!==r)for(var n=this.particles.length-1;n>=0;n--)this.particles[n].$element.data("stellar-elementIsActive",r);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var n,i,s,o,u,a,f,l,c,h=e(this),p=0,d=0,v=0,m=0;if(h.data("stellar-elementIsActive")){if(h.data("stellar-elementIsActive")!==this)return}else h.data("stellar-elementIsActive",this);t.options.showElement(h),h.data("stellar-startingLeft")?(h.css("left",h.data("stellar-startingLeft")),h.css("top",h.data("stellar-startingTop"))):(h.data("stellar-startingLeft",h.css("left")),h.data("stellar-startingTop",h.css("top"))),s=h.position().left,o=h.position().top,u="auto"===h.css("margin-left")?0:parseInt(h.css("margin-left"),10),a="auto"===h.css("margin-top")?0:parseInt(h.css("margin-top"),10),l=h.offset().left-u,c=h.offset().top-a,h.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(p=v,d=m,f=t,!1):(v+=t.position().left,void (m+=t.position().top))}),n=h.data("stellar-horizontal-offset")!==r?h.data("stellar-horizontal-offset"):f!==r&&f.data("stellar-horizontal-offset")!==r?f.data("stellar-horizontal-offset"):t.horizontalOffset,i=h.data("stellar-vertical-offset")!==r?h.data("stellar-vertical-offset"):f!==r&&f.data("stellar-vertical-offset")!==r?f.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:h,$offsetParent:f,isFixed:"fixed"===h.css("position"),horizontalOffset:n,verticalOffset:i,startingPositionLeft:s,startingPositionTop:o,startingOffsetLeft:l,startingOffsetTop:c,parentOffsetLeft:p,parentOffsetTop:d,stellarRatio:h.data("stellar-ratio")!==r?h.data("stellar-ratio"):1,width:h.outerWidth(!0),height:h.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t,n=this,i=this._getScrollLeft(),s=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(t=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(t=t.add(this.$element)),t.each(function(){var t,o,u,a,f,l,c,d=e(this),v=p(d),g=0,y=0,b=0,w=0;if(d.data("stellar-backgroundIsActive")){if(d.data("stellar-backgroundIsActive")!==this)return}else d.data("stellar-backgroundIsActive",this);d.data("stellar-backgroundStartingLeft")?h(d,d.data("stellar-backgroundStartingLeft"),d.data("stellar-backgroundStartingTop")):(d.data("stellar-backgroundStartingLeft",v[0]),d.data("stellar-backgroundStartingTop",v[1])),u="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),a="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),f=d.offset().left-u-i,l=d.offset().top-a-s,d.parents().each(function(){var t=e(this);return t.data("stellar-offset-parent")===!0?(g=b,y=w,c=t,!1):(b+=t.position().left,void (w+=t.position().top))}),t=d.data("stellar-horizontal-offset")!==r?d.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):n.horizontalOffset,o=d.data("stellar-vertical-offset")!==r?d.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):n.verticalOffset,n.backgrounds.push({$element:d,$offsetParent:c,isFixed:"fixed"===d.css("background-attachment"),horizontalOffset:t,verticalOffset:o,startingValueLeft:v[0],startingValueTop:v[1],startingBackgroundPositionLeft:isNaN(parseInt(v[0],10))?0:parseInt(v[0],10),startingBackgroundPositionTop:isNaN(parseInt(v[1],10))?0:parseInt(v[1],10),startingPositionLeft:d.position().left,startingPositionTop:d.position().top,startingOffsetLeft:f,startingOffsetTop:l,parentOffsetLeft:g,parentOffsetTop:y,stellarRatio:d.data("stellar-background-ratio")===r?1:d.data("stellar-background-ratio")})}))},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--)e=this.particles[i],t=e.$element.data("stellar-startingLeft"),n=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,n,n),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(i=this.backgrounds.length-1;i>=0;i--)r=this.backgrounds[i],r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),h(r.$element,r.startingValueLeft,r.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e,t,n,r,i,s,o,u,a,f,l=this._getScrollLeft(),c=this._getScrollTop(),p=!0,d=!0;if(this.currentScrollLeft!==l||this.currentScrollTop!==c||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=l,this.currentScrollTop=c,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;f>=0;f--)e=this.particles[f],t=e.isFixed?1:0,this.options.horizontalScrolling?(s=(l+e.horizontalOffset+this.viewportOffsetLeft+e.startingPositionLeft-e.startingOffsetLeft+e.parentOffsetLeft)*-(e.stellarRatio+t-1)+e.startingPositionLeft,u=s-e.startingPositionLeft+e.startingOffsetLeft):(s=e.startingPositionLeft,u=e.startingOffsetLeft),this.options.verticalScrolling?(o=(c+e.verticalOffset+this.viewportOffsetTop+e.startingPositionTop-e.startingOffsetTop+e.parentOffsetTop)*-(e.stellarRatio+t-1)+e.startingPositionTop,a=o-e.startingPositionTop+e.startingOffsetTop):(o=e.startingPositionTop,a=e.startingOffsetTop),this.options.hideDistantElements&&(d=!this.options.horizontalScrolling||u+e.width>(e.isFixed?0:l)&&u<(e.isFixed?0:l)+this.viewportWidth+this.viewportOffsetLeft,p=!this.options.verticalScrolling||a+e.height>(e.isFixed?0:c)&&a<(e.isFixed?0:c)+this.viewportHeight+this.viewportOffsetTop),d&&p?(e.isHidden&&(this.options.showElement(e.$element),e.isHidden=!1),this._setPosition(e.$element,s,e.startingPositionLeft,o,e.startingPositionTop)):e.isHidden||(this.options.hideElement(e.$element),e.isHidden=!0);for(f=this.backgrounds.length-1;f>=0;f--)n=this.backgrounds[f],t=n.isFixed?0:1,r=this.options.horizontalScrolling?(l+n.horizontalOffset-this.viewportOffsetLeft-n.startingOffsetLeft+n.parentOffsetLeft-n.startingBackgroundPositionLeft)*(t-n.stellarRatio)+"px":n.startingValueLeft,i=this.options.verticalScrolling?(c+n.verticalOffset-this.viewportOffsetTop-n.startingOffsetTop+n.parentOffsetTop-n.startingBackgroundPositionTop)*(t-n.stellarRatio)+"px":n.startingValueTop,h(n.$element,r,i)}},_handleScrollEvent:function(){var e=this,t=!1,n=function(){e._repositionElements(),t=!1},r=function(){t||(d(n),t=!0)};this.$scrollElement.bind("scroll."+this.name,r),r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){d(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[s]=function(t){var n=arguments;return t===r||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new i(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var r=e.data(this,"plugin_"+s);r instanceof i&&"function"==typeof r[t]&&r[t].apply(r,Array.prototype.slice.call(n,1)),"destroy"===t&&e.data(this,"plugin_"+s,null)}):void 0},e[s]=function(){var n=e(t);return n.stellar.apply(n,Array.prototype.slice.call(arguments,0))},e[s].scrollProperty=u,e[s].positionProperty=a,t.Stellar=i}(jQuery,this,document);