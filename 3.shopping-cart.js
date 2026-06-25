const addToCart = () => {
    const grabProduct = document.getElementById("product")
    const grabQuantity = document.getElementById("quantity")

    const productVl = grabProduct.value;
    const quantityVl = parseInt(grabQuantity.value);

    grabProduct.value = '';
    grabQuantity.value = '';

    console.log("Product added", productVl, quantityVl)

    displayUI(productVl, quantityVl)

    addProduct(productVl, quantityVl)

}

//
const getVal = () => {
    let cart = {};
    const getItemValue = localStorage.getItem("cart");

    if (getItemValue) {
        cart = JSON.parse(getItemValue)
    }

    return cart;
}

//add product to cart:
const addProduct = (productVl, quantityVl) => {
    const cart = getVal();
    if (cart[productVl]) {
        cart[productVl] = cart[productVl] + quantityVl
    }
    else {
        cart[productVl] = quantityVl;
    }


    // console.log("Cart", cart)
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", cartJSON)
}


//Display in UI:
const displayUI = (productVl, quantityVl) => {

    const getContainer = document.getElementById("products-show")

    const showValues = document.createElement("li")
    showValues.innerText = `Product:${productVl} Quantity:${quantityVl}`

    getContainer.appendChild(showValues)

}

//to save object/array, tp local storage, we use: JSON.stringify
//to get object/array from local storage, we use: JSON.parse


//get the data from stored local storage and display:
const displayStoredProducts = () => {
    const getStoredData = getVal();

    for (const product in getStoredData) {
        const quantity = getStoredData[product]
        console.log(product, quantity)
        displayUI(product,quantity)
    }
}
displayStoredProducts();