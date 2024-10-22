import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";


export interface Genre{
    id: number;
    name: string
    image_background: string
}


//const useGenres = ()=>useData<Genre>('/genres')
//const useGenres = ()=>({data: genres, isLoading: false, error: null})

// Task 1: Use react query to fetch genre from the backend
const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours since the data hardly changes. 24 hrs * 60 mins * 60 seconds * 1000 ms
    initialData: {count: genres.length, results: genres},


})
export default useGenres