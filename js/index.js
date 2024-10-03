const body = document.querySelector('body');
const fix = document.querySelectorAll('.fix')
const headerAddInfo = document.querySelector('.header__addInfo');
const headerAddInfoBtn = document.querySelector('.header__addInfo-btn');
const headerAddInfoList = document.querySelector('.header__addInfo-list');
const headerAddInfoListBtn = document.querySelector('.header__addInfo-list-btn');
const headerAddInfoItem = document.querySelectorAll('.header__addInfo-item');
const subMenuLink = document.querySelectorAll('.sub-menu__link');

headerAddInfoBtn.addEventListener('click',function(item){
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    headerAddInfoList.classList.add('active')
    body.classList.add('open--menu')
    body.style.paddingRight = paddingOffset;
    if(headerAddInfoList.classList.contains('active')){
        document.querySelector('.header__logo').classList.add('black')
    }
    headerAddInfoListBtn.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
        body.style.paddingRight = 0;
        fix.forEach(function(item){
            item.style.paddingRight = 0;
        })
    })
    fix.forEach(function(item){
        item.style.paddingRight = paddingOffset;
    })
})

headerAddInfoItem.forEach(function(item){
    item.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
        body.style.paddingRight = 0;
        fix.forEach(function(item){
            item.style.paddingRight = 0;
        })
    })
})

subMenuLink.forEach(function(item){
    item.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
        body.style.paddingRight = 0;
        fix.forEach(function(item){
            item.style.paddingRight = 0;
        })
    })
})

window.addEventListener('click', function(e) {
    let currentItem = e.composedPath().includes(headerAddInfo);
    if (!currentItem) {
        headerAddInfoList.classList.remove('active');
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu');
        body.style.paddingRight = 0;
        fix.forEach(function(item){
            item.style.paddingRight = 0;
        })
    }
});



////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    let scrollDistance = window.scrollY;
    if(scrollDistance > 200) {
        document.querySelector('.header').classList.add('header--color');
    } else{
        document.querySelector('.header').classList.remove('header--color');
    }
    window.addEventListener('scroll', function() {
        scrollDistance = window.scrollY;
        if(scrollDistance > 200) {
            document.querySelector('.header').classList.add('header--color');
        }else{
            document.querySelector('.header').classList.remove('header--color');
        }
    });
});


////////////////////////////////////////////////////////////////////////////////

const swiperBig = new Swiper('.top-swiperBig', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperSmall = new Swiper('.top-swiperSmall', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    slideToClickedSlide:true,
    breakpoints:{
        1300:{
            slidesPerView: 3,
        },
        767:{
            slidesPerView: 2,
        }
    },
    on:{
        click:function(swiper){
            swiperBig.slideTo(swiper.clickedIndex);
        }
    }
});

swiperBig.on('slideChange',function(){
    swiperSmall.slideTo(swiperBig.activeIndex);
})
swiperSmall.on('slideChange',function(){
    swiperBig.slideTo(swiperSmall.activeIndex);
})


////////////////////////////////////////////////////////////////////////////////

const modelSwiper = new Swiper('.model-swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    loop:true,
    effect: "coverflow",
    navigation: {
        nextEl: '.model-swiper__btn--next',
        prevEl: '.model-swiper__btn--prev',
    },
    breakpoints:{
        1280:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 2.2,
        },
        601:{
            slidesPerView: 1.5,
        }
    },
});

////////////////////////////////////////////////////////////////////////////////

const equipmentBig = new Swiper('.equipment-swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop:true,
    navigation: {
        nextEl: '.equipment-swiper__btn--next',
        prevEl: '.equipment-swiper__btn--prev',
    },
    breakpoints:{
        1200:{
            slidesPerView: 2.5,
        },
        768:{
            slidesPerView: 2.2,
        },
        601:{
            slidesPerView: 1.5,
        }
    },
});


//////////////////////////////////////////////////////////////////////////////

const formSearchBtn = document.querySelector('.form-search__btn');
const formSearchContent = document.querySelector('.form-search__content');
const formSearchContentInput = document.querySelector('.form-search__content-input');
const formSearchContentClear = document.querySelector('.form-search__content-clear');

