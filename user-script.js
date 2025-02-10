
let sumOfClick = 0;

document.getElementById('rand-button').addEventListener('click', () => {
	fetch('https://randomuser.me/api/')
		.then((response) => response.json())
		.then((data) => useData(data));
});

document.getElementById("reset-button").addEventListener("click", () => {
location.reload();
});

function useData(data) {
	console.log(data);
    ++sumOfClick;
	let getProp = data.results[0];
	let foto = getProp.picture.large;
	document.getElementById("user-img").src = foto;
	let name = getProp.name.first;
	document.getElementById('name-input').value = name;
	let surname = getProp.name.last;
	document.getElementById('surname-input').value = surname;
	let email = getProp.email;
	document.getElementById('email-input').value = email;
	let city = getProp.location.city;
	document.getElementById('city-input').value = city;
    document.getElementById("sum-of-click").value = sumOfClick;
}
