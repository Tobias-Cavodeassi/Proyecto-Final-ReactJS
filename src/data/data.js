const products = [
    // Nike
    { 
        id: 1, 
        category: "nike",
        brand: "Nike", 
        model: "Air Max 270", 
        price: 15000, 
        stock: 25, 
        description: "Nike Air Max 270 offers style and comfort with its signature Max Air cushioning.", 
        image: "/img/nike_air_max_270.jpg"
    },
    { 
        id: 2, 
        category: "nike",
        brand: "Nike", 
        model: "Air Zoom Pegasus 39", 
        price: 18000, 
        stock: 20, 
        description: "Nike Pegasus 39 combines lightweight design with responsive Zoom Air cushioning.", 
        image: "/img/nike_air_zoom_pegasus_39.jpg" 
    },
    { 
        id: 3, 
        category: "nike",
        brand: "Nike", 
        model: "Air Force 1", 
        price: 12000, 
        stock: 15, 
        description: "The iconic Nike Air Force 1 delivers classic style and durable comfort.", 
        image: "/img/nike_air_force_1.webp" 
    },
    
    // Adidas
    { 
        id: 4, 
        category: "adidas",
        brand: "Adidas", 
        model: "Ultraboost 22", 
        price: 19000, 
        stock: 30, 
        description: "Adidas Ultraboost 22 offers ultimate energy return with responsive Boost technology.", 
        image: "/img/adidas_ultraboost_22.webp" 
    },
    { 
        id: 5, 
        category: "adidas",
        brand: "Adidas", 
        model: "NMD R1", 
        price: 17000, 
        stock: 18, 
        description: "The Adidas NMD R1 fuses innovative technology with sleek streetwear style.", 
        image: "/img/adidas_nmd_r1.webp" 
    },
    { 
        id: 6, 
        category: "adidas",
        brand: "Adidas", 
        model: "Superstar", 
        price: 13000, 
        stock: 22, 
        description: "Adidas Superstar brings back the classic shell-toe design for everyday wear.", 
        image: "/img/adidas_superstar.webp" 
    },

    // New Balance
    { 
        id: 7, 
        category: "newbalance",
        brand: "New Balance", 
        model: "574 Core", 
        price: 14000, 
        stock: 28, 
        description: "New Balance 574 Core is a versatile, timeless sneaker with premium materials.", 
        image: "/img/newbalance_574_core.webp" 
    },
    { 
        id: 8, 
        category: "newbalance",
        brand: "New Balance", 
        model: "Fresh Foam 1080v12", 
        price: 16000, 
        stock: 12, 
        description: "New Balance 1080v12 provides maximum comfort with Fresh Foam cushioning.", 
        image: "/img/newbalance_fresh_foam_1080v12.webp" 
    },
    { 
        id: 9, 
        category: "newbalance",
        brand: "New Balance", 
        model: "FuelCell Rebel v2", 
        price: 15500, 
        stock: 17, 
        description: "New Balance FuelCell Rebel v2 is built for speed with ultra-responsive FuelCell foam.", 
        image: "/img/newbalance_fuelcell_rebel_v2.webp" 
    }
];


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }