import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({ length, setPage, page, rowsCount }) {
  const totalPages = Math.ceil((length || 0) / (rowsCount || 1));

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (page <= 2) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (page >= totalPages - 3) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", page, page + 1, "...", totalPages);
      }
    }
    return pageNumbers;
  };

  return (
<div className="flex items-center justify-between">
  <div className="flex items-center px-2">
    {/* Previous Button */}
    <button
      className={`relative inline-flex items-center  px-3 py-1 text-gray-500 border ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline focus:outline-indigo-300 ${
        page <= 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={() => page > 0 && setPage(page - 1)}
      disabled={page <= 0}
    >
      <MdKeyboardArrowLeft size={20} />
    </button>

    {/* Page Numbers */}
    {generatePageNumbers().map((el, i, arr) => {
      const isActive = el === page + 1;

      return (
        <button
          key={i}
          aria-current={isActive ? "page" : undefined}
          onClick={() => setPage(el - 1)}
          className={`relative inline-flex items-center px-3 py-1 text-sm font-semibold border ${
            isActive
              ? "bg-[#e5f1ff] text-primary-600"
              : "text-gray-700 hover:bg-gray-100"
          } focus:outline focus:outline-indigo-300`}
        >
          {el}
        </button>
      );
    })}

    
    <button
      className={`relative inline-flex items-center rounded-r-md px-3 py-1 text-gray-500 border ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline focus:outline-indigo-300 ${
        page + 1 >= totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={() => page + 1 < totalPages && setPage(page + 1)}
      disabled={page + 1 >= totalPages}
    >
      <MdKeyboardArrowRight size={20} />
    </button>
  </div>
</div>



  );
}
