let secNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
 document.querySelector('.check').addEventListener('click',function(){
 const guess=Number(document.querySelector('.guess').value);
 console.log(guess,typeof guess);
 //when there is no input
    if(!guess){
      document.querySelector('.message').textContent='no number!';
  }
  //when player wins the game
    else if(guess===secNumber){
      document.querySelector('.message').textContent='correct number !'
      document.querySelector('.number').textContent=secNumber;
      document.querySelector('body').style.backgroundImage="url(celebrations.jpg)";
      if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
      }
  }
  //when guess i wrong
    else if(guess!==secNumber){
       if(score>1){ document.querySelector('.message').textContent=
        guess>secNumber?'Too high !':'Too low !';
    score--;
      document.querySelector('.score').textContent=score;
  } else{
     document.querySelector('.message').textContent='Game over !';
     document.querySelector('.score').textContent=0;
  }
}
  //when there is a high input
  /*
    else if(guess>secNumber){
      if(score>1){ document.querySelector('.message').textContent='Too high !';
    score--;
      document.querySelector('.score').textContent=score;
  } else{
     document.querySelector('.message').textContent='Game over !';
     document.querySelector('.score').textContent=0;
  }
  //when there is low inpt
  }else if(guess<secNumber){
     if(score>1){
      document.querySelector('.message').textContent='Too Low !';
    score--;
      document.querySelector('.score').textContent=score;
  }  else{
      document.querySelector('.message').textContent='Game over !';
      document.querySelector('.score').textContent=0;
  }
  }
  */
});
document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.message').textContent='Start the game';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value=' ';
  document.querySelector('body').style.backgroundImage="url(pic.avif)";
  score=20;
   secNumber=Math.trunc(Math.random()*20)+1;

})