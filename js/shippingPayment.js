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

/////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////

const shippingItem = document.querySelectorAll('.shipping__item');

shippingItem.forEach(function(item){
    item.addEventListener('click',function(){
        let currentAnswerItem = item.querySelector('.shipping__answerbox');
        item.classList.toggle('open')
        if(item.classList.contains('open')){
            currentAnswerItem.style.maxHeight = currentAnswerItem.scrollHeight + 'px'
        }else{
            currentAnswerItem.style.maxHeight = 0
        }
    })
})

const paymentItem = document.querySelectorAll('.payment__item');

paymentItem.forEach(function(item){
    item.addEventListener('click',function(){
        let currentAnswerItem = item.querySelector('.payment__answerbox');
        item.classList.toggle('open')
        if(item.classList.contains('open')){
            currentAnswerItem.style.maxHeight = currentAnswerItem.scrollHeight + 'px'
        }else{
            currentAnswerItem.style.maxHeight = 0
        }
    })
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
