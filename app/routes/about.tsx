import { Button } from "../../src/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tentang Kami - Dashboard Admin" },
    { name: "description", content: "Halaman tentang kami" },
  ];
}

export default function About() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Tentang Kami
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Ini adalah halaman About yang dibuat dengan React Router v7
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400">
            File ini ada di: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">app/routes/about.tsx</code>
          </p>
          
          <p className="text-gray-500 dark:text-gray-400">
            URL-nya akan jadi: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/about</code>
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/">Kembali ke Home (SPA)</Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/contact">Ke Contact (SPA)</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
