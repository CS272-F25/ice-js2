console.log("app.js loaded");

function invest(principal, rate, time) {
  return principal * (1 + rate) ** time;
}

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const principal = getPrincipal();
  if (principal === null) {
    alert("Your principal is empty!");
    return;
  }

  const rate = getReturnDecimal();
  if (rate === null) {
    alert("Your rate is empty!");
  }
  const time = getNumOfYears();
  if (time === null) {
    alert("Your time is empty!");
  }
  const investment = invest(principal, rate, time);
  if (investment <= 0) {
    // do something
  } else {
    alert("The investment will be worth $" + investment);
  }
}
