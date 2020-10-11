import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    console.log('Pagination')
    debugger;
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRow } = pagination;
    const totalPages = Math.ceil(_totalRow/_limit);
    // 51/10 = 5.1 -> lay
    function HandlePageChange(newPage) {
        console.log('HandlePageChange ')
        debugger;
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
        {console.log('render Pagination')}
            <button disabled={_page <= 1} onClick={() => HandlePageChange(_page - 1)}>Prev</button>
            <button disabled={_page >= totalPages}  onClick={() => HandlePageChange(_page + 1)}>Next</button>
        </div>
    );
}

export default React.memo(Pagination);