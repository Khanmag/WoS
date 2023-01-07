import { render, screen } from '@testing-library/react';
import App from './App';
import profileReducer, {addNewPost} from "./redux/profileReducer";

const state = {
  posts: [
    {id: '1', text: 'HTML user'},
    {id: '2', text: 'CSS master'},
    {id: '3', text: 'JS is my kung-fu'},
    {id: '1', text: 'I am React GOD!!'},
  ],
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Profile/i);
  expect(linkElement).toBeInTheDocument();
});

it('length of post should be increment', () => {
  // 1.test data
  let action = addNewPost('testing')

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
})