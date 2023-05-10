let products = [];

function showProductList() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let row = `<tr>
					<td>${i + 1}</td>
					<td>${products[i]}</td>
					<td><button type="button" onclick="deleteProduct(${i})">Xoá</button></td>

				  </tr>`;
        productList.innerHTML += row;
    }
}

function addProduct() {
    let productName = document.getElementById("product-name").value;
    products.push(productName);
    showProductList();
    alert(`Đã thêm sản phẩm ${productName}`);
}


function showProduct() {
    let selectElement = document.getElementById("product-id");
    let selectedIndex = selectElement.selectedIndex;
    let selectedValue = selectElement.options[selectedIndex].value;
    let productName = products[selectedValue];
    document.getElementById("new-product-name").value = productName;
}


function deleteProduct(productId) {
    let productName = products[productId];
    products.splice(productId, 1);
    showProductList();
    alert(`Đã xoá sản phẩm ${productName}`);
}


function editProduct() {
    let productId = document.getElementById("product-id").value;
    let newProductName = document.getElementById("new-product-name").value;
    let oldProductName = products[productId];
    products[productId] = newProductName;
    showProductList();
    alert(`Đã sửa sản phẩm từ ${oldProductName} thành ${newProductName}`);
}


