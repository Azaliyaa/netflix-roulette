import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import { DropdownArrow } from './../../images/icons'
import styles from './Select.module.css'
  
const Select = ({
  options,
  label,
  selectClass,
  containerClass,
  arrowClass,
  labelClass,
  iconClass,
  onChange
}) => {
  return (
    <div className={cn(styles.container, containerClass)}>
        {label && <div className={cn(styles.label, labelClass)}>{label}</div>}
        <select
          className={cn(selectClass, styles.select)}
          onChange={onChange}
        >
          {options.map(value => {
              return <option key={value}>{value}</option>
          })}
        </select>
      <span className={cn(styles.arrow, arrowClass)}><DropdownArrow className={iconClass} /></span>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  selectClass: PropTypes.string,
  containerClass: PropTypes.string,
  arrowClass: PropTypes.string,
  labelClass: PropTypes.string,
  iconClass: PropTypes.string,
  onChange: PropTypes.func
};
  
export { Select };