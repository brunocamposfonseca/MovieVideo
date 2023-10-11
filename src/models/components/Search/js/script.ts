import SearchBar from "../SearchBar";

let BtnSearch = document.querySelector('.button-search');
let CtnSearchbox = document.querySelector('.div3-searchbox-topbar');
let Searchbar = document.querySelector('.input-search');

BtnSearch.addEventListener('click', searchbarOpen);

function searchbarOpen(){
    CtnSearchbox.style.width = '100%';
    Searchbar.style.display = 'flex';
}