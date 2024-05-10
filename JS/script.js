// -----declarações-----
let btnIMC = document.querySelector('#btn1')
let btnTask = document.querySelector('#btn2')

let txt1 = document.querySelector('#txt1');
let txt2 = document.querySelector('#txt2');

let txtList1 = document.querySelector('#txt-list1')
let txtList2 = document.querySelector('#txt-list2')

let link1 = document.querySelector('#link1')
let link2 = document.querySelector('#link2')

let card1 = document.querySelector('.game-1')
let card2 = document.querySelector('.game-2')


//-----eventos-----
btnIMC.addEventListener('click', function(){
    mostrarBotao1();
})

btnTask.addEventListener('click', function(){
    mostrarBotao2();
})



card1.addEventListener("click", function(){
    mostrarBotao1();
})
card2.addEventListener("click", function(){
    mostrarBotao2();
})

//-----funções-----   
 function menuShow() {
     let mobileMenu = document.querySelector('.mobile-menu');
     let sideMenuImg = document.querySelector('.side-menu-img');

     if (mobileMenu.classList.contains('open')) {
         mobileMenu.classList.remove('open')
         sideMenuImg.src = "/IMG/menu.png"
         sideMenuImg.style.cssText += 'color:red';
     } else {
         mobileMenu.classList.add('open')
         sideMenuImg.src = "/IMG/x.png"
     }
 }


 function mostrarBotao1(){
    
    txt1.classList.toggle('showing')
    txtList1.classList.toggle('showing')
    link1.classList.toggle('showing')
    
    if(txt1.classList.contains('showing')){
        btnIMC.style.backgroundColor = 'rgba(255, 255, 255, 0.137)';
        btnIMC.style.padding = "25px 25px"
        btnTask.style.backgroundColor = null
        btnTask.style.padding = '20px 20px'

        txt2.classList.remove('showing')
        txtList2.classList.remove('showing')
        link2.classList.remove('showing')
    } else {
        btnIMC.style.backgroundColor = null;
        btnIMC.style.padding = "20px 20px"
    }
 }

 function mostrarBotao2(){
    txt2.classList.toggle('showing')
    txtList2.classList.toggle('showing')
    link2.classList.toggle('showing')
    
    if(txt2.classList.contains('showing')){
        btnTask.style.backgroundColor = 'rgba(255, 255, 255, 0.137)';
        btnTask.style.padding = "25px 25px"
        btnIMC.style.backgroundColor = null 
        btnIMC.style.padding = '20px 20px'      

        txt1.classList.remove('showing')
        txtList1.classList.remove('showing')
        link1.classList.remove('showing')
    
    } else {
        btnTask.style.backgroundColor = null;
        btnTask.style.padding = "20px 20px"
    }
 }
