async function decrement() {
    var price = 85;
    while(price !== 0) {
        price--;
        document.getElementById("price").innerHTML = price + 'c';
        await delay(price * 1.5);
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}