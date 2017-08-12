const calendar = document.getElementById('calendar');

const currentDate = new Date();

const randomDate = new Date(2017, 2, 1);

const dayDiv = document.getElementsByClassName("day");

//Calendar Data


const dayIndex = [0, 1, 2, 3, 4, 5, 6];

// these are human-readable month name labels, in order
const monthIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



// Print day name
function printDateName(day, month, date) {
  let dayLabels = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  let monthLabels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'];


  return dayLabels[day] + ', ' + monthLabels[month] + " " + date;
}


function createCurrentWeek(date) {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Account for Leap year
  if ((date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) || date.getFullYear() % 400 == 0){
    daysInMonths[1] = 29;
  }

  let dayPosition = date.getDay();
  let monthNumber = date.getMonth();
  let dayNumber = date.getDate();


  // First Part of Week

  for (var i=dayPosition; i>=0; i--){

    if (dayNumber < 1) {
      monthNumber--;
      dayNumber = daysInMonths[monthNumber];
    }

    dayDiv[i].innerText = printDateName(i, monthNumber, dayNumber);
    dayNumber--;
  }

  // Second Part of Week
  if ( dayPosition < 6)
  for (var j=dayPosition+1; i<=6-dayPosition; i++) {
    
  }


}

createCurrentWeek(randomDate);
