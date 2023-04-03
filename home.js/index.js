let product = [
    {
        anh: "./image/congtacchunhat.webp",
        name: "Công tắc wifi bình nóng lạnh hẹn giờ tắt hình chữ nhật",
        price: "550000",
        sl: 1,
        id: 11,
    },
    {
        anh: "./image/cambien_master.webp",
        name: "Cảm biến ánh sáng wifi",
        price: "450000",
        sl: 1,
        id: 22,
    },
    {
        anh: "./image/congtacvuong.webp",
        name: "Công tắc wifi bình nóng lạnh hẹn giờ tắt hình vuông",
        price: "990000",
        sl: 1,
        id: 33
    },
    {
        anh: "./image/cutnoinhanh.png",
        name: "Cut nối điện nhanh",
        price: "22000",
        sl: 1,
        id: 44,
    },
    {
        anh: "./image/donghodonhietdodoam.webp",
        name: "Đồng hồ cảm biến nhiệt độ độ ẩm",
        price: "190000",
        sl: 1,
        id: 55,
    },
    {
        anh: "./image/khoacuathongminh.webp",
        name: "Khóa cửa thông minh",
        price: "1990000",
        sl: 1,
        id: 66,
    },
]
localStorage.setItem("product", JSON.stringify(product));
product = JSON.parse(localStorage.getItem("product"));
function reder() {
    let result = ``;
    for (let i = 0; i < product.length; i++) {
        result +=
            `
        <div class="element">
            <img src="${product[i].anh}" width="130px" height="130px"
                alt="công tắc chữ nhật" />
            <p class="nameproduct">${product[i].name}</p>
            <span class="price" style="color: #1939bc">${product[i].price} VNĐ</span>
            <button class="addCart" onclick="addCart1(${product[i].id})">
                Thêm giỏ hàng
            </button>
        </div>
            `
    }
    document.getElementById("product").innerHTML = result;
}
reder();
// function addCart1(masanpham) {
//     let product = JSON.parse(localStorage.getItem("product"));
//     let listCart = JSON.parse(localStorage.getItem("listCart"));
//     if (listCart == null) {
//         listCart = [];
//         for (let i = 0; i < product.length; i++) {
//             if (product[i].id == masanpham) {
//                 listCart.push(product[i]);
//                 localStorage.setItem("listCart", JSON.stringify(listCart));
//                 break;
//             }
//         }
//     }else{
//     for (let j = 0; j < product.length; j++) {
//         if (product[j].id == masanpham) {
//             let flag = true;
//             for (let i = 0; i < listCart.length; i++) {
//                 if (listCart[i].id == masanpham) {
//                     flag = false;
//                     break;
//                 } else {
//                     flag = true;
//                 }
//             }
//             if (flag == false) {
//                 alert("sản phẩm đã có trong giỏ hàng");
//             } else {
//                 listCart.push(product[j]);
//                 localStorage.setItem("listCart",JSON.stringify(listCart));
//             }
//         }
//     }
// }
// reder();
// }

function addCart1(id) {
    let listCart = JSON.parse(localStorage.getItem("listCart"));
    console.log(id);
    if (listCart == null) {
        listCart = [];
        for (let index = 0; index < product.length; index++) {
            if (product[index].id == id) {
                console.log(id);
                listCart.push(product[index]);
                localStorage.setItem(
                    "listCart",
                    JSON.stringify(listCart)
                );
                break;
            }
        }
    } else {
        for (let index = 0; index < product.length; index++) {
            if (product[index].id == id) {
                let flag = true;
                for (let i = 0; i < listCart.length; i++) {
                    if (listCart[i].id == id) {
                        flag = false;
                        break;
                    } else {
                        flag = true;
                    }
                }
                if (!flag) {
                    console.log("sản phẩm đã có trong giỏ hàng");
                } else {
                    listCart.push(product[index]);
                    localStorage.setItem(
                        "listCart",
                        JSON.stringify(listCart)
                    );
                }
            }
        }
    }
    reder();
}