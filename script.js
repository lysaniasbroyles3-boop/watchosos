function updateClock() {

const now = new Date();

let hours = now.getHours();

const minutes =
String(now.getMinutes()).padStart(2, "0");

const seconds =
String(now.getSeconds()).padStart(2, "0");

const period = hours >= 12 ? "PM" : "AM";

hours = hours % 12;

if (hours === 0) {
hours = 12;
}

document.getElementById("clock").textContent =
hours + ":" + minutes + ":" + seconds + " " + period;

document.getElementById("date").textContent =
now.toLocaleDateString(undefined, {
weekday: "long",
month: "short",
day: "numeric"
});
}

function refreshPage() {

updateClock();

showTemporaryMessage("Dashboard refreshed");
}

function showMessage() {

showTemporaryMessage("BOBOS is ready!");
}

function showTemporaryMessage(text) {

const message =
document.getElementById("message");

message.textContent = text;

setTimeout(function () {

```
message.textContent = "";
```

}, 2000);
}

updateClock();

setInterval(updateClock, 1000);
