'use strict';

const inquirer 	= require('inquirer');
const id = require('./id.js');

module.exports = function graphic() {
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