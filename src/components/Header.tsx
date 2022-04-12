import React, { useState } from "react"
import { IcartItem } from "./types"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoLogoAngular } from "react-icons/io"
import "./header.css"
const Header: React.FC = () => {

    const cartItems: IcartItem[] = [
        {
            imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2205_0_6.png",
            name: "Ноутбук MCI",
            count: 1,
            price: 4500,
        }
    ]

    const total = cartItems.reduce((accum, elem) => accum + elem.count, 0)

    const [isShowedCart, setIsShowedCart] = useState<boolean>(false)
    return (<header className="header">
        <div className="container">
            <div className="header__block">



                <div className="header__logo" >
                    <IoLogoAngular />

                </div>

                <button className="header__button" onClick={() => setIsShowedCart(!isShowedCart)}>
                    <AiOutlineShoppingCart />
                    <span> {total}</span>
                </button>
                <div className="header__cart cart" style={isShowedCart ? { display: "block" } : { display: "none" }}>
                    {cartItems?.map(item => (
                        <div className="cart__block" key={item.name}>
                            <img src={item.imagePath} alt={item.name} width="55" height="55" />
                            <div className="cart__info">
                                <div className="cart__name">
                                    {item.name}
                                </div>
                                <div className="cart__price">
                                    {item.count} x {item.price}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="cart__total">
                        Total: <b>{total}</b>
                    </div>
                </div>
            </div>
        </div>
    </header >)
}


export default Header