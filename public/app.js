var favorites = document.getElementsByClassName('favorites')[0]
var search = document.getElementsByClassName('search')[0]
var featured = document.getElementsByClassName('featured')[0]
var bottomless = document.getElementsByClassName('bottomless')[0]
var rose = document.getElementsByClassName('rose')[0]


  function favoritesPage() {

    favorites.style.width = '100%'
    favorites.style.height = '530px'

    search.style.display = 'none'
    featured.style.display = 'none'
    bottomless.style.display = 'none'
    rose.style.display = 'none'
  }
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
