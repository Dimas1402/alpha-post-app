import React from 'react'
import TambahKasir from '../../../../components/Admins/Kasir/TambahKasir/TambahKasir'
import { createAkunKasir, getAkunKasir } from '../../../../Service/Service'
import { connect } from 'react-redux'

class TambahKasirContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      img: '',
      foto: '',
      username: '',
      email: '',
      telp: '',
      password: '',
      
    }
  }

  componentDidMount(){
    this.props.getAkunKasir();
  }

  handleChangeInput = e => {
    e.preventDefault()
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    )
  }

  handleChange = e => {
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

  handleCreateKasir = e => {
    e.preventDefault()
    this.props.createAkunKasir({
      username:this.state.username,
      email : this.state.email,
      password:this.state.password,
      telp:this.state.telp,
      foto:this.state.foto
    })
    this.setState({
      foto: '',
      username: '',
      email: '',
      telp: '',
      password: ''
    })
   
  }

  render () {
    const {dataKasir} = this.props.data
    return (
      <TambahKasir
        handleChange={this.handleChange}
        stateImg={this.state.foto}
        stateImgs={this.state.file}
        change={this.handleChangeInput}
        stateusername={this.state.username}
        stateemail={this.state.email}
        statetelp={this.state.telp}
        statepassword={this.state.password}
        createKasir={this.handleCreateKasir}
        stateBase64={this.state.foto}
      />
    )
  }
}

const mapStateToProps = state => ({
  data : state.admin
})

export default connect(mapStateToProps,{createAkunKasir, getAkunKasir})(TambahKasirContainer)
