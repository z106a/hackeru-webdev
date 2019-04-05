import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('show a comment box', () => {
  // const div = document.createElement('div');
  // ReactDom.render(<App />, div);
  // Looks inside the div
  // and checks to see if the commentbox is in there
  
  // console.log(div.innerHTML);
  // expect(div.innerHTML).toContain('Comment Box');
  // install enzyme, enzyme-adapter-react-16 
  // setupTests.js
  // airbnb.io/enzyme/docs
  // after that we can write like this => go to comment box 2
  // expect(div).toHaveAnInstanceOf(CommentBox);
  // ReactDom.unmountComponentAtNode(div);

});

it('show a comment box 2', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('show a comment list', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
})