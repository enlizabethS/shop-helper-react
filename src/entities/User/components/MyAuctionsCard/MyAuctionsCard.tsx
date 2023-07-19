import { useFetchBidsByAuctionQuery } from "entities/Auction";
import { IAuction } from "entities/Auction";
import { Spinner, showDate, showTime } from "shared";

import { Card } from "./MyAuctionsCard.styled";

interface IMyAuctionsCard {
  auction: IAuction;
}

export const MyAuctionsCard: React.FC<IMyAuctionsCard> = ({ auction }) => {
  // @ts-ignore
    const { data: bidsList, isLoading } = useFetchBidsByAuctionQuery(auction.id, {
    skip: auction.id === undefined,
  });

  return (
    <Card>
      <div>
        <span>Start: </span>
        <span>{showDate(auction.startDate)}</span>
      </div>
      <div>
        <span>Expiration: </span>
        <span>
          {showDate(auction.startDate)} in {showTime(auction.expirationDate)}
        </span>
      </div>
      <div>
        <span>Bids: </span>
        <ul>
          {isLoading ? (
            <Spinner />
          ) : bidsList !== undefined && bidsList.length > 0 ? (
            bidsList.map(bid => <span key={bid.id}>{bid.amount}</span>)
          ) : (
            "Bets not yet placed"
          )}
        </ul>
      </div>
    </Card>
  );
};
