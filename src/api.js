import axios from 'axios';

export default {
    games:{
        fetchAll: () => axios.get('/api/unsafegames').then(res => res.data.games),
        create: game => axios.post("/api/unsafegames", {game}).then(res=> res.data.game),
        update: game => axios.put(`/api/unsafegames/${game._id}`, {game}).then(res => res.data.game),
        delete: game => axios.delete(`/api/unsafegames/${game._id}`)
    },
    publishers: {
        fetchAll: () => axios.get('/api/unsafepublishers').then(res => res.data.publishers),
        create: publisher => axios.post("/api/unsafepublishers", {publisher}).then(res => res.data.publisher),
        update: publisher => axios.put(`/api/unsafepublishers/${publisher._id}`, {publisher}).then(res => res.data.publisher),
        delete: publisher => axios.delete(`/api/unsafepublishers/${publisher._id}`)
    }
}