$(document).ready(function () {
  // console.log("Ready to go!"); code works!

  $("#todaysDate").text(moment().format("dddd, MMMM Do")); //displays the date format from moment for the id todaysDate

  function whatTime() { //create a function to determine what time it is for planner blocks
    var currentTime = moment().hours(); //establish the current time

    $(".time-slot").each(function () {
      var timeSlot = parseInt($(this).attr("id").split("-")[1]); //each time slot returns as an integer



      //using an else if statement to determing past, present or future for schedule blocks
      if (timeSlot < currentTime) { // if hour is greater than current time, add the class past
        $(this).addClass("past");
      }
      else if (timeSlot === currentTime) { //if hour is the same as the current hour
        $(this).removeClass("past"); // past class will be removed
        $(this).addClass("present"); // present class will be added 
      }
      else {
        $(this).removeClass("past");  //else past class will be removed
        $(this).removeClass("present"); // else present class will be removed
        $(this).addClass("future"); // future class will be added 
      }
    });
  }

  whatTime(); //run the function 

  // any inputted data will be saved in the local storage 
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  $(".saveBtn").on("click", function () { //click functions for saving data
    var plannerItem = $(this).siblings(".description").val();
    console.log(plannerItem);
    var listItem = $(this).parent().attr("id");

    localStorage.setItem(listItem, plannerItem);
  });

});