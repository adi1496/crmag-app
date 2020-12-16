import React from 'react';

import Banner from './../../components/banner/banner.component';
import Categories from './../../components/categories/categories.component';

import './home-page.styles.scss';



const HomePage = (props) => {
    return (
        <div>
            <Banner />
            <main className="main">
                    <h2 className="heading-2 u-margin-bottom-1">Categories</h2>
                    <Categories categories={props.categories} handleCategoryBtn={props.handleCategoryBtn} />
            </main>
        </div>
        
    )
}

export default HomePage;