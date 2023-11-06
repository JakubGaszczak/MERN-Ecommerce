import { FormEvent, useState } from "react";
import { useCreateReviewMutation } from "../slices/productsApiSlice";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}

const AddReview: React.FC<Props> = ({ id }) => {
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(1);

  const { userInfo } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const [createReview] = useCreateReviewMutation();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (userInfo) {
      if (comment !== "") {
        try {
          await createReview({ id, comment, rating });
          toast.success("Created review successfully");
        } catch (error) {
          console.error(error);
          toast.error("Failed to create review. Please try again.");
        }
      } else {
        toast.error("Enter a comment");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-11 p-0">
          <h5 className="fw-bold d-flex align-items-center gap-2">
            Add Review
          </h5>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <textarea
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setComment(e.target.value)
                }
                className="form-control form-control-lg"
                id="reviewComment"
                rows={4}
                placeholder="Add a comment"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Rate our product</label>
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setRating(Number(e.target.value))
                }
                id="selectRating"
                className="form-select"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </div>
            <button className="btn btn-secondary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
