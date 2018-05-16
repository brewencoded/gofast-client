import * as moment from 'moment'

const compareDate = (a: string, b: string) => {
    if (moment(a).isBefore(b)) {
        return -1;
    }
    if (moment(a).isAfter(b)) {
        return 1;
    }
    return 0;
}
const compareMoney = (a: string, b: string) => {
    const aDecimal = parseFloat(a.replace('$', ''))
    const bDecimal = parseFloat(b.replace('$', ''))

    if (aDecimal < bDecimal) {
        return -1;
    }
    if (aDecimal > bDecimal) {
        return 1;
    }
    return 0;
}
const compareDays = (a: string, b: string) => {
    const aInt = parseInt(a.replace('d', ''))
    const bInt = parseInt(b.replace('d', ''))
    if (aInt < bInt) {
        return -1;
    }
    if (aInt > bInt) {
        return 1;
    }
    return 0;
}
const compareAlphaNum = (a: string, b: string) => {
    if (a.toLowerCase() < b.toLowerCase() ) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}
const compare = (a: string, b: string) => {
    if (a.indexOf('d') !== -1) return compareDays(a, b)
    else if (a.indexOf('$') !== -1) return compareMoney(a, b)
    else if (moment(a, 'dd/mm/yyyy', true).isValid()) return compareDate(a, b)
    else return compareAlphaNum(a, b)
} 

export default compare