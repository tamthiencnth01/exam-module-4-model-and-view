
$(document).ready(function(){
    $("#frmCreateCustomer").validate({
        onkeyup: function (element) {
            $(element).valid()
        },
        onclick: false,
        rules: {
            name: {
                required: true,
                minlength: 5,
                maxlength: 30
            },
            area: {
                number: true,
                required: true,
                digits: true
            },
            population: {
                number: true,
                required: true,
                digits: true
            },
            GDP: {
                number: true,
                required: true,
                digits: true
            },
        },
        messages: {
            name: {
                required: "Bắt buộc nhập tên đầy đủ",
                minlength: "Hãy nhập tối thiểu 5 ký tự",
                maxlength: "Hãy nhập tối đa 30 ký tự"
            },
            area: {
                number: "Vui lòng nhập một số hợp lệ",
                required: "Vui lòng nhập một số hợp lệ",
                digits: "Vui lòng nhập 1 số nguyên dương"
            },
            population: {
                number: "Vui lòng nhập một số hợp lệ",
                required: "Vui lòng nhập một số hợp lệ",
                digits: "Vui lòng nhập 1 số nguyên dương"
            },
            GDP: {
                number: "Vui lòng nhập một số hợp lệ",
                required: "Vui lòng nhập một số hợp lệ",
                digits: "Vui lòng nhập 1 số nguyên dương"
            }
        },
        submitHandler: function () {
            createCity();
        }
    });
});

$(() => {
    $("#frmCreateCustomer").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 50
            },
            cmnd: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 11
            },
            // gender: {
            //     required: false,
            //     // validatePassword: true,
            //     minlength: 5
            // },
            // rePassword: {
            //     // equalTo: "#password",
            //     minlength: 5
            // }
        },
        messages: {
            name: {
                required: "Bắt buộc nhập tên đầy đủ",
                minlength: "Hãy nhập tối thiểu 4 ký tự",
                maxlength: "Hãy nhập tối đa 50 ký tự"
            },
            cmnd: {
                number: "Vui lòng nhập một số hợp lệ",
                minlength: "Hãy nhập số có 09 chữ số",
                maxlength: "Hãy nhập số có 09 chữ số"
            },
            phone: {
                number: "Vui lòng nhập một số hợp lệ",
                minlength: "Hãy nhập ít nhất 10 chữ số",
                maxlength: "Hãy nhập tối đã 11 chữ số"
            },
            // password: {
            //     required: "Bắt buộc nhập mật khẩu",
            //     minlength: "Hãy nhập ít nhất 5 ký tự"
            // },
            // rePassword: {
            //     equalTo: "Hai mật khẩu phải giống nhau",
            //     minlength: "Hãy nhập ít nhất 5 ký tự"
            // }
        },
        submitHandler: function() {
            createPatient();
        }
    });

    $("#frmUpdateCustomer").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            upName: {
                required: true,
                minlength: 4,
                maxlength: 50
            },
            upCMND: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9
            },
            upPhone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 11
            }
        },
        messages: {
            upName: {
                required: "Bắt buộc nhập tên đầy đủ",
                minlength: "Hãy nhập tối thiểu 4 ký tự",
                maxlength: "Hãy nhập tối đa 50 ký tự"
            },
            upCMND: {
                number: "Vui lòng nhập một số hợp lệ",
                minlength: "Hãy nhập số có 09 chữ số",
                maxlength: "Hãy nhập số có 09 chữ số"
            },
            upPhone: {
                number: "Vui lòng nhập một số hợp lệ",
                minlength: "Hãy nhập ít nhất 10 chữ số",
                maxlength: "Hãy nhập tối đã 11 chữ số"
            }
        },
        submitHandler: function() {
            updatePatient();
        }
    });
    $("#formCreatePatient").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            // upName: {
            //     required: true,
            //     minlength: 4,
            //     maxlength: 50
            // },
            // upCMND: {
            //     required: true,
            //     number: true,
            //     minlength: 9,
            //     maxlength: 9
            // },
            // upPhone: {
            //     required: true,
            //     number: true,
            //     minlength: 10,
            //     maxlength: 11
            // }
        },
        messages: {
            // upName: {
            //     required: "Bắt buộc nhập tên đầy đủ",
            //     minlength: "Hãy nhập tối thiểu 4 ký tự",
            //     maxlength: "Hãy nhập tối đa 50 ký tự"
            // },
            // upCMND: {
            //     number: "Vui lòng nhập một số hợp lệ",
            //     minlength: "Hãy nhập số có 09 chữ số",
            //     maxlength: "Hãy nhập số có 09 chữ số"
            // },
            // upPhone: {
            //     number: "Vui lòng nhập một số hợp lệ",
            //     minlength: "Hãy nhập ít nhất 10 chữ số",
            //     maxlength: "Hãy nhập tối đã 11 chữ số"
            // }
        },
        submitHandler: function() {
            createMedicalBill();
        }
    });

    $("#frmCreateMedicine").validate({
        onkeyup: function (element) {
            $(element).valid()
        },
        onclick: false,
        rules: {
            name: {

            },
            ingredients: {

            },
            salePrice: {

            },
            importPrice: {

            },
            dailyDefaultAmount: {

            },
            unit: {

            },
            howToUse: {

            },
            barCode: {

            },
            note: {

            },
            medicineCategory: {

            }
        },
        messages: {
            name: {

            },
            ingredients: {

            },
            salePrice: {

            },
            importPrice: {

            },
            dailyDefaultAmount: {

            },
            unit: {

            },
            howToUse: {

            },
            barCode: {

            },
            note: {

            },
            medicineCategory: {

            }
        },
        submitHandler: function () {
            createMedicine();
        }
    });

    $("#frmCreateMedicineCategory").validate({
        onkeyup: function (element) {
            $(element).valid()
        },
        onclick: false,
        rules: {
            name: {

            }
        },
        messages: {
            name: {

            }
        },
        submitHandler: function () {
            createMedicineCategory();
        }
    });

    $("#frmUpdateMedicineCategory").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            upName: {

            }
        },
        messages: {
            upName: {

            }
        },
        submitHandler: function() {
            updateMedicineCategory();
        }
    });

    $("#frmUpdateMedicine").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            upName: {

            },
            upIngredients: {

            },
            upSalePrice: {

            },
            upImportPrice: {

            },
            upDailyDefaultAmount: {

            },
            upUnit: {

            },
            upHowToUse: {

            },
            upNote: {

            },
            upMedicineCategory: {

            }
        },
        messages: {
            upName: {

            },
            upIngredients: {

            },
            upSalePrice: {

            },
            upImportPrice: {

            },
            upDailyDefaultAmount: {

            },
            upUnit: {

            },
            upHowToUse: {

            },
            upNote: {

            },
            upMedicineCategory: {

            }
        },
        submitHandler: function() {
            updateMedicine();
        }
    });

    $.validator.addMethod("validatePassword", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    }, "Hãy nhập mật khẩu từ 5 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");

    jQuery.validator.addMethod("phone", function (value, element) {
        if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Vui lòng nhập số ĐT hợp lệ");
});