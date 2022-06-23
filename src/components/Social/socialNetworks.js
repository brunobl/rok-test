import React from 'react';
import Facebook from '../Helpers/Facebook'
import Twitter from '../Helpers/Twitter'
import Instagram from '../Helpers/Instagram'
import Youtube from '../Helpers/Youtube'

// voir s'il vaut mieux faire un target="_blank" rel="noreferrer noopener"

const SocialNetworks = () => {
    return (
        <div className="flex justify-center items-center text-orange m-auto">
            <a className="m-1" href="https://www.facebook.com/rokfishing" aria-label="facebook-icon">
                <Facebook />
            </a>
            <a className="m-1" href="https://www.twitter.com/rokfishing" aria-label="twitter-icon">
                <Twitter />
            </a>
            <a className="m-1" href="https://www.instagram.com/rokfishing" aria-label="instagram-icon">
                <Instagram />
            </a>
            <a className="m-1" href="https://www.youtube.com/channel/UC6Xwdlrlt9cfIMZt98GoT4w" aria-label="youtube-icon">
                <Youtube />
            </a>
        </div>
    );
};

export default SocialNetworks;
