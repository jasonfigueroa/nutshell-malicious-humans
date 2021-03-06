//Tyler: this module takes form data from the news article form and creates a news article object and stores it into the news article database in local Storage.

const getLocalStorage = require("./getLocalStorage")
const getSessionStorage = require("./getSessionStorage")
const setLocalStorage = require("./setLocalStorage")
const idGenerator = require("./idGenerator")
const userNewsDB = require("./userNews")
let mainDB = getLocalStorage()


let NewsArticleObjFactory = (articleName, articleSum, articleURL) => {
    const activeUserObj = getSessionStorage()
    let lastId = mainDB.news[mainDB.news.length- 1] ||  {newsId: 0}
    let newsIdFactory = idGenerator(lastId.newsId)
    mainDB.news.push(Object.create(null, {
        "newsId": {
            value: newsIdFactory.next().value,
            enumerable:true
        },
        "userId": {
            value: activeUserObj.user.userId,
            enumerable: true
        },
        "userFirst": {
            value: activeUserObj.user.firstName,
            enumerable: true
        },
        "title": {
            value: articleName,
            enumerable: true
        },
        "summary": {
            value: articleSum,
            enumerable: true
        },
        "url": {
            value: articleURL,
            enumerable: true
        },
        "date": {
            value: Date.now(),
            enumerable: true
        }
    }))

}



let createNewArticle = () => {
    let articleTitle = document.getElementById("newsForm__title").value
    let articleSummary = document.getElementById("newsForm__summary").value
    let articleURL = document.getElementById("newsForm__url").value
    
    if(articleTitle === null || articleSummary === null || articleURL === null){
        alert("Please fill out each form field!")
    } else {
        NewsArticleObjFactory(articleTitle, articleSummary, articleURL)
        setLocalStorage(mainDB)
    }

}

module.exports = createNewArticle


