import { Profile } from "./Profile";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import { Image } from "./Image";
import { FaFacebook, FaHeart } from "react-icons/fa6";
import { LuCat } from "react-icons/lu";
import { PiCatDuotone } from "react-icons/pi";
import { MeowCardBtn } from "./MeowCardBtn";
import { LikeBtn } from "./LikeBtn";
export const CatProfile = () => {
  return (
    <div className="flex flex-col p-12 gap-8 z-30">
      <div className="flex flex-row gap-8 ">
        <div className=" ">
          <Profile img="https://media.discordapp.net/attachments/1111754976969109564/1130140177491296468/IMG_1217.jpg?ex=66a10c0f&is=669fba8f&hm=f1a6929a532fc04c672e1040847cc13bc66a8d0d38cf37c6caafa519c05d9fe0&=&format=webp&width=507&height=676" />
        </div>

        <div className="flex flex-col gap-4 w-full pt-8">
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-full">
              <div className="font-kanit font-bold text-4xl text-[#000000] ">
                Makima (มากิ)
              </div>
              <div className="font-kanit font-bold text-2xl text-[#D9D9D9] ">
                SCOTTISH FOLD
              </div>
            </div>
            <div className="flex flex-col  font-kanit w-full ">
              <div>วันเกิด : 14/2/2022</div>
              <div>อายุ : 2 ขวบ</div>
              <div>เพศ : เมีย</div>
              <div>บ้านเกิด : ชลบุรี สกอติส</div>
            </div>
          </div>

          <div className="font-kanit w-full  text-[#000000] bg-white   border-2 p-2 my-2 rounded-md border-slate-100    ">
            มากิเป็นแมวสายพันธุ์สกอตติช โฟลด์ที่มีนิสัยน่ารักและเป็นมิตร
            เขาชอบที่จะมีส่วนร่วมในกิจกรรมต่างๆ รอบบ้าน
            มักจะตามเจ้าของไปทุกที่ด้วยความอยากรู้อยากเห็น
            ใบหูที่พับลงทำให้ดูมีเสน่ห์และน่ารักมากๆ
            มากิยังเป็นแมวที่ชอบการนอนหลับในที่นุ่มๆ และอบอุ่น
            แต่ก็ไม่ขี้เกียจเกินไปเพราะชอบเล่นกับของเล่นหรือแม้กระทั่งวิ่งเล่นไล่จับกับเจ้าของในบางครั้ง
            นอกจากนี้ มากิยังชอบการถูกลูบหัวและขน
            ทำให้เขารู้สึกผ่อนคลายและแสดงออกถึงความรักที่มีต่อเจ้าของ
          </div>
        </div>

        <div className="font-kanit  w-[700px] bg-[#FFF4F4] rounded-2xl p-8 flex flex-col gap-4">
          <div className="font-bold text-4xl">moew stat</div>
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
      <div>
        <div className="flex items-center gap-4 ml-8">
          <LikeBtn />

          <MeowCardBtn />
          <div className="font-kanit border-slate text-sm border-2 px-4 py-2.5 rounded-md flex items-center gap-2 bg-white">
            <FaFacebook className=" text-2xl text-blue-700" />
            <div>page name</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 ">
        <Image
          img="https://media.discordapp.net/attachments/1111754976969109564/1130139273753022554/IMG_1577.jpg?ex=66a25cb7&is=66a10b37&hm=9ed0d75fd1910db95c779562fa8b3c53e06d12b644c2bb56c5db3c2672defc1f&=&format=webp&width=466&height=350"
          description={"คุณมากิติดอยู่บนตู้"}
        />
        <Image
          img="https://media.discordapp.net/attachments/1111754976969109564/1113529746731569282/CAF0E0DD-B406-4CF0-8BD0-B57B1AA0270C.jpg?ex=66a294e4&is=66a14364&hm=5c1d33c9882a6a7aba7c00c76073ed43fd037d87a13ddb1c77055264ca1ab015&=&format=webp&width=380&height=675"
          description={"คุณมากิติดอยู่บนตู้"}
        />

        <Image
          img="https://media.discordapp.net/attachments/1111754976969109564/1130139342912893018/IMG_1516.jpg?ex=66a25cc8&is=66a10b48&hm=ce5f044d7d5da0ddd11417994cd6735fc51f857a25f51db937c5fd78c1dce746&=&format=webp&width=263&height=350"
          description={"คุณมากิติดอยู่บนตู้"}
        />
        <Image
          img="https://media.discordapp.net/attachments/1111754976969109564/1130139599780450444/IMG_1439.jpg?ex=66a25d05&is=66a10b85&hm=64ef48e578a2cc86d0f9e346916f8467408ca5f82591c1d42d0a87e8665e67f1&=&format=webp&width=507&height=676"
          description={"คุณมากิติดอยู่บนตู้"}
        />
        <Image
          img="https://media.discordapp.net/attachments/1111754976969109564/1130144689610301511/IMG_1629.jpg?ex=66a261c3&is=66a11043&hm=f8baaaf582f71e7f1a4e5f59fa17606c56baa5fb977eb40f4e4022071630f441&=&format=webp&width=380&height=675"
          description={"คุณมากิติดอยู่บนตู้"}
        />
      </div>
    </div>
  );
};
