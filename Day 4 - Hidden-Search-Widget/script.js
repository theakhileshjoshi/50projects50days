const searchBar = document.getElementById("search-bar")
const searchButton = document.getElementById("search-button")
const x = document.getElementById("frame")


document.addEventListener('click',()=>{
    const isClickInsideSearchButton = searchButton.contains(event.target);
    const isClickInsideSearchBar = searchBar.contains(event.target);

  if (isClickInsideSearchButton) {
    searchBar.classList.add("active")
  }else if(!isClickInsideSearchBar && !isClickInsideSearchButton){
    searchBar.classList.remove("active")
  }
}); 
