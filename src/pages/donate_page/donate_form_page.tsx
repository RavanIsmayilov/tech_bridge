import React, { useState } from "react";
import { Link } from "react-router-dom";

const DonateFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    product: "",
  });

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
    <section className=" min-h-screen flex flex-col ">
      <div className="h-[200px] bg-[#08244E] w-full flex items-center justify-center">
        <h1 className="text-[42px] font-bold text-white">
          Tech4Equity üçün bağış
        </h1>
      </div>
      <div className="w-[1600px] flex flex-col justify-between mx-auto py-[49px] gap-[120px]">
        <div className="flex flex-col gap-5">
          <p className="text-[#08244E] text-[36px] font-medium font-montserrat">
            Haqqımızda səhifəsinə daxil olun ki, ianənizin tələbələrə kompüter
            elmlərinə çıxış imkanı yaratmaqda necə kömək etdiyini öyrənəsiniz.
            <br />
          </p>
          <p className="text-[#08244E] text-[36px] font-medium font-montserrat">
            Çek, bank köçürməsi və ya səhmlərin ötürülməsi yolu ilə ianə etmək
            üçün bizimlə əlaqə saxlayın.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
        <h1 className="text-[36px] font-bold text-[#08244E] mb-4">Sizin məlumatlarınız</h1>
          <div className="flex items-center justify-between w-full gap-[124px]">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-[#1E3A8A] font-semibold mb-2"
              >
                Adınız <span className="text-red-600">*</span>
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

            <div className="mb-4 w-full">
              <label
                htmlFor="surname"
                className="block text-[#1E3A8A] font-semibold mb-2"
              >
                Soyadınız <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-[124px]">
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block text-[#1E3A8A] font-semibold mb-2"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
              />
            </div>
            
            <div className="mb-4 w-full">
              <label
                htmlFor="phone"
                className="block text-[#1E3A8A] font-semibold mb-2"
              >
                Telefon nömrəniz
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="product"
              className="block text-[#1E3A8A] font-semibold mb-2"
            >
              Məhsul <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-[#1E3A8A] rounded-lg focus:outline-none focus:border-[#FDD446]"
            />
          </div>

          <div className="flex justify-center gap-[312px] mt-25">
            <Link to="/">
              <button className="bg-[#FDD446] text-[#08244E] text-[28px] font-bold px-8 py-2 rounded-xl hover:bg-yellow-500 transition cursor-pointer">
                Bağış et
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonateFormPage;
