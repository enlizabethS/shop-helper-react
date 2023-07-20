import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddAuctionMutation } from "entities/Auction";
import {
  ProductItem,
  useLazyFetchProductsCurrentUserQuery,
  saveCurrentProduct,
  resetCurrentProduct,
  IProduct,
} from "entities/Product";
import { useAppDispatch, useAppSelector, Spinner } from "shared";

import {
  CloseButton,
  Form,
  ProductsBlock,
  ProductBox,
  InputHidden,
  ProductsList,
  ProductsMenu,
  Label,
  Input,
  ErrorMessage,
  ButtonsBox,
  SubmitButton,
} from "./NewAuction.styled";

interface INewAuction {
  showAuctionModal: boolean;
  setShowAuctionModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INewAuctionForm {
  productId: number;
  startDate: string;
  expirationDate: string;
  step: number;
}

export const NewAuction: React.FC<INewAuction> = ({
  showAuctionModal,
  setShowAuctionModal,
}) => {
  const dispatch = useAppDispatch();
  const [addNewAuction, { isLoading: isLoadingAuction }] =
    useAddAuctionMutation();
  const [fetchProducts, { isLoading: isLoadingProducts }] =
    useLazyFetchProductsCurrentUserQuery();
  const currentProduct = useAppSelector(state => state.products.currentProduct);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<INewAuctionForm>({
    mode: "onBlur",
    defaultValues: {
      productId: 0,
      startDate: "",
      expirationDate: "",
      step: 0,
    },
  });
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [productsList, setProductsList] = useState<IProduct[] | undefined>(
    undefined
  );

  const handleFormSubmit: SubmitHandler<INewAuctionForm> = async data => {
    await addNewAuction(data);

    dispatch(resetCurrentProduct());
    reset();
  };

  const handleProductsMenu: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    setShowProductsMenu(!showProductsMenu);
    const products = await fetchProducts(null).unwrap();
    setProductsList(products);
  };

  const handleSelectProduct = (product: IProduct) => {
    dispatch(saveCurrentProduct(product));
    if (product.id) setValue("productId", product.id);
    setShowProductsMenu(!showProductsMenu);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <CloseButton
        type="button"
        onClick={() => setShowAuctionModal(!showAuctionModal)}
      >
        X
      </CloseButton>

      <ProductsBlock>
        {currentProduct ? (
          <ProductBox>
            <InputHidden
              {...register("productId", {
                required: "You have not selected a product",
              })}
            />

            <ProductItem product={currentProduct} />

            <button
              type="button"
              onClick={() => dispatch(resetCurrentProduct())}
            >
              Clear
            </button>
          </ProductBox>
        ) : (
          <button type="button" onClick={handleProductsMenu}>
            Products
          </button>
        )}
        {showProductsMenu && (
          <ProductsMenu>
            {isLoadingProducts ? (
              <Spinner />
            ) : (
              <ProductsList>
                {productsList &&
                  productsList.map(product => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => handleSelectProduct(product)}
                    >
                      <ProductItem product={product} />
                    </button>
                  ))}
              </ProductsList>
            )}
          </ProductsMenu>
        )}
      </ProductsBlock>
      {errors.productId && (
        <ErrorMessage role="alert">
          {errors.productId.message || "Error!"}
        </ErrorMessage>
      )}

      <Label>
        Start date:
        <Input
          type="datetime-local"
          {...register("startDate", {
            required: "You have not entered the start date of the auction",
          })}
          aria-invalid={!!errors.startDate}
        />
      </Label>
      {errors.startDate && (
        <ErrorMessage>{errors.startDate.message || "Error!"}</ErrorMessage>
      )}

      <Label>
        Expiration date:
        <Input
          type="datetime-local"
          {...register("expirationDate", {
            required: "You have not entered the expiration date of the auction",
          })}
          aria-invalid={!!errors.expirationDate}
        />
      </Label>
      {errors.expirationDate && (
        <ErrorMessage>{errors.expirationDate.message || "Error!"}</ErrorMessage>
      )}

      <Label>
        Step:
        <Input
          {...register("step", {
            required: "You have not entered a bid increase step",
          })}
          aria-invalid={!!errors.expirationDate}
        />
      </Label>
      {errors.step && (
        <ErrorMessage>{errors.step.message || "Error!"}</ErrorMessage>
      )}

      <ButtonsBox>
        <SubmitButton type="submit">
          {isLoadingAuction ? <Spinner /> : "Save"}
        </SubmitButton>
      </ButtonsBox>
    </Form>
  );
};
