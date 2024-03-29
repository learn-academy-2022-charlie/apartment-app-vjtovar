// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentProtectedIndex from './ApartmentProtectedIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentProtectedIndex renders", () => {
  const props = {
    apartments: [
      {
        street: "423 Rocky Lane",
        city: "San Diego",
        state: "CA",
        manager: "Michael Scott",
        email: "ffff@.com", 
        price: "$2,100", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "yes",
        image: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        user_id: 1 }
    ]
  }
  let apartmentProIndexRender
  beforeEach(() => {
    apartmentProIndexRender = shallow(<ApartmentProtectedIndex {...props} />)
  })
  it("displays a heading", () => {
    const apartmentIndexHeading = apartmentProIndexRender.find("h3")
    expect(apartmentIndexHeading.length).toEqual(1)
  })
  it("displays a card from ReactStrap per apartment ", () => {
    const apartmentIndexCard = apartmentProIndexRender.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})