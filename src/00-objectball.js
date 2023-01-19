function gameObject() {
    const gameObject = {
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away: {
            teamName:"Charlotte Hornets",
            colors:["Turquoise","Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
            }
        }
    }
    return gameObject;
}

function playerStats(name) { // return player stats object
    const game = gameObject();
    let team;
    let player;

    for(let gameKey in game){ // game
        team = game[gameKey];
        for(let p in team.players){ // team
            if(p === name) {
                player = team.players[p];
                break;
            }
        }
    }
    return player;
}

function numPointsScored(name) {
    return playerStats(name).points;
}

function shoeSize(name) {
    return playerStats(name).shoe;
}

function teamColors(teamName) {
    const game = gameObject();
    let colors;

    for(let team in game) {
        colors = game[team].colors;
    }
    return colors;
}

function teamNames() {
    const game = gameObject();
    let teamNames = [];

    for(let team in game){
        teamNames.push(game[team].teamName);
    }
    return teamNames
}

function playerNumbers(teamName) {
    const game = gameObject();
    let players;
    let playerNumbers = [];
    for(let team in game) { // game
        if(game[team].teamName === teamName) {
            players = game[team].players;
            for(let p in players) { //players
                playerNumbers.push(players[p].number);
            }
            break;
        }
    }
    return playerNumbers;
}

function bigShoeRebounds(){ // biggest shoe's rebounds
    const game = gameObject();
    let players;
    let rebounds = 0;
    let biggestShoe = 0;

    for(let team in game) { // game
        players = game[team].players;
        for(let p in players) { // players
            if(biggestShoe < players[p].shoe) {
                biggestShoe = players[p].shoe;
                rebounds = players[p].rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let players;
    let player;
    let mostPoints = 0;

    for(let team in game) { // game
        players = game[team].players;
        for(p in players) {
            if(mostPoints < players[p].points) {
                mostPoints = players[p].points;
                player = p;
            }
        }
    }
    return player;
}

function winningTeam() {
    const game = gameObject();
    let players;
    let winningTeam;
    let teamPoints = 0;
    let mostPoints = 0;
    
    for(let team in game) {
        players = game[team].players;
        for(let p in players) {// count up points
            teamPoints += players[p].points;
        }
        if(mostPoints < teamPoints){
            mostPoints = teamPoints;
            teamPoints = 0;
            winningTeam = game[team].teamName;
        }
    }
    return winningTeam;
}


function playerWithLongestName() {
    const game = gameObject();
    let players;
    let longestName = "";

    for(let team in game){
        players = game[team].players;
        for(let p in players) {
            if(longestName.length < p.length){
                longestName = p;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longName = playerWithLongestName();
    let players;

    for(let team in game) {
        players = game[team].players;
        for(let p in players){
            if(players[longName] < players[p]) {
                return false;
            }
        }
    }
    return true;
}
