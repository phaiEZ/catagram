import { Profile } from "./Profile";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import { Image } from "./Image";
export const CatProfile = () => {
  return (
    <div className="flex flex-col p-12 gap-8">
      <div className="flex flex-row gap-16">
        <div className="w-full">
          <Profile img="https://media.discordapp.net/attachments/1111754976969109564/1130140177491296468/IMG_1217.jpg?ex=66a10c0f&is=669fba8f&hm=f1a6929a532fc04c672e1040847cc13bc66a8d0d38cf37c6caafa519c05d9fe0&=&format=webp&width=507&height=676" />
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
              <div className="bg-pink-400 h-2.5 rounded-full w-[50%]"></div>
            </div>
          </div>
          <div>
            <div className="text-xl ">การปรับตัวเข้ากับผู้คน</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-pink-400 h-2.5 rounded-full w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1130140177491296468/IMG_1217.jpg?ex=66a10c0f&is=669fba8f&hm=f1a6929a532fc04c672e1040847cc13bc66a8d0d38cf37c6caafa519c05d9fe0&=&format=webp&width=507&height=676" />
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1113529746731569282/CAF0E0DD-B406-4CF0-8BD0-B57B1AA0270C.jpg?ex=66a294e4&is=66a14364&hm=5c1d33c9882a6a7aba7c00c76073ed43fd037d87a13ddb1c77055264ca1ab015&=&format=webp&width=380&height=675" />
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1130139273753022554/IMG_1577.jpg?ex=66a25cb7&is=66a10b37&hm=9ed0d75fd1910db95c779562fa8b3c53e06d12b644c2bb56c5db3c2672defc1f&=&format=webp&width=466&height=350" />
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1130139342912893018/IMG_1516.jpg?ex=66a25cc8&is=66a10b48&hm=ce5f044d7d5da0ddd11417994cd6735fc51f857a25f51db937c5fd78c1dce746&=&format=webp&width=263&height=350" />
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1130139599780450444/IMG_1439.jpg?ex=66a25d05&is=66a10b85&hm=64ef48e578a2cc86d0f9e346916f8467408ca5f82591c1d42d0a87e8665e67f1&=&format=webp&width=507&height=676" />
        <Image img="https://media.discordapp.net/attachments/1111754976969109564/1130144689610301511/IMG_1629.jpg?ex=66a261c3&is=66a11043&hm=f8baaaf582f71e7f1a4e5f59fa17606c56baa5fb977eb40f4e4022071630f441&=&format=webp&width=380&height=675" />
      </div>
    </div>
  );
};
