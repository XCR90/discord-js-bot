/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function () {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return (
        e.define("select2/i18n/ne", [], function () {
            return {
                errorLoading: function () {
                    return "नतिजाहरु देखाउन सकिएन।";
                },
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum,
                        n = "कृपया " + t + " अक्षर मेटाउनुहोस्।";
                    return t != 1 && (n += "कृपया " + t + " अक्षरहरु मेटाउनुहोस्।"), n;
                },
                inputTooShort: function (e) {
                    var t = e.minimum - e.input.length,
                        n = "कृपया बाँकी रहेका " + t + " वा अरु धेरै अक्षरहरु भर्नुहोस्।";
                    return n;
                },
                loadingMore: function () {
                    return "अरु नतिजाहरु भरिँदैछन् …";
                },
                maximumSelected: function (e) {
                    var t = "तँपाई " + e.maximum + " वस्तु मात्र छान्न पाउँनुहुन्छ।";
                    return e.maximum != 1 && (t = "तँपाई " + e.maximum + " वस्तुहरु मात्र छान्न पाउँनुहुन्छ।"), t;
                },
                noResults: function () {
                    return "कुनै पनि नतिजा भेटिएन।";
                },
                searching: function () {
                    return "खोजि हुँदैछ…";
                }
            };
        }),
        { define: e.define, require: e.require }
    );
})();
