/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function () {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return (
        e.define("select2/i18n/sq", [], function () {
            return {
                errorLoading: function () {
                    return "Rezultatet nuk mund të ngarkoheshin.";
                },
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum,
                        n = "Të lutem fshi " + t + " karakter";
                    return t != 1 && (n += "e"), n;
                },
                inputTooShort: function (e) {
                    var t = e.minimum - e.input.length,
                        n = "Të lutem shkruaj " + t + " ose më shumë karaktere";
                    return n;
                },
                loadingMore: function () {
                    return "Duke ngarkuar më shumë rezultate…";
                },
                maximumSelected: function (e) {
                    var t = "Mund të zgjedhësh vetëm " + e.maximum + " element";
                    return e.maximum != 1 && (t += "e"), t;
                },
                noResults: function () {
                    return "Nuk u gjet asnjë rezultat";
                },
                searching: function () {
                    return "Duke kërkuar…";
                },
                removeAllItems: function () {
                    return "Hiq të gjitha sendet";
                }
            };
        }),
        { define: e.define, require: e.require }
    );
})();
