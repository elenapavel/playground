module.exports =

        __NEXT_REGISTER_PAGE('/calendar', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("./node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__("./node_modules/date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__("./node_modules/date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__("./node_modules/date-fns/get_iso_year/index.js")
var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
var isValid = __webpack_require__("./node_modules/date-fns/is_valid/index.js")
var enLocale = __webpack_require__("./node_modules/date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
var startOfYear = __webpack_require__("./node_modules/date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__("./node_modules/date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("./node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__("./node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "./node_modules/date-fns/get_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "./node_modules/date-fns/get_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/is_same_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("./node_modules/date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "./node_modules/date-fns/is_weekend/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__("./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__("./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__("./node_modules/date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("./node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "./node_modules/date-fns/set_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("./node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("./node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "./node_modules/date-fns/sub_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("./node_modules/date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/calendar/Calendar/Actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar/Calendar/Actions/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/Actions/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Actions = function (_Component) {
	_inherits(Actions, _Component);

	function Actions() {
		_classCallCheck(this, Actions);

		return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
	}

	_createClass(Actions, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    next = _props.next,
			    prev = _props.prev;


			var prevArrowClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.arrow + " ion-chevron-left";
			var nextArrowClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.arrow + " ion-chevron-right";
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: prevArrowClasses, onClick: function onClick() {
						return prev();
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: nextArrowClasses, onClick: function onClick() {
						return next();
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 13
					}
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Actions;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Actions;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Actions, "Actions", "/Users/elena/Projects/playground/pages/calendar/Calendar/Actions/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/Actions/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/Actions")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/DaysList/Day.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar/Calendar/DaysList/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Day.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();





var Day = function Day(props) {
	var isDisabled = props.isDisabled,
	    isCurrent = props.isCurrent,
	    isSelected = props.isSelected,
	    dayNumber = props.dayNumber,
	    date = props.date,
	    setDay = props.setDay,
	    onRender = props.onRender,
	    onSelect = props.onSelect;


	var dayClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day + " " + (isDisabled ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_disabled : "") + " " + (isCurrent ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_current : "") + " " + (isSelected ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_selected : "");

	var content = null;

	if (typeof onRender === "function") {
		content = onRender(props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			},
			dayNumber
		));
	}

	if (typeof onSelect === "function" && isSelected) {
		content = onSelect(props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			},
			dayNumber
		));
	}
	if (content == null) {
		content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			},
			dayNumber
		);
	}

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_container,
			onClick: function onClick() {
				setDay(date);
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		},
		content
	);
};

var _default = Day;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Day, "Day", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Day.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Day.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/DaysList/Day")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/DaysList/Month.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__ = __webpack_require__("./node_modules/date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__ = __webpack_require__("./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("./node_modules/date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__ = __webpack_require__("./node_modules/date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Day__ = __webpack_require__("./pages/calendar/Calendar/DaysList/Day.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar/Calendar/DaysList/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Month.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Month = function (_Component) {
	_inherits(Month, _Component);

	function Month() {
		_classCallCheck(this, Month);

		return _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).apply(this, arguments));
	}

	_createClass(Month, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    days = _props.days,
			    setDay = _props.setDay,
			    onRender = _props.onRender,
			    date = _props.date,
			    onSelect = _props.onSelect;


			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_6__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					}
				},
				days.map(function (day, key) {
					var currentDate = null;

					currentDate = day.lastMonth ? __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default()(date, 1), day.day) : day.nextMonth ? __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default()(date, 1), day.day) : __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(date, day.day);

					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Day__["a" /* default */], {
						key: key,
						isDisabled: day.lastMonth || day.nextMonth,
						isCurrent: day.current,
						isSelected: day.selected,
						dayNumber: day.day,
						date: currentDate,
						setDay: setDay,
						onSelect: onSelect,
						onRender: onRender,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					});
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Month;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Month;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Month, "Month", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Month.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/Month.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/DaysList/Month")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/DaysList/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__ = __webpack_require__("./node_modules/date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__ = __webpack_require__("./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("./node_modules/date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__ = __webpack_require__("./node_modules/date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Month__ = __webpack_require__("./pages/calendar/Calendar/DaysList/Month.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar/Calendar/DaysList/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var DaysList = function (_Component) {
	_inherits(DaysList, _Component);

	function DaysList() {
		_classCallCheck(this, DaysList);

		return _possibleConstructorReturn(this, (DaysList.__proto__ || Object.getPrototypeOf(DaysList)).apply(this, arguments));
	}

	_createClass(DaysList, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    view = _props.view,
			    days = _props.days,
			    date = _props.date,
			    onSelect = _props.onSelect,
			    onRender = _props.onRender,
			    setDay = _props.setDay;

			if (days != null && days.length != 0) if (view == "month") return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Month__["a" /* default */], {
				date: date,
				onRender: onRender,
				onSelect: onSelect,
				setDay: setDay,
				days: days[0],
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			});else if (view == "year") return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 28
					}
				},
				days.map(function (month, key) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Month__["a" /* default */], {
						key: key,
						date: date,
						onRender: onRender,
						onSelect: onSelect,
						setDay: setDay,
						days: days[key],
						__source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					});
				})
			);

			return null;
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return DaysList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = DaysList;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(DaysList, "DaysList", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/DaysList/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/DaysList")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/Label/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar/Calendar/Label/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/Label/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Label = function (_Component) {
	_inherits(Label, _Component);

	function Label() {
		_classCallCheck(this, Label);

		return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
	}

	_createClass(Label, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    month = _props.month,
			    year = _props.year;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 8
					}
				},
				month,
				" ",
				year
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Label;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Label;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Label, "Label", "/Users/elena/Projects/playground/pages/calendar/Calendar/Label/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/Label/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/Label")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/WeekDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar/Calendar/WeekDays/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDaysNamesSmall = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekDaysNamesXSmall = ["S", "M", "T", "W", "T", "F", "S"];

var WeekDays = function (_Component) {
	_inherits(WeekDays, _Component);

	function WeekDays() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, WeekDays);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeekDays.__proto__ || Object.getPrototypeOf(WeekDays)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			weekDays: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(WeekDays, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.setState({
				weekDays: window.innerWidth > 640 ? weekDaysNames : window.innerWidth > 480 ? weekDaysNamesSmall : weekDaysNamesXSmall
			});
			document.defaultView.addEventListener("resize", function () {
				return _this2.setWeekDaysName();
			});
		}
	}, {
		key: "setWeekDaysName",
		value: function setWeekDaysName() {
			this.setState({
				weekDays: window.innerWidth > 640 ? weekDaysNames : window.innerWidth > 480 ? weekDaysNamesSmall : weekDaysNamesXSmall
			});
		}
	}, {
		key: "render",
		value: function render() {
			var weekDays = this.state.weekDays;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 47
					}
				},
				weekDays == null ? null : weekDays.map(function (weekDay, key) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ key: key, className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.week_day, __source: {
								fileName: _jsxFileName,
								lineNumber: 52
							}
						},
						weekDay
					);
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return WeekDays;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = WeekDays;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(weekDaysNames, "weekDaysNames", "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js");
	reactHotLoader.register(weekDaysNamesSmall, "weekDaysNamesSmall", "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js");
	reactHotLoader.register(weekDaysNamesXSmall, "weekDaysNamesXSmall", "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js");
	reactHotLoader.register(WeekDays, "WeekDays", "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/WeekDays/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar/WeekDays")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format__ = __webpack_require__("./node_modules/date-fns/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__ = __webpack_require__("./node_modules/date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__ = __webpack_require__("./node_modules/date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__ = __webpack_require__("./node_modules/date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__ = __webpack_require__("./node_modules/date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__ = __webpack_require__("./node_modules/date-fns/get_days_in_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Actions__ = __webpack_require__("./pages/calendar/Calendar/Actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Label__ = __webpack_require__("./pages/calendar/Calendar/Label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WeekDays__ = __webpack_require__("./pages/calendar/Calendar/WeekDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DaysList__ = __webpack_require__("./pages/calendar/Calendar/DaysList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css__ = __webpack_require__("./pages/calendar/Calendar/design_tokens.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__design_tokens_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css__ = __webpack_require__("./pages/calendar/Calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var Calendar = function (_Component) {
	_inherits(Calendar, _Component);

	function Calendar(props) {
		_classCallCheck(this, Calendar);

		var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

		var date = new Date(props.date);
		var currentDate = new Date();
		var selectedDate = props.date != null ? date : currentDate;

		var month = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "M")) - 1;
		var monthName = __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "MMM");
		var year = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "YYYY"));

		_this.state = {
			currentDate: currentDate,
			selectedDate: selectedDate,
			inViewMonth: month,
			inViewMonthName: monthName,
			inViewYear: year,
			daysInYear: []
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var view = this.props.view;
			var _state = this.state,
			    inViewMonth = _state.inViewMonth,
			    inViewYear = _state.inViewYear;


			this.setView(view, inViewMonth, inViewYear);
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate() {
			if (this.state.inViewMonth != parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1) this.setMonth(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1);
			if (this.state.inViewYear != parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "YYYY"))) this.setYear(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "YYYY")));
		}
	}, {
		key: "setDay",
		value: function setDay(date) {
			this.setState({ selectedDate: date });
			this.setDaysInMonthView(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(date, "M")) - 1);
			this.props.onChangeDate(date);
		}
	}, {
		key: "setMonth",
		value: function setMonth(month) {
			var inViewDate = null;
			if (month < 0) {
				this.setState({ inViewMonth: 11 });
				this.setYear(this.state.inViewYear - 1);
				inViewDate = new Date(this.state.inViewYear - 1, 11);
			} else if (month > 11) {
				this.setState({ inViewMonth: 0 });
				this.setYear(this.state.inViewYear + 1);
				inViewDate = new Date(this.state.inViewYear + 1, 0);
			} else {
				this.setState({ inViewMonth: month });
				inViewDate = new Date(this.state.inViewYear, month);
			}

			this.setState({
				inViewMonthName: __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(inViewDate, "MMM")
			});
		}
	}, {
		key: "setYear",
		value: function setYear(year) {
			this.setState({
				inViewYear: year
			});
		}
	}, {
		key: "setView",
		value: function setView() {
			var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "month";
			var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var daysInYear = [];

			var currentMonth = month != null ? month : this.state.inViewMonth;
			var currentYear = year != null ? year : this.state.inViewYear;

			if (view == "year") {
				this.setYear(currentYear);
				this.setDaysInYearView(currentYear);
			} else if (view == "month") {
				this.setMonth(currentMonth);
				this.setDaysInMonthView(currentMonth);
			}
		}
	}, {
		key: "setDaysInMonthView",
		value: function setDaysInMonthView(month) {
			var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var daysInYear = [];

			var currentMonth = month != null ? month : this.state.inViewMonth;
			var currentYear = this.state.inViewYear;

			daysInYear.push(this.setDays(currentMonth, currentYear));
			this.setState({ daysInYear: daysInYear });
		}
	}, {
		key: "setDaysInYearView",
		value: function setDaysInYearView(year) {
			var _this2 = this;

			var daysInYear = [];

			var currentYear = year != null ? year : this.state.inViewYear;

			new Array(12).fill(1).forEach(function (month, key) {
				return daysInYear.push(_this2.setDays(key, currentYear));
			});
			this.setState({ daysInYear: daysInYear });
		}
	}, {
		key: "setDays",
		value: function setDays() {
			var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var _state2 = this.state,
			    currentDate = _state2.currentDate,
			    selectedDate = _state2.selectedDate,
			    inViewMonth = _state2.inViewMonth,
			    inViewYear = _state2.inViewYear;


			var inViewDate = new Date(year != null ? year : inViewYear, month != null ? month : inViewMonth);

			var currentDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "D"));
			var currentMonth = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "M")) - 1;
			var currentYear = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "YYYY"));

			var selectedDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "D"));
			var selectedMonth = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "M")) - 1;
			var selectedYear = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "YYYY"));

			var daysUntilSunday = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default()(inViewDate), "d"));
			var monthLength = __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default()(inViewDate);
			var firstDayOfWeek = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days___default()(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default()(inViewDate), daysUntilSunday), "D"));

			var completeDaysInMonth = [];
			var daysInMonth = [];

			for (var i = 0; i < daysUntilSunday; i++) {
				completeDaysInMonth.push({
					lastMonth: true,
					day: firstDayOfWeek + i
				});
			}
			for (var i = 0; i < monthLength; i++) {
				completeDaysInMonth.push({
					day: i + 1,
					current: currentDay == i + 1 && currentMonth == inViewMonth && currentYear == inViewYear,
					selected: selectedDay == i + 1 && inViewMonth == selectedMonth && inViewYear == selectedYear
				});
			}
			daysInMonth = completeDaysInMonth.concat(daysInMonth);

			completeDaysInMonth = [];

			for (var i = 0; i < 42 - daysInMonth.length; i++) {
				completeDaysInMonth.push({
					nextMonth: true,
					day: i + 1
				});
			}

			daysInMonth = daysInMonth.concat(completeDaysInMonth);

			return daysInMonth;
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state3 = this.state,
			    inViewMonth = _state3.inViewMonth,
			    inViewMonthName = _state3.inViewMonthName,
			    inViewYear = _state3.inViewYear,
			    daysInYear = _state3.daysInYear,
			    selectedDate = _state3.selectedDate;
			var _props = this.props,
			    onRender = _props.onRender,
			    onSelect = _props.onSelect,
			    view = _props.view;


			var days = daysInYear;

			// const isCurrentDate = isSameDay(date, currentDate);
			// const isCurrentMonth = isSameMonth(date, currentDate);
			// const isCurrentYear = isSameYear(date, currentDate);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 203
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.header, __source: {
							fileName: _jsxFileName,
							lineNumber: 204
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.actions, __source: {
								fileName: _jsxFileName,
								lineNumber: 205
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], {
							next: function next() {
								return _this3.setView("month", inViewMonth + 1, inViewYear);
							},
							prev: function prev() {
								return _this3.setView("month", inViewMonth - 1, inViewYear);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 206
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.label, __source: {
								fileName: _jsxFileName,
								lineNumber: 223
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { month: inViewMonthName, year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 224
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.body, __source: {
							fileName: _jsxFileName,
							lineNumber: 227
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.week_days, __source: {
								fileName: _jsxFileName,
								lineNumber: 228
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WeekDays__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 229
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.grid, __source: {
								fileName: _jsxFileName,
								lineNumber: 231
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__DaysList__["a" /* default */], {
							view: view,
							days: days,
							date: new Date(inViewYear, inViewMonth),
							setDay: function setDay(date) {
								return _this3.setDay(date);
							},
							onRender: onRender,
							onSelect: onSelect,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 232
							}
						})
					)
				)
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Calendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Calendar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Calendar, "Calendar", "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Head.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();



var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			rel: "stylesheet",
			href: "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
			rel: "stylesheet",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "/_next/static/style.css", __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Head.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Head")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/Tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Tabs.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

		_this.state = {
			active: props.active != null ? props.active : 0
		};
		return _this;
	}

	_createClass(Tabs, [{
		key: "setActive",
		value: function setActive(index) {
			this.setState({ active: index });
			this.props.onChangeViewByIndex(index);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    items = _props.items,
			    labelBackground = _props.labelBackground;
			var active = this.state.active;


			var tabs = items.map(function (item, key) {
				return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{ key: key, onClick: function onClick() {
							return _this2.setActive(key);
						}, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2621537481", [labelBackground ? labelBackground : "#ccc"]]]) + " " + "tab",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					},
					item,
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
						styleId: "2621537481",
						css: ".tab.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;padding:0.5rem 1rem;background:" + (labelBackground ? labelBackground : "#ccc") + ";border-bottom:1px solid #444;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JnQixBQUc0QixxQkFDRixtQkFDQyxvQkFDb0Isd0NBQ1gsNkJBQ2QsZUFDaEIiLCJmaWxlIjoicGFnZXMvY2FsZW5kYXIvVGFicy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWxlbmEvUHJvamVjdHMvcGxheWdyb3VuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGFjdGl2ZTogcHJvcHMuYWN0aXZlICE9IG51bGwgPyBwcm9wcy5hY3RpdmUgOiAwLFxuXHRcdH07XG5cdH1cblxuXHRzZXRBY3RpdmUoaW5kZXgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBpbmRleCB9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlVmlld0J5SW5kZXgoaW5kZXgpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaXRlbXMsIGxhYmVsQmFja2dyb3VuZCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IHRhYnMgPSBpdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJcIiBrZXk9e2tleX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRBY3RpdmUoa2V5KX0+XG5cdFx0XHRcdHtpdGVtfVxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQudGFiIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7bGFiZWxCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdD8gbGFiZWxCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdDogXCIjY2NjXCJ9O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NDQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cblx0XHRcdFx0e3RhYnN9XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC50YWJzIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jb250ZW50IHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDNyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iXX0= */\n/*@ sourceURL=pages/calendar/Tabs.js */",
						dynamic: [labelBackground ? labelBackground : "#ccc"]
					})
				);
			});

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"div",
				{
					className: "jsx-326273014" + " " + "tabs",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 41
					}
				},
				tabs,
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: "326273014",
					css: ".tabs.jsx-326273014{border:1px solid #444;}.content.jsx-326273014{padding:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUc2QixBQUdULGFBQ2QsU0FIQSIsImZpbGUiOiJwYWdlcy9jYWxlbmRhci9UYWJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lbGVuYS9Qcm9qZWN0cy9wbGF5Z3JvdW5kIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWN0aXZlOiBwcm9wcy5hY3RpdmUgIT0gbnVsbCA/IHByb3BzLmFjdGl2ZSA6IDAsXG5cdFx0fTtcblx0fVxuXG5cdHNldEFjdGl2ZShpbmRleCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGluZGV4IH0pO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2VWaWV3QnlJbmRleChpbmRleCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBpdGVtcywgbGFiZWxCYWNrZ3JvdW5kIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0Y29uc3QgdGFicyA9IGl0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYlwiIGtleT17a2V5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEFjdGl2ZShrZXkpfT5cblx0XHRcdFx0e2l0ZW19XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC50YWIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHtsYWJlbEJhY2tncm91bmRcblx0XHRcdFx0XHRcdFx0PyBsYWJlbEJhY2tncm91bmRcblx0XHRcdFx0XHRcdFx0OiBcIiNjY2NcIn07XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCkpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuXHRcdFx0XHR7dGFic31cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LnRhYnMge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzQ0NDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmNvbnRlbnQge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogM3JlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiJdfQ== */\n/*@ sourceURL=pages/calendar/Tabs.js */"
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Tabs;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Tabs;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Tabs, "Tabs", "/Users/elena/Projects/playground/pages/calendar/Tabs.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Tabs.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Tabs")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__ = __webpack_require__("./node_modules/date-fns/is_weekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Head__ = __webpack_require__("./pages/calendar/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs__ = __webpack_require__("./pages/calendar/Tabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Calendar__ = __webpack_require__("./pages/calendar/Calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/index.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var specialDates = [{
	type: "holiday",
	date: "2018-05-21",
	name: "elena"
}, {
	type: "holiday",
	date: "2018-06-21",
	name: "test"
}, {
	type: "event",
	date: "2018-05-29",
	name: "event"
}, {
	type: "event",
	date: "2018-05-21",
	name: "event"
}, {
	type: "reminder",
	date: "2018-05-21",
	name: "next"
}];

var viewTabs = ["year", "month", "week"];

var SpecialDay = function SpecialDay(_ref) {
	var date = _ref.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 42
			}
		},
		specialDates.map(function (specialDate, key) {
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
					key: key,
					style: {
						width: "100%",
						marginTop: "0.25rem",
						border: "2px solid " + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 46
					}
				});
			}
		})
	);
};

