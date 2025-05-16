export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 container mx-auto px-3.5 md:px-0">
      <div>
        <img
          src="/assets/logo.png"
          alt="Rimac Seguros Logo"
          className="h-9 w-auto mr-2"
        />
      </div>
      <div className="flex gap-3 items-center font-sonoma text-grey-100">
        <span className="text-xs font-semibold hidden md:block">
          ¡Compra por este medio!
        </span>
        <img src="/assets/GlTelephoneSolid.svg" alt="telephone" />
        <p className="text-lg font-bold">(01) 411 6001</p>
      </div>
    </header>
  );
}
