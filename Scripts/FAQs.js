

document.addEventListener("DOMContentLoaded", () => {


  const accordion = document.getElementsByClassName('accordion-box');
        for (i =0; i<accordion.length; i++){

        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active')
        });
    }

});