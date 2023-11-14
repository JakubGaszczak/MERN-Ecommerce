import { ChangeEvent, useState } from "react";
import { useGetAllProductsQuery } from "../../slices/productsApiSlice";

const ProductPanelScreen = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [materials, setMaterials] = useState<string>("");

  const { data: Products } = useGetAllProductsQuery({});

  return (
    <div className="container my-5">
      <h2 className="mb-3">Product Panel</h2>
      <div className="row">
        <div className="col-md-7">
          {Products?.map((product, index) => (
            <div className="card mb-3" key={index}>
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-fluid rounded-start"
                    src={product.image}
                    alt={`product ${product.name}`}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <form>
                      <div className="mb-2">
                        <label className="form-label small">Name</label>
                        <input
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                          }
                          type="text"
                          className="form-control"
                          value={product.name}
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
                          value={product.description}
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
                          value={product.image}
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
                          value={product.price}
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
                          value={product.qty}
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
                          value={product.category}
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
                          value={product.weight}
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
                          value={product.materials}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPanelScreen;
