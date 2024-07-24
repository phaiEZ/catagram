import { Profile } from "./Profile";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import { Image } from "./Image";
export const CatProfile = () => {
  return (
    <div className="flex flex-col p-12 gap-8">
      <div className="flex flex-row gap-16">
        <div className="w-full">
          <Profile />
        </div>

        <div className="flex flex-col gap-8 w-full pt-4">
          <div className="flex flex-col  w-full">
            <div className="font-kanit font-bold text-3xl text-[#D9D9D9] ">
              scottish fold
            </div>
            <div className="font-kanit font-bold text-5xl text-[#000000] ">
              Makima (มากิ)
            </div>
          </div>
          <div className="font-kanit w-full h-[120px] text-[#000000] ">
            ไทยแลนด์ไฟลต์ อึมครึมซิลเวอร์เย้วล็อตแมนชั่น มอลล์แล็บ
            โปรโมเตอร์ท็อปบูต วีนซาร์ดีนเดโม สแล็กมิลค์ราเมนฮาร์ด
            คำสาปแอปเปิ้ลพิซซ่าม้าหินอ่อนโปรเจ็คท์ ต่อยอด บริกรแรงใจ สหัสวรรษ
            แฟร์เยอร์บีร่าวิว ต้าอ่วยโฟล์ค ความหมายแอนด์ โปรเจ็คท์เมจิค
            ยาวีหมิงควิก รอยัลตี้เวิร์กสังโฆไทม์ตรวจสอบ
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center gap-2 bg-pink-100 text-pink-800 text-md text-center font-medium me-2 px-2.5 py-0.5 rounded-full  dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              <LiaBirthdayCakeSolid /> 14/2/2022
            </div>
            <div className="flex justify-center items-center gap-2 bg-pink-100 text-pink-800 text-md text-center font-medium me-2 px-2.5 py-0.5 rounded-full  dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              อายุ : 2 ขวบ
            </div>
            <div className="flex justify-center items-center gap-2 bg-pink-100 text-pink-800 text-md text-center font-medium me-2 px-2.5 py-0.5 rounded-full  dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              เพศ : เมีย
            </div>
            <div className="flex justify-center items-center gap-2 bg-pink-100 text-pink-800 text-md text-center font-medium me-2 px-2.5 py-0.5 rounded-full  dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              พันธุ์ : สกอติส
            </div>
            <div className="flex justify-center items-center gap-2 bg-pink-100 text-pink-800 text-md text-center font-medium me-2 px-2.5 py-0.5 rounded-full  dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              บ้านเกิด : ชลบุรี
            </div>
          </div>
        </div>

        <div className="font-kanit  w-full bg-[#FFF4F4] rounded-2xl p-8 flex flex-col gap-4">
          <div className="font-bold text-3xl">moew stat</div>
          <div>
            <div className="text-xl ">ความเป็นมิตร</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div>
            <div className="text-xl ">ความกล้า</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[20%]"></div>
            </div>
          </div>
          <div>
            <div className="text-xl ">ความขี้เล่น</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div>
            <div className="text-xl ">การปรับตัว</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[30%]"></div>
            </div>
          </div>
          <div>
            <div className="text-xl ">การปรับตัวเข้ากับผู้คน</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
};
