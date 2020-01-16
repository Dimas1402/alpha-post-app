import React from 'react'
import TableBarangDijual from '../../../components/Admins/Barang/BarangMenu/TableBarangDijual/TableBarangDijual'
import {
  getDataJualBarang,
  deleteDataJualBarang,
  getDataTambahBarang,
  updateDataJualBarang
} from '../../../Service/Service'
import { connect } from 'react-redux'

class TableBarangDiJualContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      _id: null,
      data: [],
      nama_barang_jual: '',
      jumlah_barang: null,
      harga_satuan: null,
      total: null,
      index: 0
    }
  }
  componentDidMount () {
    this.props.getDataJualBarang()
    this.props.getDataTambahBarang()
  }

  handleChangeGetIdDelete = res => {
    const _id = res._id
    this.setState(
      {
        _id: _id
      },
      () => console.log('id delete', this.state._id)
    )
  }

  handleChangeGetDataJJualBarang = (res, index) => {
    const data = res
    const id = res._id
    const namabarang = res.nama_barang_jual
    const jumlahbarang = res.jumlah_barang
    const hargasatuan = res.harga_satuan
    this.setState(
      {
        data: data,
        _id: id,
        nama_barang_jual: namabarang,
        jumlah_barang: jumlahbarang,
        harga_satuan: hargasatuan, 
        index: index
      },
      () => console.log('data jual', this.state)
    )
  }

  handleChangeDeleteDataJualBarang = e => {
    e.preventDefault()
    this.props.deleteDataJualBarang({
      _id: this.state._id
    })
    this.props.getDataJualBarang()
  }

  handleChangeEditDataJualBarang = e => {
    this.props.updateDataJualBarang({
      _id: this.state._id,
      nama_barang_jual: this.state.nama_barang_jual,
      jumlah_barang: this.state.jumlah_barang,
      harga_satuan: this.state.harga_satuan,
      total: this.state.jumlah_barang * this.state.harga_satuan,
      index: this.state.index
    })
  }

  onChange = e => {
    e.preventDefault()
    // console.log(e.target)
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    )
  }

  render () {
    const { dataBarangJual } = this.props.data
    const { dataBarang } = this.props.dataBarang
    return (
      <TableBarangDijual
        dataJualBarang={dataBarangJual}
        deleteBarangJual={this.handleChangeGetIdDelete}
        deleteBarang={this.handleChangeDeleteDataJualBarang}
        updateBarangJual={this.handleChangeGetDataJJualBarang}
        stateNamaBarang={this.state.nama_barang_jual}
        stateJumlahBarang={this.state.jumlah_barang}
        stateHargaSatuan={this.state.harga_satuan}
        onChange={this.onChange}
        dataBarang={dataBarang}
        editDataJualBarang={this.handleChangeEditDataJualBarang}
        deleteJualBarang={this.props.deleteJualBarang}
        alert={this.props.alertsJualBarang}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.admin,
    dataBarang: state.admin,
    deleteJualBarang: state.admin.deleteJualBarang,
    alertsJualBarang: state.admin.alertsJualBarang
  }
}

export default connect(mapStateToProps, {
  getDataJualBarang,
  deleteDataJualBarang,
  getDataTambahBarang,
  updateDataJualBarang
})(TableBarangDiJualContainer)
