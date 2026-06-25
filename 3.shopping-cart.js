const addToCart = () => {
    const grabProduct = document.getElementById("product")
    const grabQuantity = document.getElementById("quantity")

    const productVl = grabProduct.value;
    const quantityVl = grabQuantity.value;

    grabProduct.value = '';
    grabQuantity.value = '';

    console.log("Product added", productVl, quantityVl)
    
    displayUI(productVl, quantityVl)

}

//Display in UI:
const displayUI = (productVl, quantityVl) => {

    const getContainer = document.getElementById("products-show")

    const showValues = document.createElement("li")
    showValues.innerText = `Product:${productVl} Quantity:${quantityVl}`

    getContainer.appendChild(showValues)

}