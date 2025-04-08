import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-[42px] font-bold text-center text-[#1E3A8A] mb-4">
          Xoş gəlmisiniz!
        </h1>
        <h2 className="text-3xl text-center text-[#1E3A8A] mb-8">
          Hesabınıza daxil olun
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="emailOrPhone"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              E-poçt ünvanını və ya telefon nömrəsini daxil et
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
          </div>

          <div className="mb-6 relative">
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

          <div className="flex items-center justify-center mb-6">
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
              Google ilə daxil ol
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
              Facebook ilə daxil ol
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#FDD446] text-[#08244E] font-bold text-lg px-8 py-2 rounded-lg hover:bg-yellow-500 transition w-full cursor-pointer"
          >
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
