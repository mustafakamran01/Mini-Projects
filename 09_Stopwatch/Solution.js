// Accessing timer paragraph
const timer = document.querySelector("#timer");

// Accesing div of buttons
const buttons = document.querySelector("#buttons");

// Spliting initial time on basis of ':'
let [hours, minutes, seconds] = timer.textContent.split(":").map(Number);

let interval = null

// Adding eventListener to div buttons
buttons.addEventListener("click", (e) => {
    let id = e.target.id;

        switch (id) {

            case "start":

                if (interval == null) {

                    interval = setInterval( () => {

                        if (minutes < 59) {

                            if (seconds < 59) {
                                seconds++;
                            } else {
                                minutes++;
                                seconds = 0
                            }
                    
                        } else {
                            hours++;
                            minutes = 0
                            seconds = 0
                        }

                    let hh = String(hours).padStart(2, 0)
                    let mm = String(minutes).padStart(2, 0)
                    let ss = String(seconds).padStart(2, 0)

                    timer.innerHTML = `${hh}:${mm}:${ss}`

                    }, 1000)
                }
                break;

            case "stop":

                clearInterval(interval)
                interval = null
                break;

            case "reset":
                
                clearInterval(interval)
                hours = 0
                minutes = 0
                seconds = 0
                timer.innerHTML = "00:00:00"
                break;
        }
});
