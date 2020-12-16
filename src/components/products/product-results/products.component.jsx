import React from 'react';

import ProductCard from './product.card.component';

const Products = (props) => {
    const {products, category, handleAddCart} = props;
    return(
        <div className="products">
            {products.map(product => {
                return(<ProductCard key={product._id} product={product} category={category} handleAddCart={handleAddCart}/>);
            })}
        </div>
    )
}

export default Products;