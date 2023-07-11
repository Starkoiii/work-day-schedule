// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  // var textMe =  $("textarea")
  // localStorage.setItem("text", textMe.val(""));
  $('.saveBtn').on("click", function() {
    var timeKey = $(this).parent().attr('id').split('-')[1];
    var valTxt = $(this).parent().find('.description').val();
    localStorage.setItem(timeKey, valTxt);
  })
  });

  // TODO: Add code to apply the past, present, or future class to each time
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
var currentHour = dayjs().format('HH');
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
})

// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D h:mm a'));