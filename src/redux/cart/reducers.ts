
import { GoodsType, } from "../../components/types"
import { actionTypes, TypeActionCart } from "./types"
const initialValue: GoodsType[] = []

const cartReducer = (state = initialValue, action: TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            const cart = [...state]
            const foundProduct = cart.find(item => item._id === action.payload._id)

            if (foundProduct) {
                foundProduct.count += 1
            } else {
                cart.push(action.payload)
            }
            return cart
        case actionTypes.CART_REMOVE_ITEM:
            {
                let cart = [...state]
                cart.forEach((item, index) => {
                    if (item._id === action.payload && item.count > 1) {
                        item.count = item.count - 1;
                    } else if (item._id === action.payload && item.count == 1) {
                        cart.splice(index, 1)
                    }
                })
                return cart
            }
        default:
            return state
    }
}


export default cartReducer