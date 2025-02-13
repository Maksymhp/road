const menuBtn = document.querySelector ('.burger-menu');
const  menu = document.querySelector ('.burger-info');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('burger-info--active');
});

document.getElementById('open-modal-btn').addEventListener('click',function(){
    document.getElementById('myModal').classList.add('open')
})
document.getElementById('close-my-modal-btn').addEventListener('click',function(){
    document.getElementById('myModal').classList.remove('open')
})

document.getElementById('open-modal-btn2').addEventListener('click',function(){
    document.getElementById('myModal2').classList.add('open')
})
document.getElementById('close-my-modal-btn2').addEventListener('click',function(){
    document.getElementById('myModal2').classList.remove('open')
})
document.getElementById('open-modal-btn1').addEventListener('click',function(){
    document.getElementById('myModal1').classList.add('open')
})
document.getElementById('close-my-modal-btn1').addEventListener('click',function(){
    document.getElementById('myModal1').classList.remove('open')
})
