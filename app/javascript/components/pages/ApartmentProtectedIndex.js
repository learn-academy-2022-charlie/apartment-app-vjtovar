import React, { Component } from 'react'
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default class ApartmentProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments);
    return (
      <>
        
        <div className="page-body">
        <h3>My Apartments</h3>
        <div className="index-cards">
          {apartments && apartments.map((apartment, index)=> {
            return ( 
              <Card key={index}>
                <CardImg className="card-image" top width="100%" src={apartment.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{apartment.street}</CardTitle>
                  <CardSubtitle>{apartment.city}</CardSubtitle>
                  <CardText>{apartment.state}</CardText>
                  <CardText>{apartment.manager}</CardText>
                  <CardText>{apartment.price}</CardText>
                  <CardText>{apartment.bedrooms}</CardText>
                  <CardText>{apartment.bathrooms}</CardText>
                  <CardText>{apartment.pets}</CardText>
                  <div className="button-container">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </div>
                </CardBody>
              </Card>
            )})
          }
          </div>
        </div>
      </>
    )
  }
}
