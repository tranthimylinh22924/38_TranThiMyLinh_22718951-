$(document).ready(function () {

  // Load thông tin cá nhân lên trang html
  const loadData = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    $("#fName").val(user.firstName);
    $("#lName").val(user.lastName);
    $("#mail").val(user.email);
    $("#phone").val(user.phone);
    $("#birthDay").val(user.dayOfBirth);
    $(".gender").filter(function(){
      if(parseInt($(this).attr("id")) == user.gender){
        $(this).attr("checked",true);
      }
    })
  }
  loadData();
  
});