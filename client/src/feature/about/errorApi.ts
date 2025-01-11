
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../api/baseApi";

export const errorApi = createApi({
    reducerPath: "errorApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get400Error: builder.query<void, void>({
            query: () => ({url: "buggy/bad-request"})
        }),
        get401Error: builder.query<void, void>({
            query: () => ({url: "buggy/unauthorized"})
        }),
        get404Error: builder.query<void, void>({
            query: () => ({url: "buggy/not-found"})
        }),
        getValidationError: builder.query<void, void>({
            query: () => ({url: "buggy/validation-error"})
        })
    })
})

export const 
{
    useLazyGet400ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGetValidationErrorQuery,
} = errorApi;