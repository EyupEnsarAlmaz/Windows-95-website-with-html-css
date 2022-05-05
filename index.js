const menu = document.getElementById('start-menu');
let displayed = false;

getTime = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm;

       if (hours > 12) {
        hours %= 12;
        ampm = 'PM';
    }
    else {
        if (hours === 0) {
            hours = 12;
        }
        ampm = 'AM';
    }

    minutes < 10 ? minutes = '0' + minutes : minutes;

    let time = document.getElementById("time");

    time.innerHTML = `${hours}:${minutes} ${ampm}`;

    setTimeout(getTime, 1000 * 30);
}

getTime();


function kapat() {
  $('.csharpcontents').css({ 'display': 'none' });
    $('.nodejs').css({ 'display': 'none' });
    $('.python').css({ 'display': 'none' });
        $('.html').css({ 'display': 'none' });
        $('.css').css({ 'display': 'none' });
        $('.php').css({ 'display': 'none' });
        $('.eyup').css({ 'display': 'none' });
}
function goster(){
$('#folder-window').css({ 'display': 'block' });
$('#folder-window').draggable();
}


openFolder = (content) => {
    if (content === 'csharp') {
        goster();
        kapat();
        $('.csharpcontents').css({ 'display': 'block' });
    }
    else if (content === 'nodejs'){
        goster();
        kapat();
        $('.nodejs').css({ 'display': 'block' });
    }
    else if (content === 'python'){
        goster();
        kapat();
        $('.python').css({ 'display': 'block' });
    }
    else if (content === 'html'){
        goster();   
        kapat();
        $('.html').css({ 'display': 'block' });
    }
    else if (content === 'css'){
        goster(); 
        kapat();
        $('.css').css({ 'display': 'block' });
    }
    else if (content === 'php'){
        goster();  
        kapat();
        $('.php').css({ 'display': 'block' });
    }
    else if (content === 'eyup'){
        goster();   
        kapat();
        $('.eyup').css({ 'display': 'block' });
    }
}

closeFolder = (element) => {
    element.parentElement.parentElement.style.display = 'none';
}

displayMenu = () => {
    if (!displayed) {
        $('#start-menu').css({ 'display': 'block' });
        $('#start-menu-btn').css({ 'border-color': 'rgba(0, 0, 0, 0.3) lightgray lightgray rgba(0, 0, 0, 0.3)' });
    }
    else {
        $('#start-menu').css({ 'display': 'none' });
        $('#start-menu-btn').css({ 'borderColor': 'lightgray rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3) lightgray' });
    }

    displayed = !displayed;
}

