import { GoodsType, } from "../../components/types";


export enum actionTypes {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART_REMOVE_ITEM"
}


interface ICartAddItemPayload {
    product: GoodsType,
}
interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM
    payload: GoodsType
}
interface ICartItemRemove {
    type: actionTypes.CART_REMOVE_ITEM
    payload: string
}

export type TypeActionCart = ICartAddItem | ICartItemRemove