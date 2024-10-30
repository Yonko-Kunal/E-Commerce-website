import React, { useContext } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Context/ShopContext'

const cart = () => {

    return (
        <div>
            <CartItems />
        </div>
    )
}

export default cart