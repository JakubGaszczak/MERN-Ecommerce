import { useGetProductReviewsQuery } from "../slices/productsApiSlice";

interface Props {
  id: string;
}

const ReviewsGrid: React.FC<Props> = ({ id }) => {
  const { data: productsReviews } = useGetProductReviewsQuery(id);

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
                <div className="col-md-6" key={index}>
                  <p className="small text-muted m-0">{`${day}.${month}.${year}`}</p>
                  <h6>{review.name}</h6>
                  <p className="small">{review.comment}</p>
                  <span className="small">rating: {review.rating}/10</span>
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
