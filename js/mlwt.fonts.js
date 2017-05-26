var otFeatures = ["cv75", "cv75_1", "cv75_0", "serb", "serb_1", "serb_0", "cv90", "cv90_1", "cv90_0", "brig", "brig_1", "brig_0", "cv80", "cv80_1", "cv80_0", "cv82", "cv82_1", "cv82_0", "cv81", "cv81_1", "cv81_0", "cv91", "cv91_1", "cv91_0", "cv92", "cv92_1", "cv92_0", "pit9", "pit9_1", "pit9_0", "pit9_2", "pit9_3", "ss01", "ss01_1", "ss01_0", "ss04", "ss04_1", "ss04_0", "ss05", "ss05_1", "ss05_0", "cv77", "cv77_1", "cv77_0", "cv76", "cv76_1", "cv76_0", "cv13", "cv13_1", "cv13_0", "ss07", "ss07_1", "ss07_0", "cv14", "cv14_1", "cv14_0", "cv17", "cv17_1", "cv17_0", "cv25", "cv25_1", "cv25_0", "cv25_2", "cv28", "cv28_1", "cv28_0", "cv31", "cv31_1", "cv31_0", "cv34", "cv34_1", "cv34_0", "cv35", "cv35_1", "cv35_0", "cv37", "cv37_1", "cv37_0", "cv39", "cv39_1", "cv39_0", "cv43", "cv43_1", "cv43_0", "cv43_2", "cv43_3", "cv44", "cv44_1", "cv44_0", "cv46", "cv46_1", "cv46_0", "cv49", "cv49_1", "cv49_0", "cv51", "cv51_1", "cv51_0", "cv52", "cv52_1", "cv52_0", "cv55", "cv55_1", "cv55_0", "cv57", "cv57_1", "cv57_0", "cv56", "cv56_1", "cv56_0", "cv62", "cv62_1", "cv62_0", "cv62_2", "cv68", "cv68_1", "cv68_0", "cv67", "cv67_1", "cv67_0", "cv19", "cv19_1", "cv19_0", "cv20", "cv20_1", "cv20_0", "cv47", "cv47_1", "cv47_0", "cv70", "cv70_1", "cv70_0", "cv71", "cv71_1", "cv71_0", "cv78", "cv78_1", "cv78_0", "cv98", "cv98_1", "cv98_0", "ss06", "ss06_1", "ss06_0", "smcp", "smcp_1", "smcp_0", "c2sc", "c2sc_1", "c2sc_0", "cv10", "cv10_1", "cv10_0", "cv01", "cv01_1", "cv01_0", "cv04", "cv04_1", "cv04_0", "cv06", "cv06_1", "cv06_0", "cv07", "cv07_1", "cv07_0"];

