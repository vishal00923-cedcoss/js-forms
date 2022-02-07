const btn = document.getElementById("btn");
const output = document.getElementById("output");

function submitForm() {
	let name = document.getElementById("name").value;
	let age = Number(document.getElementById("age").value);
	let weight = Number(document.getElementById("weight").value);

	if (checkEmpty(name, age, weight)) {
		displayOutput(name, age, weight);
	}
}

function checkEmpty(name, age, weight) {
	if (typeof name === null || typeof age === null || typeof weight === null) {
		return false;
	} else {
		return true;
	}
}

function calc(name, age, weight) {
	let msg = "";

	if (age >= 5 && age <= 7) {
		if (weight >= 15 && weight <= 20) {
			msg = `Hello ${name} !!! Your weight is perfect.`;
		} else if (weight < 15) {
			msg = `Hello ${name} !!! Your weight is less than recommended value of 20KG at an age of ${age}.`;
		} else {
			msg = `Hello ${name} !!! Your weight is greater than recommended value of 20KG at an age of ${age}.`;
		}
	} else if (age >= 8 && age <= 10) {
		if (weight >= 21 && weight <= 25) {
			msg = `Hello ${name} !!! Your weight is perfect.`;
		} else if (weight < 21) {
			msg = `Hello ${name} !!! Your weight is less than recommended value of 25KG at an age of ${age}.`;
		} else {
			msg = `Hello ${name} !!! Your weight is greater than recommended value of 25KG at an age of ${age}.`;
		}
	} else if (age >= 11 && age <= 15) {
		if (weight >= 26 && weight <= 30) {
			msg = `Hello ${name} !!! Your weight ismsg perfect.`;
		} else if (weight < 30) {
			msg = `Hello ${name} !!! Your weight is less than recommended value of 30KG at an age of ${age}.`;
		} else {
			msg = `Hello ${name} !!! Your weight is greater than recommended value of 30KG at an age of ${age}.`;
		}
	} else if (age >= 16 && age <= 20) {
		if (weight >= 31 && weight <= 40) {
			msg = `Hello ${name} !!! Your weight is perfect.`;
		} else if (weight < 40) {
			msg = `Hello ${name} !!! Your weight is less than recommended value of 40KG at an age of ${age}.`;
		} else {
			msg = `Hello ${name} !!! Your weight is greater than recommended value of 40KG at an age of ${age}.`;
		}
	}

	return msg;
}

function displayOutput(name, age, weight) {
	let res = calc(name, age, weight);

	if (res === "") {
		output.innerHTML = "Error in your input values!!!";
	} else {
		output.innerHTML = res;
	}
}

btn.addEventListener("click", submitForm);
