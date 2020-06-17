$(document).ready(function () {

    // console.log("1");
    $('#healWeight').change(function () {
        let healHeight = parseInt($('#healHeight').val());
        let healWeight = parseInt($('#healWeight').val());
        // console.log(height);
        let BMI = healWeight / ((healHeight / 100) * (healHeight / 100));
        BMI = BMI.toFixed(2);
        console.log(BMI);
        $("#healResult").text(BMI);
    });
    // let BMI = weight / ((height / 100) * (height / 100));
    // BMI = BMI.toFixed(2);
    $("button.healBtnClose").on("click", function () {
        let method = $("input[name=healGender]:checked").val();
        let close1 = $('#healResult').text();
        if (close1 == "") {
            alert("請輸入完整的身高,體重");
        } else if (typeof (method) == "undefined") {
            alert("請選擇性別");
            return false;
        } else {
            $("div.healOverlay").css("display", "none");
        }
    });
});


function doFirst() {

    let healStomachQuestion = [{
        q: ' Q:請問您每日排便幾次？',
        op1: '1~2次', //低分-50
        op2: '2~3次', //中分0
        op3: '3次以上'//高分50
    },
    {
        q: 'Q:請問您的排便顏色為？',
        op1: '黑色', //低分-50
        op2: '綠色', //中分0
        op3: '黃褐色' //高分50
    },
    {
        q: 'Q:請問您排便形狀為？',
        op1: '一顆顆硬球狀',//低分
        op2: '烙屎狀',//中分
        op3: '條狀',//高分
    }, {
        q: 'Q:請問您每日的飲水情況？',
        op1: '500 cc以下',   //低分
        op2: '500~1400 cc', //中分
        op3: '1400以上'      //高分
    }];

    let healthQuestion = [{
        q: 'Q:請問您目前舌頭顏色為？',
        op1: '過白', //低分
        op2: '黃色', //中分
        op3: '正常色'//高分
    },
    {
        q: 'Q:請問您手腳冰冷程度？',
        op1: '時常冰冷', //低分
        op2: '會盜汗',  //中分
        op3: '正常'    //高分
    },
    {
        q: 'Q:請問您的頭髮狀態為？',
        op1: '常掉髮',//低分
        op2: '不常掉髮',
        op3: '正常'
    }, {
        q: 'Q:您經常腹瀉嗎？',
        op1: '常腹瀉',
        op2: '常便秘',
        op3: '正常'
    }];

    let healLifequestion = [{
        q: 'Q:請問您較常的運動類型？',
        op1: '無',
        op2: '有氧運動',
        op3: '無氧運動'
    },
    {
        q: 'Q:請問您每次運動多久？',
        op1: '10分鐘以內',
        op2: '10~30分鐘',
        op3: '30分鐘以上'
    },
    {
        q: 'Q:請問您一週運動幾次？',
        op1: '1~2次',
        op2: '2~3次',
        op3: '3次以上'
    }, {
        q: 'Q:請問你晚上睡得好嗎？',
        op1: '壞',
        op2: 'x',
        op3: '好'
    }];




    let healthResult = 0;
    let healthSecondResult = 0;
    let healthThirdResult = 0;
    let healthCount = 0;
    let healthRandom2 = 0;
    let healthRandom3 = 0;
    let healthNumberOrder = 1;
    let healthTotalNumber = 6;
    function healthRandom() {
        result = Math.floor(Math.healthRandom() * 4);//題號亂數
    }
    healthRandom();
    //------------------------------
    function secondRandom() {
        secondResult = Math.floor(Math.random() * 4);
    }
    secondRandom();
    healthRandom2 = secondResult;
    //------------------------------
    function thirdRandom() {
        thirdResult = Math.floor(Math.random() * 4);
    }
    thirdRandom();
    healthRandom3 = healthThirdResult;
    //------------------------------




    var healthRandomFirst = healthResult;
    //let result = Math.floor(Math.random() * 4);//題號亂數
    //console.log(stomachQuestion[0].q1);

    document.getElementById('healNumber').innerText = `${healthNumberOrder}`;
    document.getElementById('healNumberTotal').innerText = `${healthTotalNumber}`;

    function begin() { //抓healStomachQuestion開頭的第一題及第二題
        document.getElementById("healQuestion").innerText = healStomachQuestion[`${healthResult}`].q;
        document.getElementById("healA1").innerText = healStomachQuestion[`${healthResult}`].op1;
        document.getElementById("healA2").innerText = healStomachQuestion[`${healthResult}`].op2;
        document.getElementById("healA3").innerText = healStomachQuestion[`${healthResult}`].op3;
    }
    begin();

    function second() { //抓healthQuestion的第一題及第二題
        document.getElementById("healQuestion").innerText = healthQuestion[`${healthSecondResult}`].q;
        document.getElementById("healA1").innerText = healthQuestion[`${healthSecondResult}`].op1;
        document.getElementById("healA2").innerText = healthQuestion[`${healthSecondResult}`].op2;
        document.getElementById("healA3").innerText = healthQuestion[`${healthSecondResult}`].op3;
    }

    function third() { //抓healLifeQuestion的第一題及第二題
        document.getElementById("healQuestion").innerText = healLifequestion[`${healthThirdResult}`].q;
        document.getElementById("healA1").innerText = healLifequestion[`${healthThirdResult}`].op1;
        document.getElementById("healA2").innerText = healLifequestion[`${healthThirdResult}`].op2;
        document.getElementById("healA3").innerText = healLifequestion[`${healthThirdResult}`].op3;
    }




    document.getElementById('healA1').addEventListener("click", nextQuestion) //
    document.getElementById('healA2').addEventListener("click", nextQuestion)
    document.getElementById('healA3').addEventListener("click", nextQuestion)

    document.getElementById('healA1').addEventListener("click", num) //
    document.getElementById('healA2').addEventListener("click", num)
    document.getElementById('healA3').addEventListener("click", num)

    function nextQuestion() {
        count++;
        console.log(healthCount);
        if (healthCount < 3) {
            do {
                healthRandom();

            } while (healthRandomFirst == healthResult) {
                healthRandom();
            }
            begin();

        } else if (healthCount == 3) {
            second();

        } else if (healthCount == 4) {
            do {
                secondRandom();

            } while (healthRandom2 == healthSecondResult) {
                secondRandom();
            }
            second();
        } else if (healthCount == 5) {

            third();
        } else if (healthCount == 6) {
            do {
                healthRandom3();

            } while (healthRandom3 == healthThirdResult) {
                healthRandom3();
            }
            third();
        } else if (healthCount == 7) {
            document.getElementById('healExam').style.display = "none";
            document.getElementById('healExamResult').style.display = "block";
        } else {
            document.getElementById("healExam").style.display = "block";
        }



    };

    function num() {
        healthNumberOrder++;

        if (healthNumberOrder < 7) {
            document.getElementById('healNumber').innerText = `${healthNumberOrder}`;
        }
    }

}
window.addEventListener('load', doFirst);
// function num1() {
//     totalNumber;
//     if (totalNumber -= numberOrder) {
//         document.getElementById('numberTotal').innerText = `${totalNumber}`;
//     }
// }







