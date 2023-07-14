import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "entities/Product";
import { Spinner } from "shared";

import { Form } from "./NewProduct.styled";

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

  return (
    <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>
          Name of product:
          <input
            aria-invalid="true"
            {...register("productName", {
              required: "Required field",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
        </label>
        {errors.productName && (
          <span role="alert">{errors.productName.message || "Error!"}</span>
        )}

        <label>
          Quantity
          <input
            type="number"
            {...register("quantity", {
              required: "Required field",
              min: 1,
            })}
          />
        </label>
        <div>
          {errors.quantity && (
            <span>{errors.quantity.message || "Error!"}</span>
          )}
        </div>

        <label>
          Price
          <input
            type="number"
            {...register("price", {
              required: "Required field",
              min: 0,
            })}
          />
        </label>
        <div>
          {errors.price && <span>{errors.price.message || "Error!"}</span>}
        </div>

        <label>
          Image 1
          <input {...register("img1")} type="file" />
        </label>

        {(dirtyFields.img1 || dirtyFields.img2 !== undefined) && (
          <label>
            Image 2
            <input {...register("img2")} type="file" />
          </label>
        )}

        {(dirtyFields.img2 || dirtyFields.img3 !== undefined) && (
          <label>
            Image 3
            <input {...register("img3")} type="file" />
          </label>
        )}

        <button type="submit">{isLoading ? <Spinner /> : "Save"}</button>
      </Form>
    </>
  );
};
