const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// console.log('Việt Nam đồng: ' + VND.format(price));
let listCart = JSON.parse(localStorage.getItem("listCart"));
let product = JSON.parse(localStorage.getItem("product"));
function rederCart() {
    let listCart = JSON.parse(localStorage.getItem("listCart"))
    let add =
    `
    <tr>
    <th>Ảnh sản phẩm</th>
    <th>Tên sản phẩm</th>
    <th>Số lượng</th>
    <th>Gía tiền</th>
    <th>Xóa</th>
    </tr>
    `
    let total=0;
    for (let i = 0; i < listCart.length; i++) {
        add +=
            `
<tr>
<td><img src="${listCart[i].anh}" width="130px" height="130px"</td>
<td>${listCart[i].name}</td>
<td class="item-quantity"><div class="buyandsell">
<button onclick=giamSoLuong(${listCart[i].id}) class="sell"> - </button>
<span class="numbers" style="font-size: 25px">${listCart[i].sl}</span>
<button onclick=themSoLuong(${i}) class="buy"> + </i></button>
</div></td>
<td>${listCart[i].price * listCart[i].sl}</td>
<td><button onclick="deleteCart(${i})">delete</button></td>
</tr>
`
        total += listCart[i].price * listCart[i].sl;
        console.log(total);
    }
    let resultMoney = VND.format(total);
    document.getElementById("money").innerHTML = resultMoney;
    document.getElementById("table").innerHTML = add;
}
rederCart();

function themSoLuong(idProduct) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    listCart[idProduct].sl++;
    localStorage.setItem("listCart", JSON.stringify(listCart))
    rederCart();
}
function giamSoLuong(idProduct) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].id == idProduct) {
            if (listCart[i].sl == 1) {
                let confirm1 = confirm("Bạn có muốn xoá sản phẩm khỏi giỏ hàng");
                if (confirm1) {
                    listCart.splice(listCart[i], 1);
                    localStorage.setItem("listCart", JSON.stringify(listCart));
                    rederCart();
                    break;
                } else {
                    return;
                }
            }
            listCart[i].sl = --listCart[i].sl;
            localStorage.setItem("listCart", JSON.stringify(listCart));
            rederCart();
            break;
        }
    }
}
function deleteCart(id) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    listCart.splice(id, 1)
    localStorage.setItem("listCart", JSON.stringify(listCart));
    rederCart();
}






