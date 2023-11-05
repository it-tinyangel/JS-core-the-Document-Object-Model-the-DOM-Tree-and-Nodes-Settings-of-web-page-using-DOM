// фон для сторінки
let bodyBackgroundColor = prompt('Виберіть і введіть налаштування кольору фону для сторінки, як-от tan, crimson або steelblue:');

document.body.style.backgroundColor = bodyBackgroundColor;

// тип шрифта на сторінці
let bodyFontStyle = prompt('Виберіть і введіть параметри normal або italic шрифту для сторінки:');

document.body.style.fontStyle = bodyFontStyle;

// вирівнювання для заголовка
let headerTextAlign = prompt('Виберіть і введіть параметри вирівнювання left, right або center для заголовка \"Моя сторінка\":');

document.querySelector('.header').style.textAlign = headerTextAlign;

// фон для параграфа з посиланнями
let menuBackgroundColor = prompt('Виберіть і введіть колір фону навігаційної панелі \"Мої улюблені сайти\", такі як, peru, crimson або brown:');

document.getElementById('menu').style.backgroundColor = menuBackgroundColor;
document.querySelector('hr').style.borderColor = menuBackgroundColor;

// колір тексту у параграфі з посиланнями і для посилань
let menuTextColor = prompt('Виберіть і введіть колір тексту для навігаційної панелі \"Мої улюблені сайти\", наприклад, white або black:');

document.getElementById('menu').style.color = menuTextColor;

let menuLinks = document.querySelectorAll('#menu a');
for (const link of menuLinks) {
	link.style.color = menuTextColor;
}

// колір тексту у елементі div
let mainTextColor = prompt('Виберіть і введіть колір тексту для головної сторінки, встановивши, наприклад, white або black:');

document.querySelector('div').style.color = mainTextColor;
document.querySelector('div>p:last-child').style.color = mainTextColor;

// розмір тексту у елементі div
let mainFontSize = prompt('Виберіть і введіть розмір шрифту для головної сторінки, встановивши розмір у пікселях (px) або,  як-от small, medium, large або larger:');

document.querySelector('div').style.fontSize = mainFontSize;

// товщину тексту у елементі div
let mainFontWeight = prompt('Виберіть і введіть налаштування щільності шрифту для головної сторінки, вибравши 400, 600 або 800 чи normal або bold:');

document.querySelector('div').style.fontWeight = mainFontWeight;

// тип маркера для маркованого списку на сторінці
let mainTypeListItemMarker = prompt('Виберіть і введіть тип маркування списку на сторінці, вибравши disc, square або circle:');

document.querySelector('#list').style.listStyleType = mainTypeListItemMarker;

// посилання на три сайти, які вводить користувач
let userMenuLinks = prompt('Введіть три сайти, розділені комами, наприклад \"example1.com, example2.com, example3.com\":').split(', ');

if (userMenuLinks.length === 3) {
	const userLinks = document.querySelectorAll('#menu a');
	userMenuLinks.forEach((link, index) => {
		userLinks[index].href = 'https://' + link;
		userLinks[index].textContent = link;
	});
} else {
	alert('Ви не ввели три сайти...');
}