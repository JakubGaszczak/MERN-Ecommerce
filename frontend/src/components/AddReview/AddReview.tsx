const AddReview = () => {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-11 p-0">
          <h5 className="fw-bold d-flex align-items-center gap-2">
            Add Review
          </h5>
          <form>
            <div className="mb-3">
              <textarea
                className="form-control form-control-lg"
                id="reviewComment"
                rows={4}
                placeholder="Add a comment"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Rate our product</label>
              <select id="selectRating" className="form-select">
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
            <button className="btn btn-secondary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
