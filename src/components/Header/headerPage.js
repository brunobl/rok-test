import React from 'react';

const headerPage = ({title}) => {
    return (
        <div className="headerPage py-8">
            <h1 className="text-center uppercase text-white" style={{font: "normal normal bold 38px/49px Krub"}}>{title}</h1>
        </div>
    );
};

export default headerPage;