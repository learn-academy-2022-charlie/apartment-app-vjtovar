// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow renders", () => {
  const apartment = {
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
        user_id: 1
      }
      let apartmentShowRender
      beforeEach(() => {
        apartmentShowRender = shallow(<ApartmentShow apartment={apartment} />)
      })

  it("displays a heading", () => {
    const apartmentShow = shallow(<ApartmentShow />)
    const apartmentShowHeading = apartmentShow.find("h3")
    expect(apartmentShowHeading.length).toEqual(1)
  })
  it("displays a card listing for an apartment ", () => {
    const apartmentShowCard = apartmentShowRender.find("Card")
    expect(apartmentShowCard.length).toEqual(1)
  })
})