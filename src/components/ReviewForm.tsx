import { useRef } from 'react';

interface ReviewFormProps {
  setLatestComments: React.Dispatch<React.SetStateAction<Comment[]>>
}

interface Comment {
  name: string | undefined,
  email: string | undefined,
  rating: string | undefined,
  comment: string | undefined,
}

const ReviewForm = ({ setLatestComments }: ReviewFormProps): JSX.Element => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const ratingInput = useRef<HTMLSelectElement>(null);
  const commentInput = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setLatestComments((currentComments) => [
      {
        name: nameInput?.current?.value,
        email: emailInput?.current?.value,
        rating: ratingInput?.current?.value,
        comment: commentInput?.current?.value,
      },
      ...currentComments,
    ]);
  };

  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" ref={nameInput} />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" ref={emailInput} />
      </label>
      <label htmlFor="rating">
        Rating:
        <select name="rating" ref={ratingInput}>
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
        <input type="text" name="comment" ref={commentInput} />
      </label>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ReviewForm;
export type { Comment };
