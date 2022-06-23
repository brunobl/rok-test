import React from 'react';

const Categories = ({posts}) => {

    let allCategories = [];
    posts.map(post => 
        allCategories = [...allCategories, ...post.node.frontmatter.categorie]
    )
    let categories = [...new Set(allCategories)]; 
    return (
        <div>
            {
                categories.map(category =>
                    <a href={`${category}`}>{category}</a>
                )
            } 
        </div>
    );
};

export default Categories;