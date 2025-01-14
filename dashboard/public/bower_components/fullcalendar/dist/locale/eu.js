!(function (a, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], e)
        : "object" == typeof exports
        ? e(require("moment"), require("fullcalendar"))
        : e(a.moment, a.FullCalendar);
})("undefined" != typeof self ? self : this, function (a, e) {
    return (function (a) {
        function e(r) {
            if (t[r]) return t[r].exports;
            var n = (t[r] = { i: r, l: !1, exports: {} });
            return a[r].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
        }
        var t = {};
        return (
            (e.m = a),
            (e.c = t),
            (e.d = function (a, t, r) {
                e.o(a, t) || Object.defineProperty(a, t, { configurable: !1, enumerable: !0, get: r });
            }),
            (e.n = function (a) {
                var t =
                    a && a.__esModule
                        ? function () {
                              return a.default;
                          }
                        : function () {
                              return a;
                          };
                return e.d(t, "a", t), t;
            }),
            (e.o = function (a, e) {
                return Object.prototype.hasOwnProperty.call(a, e);
            }),
            (e.p = ""),
            e((e.s = 125))
        );
    })({
        0: function (e, t) {
            e.exports = a;
        },
        1: function (a, t) {
            a.exports = e;
        },
        125: function (a, e, t) {
            Object.defineProperty(e, "__esModule", { value: !0 }), t(126);
            var r = t(1);
            r.datepickerLocale("eu", "eu", {
                closeText: "Egina",
                prevText: "&#x3C;Aur",
                nextText: "Hur&#x3E;",
                currentText: "Gaur",
                monthNames: [
                    "urtarrila",
                    "otsaila",
                    "martxoa",
                    "apirila",
                    "maiatza",
                    "ekaina",
                    "uztaila",
                    "abuztua",
                    "iraila",
                    "urria",
                    "azaroa",
                    "abendua"
                ],
                monthNamesShort: [
                    "urt.",
                    "ots.",
                    "mar.",
                    "api.",
                    "mai.",
                    "eka.",
                    "uzt.",
                    "abu.",
                    "ira.",
                    "urr.",
                    "aza.",
                    "abe."
                ],
                dayNames: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
                dayNamesShort: ["ig.", "al.", "ar.", "az.", "og.", "ol.", "lr."],
                dayNamesMin: ["ig", "al", "ar", "az", "og", "ol", "lr"],
                weekHeader: "As",
                dateFormat: "yy-mm-dd",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                r.locale("eu", {
                    buttonText: { month: "Hilabetea", week: "Astea", day: "Eguna", list: "Agenda" },
                    allDayHtml: "Egun<br/>osoa",
                    eventLimitText: "gehiago",
                    noEventsMessage: "Ez dago ekitaldirik erakusteko"
                });
        },
        126: function (a, e, t) {
            !(function (a, e) {
                e(t(0));
            })(0, function (a) {
                return a.defineLocale("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
                        "_"
                    ),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] HH:mm",
                        llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        ss: "%d segundo",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                });
            });
        }
    });
});
