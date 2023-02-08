import {FC} from 'react'
import { IProduct } from '../interface/IProduct'
import { BasketHeader } from './BasketHeader'
import { BasketItem } from './BasketItem'

interface IProps {
    basket: IProduct[] 
    delBasket: (id:number) => void
    sum: number
}

export const Basket: FC<IProps> = ({basket, delBasket, sum}: IProps) => {
    return (
        <>
            {basket.length ? <ul className='basket__list _container'>
                <BasketHeader sum={sum}/>
                {   
                    basket.map(item => {
                    return <BasketItem item={item} delBasket={delBasket} />
                })
                }
            </ul> : <h1 className='basket__title'>В корзине пусто...</h1>}
        </>
    )
}