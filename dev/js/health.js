$(document).ready(function () {

    // console.log("1");
    $('#weight').change(function () {
        let height = parseInt($('#height').val());
        let weight = parseInt($('#weight').val());
        // console.log(height);
        let BMI = weight / ((height / 100) * (height / 100));
        BMI = BMI.toFixed(2);
        console.log(BMI);
        $("#result").text(BMI);
    });
    // let BMI = weight / ((height / 100) * (height / 100));
    // BMI = BMI.toFixed(2);
    $("button.btnClose").on("click", function () {
        let method = $("input[name=gender]:checked").val();
        let close1 = $('#result').text();
        if (close1 == "") {
            alert("請輸入完整的身高,體重");
        } else if (typeof (method) == "undefined") {
            alert("請選擇性別");
            return false;
        } else {
            $("div.overlay").css("display", "none");
        }
    });
});


function doFirst() {

    let stomachQuestion = [{
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

    let lifequestion = [{
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




    let result = 0;
    let secondResult = 0;
    let thirdResult = 0;
    let count = 0;
    let random2 = 0;
    let random3 = 0;
    let numberOrder = 1;
    let totalNumber = 6;
    function random() {
        result = Math.floor(Math.random() * 4);//題號亂數
    }
    random();
    //------------------------------
    function secondRandom() {
        secondResult = Math.floor(Math.random() * 4);
    }
    secondRandom();
    random2 = secondResult;
    //------------------------------
    function thirdRandom() {
        thirdResult = Math.floor(Math.random() * 4);
    }
    thirdRandom();
    random3 = thirdResult;
    //------------------------------




    var randomFirst = result;
    //let result = Math.floor(Math.random() * 4);//題號亂數
    //console.log(stomachQuestion[0].q1);

    document.getElementById('number').innerText = `${numberOrder}`;
    document.getElementById('numberTotal').innerText = `${totalNumber}`;

    function begin() { //抓stomachQuestion開頭的第一題及第二題
        document.getElementById("question").innerText = stomachQuestion[`${result}`].q;
        document.getElementById("a1").innerText = stomachQuestion[`${result}`].op1;
        document.getElementById("a2").innerText = stomachQuestion[`${result}`].op2;
        document.getElementById("a3").innerText = stomachQuestion[`${result}`].op3;
    }
    begin();

    function second() { //抓healthQuestion的第一題及第二題
        document.getElementById("question").innerText = healthQuestion[`${secondResult}`].q;
        document.getElementById("a1").innerText = healthQuestion[`${secondResult}`].op1;
        document.getElementById("a2").innerText = healthQuestion[`${secondResult}`].op2;
        document.getElementById("a3").innerText = healthQuestion[`${secondResult}`].op3;
    }

    function third() { //抓lifeQuestion的第一題及第二題
        document.getElementById("question").innerText = lifequestion[`${thirdResult}`].q;
        document.getElementById("a1").innerText = lifequestion[`${thirdResult}`].op1;
        document.getElementById("a2").innerText = lifequestion[`${thirdResult}`].op2;
        document.getElementById("a3").innerText = lifequestion[`${thirdResult}`].op3;
    }




    document.getElementById('a1').addEventListener("click", nextQuestion) //
    document.getElementById('a2').addEventListener("click", nextQuestion)
    document.getElementById('a3').addEventListener("click", nextQuestion)

    document.getElementById('a1').addEventListener("click", num) //
    document.getElementById('a2').addEventListener("click", num)
    document.getElementById('a3').addEventListener("click", num)

    function nextQuestion() {
        count++;
        console.log(count);
        if (count < 3) {
            do {
                random();

            } while (randomFirst == result) {
                random();
            }
            begin();

        } else if (count == 3) {
            second();

        } else if (count == 4) {
            do {
                secondRandom();

            } while (random2 == secondResult) {
                secondRandom();
            }
            second();
        } else if (count == 5) {

            third();
        } else if (count == 6) {
            do {
                thirdRandom();

            } while (random3 == thirdResult) {
                thirdRandom();
            }
            third();
        } else if (count == 7) {
            document.getElementById('exam').style.display = "none";
            document.getElementById('examResult').style.display = "block";
        } else {
            document.getElementById("exam").style.display = "block";
        }



    };

    function num() {
        numberOrder++;

        if (numberOrder < 7) {
            document.getElementById('number').innerText = `${numberOrder}`;
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







