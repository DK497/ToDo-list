import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://4cc07790eb35.ngrok.io'
})