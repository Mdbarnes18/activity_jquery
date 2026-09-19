/*
========================================
jQuery Activity JavaScript
Name: Michael Barnes
Date: September 19, 2026
========================================
*/

$(document).ready(function () {

    /* ========================================
    Change summary paragraph text color
    ======================================== */

    $("#summaryParagraph").css("color", "blue");


    /* ========================================
    Form validation
    ======================================== */

    $("#feedbackForm").validate({

        rules: {

            name: {
                required: true
            },

            email: {
                required: true,
                email: true,
                minlength: 8
            },

            subject: {
                required: true
            },

            message: {
                required: true,
                minlength: 10
            }

        },

        messages: {

            name: {
                required: "Please enter your name."
            },

            email: {
                required: "Email is required.",
                email: "Enter a valid email address.",
                minlength: "Email must be at least 8 characters."
            },

            subject: {
                required: "Please enter a subject."
            },

            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 10 characters."
            }

        },

        invalidHandler: function (event, validator) {

            let errors = validator.numberOfInvalids();

            if (errors) {

                $(".form_errors").text(
                    "You missed " + errors +
                    " required field(s). Please correct them."
                );

            } else {

                $(".form_errors").text("");

            }

        }

    });

});