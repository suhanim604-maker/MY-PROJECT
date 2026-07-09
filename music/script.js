const songs = [
    {
        title: "Chitti Na Koi",
        artist: "Jagjit Singh",
        src: "songs/chitti na koi.mp3",
        cover: "images/chitti.jpg"
    },
    {
        title: "Inaam",
        artist: "Unknown Artist",
        src: "songs/inaam.mp3",
        cover: "images/inaam.jpg"
    },
    {
        title: "Koi Fariyad",
        artist: "Jagjit Singh",
        src: "songs/koi fariyad.mp3",
        cover: "images/koi fariyad.jpg"
    },
    {
        title: "Saiyaara",
        artist: "Faheem Abdullah",
        src: "songs/saiyara.mp3",
        cover: "images/saiyara.jpg"
    },
        {
        title: "ishq de fanniyar",
        artist: "jyotica tangri",
        src: "songs/ishq de faniyar.mp3",
        cover: "images/ishq de faniyar.jpg"
    },
        {
        title: "jag bega n hoya",
        artist: "anand raj",
        src: "songs/jag bega n.mp3",
        cover: "images/jag bega n.jpg"
    }
    
];

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const volumeSlider = document.getElementById("volume-slider");
const playlist = document.getElementById("playlist-list");

let currentSong = 0;

pauseIcon.style.display = "none";


function loadSong(index){

    const song = songs[index];

    audio.src = song.src;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;

    document.querySelectorAll(".playlist-item").forEach(item=>{
        item.classList.remove("active");
    });

    const activeSong=document.querySelectorAll(".playlist-item")[index];

    if(activeSong){
        activeSong.classList.add("active");
    }
}


function playSong(){

    audio.play();

    playIcon.style.display="none";
    pauseIcon.style.display="block";

    cover.classList.add("playing");

}


function pauseSong(){

    audio.pause();

    playIcon.style.display="block";
    pauseIcon.style.display="none";

    cover.classList.remove("playing");

}


playBtn.addEventListener("click",()=>{

    if(audio.paused){

        playSong();

    }else{

        pauseSong();

    }

});


nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);
    playSong();

});


prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong<0){

        currentSong=songs.length-1;

    }

    loadSong(currentSong);
    playSong();

});


audio.addEventListener("loadedmetadata",()=>{

    progress.max=audio.duration;
    duration.textContent=formatTime(audio.duration);

});


audio.addEventListener("timeupdate",()=>{

    progress.value=audio.currentTime;
    currentTime.textContent=formatTime(audio.currentTime);

});


progress.addEventListener("input",()=>{

    audio.currentTime=progress.value;

});

audio.volume=0.7;

volumeSlider.addEventListener("input",()=>{

    audio.volume=volumeSlider.value;

});

function formatTime(time){

    if(isNaN(time)) return "0:00";

    let min=Math.floor(time/60);
    let sec=Math.floor(time%60);

    if(sec<10){
        sec="0"+sec;
    }

    return `${min}:${sec}`;

}



songs.forEach((song,index)=>{

    const li=document.createElement("li");

    li.className="playlist-item";

    li.innerHTML=`
        <img src="${song.cover}">
        <div>
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        </div>
    `;

    li.addEventListener("click",()=>{

        currentSong=index;

        loadSong(index);

        playSong();

    });

    playlist.appendChild(li);

});


loadSong(currentSong);