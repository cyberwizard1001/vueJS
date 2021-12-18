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
                {id: 2234, color: 'green',image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['small','medium','large','extra-large','gigantic'],
            cart: 0
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateImage(variantImage){
            this.image=variantImage
        },
        removeFromCart(){
            this.cart-=1
        }
    },
})





