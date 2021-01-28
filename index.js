$(document).ready(function () {
  $("#basic-form").validate({
    rules: {
      department: {
        required: true,
      },
      dates: {
        required: true,
      },
      title: {
        required: true,
      },
      dater: {
        required: true,
      },
      type: {
        required: true,
      },
    },
    messages: {
      department: {
        minlength: "Name should be at least 3 characters",
      },
      age: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old",
      },
    },
  });
});
