export interface Product {
    image: string,
    id: string,
    title: string, 
    description: string,
    price: number,
    discount: number,
    policytax: string,
    stock: number,
    imgs: string[], 
    colors: string[],
    shippingcosts: string,
    shippingtime: string,
    onsale: boolean,
}