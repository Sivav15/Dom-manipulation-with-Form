function formsubmithandler(e) {
    e.preventDefault();
}
let a = document.getElementById("submit");
a.addEventListener("click", () => {
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let gender = document.getElementsByName("gender");
    let gendervalue;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gendervalue = gender[i].value
        }
    }

    let food = document.getElementsByClassName("checkbox");
    let arr = [];
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            arr.push(`  ${i + 1} : ${food[i].value}`);
        }
    }
    if (arr.length >= 2) {
        let a = document.createElement("li").innerHTML = arr;
        document.getElementById("sivanathan").append(a);
    } else {
        result = alert("Choose atleast 2 options out of 5 in food")
    }


    let pincode = document.getElementById("pincode").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;


    document.getElementById("fname").textContent = fname;
    document.getElementById("lname").textContent = lname;
    document.getElementById("gen").textContent = gendervalue;
    document.getElementById("pin").textContent = pincode;
    document.getElementById("add").textContent = address;
    document.getElementById("stat").textContent = state;
    document.getElementById("count").textContent = country;
});









