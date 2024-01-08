import Image from "next/image";

export default function Avatar({ avatar }) {
  return (
    <Image
      className="rounded-full w-36 h-36"
      src={avatar}
      alt="Rounded avatar"
    ></Image>
  );
}
