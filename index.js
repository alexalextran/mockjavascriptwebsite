// template_ivv5v7f
// service_tj4vxst
// user_2jIT9NA6dfZ3X4lKgbInB
let isModalOpen = false;
let contrastToggle = false;
const scalefactor = 1 / 20

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scalefactor
    const y = event.clientY * scalefactor
    console.log(x,y)
    
    for(let i =0; i< shapes.length; ++i){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


function toggleContrast(){
    contrastToggle = !contrastToggle

    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

 function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

 emailjs 
       .sendForm(
       'service_tj4vxst',
         'template_ivv5v7f',
        event.target,
       'user_2jIT9NA6dfZ3X4lKgbInB'
       
       ).then(() => {
           loading.classList.remove("modal__overlay--visible");
           success.classList += " modal__overlay--visible"
       }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact directly me @ alextran474@gmail.com")
       })
     

}


function toggleModal(){
    if(isModalOpen){
        isModalOpen=false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
    
}
    
        