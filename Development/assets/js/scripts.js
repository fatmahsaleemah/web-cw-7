let arr = [];

// Test
console.log(arr);

// onClick هذه الدالة المسؤولة عن إضافة العنصر في السلة عن طريق
function addToCart(item) {
  // أكمل
  arr.push(item);
}

let ul = document.createElement("ul");
ul.className = "myUL";
document.getElementById("container").appendChild(ul);

// create(arr) هذه الدالة المسؤولة عن استدعاء
function myFunction() {
  // أكمل
  create(arr);
}

// arr هذه الدالة المسؤولة عن إنشاء قائمة المشتريات من العناصر الموجودة في المصفوفة
function create(arr) {
  // أكمل
  arr.forEach(function (data) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += data;
    li.className = "myList";
  });
}
