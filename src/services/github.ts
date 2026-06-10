"use server";

import api from "@/../lib/api";
import { UserProfile } from "@/types/profiles";

export const fetchGitHubProfile = async (
  username: String,
): Promise<UserProfile> => {
  try {
    const response = await api.post(`/analyze/${username}`);
    return response.data as UserProfile;
  } catch (error) {
    throw new Error("Failed to fetch GitHub profile");
  }
};
