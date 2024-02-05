export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full absolute bottom-0 ">
      <p className="text-white text-xs">
        ©{new Date().getFullYear()} - Hecho con ❤️ por Leandro Jimenez
      </p>
    </footer>
  );
}
