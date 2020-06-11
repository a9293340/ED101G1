window.addEventListener('load',gogoPower);

function gogoPower(){
    let memData = {
        memId : 10001,
        memEmail : 'f1020@gmail.com',
        memPsw : 'a1234567A',
        memSurname : '黃',
        memName : '阿炳',
        memScore : 1020,
        memImage : './images/member/rcc_author3.jpg',
        memAddr : '桃園市中大路200號',
        memPhone : '0922222222',
        memHeight :178,
        memWeight :65,
        memGender : '男'
    }
    let memSetOrder = [{
        setName: '排骨飯',
        setoPrice: 240,
        setoAmount: 3,
        setImage: 'https://fakeimg.pl/80/',
        setoBelongOrder: 10001
    },{
        setName: '雞腿飯',
        setoPrice: 85,
        setoAmount: 1,
        setImage: 'https://fakeimg.pl/80/',
        setoBelongOrder: 10001
    },{
        setName: '排骨飯',
        setoPrice: 160,
        setoAmount: 2,
        setImage: 'https://fakeimg.pl/80/',
        setoBelongOrder: 10002
    },{
        setName: '魚排飯',
        setoPrice: 300,
        setoAmount: 3,
        setImage: 'https://fakeimg.pl/80/',
        setoBelongOrder: 10002
    },{
        setName: '雞腿飯',
        setoPrice: 170,
        setoAmount: 2,
        setImage: 'https://fakeimg.pl/80/',
        setoBelongOrder: 10002
    }]
    let memOtherOrder = [{
        opName: '紅茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/80/',
        ooBelongOrder: 10001
    },{
        opName: '綠茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/80/',
        ooBelongOrder: 10001
    },{
        opName: '人參雞精',
        ooPrice: 110,
        ooAmount: 220,
        opImage: 'https://fakeimg.pl/80/',
        ooBelongOrder: 10001
    },{
        opName: '紅茶',
        ooPrice: 25,
        ooAmount: 50,
        opImage: 'https://fakeimg.pl/80/',
        ooBelongOrder: 10002
    },{
        opName: '綠茶',
        ooPrice: 25,
        ooAmount: 100,
        opImage: 'https://fakeimg.pl/80/',
        ooBelongOrder: 10002
    }]
    let memSingleOrder = [{
        soRice: '白米',
        sideDishes1: '番茄炒蛋',
        sideDishes2: '三杯杏鮑菇',
        sideDishes3: '竹筍炒肉絲',
        mainfood: '滷排骨',
        soPrice: '130',
        soAmount: 2,
        soBelongOrder: 10001
    },{
        soRice: '白米',
        sideDishes1: '清蒸毛豆',
        sideDishes2: '花椰菜炒蝦仁',
        sideDishes3: '咖哩',
        mainfood: '清蒸鱈魚',
        soPrice: '140',
        soAmount: 3,
        soBelongOrder: 10001
    },{
        soRice: '白米',
        sideDishes1: '番茄炒蛋',
        sideDishes2: '三杯杏鮑菇',
        sideDishes3: '竹筍炒肉絲',
        mainfood: '滷排骨',
        soPrice: '130',
        soAmount: 2,
        soBelongOrder: 10002
    }]
    let memOrder = [{
        orderId: 10002,
        orderTotalPrice: 800,
        orderStatus: '已送達'
    },{
        orderId: 10001,
        orderTotalPrice: 600,
        orderStatus: '完成訂單'
    }];

    
    let memHeaderBtn = document.getElementsByClassName('memHeaderBtn');
    let memContent = document.getElementsByClassName('memContent');
    
    
    new Vue({
        el: '#memApp',
        data: {
            memData,
            memSetOrder,
            memOtherOrder,
            memSingleOrder,
            memOrder
        },
    })
    
    for(let i = 0;i<memHeaderBtn.length;i++){
        memHeaderBtn[i].addEventListener('click',changeContent);
    }

    function changeContent(){
        let changeCount = this.dataset.change;
        for(let j = 0; j<memContent.length;j++){
            memContent[j].classList.add('memContentNone');
            memHeaderBtn[j].classList.remove('memHeaderBtnOrange');
        }
        memContent[Number(changeCount)].classList.remove('memContentNone');
        memHeaderBtn[Number(changeCount)].classList.add('memHeaderBtnOrange');
    }

}



