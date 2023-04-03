let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function saveButton() {
    let nameProductInput = document.getElementById("nameProduct").value;
    let imgProductInput = document.getElementById("image").src;
    let priceProductInput = document.getElementById("priceProduct").value;
    let desProductInput = document.getElementById("desProduct").value;
    let infoProduct = {
        nameProduct: nameProductInput,
        imgProduct: imgProductInput,
        priceProduct: priceProductInput,
        desProduct: desProductInput,
    };
    if (listProduct == null) {
        listProduct = [];
        listProduct.push(infoProduct);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
    } else {
        listProduct.push(infoProduct);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
    }
    renderProduct();
}
function renderProduct() {
    let result = `
        <tr>
        <td class="tr1" >ID</td>
        <td class="tr1">Tên</td>
        <td class="tr1">Ảnh</td>
        <td class="tr1">Giá</td>
        <td class="tr1">Mô tả</td>
        <td class="tr1" >Tính năng</td>
        <td class="tr1" >Tính năng</td>
        </tr>
        `;
    for (let i = 0; i < listProduct.length; i++) {
        result += `
            <tr class="tr1">
            <td class="td1">${i + 1}</td>
            <td class="td1">${listProduct[i].nameProduct}</td>
            <td class="td1"><img src="${listProduct[i].imgProduct}" width="100px" height="100px"></td>
            <td class="td1">${listProduct[i].priceProduct}</td>
            <td class="td1">${listProduct[i].desProduct}</td>
            <td class="td1"><button class="change" onclick="editButton(${i})">Sửa</button></td>
            <td class="td1"><button class="change" onclick="deleteButton(${i})">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById("tableAdded").innerHTML = result;
}
function deleteButton(index) {
    console.log(index);
    listProduct.splice(index, 1);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderProduct();
}
renderProduct();

// Lấy thẻ hình ảnh từ HTML
const myImage = document.getElementById("image");

// Lắng nghe sự kiện onchange của input
const imageInput = document.getElementById("imgProduct");

imageInput.onchange = function (event) {
    const file = event.target.files[0];

    // Đọc tệp ảnh và chuyển đổi nó thành dữ liệu URL
    const reader = new FileReader();
    reader.onload = function (event) {
        const dataUrl = event.target.result;

        // Thiết lập nguồn ảnh của đối tượng ảnh với dữ liệu URL
        myImage.src = dataUrl;

        // Lưu dữ liệu URL vào local storage
        localStorage.setItem("myImage", dataUrl);

        // // Hiển thị ảnh
        // imgElement.src = dataUrl;
    };
    reader.readAsDataURL(file);
};
function editButton(id) {
    console.log(id);
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    console.log(listProduct);
    for (let i = 0; i < listProduct.length; i++) {
    document.getElementById("nameProduct").value = listProduct[id].nameProduct;
    document.getElementById("image").src = listProduct[id].imgProduct;
    document.getElementById("priceProduct").value = listProduct[id].priceProduct;
    document.getElementById("desProduct").value = listProduct[id].desProduct;
    localStorage.setItem("flag",id);
}
}
function editSaveButton(){
    let nameProductInput = document.getElementById("nameProduct").value;
    let imgProductInput = document.getElementById("image").src;
    let priceProductInput = document.getElementById("priceProduct").value;
    let desProductInput = document.getElementById("desProduct").value;
    let infoProduct = {
        nameProduct: nameProductInput,
        imgProduct: imgProductInput,
        priceProduct: priceProductInput,
        desProduct: desProductInput,
    }
    let flag=JSON.parse(localStorage.getItem("flag"));
    if (flag!== null) {
    listProduct.splice(flag,1,infoProduct);
    localStorage.removeItem("flag");
    renderProduct();
    return;
}
}
