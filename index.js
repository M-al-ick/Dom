//--------------for shopping cart-------------
/*
$(document).ready('fonction()'); {
    update_amounts();

    $('.qty, .price').on('keyup keypress blur change',

        function (e) {
            update_amounts();
        })
};
function update_amounts() {
    var sum = 0.0;
    $('#myTable > tbody > tr').each('function'); {
        var qty = $(this).find('.qty').val()
        var price = $(this).find('.price').val()
        var amount = (qty * price)
        sum += amount;
        $(this).find('.amount').text('' + amount);
    };
    $('.total').text(sum);
}
// --------------for quantity increment or decrement----------
var incrementQty;
var decrementQty;
var plusBtn = $('.cart-qty-plus');
var minusBtn = $('.cart-qty-plus');
var incrementQty = plusBtn.click('function()'), {
    var$n = $(this)
        .parent(".button_container")
        .find(".qty"),
    $nval, number($n.val()) + 1,
        update_amounts();
}
var decrementQty = minusBtn.click('function()'), {
    var$n = $(this)
        .parent('.button-container')
        .find('.qty'),
    var: Qtyval = Number($n.val()),
    if: Qtyval > 0; {
    $n.val(Qtyval - 1)
}
update_amounts()
}*/
var produuit =document.getElementsByClassName("prodoct")
for(let i= 0;i<produuit.length;i++){
    let bntPlus=produuit[i].children[2].children[0].children[0];
    let bntMoins=produuit[i].children[2].children[0].children[2];
    let number=produuit[i].children[2].children[0].children[1];
    let qty=parseInt(number.innerText)

    bntPlus.addEventListener("click",function(){
        qty++;
        number.innerText=qty;
        console.log(bntPlus);
    })
    
}
