import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Pagination from "./Pagination";

export default function CommonTable({
  length = 20,
  setPage,
  page = 0,
  rowsCount = 10,
  tableData,
  columns
}) {

  return (
    <>
      <div className="overflow-x-auto mx-3 my-3 rounded-lg shadow-md border">
        <Table hoverable>
          <TableHead>
            {columns.map((column, index) => (
              <TableHeadCell
                key={index}
                className={`font-semibold border-b-2 bg-gray-300  text-[12px] ${
                  index === 0 ? "sticky left-0 z-10 " : ""
                }`}
              >
                {column}
              </TableHeadCell>
            ))}
          </TableHead>

          <TableBody className="divide-y">
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>
                  {row.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className={`inline-block px-2 py-0.5 mr-1 rounded text-xs ${
                        role === "Organization Admin"
                          ? "bg-blue-100 text-blue-800"
                          : role === "Module Admin"
                          ? "bg-indigo-100 text-indigo-800"
                          : role === "Operations Team"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </TableCell>

                <TableCell>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs ${
                      row.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {row.status}
                    {row.locked && (
                      <span className="ml-1 text-red-500">🔒</span>
                    )}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-blue-600 cursor-pointer">
                    View Details
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center  p-4 rounded">
          <div className="flex space-x-3">
            {/* <p className="text-gray-500 flex gap-x-2">
              <span className="md:block hidden">Showing </span>
              <span className="text-primary-600 font-semibold md:text-base text-xs">
                {rowsCount * page + 1} -{" "}
                {length - rowsCount * page > rowsCount
                  ? rowsCount * (page + 1)
                  : length}{" "}
              </span>
              <span className="md:text-base text-xs">of</span>
              <span className="text-primary-600 font-semibold md:text-base text-xs">
                {" "}
                {length}
              </span>
            </p> */}
          </div>

          <div>
            <Pagination
              setPage={setPage}
              page={page}
              length={length}
              rowsCount={rowsCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}
