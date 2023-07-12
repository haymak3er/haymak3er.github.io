document.title = `☫ ${document.title}`;

$(document).ready(function() {
    $('#githubplug-label').click(function() { document.location = 'https://github.com/haymak3er/' });
    $('#pgp-label').click(function() { document.location.pathname = `/res/pgp/public.pgp` });
    $('#email-label').click(function() { document.location = `mailto:${$('#email-label').html()}` });
})