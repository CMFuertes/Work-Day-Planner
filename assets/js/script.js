$(document).ready(function () {
  // console.log("Ready to go!"); code works!

  $("#todaysDate").text(moment().format("dddd, MMMM Do YYYY")); //displays the date format from moment for the id todaysDate

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
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));

  $(".saveBtn").on("click", function () { //click functions for saving data
    var plannerItem = $(this).siblings(".description").val();
    console.log(plannerItem);
    var listItem = $(this).parent().attr("id");
    console.log(listItem);
    localStorage.setItem(listItem, JSON.stringify(plannerItem));
  });

});