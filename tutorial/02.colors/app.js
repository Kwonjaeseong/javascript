const bg = ['orange', 'lightblue', 'red', 'aqua', 'yellow', 'lightgreen']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'] //#123456

const bgbtn = document.querySelector('.bg_btn')
const hexbtn = document.querySelector('.hex_btn')
const colorName = document.querySelector('.color_name')


bgbtn.addEventListener('click', function(){
    const randomBgNum = Math.floor(Math.random() * bg.length)
    console.log(randomBgNum);
    document.body.style.backgroundColor = bg[randomBgNum]
    colorName.textContent = bg[randomBgNum]
})


let hexColor = '#'
hexbtn.addEventListener('click', function() {
    for(let i=0; i < 6; i++){
        const randomHexNum = Math.floor(Math.random() * hex.length)
        console.log(hex[randomHexNum]);
        hexColor += hex[randomHexNum]
    }
    console.log(hexColor);

    document.body.style.backgroundColor = hexColor
    colorName.textContent = hexColor
})