'use strict';

const http 		= require('http');
const inquirer 	= require('inquirer');
const fs 		= require('fs');
const request   = require('request');

const questions = [
    {
        type: 'rawlist',
        name: 'test',
        message: 'What do you want to do?',
        choices: [
            'Wysłać testy próbne',
            new inquirer.Separator(),
            'Wysłać test do grafika'
        ]
    }
];

inquirer.prompt(questions).then(function (answers) {
    if (answers.test === 'Wysłać testy próbne') {
        id();
    } else {
        graphic();
    }
});


function id() {
    inquirer.prompt({
        type: 'input',
        name: 'template id',
        message: 'Podaj id newslettera',
        default: function () {
            return 'ostatnie id';
        }
    }).then(function (answer) {
        fs.readFile('/Users/pnowak/Sites/getresponse/static/images/common/templates/messages/' + answer['template id'] + '/1/' + answer['template id'] +'.html', 'utf8', function (err, data) {
            if (err) {
                console.log('Templata ['+ answer['template id'] +'] nie istnieje!');
            }
            else {
                console.log(data);
                console.log('Templata ['+ answer['template id'] +'] istnieje!');
                visitPage('https://app.getresponse.com/login.html');
            }
        });
    });
}

function graphic() {
    inquirer.prompt({
        type: 'rawlist',
        name: 'test',
        message: 'Do kogo',
        choices: [
            'bfoltyn@getresponse.com',
            new inquirer.Separator(),
            'mgerlecki@getresponse.com',
            new inquirer.Separator(),
            'mlaskowska@getresponse.com'
        ]
    }).then(function (answer) {
        id();
    });
}

function visitPage(url, callback) {
    // Make the request
    console.log("Visiting page " + url);
    request
        .get(url)
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(fs.createWriteStream('doodle.png'));
}