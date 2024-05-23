// 문자열 string (객체) 
//문자형 데이터를 객체로 취급해서 컨트롤

{
    const str = 'you he she they we he me'
    console.log(str.length);
    console.log(str.charAt(4)); // 내가 정한 인덱스에 해당하는 문자열을 보여준다.
    console.log(str.indexOf('he')); //제일먼저 일치하는 문자열 인덱스를 보여줌 ->현재는 제일 처음이 4번 인덱스므로 4로 뜸
    console.log(str.indexOf('dog')); //제일먼저 일치하는 문자열 인덱스를 보여줌 -> 없는 문자열은 -1로 표기 됌
    console.log(str.lastIndexOf('he')); //마지막일치하는 문자열 인덱스를 보여줌
    console.log(str.match('he')); // 
    console.log(str.match('he').input); //  he가 포함된 배열 문장을 보여준다.
    console.log(str.match('he').index); //  he의 배열 갯수를 말해줌. 그러므로 4로 나옴
    console.log(str.replace('they', 'html')); //  내가 정한 문자를 바꿔줌.
    console.log(str.search('she')); //  she가 있는 배열 위치를 보여줌
    console.log(str.slice(4, 10)); //  4~10까지의 배열만 잘라서 보여준다. 그러므로 he she가 나옴.
    console.log(str.substring(3, 12)); // 3배열부터 12배열 이전까지 , 즉 11까지 보여준다.
}


//문자열을 배열로 만들기
{
    const str = 'html,css,javascript'
    const result = str.split(',') //내가 원하는 문자열을 기준으로 잘라서 배열해줌.
    console.log(result);

    const str2 = '그들에게 생명을 불어넣는 것은 따뜻한 봄바람이다. 풀밭에 속잎 나고, 가지에 싹이 트고, 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며, 얼마나 아름다우냐? 이것을 얼음 속에서 불러내는 것이 따뜻한 봄바람이다. 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다. '

    const result2 = str2.split(' ')
    console.log(result2);
}

//대소문자
{
    const str = 'hello'
    console.log(str.toUpperCase()); //대문자로 출력
    console.log(str.toLowerCase()); //소문자로 출력
}

//문자 합치기
{
    const str = 'hello'
    const result = str.concat('world') //배열 메소드 합치기
    console.log(result);
}

//공백제거
// trim을 쓰면 맨 앞 공백을 없애줌
{
    const str = ' hello world'
    const result = str.trim()
    console.log(str);
    console.log(result);
}


// 방문자의 이름을 대문자로 출력
//전화번호의 뒷자리 4개를 *로 출력
{
    const name = prompt('당신의 이름은?', '')
    const phone = prompt('당신의 연락처는?', '')
    const name2 = name.toUpperCase()
    const phone2 = phone.substring(0, phone.length - 4) + '****'
    document.write(name2, '<br>')
    document.write(phone2, '<br>')
}

