const allPlayers = () =>{
   // console.log('hello');
   const searchField = document.getElementById('search-box');
   const searchText = searchField.value;
   // console.log(searchText);
   const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
   // console.log(url);
   fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.player))
   searchField.value = '';
}

allPlayers();
