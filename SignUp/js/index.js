$(document).ready(function () {
  document.getElementById("register").onclick = (e) => {
    const users = [];
    e.preventDefault();
    document.getElementById("formSignUp").reportValidity();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    var birthDay = $("#birthDay").val();
    var gender = parseInt($(".gender:checked")[0].id);
    if(firstName == '' || lastName == '' || email == '' || phone == '' || password == '' || confirmPassword == '')
      return;
    if(password != confirmPassword){
      alert("Mật khẩu không giống nhau");
      return;
    }
    const user = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      email : email,
      phone: phone,
      password : password,
      dayOfBirth : birthDay,
      gender : gender
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Đăng kí thành công");
    setTimeout(() => {
      window.location = "../../SignIn/html/index.html";
    },1000)
  } 
});
