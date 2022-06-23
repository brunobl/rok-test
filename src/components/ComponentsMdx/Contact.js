import React from 'react';

const Contact = ({email, children}) => {
    return (
        <div className="w-full contact-card">
            <div className="px-4 md:px-16 py-4">
                <p className="text-white" style={{minHeight: "50px"}}>{children}</p>
                <div className="my-4">
                    <a href={`mailto:${email}`} className="text-orange">{email}</a>
                </div>
            </div>
        </div>  
    );
};

export default Contact;