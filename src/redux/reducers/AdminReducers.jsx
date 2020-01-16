import {
  SHOW_SIDEBAR,
  DATA_TAMBAH_BARANG,
  HAPUS_BARANG,
  UPDATE_DATA_BARANG,
  TAMBAH_BARANG_STATE,
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
} from '../types'

const initialstate = {
  showSidebar: false,
  dataBarang: [],
  dataBarangJual: [],
  loadingBarang: false,
  deleteJualBarang: false,
  alertsJualBarang: false,
  dataKasir: []
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar
      }
    case DATA_TAMBAH_BARANG:
      return {
        ...state,
        dataBarang: action.payload
      }

    case TAMBAH_BARANG_STATE:
      return { ...state, dataBarang: [...state.dataBarang, action.payload] }

    case HAPUS_BARANG:
      const newDataDelete = state.dataBarang.filter(
        hapus => hapus._id !== action.payload._id
      )
      return {
        ...state,
        dataBarang: newDataDelete
      }

    case UPDATE_DATA_BARANG:
      const newData = state.dataBarang[action.index]
      console.log('newstate', newData)
      console.log('index + 1', ...state.dataBarang.slice(action.index + 1))
      const newDataObj = {
        ...newData[action.payload],
        _id: action.payload._id,
        nama_barang: action.payload.nama_barang,
        jumlah_barang: action.payload.jumlah_barang,
        harga_satuan: action.payload.harga_satuan,
        total: action.payload.total
      }
      return {
        ...state,
        dataBarang: [
          ...state.dataBarang.slice(0, action.index),
          newDataObj,
          ...state.dataBarang.slice(action.index + 1)
        ]
      }

    case KIRIM_BARANG_DIJUAL:
      return {
        ...state,
        dataBarangJual: [...state.dataBarangJual, action.payload]
      }

    // eslint-disable-next-line no-duplicate-case
    case UPDATE_BARANG_DIJUAL:
      const newState = state.dataBarangJual[action.index]
      console.log('newstate', newState)
      console.log('index + 1', ...state.dataBarangJual.slice(action.index + 1))
      const newtObj = {
        ...newState[action.payload],
        _id: action.payload._id,
        nama_barang_jual: action.payload.nama_barang_jual,
        jumlah_barang: action.payload.jumlah_barang,
        harga_satuan: action.payload.harga_satuan,
        total: action.payload.total
      }

      return {
        ...state,
        dataBarangJual: [
          ...state.dataBarangJual.slice(0, action.index),
          newtObj,
          ...state.dataBarangJual.slice(action.index + 1)
        ]
      }
    case DELETE_DATA_JUAL_BARANG:
      const newArray = state.dataBarangJual.filter(
        hapus => hapus._id !== action.payload._id
      )

      return {
        ...state,
        dataBarangJual: newArray
      }
    case DATA_BARANG_JUAL:
      return {
        ...state,
        dataBarangJual: action.payload
      }

    case DELETE_ONE:
      return {
        ...state,
        deleteJualBarang: false
      }

    case DELETE_TWO:
      return {
        ...state,
        deleteJualBarang: true
      }

    case ALERTS_ONE:
      return {
        ...state,
        alertsJualBarang: false
      }

    case ALERTS_TWO:
      return {
        ...state,
        alertsJualBarang: true
      }

    case DATA_KASIR:
      return {
        ...state,
        dataKasir: [...state.dataKasir, action.payload]
      }

    case GET_DATA_KASIR:
      return {
        ...state,
        dataKasir: action.payload
      }
    case DELETE_DATA_KASIR:
      const newDataKasir = state.dataKasir.filter(
        hapus => hapus._id !== action.payload._id
      )
      return {
        ...state,
        dataKasir: newDataKasir
      }

    case EDIT_DATA_KASIR:
      const newStateDataKasir = state.dataKasir[action.index]
      console.log('newStateDataKasir', newStateDataKasir)
      console.log('index + 1', ...state.dataKasir.slice(action.index + 1))
      const newDataStateKasir = {
        ...newStateDataKasir[action.payload],
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        telp: action.payload.telp,
        foto: action.payload.foto
      }

      return {
        ...state,
        dataKasir: [
          ...state.dataKasir.slice(0, action.index),
          newDataStateKasir,
          ...state.dataKasir.slice(action.index + 1)
        ]
      }

    default:
      return state
  }
}
