import React from 'react';

const Scoreboard = (props) => {
    const { wins, total } = props;
    return (
        <div className="scoreboard">
            Scoreboard: &nbsp; Max: {total}&nbsp; Wins: {wins}
        </div>
    );
};

export default Scoreboard;
