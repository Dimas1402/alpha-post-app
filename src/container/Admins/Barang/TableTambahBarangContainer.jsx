import React from 'react'
import TableTambahBarang from '../../../components/Admins/Barang/BarangMenu/TableTambahBarang/tableTambahBarang'
import {
  getDataTambahBarang,
  deleteDataBarang,
  editDataBarang
} from '../../../Service/Service'
import { connect } from 'react-redux'

class TableTambahBarangContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      _id: '',
      loadingBarang: true,
      nama_barang: '',
      jumlah_barang: '',
      harga_satuan: '',
      total: ''
    }
  }

  componentDidMount () {
    this.props.getDataTambahBarang()
  }

  //fungsi medapatkan id delete barang
  handleIdBarang = datas => {
    const idBarang = datas._id
    console.log('Data barang yang didapat', idBarang)
    this.setState(
      {
        _id: idBarang
      },
      () => console.log('id', this.state._id)
    )
  }

  //fungsi delete barang
  deleteBarangCon = e => {
    e.preventDefault()
    // const { idBarang } = this.statex x
    this.props.deleteDataBarang({
      _id: this.state._id
    })
  }

  //fungsi input edit
  handleChangeEdit = e => {
    e.preventDefault()
    // console.log(e.target)
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    )
  }

  //fungsi edit
  handleDataBarang = datas => {
    const dataBarang = datas
    console.log(dataBarang)
    this.setState({
      _id:datas._id,
      nama_barang: datas.nama_barang,
      jumlah_barang: datas.jumlah_barang,
      harga_satuan: datas.harga_satuan,
      total: datas.total
    })
  }

  //fungsi edit ke server
  editDataBarang = e => {
    e.preventDefault()
    this.props.editDataBarang({
      _id: this.state._id,
      nama_barang: this.state.nama_barang,
      jumlah_barang: this.state.jumlah_barang,
      harga_satuan: this.state.harga_satuan,
      total: this.state.total
    })
    // this.props.getDataTambahBarang();
  }

  render () {
    const { dataBarang } = this.props.data

    return (
      <TableTambahBarang
        dataBarang={dataBarang}
        handleDataBarang={this.handleDataBarang}
        idBarang={this.handleIdBarang}
        deleteBarangCon={this.deleteBarangCon}
        handleChangeEdit={this.handleChangeEdit}
        state={this.state}
        dataEditbarang={this.editDataBarang}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.admin,
    loadingBarang: state.loadingBarang
  }
}

export default connect(mapStateToProps, {
  getDataTambahBarang,
  deleteDataBarang,
  editDataBarang
})(TableTambahBarangContainer)
