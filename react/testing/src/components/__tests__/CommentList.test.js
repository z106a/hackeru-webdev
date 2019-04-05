import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
  const initState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});
it('creates one LI per comment', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});
it('shows the text for each comment ', () => {
  // console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
