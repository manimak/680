import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
class TravelRadio extends Component {
    state = {  }
    render() { 
        return (  
        <div className="ml-3">
        <Row>
        <h5 className="mt-5 ml-5">How will you be going there: </h5>
        </Row>            
        <Row>
                
            <Form.Check
            className=" pl-5 ml-5 mt-3"
            type="radio"
            label="Plane"
            name="travelRadio"
            id="Plane"
            />
            <Form.Check
            className=" pl-5 ml-5 mt-3"
            type="radio"
            label="Car"
            name="travelRadio"
            id="Car"
            />
            <Form.Check
            className=" pl-5 ml-5 mt-3"
            type="radio"
            label="Transit"
            name="travelRadio"
            id="Transit"
            />
           <Form.Check
            className=" pl-5 ml-5 mt-3"
            type="radio"
            label="Other"
            name="travelRadio"
            id="Other"
            />
            
        </Row> 
        </div>
        );
    }
}
 
export default TravelRadio;