import React from 'react';

const Contacts = ({children}) => {
    return (
        <div className="xl:m-auto bg-black-light max-w-screen-xl m-4 p-10 grid sm:grid-cols-2 md:grid-cols-2 border border-4 border-light ">
            { children }
        </div>
    );
};

export default Contacts;
