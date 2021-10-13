import React from 'react';
import Card from './Card';

const Board = (props) => {
    const { images, imageOnClick } = props;
    return (
        <div className="boardContainer">
            {images.map((img) => (
                <Card
                    img={img.src}
                    key={img.id}
                    keys={img.id}
                    imageOnClick={imageOnClick}
                />
            ))}
        </div>
    );
};

export default Board;
