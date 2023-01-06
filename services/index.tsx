import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api_requests from "../utils/api_requests";
import { BASE_URL } from "../utils/axios";

export const notificationApi = createApi({
    reducerPath: "notificationApi",    
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getUnread: builder.query({
            query: () => ({ url: api_requests.endpoints.notification.getUnread, method: "GET" })
        }),
        getAll: builder.query({
            query: () => ({ url: api_requests.endpoints.notification.getAll, method: "GET" })
        }),
    })
});


export const { useGetUnreadQuery, useGetAllQuery } = notificationApi;