"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { LuLogOut } from "react-icons/lu";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { logoutAction } from "@/lib/actions/auth.actions";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Efecto para sincronizar con la clase 'dark' en el elemento html
  useEffect(() => {
    if (!mounted) return;

    const htmlElement = document.documentElement;

    // Sincronizar next-themes con la clase 'dark' en el html
    if (resolvedTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [resolvedTheme, mounted]);

  // Evita renderizar hasta que esté montado en el cliente
  if (!mounted) {
    return (
      <header className="w-full flex items-center justify-between h-12 mb-0">
        <h1
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >{`<TodoApp/>`}</h1>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10"></div>
          <div className="w-10 h-10"></div>
        </div>
      </header>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);

    const htmlElement = document.documentElement;
    if (newTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  return (
    <header
      className="w-full flex items-center justify-between h-12 mb-0 border-b-2"
      style={{ borderColor: "var(--color-accent)" }}
    >
      {/* Logo / título */}
      <h1
        className="text-3xl sm:text-4xl font-bold transition-colors"
        style={{ color: "var(--color-accent)" }}
      >
        {`<TodoApp/>`}
      </h1>

      {/* Botones */}
      <div className="flex items-center gap-4">
        {/* Toggle Theme */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="btn btn-ghost btn-circle transition-all"
          style={{ color: "var(--color-accent) !important" }}
        >
          {isDark ? (
            <IoIosSunny className="h-6 w-6 text-yellow-500 transition-transform duration-300 hover:rotate-180" />
          ) : (
            <IoIosMoon className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
          )}
        </button>

        {/* Logout */}
        <form action={logoutAction}>
          <button
            type="submit"
            aria-label="Logout"
            className="btn btn-ghost btn-circle transition-all"
            style={{ color: "var(--color-accent) !important" }}
          >
            <LuLogOut className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
          </button>
        </form>
      </div>
    </header>
  );
}
