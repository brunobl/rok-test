import React from 'react';
import translate from "../i18n/translate"
import { useLocalization } from "../i18n/useLocalization"

const FilterProducts = ({sortFilter, setSortFilter}) => {
    const { locale } = useLocalization()
    return (
        <div className="flex w-full justify-end flex-wrap">
            <p className="py-2 px-2 text-gray-light lg:block hidden">{translate("label_trie", locale)}</p>
            <select className="text-gray-light border-solid border-2 border-light bg-black px-2 md:px-5 py-2 text-sm focus:outline-none" onChange={(e) => setSortFilter(e.target.value)} onBlur={(e) => setSortFilter(e.target.value)} value={sortFilter} >
                <option value="pop">{translate("popularite_trie", locale)}</option>
                <option value="az">{translate("alphabetique_az_trie", locale)}</option>
                <option value="za">{translate("alphabetique_za_trie", locale)}</option>
            </select>
        </div>
    );
};

export default FilterProducts;