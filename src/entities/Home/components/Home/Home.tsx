import { useState } from "react";
import { IProduct } from "entities/User";
import { useAppSelector, Modal } from "shared";

import {} from "./Home.styled";

const initProductState: IProduct = {
  id: 0,
  userId: "",
  name: "",
  quantity: 0,
  price: 0,
};

export const Home: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [newProduct, setNewProduct] = useState(initProductState);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showAuctionModal, setShowAuctionModal] = useState(false);

  const handleInputChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setNewProduct(prev => ({ ...prev, [name]: value }));

  return (
    <>
      {isLoggedIn && (
        <div>
          <button type="button" onClick={() => setShowProductModal(true)}>
            Add new product
          </button>
          <button type="button" onClick={() => setShowAuctionModal(true)}>
            Create new auction
          </button>
        </div>
      )}

      {showProductModal && (
        <Modal
          width="900px"
          height="700px"
          onClose={() => setShowProductModal(false)}
        >
          <form>
            <label>
              Name
              <input
                name="name"
                value={newProduct.name ? newProduct.name : ""}
                placeholder="name"
                onChange={handleInputChange}
              />
            </label>
          </form>
        </Modal>
      )}
    </>
  );
};
