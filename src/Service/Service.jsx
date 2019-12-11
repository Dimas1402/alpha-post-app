import Axios from 'axios'

export const handleSubmitTambahBarang = e => dispatch => {
    const product_name = e.product_name
    const brand = e.brand
    const sell_price = e.sell_price
    const buy_price = e.buy_price
    const stock = e.stock
    const category_id = e.category_id

    Axios.post(
        'https://peaceful-savannah-85788.herokuapp.com/api/product',
        {product_name,brand,sell_price,buy_price,stock,category_id     }
    ).then(res => {
        console.log(res)
    })
    }
