let popupCartTextClose = document.querySelector('.popupCart__product-text-btn');

window.addEventListener('click',function(e){
    if(e.target.dataset.btn === 'close'){
        let parentItem = e.target.closest('.popupCart__item')
        parentItem.remove()
        calcSummCart()
    }
})

popupCartTextClose.addEventListener('click',function(){
    let popupCartItem = document.querySelectorAll('.popupCart__item');
    popupCartItem.forEach(function(item){
        item.remove()
        calcSummCart()
    })
})