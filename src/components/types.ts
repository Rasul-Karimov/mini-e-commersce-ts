
export interface GoodsType {
    _id?: string,
    name: string,
    imagePath: string,
    price: number,
}

export interface IcartItem extends GoodsType {
    count: number
}