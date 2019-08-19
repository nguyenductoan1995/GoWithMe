import moment from 'moment'

moment.updateLocale('en', {
  calendar: {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    lastWeek: '[Last] dddd(D MMM YYYY)',
    sameElse: 'D MMM, YY',
  },
})
