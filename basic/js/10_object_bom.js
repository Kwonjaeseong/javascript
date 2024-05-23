// browser Object model


{
    // window.open('https://daum.net') //내가 원하는 사이트 창 팝업창으로 열기
    // window.alert('안녕')  //경고창 뜨게 하기
    // window.prompt('이름은?') //질문창 만들기
    // window.confirm('정말 삭제하시겠습니까?') //한번 더 물어보게 예, 아니오 창 뜨게하기 
    // window.setInterval(() => {
    //     console.log('안녕');
    // }, 1000)

    // window.setTimeout(()=>{
    //     console.log('hello');
    // },3000)
    // window.open(
    //     './popup.html',
    //     'popup1',
    //     'width=300, height=200, left=100, top=50'
    // )

}


// screen객체

{
    console.log(screen.width);  //사용자의 모니터 넓이를 가져옴
    console.log(screen.height); //사용자의 모니터 높이를 가져옴
}

// location 객체 (주소창)
{
    console.log(location.href); //주소를 보여줌
    console.log(location.hash); //hash값이 있을 때 보여줌
    console.log(location.hostname); //실제 나의 도메인 주소가 나옴
    console.log(location.protocol); //http? https 인지 확인가능.
}

//navigator 객체
{
    console.log(navigator.userAgent); //내가 어떤 운영체제, 브라우저로 들어와서 작업하는지 알 수 있음.
}

