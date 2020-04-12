//var todayWeather = 
//var forecast = 

var searchCity = null;

var APIKey = "855bab23d73d71fa68619c46e3e0b133";

var searchCityHistKey = "cityWeather";

var searchCityObj = {
    "city": "",
    "todaysWeather": "",
    "uvIndex": "",
    "forecast": ""
}

// Maintain the list of cities separately to render the city search's history table
var searchCityHistory = {
    "title": "weatherSearchHistory",
    "listSearchHistory": [],
    "listCities": []
}

/* To demonstrates how the searchCityHistory JSON looks like 
var searchCityHistory = {
    "title": "weatherSearchHistory",
    "listSearchHistory": [
        {
            "searchCityObj": searchCityObj1
        },
        {
            "searchCityObj": searchCityObj2
        }
    ],
    "listCities": [
        {
            "city": Sydney
        },
        {
            "city": Melbourne
        }
    ]
}*/

//var searchCityHistArr = [];

$(document).ready(function () {
    initDashboard();
    //alert("parseDate : " + parseDate(0));

    $("#search-button").on("click", function () {
        event.preventDefault();
        //alert("click on search-button");
        var textSearchCity = $("#city-search-input");
        searchCity = textSearchCity.val();
        //alert("Searched sity: " + searchCity);
        if (searchCity !== null) {
            //searchCityHistArr.push(searchCity);
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&APPID=" + APIKey;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (todayWeather) {
                console.log("response: " + JSON.stringify(todayWeather));
                if (todayWeather != null) {
                    searchCityObj.city = searchCity;
                    searchCityObj.todaysWeather = todayWeather;

                    var cityLat = todayWeather.coord.lat;
                    var cityLon = todayWeather.coord.lon;

                    // Proceed to call API to get UV
                    var queryUVURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + cityLat + "&lon=" + cityLon + "&APPID=" + APIKey;
                    //var queryUVURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&APPID=" + APIKey;
                    $.ajax({
                        url: queryUVURL,
                        method: "GET"
                    }).then(function (uvResponse) {
                        console.log("UV response: " + JSON.stringify(uvResponse));
                        searchCityObj.uvIndex = uvResponse.value;
                        //alert("UVIndex: " + searchCityObj.uvIndex);
                        updateCitiesTable(searchCity);
                        $("#today-weather-pnl").empty();
                        renderTodaysWeatherData(searchCityObj);
                    });
                    // Now proceed to get the 5 day forecast
                    var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&APPID=" + APIKey;
                    $.ajax({
                        url: queryURLForecast,
                        method: "GET"
                    }).then(function (forecast) {
                        console.log("response: " + JSON.stringify(forecast));
                        searchCityObj.forecast = forecast;
                        updateSearchCityLocalStorage(searchCityObj);
                        $("#forecastPnl").empty();
                        processForecastWeatherData(forecast);
                    });
                } else {
                    alert("The city cannot be found by our search engine; please try searching another city!!");
                }
            });

        } else {
            alert("Please enter city to search today's weather!!");
            //$("#eventWindow").jqxWindow("open");
        }
    });

});



function updateSearchCityLocalStorage(searchCityObj) {
    var searchCityLoclHistObj = localStorage.getItem(searchCityHistKey);
    //var localStorageSize = searchCityHistory.list.length;
    if (searchCityLoclHistObj !== null) {
        searchCityHistory = JSON.parse(searchCityLoclHistObj);
    }
    //alert("updateSearchCityLocalStorage before size: " + searchCityHistory.listSearchHistory.length);
    searchCityHistory.listSearchHistory.push(searchCityObj);
    // Maintain the list of cities separately -- helps for a quick diagnostic purposes
    searchCityHistory.listCities.push(searchCityObj.city);
    localStorage.setItem(searchCityHistKey, JSON.stringify(searchCityHistory));
    //alert("updateSearchCityLocalStorage after size: " + searchCityHistory.listSearchHistory.length);
}

