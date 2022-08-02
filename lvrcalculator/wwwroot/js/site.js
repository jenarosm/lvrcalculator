// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});

$(document).ready(function (){
    $("#button").click(function () {

        var value = $("#value").val();
        var ammount = $("#loan").val();

        if (value=="" || ammount== "") {
            $("#result1").text("Please fill out the values");
            $("#result2").text("");
            $("#result3").text("");
        }
        $.getJSON("/Loan?value=" + value + "&ammount=" + ammount, function (data) {
            $("#result1").text("Property Value: "+data.propertyValue);
            $("#result2").text("Loan Ammount: "+data.loanAmmount);
            $("#result3").text("LVR: "+ data.lvr*100+"%");
        })
    })
})

function lvr() {
    let value = document.getElementById('value').value;;
    let ammount = document.getElementById('loan').value;;
    return ammount/value
};