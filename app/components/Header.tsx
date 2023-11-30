import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="flex items-center space-x-16 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Alexandre Cochet</h1>
      <ul className="flex space-x-16 font-bold text-gray-700">
        <li className="transition-colors hover:text-gray-900">
          <Link to="knowledges">Savoir-faire</Link>
        </li>
        <li className="transition-colors hover:text-gray-900">
          <Link to="projects">Réalisations</Link>
        </li>
        <li className="transition-colors hover:text-gray-900">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
