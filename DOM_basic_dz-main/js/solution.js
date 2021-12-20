/** @format */

for (let li of document.querySelectorAll("li")) {
	let arrValue = [];
	let arrName = [];
	let name = li.tagName;
	arrName = name.split(",");
	console.log(arrName);
	let val = li.textContent;
	arrValue = val.split(",");
	console.log(arrValue);
}
let myName = "Anna-Mariya";
let lastLi = (document.querySelector("ul>li:last-child").innerHTML =
	"Привет меня зовут " + myName);
console.log(lastLi);

document
	.querySelector("ul>li:first-child")
	.setAttribute("data-my-name", "Anna-Mariya");

document.querySelector("ul").removeAttribute("data-dog-tail");

function generateList(array) {
	if (!Array.isArray(array)) {
		throw new Error("Your value is no array");
	}
	let ul = document.createElement("ul");
	document.body.prepend(ul);

	array.forEach(function (el) {
		let li = document.createElement("li");
		let childElement;

		if (Array.isArray(el)) {
			childElement = generateList(el);
		} else {
			childElement = document.createTextNode(el);
		}

		ul.append(childElement);
		ul.append(li);
	});
	return ul;
}

generateList([1, 2, 3]);
generateList([1, 2, [1.1, 1.2, ["1.2.1", "1.2.2"], 1.3], 3]);

function tablez() {
	document.write("<table>");
	let num = 1;
	for (let raw = 0; raw < 10; raw++) {
		document.write("<tr>");
		for (let nums = 0; nums < 10; nums++) {
			document.write("<td>" + num++ + "<td>");
		}
		document.write("</tr>");
	}
}
tablez();
document.body.append.tablez();
