function lpPutUserPref(e,t){"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs),void 0!==g_userprefs[e]&&g_userprefs[e]==t||(g_userprefs_changed[e]=!0),g_userprefs[e]=t,ExtensionPreferences.triggerChange(e,t)}function lpPutGblPref(e,t){"undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs),void 0!==g_gblprefs[e]&&g_gblprefs[e]==t||(g_gblprefs_changed[e]=!0),g_gblprefs[e]=t,ExtensionPreferences.triggerChange(e,t)}function lpGetPref(e,t){return"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs),"undefined"!=typeof g_userprefs&&void 0!==g_userprefs[e]?g_userprefs[e]:("undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs),"undefined"!=typeof g_gblprefs&&void 0!==g_gblprefs[e]?g_gblprefs[e]:t)}function dodefault(){var e=get_innertext(document.getElementById("default"));if(0<=e.indexOf("General"))document.getElementById("logoffWhenCloseBrowserVal").value=0,document.getElementById("logoffWhenCloseBrowser").checked=!1,document.getElementById("idleLogoffVal").value="",document.getElementById("idleLogoffEnabled").checked=!1,document.getElementById("openpref").value="tabs",document.getElementById("htmlindialog").checked=g_isfirefoxsdk,document.getElementById("highlightFields").checked=!0,document.getElementById("automaticallyFill").checked=!0,document.getElementById("showvault").checked=!1,document.getElementById("showAcctsInGroups").checked=!0,document.getElementById("hideContextMenus").checked=!1,document.getElementById("defaultffid").value=0,document.getElementById("donotoverwritefilledfields").checked=!1;else if(0<=e.indexOf("Notifications"))document.getElementById("showNotifications").checked=!0,document.getElementById("showGenerateNotifications").checked=!1,document.getElementById("showFormFillNotifications").checked=!1,document.getElementById("showNotificationsAfterClick").checked=!1,document.getElementById("showSaveNotificationBar").checked=!0,document.getElementById("showSaveSiteNotifications").checked=!1,document.getElementById("notificationsBottom").checked=!1,document.getElementById("showChangeNotificationBar").checked=!0,document.getElementById("showmatchingbadge").checked=!0,document.getElementById("usepopupfill").checked=!0;else if(0<=e.indexOf("Hotkeys")){getBG().g_is_mac?(optionsData.HotKeys.generateHkKeyCode=0,optionsData.HotKeys.generateHkMods="",optionsData.HotKeys.recheckHkKeyCode=0,optionsData.HotKeys.recheckHkMods="",optionsData.HotKeys.searchHkKeyCode=0,optionsData.HotKeys.searchHkMods="",optionsData.HotKeys.nextHkKeyCode=33,optionsData.HotKeys.nextHkMods="meta",optionsData.HotKeys.prevHkKeyCode=34,optionsData.HotKeys.prevHkMods="meta",optionsData.HotKeys.homeHkKeyCode=0,optionsData.HotKeys.homeHkMods="",optionsData.HotKeys.openpopoverHkKeyCode=220,optionsData.HotKeys.openpopoverHkMods="meta"):(optionsData.HotKeys.generateHkKeyCode=71,optionsData.HotKeys.generateHkMods="alt",optionsData.HotKeys.recheckHkKeyCode=73,optionsData.HotKeys.recheckHkMods="alt",optionsData.HotKeys.searchHkKeyCode=87,optionsData.HotKeys.searchHkMods="alt",optionsData.HotKeys.nextHkKeyCode=33,optionsData.HotKeys.nextHkMods="alt",optionsData.HotKeys.prevHkKeyCode=34,optionsData.HotKeys.prevHkMods="alt",optionsData.HotKeys.homeHkKeyCode=72,optionsData.HotKeys.homeHkMods="control alt",optionsData.HotKeys.openpopoverHkKeyCode=220,optionsData.HotKeys.openpopoverHkMods="alt"),optionsData.HotKeys.submitHkKeyCode=0,optionsData.HotKeys.submitHkMods="",optionsData.HotKeys.saveallHkKeyCode=0,optionsData.HotKeys.saveallHkMods="",optionsData.HotKeys.logoffHkKeyCode=0,optionsData.HotKeys.logoffHkMods="",optionsData.HotKeys.defaultffidHkKeyCode=0,optionsData.HotKeys.defaultffidHkMods="";for(var t=new Array("generateHk","recheckHk","searchHk","nextHk","prevHk","homeHk","submitHk","saveallHk","logoffHk","defaultffidHk","openpopoverHk"),o=0;o<t.length;o++)writeHotKeyValue(t[o])}else 0<=e.indexOf("Advanced")?(document.getElementById("autoautoEnabled").checked=!0,document.getElementById("autoautoVal").value="25",document.getElementById("warninsecureforms").checked=!1,document.getElementById("dontfillautocompleteoff").checked=!1,document.getElementById("pollServerEnabled").checked=!0,document.getElementById("pollServerVal").value="15",document.getElementById("recentUsed").checked=!0,document.getElementById("recentUsedCount").value="10",document.getElementById("searchNotes").checked=!0,document.getElementById("openloginstart").checked=!1,document.getElementById("storeLostOTP").checked=!0,document.getElementById("enablenewlogin").checked=!0,document.getElementById("clearfilledfieldsonlogoff").checked=!1,document.getElementById("toplevelmatchingsites").checked=!1):0<=e.indexOf("Icons")&&(document.getElementById("icons2").checked=!0)}function fix_userhash(e){return""==e&&is_edge()?"global":e}var lpReadAllPrefs=function(){var s=function(e){try{return JSON.parse(e)}catch(e){return{}}},e=function(t){if("undefined"!=typeof browser&&browser.storage&&browser.storage.local&&g_username_hash){var o=["userPrefs_"+g_username_hash,"globalPrefs"];browser.storage.local.get(o).then(function(e){e&&e["userPrefs_"+g_username_hash]&&(g_userprefs_changed=g_userprefs=s(e["userPrefs_"+g_username_hash]),g_gblprefs_changed=g_gblprefs=s(e.globalPrefs),lpWriteAllPrefs(),browser.storage.local.remove(o)),a(t)},function(e){console.error(e),a(t)})}else a(t)},a=function(c){var o=g_username_hash&&""!=g_username_hash?g_username_hash:"";g_userprefs={},g_identity="";var e=opendb();if(createPrefsTable(e),e){var s=function(e,t){g_gblprefs={};for(var o=0;o<t.rows.length;o++){var s=t.rows.item(o).username_hash,a=t.rows.item(o).prefname,r=t.rows.item(o).prefvalue;s!=fix_userhash("")?(g_userprefs[a]=r,"identity"==a&&(g_identity=r)):g_gblprefs[a]=r}if(g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk){var n=lpGetPref("language","");include_language(n)}if(start_idle_checker(),void 0===g_gblprefs.generateHkKeyCode&&setup_default_hotkeys(),setup_hotkeys(),void 0!==g_gblprefs.server){var l=g_gblprefs.server;""==l||"lastpass.com"!=l&&"lastpass.eu"!=l||(0!=base_url.indexOf("https://preprod.lastpass.com")&&0!=base_url.indexOf("https://lpdev.lastpass.com")||"lastpass.com"!=l)&&(base_url="https://"+l+"/")}g_prefs_read=!0,console_log("read: "+t.rows.length+" preferences"),Topics.get(Topics.PREFERENCES_READ).publish(),c&&c(t.rows.length)};if(g_indexeddb){var a={rows:{item:function(e){return this[e]},length:0}},r=e.transaction("LastPassPreferences","readonly").objectStore("LastPassPreferences").index("username_hash");r.openCursor(IDBKeyRange.only(fix_userhash(o))).onsuccess=function(e){var t=e.target.result;t?(a.rows[a.rows.length]=t.value,a.rows.length++,t.continue()):o!=fix_userhash("")?r.openCursor(IDBKeyRange.only(fix_userhash(""))).onsuccess=function(e){var t=e.target.result;t?(a.rows[a.rows.length]=t.value,a.rows.length++,t.continue()):s(null,a)}:s(null,a)}}else e.transaction(function(e){e.executeSql("SELECT * FROM LastPassPreferences where username_hash=? or username_hash=?",[o,""],s,function(e,t){console_log(t)})})}else c&&c()};return e}();function setup_default_hotkeys(){g_is_mac?(lpPutGblPref("generateHkKeyCode",0),lpPutGblPref("generateHkMods",""),lpPutGblPref("recheckHkKeyCode",0),lpPutGblPref("recheckHkMods",""),lpPutGblPref("searchHkKeyCode",0),lpPutGblPref("searchHkMods",""),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","meta"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","meta"),lpPutGblPref("homeHkKeyCode",0),lpPutGblPref("homeHkMods",""),lpPutGblPref("openpopoverHkKeyCode",220),lpPutGblPref("openpopoverHkMods","meta")):(lpPutGblPref("generateHkKeyCode",71),lpPutGblPref("generateHkMods","alt"),lpPutGblPref("recheckHkKeyCode",73),lpPutGblPref("recheckHkMods","alt"),lpPutGblPref("searchHkKeyCode",87),lpPutGblPref("searchHkMods","alt"),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","alt"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","alt"),lpPutGblPref("homeHkKeyCode",72),lpPutGblPref("homeHkMods","control alt"),lpPutGblPref("openpopoverHkKeyCode",220),lpPutGblPref("openpopoverHkMods","alt")),lpPutGblPref("submitHkKeyCode",0),lpPutGblPref("submitHkMods",""),lpPutGblPref("saveallHkKeyCode",0),lpPutGblPref("saveallHkMods",""),lpPutGblPref("logoffHkKeyCode",0),lpPutGblPref("logoffHkMods",""),lpPutGblPref("defaultffidHkKeyCode",0),lpPutGblPref("defaultffidHkMods",""),lpWriteAllPrefs()}function lpWriteAllPrefs(){var n=g_isfirefoxsdk,e=opendb();if(createPrefsTable(e),e){if(g_indexeddb){var t=e.transaction("LastPassPreferences","readwrite").objectStore("LastPassPreferences");if(null!=g_username_hash&&""!=g_username_hash)for(var o in g_userprefs_changed)t.put({username_hash:fix_userhash(g_username_hash),prefname:o,prefvalue:g_userprefs[o],userkey:g_username_hash+"_"+o});for(var o in g_userprefs_changed={},g_gblprefs_changed)t.put({username_hash:fix_userhash(""),prefname:o,prefvalue:g_gblprefs[o],userkey:"_"+o});g_gblprefs_changed={}}else e.transaction(function(e){var t="",o="",s=[],a=0;if(n&&(t="REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES "),null!=g_username_hash&&""!=g_username_hash)for(var r in g_userprefs_changed)n?(t+=o+"(?, ?, ?)",o=", ",s.push(g_username_hash),s.push(r),s.push(g_userprefs[r]),a++):(e.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",[g_username_hash,r,g_userprefs[r]],function(e,t){},function(e,t){console_log(t)}),ExtensionPreferences.triggerChange(r,g_userprefs[r]));for(var r in g_userprefs_changed={},g_gblprefs_changed)n?(t+=o+"(?, ?, ?)",o=", ",s.push(""),s.push(r),s.push(g_gblprefs[r]),a++):(e.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",["",r,g_gblprefs[r]],function(e,t){},function(e,t){console_log(t)}),ExtensionPreferences.triggerChange(r,g_gblprefs[r]));g_gblprefs_changed={},n&&0<a&&e.executeSql(t,s,function(e,t){},function(e,t){console_log(t)})});Topics.get(Topics.PREFERENCES_WRITE).publish()}start_idle_checker()}function capturehk(e,t){var o="";if(o+=t.ctrlKey?"control":"",o+=t.metaKey?(""!=o?" ":"")+"meta":"",o+=t.altKey?(""!=o?" ":"")+"alt":"",""!=(o+=t.shiftKey?(""!=o?" ":"")+"shift":"")&&"shift"!=o||(o=getBG().g_is_mac?"meta":"alt"),8==t.keyCode||127==t.keyCode||46==t.keyCode)optionsData.HotKeys[e+"KeyCode"]=0;else{if(t.keyCode<=32||91==t.keyCode)return;0!=t.keyCode?optionsData.HotKeys[e+"KeyCode"]=t.keyCode:optionsData.HotKeys[e+"KeyCode"]=t.charCode}optionsData.HotKeys[e+"Mods"]=o,writeHotKeyValue(e)}function writeHotKeyValue(e){var t=optionsData.HotKeys[e+"KeyCode"],o=document.getElementById(e),s="";if(0!=t){var a=optionsData.HotKeys[e+"Mods"];"string"!=typeof a&&(a="");var r=a.split(" ");for(var n in r)"control"==r[n]&&(s+=gs("Ctrl")+"+"),"meta"==r[n]&&(s+=gs("Meta")+"+"),"alt"==r[n]&&(s+=gs("Alt")+"+"),"shift"==r[n]&&(s+=gs("Shift")+"+")}if(0!=t){switch(t=parseInt(t)){case 33:s+=gs("Page Up");break;case 34:s+=gs("Page Down");break;case 35:s+=gs("End");break;case 36:s+=gs("Home");break;case 37:s+=gs("Left");break;case 38:s+=gs("Up");break;case 39:s+=gs("Right");break;case 40:s+=gs("Down");break;case 189:s+="-";break;case 219:s+="[";break;case 220:s+="\\";break;case 221:s+="]";break;case 186:s+=";";break;case 222:s+="'";break;case 188:s+=",";break;case 187:s+="+";break;case 190:s+=".";break;case 191:s+="/";break;case 106:s+="*";break;case 192:s+="~";break;case 124:s+=gs("Print Screen");break;default:s+=String.fromCharCode(t).toUpperCase()}o.value=s}else o.value=""}function fixhk(e,t){optionsData.HotKeys[e+"KeyCode"]<32&&(optionsData.HotKeys[e+"Mods"]="",writeHotKeyValue(e)),t.cancelBubble=!0,t.stopPropagation()}optionsData={HotKeys:{}};var last_idle_check=0,idle_checker_started=!1;function start_idle_checker(){if(0==last_idle_check&&!idle_checker_started){var e=parseInt(lpGetPref("idleLogoffVal",0));lpdbg("idle","starting idle checker, idleLogoffVal is "+lpGetPref("idleLogoffVal",0)),0<e&&(last_idle_check=lp_get_gmt_timestamp(),idle_checker_started=!0,setTimeout(function(){idle_checker()},1e4))}}var last_active_time=0,enable_native_idle=!0;function idle_checker(){var a=parseInt(lpGetPref("idleLogoffVal",0));if(lpdbg("idle","checking idle, idleLogoffVal is "+lpGetPref("idleLogoffVal",0)),0<a){var r=60*a,o=function(e){var t=!1,o=lp_get_gmt_timestamp();"active"==e?last_active_time=lp_get_gmt_timestamp():"locked"==e?t=r<o-last_active_time:"idle"==e&&(t=!0);var s=!0;0!=last_idle_check&&0!=r&&(t||r<o-last_idle_check)&&(console_log("IDLE CHECKER ISSUING LOGOFF: idleLogoffVal="+a+" isidle="+t+" limit="+r+" currtime="+o+" last_idle_check="+last_idle_check+" state="+e+" last_active_time="+last_active_time),lplogoff_if(),s=!1),s&&(last_idle_check=o)},e=function(e){e?call_binary_function("get_idle_ms",function(e){var t=parseInt(e/1e3);o(r<t?"idle":"active")}):enable_native_idle&&"undefined"!=typeof chrome&&void 0!==chrome.idle&&chrome.idle.queryState(r,o)};have_binary_function("get_idle_ms")?can_check_idle(e):e(!1)}setTimeout(function(){idle_checker()},1e4)}var g_can_check_idle=-1;function can_check_idle(t){-1!=g_can_check_idle?t(!!g_can_check_idle):g_is_linux&&have_binary_function("can_check_idle")?call_binary_function("can_check_idle",function(e){t(!!(g_can_check_idle=e?1:0))}):(g_can_check_idle=1,t(!0))}
//# sourceMappingURL=sourcemaps/prefs.js.map
