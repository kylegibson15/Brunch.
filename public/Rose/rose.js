var roseBody = document.getElementById('rose')
var num = 11
fetch('https://galvanize-cors.herokuapp.com/http://api.snooth.com/wines/?akey=9moelcmue00e34o3p6apewqxmwyfuyk7dg15mlg0e8fabsgz&ip=66.28.234.115&q=rose&xp=30')
.then((response) => {
  return response.json()
  .then((roseData) => {
    console.log(roseData.wines)

    var div = document.createElement('div')
      div.classList.add('roseOfTheMonth')
    var imgDiv = document.createElement('div')
      imgDiv.classList.add('imgDiv')
    var spaceDiv = document.createElement('div')
      spaceDiv.classList.add('spaceDiv')
    var nameDescriptionDiv = document.createElement('div')
      nameDescriptionDiv.classList.add('description')
    var wineNameDiv = document.createElement('div')
      wineNameDiv.classList.add('wineNameDiv')
    var wineName = document.createElement('h5')
      wineName.innerText = roseData.wines[`${num}`].name
    var winery = document.createElement('h6')
      winery.innerText = `Winery: ${roseData.wines[`${num}`].winery}`
    var img = document.createElement('img')
      img.setAttribute('src', roseData.wines[`${num}`].image)
      img.classList.add('wineImage')
    var price = document.createElement('p')
      price.innerText = `$${roseData.wines[`${num}`].price}`
    var region = document.createElement('p')
      region.innerText = `Region: ${roseData.wines[`${num}`].region}`
    var year = document.createElement('p')
      year.innerText = `Year: ${roseData.wines[`${num}`].vintage}`

    roseBody.append(nameDescriptionDiv)
    wineNameDiv.append(wineName)
      nameDescriptionDiv.append(wineNameDiv)
      nameDescriptionDiv.append(spaceDiv)
        spaceDiv.append(winery)
        spaceDiv.append(region)
        spaceDiv.append(year)
        spaceDiv.append(price)
    roseBody.append(imgDiv)
      imgDiv.append(img)
  })
})
