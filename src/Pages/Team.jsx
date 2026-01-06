import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Miss. Swati",
    role: "UX Manager & Analyst",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "https://media.istockphoto.com/id/2177184303/photo/white-man-programmer-or-it-specialist-software-developer-with-glasses-working-late-into-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLBlBQCGyuWBaJTbzG7bntaoYBB-GdTiI6z4Co5mjAg=",
  },
  {
    id: 2,
    name: "Mr. Venendra",
    role: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    image:"https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"},
  {
    id: 3,
    name: "Mr.Rahul Barve",
    role: "full-stack developer ",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    image:"https://images.unsplash.com/photo-1602064172250-43f8909056c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"},
  
  {
    id: 4,
    name: "Mr.Rohit ",
    role: "business Success manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2lnbmVyfGVufDB8fDB8fHww",
  },
];

export default function TeamSwiper() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-gray-500 mb-2">MEET THE TEAM</p>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
            The minds behind the magic.
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Designers, strategists, and builders who craft every pixel with pride.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-[420px] flex flex-col">
                {/* Image with gradient overlay */}
                <div className="h-[260px] w-full relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm opacity-80">{member.role}</p>
                  </div>
                </div>

                {/* Avatar + Info */}
                <div className="p-6 flex flex-col items-center justify-center flex-grow">
                  <img
                    // src={member.avatar}
                    // alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 shadow-md ring-2 ring-indigo-500"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styled dots */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: linear-gradient(to right, #6366f1, #a855f7);
          opacity: 0.4;
          width: 10px;
          height: 10px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
