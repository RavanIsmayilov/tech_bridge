import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import educationicon3 from "../../assets/images/education icon3.svg";
import educationicon2 from "../../assets/images/education icon2.svg";
import educationicon1 from "../../assets/images/education icon1.svg";

type Program = {
  title: string;
  description: React.ReactNode;
  bgColor: string;
  bgGradient: string;
  imageSrc: string;
  titleColor: string;
  imagePosition: string;
};

const programs: Program[] = [
  {
    title: "1-4 sinif proqramı",
    description:
      "Kodlaşdırma saatına başla, sonra Express Kurslarımızda blok əsaslı kodlaşdırma ilə daha dərindən tanış ol. Əyləncəli proqramlaşdırma mühümünüzdə yaradıcılığını sərbəst burax və öyrənmək üçün maraqlı videolar izle.",
    bgColor: "bg-red-500",
    bgGradient: "bg-gradient-to-r from-red-500 to-orange-400",
    imageSrc: educationicon3,
    titleColor: "text-[#FF4721]",
    imagePosition: "bottom-[-50px] right-[-15px]",
  },
  {
    title: "5-8 sinif proqramı",
    description:
      "Kodlaşdırma saatını sınadan keçir və ya öz tempinə uyğun tətilə, oyun və animasiya yaratmaq üçün kurslarımıza bax. Üstəlik, süni intellekt, proqramlaşdırma karyerası və daha çoxu haqqında öyrən!",
    bgColor: "bg-pink-500",
    bgGradient: "bg-gradient-to-r from-pink-500 to-purple-400",
    imageSrc: educationicon2,
    titleColor: "text-[#FF4F86]",
    imagePosition: "bottom-[-50px] right-[-15px]",
  },
  {
    title: "9-11 sinif proqramı",
    description: (
      <>
        Kodlaşdırma saatını sınadan keçir və ya öz tempinə uyğun tətilə, oyun
        yaratmağa kurslarımıza bax. Üstəlik, süni intellekt, proqramlaşdırma
        karyerası və daha çoxu haqqında <br />
        öyrən!
      </>
    ),
    bgColor: "bg-green-500",
    bgGradient: "bg-gradient-to-r from-green-500 to-teal-400",
    imageSrc: educationicon1,
    titleColor: "text-[#59B049]",
    imagePosition: "bottom-[-30px] right-[-15px]",
  },
];

const EducationPrograms: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold md:text-[33px] text-[28px] tracking-[-0.01em] text-[#08244E] text-left"
      >
        Hər kəs Kompüter Elmlərini öyrənə bilər
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-medium text-[16px] md:text-[18px] tracking-[-0.01em] text-[#3C3B3B] text-left"
      >
        Bu gündən proqramlaşdırmaya başla. Öyrənmək düşündüyündən daha asan və
        əyləncəlidir.
      </motion.p>

      <hr className="my-6 border-[#000]" />

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-bold md:text-[33px] text-[28px] tracking-[-0.01em] text-[#08244E] text-left"
      >
        Sənə ən uyğun öyrənmə imkanını kəşf et!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="font-medium text-[16px] md:text-[18px] tracking-[-0.01em] text-[#3C3B3B] text-left"
      >
        Maraqlı videolar, öz tempinə uyğun dərslər, proqramlaşdırma
        fəaliyyətləri və daha çoxu ilə kompüter elmləri dünyasını kəşf et –
        istənilən yaş və təcrübə səviyyəsi üçün!
      </motion.p>

      <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-[80px] gap-[60px] justify-center">
        {programs.map((program, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            key={index}
            className={`relative p-6 rounded-xl shadow-lg text-white ${
              program.bgGradient
            } flex flex-col items-start ${
              index === 2 ? "md:col-span-2 mx-auto w-full md:w-[500px]" : ""
            }`}
          >
            <h4
              className={`text-lg font-bold bg-white ${program.titleColor} rounded-[28px] px-3 py-1 inline-block`}
            >
              {program.title}
            </h4>
            <p className="mt-4 text-[14px] text-left">{program.description}</p>
            <button
              onClick={() => navigate("/express")}
              className="mt-6 px-4 py-1 bg-[#CEE9F6] text-[#3A3A3A] font-extrabold text-[15px] cursor-pointer"
            >
              Keçid et
            </button>
            <div
              className={`absolute ${program.imagePosition} w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-md`}
            >
              <img
                src={program.imageSrc}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationPrograms;
