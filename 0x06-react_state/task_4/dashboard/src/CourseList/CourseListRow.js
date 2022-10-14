import React, { Fragment, useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isCheck, setCheck] = useState(false);
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
              <td className={isCheck ? css(styles.rowChecked) : ''}>
                <input
                  type='checkbox'
                  onChange={() => {setCheck(!isCheck)}}
                />
                { textFirstCell }
                </td>
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
  },

  rowChecked: {
    backgroundColor: '#e6e4e4'
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
