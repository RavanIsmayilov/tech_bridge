import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "../../utils/Animation";
import { fadeInAnimationVariants } from "../../utils/FadeInAnimation";
import WatchVideoIcon from "../../assets/icon/Watch Video Button.svg";
import LeftScroolIcon from "../../assets/icon/flat-color-icons_previous.svg";
import RightScroolIcon from "../../assets/icon/right-flat-color-icons_previous.svg";
import Quotation from "../../assets/icon/quotation.svg";
import HomeBg from "../../assets/images/home_bg.svg";
import AnimatedCounter from "../../components/general/AnimatedCounter";
import Image1 from "../../assets/images/pese-temayullu-sinifler.svg";
import Image2 from "../../assets/images/GDG-EVENTS.svg";
import Image3 from "../../assets/images/MediaMark.svg";
import CalendarIcon from "../../assets/icon/calendar.svg";
import BlobImg from "../../assets/images/Vector.svg";
import Tech4EquityTeam from "../../assets/images/Team - Tech4Equity.jpeg";
import about1 from "../../assets/images/about-1.jpeg";
import about2 from "../../assets/images/about-2.jpeg";
import news1 from "../../assets/images/news-1.jpeg";
import news2 from "../../assets/images/news-2.jpeg";
import news3 from "../../assets/images/news-3.jpeg";
import news4 from "../../assets/images/news-4.jpeg";
import Shortened from "../../components/general/Shortened";
import aboutellipse from "../../assets/images/aboutellipse.svg";
import subjectsimage1 from "../../assets/images/subjectsimage1.svg";
import subjectsimage2 from "../../assets/images/subjectsimage2.svg";
import subjectsimage3 from "../../assets/images/subjectsimage3.svg";
import subjectsimage4 from "../../assets/images/subjectsimage4.svg";
import support from "../../assets/images/image 113.svg";
// import axios, { isAxiosError } from "axios";

// interface countType {
//   studentCount: number;
//   parentCount: number;
//   regionCount: number;
// }

