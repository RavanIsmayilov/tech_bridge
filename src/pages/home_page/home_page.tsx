import React, { useState } from "react";
import { Link } from "react-router-dom";
import WatchVideoIcon from "../../assets/icon/Watch Video Button.svg";
import FirstSubjectIcon from "../../assets/icon/subject icon 1.svg";
import SecondSubjectIcon from "../../assets/icon/subject icon 2.svg";
import ThirdSubjectIcon from "../../assets/icon/subject icon 3.svg";
import MinisterIcon from "../../assets/icon/nazirliy icon.svg";
import ArtiIcon from "../../assets/icon/arti icon.svg";
import LeftScroolIcon from "../../assets/icon/Left Scroll- Button.svg";
import RightScroolIcon from "../../assets/icon/Right Scroll- Button.svg";

const HomePage: React.FC = () => {
  const stats = [
    { title: "Tələbələr", count: 250 },
    { title: "Valideynlər", count: 250 },
    { title: "Regionlar", count: 250 },
  ];

  const courses = [
    {
      title: "Blok Kodlaşdırmanı Öyrən",
      description: "Blok kodlaşdırma proqramlaşdırma üsuludur",
      image: FirstSubjectIcon,
    },
    {
      title: "Süni İntellekt",
      description:
        "Süni İntellekt, kompüterlərin öyrənib, qərar vermə qabiliyyətidir",
      image: SecondSubjectIcon,
    },
    {
      title: "Avadanlıq Laboratoriyası",
      description:
        "Avadanlıq Laboratoriyası, avadanlıqların test edildiyi məkandır",
      image: ThirdSubjectIcon,
    },
  ];

  const partners = [
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
    { name: "ARTİ", image: ArtiIcon },
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
    { name: "ARTİ", image: ArtiIcon },
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
  ];

  const newsData = [
    {
      title: "App Inventor Development 2024 Year in Review",
      description:
        "Hello everyone and welcome to our 2024 Year in Review for App Inventor development. First, let’s highlight our amazing user base (click here to read about some of the awesome projects they built in this year’s Global AI Hackathon). We saw significant growth in users and projects year over year...",
      image: "",
    },
    {
      title: "Rika Suzuki: Japanese University Student Turned Assistant",
      description:
        "Rika Suzuki is spreading the word about App Inventor in Japan by translating the platform into her native language",
      image: "/news-image.png",
    },
    {
      title: "Rika Suzuki: Japanese University Student Turned Assistant",
      description:
        "Rika Suzuki is spreading the word about App Inventor in Japan by translating the platform into her native language",
      image: "/news-image.png",
    },
    {
      title: "Rika Suzuki: Japanese University Student Turned Assistant",
      description:
        "Rika Suzuki is spreading the word about App Inventor in Japan by translating the platform into her native language",
      image: "/news-image.png",
    },
    {
      title: "Rika Suzuki: Japanese University Student Turned Assistant",
      description:
        "Rika Suzuki is spreading the word about App Inventor in Japan by translating the platform into her native language",
      image: "/news-image.png",
    },
    {
      title: "Rika Suzuki: Japanese University Student Turned Assistant",
      description:
        "Rika Suzuki is spreading the word about App Inventor in Japan by translating the platform into her native language",
      image: "/news-image.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= newsData.length - 2 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? newsData.length - 2 : prev - 1
    );
  };

  return (
    <>
      <section className="w-full h-[450px] bg-[#6BBDE5B0] flex flex-col md:flex-row items-center justify-around px-4 py-8 md:py-12 md:px-16 rounded-lg shadow-lg">
        {/* Left Side: Image & Icons */}
        <div className="flex items-center space-x-4">
          <img
            src="/banner-image.png"
            alt="Creative Banner"
            className="w-48 md:w-64"
          />
        </div>

        {/* Right Side: Text & Button */}
        <div className="text-center md:text-center">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#08244E]">
            Yaradıcılığın məktəbinə <br /> buradan keç!
          </h2>
          <div className="mt-4 flex flex-col md:flex-col items-center md:items-center gap-[10px]">
            <button className="bg-[#FDD446] cursor-pointer text-[#08244E] px-6 py-1 rounded-[30px] text-[20px] font-bold shadow-md hover:bg-yellow-500 transition">
              Keçid et
            </button>
            <Link
              to="#"
              className="text-gray-800 text-sm flex items-center space-x-2 hover:underline"
            >
              <img src={WatchVideoIcon} alt="WatchVideoIcon" />
              <span>Videonu izlə</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-10">
          Burada rəqəmlər danışır
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#ED8116] to-[#F3AA3B] text-white w-[344px] h-[144px] flex flex-col  items-center rounded-b-[20px] shadow-lg"
            >
              <div className="bg-[#ED8116] text-[28px] w-full text-center py-2 rounded-t-lg font-bold">
                {stat.title}
              </div>
              <p className="text-[28px] font-bold mt-5">{stat.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-10">
          Bizim dərslərimiz
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#8DCEDE75] px-6 pb-7 pt-8 rounded-[52px] shadow-lg w-[350px] h-[350px] flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <h3 className="text-[18px] font-bold text-[#C068A6]">
                  {course.title}
                </h3>
                <p className="text-sm text-black mt-2 bg-white rounded-[28px] p-1">
                  {course.description}
                </p>
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="w-42 mx-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-10">
          Akademik partnyorlar
        </h2>
        <div className="flex flex-wrap justify-around items-center space-x-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-[200px] flex flex-col items-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-[300px] mb-2"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
      <h2 className="text-[42px] font-bold text-[#C068A6] mb-12">
        Xəbərlər & Tədbirlər
      </h2>
      <div className="relative flex items-center justify-center overflow-hidden w-full ">
        <button
          className="absolute left-60 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
          onClick={prevSlide}
        >
          <img className="w-14" src={LeftScroolIcon} alt="LeftScroolIcon" />
        </button>
        
        {/* Slider */}
        <div className="overflow-hidden w-[90%] md:w-[60%] ">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 52}%)` }}
          >
            {newsData.map((news, index) => (
              <div
                key={index}
                className="border-2 border-[#C068A6] rounded-[30px] p-6 w-[45%] md:w-[35%] flex-shrink-0 shadow-lg"
              >
                <h3 className="font-bold text-lg text-left">{news.title}</h3>
                <p className="text-black mt-2 text-left">{news.description}</p>
                {news.image && (
                  <img
                    src={news.image}
                    alt="news"
                    className="mt-4 rounded-lg"
                  />
                )}
                <button className="flex self-end mt-12 bg-[#C068A6] text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                  See all...
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-60 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
          onClick={nextSlide}
        >
          <img className="w-14" src={RightScroolIcon} alt="RightScroolIcon" />
        </button>
      </div>
    </section>
    </>
  );
};

export default HomePage;
