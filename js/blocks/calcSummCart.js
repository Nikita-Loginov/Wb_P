function calcSummCart(){
    let cartItems = document.querySelectorAll('.popupCart__item');
    let summTotal = document.querySelector('.popupCart__summ-num')
    let total = 0;

    cartItems.forEach(function(item){
        let counterText = item.querySelector('[data-counter]').innerText;
        let priceText = item.querySelector('.popupCart__item-price').innerText;
        let priceNumber = priceText.replace(/\D/g,'');
        let counter = parseInt(counterText);
        let price = parseInt(priceNumber);

        let currentPriceCard = counter * price
        total += currentPriceCard
    })
    summTotal.innerText = total
}