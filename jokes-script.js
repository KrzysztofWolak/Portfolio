

document.getElementById("joke-button").addEventListener("click", ()=> {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => dataReady(data))
})

function dataReady(data) {
    console.log(data);
 let image = data.icon_url;
    document.getElementById("avatar-img").src=image;
    let jokeText = data.value;
    document.getElementById("joke-txt").innerHTML = jokeText;
}