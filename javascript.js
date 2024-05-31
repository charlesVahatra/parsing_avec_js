// URL START ==>>> https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops

let links = document.querySelectorAll('.col-lg-9 .row .card.thumbnail .caption h4 a');
let prices = document.querySelectorAll('div[class="col-lg-9"] div[class="row"] div[class="card thumbnail"] div[class="caption"] h4[class="price float-end card-title pull-right"]')
let rates = document.querySelectorAll('div[class="col-lg-9"] div[class="row"] div[class="card thumbnail"] div[class="ratings"] p')
let desc = document.querySelectorAll('div[class="row"] div[class="card thumbnail"] div[class="product-wrapper card-body"] div[class="caption"] p[class="description card-text"]')

let array = [];

if (links.length === prices.length) {
    for (let i = 0; i < links.length; i++) {
		let rate = rates[i].textContent.replace(/\n\s*/g, '').trim();
        array.push(links[i].href, links[i].title, prices[i].outerText, rate, desc[i].innerHTML);
    }
} else {
    console.warn('The number of links and prices do not match.');
}

console.log(array);




// src_link =>>> https://www.carzone.ie/search?size=30

let  names = document.querySelectorAll('main[class="stock-summary__details"] header h3')
let prices = document.querySelectorAll('main[class=stock-summary__details] a[class="no-decoration"] cz-price[class="stock-summary__price hidden-tablet hidden-desktop"] div[class="cz-price"] span[class="ng-star-inserted"]')
let desc = document.querySelectorAll('p[class="stock-summary__features"] span[class="stock-summary__features__details"] strong')

let tab = []

names.forEach(nom => {
	tab.push(nom.textContent)
})
prices.forEach(prix => {
	tab.push(prix.textContent)
})

console.log(tab)

let desc = document.querySelectorAll('main[class="stock-summary__details"] a[class="no-decoration"] cz-price[class="stock-summary__price hidden-tablet hidden-desktop"] header[class="stock-summary__details__header"]  p[class="stock-summary__description ng-star-inserted"] p[class="stock-summary__features"] span[class="stock-summary__features__details"] strong')
desc.forEach(descriptions => {
	tab.push(descriptions.textContent)
})
let valeur = document.querySelectorAll('div[class="cz-price__finance ng-star-inserted"] div[class="cz-price__finance__inner"] span[class="cz-price__finance__price"]')