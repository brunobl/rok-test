import React from 'react';
import SearchBar from "./searchBar"
import Languages from "./languages"
import SocialNetworks from "../Social/socialNetworks"
import NavbarMobile from "./navbarMobile"


const HeaderMobile = ({locale, allPages, productsCategories, postsCategories, responsiveHeader }) => {
    return (
        <div className={"bg-black min-h-screen py-4 w-full flex-grow lg:flex lg:items-center lg:w-auto lg:hidden z-40 "+ (responsiveHeader ? "header-visible" : "header-hidden" )}>
            <SearchBar className="hidden lg:flex" locale={locale} />
            <NavbarMobile locale={locale} allPages={allPages} productsCategories={productsCategories} postsCategories={postsCategories} />
            <Languages locale={locale} />
            <SocialNetworks />
        </div>
    );
};

export default HeaderMobile;