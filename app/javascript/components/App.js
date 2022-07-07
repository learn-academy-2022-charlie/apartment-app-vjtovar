import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments : []
    }
  }
  componentDidMount(){
    this.readApartments()
  }
  readApartments = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log(errors))
  }

  createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readApartments())
    .catch(errors => console.log("Apartment read errors:", errors))
  }
  render() {
    const { current_user }
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" render={Home} />
            <Route path="/apartmentindex" render={props => <ApartmentIndex apartments={this.state.apartments}/> }/>
            <Route path="/myapartments" render={props => {
              let myApartments = this.state.apartments.filter(apart => apart.user_id === current_user.id)
               <ApartmentProtectedIndex apartments = { myApartments } />
            }}/>

            <Route path="/apartmentshow/:id" render= {(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find((apartmentObject)=> apartmentObject.id == id)
              return <ApartmentShow apartment={apartment}/>
            }} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </Router>
        
        
  
    )
  }
}

export default App