import { ProfileClient } from '../Clients';

export default async () => {
    const client = new ProfileClient();
    return await client.getProfile(REACT_APP_DEFAULT_PROFILE);
};
