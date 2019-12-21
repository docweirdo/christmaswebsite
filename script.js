let finished = true;
let target = null;
let downloadLink = document.querySelector("article a");

function scroll(e){
    if (!finished) {
        target.focus();
        return;
    }
    
    finished = false;
    let video = document.querySelector('iframe.pillars');
    let peepoSpot = document.querySelector('.peepoSpot');
    let progress = 0;
    let peepoProgress = 0;
    let id = setInterval(scrollDown, 20);
    target = e.target;

    if (target.value.includes("Pablo")){
        video = document.querySelector('iframe.deadbolt');
        downloadLink.href = "files/deadbolt.exe";
        downloadLink.children[0].style.display = "block";
    }
    else if (target.value.includes("Melcher")){ 
        video = document.querySelector('iframe.papers');
        downloadLink.href = "files/papersplease.msi";
        downloadLink.children[0].style.display = "block";
    }
    else{
        downloadLink.href = "files/pillars.tar.gz";
        downloadLink.children[0].style.display = "block";
    }

    console.log(downloadLink.children[0].style);

    if (video == peepoSpot){
        video = document.querySelector('#peepo');
        downloadLink.children[0].style.display = "none";
    }

    video.style.display = 'inline-block';

    function scrollDown(){

        if (peepoSpot.style.bottom === '-100%'){
            peepoSpot.classList.remove("peepoSpot");
            video.classList.add("peepoSpot");
            finished = true;
            clearInterval(id);
        }else if (peepoSpot.style.bottom === '-32%' && progress <100 && peepoSpot.id === "peepo"){
            video.style.bottom = (100-progress) + '%';
            progress +=2;
        }else if(progress>100){
            peepoSpot.style.bottom = -peepoProgress + '%';
            peepoProgress +=2;
        }
        else{
            video.style.bottom = (100-progress) + '%';
            peepoSpot.style.bottom = -peepoProgress + '%';
            progress +=2;
            peepoProgress +=2;
        }
    }
}


const button = document.querySelectorAll('.menu li button');

button.forEach((b)=> {
    b.addEventListener('click', scroll);
});


