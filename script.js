// function get_joke_of_the_day() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
// 	 if (this.readyState == 4 && this.status == 200) {
// 	     // Access the result here
// 	     alert(this.responseText);
// 	 }
//     };
//     xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
//     xhttp.send();
// }

// get_joke_of_the_day()

const btnE1=document.getElementById("btn");
const jokeE1=document.getElementById("joke");
const apiKey="Ox2kwieOsny7uKPBvzDVEQ==plBRlGOUfo2UU0yi";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1"
async function getJoke()
{
    jokeE1.innerText="Ruko Jara Sabar Karo...";
    const response= await fetch(apiURL,options);
    const data= await response.json();
    // console.log(data);
    jokeE1.innerHTML=data[0].joke;
}

btnE1.addEventListener('click',getJoke);