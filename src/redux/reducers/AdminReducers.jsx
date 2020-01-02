import { SHOW_SIDEBAR, DATA_TAMBAH_BARANG, TAMBAH_BARANG_STATE, DATA_BARANG_JUAL} from '../types'

const initialstate = {
  showSidebar: false,
  dataBarang: [],
  dataBarangJual:[],
  loadingBarang : false
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

      case DATA_BARANG_JUAL:
        return{
          ...state,
          dataBarangJual: action.payload
        }
    default:
      return state
  }
}
