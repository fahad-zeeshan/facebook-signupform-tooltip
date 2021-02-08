// $(function () {
//     $(document).on('focusout', '.input_onfocus_out', function (e) {
//         var val = $(this).val();
//         if (val == "") {
//             $(this).removeClass('input_invalid');
//             $(this).removeClass('input_valid');
//             $(this).addClass('input_invalid');
//             // $(this).addClass('show_error');
//             // $(this).removeClass('display_none');
//             // $(this).tooltip('show');
//             // return false;

//         } else {
//             $(this).removeClass('input_invalid');

//             $(this).addClass('input_valid');

//             // $(this).tooltip('hide');
//             // return false;

//         }

//     });

//     $(document).on('focus', '.input_onfocus_out', function (e) {
//         cls = $(this).hasClass("input_invalid");
//         if (cls) {
//             $(this).tooltip('show');

//         } else {

//             $(this).removeClass('input_invalid');
//             $(this).addClass('input_valid');

//         }

//     });
// });





$(function () {
    $(document).on("focusout", ".input_onfocus_out", function (e) {
        e.preventDefault();

        var val = $(this).val();
        if (val === "") {
            $(this).addClass("input_invalid");
            $(this).removeClass("input_valid");
            $(this).tooltip("hide");
            $(this).next().show();
            return false;
        } else {
            $(this).removeClass("input_invalid")
            $(this).addClass("input_valid")
        }
        // } else {
        //     (!$(this)('.input_onfocus_out').val()).tooltip('hide');
        // }
    });
    
    $(document).on("focus", ".input_onfocus_out", function (e) {
        e.preventDefault();
        cls = $(this).hasClass("input_invalid");
        // $(this).tooltip({
        //     t
        // })
        if (cls) {
            $(this).addClass("input_valid");
            $(".rt-icon").hide();
            
            $(this).tooltip("show");
            
        } else {
            $(this).removeClass("input_invalid");
            $(".rt-icon").hide();
            $(this).addClass("input_valid");
            $(this).tooltip("hide")
            // $(this).tooltip({
            //     'trigger': "manual"
            // }).$(document).on('focus', ".input_onfocus_out", function () {
            //     $(this).tooltip("hide")
            // })
            // $("rt.icon").hide();
        }
    });
});