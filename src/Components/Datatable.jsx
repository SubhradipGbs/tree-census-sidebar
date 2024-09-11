import {
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  FaSort,
  FaSortDown,
  FaSortUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight, FaDownload } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { CSVLink } from "react-csv";

const DataTable = ({ data, columns, filename, bordered }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnfilterd, setColumnFiltered] = useState([]);
  const [filterOpen, setFilterOpen] = useState({});

  const initialState = {
    pagination,
    columnFilters: columns
      .filter((col) => col.initialFilterValue)
      .map((col) => ({ id: col.accessor, value: col.initialFilterValue })),
  };

  const table = useReactTable({
    data,
    columns,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      columnFilters: columnfilterd,
    },
    onColumnFiltersChange: setColumnFiltered,
    initialState,
  });

  const toggleFilterOpen = (columnId) => {
    setFilterOpen({ ...filterOpen, [columnId]: !filterOpen[columnId] });
  };

  return (
    <div className="w-full">
      <div className="flex justify-end mb-2">
        <CSVLink
          data={table.getRowModel().rows.map((row) => row._valuesCache)}
          filename={filename || "data"}
          className="flex justify-center items-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <FaDownload/>
          Export
        </CSVLink>
      </div>
      <div className="w-full h-full overflow-scroll mb-3">
        <table className="w-full min-w-max table-auto text-xs" >
          <thead className="bg-gray-300">
            {table.getHeaderGroups().map((headergrp) => (
              <tr key={headergrp.id}>
                {headergrp.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-4 py-2  max-w-[350px] border border-blue-gray-200 cursor-pointer text-center"
                  >
                    <div
                      className="flex justify-between items-center gap-5"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <span className="w-full flex items-center text-center">
                        {header.column.columnDef.header}
                        {header.column.getCanSort() &&
                          !header.column.getIsSorted() && <FaSort />}
                        {header.column.getIsSorted() == "asc" && <FaSortUp />}
                        {header.column.getIsSorted() == "desc" && (
                          <FaSortDown />
                        )}
                      </span>
                      {header.column.getCanFilter() && (
                        <span className="self-end ms-2 my-auto">
                          <FaFilter
                            opacity={0.7}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFilterOpen(header.column.id);
                            }}
                          />
                        </span>
                      )}
                    </div>
                    {filterOpen[header.column.id] && (
                      <span className="flex items-center mt-2">
                        <Filter column={header.column} />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 max-w-[350px] border border-gray-300"
                    style={{ whiteSpace: "normal" }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {!data.length && (
              <tr>
                <td colSpan={columns.length}>No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2">
        <select
          className="bg-gray-200 rounded-md p-2 me-2"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <ButtonGroup size="sm" color="blue">
          <Button
            onClick={() => {
              table.firstPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <FaAnglesLeft />
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.previousPage();
            }}
          >
            <FaChevronLeft />
          </Button>
          <Button>{table.getState().pagination.pageIndex + 1}</Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.nextPage();
            }}
          >
            <FaChevronRight />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.lastPage();
            }}
          >
            <FaAnglesRight />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

function flexRender(Component, props) {
  if (typeof Component === "function") {
    return <Component {...props} />;
  }
  if (typeof Component === "string") {
    return Component;
  }
  return null;
}

function Filter({ column }) {
  const { filterVariant } = column.columnDef.meta ?? {};
  const columnFilterValue = column.getFilterValue();
  const sortedUniqueValues = React.useMemo(
    () =>
      filterVariant === "range"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys())
            .sort()
            .slice(0, 5000),
    [column.getFacetedUniqueValues(), filterVariant]
  );

  return filterVariant === "range" ? (
    <div>
      <div className="flex">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0] !== undefined
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === "select" ? (
    <select
      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">All</option>
      {sortedUniqueValues.map((value) => (
        //dynamically generated select options from faceted values feature
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  ) : (
    <>
      {/* Autocomplete suggestions from faceted values feature */}
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        list={column.id + "list"}
      />
      {/* <div className="h-1" /> */}
    </>
  );
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 100,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs "
    />
  );
}

export default DataTable;
