$(document).ready(function () {
  $("#form-login").submit(function (event) {
    var settings = {
      url: "https://dev-auth.airchannel.net/api/login_check",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        username: $("#inputLogin").val(),
        password: $("#inputPassword").val(),
      }),
      success: function (response) {
        console.log("OK");
        var url = "/";
        $(location).prop("href", url);
      },
      error: function (response) {
        $(".form-alert").addClass("alert-danger");
        $(".alert-message").html("Ошибка входа. Проверьте введенные данные.");
      },
    };

    event.preventDefault();

    // Forms dumps
    console.log($(this).serialize());

    // Token Response
    $.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });

    // Cookie test
    $.ajax(settings).done(function (response) {
      $.cookie("utmdata_token", response.token);
      console.log(response);
    });
  });


  // Form - Profile -> Edit information

  $("#form-individual").submit(function (event) {
    var token = $.cookie("utmdata_token");
    console.log(token);

    var settings = {
      url: "https://dev-api.airchannel.net/my/userdata",
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      data: JSON.stringify({
        user: {
          lastname: $("#lastname").val(),
          firstname: $("#firstname").val(),
          middlename: $("#middlename").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
        },
      }),

      success: function (response) {
        console.log("OK");
      },

      error: function (response) {
        console.log("ПНХ");
        console.log(response);
      },
    };

    // Token Response
    $.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });

    event.preventDefault();
  });


  // Remove cookie
  $("#logout").click(function (event) {
    $.cookie("utmdata_token", null, { path: '/' });
      console.log('coockie is die');  
      var url = "/login";
      $(location).prop("href", url);
  });  

});




$("#form-individual").ready(function (event) {
  var token = $.cookie("utmdata_token");
  var data = {"user": "username"};

  $(function () {
    $.ajax({
      url: 'https://dev-api.airchannel.net/my/userdata',
      type: 'GET',
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },

      data: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
      }),
 
      success: function(data){
        console.log(data.user.user);
        $("#firstname").val(data.user.user.firstname);
        $("#middlename").val(data.user.user.middlename);
        $("#lastname").val(data.user.user.lastname);
        $("#phone").val(data.user.user.phone);
        $("#email").val(data.user.user.email);
      },

      error: function(){
        alert('error!');
      }
  
    });

 

  });
 

});


