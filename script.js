// document.getElementById('phonePlusBtn').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phoneQuantity');
//     const phoneQuantity = parseInt(phoneInput.value);
//     const phoneNewQuantity = phoneQuantity + 1;
//     phoneInput.value = phoneNewQuantity;
//     const phoneTotalPrice = phoneNewQuantity * 1219;
//     document.getElementById('iPhonePrice').innerText = phoneTotalPrice;
// });

// document.getElementById('phoneMinusBtn').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phoneQuantity');
//     const phoneQuantity = parseInt(phoneInput.value);
//     const phoneNewQuantity = phoneQuantity - 1;
//     phoneInput.value = phoneNewQuantity;
//     const phoneTotalPrice = phoneNewQuantity * 1219;
//     document.getElementById('iPhonePrice').innerText = phoneTotalPrice;
// });

document.getElementById('phonePlusBtn').addEventListener('click', function(){
    handleProductPrice (true, 'phoneQuantity', 'iPhonePrice')
});

document.getElementById('phoneMinusBtn').addEventListener('click', function(){
    handleProductPrice (false, 'phoneQuantity', 'iPhonePrice')
});

document.getElementById('casePlusBtn').addEventListener('click', function(){
    handleProductPrice(true,'caseQuantity', 'casePrice')
});

document.getElementById('caseMinusBtn').addEventListener('click', function(){
    handleProductPrice(false,'caseQuantity', 'casePrice')
});

function handleProductPrice (isIncrease, quantity, product){
    const productInput = document.getElementById(quantity);
    const productQuantity = parseInt(productInput.value);
    let productNewQuantity = productQuantity;
    if (isIncrease == true) {
        productNewQuantity = productQuantity + 1       
    };
    if (isIncrease == false && productQuantity > 0) {
        productNewQuantity = productQuantity - 1
    };
    productInput.value = productNewQuantity;
    // const productTotalPrice = productNewQuantity *  unitPrice;
    let productTotalPrice = productNewQuantity;
    if (product == 'iPhonePrice') {
        productTotalPrice = productNewQuantity *  1219;
    };
    if (product == 'casePrice') {
        productTotalPrice = productNewQuantity *  59;
    };
    document.getElementById(product).innerText = productTotalPrice;
    calculateTotal()
};

function calculateTotal() {
    const phoneQuantity = getInputValue('phoneQuantity');
    const caseQuantity = getInputValue('caseQuantity');

    const productsTotal = phoneQuantity * 1219 + caseQuantity *59;
    document.getElementById('subtotal').innerText = productsTotal;

    const tax = productsTotal / 100 * 10;
    const totalTax = parseInt(tax);
    document. getElementById('tax').innerText = totalTax;

    const total = productsTotal + totalTax;
    document.getElementById('total').innerText = total;
}

function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}