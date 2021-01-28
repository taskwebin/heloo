var global_json_data;
$(document).ready(function () {
  $("#submit").click(function () {
    var department = $("#department").val();
    var title = $("#title").val();
    var spec = $("#job-spec").val();
    var reason = $("#reason").val();
    const brei = $("#breif").val();
    var approved = $("#approved").val();
    var request = $("#request").val();
    var valid = false;

    if (department.length == "") {
      $("#p").text("Required");
      $("#department").focus();
      return false;
    } else if (title.length == "") {
      $("#p2").text("Required");
      $("#title").focus();
      return false;
    } else if (spec.length == "") {
      $("#p3").text("Required");
      $("#job-spec").focus();
      return false;
    } else if (reason.length == "") {
      $("#p4").text("Required");
      $("#reason").focus();
      return false;
    } else if (request.length == "") {
      $("#p6").text("Required");
      $("#request").focus();
      return false;
    } else if (approved.length == "") {
      $("#p7").text("Required");
      $("#approved").focus();
      return false;
    } else if (document.getElementById("#emp-type").cheked) {
      valid = true;
    }
  });
});
