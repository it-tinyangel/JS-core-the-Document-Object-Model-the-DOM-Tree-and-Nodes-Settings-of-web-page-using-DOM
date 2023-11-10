// Function to get user input for styles
function getUserStyles(element, properties, promptMessage) {
	const userStyles = {};
	for (const property of properties) {
		const userInput = prompt(`${promptMessage} (for ${property}):`);
		userStyles[property] = userInput;
	}
	return userStyles;
}

// Function to set text color for navigation and links
function setTextColor(nav, links, color) {
	nav.style.color = color;
	links.forEach(link => link.style.color = color);
}

// Function to set background color for navigation and hr borderColor
function setNavBackgroundColor(nav, hr, color) {
	nav.style.backgroundColor = color;
	hr.style.borderColor = color;
}

// Function to set styles for the last paragraph in main content
function setLastChildStyles(element, styles) {
	const lastChild = element.querySelector('p:last-child');
	if (lastChild) {
		Object.assign(lastChild.style, styles);
	}
}

// Function to get user input for navigation links
function getUserNavLinks() {
	const userInputLinks = prompt('Enter three websites separated by commas, for example "example1.com, example2.com, example3.com":');
	return userInputLinks !== null ? userInputLinks.split(', ').slice(0, 3) : null;
}

// Get and set styles for the page
const body = document.body;
const pageProperties = ['backgroundColor', 'fontStyle'];
const pageStyles = getUserStyles(body, pageProperties, 'Enter styles for the page');
Object.assign(body.style, pageStyles);

// Get and set alignment for heading h1
const header = document.querySelector('.header');
const headerStyles = getUserStyles(header, ['textAlign'], 'Enter alignment for header');
Object.assign(header.style, headerStyles);

// Get and set styles for navigation links
const nav = document.getElementById('myNav');
const hr = document.querySelector('hr');
const navProperties = ['backgroundColor'];
const navStyles = getUserStyles(nav, navProperties, 'Enter background color for navigation');
setNavBackgroundColor(nav, hr, navStyles.backgroundColor);

const navLinks = document.querySelectorAll('.nav a');
const textColor = prompt('Enter text color for navigation and its links:');
setTextColor(nav, navLinks, textColor);

// Get and set styles for the main content
const mainContent = document.querySelector('main');
const mainProperties = ['color', 'fontSize', 'fontWeight'];
const mainStyles = getUserStyles(mainContent, mainProperties, 'Enter styles for the main');

// Set styles for the main content and its last paragraph
Object.assign(mainContent.style, mainStyles);
setLastChildStyles(mainContent, mainStyles);

// Get and set the marker type for a list on the page
const mainTypeListMarker = document.querySelector('#myList');
const listMarkerStyles = getUserStyles(mainTypeListMarker, ['listStyleType'], 'Enter styles for the list marker');
Object.assign(mainTypeListMarker.style, listMarkerStyles);

// Get and set user input for navigation links
const userNavLinks = getUserNavLinks();
if (userNavLinks !== null) {
	const userLinks = document.querySelectorAll('#myNav a');
	userNavLinks.forEach((link, index) => {
		userLinks[index].href = 'https://' + link;
		userLinks[index].textContent = link;
	});
}
