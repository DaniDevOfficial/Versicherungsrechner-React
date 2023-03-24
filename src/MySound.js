import React from "react";
import audio from './Sound.mp3';

class AudioTest extends React.Component{


    playAudio = () => {
        new Audio(audio).play();
        setInterval(() => {
            new Audio(audio).play();
        }, 1000)
    }


    render() {
        return (
            <div>
                <p onClick={this.playAudio}>¯\_(ツ)_/¯</p>
            </div>
        );
    }
}

export default AudioTest;