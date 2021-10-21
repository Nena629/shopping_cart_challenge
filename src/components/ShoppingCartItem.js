import React from 'react'

const ShoppingCartItem = ({ item, onDeleteItem, onAddQuantity, onDecraseQuantity }) => {


    return (

        <li className="list-group-item d-flex align-items-center justify-content-between p-0 mb-2 pb-3 pt-3">

            {/* left part  with products*/}
            <div className="d-flex align-items-center">
                <img src={item.thumbnail} alt={item.title} width={90} height={90} />
                <p className="m-2">
                    <span style={{ color: '#868A93' }}>{item.categoryName}</span>
                    <br />
                    <span>{item.title}</span>
                </p>
            </div>


            {/* middle part manage quantity */}
            <div className="d-flex justify-content-center align-items-center" style={{ width: 'fit-content' }}>
                
                <button type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => onDecraseQuantity(item.id)}>-</button>
                
                <input type="number" className="form-control w-25 text-center m-1" value={item.quantity} />
                
                <button type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => onAddQuantity(item.id)}>+</button>
            </div>

            {/* partie prix */}
            <p className="m-0">$ {item.price}</p>
            
            {/* delete button */}
            <button className="btn btn-danger"
                onClick={() => onDeleteItem(item.id)}>
                <i className="fas fa-trash-alt" />
            </button>

            
        </li>
    )
}

export default ShoppingCartItem