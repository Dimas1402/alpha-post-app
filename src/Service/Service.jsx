import Axios from 'axios'
import { DATA_TAMBAH_BARANG, TAMBAH_BARANG_STATE, DATA_BARANG_JUAL } from '../redux/types/index'

export const handleSubmitTambahBarang = e => dispatch => {
  const nama_barang = e.nama_barang
  const jumlah_barang = e.jumlah_barang
  const harga_satuan = e.harga_satuan
  const total = e.total

  dispatch({
    type: TAMBAH_BARANG_STATE,
    payload: {
      nama_barang,
      jumlah_barang,
      harga_satuan,
      total
    }
  })
  // Api Tambah Barang
  Axios.post('http://localhost:3005/api/alpha/create', {
    nama_barang,
    jumlah_barang,
    harga_satuan,
    total
  })
    .then(res => {
      console.log(res.data)

      window.location.reload()
    })
    .catch(err => {
      console.log('data tidak masuk', err)
    })
}

export const getDataTambahBarang = () => dispatch => {
  //Api get data barang
  Axios.get('http://localhost:3005/api/alpha/getData').then(res => {
    console.log('get data', res.data.result)

    dispatch({
      type: DATA_TAMBAH_BARANG,
      payload: res.data.result
    })
  })
}

export const deleteDataBarang = e => dispatch => {
  const _id = {
    _id: e._id
  }
  //api delete barang
  Axios.delete('http://localhost:3005/api/alpha/delete', { data: _id })
    .then(res => {
      console.log('res delete', res)
      window.location.reload()
    })
    .catch(err => {
      console.log('err', err)
    })
}

export const editDataBarang = e => dispatch => {
  const _id = e._id
  const nama_barang = e.nama_barang
  const jumlah_barang = e.jumlah_barang
  const harga_satuan = e.harga_satuan
  const total = e.total
  //api update data barang
  Axios.put('http://localhost:3005/api/alpha/update', {
    _id,
    nama_barang,
    jumlah_barang,
    harga_satuan,
    total
  })
    .then(res => {
      console.log(res)
      window.location.reload()
      // window.location.reload();
    })
    .catch(err => {
      console.log('err', err)
    })
}

export const kirimBarangDiJual = e => dispatch => {
  const nama_barang_jual = e.nama_barang_jual
  const jumlah_barang = e.jumlah_barang
  const harga_satuan = e.harga_satuan
  const total = e.total
  //apijual data barang
  Axios.post('http://localhost:3005/api/alphajual/create', {
    nama_barang_jual,
    jumlah_barang,
    harga_satuan,
    total
  }).then(res => {
    console.log(res)
  })
}


export const getDataJualBarang = e => dispatch => {
  Axios.get('http://localhost:3005/api/alphajual/get').then(res => {
    console.log("data jual",res.data.result[0])
    dispatch({
      type: DATA_BARANG_JUAL,
      payload: res.data.result
    })
  })
}

