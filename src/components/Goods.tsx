import React from 'react'
import { GoodsType, } from './types'
import "./goods.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart/actions'


const Goods: React.FC = () => {
    const goods: GoodsType[] = [
        {
            _id: "lenovo",
            name: "Ноутбек Lenovo",
            price: 1200,
            imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2205_0_6_320.webp",
            count: 1
        },
        {
            _id: "asus",
            name: "Ноутбек asus",
            price: 1400,
            imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2090_8_1_320.webp",
            count: 1
        },
        {
            _id: "acer",
            name: "Ноутбек acer",
            price: 900,
            imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2229_0_1_320.webp",
            count: 1
        },
        {
            _id: "Honor",
            name: "Ноутбек Honor",
            price: 1500,
            imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2154_0_1_320.webp",
            count: 1
        },

    ]
    const dispatch = useDispatch()
    function handleClick(product: GoodsType) {
        dispatch(addToCart(product))
    }
    return (
        <div className='goods'>
            <div className="goods__block container">
                <h2 className='goods__title'>Ноутбуки</h2>
                <div className="goods__items">
                    {
                        goods?.map(item => (
                            <div key={item._id} className='goods__item'>
                                <img src={item.imagePath} alt="" />
                                <div className="goods__item-name">
                                    {item.name}
                                </div>
                                <div className="goods__item-price">
                                    цена    ${item.price}
                                </div>
                                <div onClick={() => handleClick(item)} className="goods__item-addcart"><button>Добавить в карзину</button></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Goods