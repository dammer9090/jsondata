//..............json to object and vise-versa............
// let jsonData = `{
//     "product": {
//         "id": 101,
//         "name": "Laptop",
//         "price": 750,
//         "specs": {
//             "ram": "8GB",
//             "storage": "256GB SSD"
//         },
//         "inStock": true
//     }
// }`;

// // console.log(jsonData);  


// let objData = JSON.parse(jsonData);

// objData.product.name = 'Mobile'

// // console.log(objData);

// let updatedJsonData = JSON.stringify(objData);

// console.log(updatedJsonData);

// .............................web page by json data 

async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    console.log(data)
}




getData();

console.log('this is sync')


