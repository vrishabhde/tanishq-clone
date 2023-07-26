function register(event) {
    // alert("registered successfully");
    event.preventDefault();

    var email = document.getElementById("uemail").value;

    var password = document.getElementById("upassword").value;

    var confirmpassword = document.getElementById("ucpassword").value;

    var cartproduct = [];

    if (email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {
            if (password == confirmpassword) {

                var ls = JSON.parse(localStorage.getItem("T_user")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == email) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var userdata = { email: email, paswword: password, cpassword: confirmpassword, cartproduct};
                    ls.push(userdata);

                    localStorage.setItem("T_user", JSON.stringify(ls));
                    alert("registration successfull");
                    window.location.href=`./login.html`;
                    document.getElementById("uemail").value = "";
                    document.getElementById("upassword").value = "";
                    document.getElementById("ucpassword").value = "";
                }else{
                    alert("user already exist")
                }
            } else {
                alert("password not matched")
            }
        } else {
            alert("password should contain 8 digit")
        }
    } else {
        alert("all fields are mandatory")
    }
}