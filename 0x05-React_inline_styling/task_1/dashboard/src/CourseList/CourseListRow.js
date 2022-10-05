import React, { Fragment } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerColor = {
    'background-color': '#deb5b545'
  }
  return (
    <tr style={{ 'background-color': '#f5f5f5ab' }}>
      {isHeader ? 
        (textSecondCell === null ? (
          <th style={headerColor} colSpan="2">{ textFirstCell }</th>
        ) : (
          <Fragment>
           <th style={headerColor} >{ textFirstCell }</th>
           <th style={headerColor} >{ textSecondCell }</th>
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
