import { AiOutlineRight } from "react-icons/ai";
function ListCommic() {
  return (
    <section className="py-16 px-3 lg:py-24">
      <h2 className="text-xl font-bold uppercase text-gray-700">
        Mới cập nhật
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div className="flex" key={index}>
              <img
                src="/src/assets/list.jpg"
                alt=""
                className="fine-transition h-[5.25rem] w-[3.5rem] flex-none cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg"
              />
              <div className="p-2">
                <h4 className="mb-1 text-sm font-bold text-gray-800 line-clamp-2">
                  After GOD
                </h4>
                <div className="text-xs uppercase">
                  <span className="font-semibold">C. 23</span>
                  <span>- 3 giờ trước</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="float-right mt-4 inline-block px-3">
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-bold text-gray-600 transition hover:text-blue-600"
        >
          <AiOutlineRight size={10} /> Xem tất cả
        </a>
      </div>
    </section>
  );
}

export default ListCommic;
