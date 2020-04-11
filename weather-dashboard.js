var todayWeather = {
    "coord": {
        "lon": -84.39,
        "lat": 33.75
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 38.77,
        "feels_like": 30.33,
        "temp_min": 34,
        "temp_max": 43,
        "pressure": 1018,
        "humidity": 56
    },
    "visibility": 16093,
    "wind": {
        "speed": 6.93,
        "deg": 320
    },
    "clouds": {
        "all": 20
    },
    "dt": 1586595638,
    "sys": {
        "type": 1,
        "id": 3335,
        "country": "US",
        "sunrise": 1586603462,
        "sunset": 1586649924
    },
    "timezone": -14400,
    "id": 4180439,
    "name": "Atlanta",
    "cod": 200
}

var forecast = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1586606400,
            "main": {
                "temp": 40.91,
                "feels_like": 33.69,
                "temp_min": 40.91,
                "temp_max": 45.37,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 983,
                "humidity": 50,
                "temp_kf": -2.48
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.61,
                "deg": 77
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-11 12:00:00"
        },
        {
            "dt": 1586617200,
            "main": {
                "temp": 53.33,
                "feels_like": 44.85,
                "temp_min": 53.33,
                "temp_max": 56.68,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 983,
                "humidity": 33,
                "temp_kf": -1.86
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.09,
                "deg": 111
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-11 15:00:00"
        },
        {
            "dt": 1586628000,
            "main": {
                "temp": 65.86,
                "feels_like": 58.66,
                "temp_min": 65.86,
                "temp_max": 68.09,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 982,
                "humidity": 22,
                "temp_kf": -1.24
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.01,
                "deg": 149
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-11 18:00:00"
        },
        {
            "dt": 1586638800,
            "main": {
                "temp": 69.64,
                "feels_like": 62.01,
                "temp_min": 69.64,
                "temp_max": 70.75,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 980,
                "humidity": 20,
                "temp_kf": -0.62
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.97,
                "deg": 168
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-11 21:00:00"
        },
        {
            "dt": 1586649600,
            "main": {
                "temp": 62.92,
                "feels_like": 55.81,
                "temp_min": 62.92,
                "temp_max": 62.92,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 980,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 6.64,
                "deg": 162
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-12 00:00:00"
        },
        {
            "dt": 1586660400,
            "main": {
                "temp": 58.08,
                "feels_like": 51.75,
                "temp_min": 58.08,
                "temp_max": 58.08,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 980,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 5.06,
                "deg": 160
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-12 03:00:00"
        },
        {
            "dt": 1586671200,
            "main": {
                "temp": 56.41,
                "feels_like": 50.11,
                "temp_min": 56.41,
                "temp_max": 56.41,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 980,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 73
            },
            "wind": {
                "speed": 4.94,
                "deg": 128
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-12 06:00:00"
        },
        {
            "dt": 1586682000,
            "main": {
                "temp": 55.71,
                "feels_like": 49.39,
                "temp_min": 55.71,
                "temp_max": 55.71,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.59,
                "deg": 109
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-12 09:00:00"
        },
        {
            "dt": 1586692800,
            "main": {
                "temp": 55.06,
                "feels_like": 49.44,
                "temp_min": 55.06,
                "temp_max": 55.06,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 980,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.63,
                "deg": 98
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-12 12:00:00"
        },
        {
            "dt": 1586703600,
            "main": {
                "temp": 57.72,
                "feels_like": 54.25,
                "temp_min": 57.72,
                "temp_max": 57.72,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.45,
                "deg": 113
            },
            "rain": {
                "3h": 0.73
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-12 15:00:00"
        },
        {
            "dt": 1586714400,
            "main": {
                "temp": 60.91,
                "feels_like": 58.78,
                "temp_min": 60.91,
                "temp_max": 60.91,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 977,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.49,
                "deg": 140
            },
            "rain": {
                "3h": 3.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-12 18:00:00"
        },
        {
            "dt": 1586725200,
            "main": {
                "temp": 64.65,
                "feels_like": 61.57,
                "temp_min": 64.65,
                "temp_max": 64.65,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 973,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.74,
                "deg": 136
            },
            "rain": {
                "3h": 2.48
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-12 21:00:00"
        },
        {
            "dt": 1586736000,
            "main": {
                "temp": 68.45,
                "feels_like": 65.32,
                "temp_min": 68.45,
                "temp_max": 68.45,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 969,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 13.51,
                "deg": 162
            },
            "rain": {
                "3h": 1.46
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-13 00:00:00"
        },
        {
            "dt": 1586746800,
            "main": {
                "temp": 69.55,
                "feels_like": 65.5,
                "temp_min": 69.55,
                "temp_max": 69.55,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 970,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 14.9,
                "deg": 192
            },
            "rain": {
                "3h": 0.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-13 03:00:00"
        },
        {
            "dt": 1586757600,
            "main": {
                "temp": 70.43,
                "feels_like": 62.89,
                "temp_min": 70.43,
                "temp_max": 70.43,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 966,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 20.65,
                "deg": 189
            },
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-13 06:00:00"
        },
        {
            "dt": 1586768400,
            "main": {
                "temp": 66.67,
                "feels_like": 59.31,
                "temp_min": 66.67,
                "temp_max": 66.67,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 968,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 15.1,
                "deg": 251
            },
            "rain": {
                "3h": 12.85
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-13 09:00:00"
        },
        {
            "dt": 1586779200,
            "main": {
                "temp": 60.96,
                "feels_like": 54.79,
                "temp_min": 60.96,
                "temp_max": 60.96,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 972,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 10.69,
                "deg": 255
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-13 12:00:00"
        },
        {
            "dt": 1586790000,
            "main": {
                "temp": 68.52,
                "feels_like": 62.08,
                "temp_min": 68.52,
                "temp_max": 68.52,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 975,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 11.68,
                "deg": 270
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-13 15:00:00"
        },
        {
            "dt": 1586800800,
            "main": {
                "temp": 73.04,
                "feels_like": 65.7,
                "temp_min": 73.04,
                "temp_max": 73.04,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 977,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 13.09,
                "deg": 279
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-13 18:00:00"
        },
        {
            "dt": 1586811600,
            "main": {
                "temp": 70.45,
                "feels_like": 63.05,
                "temp_min": 70.45,
                "temp_max": 70.45,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 977,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 12.64,
                "deg": 293
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-13 21:00:00"
        },
        {
            "dt": 1586822400,
            "main": {
                "temp": 62.28,
                "feels_like": 55.67,
                "temp_min": 62.28,
                "temp_max": 62.28,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.02,
                "deg": 315
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-14 00:00:00"
        },
        {
            "dt": 1586833200,
            "main": {
                "temp": 55.13,
                "feels_like": 48.22,
                "temp_min": 55.13,
                "temp_max": 55.13,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 982,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.55,
                "deg": 327
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-14 03:00:00"
        },
        {
            "dt": 1586844000,
            "main": {
                "temp": 50.65,
                "feels_like": 42.57,
                "temp_min": 50.65,
                "temp_max": 50.65,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 982,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.72,
                "deg": 330
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-14 06:00:00"
        },
        {
            "dt": 1586854800,
            "main": {
                "temp": 47.5,
                "feels_like": 39.74,
                "temp_min": 47.5,
                "temp_max": 47.5,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 982,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.47,
                "deg": 337
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-14 09:00:00"
        },
        {
            "dt": 1586865600,
            "main": {
                "temp": 47.82,
                "feels_like": 41.74,
                "temp_min": 47.82,
                "temp_max": 47.82,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 983,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 4.45,
                "deg": 9
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-14 12:00:00"
        },
        {
            "dt": 1586876400,
            "main": {
                "temp": 58.01,
                "feels_like": 51.78,
                "temp_min": 58.01,
                "temp_max": 58.01,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 983,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 5.73,
                "deg": 65
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-14 15:00:00"
        },
        {
            "dt": 1586887200,
            "main": {
                "temp": 68.23,
                "feels_like": 64.22,
                "temp_min": 68.23,
                "temp_max": 68.23,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 981,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 3.76,
                "deg": 87
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-14 18:00:00"
        },
        {
            "dt": 1586898000,
            "main": {
                "temp": 69.08,
                "feels_like": 66.47,
                "temp_min": 69.08,
                "temp_max": 69.08,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 979,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 2.06,
                "deg": 6
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-14 21:00:00"
        },
        {
            "dt": 1586908800,
            "main": {
                "temp": 59.92,
                "feels_like": 54.54,
                "temp_min": 59.92,
                "temp_max": 59.92,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 978,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 50
            },
            "wind": {
                "speed": 6.6,
                "deg": 5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-15 00:00:00"
        },
        {
            "dt": 1586919600,
            "main": {
                "temp": 56.17,
                "feels_like": 50.79,
                "temp_min": 56.17,
                "temp_max": 56.17,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 980,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 5.7,
                "deg": 7
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-15 03:00:00"
        },
        {
            "dt": 1586930400,
            "main": {
                "temp": 52.74,
                "feels_like": 45.84,
                "temp_min": 52.74,
                "temp_max": 52.74,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 6.89,
                "deg": 352
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-15 06:00:00"
        },
        {
            "dt": 1586941200,
            "main": {
                "temp": 51.35,
                "feels_like": 44.33,
                "temp_min": 51.35,
                "temp_max": 51.35,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 978,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.73,
                "deg": 343
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-15 09:00:00"
        },
        {
            "dt": 1586952000,
            "main": {
                "temp": 47.89,
                "feels_like": 40.82,
                "temp_min": 47.89,
                "temp_max": 47.89,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 978,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.93,
                "deg": 340
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-15 12:00:00"
        },
        {
            "dt": 1586962800,
            "main": {
                "temp": 57.04,
                "feels_like": 51.51,
                "temp_min": 57.04,
                "temp_max": 57.04,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 978,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.21,
                "deg": 357
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-15 15:00:00"
        },
        {
            "dt": 1586973600,
            "main": {
                "temp": 64,
                "feels_like": 57.67,
                "temp_min": 64,
                "temp_max": 64,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 979,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.6,
                "deg": 308
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-15 18:00:00"
        },
        {
            "dt": 1586984400,
            "main": {
                "temp": 64.29,
                "feels_like": 54.79,
                "temp_min": 64.29,
                "temp_max": 64.29,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 978,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 10.78,
                "deg": 311
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-15 21:00:00"
        },
        {
            "dt": 1586995200,
            "main": {
                "temp": 56.1,
                "feels_like": 47.05,
                "temp_min": 56.1,
                "temp_max": 56.1,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 9.6,
                "deg": 327
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-04-16 00:00:00"
        },
        {
            "dt": 1587006000,
            "main": {
                "temp": 51.96,
                "feels_like": 44.04,
                "temp_min": 51.96,
                "temp_max": 51.96,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 982,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 7.11,
                "deg": 355
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-16 03:00:00"
        },
        {
            "dt": 1587016800,
            "main": {
                "temp": 48.78,
                "feels_like": 40.95,
                "temp_min": 48.78,
                "temp_max": 48.78,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 983,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 7.05,
                "deg": 338
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-16 06:00:00"
        },
        {
            "dt": 1587027600,
            "main": {
                "temp": 46.49,
                "feels_like": 39.06,
                "temp_min": 46.49,
                "temp_max": 46.49,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 983,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 41
            },
            "wind": {
                "speed": 6.08,
                "deg": 353
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-16 09:00:00"
        }
    ],
    "city": {
        "id": 4180439,
        "name": "Atlanta",
        "coord": {
            "lat": 33.749,
            "lon": -84.388
        },
        "country": "US",
        "population": 420003,
        "timezone": -14400,
        "sunrise": 1586603462,
        "sunset": 1586649924
    }
}

$(document).ready(function () {
    initDashboard();
    //alert("parseDate : " + parseDate(0));
    renderTodaysWeatherData(todayWeather);
    processForecastWeatherData(forecast)
});

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
    return "Atlanta";
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
        var ithWeather = forecast.list[i];
        var iDate = ithWeather.dt;
        var iDay = getDay(iDate);

        //if ((datePrevIter !== null && getDay(datePrevIter) == iDay) || (datePrevIter !== null && todaysDay == getDay(datePrevIter))) {
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

// Below functions are not used but serve as a good reference

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
