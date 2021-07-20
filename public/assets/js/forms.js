$(document).ready(function () {
  var currentPath = new URL($(location).prop("href")).pathname;
  if ($.cookie("utmdata_token") === undefined && currentPath !== '/login' && currentPath !== '/signup') {
    console.log(document.referrer.pathname);
    var url = "/login";
    $(location).prop("href", url);
  }

  //$('#dp3').datepicker();

  $("#takeoffMass").blur(function () {
    var mass = parseFloat($(this).val());
    console.log(mass);
    // $('.mass_category_label').hide('explode');
    $('.mass_category_label').each(function(i,elem) {
      massMin = parseFloat($(this).attr('data-mass-min') ?? 0);
      massMax = parseFloat($(this).attr('data-mass-max') ?? 10000000);
      massId = $(this).attr('data-mass-id');
      if (isNaN(massMin)) {
        massMin = 0;
      }

      if (isNaN(massMax)) {
        massMax = 100000000;
      }

      $(this).addClass('label_invisible');
      if (mass >= massMin && mass < massMax) {
        $("#mass").val(massId);
        $(this).removeClass('label_invisible');
      }

      console.log(massMin + ' >>> ' +  massMax);
      // if ($(this).hasClass("stop")) {
      //   alert("Остановлено на " + i + "-м пункте списка.");
      //   return false;
      // } else {
      //   alert(i + ': ' + $(elem).text());
      // }
    });
      console.log('blur');
  });

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
        if (document.referrer) {
          console.log('referrer exists');
          var referer = new URL(document.referrer);
          var refererPath = referer.pathname;
          console.log(refererPath);
        }
        var url;
        if (refererPath !== undefined && refererPath !== '/login' && refererPath !== '/signup') {
          url = refererPath;
        } else {
          url = "/";
        }
        console.log(url);
        $(location).prop("href", url);
      },
      error: function (response) {
        console.log('error before');
        console.log(response);
        console.log('error after');
        $(".form-alert").addClass("alert-danger");
        $(".alert-message").html("Ошибка входа. Проверьте введенные данные.");
      },
    };

    event.preventDefault();

    // Forms dumps
    // console.log($(this).serialize());

    // Token Response
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    //   return response;
    // });

    // Cookie test
    $.ajax(settings).done(function (response) {
      $.cookie("utmdata_token", response.token, { expires: 10/24, path: '/' });
      console.log(response);
    });
  });

  // Form - Profile -> GET information

  if (window.location.pathname === "/profile") {
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
    // $.cookie("utmdata_token", null, { path: "/" });
    $.removeCookie('utmdata_token', { path: '/' });
    console.log("utmdata_token");
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

  $("#form-uav").submit(function (event) {
    console.log('add UAV submit');
    event.preventDefault();

    if (false) {
      $('.alert_place').html(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
          '\t\t\t\t\tChoose at least one <strong id="b_role">legal role and aircraft role</strong>.\n' +
          '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
          '\t\t\t\t</div>'
      );

      return false;
    }

    if (false) {
      $('.alert_place').html(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
          '\t\t\t\t\tChoose at least one <strong id="b_role">legal role and aircraft role</strong>.\n' +
          '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
          '\t\t\t\t</div>'
      );

      return false;
    }

    var channels = [];
    $('.channel').each(
        function (){
          if ($(this).prop('checked')) {
              channelId = $(this).attr('data-chennal-id');
              channels.push(channelId);
          }
        }
    );
    console.log(channels);
    var token = $.cookie("utmdata_token");
    console.log(token);
    var settings = {
      url: "https://dev-api.airchannel.net/aircraft/add",
      // url: "http://sym4swg/aircraft/add",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      data: JSON.stringify(
          {
            "channels": channels,
            "controlSystem": $('#controlSystem').val(),
            "category": $('#category').val(),
            "mass": $('#mass').val(),
            "engine": $('#engine').val(),
            "registrationStatus": $('#registrationStatus').val(),
            "aircraft": {
              "isCatapultStart": $('#isCatapultStart').prop('checked'),
              "isHandStart": $('#isHandStart').prop('checked'),
              "isParachuteLanding": $('#isParachuteLanding').prop('checked'),
              "isVerticalStart": $('#isVerticalStart').prop('checked'),
              "landingSiteLength": $('#landingSiteLength').val(),
              "landingSiteWidth": $('#landingSiteWidth').val(),
              "responderType": $('#responderType').val(),
              "otherParams": $('#otherParams').val(),
              "serialNumber": $('#serialNumber').val(),
              "registrationNumber": $('#registrationNumber').val(),
              "registrationDate": makeDate($('#registrationDate').val()),
              "deregistrationDate": makeDate($('#deregistrationDate').val()),
              "deregistrationReason": $('#deregistrationReason').val(),
              "type": $('#type').val(),
              "numberOfEngines": $('#numberOfEngines').val(),
              "takeoffMass": $('#takeoffMass').val(),
              "manufacturer": $('#manufacturer').val(),
              "insuranceCompany": $('#insuranceCompany').val(),
              "insurancePolicyNumber": $('#insurancePolicyNumber').val(),
              "insuranceStart": makeDate($('#insuranceStart').val()),
              "insuranceEnd": makeDate($('#insuranceEnd').val())
            }
          }
      ),

      success: function (response) {
        $('.alert_place').html(
            '<div class="alert alert-success alert-dismissible fade show" role="alert">\n' +
            '\t\t\t\t\tSuccess register\n' +
            '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '\t\t\t\t</div>'
        );
        // setTimeout(function() {
        //   $(location).prop("href", '/login');
        // }, 3000);
      },

      error: function (response) {
        console.log(response);
        // console.log(response.responseJSON);
        $('.alert_place').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
            '\t\t\t\t\t' + response.responseJSON.message + '\n' +
            '\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '\t\t\t\t</div>'
        );
      },
    };

    console.log(settings.data);
    // Token Response
    $.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });
  });

  function makeDate(stringDate) {
    var date;
    if (stringDate) {
      date = {
        "date": $('#registrationDate').val() + ' 00:00:00',
        "timezone_type": 3,
        "timezone": "Europe/Moscow"
      };
    } else {
      date = null;
    }

    return date;
  }


});
