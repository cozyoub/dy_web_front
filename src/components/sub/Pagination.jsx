export default function Pagination({ page, totalItems, pageSize, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pager">
      <button
        className="pager-btn pager-btn-prev"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <img src="/images/sub/pager-left.svg" alt="" />
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={"pager-btn" + (num === page ? " is-active" : "")}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="pager-btn pager-btn-next"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        <img src="/images/sub/pager-right.svg" alt="" />
      </button>
    </div>
  );
}
