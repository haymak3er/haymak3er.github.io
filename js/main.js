document.title = `☫ ${document.title}`;

$(document).ready(function() {
    $('#githubplug-label').click(function() { document.location = 'https://github.com/haymak3er/' });
    $('#pgp-label').click(function() { document.location.pathname = `/pgp/public.pgp` });
    $('#messages-label').click(function() { document.location.pathname = `/pgp/messages/index.html` });
    $('#email-label').click(function() { document.location = `mailto:${$('#email-label').html()}` });
    $('#freesha666y').click(function() { document.location = 'https://soundcloud.com/shane-behringer' });
})