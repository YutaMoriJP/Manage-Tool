import { useQuery, QueryClient, dehydrate } from "react-query";
import axios from "@/utils/axiosConfig";

import type { UseQueryOptions } from "react-query";
import type { IError } from "@/typings/reactQuery";
import type { ResData } from "@/typings/apiGeneral";

export const POST_QUERY_KEY = ["getGeneral"];

export const getPost = async (id: string) => {
  try {
    const { data } = await axios.get<ResData>(`/generals/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const { data } = await axios.get<ResData>("/generals");

    return data;
  } catch (error) {
    throw error;
  }
};

export const preFetchPostsQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(POST_QUERY_KEY, getPosts);

  return dehydrate(queryClient);
};

export function useGetGeneral(id: string, options?: UseQueryOptions<ResData, IError>) {
  return useQuery<ResData, IError>([...POST_QUERY_KEY, id], () => getPost(id), {
    ...options
  });
}

export default function useGetGenerals(options?: UseQueryOptions<ResData, IError>) {
  return useQuery<ResData, IError>(POST_QUERY_KEY, getPosts, {
    ...options
  });
}
