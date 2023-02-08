const app = Vue.createApp({
    data(){
        return {
            userInput : '',
            confirmedInput : '',
        };
    },
    methods: {
        submitButton(){
            alert('전송 완료!');
        },
        saveInput(event){
            this.userInput = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.userInput;
        },
    }
});

app.mount('#assignment');