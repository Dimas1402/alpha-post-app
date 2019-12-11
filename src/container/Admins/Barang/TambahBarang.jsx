import React from 'react'
import TambahBarang from '../../../components/Admins/Barang/BarangMenu/TambahBarang/TambahBarang'
import { handleSubmitTambahBarang } from '../../../Service/Service'
import { connect } from 'react-redux'

class TambahBarangContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      product_name: '',
      brand: '',
      sell_price: '',
      buy_price: '',
      stock: '',
      category_id: ''
    }
  }

  handleChange = e => {
    e.preventDefault()
    // console.log(e.target)
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    )
  }

  handleSubmitTambahBarang = e => {
    e.preventDefault()
    this.props.handleSubmitTambahBarang({
      product_name: this.state.product_name,
      brand: this.state.brand,
      sell_price: this.state.sell_price,
      buy_price: this.state.buy_price,  
      stock: this.state.stock,
      category_id: this.state.category_id
    })
  }

  render () {
    return <TambahBarang handleChange={this.handleChange} state={this.state} submit={this.handleSubmitTambahBarang} />
  }
}
const mapStateToProps = state => {
  return {
    product_name: state.admin,
    brand: state.admin,
    sell_price: state.admin,
    buy_price: state.admin,
    stock: state.admin,
    category_id: state.admin
  }
}

export default connect(
  mapStateToProps,
  { handleSubmitTambahBarang }
)(TambahBarangContainer)
