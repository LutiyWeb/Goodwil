$(document).ready(function() {

    $('.burger').click(function() {
        $('.nav_screen').toggleClass('active');
    });

    $('.burger').click(function() {
        $('.burger').toggleClass('active');
    });

    $('.burger').click(function() {
        $('.header_body').toggleClass('active');
    });

       $('.questions_btn').click(function() {
        event.preventDefault();
        $('.pop_up_wrapper').addClass('active');
    });

    $('.pop_up_overlay').click(function() {
        $('.pop_up_wrapper').removeClass('active');
    });

});


// lang customise
const lang = document.querySelectorAll('.lang_general');

for (item of lang) {
    item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for (el of lang) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}


// menu_item customise
const menu_item = document.querySelectorAll('.menu_item');

for (item of menu_item) {
    item.addEventListener('mouseenter', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for (el of menu_item) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}

