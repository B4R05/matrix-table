import React from "react";
import InputInteger from "../../input/InputInteger";
import styles from "./Table.module.css";

/**
 * A simple styled table component.
 *
 * It takes columns props array of columns to be displayed and data prop of the data to be displayed.
 *
 * @example
 * ```
 * The following props:
 *
 * columns = [
 *   { key: 'city', label: 'City' },
 *   { key: 'name', label: 'Name' }
 *  ]
 *
 * data = [
 *   { city: 'London', name: 'Scott' },
 *   { city: 'Paris', name: 'Dan' }
 * ]
 *
 * Produces:
 *
 * +─────────+───────+
 * | CITY    | NAME  |
 * +─────────+───────+
 * | London  | Scott |
 * | Paris   | Dan   |
 * +─────────+───────+
 * ```
 *
 * @param {Object} props
 * @param {{key: String, label: String}[]} props.columns a list of headings
 * @param {{key: (String | Number | ReactElement)}[]} props.data an object where key matches the value in columns
 */
const Table = ({ columns, data, updateRows }) => {
  return (
    <table className={styles.layout}>
      <thead>
        <tr>
          {columns.map(({ key, label }) => {
            return <th key={key}>{label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index, dataArray) => {
          return (
            <TableRow
              key={row.id || index}
              row={row}
              columns={columns}
              dataArray={dataArray}
              updateRows={updateRows}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const TableRow = ({ row, columns, dataArray, updateRows }) => {
  return (
    <tr>
      {columns.map(({ key, colSpan = 1 }) => {
        if (!row.hasOwnProperty(key)) return null;

        if (key !== "header" && key !== "ticket_id") {
          return (
            <td key={row._key || key} colSpan={colSpan}>
              <InputInteger
                value={row[key]}
                change={(field, value) => {
                  const updatedRowsData = dataArray.map((obj) => {
                    if (obj.ticket_id === row.ticket_id) {
                      return {
                        ...obj,
                        [key]: value,
                      };
                    }

                    return obj;
                  });

                  return updateRows(updatedRowsData);
                }}
              />
            </td>
          );
        }
        return (
          <td key={row._key || key} colSpan={colSpan}>
            {row[key]}
          </td>
        );
      })}
    </tr>
  );
};

export default Table;
