import Image from "next/image";

function Loading() {
  return (
    <div className="h-[100vh] flex items-center justify-center  flex-col ">
      <Image
        src={
          "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnRhMmZsd2hlMTRrbThhNzVtZm1haWNxc3d1bWI0dW9uamtmcHc3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VseXvvxwowwCc/giphy.gif"
        }
        alt="Loading..."
        height={100}
        width={100}
        className="h-[150px] w-auto"
      />
      <p className="text-white font-[500] font-serif text-lg mt-[-30px]">
        Unveiling secrets..., Conjuring a tale of medieval mystique,
        <br />
        mythological wonder, and futuristic anticipation...
      </p>
    </div>
  );
}

export default Loading;
