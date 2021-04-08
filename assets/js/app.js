/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import '../css/app.scss';
import "bootswatch/dist/lux/bootstrap.min.css";

// Awesome fonts
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
let $ = require('jquery');
global.$ = global.jQuery = $;

// Bootstrap js
require('bootstrap');

// Chosen
require('../js/chosen-js/chosen.jquery');
$('select').chosen({allow_single_deselect: true});

// Enable tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    })
});

// Image on change
if (document.querySelector('.custom-file-input')) {
    document.querySelector('.custom-file-input').onchange = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            $('#output-content').css('display', ('inherit'));
            const output = document.getElementById('output-image');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
}

// // Auto close alerts
// $(".alert").fadeTo(3000, 500).slideUp(500, function(){
//     $(".alert").slideUp(500);
// });
