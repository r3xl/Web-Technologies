function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
  }
  
  function compute() {
    var principal = parseInt(document.getElementById("principal").value);
    if (principal <= 0 || isNaN(principal)) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
    }
  
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var amount = principal + interest;
    var result = document.getElementById("result");
  
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years;
  
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>" +
                       "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
                       "You will receive an amount of <mark>" + amount + "</mark>,<br>" +
                       "in the year <mark>" + futureYear + "</mark>.";
  }
  