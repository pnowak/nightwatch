'use strict';

module.exports = function nigth(url, data) {    
    const getresponse = new Nightmare({
        openDevTools: {
            mode: 'detach'
        },
        show: true
    })
    .goto('https://app.getresponse.com/login.html')
    .wait()
    .type('#login', '...')
    .type('#passwdInp2', '...')
    .click('#loginFrm [type=submit]')
    .wait(1000)
    .goto('http://app.getresponse.com/message_basic_settings.html?type=broadcast')
    .wait(1000)
    .type('#subject', 'Nigth test')
    .click('.submit [type=submit]')
    .wait('.templates')
    .click('.template .use-template span')
    .goto('https://app.getresponse.com/message_create_message.html')
    .click('#form-createmessage .editorBottomBar a[href="#htmleditor"]')
    .click('#codeEditorAlert [data-close=ok]')
    .wait(1000)
    .visible('#editor-content')
    .click('#editor-content')
    .evaluate(function() {
        document.getElementById('editor-content').value = data;
    })
    .end()
    .click('[href="#htmleditor"]')
    .wait(1000)
    .click('#codecode')
    .evaluate(function() {
        document.getElementById('editor-content').value;
    })
    .end()

    .run(function (err, nightmare) {
        if (err) {
            console.log(err);
        } else {
            console.log('Done!', data);
        }
    });
}