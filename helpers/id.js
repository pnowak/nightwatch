'use strict';

const inquirer  = require('inquirer');
const night     = require('./night.js');

module.exports = function id() {
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
                console.log('Templata ['+ answer['template id'] +'] istnieje!');
                nigth('https://app.getresponse.com/login.html', data);
            }
        });
    });
}