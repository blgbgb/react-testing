import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../Like';

describe("Like component", () => {
  it('muestra por defecto "Likes: 0"', () => {
    render(<Like />);
    const paragraph = screen.queryByText(/Likes: 0/i);
    expect(paragraph).not.toBeNull();
  });

  it("incrementa el contador al hacer clic en Like", () => {
    render(<Like />);
    const likeButton = screen.getByRole("button", { name: /^like$/i });
    fireEvent.click(likeButton);
    const updatedText = screen.queryByText(/Likes: 1/i);
    expect(updatedText).not.toBeNull();
  });

  it("decrementa el contador al hacer clic en Dislike", () => {
    render(<Like />);
    const dislikeButton = screen.getByRole("button", { name: /^dislike$/i });
    fireEvent.click(dislikeButton);
    const updatedText = screen.queryByText(/Likes: -1/i);
    expect(updatedText).not.toBeNull();
  });
});
