const container = document.getElementById("container");

let i = 1,
	limit = 25,
	colors = [ "#fc7373", "#1eb7d3", "#e29f34", "#9655ff", "#00958f", "#d14040", "#e5328b", "#5589ff" ];

while (i <= limit) {
	let gridItem = document.createElement("div"),
		gridContent = document.createElement("div"),
		title = document.createElement("p");

	container.appendChild(gridItem);
	gridItem.appendChild(gridContent);

	gridItem.setAttribute("class", "grid-item");
	gridContent.setAttribute("class", "grid-content");

	title.appendChild(document.createTextNode(`item ${i}`));

	gridContent.appendChild(title);

	gridContent.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

	gridItem.style.height = Math.floor(Math.random() * 1000) + "px";
	gridItem.style.minHeight = "100px";
	gridItem.style.maxHeight = "600px";

	i++;
}

function resizeGridItem(item) {
	rowHeight = parseInt(window.getComputedStyle(container).getPropertyValue("grid-auto-rows"));
	rowGap = parseInt(window.getComputedStyle(container).getPropertyValue("grid-row-gap"));
	rowSpan = Math.ceil(
		(item.querySelector(".grid-content").getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
	);
	item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
	allItems = document.getElementsByClassName("grid-item");
	for (x = 0; x < allItems.length; x++) {
		resizeGridItem(allItems[x]);
	}
}

function resizeInstance(instance) {
	item = instance.elements[0];
	resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

// allItems = document.getElementsByClassName("grid-item");
// for (x = 0; x < allItems.length; x++) {
//     imagesLoaded(allItems[x], resizeInstance);
// }
