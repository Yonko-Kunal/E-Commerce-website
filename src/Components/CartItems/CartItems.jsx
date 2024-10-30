import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartTotal, all_products, cartItem, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="cartItems-format cartItems-format-main">
                            <img src={e.image} alt="" className='cartIcon-product-icon' />
                            <p>{e.name}</p>
                            <p>₹{e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItem[e.id]}</button>
                            <p>₹{e.new_price * cartItem[e.id]}</p>
                            <img className='cartIcons-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartItems-total-items">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartTotal()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartTotal()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>Have a promo code ? Enter it here</p>
                    <div className='cartItmes-promobox'>
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems