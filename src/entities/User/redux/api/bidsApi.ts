import { api } from "app/redux";
import { IBid } from "entities/User";

const bidsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchBidById: builder.query<IBid, number>({
      query: id => ({
        url: `/api/bids/${id}`,
        method: "GET",
      }),
      providesTags: ["Bid"],
    }),
    addBid: builder.mutation<IBid, IBid>({
      query: ({ amount, auctionId }) => ({
        url: "/api/bids",
        method: "POST",
        body: {
          amount,
          auctionId,
        },
      }),
      invalidatesTags: ["Bid"],
    }),
    updateBidStatus: builder.mutation<IBid, IBid>({
      query: ({ id, status }) => ({
        url: `/api/bids/${id}/status`,
        method: "PUT",
        body: {
          status,
        },
      }),
      invalidatesTags: ["Bid"],
    }),
    fetchBidsByAuction: builder.query<IBid[], number>({
      query: id => ({
        url: `/api/auctions/${id}/bids`,
        method: "GET",
      }),
      providesTags: ["Auction"],
    }),
  }),
});

export const {
  useFetchBidByIdQuery,
  useAddBidMutation,
  useUpdateBidStatusMutation,
  useFetchBidsByAuctionQuery,
} = bidsApi;
