import React from 'react';
import Facebook from '../Helpers/Facebook'
import Twitter from '../Helpers/Twitter'

const SharePost = ({slug, title}) => {
    return (
        <div className="md:block w-auto flex justify-center items-center text-white p-2 m-5">
            <div className="bg-black-light p-4">
                <a href={`https://www.facebook.com/sharer.php?u=https://www.rokfishing.com/${slug}&quote=${title}`} rel="noopener noreferrer" target="_blank" className="hover:text-gray-light text-lg">
                    <Facebook color="#FFF !important" />
                </a>        
            </div>
            <div className="bg-black-light p-4">
                <a href={`https://twitter.com/intent/tweet?url=https://www.rokfishing.com/${slug}&text=${title}`} rel="noopener noreferrer" target="_blank" className="hover:text-gray-light text-lg">
                    <Twitter />
                </a>         
            </div>
        </div>
    );
};

export default SharePost;