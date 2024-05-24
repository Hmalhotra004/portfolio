import { header } from "@/lib/header";
import Link from "next/link";

const Header = () => {
  const layHeader = (data: { id: number; name: string; to: string }) => {
    return (
      <li
        className="mx-2"
        key={data.id}
      >
        <Link href={data.to}>{data.name}</Link>
      </li>
    );
  };

  return (
    <header className="flex items-end justify-center my-4 sticky">
      <nav className="border rounded-3xl">
        <ul className="flex items-end justify-end mx-4 text-lg ">{header.map(data => layHeader(data))}</ul>
      </nav>
    </header>
  );
};

export default Header;
