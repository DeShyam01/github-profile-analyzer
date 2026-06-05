"use server";

import api from '@/../lib/api';
import { UserProfiles } from '@/types/profiles';

export const fetchGitHubProfile = async (username: String) => {
    try{
        // const username = formData.get('username');

        const response = await api.post(`/analyze/${username}`);
        return response.data as UserProfiles;
    }catch(error){
        throw new Error('Failed to fetch GitHub profile');
    }
}