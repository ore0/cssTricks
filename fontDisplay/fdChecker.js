var canIUse = document.getElementById("js-fdChecker");

if ("fontDisplay" in document.body.style === true) {
  canIUse.textContent = "This browser can use 'font-display'👍🏻";
}
else {
  canIUse.textContent = "This browser can't use 'font-display'👎🏻";
}
