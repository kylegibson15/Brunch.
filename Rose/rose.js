var roseBody = document.getElementById('rose')

fetch('http://api.snooth.com/wines/?akey=9moelcmue00e34o3p6apewqxmwyfuyk7dg15mlg0e8fabsgz&ip=66.28.234.115&q=rose&xp=30')
.then((response) => {
  return response.json()
  .then((roseData) => {
    console.log(roseData.wines)

    var div = document.createElement('div')
      div.classList.add('roseOfTheMonth')
    var wineName = document.createElement('h5')
      wineName.innerText = roseData.wines[5].name
    var winery = document.createElement('h6')
      winery.innerText = roseData.wines[5].winery
    var img = document.createElement('img')
      img.setAttribute('src', roseData.wines[5].image)
    var price = document.createElement('p')
      price.innerText = `$${roseData.wines[5].price}`
    var region = document.createElement('p')
      region.innerText = roseData.wines[5].region
    var year = document.createElement('p')
      year.innerText = roseData.wines[5].vintage

    roseBody.append(div)
    div.append(wineName)
    div.append(img)
    div.append(winery)
    div.append(price)
    div.append(region)
    div.append(year)
  })
})
