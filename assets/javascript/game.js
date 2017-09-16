// function myFunction() {
   // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
   var computerChoices = 	['abc','henry','starbucks','you','hunger', 'for', 'the', 'win', 'we', 'know', 'essential', 'reading', 'guide', 'movie', 'battles', 'kevin', 'jihn'];
   // var computerChoices =  ['aaa'];

   var alphaChoices =   ['a','b','c','d','e'
                         ,'f','g','h','i','j'
                         ,'k','l','m','n','o'
                         ,'p','q','r','s','t'
                         ,'u','v','w','x','y','z'];  
   var countLeft, userWin, userLose, usedLetter, guessword;
   var totalLetter ='';
   var count = 1;
   // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   var computerGuess ='';
   var hangman ='';
   // picSrc =document.getElementById("pic");
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var helped = document.getElementById('help');
      guessword = document.getElementById("guess_word");
      if(event.key ==' '&&hangman.indexOf('_')==-1){
        document.getElementById("pic").src = "assets/image/1.png";
        totalLetter = '';
        hangman ='';
        guessword.textContent = hangman;
        countLeft.textContent = 10;
        usedLetter.textContent = '';
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        for (var i=0;i<computerGuess.length;i++){
          hangman += '_ ';
        }
        
        helped.textContent = 'press shift for help';
        guessword.textContent = hangman;
        console.log(computerGuess);
      }
      if(event.key =='Shift'){
        alert('help');
      }
      countLeft = document.getElementById("count_left");
      userWin = document.getElementById("user-win");
      userLose = document.getElementById("user-lose");
      usedLetter = document.getElementById("used_letter");
      // computerGuess = document.getElementById("guess");
      
      if (hangman.length !=0) { // don't start until user pressed "space" which will make hangman the length of _
        if(totalLetter.indexOf(userGuess)==-1){ // if the user pressed the same letter again don't do it
          if(alphaChoices.indexOf(userGuess)!= -1){ //if the user is guessing alphabet then continue
            if (computerGuess.indexOf(userGuess)!=-1) {// if the user guessed one of the letter in the random word
              // var temp = computerGuess.indexOf(userGuess);
              // // console.log(temp);
              // var temp2 = hangman.split(' ') ;
              // // console.log(temp2);
              // temp2[temp] = userGuess;
              // hangman = temp2.join(' ');
              while(computerGuess.indexOf(userGuess)!=-1){
                console.log(computerGuess);
                hangman = abc(computerGuess,userGuess,hangman);
                // computerGuess[computerGuess.indexOf(userGuess)]='1';
                var temp = computerGuess.split('');
                var loca = computerGuess.indexOf(userGuess);
                temp[loca] = ','
                console.log(temp);
                console.log(loca);
                computerGuess = temp.join('');
              }
              
              guessword.textContent = hangman;
              totalLetter =  totalLetter+ userGuess;
              usedLetter.textContent = totalLetter;

              if(hangman.indexOf('_')==-1){
                alert('You win');
                // console.log(hangman.indexOf('_'));
                // totalLetter = '';
                // hangman ='';
                // guessword.textContent = hangman;
                // countLeft.textContent = 10;
                // usedLetter.textContent = '';
                count = 1;
                userWin.textContent = parseInt(userWin.textContent) +1;
                // computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log(computerGuess +1);
                helped.textContent = 'Press Space to Start';
              }
            }else{// if the user did not guess one of the letter in the random word
              count++;
              document.getElementById("pic").src = "assets/image/"+count +".png";
            	countLeft.textContent = parseInt(countLeft.textContent) - 1 ;
            	usedLetter.textContent = usedLetter.textContent + userGuess;
              totalLetter =  totalLetter+ userGuess;

              if(countLeft.textContent==0){
                count = 1;
                alert('You Lose');
                hangman ='';
                guessword.textContent = hangman;
                totalLetter = '';
                countLeft.textContent = 10;
                usedLetter.textContent = '';
                userLose.textContent = parseInt(userLose.textContent) +1;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log(computerGuess);
                helped.textContent = 'Press Space to Start';
              }
            }
          }
        }
      }
    }
    var abc = function(x,y,z){
                var temp = x.indexOf(y);
                // console.log(temp);
                var temp2 = z.split(' ') ;
                // console.log(temp2);
                temp2[temp] = y;
                return temp2.join(' ');
              }
// }
