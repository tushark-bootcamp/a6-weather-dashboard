//var todayWeather = 
//var forecast = 

var searchCity = null;

var searchCityHistArr = [];

$(document).ready(function () {
    initDashboard();
    //alert("parseDate : " + parseDate(0));

    $("#search-button").on("click", function () {
        event.preventDefault();
        alert("click on search-button");
        var textSearchCity = $("#city-search-input");
        searchCity = textSearchCity.val();
        alert("Searched sity: " + searchCity);
        if(searchCity !== null) {
            searchCityHistArr.push(searchCity);
            var APIKey = "855bab23d73d71fa68619c46e3e0b133";

            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&APPID=" + APIKey;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (todayWeather) {
                console.log("response: " + JSON.stringify(todayWeather));
                localStorage.setItem("searchCity-todayWeather", JSON.stringify(todayWeather));
                renderTodaysWeatherData(todayWeather);
                
            });

            var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&APPID=" + APIKey;

            $.ajax({
                url: queryURLForecast,
                method: "GET"
            }).then(function (forecast) {
                console.log("response: " + JSON.stringify(forecast));
                localStorage.setItem("searchCity-forecast", JSON.stringify(forecast));
                processForecastWeatherData(forecast);
            });
        } else {
            alert("Please enter city to search today's weather!!");
            //$("#eventWindow").jqxWindow("open");
        }
    });
});

function validateSearch() {
    return true;
}

