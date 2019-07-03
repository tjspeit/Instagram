var html = "";
var cnt = 1;
var modal = document.getElementById('modal_container');
var cover = document.getElementsByClassName('cover');
var modalImg = document.querySelector('#modal_contents > img');

for (var i = 0; i < 3; i++) {
    var imgsetClass = 'imgset';
    html += '<div class="postline">';
    for (var j = 0; j < 3; j++) {

        if(j == 2) imgsetClass = 'imgset nomargin';

        html += `<div class="${imgsetClass}">
        <div class="picture" style="background-image: url('/images/profile/img${cnt}.jpg')"></div>
            <div class="cover">
                <div class="infoWrap">
                    <div class="info_content" style="background-image: url('/images/profile/like-white.png');">
                        <p>100</p>
                    </div>
                    
                    <div class="info_content" style="background-image: url('/images/profile/comment-white.png');">
                        <p>100</p>
                    </div>
                </div>
            </div>
        </div>`

        cnt++;
    }
    html += '</div>'
}

document.getElementsByClassName('post_img')[0].innerHTML = html;

var showModal = function (e) {
    console.log(e.target);
    var imgsrc = e.target.previousElementSibling.style.backgroundImage;
    //console.log(imgsrc);
    imgsrc = imgsrc.substring(imgsrc.indexOf('"') + 1, imgsrc.length);
    imgsrc = imgsrc.substring(0, imgsrc.indexOf('"'));
    //console.log(imgsrc);
    modalImg.src = imgsrc;
    modal.style.display = "block";
}



function closeModal() {
    modal.style.display = "none";
}

for (var i = 0; i < cover.length; i++) {
    cover[i].addEventListener('click', showModal);
    //console.log(cover[i]);
}

window.onclick = function(event){
    console.log(event.target, modal);
    if(event.target == modal){
        closeModal();
    }
}