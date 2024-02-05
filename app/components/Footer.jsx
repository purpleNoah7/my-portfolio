export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full relative h-20 bottom-0 ">
      <p className="text-white ">
        ©{new Date().getFullYear()} - Hecho con ❤️ por Leandro Jimenez
      </p>
    </footer>
  );
}
