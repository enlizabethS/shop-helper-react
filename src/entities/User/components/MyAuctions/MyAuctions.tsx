import {
  useFetchAuctionsCurrentUserQuery,
  MyAuctionsCard,
} from "entities/User";
import { useAppSelector, Spinner } from "shared";

import { AuctionsList } from "./MyAuctions.styled";

export const MyAuctions: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const { data: auctionsList, isLoading } = useFetchAuctionsCurrentUserQuery(
    null,
    { skip: !isLoggedIn }
  );

  return (
    <AuctionsList>
      {isLoading ? (
        <Spinner />
      ) : auctionsList !== undefined && auctionsList.length > 0 ? (
        auctionsList.map(auction => (
          <MyAuctionsCard key={auction.id} auction={auction} />
        ))
      ) : (
        "You haven't created an auction yet"
      )}
    </AuctionsList>
  );
};
