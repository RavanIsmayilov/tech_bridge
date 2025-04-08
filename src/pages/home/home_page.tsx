import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import WatchVideoIcon from "../../assets/icon/Watch Video Button.svg";
import MinisterIcon from "../../assets/icon/nazirliy icon.svg";
import ArtiIcon from "../../assets/icon/arti icon.svg";
import LeftScroolIcon from "../../assets/icon/Left Scroll- Button.svg";
import RightScroolIcon from "../../assets/icon/Right Scroll- Button.svg";
import CommentPhoto from "../../assets/icon/fotor-2024032323456 1.svg";
import Quotation from "../../assets/icon/quotation.svg";
import HomeBg from "../../assets/images/home_bg.svg";
import { motion } from "framer-motion";
import { animation } from "../../utils/Animation";
import { fadeInAnimationVariants } from "../../utils/FadeInAnimation";
import AnimatedCounter from "../../components/general/AnimatedCounter";

const HomePage: React.FC = () => {
  const partners = [
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
    { name: "ARTİ", image: ArtiIcon },
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
    { name: "ARTİ", image: ArtiIcon },
    { name: "Elm və Təhsil Nazirliyi", image: MinisterIcon },
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
    setCurrentIndex((prev) => (prev >= newsData.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 2 : prev - 1));
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

  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (i: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / 3; // Показываем 3 карточки
      const scrollAmount = i * cardWidth;

      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      setIndex(i);
    }
  };

  return (
    <>
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

      <section className="bg-[#3B5D7D] py-4 px-8 h-[232px] flex items-center">
        <div className="w-full flex items-center text-white max-w-[1600px] mx-auto">
          <div className="text-[42px] font-bold border-r-2 pr-7 h-[110px] flex items-center text-center">
            Burada rəqəmlər danışır:
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center px-7">
              <span className="text-[38px] font-bold mr-7">Tələbələr:</span>
              <span
                className={`bg-[#ED8116] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[38px] font-bold mr-7">Valideynlər:</span>
              <span
                className={`bg-[#78D148] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[38px] font-bold mr-7">Regionlar:</span>
              <span
                className={`bg-[#6BBDE5] text-white font-bold text-[20px] py-3 px-3 rounded-full`}
              >
                <AnimatedCounter />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-between pt-[120px] pb-[200px] px-8">
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
      </section>

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

      <section className="text-center py-8">
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-10">
          Akademik partnyorlar
        </h2>
        <div className="flex flex-wrap justify-around items-center space-x-8">
          {partners.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              key={index}
              className="w-[200px] flex flex-col items-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-[300px] mb-2"
              />
            </motion.div>
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
                  className="border-2 h-[450px] border-[#C068A6] rounded-[30px] p-6 w-[75%] lg:w-[45%] flex-shrink-0 shadow-lg"
                >
                  <h3 className="font-bold text-lg text-left">{news.title}</h3>
                  <p className="text-black mt-2 text-left">
                    {news.description}
                  </p>
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

      <div className="overflow-hidden overscroll-none w-full max-w-4xl mx-auto p-5">
        <div
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={containerRef}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[80%] sm:w-[272px] h-[280px] bg-[#F3AA4B] px-5 rounded-[18px] shadow-md snap-start flex-shrink-0 overflow-hidden"
            >
              <img
                src={Quotation}
                alt="Quotation"
                className="w-[60px] h-[60px] ml-[180px]"
              />
              <div className="flex justify-around items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full "
                />
                <h3 className="text-center font-[600] text-[18px] text-white">
                  {testimonial.name}
                </h3>
              </div>

              <div className="mt-[20px] ml-[10px]">
                <p className="text-left text-[13px] text-white font-[Arial]">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nöqtələr üçün Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.slice(0, testimonials.length - 2).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToIndex(dotIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === dotIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
