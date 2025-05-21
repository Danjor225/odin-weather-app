import "./reset.css"
import "./styles.css"

const queryBtn = document.querySelector('#query-button')
const queryDisplay = document.querySelector('#data-display')

queryBtn.addEventListener('click', () => {

    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=us&key=CHL4CCM37M6CE9G43WJ7DCPGX&contentType=json',{
        mode: 'cors'
    })
    .then((query)=>{
        let parsedQuery = query.json()
        console.log(parsedQuery)
        return parsedQuery
        
    })
    .then((response) => {
      displayQuery(response)
    })
    .catch((err)=>{
        console.log(err)
    })

})

function displayQuery(query){
    let locationDiv = document.createElement('div')
    locationDiv.textContent = query.address
    queryDisplay.appendChild(locationDiv)

    query.days.forEach(element => {
        let dayDiv = document.createElement('div')
        console.log(element)
        
        Object.keys(element).forEach(function (day) {
            var val = element[day];
            let daySpan = document.createElement('span')
            daySpan.textContent = val
            dayDiv.appendChild(daySpan)
        });
        queryDisplay.appendChild(dayDiv)
    });
    


}