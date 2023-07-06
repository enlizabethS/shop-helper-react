import { api } from "app/redux";
import { IAuction } from "entities/User";

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
      query: ({ productId, startDate, expirationDate }) => ({
        url: "/api/auctions",
        method: "POST",
        body: {
          productId,
          startDate,
          expirationDate,
        },
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
