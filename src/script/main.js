import $ from 'jquery'

console.log('main.js is working')
console.log('$')

$(document).ready(function () {
    $('#ham-btn').click(() => {
        $('#ham-menu').toggle()
        $('#ham-btn').children('i').toggleClass('fa-bars fa-times')
    })    
});
