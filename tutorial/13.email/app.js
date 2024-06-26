const form = document.querySelector('#contact-form')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close_btn')
const inputs = document.querySelectorAll('input')


function sendMail() {
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        if(userName.value == '' || email.value == '' || message == '') {
            alert('이름, 이메일, 내용을 확인하세요')
            return
        }

        dimm.classList.add('active')

        emailjs.sendForm('service_wsasczg', 'template_3k3sllh', this)
        .then(() => {
            console.log('SUCCESS!');
            modal.classList.add('active')
        }, (error) => {
            console.log('FAILED...', error);
        });
    })

    closeBtn.addEventListener('click', ()=> {
        modal.classList.remove('active')
        dimm.classList.remove('active')

        inputs.forEach(input => {
            input.value = ''
        })
        message.value = ''
    })
}

sendMail()
    
   