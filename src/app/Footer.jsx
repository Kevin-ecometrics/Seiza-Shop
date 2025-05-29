import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[url(/background.webp)] bg-cover bg-center text-[#8C5A2E] font-bold px-8 md:px-16 py-12 relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="border-t-2 border-[#8C5A2E] w-[95%] mx-auto absolute top-0 left-0 right-0"></div>

      {/* Contenedor principal en columna en mobile */}
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo_footer.svg"
            alt="Seiza Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Bloques de links en columna en mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 text-center md:text-left text-sm md:text-base">
          {/* Bloque 1 */}
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              Políticas de Compra
            </li>
            <li className="hover:underline cursor-pointer">
              Políticas de Envío
            </li>
            <li className="hover:underline cursor-pointer">
              Políticas de Privacidad
            </li>
          </ul>

          {/* Bloque 2 con separador visual solo en desktop */}
          <div className="relative md:pl-4">
            {/* Separador solo visible en desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-seiza-cuaternario rounded-full" />
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Soporte</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Contacto</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
