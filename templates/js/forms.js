$(document).ready(function () {
  var currentPath = new URL($(location).prop("href")).pathname;
  var apiUrl = '{{ api_url|raw }}';
  var authUrl = '{{ auth_url|raw }}';
  var tokenCookieName = '{{ token_cookie_name }}';
  if ($.cookie(tokenCookieName) === undefined && currentPath !== '/login' && currentPath !== '/signup') {
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
      url: authUrl + "/api/login_check",
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
      $.cookie(tokenCookieName, response.token, { expires: 10/24, path: '/' });
      console.log(response);
    });
  });

  // Form - Profile -> GET information

  if (window.location.pathname === "/profile") {
    $("#form-individual").ready(function (event) {
      var token = $.cookie(tokenCookieName);

      $(function () {
        $.ajax({
          url: apiUrl + "/my/userdata",
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
    var token = $.cookie(tokenCookieName);
    console.log(token);

    var settings = {
      url: apiUrl + "/my/userdata",
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
    // $.cookie(tokenCookieName, null, { path: "/" });
    $.removeCookie(tokenCookieName, { path: '/' });
    console.log(tokenCookieName);
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
      url: apiUrl + "/register/user",
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

  $("#staticBackdropLabel").click(function (event) {
    console.log(3);
    $("#modalUav").modal("hide");
    // $("#modalUav").hide();
  });

  $(".btn-aircraft-edit").click(function (event) {
    console.log($(this).attr('data-aircraft-id'));
    var aircraft = JSON.parse($(this).attr('data-aircraft'));
    console.log(aircraft);
    $('#form-uav input').each(
        function (){
          $(this).val(2);
        }
    );
  });

  $("#form-uav").submit(function (event) {
    console.log('add UAV submit');
    event.preventDefault();
    var addUavModal = new bootstrap.Modal(document.getElementById('modalUav'), {
      keyboard: false
    });
    addUavModal.toggle();
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
    var token = $.cookie(tokenCookieName);
    console.log(token);
    var settings = {
      url: apiUrl + "/aircraft/add",
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
            'БВС успешно добавлено\n' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '</div>'
        );
        $("#modalUav").modal("hide");
        // setTimeout(function() {
        //   $(location).prop("href", '/login');
        // }, 3000);
      },

      error: function (response) {
        console.log(response);
        // console.log(response.responseJSON);
        $('.alert_place').html(
            '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
             response.responseJSON.message + '\n' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
            '</div>'
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
