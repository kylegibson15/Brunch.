var featured = ['snooze','tupelo honey','tamayo','bremen\'s','the nickel','la loma','bacon social house','beatrice & woodsley']

for(var i = 0; i < featured.length; i++){
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${featured[i]}&apikey=b23400682136545e76a3ebb355532993`)
  .then((response) => {
    return response.json()
    .then((restaurantData) => {
      console.log(restaurantData.restaurants[0].restaurant)
      var list = document.getElementById('restaurant')
      var div = document.createElement('div')
      div.classList.add('restaurantInfo')
      var name = document.createElement('h4')
        name.innerText = restaurantData.restaurants[0].restaurant.name
      var rating = document.createElement('p')
        rating.innerText = restaurantData.restaurants[0].restaurant.user_rating.aggregate_rating
      var ratingText = document.createElement('p')
        ratingText.innerText =    restaurantData.restaurants[0].restaurant.user_rating.rating_text
      var location = document.createElement('p')
        location.innerText = `${restaurantData.restaurants[0].restaurant.location.address}`
      var image = document.createElement('img')
        image.setAttribute('src',restaurantData.restaurants[0].restaurant.featured_image)
      // var menuUrl = restaurantData.restaurants[0].restaurant.menu_url


      list.append(div)
      div.append(name)
      div.append(image)
      div.append(rating)
      div.append(ratingText)
      div.append(location)
    })
  })
}
