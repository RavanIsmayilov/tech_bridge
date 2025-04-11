import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "../../utils/Animation";
import { fadeInAnimationVariants } from "../../utils/FadeInAnimation";
import WatchVideoIcon from "../../assets/icon/Watch Video Button.svg";
import LeftScroolIcon from "../../assets/icon/flat-color-icons_previous.svg";
import RightScroolIcon from "../../assets/icon/right-flat-color-icons_previous.svg";
import CommentPhoto from "../../assets/icon/fotor-2024032323456 1.svg";
import Quotation from "../../assets/icon/quotation.svg";
import HomeBg from "../../assets/images/home_bg.svg";
import AnimatedCounter from "../../components/general/AnimatedCounter";
import newsImage1 from "../../assets/images/image.svg";
import newsImage2 from "../../assets/images/image (1).svg";
import Image1 from "../../assets/images/pese-temayullu-sinifler.svg";
import Image2 from "../../assets/images/GDG-EVENTS.svg";
import Image3 from "../../assets/images/MediaMark.svg";
import CalendarIcon from "../../assets/icon/calendar.svg";
import TeamImg from "../../assets/images/0485bf06131df4f28e5199d075b4f453.jpeg";
import BlobImg from "../../assets/images/Vector.svg";

const HomePage: React.FC = () => {
  const partners = [
    { name: "Elm və Təhsil Nazirliyi", image: Image1 },
    { name: "ARTİ", image: Image2 },
    { name: "Elm və Təhsil Nazirliyi", image: Image3 },
  ];

  const courses = [
    {
      title: "Blok Kodlaşdırma",
      description: "Blok kodlaşdırma vizual proqramlaşdırma üsuludur.",
      color: "bg-[#DFADFF]",
      image: "src/assets/images/subjectsimage1.svg", // Replace with actual image path
      position: "top-14 right-[-25px]",
    },
    {
      title: "Süni İntellekt",
      description:
        "Süni İntellekt, kompüterlərin öyrənib, qərar vermə qabiliyyətidir.",
      color: "bg-[#38CDFF]",
      image: "src/assets/images/subjectsimage2.svg", // Replace with actual image path
      position: "top-34",
    },
    {
      title: "Avadanlıq Laboratoriyası",
      description:
        "Avadanlıq Laboratoriyası, avadanlıqların test edildiyi məkandır.",
      color: "bg-[#FF5A50DB]",
      image: "src/assets/images/subjectsimage3.svg", // Replace with actual image path
      position: "top-28",
    },
    {
      title: "Kvant Hesablamaları",
      description:
        "Kvant hesablamaları kvant mexanikasına əsaslanan hesablama üsuludur.",
      color: "bg-[#CBF86D]",
      image: "src/assets/images/subjectsimage4.svg", // Replace with actual image path
      position: "top-23 right-[-20px]",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Sual ver",
      description:
        "Kvant hesablamaları mürəkkəb hesablamaları paralel şəkildə yerinə yetirən kvant mexanikasına əsaslanan hesablama üsuludur kvant hesablamaları.",
      icon: "src/assets/images/quesimage3.svg", // Replace with actual icon path
      flex: "flex-col",
    },
    {
      number: "2",
      title: "Layihələri bölüş",
      description:
        "Kvant hesablamaları mürəkkəb hesablamaları paralel şəkildə yerinə yetirən kvant mexanikasına əsaslanan hesablama üsuludur kvant hesablamaları.",
      icon: "src/assets/images/quesimage2.svg", // Replace with actual icon path
      flex: "flex-col",
    },
    {
      number: "3",
      title: "Digərlərinə dəstək ol",
      description:
        "Kvant hesablamaları mürəkkəb hesablamaları paralel şəkildə yerinə yetirən kvant mexanikasına əsaslanan hesablama üsuludur kvant hesablamaları.",
      icon: "src/assets/images/quesimage1.svg", // Replace with actual icon path
      flex: "flex-col",
    },
  ];

  const newsData = [
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
    {
      title: "Süni İntellekt Seminarı Baş Tutdu! 🤖",
      time: "20 Mart 2025",
      description:
        "Texnologiya həvəskarları üçün təşkil etdiyimiz seminar uğurla başa çatdı! Qonaqlarımızla tanış olun.",
      image: [newsImage1, newsImage2],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState({
    testimonialsIndex: 0,
    newsDataIndex: 0,
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      newsDataIndex:
        prev.newsDataIndex >= newsData.length - 2 ? 0 : prev.newsDataIndex + 1,
    }));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      newsDataIndex:
        prev.newsDataIndex === 0 ? newsData.length - 2 : prev.newsDataIndex - 1,
    }));
  };

  const testimonialsNextSlide = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      testimonialsIndex:
        prev.testimonialsIndex === testimonials.length - 1
          ? 0
          : prev.testimonialsIndex + 1,
    }));
  };

  const testimonialsPrevSlide = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      testimonialsIndex:
        prev.testimonialsIndex === 0
          ? testimonials.length - 1
          : prev.testimonialsIndex - 1,
    }));
  };

  const testimonials = [
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
    {
      name: "Farid Hasanov",
      image: CommentPhoto,
      text: "My aging pet’s care became effortless with the diverse offerings available. From nutritious pet foods to accessible vet services, the app ensured my pet’s well-being with convenience at every step.",
      quotation: Quotation,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#6BBDE5] w-full h-[450px] md:h-[650px] bg-cover bg-center flex items-center justify-center md:justify-end px-6 py-8 md:py-12 md:px-[150px] shadow-lg relative"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 mix-blend-multiply"></div>

        {/* Right Side: Text & Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center md:text-center flex flex-col items-center md:items-center"
        >
          <h2 className="text-2xl md:text-[32px] font-bold text-[#08244E] leading-tight">
            Yaradıcılığın məktəbinə <br className="hidden md:block" /> buradan
            keç!
          </h2>
          <div className="mt-4 flex flex-col justify-center items-center md:items-start gap-3">
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="bg-[#FDD446] text-[#08244E] px-6 py-2 rounded-full text-lg font-bold shadow-md hover:bg-yellow-500 transition w-40 text-center cursor-pointer"
            >
              Keçid et
            </motion.button>
            <motion.div
              whileTap={{ scale: 0.7 }}
              className="flex justify-center items-center"
            >
              <Link
                to="#"
                className="text-[#08244E] text-[18px] flex items-center justify-center space-x-2 hover:underline"
              >
                <img
                  src={WatchVideoIcon}
                  alt="WatchVideoIcon"
                  className="w-5 h-5"
                />
                <span className="">Videonu izlə</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Info section */}
      <section className="bg-[#3B5D7D] py-4 px-8 h-[232px] flex items-center">
        <div className="w-full flex items-center text-white max-w-[1600px] mx-auto">
          <div className="text-[36px] font-bold border-r-2 pr-7 h-[110px] flex items-center text-center">
            Burada rəqəmlər danışır:
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center px-7">
              <span className="text-[30px] font-bold mr-7">Tələbələr:</span>
              <span
                className={`bg-[#ED8116] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[30px] font-bold mr-7">Valideynlər:</span>
              <span
                className={`bg-[#78D148] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[30px] font-bold mr-7">Regionlar:</span>
              <span
                className={`bg-[#6BBDE5] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Layihe haqqinda */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-between pt-[120px] pb-[200px] px-8"
      >
        <img
          className="absolute top-0 left-0"
          src="src/assets/images/aboutframeup.svg"
          alt=""
        />
        <div className="flex w-full justify-between overflow-hidden">
          {/* Left Side (Image) */}
          <div className=" w-full p-4 h-full">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="src/assets/images/aboutimage1.svg" // Replace with your image URL
              alt="About Image"
              className="absolute top-50 left-20 object-cover z-1 "
            />
            <img
              src="src/assets/images/aboutellipse.svg" // Replace with your image URL
              alt="About Image"
              className="absolute object-cover top-60 left-70 right-50 "
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="src/assets/images/aboutimage2.svg" // Replace with your image URL
              alt="About Image"
              className="absolute bottom-0 left-120 object-cover z-2 "
            />
          </div>

          {/* Right Side (Text Content) */}
          <div className="w-full p-8 text-white font-verdana">
            <h2 className="text-5xl font-bold mb-6 text-[#6C325B] text-center">
              Haqqımızda
            </h2>
            <p className="text-[36px] font-verdana text-black">
              Bizim kurslarımız şagirdləri gələcəyin peşələrinə hazırlayaraq
              onları süni intellekt, kvant hesablamaları, blok kodlaşdırma və
              digər qabaqcıl texnologiyalarla tanış edir. TechBridge ilə
              gələcəyin texnologiyalarını kəşf edin və innovasiyanın bir hissəsi
              olun!
            </p>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0"
          src="src/assets/images/aboutframedown.svg"
          alt=""
        />
      </motion.section>

      {/* Komandamiz */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 px-6 md:px-24 bg-white overflow-hidden"
      >
        {/* Dekor elementləri */}
        <div className="absolute top-10 left-0 w-40 h-40 bg-[#D6E6FF] rounded-br-[60px] z-0"></div>
        <div className="absolute bottom-10 left-1/3 w-[120px] h-[120px] border-[2px] border-[#6F74DD] border-dashed rounded-[20px] z-0"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-[2px] border-yellow-400 rotate-45 z-0"></div>

        {/* 🔵 Əlavə edilən dekorativ blob şəkli */}
        <img
          src={BlobImg} // şəkil yolunu uyğun dəyiş
          alt="Decor"
          className="absolute bottom-0 left-0 w-[342px] h-[304px] z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Sol tərəf - Mətn */}
          <div className="lg:w-1/2 flex justify-center items-center flex-col">
            <div className="w-full flex justify-start items-start mb-20 ml-56">
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#6C325B] mb-6 text-left">
                Komandamız
              </h2>
            </div>
            <p className="text-[#08244E] text-[18px] leading-relaxed max-w-md mx-auto lg:mx-0 text-center">
              Bizim kurslarımız şagirdləri gələcəyin peşələrinə hazırlayaraq
              onları süni intellekt, kvant hesablamaları, blok kodlaşdırma və
              digər qabaqcıl texnologiyalarla tanış edir. TechBridge ilə
              gələcəyin texnologiyalarını kəşf edin və innovasiyanın bir hissəsi
              olun!
            </p>
          </div>

          {/* Sağ tərəf - Şəkil + Slider */}
          <div className="lg:w-1/2">
            <div className="border-[2px] border-[#D7BFFF] rounded-2xl p-3">
              <img
                src={TeamImg} // şəkil yolunu uyğunlaşdır
                alt="Komanda"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </motion.section>

      {/*  Bizim dərslərimiz */}
      <section className="py-25 px-8 max-w-[1600px] mx-auto">
        <h2 className="text-6xl font-bold text-start text-[#08244E] mb-15">
          Bizim dərslərimiz
        </h2>
        <motion.div
          variants={animation}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-30"
        >
          {courses.map((course, index) => (
            <motion.div
              initial="initial"
              variants={fadeInAnimationVariants}
              key={index}
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.1 }}
              className={`relative rounded-[30px] p-15 text-[#08244E] font-verdana ${course.color} flex flex-col items-start hover:shadow-md transition-shadow duration-200`}
            >
              <img
                src={course.image}
                alt={course.title}
                className={`absolute bottom-0 ${course.position} right-0 mb-4 object-cover rounded-full`}
              />
              <h3 className="text-[28px] mb-4 font-bold">{course.title}</h3>
              <p className="text-[20px] mb-15 text-[#08244ECF] w-[400px]">
                {course.description}
              </p>
              <motion.button
                onClick={() => navigate("/educationpage")}
                whileTap={{ scale: 0.7 }}
                className="bg-white italic text-[#08244E] py-2 px-7 rounded-[23px] text-[18px] font-bold hover:bg-gray-200 transition cursor-pointer"
              >
                Keçid et
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="relative overflow-hidden max-w-[1660px] mx-auto h-[1000px] flex justify-center items-center">
        <div className="absolute w-full -z-10 felx justify-center items-center">
          <img
            src="src/assets/images/image 113.svg" // Replace with your wavy background image URL
            alt="Background"
            className="object-contain w-4/5 mx-auto"
          />
        </div>

        <section className="relative text-white w-full h-full">
          <div className="relative z-20 w-full h-full">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={` flex gap-8  rounded-lg justify-between ${
                  step.flex
                } text-center w-full h-fit absolute ${
                  index === 0
                    ? "left-0 top-[43%]"
                    : index === 1
                    ? "left-[60%] top-[25%]"
                    : "left-[45%] top-[60%]"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className={`flex ${
                    index === 0
                      ? "items-center"
                      : index === 1
                      ? "items-start"
                      : "items-end"
                  } w-1/4 ${index === 0 ? "flex-col-reverse" : "flex-col"}`}
                >
                  <div
                    className={`flex gap-7 ${
                      index === 0
                        ? "justify-center"
                        : index === 1
                        ? "justify-start"
                        : "justify-end"
                    } w-full`}
                  >
                    <p
                      className={`text-[#6C325B] font-bold text-[38px] mb-4 w-fit ${
                        index === 0 && "mr-10"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  <p
                    className={`text-lg text-[#08244E] font-medium tracking-[3px] ${
                      index === 0
                        ? "text-center"
                        : index === 1
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Akademik partnyorlar */}
      <section className="text-center py-8 overflow-hidden">
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-10">
          Akademik partnyorlar
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="w-[600px] flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-[350px] h-[150px] mb-2 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Xəbərlər & Tədbirlər */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-left py-8 w-[80%] flex flex-col mx-auto"
      >
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-12">
          Xəbərlər & Tədbirlər
        </h2>
        <div className="relative flex items-center justify-center overflow-hidden w-full ">
          <button
            className="absolute left-0 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
            onClick={prevSlide}
          >
            <img className="w-14" src={LeftScroolIcon} alt="LeftScroolIcon" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-[90%]">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-[100px]"
              style={{
                transform: `translateX(-${currentIndex.newsDataIndex * 52}%)`,
              }}
            >
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className="border-2 h-[450px] flex justify-between border-[#FE93A6] bg-[#FDF6F6] rounded-[30px] p-6 w-[75%] lg:w-[45%] flex-shrink-0 shadow-lg"
                >
                  <div className="w-1/2">
                    <h3 className="font-bold text-left text-[#6C325B] text-[26px]">
                      {news.title}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <img
                        className="w-8 h-6"
                        src={CalendarIcon}
                        alt="calendar icon"
                      />
                      <span className="text-[#000000] text-[20px] font-[600]">
                        {news.time}
                      </span>
                    </div>
                    <p className="text-black mt-2 text-left w-3/4 lg:w-full">
                      {news.description}
                    </p>
                  </div>
                  <div className="w-1/2 relative">
                    {news.image &&
                      news.image.map((img, index) => (
                        <img
                          src={img}
                          key={index}
                          alt="news"
                          className={`mt-4 rounded-lg ${
                            index === 0
                              ? "w-[200px] h-[200px] right-0"
                              : "w-[210px] top-[40%] left-[-20%]"
                          } absolute`}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
            onClick={nextSlide}
          >
            <img className="w-14" src={RightScroolIcon} alt="RightScroolIcon" />
          </button>
        </div>
      </motion.section>

      {/* Rəylər */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 w-[80%] flex flex-col mx-auto"
      >
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-12 text-center">
          Rəylər
        </h2>
        <div className="relative flex items-center justify-center overflow-hidden w-full ">
          <button
            className="absolute left-0 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
            onClick={testimonialsPrevSlide}
          >
            <img className="w-14" src={LeftScroolIcon} alt="LeftScroolIcon" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-[90%]">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-[100px] ml-[35px]"
              style={{
                transform: `translateX(-${
                  currentIndex.testimonialsIndex * 52
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex.testimonialsIndex;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                  >
                    <div className="absolute top-0 z-10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-40 rounded-full object-cover shadow-lg"
                      />
                    </div>

                    {/* Kartın özü */}
                    <div
                      className={`mt-[40px] pt-[80px] border h-[350px] flex flex-col items-center justify-center 
      border-[#FE93A6] rounded-[30px] p-6 w-[75%] lg:w-[600px] flex-shrink-0 
      shadow-lg transition-all duration-300 ${
        isActive ? "bg-[#FFF7C2]" : "bg-[#E6FAFF]"
      }`}
                    >
                      <p className="text-[#6C325B] font-semibold text-[26px] mt-8">
                        {testimonial.name}
                      </p>
                      <span className="text-[20px] text-[#08244E] text-center mt-2">
                        "{testimonial.text}"
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="absolute right-0 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
            onClick={testimonialsNextSlide}
          >
            <img className="w-14" src={RightScroolIcon} alt="RightScroolIcon" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
