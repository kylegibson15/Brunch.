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

      for(var j = 0; j < currentRestaurantMenuItems.length; j++){
        for(var k in currentRestaurantMenuItems[j]){

          var currentLabels = currentRestaurantMenuItems[j][k].labels
          var currentItem = currentRestaurantMenuItems[j][k].item
          var currentDescription = currentRestaurantMenuItems[j][k].description

          for(var l = 0; l < currentLabels.length; l++){
            if(id === currentLabels[l]){

              var div = document.createElement('div')
              var h3 = document.createElement('h3')
              var h5 = document.createElement('h5')
              var p = document.createElement('p')
              var address = document.createElement('p')
              var locale = document.createElement('p')

              h3.innerText = currentItem
              h5.innerText = currentDescription
              p.innerText = `you can find this at: ${currentRestaurantName}`
              address.innerText = currentRestaurantAddress
              locale.innerText = currentRestaurantLocale


              section.append(div)
              div.append(h3)
              div.append(h5)
              div.append(p)
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
