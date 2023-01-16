import {FeedResponse, FeedResponseRaw} from "../interface/api";

const GET = async <T, >(path: string): Promise<T> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`)
    const data = await response.json() as T;

    return data;
}

export const getFeed = async (): Promise<FeedResponse> => {

    const response = await GET<FeedResponseRaw>('/feed')

    const parsedData = response as any as FeedResponse; // TODO

    return parsedData;
}
