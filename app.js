// Gender Predictor Api
const BASE_URL = `https://api.genderize.io?name=`
const inputSearch = document.getElementById('search')
const searchBtn = document.getElementById('btnSearch')
const tblGender = document.getElementById('tblGender')

const getSearchedGender = (name) => {
    fetch(`${BASE_URL}${name}`)
     .then(response => response.json())
     .then(json => {
        console.log(json)
        tblGender.innerHTML += `
      <tbody>
        <tr>
          <td><a href="#">${json.name}</a></td>
          <td>${json.gender}</td>
          <td>${json.probability}</td>
          <td>
          <p class="status status-paid">${json.count}</p>
          </td>
        </tr>
      </tbody>`
     })
  }

  searchBtn.onclick = () => getSearchedGender(inputSearch.value)