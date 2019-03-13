import React, { Component } from 'react';
import FirstPageForm from './components/firstPage';
import  SecondPageResult from './components/secondPage';
import {BrowserRouter, Route} from 'react-router-dom';
import gql from 'graphql-tag';
import {graphql , compose} from 'react-apollo';

// const UsersQuery = gql`
// {
//   users {
//     id
//     firstName
// 		lastName
//   }
// }
// `;
// const TravelInfoQuery = gql`
// {
//   travelInfos {
//     id
//     from
//     to
//     depart
//     ureturn
//     how
//     foods
//   }
// }
// `;



class App extends Component {
  render() {
    // const {data: {loading,users}} = this.props;
    // if (loading){
    //   return null;
    // }
    return (
      

      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <center>    
              <FirstPageForm/>
              {/* <div style={{display: 'flex'}}>

              <div style={{margin:'auto',width: 400}}>
                  {users.map(user =>
                    <div key={`${user.id}-todo-item`}>{user.firstName}  {user.lastName}</div>
                  )}  
              </div>
              </div> */}
            </center>
            )}/>
          <Route exact={true} path='/result' render={() => (
            <center>   
            <SecondPageResult/>
            </center>
          )}/>
        </div>  
        </BrowserRouter>  
    );
  }
}

// export default graphql(TravelInfoQuery)(App);

export default App;



// npm install --save react-router-dom