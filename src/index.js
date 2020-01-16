let  moment  = require('moment')
function formatTime (time,format = "YYYY-MM-DD"){

    let current = moment().utc().format(format);
    let valDate = moment(time).utc().format(format)
    if (!moment(current).isSame(moment(valDate))) {
        return valDate;
    }
    let hour = moment(time).hours()

    if (hour <= 8 && hour > 3) {
        return '早上'
    }
    if (hour <= 11 && hour > 8) {
        return '上午'

    }
    if (hour <= 13 && hour > 11) {
        return '中午'

    }
    if (hour <= 18 && hour > 13) {
        return '下午'

    }
    if ((hour <= 24 && hour > 18) || (hour <= 3 && hour >= 1)) {
        return '晚上'
    }

}
module.exports={
    formatTime: formatTime
}
