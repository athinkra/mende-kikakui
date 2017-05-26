/*****************************************
 *
 * jQuery.mgio.js
 * (c) 2016 Enabling Languages,
 * released under the MIT license.
 *
 ****************************************/

jQuery.extend({
    isValidSelector: function(selector) {
        try {
            var element = jQuery(selector);
        } catch (error) {
            return false;
        }
        return true;
    },
});

jQuery.fn.extend({
    elWS: function () {
        var result = [];
        var elementName;
        var el = jQuery(this);
        if (el.length === 1) {
            if (el.prop('nodeName')) {
                elementName = el.prop('nodeName');
            } else {
                elementName = "";
            }
            var obj = {};
            obj = {
                "node": elementName,
                "id": el.prop('id'),
                "class": el.prop('class'),
                "language": el.closest( '[lang]' ).attr( 'lang' ),
                "direction": el.css('direction'),
                "mode": el.css('writing-mode'),
                "orientation": el.css('text-orientation'),
                "bidi": el.css('unicode-bidi')
            };
            result.push(obj);
        } else {
            el.each( function(){
                if (jQuery(this).prop('nodeName')) {
                elementName = jQuery(this).prop('nodeName');
                } else {
                    elementName = "";
                }
                obj = {};
                obj = {
                    "node": elementName,
                    "id": el.prop('id'),
                    "class": el.prop('class'),
                    "language": el.closest( '[lang]' ).attr( 'lang' ),
                    "direction": el.css('direction'),
                    "mode": el.css('writing-mode'),
                    "orientation": el.css('text-orientation')
                };
                result.push(obj);
            });
        }
        return result;
    },
    getDirection: function () {
        var result = null;
        if (jQuery(this)) {
            result = jQuery(this).css('direction');
        }
        return result;
    },
    isRTL: function () {
        //code
        if(jQuery(this).elWS()[0].direction === "rtl") {
            return true;
        }
        return false;
    },
    isVertical: function () {
        if(jQuery(this).elWS()[0].mode === "vertical-rl" || jQuery(this).elWS()[0].mode === "vertical-lr") {
            return true;
        }
        return false;
    },
    isSupportedCssRule: function(property,value) {
        var test = false;
        if (jQuery(this).css(property) === value) {
            test = true;
        }
        return test;
    }
});

function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
        // TODO: [eslint] Unnecessary escape character: \-. (no-useless-escape)
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}

/*
 * polyfill for .forEach()
 * See: http://stackoverflow.com/questions/16186930/jquery-foreach-not-working-in-ie8#answer-22598415
 *
 */
if (typeof Array.prototype.forEach != 'function') {
  Array.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
      callback.apply(this, [this[i], i, this]);
    }
  };
}

/*
 * isHTML5()
 *
 *
 */
function isHTML5() {
    if (document.doctype === null) return false;
    var node = document.doctype;
    var doctype_string = "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC"' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + ">";
    if (doctype_string === '<!DOCTYPE html>') {
        return true;
    }
    return false;
}

/*
 * flipDirection(tdir,exclude)
 * Add isRTL or isLTR class to elments that do not match document direction
 * if :dir() and :-moz-dir() not supported. Called by setDirection().
 *
 */

function flipDirection(tdir,exclude) {
    if(!jQuery.isValidSelector('dir(' + tdir + ')') && !jQuery.isValidSelector(':-moz-dir(' + tdir + ')')) {
        // TODO: [eslint] 'value' is defined but never used. (no-unused-vars)
        jQuery('*').each(function(index, value){
            if (exclude) {
                // exclude adding class to elements that have dir attribute
                if (jQuery(this).elWS()[0].direction == tdir && !jQuery(this).attr('dir')){
                    jQuery(this).addClass("is" + tdir.toUpperCase());
                }
            } else {
                // Add class to all elements that match dircetionality wether there is or is not a dir attribute on element
                if (jQuery(this).elWS()[0].direction == tdir){
                    jQuery(this).addClass("is" + tdir.toUpperCase());
                }
            }
        });
    }
}

/*
 * setDirection(exclude)
 * Determines document directionality and calls flipDirection().
 *
 */
