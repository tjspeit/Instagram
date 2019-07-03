var showModal = function () {
    var modal = document.getElementById("modal_container");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal_container");
    modal.style.display = "none";
}

var explain = [" Jeju-do", " 입대", " Dae-gu", " 입원한날", " 첫 면회", " 두번째 면회", " 외출"]

var html = "";
var feedClass = 'feed';

for (var i = 0; i < 7; i++) {

    html += `<div class = "${feedClass}">
        <div class = "feed_header">
            <div class="header_imgWrap">
                <div class="header_img" style="background-image: url('/images/profile_img.png')"></div>
             </div>

            <p style="text-align: center">
                <strog>seonnhye</strog>
            </p>

            <div class="header_iconWrap">
                <a onclick="showModal();">
                    <div class="header_icon" style="background-image: url('/images/modal.png')"></div>
                </a>
            </div>
        
        </div>

        <div class = "feed_body" style = "background-image: url('/images/img${i + 1}.jpg')"></div>
        <div class = "feed_bottom" >
        
            <div class = "bottom_iconWrap">
                <div class = "like_img2" onclick="like(this)"></div>                               
                <div class = "comment_img"></div>
                <div class = "share_img"></div>
                <div class = "save_img"></div>                         
            </div>
                       
            <div class = "likeNumberWrap">
                <div class = "profile_img2"></div>
                <div class = "likeNumber" style="font-size: 14px"><strong>dongjun</strong>님<strong>외 99명</strong>이 좋아합니다.</div>
            </div>

            <div class = "infoWrap">
                <div class = "info">
                    <div class = "explain"><strong>seonhye</strong>${explain[i]}</div>
                    <div class = "commentNumber" style="color: #999999;">댓글 99개 모두 보기</div>
                    <div class = "comment">
                        <strong>dongjun</strong>
                        <div class = "heart_img"></div>
                    </div>
                </div>
            </div>
                       
            <div class = "timeWrap">
                <div class = "time" style="font-size: 10px; color: #999999">1일전</div>
            </div>
                        
            <div class = "replyWrap">
                <input class="reply" type="text" placeholder="  댓글 달기..." >
            </div>

        </div>
    </div>`

}

document.getElementsByClassName('feedWrap')[0].innerHTML = html;



var image = document.getElementsByClassName("like_img2");

function like(n){
    if(n.classList[1] == undefined) {
        n.classList.add('like_red');
    }
    else{
        n.classList.remove('like_red');
    }
}