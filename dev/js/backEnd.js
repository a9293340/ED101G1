window.addEventListener('load',gogoPower);

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
                    var url = `./php/bkOrderSetStatus.php?orderId=${orderId}&orderStatus=${document.getElementsByClassName('bkOrderStatus')[index].value}`;
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
                // $.getJSON("../dev/js/modules/memOrder.json")
                // .then((data) => {
                //     this.orders = data;
                //     this.totalOrders = data;
                //     let box0 = [];
                //     let box1 = [];
                //     for(let i = 0 ;i<data.length;i++){
                //         if(data[i].orderClass == 0){
                //             box0.push(data[i]);
                //         }else{
                //             box1.push(data[i]);
                //         }
                //     }
                //     this.orders0 = box0;
                //     this.orders1 = box1;
                // })
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
}

