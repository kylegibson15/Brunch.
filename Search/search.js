var form = document.getElementById('food')
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var id = event.target.elements.foodItem.value;

  var restaurantsArray = menuItems.restaurants
  var section = document.getElementById('foodItems')

  function findMenuItems(id){
    for(var i = 0; i < restaurantsArray.length; i++){

      var currentRestaurant = restaurantsArray[i]
      var currentRestaurantName = currentRestaurant.restaurant.name
      var currentRestaurantMenuItems = currentRestaurant.restaurant.menu.items
      var currentRestaurantAddress = currentRestaurant.restaurant.location.address
      var currentRestaurantLocale = currentRestaurant.restaurant.location.locality
      var currentRestaurantLogo = currentRestaurant.restaurant.location.logo


      for(var j = 0; j < currentRestaurantMenuItems.length; j++){
        for(var k in currentRestaurantMenuItems[j]){

          var currentLabels = currentRestaurantMenuItems[j][k].labels
          var currentItem = currentRestaurantMenuItems[j][k].item
          var currentDescription = currentRestaurantMenuItems[j][k].description
          var currentRestaurantMenuItemPrice = currentRestaurantMenuItems[j][k].price

          for(var l = 0; l < currentLabels.length; l++){
            if(id === currentLabels[l]){

              var div = document.createElement('div')
              var h5 = document.createElement('h5')
              var h6 = document.createElement('h6')
              var restaurantName = document.createElement('p')
              var address = document.createElement('p')
              var locale = document.createElement('p')
              var price = document.createElement('p')
              var logo = document.createElement('img')

              div.classList.add('container')
              h5.innerText = currentItem
              h6.innerText = currentDescription
              price.innerText = `$ ${currentRestaurantMenuItemPrice}`
              restaurantName.innerText = `you can find this at: ${currentRestaurantName}`
              logo.setAttribute('src', currentRestaurantLogo)
              address.innerText = currentRestaurantAddress
              locale.innerText = currentRestaurantLocale


              section.append(div)
              div.append(h5)
              div.append(h6)
              div.append(price)
              div.append(restaurantName)
              div.append(logo)
              div.append(address)
              div.append(locale)


              console.log(`${currentItem}, ${currentDescription}`)
            }else{

            }
          }
        }
      }
    }
  }
findMenuItems(id)
})
