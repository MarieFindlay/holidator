var joiningRadio = document.getElementById("joining");
var leavingRadio = document.getElementById("leaving");
var joiningLeavingRadio = document.getElementById("joiningLeaving");
var entitlementInput = document.getElementById("entitlement");
var daysTakenInput = document.getElementById("daysTaken");
var calculateButton = document.getElementById("calculateButton");
var resultAccruedOutput = document.getElementById("resultAccrued");
var resultRemainingOutput = document.getElementById("resultRemaining");
var startWeekDiv = document.getElementById("startWeekDiv");
var endWeekDiv = document.getElementById("endWeekDiv");
var daysTakenDiv = document.getElementById("daysTakenDiv");
var resultAccruedDiv = document.getElementById("resultAccruedDiv");
var resultRemainingDiv = document.getElementById("resultRemainingDiv");
var startDateInput = document.getElementById("startDate");
var endDateInput = document.getElementById("endDate");

function calculateAccrued (startWeek, endWeek, entitlement) {
  var accrued = ((endWeek - startWeek) / 52) * entitlement;
  return accrued;
}

function showResults(event) {
  event.preventDefault();
   
  var taken = daysTakenInput.value;
  var entitlement = entitlementInput.value;
  var startWeek = moment(startDateInput.value).week();
  var endWeek = moment(endDateInput.value).week();
  
  if (joiningRadio.checked) {
    endWeek = 52;
  } else if (leavingRadio.checked) {
    startWeek = 0;
  }
  
  var daysAccrued = calculateAccrued(startWeek, endWeek, entitlement)
  resultAccruedOutput.innerHTML = Math.round(daysAccrued);
  
  var daysRemaining = daysAccrued - taken;
  resultRemainingOutput.innerHTML = Math.round(daysRemaining);
  resultAccruedDiv.style.display = "block";
  
  if (leavingRadio.checked || joiningLeavingRadio.checked) {
    resultRemainingDiv.style.display = "block";
  }
  
}


joiningRadio.addEventListener("click", function(){
  endWeekDiv.style.display = "none";
  daysTakenDiv.style.display = "none";
  daysTakenInput.value="0";
  startWeekDiv.style.display = "block";
  startDateInput.value="";
  resultAccruedDiv.style.display = "none";
  resultRemainingDiv.style.display = "none"
  })

leavingRadio.addEventListener("click", function(){
  endWeekDiv.style.display = "block";
  daysTakenDiv.style.display = "block";
  startWeekDiv.style.display = "none";
  startDateInput.value="";
  endDateInput.value="";
  daysTakenInput.value="0";
  resultAccruedDiv.style.display = "none";
  resultRemainingDiv.style.display = "none"; 
  })

joiningLeavingRadio.addEventListener("click", function(){
  endWeekDiv.style.display = "block";
  daysTakenDiv.style.display = "block";
  startWeekDiv.style.display = "block";
  startDateInput.value="";
  endDateInput.value="";
  daysTakenInput.value="0";
  resultAccruedDiv.style.display = "none";
  resultRemainingDiv.style.display = "none";
  })

calculateButton.addEventListener("click", showResults)