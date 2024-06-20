// lấy só
let arrNumber = [];
// làm gọn document.getElementById(kq) thành  get_ID
function get_ID(kq) {
  return document.getElementById(kq);
}

get_ID("formThemSo").onsubmit = function (event) {
  event.preventDefault();
  getNumber();
  event.target.reset();
};

// thêm số vào mảng khi ấn " thêm số "
function getNumber() {
  // lấy giá trị khi người dùng nhập từ giao diện và chuyển giá trị đó thành kiểu số (Number) và gán cho biến number.
  let number = Number(get_ID("themSo").value);
  // đưa number vào mảng arrNumber[]
  arrNumber.push(number);
  console.log(arrNumber);
  get_ID("inSo").innerHTML = `[ ${arrNumber} ]`;
}

//=====Bài 1==================================================================================
function Bai1() {
  let tongSoDuong = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tongSoDuong += arrNumber[i];
    }
  }
  get_ID("txtketqua1").innerHTML = tongSoDuong;
}

//
get_ID("Bai1").onclick = function () {
  Bai1();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 2==================================================================================
function Bai2() {
  let dem = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      dem++;
    }
  }
  get_ID("txtketqua2").innerHTML = dem;
}
//
get_ID("Bai2").onclick = function () {
  Bai2();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 3==================================================================================
function bai3() {
  let min = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  get_ID("txtketqua3").innerHTML = min;
}
get_ID("Bai3").onclick = function () {
  bai3();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 4==================================================================================
function bai4() {
  let minDuong = Infinity;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0 && arrNumber[i] < minDuong) {
      minDuong = arrNumber[i];
    }
  }

  if (minDuong === Infinity) {
    get_ID("txtketqua4").innerHTML = " Nahhhh! Không có số dương trong mảng !";
  } else {
    get_ID("txtketqua4").innerHTML = minDuong;
  }
}
get_ID("Bai4").onclick = function () {
  bai4();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 5==================================================================================
function bai5() {
  let ketqua = "";
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 == 0) {
      ketqua = arrNumber[i];
      get_ID("txtketqua5").innerHTML = ketqua;
      break;
    } else {
      get_ID("txtketqua5").innerHTML = " Nahhhh! Không có số chẵn trong mảng !";
    }
  }
}
get_ID("Bai5").onclick = function () {
  bai5();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 6==================================================================================
// em mượn hàm swap này
function swap(n, r) {
  var e = arrNumber[n];
  (arrNumber[n] = arrNumber[r]), (arrNumber[r] = e);
}
function bai6() {
  swap(get_ID("nhapViTri1").value, get_ID("nhapViTri2").value),
    (get_ID("txtketqua6").innerHTML = `[ ${arrNumber} ]`);
}

get_ID("Bai6").onclick = function () {
  bai6();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};

//=====Bài 7==================================================================================
function bai7() {
  arrNumber.sort((a, b) => {
    return a - b;
  });
  get_ID("txtketqua7").innerHTML = arrNumber;
}
get_ID("bai7").onclick = function () {
  bai7();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 8==================================================================================
function bai8() {
  let timSNDT = null;
  for (let i = 0; i < arrNumber.length; i++) {
    if (Number.isInteger(arrNumber[i]) && arrNumber[i] > 0) {
      timSNDT = arrNumber[i];
      break;
    }
  }
  if (timSNDT !== null) {
    get_ID("txtketqua8").innerHTML = timSNDT;
  } else {
    get_ID("txtketqua8").innerHTML =
      " Nahhhh! Không có số nguyên dương trong mảng !";
  }
}
get_ID("bai8").onclick = function () {
  bai8();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 9==================================================================================
function bai9() {
  let demSN = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (Number.isInteger(arrNumber[i])) {
      demSN++;
    }
  }
  get_ID("txtketqua9").innerHTML = demSN;
}
get_ID("bai9").onclick = function () {
  bai9();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};
//=====Bài 10=================================================================================
function bai10() {
  let soDuong = 0;
  let soAm = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    get_ID("txtketqua10").innerHTML = `  Dương Thịnh Âm Suy (Số Dương > Số Âm)`;
  } else if (soDuong == soAm) {
    get_ID("txtketqua10").innerHTML = `  Cân Bằng Âm Dương (Số Dương = Số Âm)`;
  } else {
    get_ID(
      "txtketqua10"
    ).innerHTML = `  Âm Thịnh Duong Suy (Số Âm > Số Dương) `;
  }
}
get_ID("bai10").onclick = function () {
  bai10();
  hienThiThongBao("Cộng 20 điểm =)))", 5000, "bg-success");
};

//=====END ===================================================================================
function hienThiThongBao(text, duration, className) {
  Toastify({
    text,
    duration,
    className,
    backgroundColor: "black",
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    // style: {
    //   background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   background: "red",
    // },
  }).showToast();
}
