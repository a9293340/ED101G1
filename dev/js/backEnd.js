window.addEventListener('load',gogoPower);

function gogoPower(){
    let collapseItem =document.getElementsByClassName('collapse-item');
    for(let i = 0; i < collapseItem.length; i++){
        collapseItem[i].addEventListener('click',bkChangePage);
    }

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
                    }
                });
            },
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
}

