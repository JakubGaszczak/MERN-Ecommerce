import { ChangeEvent, FormEvent, useState } from "react";
import { useAddProductMutation } from "../slices/productsApiSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [materials, setMaterials] = useState<string>("");

  const [addProduct] = useAddProductMutation();

  const addProductHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await addProduct({
        name,
        description,
        image,
        price,
        qty,
        category,
        weight,
        materials,
      }).unwrap();
      toast.success("Product added");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
      <h5>Add a product</h5>
      <form onSubmit={addProductHandler}>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            className="form-control"
            id="productName"
            aria-label="Product name"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            className="form-control"
            id="productDescription"
            aria-label="Product Description"
            placeholder="description"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.value)
            }
            type="url"
            className="form-control"
            id="productImage"
            aria-label="Product Image"
            placeholder="Image URL"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(parseFloat(e.target.value))
            }
            type="number"
            className="form-control"
            id="productPrice"
            aria-label="Product price"
            placeholder="price"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQty(parseFloat(e.target.value))
            }
            type="number"
            className="form-control"
            id="productQuantity"
            aria-label="Product Quantity"
            placeholder="quantity"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
            type="text"
            className="form-control"
            id="productCategory"
            aria-label="Product Category"
            placeholder="category"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWeight(parseFloat(e.target.value))
            }
            type="number"
            className="form-control"
            id="productWeight"
            aria-label="Product weight"
            placeholder="weight"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMaterials(e.target.value)
            }
            type="text"
            className="form-control"
            id="productMaterials"
            aria-label="Product Materials"
            placeholder="materials"
          />
        </div>
        <button className="btn btn-light" type="submit">
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProduct;
