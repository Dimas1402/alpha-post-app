import React from 'react'
import TableBarangDijual from '../../../components/Admins/Barang/BarangMenu/TableBarangDijual/TableBarangDijual'
import { getDataJualBarang } from '../../../Service/Service'
import { connect } from 'react-redux'

class TableBarangDiJualContainer extends React.Component {
    constructor () {
        super()
        this.state = {}
    }
    componentDidMount () {
        this.props.getDataJualBarang()
    }

    render () {
        const { dataBarangJual } = this.props.data
        return <TableBarangDijual dataJualBarang={dataBarangJual} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.admin
    }
}

export default connect(mapStateToProps, { getDataJualBarang })(
    TableBarangDiJualContainer
)
