# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## User Story

With the index.html and style.css provided, I then created an script.js to start the project. The index.html was linked to the stylesheet and javascripts. Rows and colums were created to display the schedule blocks. Moment.js was linked in order to display the date and time. Through JS we created an else if function to determine whether the schedule blocks are in the past, present or future. Where through css, the blocks will display specific colors depending on the time of day. Past blocks are given an opacity in order to give the blocks of a faded appearance. Users can input text into each schedule block, where upon clicking save, the inputed date will be stored in local storage. With .children we are able to search through the children in each individual time sloct in order to construct a new jQuery object from the matching elements. plannerItems are given parents in listItem and thus stored with the use of JSON.stringify. 