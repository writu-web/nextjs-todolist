"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

export default function Nav() {
  const pathName = usePathname();
  return (
      <ul className="flex">
        {nav.map((item) => {
          const isActive = pathName === item.href;
         return(
         <li key={item.name}>
            <Link className={isActive ?`pr-2 text-blue-500` :`p-2 text-black hover:text-blue-500 transition-colors`} href={item.href}>{item.name}</Link>
          </li>
          )
      })}
    </ul>
  )
}
 
   
