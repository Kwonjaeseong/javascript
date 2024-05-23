// array object 배열

// 1. 배열 만들기
{
    const arr1 = new Array()
    console.log(arr1);
    arr1[0] = 10
    arr1[1] = 'hello'
    console.log(arr1);

    const arr2 = [1, 3, 5, 7, 9]
    console.log(arr2);

    const arr3 = ['what', 'are', 'u', 'doing', 100, true]
    console.log(arr3);

    const arr4 = [
        'a',
        {model: 'apple', price: 1000},
        {model: 'apple', price: 2000},
    ]
    console.log(arr4);
    console.log(arr4[1].model);  //배열안에 데이터 뽑아내기
    console.log(arr4[3]); //정의 되어있지 않기에 undefined로 뜸  

}

// 2.배열 출력
{
    const books = ['html', 'css', 'javascript']
    console.log(books);
    console.log(books.length);
    console.log(books[0]); //배열의 첫번째 요소를 반환
    console.log(books[books.length - 1]); // 배열의 마지막 요소를 반환한다.

    //for
    for(let i = 0; i < books.length; i++){
        console.log(books[i]);
    }

    //for of //of를 써서 변수 이름을 다르게 해도 나오게 해줌
    for(let book of books) {
        console.log(book);
    }

    //for in 
    for(let key in books){
        console.log(books[key]);
    }

    // // foreach   - 가장중요
    // function (){
    //     //실행문
    // }
    //     -> 코드를 요약해주면
    // () => {
    //     //실행문
    // }

    books.forEach(function(book){
        console.log(book + ' is good');
    })
    
    books.forEach(book => {
        console.log('🎫' + book);
    });

    // map : 새로운 배열을 리턴 (리턴 받아줄 수신자가 필요하므로 return 코드를 써줘야함) -중요

    const newBooks = books.map(function(book) {
        return `🎄 ${book}`
    })

    console.log(newBooks);

    const newBooks2 = books.map(item => `${item} 🎨`)
    console.log(newBooks2);

}

// 3. 배열 method

{
    const books = ['html', 'css', 'javascript', 'jquery', 'react']

    // 배열을 문자열로 만드는 방법
    console.log(books.join(' ')); // '' 안에 넣은 문자열대로 배열해줌
    console.log(books.reverse()); //반대순서로 해줌
    console.log(books.sort()); //알파뱃 순으로 해줌

    books.push('php')  //뒷쪽에 열을 하나 추가 해줌
    console.log(books);

    books.unshift('jsp') //앞쪽에 열을 하나 추가해줌
    console.log(books);

    books.pop()  //뒷 열 하나를 삭제
    console.log(books);

    books.shift() //앞 열 하나를 삭제
    console.log(books);

    //splice : 지정한 위치에서 삭제. 추가

    books.splice(2, 1, '하하하', '호호호')  //내가 지정한 위치의 열을 삭제하고  넣우주기
    console.log(books);

    
    //합치기
    const Books2 = ['git', 'nodejs']
    const newBooks = books.concat(Books2)
    console.log(newBooks);

    //원하는 구간만큼 잘라서 새로운 배열을 리턴
    const anotherBooks = newBooks.slice(2, 4)
    console.log(anotherBooks);

    //배열안에 있는 것 검색

    console.log(books);
    console.log(books.indexOf('react'));
    console.log(books.includes('css'));
    console.log(books.includes('github'));
}

    //4. 활용
    const sojus = [
        { name: '대선', price: 1200, sale: true, score:86 },
        { name: '좋은데이', price: 1100, sale: false, score:92},
        { name: '진로', price: 1150, sale: true, score:80 },
        { name: '금덕주', price: 960, sale: false, score:60 },
        { name: '참이슬', price: 1250, sale: true, score:46 }
    ]



//score가 80인 소주를 찾기

{
    const result = sojus.find(soju => soju.score === 80)
    console.log(result);
}

//판매중인 소주를 찾아서 새로운 배열로 만들기

{
    const result = sojus.filter(item => item.sale)
    console.log(result);
}

//점수만 있는 새로운 배열 만들기

{
    const result = sojus.map(item => item.socre)
    console.log(result);
}

//점수가 50보다 작은 소주가 있는지 확인
{
    const result = sojus.some(item => item.score < 50)
    console.log(result); // 참 거짓인지만 확인

    const result2 = sojus.find(item => item.score < 50)
    console.log(result2); //종류 확인가능

}

//소주들의 평균가격 구하기

{
//     sojus.reduce((prev,current) => {
//         // return 문
//     }, 초기값)
    
    const result = sojus.reduce((prev, current) => {
        return prev + current.price
    }, 0)

    console.log(result / sojus.length);

}

//점수를 문자로 만들기

{
    const result = sojus.map(item => item.score).join('-')
    console.log(result);
    
}

//점수가 낮은 순으로, 문자열 정리하기

{
    const result = sojus //
    .map(item => item.score)
    .sort((a ,b )=> a - b)
    .join()
    console.log(result);
}







