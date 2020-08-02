var TOPGG = 'http://94.209.25.93:8081/api/TopGGBotData'
var MEMBERSDATA = 'http://94.209.25.93:8081/api/BotMembers'


function Change(botName) {
    console.log(botName)
    fetch(TOPGG)
        .then(response => response.json())
        .then(data => console.log(data));

    document.getElementById('BotName').innerHTML = "awd"
}