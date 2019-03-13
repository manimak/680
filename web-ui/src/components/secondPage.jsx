import React, { Component } from 'react';
import GlobalNavBar from './globalNavBar';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import MapContainer from './googleRoute';



const TravelInfoQuery = gql`
{
  travelInfos {
    id
    from
    to
    depart
    ureturn
    how
    foods
  }
}
`;
class SecondPageResult extends Component {
    state = {  }
    render() { 
        const {data: {loading,travelInfos}} = this.props;
        if (loading){
          return null;
        }
        return ( 
        <div>
            <GlobalNavBar/> 
            <center>
            
                {/* <div style={{margin:'auto',width: 400}}>
                    {travelInfos[travelInfos.length-1].from}
                    ,
                    {travelInfos[travelInfos.length-1].to}
                    ,
                    {travelInfos[travelInfos.length-1].depart}
                    ,
                    {travelInfos[travelInfos.length-1].ureturn}
                    ,
                    {travelInfos[travelInfos.length-1].how}
                    ,
                    {travelInfos[travelInfos.length-1].foods}
                     
                </div> */}
                <pre>{JSON.stringify(travelInfos[travelInfos.length-1],null, 2)} </pre>
                <MapContainer/>
            </center>
        </div>
        );
    }
}
 
export default graphql(TravelInfoQuery) (SecondPageResult);