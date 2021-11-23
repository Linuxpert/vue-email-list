var app = new Vue({
    el:"#app",
    data: {
        email:"",
        emailList: []
    },
    mounted() {
        const self = this;
        for(i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
             .then(function(lista){
                 self.email = lista.data.response;
                 self.emailList.push(self.email)
             });

        }
    }
})