
$(document).ready(function () {
    initDashboard();
});

initDashboard();

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

function renderTodaysWeatherData() {

}

function renderForecastWeatherData() {}

