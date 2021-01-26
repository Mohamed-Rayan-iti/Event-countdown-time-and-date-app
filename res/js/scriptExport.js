export function eventCountDownDateTime(countDownDate, eventName) {
  let x = setInterval(function () {
    
    // Find the distance between now and the count down date
    let distance = countDownDate - new Date().getTime();
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("viewCountDownDateTime").innerHTML = `The Event ${eventName} Is EXPIRED`;
    } else {
      // Output the result in an element with id="demo"
      document.getElementById("viewCountDownDateTime").innerHTML =`The Event ${eventName} will start after <br>
       ${days} d ${hours} h ${minutes} m ${seconds} s`;
    }
  }, 1000);
}
