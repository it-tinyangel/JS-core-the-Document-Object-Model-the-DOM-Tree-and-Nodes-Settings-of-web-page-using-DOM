// Get and set the background color for the page
const bodyBackgroundColor = prompt('Select and enter the background color for the page, for example, tan, crimson, or steelblue:');
document.body.style.backgroundColor = bodyBackgroundColor;

// Get and set the font style for the page
const bodyFontStyle = prompt('Select and enter the font style for the page (normal or italic):');
document.body.style.fontStyle = bodyFontStyle;

// Get and set alignment for the h1 header
const headerTextAlign = prompt('Select and enter alignment for the "My Page" header (left, right, or center):');
document.querySelector('.header').style.textAlign = headerTextAlign;

// Get and set the background color for the paragraph with links
const navBackgroundColor = prompt('Select and enter the background color of the "My Favorite Sites" navigation on the page, for example, peru, crimson, or brown:');
const nav = document.getElementById('nav');
nav.style.backgroundColor = navBackgroundColor;
document.querySelector('hr').style.borderColor = navBackgroundColor;

// Get and set the text color for the paragraph with links
const navTextColor = prompt('Select and enter a text color for the "My Favorite Sites" navigation on the page, for example, white or black:');
nav.style.color = navTextColor;

// Get and set the text color for the links
const navLinks = document.querySelectorAll('.nav a');
for (const link of navLinks) {
	link.style.color = navTextColor;
}

// Get and set the text color for the main content
const mainTextColor = prompt('Select and enter the text color for the main page, setting, for example, white or black:');
const mainContent = document.querySelector('main');
mainContent.style.color = mainTextColor;
document.querySelector('section>p:nth-of-type(4)').style.color = mainTextColor;

// Get and set the font size for the main content
const mainFontSize = prompt('Select and enter a font size for the main page, set to a size in pixels (px) or such as small, medium, large, or larger:');
mainContent.style.fontSize = mainFontSize;

// Get and set the font weight for the main content
const mainFontWeight = prompt('Select and enter a font weight setting for the main page, choosing 400, 600, or 800, or normal or bold:');
mainContent.style.fontWeight = mainFontWeight;

// Get and set the marker type for a list on the page
const mainTypeListMarker = prompt('Select and enter the list marking type on the page, choosing disc, square, or circle:');
document.querySelector('#list').style.listStyleType = mainTypeListMarker;

// Get and set links to three web sites entered by the user
const userNavLinks = prompt('Enter three web sites separated by commas, for example "example1.com, example2.com, example3.com":').split(', ');

if (userNavLinks.length === 3) {
	const userLinks = document.querySelectorAll('#nav a');
	userNavLinks.forEach((link, index) => {
		userLinks[index].href = 'https://' + link;
		userLinks[index].textContent = link;
	});
} else {
	alert('You didn\'t enter three sites...');
}