var cssRules = {
    cv75: '"viet" 1, "cv75" 1',
    cv75_1: '"viet" 1, "cv75" 1',
    cv75_0: '"viet" 0, "cv75" 0',
    serb: '"serb" 1',
    serb_1: '"serb" 1',
    serb_0: '"serb" 0',
    cv90: '"chtn" 1, "cv90" 1',
    cv90_1: '"chtn" 1, "cv90" 1',
    cv90_0: '"chtn" 0, "cv90" 0',
    brig: '"brig" 1',
    brig_1: '"brig" 1',
    brig_0: '"brig" 0',
    cv80: '"mone" 1, "cv80" 1',
    cv80_1: '"mone" 1, "cv80" 1',
    cv80_0: '"mone" 0, "cv80" 0',
    cv82: '"sbrv" 1, "cv82" 1',
    cv82_1: '"sbrv" 1, "cv82" 1',
    cv82_0: '"sbrv" 0, "cv82" 0',
    cv81: '"shha" 1, "cv81" 1',
    cv81_1: '"shha" 1, "cv81" 1',
    cv81_0: '"shha" 0, "cv81" 0',
    cv91: '"tone" 1, "cv91" 1',
    cv91_1: '"tone" 1, "cv91" 1',
    cv91_0: '"tone" 0, "cv91" 0',
    cv92: '"tstv" 1, "cv92" 1',
    cv92_1: '"tstv" 1, "cv92" 1',
    cv92_0: '"tstv" 0, "cv92" 0',
    pit9: '"pit9" 1',
    pit9_1: '"pit9" 1',
    pit9_0: '"pit9" 0',
    pit9_2: '"pit9" 2',
    pit9_3: '"pit9" 3',
    ss01: '"litr" 1, "ss01" 1',
    ss01_1: '"litr" 1, "ss01" 1',
    ss01_0: '"litr" 0, "ss01" 0',
    ss04: '"bowl" 1, "ss04" 1',
    ss04_1: '"bowl" 1, "ss04" 1',
    ss04_0: '"bowl" 0, "ss04" 0',
    ss05: '"ital" 1, "ss05" 1',
    ss05_1: '"ital" 1, "ss05" 1',
    ss05_0: '"ital" 0, "ss05" 0',
    cv77: '"carn" 1, "cv77" 1',
    cv77_1: '"carn" 1, "cv77" 1',
    cv77_0: '"carn" 0, "cv77" 0',
    cv76: '"ogon" 1, "cv76" 1',
    cv76_1: '"ogon" 1, "cv76" 1',
    cv76_0: '"ogon" 0, "cv76" 0',
    cv13: '"B_hk" 1, "cv13" 1',
    cv13_1: '"B_hk" 1, "cv13" 1',
    cv13_0: '"B_hk" 0, "cv13" 0',
    ss07: '"lopr" 1, "ss07" 1',
    ss07_1: '"lopr" 1, "ss07" 1',
    ss07_0: '"lopr" 0, "ss07" 0',
    cv14: '"beta" 1, "ss07" 1',
    cv14_1: '"beta" 1, "ss07" 1',
    cv14_0: '"beta" 0, "ss07" 0',
    cv17: '"D_hk" 1, "cv17" 1',
    cv17_1: '"D_hk" 1, "cv17" 1',
    cv17_0: '"D_hk" 0, "cv17" 0',
    cv25: '"ramh" 1, "cv25" 1',
    cv25_1: '"ramh" 1, "cv25" 1',
    cv25_0: '"ramh" 0, "cv25" 0',
    cv25_2: '"ramh" 2, "cv25" 2',
    cv28: '"Hstk" 1, "cv28" 1',
    cv28_1: '"Hstk" 1, "cv28" 1',
    cv28_0: '"Hstk" 0, "cv28" 0',
    cv31: '"i_tl" 1, "cv31" 1',
    cv31_1: '"i_tl" 1, "cv31" 1',
    cv31_0: '"i_tl" 0, "cv31" 0',
    cv34: '"jser" 1, "cv34" 1',
    cv34_1: '"jser" 1, "cv34" 1',
    cv34_0: '"jser" 0, "cv34" 0',
    cv35: '"litJ" 1, "cv35" 1',
    cv35_1: '"litJ" 1, "cv35" 1',
    cv35_0: '"litJ" 0, "cv35" 0',
    cv37: '"Jstk" 1, "cv37" 1',
    cv37_1: '"Jstk" 1, "cv37" 1',
    cv37_0: '"Jstk" 0, "cv37" 0',
    cv39: '"l_tl" 1, "cv39" 1',
    cv39_1: '"l_tl" 1, "cv39" 1',
    cv39_0: '"l_tl" 0, "cv39" 0',
    cv43: '"Engs" 1, "cv43" 1',
    cv43_1: '"Engs" 1, "cv43" 1',
    cv43_0: '"Engs" 0, "cv43" 0',
    cv43_2: '"Engs" 2, "cv43" 2',
    cv43_3: '"Engs" 3, "cv43" 3',
    cv44: '"N_hk" 1, "cv44" 1',
    cv44_1: '"N_hk" 1, "cv44" 1',
    cv44_0: '"N_hk" 0, "cv44" 0',
    cv46: '"opnO" 1, "cv46" 1',
    cv46_1: '"opnO" 1, "cv46" 1',
    cv46_0: '"opnO" 0, "cv46" 0',
    cv49: '"p_hk" 1, "cv49" 1',
    cv49_1: '"p_hk" 1, "cv49" 1',
    cv49_0: '"p_hk" 0, "cv49" 0',
    cv51: '"q_tl" 1, "cv51" 1',
    cv51_1: '"q_tl" 1, "cv51" 1',
    cv51_0: '"q_tl" 0, "cv51" 0',
    cv52: '"Qalt" 1, "cv52" 1',
    cv52_1: '"Qalt" 1, "cv52" 1',
    cv52_0: '"Qalt" 0, "cv52" 0',
    cv55: '"R_tl" 1, "cv55" 1',
    cv55_1: '"R_tl" 1, "cv55" 1',
    cv55_0: '"R_tl" 0, "cv55" 0',
    cv57: '"t_hk" 1, "cv57" 1',
    cv57_1: '"t_hk" 1, "cv57" 1',
    cv57_0: '"t_hk" 0, "cv57" 0',
    cv56: '"t_tl" 1, "cv56" 1',
    cv56_1: '"t_tl" 1, "cv56" 1',
    cv56_0: '"t_tl" 0, "cv56" 0',
    cv62: '"v_hk" 1, "cv62" 1',
    cv62_1: '"v_hk" 1, "cv62" 1',
    cv62_0: '"v_hk" 0, "cv62" 0',
    cv62_2: '"v_hk" 2, "cv62" 2',
    cv68: '"Y_hk" 1, "cv68" 1',
    cv68_1: '"Y_hk" 1, "cv68" 1',
    cv68_0: '"Y_hk" 0, "cv68" 0',
    cv67: '"y_tl" 1, "cv67" 1',
    cv67_1: '"y_tl" 1, "cv67" 1',
    cv67_0: '"y_tl" 0, "cv67" 0',
    cv19: '"ezhc" 1, "cv19" 1',
    cv19_1: '"ezhc" 1, "cv19" 1',
    cv19_0: '"ezhc" 0, "cv19" 0',
    cv20: '"Ezhr" 1, "cv20" 1',
    cv20_1: '"Ezhr" 1, "cv20" 1',
    cv20_0: '"Ezhr" 0, "cv20" 0',
    cv47: '"opOU" 1, "cv47" 1',
    cv47_1: '"opOU" 1, "cv47" 1',
    cv47_0: '"opOU" 0, "cv47" 0',
    cv70: '"apos" 1, "cv70" 1',
    cv70_1: '"apos" 1, "cv70" 1',
    cv70_0: '"apos" 0, "cv70" 0',
    cv71: '"coln" 1, "cv71" 1',
    cv71_1: '"coln" 1, "cv71" 1',
    cv71_0: '"coln" 0, "cv71" 0',
    cv78: '"pcir" 1, "cv78" 1',
    cv78_1: '"pcir" 1, "cv78" 1',
    cv78_0: '"pcir" 0, "cv78" 0',
    cv98: '"empt" 1, "cv98" 1',
    cv98_1: '"empt" 1, "cv98" 1',
    cv98_0: '"empt" 0, "cv98" 0',
    ss06: '"invs" 1, "ss06" 1',
    ss06_1: '"invs" 1, "ss06" 1',
    ss06_0: '"invs" 0, "ss06" 0',
    smcp: '"smcp" 1',
    smcp_1: '"smcp" 1',
    smcp_0: '"smcp" 0',
    c2sc: '"c2sc" 1',
    c2sc_1: '"c2sc" 1',
    c2sc_0: '"c2sc" 0',
    cv10: '"dig0" 1, "cv10" 1',
    cv10_1: '"dig0" 1, "cv10" 1',
    cv10_0: '"dig0" 0, "cv10" 0',
    cv01: '"dig1" 1, "cv01" 1',
    cv01_1: '"dig1" 1, "cv01" 1',
    cv01_0: '"dig1" 0, "cv01" 0',
    cv04: '"dig4" 1, "cv04" 1',
    cv04_1: '"dig4" 1, "cv04" 1',
    cv04_0: '"dig4" 0, "cv04" 0',
    cv06: '"dg69" 1, "cv06" 1',
    cv06_1: '"dg69" 1, "cv06" 1',
    cv06_0: '"dg69" 0, "cv06" 0',
    cv07: '"dig7" 1, "cv07" 1',
    cv07_1: '"dig7" 1, "cv07" 1',
    cv07_0: '"dig7" 0, "cv07" 0'
};

