import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization':
            'Client-ID c762d3f819df01dc24f6d41193f58135eef28659e441c0ab25b5cb9ae1b56701' 
    }
})