let inven = document.querySelector('.header__right-link')
let headerBox = document.querySelector('.header__inven-box')
inven.addEventListener('click', () =>{
    if (headerBox.classList.contains('active')) {
        headerBox.classList.remove('active')
    }else{
        headerBox.classList.add('active')
    }
})


let freeBtn = document.querySelector('.main__keys-open'),
freeCase = document.querySelector('.free'),
freeClose = document.querySelector('.free__close')

freeBtn.addEventListener('click', () =>{
    if (freeCase.style.display = `none`) {
        freeCase.style.display = `flex`
    }
    freeClose.addEventListener('click', () =>{
        freeCase.style.display = `none`
    })
})