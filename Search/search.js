var items = []
var items2 = {}
var items3 = []
var value = 'chocolate'
// for(var i = 0; i < menuItems.restaurants.length; i++){
//   for(var j in )
//   items.push(menuItems.restaurants[i])
//   // console.log(items)
// }
for(var j in menuItems.restaurants[0]) {
  items2.item = menuItems.restaurants[0][j].menu.items[0]
  console.log(items2)
}
// for(var k = 0; k < items2.length; k++){
//   for(var l in items2[k]){
//     items3.push(items2[k][l].labels)
//
//   }
  // console.log(items2)
  // console.log(items3)
// }
// console.log(items3)
for( var m = 0; m < items3.length; m++){
  for(var o = 0; o < items3[m].length; o++){
    if(value === items3[m][o]){
      // console.log(`yay, we have ${value}, `)
    } else{
      // console.log(`fuck you`)
    }
  }
}
