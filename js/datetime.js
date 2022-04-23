let infoLastUpd = new Date(document.lastModified);
document.getElementById('change-date').innerHTML = '<p> Last update: ' + infoLastUpd + '</p>';

let thisDate = new Date();
let thisYear = thisDate.getFullYear();
document.getElementById('this-year').innerHTML = thisYear;