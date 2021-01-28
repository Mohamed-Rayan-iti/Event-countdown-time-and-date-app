import * as all  from "./scriptExport.js";

const eventTitle = document.getElementById("eventTitle"),
  eventDatetime = document.getElementById("eventDateTime"),
  addButton = document.getElementById("submit"),
  eventList = document.getElementById("eventList");

addButton.onclick = (_) => {
  all.createEvent(eventTitle, eventDatetime, eventList);
};

document.addEventListener("click", function (e) {
  // Event Item Delete 
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentNode.remove();
  }
});
