import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Board from './components/Board';
import imageData from './components/imageData';

const App = () => {
    const [images, setImages] = useState(processImages());
    const [wins, setWins] = useState(0);

    function processImages() {
        const newImages = [];
        let cnt = 0;
        imageData.map((img) =>
            newImages.push({
                id: cnt++,
                src: img,
                isClicked: false,
            })
        );

        return randomArrayShuffle(newImages);
    }

    //source:https://www.codegrepper.com/code-examples/javascript/typescript+shuffle+array+react
    function randomArrayShuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function shuffleImages() {
        const newImages = randomArrayShuffle([...images]);
        setImages(newImages);
    }

    function resetImages() {
        const newImages = randomArrayShuffle(processImages());
        setImages(newImages);
    }

    function imageOnClick(theid) {
        let intId = parseInt(theid);
        let newImages = images;
        newImages.forEach((img) => {
            if (img.id === intId) {
                if (img.isClicked === true) {
                    setWins(0);
                    resetImages();
                } else {
                    img.isClicked = true;
                    setWins(wins + 1);
                    shuffleImages();
                }
            }
        });
    }

    return (
        <div className="App">
            <Header />
            <Scoreboard wins={wins} total={images.length} />
            <Board images={images} imageOnClick={imageOnClick} />
        </div>
    );
};

export default App;
