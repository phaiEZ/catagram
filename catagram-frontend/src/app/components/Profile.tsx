export const Profile: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className="w-[380px] object-cover">
      <div className="bg-[#00FFB2] shadow-lg w-[120px] h-[30px]  rotate-[-35deg] absolute z-40 left-[250px] top-[220px]"></div>
      <div className="bg-[#00FFB2] shadow-lg w-[120px] h-[30px]  rotate-[-40deg] absolute z-40 left-[600px] top-[520px]"></div>
      <div className="bg-white p-4 pb-14 shadow-lg rotate-[-2deg]">
        <img className="h-[300px] w-[360px] object-cover" src={img} />
      </div>
    </div>
  );
};
