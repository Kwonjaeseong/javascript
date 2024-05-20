// 대화상자 alert, prompt, confirm
{
    // const name = prompt('이름을 입력하세요', '영업팀');
    // alert(`안녕하세요 ${name}님, 환영합니다.`)
    // const ischeck = confirm('확인하였습니까?')
    // console.log(ischeck)
    // document.write(name)

}

// variable 변수

// var, let, const <<그릇이라고 생각하면 편함
// var 이름 = value

// 1. var
// 읽기, 쓰기 가능하다.
// 블럭을 무시한다.

{
    var username = 'Alice'
    console.log(username)

    username = 'Picasso'
    console.log(username)
}

console.log(username)

// 2. let
// 읽기, 쓰기가 가능하다
// 하지만 블럭을 무시하지 못한다.
{
    let title = 'html'
    console.log(title)

    title = 'css'
    console.log(title)
}

// console.log(title)

// 3.const
// 읽기만 가능하다. - 변하지 않는다.
{
    const subject = 'html'
    console.log(subject)

    // subject = 'css'

}

// 변수는 문자와 숫자, $와 _ 만 사용가능하다.
// 첫글자 숫자는 사용불가
// 예약어(미리 만들어져있는, 프로그래밍 됀 코드)는 사용불가

// 4. 변수의 데이터 타입 - 자료형
// 원시데이타(premitive) : String, number, Boolean, null, undefined
// object : 싱글데이타를 묶어놀은  데이타
// function : 일급객체(first class object)
/// 변수에 담을 수 있다.
/// 함수나 메서드의 인자로 넘길 수 있다.
///.00 함수나 메서드에서 리턴할 수 있다.

// 5. 문자형 String
{
    const name1 = 'Alice'
    const name2 = 'Alice'
    const name3 = 'Alice'

    const firstName = 'Pablo'
    const lastName = 'Picaso'
    const fullName = firstName + ' ' + lastName
    console.log(fullName);
    console.log(`${firstName} ${lastName}`)
    
}

// 6. 숫자형 Number
{
    const num = 10
    const PI = 3.14

    console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

    const a = 1 / 0
    console.log(a)
    const b = -1 / 0
    console.log(b);
    const c = 'html' / 10
    console.log(c);
}


// 7. 불린 불리언 Boolean
// 참과 거짓을 나타냄

{
    const a = true
    const b = false

    const name = 'Alice'
    const age = 16

    console.log(name == 'Alice');
    console.log(age > 20);
}

// 8. null / undefined
// null - 존재하지 않는 값
// undefined = 값이 할당되지 않음

{
    const box = null
    console.log(`값은 ${box}이고, 타입은 ${typeof box}입니다.`)

    let box2
    console.log(`값은 ${box2}이고, 타입은 ${typeof box2}입니다.`)


}

// 9. 동적타입
// 자바스크립트의 타입은 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
//typescript

{
    let word = 'winter'
    console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
    word = 100
    console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
    word = '100' + 10
    console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
    word = '100' / 10
    console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
}

{   // 형변환
    // const mathScore = prompt('당신의 수학점수는?')
    // const engScore = prompt('당신의 영어점수는?')
    // const average = (Number(mathScore) + Number(engScore)) / 2
    // alert(`평균 점수는 ${average}입니다.`)
}
// 문자열로 형변환
{ 
    console.log(
        String(1234),
        String(true),
        String(false),
        String(null),
        String(undefined)
    );

    console.log(
        Number('1234'),
        Number('1234hello'),
        Number(false),
        Number(true),
        Number(null),
        Number(undefined)
    );

    console.log(
        Boolean(0),
        Boolean('0'),
        Boolean(''),
        Boolean(' '),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN)
    );
}




