import React from 'react';
import Pagination from './Pagination';
import renderer from 'react-test-renderer';

it('renders only with next button', () => {
    const tree = renderer.create(<Pagination actualPage={1} totalPages = {2} updatePage={null} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders with next and prev button', () => {
    const tree = renderer.create(<Pagination actualPage={2} totalPages = {5} updatePage={null} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders with only prev button', () => {
    const tree = renderer.create(<Pagination actualPage={5} totalPages = {5} updatePage={null} />).toJSON();
    expect(tree).toMatchSnapshot();
});
