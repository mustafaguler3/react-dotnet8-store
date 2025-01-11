import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

const customBaseQuery = fetchBaseQuery({
    baseUrl: "https://localhost:5001/api"
})

const sleep = () => new Promise(resolve => setTimeout(resolve,1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,extraOptions: object) => {
    await sleep()
    const result = await customBaseQuery(args,api,extraOptions)

    if(result.error){
        const {status, data } = result.error;
        console.log({status,data})
    }

    return result
}