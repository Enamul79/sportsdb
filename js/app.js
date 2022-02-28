const allPlayers = () =>{
   // console.log('hello');
   document.getElementById('players-container').innerHTML = '';
   const searchField = document.getElementById('search-box');
   const searchText = searchField.value;
   // console.log(searchText);
   const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
   // console.log(url);
   fetch(url)
      .then(response => response.json())
      .then(data => displayPlayersDetails(data.player))

   searchField.value = '';
}

allPlayers();

const displayPlayersDetails = players =>{
   // console.log(players);

   for(const player of players){
      const parent = document.getElementById('players-container');
      const div = document.createElement('div');
      div.innerHTML = `
               <div class="card border p-2">
                  <div class="pro-pic">
                     <img class="w-50" src="${player.strThumb}" alt="">
                  </div>
                  <h4>Name:${player.strPlayer} </h4>
                  <h5>Country:${player.strNationality} </h5>
                  <p>details: </p>
                  <div class="all-buttons">
                     <button class="btn btn-danger p-2 mb-2">Delete</button>
                     <button onclick="Details('${player.idPlayer}')" class="btn btn-success p-2 mb-2">Details</button>
                     
                  </div>
               </div>
   `;
   parent.appendChild(div);
   }
   // const parent = document.getElementById('players-container');
   // const div = document.createElement('div');
   // div.innerHTML = `
   //             <div class="card border">
   //                <div class="pro-pic">
   //                   <img class="w-25" src="" alt="">
   //                </div>
   //                <h4>Name: </h4>
   //                <h5>Country: </h5>
   //                <p>details: </p>
   //                <div class="all-buttons">
   //                   <button class="btn btn-danger p-2 mb-2">Delete</button>
   //                   <button class="btn btn-success p-2 mb-2">Details</button>
   //                </div>
   //             </div>
   // `;
   // parent.appendChild(div);
}

const Details = (idPlayer) =>{
   // console.log(info);
   const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`;
   fetch(url)
      .then(response => response.json())
      .then(data => setDetails(data.players[0]))
}
const setDetails = (info) =>{
   console.log(info.strGender);

   if(info.strGender == male){
      document.getElementById('male').style.display = 'block';
      document.getElementById('female').style.display = 'none';
   }else{
      document.getElementById('male').style.display = 'none';
      document.getElementById('female').style.display = 'block';
   }

   const detailsContainer = document.getElementById('details-container');
   const detailsContainerText = detailsContainer.innerHTML;
   detailsContainer.innerHTML=`
      <div class="card border">
                  <h4>Name:${info.strPlayer} </h4>
                  <h5>Country: </h5>
                  <p>details: </p>

      </div>
   `;
   detailsContainerText = '';
}