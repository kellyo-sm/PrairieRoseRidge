// *******************************
        // Current Year
// *********************************

var date= (new Date().getFullYear());
document.getElementById("year").innerHTML = date;

// *******************************
        // Current Date
// *********************************


var currentdate = new Date().toLocaleDateString('en-GB', {weeday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;