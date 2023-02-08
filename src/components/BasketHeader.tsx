import React from 'react' 

interface IProps {
    sum: number
}

export const BasketHeader: React.FC<IProps> = (props: IProps) => {
    return(
        <div className='basket__header'>
            <div className="header__sum">Сумма покупок: {props.sum.toFixed(2)}</div>
        </div>
    )
}