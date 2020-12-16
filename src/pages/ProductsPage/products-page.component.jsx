import React from 'react';

import Products from '../../components/products/product-results/products.component';
import CategoriesList from './../../components/products/left-side/categories-list.component';
import ResultsOption from './../../components/products/product-results/results-options.component';
import Pages from './../../components/products/product-results/pages.component';
import fetchFunction from './../../utils/fetch';

import './products-page.styles.scss';

class ProductsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            productsData: null,
            category: null,
            products: [],
            sort: null
        }
    }

    async componentDidMount() {
        const productsData = window.localStorage.getItem('productsData');
        if(this.state.productsData) {
            const products = await fetchFunction('GET', `api/v1/products/get-by-category/${this.state.productsData}`, {});
            this.setState({products: products.data.products, category: products.data.category});
        }
        if(productsData) {
            const products = await fetchFunction('GET', `api/v1/products/get-by-category/${productsData}`, {});
            this.setState({products: products.data.products, category: products.data.category});
        }
    }

    handleCategoryClick = (data) => {
        window.localStorage.setItem('productsData', data);
        this.setState({productsData: data}, () => {
            this.componentDidMount();
        });
    }

    render() {
        // console.log(this.state);
        const sortOptions = ['Top Sales', 'Price Ascending', 'Price Descending'];
        const resultPerPageOptions = [20, 10, 30, 40];
        return (
            <section className="section-products">
                <div className="search-options">
                    <CategoriesList handleCategoryClick={this.handleCategoryClick} categories={this.props.categories} />
                </div>
                <div className="results-container">
                    <h2 className="heading-2 results-container__title">{this.state.category ? `${this.state.category.categoryName.toUpperCase()}`: ''}</h2>
                    <div className="results-container__items-count">{`${this.state.products.length} products`}</div>
                    <div className="results-container__special">
                        <span>Special Offer. Soon...</span>
                    </div>

                    <div className="results-container__options">
                        <ResultsOption secondClass='1' selectId='sort' options={sortOptions} />

                        <ResultsOption secondClass='2' selectId='results-per-page' options={resultPerPageOptions} />

                        <Pages secondClass="3" />
                    </div>

                    <Products products={this.state.products} category={this.state.category} handleAddCart={this.props.handleAddCart}/>

                    <Pages secondClass='end' />
                </div>
            </section>
        )
    }
}

export default ProductsPage;