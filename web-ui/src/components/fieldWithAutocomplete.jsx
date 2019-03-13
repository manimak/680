import React, { Component } from 'react';
import LocationField from './locationField';
import 'bootstrap/dist/css/bootstrap.css';

class AutocompleteField extends Component {
    state = {
        place: {},
      };
    
      savePlaceDetails(place) {
        this.setState({ place }) 
      };
    
    render() { 
      const id = this.props.idValue + "place";
      const AddressDetails = props => {
          return (
              <div>
                <p hidden>
                <pre id={id}
                >{JSON.stringify(props.place)} </pre>
                </p>
              </div>
              
          )
        };
      return ( 
        <div>
            <LocationField 
                  key={0}
                  idValue={this.props.idValue}
                  placeholder={this.props.placeholder}
                  onPlaceChanged={this.savePlaceDetails.bind(this)}
              /> 


          
          <AddressDetails  place={this.state.place} />
      </div> 
      );
    }
}
 
export default AutocompleteField;