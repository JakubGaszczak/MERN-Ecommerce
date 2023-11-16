import { Review } from "../types/product";

interface Props {
  productsReviews: Review[];
}

const ReviewsGrid: React.FC<Props> = ({ productsReviews }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-11 p-0">
          <h4 className="mt-4">Customers Opinion</h4>
          <div className="row">
            {productsReviews?.map((review, index) => {
              const dateString = new Date(review.createdAt);
              const year = dateString.getFullYear();
              const month = dateString.getMonth() + 1;
              const day = dateString.getDate();

              return (
                <div className="col-md-6 mb-3" key={index}>
                  <p className="small text-muted m-0">{`${day}.${month}.${year}`}</p>
                  <h6 className="m-0">{review.name}</h6>
                  <span className="small">rating: {review.rating}/10</span>
                  <p className="border rounded small m-0 mt-2 p-1 py-3">{review.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsGrid;
