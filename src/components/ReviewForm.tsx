import React from 'react';

const ReviewForm = (): JSX.Element => (
  <form>
    <label htmlFor="name">
      Name:
      <input type="text" name="name" />
    </label>
    <label htmlFor="email">
      Email:
      <input type="email" name="email" />
    </label>
    <label htmlFor="rating">
      Rating:
      <select name="rating">
        <option value="">--Please select a rating--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </label>
    <label htmlFor="comment">
      Comment
      <input type="text" name="comment" />
    </label>
    <button type="button">Submit</button>
  </form>
);

export default ReviewForm;
