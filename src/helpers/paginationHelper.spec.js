import {getFriendsList, getTotalPages} from './paginationHelper'
import {expect} from 'chai'
import uuidv4 from 'uuid/v4';

describe('Pagination Helper', () => {
    let props;

    beforeEach(function () {
        props = {
            pagination: {
                page: 1,
                pageSize: 2,
            },

            friendsById: [
                {
                    id: uuidv4(),
                    name: 'Theodore Roosevelt',
                    starred: true,
                    gender: 'male'
                },
                {
                    id: uuidv4(),
                    name: 'Abraham Lincoln',
                    starred: false,
                    gender: 'male'
                },
                {
                    id: uuidv4(),
                    name: 'George Washington',
                    starred: false,
                    gender: 'female'
                }
            ]
        };
    });

    describe('getFriendsList', () => {
        it('FriendList should have length of 2', () => {
            expect(getFriendsList(props).length).to.equal(2);
        });

        it('FriendList should have length of 1', () => {
            props.pagination.page = 2;
            expect(getFriendsList(props).length).to.equal(1);
        });

        it('FriendList should have length of 3 with pageSize 3 in page 1', () => {
            props.pagination.pageSize = 3;
            expect(getFriendsList(props).length).to.equal(3);
        });

        it('FriendList should have length of 1 with pageSize 1 in page 1', () => {
            props.pagination.pageSize = 1;
            expect(getFriendsList(props).length).to.equal(1);
        });

    });

    describe('getTotalPages', () => {
        it('should have 2 total pages', () => {
            expect(getTotalPages(props)).to.equal(2);
        });

        it('should have 2 total pages', () => {
            props.pagination.pageSize = 3;
            expect(getTotalPages(props)).to.equal(1);
        });
    });
});