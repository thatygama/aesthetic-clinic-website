
var btnScrollMenu = document.querySelector('#btnBackMenu')
btnScrollMenu.addEventListener('click', scrollUp)

function scrollUp(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
    })
}

function showBtn(){

    let scrollPosition = window.scrollY

    if (scrollPosition > 500){
        btnScrollMenu.style.display = "block"
    } else{
        btnScrollMenu.style.display = "none"
    }

}

setInterval(showBtn, 200)

var navMenu = document.querySelector('.navMenuTel')
var btnMenu = document.querySelector('.menuOpener')
btnMenu.addEventListener('click', showMenu)

function showMenu(){

        if (navMenu.style.display === 'none'){
            navMenu.style.display = 'flex'
            
        } else{
            navMenu.style.display = 'none'
            
        }

} 

