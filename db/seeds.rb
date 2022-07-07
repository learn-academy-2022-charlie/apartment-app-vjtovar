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

  apartments_array.each do |each_apartment|
    user.apartments.create each_apartment
  end

  p user.apartments
  p "Apartments were made successfully"