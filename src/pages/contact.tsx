import { Image } from "@heroui/image";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default.tsx";
import { ContactUsHelp } from "@/pages/help.tsx";

export default function ContactUsPage() {
  return (
    <DefaultLayout>
      <FormContact />
      <ContactUsHelp/>
    </DefaultLayout>
  );
}

function FormContact() {
  return (
    <div className={"border-1 p-4 md:p-6 flex flex-col md:flex-row gap-6 mb-[40px]"}>
      <Image alt={"Contact"} src={"/contact/contact_img.png"} />
      <div className={"flex flex-col gap-6"}>
        <Breadcrumbs>
          <BreadcrumbItem>Help</BreadcrumbItem>
          <BreadcrumbItem>Contact Us</BreadcrumbItem>
        </Breadcrumbs>
        <h3 className={"font-bold text-2xl"}>Contact Us</h3>
        <p>Fill out the form and the team will try to get back to you shorty</p>
        <div className={"flex flex-col gap-6"}>
          <div
            className={"grid grid-cols-1 gap-4 md:grid-cols-2"}
          >
            <Input label={"First Name"} type={"text"} />
            <Input label={"Last Name"} type={"text"} />
            <Input label={"Phone Number"} type={"text"} />
            <Input label={"Email"} type={"email"} />
          </div>
          <Textarea label={"Message"} type={"text"} />
          <Button className={"bg-[#DDF247] rounded-full p-2bvv"}>Submit Form</Button>
        </div>
      </div>
    </div>
  );
}
