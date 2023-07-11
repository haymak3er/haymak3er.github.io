document.title = `☫ ${document.title}`;

$(document).ready(function() {
    $('#githubplug-label').click(function() { document.location = 'https://github.com/haymak3er/' });
    $('#projects-label').click(function() { document.location.pathname = `projects.html` });
    $('#email-label').click(function() { document.location = `mailto:${$('#email-label').html()}` });
})