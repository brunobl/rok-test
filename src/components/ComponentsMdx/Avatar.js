import React from 'react';
import Image from "../Images/Image"
import Facebook from "../Helpers/Facebook"
import Instagram from "../Helpers/Instagram"
import Youtube from "../Helpers/Youtube"

const Avatar = ({image, nomPrenom, profession, instagram, facebook, youtube }) => {
    return (
        <div className="text-center hover:bg-black-light avatar border-2 border-orange md:border-0">
            <div className="h-24 w-24 m-auto my-6">
                <Image src={image} className="-ml-1 inline-block h-24 w-24 rounded-full text-white shadow-solid"/>
            </div>
            <p className="font-bold nomPrenom-avatar text-orange md:text-white">{nomPrenom}</p>
            <p className="font-light text-gray-light">{profession}</p>
            <div className="link-avatar-zone my-3">
                <div className="flex justify-center md:hidden block link-avatar">
                    {instagram && <a className="p-1 text-orange" aria-label="icon-instagram" href={instagram}><Instagram/></a>}
                    {facebook && <a className="p-1 text-orange" aria-label="icon-facebook" href={facebook}><Facebook /></a>}
                    {youtube && <a className="p-1 text-orange" aria-label="icon-youtube" href={youtube}><Youtube /></a>}
                </div>
            </div>
        </div>
    );
};

export default Avatar;