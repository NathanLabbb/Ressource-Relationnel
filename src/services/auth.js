import axios from "axios";
import router from "../router.js";

function login(){
    axios.post('/api/login',
        {
            emailLog:this.emailLog,
            passwordLog:this.passwordLog,
        })
        .then((result) => {
            localStorage.setItem('usertoken', result.data.token);
            this.emailLog = '';
            this.passwordLog = '';
            router.push({name: 'home'})
        })
        .catch((err) => {
            console.log(err)
        })
}