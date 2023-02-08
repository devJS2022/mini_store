import {FC, useState, useEffect} from 'react';
import axios from 'axios';
import { IProduct } from '../interface/IProduct';

interface IProps {
    addBasket(id:number, products: IProduct[]): void
}



export const Products: FC<IProps> = ({addBasket}: IProps) => {
    const [products, setProducts] = useState<IProduct[]>([])

    const getProduct = async () => {
        const getServerProduct = await axios.get('https://fakestoreapi.com/products')
        setProducts(getServerProduct.data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <>
            <ul className="products__list _container">
                {
                    products.map(item => {
                        return(
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
                                    onClick={() => addBasket(item.id, products)}
                                >Buy product</button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </>
    )
}