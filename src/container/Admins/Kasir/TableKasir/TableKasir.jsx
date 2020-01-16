import React from 'react'
import TableKasir from '../../../../components/Admins/Kasir/TableKasir/TableKasir'
import { connect } from 'react-redux'
import { getAkunKasir, deleteAkunKasir, editAkunKasir } from '../../../../Service/Service'

class TableKasirContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      foto: '',
      img: '',
      username: '',
      email: '',
      telp: '',
      password: '',
      _id:"",
      kasir:""
    }
  }

  componentDidMount () {
    this.props.getAkunKasir()
  }

  handleShowImage = res => {
    const foto = res.foto
    console.log(res.foto)
    this.setState({
      foto: foto
    })
  }

  getDataKasir = (res,index) => {
    this.setState({
      _id: res._id,
      username: res.username,
      email: res.email,
      telp: res.telp,
      password: res.password,
      foto: res.foto,
      index:index
    },() => console.log("get data kasitr",this.state))
  }
 getDataFotoKasir= e => {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        img: file,
        foto: reader.result
      })
    }

    reader.readAsDataURL(file)
  }
  handleChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDeleteDataKasir = e => {
    e.preventDefault();
    this.props.deleteAkunKasir({
      _id : this.state._id
    })
  }

handleChangeEditDataKasir = e => {
  e.preventDefault();
  this.props.editAkunKasir({
    _id: this.state._id,
    username: this.state.username,
    email: this.state.email,
    telp:this.state.telp,
    password: this.state.password,
    foto: this.state.foto,
    index: this.state.index
  })
}

  render () {
    const { dataKasir } = this.props.data
    return (
      <TableKasir
        getDataKasir={dataKasir}
        handleShowImage={this.handleShowImage}
        stateFoto={this.state.foto}
        dataEditKasir={this.getDataKasir}
        stateUsername={this.state.username}
        stateEmail={this.state.email}
        stateTelp={this.state.telp}
        statePassword={this.state.password}
        stateImg={this.state.foto}
        handleChangeText={this.handleChangeText}
        handleChangeFoto={this.getDataFotoKasir}
        handleDeleteDataKasir={this.handleDeleteDataKasir}
        handleEditAkunKasir={this.handleChangeEditDataKasir}
        

      />
    )
  }
}

const mapStateToProps = state => ({
  data: state.admin
})

export default connect(mapStateToProps, { getAkunKasir,  deleteAkunKasir , editAkunKasir})(TableKasirContainer)
