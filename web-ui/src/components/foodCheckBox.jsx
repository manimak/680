import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


class CheckBoxFood extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ml-3">
            <Row>
                <h5 className="mt-5 ml-5">What kind of food or/and drink do you like: </h5>
            </Row> 
            <Row>
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Mexican"
                name="foodCheckBox"
                id="Mexican"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="American"
                name="foodCheckBox"
                id="American"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Japanese"
                name="foodCheckBox"
                id="Japanese"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Italian"
                name="foodCheckBox"
                id="Italian"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Chinese"
                name="foodCheckBox"
                id="Chinese"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Mediterranean"
                name="foodCheckBox"
                id="Mediterranean"
                />
                
            </Row>
            <Row>
            <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Sandwiches"
                name="foodCheckBox"
                id="Sandwiches"
                />
                <Form.Check
                className=" pl-4 ml-5 mt-4"
                type="checkbox"
                label="Fast Food"
                name="foodCheckBox"
                id="Fast Food"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Buffets"
                name="foodCheckBox"
                id="Buffets"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Cafes"
                name="foodCheckBox"
                id="Cafes"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Vegan"
                name="foodCheckBox"
                id="Vegan"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Breakfast & Brunch"
                name="foodCheckBox"
                id="Breakfast & Brunch"
                />
            </Row>
            <Row>
            <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Street Vendors"
                name="foodCheckBox"
                id="Street Vendors"
                />
                <Form.Check
                className=" pl-4 ml-5 mt-4"
                type="checkbox"
                label="Bars"
                name="foodCheckBox"
                id="Bars"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Pizza"
                name="foodCheckBox"
                id="Pizza"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Desserts"
                name="foodCheckBox"
                id="Desserts"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Kosher"
                name="foodCheckBox"
                id="Kosher"
                />
                <Form.Check
                className=" pl-5 ml-5 mt-4"
                type="checkbox"
                label="Ice Cream & Frozen Yogurt"
                name="foodCheckBox"
                id="Ice Cream & Frozen Yogurt"
                />
            </Row>


            </div>
         );
    }
}
 
export default CheckBoxFood;