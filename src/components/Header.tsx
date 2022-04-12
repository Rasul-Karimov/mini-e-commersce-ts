import React, { useEffect, useRef, useState } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoLogoAngular } from "react-icons/io"
import { GoodsType, } from "./types"

import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/rootReducer"
import { deleteFromCart } from "../redux/cart/actions"
const Header: React.FC = () => {
    const [isShowedCart, setIsShowedCart] = useState<boolean>(false)
    const cart = useRef<HTMLDivElement>(null)
    const button = useRef<HTMLButtonElement>(null)
    const dispatch = useDispatch();
    let cartItems = useSelector<RootState, GoodsType[]>((state) => state.cart)

    useEffect(function () {
        window.addEventListener("click", (e: any) => {
            if (!e.path.includes(cart.current) && !e.path.includes(button.current)) {
                setIsShowedCart(false)
            }
        })
    }, [])


    function handleDelete(id: string) {
        dispatch(deleteFromCart(id))
    }

    const total = Object.values(cartItems)?.reduce((accum, elem) => accum + elem?.price, 0)
    const totalCount = Object.values(cartItems)?.reduce((acc, item) => acc + item?.count, 0)

    return (<header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo" >
                    <IoLogoAngular />
                </div>
                <button ref={button} className="header__button" onClick={() => setIsShowedCart(!isShowedCart)}>
                    <AiOutlineShoppingCart />
                    <span> {totalCount}</span>
                </button>
                <div ref={cart} className="header__cart cart" style={isShowedCart ? { display: "block" } : { display: "none" }}>
                    {Object.values(cartItems).map(item => (
                        <div className="cart__block" key={item.name}>
                            <img src={item.imagePath} alt={item.name} width="55" height="55" />
                            <div className="cart__info">
                                <div className="cart__name">
                                    {item.name}
                                </div>
                                <div className="cart__price">
                                    {item.count} x  {item.price} $

                                </div>
                                <button onClick={() => handleDelete(item._id)} className="cart__delete">удалить</button>
                            </div>
                        </div>
                    ))}

                    <div className="cart__total">
                        Total: <b>$
                            {total}</b>
                    </div>
                </div>
            </div>
        </div>
    </header >)
}


export default Header