// 객체 지향 프로그램

//class

//템플릿
//한 번만 선언
//형태만 있고, 데이타가 없다. 어떤 데이터(인스턴스)를 넣느냐에 따라 다른 객체들이 생긴다.

//복제 -> object
//인스턴스
// 복수로 생성가능
//실제 데이타가 존재


//클래스 선언 클래스는 함수와 차별을 두기 위해 대문자로 시작해야한다.
// class Car {
//     constructor(name, color){ //생성자
//         this.name = name //필드
//         this.color = color 
//     }

//     start(){
//         console.log(`${this.name} is start!!!`);
//     }

//     stop(){
//         console.log(`${this.name} is stop!!!`);
//     }
// }

// const myCar = new Car('🚗 sotana', 'red')  //인스턴스
// console.log(myCar.name);
// console.log(myCar.color);
// myCar.start()
// myCar.stop()

// const oldCar = new Car('🚕 pony', 'yellow') //인스턴스
// console.log(oldCar.name);
// console.log(oldCar.color);
// oldCar.start()
// oldCar.stop()

// //getter and setter

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     get age(){
//         return this._age
//     }

//     set age(value){
//         this._age = value < 0 ? '나이는 0보다 작을 수 없어요.' : value
//     }
// }

// const aBoy = new Person('👨 picasso', 36)
// console.log(aBoy.age);
// console.log(aBoy.name);


//상속과 다양성
class Phone {
    constructor(name, screen, color){
        this.name = name
        this.screen = screen
        this.color = color
    }
    
    on(){
        console.log(`${this.name} is turn on`);
    }

    off(){
        console.log(`${this.name} is turn off`);
    }
}


// 삼성이 폰의 내용을 상속받는다.
class Samsung extends Phone {}
const galaxy = new Samsung('Galaxy 10', 'oled', 'white')
galaxy.on()
galaxy.off()


class Apple extends Phone {
    on(){
        super.on() //원래 상속받은 phone의 on 내용으로 띄워 줌.
        console.log('아이폰이 켜졌습니다.');
    }

    off(){
        console.log('아이폰이 꺼졌습니다.');
    }
}

const Iphone = new Apple('Iphone 8', 'lcd', 'gray')
Iphone.on()
Iphone.off()
console.log(Iphone);




