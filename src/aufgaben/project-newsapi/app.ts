import { INews } from "./interface/Article"

const searchBtn = document.querySelector('#searchBtn') as HTMLButtonElement
const articles = document.querySelector('#articles') as HTMLDivElement
const searchInput = document.querySelector('#searchInput') as HTMLButtonElement
// const countrySelect = document.querySelector('#countrySelect') as HTMLSelectElement
// const sortSelect = document.querySelector('#sortSelect') as HTMLSelectElement

const BASE_URL = "http://newsapi.org/v2/everything"


searchBtn.addEventListener('click', () => {

    fetch(`${BASE_URL}?q=${encodeURI(searchInput.value)}&language=en&from=2024-10-12&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        .then((resp) => resp.json())
        .then((news: INews) => displayNews(news))
        .catch((e) => console.error("fetch err: ", e))
})

function displayNews(news: INews) {
    console.log(news)
    articles.innerHTML = ""

    news.articles.forEach((article) => {
        const div = document.createElement('div')
        div.innerHTML = `<div class='card'>
    <h2>${article.title}</h2>    
    <p>${article.description}</p>    
    <img src='${article.urlToImage}'>
</div>`
        const btn = document.createElement('button')
        btn.className = "btn-cat"
        btn.textContent = "Zum Article"
        btn?.addEventListener('click', () => {
            window.open(article.url, '_blank')
        })
        div.appendChild(btn)
        articles.appendChild(div)
    })
}
