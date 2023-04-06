import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useNavigate, useParams } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/detail/123");
  };
  const { id } = useParams();
  console.log(id, "------------------");
  return (
    <div className="flex flex-col">
      <div
        className="top-0 left-0 flex justify-center py-4"
        style={{
          background:
            "linear-gradient(132deg, rgb(213, 210, 208) 0%, rgb(27, 30, 37) 100%)",
        }}
      >
        <div className="relative w-full translate-y-[calc(5rem)] md:translate-y-[calc(7rem)]">
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper !pb-9"
            loop={true}
            effect="coverflow"
            grabCursor={true}
          >
            {Array(5)
              .fill("")
              .map((_, index) => (
                <SwiperSlide key={index} className="">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img
                      src="/src/assets/img-1.jpg"
                      alt=""
                      className="w-full"
                    />
                    <div className="bg-hero absolute top-0 h-full w-full">
                      <div className="relative h-full w-full">
                        <div className="absolute bottom-0 flex w-full items-center justify-between p-3  md:p-6">
                          <div className="max-w-[90%] flex-1 md:max-w-[70%]">
                            <h2 className="font-bold uppercase tracking-wider text-white text-opacity-60">
                              Mairimashita! Iruma-kun
                            </h2>
                            <p className="text-sm font-light text-white text-opacity-80 line-clamp-2">
                              Câu chuyện về Suzuki Iruma, một cậu bé bất hạnh
                              bỗng cuộc đời xoay chuyển khi được Ác ma Sullivan
                              mang đến Ma Giới.
                            </p>
                          </div>
                          <div className="hidden overflow-hidden rounded-lg md:block">
                            <button
                              onClick={navigateTo}
                              className="inline-block bg-blue-600 bg-opacity-50 px-2 py-1 text-sm font-bold uppercase text-white hover:bg-blue-800 hover:bg-opacity-50 md:px-8 md:py-2"
                            >
                              Xem thông tin
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;
