
(function (){
    const passwordApp ={
        passwordInput: document.getElementById('password'),
        buttonElt: document.querySelector('.showPass'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.passwordTest();
        },
        passwordTest(){
            this.buttonElt.addEventListener('click', ()=> {
                if(this.passwordInput.type === 'password'){
                    this.passwordInput.type = 'text';
                }else{
                    this.passwordInput.type ='password';
                }
            });
        }

    }
    passwordApp.init();
})();