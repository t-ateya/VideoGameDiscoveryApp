import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

//const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents")
//const usePatforms = () =>({data: genres, isLoading: false, error: null})


const usePlatforms = ()=>useQuery({
    queryKey: ["platforms"],
    queryFn: ()=>apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then(response=>response.data),
    initialData:{count: platforms.length, results: platforms},
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    
})
export default usePlatforms;