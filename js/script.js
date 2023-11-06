// background for the page
let bodyBackgroundColor = prompt('Select and enter a background color setting for the page, such as tan, crimson or steelblue:');

document.body.style.backgroundColor = bodyBackgroundColor;

// font style on the page
let bodyFontStyle = prompt('Select and enter normal or italic font style settings for the page:');

document.body.style.fontStyle = bodyFontStyle;

// alignment for header h1
let headerTextAlign = prompt('Select and enter left, right or center alignment options for the \"My Page\" header:');

document.querySelector('.header').style.textAlign = headerTextAlign;

// background for paragraph with links
let menuBackgroundColor = prompt('Select and enter the background color of the \"My Favorite Sites\" navigation on the page, such as peru, crimson or brown:');

document.getElementById('menu').style.backgroundColor = menuBackgroundColor;
document.querySelector('hr').style.borderColor = menuBackgroundColor;

// the color of the text in the paragraph with links and for the links
let menuTextColor = prompt('Select and enter a text color for the \"My Favorite Sites\" navigation on the page, for example white or black:');

document.getElementById('menu').style.color = menuTextColor;

let menuLinks = document.querySelectorAll('#menu a');
for (const link of menuLinks) {
	link.style.color = menuTextColor;
}

// color of the text in the div element
let mainTextColor = prompt('Select and enter the text color for the main page, setting, for example, white or black:');

document.querySelector('div').style.color = mainTextColor;
document.querySelector('div>p:nth-of-type(4)').style.color = mainTextColor;

// size of the text in the div element
let mainFontSize = prompt('Select and enter a font size for the main page, set to a size in pixels (px) or such as small, medium, large, or larger:');

document.querySelector('div').style.fontSize = mainFontSize;

// thickness of the text in the div element
let mainFontWeight = prompt('Select and enter a font weight setting for the main page, choosing 400, 600, or 800, or normal or bold:');

document.querySelector('div').style.fontWeight = mainFontWeight;

// marker type for a list on a page
let mainTypeListItemMarker = prompt('Select and enter the list marking type on the page, choosing disc, square or circle:');

document.querySelector('#list').style.listStyleType = mainTypeListItemMarker;

// links to three web sites entered by the user
let userMenuLinks = prompt('Enter three web sites separated by commas, for example \"example1.com, example2.com, example3.com\":').split(', ');

if (userMenuLinks.length === 3) {
	const userLinks = document.querySelectorAll('#menu a');
	userMenuLinks.forEach((link, index) => {
		userLinks[index].href = 'https://' + link;
		userLinks[index].textContent = link;
	});
} else {
	alert('You don\'t entered three sites...');
}
