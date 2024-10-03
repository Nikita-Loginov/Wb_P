const popupCartItems = document.querySelector('.popupCart__items');

window.addEventListener('click',function(e){
    if(e.target.dataset.btn === 'add'){
        let card = e.target.closest('.card-product');
        let cardInfo = {
            id : card.dataset.id,
            imgSrc : card.querySelector('.card-product__img img').getAttribute('src'),
            title : card.querySelector('.card-product__title').innerText,
            price : card.querySelector('.card-product__price').innerText,
            counter : card.querySelector('[data-counter]').innerText
        }
        let cardId = popupCartItems.querySelector(`[data-id='${cardInfo.id}']`)
        if(cardId) {
            let counterPopupCard = cardId.querySelector('[data-counter]')
            counterPopupCard.innerText = parseInt(counterPopupCard.innerText) + parseInt(cardInfo.counter)
        } else{
            let productItemHtml = `<div class="popupCart__item" data-id="${cardInfo.id}">
                <img class="popupCart__item-img" src="${cardInfo.imgSrc}" alt="${cardInfo.title}" width="179" height="161">
                <h2 class="popupCart__item-title">${cardInfo.title}</h2>
                <div class="counter">
                    <div class="counter__up" data-action="up">-</div>
                    <div class="counter__text" data-counter>${cardInfo.counter}</div>
                    <div class="counter__down" data-action="down">+</div>
                </div>
            <p class="popupCart__item-price">${cardInfo.price}</p>
            <button class="popupCart__item-close" data-btn = 'close'></button>
            </div>`;                   
            popupCartItems.insertAdjacentHTML('beforeend',productItemHtml)
        } 
        card.querySelector('[data-counter]').innerText = 1
        calcSummCart() 
    }
})

window.addEventListener('click',function(e){
    if(e.target.dataset.btn === 'add'){
        let productItem = e.target.closest('.product-general');
        let productItemInfo = {
            id : productItem.dataset.id,
            imgSrc : productItem.querySelector('.swiper--imgsmall__slide img').getAttribute('src'),
            title : productItem.querySelector('.product-general__name').innerText,
            price : productItem.querySelector('.product-general__price--new').innerText,
            counter : productItem.querySelector('[data-counter]').innerText
        }
        let productItemId = popupCartItems.querySelector(`[data-id='${productItemInfo.id}']`)
        if(productItemId) {
            let counterPopupProductItem = productItemId.querySelector('[data-counter]')
            counterPopupProductItem.innerText = parseInt(counterPopupProductItem.innerText) + parseInt(productItemInfo.counter)
        } else{
            let productItemTwoHtml = `<div class="popupCart__item" data-id="${productItemInfo.id}">
                <img class="popupCart__item-img" src="${productItemInfo.imgSrc}" alt="${productItemInfo.title}" width="179" height="161">
                <h2 class="popupCart__item-title">${productItemInfo.title}</h2>
                <div class="counter">
                    <div class="counter__up" data-action="up">-</div>
                    <div class="counter__text" data-counter>${productItemInfo.counter}</div>
                    <div class="counter__down" data-action="down">+</div>
                </div>
            <p class="popupCart__item-price">${productItemInfo.price}</p>
            <button class="popupCart__item-close" data-btn = 'close'></button>
            </div>`;         
            popupCartItems.insertAdjacentHTML('beforeend',productItemTwoHtml)
        } 
        productItem.querySelector('[data-counter]').innerText = 1
        calcSummCart() 
    }
})