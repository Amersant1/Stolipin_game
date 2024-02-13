const events={
    "05.01.1906":{
        'name':"test",
        'date':"05.01.1906",
        'description':"test you know test",
        'options':[
            {
            'name':"test for liberals",
            "liberals effect":5,
            "tsar effect":-10,
            "right effect":-10,
            "left effect":3,
            },
            {
                'name':"test for tsar",
                "liberals effect":-5,
                "tsar effect":10,
                "right effect":10,
                "left effect":-3,
            },
            {
                'name':"test for left",
                "liberals effect":0,
                "tsar effect":-10,
                "right effect":-10,
                "left effect":15,
            },
        ]
        },
    "11.01.1906":{
        'name':"test",
        'date':"05.01.1906",
        'description':"test you know test",
        'options':[
            {
            'name':"test for liberals",
            "liberals effect":5,
            "tsar effect":-10,
            "right effect":-10,
            "left effect":3,
            },
            {
                'name':"test for tsar",
                "liberals effect":-5,
                "tsar effect":10,
                "right effect":10,
                "left effect":-3,
            },
            {
                'name':"test for left",
                "liberals effect":0,
                "tsar effect":-10,
                "right effect":-10,
                "left effect":15,
            },
        ]
        },
    "15.01.1906":{
        'name':"test",
        'date':"05.01.1906",
        'description':"test you know test",
        'options':[
            {
            'name':"test for liberals",
            "liberals effect":5,
            "tsar effect":-10,
            "right effect":-10,
            "left effect":3,
            },
            {
                'name':"test for tsar",
                "liberals effect":-5,
                "tsar effect":10,
                "right effect":10,
                "left effect":-3,
            },
            {
                'name':"test for left",
                "liberals effect":0,
                "tsar effect":-10,
                "right effect":-10,
                "left effect":15,
            },
        ]
                }
}




const timerElement = document.getElementById('timer');

function pauseTimer() {
    clearInterval(intervalId);
}


function startTimer() {
    intervalId = setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
}


window.EVENTS=events;