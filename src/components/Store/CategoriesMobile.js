import React from 'react';
import translate from "../i18n/translate"
import ArrowDown from "../Helpers/ArrowDown"
import CloseLine from "../Helpers/CloseLine"
import LocalizedLink from "../i18n/localizedLink"

const CategoriesMobile = ({ categories, locale }) => {
    return (
        <>
            <div>
                <input type="checkbox" id="categoriesButton" className="hidden toggle-select" />

                <div className="text-gray-light w-full cursor-pointer border-solid border-2 border-light bg-black px-5 py-2 text-sm focus:outline-none">
                    <label htmlFor="categoriesButton" className="flex justify-between items-center">
                        {translate("categorie_select", locale)}
                        <ArrowDown/>
                    </label>
                </div>
                <div className="list-select-value bg-black inset-x-0 bottom-0 w-full fixed z-40">
                    <div className="text-white pt-2 px-4 m-auto max-h-screen  overflow-y-auto">
                        <div className="flex justify-between my-3 pb-2 border-b-2 border-orange">
                            <p className="border-orange font-semibold">
                                {translate("categorie_produits", locale)}
                            </p>
                            <label htmlFor="categoriesButton"> <CloseLine color="#FFF" /></label>
                        </div>
                        <ul className="">
                            {categories.map((category, index) => (
                                <LocalizedLink
                                    to={`/.${category.categoryPath}`}
                                    langage={locale}
                                    key={category.categoryPath}
                                >
                                    <li
                                        className={
                                            categories.length === index + 1
                                                ? "my-3 pb-3 text-left font-thin"
                                                : "my-3 border-light border-b pb-3 text-left font-thin"
                                        }
                                    >
                                        {category.categoryTitle}
                                    </li>
                                </LocalizedLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CategoriesMobile;