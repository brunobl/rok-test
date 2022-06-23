import React from 'react';
import ProductsList from './ProductsList'

const Related = ({ related }) => {

    if(!related){return null }

    return (
        <div className="py-10 related">
            <div className="max-w-screen-xl mx-auto px-6">
                <h6 className="text-white text-2xl">Vous pourriez aussi aimer</h6>
                <ProductsList products={related} cols={4} />
            </div>
        </div>
    );
};

export default Related;