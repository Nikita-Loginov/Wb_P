const body = document.querySelector('body')
const headerAddInfo = document.querySelector('.header__addInfo');
const headerAddInfoBtn = document.querySelector('.header__addInfo-btn');
const headerAddInfoList = document.querySelector('.header__addInfo-list');
const headerAddInfoListBtn = document.querySelector('.header__addInfo-list-btn');
const headerAddInfoItem = document.querySelectorAll('.header__addInfo-item');
const subMenuLink = document.querySelectorAll('.sub-menu__link');


headerAddInfoBtn.addEventListener('click',function(item){
    headerAddInfoList.classList.add('active')
    body.classList.add('open--menu')
    if(headerAddInfoList.classList.contains('active')){
        document.querySelector('.header__logo').classList.add('black')
    }
    headerAddInfoListBtn.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
    })
})

headerAddInfoItem.forEach(function(item){
    item.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
    })
})

subMenuLink.forEach(function(item){
    item.addEventListener('click',function(item){
        headerAddInfoList.classList.remove('active')
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu')
    })
})

window.addEventListener('click', function(e) {
    let currentItem = e.composedPath().includes(headerAddInfo);
    if (!currentItem) {
        headerAddInfoList.classList.remove('active');
        document.querySelector('.header__logo').classList.remove('black');
        body.classList.remove('open--menu');
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


