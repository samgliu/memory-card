import React from 'react';

const Card = (props) => {
    const { img, keys, imageOnClick } = props;

    function imageClicked(e) {
        e.preventDefault();
        imageOnClick(e.target.id);
    }
    return (
        <div className="imageContainer" key={keys}>
            {
                <img
                    src={img}
                    alt=""
                    width="100px"
                    id={keys}
                    onClick={(e) => imageClicked(e)}
                ></img>
            }
        </div>
    );
};
export default Card;
