// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  $('.saveBtn').on("click", function() {
    // var textMe =  $("textarea")
    // localStorage.setItem("text", textMe.val(""));
    var timeKey = $(this).parent().attr('id').split('-')[1];
    var valTxt = $(this).parent().find('.description').val();
    localStorage.setItem(timeKey, valTxt);
  })

  });
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  var currentHour = dayjs().format('H');

  $(".time-block").each(function() {
  var blockHour = $(this).attr('id').split('-')[1];

    if (blockHour < currentHour) {
      $(this).find('.description').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).find('.description').addClass('present');
    } else {
      $(this).find('.description').addClass('future');
    };
  });
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
var currentHour = dayjs().format('H');
  $(".time-block").each(function() {
  var blockHour = $(this).attr('id').split('-')[1];

  var textEntry = localStorage.getItem(blockHour);
  var textArea = $(this).find('.description');
  textArea.val(textEntry); 

    if (blockHour < currentHour) {
      $(this).find('.description').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).find('.description').addClass('present');
    } else {
      $(this).find('.description').addClass('future');
    };


// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D h:mm a'));
});