function setDirection(exclude) {
    // exclude  or include class to elements that have dir attribute. default is to include
    if (!exclude) { exclude = false; }

    // dd = document direction: value of 'dir' attribute on <html> element.
    // flipd = opposite direction to document direction
    // Set default values

    //TODO: [eslint] 'dd' is assigned a value but never used.
    var dd = "ltr"; var flipd = "rtl";

    // If dd is RTL,adjust dd, flipd values
    if (jQuery('html').attr('dir')) {
        if (jQuery('html').attr('dir') == "rtl") { dd = "rtl"; flipd = "ltr"; }
    }

    flipDirection(flipd, exclude);
}

function elPreferredLangs() {
  if (!navigator.languages) {
    navigator.languages = [navigator.language || navigator.userLanguage];
  }
  return navigator.languages;
}

function elCharEncoding() {
  if (!document.characterSet) {
    document.characterSet = jQuery("meta").attr("charset") || jQuery("meta[http-equiv='Content-Type']").attr("content").split("=")[1];
  }
  return document.characterSet.toUpperCase();
}

function elDocumentLang() {
  var docLang = "";
  if (!jQuery("html").attr("lang") && !jQuery("body").attr("lang")) {
    docLang = "";
  } else if (jQuery("html").attr("lang") && !jQuery("body").attr("lang")) {
    //docLang = jQuery("html").attr("lang") || jQuery("body").attr("lang");
    docLang = jQuery("html").attr("lang");
  } else if (!jQuery("html").attr("lang") && jQuery("body").attr("lang")) {
    docLang = jQuery("body").attr("lang");
  }
  return docLang;
}

function elDocumentDirection() {
  var docDir = "ltr";
  if (jQuery("html").attr("dir") || jQuery("body").attr("dir")) {
    docDir = jQuery("html").attr("dir") || jQuery("body").attr("dir");
  }
  return docDir;
}

function elDocumentData() {
  var docdata = {
    document: {
      language: elDocumentLang(),
      direction: elDocumentDirection(),
      encoding: elCharEncoding()
    },
    preferredLang: elPreferredLangs()
  };
  return docdata;
}

function dedupArray(arr) {
  var compareArray = new Array();
  if (arr.length > 1) {
    for (var i = 0; i < arr.length; i++) {
      if (compareArray.indexOf(arr[i]) == - 1) {
        compareArray.push(arr[i]);
      }
    }
  }
  return compareArray;
}

function elGetContentLangs() {
  var l = new Array();
  jQuery('body [lang]').each(function () {
    l.push(jQuery(this).attr('lang'));
  });
  if (l.length > 0) {
    return dedupArray(l);
  }
}

function elGetContentDirs() {
  var d = new Array();
  jQuery('body [dir]').each(function () {
    d.push(jQuery(this).attr('dir'));
  });
  if (d.length > 0) {
    return dedupArray(d);
  }
}

/*
 * i18nChecking()
 * Highlights block level elements and flags change in language
 * and direction. Calls elWarnings()
 *
 */
function i18nChecking() {

    var dd = "ltr"; var flipd = "rtl";
    var ddir = jQuery('html').attr('dir');
    var bdir = jQuery('body').attr('dir');
    var docLang;
    var dlang = jQuery('html').attr('lang');
    var blang = jQuery('body').attr('lang');
    var bgrdclr = jQuery('body').css("background-color");
    if (bgrdclr === "transparent") {bgrdclr = "#ffffff";}
    if (typeof ddir !== typeof undefined && ddir !== false) {
        dd = ddir;
    } else if (typeof bdir !== typeof undefined && bdir !== false) {
        dd = bdir;
    }

    if (dd === "rtl") {
        flipd = "ltr";
    }

    if (typeof dlang !== typeof undefined && dlang !== false) {
        docLang = dlang;
    } else if (typeof blang !== typeof undefined && blang !== false) {
        docLang = blang;
    } else {
        docLang = "";
    }

    if (docLang !== undefined || docLang !== null) {
        jQuery( "body *" ).each(function() {
            var elData = jQuery(this).elWS()[0];
            var leadingEdge = "left";
            if (elData.direction === "rtl") {
                leadingEdge = "right";
            }
            if (jQuery(this).css('display') === "block") {
               //console.dir(jQuery(this).elWS()[0]);
               jQuery(this).css("background-repeat", "no-repeat");
               jQuery(this).css("border", "1px dotted rgb(119,136,153)");
               jQuery(this).css("padding-top", "8px");
               jQuery(this).css("background-position", "top "+leadingEdge);
               jQuery(this).css("padding-"+leadingEdge, "8px");
               if (elData.direction === flipd) {
                    jQuery(this).css("background-color", "rgb(238,232,205)");
               } else {
                   jQuery(this).css("background-color", bgrdclr);
               }
            } else if (jQuery(this).css('display') === "inline") {
                if (elData.direction === dd && jQuery(this).parents("[dir]").attr("dir") === flipd) {
                    jQuery(this).css("background-color", bgrdclr);
                    jQuery(this).css("color", "silver");
                    jQuery(this).css("border", "1px solid " + bgrdclr);
               }
            }

        });
    }

    if (jQuery('html').attr('dir')) {
        if (jQuery('html').attr('dir') == "rtl") { dd = "rtl"; flipd = "ltr"; }
    }

    elWarnings();
}

