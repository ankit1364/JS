/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,gamePlaying,lastDice,number;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //1.random number.
        var dice = Math.floor(Math.random() * 6)+1;
        //2.Dipslay the results. 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display ='block';
        diceDOM.src='dice-'+dice+'.png';
        //3. upDate the round score.only if the rolled number is not 1. 
        if(lastDice === 6 && lastDice ===6){
            scores[activePlayer] =0;
            document.querySelector('#current-'+activePlayer).textContent=0;
            nextPlayer();
            console.log("previous score and current score is 6");
        }
        if(dice !== 1){
            //add score
            roundScore +=dice; 
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else {
            //next player turn
            nextPlayer();
        }
        lastDice = dice; 
    } 
      
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //add current score with global score. 
        scores[activePlayer] +=roundScore;
        //update the UI.
        document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];
        //check if player won the game. 
        number  = document.getElementById('num').value;
        //undefined, 0, null or "" are coerced to false
        var winningScore = 10;
        if(number && number >1){
            winningScore = number; 
        }
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false; 
        }else{
            //next Player
            nextPlayer();    
        }
    }    
});



function nextPlayer(){
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore =0; 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying = true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    }
















