import React from 'react'
import BarangDijual from '../../../components/Admins/Barang/BarangMenu/BarangDijual/BarangDijual'
import { getDataTambahBarang, kirimBarangDiJual } from '../../../Service/Service'
import { connect } from 'react-redux'

class BarangJualContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      nama_barang_jual:"",
      jumlah_barang:"",
      stock:"",
      harga_satuan:"",
      total:""
    }
  }

  componentDidMount () {
    this.props.getDataTambahBarang()
    // const {dataBarang} = this.props.data
    // console.log("data Barang",dataBarang)

  }
  

    
  handleChangeBarangDiJual = e => {
    e.preventDefault()
    // console.log(e.target)
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log('barang jal ccontaineru',this.state)
    )
  }

  handleSubmitJualBarang = e => {
    e.preventDefault()
    this.props.kirimBarangDiJual({
      nama_barang_jual: this.state.nama_barang_jual,
      jumlah_barang: this.state.jumlah_barang,
      harga_satuan: this.state.harga_satuan,
      total: this.state.jumlah_barang * this.state.harga_satuan
    })

    this.setState({
      nama_barang_jual:"",
      jumlah_barang:"",
      harga_satuan:"",
      total:""
    })
  }



  render () {
    const { dataBarang } = this.props.data
    return (
      <BarangDijual
        dataBarangOptions={dataBarang}
        getDataClick={this.getDataClick}
        kirimBarang={this.handleSubmitJualBarang}
        handleChange={this.handleChangeBarangDiJual}
        stateNama={this.state.nama_barang_jual}
        stateStock={this.stat}
        stateJumlah={this.state.jumlah_barang}
        stateHarga={this.state.harga_satuan}
      
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.admin,
  
  }
}

export default connect(mapStateToProps, { getDataTambahBarang, kirimBarangDiJual })(
  BarangJualContainer
)
