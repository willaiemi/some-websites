const store = new Vuex.Store({
    state: {
        products: [
            {
                "id": 1,
                "title": "White T-Shirt",
                "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000",
                "price": 20.90,
                "description": "A plain white shirt for minimalist people."
            },
            {
                "id": 2,
                "title": "Red Nike Sneaker",
                "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
                "price": 399.99,
                "description": "A red pair of sneaker to style your feet."
            },
            {
                "id": 3,
                "title": "iPhone X",
                "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
                "price": 3599.99,
                "description": "The Apple iPhone X, 128GB, new."
            },
            {
                "id": 4,
                "title": "Xbox One Controller",
                "image": "https://images.unsplash.com/photo-1554213352-5ffe6534af08?w=1000",
                "price": 189.99,
                "description": "Xbox One Original Controller, still in the box."
            },
            {
                "id": 5,
                "title": "Black Wireless Headphones",
                "image": "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?w=1000",
                "price": 150.90,
                "description": "Level black wireless headphone. Great for listening to music without cables."
            },
            {
                "id": 6,
                "title": "Ferrari 458",
                "image": "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1000",
                "price": 982989.99,
                "description": "Your new car!"
            },
            {
                "id": 7,
                "title": "NVIDIA RTX 2060",
                "image": "https://images.unsplash.com/photo-1555618568-bdf0a992c512?w=1000",
                "price": 1749.90,
                "description": "To boost up your computer!"
            },
            {
                "id": 8,
                "title": "Falcon 900",
                "image": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1000",
                "price": 44800000.99,
                "description": "Time to conquer the sky!"
            },
            {
                "id": 9,
                "title": "Large Suburban House",
                "image": "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?w=1000",
                "price": 800500.00,
                "description": "We'll build it for you!"
            },
            {
                "id": 10,
                "title": "A chair",
                "image": "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000",
                "price": 10.00,
                "description": "To sit on."
            }
        ],
        clients: [

        ]
    },
    mutations: {
        createProduct(state, product) {
            state.products.push(product);
        },
        createClient(state, client) {
            state.clients.push(client);
        }
    }
});

const data = {
    title: 'Products',
    subtitle: 'Here, I sell products...',
    isProductModalActive: false,
    currentProduct: {},
    timeout: null,
    cart: []
}

var router = new VueRouter({
    mode: 'history',
    routes: []
});

const app = new Vue({
    el: '#app',
    router,
    store,
    data,
    computed: {
        products() {
            return store.state.products;
        },
        totalSumInCart() {
            let sum = 0;
            app.cart.map((product) => {
                sum += product.price;
            });
            return sum;
        }
    },
    methods: {
        formatPrice: (value) => {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        addToCart: (id) => {
            clearTimeout(data.timeout);
            app.currentProduct = app.products.find(product => id === product.id);
            app.cart.push(app.currentProduct);
            const notificationStyle = document.getElementById('notification').style;
            notificationStyle.transition = "all 0.5s linear 0s";
            notificationStyle.display = "flex";
            notificationStyle.opacity = 1;

            data.timeout = setTimeout(() => {
                notificationStyle.transition = "all 2s ease-out 0s";
                notificationStyle.opacity = 0;
            }, 1000);

            data.timeout = setTimeout(() => {
                notificationStyle.display = "none";
            }, 3000);
        },
        clearCart: () => {
            app.cart = [];
        },
        buy: () => {
            const name = document.getElementById('name').value + " " + document.getElementById('surname').value;
            const cpf = document.getElementById('cpf').value;
            let message = name + "\n" + cpf + "\n\nProducts: \n";
            app.cart.map(product => {
                message += product.title + "\n"
            });
            message += "\nTotal: R$" + app.formatPrice(app.totalSumInCart);
            alert(message);
            app.clearCart();
        }
    }
});