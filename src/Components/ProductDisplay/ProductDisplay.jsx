import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(1344)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-new-price">₹{product.new_price}</div>
                    <div className="productDisplay-right-old-price">₹{product.old_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam error veniam cum ad. Corporis mollitia eligendi a consequatur soluta. Non animi dolore unde! Possimus, modi quisquam repudiandae minima voluptatibus laudantium architecto.
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add to Cart</button>
                <p className="productDisplay-right-category"><span>Category :</span> Womens, T-shirt croptop</p>
                <p className="productDisplay-right-category"><span>Tags :</span> Mordern, Latest</p>
            </div>

        </div>
    )
}

export default ProductDisplay