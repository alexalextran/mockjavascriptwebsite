// template_ivv5v7f
// service_tj4vxst
// user_2jIT9NA6dfZ3X4lKgbInB


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

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen=false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
    
}
    
        