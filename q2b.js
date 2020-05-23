function populate() {
    populateTimeSelects()
    populateDateSelects()
}

function populateTimeSelects() {
    populateHourSelect();
    populateMinuteSelect();
    populateAmPmSelect();
}

function populateHourSelect() {
    var hourSelect = document.querySelector("#start-time-hour")
    var counter = 1;

    while (counter != 13) {
        createHourOption(hourSelect, counter)
        counter = counter + 1
    }
    hourSelect.value = 9;
}

function populateMinuteSelect() {
    var minuteSelect = document.querySelector("#start-time-minutes");
    var options = ["00", "15", "30", "45"];

    populateSelect(minuteSelect, options);
}

function populateAmPmSelect() {
    var ampmSelect = document.querySelector("#start-time-ampm");
    var options = ["AM", "PM"];

    populateSelect(ampmSelect, options);
}

function createHourOption(hourSelect, text) {
    addOptionToSelect(hourSelect, text);
}

function populateDateSelects() {
    populateDaySelect();
    populateMonthSelect();
    populateYearSelect()
}

function populateDaySelect() {
    var counter = 1;
    var daySelect = document.querySelector("#day");
    var currentDay = (new Date().getDate());

    while (counter < 32) {
        addOptionToSelect(daySelect, counter)
        counter = counter + 1;
    }

    daySelect.value = currentDay;
}

function populateMonthSelect() {
    var months = ["January", "February", "March", "April", "May"
        , "June", "July", "September", "October", "November", "December"];
    var currentMonth = (new Date().getMonth() + 1)
    var monthSelect = document.querySelector("#month");

    populateSelect(monthSelect, months);
    monthSelect.value = months[currentMonth];
}

function populateYearSelect() {
    var yearSelect = document.getElementById("year");

    var currentYear = (new Date()).getFullYear();

    for (var i = 1950; i <= currentYear; i++) {
        addOptionToSelect(yearSelect, i)
    }

    yearSelect.value = currentYear;
}

function populateSelect(select, options) {
    options.forEach(function (option) {
        addOptionToSelect(select, option);
    })
}

function addOptionToSelect(select, option) {
    var optionElement = document.createElement("option");
    optionElement.text = option;
    optionElement.value = option;
    select.add(optionElement);
}

function onClickShowMobileNav(){
    var hamburgerA = document.querySelector("#mobile-navigation a.icon");
    hamburgerA.addEventListener("click", () => {
        var mobileLinks = document.querySelector("#mobile-nav");
        if(mobileLinks.style.display == "block"){
            mobileLinks.style.display = "none";
            hamburgerA.style.backgroundColor = "#FFFFFF";
            hamburgerA.style.color = "#0b55a8";
        } else {
            mobileLinks.style.display = "block";
            hamburgerA.style.backgroundColor = "#0b55a8";
            hamburgerA.style.color = "#FFFFFF";
        }
    });
}


window.onload = function () {
    populate();
    onClickShowMobileNav();
}