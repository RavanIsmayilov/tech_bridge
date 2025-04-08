import React from "react";
import { Link } from "react-router-dom";

const DonatePage: React.FC = () => {
  return (
    <section className=" min-h-screen flex flex-col ">
      <div className="h-[200px] bg-[#08244E] w-full flex items-center justify-center">
        <h1 className="text-[42px] font-bold text-white">
          Tech4Equity üçün bağış
        </h1>
      </div>
      <div className="w-[1300px] mx-auto text-center self-center my-auto">
        <p className="text-[#08244E] text-[36px] font-medium font-montserrat">
          Sizin Tech4Equity-yə etdiyiniz ianə, onun qlobal təsirini
          genişləndirmək üçün böyük imkanlar yaradır. Tech4Equity hər zaman
          pulsuz olacaq, lakin platformamızın inkişafı, süni intellekt və
          robototexnika sahələrində irəliləyişlər, eləcə də müasir tədris
          vasitələri və kurikulumların hazırlanması üçün səxavətli donorların
          dəstəyi lazımdır. Verdiyiniz hər cür dəstəyə görə sonsuz minnətdarıq!
        </p>
        <p className="text-[#08244E] text-[36px] font-medium font-montserrat">
          Verdiyiniz hər cür dəstəyə görə sonsuz minnətdarıq!
        </p>
        <div className="flex justify-center gap-[312px] mt-25">
          <Link to="/donateformpage">
            <button className="bg-[#FDD446] text-[#08244E] text-[28px] font-bold px-8 py-2 rounded-xl hover:bg-yellow-500 transition cursor-pointer">
              Bağış et
            </button>
          </Link>
          <Link to="/support">
            <button className="bg-[#FDD446] text-[#08244E] text-[28px] font-bold px-8 py-2 rounded-xl hover:bg-yellow-500 transition cursor-pointer">
              Dəstək al
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
