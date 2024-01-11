let openBtn = document.querySelector('.btn-open'),
    windowModal = document.querySelector('.window'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    btnOne = document.querySelector('.btn-one'),
    btnTwo = document.querySelector('.btn-two'),
    btnThree = document.querySelector('.btn-three'),
    img = document.querySelector('.img')

openBtn.addEventListener('click',()=>{
    windowModal.style.display = 'block'
    windowModal.style.display = 'flex'
    modal.style.animation = 'modal 1s linear alternate'

})
close.addEventListener('click',()=>{
    windowModal.style.display = 'none'
})
btnOne.addEventListener('click',()=>{
    img.classList.add('img-one');
    img.classList.remove('img-two')
    img.classList.remove('img-three')

    btnOne.style.background = "green"
    btnTwo.style.background = ""
    btnThree.style.background = ""

})
btnTwo.addEventListener('click',() =>{
    img.classList.remove('img-one');
    img.classList.remove('img-three');
    img.classList.add('img-two')

    btnOne.style.background = ""
    btnTwo.style.background = "green"
    btnThree.style.background = ""

})
btnThree.addEventListener('click',() =>{
    img.classList.remove('img-one')
    img.classList.remove('img-two')
    img.classList.add('img-three')

    btnOne.style.background = ""
    btnTwo.style.background = ""
btnThree.style.background = "green"

})

// let test = document.querySelector('.new')
//
// console.log(test.className)
// console.log(test.classList)
// console.log(test.classList.add('text'))
// console.log(test.classList.remove('text'))
// console.log(test.classList.toggle('new'))
