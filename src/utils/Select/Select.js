import React from 'react';
import cn from 'classnames'
import styles from './Select.css'
  
const Select = ({ options, selectClass }) => {
  return (
    <div className={styles.container}>
      <select
        className={cn(selectClass, styles.select)}
      >
        {options.map(value => {
            return <option key={value}>{value}</option>
        })}
      </select>
    </div>
  );
}
  
export { Select };