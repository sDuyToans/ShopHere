import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/icons.tsx";
import { Input } from "@heroui/input";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";

export default function DefaultLayout({
                                        children
                                      }: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className={"container mx-auto max-w-7xl px-6 flex-grow pt-16"}>
      <div className={"md:grid md:grid-cols-2 md:gap-4"}>
        <div className={"mb-8"}>
          <Link
            className="flex justify-start items-center gap-1 mb-4"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">FunPJ</p>
          </Link>
          <p className={"mb-6 uppercase md:w-9/12"}>join our ember for exclusive product and updates</p>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Email" type="email" className={"md:w-5/6 lg:w-4/5"}/>
          </div>
        </div>
        <div className={"md:flex md:gap-4 md:items-start md:justify-between md:mt-10"}>
          <div>
            <ul className={"flex flex-col gap-1 mb-2"}>
              <p className={"font-semibold mb-2"}>Navigation</p>
              <li className={"text-sm font-light"}>Collection</li>
              <li className={"text-sm font-light"}>Special offer</li>
              <li className={"text-sm font-light"}>Store</li>
              <li className={"text-sm font-light"}>Help</li>
            </ul>
          </div>
          <div>
            <ul className={"flex flex-col gap-1 mb-2"}>
              <p className={"font-semibold mb-2"}>About</p>
              <li className={"text-sm font-light"}>About us</li>
              <li className={"text-sm font-light"}>News</li>
              <li className={"text-sm font-light"}>Careers</li>
            </ul>
          </div>
          <div>
            <ul className={"flex flex-col gap-2 mb-2"}>
              <p className={"font-semibold mb-2"}>Contact Us</p>
              <li className={"text-sm font-light"}>+62 (321) 981-7617</li>
              <li className={"text-sm font-light"}>shophere@gmail.com</li>
              <div className={"flex gap-2"}>
                <RiTwitterFill />
                <AiFillInstagram />
                <AiFillYoutube />
              </div>
            </ul>
          </div>
        </div>
        <div className={"my-4 md:hidden"}>
          <hr />
        </div>
        <div className={"flex flex-col-reverse items-center gap-2 md:flex-row md:justify-between md:col-span-2"}>
          <div>© 2024 Nike, Inc. All Rights Reserved</div>
          <div className={"flex gap-4 md:gap-6 lg:gap-[100px]"}>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
