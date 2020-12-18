import Button from './../../../button/button.component';

const WishCartItem = ({cartItems}) => {

    const handleClickViewCart = () => {
        window.location.href = '/cart';
    }

    let cartElementsDiv;
    if(cartItems){
        cartItems = cartItems.split('+');
    
        cartElementsDiv = <div className="cart-dropdown__elements">
                { cartItems.map((el, i) => 
                    (<div key={i}>
                        {el}
                    </div>))
                }
            </div>
    }else {
        cartElementsDiv = <div></div>
    }



    return (<div className="cart-dropdown">
        {cartElementsDiv}
        <Button btnClass="cart-dropdown__button" onClick={handleClickViewCart}>View Cart</Button>
        <Button btnClass="cart-dropdown__button">Send Order</Button>
    </div>)
}

export default WishCartItem;