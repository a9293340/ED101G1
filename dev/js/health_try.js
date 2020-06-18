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
    // let numberOrder = 1;
    // // let totalNumber = 6;
    // document.getElementById('number').innerText = `${numberOrder}`;
    // document.getElementById('numberTotal').innerText = `${totalNumber}`;
    let Questions = {
        "0": [
            {
                "examTitle": "Q:請問您每日排便幾次？",
                "option1": "1~2次",
                "option2": "2~3次",
                "option3": "3次以上"
            },
            {
                "examTitle": "Q:請問您的排便顏色為？",
                "option1": "黑色",
                "option2": "綠色",
                "option3": "黃褐色"
            },
            {
                "examTitle": "Q:請問您排便形狀為？",
                "option1": "一顆顆硬球狀",
                "option2": "烙屎狀",
                "option3": "條狀"
            },
            {
                "examTitle": "請問您每日的飲水情況？",
                "option1": "500 cc以下",
                "option2": "500~1400 cc",
                "option3": "1400以上"
            }
        ],
        "1": [
            {
                "examTitle": "Q:請問您較常的運動類型？",
                "option1": "無",
                "option2": "有氧運動",
                "option3": "無氧運動"
            },
            {
                "examTitle": "Q:請問您每次運動多久？",
                "option1": "10分鐘以內",
                "option2": "10~30分鐘",
                "option3": "30分鐘以上"
            },
            {
                "examTitle": "Q:請問您一週運動幾次？",
                "option1": "1~2次",
                "option2": "2~3次",
                "option3": "3次以上"
            },
            {
                "examTitle": "Q:請問你晚上睡得好嗎？",
                "option1": "壞",
                "option2": "x",
                "option3": "好"
            }
        ],
        "2": [
            {
                "examTitle": "Q:請問您目前舌頭顏色為？",
                "option1": "過白",
                "option2": "黃色",
                "option3": "正常色"
            },
            {
                "examTitle": "Q:請問您手腳冰冷程度？",
                "option1": "時常冰冷",
                "option2": "會盜汗",
                "option3": "正常"
            },
            {
                "examTitle": "Q:請問您的頭髮狀態為？",
                "option1": "常掉髮",
                "option2": "不常掉髮",
                "option3": "正常"
            },
            {
                "examTitle": "Q:您經常腹瀉嗎？",
                "option1": "常腹瀉",
                "option2": "常便秘",
                "option3": "正常"
            }
        ]
    };
    //--------------------------



    let Q = [[], [], []];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            let aRandom = Math.floor(Math.random() * 4);
            if (Q[i].indexOf(aRandom) == -1) {
                Q[i].push(aRandom);
            } else {
                j--;
            }
        }
    }
    console.log(Q);


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            Q_num = Q[i][j];
            // console.log(Questions[i][Q_num].q);
            console.log(Questions[i][Q_num].examTitle)
        }

        console.log("-------------");
    }

    let count = 0;
    let avgScoreBox = [];
    let scoreBox = []
    function healthFindQuestion() {
        document.getElementById("questionPanel").innerText = '';
        document.getElementById("questionOptions").innerHTML = '';
        document.getElementById('number').innerText = ''
        let i = parseInt(count / 2);
        let j = count % 2;
        let j_num = Q[i][j];
        document.getElementById("questionPanel").innerText = Questions[i][j_num].examTitle;
        document.getElementById("questionOptions").innerHTML = `<button id='a1' data-score='-50'>${Questions[i][j_num].option1}</button>
            <button id='a2' data-score='0'>${Questions[i][j_num].option2}</button>
            <button id='a3' data-score='50'>${Questions[i][j_num].option3}</button> `;
        count++;
        document.getElementById('number').innerText = count;
        document.getElementById('a1').addEventListener('click', getScore);
        document.getElementById('a2').addEventListener('click', getScore);
        document.getElementById('a3').addEventListener('click', getScore);

    }
    healthFindQuestion();




    
    function getScore() {
        score = parseInt(this.dataset.score);
        scoreBox.push(score);
        console.log(scoreBox);
        
        if(count <6){
            healthFindQuestion();
        }

        // score = parseInt(this.dataset.score);
        // scoreBox.push(score);
        // console.log(scoreBox);
        // console.log(count);
        // if (ee == 3) {

        //     healthFindQuestion();
        //     avg01 = avgScoreBox[0] + avgScoreBox[1];
        // }
        // // console.log(scoreBox[count - 1])
        // if (count % 2 == 0) {
        //     ee++;
        //     avgScoreBox.push((scoreBox[count - 2] + scoreBox[count - 1]) / 2)
        //     // 找最後平均分數 （腸胃、冷暖、生活作息）
        //     console.log(avgScoreBox)

        // }
        // if (count < 6) {
        //     healthFindQuestion();
        // } else if (count == 6) {
        //     document.getElementById('exam').style.display = "none";
        //     document.getElementById('examResult').style.display = "block";
        // } else {
        //     document.getElementById("exam").style.display = "block";
        // }

    }





    //     document.getElementById("showQuestion").onclick = function () {
    //         let i = parseInt(count / 2);
    //         let j = count % 2;
    //         let j_num = Q[i][j];
    //         document.getElementById("questionPanel").innerText = Questions[i][j_num].q;
    //         document.getElementById("questionOptions").innerHTML = `<button>${Questions[i][j_num].op1}</button>
    // <button>${Questions[i][j_num].op2}</button>
    // <button>${Questions[i][j_num].op3}</button> `;

    //         Questions[i][j_num].q;
    //         count++;
    //     }
    // for (let i = 0;)


}; 
window.addEventListener('load', doFirst);