formSearchBtn.addEventListener('click',function(){
    formSearchBtn.classList.toggle('xmark')
    formSearchContent.classList.toggle('active')
})

formSearchContentInput.addEventListener('input',function(){
    console.log(formSearchContentInput.value.length)
    if(formSearchContentInput.value.length > 0){
        formSearchContent.classList.add('clear')
    }else{
        formSearchContent.classList.remove('clear')
    }
})

formSearchContentClear.addEventListener('click',function(){
    formSearchContentInput.value = '';
    formSearchContentInput.focus();
    setTimeout(() => {
        formSearchContentInput.dispatchEvent(new Event('input'))
    }, 0);
})

////////////////////////////////////////////////////////////////////////////////

const newMore = document.querySelector('.new__more');
const newItems = document.querySelector('.new__items')

newMore.addEventListener('click',function(){
    newItems.classList.toggle('more')
    if(newItems.classList.contains('more')){
        newMore.textContent = 'Посмотреть меньше';
    }else{
        newMore.textContent = 'Показать все';
        document.querySelector('.new').scrollIntoView({ behavior: 'smooth' });
    }
})

//////////////////////////////////////////////////////////////////////////////

Fancybox.bind("[data-fancybox]", {
});

////////////////////////////////////////////////////////////////////////////////

const newsItems = document.querySelector('.news__items');
const newsAllBtn = document.querySelector('.news__all');

newsAllBtn.addEventListener('click',function(){
    newsItems.classList.toggle('more')
    if(newsItems.classList.contains('more')){
        newsAllBtn.textContent = 'Открыть меньше'
    }else{
        newsAllBtn.textContent = 'показать все'
        document.querySelector('.news').scrollIntoView({ behavior: 'smooth' });
    }
})

////////////////////////////////////////////////////////////////////////////////

const popupSubscription = document.querySelector('.popupSubscription');
const popupSubscriptionClose = document.querySelector('.popupSubscription__close')
const newsletterFormBtn = document.querySelector('.newsletter__form-btn');


newsletterFormBtn.addEventListener('click',function(){
    popupSubscription.classList.add('open')
    document.body.classList.add('open--popupSubscription')
})

popupSubscriptionClose.addEventListener('click',function(){
    popupSubscription.classList.remove('open')
    document.body.classList.remove('open--popupSubscription')
})

popupSubscription.addEventListener('click',function(e){
    if(!e.target.closest('.popupSubscription__content')){
        popupSubscription.classList.remove('open')
        document.body.classList.remove('open--popupSubscription')
    }
})

////////////////////////////////////////////////////////////////////////////////

const menuQuestion = document.querySelectorAll('.menu__item-question');

menuQuestion.forEach(function(item){
    item.addEventListener('click',function(){
        let parentItem = item.closest('.menu__item');
        let subMenu = parentItem.querySelector('.sub-menu__list');
        item.classList.toggle('open')
        if(item.classList.contains('open')){
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
            subMenu.style.paddingTop = 24 + 'px'
        }else{
            subMenu.style.maxHeight = 0
            subMenu.style.paddingTop = 0
        }
    })
})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const cart =  document.querySelector('.popupCart');
const cartBtn = document.querySelector('.header__info-basket');
const cartClose = document.querySelector('.popupCart__close');
const popupCartText = document.querySelector('.popupCart__product-text-link')

cartBtn.addEventListener('click',function(){
    cart.classList.add('open')
    body.classList.add('open--cart')
})

cartClose.addEventListener('click',function(){
    cart.classList.remove('open')
    body.classList.remove('open--cart')
})

popupCartText.addEventListener('click',function(){
    cart.classList.remove('open')
    body.classList.remove('open--cart')
})

///////////////////Jquery///////////////////////////////

// $('.card-product').hover(
//     function(){
//         $(this).find('.card-product__hovercontent').fadeIn(1000)
//     },
//     function(){
//         $(this).find('.card-product__hovercontent').fadeOut(1000)
//     },
// )




