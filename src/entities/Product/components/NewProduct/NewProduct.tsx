import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation, saveCurrentProduct } from "entities/Product";
import { useAppDispatch, Spinner } from "shared";

import {
  CloseButton,
  Form,
  Label,
  Input,
  Description,
  ImageBox,
  ImagePicker,
  DeleteImage,
  ErrorMessage,
  ButtonsBox,
  SubmitButton,
} from "./NewProduct.styled";

interface INewProduct {
  showProductModal: boolean;
  setShowProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INewProductForm {
  productName: string;
  quantity: number;
  price: string;
  description: string;
  img1?: FileList;
  img2?: FileList;
  img3?: FileList;
}

export const NewProduct: React.FC<INewProduct> = ({
  showProductModal,
  setShowProductModal,
}) => {
  const dispatch = useAppDispatch();
  const [addNewProduct, { isLoading }] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    resetField,
    reset,
  } = useForm<INewProductForm>({
    mode: "onBlur",
    defaultValues: {
      productName: "",
      quantity: 1,
      price: "",
      description: "",
      img1: undefined,
      img2: undefined,
      img3: undefined,
    },
  });

  const handleFormSubmit: SubmitHandler<INewProductForm> = async data => {
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("quantity", data.quantity.toString());
    formData.append("price", data.price);
    formData.append("description", data.description);
    if (data.img1) formData.append("file1", data.img1[0]);
    if (data.img2) formData.append("file2", data.img2[0]);
    if (data.img3) formData.append("file3", data.img3[0]);

    const addedProduct = await addNewProduct(formData).unwrap();
    dispatch(saveCurrentProduct(addedProduct));

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <CloseButton
        type="button"
        onClick={() => setShowProductModal(!showProductModal)}
      >
        X
      </CloseButton>

      <Label>
        Name of product:
        <Input
          aria-invalid={!!errors.productName}
          {...register("productName", {
            required: "Required field",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
        />
      </Label>
      {errors.productName && (
        <ErrorMessage role="alert">
          {errors.productName.message || "Error!"}
        </ErrorMessage>
      )}

      <Label>
        Quantity:
        <Input
          type="number"
          {...register("quantity", {
            required: "Required field",
            min: 1,
            valueAsNumber: true,
          })}
          aria-invalid={!!errors.quantity}
        />
      </Label>
      {errors.quantity && (
        <ErrorMessage>{errors.quantity.message || "Error!"}</ErrorMessage>
      )}

      <Label>
        Price:
        <Input
          {...register("price", {
            required: "Required field",
            min: 0,
          })}
          aria-invalid={!!errors.price}
        />
      </Label>
      {errors.price && (
        <ErrorMessage>{errors.price.message || "Error!"}</ErrorMessage>
      )}

      <Label>
        Description:
        <Description
          {...register("description", {
            required: "Required field",
          })}
          rows={5}
          aria-invalid={!!errors.description}
        />
      </Label>
      {errors.description && (
        <ErrorMessage>{errors.description.message || "Error!"}</ErrorMessage>
      )}

      <ImageBox>
        <Label>
          Image 1
          <ImagePicker {...register("img1")} type="file" />
        </Label>

        <DeleteImage type="button" onClick={() => resetField("img1")}>
          Delete
        </DeleteImage>
      </ImageBox>

      {(dirtyFields.img1 || dirtyFields.img2 !== undefined) && (
        <ImageBox>
          <Label>
            Image 2
            <ImagePicker {...register("img2")} type="file" />
          </Label>

          <DeleteImage type="button" onClick={() => resetField("img2")}>
            Delete
          </DeleteImage>
        </ImageBox>
      )}

      {(dirtyFields.img2 || dirtyFields.img3 !== undefined) && (
        <ImageBox>
          <Label>
            Image 3
            <ImagePicker {...register("img3")} type="file" />
          </Label>

          <DeleteImage type="button" onClick={() => resetField("img3")}>
            Delete
          </DeleteImage>
        </ImageBox>
      )}

      <ButtonsBox>
        <SubmitButton type="submit">
          {isLoading ? <Spinner /> : "Save"}
        </SubmitButton>
      </ButtonsBox>
    </Form>
  );
};
