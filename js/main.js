ttl = document.title;
idx = 0;

$(document).ready(function() {
    $('#githubplug-label').click(function() { document.location = 'https://github.com/haymak3er/' });
    $('#projects-label').click(function() { document.location.pathname = `projects.html` });
    $('#email-label').click(function() { alert(`mailto:${$('#email-label').val()}`); document.location = `mailto:${$('#email-label').val()}` });
})

const interval = setInterval(function() {
    nttl = "";
    for(var i = 0; i < ttl.length; i++) {
        if(i == idx) nttl += "_";
        else nttl += ttl[i];
    }

    if(idx >= ttl.length) idx = 0;
    else idx += 1;

    document.title = `☫ ${nttl}`
}, 250);