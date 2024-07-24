export const Image: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className="w-[340px] object-cover mx-auto">
      <div className="bg-white p-4 pb-14 shadow-lg ">
        <img className="h-[300px] w-[360px] object-cover" src={img} />
      </div>
    </div>
  );
};
