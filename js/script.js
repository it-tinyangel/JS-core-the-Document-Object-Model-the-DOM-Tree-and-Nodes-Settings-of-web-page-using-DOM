// Отримуємо та встановлюємо колір фону для сторінки
const bodyBackgroundColor = prompt('Виберіть та введіть колір фону для сторінки, наприклад, tan, crimson або steelblue:');
document.body.style.backgroundColor = bodyBackgroundColor;

// Отримуємо та встановлюємо стиль шрифту для сторінки
const bodyFontStyle = prompt('Виберіть та введіть стиль шрифту для сторінки (normal або italic):');
document.body.style.fontStyle = bodyFontStyle;

// Отримуємо та встановлюємо вирівнювання для заголовку h1
const headerTextAlign = prompt('Виберіть та введіть вирівнювання для заголовка "Моя сторінка" (left, right або center):');
document.querySelector('.header').style.textAlign = headerTextAlign;

// Отримуємо та встановлюємо колір фону для навігації з посиланнями
const navBackgroundColor = prompt('Виберіть та введіть колір фону для навігації "Мої улюблені сайти", наприклад, peru, crimson або brown:');
const nav = document.getElementById('nav');
nav.style.backgroundColor = navBackgroundColor;
document.querySelector('hr').style.borderColor = navBackgroundColor;

// Отримуємо та встановлюємо колір тексту для навігації з посиланнями
const navTextColor = prompt('Виберіть та введіть колір тексту для навігації "Мої улюблені сайти", наприклад, white або black:');
nav.style.color = navTextColor;

// Отримуємо та встановлюємо колір тексту для посилань
const navLinks = document.querySelectorAll('.nav a');
for (const link of navLinks) {
	link.style.color = navTextColor;
}

// Отримуємо та встановлюємо колір тексту для основного контенту
const mainTextColor = prompt('Виберіть та введіть колір тексту для головної сторінки, встановивши, наприклад, white або black:');
const mainContent = document.querySelector('main');
mainContent.style.color = mainTextColor;
document.querySelector('section>p:nth-of-type(4)').style.color = mainTextColor;

// Отримуємо та встановлюємо розмір шрифту для основного контенту 
const mainFontSize = prompt('Виберіть і введіть розмір шрифту для головної сторінки, встановивши розмір у пікселях (px) або,  як-от small, medium, large або larger:');
mainContent.style.fontSize = mainFontSize;

// Отримуємо та встановлюємо жирність шрифту для основного контенту 
const mainFontWeight = prompt('Виберіть і введіть налаштування щільності шрифту для головної сторінки, вибравши 400, 600 або 800 чи normal або bold:');
mainContent.style.fontWeight = mainFontWeight;

// Отримуємо та встановлюємо тип маркера для списку на сторінці 
const mainTypeListMarker = prompt('Виберіть і введіть тип маркування списку на сторінці, вибравши disc, square або circle:');
document.querySelector('#list').style.listStyleType = mainTypeListMarker;

// Отримуємо та встановлюємо посилання на три веб-сайти, які введе користувач
const userNavLinks = prompt('Введіть три сайти, розділені комами, наприклад \"example1.com, example2.com, example3.com\":').split(', ');

if (userNavLinks.length === 3) {
	const userLinks = document.querySelectorAll('#nav a');
	userNavLinks.forEach((link, index) => {
		userLinks[index].href = 'https://' + link;
		userLinks[index].textContent = link;
	});
} else {
	alert('Ви не ввели три сайти...');
}
