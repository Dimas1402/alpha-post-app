import React from "react";
import TambahKasir from "../../../../components/Admins/Kasir/TambahKasir/TambahKasir";

class TambahKasirContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
      imagePreviewUrl:""
    };
  }

  handleChange = e => {
    e.preventDefault(); 
    let reader = new FileReader();
    let file = e.target.files[0];
 
    reader.onloadend = () => {
      this.setState({
        img: file,
        imagePreviewUrl: reader.result
      });
    }
 
   reader.readAsDataURL(file)
  };

  render() {
    return <TambahKasir handleChange={this.handleChange} stateImg={this.state.imagePreviewUrl} />;
  }
}

export default TambahKasirContainer;
