import React from 'react'
import TambahBarang from '../../../components/Admins/Barang/BarangMenu/TambahBarang/TambahBarang'
import {
  handleSubmitTambahBarang,
  getDataTambahBarang
} from '../../../Service/Service'
import { connect } from 'react-redux'

class TambahBarangContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      nama_barang: '',
      jumlah_barang: '',
      harga_satuan: '',
      total: ''
    }
  }

  componentDidMount () {
    this.props.getDataTambahBarang()
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
      nama_barang: this.state.nama_barang,
      jumlah_barang: this.state.jumlah_barang,
      harga_satuan: this.state.harga_satuan,
      total: this.state.total
    })
    this.setState({
      nama_barang: '',
      jumlah_barang: '',
      harga_satuan: '',
      total: ''
    })
    // this.props.getDataTambahBarang();
  }

  render () {
    return (
      <TambahBarang
        handleChange={this.handleChange}
        state={this.state}
        submit={this.handleSubmitTambahBarang}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    nama_barang: state.admin,
    jumlah_barang: state.admin,
    harga_satuan: state.admin,
    total: state.admin
  }
}

export default connect(mapStateToProps, {
  handleSubmitTambahBarang,
  getDataTambahBarang
})(TambahBarangContainer)
