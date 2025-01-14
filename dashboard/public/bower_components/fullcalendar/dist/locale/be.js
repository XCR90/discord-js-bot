!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], t)
        : "object" == typeof exports
        ? t(require("moment"), require("fullcalendar"))
        : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, t) {
    return (function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }
        var n = {};
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function (e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
            }),
            (t.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 87))
        );
    })({
        0: function (t, n) {
            t.exports = e;
        },
        1: function (e, n) {
            e.exports = t;
        },
        87: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }), n(88);
            var r = n(1);
            r.datepickerLocale("be", "be", {
                closeText: "Зачыніць",
                prevText: "&#x3C;Папярэд",
                nextText: "След&#x3E;",
                currentText: "Сёння",
                monthNames: [
                    "Студзень",
                    "Люты",
                    "Сакавік",
                    "Красавік",
                    "Трав",
                    "Чэрвень",
                    "Ліпень",
                    "Жнівень",
                    "Верасень",
                    "Кастрычнік",
                    "Лістапад",
                    "Снежань"
                ],
                monthNamesShort: [
                    "Студ",
                    "Лют",
                    "Сак",
                    "Крас",
                    "Трав",
                    "Чэрв",
                    "Ліп",
                    "Жнів",
                    "Вер",
                    "Каст",
                    "Ліст",
                    "Снеж"
                ],
                dayNames: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
                dayNamesShort: ["ндз", "пнд", "аўт", "срд", "чцв", "птн", "сбт"],
                dayNamesMin: ["Нд", "Пн", "Ат", "Ср", "Чц", "Пт", "Сб"],
                weekHeader: "Ндз",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                r.locale("be", {
                    buttonText: { month: "Месяц", week: "Тыдзень", day: "Дзень", list: "Парадак дня" },
                    allDayHtml: "Увесь<br />дзень",
                    eventLimitText: function (e) {
                        return "+ яшчэ " + e;
                    },
                    noEventsMessage: "Няма падзей для адлюстравання"
                });
        },
        88: function (e, t, n) {
            !(function (e, t) {
                t(n(0));
            })(0, function (e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11
                        ? n[0]
                        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                        ? n[1]
                        : n[2];
                }
                function n(e, n, r) {
                    var a = {
                        ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                        hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                        dd: "дзень_дні_дзён",
                        MM: "месяц_месяцы_месяцаў",
                        yy: "год_гады_гадоў"
                    };
                    return "m" === r
                        ? n
                            ? "хвіліна"
                            : "хвіліну"
                        : "h" === r
                        ? n
                            ? "гадзіна"
                            : "гадзіну"
                        : e + " " + t(a[r], +e);
                }
                return e.defineLocale("be", {
                    months: {
                        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                            "_"
                        ),
                        standalone:
                            "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
                                "_"
                            )
                    },
                    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                    weekdays: {
                        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                    },
                    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., HH:mm",
                        LLLL: "dddd, D MMMM YYYY г., HH:mm"
                    },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function () {
                            return "[У] dddd [ў] LT";
                        },
                        lastWeek: function () {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[У мінулую] dddd [ў] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[У мінулы] dddd [ў] LT";
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "праз %s",
                        past: "%s таму",
                        s: "некалькі секунд",
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: "дзень",
                        dd: n,
                        M: "месяц",
                        MM: n,
                        y: "год",
                        yy: n
                    },
                    meridiemParse: /ночы|раніцы|дня|вечара/,
                    isPM: function (e) {
                        return /^(дня|вечара)$/.test(e);
                    },
                    meridiem: function (e, t, n) {
                        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function (e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return (e % 10 != 2 && e % 10 != 3) || e % 100 == 12 || e % 100 == 13
                                    ? e + "-ы"
                                    : e + "-і";
                            case "D":
                                return e + "-га";
                            default:
                                return e;
                        }
                    },
                    week: { dow: 1, doy: 7 }
                });
            });
        }
    });
});
