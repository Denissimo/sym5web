$(document).ready(function () {

//   $("#form-login").submit(function (event) {

//     var settings = {
//       url: "https://dev-auth.airchannel.net/api/login_check",
//       method: "POST",
//       timeout: 0,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: JSON.stringify({
//         username: $("#inputLogin").val(),
//         password: $("#inputPassword").val(),
//       }),
//       success: function (response) {
//         console.log("OK");
//         var url = "/";
//         $(location).prop("href", url);
//       },
//       error: function (response) {
//         $(".form-alert").addClass("alert-danger");
//         $(".alert-message").html("Ошибка входа. Проверьте введенные данные.");
//       },
//     };

//     event.preventDefault();

//     // Forms dumps
//     console.log($(this).serialize());

//     // Token Response
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//       return response;
//     });

//     // Cookie test
//     $.ajax(settings).done(function (response) {
//       $.cookie("utmdata_token", response.token);
//       console.log(response);
//     });
    
//   });



  $("#form-individual").submit(function (event) {




    
    var token = $.cookie('utmdata_token');
    console.log(token);

    var settings = {
        url: "https://dev-api.airchannel.net/my/userdata",
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + token
          },
      
        data: JSON.stringify({
  
          "user": {
              lastname: $("#lastname").val(),
              firstname:$("#firstname").val(),
              middlename: $("#middlename").val(),
              email: $("#email").val(),
              phone: $("#phone").val()
          }
  
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







    


    // var settings = {
    //     url: "https://dev-api.airchannel.net/my/userdata",
    //     method: "PUT",
    //     timeout: 0,
    //     headers: {
    //       "Content-Type": "application/json",
    //       beforeSend: function (xhr) {
    //           xhr.setRequestHeader("Authorization", 'Bearer '+ token);
    //       }
    //     },
  
  
    //     data: JSON.stringify({
  
    //       "user": dataForm
  
    //     }),
  
        
  
  
        
    //     success: function (response) {
    //       console.log("OK");
    //     },
  
    //     error: function (response) {
    //       $(".form-alert").addClass("alert-danger");
    //       $(".alert-message").html("Ошибка входа. Проверьте введенные данные.");
    //     },
    //   };









});