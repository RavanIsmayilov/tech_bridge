import axios, { isAxiosError } from "axios";
import { ArrowLeft, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { animation } from "../../utils/Animation";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    password: string;
    username: string;
    duty: "valideyn" | "tələbə";
  }>({
    email: "",
    name: "",
    password: "",
    username: "",
    duty: "tələbə",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://89.116.39.179:8080/api/auth/register",
        formData
      );
      if (res.status === 200) {
        alert("Registered successfully");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.message;
      }
    }
    console.log(formData);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-[42px] font-bold text-center text-[#1E3A8A] mb-4">
          Xoş gəlmisiniz!
        </h1>
        <h2 className="text-3xl text-center text-[#1E3A8A] mb-8">
          Hesabınızı yaradın
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              E-poçt ünvanını və ya telefon nömrəsini daxil et
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              İstifadəçi adı seç
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              Şifrənizi daxil et
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 pr-10 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-[-2px] transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <img
                  src="src/assets/icon/showeye.svg"
                  alt=""
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src="src/assets/icon/hideeye.svg"
                  alt=""
                  className="w-6 h-6"
                />
              )}
            </span>
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="username"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              User name elave et
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 pr-10 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
          </div>

          <div className="mb-6 relative">
            <span
              onClick={() => setShowOption(!showOption)}
              className="text-[#1E3A8A] cursor-pointer capitalize font-semibold text-[15px] border rounded-lg px-2 flex items-center justify-center w-fit"
            >
              <span> {formData.duty}</span>
              <ChevronDown size={16} />
            </span>
            <AnimatePresence>
              {showOption && (
                <motion.div
                  key="dropdown" // vacib deyil, amma yaxşı praktika
                  variants={animation}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col bg-white shadow-md w-fit py-2 px-2 rounded-xl absolute z-10 mt-2"
                >
                  <span
                    className="cursor-pointer font-sans font-medium text-[#1E3A8A]"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, duty: "valideyn" }));
                      setShowOption(false);
                    }}
                  >
                    Valideyn
                  </span>
                  <hr />
                  <span
                    className="cursor-pointer font-sans font-medium text-[#1E3A8A]"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, duty: "tələbə" }));
                      setShowOption(false);
                    }}
                  >
                    Tələbə
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center mb-4">
            <hr className="border-t border-[#1E3A8A] w-2/5" />
            <p className="mx-4 text-[#1E3A8A] text-sm">və ya</p>
            <hr className="border-t border-[#1E3A8A] w-2/5" />
          </div>

          <div className="mb-4">
            <button
              type="button"
              className="bg-[#fbf8f8] text-[#6F6C6C] px-4 py-2 rounded-lg flex items-center gap-2 w-full justify-center cursor-pointer"
            >
              <img
                src="src/assets/icon/googleicon.svg"
                alt="Google Icon"
                className="w-5 h-5"
              />
              Google ilə qeydiyyatdan keç
            </button>
          </div>

          <div className="mb-6">
            <button
              type="button"
              className="bg-[#fbf8f8] text-[#6F6C6C] px-4 py-2 rounded-lg flex items-center gap-2 w-full justify-center cursor-pointer"
            >
              <img
                src="src/assets/icon/faceicon.svg"
                alt="Facebook Icon"
                className="w-5 h-5"
              />
              Facebook ilə qeydiyyatdan keç
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#FDD446] text-[#08244E] font-bold text-lg px-8 py-2 rounded-lg hover:bg-yellow-500 transition w-full cursor-pointer"
          >
            Qeydiyyatdan keç
          </button>
        </form>
        <Link
          to="/"
          className=" flex items-center justify-start gap-2 mt-5 rounded-xl hover:underline duration-300 p-3 text-[#08244E] transition-all font-semibold"
        >
          <ArrowLeft size={18} />
          Geri qayıt
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
