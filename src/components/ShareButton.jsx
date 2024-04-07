import Image from "next/image";

const ShareButton = ({ story, el }) => {
  const handleClick = () => {
    const shareContent = `🗡️  ${story}  👼 `;
    switch (el?.name) {
      case "meta":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}&quote=${encodeURIComponent(shareContent)}`,
          "_blank"
        );
        break;
      case "X corp":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareContent
          )}`,
          "_blank"
        );
        break; 
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            shareContent 
          )}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <button onClick={handleClick}>
      <Image
        className="h-auto w-8"
        src={el?.icon}
        alt={el?.name}
        height={24}
        width={24}
      />
    </button>
  );
};

export default ShareButton;
