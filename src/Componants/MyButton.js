import React from 'react'

export const MyButton = ({ label, onClick, style }) => {
    return (
        <div>
            <button className={style} onClick={onClick}>{label}</button>
        </div>
    )
}
