import React from 'react';

const Team = ({ children }) => {
    return (
        <div className="text-center max-w-screen-xl m-auto md-mx-10 my-10 grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4">
            { children }
        </div>
    );
};

export default Team;