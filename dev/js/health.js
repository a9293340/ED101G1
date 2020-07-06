// let singleNum = 0;

let healthTitle = document.getElementById('title2');
let memSingleProduct = [];
let healthFinalAnswer = {};
let BMIbox = '';
let member;
let exams = [];
let singleProducts = [];
let count = 0;
let avgScoreBox = [];
let scoreBox = [];
let Questions = [];
let weight = 0;
let height = 0;
let Q = [[], [], []];
function doFirst() {
    $.ajax({
        type: "GET",
        url: "./php/health.php",
        success: function (response) {
            // console.log(response);
            responses = JSON.parse(response);
            if (responses.length == 3) {
                member = responses[0];
                exams = responses[1];
                singleProducts = responses[2];
                console.log(member, exams, singleProducts);
                // console.log(member.memWeight);
                if (member[0].memGender == 0) {
                    $('#genderM').attr("checked", true);
                } else {
                    $('#genderW').attr("checked", true);
                }
                $('#weight').val(member[0].memWeight);
                $('#height').val(member[0].memHeight);
                height = parseInt($('#height').val());
                weight = parseInt($('#weight').val());
                let BMI = weight / ((height / 100) * (height / 100));
                BMI = BMI.toFixed(2);
                $("#result").text(BMI);
            } else {
                exams = responses[0];
                singleProducts = responses[1];
                // console.log(exams,singleProducts);
            };

            $('#weight').keyup(function () {
                height = parseInt($('#height').val());
                weight = parseInt($('#weight').val());
                // console.log(height);
                let BMI = weight / ((height / 100) * (height / 100));
                BMI = BMI.toFixed(2);
                console.log(BMI);
                if (height && weight) {
                    $("#result").text(BMI);
                }
            });

            $('#height').keyup(function () {
                height = parseInt($('#height').val());
                weight = parseInt($('#weight').val());
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
                // let height = parseInt($('#height').val());
                // let weight = parseInt($('#weight').val());
                let close1 = $('#result').text();
                if (close1 == "") {
                    alert("請輸入完整的身高,體重");
                } else if (typeof (method) == "undefined") {
                    alert("請選擇性別");
                    return false;
                } else {
                    BMIbox = Number(close1);
                    console.log(BMIbox);
                    if (sessionStorage["memId"] != 'good') {
                        $('#homeContainderBgc').show(550);
                        $('#homeContainer').show(550);
                    } else {
                        let xhr = new XMLHttpRequest();
                        xhr.onload = function () {
                            if (xhr.status == 200) {
                                // alert('恭喜～')
                            } else {
                                alert(xhr.status);
                            }
                        }
                        var url = `./php/healthAjaxWAndH.php?memWeight=${weight}&memHeight=${height}`;
                        xhr.open("Get", url, true);
                        xhr.send(null);
                        $("div.overlay").css("display", "none");
                    }
                }
            });

            //隨機選取題目
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
        // 
        // let box1 = [];
        // let box2 = [];
        // let box3 = [];
        // for(let i = 0; i < exams.length;i++){
        //     if(exams[i].examClass == 0){
        //         box1.push(exams[i])
        //     }else if(exams[i].examClass ==1){
        //         box2.push(exams[i])
        //     }else{
        //         box3.push(exams[i])
        //     }
        // }
        // let Questions = [box1,box2,box3];
        Questions = [[exams[0], exams[1], exams[2], exams[3]], [exams[4], exams[5], exams[6], exams[7]], [exams[8], exams[9], exams[10], exams[1]]];
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
            document.getElementById('wrapper').classList.add('wrapper2None');
            document.getElementById('examResult').classList.remove('wrapper2None');
            goToFinalHealthPage();
        }

    }



    function goToFinalHealthPage() {
        console.log('BMI:', BMIbox, "avgScore:", avgScoreBox);
        if (BMIbox > 24) {
            healthTitle.innerText = `胖嘟嘟體質`;
            console.log('過胖');
            healthChooseMenu('fat');
            pushDataToHealthAnalys(2);
            return;
        } else if (BMIbox < 18) {
            healthTitle.innerText = `三比八體質`;
            console.log('過瘦')
            healthChooseMenu('thin');
            pushDataToHealthAnalys(3);
            return;
        } else if (avgScoreBox[2] >= 51) {
            healthTitle.innerText = `燥呼呼體質`;
            console.log('燥熱')
            healthChooseMenu('hot');
            pushDataToHealthAnalys(1);
            return;
        } else if (avgScoreBox[2] < 50) {
            healthTitle.innerText = `冷吱吱體質`;
            console.log('虛寒')
            healthChooseMenu('cold');
            pushDataToHealthAnalys(0);
            return;
        } else if ((avgScoreBox[0] + avgScoreBox[1]) / 2 < 50) {
            healthTitle.innerText = `煩惱憂憂型`;
            console.log('身體欠佳')
            healthChooseMenu('bad');
            pushDataToHealthAnalys(4);
            return;
        } else {
            healthTitle.innerText = `幸褔樂樂型`;
            console.log('快樂')
            healthChooseMenu('good');
            pushDataToHealthAnalys(5);
            return;
        }
    }

    function pushDataToHealthAnalys(healthClass) {
        // console.log('a', healthClass, height, weight);
        let healthColdHot = avgScoreBox[2];
        let healHealth = avgScoreBox[1];
        let healStomach = avgScoreBox[0];
        let now = new Date();
        let healLastTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        let total = JSON.stringify({
            healthColdHot,
            healHealth,
            healStomach,
            healthClass,
            healNewWeight: weight,
            healNewheight: height,
            healLastTime
        })
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                if (xhr.responseText == 'good') {
                    // alert('已經將您的測驗結果新增至健康紀錄！')
                }
            } else {
                alert(xhr.status);
            }
        }
        let url = `./php/healthAjaxAnalyses.php`;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("total=" + total);

    }

    function healthChooseMenu(healthStyle) {
        // healthStyle : fat thin sad good hot cold
        console.log(healthStyle);
        let healthCooks = document.getElementById('healCooks');
        // let healthDash = document.getElementById('dish');
        let healthMainFood = document.getElementById('healMainFood');
        console.log(singleProducts);
        healthFinalAnswer = healthFindData(singleProducts, healthStyle);
        console.log(healthFinalAnswer);
        document.getElementById('healthRice').src = healthFinalAnswer.rice.spImage;
        document.getElementById('healthMeat').src = healthFinalAnswer.mainFood.spImage;
        document.getElementById('healthDish1').src = healthFinalAnswer.sideDashe1.spImage;
        document.getElementById('healthDish2').src = healthFinalAnswer.sideDashe2.spImage;;
        document.getElementById('healthDish3').src = healthFinalAnswer.sideDashe3.spImage;;

        healthMainFood.innerHTML = `
        <div class="mainFood">
            <img class="meat"src="${healthFinalAnswer.rice.spImage}">
            <img class="plate" src="./images/healthImages/plate.png">
            <p class="healFoodName">${healthFinalAnswer.rice.spName}</p>
        </div>
        <div class="mainFood">
            <img class="meat"src="${healthFinalAnswer.mainFood.spImage}">
            <img class="plate" src="./images/healthImages/plate.png">
            <p class="healFoodName">${healthFinalAnswer.mainFood.spName}</p>
        </div>
        `
        healthCooks.innerHTML = `
            <div class="cooks">
                <img class="veg" src="${healthFinalAnswer.sideDashe1.spImage}">
                <img class="plate" src="./images/healthImages/plate.png">
                <p class="healFoodName">${healthFinalAnswer.sideDashe1.spName}</p>
            </div>
            <div class="cooks">
                <img class="veg" src="${healthFinalAnswer.sideDashe2.spImage}">
                <img class="plate" src="./images/healthImages/plate.png">
                <p class="healFoodName">${healthFinalAnswer.sideDashe2.spName}</p>
            </div>
            <div class="cooks">
                <img class="veg" src="${healthFinalAnswer.sideDashe3.spImage}">
                <img class="plate" src="./images/healthImages/plate.png">
                <p class="healFoodName">${healthFinalAnswer.sideDashe3.spName}</p>
            </div>
        `

    }

    function healthFindData(memSingleProduct, healthStyle) {
        let riceBox = []
        let mainBox = []
        let sideDashBox = []
        console.log("A", memSingleProduct)
        for (let i = 0; i < memSingleProduct.length; i++) {
            if (memSingleProduct[i].spClass == 0) {
                riceBox.push(memSingleProduct[i])
            }
            if (memSingleProduct[i].spClass == 1) {
                mainBox.push(memSingleProduct[i])
            }
            if (memSingleProduct[i].spClass == 2) {
                sideDashBox.push(memSingleProduct[i])
            }
        }
        // console.log(healthStyle,riceBox,mainBox,sideDashBox)

        // 過胖
        if (healthStyle == 'fat') {
            riceBox.sort(function (a, b) {
                return a.spCalories > b.spCalories ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spCalories > b.spCalories ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spCalories > b.spCalories ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }

        // 過瘦
        if (healthStyle == 'thin') {
            riceBox.sort(function (a, b) {
                return a.spCalories < b.spCalories ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spCalories < b.spCalories ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spCalories < b.spCalories ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }

        // 燥熱
        if (healthStyle == 'hot') {
            riceBox.sort(function (a, b) {
                return a.spColdHot > b.spColdHot ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spColdHot > b.spColdHot ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spColdHot > b.spColdHot ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }

        // 寒冷
        if (healthStyle == 'cold') {
            riceBox.sort(function (a, b) {
                return a.spColdHot < b.spColdHot ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spColdHot < b.spColdHot ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spColdHot < b.spColdHot ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }

        // 憂傷
        if (healthStyle == 'sad') {
            riceBox.sort(function (a, b) {
                return a.spHealth > b.spHealth ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spHealth > b.spHealth ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spHealth > b.spHealth ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }

        // 快樂
        if (healthStyle == 'good') {
            riceBox.sort(function (a, b) {
                return a.spHealth < b.spHealth ? 1 : -1;
            })
            mainBox.sort(function (a, b) {
                return a.spHealth < b.spHealth ? 1 : -1;
            })
            sideDashBox.sort(function (a, b) {
                return a.spHealth < b.spHealth ? 1 : -1;
            })
            // console.log(healthStyle,riceBox,mainBox,sideDashBox)
            return {
                rice: riceBox[0],
                mainFood: mainBox[0],
                sideDashe1: sideDashBox[0],
                sideDashe2: sideDashBox[1],
                sideDashe3: sideDashBox[2],

            }
        }
    }

    document.getElementById('healthCart').addEventListener('click', healthShoppingCart);

    function healthShoppingCart() {
        healthTotalprice = parseInt(healthFinalAnswer.sideDashe1.spPrice) + parseInt(healthFinalAnswer.sideDashe2.spPrice) + parseInt(healthFinalAnswer.sideDashe3.spPrice) + parseInt(healthFinalAnswer.rice.spPrice) + parseInt(healthFinalAnswer.mainFood.spPrice);
        console.log(healthTotalprice);
        alert('已加入購物車');
        healthList = {
            sNum: `${singleNum}`,
            rice: `${healthFinalAnswer.rice.spName}`,
            riceId: `${healthFinalAnswer.rice.spId}`,
            meat: `${healthFinalAnswer.mainFood.spName}`,
            meatId: `${healthFinalAnswer.mainFood.spId}`,
            single1: `${healthFinalAnswer.sideDashe1.spName}`,
            singleId1: `${healthFinalAnswer.sideDashe1.spId}`,
            single2: `${healthFinalAnswer.sideDashe2.spName}`,
            singleId2: `${healthFinalAnswer.sideDashe2.spId}`,
            single3: `${healthFinalAnswer.sideDashe3.spName}`,
            singleId3: `${healthFinalAnswer.sideDashe3.spId}`,
            soPrice: `${healthTotalprice}`
        }
        singleNum++;
        localStorage.setItem('singleNum', singleNum);
        console.log(singleNum);
        orderCart.push(healthList);
        var healthsOrderList = JSON.stringify(orderCart);
        localStorage.setItem('singleOrder', healthsOrderList);
        console.log(orderCart[0]);

        setcart();
    }

};
window.addEventListener('load', doFirst);