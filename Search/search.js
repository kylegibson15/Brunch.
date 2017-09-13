var value = 'bacon'
var restaurantsArray = menuItems.restaurants

function findMenuItems(value){
  for(var i = 0; i < restaurantsArray.length; i++){

    var currentRestaurant = restaurantsArray[i]
    var currentRestaurantName = currentRestaurant.restaurant.name
    var currentRestaurantMenuItems = currentRestaurant.restaurant.menu.items

    for(var j = 0; j < currentRestaurantMenuItems.length; j++){
      for(var k in currentRestaurantMenuItems[j]){

        var currentLabels = currentRestaurantMenuItems[j][k].labels
        var currentItem = currentRestaurantMenuItems[j][k].item
        var currentDescription = currentRestaurantMenuItems[j][k].description

        for(var l = 0; l < currentLabels.length; l++){
          if(value === currentLabels[l]){
            console.log(`${currentItem}, ${currentDescription}`)
          }else{

          }
        }
      }
    }
  }
}
findMenuItems(value)
