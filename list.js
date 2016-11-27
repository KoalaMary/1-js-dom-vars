'use strict';
const names = ['Вася', 'Дима', 'Катя', 'Петя', 'Оля', 'Дамир', 'Октябрина'];
const womenNames = ['Катя', 'Оля', 'Октябрина'];
const jobs = ['Слесарь', 'Менеджер', 'Премьер Министр', 'Фотограф', 'Актёр', 'Повар', 'Блоггер'];
var list = [];
var ol = document.querySelector('ol');
var minAge = 20;
var maxAge = 35;
var minSalary = 20;
var maxSalary = 120;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPerson(n) {
    for (var i = 0; i < n; i++) {
        var Person = {
            name: names[getRandom(0, names.length - 1)],
            age: getRandom(minAge, maxAge),
            job: jobs[getRandom(0, jobs.length - 1)],
            salary: getRandom(minSalary, maxSalary) * 1000
        };
        list.push(Person);
    }
}

function addPerson(Person) {
    var li = document.createElement('li');
    var spanName = document.createElement('span');
    spanName.innerText = Person.name;
    li.appendChild(spanName);
    li.appendChild(document.createTextNode(' ' + Person.age + ' ' + Person.job + ' ' + Person.salary));
    checkSalary(Person.salary, li);
    checkJob(Person.job, li);
    checkAge(Person.age, spanName);
    checkName(Person.name, li);
    ol.appendChild(li);
}

function checkSalary(salary, li) {
    if (salary < 50000)
        li.style.backgroundColor = 'red';
    if (salary >= 50000 && salary <= 80000)
        li.style.backgroundColor = 'yellow';
    if (salary > 80000)
        li.style.backgroundColor = 'green';
}

function checkJob(job, li) {
    if (job === 'Блоггер')
        li.style.textDecoration = 'underline';
}

function checkAge(age, span) {
    if (age >= 20 && age <= 27)
        span.style.fontWeight = 'bold';
}

function checkName(name, li) {
    womenNames.forEach(function (womanName, i, womenNames) {
        if (name === womanName)
            li.style.fontSize = '1.5em';
    });
}

createPerson(10);
list.forEach(function (Person, i, list) {
    addPerson(Person);
});

