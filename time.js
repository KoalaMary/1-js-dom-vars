'use strict';
var clock = document.querySelector('#clock');
var date = new Date();

function initializeClock() {
    var args = Array.prototype.slice.call(arguments);
    var month = date.getMonth() + 1;

    function createSpan(spanName) {
        var span = document.createElement('span');
        span.className = spanName;
        clock.appendChild(span);
    }

    for (var i = 0; i < args.length; i++) {
        if (args[i] instanceof Date) {
            date = args[i];
            month = date.getMonth();
        }
        if (args[i] instanceof Array) {
            var clockArgs = args[i];
            clockArgs.forEach(function (item, i, clockArgs) {
                createSpan(item);
            });
        }
    }


    if (document.querySelector('span') === null) {
        createSpan('hours');
        createSpan('minutes');
        createSpan('seconds');
    }

    function updateClock(date) {
        setInterval(function () {
            var spans = document.querySelectorAll('span');
            console.log(date.getFullYear());
            spans.forEach(function (item, i, spans) {
                switch (item.className) {
                    case 'year':
                        document.querySelector('.year').innerText = date.getFullYear();
                        break;
                    case 'month':
                        document.querySelector('.month').innerText = month;
                        break;
                    case 'day':
                        document.querySelector('.day').innerText = date.getDate();
                        break;
                    case 'hours':
                        document.querySelector('.hours').innerText = date.getHours();
                        break;
                    case 'minutes':
                        document.querySelector('.minutes').innerText = date.getMinutes();
                        break;
                    case 'seconds':
                        document.querySelector('.seconds').innerText = date.getSeconds();
                        break;
                }
            });
            date.setSeconds(date.getSeconds() + 1);
        }, 1000)
    }

    updateClock(date, []);
}

// initializeClock(new Date(2014, 6, 14));
// initializeClock(['hours', 'seconds']);
// initializeClock(new Date(2014, 6, 14), ['year', 'month', 'seconds']);
initializeClock(['year', 'month', 'day', 'hours', 'minutes', 'seconds']);

