import { createSlice } from "@reduxjs/toolkit";
import { IAuction, IBid } from "entities/Auction";

interface IAuctionsState {
  auctions: IAuction[];
  bids: IBid[];
}

const initialState: IAuctionsState = {
  auctions: [],
  bids: [],
};

const auctionsSlice = createSlice({
  name: "auctions",
  initialState,
  reducers: {
    saveAuctions: (state, action) => {
      state.auctions.push(action.payload);
    },
    resetAuctions: state => {
      state.auctions = initialState.auctions;
    },
    saveBids: (state, action) => {
      state.bids.push(action.payload);
    },
    resetBids: state => {
      state.bids = initialState.bids;
    },
  },
});

export const { saveAuctions, resetAuctions } = auctionsSlice.actions;

export default auctionsSlice.reducer;
