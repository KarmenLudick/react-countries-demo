// Table component logic and UI come here
import React from "react";
// Use the useTable Hook to send the columns and data to build the table
import { useTable } from "react-table";

const Table = ({ columns, data, updateMyData, skipPageReset }) => {
  const {
    getTableProps,// table props from react-table
    getTableBodyProps,// table body props from react-table
    headerGroups,// headerGroups, if your table has groupings
    rows,// rows for the table based on the data passed
    prepareRow,// Prepare the row (this function needs to be called for each row before getting the row props)
    state,
  } = useTable({
    columns,
    data,
    updateMyData,
    autoResetPage: !skipPageReset,
  });

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div className="flex flex-col w-full">
      <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
          <table
            className="min-w-full divide-y divide-gray-200"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
              {...getTableBodyProps()}
            >
              {rows.map((row, i) => {
                prepareRow(row);// This line is necessary to prepare the rows and get the row props from react-table dynamically
                // Each row can be rendered directly as a string using the react-table render method
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
