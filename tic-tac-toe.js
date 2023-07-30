document.querySelector('.start').addEventListener('click',()=>{startGame();})
function startGame()
{
  select = 1;
  document.getElementById("box1").addEventListener('click',()=>{playGame(1)});
  document.getElementById("box2").addEventListener('click',()=>{playGame(2);})
  document.getElementById("box3").addEventListener('click',()=>{playGame(3);})
  document.getElementById("box4").addEventListener('click',()=>{playGame(4);})
  document.getElementById("box5").addEventListener('click',()=>{playGame(5);})
  document.getElementById("box6").addEventListener('click',()=>{playGame(6);})
  document.getElementById("box7").addEventListener('click',()=>{playGame(7);})
  document.getElementById("box8").addEventListener('click',()=>{playGame(8);})
  document.getElementById("box9").addEventListener('click',()=>{playGame(9);})

  let btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
  btn1 = document.getElementById("box1");
  btn2 = document.getElementById("box2");
  btn3 = document.getElementById("box3");
  btn4 = document.getElementById("box4");
  btn5 = document.getElementById("box5");
  btn6 = document.getElementById("box6");
  btn7 = document.getElementById("box7");
  btn8 = document.getElementById("box8");
  btn9 = document.getElementById("box9");
  if(document.querySelector('.start').innerHTML == 'Start-Game')
  {
    document.querySelector('.start').innerHTML = 'Reset-Game';
    document.querySelector('.btn1').classList.add('btn-glow');
 
    function playGame(a)
    {
      playerToggle(a);

      if((btn1.innerHTML == 'X') && (btn2.innerHTML == 'X') && (btn3.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
      }
      else if((btn4.innerHTML == 'X') && (btn5.innerHTML == 'X') && (btn6.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn4,btn5,btn6,btn1,btn2,btn3,btn7,btn8,btn9);
      }
      else if((btn7.innerHTML == 'X') && (btn8.innerHTML == 'X') && (btn9.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn7,btn8,btn9,btn1,btn2,btn3,btn4,btn5,btn6);
      }
      else if((btn1.innerHTML == 'X') && (btn4.innerHTML == 'X') && (btn7.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn1,btn4,btn7,btn5,btn2,btn3,btn6,btn8,btn9);
      }
      else if((btn2.innerHTML == 'X') && (btn5.innerHTML == 'X') && (btn8.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn2,btn5,btn8,btn1,btn4,btn3,btn7,btn6,btn9);
      }
      else if((btn3.innerHTML == 'X') && (btn6.innerHTML == 'X') && (btn9.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn3,btn6,btn9,btn1,btn2,btn5,btn7,btn8,btn4);
      }
      else if((btn1.innerHTML == 'X') && (btn5.innerHTML == 'X') && (btn9.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn1,btn5,btn9,btn4,btn2,btn3,btn7,btn8,btn6);
      }
      else if((btn3.innerHTML == 'X') && (btn5.innerHTML == 'X') && (btn7.innerHTML == 'X'))
      {
        document.querySelector('.btn1').innerHTML = 'You Won';
        winOutput(btn3,btn5,btn7,btn1,btn2,btn4,btn6,btn8,btn9);
      }
      else if((btn1.innerHTML == "O") && (btn2.innerHTML == 'O') && (btn3.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
      }
      else if((btn4.innerHTML == 'O') && (btn5.innerHTML == 'O') && (btn6.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn4,btn5,btn6,btn1,btn2,btn3,btn7,btn8,btn9);
      }
      else if((btn7.innerHTML == 'O') && (btn8.innerHTML == 'O') && (btn9.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn7,btn8,btn9,btn1,btn2,btn3,btn4,btn5,btn6);
      }
      else if((btn1.innerHTML == 'O') && (btn4.innerHTML == 'O') && (btn7.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn1,btn4,btn7,btn5,btn2,btn3,btn6,btn8,btn9);
      }
      else if((btn2.innerHTML == 'O') && (btn5.innerHTML == 'O') && (btn8.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn2,btn5,btn8,btn1,btn4,btn3,btn7,btn6,btn9);
      }
      else if((btn3.innerHTML == 'O') && (btn6.innerHTML == 'O') && (btn9.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn3,btn6,btn9,btn1,btn2,btn5,btn7,btn8,btn4);
      }
      else if((btn1.innerHTML == 'O') && (btn5.innerHTML == 'O') && (btn9.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn1,btn5,btn9,btn4,btn2,btn3,btn7,btn8,btn6);
      }
      else if((btn3.innerHTML == 'O') && (btn5.innerHTML == 'O') && (btn7.innerHTML == 'O'))
      {
        document.querySelector('.btn2').innerHTML = 'You Won';
        winOutput(btn3,btn5,btn7,btn1,btn2,btn4,btn6,btn8,btn9);
      }
      else if((btn1.innerHTML == 'X' || btn1.innerHTML == 'O') && (btn2.innerHTML == 'X'|| btn2.innerHTML == 'O') && (btn3.innerHTML == 'X' || btn3.innerHTML == 'O') && (btn4.innerHTML == 'X' || btn4.innerHTML == 'O') && (btn5.innerHTML == 'X' || btn5.innerHTML == 'O') && (btn6.innerHTML == 'X' || btn6.innerHTML == 'O') && (btn7.innerHTML == 'X' || btn7.innerHTML == 'O') && (btn8.innerHTML == 'X' || btn8.innerHTML == 'O') && (btn9.innerHTML == 'X' || btn9.innerHTML == 'O'))
      {
        if(document.querySelector('.btn2').classList.contains('btn-glow'))
          {
            document.querySelector('.btn2').classList.remove('btn-glow');
          }
          else
          {
            document.querySelector('.btn1').classList.remove('btn-glow');
          }
          document.querySelector('.start').innerHTML = 'Game-Draw';
          document.querySelector('.start').classList.add('btn-glow');
      }
      else
      {
        if(select == 1)
        {
          console.log("Player 1 turns");
          // if(document.querySelector('.btn1').classList.contains('btn-glow'))
          // {

          // }
          document.querySelector('.btn1').classList.add('btn-glow');
          if(document.querySelector('.btn2').classList.contains('btn-glow'))
          {
            document.querySelector('.btn2').classList.remove('btn-glow');
          }
        }
        else
        {
          console.log("Player 2 turns");
          document.querySelector('.btn2').classList.add('btn-glow');
          if(document.querySelector('.btn1').classList.contains('btn-glow'))
          {
            document.querySelector('.btn1').classList.remove('btn-glow');
          }
        }

      }
      
    }
    function playerToggle(a)
    {
      if(a == 1)
      {
        playerToggler(btn1)
      }
      else if(a==2)
      {
        playerToggler(btn2)
      }
      else if(a==3)
      {
        playerToggler(btn3)
      }
      else if(a==4)
      {
        playerToggler(btn4)
      }
      else if(a==5)
      {
        playerToggler(btn5)
      }
      else if(a==6)
      {
        playerToggler(btn6)
      }
      else if(a==7)
      {
        playerToggler(btn7)
      }
      else if(a==8)
      {
        playerToggler(btn8)
      }
      else
      {
        playerToggler(btn9)
      }
    }

    function playerToggler(btn)
    {
      if(select == 1)
      {
        btn.innerHTML = 'X';
        btn.disabled = true;
        select = 0;
      }
      else
      {
        btn.innerHTML = 'O';
        btn.disabled = true;
        select = 1;
      }
    }
    function winOutput(but1,but2,but3,but4,but5,but6,but7,but8,but9)
    {
      but1.style.color = "green";
      but2.style.color = "green";
      but3.style.color = "green";
      but4.disabled = true;
      but5.disabled = true;
      but6.disabled = true;
      but7.disabled = true;
      but8.disabled = true;
      but9.disabled = true;
    }
  }
  else
  {
    document.querySelector('.start').innerHTML = 'Start-Game';
    resetGame();
  }

  function resetGame()
  {
    location.reload();
    btn1.innerHTML = btn2.innerHTML = btn3.innerHTML = btn4.innerHTML = btn5.innerHTML = btn6.innerHTML = btn7.innerHTML = btn8.innerHTML = btn9.innerHTML = '';
  }
}