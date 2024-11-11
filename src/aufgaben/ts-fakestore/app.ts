class Rating {
    constructor(
        public rate: number,
        public count: number
    ) { }
}

class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public category: string,
        public image: string,
        public rating: Rating
    ) { }

}


let filterCat = "";
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then((json: string[]) => {
        json.forEach(category => {
            const filterBtns = document.getElementById('filterBtns')
            const btn = document.createElement('button')
            btn.className = "btn-cat"
            btn.textContent = category
            btn.addEventListener('click', () => {
                filterCat = category;
                console.log(category);

                productList = productListWeb.filter((prod: Product) => prod.category == category)
                searchInput.value = "";
                displayProducts();
            })
            filterBtns?.appendChild(btn);
        });
    })

const products = document.getElementById('products')

function displayProducts() {
    if (products) {
        products.innerHTML = "";
        productList.forEach((item) => {
            products.innerHTML += `<div class="card">
    <img src="${item.image}" alt="${item.title}">
    <h2>${item.title}</h2>
    <div>
        <p>$${item.price.toFixed(2)}</p>
        <button class="button-card">Add to Cart</button>
    </div>
</div>`
        })
    }
}



const sortDir = document.getElementById('sortDir') as HTMLSelectElement
sortDir.addEventListener('change', () => {
    console.log(sortDir.value)
    switch (sortDir.value) {
        case 'age_asc': productList = productListWeb.sort((a: Product, b: Product) => a.id - b.id); break;
        case 'age_desc': productList = productListWeb.sort((a: Product, b: Product) => b.price - a.price); break;
        case 'price_asc': productList = productListWeb.sort((a: Product, b: Product) => a.price - b.price); break;
        case 'price_desc': productList = productListWeb.sort((a: Product, b: Product) => b.price - a.price); break;
        case 'rating_asc': productList = productListWeb.sort((a: Product, b: Product) => a.rating.rate - b.rating.rate); break;
        case 'rating_desc': productList = productListWeb.sort((a: Product, b: Product) => b.rating.rate - a.rating.rate); break;
    }
    searchInput.value = "";
    displayProducts();
})


const searchInput = document.getElementById('search') as HTMLInputElement
searchInput.addEventListener('input', () => {
    console.log('change: ' + searchInput.value);

    if (searchInput.value) {
        productList = productListWeb.filter((prod: Product) =>
            prod.description.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            prod.title.toLowerCase().includes(searchInput.value.toLowerCase())
        )
    } else {
        productList = [...productListWeb]
    }
    displayProducts();
})

let productList: Product[] = []
let productListWeb: Product[] = []

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((productItems: Product[]) => {
        productListWeb = [...productItems]
        productList = [...productItems]
        displayProducts()
    })


