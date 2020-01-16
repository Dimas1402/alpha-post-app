import Axios from 'axios'
import {
  DATA_TAMBAH_BARANG,
  TAMBAH_BARANG_STATE,
  HAPUS_BARANG,
  UPDATE_DATA_BARANG,
  DATA_BARANG_JUAL,
  KIRIM_BARANG_DIJUAL,
  UPDATE_BARANG_DIJUAL,
  DELETE_DATA_JUAL_BARANG,
  DELETE_ONE,
  DELETE_TWO,
  ALERTS_ONE,
  ALERTS_TWO,
  DATA_KASIR,
  GET_DATA_KASIR,
  DELETE_DATA_KASIR,
  EDIT_DATA_KASIR
} from '../redux/types/index'

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

      // window.location.reload()
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
      dispatch({
        type: HAPUS_BARANG,
        payload: _id
      })
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
  const index = e.index
  const result = {
    _id: e._id,
    nama_barang: e.nama_barang,
    jumlah_barang: e.jumlah_barang,
    harga_satuan: e.harga_satuan,
    total: e.total
  }
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
      dispatch({
        type: UPDATE_DATA_BARANG,
        payload: result,
        index: index
      })
      // window.location.reload();
    })
    .catch(err => {
      console.log('err', err)
    })
}

export const kirimBarangDiJual = e => dispatch => {
  dispatch({
    type: ALERTS_ONE
  })
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
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: KIRIM_BARANG_DIJUAL,
        payload: res.data.result
      })

      // window.location.reload()
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: ALERTS_TWO
      })
    })
}

export const getDataJualBarang = e => dispatch => {
  //api get data jual barang
  Axios.get('http://localhost:3005/api/alphajual/get').then(res => {
    console.log('data jual', res.data)
    dispatch({
      type: DATA_BARANG_JUAL,
      payload: res.data.result
    })
  })
}

export const deleteDataJualBarang = e => dispatch => {
  dispatch({
    type: DELETE_ONE
  })
  const _id = {
    _id: e._id
  }
  //api delete data jual barang
  Axios.delete('http://localhost:3005/api/alphajual/delete', {
    data: _id
  }).then(res => {
    console.log(res)
    dispatch({
      type: DELETE_DATA_JUAL_BARANG,
      payload: _id
    })
    dispatch({
      type: DELETE_TWO
    })
  })
}

export const updateDataJualBarang = e => dispatch => {
  const _id = e._id
  const nama_barang_jual = e.nama_barang_jual
  const jumlah_barang = e.jumlah_barang
  const harga_satuan = e.harga_satuan
  const total = e.total
  const index = e.index
  const result = {
    _id: e._id,
    nama_barang_jual: e.nama_barang_jual,
    jumlah_barang: e.jumlah_barang,
    harga_satuan: e.harga_satuan,
    total: e.total
  }

  console.log('action', index)
  Axios.put('http://localhost:3005/api/alphajual/update', {
    _id,
    nama_barang_jual,
    jumlah_barang,
    harga_satuan,
    total
  }).then(res => {
    dispatch({
      type: UPDATE_BARANG_DIJUAL,
      payload: result,
      index: index
    })
    // window.location.reload()
    console.log(res)
  })
}

//kasir
export const createAkunKasir = e => dispatch => {
  const dataInput = {
    username: e.username,
    email: e.email,
    telp: e.telp,
    password: e.password,
    foto: e.foto
  }
  //api kirim data kasir
  Axios.post('http://localhost:3005/api/alphakasir/post', dataInput).then(
    res => {
      console.log(res)
      dispatch({
        type: DATA_KASIR,
        payload: res.data.result
      })
    }
  )
}

//api get data kasir
export const getAkunKasir = e => dispatch => {
  Axios.get('http://localhost:3005/api/alphakasir/get').then(res => {
    console.log('data kasir', res.data.result)
    dispatch({
      type: GET_DATA_KASIR,
      payload: res.data.result
    })
  })
}

//api delete akun kasir
export const deleteAkunKasir = e => dispatch => {
  const _id = {
    _id: e._id
  }
  Axios.delete('http://localhost:3005/api/alphakasir/delete', {
    data: _id
  }).then(res => {
    console.log(res)
    dispatch({
      type: DELETE_DATA_KASIR,
      payload: _id
    })
  })
}

export const editAkunKasir = e => dispatch => {
  const _id = e._id
  const username = e.username
  const email = e.email
  const telp = e.telp
  const password = e.password
  const foto = e.foto
  const dataInputKasir = {
    _id: e._id,
    username: e.username,
    email: e.email,
    telp: e.telp,
    password: e.password,
    foto: e.foto
  }
  const index = e.index
  Axios.put('http://localhost:3005/api/alphakasir/update', {
    _id,
    username,
    email,
    telp,
    password,
    foto
  }).then(res => {
    console.log(res)
    dispatch({
      type:EDIT_DATA_KASIR,
      payload:dataInputKasir,
      index:index
    })
  })
}
