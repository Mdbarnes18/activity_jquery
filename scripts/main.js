/*
========================================
jQuery Activity JavaScript
Name: Michael Barnes
Date: September 19, 2026
========================================
*/

$(document).ready(function () {

    // Change the summary paragraph text color using jQuery
    $("#summaryParagraph").css("color", "blue");

    // Apply jQuery Validation to the form
    $("#contactForm").validate({

        rules: {

            name: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            message: {
                required: true
            }

        },

        messages: {

            name: {
                required: "Please enter your name."
            },

            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },

            message: {
                required: "Please enter a message."
            }

        }

    });

});