var pName = document.getElementById("productName");
var price = document.getElementById("productPrice");
var desc = document.getElementById("productDesc");
var btn = document.getElementById("submit");
var selectedProduct = -1;

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

    if(btn.innerText.toLocaleLowerCase() == "save")
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
    else
    {
        products[selectedProduct].name = pName.value;
        products[selectedProduct].price = price.value;
        products[selectedProduct].desc = desc.value;
        localStorage.setItem("products",JSON.stringify(products));
        displayProducts(products);
        clear();
        btn.innerText = "save";
    }
    
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
           <td><button type="button" onclick="editProduct(${index});" class="btn btn-warning">Update</button></td>
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


function productSerach(term)
{
    var searechedResult = [];
    for (let index = 0; index < products.length; index++) {
        if(products[index].name.toLowerCase().includes(term.toLowerCase()))
        {
            searechedResult.push(products[index]);
        } 
    }

    displayProducts(searechedResult)
}


function editProduct(index)
{
    pName.value = products[index].name;
    price.value = products[index].price;
    desc.value = products[index].desc;

    btn.innerText = "update";

    selectedProduct = index;
}
