/*
 * elWarnings()
 * Generates a report to console.log() identifying document level
 * i18n information and running a series of tests for i18n issues
 * for document.
 *
 */
function elWarnings() {
  var warnings = [];
  var docData = elDocumentData();
  var warningData = "";

  if (!jQuery("html").attr("lang") && !jQuery("body").attr("lang")) {
    warnings.push("Document processing language not defined [1]");
  } else if (!jQuery("html").attr("lang") && jQuery("body").attr("lang")) {
    warnings.push("Document processing language present on BODY element, but not defined on HTML element [2]");
  }

  if (!jQuery("html").attr("dir") && jQuery("body").attr("dir")) {
    warnings.push("Direction defined on BODY element, but not on HTML element [3]");
  }

  if (!jQuery("meta").attr("charset") && !jQuery("meta[http-equiv='Content-Type']")) {
    warnings.push("Character encoding not defined within document. [4]");
  } else if (!jQuery("meta").attr("charset") && !jQuery("meta[http-equiv='Content-Type']").attr("content").split("=")[1]) {
    warnings.push("Character encoding not defined within document. [5]");
  }

  if (isHTML5() && !jQuery("meta").attr("charset")) {
    warnings.push("HTML5 document not using a META element with charset attribute. [6]");
  }

  warnings.forEach(function (warning) {
    warningData += "WARNING: " + warning + "\n";
  });

  var protomatch = /^(https?):\/\//; // NB: not '.*'
  var url = window.location.href;
  var suburl = encodeURIComponent(url.replace(protomatch, ''));
  var i18nChecker = "https://validator.w3.org/i18n-checker/check?uri=" + suburl + "#validate-by-uri+";
  var langs, dirs, langsMessage, dirsMessage;
  langs = elGetContentLangs();
  if (langs) {
    langsMessage = 'Languages declared within content: ' + langs;
  } else {
    langsMessage = 'No langauges defined within content';
  }
  dirs = elGetContentDirs();
  if (dirs) {
    dirsMessage = 'Directionality declared within content: ' + dirs;
  } else {
    dirsMessage = 'No changes in directionality declared within content';
  }

  console.log(
    "====  START OF i18n check  ====" + "\n\n" +
    "Document encoding: " + docData.document.encoding + "\n" +
    "Document language: " + docData.document.language + "\n" +
    langsMessage + "\n" +
    "Document direction: " + docData.document.direction + "\n" +
    dirsMessage + "\n" +
    "User preferred languages: " + docData.preferredLang + "\n" +
    warningData + "\n" +
    "Please use the W3C I18n Checker: \n" + i18nChecker + "\n\n" +
    "HTML font stack: \n" + getStyle(document.querySelectorAll("html")[0], "font-family") + "\n\n" +
    "BODY font stack: \n" + getStyle(document.querySelectorAll("body")[0], "font-family") + "\n\n" +
    "====  END OF i18n check  ===="
  );

}

jQuery(document).ready(function () {
  //i18nChecking();
  setDirection();
});


/*
    TODO:

    Three warnings
        [jshint] 235	The array literal notation [] is preferable.
        [jshint] 247	The array literal notation [] is preferable.
        [jshint] 257	The array literal notation [] is preferable.

    Two unused variables
        [jshint] 12	element
        [jshint] 272	i18nChecking

*/
