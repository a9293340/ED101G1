// let singleNum = 0;

$(document).ready(function () {

});
function doFirst() {
    let BMIbox = '';
    let member;
    let exams = [];
    let singleProducts = [];
    let count = 0;
    let avgScoreBox = [];
    let scoreBox = [];
    let Questions = [];
    let Q = [[], [], []];
    $.ajax({
        type: "GET",
        url: "./php/health.php",
        success: function (response) {
            // console.log(response);
            responses = JSON.parse(response);
            if(responses.length == 3){
                member = responses[0];
                exams = responses[1];
                singleProducts = responses[2];
                console.log(member,exams,singleProducts);
                // console.log(member.memWeight);
                if(member[0].memGender == 0){
                    $('genderM').attr("checked", true);
                }else{
                    $('genderW').attr("checked", true);
                }
                $('#weight').val(member[0].memWeight);
                $('#height').val(member[0].memHeight);
                let height = parseInt($('#height').val());
                let weight = parseInt($('#weight').val());
                let BMI = weight / ((height / 100) * (height / 100));
                BMI = BMI.toFixed(2);
                $("#result").text(BMI);
            }else{
                exams = responses[0];
                singleProducts = responses[1];
                // console.log(exams,singleProducts);
            };

            $('#weight').keyup(function () {
                let height = parseInt($('#height').val());
                let weight = parseInt($('#weight').val());
                // console.log(height);
                let BMI = weight / ((height / 100) * (height / 100));
                BMI = BMI.toFixed(2);
                console.log(BMI);
                if (height && weight) {
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
                if (height && weight) {
                    $("#result").text(BMI);
                }
            });
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
                    if(sessionStorage["memId"] != 'good'){
                        $('#homeContainderBgc').show(550);
                        $('#homeContainer').show(550);
                    }else{
                        $("div.overlay").css("display", "none");
                    }
                }
            });
            
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
        
        
            // for (let i = 0; i < 3; i++) {
            //     for (let j = 0; j < 2; j++) {
            //         Q_num = Q[i][j];
            //         // console.log(Questions[i][Q_num].q);
            //         console.log(Questions[i][Q_num].examTitle)
            //     }
        
            //     console.log("-------------");
            // }
            healthFindQuestion(exams);
        
        
        }
    });

    //--------------------------
    function healthFindQuestion(exams) {
        Questions = [[exams[0],exams[1],exams[2],exams[3]],[exams[4],exams[5],exams[6],exams[7]],[exams[8],exams[9],exams[10],exams[1]]];
        if (count < 6) {
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
        if (count < 7) {
            document.getElementById('number').innerText = count;
        }
        document.getElementById('a1').addEventListener('click', getScore);
        document.getElementById('a2').addEventListener('click', getScore);
        document.getElementById('a3').addEventListener('click', getScore);

    }
    function getScore() {
        score = parseInt(this.dataset.score);
        scoreBox.push(score);
        console.log(scoreBox[count - 1]);

        healthFindQuestion(exams);

        if (count % 2 == 1) {
            avgScoreBox.push((scoreBox[count - 2] + scoreBox[count - 3]) / 2)
            console.log('a', avgScoreBox)
        }

        if (count == 7) {
            document.getElementById('exam').style.display = "none";
            document.getElementById('examResult').style.display = "block";
            // goToFinalHealthPage();
        }

    }



    let healthTitle = document.getElementsByClassName('title3')[0];
    let memSingleProduct = [];
    let healthFinalAnswer = {};
    // function goToFinalHealthPage() {
    //     console.log('BMI:', BMIbox, "avgScore:", avgScoreBox);
    //     if (BMIbox > 24) {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>胖嘟嘟體質</h1>請注意您的飲食狀況，詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('過胖');
    //         healthChooseMenu('fat');
    //         return;
    //     } else if (BMIbox < 18) {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>三比八體質</h1>請注意您的飲食狀況，詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('過瘦')
    //         healthChooseMenu('thin');
    //         return;
    //     } else if (avgScoreBox[2] >= 51) {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>燥呼呼體質</h1>請注意您的飲食狀況，詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('燥熱')
    //         healthChooseMenu('hot');
    //         return;
    //     } else if (avgScoreBox[2] < 50) {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>冷吱吱體質</h1>請注意您的飲食狀況，詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('虛寒')
    //         healthChooseMenu('cold');
    //         return;
    //     } else if ((avgScoreBox[0] + avgScoreBox[1]) / 2 < 50) {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>煩惱憂憂型</h1>請注意您的飲食狀況，詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('身體欠佳')
    //         healthChooseMenu('bad');
    //         return;
    //     } else {
    //         healthTitle.innerHTML = `
    //         您屬於<h1>幸褔樂樂型</h1> 請繼續保持下去唷!詳細的健康分析請點擊<a id="healthBody"
    //         href="#">健康檔案</a>觀看，以下是我們推薦的餐點
    //         `
    //         console.log('快樂')
    //         healthChooseMenu('good');
    //         return;
    //     }
    // }

    // function healthChooseMenu(healthStyle) {
    //     // healthStyle : fat thin sad good hot cold
    //     console.log(healthStyle);
    //     let healthCooks = document.getElementById('cooks');
    //     let healthDash = document.getElementById('dish');
    //     let healthMainFood = document.getElementById('mainFood');
    //     $.getJSON("../dev/js/modules/memSingleProduct.json")
    //         .then((data) => {
    //             memSingleProduct = data;
    //             console.log(memSingleProduct);
    //             healthFinalAnswer = healthFindData(memSingleProduct, healthStyle);
    //             console.log(healthFinalAnswer);


    //             healthMainFood.innerHTML = `
    //             <li>
    //                 <img id="healFood" src="${healthFinalAnswer.rice.spImage}">
    //                 <img id="healPlate" src="./images/healthImages/plate.png">
    //                 <p>${healthFinalAnswer.rice.spName}</p>
    //             </li>
    //             <li>
    //                 <img id="healFood" src="${healthFinalAnswer.mainFood.spImage}">
    //                 <img id="healPlate" src="./images/healthImages/plate.png">
    //                 <p>${healthFinalAnswer.mainFood.spName}</p>
    //             </li>
    //             `
    //             healthCooks.innerHTML = `
    //                 <li>
    //                     <img id="healFood" src="${healthFinalAnswer.sideDashe1.spImage}">
    //                     <img id="healPlate" src="./images/healthImages/plate.png">
    //                     <p>${healthFinalAnswer.sideDashe1.spName}</p>
    //                 </li>
    //                 <li>
    //                     <img id="healFood" src="${healthFinalAnswer.sideDashe2.spImage}">
    //                     <img id="healPlate" src="./images/healthImages/plate.png">
    //                     <p>${healthFinalAnswer.sideDashe2.spName}</p>
    //                 </li>
    //                 <li>
    //                     <img id="healFood" src="${healthFinalAnswer.sideDashe3.spImage}">
    //                     <img id="healPlate" src="./images/healthImages/plate.png">
    //                     <p>${healthFinalAnswer.sideDashe3.spName}</p>
    //                 </li>
    //             `
    //             // console.log(healthFinalAnswer.rice.spName)
    //             healthDash.innerHTML = `
    //                 內容 : ${healthFinalAnswer.rice.spName}、${healthFinalAnswer.mainFood.spName}、${healthFinalAnswer.sideDashe1.spName}、${healthFinalAnswer.sideDashe2.spName}、${healthFinalAnswer.sideDashe3.spName}。<br>總卡路里 : ${healthFinalAnswer.rice.spCalories + healthFinalAnswer.mainFood.spCalories + healthFinalAnswer.sideDashe1.spCalories + healthFinalAnswer.sideDashe1.spCalories + healthFinalAnswer.sideDashe1.spCalories}大卡
    //             `
    //         });

    // }

    // function healthFindData(memSingleProduct, healthStyle) {

    //     let riceBox = []
    //     let mainBox = []
    //     let sideDashBox = []
    //     // console.log("A",memSingleProduct.length)
    //     for (let i = 0; i < memSingleProduct.length; i++) {
    //         if (memSingleProduct[i].spClass == 0) {
    //             riceBox.push(memSingleProduct[i])
    //         }
    //         if (memSingleProduct[i].spClass == 1) {
    //             mainBox.push(memSingleProduct[i])
    //         }
    //         if (memSingleProduct[i].spClass == 2) {
    //             sideDashBox.push(memSingleProduct[i])
    //         }
    //     }
    //     // console.log(healthStyle,riceBox,mainBox,sideDashBox)

    //     // 過胖
    //     if (healthStyle == 'fat') {
    //         riceBox.sort(function (a, b) {
    //             return a.spCalories > b.spCalories ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spCalories > b.spCalories ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spCalories > b.spCalories ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }

    //     // 過瘦
    //     if (healthStyle == 'thin') {
    //         riceBox.sort(function (a, b) {
    //             return a.spCalories < b.spCalories ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spCalories < b.spCalories ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spCalories < b.spCalories ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }

    //     // 燥熱
    //     if (healthStyle == 'hot') {
    //         riceBox.sort(function (a, b) {
    //             return a.spColdHot > b.spColdHot ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spColdHot > b.spColdHot ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spColdHot > b.spColdHot ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }

    //     // 寒冷
    //     if (healthStyle == 'cold') {
    //         riceBox.sort(function (a, b) {
    //             return a.spColdHot < b.spColdHot ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spColdHot < b.spColdHot ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spColdHot < b.spColdHot ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }

    //     // 憂傷
    //     if (healthStyle == 'sad') {
    //         riceBox.sort(function (a, b) {
    //             return a.spHealth > b.spHealth ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spHealth > b.spHealth ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spHealth > b.spHealth ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }

    //     // 快樂
    //     if (healthStyle == 'good') {
    //         riceBox.sort(function (a, b) {
    //             return a.spHealth < b.spHealth ? 1 : -1;
    //         })
    //         mainBox.sort(function (a, b) {
    //             return a.spHealth < b.spHealth ? 1 : -1;
    //         })
    //         sideDashBox.sort(function (a, b) {
    //             return a.spHealth < b.spHealth ? 1 : -1;
    //         })
    //         // console.log(healthStyle,riceBox,mainBox,sideDashBox)
    //         return {
    //             rice: riceBox[0],
    //             mainFood: mainBox[0],
    //             sideDashe1: sideDashBox[0],
    //             sideDashe2: sideDashBox[1],
    //             sideDashe3: sideDashBox[2],

    //         }
    //     }
    // }

    // document.getElementById('healthCart').addEventListener('click', healthShoppingCart);

    // function healthShoppingCart() {
    //     healthTotalprice = parseInt(healthFinalAnswer.sideDashe1.spPrice) + parseInt(healthFinalAnswer.sideDashe2.spPrice) + parseInt(healthFinalAnswer.sideDashe3.spPrice) + parseInt(healthFinalAnswer.rice.spPrice) + parseInt(healthFinalAnswer.mainFood.spPrice);
    //     console.log(healthTotalprice);
    //     healthList = {
    //         sNum: `${singleNum}`,
    //         rice: `${healthFinalAnswer.rice.spName}`,
    //         meat: `${healthFinalAnswer.mainFood.spName}`,
    //         single1: `${healthFinalAnswer.sideDashe1.spName}`,
    //         single2: `${healthFinalAnswer.sideDashe2.spName}`,
    //         single3: `${healthFinalAnswer.sideDashe3.spName}`,
    //         soPrice: `${healthTotalprice}`
    //     }
    //     singleNum++;
    //     localStorage.setItem('singleNum', singleNum);
    //     console.log(singleNum);
    //     orderCart.push(healthList);
    //     var healthsOrderList = JSON.stringify(orderCart);
    //     localStorage.setItem('singleOrder', healthsOrderList);
    //     console.log(orderCart[0]);

    //     setcart();
    // }

};
window.addEventListener('load', doFirst);