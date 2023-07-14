import { useState } from "react";
import { useAppSelector, Modal } from "shared";
import { NewProduct } from "entities/Product";

import { HomeContainer, HomeButton, CloseButton } from "./Home.styled";

export const Home: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <HomeContainer>
      {isLoggedIn && (
        <div>
          <HomeButton
            type="button"
            onClick={() => setShowProductModal(!showProductModal)}
          >
            Add new product
          </HomeButton>
          {/* <HomeButton  type="button" onClick={() => setShowAuctionModal(true)}>
            Create new auction
          </HomeButton> */}
        </div>
      )}

      {showProductModal && (
        <Modal
          width="900px"
          height="500px"
          onClose={() => setShowProductModal(!showProductModal)}
        >
          <CloseButton
            type="button"
            onClick={() => setShowProductModal(!showProductModal)}
          >
            X
          </CloseButton>

          <NewProduct />
        </Modal>
      )}
    </HomeContainer>
  );
};
