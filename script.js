score=0;
cross=true;

audio= new Audio('audio.mp3');
audiogo= new Audio('gameover.mp3');

setTimeout(()=>
{
    audio.play()
},100);
document.onkeydown = function(event) {
    var keyCode = event.keyCode || event.which; // For older IE support
    console.log("Key code is:", keyCode);

    if(keyCode==38){
        monkey=document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');

        setTimeout(()=> {
            monkey.classList.remove('animatemonkey');
        },700);
    }
    if(keyCode==39){
        monkey=document.querySelector('.monkey');
        monkeyX=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
       
        monkey.style.left = monkeyX + 112 +"px";
    }
    if(keyCode==37){
        monkey=document.querySelector('.monkey');
        monkeyX=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
       
        monkey.style.left = monkeyX - 112 +"px";
    }

};

setInterval(() => {
    monkey=document.querySelector('.monkey');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<73 && offsetY<52)
    {
        gameover.innerHTML= "!! Game Over !!";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
        audiogo.pause();
        audio.pause();
    },1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(()=>
        {
            cross=true;

        },1000);
        setTimeout(()=>{
        anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newdur=anidur-0.1;
        obstacle.style.animationDuration=newdur + 's';
        },500);
    }
}, 10);

function updatescore(score)
{
    scorecount.innerHTML= "Your Score :  "+ score;
}score=0;
cross=true;

audio= new Audio('audio.mp3');
audiogo= new Audio('gameover.mp3');

setTimeout(()=>
{
    audio.play()
},100);
document.onkeydown = function(event) {
    var keyCode = event.keyCode || event.which; // For older IE support
    console.log("Key code is:", keyCode);

    if(keyCode==38){
        monkey=document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');

        setTimeout(()=> {
            monkey.classList.remove('animatemonkey');
        },700);
    }
    if(keyCode==39){
        monkey=document.querySelector('.monkey');
        monkeyX=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
       
        monkey.style.left = monkeyX + 112 +"px";
    }
    if(keyCode==37){
        monkey=document.querySelector('.monkey');
        monkeyX=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
       
        monkey.style.left = monkeyX - 112 +"px";
    }

};

setInterval(() => {
    monkey=document.querySelector('.monkey');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<73 && offsetY<52)
    {
        gameover.innerHTML= "!! Game Over !!";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
        audiogo.pause();
        audio.pause();
    },1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(()=>
        {
            cross=true;

        },1000);
        setTimeout(()=>{
        anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newdur=anidur-0.1;
        obstacle.style.animationDuration=newdur + 's';
        },500);
    }
}, 10);

function updatescore(score)
{
    scorecount.innerHTML= "Your Score :  "+ score;
}