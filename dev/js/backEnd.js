import findColor from '../../dev/js/modules/findColor.js';
import chartBarOrder from '../../dev/js/modules/chartBar2.js';
import chartBarSet from '../../dev/js/modules/chartBar.js';
import progressBar from '../../dev/js/modules/progressBar.js';

let bkAbox = document.getElementsByClassName('bkAbox');
let bkSingleAnalysisBtn = document.getElementsByClassName('bkSingleAnalysisBtn');

window.addEventListener('load',gogoPower);
Chart.defaults.global.defaultFontColor = '#fff';
function gogoPower(){
    let collapseItem =document.getElementsByClassName('collapse-item');
    for(let i = 0; i < collapseItem.length; i++){
        collapseItem[i].addEventListener('click',bkChangePage);
    }
    if(sessionStorage['admAuthority'] == 0){
        document.getElementById('adminSpan').innerText = `管理員:${sessionStorage['admAccount']}`
    }else if(sessionStorage['admAuthority'] == 1){
        document.getElementById('adminSpan').innerText = `店員:${sessionStorage['admAccount']}`;
        document.getElementsByClassName('nav-item')[1].style.display = 'none';
        document.getElementsByClassName('nav-item')[3].style.display = 'none';
        document.getElementsByClassName('nav-item')[4].style.display = 'none';
        document.getElementsByClassName('nav-item')[5].style.display = 'none';
        document.getElementsByClassName('nav-item')[6].style.display = 'none';
        document.getElementsByClassName('collapse-item')[4].style.display = 'none';
    }
    
    document.getElementById('adminSignout').addEventListener('click',()=>{
        sessionStorage['admAuthority'] = '';
        sessionStorage['admAccount'] = '';
        sessionStorage["admOk"] = 'no';
        location.href = './backEndlogin.html';
    })

}


