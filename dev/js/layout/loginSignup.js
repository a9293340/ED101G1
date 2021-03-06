let homeLoginSignup = new Vue({
    el:'#homeContainer',
    data:{
        homeLoginMail:'',
        homeLoginMailWarning:'',
        homeLoginPsw:'',
        homeLoginPswWarning:'',
        homeSignupName:'',
        homeSignupNameWarning:'',
        homeSignupMail:'',
        homeSignupMailWarning:'',
        homeSignupPsw:'',
        homeSignupPswWarning:'',
        homeSignupPsw2:'',
        homeSignupPsw2Warning:'',
        check:false,
        doubleCheck:false,
        homeSignupPhone:'',
        homeSignupPhoneWarning:''
    },
    methods: {
        homeCheckSignupBtn(e){
            if(!this.check){
                e.preventDefault();
                alert('請輸入正確內容');
            }else if(!this.doubleCheck){
                let homeCool = confirm('密碼強度醬子不好吧,要再修改嗎？');
                if(homeCool){
                    e.preventDefault();
                }
            }
        }
    },
    computed: {
        homeLoginMailClass(){
            if(/^([A-Za-z0-9_\-\.])+\@[A-Za-z]{2,6}\.com(\.[A-Za-z]{2,6})?$/.test(this.homeLoginMail)){
                this.homeLoginMailWarning = '信箱格式正確';
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.homeLoginMailWarning = '請填寫正確電子信箱格式';
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeLoginPswClass(){
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{7,}$/.test(this.homeLoginPsw)){
                this.homeLoginPswWarning = '密碼格式正確';
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.homeLoginPswWarning = '須包含數字及大小寫各1且長度為7以上';
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeSignupNameClass(){
            if(/[^\d]{2,20}/.test(this.homeSignupName)){
                this.homeSignupNameWarning = '姓名格式正確';
                this.check = true;
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.check = false;
                this.homeSignupNameWarning = '請填寫正確姓名格式';
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeSignupMailClass(){
            if(/^([A-Za-z0-9_\-\.])+\@[A-Za-z]{2,6}\.com(\.[A-Za-z]{2,6})?$/.test(this.homeSignupMail)){
                this.homeSignupMailWarning = '信箱格式正確';
                this.check = true;
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.homeSignupMailWarning = '請填寫正確電子信箱格式';
                this.check = false;
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeSignupPswClass(){
            let score = this.homeSignupPsw.length;
            if(/[A-Z].*[A-Z]/.test(this.homeSignupPsw)) score *= 2;
            if(/[a-z].*[a-z]/.test(this.homeSignupPsw)) score *= 2;
            if(/\d.*\d/.test(this.homeSignupPsw)) score *= 2;
            if(/\W+/.test(this.homeSignupPsw)) score *= 2;
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{7,}$/.test(this.homeSignupPsw)){
                if(score >= 80){
                    this.homeSignupPswWarning = '密碼強度：強';
                    this.check = true;
                    this.doubleCheck = true;
                    return 'homeWarningWords homeWarningWordsGreen';
                }else if(score >= 60){
                    this.homeSignupPswWarning = '密碼強度：中';
                    this.check = true;
                    this.doubleCheck = true;
                    return 'homeWarningWords homeWarningWordsYellow';
                }else{
                    this.homeSignupPswWarning = '密碼強度：弱';
                    this.check = true;
                    this.doubleCheck = false;
                    return 'homeWarningWords homeWarningWordsYellow';
                }
            }else{
                this.homeSignupPswWarning = '須包含數字及大小寫各1且長度為7以上';
                this.check = false;
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeSignupPsw2Class(){
            if(this.homeSignupPsw == this.homeSignupPsw2 && this.homeSignupPsw2 != ''){
                this.check = true;
                this.homeSignupPsw2Warning = '密碼確認正確';
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.homeSignupPsw2Warning = '請與第一次密碼填寫相同';
                this.check = false;
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
        homeSignupPhoneClass(){
            if(/^([-_－—\s\(]?)([\(]?)((((0?)|((00)?))(((\s){0,2})|([-_－—\s]?)))|(([\)]?)[+]?))(886)?([\)]?)([-_－—\s]?)([\(]?)[0]?[1-9]{1}([-_－—\s\)]?)[1-9]{2}[-_－—]?[0-9]{3}[-_－—]?[0-9]{3}$/.test(this.homeSignupPhone)){
                this.check = true;
                this.homeSignupPhoneWarning = '電話格式正確';
                return 'homeWarningWords homeWarningWordsGreen';
            }else{
                this.homeSignupPhoneWarning = '請正確填寫電話格式';
                this.check = false;
                return 'homeWarningWords homeWarningWordsOrange';
            }
        },
    },
})