import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from "./analytics.js";

import { Observable } from "./observer.js";

const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

Observable.subscribe(sendToCustomAnalytics);
Observable.subscribe(sendToGoogleAnalytics);
Observable.subscribe(sendToEmail);

pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  Observable.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  Observable.notify(data);
});
