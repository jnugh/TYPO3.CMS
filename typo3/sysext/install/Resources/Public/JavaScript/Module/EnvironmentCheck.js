/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","./AbstractInteractableModule","jquery","../Router","../Renderable/ProgressBar","../Renderable/InfoBox","../Renderable/Severity","TYPO3/CMS/Backend/Notification","bootstrap"],function(e,t,r,n,o,s,a,i,c){"use strict";return new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.selectorGridderBadge=".t3js-environmentCheck-badge",t.selectorExecuteTrigger=".t3js-environmentCheck-execute",t.selectorOutputContainer=".t3js-environmentCheck-output",t}return __extends(t,e),t.prototype.initialize=function(e){var t=this;this.currentModal=e,this.runTests(),e.on("click",this.selectorExecuteTrigger,function(e){e.preventDefault(),t.runTests()})},t.prototype.runTests=function(){var e=this,t=this.getModalBody(),r=n(this.selectorGridderBadge);r.text("").hide();var u=s.render(i.loading,"Loading...","");t.find(this.selectorOutputContainer).empty().append(u),n.ajax({url:o.getUrl("environmentCheckGetStatus"),cache:!1,success:function(o){t.empty().append(o.html);var s=0,i=0;!0===o.success&&"object"==typeof o.status?(n.each(o.status,function(r,n){Array.isArray(n)&&n.length>0&&n.forEach(function(r){1===r.severity&&s++,2===r.severity&&i++;var n=a.render(r.severity,r.title,r.message);t.find(e.selectorOutputContainer).append(n)})}),i>0?r.removeClass("label-warning").addClass("label-danger").text(i).show():s>0&&r.removeClass("label-error").addClass("label-warning").text(s).show()):c.error("Something went wrong")},error:function(e){o.handleAjaxError(e,t)}})},t}(r.AbstractInteractableModule))});