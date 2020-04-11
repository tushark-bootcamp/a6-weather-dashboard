
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-drop-down-button",class extends Smart.ContentElement{static get properties(){return{autoCloseDelay:{value:100,type:"number"},dropDownAppendTo:{value:null,type:"any"},dropDownButtonPosition:{allowedValues:["none","left","right","top","bottom"],value:"right",type:"string"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"default",type:"string"},dropDownOverlay:{value:!1,type:"boolean"},dropDownPlaceholder:{value:"No Items",type:"string"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},hint:{value:"",type:"string"},horizontalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},label:{value:"",type:"string"},messages:{extend:!0,value:{en:{invalidNode:"smart-drop-down-button: Invalid parameter \"{{node}}\" when calling {{method}}."}},type:"object"},opened:{value:!1,type:"boolean"},placeholder:{value:"",type:"string"},resizeIndicator:{value:!1,type:"boolean"},resizeMode:{value:"none",allowedValues:["none","horizontal","vertical","both"],type:"string"},verticalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]}}}static get listeners(){return{"actionButton.down":"_buttonsDownHandler","actionButton.mouseenter":"_buttonsMouseEventsHandler","actionButton.mouseleave":"_buttonsMouseEventsHandler","document.selectstart":"_selectStartHandler","document.dragstart":"_dragStartHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.move":"_documentMoveHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",focus:"_focusEventHandler",blur:"_blurEventHandler","dropDownContainer.transitionend":"_dropDownTransitionendHandler",mouseenter:"_mouseEnterHandler",mouseleave:"_mouseLeaveHandler",resize:"_resizeHandler","resizeBar.move":"_resizeBarMoveHandler",styleChanged:"_styleChangedHandler"}}template(){return`<div id="container" role="presentation">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content" role="presentation">
                        <div id="buttonsContainer" class="smart-buttons-container" role="presentation">
                            <span id="actionButton" class="smart-action-button">[[placeholder]]</span>
                            <span id="dropDownButton" class="smart-drop-down-button">
                                <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>
                            </span>
                        </div>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="dialog">
                            <smart-scroll-viewer id="scrollViewer"
                                right-to-left="[[rightToLeft]]"
                                horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]">
                                <content></content>
                            </smart-scroll-viewer>
                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}static get styleUrls(){return["smart.scrollviewer.css","smart.dropdown.css","smart.dropdownbutton.css"]}attached(){const a=this;super.attached();a.isCompleted&&a.$.dropDownContainer&&(a._positionDetection.dropDownAttached("_setDropDownSize"),a._positionDetection.checkBrowserBounds())}detached(){const a=this;super.detached();a.$.dropDownContainer&&(a.close(),a._positionDetection.dropDownDetached())}propertyChangedHandler(a,b,c){const d=this;"disabled"===a||"unfocusable"===a?d._setFocusable():"dropDownAppendTo"===a?d._positionDetection.dropDownAppendToChangedHandler():"dropDownHeight"===a||"dropDownMaxHeight"===a||"dropDownMaxWidth"===a||"dropDownMinHeight"===a||"dropDownMinWidth"===a||"dropDownWidth"===a?d._setDropDownSize():"dropDownOpenMode"===a?(d._setFocusable(),d.close(),d._setAriaRelations()):"dropDownOverlay"===a?c||d._positionDetection.removeOverlay():"dropDownPlaceholder"===a?d.$.dropDownContainer.hasAttribute("empty")&&(d.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=c,d.opened&&d.$.scrollViewer.refresh()):"dropDownPosition"===a?d._positionDetection.dropDownPositionChangedHandler():"innerHTML"===a?(""===c.trim()?(d.$.dropDownContainer.setAttribute("empty",""),requestAnimationFrame(()=>d.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=d.dropDownPlaceholder)):(d.$.dropDownContainer.removeAttribute("empty"),d.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=c),d.opened&&d.$.scrollViewer.refresh()):"opened"===a?c?d.open():d.close():"placeholder"===a?(""===b||""===c)&&d._setFocusable():"resizeIndicator"===a?c?d.$.dropDownContainer.setAttribute("resize-indicator",""):d.$.dropDownContainer.removeAttribute("resize-indicator"):"resizeMode"===a?(d.$.dropDownContainer.setAttribute("resize-mode",d.resizeMode),d.opened&&d.$.scrollViewer.refresh()):"label"===a?c?d._ariaButton.setAttribute("aria-labelledby",d.$.label.id):"DropDownButton"===d.elementName&&d._ariaButton.setAttribute("aria-labelledby",d.$.actionButton.id):void 0}appendChild(a){const b=this;if(!b.isCompleted||a instanceof HTMLElement&&a.classList.contains("smart-resize-trigger-container")){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(b.$.scrollViewer.appendChild(a),b.opened&&b.$.scrollViewer.refresh()):void b.error(b.localize("invalidNode",{method:"removeChild",node:"node"}))}removeChild(a){const b=this;if(!b.isCompleted||a instanceof HTMLElement&&a.classList.contains("smart-resize-trigger-container")){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(!b.$.dropDownContainer.contains(a)||(b.$.scrollViewer.removeChild(a),b.opened&&b.$.scrollViewer.refresh())):void b.error(b.localize("invalidNode",{method:"removeChild",node:"node"}))}removeAll(){const a=this;a.isCompleted&&a.$.scrollViewer.removeAll()}_open(){const a=this;if(!a.disabled&&a.offsetHeight&&a.$dropDownContainer.hasClass("smart-visibility-hidden")){if(a.$dropDownContainer.hasClass("not-in-view")&&a.$dropDownContainer.removeClass("not-in-view"),a.$.dropDownContainer.style.transition=null,a.dropDownAppendTo&&0<a.dropDownAppendTo.length){const b=a.getBoundingClientRect();if(a.$.container.contains(a.$.dropDownContainer)){let b=0;const c=setInterval(function(){const d=a.getBoundingClientRect();b++,d.top===a._positionTop&&10>b||(a.open(),clearInterval(c),a._positionTop=d.top)},100);return}b.top!==a._positionTop&&(a._positionTop=b.top)}const b=a.$.fireEvent("opening").defaultPrevented;b||(a.opened=!0,a._ariaButton.setAttribute("aria-expanded",!0),a._positionDetection.placeOverlay(),a._positionDetection.checkBrowserBounds("vertically"),a._positionDetection.positionDropDown(),a._positionDetection.checkBrowserBounds("horizontally"),a.$dropDownContainer.removeClass("smart-visibility-hidden"),a.$.fireEvent("open"),a.$.dropDownButton&&("dropDownButton"===a.dropDownOpenMode?a.$.dropDownButton.setAttribute("selected",""):a.$.dropDownButton.removeAttribute("selected")),a.$.input&&a.$.input.focus())}}open(){const a=this,b=document.querySelectorAll("smart-drop-down-button, smart-color-picker");for(let c=0;c<b.length;c++)b[c]!==a&&b[c].opened&&b[c].close();a._open(),a.$.scrollViewer.refresh()}scrollTo(a,b){const c=this;c.isCompleted&&c.$.scrollViewer.scrollTo(a,b)}ready(){super.ready()}render(){const a=this;a.classList.add("smart-drop-down-box"),a._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),a._positionDetection=new Smart.Utilities.PositionDetection(a,a.$.dropDownContainer,a.$.container,"close"),a._positionDetection.getDropDownParent(!0),a._positionDetection.setDropDownPosition(),a._calculateDropDownSize(),a.$.dropDownContainer.setAttribute("resize-mode",a.resizeMode),a.resizeIndicator&&a.$.dropDownContainer.setAttribute("resize-indicator",""),a._positionDetection.handleAutoPositioning(),a.$.label&&!a.$.label.id&&(a.$.label.id=a.id+"Label"),a.$.actionButton&&!a.$.actionButton.id&&(a.$.actionButton.id=a.id+"ActionButton"),a.$.hint&&!a.$.hint.id&&(a.$.hint.id=a.id+"Hint"),a._createElement(),a.opened?a.open():a.hasAnimation&&a._edgeMacFF&&a.$dropDownContainer.addClass("not-in-view"),a._positionTop=a.getBoundingClientRect().top,super.render()}_setAriaRelations(a){const b=this;let c,d;"dropDownButton"===b.dropDownOpenMode?(c=b,d=b.$.dropDownButton,d.removeAttribute("aria-hidden"),b.$.actionButton.setAttribute("role","button")):(c=b.$.dropDownButton,c.setAttribute("aria-hidden",!0),d=b,b.$.actionButton.removeAttribute("role")),b._ariaButton=d,d.setAttribute("role","button"),d.setAttribute("aria-haspopup","dialog"),d.setAttribute("aria-owns",b.$.dropDownContainer.id),d.setAttribute("aria-describedby",b.$.hint.id),b.label?d.setAttribute("aria-labelledby",b.$.label.id):"DropDownButton"===b.elementName&&d.setAttribute("aria-labelledby",b.$.actionButton.id),c.setAttribute("role","presentation"),a?b.opened&&d.setAttribute("aria-expanded",!0):(c.removeAttribute("aria-haspopup"),c.removeAttribute("aria-owns"),c.removeAttribute("aria-describedby"),c.removeAttribute("aria-labelledby"))}_setDropDownSize(){const a=this;a._dropDownSize||a._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach(b=>{a.$.dropDownContainer.style[b.replace("dropDown","").replace(/^./,"m")]=a[b]?a[b]+(a[b].toString().endsWith("%")?"%":"px"):null}),a.$.dropDownContainer.style.width=a.dropDownWidth?"auto"===a.dropDownWidth?"auto":("initial"===a.dropDownWidth?a.offsetWidth:parseFloat(a.dropDownWidth))+"px":"auto"===a._dropDownSize.width?"auto":(parseFloat(a._dropDownSize.width)||0)+"px",a.$.dropDownContainer.style.height=a.dropDownHeight&&"auto"!==a.dropDownHeight?parseFloat(a.dropDownHeight)+(-1<(a.dropDownHeight+"").indexOf("%")?"%":"px"):a._dropDownSize.height}_setFocusable(){const a=this;if(a.disabled||a.unfocusable)return a.removeAttribute("tabindex"),a.$.actionButton.removeAttribute("tabindex"),void a.$.dropDownButton.removeAttribute("tabindex");let b=0<a.tabIndex?a.tabIndex:0;a.$.actionButton.removeAttribute("tabindex"),a.$.dropDownButton.removeAttribute("tabindex"),a.tabIndex=b}_calculateDropDownSize(){const a=this;a._dropDownSize={};const b=window.getComputedStyle(a.$.dropDownContainer),c=parseFloat(b.getPropertyValue("border-top-width").trim()),d=parseFloat(b.getPropertyValue("border-bottom-width").trim()),e=parseFloat(b.getPropertyValue("margin-top").trim()),f=parseFloat(b.getPropertyValue("margin-bottom").trim()),g=parseFloat(b.getPropertyValue("padding-top").trim()),h=parseFloat(b.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(a._dropDownSize.width=b.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),a._dropDownSize.height=b.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!a._dropDownSize.width||-1<a._dropDownSize.width.indexOf("initial"))&&(a._dropDownSize.width=a.offsetWidth),a._dropDownSize.height||(a._dropDownSize.height="auto"),a._dropDownSize.minHeight=parseFloat(b.getPropertyValue("min-height").trim()),a._dropDownSize.maxHeight=parseFloat(b.getPropertyValue("max-height").trim()),a._dropDownSize.borderWidth=(isNaN(c)?0:c)+(isNaN(d)?0:d),a._dropDownSize.paddingWidth=(isNaN(g)?0:g)+(isNaN(h)?0:h),a._dropDownSize.marginWidth=(isNaN(e)?0:e)+(isNaN(f)?0:f)}_createElement(){const a=this;""===a.innerHTML.trim()&&(a.$.dropDownContainer.setAttribute("empty",""),a.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=a.dropDownPlaceholder),a._setDropDownSize(),a._setFocusable(),a._setAriaRelations(!0),a.$.arrow.noRipple=!0}_dragStartHandler(a){const b=this;b._resizeDetails&&b._resizeDetails.started&&a.preventDefault()}_dropDownTransitionendHandler(){const a=this;a._edgeMacFF&&!a.opened&&a.hasAnimation&&(a.$.dropDownContainer.style.top=a.$.dropDownContainer.style.left="",a.$dropDownContainer.addClass("not-in-view"))}_blurEventHandler(){const a=this;a.$.dropDownButton&&(a.removeAttribute("focus"),a.$.dropDownButton.removeAttribute("focus")),a.$.actionButton&&(a.removeAttribute("focus"),a.$.actionButton.removeAttribute("focus"))}_focusEventHandler(){const a=this;a.$.dropDownButton&&(a.setAttribute("focus",""),a.$.dropDownButton.setAttribute("focus","")),a.$.actionButton&&(a.setAttribute("focus",""),a.$.actionButton.setAttribute("focus",""))}_getUpEventTarget(a){const b=this;let c=a;if(c===b.$.dropDownContainer)return"dropDownContainer";for(c=void 0===c.parentElement?c.getRootNode().host:c.parentElement;c;){if(c===b.$.dropDownContainer){c="dropDownContainer";break}c=c.parentElement===void 0?c.getRootNode().host:c.parentElement}return c}close(){const a=this;if(!a.$dropDownContainer.hasClass("smart-visibility-hidden")){const b=a.$.fireEvent("closing").defaultPrevented;b||(a.$dropDownContainer.addClass("smart-visibility-hidden"),a.$.fireEvent("close"),a.$.dropDownButton&&a.$.dropDownButton.removeAttribute("selected"),a.opened=!1,a._ariaButton.removeAttribute("aria-expanded"),a._preventDropDownClose=!1,a._positionDetection.removeOverlay(!0),a._edgeMacFF&&!a.hasAnimation&&(a.$.dropDownContainer.style.top=a.$.dropDownContainer.style.left="",a.$dropDownContainer.addClass("not-in-view")))}}_documentUpHandler(a){const b=this,c=b.hasAttribute("resizing");if(b.$.actionButton.removeAttribute("active"),b._resizeDetails&&b._resizeDetails.started)return b._resizeDetails.started=b._resizeDetails.resizeEventFired=!1,b.removeAttribute("resizing"),b._preventDropDownClose=!1,b.focus(),void b.$.fireEvent("resizeEnd",{position:{left:a.pageX,top:a.pageY}});if(b.disabled||b._isDropDownClicked||b.readonly)return void delete b._isDropDownClicked;if(b._overlayDown)return b.close(),void delete b._overlayDown;let d=a.originalEvent.target;if(b.enableShadowDOM&&(d=a.originalEvent.composedPath()[0]),b._preventsSelectStart=!1,"undefined"!=typeof d&&d!==b.$.resizeBar){const a=d.closest(".smart-action-button");if(b._buttonClicked&&("dropDownButton"===b.dropDownOpenMode&&a&&b._buttonClicked===b.$.actionButton?b.$.fireEvent("actionButtonClick"):(d.closest(".smart-drop-down-button")===b._buttonClicked||a===b._buttonClicked)&&b.$.fireEvent("dropDownButtonClick")),b._buttonClicked=void 0,!b.editable&&a===b.$.actionButton||d.closest(".smart-drop-down-button")===b.$.dropDownButton)return"dropDownButton"===b.dropDownOpenMode&&a===b.$.actionButton?void b.close():void(b.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==b.dropDownOpenMode?b.open():b.close());d=b._getUpEventTarget(d),void 0===d||(("dropDownContainer"!==d&&"item"!==d||"item"===d&&"checkBox"!==b.selectionMode&&0>b.selectionMode.indexOf("Many"))&&b.close(),c&&b.$.scrollViewer&&b.$.scrollViewer.refresh())}}_keyDownHandler(a){const b=this,c=(b.shadowRoot||b.getRootNode()).activeElement||document.activeElement;if(!(b.disabled||b.readonly||c!==b&&c!==b.$.dropDownButton&&c!==b.$.actionButton))switch(a.key){case"Enter":case" ":a.preventDefault(),a.target!==b.$.actionButton&&(b.opened&&"Enter"===a.key?b.close():!b.opened&&!b.readonly&&"none"!==b.dropDownOpenMode&&b.open());break;case"End":b.$.scrollViewer.scrollTop=b.$.scrollViewer.scrollHeight;break;case"Home":b.$.scrollViewer.scrollTop=0;break;case"PageUp":case"PageDown":b.$.scrollViewer.scrollTop+=(-1<a.key.indexOf("Down")?1:-1)*b.$.dropDownContainer.offsetHeight;break;case"ArrowUp":case"ArrowDown":if(a.altKey)return void(b.disabled||b.readonly||"none"===b.dropDownOpenMode||(b.$dropDownContainer.hasClass("smart-visibility-hidden")?b.open():b.close()));a.preventDefault(),b.$.scrollViewer.scrollTop+=10*(-1<a.key.indexOf("Down")?1:-1);break;case"Escape":a.preventDefault(),b.close();}}_propertyValidator(a,b){return"number"!=typeof b&&"string"!=typeof b?a:b}_mouseEnterHandler(){const a=this;a._isElementHovered=!0,"auto"!==a.dropDownOpenMode||a.disabled||a.readonly||a.open()}_mouseLeaveHandler(){const a=this;a.removeAttribute("hover"),a._isElementHovered=!1,"auto"!==a.dropDownOpenMode||a.disabled||a.readonly||a._autoClose()}_autoClose(){const a=this;a._autoCloseTimeout=setTimeout(function(){a._isElementHovered||a.close(),clearTimeout(a._autoCloseTimeout)}.bind(a),a.autoCloseDelay)}_documentMoveHandler(a){function b(){if(l=a.pageY-f._resizeDetails.y,"bottom"===k)f._resizeDetails.height=d(h.clientHeight-i.top-6,e(0,f._resizeDetails.height+l)),f._resizeDetails.y=e(i.top+h.scrollTop-f._resizeDetails.offsetY,d(h.clientHeight+h.scrollTop-1.5*f._resizeDetails.offsetY,a.pageY));else{if(f._resizeDetails.height=d(f._dropDownSize.maxHeight,e(0,d(j.top,f._resizeDetails.height-l))),l=e(0,i.top+(i.height-e(f._dropDownSize.minHeight,f._resizeDetails.height))),f.dropDownAppendTo&&0<f.dropDownAppendTo.length){const a=Math.abs(parseFloat(getComputedStyle(f.$.dropDownContainer).getPropertyValue("margin-bottom")))||0;f.$.dropDownContainer.style.top=f.dropDownAppendTo&&0<f.dropDownAppendTo.length?a+l+"px":""}const b=j.top+h.scrollTop+f._resizeDetails.offsetYtop;f._resizeDetails.y=e(f._resizeDetails.offsetYtop,d(b,e(b-f._dropDownSize.maxHeight,a.pageY)))}f.$.dropDownContainer.style.height=f._resizeDetails.height+"px"}function c(){l=a.pageX-f._resizeDetails.x,f._resizeDetails.width=d(h.clientWidth-i.left-6,e(0,f._resizeDetails.width+l)),f.$.dropDownContainer.style.width=f._resizeDetails.width+"px",f._resizeDetails.x=e(i.left+h.scrollLeft-f._resizeDetails.offsetXR,d(h.clientWidth+h.scrollLeft-1.5*f._resizeDetails.offsetXR,a.pageX))}var d=Math.min,e=Math.max;const f=this,g=f.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if("auto"===f.dropDownOpenMode&&null!==f.dropDownAppendTo&&(f.contains(g)||f.$.dropDownContainer.contains(g)?f._isElementHovered=!0:(f._isElementHovered=!1,f._autoClose())),!f._resizeDetails||f._resizeDetails&&!f._resizeDetails.started)return;f.setAttribute("resizing",""),f._resizeDetails.resizeEventFired||(f.$.fireEvent("resizeStart",{position:{left:a.pageX,top:a.pageY}}),f._resizeDetails.resizeEventFired=!0);const h=document.documentElement,i=f.$.dropDownContainer.getBoundingClientRect(),j=f.getBoundingClientRect(),k=f.$.dropDownContainer.hasAttribute("top")?"top":"bottom";let l;switch(f.resizeMode){case"vertical":b();break;case"horizontal":c();break;case"both":c(),b();}}_documentDownHandler(a){const b=this;if(b.disabled||b.readonly)return;let c=a.originalEvent.target;if(c===b._overlay&&(b._overlayDown=!0),b.enableShadowDOM){c=a.originalEvent.composedPath()[0];for(let a=c;a;){if(a.closest(".smart-drop-down-container")===b.$.dropDownContainer){b._isDropDownClicked=!0;break}a=a.getRootNode().host}}else b._isDropDownClicked=c.closest(".smart-drop-down-container")===b.$.dropDownContainer;if(b._buttonClicked=c.closest(".smart-action-button")||c.closest(".smart-drop-down-button"),b._isDropDownClicked&&(b._preventDropDownClose=!0),c===b.$.resizeBar&&"none"!==b.resizeMode){b._resizeDetails||(b._resizeDetails={});const c=b.$.dropDownContainer.getBoundingClientRect();b._resizeDetails.started=!0,b._resizeDetails.x=a.pageX,b._resizeDetails.y=a.pageY,b._resizeDetails.width=b.$.dropDownContainer.offsetWidth,b._resizeDetails.height=b.$.dropDownContainer.offsetHeight,b._resizeDetails.offsetXL=a.clientX-c.left,b._resizeDetails.offsetXR=c.left+b.$.dropDownContainer.offsetWidth-a.clientX,b._resizeDetails.offsetY=c.top+b.$.dropDownContainer.offsetHeight-a.clientY,b._resizeDetails.offsetYtop=a.clientY-c.top,b._preventDropDownClose=!0}}_resizeHandler(){const a=this;"none"===a.resizeMode&&(a._calculateDropDownSize(),a._setDropDownSize())}_resizeBarMoveHandler(a){"touchmove"===a.originalEvent.type&&a.originalEvent.preventDefault()}_styleChangedHandler(a){const b=this;if(b.dropDownAppendTo&&0<b.dropDownAppendTo.length){const c=a.detail.styleProperties,d=["font-size","font-family","font-style","font-weight"];for(let a=0;a<d.length;a++)c[d[a]]&&(b.$.dropDownContainer.style[d[a]]=c[d[a]].value)}b._dropDownSize&&"auto"===b._dropDownSize.height&&b._setDropDownSize()}_buttonsDownHandler(a){const b=this;if(!b.disabled){if(b.hasRippleAnimation)if("dropDownButton"===b.dropDownOpenMode)Smart.Utilities.Animation.Ripple.animate(a.target,a.pageX,a.pageY);else if(a.target===b.$.dropDownButton||!b.editable){const c=b.$.buttonsContainer;c.firstElementChild.noRipple=!0,Smart.Utilities.Animation.Ripple.animate(c,a.pageX,a.pageY),c.firstElementChild.noRipple=!1}b._preventsSelectStart=!0,"dropDownButton"===b.dropDownOpenMode&&a.target===b.$.actionButton&&b.$.actionButton.setAttribute("active",""),b.opened&&(b._preventDropDownClose=!0)}}_buttonsMouseEventsHandler(a){const b=this;b.disabled||("mouseenter"===a.type?(b.setAttribute("hover",""),a.target.setAttribute("hover","")):(b.removeAttribute("hover"),a.target.removeAttribute("hover")))}_selectStartHandler(a){this._preventsSelectStart&&a.preventDefault()}});