var DisplaySpecialDay = function DisplaySpecialDay(_ref2) {
	var date = _ref2.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 69
			}
		},
		specialDates.map(function (specialDate, key) {
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{
						key: key,
						style: {
							color: "" + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 73
						}
					},
					specialDate.name
				);
			}
		})
	);
};

var Application = function (_Component) {
	_inherits(Application, _Component);

	function Application(props) {
		_classCallCheck(this, Application);

		var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));

		_this.state = {
			date: "2018-05",
			view: "month"
		};
		return _this;
	}

	_createClass(Application, [{
		key: "onRender",
		value: function onRender(_ref3, cell) {
			var dayNumber = _ref3.dayNumber,
			    date = _ref3.date;

			var content = dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 107
					}
				},
				"dev"
			) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 109
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 111
					}
				})
			);

			var isWeekendDay = __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default()(date);

			var styles = {
				backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : "",
				padding: "0.75rem 0"
			};

			if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
				style: styles
			}, content);
			return content;
		}
	}, {
		key: "onSelect",
		value: function onSelect(_ref4, cell) {
			var date = _ref4.date,
			    dayNumber = _ref4.dayNumber;

			var styles = {
				borderColor: "yellow",
				padding: "0.75rem 0"
			};
			if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
				style: styles
			}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 144
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 146
					}
				})
			));
			return content;
		}
	}, {
		key: "onChangeDate",
		value: function onChangeDate(date) {
			this.setState({ date: date });
		}
	}, {
		key: "onChangeViewByIndex",
		value: function onChangeViewByIndex(viewIndex) {
			this.setState({ view: viewTabs[viewIndex] });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    date = _state.date,
			    view = _state.view;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 163
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 164
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Tabs__["a" /* default */], {
					items: viewTabs,
					active: "1",
					onChangeViewByIndex: function onChangeViewByIndex(view) {
						return _this2.onChangeViewByIndex(view);
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 165
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Calendar__["a" /* default */], {
					date: date,
					onChangeDate: function onChangeDate(date) {
						return _this2.onChangeDate(date);
					},
					onRender: this.onRender,
					onSelect: this.onSelect,
					view: view,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 170
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplaySpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 177
					}
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Application;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Application, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 183
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(specialDates, "specialDates", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(viewTabs, "viewTabs", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(SpecialDay, "SpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(DisplaySpecialDay, "DisplaySpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(Application, "Application", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/calendar/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=calendar.js.map