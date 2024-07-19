function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

//h
document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("home-link");

    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); 

      var aboutSection = document.getElementById("home");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  });


//date
  function getCurrentDateTime() {
    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = days[today.getDay()];
    var month = months[today.getMonth()];
    var date = today.getDate();
    var year = today.getFullYear();
    var currentDateTime = day + ", " + month + " " + date + ", " + year;
    return currentDateTime;
  }

  function updateDateTime() {
    document.getElementById("currentDateTime").innerHTML = getCurrentDateTime();
  }

  setInterval(updateDateTime, 1000);

  // time
  function getCurrentTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var currentTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    return currentTime;
  }

  function updateTime() {
    document.getElementById("currentTime").innerHTML = getCurrentTime();
  }
  setInterval(updateTime, 1000);
  

  //departtime
  var departInput = document.getElementById("depart");
  var isTimeInputSupported = (function () {
    var input = document.createElement("input");
    input.setAttribute("type", "time");
    return input.type === "time";
  })();

  if (isTimeInputSupported) {
    departInput.setAttribute("type", "time");
  } else {
    departInput.addEventListener("input", validateTimeInput);
    departInput.addEventListener("blur", validateTimeInput);
  }

  function validateTimeInput() {
    var timeValue = departInput.value;
    if (timeValue !== "" && !/^([01]\d|2[0-3]):([0-5]\d)$/.test(timeValue)) {
      alert("Please enter a valid time in HH:MM format.");
      departInput.value = "";
    }
  }

  //arivaltime 
  var arivalInput = document.getElementById("arival");
  var isTimeInputSupported = (function () {
    var input = document.createElement("input");
    input.setAttribute("type", "time");
    return input.type === "time";
  })();

  if (isTimeInputSupported) {
    arivalInput.setAttribute("type", "time");
  } else {
    arivalInput.addEventListener("input", validateTimeInput);
    arivalInput.addEventListener("blur", validateTimeInput);
  }

  function validateTimeInput() {
    var timeValue = arivalInput.value;
    if (timeValue !== "" && !/^([01]\d|2[0-3]):([0-5]\d)$/.test(timeValue)) {
      alert("Please enter a valid time in HH:MM format.");
      arivalInput.value = "";
    }
  }
  
  function toggleNav() {
    var navLinks = document.querySelector('.nav-links');

    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  }
  