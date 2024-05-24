import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-end ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
