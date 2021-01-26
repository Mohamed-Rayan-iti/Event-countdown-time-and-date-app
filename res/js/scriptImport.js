import * as importModule from "./scriptExport.js";

document.getElementById("submit").onclick = () => {
  importModule.eventCountDownDateTime(
    new Date(document.getElementById("eventDateTime").value).getTime(),
    document.getElementById("eventName").value
  );
};