function initDashboard() {

    // the 'layout' JSON array defines the internal structure of the layout
    // The sequence is always layoutGroup --> tabbedGroup --> layoutPanel
    // The layoutGroup has the orientation which tells whether to add child tabs (panels) in
    // verticle fashion or hoizontal fashion.
    var layout = [
        {
            // Main panel
            type: "layoutGroup",
            // Horrizontal orientation determines the layout of city search panel groups and the weather data panel groups
            orientation: "horizontal",
            width: "100%",
            height: "100%",
            items: [
                {
                    // Search city panel group: Left parent panel (layout-group) that holds all tabs in left side of the splitter
                    type: "layoutGroup",
                    // Actually the orientation=verticle is not required as there is only one panel in this.items[]
                    orientation: "vertical",
                    allowPin: false,
                    width: "30%",
                    items: [
                        {
                            // 1st and the only Tab panel for 'Search City'
                            type: "tabbedGroup",
                            height: "100%",
                            pinnedHeight: 30,
                            items: [
                                {
                                    // Layout pannel for the 'Search City' tab
                                    type: "layoutPanel",
                                    title: "Search for a City",
                                    contentContainer: "SearchCityPanel",
                                    initContent: function () {
                                        initCitiesTable();
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    // Weather data panel group: Right parent panel (layout-group) for displaying weather details
                    type: "layoutGroup",
                    // The orientation: "vertical" here ensures the Today's weather panel and the forecast panel are 
                    // laid out vertically - one above and one below 
                    orientation: "vertical",
                    allowPin: false,
                    width: "70%",
                    items: [
                        {
                            // Tab group for today's weather panel
                            type: "tabbedGroup",
                            height: "52%",
                            pinnedHeight: 30,
                            items: [
                                {
                                    type: "layoutPanel",
                                    title: "Today's Weather",
                                    contentContainer: "TodaysWeatherPanel",

                                },
                            ],
                        },
                        {
                            // Tab group for forecast panel
                            type: "tabbedGroup",
                            height: "48%",
                            pinnedHeight: 30,
                            items: [
                                {
                                    type: "layoutPanel",
                                    title: "5 Day Forecast",
                                    contentContainer: "ForecastPanel",

                                },
                            ],
                        }
                    ],
                }
            ],
        },
    ];
    $("#jqxLayout").jqxLayout({
        width: 1300,
        //width: '100%',
        //width: getWidth("layout"),
        height: 680,
        layout: layout,
        contextMenu: true,
    });
    //alert("initDashboardComp");
}

function initCitiesTable() {

    var data = [
        {
            id: "1",
            city: "Sydney",
        },
        {
            id: "2",
            city: "Melbourne",
        },
        {
            id: "3",
            city: "Adelaide",
        },
        {
            id: "4",
            city: "Perth",
        },
        {
            id: "5",
            city: "Brisbane",
        },
    ];
    // prepare the data
    var source = {
        dataType: "json",
        dataFields: [{ name: "city", type: "string" }],
        id: "id",
        // url used when loading data from file
        //url: url,
        localData: data,
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#citySearchDataTable").jqxDataTable({
        width: '100%',
        height: '100%',
        //pageable: true,
        source: dataAdapter,
        ready: function () {
            $("#citySearchDataTable").jqxDataTable('selectRow', 0);
        },
        columns: [{
            text: 'City',
            dataField: 'city',
            width: '100%'
        }]
    });

}

function getTodayDate() {
    var today = new Date();
    //alert("today: " + today);
    var day = moment(today).date();
    var month = moment(today).month() + 1;
    //var year = moment(today).year();
    var year = moment(today).year();
    // create today's date to be used as a key for storing the work schedule on local storage
    var todayDate = day + "/" + month + "/" + year;
    return todayDate;
}

// This function takes the date in seconds and returns a string date in "dd/mm/YYYY" format 
function parseDate(dateInSeconds) {

    // 1487246400 is the UTC date time in seconds
    //var dateInSeconds = 1586973600;
    var today = new Date();
    today.setTime(dateInSeconds * 1000);
    var day = moment(today).date();
    var month = moment(today).month() + 1;
    var year = moment(today).year();
    var parsedDate = day + "/" + month + "/" + year;
    return parsedDate;
}

function getDay(dateInSeconds) {
    var today = new Date();
    today.setTime(dateInSeconds * 1000);
    return moment(today).date();
}


function getSelectedCity() {
    return searchCity;
}


function renderTodaysWeatherData(todayWeather) {
    var divTodayWthPnl = $("#today-weather-pnl");
    var city = getSelectedCity();
    var date = getTodayDate();

    var pCity = $("<h2>");
    pCity.attr("id", "city");
    pCity.text(city + ": " + date);
    divTodayWthPnl.append(pCity);
    var wIcon = $("<img>");
    var iconSrc = "http://openweathermap.org/img/wn/" + todayWeather.weather[0].icon + "@2x.png";
    wIcon.attr("src", iconSrc);
    pCity.append(wIcon);

    var pTemp = $("<p>");
    pTemp.attr("id", "temperature");
    pTemp.text("Temperature : " + todayWeather.main.temp + " F");
    divTodayWthPnl.append(pTemp);

    var pHumidity = $("<p>");
    pHumidity.attr("id", "humidity");
    pHumidity.text("Humidity : " + todayWeather.wind.humidity + " %");
    divTodayWthPnl.append(pHumidity);

    var wSpeed = $("<p>");
    wSpeed.attr("id", "wind-speed");
    wSpeed.text("Wind Speed : " + todayWeather.wind.speed + " MPH");
    divTodayWthPnl.append(wSpeed);

    var uvi = $("<p>");
    uvi.attr("id", "uv-index");
    uvi.text("UV Index : ");
    divTodayWthPnl.append(uvi);

    var uviVal = 9.49;
    var uvSpan = $("<span>");
    var color = "green";
    var textColor = "black";
    if (uviVal < 2) {
        //uvSpan.attr("style", "background-color: green");
        color = "green";
    } else if (uviVal < 7) {
        //uvSpan.attr("style", "background-color: amber");
        color = "amber";
    } else {
        //uvSpan.attr("style", "background-color: red, color: white");
        color = "red";
        textColor = "white";
    }
    uvSpan.css('color', textColor);
    uvSpan.css('background-color', color);
    uvSpan.text(uviVal);
    uvi.append(uvSpan);
}

function processForecastWeatherData(forecast) {
    var todaysDay = moment(new Date()).date();
    var dayNum = 1;
    var datePrevIter = null;
    for (var i = 0; i < forecast.list.length; i++) {
        // Retrieve the ith element only once for better performance
        var ithWeather = forecast.list[i];
        var iDate = ithWeather.dt;
        var iDay = getDay(iDate);

        if ((datePrevIter !== null && getDay(datePrevIter) == iDay) || todaysDay == iDay) {
            // Only want to pick the weather for the first 3 hours of the day
            continue;

        } else {
            var iconSrc = "http://openweathermap.org/img/wn/" + ithWeather.weather[0].icon + "@2x.png";
            //alert("imgSrc : " + iconSrc);
            var temp = ithWeather.main.temp;
            var humidity = ithWeather.main.humidity;
            renderForecastWeather(dayNum, iDate, iconSrc, temp, humidity);
            dayNum++;
            datePrevIter = iDate;
        }
        if (dayNum > 5) {
            // Once the forecast for 5 days has been processed, rest can be ignored
            break;
        }
    }
}

function renderForecastWeather(dayNum, iDate, iconSrc, temp, humidity) {

    var divWeatherCard = $("#" + dayNum);
    divWeatherCard.addClass("weatherCard");

    var pDate = $("<p>");
    pDate.text(parseDate(iDate));
    divWeatherCard.append(pDate);
    var wIcon = $("<img>");
    wIcon.attr("src", iconSrc);
    divWeatherCard.append(wIcon);

    var pTemp = $("<p>");
    pTemp.text("Temp : " + temp + " F");
    divWeatherCard.append(pTemp);

    var pHumidity = $("<p>");
    pHumidity.text("Humidity : " + humidity + " %");
    divWeatherCard.append(pHumidity);
}

// Below functions are not used but serve as a good reference for future

function parseStringDate() {
    var x = "2020-04-12 12:00:00";
    var dateTime = x.split(" ");
    var time = dateTime[1];
    alert("time: " + time);
}

// Function to change the date-time format from YYYY-mm-dd to dd/mm/YYYY
function reFormatDate(dateTime) {
    var dateTimeArr = dateTime.split(" ");
    var date = dateTimeArr[0];
    var dateArr = date.split("-");
    return dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
}

// Function to retrieve the time component of date-time 
function getTime(dateTime) {
    var dateTimeArr = dateTime.split(" ");
    return dateTimeArr[1];
}

// This function is not used as we have used unit of measurement as imperial
function convertKelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
}
