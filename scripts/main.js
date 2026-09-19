/*
========================================
jQuery Activity JavaScript
Name: Michael Barnes
Date: September 19, 2026
========================================
*/

$(document).ready(function () {

    /* ================================
    DOM MANIPULATION
    ================================= */

    $("#changeTextBtn").click(function () {
        $("#introText").text("The text has been changed using jQuery!");
    });

    $("#hideTextBtn").click(function () {
        $("#introText").hide();
    });

    $("#showTextBtn").click(function () {
        $("#introText").show();
    });


    /* ================================
    INTERACTIVE ELEMENTS
    ================================= */

    $("#box1").mouseover(function () {
        $(this).css("background-color", "lightblue");
        $(this).text("Mouse is over the box!");
    });

    $("#box1").mouseout(function () {
        $(this).css("background-color", "#ddd");
        $(this).text("Hover Me");
    });


    /* ================================
    ANIMATION
    ================================= */

    $("#animateBtn").click(function () {

        $("#animateBox").animate({
            left: "300px",
            width: "150px",
            height: "150px"
        }, 1000)

        .animate({
            left: "0px",
            width: "100px",
            height: "100px"
        }, 1000);

    });


    /* ================================
    ASSIGNMENT: CHANGE TEXT COLOR
    ================================= */

    $("#summaryParagraph").css("color", "blue");


    /* ================================
    ASSIGNMENT: FORM VALIDATION
    ================================= */

    $("#activity_form").validate({

        rules: {

            activity_name: {
                required: true
            },

            activity_email: {
                required: true,
                email: true
            },

            activity_message: {
                required: true
            }

        },

        messages: {

            activity_name: {
                required: "Please enter your name."
            },

            activity_email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },

            activity_message: {
                required: "Please enter your message."
            }

        }

    });


    /* ================================
    CONTACT PAGE VALIDATION
    ================================= */

    $("#feedback_form").validate({

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
                required: "Email is required",
                email: "Enter a valid email address",
                minlength: "Email must be at least 8 characters"
            },

            subject: {
                required: "Please enter a subject"
            },

            message: {
                required: "Please enter a message",
                minlength: "Message must be at least 10 characters"
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