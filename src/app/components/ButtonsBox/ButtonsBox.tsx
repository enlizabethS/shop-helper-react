import { useState } from "react";
import { useAppSelector, Modal } from "shared";
import { NewProduct } from "entities/Product";

import { ButtonsBox, HomeButton, Button } from "./ButtonsBox.styled";

export const ButtonsBoxEl: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <ButtonsBox>
      <HomeButton to="/">Home page</HomeButton>

      {isLoggedIn && (
        <div>
          <Button
            type="button"
            onClick={() => setShowProductModal(!showProductModal)}
          >
            Add new product
          </Button>
          {/* <Button  type="button" onClick={() => setShowAuctionModal(true)}>
            Create new auction
          </Button> */}
        </div>
      )}

      {showProductModal && (
        <Modal
          width="750px"
          onClose={() => setShowProductModal(!showProductModal)}
        >
          <NewProduct
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
          />
        </Modal>
      )}
    </ButtonsBox>
  );
};
