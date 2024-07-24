export const Profile = () => {
  return (
    <div className="w-[380px] object-cover">
      <div className="bg-[#00FFB2] shadow-lg w-[120px] h-[30px]  rotate-[-35deg] absolute z-40 left-[250px] top-[220px]"></div>
      <div className="bg-[#00FFB2] shadow-lg w-[120px] h-[30px]  rotate-[-40deg] absolute z-40 left-[600px] top-[520px]"></div>
      <div className="bg-white p-4 pb-14 shadow-lg rotate-[-2deg]">
        <img
          className="h-[300px] w-[360px] object-cover"
          src="https://media.discordapp.net/attachments/1111754976969109564/1130140177491296468/IMG_1217.jpg?ex=66a10c0f&is=669fba8f&hm=f1a6929a532fc04c672e1040847cc13bc66a8d0d38cf37c6caafa519c05d9fe0&=&format=webp&width=507&height=676"
        />
      </div>
    </div>
  );
};
