import React from 'react'

import styles from './Table.module.css'

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
const Table = ({
  columns,
  data
}) => {
  return (
    <table className={styles.layout}>
      <thead>
        <tr>
          {columns.map(({ key, label }) => {
            return (
              <th key={key}>{label}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <TableRow
              key={row.id || index}
              row={row}
              columns={columns}
            />
          )
        })}
      </tbody>
    </table>
  )
}

const TableRow = ({
  row,
  columns,
}) => {
  return (
    <tr>
      {columns.map(({ key, colSpan = 1 }) => {
        if (!row.hasOwnProperty(key)) return null

        return (
          <td
            key={row._key || key}
            colSpan={colSpan}
          >
            {row[key]}
          </td>
        )
      })}
    </tr>
  )
}

export default Table
