import React from 'react';

import CategoriesCard from './categories-card/categories-card.component';

import './categories.styles.scss';

class Categories extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div className="categories">
                {
                    this.props.categories.map(category => {
                        return (<CategoriesCard key={category._id} data={category._id} catName={category.categoryName} articleCount={category.items} img={`http://127.0.0.1:5000/${category.image}`} handleCategoryBtn={this.props.handleCategoryBtn} />)
                    })
                }

                {/* <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" />
                <CategoriesCard catName="Laptops" articleCount={23} img="laptop.jpeg" /> */}
            </div>
        )
    }
}


export default Categories;