var elStyle = document.createElement("style");
document.head.appendChild(elStyle);

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

function elOpentypeSupport() {
    var els = document.querySelectorAll("[class]");
    var styleRules = [];
    [].forEach.call(els, function(el) {
        var classList = el.className.split(/\s+/);
        var classes = [];
        for (var i = 0; i < classList.length; i++) {
            if (otFeatures.contains(classList[i])) {
                classes.push(classList[i]);
            }
        }
        var selector = ".";
        var property = "";
        if (classes.length > 1) {
            console.log(classes);
            for (var i = 0; i < classes.length; i++) {
                selector = selector + classes[i] + ".";
                console.log("" + cssRules[classes[i]]);
                property = property + cssRules[classes[i]] + ",";
            }
        }
        property = property.replace(/,\s*$/, "");
        selector = selector.replace(/\.$/, "");
        var addRule = selector + "{font-feature-settings:" + property + ";}"
        styleRules.push(addRule);
    });

    var uniqueRules = styleRules.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })

    for (var i = 0; i < uniqueRules.length; i++) {
        elStyle.sheet.insertRule(uniqueRules[i], 0);
    }
}




function elBidiOverrideMend() {
    elStyle.sheet.insertRule( ":lang(men-Mend), :lang(men_mend-SL) {unicode-bidi: bidi-override;}",0);
}

function(elBDOforMend) {
    var elDocLang = elDocumentLang();
    var elLangs = elGetContentLangs();
    if ( elDocLang === "men-Mend" || "men-Mend-SL") {
        elBidiOverride();
    } else if (elLangs.includes('men-Mend')) {
        elBidiOverride();
    } else if (elLangs.includes('men-Mend-SL')) {
        elBidiOverride();
    }
}
