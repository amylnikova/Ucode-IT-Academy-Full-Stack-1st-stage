function getFormattedDate (myDate){
    var optionsWeekday = {weekday: 'long'}
    var optionsDay = {day:'2-digit'}
    function zero(a) {
        return String(a).length === 1 ? '0' + a:a
    }
    var day = myDate.toLocaleString('en-Us', optionsDay);
    var month = myDate.getMonth() + 1;
    var year = myDate.getFullYear();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var weekday = myDate.toLocaleString('en-Us', optionsWeekday)
    return `${day}.${zero(month)}.${year} ${zero(hours)}:${zero(minutes)} ${weekday}`
}
const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date("42 03:24:00");
console.log(getFormattedDate(date0))
console.log(getFormattedDate(date1))
console.log(getFormattedDate(date2))

