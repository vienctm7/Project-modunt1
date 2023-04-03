let proviceInfo = JSON.parse(localStorage.getItem("proviceInfo"));
function saveButton() {
    let usernameValue = document.getElementById("usernameSignup").value;
    let emailValue = document.getElementById("emailSignup").value;
    let passwordValue = document.getElementById("passwordSignup").value;
    let saveinfo = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    }
    if (proviceInfo == null) {
        proviceInfo = [];
        proviceInfo.push(saveinfo);
        localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
    } else {
        proviceInfo.push(infoProduct);
        localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
    }
    renderProduct();
}
function renderProduct() {
    let result = `
        <tr>
        <td class="tr1" >ID</td>
        <td class="tr1">Usernam</td>
        <td class="tr1">Email</td>
        <td class="tr1">Password</td>
        <td class="tr1">Ngày đăng kí</td>
        <td class="tr1" >Tính năng</td>
        <td class="tr1" >Tính năng</td>
        </tr>
        `;
    for (let i = 0; i < proviceInfo.length; i++) {
        result += `
            <tr class="tr1">
            <td class="td1">${i + 1}</td>
            <td class="td1">${proviceInfo[i].username}</td>
            <td class="td1">${proviceInfo[i].email}</td>
            <td class="td1">${proviceInfo[i].password}</td>
            <td class="tr1"></td>
            <td class="td1"><button class="change" onclick="editButton(${i})">Sửa</button></td>
            <td class="td1"><button class="change" onclick="deleteButton(${i})">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById("tableAdd1").innerHTML = result;
}
function deleteButton(index) {
    console.log(index);
    proviceInfo.splice(index, 1);
    localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
    renderProduct();
}
renderProduct();
