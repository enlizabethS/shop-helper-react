import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "entities/Product";
import { Spinner } from "shared";

import {
  Form,
  Label,
  Input,
  ImageBox,
  ImagePicker,
  DeleteImage,
  ErrorMessage,
  SubmitButton,
} from "./NewProduct.styled";

interface INewProductForm {
  productName: string;
  quantity: number;
  price: string;
  img1?: FileList;
  img2?: FileList;
  img3?: FileList;
}

export const NewProduct: React.FC = () => {
  const [addNewProduct, { isLoading }] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    setValue,
    getValues,
    resetField,
    reset,
  } = useForm<INewProductForm>({
    mode: "onBlur",
    defaultValues: {
      productName: "",
      quantity: 1,
      price: "",
      img1: undefined,
      img2: undefined,
      img3: undefined,
    },
  });

  // useEffect(() => {
  //   const { img1, img2, img3 } = dirtyFields;

  //   if (img1 === undefined && img2 !== undefined) {
  //     setValue("img1", getValues("img2"));
  //     setValue("img2", undefined);
  //   }
  //   if (img2 === undefined && img3 !== undefined) {
  //     setValue("img2", getValues("img3"));
  //     setValue("img3", undefined);
  //   }
  // }, [dirtyFields, getValues, setValue]);

  const handleFormSubmit: SubmitHandler<INewProductForm> = data => {
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("quantity", data.quantity.toString());
    formData.append("price", data.price);
    if (data.img1) formData.append("file1", data.img1[0]);
    if (data.img2) formData.append("file2", data.img2[0]);
    if (data.img3) formData.append("file3", data.img3[0]);

    addNewProduct(formData);

    reset();
  };

  const handleDeleteImage = (event: string) => {
    if (event === "img1") {
      setValue("img1", getValues("img2"));
      setValue("img2", getValues("img3"));
      setValue("img3", undefined);
      // resetField("img1");
      return;
    }
    if (event === "img2") {
      setValue("img2", getValues("img3"));
      setValue("img3", undefined);
      // resetField("img2");
      return;
    }
    if (event === "img3") {
      setValue("img3", undefined);
      // resetField("img3");
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Label>
        Name of product:
        <Input
          aria-invalid={errors.productName ? true : false}
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
          aria-invalid={errors.quantity ? true : false}
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
          aria-invalid={errors.price ? true : false}
        />
      </Label>
      {errors.price && (
        <ErrorMessage>{errors.price.message || "Error!"}</ErrorMessage>
      )}

      <ImageBox>
        <Label>
          Image 1
          <ImagePicker {...register("img1")} type="file" />
        </Label>

        <DeleteImage type="button" onClick={() => handleDeleteImage("img1")}>
          Delete
        </DeleteImage>
      </ImageBox>

      {(dirtyFields.img1 || dirtyFields.img2 !== undefined) && (
        <ImageBox>
          <Label>
            Image 2
            <ImagePicker {...register("img2")} type="file" />
          </Label>

          <DeleteImage type="button" onClick={() => handleDeleteImage("img2")}>
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

          <DeleteImage type="button" onClick={() => handleDeleteImage("img3")}>
            Delete
          </DeleteImage>
        </ImageBox>
      )}

      <SubmitButton type="submit">
        {isLoading ? <Spinner /> : "Save"}
      </SubmitButton>
    </Form>
  );
};
