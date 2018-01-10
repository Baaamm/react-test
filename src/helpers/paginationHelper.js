/**
 * Get the Friendslist
 * @param props:Object
 */
const getFriendsList = (props) => (
    props.friendsById.slice((props.pagination.page - 1) * props.pagination.pageSize,
        (props.pagination.page) * props.pagination.pageSize)
)

/**
 * Get the getTotalPages
 * @param props:Object
 */
const getTotalPages = (props) => (
    Math.ceil(props.friendsById.length / props.pagination.pageSize)
)


module.exports= {
    getFriendsList,
    getTotalPages
}