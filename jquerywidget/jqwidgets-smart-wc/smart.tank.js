
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-tank",class extends Smart.BaseElement{static get properties(){return{coerce:{value:!1,type:"boolean"},customInterval:{value:!1,type:"boolean"},customTicks:{reflectToAttribute:!1,value:["0","50","100"],type:"array"},dateLabelFormatString:{value:"d",type:"string"},decimalSeparator:{value:".",type:"string"},interval:{value:"1",type:"any"},inverted:{value:!1,type:"boolean"},labelFormatFunction:{value:null,type:"function?"},labelsVisibility:{value:"all",allowedValues:["all","endPoints","none"],type:"string"},logarithmicScale:{value:!1,type:"boolean"},max:{value:"100",type:"any"},mechanicalAction:{value:"switchWhileDragging",allowedValues:["switchUntilReleased","switchWhenReleased","switchWhileDragging"],type:"string"},messages:{value:{en:{missingReference:"{{elementType}}: Missing reference to {{files}}.",significantPrecisionDigits:"{{elementType}}: the properties significantDigits and precisionDigits cannot be set at the same time.",invalidMinOrMax:"{{elementType}}: Invalid {{property}} value. Max cannot be lower than Min.",noInteger:"{{elementType}}: precisionDigits could be set only on \"floatingPoint\" scaleType."}},type:"object",extend:!0},min:{value:"0",type:"any"},mode:{value:"numeric",allowedValues:["numeric","date"],type:"string"},name:{value:"",type:"string"},orientation:{value:"vertical",allowedValues:["horizontal","vertical"],type:"string"},precisionDigits:{value:null,type:"number?"},scalePosition:{value:"near",allowedValues:["near","far","both","none"],type:"string"},scaleType:{value:"floatingPoint",allowedValues:["floatingPoint","integer"],type:"string"},scientificNotation:{value:!1,type:"boolean"},showThumbLabel:{value:!1,type:"boolean"},showTooltip:{value:!1,type:"boolean"},showUnit:{value:!1,type:"boolean"},significantDigits:{value:null,type:"number?"},thumbLabelPosition:{value:"near",allowedValues:["near","far"],type:"string"},ticksPosition:{value:"scale",allowedValues:["scale","track"],type:"string"},ticksVisibility:{value:"minor",allowedValues:["major","minor","none"],type:"string"},tooltipPosition:{value:"near",allowedValues:["near","far"],type:"string"},unit:{value:"kg",type:"string"},validation:{value:"strict",allowedValues:["strict","interaction"],type:"string"},value:{value:"0",type:"any"},wordLength:{value:"int32",allowedValues:["int8","uint8","int16","uint16","int32","uint32","int64","uint64"],type:"string"}}}static get listeners(){return{"track.down":"_trackDownHandler","track.move":"_trackMoveHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler",keydown:"_keydownHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler","document.selectstart":"_selectStartHandler","track.mouseenter":"_trackOnMouseEnterHandler","track.mouseleave":"_trackOnMouseLeaveHandler"}}static get requires(){return{"Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js","Smart.Utilities.TickIntervalHandler":"smart.tickintervalhandler.js"}}static get styleUrls(){return["smart.tank.css"]}template(){return`<div id="container" class="smart-container" role="presentation">
                    <div id="scaleNear" class="smart-scale smart-scale-near" role="presentation" aria-hidden="true"></div>
                    <div id="track" class="smart-track" role="presentation">
                        <div id="fill" class="smart-value" role="presentation">
                            <div id="bubbleContainer" class="smart-bubble-container" role="presentation"></div>
                            <div id="tooltip" class="smart-tooltip" role="tooltip"><div id="tooltipContent" class="smart-tooltip-content smart-unselectable" role="presentation"></div></div>
                            <div id="thumb" class="smart-thumb">
                                <div class="smart-thumb-label-container">
                                    <span id="thumbLabel" class="smart-thumb-label"></span>
                                </div>
                            </div>
                        </div>
                        <div id="trackTicksContainer" class="smart-track-ticks-container smart-hidden" role="presentation"></div>
                    </div>
                    <div id="scaleFar" class="smart-scale smart-scale-far" role="presentation" aria-hidden="true"></div>
                    <input id="hiddenInput" type="hidden" name="[[name]]">
                </div>`}ready(){super.ready();const e=this;e._redefineProperty("customTicks"),e.checkLicense()}render(){const e=this;e.setAttribute("role","slider"),this._createElement(),e.enableShadowDOM&&e.$.hiddenInput&&e.appendChild(e.$.hiddenInput),super.render()}_createElement(){const e=this;return e.$.tooltip.id||(e.$.tooltip.id=e.id+"Tooltip"),e.setAttribute("aria-describedby",e.$.tooltip.id),e.$.fill.style.transition="none","numeric"===e.mode?e._getEventValue=function(){return e.value}:e._handleDateScale(),e._setSettingsObject(),e._setDrawVariables(),e._getLayoutType(),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._isVisible()?void(e._renderingSuspended=!1,e._setInitialComponentDisplay(),e._measurements={},e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._validateInitialPropertyValues(),e._setTicksAndInterval(),e._validate(!0),e._updateTooltipValue(e._drawValue),e._setFocusable(),e._setTrackSize(),e._setBubbles(),e.$.fill.style.transition="",e.$.hiddenInput.value=e._getEventValue(),e.setAttribute("aria-orientation",e.orientation),e.setAttribute("aria-valuenow",e._getEventValue(!0))):void(e._renderingSuspended=!0)}val(e){const t=this;if(e!==void 0){if("date"===t.mode){let a=Smart.Utilities.DateTime.validateDate(e);return a=a.getTimeStamp(),0===a.compare(t.value)?t._valueDate:void t._validate(!1,a,void 0,!0)}if(t.value.toString().toUpperCase()!==e.toString().toUpperCase()){e=e.toString().replace(/\s/g,""),t._numericProcessor.regexScientificNotation.test(e)&&(e=t._numericProcessor.scientificToDecimal(e));const a=t._discardDecimalSeparator(e.toString());t._validate(!1,a,void 0,!0),delete t._valueBeforeCoercion}else return t.value="string"==typeof e?e:e.toString()}else return t._getEventValue()}_setBubbles(){const e=this;if(!e.hasAnimation)return;let t,a=document.createDocumentFragment();for(let e=0;5>e;e++)t=document.createElement("div"),t.classList.add("bubble"),t.classList.add("bubble"+(e+1)),a.appendChild(t);e.$.bubbleContainer.appendChild(a)}_setTrackSize(){const e=this;e._trackSize="vertical"===e.orientation?e.$.track.offsetWidth:e.$.track.offsetHeight}getOptimalSize(){const e=this;if(e._renderingSuspended)return{width:0,height:0};let t,a,i;switch(e.labelsVisibility){case"all":a=e._numericProcessor._longestLabelSize;break;case"endPoints":a=Math.max(e._tickIntervalHandler.labelsSize.minLabelOtherSize,e._tickIntervalHandler.labelsSize.maxLabelOtherSize);break;case"none":a=0;}switch(e.orientation){case"horizontal":return t={marginA:"marginBottom",marginB:"marginTop",nearScaleDistance:"bottom",farScaleDistance:"top",paddingA:"paddingBottom",paddingB:"paddingTop",offset:"offsetWidth",distance:"left"},e._orientationChanged&&(t.offset="offsetHeight",e._trackChanged=!0),i=e._getSize(a,t),{width:i.optimalOtherSize,height:i.optimalSize};case"vertical":return t={marginA:"marginLeft",marginB:"marginRight",nearScaleDistance:"right",farScaleDistance:"left",paddingA:"paddingLeft",paddingB:"paddingRight",offset:"offsetHeight",distance:"top"},e._orientationChanged&&(t.offset="offsetWidth",e._trackChanged=!0),i=e._getSize(a,t),{width:i.optimalSize,height:i.optimalOtherSize};}}propertyChangedHandler(e,t,a){var i=Math.pow,r=Math.log10;super.propertyChangedHandler(e,t,a);const n=this;if(!n._isVisible()||n._renderingSuspended)return void(n._renderingSuspended=!0);if(a==t)return void(n[e]=t);switch(e){case"labelsVisibility":case"ticksVisibility":return void n._updateScaleWidth(n._numericProcessor._longestLabelSize);case"coerce":if(a){const e=n.value,t=a=n.logarithmicScale?i(10,n._numericProcessor.getCoercedValue(r(e))):n._numericProcessor.getCoercedValue(e);n._validate(!1,t,!0,!0),n._valueBeforeCoercion=e}else void 0!==n._valueBeforeCoercion&&n._validate(!1,n._valueBeforeCoercion,!1,!0);return;case"interval":{n._numericProcessor.validateInterval(a);const e=a=n.logarithmicScale?i(10,n._numericProcessor.getCoercedValue(r(n.value))):n._numericProcessor.getCoercedValue(n.value);n._validate(!1,e,n.coerce,!0);break}case"min":case"max":{"date"===n.mode&&(delete n._dateInterval,n[e]=Smart.Utilities.DateTime.validateDate(a).getTimeStamp()),n._validateMinMax(e,!1,t);const i=n._numericProcessor.createDescriptor(n._discardDecimalSeparator(n.value,n.decimalSeparator),void 0,!0,"strict"===n.validation);n._setTicksAndInterval(),n._numericProcessor.updateValue(i);let r=n.getOptimalSize(),o=n.getBoundingClientRect(),l=n.$.track.getBoundingClientRect();r.width>o.width&&20>l.width&&(n.style.width=r.width+"px",n.style.height=r.height+"px");break}case"inverted":case"rightToLeft":{n._getLayoutType(),n._normalLayout&&(n.$.fill.style[n._settings.margin]="0px");let e=n._numericProcessor.createDescriptor(n.value),t=n._numericProcessor.validate(e,n._minObject,n._maxObject);n._setTicksAndInterval(),n._numericProcessor.updateValue(t);break}case"orientation":{const e=n.$.fill.style,t=n.$.container.style;switch(!0!==n._orientationChanged&&(n._orientationChanged=!0),n._tankSizeBeforeOrientation={width:n.offsetWidth,height:n.offsetHeight},n._setSettingsObject(),n._getLayoutType(),n.rightToLeft&&(e.marginLeft="0"),n.inverted&&(e.marginTop="0",e.marginLeft="0"),n.orientation){case"vertical":n.inverted||(e.marginTop="auto",e.marginLeft="0"),e.width="100%",t.paddingLeft="0",t.paddingRight="0";break;case"horizontal":n.inverted&&(n.inverted||n.rightToLeft)&&(!n.rightToLeft||!n.inverted)||(e.marginTop="0",e.marginLeft="auto"),e.height="100%",t.paddingTop="0",t.paddingBottom="0";}n._validateMinMax("both");const i=n._numericProcessor.createDescriptor(n.value),r=n._numericProcessor.validate(i,n._minObject,n._maxObject);n._setTicksAndInterval(),n._setTicksAndInterval(),n._numericProcessor.updateValue(r),n._trackChanged=!0,n.setAttribute("aria-orientation",a);break}case"significantDigits":case"precisionDigits":{if("date"===n.mode)return;if("precisionDigits"===e&&"integer"===n.scaleType&&n.error(n.localize("noInteger",{elementType:n.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==n.precisionDigits?n.precisionDigits=null:"precisionDigits"==e&&null!==n.significantDigits&&(n.significantDigits=null),n._validateInitialPropertyValues(),n._setTicksAndInterval(),"horizontal"===n.orientation&&(n.inverted||n.rightToLeft)){const e=n._numericProcessor.valueToPx(n._numericProcessor.getCoercedValue(n._drawValue));n.updateFillSizeAndPosition(e,n._settings.margin,a,!1)}break}case"decimalSeparator":{if("integer"===n.scaleType||"date"===n.mode)return;const e=n._discardDecimalSeparator(n.value,t),a=n._applyDecimalSeparator(e);n.value=e,delete n._valueBeforeCoercion,n._numericProcessor.addTicksAndLabels(),n._updateTooltipValue(a);break}case"value":{if(n.value=t,null===a)return;if("date"===n.mode){let e=Smart.Utilities.DateTime.validateDate(a);return e=e.getTimeStamp(),void(0!==e.compare(t)&&n._validate(!1,e,void 0,!0))}if(a.toString().toUpperCase()!==t.toString().toUpperCase()){let e=void 0===a?t.toString().replace(/\s/g,""):a.toString().replace(/\s/g,"");n._numericProcessor.regexScientificNotation.test(e)&&(e=n._numericProcessor.scientificToDecimal(e)),n._validate(!1,e,void 0,!0),delete n._valueBeforeCoercion}else n.value="string"==typeof a?a:a.toString();break}case"scaleType":if("date"===n.mode)return void(n.scaleType="integer");n._changeScaleType(t,a);break;case"disabled":case"unfocusable":n._setFocusable();break;case"showUnit":case"unit":{n._setTicksAndInterval(),n._moveThumbBasedOnValue(n._drawValue);break}case"tooltipPosition":break;case"wordLength":{if("date"===n.mode)return void(n.wordLength="uint64");n._wordLengthNumber=n._numericProcessor.getWordLength(a),n._validateMinMax("both");const e=n._numericProcessor.createDescriptor(n.value),t=n._numericProcessor.validate(e,n._minObject,n._maxObject);n._setTicksAndInterval(),n._numericProcessor.updateValue(t);break}case"scalePosition":{n._setInitialComponentDisplay(),n._setTicksAndInterval(),n._moveThumbBasedOnValue(n._drawValue);break}case"labelFormatFunction":case"scientificNotation":{if("date"===n.mode&&"scientificNotation"===e)return;const t=n._discardDecimalSeparator(n.value,n.decimalSeparator);n._setTicksAndInterval(),n._updateTooltipValue(t);break}case"logarithmicScale":if("date"===n.mode)return void(n.logarithmicScale=!1);n._validateMinMax("both"),n._setTicksAndInterval(),n._validate(!1,n.value,void 0,!0);break;case"ticksPosition":"scale"===a?(n.$trackTicksContainer.addClass("smart-hidden"),n.$.trackTicksContainer.innerHTML=""):n.$trackTicksContainer.removeClass("smart-hidden"),n._numericProcessor.addTicksAndLabels();break;case"customInterval":a?(n._customTicks&&(n.customTicks=n._customTicks),n._numericProcessor.validateCustomTicks()):"date"===n.mode&&(n._customTicks=n.customTicks),n._setTicksAndInterval(),n._coerceCustomInterval();break;case"customTicks":if("date"===n.mode&&!n.customInterval)return n._customTicks=a,void(n.customTicks=t);n._numericProcessor.validateCustomTicks(),n.customInterval&&(n._setTicksAndInterval(),n._coerceCustomInterval());break;case"dateLabelFormatString":"date"===n.mode&&n._setTicksAndInterval();break;case"mode":n.mode=t;break;case"showThumbLabel":a&&n.showTooltip&&(n.showTooltip=!1);break;case"showTooltip":a&&n.showThumbLabel&&(n.showThumbLabel=!1);break;case"validation":"strict"===a&&n._validate(!1,n.value);}}_setSettingsObject(){const e=this;e._settings="horizontal"===e.orientation?{clientSize:"clientWidth",dimension:"width",leftOrTop:"left",margin:"marginLeft",offset:"offsetLeft",otherSize:"offsetHeight",size:"offsetWidth",page:"pageX"}:{clientSize:"clientHeight",dimension:"height",leftOrTop:"top",margin:"marginTop",offset:"offsetTop",otherSize:"offsetWidth",size:"offsetHeight",page:"pageY"}}_setInitialComponentDisplay(){const e=this;switch(e.scalePosition){case"near":e.$scaleNear.removeClass("smart-hidden"),e.$scaleFar.addClass("smart-hidden");break;case"far":e.$scaleNear.addClass("smart-hidden"),e.$scaleFar.removeClass("smart-hidden");break;case"both":e.$scaleFar.removeClass("smart-hidden"),e.$scaleNear.removeClass("smart-hidden");break;case"none":e.$scaleFar.addClass("smart-hidden"),e.$scaleNear.addClass("smart-hidden");}e.$tooltip.addClass("smart-hidden"),"track"===e.ticksPosition&&e.$trackTicksContainer.removeClass("smart-hidden")}_styleChangedHandler(){const e=this;return e._isVisible()?e._renderingSuspended?void e._createElement():void(e._renderingSuspended||(e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue))):void(e._renderingSuspended=!0)}_validateInitialPropertyValues(){const e=this,t=typeof e.value===String?e.value.replace(/\s/g,""):e.value.toString().replace(/\s/g,"");"numeric"===e.mode&&e._numericProcessor.regexScientificNotation.test(t)&&(e.value=e._numericProcessor.scientificToDecimal(t),delete e._valueBeforeCoercion),e.significantDigits=null===e.significantDigits?null:Math.min(Math.max(e.significantDigits,1),21),null===e.significantDigits&&null===e.precisionDigits?e.significantDigits=8:null!==e.significantDigits&&null!==e.precisionDigits&&e.error(e.localize("significantPrecisionDigits",{elementType:e.nodeName.toLowerCase()})),e._validateMinMax("both",!0),e.showTooltip&&e.showThumbLabel&&(e.showTooltip=!1)}_validateMinMax(e,t,a){function i(e,a){r._numericProcessor.validateMinMax("min"===e||t,"max"===e||t);const i=r["_"+e+"Object"];let l="min"===e?0>=r._numericProcessor.compare(r.max,i,!0):0<r._numericProcessor.compare(r.min,i,!0);l?a?(r._numberRenderer=new Smart.Utilities.NumberRenderer(a),"min"===e?n=!1:o=!1,r[e]=a,r["_"+e+"Object"]=a):r.error(r.localize("invalidMinOrMax",{elementType:r.nodeName.toLowerCase(),property:e})):(r._numberRenderer=new Smart.Utilities.NumberRenderer(i),r[e]=r["_"+e+"Object"])}const r=this;let n="min"===e||"both"===e,o="max"===e||"both"===e;typeof t===void 0&&(t=!1),"both"===e?(i("min",a),i("max",a)):i(e,a),r.logarithmicScale?r._validateOnLogarithmicScale(n,o,a):(r._drawMin=r.min,r._drawMax=r.max),r.min=r.min.toString(),r.max=r.max.toString(),r._minObject=r._numericProcessor.createDescriptor(r.min),r._maxObject=r._numericProcessor.createDescriptor(r.max),"date"===r.mode&&(r._minDate=Smart.Utilities.DateTime.fromFullTimeStamp(r.min),r._maxDate=Smart.Utilities.DateTime.fromFullTimeStamp(r.max)),r._numericProcessor.validateInterval(r.interval),r.customInterval&&r._numericProcessor.validateCustomTicks(),"numeric"===r.mode?(r.setAttribute("aria-valuemin",r.min),r.setAttribute("aria-valuemax",r.max)):(r.setAttribute("aria-valuemin",r._minDate.toString("f")),r.setAttribute("aria-valuemax",r._maxDate.toString("f")))}_calculateTickInterval(){const e=this;let t=e._tickIntervalHandler.getInterval("linear",e._drawMin,e._drawMax,e.$.track,e.logarithmicScale);t.major===e._majorTicksInterval?e._intervalHasChanged=!0:(e._intervalHasChanged=!0,e._majorTicksInterval=t.major),e._minorTicksInterval=t.minor,"date"===e.mode&&e._calculateDateInterval(t.major)}_calculateDateInterval(e){const t=this,a={month:"2628000000000000000000000000000",day:"86400000000000000000000000000",hour:"3600000000000000000000000000",minute:"60000000000000000000000000",second:"1000000000000000000000000"};let i="year",r=new Smart.Utilities.BigNumber("31536000000000000000000000000000"),n=r.subtract(e).abs(),o=new Smart.Utilities.BigNumber(t.min).subtract(t.max).abs(),l=o.divide(e).toString();for(let t in 2>l&&(e=o.divide(3)),a)if(a.hasOwnProperty(t)){const o=new Smart.Utilities.BigNumber(a[t]),l=o.subtract(e).abs();if(-1===l.compare(n))i=t,r=o,n=l;else break}if("second"==i){if(t._numberRenderer.numericValue=parseFloat(e),1e3>t._numberRenderer.numericValue)return t._dateIncrementMethod="addYoctoseconds",void(t._dateIntervalNumber=1);let a=t._numberRenderer.toScientific(10);return a=a.charAt(a.length-1),t._dateIncrementMethod=t._unitToMethod[a],void(t._dateIntervalNumber=Math.pow(10,t._numericProcessor.prefixesToPowers[a]))}t._dateInterval=!0;const s=!t.customInterval;let d,c,m;switch(s&&(d=[new Smart.Utilities.BigNumber(t.min)],c=o.divide(r).toString(),m=Math.max(1,Math.floor(c/l))),i){case"year":if(s)for(let e=t._minDate.year()+m;e<t._maxDate.year();e+=m)d.push(new Smart.Utilities.BigNumber(new Smart.Utilities.DateTime(e,1,1).getTimeStamp()));t._dateIncrementMethod="addYears";break;case"month":if(s)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month()+m,1);-1===e.compare(t._maxDate);e.addMonths(m,!1))d.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addMonths";break;case"day":if(s)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day()+m);-1===e.compare(t._maxDate);e.addDays(m,!1))d.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addDays",t._dateIntervalNumber=864e26;break;case"hour":if(s)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day(),t._minDate.hour()+m);-1===e.compare(t._maxDate);e.addHours(m,!1))d.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addHours",t._dateIntervalNumber=36e26;break;case"minute":if(s)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day(),t._minDate.hour(),t._minDate.minute()+m);-1===e.compare(t._maxDate);e.addMinutes(m,!1))d.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addMinutes",t._dateIntervalNumber=6e25;}s&&(-1===d[d.length-1].compare(t.max)&&d.push(new Smart.Utilities.BigNumber(t.max)),t.customTicks=d)}_formatNumber(e){var t=Math.round;const a=this;if("date"===a.mode){const t=Smart.Utilities.DateTime.fromFullTimeStamp(e);return t.toString(a.dateLabelFormatString)}const i=a._numberRenderer;let r=parseFloat(e);if(i.numericValue=e,a.scientificNotation)r=a._numberRenderer.toScientific(a.significantDigits,a.precisionDigits);else switch(a.scaleType){case"floatingPoint":r=a._applyDecimalSeparator(i.toDigits(a.significantDigits,a.precisionDigits));break;case"integer":r=i.isENotation(r)?t(i.largeExponentialToDecimal(r)):t(r),r=i.toDigits(a.significantDigits,0);}return r}_formatLabel(e,t){const a=this;let i;return a.labelFormatFunction&&("date"===a.mode&&(e=Smart.Utilities.DateTime.fromFullTimeStamp(e)),i=a.labelFormatFunction(e),void 0!==i&&""!==i)?i:(i=a._formatNumber(e),a._numberRenderer=new Smart.Utilities.NumberRenderer(i),a.showUnit&&(!1===t?i+=" "+a.unit:i+=" <span class=\"smart-unselectable\">"+a.unit+"</span>"),i)}_layout(){const e=this,t=e.$.container.style,a=e._tickIntervalHandler.labelsSize.minLabelSize/2+"px",i=e._tickIntervalHandler.labelsSize.maxLabelSize/2+"px";switch(e.orientation){case"horizontal":if("none"===e.scalePosition){t.paddingLeft="",t.paddingRight="";break}!e.inverted&&!e.rightToLeft||e.rightToLeft&&e.inverted?(t.paddingLeft=a,t.paddingRight=i):(t.paddingLeft=i,t.paddingRight=a);break;case"vertical":if("none"===e.scalePosition){t.paddingTop="",t.paddingBottom="";break}e.inverted?(t.paddingBottom=i,t.paddingTop=a):(t.paddingBottom=a,t.paddingTop=i);}e._measurements.trackLength=e.$.track[this._settings.clientSize]}_trackDownHandler(e){const t=this;t.disabled||t.readonly||!Smart.Utilities.Core.isMobile&&0!==e.button||("switchUntilReleased"===t.mechanicalAction&&(t._cachedValue={},t._cachedValue._number=t._number,t._cachedValue._drawValue=t._drawValue,t._cachedValue.value=t.value,t._valueDate&&(t._cachedValue._valueDate=t._valueDate)),t._getTrackStartAndEnd(),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==t.mechanicalAction),t._thumbDragged=!0,t.$track.addClass("smart-dragged"),t.showTooltip&&t.$tooltip.removeClass("smart-hidden"))}_trackMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_documentMoveHandler(e){const t=this;t._thumbDragged&&(e.originalEvent.preventDefault(),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==t.mechanicalAction),t.$fill.addClass("disable-animation"))}_documentUpHandler(e){const t=this;if(t._thumbDragged){if("switchWhenReleased"===t.mechanicalAction)t._moveThumbBasedOnCoordinates(e,!0,!0);else if("switchUntilReleased"===t.mechanicalAction&&t._numericProcessor.compare(t._number,t._cachedValue._number)){const e=t._getEventValue();t._number=t._cachedValue._number,t._drawValue=t._cachedValue._drawValue,t._cachedValue._valueDate&&(t._valueDate=t._cachedValue._valueDate),t.value=t._cachedValue.value,t._moveThumbBasedOnValue(t._drawValue);const a=t._getEventValue();t.$.fireEvent("change",{value:a,oldValue:e}),t.$.hiddenInput.value=a,t.setAttribute("aria-valuenow",t._getEventValue(!0))}t.showTooltip&&t.$tooltip.addClass("smart-hidden"),t._thumbDragged=!1,t.$track.removeClass("smart-dragged"),t.$fill.removeClass("disable-animation")}}_selectStartHandler(e){const t=this;t._thumbDragged&&e.preventDefault()}_resizeHandler(){const e=this;return e._isVisible()?e._renderingSuspended?void e._createElement():void(e._renderingSuspended||(!0!==e._orientationChanged&&(e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue)),e._trackChanged&&(e._measurements.trackLength=e.$.track[this._settings.clientSize],e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue)),e._setTrackSize(),delete e._orientationChanged,delete e._trackChanged)):void(e._renderingSuspended=!0)}_moveThumbBasedOnCoordinates(e,t,a){var i=Math.min,r=Math.max;const n=this;let o=t?i(r(e[n._settings.page],n._trackStart),n._trackEnd):e[n._settings.page],l=n._numericProcessor.pxToValue(o);n.logarithmicScale?(n._drawValue=Math.log10(l),l=n._numericProcessor.getCoercedValue(n._drawValue)):(n._drawValue=l,l=n._numericProcessor.getCoercedValue(l)),o=i(r(n._numericProcessor.valueToPx(l)+n._trackStart,n._trackStart),n._trackEnd);const s=o-n._trackStart;n.updateFillSizeAndPosition(s,n._settings.margin,l,!0,a),e.originalEvent&&e.originalEvent.stopPropagation()}_moveThumbBasedOnValue(e){const t=this,a=t._numericProcessor.valueToPx(t._numericProcessor.getCoercedValue(e));t.updateFillSizeAndPosition(a,t._settings.margin,e,!0)}updateFillSizeAndPosition(e,t,a,i,r){const n=this,o=n.$.fill.style;if(n._normalLayout?o[n._settings.dimension]=e+"px":(o[n._settings.dimension]=Math.min(n._measurements.trackLength,Math.max(0,n._measurements.trackLength-e))+"px",o[t]=e+"px"),i){const e=n.value;delete n._valueBeforeCoercion,n._numericProcessor.updateToolTipAndValue(a,e,r)}}_updateTooltipValue(e){const t=this;e===void 0&&(e=t.value),t.logarithmicScale&&(e=Math.pow(10,e.toString())),e=t._formatLabel(e),t.$.tooltipContent.innerHTML=e,t.$.thumbLabel.innerHTML=e}_getSize(e,t){function a(e,t){const a=e.getElementsByClassName("smart-label");l=a[0],s=a[a.length-1];const i=window.getComputedStyle(a[0])[t];d+=parseFloat(i)}const i=this,r=window.getComputedStyle(i),n=window.getComputedStyle(i.$.track),o=i._trackSize+parseFloat(n[t.marginA])+parseFloat(n[t.marginB]);let l,s,d,c;switch(d=o,i.scalePosition){case"none":return d+=parseFloat(r[t.paddingA])+parseFloat(r[t.paddingB]),c="undefined"==typeof i._tankSizeBeforeOrientation?"horizontal"===i.orientation?parseFloat(n.width):parseFloat(n.height):"horizontal"===i.orientation?i._tankSizeBeforeOrientation.height:i._tankSizeBeforeOrientation.width,!0!==i._trackChanged&&(i._trackChanged=!0),{optimalSize:d,optimalOtherSize:c};case"near":d+=e,a(i.$.scaleNear,t.nearScaleDistance);break;case"far":d+=e,a(i.$.scaleFar,t.farScaleDistance);break;case"both":d+=2*e,a(i.$.scaleNear,t.nearScaleDistance),a(i.$.scaleFar,t.farScaleDistance);}let m,u,_;return d+=parseFloat(r[t.paddingA])+parseFloat(r[t.paddingB]),m=l.getBoundingClientRect(),u=s.getBoundingClientRect(),c=i[t.offset],_=m[t.distance]+l[t.offset]-u[t.distance],0<_&&(c=l[t.offset]+s[t.offset]),{optimalSize:d,optimalOtherSize:c}}_getRange(){const e=this;return e.logarithmicScale?void(e._range=e._drawMax-e._drawMin):void("floatingPoint"===e.scaleType?e._range=(e._drawMax-e._drawMin).toString():e._range=new Smart.Utilities.BigNumber(e._drawMax).subtract(e._drawMin).toString())}_getTrackStartAndEnd(){const e=this;let t,a=e.$.track.getBoundingClientRect();if("horizontal"===e.orientation){const e=document.body.scrollLeft||document.documentElement.scrollLeft;t=a.left+e}else{const e=document.body.scrollTop||document.documentElement.scrollTop;t=a.top+e}const i=t+e._measurements.trackLength,r=i-t;e._trackStart=t,e._trackEnd=i,e._valuePerPx=e._numericProcessor.getValuePerPx(e._range,r)}_updateScaleWidth(e){var t=Math.max;const a=this;let i="track"===a.ticksPosition?4:12;switch(a.labelsVisibility){case"all":e=a._numericProcessor._longestLabelSize;break;case"endPoints":e=t(a._tickIntervalHandler.labelsSize.minLabelOtherSize,a._tickIntervalHandler.labelsSize.maxLabelOtherSize);break;case"none":e=0;}let r=i+e,n=window.getComputedStyle(a.$.track),o=!!n.getPropertyValue("--smart-tank-scale-size");if(o)a.$.container.style.setProperty("--smart-tank-scale-size",r+"px");else{const e=window.getComputedStyle(a),i=a.$.scaleNear.style,o=a.$.scaleFar.style,l=a.$.track.style,s=parseFloat(n.getPropertyValue("min-width"));let d,c,m,u,_,g=parseFloat(n.getPropertyValue("outline-width"))||0,p=parseFloat(n.getPropertyValue("outline-offset"))||0,h=g+p;switch(a.orientation){case"horizontal":d="height",c="width",m=a.offsetHeight,_=parseFloat(e.getPropertyValue("padding-top"))+parseFloat(e.getPropertyValue("padding-bottom")),u=parseFloat(n.getPropertyValue("margin-top"))+parseFloat(n.getPropertyValue("margin-bottom"));break;case"vertical":d="width",c="height",m=a.offsetWidth,_=parseFloat(e.getPropertyValue("padding-left"))+parseFloat(e.getPropertyValue("padding-right")),u=parseFloat(n.getPropertyValue("margin-left"))+parseFloat(n.getPropertyValue("margin-right"));}switch(a.scalePosition){case"near":i.setProperty(d,r+"px"),l.setProperty(d,t(isNaN?0:s,m-_-r-4-u-h)+"px");break;case"far":o.setProperty(d,r+"px"),l.setProperty(d,t(isNaN?0:s,m-_-r-4-u-h)+"px");break;case"both":i.setProperty(d,r+"px"),o.setProperty(d,r+"px"),l.setProperty(d,t(isNaN?0:s,m-_-2*r-4-u-h)+"px");break;case"none":l.setProperty(d,"");}l.setProperty(c,"100%"),i.setProperty(c,"100%"),o.setProperty(c,"100%")}}_appendTicksAndLabelsToScales(e,t){function a(a){a.innerHTML=t,"scale"===i.ticksPosition&&(a.innerHTML+=e)}const i=this;switch(i.scalePosition){case"near":a(i.$.scaleNear);break;case"far":a(i.$.scaleFar);break;case"both":a(i.$.scaleNear),a(i.$.scaleFar);}"track"===i.ticksPosition&&(i.$.trackTicksContainer.innerHTML=e)}_discardDecimalSeparator(e,t){const a=this;if(void 0===t&&(t=a.decimalSeparator),"."!==t){let a=new RegExp(t,"g");return"string"==typeof e?e.replace(a,"."):e.toString().replace(a,".")}return e}_applyDecimalSeparator(e){const t=this;return"string"!=typeof e&&(e=e.toString()),"."!==t.decimalSeparator&&(e=e.replace(/\./g,t.decimalSeparator)),e}_validate(e,t,a,i){var r=Math.log10;const n=this;let o;n._programmaticValueIsSet=i&&"interaction"===n.validation,o=e?n.value:t;let l,s;!0!==a&&n.coerce?(l=n._numericProcessor.createDescriptor(o,!0,!0,!0),l=n.logarithmicScale?Math.pow(10,n._numericProcessor.getCoercedValue(r(l))):n._numericProcessor.getCoercedValue(l),s=l):"strict"!==n.validation&&(e||n._programmaticValueIsSet)?(l=n._numericProcessor.createDescriptor(o,!0,!0,!1),s=n._numericProcessor.validate(l,n._minObject,n._maxObject)):(l=n._numericProcessor.createDescriptor(o,!0,!0,!0),s=l),n._numericProcessor.regexScientificNotation.test(s)&&(s=n._numericProcessor.scientificToDecimal(s)),s=n._discardDecimalSeparator(s,n.decimalSeparator),e?(n._number=s,n._drawValue=n.logarithmicScale?r(s):s,"numeric"===n.mode?n.value=l.toString():(n._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(l),n.value=l),delete n._valueBeforeCoercion,n._moveThumbBasedOnValue(n._drawValue)):n._numericProcessor.updateValue(l),n._programmaticValueIsSet=!1}_changeScaleType(){const e=this;e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._validateMinMax("both"),e._setTicksAndInterval(),e._scaleTypeChangedFlag=!0,e._validate(!0,e._number.toString()),e._scaleTypeChangedFlag=!1}_setTicksAndInterval(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);let t=e._formatLabel(e.min),a=e._formatLabel(e.max);e._getRange(),e._tickIntervalHandler=new Smart.Utilities.TickIntervalHandler(e,t,a,"smart-label",e._settings.size,"integer"===e.scaleType,e.logarithmicScale),e._layout(),e.customInterval?("date"===e.mode&&e._calculateTickInterval(),e._intervalHasChanged=!0,e._numericProcessor.addCustomTicks()):(e._calculateTickInterval(),e._dateInterval?(e._intervalHasChanged=!0,e._numericProcessor.addCustomTicks()):e._numericProcessor.addTicksAndLabels())}_setFocusable(){const e=this;return e.disabled||e.unfocusable?void e.removeAttribute("tabindex"):void(e.tabIndex=0<e.tabIndex?e.tabIndex:0)}_keyIncrementDecrement(e,t){const a=this,i="add"===e?1:-1,r=void 0===t;if(r&&(t=a.logarithmicScale?new Smart.Utilities.BigNumber(a._drawValue):a._drawValue),a.customInterval&&a.coerce){r&&(a.logarithmicScale&&(t=a.value),"numeric"===a.mode&&(t=t.toString()));let n,o;"numeric"===a.mode?(n=-1===a.customTicks.indexOf(a.min)?[a.min].concat(a.customTicks):a.customTicks.slice(0),o=n.indexOf(t)):(n=-1===a.customTicks.findIndex(function(e){return 0===e.compare(a._drawMin)})?[a._drawMin].concat(a.customTicks):a.customTicks.slice(0),o=n.findIndex(function(e){return 0===e.compare(t)}));const l=n[o+1*i];return void 0===l?t===a.max&&"subtract"===e?n[n.length-2]:t:l}if("numeric"===a.mode){let i=a._numericProcessor.incrementDecrement(t,e,a._validInterval);return a.logarithmicScale&&(a._drawValue=i,i=Math.pow(10,Math.round(i))),i}return"interaction"===a.validation&&(-1===a._valueDate.compare(a._minDate)||1===a._valueDate.compare(a._maxDate))&&(a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),a._valueDate[a._dateIncrementMethod](i*parseFloat(a.interval),!1),a._drawValue=new Smart.Utilities.BigNumber(a._valueDate.getTimeStamp()),-1===a._drawValue.compare(a._drawMin)&&(a._drawValue=new Smart.Utilities.BigNumber(a._drawMin),a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),1===a._drawValue.compare(a._drawMax)&&(a._drawValue=new Smart.Utilities.BigNumber(a._drawMax),a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),a._drawValue}_keydownHandler(e){const t=this;if(t.disabled||t.readonly)return;const a=e.charCode?e.charCode:e.which;if(-1===[35,36,37,38,39,40].indexOf(a))return;const i=-1<[35,38,39].indexOf(a),r=-1<[36,37,40].indexOf(a);if(e.preventDefault(),"floatingPoint"!==t.scaleType){let e=new Smart.Utilities.BigNumber(t._drawValue);if(1!==e.compare(t._drawMin)&&r||-1!==e.compare(t._drawMax)&&i)return}else if(parseFloat(t.value)<=parseFloat(t.min)&&r||parseFloat(t.value)>=parseFloat(t.max)&&i)return;let n;return 40===a||37===a?n=t._keyIncrementDecrement("subtract"):38===a||39===a?n=t._keyIncrementDecrement("add"):36===a?(t._drawValue=t._drawMin,n=t.min):35===a?(t._drawValue=t._drawMax,n=t.max):void 0,t._validate(!1,n,a),!1}_setDrawVariables(){var e=Math.log10;const t=this;t.logarithmicScale?(t._drawValue=e(t.value),t._drawMin=e(t.min),t._drawMax=e(t.max)):(t._drawValue=t.value,t._drawMin=t.min,t._drawMax=t.max)}_validateOnLogarithmicScale(e,t){function a(e){return Math.pow(10,Math.round(i(e)-0.7403626894942439+.5))}var i=Math.log10;const r=this;if(e)if(0>=r.min)r.min=1,r._drawMin=0;else if(0!=i(r.min)%1){let e=a(parseFloat(r.min));e>r.min&&(e/=10),r._drawMin=i(r.min)}else r._drawMin=i(r.min);if(t)if(0>=r.max)r.max=1,r._drawMax=0;else if(0!=i(r.max)%1){let e=a(parseFloat(r.max));e<r.max&&(e*=10),r._drawMax=i(r.max)}else r._drawMax=i(r.max);"integer"===r.scaleType&&(0>r._drawMin&&(r._drawMin=0,r.min=1),0>r._drawMax&&(r._drawMax=1,r.max=10)),r._drawMax===r._drawMin&&(r._drawMax=r._drawMin+1)}_getLayoutType(){const e=this,t=e.orientation,a=e.inverted,i=e.rightToLeft;e._normalLayout="horizontal"===t&&(!a&&!i||i&&a)||"vertical"===t&&a}_trackOnMouseEnterHandler(){const e=this;e.readonly||e.disabled||(e.$track.addClass("track-hovered"),e.$.track.setAttribute("hover",""))}_trackOnMouseLeaveHandler(){const e=this;e.readonly||e.disabled||(e.$track.removeClass("track-hovered"),e.$.track.removeAttribute("hover"))}_isVisible(){const e=this;return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}_coerceCustomInterval(){const e=this;if(e.coerce){const t=e._valueBeforeCoercion,a=e.logarithmicScale?Math.pow(10,e._numericProcessor.getCoercedValue(Math.log10(e.value))):e._numericProcessor.getCoercedValue(e.value);e._validate(!1,a,!0,!0),e._valueBeforeCoercion=t}}_handleDateScale(){const e=this,t=Smart.Utilities.DateTime;t||e.error(e.localize("missingReference",{elementType:e.nodeName.toLowerCase(),files:"smart.date.js"})),e._customTicks=e.customTicks,e._unitToMethod={Y:"addSeconds",Z:"addMilliseconds",E:"addMicroseconds",P:"addNanoseconds",T:"addPicoseconds",G:"addFemtoseconds",M:"addAttoseconds",k:"addZeptoseconds"},e._minDate=t.validateDate(e.min),e.min=e._minDate.getTimeStamp(),e._maxDate=t.validateDate(e.max),e.max=e._maxDate.getTimeStamp(),e.rangeSlider||(e._valueDate=t.validateDate(e.value),e.value=e._valueDate.getTimeStamp()),e._properties.min.serialize="_serializeMin",e._properties.max.serialize="_serializeMax",e._properties.value.serialize="_serializeValue",e.scaleType="integer",e.logarithmicScale=!1,e.wordLength="uint64";const a=["min","max","value"];for(let t=0;t<a.length;t++){const i=a[t];Object.defineProperty(e,i,{get:function(){return e.context===e?e.properties[i].value:e["_"+i+"Date"]},set(t){e.updateProperty(e,e._properties[i],t)}})}e._getEventValue=function(t){return t?e._valueDate.toString("f"):e._valueDate.clone()}}_serializeMin(){return this._minDate.toString()}_serializeMax(){return this._maxDate.toString()}_serializeValue(){return this._valueDate.toString()}_redefineProperty(e){const t=this;Object.defineProperty(t,e,{get:function(){return t.properties[e].value},set(a){function i(e,t){return t instanceof Smart.Utilities.BigNumber?t.toString():t}const r=t.properties[e].value,n=JSON.stringify(r,i),o=JSON.stringify(a,i);if(n!==o&&(t.properties[e].value=a,t.isReady&&(!t.ownerElement||t.ownerElement&&t.ownerElement.isReady)&&t.context!==t)){const i=t.context;t.context=t,t.propertyChangedHandler(e,r,a),t.context=i}}})}});