import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export enum ApiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const BASE_URL = "http://localhost:5119";

interface UseApiProps<
  ReturnDataType,
  PayloadDataType = undefined,
  CustomParams = undefined
> {
  method: ApiMethods;
  url: string;
  payload?: PayloadDataType;
  customParams?: CustomParams;
}

export function useApiHook<
  ReturnDataType,
  PayloadDataType = undefined,
  CustomParams = undefined
>({
  method,
  url,
  payload,
  customParams,
}: UseApiProps<ReturnDataType, PayloadDataType, CustomParams>) {
  const [data, setData] = useState<ReturnDataType | null>(null);
  const [loading, setLoading] = useState(false);

  const axiosCall = async (body?: PayloadDataType, params?: CustomParams) => {
    setLoading(true);

    const config: AxiosRequestConfig = {
      method,
      url: `${BASE_URL}/${url}`,
      data: body ?? payload,
      headers: { "Content-Type": "application/json" },
      params: params ?? customParams,
    };

    try {
      const response = await axios<ReturnDataType>(config);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, axiosCall, setData };
}
