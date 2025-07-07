// components/DeliverySlider.jsx
"use client";

import Slider from "react-slick";
import Image from "next/image";

const cards = [
    {
        title: "Turkiyadan yuk tashish",
        desc: "Turkiyadan O'zbekistonga sifatli va ishonchli yuk tashish xizmatlari.",
        img: "/car1.webp",
    },
    {
        title: "Yevropadan yetkazib berish",
        desc: "Yevropadan tez va xavfsiz yuklarni yetkazib berish uchun ishonchli logistika xizmatlari.",
        img: "/car2.webp",
    },
    {
        title: "Rossiyadan yuk tashish",
        desc: "Rossiyadan O'zbekistonga barcha turdagi yuklarni tez va ishonchli yetkazib berish.",
        img: "/car3.jpeg",
    },
    {
        title: "Qozog'istondan yuk tashish",
        desc: "Qozog'istondan O'zbekistonga yuklarni tez va qulay narxlarda yetkazib berish.",
        img: "/car4.png",
    },
    {
        title: "Polshadan yuk tashish",
        desc: "Polshadan O'zbekistonga xavfsiz va tez logistika xizmati.",
        img: "/car2.webp",
    },
    {
        title: "Germaniyadan yuk tashish",
        desc: "Germaniyadan yuklaringizni tez va ishonchli olib kelamiz.",
        img: "/car3.jpeg",
    },
    {
        title: "Fransiyadan yuk tashish",
        desc: "Fransiyadan sifatli va xavfsiz yetkazib berish xizmati.",
        img: "/car1.webp",
    },
    {
        title: "Ukrainadan yuk tashish",
        desc: "Ukrainadan yuklaringizni qulay narxlarda olib kelamiz.",
        img: "/car4.png",
    },
];

export default function DeliverySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // large screen
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // small screen
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
      

    return (
        <section className="container mx-auto px-1 py-1">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-3 max-h-150">
                        <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-[20px] shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
                            {/* Title */}
                            <h3 className="text-white text-3xl font-bold text-center p-12 leading-snug">
                                {card.title}
                            </h3>

                            {/* Image with Zoom-on-hover */}
                            <div className="relative w-full py-4 aspect-video px-8 overflow-hidden rounded-xl">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Description */}
                            <p className="text-white max-h-16 px-4 mt-8 mb-6 text-sm">
                                {card.desc}
                            </p>

                            {/* Button */}
                            <div className="px-4 mt-auto  pb-6">
                                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition  ">
                                    Buyurtma qiling
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>


         
    );
}
