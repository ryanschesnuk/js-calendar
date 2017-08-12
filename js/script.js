const calendar = document.getElementById('calendar');

const currentDate = new Date();

const randomDate = new Date(2018, 2, 11);

const dayDiv = document.getElementsByClassName("day");


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
  let year = date.getFullYear();

  let today = new Date();

  // First Part of Week

  for (var i=dayPosition; i>=0; i--){

    if (dayNumber < 1) {
      monthNumber--;
      dayNumber = daysInMonths[monthNumber];
    }

    dayDiv[i].innerText = printDateName(i, monthNumber, dayNumber);
    if (monthNumber === today.getMonth() && dayNumber === today.getDate() && year === today.getFullYear()){
      dayDiv[i].classList.add("today");
    }
    dayNumber--;
  }

  // Second Part of Week
  if ( dayPosition < 6) {
    monthNumber = date.getMonth();
    dayNumber = date.getDate() + 1;

  for (var j=dayPosition+1; j<=6; j++) {
    if (dayNumber > daysInMonths[monthNumber]) {
      monthNumber++;
      dayNumber = 1;
    }
    dayDiv[j].innerText = printDateName(j, monthNumber, dayNumber);
    dayNumber++;
  }
}
}

createCurrentWeek(currentDate);
