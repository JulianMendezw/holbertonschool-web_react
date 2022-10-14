import React, { Fragment } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr className={css(styles.tr)}>
      {isHeader ? 
        (textSecondCell === null ? (
          <th className={css(styles.headerColor)} colSpan="2">{ textFirstCell }</th>
        ) : (
          <Fragment>
           <th className={css(styles.headerColor)} >{ textFirstCell }</th>
           <th className={css(styles.headerColor)} >{ textSecondCell }</th>
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

const styles = StyleSheet.create({
  headerColor: {
    backgroundColor: '#deb5b545'
  },

  tr: {
    backgroundColor: '#f5f5f5ab'
  }
});

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
