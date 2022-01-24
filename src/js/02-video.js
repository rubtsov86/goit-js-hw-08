import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

const onPlay = function (data) {

    player.getCurrentTime()
        .then(function (seconds) {
            
            localStorage.setItem("videoplayer-current-time", seconds);
            console.log(localStorage.getItem("videoplayer-current-time"));
        })
        .catch(function (error) { })
    
};


player.on('timeupdate', throttle(onPlay, 1000));






    


    
