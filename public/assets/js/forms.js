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

  // Form - Profile -> GET information

  if (window.location.pathname == "/profile") {
    $("#form-individual").ready(function (event) {
      var token = $.cookie("utmdata_token");

      $(function () {
        $.ajax({
          url: "https://dev-api.airchannel.net/my/userdata",
          type: "GET",
          dataType: "json",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },

          success: function (data) {
            console.log(data.user.user);
            $("#firstname").val(data.user.user.firstname);
            $("#middlename").val(data.user.user.middlename);
            $("#lastname").val(data.user.user.lastname);
            $("#phone").val(data.user.user.phone);
            $("#email").val(data.user.user.email);
          },

          error: function () {
            console.log("error");
          },
        });
      });
    });
  }

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
    $.cookie("utmdata_token", null, { path: "/" });
    console.log("coockie is die");
    var url = "/login";
    $(location).prop("href", url);
  });

  // Form -> Signup

  $("#form-signup").submit(function (event) {
    event.preventDefault();

    var legalRoles = [];
    $(this).find('.legal_role').each(function() {
      if ($(this).is(':checked')) {
          legalRoles.unshift($(this).attr('name'));
      }
    });

    var aircraftRoles = [];
    $(this).find('.aircraft_role').each(function() {
      if ($(this).is(':checked')) {
        aircraftRoles.unshift($(this).attr('name'));
      }
    });

    if (legalRoles.length < 1) {
      console.log('L');
      // $('.alert').toggleClass('show');
      // $('.alert').alert('qwe');
      $('.alert_place').html(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
          '\t\t\t\t\tChoose at least one <strong id="b_role">legal role and aircraft role</strong>.\n' +
          '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
          '\t\t\t\t</div>'
      );

      return false;
    }

    if (aircraftRoles.length < 1) {
      console.log('A');
      $('.alert_place').html(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
          '\t\t\t\t\tChoose at least one <strong id="b_role">legal role and aircraft role</strong>.\n' +
          '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
          '\t\t\t\t</div>'
      );

      return false;
    }

    console.log(legalRoles.length);

    var settings = {
      url: "https://dev-api.airchannel.net/register/user",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },

      data: JSON.stringify({
        user: {
          lastname: $("#lastname").val(),
          firstname: $("#firstname").val(),
          phone: $("#phone").val(),
          email: $("#email").val(),
          password: $("#password").val(),
        },

        legalRoles: legalRoles,

        aircraftRoles: aircraftRoles,
      }),

      success: function (response) {
        $('.alert_place').html(
            '<div class="alert alert-success alert-dismissible fade show" role="alert">\n' +
            '\t\t\t\t\tSuccess register\n' +
            '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '\t\t\t\t</div>'
        );
        setTimeout(function() {
          $(location).prop("href", '/login');
        }, 3000);
      },

      error: function (response) {
        console.log(response);
        console.log(response.responseJSON);
        $('.alert_place').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
            '\t\t\t\t\t' + response.responseJSON.message + '\n' +
            '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '\t\t\t\t</div>'
        );
      },
    };

    // Token Response
    $.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });


  });
});
