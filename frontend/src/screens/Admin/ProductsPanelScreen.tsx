import { ChangeEvent, FormEvent, useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../slices/productsApiSlice";
import { toast } from "react-toastify";
import AddProduct from "../../components/AddProduct";

const ProductPanelScreen = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [materials, setMaterials] = useState<string>("");

  const { data: Products, refetch } = useGetAllProductsQuery({});
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const deleteProductHandler = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      refetch()
      toast.success("Product deleted")
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting the product");
    }
  };

  const updateProductHandler = async (e: FormEvent, _id: string) => {
    e.preventDefault();

    try {
      await updateProduct({
        _id,
        name,
        description,
        image,
        price,
        qty,
        category,
        weight,
        materials,
      }).unwrap();
      refetch()
      toast.success("Product updated");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating the product");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Product Panel</h1>
      <div className="row mb-4">
        <div className="col">
          <AddProduct refetch={refetch} />
        </div>
      </div>
      <div className="row">
        <h5>List of current products</h5>
        {Products?.map((product, index) => (
          <div className="col-md-6">
            <div className="card mb-3" key={index}>
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-fluid rounded-start"
                    src={product.image}
                    alt={`product ${product.name}`}
                  />
                  <button
                    onClick={() => deleteProductHandler(product._id!)}
                    className="btn btn-danger small w-100 mt-3"
                  >
                    Delete Product
                  </button>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <form
                      onSubmit={(e) => updateProductHandler(e, product._id!)}
                    >
                      <div className="mb-2">
                        <label className="form-label small">Name</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                          }
                          type="text"
                          className="form-control"
                          placeholder={product.name}
                          id="productName"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Description</label>
                        <textarea
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setDescription(e.target.value)
                          }
                          className="form-control"
                          placeholder={product.description}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Image URL</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setImage(e.target.value)
                          }
                          id="productImage"
                          type="url"
                          className="form-control"
                          placeholder={product.image}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Price</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPrice(parseFloat(e.target.value))
                          }
                          type="number"
                          className="form-control"
                          placeholder={`${product.price}`}
                          id="productPrice"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Quantity</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setQty(parseFloat(e.target.value))
                          }
                          type="number"
                          className="form-control"
                          id="productQuantity"
                          placeholder={`${product.qty}`}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Category</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCategory(e.target.value)
                          }
                          type="text"
                          className="form-control"
                          id="productCategory"
                          placeholder={product.category}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Weight</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setWeight(parseFloat(e.target.value))
                          }
                          type="number"
                          className="form-control"
                          id="productWeight"
                          placeholder={`${product.weight}`}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Materials</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setMaterials(e.target.value)
                          }
                          type="text"
                          className="form-control"
                          id="productMaterials"
                          placeholder={product.materials}
                        />
                      </div>
                      <button type="submit" className="btn btn-dark mt-2">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPanelScreen;
