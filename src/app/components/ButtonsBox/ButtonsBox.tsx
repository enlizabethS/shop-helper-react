import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
  useAppNavigate,
  Modal,
  Spinner,
} from "shared";
import {
  useFindProductByFilterMutation,
  saveProducts,
  NewProduct,
} from "entities/Product";
import { NewAuction } from "entities/Auction";

import {
  ButtonsBox,
  HomeButton,
  Box,
  Button,
  FilterForm,
  FilterInput,
  FilterButton,
} from "./ButtonsBox.styled";

interface IFilterState {
  title: string;
}

export const ButtonsBoxEl: React.FC = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [findProduct, { isLoading }] = useFindProductByFilterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFilterState>({ defaultValues: { title: "" } });
  const [showProductModal, setShowProductModal] = useState(false);
  const [showAuctionModal, setShowAuctionModal] = useState(false);

  const handleFilterSubmit: SubmitHandler<IFilterState> = async data => {
    const foundProducts = await findProduct(data).unwrap();
    dispatch(saveProducts(foundProducts));
    navigate("/products");

    reset();
  };

  return (
    <ButtonsBox>
      <HomeButton to="/">Home page</HomeButton>

      <Box>
        {isLoggedIn && (
          <>
            <Button
              type="button"
              onClick={() => setShowProductModal(!showProductModal)}
            >
              Add new product
            </Button>

            <Button
              type="button"
              onClick={() => setShowAuctionModal(!showAuctionModal)}
            >
              Create new auction
            </Button>
          </>
        )}
      </Box>

      <FilterForm onSubmit={handleSubmit(handleFilterSubmit)}>
        <FilterInput
          {...register("title", {
            required: "Enter product name",
            minLength: 1,
          })}
          placeholder={errors.title ? errors.title.message : "Search.."}
        />

        <FilterButton type="submit">
          {isLoading ? <Spinner /> : "Find"}
        </FilterButton>
      </FilterForm>

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

      {showAuctionModal && (
        <Modal
          width="750px"
          // height="700px"
          onClose={() => setShowAuctionModal(!showAuctionModal)}
        >
          <NewAuction
            showAuctionModal={showAuctionModal}
            setShowAuctionModal={setShowAuctionModal}
          />
        </Modal>
      )}
    </ButtonsBox>
  );
};
