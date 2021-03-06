$(document).ready(function () {
  $(".all-news").owlCarousel({
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");

        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  $(".owl-one").owlCarousel({
    nav: false,
    dots: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".owl-two").owlCarousel({
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(window).scroll(function () {
    console.log(this.scrollY);
    if (this.scrollY >= 50) {
      $("#nav-inner-box").css({
        padding: 0,
        "backdrop-filter": "none",
        "background-color": "transparent",
      });
    } else {
      $("#nav-inner-box").css({
        padding: "15px",
        "backdrop-filter": "blur(10px)",
        "background-color": "rgba(255, 255, 255, 0.1)",
      });
    }
  });

  $(".navbar-toggler").click(function (e) {
    e.preventDefault();

    var icon = $(this).children(".fas").attr("class");

    if (icon == "fas fa-bars") {
      $(this)
        .children(".fas")
        .removeClass("fas fa-bars")
        .addClass("fas fa-times");
    } else {
      $(this)
        .children(".fas")
        .removeClass("fas fa-times")
        .addClass("fas fa-bars");
    }
  });

  //   $("#bg-video-btn").click(function (e) {
  //     e.preventDefault();

  //     var icon = $(this).attr("class");

  //     if (icon == "far fa-play-circle") {
  //       $(this).removeClass("far fa-play-circle").addClass("far fa-pause-circle");
  //     } else {
  //       $(this).removeClass("far fa-pause-circle").addClass("far fa-play-circle");
  //     }
  //   });
  //   $("button.close").click(function (e) {
  //     e.preventDefault();

  //     var iconGlobaltwo = $("#bg-video-btn").attr("class");

  //     if (iconGlobaltwo == "far fa-pause-circle") {
  //       $("#bg-video-btn")
  //         .removeClass("far fa-pause-circle")
  //         .addClass("far fa-play-circle");
  //     } else {
  //       $("#bg-video-btn")
  //         .removeClass("far fa-play-circle")
  //         .addClass("far fa-pause-circle");
  //     }
  //   });

  //   $(".modal").click(function (e) {
  //     e.preventDefault();

  //     var iconGlobal = $("#bg-video-btn").attr("class");

  //     if (iconGlobal == "far fa-play-circle") {
  //       $("#bg-video-btn")
  //         .removeClass("far fa-play-circle")
  //         .addClass("far fa-pause-circle");
  //     } else {
  //       $("#bg-video-btn")
  //         .removeClass("far fa-pause-circle")
  //         .addClass("far fa-play-circle");
  //     }
  //   });

  $(".quastion-ans-btn").click(function (e) {
    var idBtn = $(this).attr("id");

    $(`${"#box-" + idBtn}`).slideDown();
    $(`${"#ex-" + idBtn}`).slideUp();
  });

  $('input[type="file"]').change(function (e) {
    var fileName1 = e.target.files[0].name;
    $("#files-box").append(
      `${
        '<div class="files-wrap mb-4"><div><i class="fas fa-file-alt"></i><p> ' +
        fileName1 +
        ' </p></div><i class="fas fa-trash-alt"></i></div>'
      }`
    );
  });

  $(".top-box").click(function (e) {
    var iClass = $(this).children("#icon").attr("class");

    e.preventDefault();
    $(this).next(".under-box").slideToggle();
    if (iClass == "fa fa-angle-down") {
      $(this)
        .children("#icon")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      $(this)
        .children("#icontwo")
        .removeClass("far fa-circle")
        .addClass("fas fa-play");
    } else if (iClass == "fa fa-angle-up") {
      $(this)
        .children("#icon")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this)
        .children("#icontwo")
        .removeClass("fas fa-play")
        .addClass(" far fa-circle");
    }
  });

  $(".tab-btn").click(function (e) {
    var tabId = $(this).attr("id");
    $(`${"#Left" + tabId}`).fadeToggle(function () {
      $(".inner-item").not(this).fadeOut();
    });
  });

  $(".first-tab").trigger("click");
  $(".first-course").trigger("click");
  $(".first-course-item").trigger("click");
});