// Initialises the history of cities previously searched by users.
function initCitiesTable() {
    //alert("calling initCitiesTable()");
    var searchCityLoclHistObj = localStorage.getItem(searchCityHistKey);
    if (searchCityLoclHistObj !== null) {
        searchCityHistory = JSON.parse(searchCityLoclHistObj);
    }

    // prepare the data
    var source = {
        dataType: "json",
        dataFields: [{ name: "city", type: "string" }],
        //sortcolumn: 'city',
        //sortdirection: 'asc',
        id: "id",
        // url used when loading data from file
        //url: url,
        //localData: searchCityHistArr,
        localData: searchCityHistory.listSearchHistory
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#citySearchDataTable").jqxDataTable({
        width: '100%',
        height: '100%',
        //pageable: true,
        source: dataAdapter,
        //sortable: true,
        ready: function () {
            $("#citySearchDataTable").jqxDataTable('selectRow', 0);
        },
        columns: [{
            text: 'City',
            dataField: 'city',
            width: '100%'
        }]
    });

    $('#citySearchDataTable').on('rowSelect', function (event) {
        var selectedDataIndex = event.args.boundIndex;
        //alert("Selected row dataField: " + selectedDataIndex);
        loadWeatherData(selectedDataIndex);
    });

}

// Loads the Today's weather info and forecast infor for the row index of selected city
function loadWeatherData(dataIndex) {
    var searchCityLoclHistObj = localStorage.getItem(searchCityHistKey);
    if (searchCityLoclHistObj !== null) {
        searchCityHistory = JSON.parse(searchCityLoclHistObj);
        var cityWeathObject = searchCityHistory.listSearchHistory[dataIndex];
        //loadWeatherData(cityWeathObject);
        $("#today-weather-pnl").empty();
        searchCity = cityWeathObject.city;
        renderTodaysWeatherData(cityWeathObject);
        $("#forecastPnl").empty();
        processForecastWeatherData(cityWeathObject.forecast);
    }
}

function updateCitiesTable(searchCity) {
    $("#citySearchDataTable").jqxDataTable('addRow', null, { city: searchCity }, 'last');
}

function validateSearch() {
    return true;
}

// Function to initialise the entire weather dashboard
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
        width: 1250,
        //width: '100%',
        //width: getWidth("layout"),
        height: 650,
        layout: layout,
        contextMenu: true,
    });
    //alert("initDashboardComp");
    loadWeatherData(0);
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

    // 1586973600 is the UTC date time in seconds
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

function renderTodaysWeatherData(searchCityObj) {
    var divTodayWthPnl = $("#today-weather-pnl");
    todayWeather = searchCityObj.todaysWeather;

    var city = searchCityObj.city;
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
    pHumidity.text("Humidity : " + todayWeather.main.humidity + " %");
    divTodayWthPnl.append(pHumidity);

    var wSpeed = $("<p>");
    wSpeed.attr("id", "wind-speed");
    wSpeed.text("Wind Speed : " + todayWeather.wind.speed + " MPH");
    divTodayWthPnl.append(wSpeed);

    var uvi = $("<p>");
    uvi.attr("id", "uv-index");
    uvi.text("UV Index : ");
    divTodayWthPnl.append(uvi);
    var uviVal = 0.0;
    if (!isNaN(searchCityObj.uvIndex)) {
        uviVal = parseFloat(searchCityObj.uvIndex);
    }
    //alert("uviVal: " + uviVal);
    var uvSpan = $("<span>");
    var color = "green";
    var textColor = "black";
    if (uviVal < 3.0) {
        //uvSpan.attr("style", "background-color: green");
        color = "green";
    } else if (uviVal < 7.0) {
        //uvSpan.attr("style", "background-color: amber");
        color = "orange";
        textColor = "white";
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

    var divForecastPanel = $("#forecastPnl");

    var divWeatherCard = $("<div>");
    divWeatherCard.attr("id", dayNum);
    divWeatherCard.addClass("weatherCard");

    divForecastPanel.append(divWeatherCard);

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
