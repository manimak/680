import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GlobalNavBar from './globalNavBar';
import AutocompleteField from './fieldWithAutocomplete';
import DatePicker from 'react-date-picker';
import TravelRadio from './travelCheckRadio';
import CheckBoxFood from './foodCheckBox';
// import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.css';
// import "react-datepicker/dist/react-datepicker.css";

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

class FirstPageForm extends Component {
    state = { 
        isLoading: false,
        firstField : "",
        secondField : "",
        notExist : false,
        startDate: new Date(),
        endDate: new Date(),
        saveStartDate : "",
        saveEndDate : "",
        travelRadio : "",
        foods : [],
     };
     
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    };

    handleChangeStart(date){
        this.setState({
          startDate: date
        },()=>{
            if(this.state.startDate > this.state.endDate){
                this.setState({
                    endDate : this.state.startDate
                })
            }
        });

      }


  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
    }
    

    handleClick=()=> {

        
            var radio = document.getElementsByName('travelRadio');
            var radio_value;
            for(var i = 0; i < radio.length; i++){
                if(radio[i].checked){
                    radio_value = radio[i].id;
                }
            }
            var foods = document.getElementsByName('foodCheckBox');
            var selectedFood  = [];
            for(var j=0;j<foods.length;j++){
                if(foods[j].checked){
                    selectedFood.push(foods[j].id)
                }
            }
            if(
            document.getElementById("location1").className !== "justify-content-md-center w-75  form-control is-invalid form-control"
            && document.getElementById("location2").className !== "justify-content-md-center w-75  form-control is-invalid form-control"
            && document.getElementById("location1place").innerHTML!== "{} "
            && document.getElementById("location2place").innerHTML!=="{} "
            && this.state.startDate !== null
            && this.state.endDate !== null 
            && typeof radio_value !== "undefined" )
            
            {
                this.setState({firstField: this.state.firstField = document.getElementById("location1").value});
                this.setState({secondField: this.state.secondField = document.getElementById("location2").value});
                this.setState({notExist : false})
                this.setState({saveStartDate : this.state.startDate})
                this.setState({saveEndDate : this.state.endDate})
                this.setState({travelRadio: radio_value})
                this.setState({foods : selectedFood})
                window.location.assign('/result')
            }
            else{
                this.setState({notExist : true})
            }

            this.setState({ isLoading: true }, () => {
                simulateNetworkRequest().then(() => {
                    this.setState({ isLoading: false });
                });
            });
            
      };



    render() { 
        const todayDate = new Date();

        return ( 
            <div style={{overflow: 'auto'}} >
                <GlobalNavBar/>
                <h2 className="my-4" >Welcome to the Travel Planner</h2>
                <Form>
                    <Row>
                        <Col><AutocompleteField 
                            key={0}
                            idValue={"location1"}
                            placeholder={"Where from?"}
                            /> 
                        </Col>
                        <Col><AutocompleteField 
                            key={1} 
                            idValue={"location2"}
                            placeholder={"Where to?"}
                            /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center>
                                <label htmlFor="startDate" className={"pt-4"}>Depart:</label>
                            </center>
                            <DatePicker 
                                minDate={todayDate }
                                id={"startDate"}
                                className={"justify-content-md-center w-75"}
                                value={this.state.startDate}
                                onChange={this.handleChangeStart}
                            />
                        </Col>
                        <Col>
                            <center>
                                <label htmlFor="endDate" className={"pt-4"} >Return:</label>
                            </center>
                            <DatePicker
                                minDate={this.state.startDate > todayDate ? this.state.startDate:todayDate}
                                id={"endDate"}
                                className={"justify-content-md-center w-75"}
                                value={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                        </Col>
                    </Row>
  
                    <Row>
                        <TravelRadio></TravelRadio>
                    </Row>
                    <Row>
                        <CheckBoxFood></CheckBoxFood>
                    </Row>
                    
                        <Button 
                        id={"submitButton"}
                        variant="outline-primary" 
                        className="btn btn-secondary  mt-5"
                        disabled={this.state.isLoading}
                        onClick={!this.state.isLoading ? this.handleClick : null } 
                    >
                        {this.state.isLoading ? 'Loading…' : 'Submit'}
                    </Button>
             
                </Form>
                <label htmlFor="submitButton" style={{color: 'red'}} >
                        {this.state.notExist? "Please complete the form.":null}
                </label>
                
                <div id={"firstField"}>{this.state.notExist? null:this.state.firstField}</div>
                <div id={"secondField"}>{this.state.notExist? null:this.state.secondField}</div>
                <div id={"startDate"}>{this.state.notExist? null:this.state.saveStartDate.toLocaleString('us-GB', { timeZone: 'UTC' })}</div>
                <div id={"endDate"}>{this.state.notExist? null:this.state.saveEndDate.toLocaleString('us-GB', { timeZone: 'UTC' })}</div>
                <div id={"travelRadioResult"}>{this.state.notExist? null:this.state.travelRadio}</div>
                <div id={"foodsResult"}>{this.state.notExist? null:this.state.foods}</div>
                
            </div>
            );
    }
}
 
export default FirstPageForm;




// npm install react-date-picker