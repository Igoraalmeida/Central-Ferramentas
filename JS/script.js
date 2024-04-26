function menuShow(){
    let mobileMenu = document.querySelector('.mobile-menu');
    let sideMenuImg = document.querySelector('.side-menu-img');
    
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
        sideMenuImg.src="/Central-Ferramentas/IMG/menu.png"
        sideMenuImg.style.cssText += 'color:red';
    } else {
        mobileMenu.classList.add('open')
        sideMenuImg.src = "/Central-Ferramentas/IMG/x.png"
    }
}


function mostrarTxt1(){
    let txt1 = document.querySelector('#txt1');
    let txt2 = document.querySelector('#txt2');
    var btn1 = document.querySelector('#btn1')
    var btn2 = document.querySelector('#btn2')
    var txtList1 = document.querySelector('#txt-list1')
    var txtList2 = document.querySelector('#txt-list2')
    var link1 = document.querySelector('#link1')
    var link2 = document.querySelector('#link2')


    txtList1.classList.toggle('showing');
    link1.classList.toggle('showing')
    txt1.classList.toggle('showing');

    if(txt1.classList.contains('showing')){
        btn2.style.backgroundColor ='rgb(29, 20, 20)';
        btn2.style.transform = "none"
        btn1.style.backgroundColor ='rgba(255, 255, 255, 0.137)';
        btn1.style.transform = "scaleX(0.9)"
        txtList2.classList.remove('showing')
        link2.classList.remove('showing')
    } else {
        btn1.style.backgroundColor ='rgb(29, 20, 20)';
        btn1.style.transform = "none"
}
    txt2.classList.remove('showing')
}

function mostrarTxt2(){
    let txt1 = document.querySelector('#txt1');
    let txt2 = document.querySelector('#txt2');
    var btn1 = document.querySelector('#btn1')
    var btn2 = document.querySelector('#btn2')
    var txtList1 = document.querySelector('#txt-list1')
    var txtList2 = document.querySelector('#txt-list2')
    var link1 = document.querySelector('#link1')
    var link2 = document.querySelector('#link2')
    var txtList2 = document.querySelector('#txt-list2')
   
    txtList2.classList.toggle('showing')
    link2.classList.toggle('showing')
    txt2.classList.toggle('showing')
    
    

    
    if(txt2.classList.contains('showing')){
        btn1.style.backgroundColor ='rgb(29, 20, 20)';
        btn1.style.transform = "none"
        btn2.style.backgroundColor ='rgba(255, 255, 255, 0.137)';
        btn2.style.transform = "scaleX(0.9)"
        txtList1.classList.remove('showing');
        link1.classList.remove('showing')
    } else{
        btn2.style.backgroundColor ='rgb(29, 20, 20)';
        btn2.style.transform = "none"
    }
    


    txt1.classList.remove('showing')
}