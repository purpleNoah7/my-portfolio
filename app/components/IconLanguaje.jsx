import Image from "next/image";

export const IconLanguaje = ({ language }) => {
  console.log(language, 'language');
  return (
    <span
      class={`flex gap-x-2 rounded-full text-xs bg-[#242938] items-center justify-center text-white py-1 px-2 border border-white/10`}
    >
      <img src={language.icon} width={16} height={16} alt={language.name} />
      {language.name}
    </span>   
  );
};
