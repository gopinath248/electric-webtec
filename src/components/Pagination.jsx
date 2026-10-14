export default function Pagination({ page, pages, onPageChange }) {
  if (pages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: pages }).map((_, index) => {
        const value = index + 1;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onPageChange(value)}
            className={`h-9 w-9 rounded-full border border-gray-200 transition ${page === value ? "bg-[#1F6FA5] text-white" : "bg-[#F5E400] text-black hover:bg-[#d4c300]"}`}
          >
            .

            
            {value}
          </button>
        );
      })}
    </div>
  );
}
