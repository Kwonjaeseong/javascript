// math object

{
    // console.log(Math);
    // console.log(Math.PI);

    // const sum = 9.4
    // const sum2 = '12.12456'
    // console.log(Math.round(sum));    //소숫점 첫째자리에서 반올림하여 정수반환
    // console.log(Math.ceil(sum));    //소숫점 첫째자리에서 무조건 올림하여 정수반환
    // console.log(Math.floor(sum));    //소숫점 첫째자리에서 무조건 내림하여 정수반환
    // console.log(parseInt(sum2)); //문자를 숫자로 반환 - 정수
    // console.log(Number(sum2)); //문자를 숫자로 반환 -전체 숫자 다
}


{
    //random
    const num = Math.random()
    console.log(num);

    //0 ~ 9 사이의 정수 출력

    console.log(Math.floor(Math.random() * 10));


    //1 ~ 9 사이의 정수 출력

    console.log(Math.floor(Math.random() * 10 + 1));

    //점심 메뉴 결정
    
    const food = ['라면', '김밥', '우동', '칼국수', '햄버거']
    const randomNum = Math.floor(Math.random() * food.length)
    document.querySelector('.text').innerHTML = food[randomNum]
}