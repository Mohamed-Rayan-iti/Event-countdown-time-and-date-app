export function createEvent(EventTitle, EventDatetime, EventList) {
  let eventDateTime = new Date(document.querySelector("#eventDateTime").value),
    dateTimeNow = new Date();

  if (eventDateTime < dateTimeNow) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This date time is expired, Please put a valid date time",
    });
  } else if (EventTitle.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please put a valid event title",
    });
  } else if (EventDatetime.value.trim() == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please put a valid event date time",
    });
  } else {
    let newTask = document.createElement("div"),
      title = document.createElement("div"),
      eventDeleteElement = document.createElement("div"),
      deleteText = document.createTextNode("Delete"),
      eventDateTimeElement = document.createElement("div");

    title.className = "text-white event-title";
    eventDateTimeElement.className = "eventItemDateTime";

    eventDeleteElement.appendChild(deleteText);
    eventDeleteElement.className = "btn btn-danger";

    title.textContent = EventTitle.value;
    newTask.className = "eventItem d-flex justify-content-between mb-2";

    newTask.appendChild(title);

    let x = setInterval(function () {
      // Find the distance between now and the count down date
      let distance = eventDateTime.getTime() - new Date().getTime();
      // Time calculations for days, hours, minutes and seconds
      const eventObj = {
        eventTitle: title.textContent,
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };

      const { eventTitle, days, hours, minutes, seconds } = eventObj;

      if (distance < 0) {
        clearInterval(x);
         Swal.fire({
          icon: "success",
          title: "Event starting",
          text: `The event ${eventTitle} is beginning right now`,
        });
      }
      else{ 
      eventDateTimeElement.innerHTML = `
      ${days} Days 
      ${hours} Hours 
      ${minutes} Minute 
      ${seconds} Second`;

      }
    }, 1000);

    newTask.appendChild(eventDateTimeElement);

    newTask.appendChild(eventDeleteElement);

    const tasks = document.querySelectorAll("#eventList .eventItem");
    let tasksName = [];

    [...tasks].forEach((item) => {
      tasksName.push(item.childNodes[0].textContent);
    });

    if (!tasksName.includes(EventTitle.value)) {
      EventList.appendChild(newTask);

      EventTitle.value = "";
      EventDatetime.value = "";
    } else {
      Swal.fire({
        icon: "warning",
        title: "Exist event",
        text: `Event ${title.textContent} already exist, please change the event title`,
      });
    }
  }
}
