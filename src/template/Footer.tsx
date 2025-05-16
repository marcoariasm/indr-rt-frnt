export default function Footer() {
  return (
    <footer className="bg-grey-100">
      <div className="flex justify-between items-center container mx-auto h-[106px] px-3.5 md:px-0">
        <img
          src="/assets/Logo-dark.png"
          alt="Rimac Seguros Logo"
          className="h-[42px] w-auto"
        />
        <span className="font-sonoma text-sm text-grey-10">
          © 2023 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </footer>
  );
}
