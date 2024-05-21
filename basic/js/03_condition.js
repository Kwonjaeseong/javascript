// 조건 condition
// if, else, if eles문

{
    const age = prompt('당신의 나이는?')
    // if(age){
    //     //참일 때 실행 
    // } else {
    //     // 거짓일 때 실행
    // }

    if (age >= 20) {
        console.log('성인입니다.');
    } else {
        console.log('청소년입니다.')
    }
}



{
    const month = prompt('지금은 몇 월 입니까?')
    if (month >= 3 && month <= 5) {
        console.log('봄 입니다.');
    } else if(month >= 6 && month <= 8) {
        console.log('여름입니다.');
    } else if(month >= 9 && month <= 11) {
        console.log('가을입니다.');
    } else {
        console.log('겨울입니다.');
    }
}


// 2. switch 문
switch (key) {
    case value:
        // 참일 때 실행
        break; 
    case value:
        // 실행
        break;

    default:
        break;
}


{
    const site = prompt('네이버, 다음 , 구글 중에서 선호하는 포털 사이트는')

    switch (site) {
        case '구글':
            url = 'https://google.com'
            break
        case '다음':
            url = 'https://daum.com'
            break
        case '네이버':
            url = 'https://naver.com'
            break
        default:
            url = null
            break
    }

    if(url) {
        const message = `당신은 <a href= ${url} target="_blank">${site}</a>를 좋아하는 군요`
        document.querySelector('.text').innerHTML = message
    } else {
        document.querySelector('.text').innerHTML = '당신은 어떤 사이트를 좋아하나요?'
    }
}
