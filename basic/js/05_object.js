// object 객체
// 자바스크립트 객체기반 언어
//객체는 속성과 기능을 가진다.
// phone 속성(property)-> color , size
// phone 기능(method) -> ring, take a picture, play music
//형식 { 키: 값(value), 키2: 값(value)}

// 객체의 종류
// 내장객체 : 문자(string), 날짜(date), 배열(array), 수학(math), etc...
//브라우저 객체 모델 (BOM):window, screen, location, history, navigator
//문서 객체 모델 (DOM)) : html 문서구조 


//sample 객체

const user = {
    name:'Picasso',
    age : 36,
    email: 'pacasso@gmail.com',
    works:[
        {id: 1, title: '게르니카', price: 10000, like: 50},
        {id: 2, title: '아비뇽의 처녀들', price: 30000, like: 80},
        {id: 3, title: '우는여왕', price: 50000, like: 200},
    ],

    goodworks(){
        console.log('피카소의 대표작');
        this.works.forEach((work) => {
            console.log(`${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`);
            console.log(work);
        })
    },

    paintworks(){
        let goods = ''
        this.works.map((work) => {
            goods += `<div>${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})</div>`
        })

        document.querySelector('.text').innerHTML = goods
    },

    
    // login: function(){
    //     console.log('환영합니다.');
    // },

    login(){
        console.log('환영합니다.');        
    },

    logout(){
        console.log('안녕히가세요.');
    }

}



console.log(user.age);

//수정
user.age = 48
console.log(user.age);

//타입확인
console.log(typeof user);

//method
user.login()
user.logout()
user.goodworks()
user.paintworks()