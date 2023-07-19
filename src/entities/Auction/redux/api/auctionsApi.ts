import { api } from "app/redux";
import { IAuction } from "entities/Auction";

interface INewBid {
  id: number;
  bidId: number;
}

const auctionApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchAuctionById: builder.query<IAuction, number>({
      query: id => ({
        url: `/api/auctions/${id}`,
        method: "GET",
      }),
      providesTags: ["Auction"],
    }),

    fetchAuctionsCurrentUser: builder.query<IAuction[], null>({
      query: () => ({
        url: "/api/users/my/auctions",
        method: "GET",
      }),
      providesTags: ["Auction"],
    }),
    addAuction: builder.mutation<IAuction, IAuction>({
      query: newAuction => ({
        url: "/api/auctions",
        method: "POST",
        body: newAuction,
      }),
      invalidatesTags: ["Auction"],
    }),
    updateAuctionStatus: builder.mutation<IAuction, IAuction>({
      query: ({ id, status }) => ({
        url: `/api/auctions/${id}/status`,
        method: "PUT",
        body: {
          status,
        },
      }),
      invalidatesTags: ["Auction"],
    }),
    updateBids: builder.mutation<IAuction, INewBid>({
      query: ({ id, bidId }) => ({
        url: `/api/auctions/${id}`,
        method: "PUT",
        body: {
          bidId,
        },
      }),
      invalidatesTags: ["Auction"],
    }),
  }),
});

export const {
  useFetchAuctionByIdQuery,
  useFetchAuctionsCurrentUserQuery,
  useAddAuctionMutation,
  useUpdateAuctionStatusMutation,
  useUpdateBidsMutation,
} = auctionApi;