function bkChangePage(e){
    e.preventDefault();
    let count = Number(this.dataset.count);
    let backEndBox =document.getElementsByClassName('backEndBox');
    for(let i = 0; i < backEndBox.length; i++){
        backEndBox[i].classList.add('backEndBoxNone');
        document.getElementsByClassName('collapse-item')[i].style.backgroundColor = '#FFFFFF'
    }
    if(count == 12){
        document.getElementsByClassName('collapse-item')[4].style.backgroundColor = '#EAECF4'
    }else if(count == 13){
        document.getElementsByClassName('collapse-item')[13].style.backgroundColor = '#EAECF4'
    }else if(count == 14){
        document.getElementsByClassName('collapse-item')[14].style.backgroundColor = '#EAECF4'
    }else if(count >=4){
        document.getElementsByClassName('collapse-item')[count+1].style.backgroundColor = '#EAECF4'
    }else{
        document.getElementsByClassName('collapse-item')[count].style.backgroundColor = '#EAECF4'
    }
    backEndBox[count].classList.remove('backEndBoxNone');
    if(count == 0){
        let bkmemVM = new Vue({
            el:'#bkMemberBox',
            data:{
                members:[],
                index :'',
                index2 :'',
                nowMembers:[]
            },
            methods: {
                bkMemberToGG(e){
                    let memId = Number(e.target.dataset.memid);
                    console.log(memId);
                    var xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            if(xhr.responseText == '1'){
                                alert('設定成功！');
                                for(let i = 0; i < bkmemVM.$data.members.length; i++){
                                    if(bkmemVM.$data.members[i].memId == memId){
                                        bkmemVM.$data.members[i].memStatus = 0;
                                    }
                                }
                            }
                        }else{
                            alert( xhr.status );
                        }
                    }
                    var url = `./php/bkMemberSetStatus.php?memId=${memId}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                },
                bkFindMember(){
                    let box = [];
                    for(let i = 0 ; i < this.members.length;i++){
                        // console.log(this.members[i].memId);
                        if(this.members[i].memName.indexOf(this.index) != -1){
                            box.push(this.members[i]);
                            console.log(i);
                        }
                    }
                    this.nowMembers = box;
                },
                bkFindMemberA(){
                    let box = [];
                    for(let i = 0 ; i < this.members.length;i++){
                        // console.log(this.members[i].memId);
                        if(this.members[i].memReportCount == 0){
                            box.push(this.members[i]);
                            console.log(i);
                        }
                    }
                    this.nowMembers = box;
                },
                bkFindMemberB(){
                    let box = [];
                    for(let i = 0 ; i < this.members.length;i++){
                        // console.log(this.members[i].memId);
                        if(this.members[i].memReportCount == 1){
                            box.push(this.members[i]);
                            console.log(i);
                        }
                    }
                    this.nowMembers = box;
                },
                bkFindMemberC(){
                    this.nowMembers = this.members;
                }
            },
            mounted() {
                // $.getJSON("../dev/js/modules/memDataS.json").then((data)=>{
                //     this.members = data;
                // })
                $.ajax({
                    type: "GET",
                    url: "./php/bkMemberRp.php",
                    success: function (response) {
                        bkmemVM.$data.members = JSON.parse(response);
                        bkmemVM.$data.nowMembers = bkmemVM.$data.members;
                    }
                });
            },
        })
    }
    if(count == 2){
        let bkadminVM = new Vue({
            el:'#bkAdminFix',
            data:{
                admins:[],
                totalP:[],
                mem:[],
                nomem:[]
            },
            methods:{
                bkMemGo(){
                    this.admins = this.mem;
                },
                bkNoMemGo(){
                    this.admins = this.nomem;
                },
                bkAllGo(){
                    this.admins = this.totalP;
                },
                bkAdminGoChange(e){
                    let admId = Number(e.target.dataset.admid);
                    let index = Number(e.target.dataset.index);
                    var xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            if(xhr.responseText == '1'){
                                alert('設定成功！');
                                // e.target.style.transform = 'scale(.8)';
                            }
                        }else{
                            alert( xhr.status );
                        }
                    }
                    var url = `./php/bkAdminSetStatus.php?admId=${admId}&admAuthority=${document.getElementsByClassName('admAuthority')[index].value}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                }
            },
            mounted(){
                $.ajax({
                    type: "GET",
                    url: "./php/bkAdminFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bkadminVM.$data.admins = data;
                        bkadminVM.$data.totalP = data;
                        let box0 = [];
                        let box1 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].admAuthority == 0){
                                box0.push(data[i]);
                            }else{
                                box1.push(data[i]);
                            }
                        }
                        bkadminVM.$data.mem = box0;
                        bkadminVM.$data.nomem = box1;
                    }
                });
            }
        })
    }
    if(count == 3){
        let bkorderVM = new Vue({
            el:'#bkOrder',
            data:{
                orders:[],
                totalOrders:[],
                orders0:[],
                orders1:[]
            },
            methods: {
                bkShowAllOrder(){
                    this.orders = this.totalOrders;
                },
                bkShow0Order(){
                    this.orders = this.orders0;
                },
                bkShow1Order(){
                    this.orders = this.orders1;
                },
                bkOrderChangeStatus(e){
                    let orderId = Number(e.target.dataset.orderid);
                    let index = Number(e.target.dataset.index);
                    let now = new Date();
                    let today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
                    var xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            if(xhr.responseText == '1'){
                                alert('設定成功！');
                                e.target.style.transform = 'scale(.8)';
                            }
                        }else{
                            alert( xhr.status );
                        }
                    }
                    var url = `./php/bkOrderSetStatus.php?orderId=${orderId}&orderStatus=${document.getElementsByClassName('bkOrderStatus')[index].value}&time=${today}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                }
            },
            mounted() {
                // console.log('aaa');
                $.ajax({
                    type: "GET",
                    url: "./php/bkOrderFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bkorderVM.$data.orders = data;
                        bkorderVM.$data.totalOrders = data;
                        let box0 = [];
                        let box1 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].orderClass == 0){
                                box0.push(data[i]);
                            }else{
                                box1.push(data[i]);
                            }
                        }
                        bkorderVM.$data.orders0 = box0;
                        bkorderVM.$data.orders1 = box1;
                    }
                });
            }
        })
    }
    if(count == 5){
        let bksinglepVM = new Vue({
            el:'#bkSingleFix',
            data:{
                singleProducts:[],
                totalP:[],
                riceP:[],
                mainP:[],
                sideP:[],
                nowId:0
            },
            methods: {
                bkChangeToAll(){
                    this.singleProducts = this.totalP;
                },
                bkChangeToRice(){
                    this.singleProducts = this.riceP;
                },
                bkChangeToMain(){
                    this.singleProducts = this.mainP;
                },
                bkChangeToSide(){
                    this.singleProducts = this.sideP;
                },
                bkSingleProductToListBtn(e){
                    let spId = Number(e.target.dataset.spid);
                    this.nowId = spId;
                    document.getElementsByClassName('bkSingleFind')[0].classList.add('backEndBoxNoneI');
                    document.getElementsByClassName('bkSingleSet')[0].classList.remove('backEndBoxNoneI');
                    console.log(spId);
                },
                bkGoSingleBack(){
                    document.getElementsByClassName('bkSingleFind')[0].classList.remove('backEndBoxNoneI');
                    document.getElementsByClassName('bkSingleSet')[0].classList.add('backEndBoxNoneI');
                },
                bkChangeSingleImg(e){
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.onload = function(){
                        document.getElementById('bkSingleImg').src = reader.result;
                        // ajax
                    }
                    reader.readAsDataURL(file);
                }
            },
            mounted() {
                // $.getJSON("../dev/js/modules/memSingleProduct.json")
                // .then((data) => {
                //     this.singleProducts = data;
                // })
                $.ajax({
                    type: "GET",
                    url: "./php/bkSingleFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bksinglepVM.$data.singleProducts = data;
                        bksinglepVM.$data.totalP = data;
                        let box0 = [];
                        let box1 = [];
                        let box2 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].spClass == 0){
                                box0.push(data[i]);
                            }else if(data[i].spClass == 1){
                                box1.push(data[i]);
                            }else{
                                box2.push(data[i]);
                            }
                        }
                        bksinglepVM.$data.riceP = box0;
                        bksinglepVM.$data.mainP = box1;
                        bksinglepVM.$data.sideP = box2;
                    }
                });
            },
        })
    }
    if(count == 7){
        let bksetVM = new Vue({
            el:'#bkSetFix',
            data:{
                setProducts:[],
                totalP:[],
                main:[],
                session:[],
                nowId:0
            },
            methods:{
                bkSetAll(){
                    this.setProducts = this.totalP;
                },
                bkSetMain(){
                    this.setProducts = this.main;
                },
                bkSetSession(){
                    this.setProducts = this.session;
                },
                GoToSetList(e){
                    let setId = Number(e.target.dataset.setid);
                    this.nowId = setId;
                    document.getElementsByClassName('bkSetFind')[0].classList.add('backEndBoxNoneI');
                    document.getElementsByClassName('bkSetSet')[0].classList.remove('backEndBoxNoneI');
                },
                bkGoSetBack(){
                    document.getElementsByClassName('bkSetFind')[0].classList.remove('backEndBoxNoneI');
                    document.getElementsByClassName('bkSetSet')[0].classList.add('backEndBoxNoneI');
                },
                bkChangeSetImg(e){
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.onload = function(){
                        document.getElementById('bkSetImg').src = reader.result;
                        // ajax
                    }
                    reader.readAsDataURL(file);
                }
            },
            mounted() {
                $.ajax({
                    type: "GET",
                    url: "./php/bkSetFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bksetVM.$data.setProducts = data;
                        bksetVM.$data.totalP = data;
                        let box0 = [];
                        let box1 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].setClass == 0){
                                box0.push(data[i]);
                            }else{
                                box1.push(data[i]);
                            }
                        }
                        bksetVM.$data.main = box0;
                        bksetVM.$data.session = box1;
                    }
                });
            },
        })
    }
    if(count == 9){
        console.log('aa');
        let bkotherVM = new Vue({
            el:'#bkOtherFix',
            data:{
                otherProducts:[],
                totalP:[],
                drink:[],
                fruit:[],
                other:[],
                nowId:0
            },
            methods:{
                bkOtherTotal(){
                    this.otherProducts = this.totalP;
                },
                bkOtherDrink(){
                    this.otherProducts = this.drink;
                },
                bkOtherFruit(){
                    this.otherProducts = this.fruit;
                },
                bkOtherOther(){
                    this.otherProducts = this.other;
                },
                bkGoToOtherList(e){
                    let opId = Number(e.target.dataset.opid);
                    console.log(opId)
                    this.nowId = opId;
                    document.getElementsByClassName('bkOhterFind')[0].classList.add('backEndBoxNoneI');
                    document.getElementsByClassName('bkOtherSet')[0].classList.remove('backEndBoxNoneI');
                },
                bkGoOtherBack(){
                    document.getElementsByClassName('bkOhterFind')[0].classList.remove('backEndBoxNoneI');
                    document.getElementsByClassName('bkOtherSet')[0].classList.add('backEndBoxNoneI');
                },
                bkChangeOpImg(e){
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.onload = function(){
                        document.getElementById('bkopImg').src = reader.result;
                        // ajax
                    }
                    reader.readAsDataURL(file);
                }
            },
            mounted() {
                $.ajax({
                    type: "GET",
                    url: "./php/bkOtherFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bkotherVM.$data.otherProducts = data;
                        bkotherVM.$data.totalP = data;
                        let box0 = [];
                        let box1 = [];
                        let box2 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].opClass == 0){
                                box0.push(data[i]);
                            }else if(data[i].opClass == 1){
                                box1.push(data[i]);
                            }else{
                                box2.push(data[i]);
                            }
                        }
                        bkotherVM.$data.drink = box0;
                        bkotherVM.$data.fruit = box1;
                        bkotherVM.$data.other = box2;
                    }
                });
            },
        })
    }
    if(count == 10){
        let bkexamVM = new Vue({
            el:'#bkHealthFix',
            data:{
                exams:[],
                totalP:[],
                stomach:[],
                health:[],
                hotcold:[],
                nowId:0
            },
            methods:{
                bkExamAll(){
                    this.exams = this.totalP;
                },
                bkExamSto(){
                    this.exams = this.stomach;
                },
                bkExamHea(){
                    this.exams = this.health;
                },
                bkExamHoCo(){
                    this.exams = this.hotcold;
                },
                bkGoToExamList(e){
                    let examId = Number(e.target.dataset.examid);
                    console.log(examId)
                    this.nowId = examId;
                    document.getElementsByClassName('bkExamFind')[0].classList.add('backEndBoxNoneI');
                    document.getElementsByClassName('bkExamSet')[0].classList.remove('backEndBoxNoneI');
                },
                bkGoExamBack(){
                    document.getElementsByClassName('bkExamFind')[0].classList.remove('backEndBoxNoneI');
                    document.getElementsByClassName('bkExamSet')[0].classList.add('backEndBoxNoneI');
                },
            },
            mounted() {
                $.ajax({
                    type: "GET",
                    url: "./php/bkExamFind.php",
                    success: function (res) {
                        let data = JSON.parse(res);
                        bkexamVM.$data.exams = data;
                        bkexamVM.$data.totalP = data;
                        let box0 = [];
                        let box1 = [];
                        let box2 = [];
                        for(let i = 0 ;i<data.length;i++){
                            if(data[i].examClass == 0){
                                box0.push(data[i]);
                            }else if(data[i].examClass == 1){
                                box1.push(data[i]);
                            }else{
                                box2.push(data[i]);
                            }
                        }
                        bkexamVM.$data.stomach = box0;
                        bkexamVM.$data.health = box1;
                        bkexamVM.$data.hotcold = box2;
                    }
                });
            },
        })
    }
    if(count == 11){
        let bkreportVM = new Vue({
            el:'#bkReportFix',
            data:{
                reports:[],
            },
            methods:{
                bkReportGo(e){
                    let reportId = Number(e.target.dataset.reportid);
                    let xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            if(xhr.responseText == '1'){
                                alert('檢舉成功');
                                // e.target.style.transform = 'scale(.8)';
                            }
                        }else{
                            alert( xhr.status );
                        }
                    }
                    let url = `./php/bkMemberSetReport.php?memId=${reportId}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                }
            },
            mounted(){
                $.ajax({
                    type: "GET",
                    url: "./php/bkReportFind.php",
                    success: function (res) {
                        console.log(JSON.parse(res));
                        let data = JSON.parse(res);
                        bkreportVM.$data.reports = data;
                    }
                });
            }
        })
    }
    if(count == 12){
        let now = new Date();
        let today;
        if(now.getMonth()+1 < 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-0${now.getDate()}`;
        }else if(now.getMonth()+1 < 10 && now.getDate() >= 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-${now.getDate()}`;
        }else if(now.getMonth()+1 >= 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-${now.getMonth()+1}-0${now.getDate()}`;
        }else{
            today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        }
        let bkorderAvm = new Vue({
            el:'#bkOrderAnalysis',
            data:{
                beforeTime: today,
                afterTime: today,
                today,
            },
            methods:{
                bkSelectOderByTime(){
                    // console.log(this.beforeTime,this.afterTime);
                    let before = this.beforeTime + ' 00:00:00';
                    let after = this.afterTime + ' 23:59:59';
                    console.log(before,after);
                    let xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            // console.log(JSON.parse(xhr.responseText))
                            let data = JSON.parse(xhr.responseText);
                            let timeLabel =[];
                            let timeObj=[];
                            data.forEach(el=> el.finishTime = el.finishTime.split(' ')[0])                        
                            for(let i = 0 ;i < data.length ;i++){
                                // 判斷是否有重複
                                let check = timeLabel.some(function(item){
                                    return item == data[i].finishTime
                                })
                            
                                if(check == false){ //沒重複 則新增
                                    timeLabel.push(data[i].finishTime);
                                    timeObj.push({
                                        time:data[i].finishTime,
                                        count:1,
                                        price:Number(data[i].orderTotalPrice)
                                    });
                                }else{
                                    timeObj.forEach((el)=>{ // 重複則累加
                                        if(el.time == data[i].finishTime){
                                            el.count ++;
                                            el.price += Number(data[i].orderTotalPrice);
                                        }
                                    })
                                }
                            }
                            let ctx7 = document.getElementById("myChart2").getContext("2d");
                            chartBarOrder(ctx7,timeLabel,timeObj);
                            
                            
                        }else{
                            alert( xhr.status );
                        }
                    }
                    var url = `./php/bkorderSearchTime.php?bTime=${before}&aTime=${after}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                }
            },
        })
    }
    if(count == 13){
        let now = new Date();
        let today;
        if(now.getMonth()+1 < 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-0${now.getDate()}`;
        }else if(now.getMonth()+1 < 10 && now.getDate() >= 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-${now.getDate()}`;
        }else if(now.getMonth()+1 >= 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-${now.getMonth()+1}-0${now.getDate()}`;
        }else{
            today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        }
        let bksetAvm = new Vue({
            el:'#bkSetAnalysis',
            data:{
                beforeTime: today,
                afterTime: today,
                today,
                label:[]
            },
            methods:{
                bkSelectOderByTime(){
                    // console.log(this.beforeTime,this.afterTime);
                    let before = this.beforeTime + ' 00:00:00';
                    let after = this.afterTime + ' 23:59:59';
                    console.log(before,after);
                    let xhr = new XMLHttpRequest();
                    xhr.onload=function (){
                        if( xhr.status == 200 ){
                            //項目標題
                            let label = JSON.parse(xhr.responseText)[0];
                            bksetAvm.$data.label = label;
                            console.log(this.label)
                            //訂單（訂單名稱 & 該數量）
                            let data = JSON.parse(xhr.responseText)[1];
                            // 裝載對應label之數量
                            let box = [];
                            let total = 0;
                            let boxArv = [];
                            let idBox = [];
                            label.forEach((el,i)=>{
                                box.push(0);
                                // 產生對應數量的id編號
                                idBox.push(`bkSetSalesPropress${i+1}`);
                            })
                            for (let i = 0; i < data.length; i++) {
                                label.forEach((el,j)=>{
                                    if(el == data[i].setName){
                                        box[j] += Number(data[i].setoAmount);
                                    }
                                })
                            }
                            box.forEach((el)=>{
                                total += el;
                            })
                            box.forEach((el)=>{
                                boxArv.push((el/total).toFixed(2));
                            })
                            let myChart1 = document.getElementById('myChart1').getContext('2d');
                            let title = '套餐銷路分析'
                            chartBarSet(myChart1,label,box,title);
                            setTimeout(()=>{
                                progressBar(idBox,boxArv,findColor(label.length));
                            },200)
                            document.getElementsByClassName('bkSetSalesAna')[0].classList.remove('bkSetNone')
                            // console.log(idBox)
                        }else{
                            alert( xhr.status );
                        }
                    }
                    var url = `./php/bkSetSearchTime.php?bTime=${before}&aTime=${after}`;
                    xhr.open("Get", url, true);
                    xhr.send( null );
                }
            },
        })
    }
    if(count == 14){
        let now = new Date();
        let today;
        if(now.getMonth()+1 < 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-0${now.getDate()}`;
        }else if(now.getMonth()+1 < 10 && now.getDate() >= 10){
            today = `${now.getFullYear()}-0${now.getMonth()+1}-${now.getDate()}`;
        }else if(now.getMonth()+1 >= 10 && now.getDate() < 10){
            today = `${now.getFullYear()}-${now.getMonth()+1}-0${now.getDate()}`;
        }else{
            today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        }
        let bksingleAvm = new Vue({
            el:'#bkSingleAnalysis',
            data:{
                beforeTime: today,
                afterTime: today,
                today,
                label:[],
                labelRice:[],
                countRice: [],
                labelMain:[],
                countMain: [],
                labelSide:[],
                countSide: [],
                idBoxRice:[],
                idBoxMain:[],
                idBoxSide:[],
                RiceNum:0,
                MainNum:0,
                SideNum:0,
            },
            methods:{
                bkSelectOderByTime(){
                    // console.log(this.beforeTime,this.afterTime);
                    let before = this.beforeTime + ' 00:00:00';
                    let after = this.afterTime + ' 23:59:59';
                    fetch(`./php/bkSingleSearchTime.php?bTime=${before}&aTime=${after}`).
                    then(res=> res.json()).
                    then((res)=>{
                        bksingleAvm.$data.label = res[0];
                        let data = res[1];
                        let countBox = [];
                        let labelBox = [];
                        this.label.forEach((el)=>{
                            countBox.push(0);
                            labelBox.push(el.spName)
                        })

                        data.forEach((el,i)=>{
                            labelBox.forEach((la,j)=>{
                                if(el.soRice == la){
                                    countBox[j] ++;
                                }else if(el.mainfood == la){
                                    countBox[j] ++;
                                }else if(el.sideDishes1 == la){
                                    countBox[j] ++;
                                }else if(el.sideDishes2 == la){
                                    countBox[j] ++;
                                }else if(el.sideDishes3 == la){
                                    countBox[j] ++;
                                }
                            })
                        })

                        this.label.forEach((el,i)=>{
                            if(el.spClass == 0){
                                this.countRice.push(countBox[i]);
                                this.labelRice.push(labelBox[i]);
                            }else if(el.spClass == 1){
                                this.countMain.push(countBox[i]);
                                this.labelMain.push(labelBox[i]);
                            }else if(el.spClass == 2){
                                this.countSide.push(countBox[i]);
                                this.labelSide.push(labelBox[i]);
                            }
                        })
                        console.log(this.countRice,this.countMain,this.countSide)
                        document.getElementsByClassName('bkSingleAnalysisBtnBox')[0].classList.remove('bkSingleAnalysisBtnNone')
                    })
                },
                bkRice(){
                    let idBox = [];
                    let total = 0;
                    let boxArv = [];
                    for(let i = 0 ; i < bkAbox.length;i++){
                        bkAbox[i].classList.add('bkSetNone');
                        bkSingleAnalysisBtn[i].classList.remove('bkSingleAnalysisBtnDark')
                    }
                    bkAbox[0].classList.remove('bkSetNone');
                    bkSingleAnalysisBtn[0].classList.add('bkSingleAnalysisBtnDark');
                    this.countRice.forEach((el,i)=>{
                        idBox.push(`bkRicePropress${i+1}`);
                    })
                    this.countRice.forEach((el)=>{
                        total += el;
                    })
                    this.countRice.forEach((el)=>{
                        boxArv.push((el/total).toFixed(2));
                    })
                    let myChart3 = document.getElementById('myChart3').getContext('2d');
                    let title = '單品-米飯銷路分析';
                    if(this.RiceNum == 0){
                        chartBarSet(myChart3,this.labelRice,this.countRice,title);
                    
                        setTimeout(()=>{
                            progressBar(idBox,boxArv,findColor(this.labelRice.length));
                        },200)

                        this.RiceNum += 1;
                    }
                },
                bkMain(){
                    let idBox = [];
                    let total = 0;
                    let boxArv = [];
                    for(let i = 0 ; i < bkAbox.length;i++){
                        bkAbox[i].classList.add('bkSetNone');
                        bkSingleAnalysisBtn[i].classList.remove('bkSingleAnalysisBtnDark')
                    }
                    bkAbox[1].classList.remove('bkSetNone');
                    bkSingleAnalysisBtn[1].classList.add('bkSingleAnalysisBtnDark');
                    this.countMain.forEach((el,i)=>{
                        idBox.push(`bkMainPropress${i+1}`);
                    })
                    this.countMain.forEach((el)=>{
                        total += el;
                    })
                    this.countMain.forEach((el)=>{
                        boxArv.push((el/total).toFixed(2));
                    })
                    let myChart4 = document.getElementById('myChart4').getContext('2d');
                    let title = '單品-主食銷路分析';
                    if(this.MainNum == 0){
                        chartBarSet(myChart4,this.labelMain,this.countMain,title);
                        setTimeout(()=>{
                            progressBar(idBox,boxArv,findColor(this.labelMain.length));
                        },200)
                        this.MainNum += 1;
                    }
                },
                bkSide(){
                    let idBox = [];
                    let total = 0;
                    let boxArv = [];
                    for(let i = 0 ; i < bkAbox.length;i++){
                        bkAbox[i].classList.add('bkSetNone');
                        bkSingleAnalysisBtn[i].classList.remove('bkSingleAnalysisBtnDark')
                    }
                    bkAbox[2].classList.remove('bkSetNone');
                    bkSingleAnalysisBtn[2].classList.add('bkSingleAnalysisBtnDark');
                    this.countSide.forEach((el,i)=>{
                        idBox.push(`bkSidePropress${i+1}`);
                    })
                    this.countSide.forEach((el)=>{
                        total += el;
                    })
                    this.countSide.forEach((el)=>{
                        boxArv.push((el/total).toFixed(2));
                    })
                    let myChart5 = document.getElementById('myChart5').getContext('2d');
                    let title = '單品-配菜銷路分析';
                    if(this.SideNum == 0){
                        chartBarSet(myChart5,this.labelSide,this.countSide,title);
                        setTimeout(()=>{
                            progressBar(idBox,boxArv,findColor(this.labelSide.length));
                        },200)
                        this.SideNum += 1;
                    }
                }
            },
        })
    }
}
