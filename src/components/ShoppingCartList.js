import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = ({ list ,onDeleteItem,onAddQuantity,onDecraseQuantity}) => {
    // console.log(list);
    return (
        <ul className="list-group list-group-flush">
            {list.map(o => <ShoppingCartItem 
                            item={o} 
                            key={o.id} 
                            onDeleteItem={onDeleteItem} 
                            onAddQuantity={onAddQuantity}
                            onDecraseQuantity={onDecraseQuantity}
                    />)}
        </ul>
    )
}

export default ShoppingCartList