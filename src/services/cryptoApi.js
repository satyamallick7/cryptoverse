import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "6fdc15d73dmsh4e4a205ebe6ba93p1e143ejsn510f135f1725"
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: ()=> createRequest(`/exchanges`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId)=> createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod})=> createRequest(`/coin/${coinId}/history/${timePeriod}`)
    }),
    

  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
