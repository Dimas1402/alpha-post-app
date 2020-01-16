import React from 'react'
import ContentHasilPenjualan from '../../../components/Admins/HasilPenjualan/HasilPenjulanMenu/ContentHasilPenjualan'
import { connect } from 'react-redux'
import { getDataJualBarang } from '../../../Service/Service'

class ContentHasilPenjualanContainer extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getDataJualBarang()
  }

  render () {
    const { dataBarangJual } = this.props.data
    console.log('tesdst')

    return <ContentHasilPenjualan dataBarang={dataBarangJual} />
  }
}

const mapStateToProps = state => ({
  data: state.admin
})

export default connect(mapStateToProps, { getDataJualBarang })(
  ContentHasilPenjualanContainer
)
