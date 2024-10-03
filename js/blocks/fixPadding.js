function addPadding(el){
    let currentItem = document.querySelectorAll(el)
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    currentItem.forEach(function(item){
        item.style.paddingRight = paddingOffset;
    })
}
