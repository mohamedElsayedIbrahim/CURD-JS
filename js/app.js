var pName = document.getElementById("productName");
var price = document.getElementById("productPrice");
var desc = document.getElementById("productDesc");

var products;
if(localStorage.getItem("products") ==  null)
{
    products = [];
} else
{
    products = JSON.parse(localStorage.getItem("products"));
}
displayProducts(products);
function insertProduct()
{
    var product = 
    {
        name: pName.value,
        price: price.value,
        desc: desc.value 
    }

    products.push(product)
    localStorage.setItem("products",JSON.stringify(products));
    displayProducts(products);
    clear();
}

function displayProducts(arrayOfObject)
{
    var cartoona="";
    for (let index = 0; index < arrayOfObject.length; index++) {
           cartoona += `<tr>
           <td>${index}</td>
           <td>${arrayOfObject[index].name}</td>
           <td>${arrayOfObject[index].price}</td>
           <td>${arrayOfObject[index].desc}</td>
           <td><button type="button" class="btn btn-warning">Update</button></td>
           <td><button type="button" onclick="deleteProduct(${index});" class="btn btn-danger">Delete</button></td>
       </tr>`;
    }

    document.getElementById("result").innerHTML = cartoona;
}

function clear()
{
    pName.value = "";
    price.value = "";
    desc.value = "";
}

function deleteProduct(index)
{
    products.splice(index,1);
    localStorage.setItem("products",JSON.stringify(products));
    displayProducts(products);
}
