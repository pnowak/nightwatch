'use strict';

module.exports = function nigth(url, data) {
  	const getresponse = new Nightmare({
      openDevTools: {
        mode: 'detach'
      },
      show: true
    })

    .goto(url)
    .wait()
    .type('#login', '')
    .type('#passwdInp2', '')
    .click('#loginFrm [type=submit]')
    .wait(1000)
    .goto('http://app.getresponse.com/message_basic_settings.html?type=broadcast')
    .wait(1000)
    .type('#subject', 'Nigth test')
    .click('.submit [type=submit]')
    .wait(1000)
    .goto('https://app.getresponse.com/message_choose_template.html')
    .wait(1000)
    .click('form[action*="message_choose_template.html"] .templates .template .image')
    .wait(1000)
    .goto('https://app.getresponse.com/message_create_message.html')
    .wait(1000)
    .click('#form-createmessage .editorBottomBar [href="#htmleditor"]')
    .wait(1000)
    .click('#codeEditorAlert [data-close=ok]')
    .wait(5000)
    .visible('#editor-content')
    .click('#editor-content')
    .evaluate(function() {
        return document.getElementById("editor-content").value = data;
    })
    .end()
    .click('[href="#htmleditor"]')
    .wait(1000)
    .click('#codecode')
    .evaluate(function() {
        return document.getElementById("editor-content").value;
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