import React from 'react';
import { PropTypes } from 'prop-types'

import styles from './Pagination.css';

const Pagination = ( { actualPage, totalPages, updatePage} ) => (
    <div>
        {actualPage > 1 &&
            <button className={`btn btn-default ${styles.prevButton}`}
                    onClick={() => updatePage(actualPage - 1)}>
                <span>pre</span>
            </button>
        }

        {actualPage < totalPages &&
            <button className={`btn btn-default ${styles.nextButton}`}
                    onClick={() => updatePage(actualPage + 1)}>
                <span>next</span>
            </button>
        }
    </div>
);

Pagination.propTypes = {
    actualPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired
};

export default Pagination;
