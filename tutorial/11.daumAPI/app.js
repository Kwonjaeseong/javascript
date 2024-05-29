// key - 3cfe84f02fed3004d524c8acadccf078
// https://dapi.kakao.com/v3/search/book?target=title
// query=미움받을 용기
// Authorization: KakaoAK ${REST_API_KEY}

const input = document.querySelector('form input')
const btn = document.getElementById('btn')
const bookContainer = document.querySelector('.book_container')

let bookName = 'html'

function getBooks() {
    $.ajax(
        {
            method: 'GET',
            url : 'https://dapi.kakao.com/v3/search/book',
            data: {
                query: bookName, 
                size: 20
            },
            headers : {
                Authorization: 'KakaoAK 3cfe84f02fed3004d524c8acadccf078'
            }
        }
    ).done(function(books) {
        const bookItems = books.documents
        console.log(bookItems);

        const bookItem = bookItems.map(item => {
            return `<div class="book">
                        <img src="${item.thumbnail}" alt="">
                        <h4>${item.title}</h4>
                        <p>가격 : ${item.price}원</p>
                        <p>출판사 : ${item.publisher}</p>
                    </div>`
        }).join('')

        bookContainer.innerHTML = bookItem
    })
}

getBooks()

btn.addEventListener('click', function(e) {
    e.preventDefault()
    if(input.value === '') return
    bookName = input.value
    getBooks()
    input.value = ''
})