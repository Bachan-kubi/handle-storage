const addToStorage = (id)=>{
    let shoppingCart;
    // get shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }else{
        shoppingCart = {};
    }
    // add quantity
    const quantity = shoppingCart[id];
    console.log(quantity)
    //check quanitity exist or not
    if(quantity){
        // console.log('already exist');
        const newQnt = parseInt(quantity) + 1;
        shoppingCart[id]= newQnt;
        // localStorage.setItem(id, newQnt)
    }else{
        shoppingCart[id] = 1;
        // console.log('new item')
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// remove from storage
const removeFromDB=(id)=>{
    const storedCart = localStorage.getItem('shopping-cart', id);
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

// delete all data
const removeShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart')
}
export {addToStorage, removeFromDB, removeShoppingCart};