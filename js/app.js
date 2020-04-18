$(function() {
  // フロートヘッダーメニュー
  var targetHeight = $(".js-float-menu-target").height();
  $(window).on("scroll", function() {
    $(".js-float-menu").toggleClass(
      "float-active",
      $(this).scrollTop() > targetHeight
    );
  });

  // SPメニュー
  $(".js-toggle-sp-menu").on("click", function() {
    $(this).toggleClass("active");
    $(".js-toggle-sp-menu-target").toggleClass("active");
  });

  $(".menu-item").on("click", function() {
    $(".js-toggle-sp-menu-target").removeClass("active");
    $(".js-toggle-sp-menu").removeClass("active");
  });
});

//==============
//フォーム
//==============
//text count
window.addEventListener(
  "DOMContentLoaded",
  function() {
    var node = document.getElementById("js-count-text");
    node.addEventListener(
      "keyup",
      function() {
        var count = this.value.length;
        var counterNode = document.querySelector(".js-show-count-text");
        counterNode.innerText = count;
      },
      false
    );
  },
  false
);

$(function() {
  const MSG_TEXT_MAX = "20文字以内で入力してください。";
  const MSG_EMPTY = "入力必須です。";
  const MSG_EMIL_TYPE = "emailの形式ではありません。";
  const MSG_TEXTAREA_MAX = "100文字以内で入力してください。";

  $(".js-valid-text").keyup(function() {
    var form_g = $(this).closest(".form-group");

    if ($(this).val().length > 20) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.find(".help-block").text(MSG_TEXT_MAX);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.find(".help-block").text("");
    }
  });

  $(".js-valid-email").keyup(function() {
    var form_g = $(this).closest(".form-group");

    if ($(this).val().length === 0) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.find(".help-block").text(MSG_EMPTY);
    } else if (
      $(this).val().length > 50 ||
      !$(this)
        .val()
        .match(
          /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/
        )
    ) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.find(".help-block").text(MSG_EMIL_TYPE);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.find(".help-block").text("");
    }
  });

  $(".js-valid-textarea").keyup(function() {
    var form_g = $(this).closest(".form-group");

    if ($(this).val().length === 0) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.find(".help-block").text(MSG_EMPTY);
    } else if ($(this).val().length > 100) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.find(".help-block").text(MSG_TEXTAREA_MAX);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.find(".help-block").text("");
    }
  });
});
