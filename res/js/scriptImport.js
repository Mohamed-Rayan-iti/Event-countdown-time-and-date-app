import * as importModule from "./scriptExport.js";

document.getElementById("submit").onclick = () => {
  console.log(document.getElementById("eventDateTime").value);
  if (
    document.getElementById("eventName").value.trim() == "" ||
    document.getElementById("eventDateTime").value.trim() == ""
  ) {
    document.getElementById("viewCountDownDateTime").innerHTML =
      "please fill out all input field";
    document.getElementById(
      "viewCountDownDateTime"
    ).parentElement.style.background = "red";
  } else {
    importModule.eventCountDownDateTime(
      new Date(document.getElementById("eventDateTime").value).getTime(),
      document.getElementById("eventName").value
    );
    document
      .getElementById("viewCountDownDateTime")
      .parentElement.removeAttribute("style");
  }
};
