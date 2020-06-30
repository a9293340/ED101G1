window.addEventListener('load',gogoPower);
let bkLogin = document.getElementsByClassName('bkFoBtn')[1];
let bkGo = document.getElementsByClassName('bkFoBtn')[2];
let bkLoginLightBox = document.getElementById('bkLogin');
let bkEndLogin = document.getElementById('bkEndLogin');
function gogoPower(){

    bkLogin.addEventListener('click',(e)=>{
        e.preventDefault;
        bkLoginLightBox.classList.toggle('bkNone');
    })
    if(sessionStorage['admAuthority'] == 0 || sessionStorage['admAuthority'] == 1){
        bkLogin.classList.toggle('bkNone');
        bkGo.classList.toggle('bkNone');
    }
    bkEndLogin.addEventListener('click',checkBkLogin);
}

function checkBkLogin(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "./php/bkEnFoLogin.php",
        data: {
            admAccount: document.getElementById('exampleInputEmail').value,
            admPsw: document.getElementById('exampleInputPassword').value
        },
        success: function (response) {
            if(response == 'sad'){
                alert('帳號或密碼輸入錯誤！');
            }else{
                member = JSON.parse(response);
                // console.log(member);
                sessionStorage['admAccount'] = member.admAccount;
                sessionStorage['admAuthority'] = member.admAuthority;
                bkLogin.classList.toggle('bkNone');
                bkGo.classList.toggle('bkNone');
                bkLoginLightBox.classList.toggle('bkNone');
            }
        }
    });
}