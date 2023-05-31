
async function fetchProductData () {
    try {
        let response = await fetch("https://dummyjson.com/products")
        let translatedData = await response.json()
        console.log(translatedData)
        let actualProductData = translatedData.products
        return actualProductData        
    } catch (error) {
        console.error(error)
    }
}

async function renderData1 () {
    const products = await fetchProductData(); //array of the products
    let productsContainer = document.getElementById("products-container")
    for (let i = 0; i < products.length; i++) {
        let currentItem = products[i]; //current product
        let newElement = document.createElement("p"); //add to DOM
        newElement.innerText = `
        ${currentItem.title}
        ${currentItem.description}
        $${currentItem.price}
        Currently ${currentItem.discountPercentage}% Off`
        newElement.style.border = "1px solid black"
        newElement.style.display = "flex"
        newElement.style.flexDirection = "column"
        productsContainer.appendChild(newElement)
    }
}
renderData1 (); 

async function fetchPostData () {
    try {
        let response = await fetch("https://dummyjson.com/posts")
        let translatedPostData = await response.json()
        console.log(translatedPostData)
        let actualPostData = translatedPostData.posts
        return actualPostData        
    } catch (error) {
        console.error(error)
    }
}

async function renderPostsData () {
    let posts = await fetchPostData(); //array of the posts
    const postsContainer = document.getElementById("posts-container")
    for (let i = 0; i < posts.length; i++) {
        let currentItem = posts[i]; //current post
        let newElement = document.createElement("p"); //add to DOM
        newElement.innerText = `
        ${currentItem.title}
        ${currentItem.body}`
        newElement.style.border = "1px solid black"
        newElement.style.width = "30%"
        newElement.style.padding = "10px"
        postsContainer.appendChild(newElement)
    }
}
renderPostsData (); 