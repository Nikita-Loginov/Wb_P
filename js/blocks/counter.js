window.addEventListener('click',function(e){
    let counter = undefined;
    
    if(e.target.dataset.action === 'up' || e.target.dataset.action === 'down'){
        let counterParent = e.target.closest('.counter');
        counter = counterParent.querySelector('[data-counter]');
    }

    if(e.target.dataset.action === 'down'){
        counter.innerText = ++counter.innerText;
    }
    
    if(e.target.dataset.action === 'up'){
        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        }else if(e.target.closest('.popupCart__items') && parseInt(counter.innerText) === 1){
            e.target.closest('.popupCart__item').remove()
            calcSummCart()
        }
    }

    if(e.target.hasAttribute('data-action') && e.target.closest('.popupCart__items')){
        calcSummCart()
    }
})