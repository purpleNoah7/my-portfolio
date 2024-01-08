import Image from "next/image";

export default function Avatar({ avatar }) {
  return (
    <Image
    width={100}
    height={100}
      className="rounded-full w-36 h-36"
      src={avatar}
      alt="Rounded avatar"
    ></Image>
  );
}