const HomePage: React.FC = () => {
  // const [value, setValue] = useState<countType>({
  //   parentCount: 0,
  //   regionCount: 0,
  //   studentCount: 0,
  // });

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
      image: subjectsimage1,
      position: "top-14 right-[-25px]",
    },
    {
      title: "Süni İntellekt",
      description:
        "Süni İntellekt, kompüterlərin öyrənib, qərar vermə qabiliyyətidir.",
      color: "bg-[#38CDFF]",
      image: subjectsimage2,
      position: "top-34",
    },
    {
      title: "Avadanlıq Laboratoriyası",
      description:
        "Avadanlıq Laboratoriyası, avadanlıqların test edildiyi məkandır.",
      color: "bg-[#FF5A50DB]",
      image: subjectsimage3,
      position: "top-28",
    },
    {
      title: "Kvant Hesablamaları",
      description:
        "Kvant hesablamaları kvant mexanikasına əsaslanan hesablama üsuludur.",
      color: "bg-[#CBF86D]",
      image: subjectsimage4,
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
      title: "Xirdalan 1 nomreli məktəbdə, səbəkə ilə baglı seminar keçirildi",
      time: "9 Aprel 2025",
      description: `İlk andan etibarən bizi parlaq təbəssümlər, maraqlı suallar və tükənməz enerji ilə qarşıladılar. İnteraktiv sessiyalar vasitəsilə texnologiyanın onların gələcəyini necə formalaşdıra biləcəyini və yeni arzulara necə ilham verə biləcəyini araşdırdıq 🤩💡
Biz sadəcə bilik paylaşmırıq — elə bir gələcək qururuq ki, burada hər bir uşağın həyatını dəyişə biləcək alətlərə çıxışı var.

Gəlin texnologiya körpülərini birlikdə qurmağa davam edək — məktəb-məktəb! 😍`,
      image: [news1, news2],
    },
    {
      title:
        "Robotics ilə Ümid Körpüsü: Xərçənglə Mübarizə Aparan Uşaqlarla Görüş",
      time: "6 Aprel 2025",
      description: `6 Aprel tarixində @gh_initiative ilə birgə Liv Bona Dea Hospitalında xərçənglə mübarizə aparan güclü uşaqlarla vaxt keçirdik. Onlarla keçirdiyimiz hər an sevgi, ümid və güc dolu idi. Onların gülümsəmələri bizə böyük motivasiya verdi!
@gh_initiative ‘ə bu dəyərli tədbirdə iştirak etməyə dəvət etdikləri üçün təşəkkür edirik!
Birlikdə daha çox həyatı dəyişdirmək və daha çox ürəyə toxunmaq üçün irəliləyirik!`,
      image: [news3, news4],
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
      name: "Baxşəliyeva Gülnar",
      text: `Salam, mən Tech4Equity layihəsinin üzvüyəm. Bu layihə haqqında 1 cümlə desəm oda mükəmməldir olardı. Çünki demək olar ki, texnologiya sahəsinə marağı, biliyi artıran əla layihədir. Hələ 10 günlük bootcamp peşəkar mütəxəssislər tərəfindən həyata keçirilərək daha maraqlı keçir. Qarşıda bizi hackaton gözləyir. Ümid edirəm daha maraqlı olacaq. Mən çox şey öyrəndim. Bundan çox razı qaldım. Əziyyəti olan hər kəsə təşəkkürlər. 😊`,
      quotation: Quotation,
    },
    {
      name: "Maqsudova Fidan",
      text: `Layihəniz çox möhtəşəmdir! Çox faydalıdır. Hər sessiya ayrı maraqlı və məlumatlandırıcıdır. Çox əla "Bootcamp" təşkil etmisiniz. Xüsusilə Elcan bəy və Elvin bəyə təşəkkürlər ✨`,
      quotation: Quotation,
    },
  ];

  // const getCountData = async () => {
  //   try {
  //     const res = await axios.get("http://89.116.39.179:8080/api/count");
  //     setValue(res.data);
  //   } catch (error) {
  //     if (isAxiosError(error)) {
  //       return error.response?.data.message;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getCountData();

  //   const interval = setInterval(() => {
  //     getCountData();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

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
          <h2 className="text-2xl md:text-[32px] font-bold text-[#fff] leading-tight">
            Yaradıcılığın məktəbinə <br className="hidden md:block" /> buradan
            keç!
          </h2>
          <div className="mt-4 flex flex-col justify-center items-center md:items-start gap-3">
            <motion.button
              onClick={() => navigate("/express")}
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
                <span className="text-white">Videonu izlə</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Info section */}
      <section className="bg-[#3B5D7D] px-8 py-2 flex items-center">
        <div className="w-full flex items-center text-white max-w-[1600px] mx-auto">
          <div className="xl:text-[36px] font-bold border-r-2 pr-7 h-[110px] flex items-center text-center">
            Burada rəqəmlər danışır:
          </div>
          <div className="flex items-center space-x-6 flex-wrap gap-5">
            <div className="flex items-center px-7">
              <span className="xl:text-[30px] font-bold mr-7">Tələbələr:</span>
              <span
                className={`bg-[#ED8116] text-white font-bold xl:text-[20px] xl:w-12 xl:h-12 w-8 h-8 flex justify-center items-center rounded-full`}
              >
                <AnimatedCounter count={82} />
              </span>
            </div>
            <div className="flex items-center px-7">
              <span className="xl:text-[30px] font-bold mr-7">
                Valideynlər:
              </span>
              <span
                className={`bg-[#78D148] text-white font-bold xl:text-[20px] xl:w-12 xl:h-12 w-8 h-8 flex justify-center items-center rounded-full`}
              >
                <AnimatedCounter count={0} />
              </span>
            </div>
            <div className="flex items-center px-7">
              <span className="xl:text-[30px] font-bold mr-7">Müəllimlər:</span>
              <span
                className={`bg-[#6BBDE5] text-white font-bold xl:text-[20px] xl:w-12 xl:h-12 w-8 h-8 flex justify-center items-center rounded-full`}
              >
                <AnimatedCounter count={5} />
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
        className="relative"
      >
        <img
          className="absolute top-0 left-0"
          src="src/assets/images/aboutframeup.svg"
          alt=""
        />
        <div className="max-w-[1660px] mx-auto relative flex items-center justify-between xl:pt-[120px] xl:pb-[200px] py-5 px-8">
          <div className="flex w-full justify-between overflow-hidden max-lg:flex-wrap">
            {/* Left Side (Image) */}
            <div className=" w-full xl:p-4 h-full flex justify-between gap-5 flex-wrap">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={about2} // Replace with your image URL
                alt="About Image"
                className="lg:absolute lg:top-[10%] lg:left-[10%] object-cover z-1 lg:w-[20%] w-full md:h-56 max-sm:h-80 lg:h-[332px] rounded-2xl max-lg:mb-15"
              />
              <img
                src={aboutellipse} // Replace with your image URL
                alt="About Image"
                className="absolute object-cover top-60 left-70 right-50 xl:flex hidden z-0"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={about1} // Replace with your image URL
                alt="About Image"
                className="lg:absolute lg:bottom-[10%]  lg:left-[25%] object-cover z-0 lg:w-[20%] w-full md:h-56 max-sm:h-80 lg:h-[332px] rounded-2xl"
              />
            </div>

            {/* Right Side (Text Content) */}
            <div className="w-full p-8 text-white font-verdana relative z-20">
              <h2 className="text-5xl font-bold mb-6 text-[#6C325B] text-center">
                Haqqımızda
              </h2>
              <p className="xl:text-[26px] text-base font-verdana text-black">
                Tech4Equity – tələbələri bilik, imkanlar və dəstəklə
                gücləndirməyi hədəfləyən bir icmadır. Missiyamız tələbələri
                yeniliklər, müsabiqələr və faydalı resurslar haqqında
                məlumatlandırmaq, həmçinin onların təhsildə inkişafına kömək
                etməkdir. Biz texnologiya təhsilində bərabər imkanlar yaratmağa
                və hər bir tələbəyə öyrənmək və inkişaf etmək üçün əlçatan mühit
                təqdim etməyə çalışırıq. Bu yolda siz təkcə bilik əldə
                etməyəcək, həm də bir çox uğurlara və mükafatlara sahib
                olacaqsınız!
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Komandamiz */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* Dekor elementləri */}
        {/* <div className="absolute top-10 left-0 w-40 h-40 bg-[#D6E6FF] rounded-br-[60px] z-0"></div> */}

        {/* 🔵 Əlavə edilən dekorativ blob şəkli */}
        <img
          src={BlobImg} // şəkil yolunu uyğun dəyiş
          alt="Decor"
          className="absolute bottom-0 left-0 w-[342px] h-[304px] z-0"
        />

        {/* Content */}
        <div className="relative py-16 px-6 md:px-24 overflow-hidden xl:h-[700px] max-w-[1660px] mx-auto">
          <div className="absolute bottom-10 left-1/3 w-[120px] h-[120px] border-[2px] border-[#6F74DD] border-dashed rounded-[20px] z-0"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 border-[2px] border-yellow-400 rotate-45 z-0"></div>{" "}
          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-10">
            {/* Sol tərəf - Mətn */}
            <div className="lg:w-[70%] flex justify-start items-center flex-col duration-200">
              <div className="w-[70%] flex justify-start items-center">
                <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#6C325B] text-left">
                  Komandamız
                </h2>
              </div>
              <p className="text-[#08244E] xl:text-[28px] sm:text-2xl max-sm:text-md leading-relaxed mx-auto lg:mx-0 w-[70%] h-[300px]">
                Bizim kurslarımız şagirdləri gələcəyin peşələrinə hazırlayaraq
                onları süni intellekt, kvant hesablamaları, blok kodlaşdırma və
                digər qabaqcıl texnologiyalarla tanış edir. TechBridge ilə
                gələcəyin texnologiyalarını kəşf edin və innovasiyanın bir
                hissəsi olun!
              </p>
            </div>

            {/* Sağ tərəf - Şəkil + Slider */}
            <div className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border-[2px] border-[#D7BFFF] rounded-2xl p-3"
              >
                <img
                  src={Tech4EquityTeam} // şəkil yolunu uyğunlaşdır
                  alt="Komanda"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </motion.div>
              <div className="flex justify-center gap-2 mt-4">
                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              </div>
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
              className={`relative rounded-[30px] xl:p-15 px-5 py-4 text-[#08244E] font-verdana ${course.color} flex flex-col items-start hover:shadow-md transition-shadow duration-200`}
            >
              <img
                src={course.image}
                alt={course.title}
                className={`absolute xl:${course.position} max-lg:w-30 max-lg:h-30 bottom-0 right-0 mb-4 object-cover rounded-full`}
              />
              <h3 className="xl:text-[28px] mb-4 font-bold">{course.title}</h3>
              <p className="xl:text-[20px] mb-15 text-[#08244ECF] xl:w-[400px]">
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
            src={support}
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
                    ? "left-0 top-[57%] -ml-6"
                    : index === 1
                    ? "left-[60%] top-[29%]"
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
                      className={`text-[#6C325B] font-bold lg:text-[38px] md:text-2xl mb-4 w-fit ${
                        index === 0 && "mr-10"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Akademik partnyorlar */}
      <section className="text-center py-8 overflow-hidden max-w-[1660px] mx-auto">
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
        className="text-left py-8 w-[80%] flex flex-col max-w-[1660px] mx-auto"
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
              className="flex transition-transform duration-500 ease-in-out gap-[70px]"
              style={{
                transform: `translateX(-${currentIndex.newsDataIndex * 52}%)`,
              }}
            >
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className="border-2 xl:h-[450px] flex-wrap flex justify-between border-[#FE93A6] bg-[#FDF6F6] rounded-[30px] p-6 w-[75%] max-md:w-full lg:w-[45%] flex-shrink-0 shadow-lg"
                >
                  <div className="xl:w-1/2 h-[300px]">
                    <h3 className="font-bold text-left text-[#6C325B] md:text-[26px]">
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
                      <Shortened shortText={news.description} />
                    </p>
                  </div>
                  <div className="xl:w-1/2 relative h-fit flex gap-5 flex-wrap">
                    {news.image &&
                      news.image.map((img, index) => (
                        <img
                          src={img}
                          key={index}
                          alt="news"
                          className={`mt-4 rounded-lg ${
                            index === 0
                              ? "xl:w-[180px] h-[180px] max-md:w-56 w-full xl:top-[50%] xl:right-0"
                              : "xl:w-[200px] h-[180px] max-md:w-56 w-full xl:top-[100px] xl:left-[10%]"
                          } xl:absolute `}
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
        className="py-20 w-[80%] flex flex-col max-w-[1660px] mx-auto"
      >
        <h2 className="text-[42px] font-bold text-[#C068A6] mb-12 text-center">
          Rəylər
        </h2>

        <div className="relative flex items-center justify-center overflow-hidden max-md:w-full">
          <button
            className="absolute left-0 bg-transparent text-[#C068A6] p-2 z-10 cursor-pointer"
            onClick={testimonialsPrevSlide}
          >
            <img className="w-14" src={LeftScroolIcon} alt="LeftScroolIcon" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden lg:w-[90%] w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(-${
                  window.innerWidth < 768
                    ? currentIndex.testimonialsIndex * 100
                    : currentIndex.testimonialsIndex * 50
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex.testimonialsIndex;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
                  >
                    <div
                      className={`mt-[40px] border h-[350px] flex flex-col items-center justify-center 
              border-[#FE93A6] rounded-[30px] p-6 w-full max-w-[600px]
              shadow-lg transition-all duration-300 ${
                isActive ? "bg-[#FFF7C2]" : "bg-[#E6FAFF]"
              }`}
                    >
                      <p className="text-[#6C325B] font-semibold text-[22px] xl:text-[26px] mt-8">
                        {testimonial.name}
                      </p>
                      <span className="text-[16px] xl:text-[20px] text-[#08244E] text-center mt-2">
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
