$(document).ready(function () {
  $("#form-student").validate({
    rules: {
      nim: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      name: {
        required: true,
      },
      address: {
        required: true,
      },
      birthdate: {
        required: true,
        indonesianDate: true,
      },
      age: {
        digits: true,
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      site: {
        required: true,
        url: true,
      },
      password: {
        required: true,
      },
      "password-confirmation": {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      nim: {
        required: "NIM harus diisi",
        digits: "NIM harus berupa angka",
        minlength: "NIM harus berjumlah 10 digit",
        maxlength: "NIM harus berjumlah 10 digit",
      },
      name: {
        required: "Nama harus diisi",
      },
      address: {
        required: "Alamat harus diisi",
      },
      birthdate: {
        required: "Tanggal lahir harus diisi",
        indonesianDate: "Format tanggal harus DD/MM/YYYY",
      },
      age: {
        required: "Umur harus diisi",
      },
      email: {
        required: "Alamat email harus diisi",
        email: "Format email tidak valid",
      },
      site: {
        required: "Alamat situs harus diisi",
        url: "Format URL tidak valid",
      },
      password: {
        required: "Kata sandi harus diisi",
      },
      "password-confirmation": {
        required: "Konfirmasi kata sandi harus diisi",
        equalTo: "Kata sandi tidak sama",
      },
    },
    submitHandler: () => alert("Data berhasil dikirim"),
  });

  $.validator.addMethod(
    "indonesianDate",
    function (value, element) {
      // put your own logic here, this is just a (crappy) example
      return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    },
    "Please enter a date in the format DD/MM/YYYY"
  );
});
