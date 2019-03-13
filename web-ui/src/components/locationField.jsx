/* global google */
import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

class LocationField extends Component {
  state = {
    isEmpty : false,
    notExist : false
  };
  constructor(props) {
      super(props);
      this.autocompleteInput = React.createRef();
      this.autocomplete = null;
      this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }
    componentDidMount() {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.autocompleteInput.current,
        { types: ["geocode"] }
      );
      this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }
  
    handlePlaceChanged=()=> {
      const place = this.autocomplete.getPlace();
      if(place.address_components != null){
        this.setState({notExist:false})
      }
      else{
        this.setState({notExist:true})
      }
      this.props.onPlaceChanged(place.address_components);
    }

  

    handleOnChnage= () =>{
       this.setState({isEmpty: document.getElementById(this.props.idValue).value===''})
       this.setState({notExist:false})
       this.props.onPlaceChanged({})
    }


  render() { 
    
    return (   
      <div>   
      <Form.Control 
        onChange={this.handleOnChnage}
        placeholder={this.props.placeholder} 
        id={this.props.idValue} 
        ref={this.autocompleteInput} 
        className={this.state.isEmpty||this.state.notExist? "justify-content-md-center w-75  form-control is-invalid":"justify-content-md-center w-75"}
      />  
      <label htmlFor="this.props.idValue" id={this.props.idValue} style={{color: 'red'}} >
        {this.state.isEmpty? "The location should not be empty.":null}
        {this.state.notExist? "The location does not exist.":null}
      </label>
      </div>  
      );
 

  }
  
}
 
export default LocationField;