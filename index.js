'use strict';

const http 		= require('http');
const inquirer 	= require('inquirer');
const fs 		= require('fs');
const request   = require('request');
const Nightmare = require('nightmare');
const id        = require('./helpers/id.js');
const graphic   = require('./helpers/graphic.js');
const night     = require('./helpers/night.js');

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