$(document).ready(function () {

});
function doFirst() {
    let BMIbox = '';
    let Questions = {
        "0": [
            {
                "examTitle": "Q:請問您每週排便幾次？",
                "option1": "1~2次",
                "option2": "2~3次",
                "option3": "3次以上",
                "optionNum1":20,
                "optionNum2":45,
                "optionNum3":100
            },
            {
                "examTitle": "Q:請問您的排便顏色為？",
                "option1": "黑色",
                "option2": "綠色",
                "option3": "黃褐色",
                "optionNum1":0,
                "optionNum2":25,
                "optionNum3":100
            },
            {
                "examTitle": "Q:請問您排便形狀為？",
                "option1": "一顆顆硬球狀",
                "option2": "烙屎狀",
                "option3": "條狀",
                "optionNum1":20,
                "optionNum2":20,
                "optionNum3":100
            },
            {
                "examTitle": "請問您每日的飲水情況？",
                "option1": "500 cc以下",
                "option2": "500~1400 cc",
                "option3": "1400以上",
                "optionNum1":10,
                "optionNum2":50,
                "optionNum3":100
            }
        ],
        "1": [
            {
                "examTitle": "Q:請問您較常的運動類型？",
                "option1": "無",
                "option2": "有氧運動",
                "option3": "無氧運動",
                "optionNum1":0,
                "optionNum2":90,
                "optionNum3":70
            },
            {
                "examTitle": "Q:請問您每次運動多久？",
                "option1": "10分鐘以內",
                "option2": "10~30分鐘",
                "option3": "30分鐘以上",
                "optionNum1":30,
                "optionNum2":70,
                "optionNum3":100
            },
            {
                "examTitle": "Q:請問您一週運動幾次？",
                "option1": "1~2次",
                "option2": "2~3次",
                "option3": "3次以上",
                "optionNum1":20,
                "optionNum2":45,
                "optionNum3":100
            },
            {
                "examTitle": "Q:請問你晚上睡得好嗎？",
                "option1": "壞",
                "option2": "一般般",
                "option3": "好",
                "optionNum1":22,
                "optionNum2":60,
                "optionNum3":100
            }
        ],
        "2": [
            {
                "examTitle": "Q:請問您目前舌頭顏色為？",
                "option1": "過白",
                "option2": "黃色",
                "option3": "正常色",
                "optionNum1":0,
                "optionNum2":100,
                "optionNum3":50
            },
            {
                "examTitle": "Q:請問您手腳冰冷程度？",
                "option1": "時常冰冷",
                "option2": "會盜汗",
                "option3": "正常",
                "optionNum1":0,
                "optionNum2":100,
                "optionNum3":50
            },
            {
                "examTitle": "Q:請問您的頭髮狀態為？",
                "option1": "常掉髮",
                "option2": "偶而掉髮",
                "option3": "正常",
                "optionNum1":90,
                "optionNum2":60,
                "optionNum3":50
            },
            {
                "examTitle": "Q:您經常腹瀉嗎？",
                "option1": "常腹瀉",
                "option2": "常便秘",
                "option3": "正常",
                "optionNum1":0,
                "optionNum2":100,
                "optionNum3":50
            }
        ]
    };
    // console.log("1");
    $('#weight').keyup(function () {
        let height = parseInt($('#height').val());
        let weight = parseInt($('#weight').val());
        // console.log(height);
        let BMI = weight / ((height / 100) * (height / 100));
        BMI = BMI.toFixed(2);
        console.log(BMI);
        if(height && weight){
            $("#result").text(BMI);
        }
    });

    $('#height').keyup(function () {
        let height = parseInt($('#height').val());
        let weight = parseInt($('#weight').val());
        // console.log(height);
        let BMI = weight / ((height / 100) * (height / 100));
        BMI = BMI.toFixed(2);
        console.log(BMI);
        if(height && weight){
            $("#result").text(BMI);
        }
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
            BMIbox = Number(close1);
            console.log(BMIbox);
            $("div.overlay").css("display", "none");
        }
    });

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
        if(count < 6){
            document.getElementById("questionPanel").innerText = '';
            document.getElementById("questionOptions").innerHTML = '';
            document.getElementById('number').innerText = ''
            let i = parseInt(count / 2);
            let j = count % 2;
            let j_num = Q[i][j];
            document.getElementById("questionPanel").innerText = Questions[i][j_num].examTitle;
            document.getElementById("questionOptions").innerHTML = `<button id='a1' data-score='${Questions[i][j_num].optionNum1}'>${Questions[i][j_num].option1}</button>
                <button id='a2' data-score='${Questions[i][j_num].optionNum2}'>${Questions[i][j_num].option2}</button>
                <button id='a3' data-score='${Questions[i][j_num].optionNum3}'>${Questions[i][j_num].option3}</button> `;
        }
        count++;
        if(count < 7){
            document.getElementById('number').innerText = count;
        }
        document.getElementById('a1').addEventListener('click', getScore);
        document.getElementById('a2').addEventListener('click', getScore);
        document.getElementById('a3').addEventListener('click', getScore);

    }
    healthFindQuestion();




    
    function getScore() {
        score = parseInt(this.dataset.score);
        scoreBox.push(score);
        console.log(scoreBox[count-1]);
        
        healthFindQuestion();
        
        if(count % 2 == 1){
            avgScoreBox.push((scoreBox[count - 2] + scoreBox[count - 3]) / 2)
            console.log('a',avgScoreBox)
        }

        if(count == 7){
            document.getElementById('exam').style.display = "none";
            document.getElementById('examResult').style.display = "block";
            goToFinalHealthPage();
        }

    }

    let healthTitle = document.getElementsByClassName('title3')[0];
    let memSingleProduct = [];
    let healthFinalAnswer = {}
    function goToFinalHealthPage(){
        console.log('BMI:',BMIbox,"avgScore:",avgScoreBox);
        if(BMIbox > 24){
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">胖嘟嘟體質</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('過胖');
            healthChooseMenu('fat');
            return;
        }else if(BMIbox < 18){
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">三比八體質</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('過瘦')
            healthChooseMenu('thin');
            return;
        }else if(avgScoreBox[2] >= 51){
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">燥呼呼體質</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('燥熱')
            healthChooseMenu('hot');
            return;
        }else if(avgScoreBox[2] < 50){
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">冷吱吱體質</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('虛寒')
            healthChooseMenu('cold');
            return;
        }else if((avgScoreBox[0]+avgScoreBox[1])/2 < 50){
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">煩惱憂憂型</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('身體欠佳')
            healthChooseMenu('bad');
            return;
        }else{
            healthTitle.innerHTML = `
            您屬於<a id="healthBody" href="#">幸褔樂樂型</a>，請注意您的飲食狀況，詳細的健康分析，請至<a
            href="#">健康檔案</a>觀看，以下是我們推薦的餐點
            `
            console.log('快樂')
            healthChooseMenu('good');
            return;
        }
    }

    function healthChooseMenu(healthStyle){
        // healthStyle : fat thin sad good hot cold
        console.log(healthStyle);
        let healthCooks = document.getElementById('cooks');
        let healthDash = document.getElementById('dish');
        $.getJSON("../dev/js/modules/memSingleProduct.json")
            .then((data)=>{
                memSingleProduct = data;
                console.log(memSingleProduct);
                healthFinalAnswer = healthFindData(memSingleProduct,healthStyle);
                console.log(healthFinalAnswer);
                healthCooks.innerHTML = `
                    <li>
                        <img src="${healthFinalAnswer.sideDashe1.spImage}">
                        <p>${healthFinalAnswer.sideDashe1.spName}</p>
                    </li>
                    <li>
                        <img src="${healthFinalAnswer.sideDashe2.spImage}">
                        <p>${healthFinalAnswer.sideDashe2.spName}</p>
                    </li>
                    <li>
                        <img src="${healthFinalAnswer.sideDashe3.spImage}">
                        <p>${healthFinalAnswer.sideDashe3.spName}</p>
                    </li>
                `
                // console.log(healthFinalAnswer.rice.spName)
                healthDash.innerHTML = `
                    內容 : ${healthFinalAnswer.rice.spName}、${healthFinalAnswer.mainFood.spName}、${healthFinalAnswer.sideDashe1.spName}、${healthFinalAnswer.sideDashe2.spName}、${healthFinalAnswer.sideDashe3.spName}。<br>總卡路里 : ${healthFinalAnswer.rice.spCalories+healthFinalAnswer.mainFood.spCalories+healthFinalAnswer.sideDashe1.spCalories+healthFinalAnswer.sideDashe1.spCalories+healthFinalAnswer.sideDashe1.spCalories}大卡
                `
            });
        
    }

    function healthFindData(memSingleProduct,healthStyle){
        
        let riceBox = []
        let mainBox = []
        let sideDashBox = []
        // console.log("A",memSingleProduct.length)
        for(let i = 0 ;i < memSingleProduct.length;i++){
            if(memSingleProduct[i].spClass == 0){
                riceBox.push(memSingleProduct[i])
            }
            if(memSingleProduct[i].spClass == 1){
                mainBox.push(memSingleProduct[i])
            }
            if(memSingleProduct[i].spClass == 2){
                sideDashBox.push(memSingleProduct[i])
            }
        }
        // console.log(healthStyle,riceBox,mainBox,sideDashBox)

        // 過胖
        if(healthStyle == 'fat'){
            riceBox.sort(function(a,b){
                return a.spCalories > b.spCalories?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spCalories > b.spCalories?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spCalories > b.spCalories?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }
        
        // 過瘦
        if(healthStyle == 'thin'){
            riceBox.sort(function(a,b){
                return a.spCalories < b.spCalories?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spCalories < b.spCalories?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spCalories < b.spCalories?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }

        // 燥熱
        if(healthStyle == 'hot'){
            riceBox.sort(function(a,b){
                return a.spColdHot > b.spColdHot?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spColdHot > b.spColdHot?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spColdHot > b.spColdHot?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }

        // 寒冷
        if(healthStyle == 'cold'){
            riceBox.sort(function(a,b){
                return a.spColdHot < b.spColdHot?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spColdHot < b.spColdHot?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spColdHot < b.spColdHot?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }

        // 憂傷
        if(healthStyle == 'sad'){
            riceBox.sort(function(a,b){
                return a.spHealth > b.spHealth?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spHealth > b.spHealth?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spHealth > b.spHealth?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }

        // 快樂
        if(healthStyle == 'good'){
            riceBox.sort(function(a,b){
                return a.spHealth < b.spHealth?1:-1;
            })
            mainBox.sort(function(a,b){
                return a.spHealth < b.spHealth?1:-1;
            })
            sideDashBox.sort(function(a,b){
                return a.spHealth < b.spHealth?1:-1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice:riceBox[0],
                mainFood:mainBox[0],
                sideDashe1:sideDashBox[0],
                sideDashe2:sideDashBox[1],
                sideDashe3:sideDashBox[3],

            }
        }
    }



}; 
window.addEventListener('load', doFirst);