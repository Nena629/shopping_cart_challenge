import React, { useEffect, useState } from 'react'
import ShoppingCartList from './ShoppingCartList'
import SummaryForm from './SummaryForm'


const LIST_ORDERS = [
    {
        id: 1,
        title: "Cotton-T-Shirt 1",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 20,
        quantity: 1,
        categoryName: "Shirt"
    },
    {
        id: 2,
        title: "Cotton-T-Shirt 2",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 10,
        quantity: 1,
        categoryName: "Shirt"
    },
    {
        id: 3,
        title: "Cotton-T-Shirt 3",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 13,
        quantity: 1,
        categoryName: "Shirt"
    }
]

function ShoppingCart() {

    const [orders, setOrders] = useState(LIST_ORDERS)
    const [priceItems, setPriceItems] = useState()

    // calcul total price , when component did mount
    useEffect(() => {

        let priceItems = 0
        orders.forEach(o => priceItems += o.quantity * o.price)
        setPriceItems(priceItems) 

    },[])

    // Functions

    const deleteOrderById = (orderId) => {

        //confirmation de l'utilisateur
        if (!window.confirm("Are you sure ?"))
            return

        //Get a copy from the current list 
        let newOrders = [...orders]
        //change the copy : delete the seleted element
        newOrders = newOrders.filter((o) => o.id !== orderId)
      //Mise à jour du state
        setOrders([...newOrders])
    }

    //Add the quantity
    const addQuantity = (orderId) => {

        //get a copy from the current list 
        let newOrders = [...orders]
        let newPriceItems = 0;
        //change the copy : delete the seleted element
        newOrders.forEach((o) => {
            if (o.id === orderId) {
                o.quantity++;
                newPriceItems = priceItems + o.price
            }

        })
    //Mise à jour du state
        setOrders([...newOrders])
        setPriceItems(newPriceItems)
    }

    //Minus quantity
    const decraseQuantity = (orderId) => {

        //get a copy from the current list 
        let newOrders = [...orders]
        let newPriceItems = 0;
        //change the copy : delete the seleted element
        newOrders.forEach((o) => {
            if (o.id === orderId && o.quantity > 1) {
                o.quantity--
                newPriceItems = priceItems - o.price
            }
            
        })
        //Mise à jour du state
        setOrders([...newOrders])
        setPriceItems(newPriceItems === 0 ? priceItems : newPriceItems)
    }

    // PARTIE RENDER
    return (
        <>
            <article className="shopping-cart-list flex-grow-1 p-5 bg-white ">

                {/* the parent of h1 and input search  */}
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-capitalize">shopping cart</h1>
                    <div className="input-group w-25">
                        <input type="text" className="form-control" placeholder="Filter By Title" />
                        <div className="input-group-text">
                            <i className="fas fa-search" />
                        </div>
                    </div>
                </div>


                <hr color="#868A93" />
                {/* body of the shopping cart */}
                <ShoppingCartList
                    list={orders}
                    onDeleteItem={deleteOrderById}
                    onAddQuantity={addQuantity}
                    onDecraseQuantity={decraseQuantity}
                />

            </article>
            {/* Summary */}
            <SummaryForm itemsPrice={priceItems} nbItems={orders.length} />
        </>
    )


}

export default ShoppingCart