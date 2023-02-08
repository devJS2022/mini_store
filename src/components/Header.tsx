import {FC} from 'react';
import { NavLink} from 'react-router-dom';
import { Products } from './Products'
import { Num } from './Num'


interface IProps {
    length: number
}

export const Header: FC<IProps> = ({length}: IProps) => {
    
    return(
        <header>
            <a href='/' className="header__logo">Mini Store</a>
            <ul className="header__list">
                    <li className="header__item">
                        <NavLink to="/" className="header__link">Товары</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/basket" className="header__link" >Корзина</NavLink>
                        {length ? <Num length={length} /> : ""}
                    </li>
            </ul>
        </header>
    )
}