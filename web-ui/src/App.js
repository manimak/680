import React, { Component } from 'react';
import FirstPageForm from './components/firstPage';
import  SecondPageResult from './components/secondPage';
import {BrowserRouter, Route} from 'react-router-dom';

// import SearchBarComp from './components/searchField';
// import gql from 'graphql-tag';
// import {graphql} from 'react-apollo';
// import Paper from '@material-ui/core/Paper';

// const UsersQuery = gql`
// {
//   users {
//     id
//     firstName
// 		lastName
//   }
// }
// `;



class App extends Component {
  render() {
    // const {data: {loading, users}} = this.props;
    // if (loading){
    //   return null;
    // }
    return (
      
      // <div style={{display: 'flex'}}>

      //     <div style={{margin:'auto',width: 400}}>
      //       <Paper elevation = {1}>
      //         {users.map(user =>
      //           <div key={`${user.id}-todo-item`}>{user.firstName}  {user.lastName}</div>
      //         )}  
      //       </Paper>
      //     </div>
      // </div>
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <center>    
              <FirstPageForm/>
            </center>
            )}/>
          <Route exact={true} path='/result' render={() => (
            <SecondPageResult/>
          )}/>
        </div>  
        </BrowserRouter>  
    );
  }
}

// export default graphql(UsersQuery)(App);

export default App;



// npm install --save react-router-dom