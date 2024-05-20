import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Logo from "@public/assets/Logo.svg"
import Image from "next/image";
import "@/app/globals.css"
export function Navbar() {
  return (<>
  <div className="black-background text-white-color">
    <header
      className="flex h-20 w-full items-center justify-between container">
      <Link className="flex items-center" href="/">
        <Image width={136} height={59} src={Logo} alt="Company Logo"/>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link className="text-gray-50 hover:text-[#61BB46] transition-all" href="/">
          Home
        </Link>
        <Link className="text-gray-50 hover:text-[#61BB46] transition-all" href="/about">
          About Us
        </Link>
        <Link className="text-gray-50 hover:text-[#61BB46] transition-all" href="/services">
          Services
        </Link>
        <Link className="text-gray-50 hover:text-[#61BB46] transition-all" href="/contact">
          Contact Us
        </Link>
        <Link className="text-gray-50 hover:bg-[#731012] transition-all py-2 px-4 rounded-sm border" href="/apply">
          Search Jobs
        </Link>
        <Link className="text-gray-50 hover:text-[#61BB46] transition-all py-2 px-4 rounded-sm bg-[#731012]" href="/apply">
          Get Quote
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden bg-transparent border-none" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
          <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/">
          Home
        </Link>
        <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/about">
          About Us
        </Link>
        <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/services">
          Services
        </Link>
        <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/contact">
          Contact Us
        </Link>
        <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/apply">
          Search Jobs
        </Link>
        <Link className="text-gray-600 hover:text-[#61BB46] transition-all" href="/apply">
          Get Quote
        </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  </div>
    
  </>);
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function SchoolIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>)
  );
}
