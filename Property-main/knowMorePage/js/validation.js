$(document).ready(function () {
  $("#send_message").click(function (e) {
    e.preventDefault();
    var s = !1,
      a = $("#name").val(),
      r = $("#email").val(),
      n = $("#phone").val(),
      l = $("#message").val();
    if (
      ($("#name,#email,#phone,#message").click(function () {
        $(this).removeClass("error_input");
      }),
      0 == a.length)
    ) {
      s = !0;
      $("#name").addClass("error_input");
    } else $("#name").removeClass("error_input");
    if (0 == r.length || "-1" == r.indexOf("@")) {
      s = !0;
      $("#email").addClass("error_input");
    } else $("#email").removeClass("error_input");
    if (0 == n.length) {
      s = !0;
      $("#phone").addClass("error_input");
    } else $("#phone").removeClass("error_input");
    if (0 == l.length) {
      s = !0;
      $("#message").addClass("error_input");
    } else $("#message").removeClass("error_input");
    0 == s &&
      ($("#send_message").attr({ disabled: "true", value: "Sending..." }),
      $.post("email.php", $("#contact_form").serialize(), function (e) {
        "sent" == e
          ? ($("#submit").remove(), $("#mail_success").fadeIn(500))
          : ($("#mail_fail").fadeIn(500),
            $("#send_message")
              .removeAttr("disabled")
              .attr("value", "Send The Message"));
      }));
  });
});
