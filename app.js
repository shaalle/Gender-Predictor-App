// Gender Predictor Api Link/URL
const BASE_URL = `https://api.genderize.io?name=`
// these variables help us store/get values from the html elements
const inputSearch = document.getElementById('search')
const searchBtn = document.getElementById('btnSearch')
const clearBtn = document.getElementById('btnClear')
const tbodyGender = document.getElementById('tbodyGender')
// this is the function that finds the searched name from the API
const getSearchedGender = (name) => {
    fetch(`${BASE_URL}${name}`)
     .then(response => response.json())
     .then(json => {
        tbodyGender.innerHTML += `
         <tr>
           <td><a href="#">${json.name}</a></td>
           <td>${json.gender}</td>
           <td>${json.probability}</td>
           <td>
           <p class="status status-paid">${json.count}</p>
           </td>
         </tr>`
      // saves the searched name to the localstorage memory
      localStorage.setItem('table', tbodyGender.innerHTML)
     })
  } 
  // retrieves back the saved data after refreshing or closing the page
  tbodyGender.innerHTML = localStorage.getItem('table')
  // shows data to the table after clicking the search button
    searchBtn.onclick = () => {
      // checking if the user given input or not
      //inputSearch.value === '' ? alert('Fadlan soo gali magac👀') : getSearchedGender(inputSearch.value)
      checkDuplicateEntries()
    }
  // clears the dom after clicking the clear/delete button
  clearBtn.onclick = () => {
    if(tbodyGender.innerHTML === ''){
      alert('Waxba Kuma jirin Markii horeba ee dhesha ciyaarta ka dhaaf😒')
    }else if(confirm('Ma Hubtaa inaa Tireysid Xogtaan?')){
        alert('Waad Tirtay xogtii ku jirtay Table-kan😊')
        localStorage.clear()
        inputSearch.innerText = ''
        window.location.reload();
    }
  }
  
  const checkDuplicateEntries = () => {
  let found = false;
  document.querySelectorAll("#tbodyGender td").forEach(cell => {
            if(cell.innerText === inputSearch.value){
                 found = true
            }
        })
            if(found === true){
              //document.getElementById('search').style.fontWeight = 'bold'
              alert(`${inputSearch.value} Horey Ayaad uso galisay ee Magac cusub so gali👁`)
            }
            else if(inputSearch.value === '')
              alert('Fadlan soo gali magac👀')
            else
              getSearchedGender(inputSearch.value)
  }
    
