var featured = ['snooze','tamayo','the nickel','la loma','beatrice & woodsley']

for(var i = 0; i < featured.length; i++){
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${featured[i]}&apikey=b23400682136545e76a3ebb355532993`)
  .then((response) => {
    return response.json()
    .then((restaurantData) => {
      console.log(restaurantData.restaurants[0].restaurant)
      var list = document.getElementById('featured-restaurants-preview')
      var div = document.createElement('div')
        div.classList.add('restaurantInfo')
      var name = document.createElement('h6')
        name.innerText = restaurantData.restaurants[0].restaurant.name
      var rating = document.createElement('p')
        rating.innerText = restaurantData.restaurants[0].restaurant.user_rating.aggregate_rating
      var image = document.createElement('img')
        image.setAttribute('src',restaurantData.restaurants[0].restaurant.featured_image)
        image.classList.add('restaurantImage')


      list.append(div)
      div.append(name)
      div.append(image)
      div.append(rating)
    })
  })
}
