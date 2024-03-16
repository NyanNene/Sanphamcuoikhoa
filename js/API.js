import { MY_API_KEY } from "./config.js";

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",{
    "method": "GET",
    "headers": {
		"x-RapidAPI-Host": 'quotes15.p.rapidapi.com',
        "x-rapidAPI-key": MY_API_KEY
	}
})

.then(response => response.json())
.then(response => {
    console.log(response);
    document.getElementById('quote').innerHTML = response.content
    document.getElementById('author').innerHTML = response.originator.name
})
