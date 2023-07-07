import { useState } from "react";
import { useAppDispatch, useAppSelector, Modal, Spinner } from "shared";
import { useAddProductMutation, saveProducts } from "entities/User";

import {
  HomeContainer,
  HomeButton,

  Form,
  ImgBlock,
  Img,
  CloseButton,
} from "./Home.styled";

interface INewProduct {
  name: string;
  quantity: number;
  price: number;
  img1?: string;
  img2?: string;
  img3?: string;
}

const initProductState: INewProduct = {
  name: "",
  quantity: 0,
  price: 0,
  img1: "",
  img2: "",
  img3: "",
};

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [addProduct, { isLoading: isLoadingProduct }] = useAddProductMutation();
  const [showProductModal, setShowProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState(initProductState);

  const handleProductChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setNewProduct(prev => ({ ...prev, [name]: value }));

  const handleNewProductSubmit: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault();

    try {
      console.log(newProduct);
      const addedProduct = await addProduct(newProduct).unwrap();
      console.log(addProduct);
      dispatch(saveProducts(addedProduct));
    } catch (error) {
      console.log("ERROR handleNewProductSubmit");
    }
  };

  return (
    <HomeContainer>
      {isLoggedIn && (
        <div>
          <HomeButton type="button" onClick={() => setShowProductModal(true)}>
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

          <ImgBlock>
            {newProduct.img1 && <Img src={newProduct.img1} alt="" />}
            {newProduct.img2 && <Img src={newProduct.img2} alt="" />}
            {newProduct.img3 && <Img src={newProduct.img3} alt="" />}
          </ImgBlock>

          <Form onSubmit={handleNewProductSubmit}>
            <label>
              Name of product: 
              <Input
                name="name"
                value={newProduct.name ? newProduct.name : ""}
                onChange={handleProductChange}
              />
            </label>

            <label>
              Quantity
              <input
                name="quantity"
                value={newProduct.quantity ? newProduct.quantity : ""}
                onChange={handleProductChange}
              />
            </label>

            <label>
              Price
              <input
                name="price"
                value={newProduct.price ? newProduct.price : ""}
                onChange={handleProductChange}
              />
            </label>

            <label>
              Image
              <input
                name="img1"
                value={newProduct.img1 ? newProduct.img1 : ""}
                onChange={handleProductChange}
              />
            </label>

            {newProduct.img1 && (
              <label>
                Image
                <input
                  name="img2"
                  value={newProduct.img2 ? newProduct.img2 : ""}
                  onChange={handleProductChange}
                />
              </label>
            )}

            {newProduct.img2 && (
              <label>
                Image
                <input
                  name="img3"
                  value={newProduct.img3 ? newProduct.img3 : ""}
                  onChange={handleProductChange}
                />
              </label>
            )}

            <button type="submit">
              {isLoadingProduct ? <Spinner /> : "Save"}
            </button>
          </Form>
        </Modal>
      )}
    </HomeContainer>
  );
};
