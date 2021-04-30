document.addEventListener('click', function(e) {
  var map = document.querySelector('#map-frame iframe')
  if(e.target.id === 'map-frame') {
      map.style.pointerEvents = 'all'
  } else {
      map.style.pointerEvents = 'none'
  }
})