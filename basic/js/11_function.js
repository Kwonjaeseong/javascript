// function 함수 

//함수선언과 호출

function hello(){
    console.log('안녕, 자바스크립트'); //함수의 선언
}

hello()  //함수를 호출해줘야 콘솔에 실행이 됌.

// -> 다른형식

const sayHello = function(){
    console.log('😍 hello~~');
}
sayHello()


const sayHello2 = () => console.log('😍 hello~~');
sayHello2()


//2.매개변수 parameter

function printMessage(message){
    console.log(message);
}

printMessage('하하하')
printMessage('파파파')


// 3.기본 매개변수
function showInfo(title, name = '스티브 잡스'){
    console.log(`${title} by ${name}`);
}


showInfo('베르니카', '피카소')
showInfo('풍경')


//4. rest 매개변수 /spread 연산자

function printAll(...items){
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);
    }
}

printAll('봄', '여름', '가을', '겨울')

// 5. scope

const movie = '하하하' // global 변수 (전역변수)


function paintMovie(){
    const myMovie = '생활의 발견' //local 변수 (지역변수)
    console.log(movie);
    console.log(myMovie);
}

paintMovie()
// console.log(movie);
// console.log(myMovie);


// 6. return 
function plus(a, b){
    return a + b
    console.log('계산을 마쳤습니다.');
}

const result = plus(5, 10)
console.log(result);


// 7. callback funticon 콜백함수

const call = function(myName, printPicasso, printJobs) {
    if(myName === 'Picasso'){
        printPicasso()
    } else {
        printJobs()
    }
}

const printPicasso = function(){
    console.log('Im Picasso');
}

const printJobs = function(){
    console.log('Im Jobs');
}

call('Picasso', printPicasso, printJobs)


// 8. Arrow function 
const add = function(a, b){
    return a + b
}

const add2 = (a, b) => a + b

const sum = add(5, 8)
const sum2 = add2(10, 20)
console.log(sum, sum2);