import React from 'react'

interface IProps {
    length: number
}

export const Num = ({length}: IProps) => {
    return (
        <span className='header__basket'>{length}</span>
    )
}