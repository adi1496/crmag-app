import React from 'react';

import CardButton from '../../button/button.component';

const ProductCard = (props) => {
    const {product, category, handleAddCart} = props;

    const addToCart = (event) => {
        // console.log(event.target.dataset.id);
        handleAddCart(event.target.dataset.id);
    }

    return(
        <div className="products__card">
            <img className="products__img" src={product.imageCover} alt="product-img"/>
            <h3 className="heading-4 products__category">{category.categoryName.toUpperCase()}</h3>
            <p className="products__summary" data-id={product._id}>{product.summary}</p>
            <span className="products__stock">In stock</span>
            <span className="products__price">{`$${product.price}`}</span>
            <CardButton onClick={addToCart} btnClass="add-to-cart-btn" data-id={product._id}>Add to Cart</CardButton>
        </div>
    )
}

export default ProductCard;