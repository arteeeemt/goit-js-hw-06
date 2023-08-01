const ulList = document.getElementById('categories')



const categoryList = ulList.querySelectorAll('li.item')

console.log('Number of categories:', categoryList.length,)

categoryList.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const items = item.querySelectorAll('ul li')
    const itemsCount = items.length
    console.log('Category:', title)
    console.log('Elements:',itemsCount)
})