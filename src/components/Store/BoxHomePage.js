import React from 'react';
import LocalizedLink from "../i18n/localizedLink"
import ArrowRight from "../Helpers/ArrowRight"
/*******
* taille : de 1-4 
* placementText: start, end
*******/
const BoxHomePage = ({taille, placementText, title, link, image, locale}) => {
    return (
        <div 
            className={"w-full bg-product-img h-64 flex " 
            + (taille === "2" ? "md:col-span-2" : "md:col-span-1")}
            style={{backgroundImage: `url(../${image})`}}
        >
            <LocalizedLink to={link} locale={locale} className={"w-full h-64 flex"}>
                <div className={"flex flex-auto "+ (placementText === "start" ? "items-start" : "items-end")}>
                    <div className="items-center flex justify-between w-full p-5 lien-article">
                        <p className="uppercase text-white" style={{font: "normal normal bold 30px/39px Krub"}}>{title}</p>
                        <ArrowRight/>
                    </div>
                </div>
            </LocalizedLink>
        </div>
    );
};

export default BoxHomePage;