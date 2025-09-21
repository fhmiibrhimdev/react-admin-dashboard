import { Button } from "../../src/components/ui/button";
import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Selamat Datang di Dashboard Admin
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
        Ini adalah halaman utama (/) yang menampilkan file home.tsx
      </p>
      
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/about">Ke Halaman About (SPA)</Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link to="/welcome">Go to Welcome (SPA)</Link>
        </Button>
      </div>
    </div>
  )
}