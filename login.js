function login(event) {
    event.preventDefault();

    var uemail = document.getElementById("uemail").value;
    var upassword = document.getElementById("upassword").value;

    if (uemail && upassword) {
        var ls = JSON.parse(localStorage.getItem("T_user"));
        var currentuser;
        var flag = false;

        for (var i = 0; i < ls.length; i++) {
            if (ls[i].email == uemail && ls[i].paswword == upassword) {
                flag = true;
                currentuser = ls[i];
            }
        }
        if (flag == true) {
            console.log(currentuser, "T_currentuser");
            localStorage.setItem("T_currentuser", JSON.stringify(currentuser));
            alert("login Successful");
            window.location.href = `./home.html`;
        } else {
            alert("credentials wrong");
        }
    } else {
        alert("All fields are mandatory");
    }

}