var GAMES = [
    {
        gameTitle: "Animal Crossing",
        gameFullImg: "animalCrossing_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2020",
        gamePlayerAmount: "1 Player",
        gameCharacterCustomization: "Yes",
        gameType: "Leisure",
    },
    {
        gameTitle: "Donkey Kong",
        gameFullImg: "donkey_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2018",
        gamePlayerAmount: "1-2 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
    {
        gameTitle: "Kirby",
        gameFullImg: "Kirby_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2022",
        gamePlayerAmount: "1-2 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
    {
        gameTitle: "Luigi Mansion",
        gameFullImg: "Luigi_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2019",
        gamePlayerAmount: "1-2 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
    {
        gameTitle: "Mario Kart",
        gameFullImg: "MarioKart_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2017",
        gamePlayerAmount: "1-4 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Racing",
    },
    {
        gameTitle: "Splatoon 3",
        gameFullImg: "splatoon_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2022",
        gamePlayerAmount: "1 Player",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
    {
        gameTitle: "Nintendo Switch Sports",
        gameFullImg: "sports_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2022",
        gamePlayerAmount: "1-4 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Sports",
    },
    {
        gameTitle: "Super Smash Bros",
        gameFullImg: "SuperSmashBros_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2018",
        gamePlayerAmount: "1-8 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
    {
        gameTitle: "Toad",
        gameFullImg: "toad_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2018",
        gamePlayerAmount: "1-2 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Puzzle",
    },
    {
        gameTitle: "Yoshi",
        gameFullImg: "Yoshi_200.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore facilis quo delectus aut dignissimos!",
        gameRating: "E",
        gameMaker: "Nintendo",
        gameConsole: "Switch",
        gameReleaseDate: "2019",
        gamePlayerAmount: "1-2 Players",
        gameCharacterCustomization: "Yes",
        gameType: "Action",
    },
];

function loadData (){
    $.each(GAMES, function(index, game){
    $("#app").append(`<div class="container-outside">
    <div id="${index}" class="container"><div class="one">
    <div class="gameTitle">
        <h4>${game.gameTitle}</h4> 
    </div>
    <div class="gameFullImg">
        <img src="images/${game.gameFullImg}" alt="${game.gameTitle}">
    </div>
    <div class="description">
        <p>${game.gameBriefDescription}</p>
    </div>
    <div class="rating">
    <b>Rating:</b> ${game.gameRating}
    </div>
    <div class="maker">
    <b>Maker:</b> ${game.gameMaker}
    </div>
    <div class="console">
        <b>Console:</b> ${game.gameConsole}
    </div>
    <div class="releaseDate">
    <b>Release Date:</b> ${game.gameReleaseDate}
    </div>
    <div class="gameType">
        <b>Game Type:</b> ${game.gameType}
    </div>
    <div class="playerAmt">
        <b>Player Count: </b>${game.gamePlayerAmount}
    </div>
    <div class="characterCustom">
        <b>Custom Character: </b>${game.gameCharacterCustomization}
    </div>
    
    </div>
</div>
</div>`);
    });
    
}

function initListeners (){

}

$(document).ready(function(){

    loadData();

});