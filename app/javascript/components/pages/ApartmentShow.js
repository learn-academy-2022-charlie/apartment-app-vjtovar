import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
      <>
      <h3>ApartmentShow</h3>
      <div className="page-body">
          {apartment && 
           <Card className="card-show">
           <CardImg top width="100%" src={apartment.image} alt="Card image cap" />
           <CardBody>
             <CardTitle>{apartment.street}</CardTitle>
             <CardSubtitle>{apartment.city}</CardSubtitle>
             <CardText>{apartment.state}</CardText>
             <CardText>{apartment.manager}</CardText>
             <CardText>{apartment.price}</CardText>
             <CardText>{apartment.bedrooms}</CardText>
             <CardText>{apartment.bathrooms}</CardText>
             <CardText>{apartment.pets}</CardText>
             <NavLink to="/apartmentindex">
             <Button>See all Listings</Button>
             </NavLink>
           </CardBody>
         </Card>
          }
        </div>
      </>
    )
  }
}
