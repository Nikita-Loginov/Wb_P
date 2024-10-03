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

const productFilterAll = document.querySelectorAll('.product-filter__all');
const productFilterForm = document.querySelectorAll('.product-filter__form');
const productFilterHeader = document.querySelectorAll('.product-filter__header');


productFilterAll.forEach(function(item){
    item.addEventListener('click',function(){
        let currentItemForm = item.parentNode
        currentItemForm.classList.toggle('more')
        if(currentItemForm.classList.contains('more')){
            item.textContent = 'Показать меньше'
        }else{
            item.textContent = 'Показать ещё'
        }
    })
})

productFilterHeader.forEach(function(item){
    item.addEventListener('click',function(){
        let currentItemForm = item.parentNode
        currentItemForm.classList.toggle('close')
    })
})

////////////////////////////////////////////////////////////////////////////////

let rangeslider = document.querySelector('.rangeslider');
let priceInput1 = document.getElementById('price-1');
let priceInput2 = document.getElementById('price-2');
let inputs = [priceInput1,priceInput2];

noUiSlider.create(rangeslider, {
    start: [0, 99999],
    connect: true,
    step:1,
    range: {
        'min': [0],
        'max': [99999]
    }
});

rangeslider.noUiSlider.on('update',function(values,handle){
    inputs[handle].value = Math.round(values[handle])
})

function setRangeSlider(i,value){
    let arr = [null,null];
    arr[i] = value;
    rangeslider.noUiSlider.set(arr)
}

inputs.forEach(function(el,index){
    el.addEventListener('change',function(e){
        setRangeSlider(index,e.currentTarget.value)
    })
})

////////////////////////////////////////////////////////////////////////////////

const sortFilterBtn = document.querySelectorAll('.sort__filter-btn');
const productItems = document.querySelector('.product__items')

sortFilterBtn.forEach(function(item){
    item.addEventListener('click',function(){
        sortFilterBtn.forEach(function(item){
            item.classList.remove('active')
        })
        sortFilterBtn.forEach(function(item){
            item.classList.remove('active')
        })
        productItems.classList.remove('sort-3')
        productItems.classList.remove('sort-2')
        let currentItem = this.id;
        if(currentItem === 'sort-2'){
            productItems.classList.add('sort-2')
            this.classList.add('active')
        }else{
            productItems.classList.add('sort-3')
            this.classList.add('active')
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

const sortFilterSearchMedia = document.querySelector('.sort__filter-searchMedia');
const productFilter = document.querySelector('.product-filter');
const filterClose = document.querySelector('.product-filter__headerMedia-close');

sortFilterSearchMedia.addEventListener('click',function(item){
    productFilter.classList.add('open')
    document.querySelector('body').classList.add('open--filter')
})

filterClose.addEventListener('click',function(item){
    productFilter.classList.remove('open')
    document.querySelector('body').classList.remove('open--filter')
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






