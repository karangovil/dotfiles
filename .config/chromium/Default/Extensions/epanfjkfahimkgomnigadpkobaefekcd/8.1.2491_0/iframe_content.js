/**
 * Blur Copyright (c) 2008-2015 by Abine, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information
 * of Abine, Inc. ("Confidential Information"), subject
 * to the Non-Disclosure Agreement and/or License Agreement you entered
 * into with Abine. You shall use such Confidential Information only
 * in accordance with the terms of said Agreement(s). Abine makes
 * no representations or warranties about the suitability of the
 * software. The software is provided with ABSOLUTELY NO WARRANTY
 * and Abine will NOT BE LIABLE for ANY DAMAGES resulting from
 * the use of the software.
 *
 * Contact license@getabine.com with any license-related questions.
 *
 * https://www.abine.com
 * @license
 *
 */
!function(){function e(){i.attributes.injectedOnFocus=!0,chrome.extension.sendRequest({eventName:"injectContentScript",payload:{file:"content.js",allFrames:!0,runAt:"document_idle"}})}function t(e){if("INPUT"===e.tagName){var t=(e.getAttribute("type")||"text").toLowerCase();if(t in{text:1,password:1,email:1,tel:1})return!0}else if("SELECT"===e.tagName)return!0;return!1}function a(n){t(n.target||n.srcElement)&&(document.removeEventListener("focus",a,!0),window.lastFieldFocused=n.target||n.srcElement,e())}function n(){if(document.activeElement&&"BODY"!=document.activeElement.tagName)return!0;var e=document.querySelectorAll("input[type=text], input[type=password], input[type=number], select");return e.length>=3}var i=document.documentElement;if("iframe_content.js"!=i.attributes.idmeScript&&"content.js"!=i.attributes.idmeScript&&(i.attributes.idmeScript="iframe_content.js",document.defaultView!=document.defaultView.top))try{var r=window.frameElement,o=r.ownerDocument;o.location.host;if(window.top!=window.parent)throw"nested iframe cannot be process in TOP content script";i.attributes.idmeScript="content.js",r.getAttribute("id")||r.setAttribute("id","mmFrameId_"+Math.random()),chrome.extension.sendRequest({eventName:"processFormsInNewFrame",frame_id:r.getAttribute("id")})}catch(t){n()?e():document.addEventListener("focus",a,!0)}}();