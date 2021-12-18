const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image:   './assets/images/socks_green.jpg',
            description: 'This is a description',
            url_string: 'https://www.google.com',
            inStock: true,
            inventory: 100,
            onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: ['small','medium','large','extra-large','gigantic'],
        }
    }
})





