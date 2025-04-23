import DefaultLayout from "@/layouts/default.tsx";
import { useState } from "react";
import LoginForm from "@/components/login.tsx";
import RegisterForm from "@/components/register.tsx";

export default function AuthenticationPage() {
  const [isLoginRequested, setIsLoginRequested] = useState(true);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className=" w-full text-center justify-center flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div>
            <img
              alt={"Hero Img"}
              className="object-cover object-center object-center"
              src={"/login/Hero_Img.png"}
            />
          </div>
          <div className={"mt-4"}>
            <h1 className={"font-bold text-xl md:text-4xl lg:text-6xl"}>{isLoginRequested ? "WELCOME BACK" : "REGISTER"}</h1>
            <p className="text-[12px] font-light md:text-[14px] lg:text-[20px]">
              This is our dedication in serving customers,
              so that we can find out which customers are really interested in
            </p>
            {isLoginRequested
              ? <LoginForm setIsLoginRequested={setIsLoginRequested}/>
              : <RegisterForm setIsLoginRequested={setIsLoginRequested}/>}
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}
