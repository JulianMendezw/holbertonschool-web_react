import React, { Fragment } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? 
        (textSecondCell === null ? (
          <th colSpan="2">{ textFirstCell }</th>
        ) : (
          <Fragment>
           <th>{ textFirstCell }</th>
           <th>{ textSecondCell }</th>
          </Fragment>
        )
          )  : (
            <Fragment>
              <td>{ textFirstCell }</td>
              <td>{ textSecondCell }</td>
            </Fragment>
          )}
    </tr>
  );
}

CourseListRow.propTypes ={
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
