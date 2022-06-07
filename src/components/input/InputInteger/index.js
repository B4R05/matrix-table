import React, { useCallback } from "react";

import styles from "./InputInteger.module.css";

/**
 * Controlled input field with a mask that only accepts integers as input.
 *
 * The change prop expects a function with field and value as arguments.
 *
 * @param {Object} props
 * @param {String} props.field field name for input
 * @param {Number} props.value current value of input
 * @param {String | Number} props.placeholder placeholder value for empty data
 * @param {Function} props.change field and value as arguments
 * @param {?Number} props.max maximum value
 * @param {?Number} props.min minimum value
 */
const InputInteger = ({
  field,
  value,
  placeholder = 0,
  change,
  min = null,
  max = null,
}) => {
  const handleChange = useCallback(
    (event) => {
      const changeValue = event.target.value;

      if (changeValue === "") {
        change(field, 0);
      } else {
        let value = Number(event.target.value.replace(/[^0-9]/g, ""));

        if (min && value < min) value = Number(min);

        if (max && value > max) value = Number(max);

        change(field, value);
      }
    },
    [change, field, max, min]
  );

  return (
    <input
      className={styles.input}
      id={field}
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputInteger;
