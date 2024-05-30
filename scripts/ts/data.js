"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/27190807-450-450/image-594539176f914be19980fdc4f69f0389.jpg",
        "id": "01",
        "title": "iPhone 13",
        "description": "Pantalla:6.1, Memoria interna:128GB, Tecnología:5G, Pantalla:6.1, Memoria interna:128GB",
        "price": 999,
        "discount": 50,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 10,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/27190807-450-450/image-594539176f914be19980fdc4f69f0389.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190805-450-450/image-434a2a8d77374f50993778f66ac1807a.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190803-450-450/image-b6904c6e4be7407d8f44d5de4652c204.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190808-450-450/image-2e89160c85ba4cb5b041acbf2547bc1c.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190815-450-450/image-8ebc9b50f8ae4ee9ae061d07d474fe93.jpg"
        ],
        "colors": ["Negro espacial", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/27190792-450-450/image-4df485e6332b4970ae243377e398fc36.jpg",
        "id": "02",
        "title": "iPhone 13 Pro",
        "description": "Pantalla:6.1, Memoria interna:128GB, Tecnología:5G,Pantalla:6.1, Memoria interna:128GB",
        "price": 1299,
        "discount": 20,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 8,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/27190792-450-450/image-4df485e6332b4970ae243377e398fc36.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190793-450-450/image-b59d760382fd464994668f7b81fa81ea.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190797-450-450/image-c50149f994a34c7b9d0a99639863da4f.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190788-450-450/image-e9f380b0c8a7454faef318f2149f0e90.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/27190790-450-450/image-8640aa351e5d4511b291c4bf7a9549c2.jpg"
        ],
        "colors": ["Gris espacial", "Azul acero", "Negro espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/27190850-450-450/image-529964975e144f5283df999e867efaf5.jpg",
        "id": "03",
        "title": "iPhone 13 Mini",
        "description": "Cámara frontal:12+12MPx, Características: 64GB 4GB 12+12MPx Blanco, Cámara posterior:12MPx, Pantalla:6.1, Memoria interna:128GB",
        "price": 699,
        "discount": 10,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 12,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/27190850-450-450/image-529964975e144f5283df999e867efaf5.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/731679-450-450/image-2044146c59604e6f9fb559939322a441.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/731680-450-450/image-072c322a81284530a13a7a9463a92ff2.jpg"
        ],
        "colors": ["Negro espacial", "Blanco"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/26947122-450-450/image-32643abfc0d5411b8108985cf3113d2a.jpg",
        "id": "04",
        "title": "iPad Air",
        "description": "Alto   24.76 cm, Ancho     17.85 cm, Memoria interna:64GB,Pantalla:6.1, Memoria interna:128GB, Tecnología:5G",
        "price": 599,
        "discount": 25,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 15,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/26947122-450-450/image-32643abfc0d5411b8108985cf3113d2a.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/26947119-450-450/image-a9df09bab04147769beac2d448b0afc3.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/26947120-450-450/image-01942077624645138798cbb0aca51792.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/26947126-450-450/image-76d9e33bb4a849eeb6154af9907e1744.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/26947118-450-450/image-6183a06fc2eb4c5aa6edd488571c5616.jpg"
        ],
        "colors": ["Negro espacial", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": true
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/19883900-450-450/imageUrl_2.jpg",
        "id": "05",
        "title": "MacBook Air",
        "description": "Pantalla:13.4, Memoria RAM:8GB, Capacidad del disco duro:256GB SSD, Pantalla:6.1, Memoria interna:128GB, Tecnología:5G",
        "price": 999,
        "discount": 10,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 10,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/19883900-450-450/imageUrl_2.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/19883903-450-450/imageUrl_4.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/19883902-450-450/imageUrl_3.jpg"
        ],
        "colors": ["Gris espacial", "Lila"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/24820722-450-450/image-3df77da2f3a74d9ca5d9bb8476bbe5e2.jpg",
        "id": "06",
        "title": "MacBook Pro",
        "description": "Pantalla:13.4, Memoria RAM:8GB, Capacidad del disco duro:520GB SSD, Pantalla:6.1, Memoria interna:128GB, Tecnología:5G",
        "price": 1299,
        "discount": 30,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 8,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/24820722-450-450/image-3df77da2f3a74d9ca5d9bb8476bbe5e2.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/24820723-450-450/image-117baca95c2d4bbcb88249d7ee39bebd.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/24820736-450-450/image-5d023d837b3e481792a2da940b3488a5.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/24820720-450-450/image-b0c7ca915b0d48769cd57b977643bc34.jpg"
        ],
        "colors": ["Negro espacial", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/28813838-450-450/image-bbb9d6f797a0417f9c8ab1b3d2066d8e.jpg",
        "id": "07",
        "title": "Apple Watch Series 7",
        "description": "Alto   4.0 cm, Ancho 3.4 cm, Color: Medianoche, Pantalla:6.1, Memoria interna:128GB, Tecnología:5G",
        "price": 399,
        "discount": 10,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 20,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/28813838-450-450/image-bbb9d6f797a0417f9c8ab1b3d2066d8e.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28813862-450-450/image-39a9d4ac88394fad9d750e3fde98686e.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28813815-450-450/image-1a4cf5ceea8c4b55afc060d0666874a3.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28813877-450-450/image-719ea86f7cd049d9b69612be24020269.jpg"
        ],
        "colors": ["Negro espacial", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": true
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/28683714-450-450/image-db49e6c2d0fb4f48b67272d628d4e46b.jpg",
        "id": "08",
        "title": "AirPods Pro",
        "description": "Color Blanco,Compatibilidad Apple,Garantía 1 año, Pantalla:6.1,  Memoria interna:128GB, Tecnología:5G",
        "price": 249,
        "discount": 15,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 25,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/28683714-450-450/image-db49e6c2d0fb4f48b67272d628d4e46b.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28683772-450-450/image-6fb84d7ac6be4964ab20196431259136.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28683733-450-450/image-00d2deda102140b5b3f632850381f66a.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28683777-450-450/image-dbcd98ff21bf4d88801ba28bd47d2469.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28683769-450-450/image-ad3fe0afa0864917b4a755561ebd7301.jpg"
        ],
        "colors": ["Negro espacial", "Azul acero", "Lila", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": false
    },
    {
        "image": "https://plazavea.vteximg.com.br/arquivos/ids/28663871-450-450/imageUrl_1.jpg",
        "id": "09",
        "title": "AirPods",
        "description": "Incluye:Cable de conector, Potencia:100 mW, Características:Diseño over-ear,Pantalla:6.1, Memoria interna:128GB, Tecnología:5G",
        "price": 500,
        "discount": 10,
        "policytax": "Incluye impuesto País y percepción AFIP",
        "stock": 30,
        "imgs": [
            "https://plazavea.vteximg.com.br/arquivos/ids/28663872-450-450/imageUrl_2.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28663871-450-450/imageUrl_1.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28663869-450-450/imageUrl_3.jpg",
            "https://plazavea.vteximg.com.br/arquivos/ids/28663870-450-450/imageUrl_4.jpg"
        ],
        "colors": ["Negro espacial", "Gris espacial"],
        "shippingcosts": "Agrega el producto al carrito para conocer los costos de envío.",
        "shippingtime": "Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal",
        "onsale": true
    }
];
exports.default = products;
