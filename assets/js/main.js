function saveInfo() {
    let fullName = document.getElementById("fullNameID").value;
    let gender = "";
    if (document.getElementById("boy").checked) {
        gender = "Nam";
    } else if (document.getElementById("girl").checked) {
        gender = "Nữ";
    }
    let address = document.getElementById("address").value;
    let birthday = document.getElementById("birthday").value;
    let phone = document.getElementById("phone").value;
    let rank = document.getElementById("rank").value;
    let office = document.getElementById("office").value;
    let partisan = document.getElementById("partisan").value;
    let certificate = document.getElementById("certificate").value;
    let objectOne = {
        fullName: fullName,
        gender: gender,
        address: address,
        birthday: birthday,
        phone: phone,
        rank: rank,
        office: office,
        partisan: partisan,
        certificate: certificate,
    };
    localStorage.setItem(localStorage.length+1, JSON.stringify(objectOne));
    let newArray = [];
    for (let i = 1; i <= localStorage.length; i++) {
        let a = JSON.parse(localStorage.getItem(i));
        newArray.push(a);
    };
    location.reload();
}
    let table = "<tr>\
                    <th>STT</th>\
                    <th>Họ và tên</th>\
                    <th>Giới tính</th>\
                    <th>Ngày sinh</th>\
                    <th>Quê quán</th>\
                    <th>Số điện thoại</th>\
                    <th>Quân hàm</th>\
                    <th>Chức vụ</th>\
                    <th>Ngày vào Đảng</th>\
                    <th>Văn bằng,<br> chứng chỉ</th>\
                </tr>";
    for (let i = 1; i <= localStorage.length; i++) {
        let newContent = JSON.parse(localStorage.getItem(i));
        let newTable = `<tr>\
                            <td>${i}</td>\
                            <td>${newContent.fullName}</td>\
                            <td>${newContent.gender}</td>\
                            <td>${newContent.birthday}</td>\
                            <td>${newContent.address}</td>\
                            <td>${newContent.phone}</td>\
                            <td>${newContent.rank}</td>\
                            <td>${newContent.office}</td>\
                            <td>${newContent.partisan}</td>\
                            <td>${newContent.certificate}</td>\
                        </tr>`;
        table = table + newTable;
}
document.getElementById("console").innerHTML = table;