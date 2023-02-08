import React from 'react'
import { IProduct } from '../interface/IProduct'

interface IProps {
    item: IProduct
    delBasket: (id:number) => void
}

export const BasketItem: React.FC<IProps> = ({item, delBasket}: IProps) => {
    return (
            <li className="products__item" key={item.id}>
                <div className="products__img">
                    <img src={item.image} alt="img" />
                </div>
                <div className="products__text">
                    <h3 className="products__title">{item.title}</h3>
                    <p className="products__decription">{item.description}</p>
                </div>
                <div className="products__price-btn">
                    <div className="products__price">Цена: {item.price}$</div>
                    <button 
                        type='button' 
                        className="products__buy"
                        onClick={() => delBasket(item.id)}
                    >Delete product</button>
                </div>
            </li>
     )
}