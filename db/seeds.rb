# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

   apartments_array = [
    {
      street: "423 Rocky Lane",
      city: "San Diego",
      state: "CA",
      manager: "Dwight Schrute",
      email: "ds@office.com", 
      price: "$2,100", 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: "yes",
      image: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      street: "300 Front St",
      city: "San Diego",
      state: "CA",
      manager: "Michael Scott",
      email: "ms@office.com", 
      price: "$3,700", 
      bedrooms: 3, 
      bathrooms: 1, 
      pets: "none",
      image: "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]
  user_two = User.where(email: 'person@example.com').first_or_create(password: '123456', password_confirmation: '123456')
  
  apartments_two = [
    {
    
     street: '350 E J Street',
     city: 'San Diego',
     state: 'CA',
     manager: 'Bob Saget',
     email: 'bs@fullhouse.com',
     price: '$2,090',
     bedrooms: 2,
     bathrooms: 2,
     pets: 'yes',
     image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
    
     street: '677 G Street ,',
     city: 'San Diego',
     state: 'CA',
     manager: 'Marc Maron',
     email: 'mm@wtf.com',
     price: '$3,050',
     bedrooms: 3,
     bathrooms: 2,
     pets: 'yes',
     image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
   
     street: '400 Broadway',
     city: 'San Diego',
     state: 'CA',
     manager: 'Jim Gaffigan',
     email: 'jg@dpocket.com',
     price: '$2,250',
     bedrooms: 1,
     bathrooms: 1,
     pets: 'yes',
     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

    },
    {
   
     street: '480 Market St.',
     city: 'San Diego',
     state: 'CA',
     manager: 'Louis C.K.',
     email: 'lck@louie.com',
     price: '$2,998',
     bedrooms: 2,
     bathrooms: 2,
     pets: 'yes',
     image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    }
]

  apartments_array.each do |each_apartment|
    user.apartments.create each_apartment
  end

  apartments_two.each do |each_apartment|
    user_two.apartments.create each_apartment
    puts "creating apartment #{each_apartment}"
  end

  p user.apartments
  p "Apartments were made successfully"