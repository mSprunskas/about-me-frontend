import axios from 'axios';

class ProfileClient {
    constructor() {
        const instance = axios.create({
            baseURL: PROFILE_API_URL,
        });

        instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        this.client = instance;
    }

    async getProfile(profile) {
        const response = await this.client.get('/profile/rest/v1/profiles/' + profile);
        return response.data;
    }
}

export default ProfileClient;
