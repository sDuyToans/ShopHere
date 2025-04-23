import DefaultLayout from "@/layouts/default.tsx";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { BiLocationPlus, BiPhone, BiSupport } from "react-icons/bi";

export default function HelpPage() {
  return (
    <DefaultLayout>
      <div className={"hidden md:flex md:justify-center"}>
        <Breadcrumbs>
          <BreadcrumbItem>Help</BreadcrumbItem>
          <BreadcrumbItem>FAQ</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <GetHelp />
      <ContactUsHelp />
    </DefaultLayout>
  );
}

function GetHelp() {
  const items = [
    {
      id: 1,
      title: "Dispatch & delivery",
      choices: [
        { id: 1, name: "How do I get free delivery on Shophere orders?", linkTo: "#" },
        { id: 2, name: "What are Shophere’s delivery options?", linkTo: "#" },
        { id: 3, name: "Can my Shophere order be dispatched internationally?", linkTo: "#" }
      ]
    },
    {
      id: 2,
      title: "Returns",
      choices: [
        { id: 1, name: "What is Shophere’s returns policy?", linkTo: "#" },
        { id: 2, name: "How do I return my Shophere order?", linkTo: "#" },
        { id: 3, name: "Where is my refund?", linkTo: "#" }
      ]
    },
    {
      id: 3,
      title: "Orders",
      choices: [
        { id: 1, name: "Where is my Shophere order?", linkTo: "#" },
        { id: 2, name: "Can I cancel or change my Shophere order?", linkTo: "#" },
        { id: 3, name: "What are Shophere payment options?", linkTo: "#" }
      ]
    },
    {
      id: 4,
      title: "Product info",
      choices: [
        { id: 1, name: "How do I get Shophere’s newest sneaker releases?", linkTo: "#" },
        { id: 2, name: "How do I find the right size and fit?", linkTo: "#" },
        { id: 3, name: "What is the Shophere By You personalisation policy?", linkTo: "#" },
        { id: 4, name: "Do Shophere shoes have a warranty?", linkTo: "#" }
      ]
    },
    {
      id: 5,
      title: "Corporate",
      choices: [
        { id: 1, name: "Where can I learn more about Shophere, Inc.?", linkTo: "#" },
        { id: 2, name: "What are Shophere’s delivery options?", linkTo: "#" },
        { id: 3, name: "Where is the Shophere store closest to me?", linkTo: "#" }
      ]
    }
  ];

  return (
    <>
      <h1 className={"font-bold text-2xl md:text-5xl md:text-center mt-4"}>GET HELP?</h1>
      <div
        className={"md:flex md:flex-col md:items-center md:justify-center mt-[15px] md:mt-[30px] lg:mt-[40px] md:border-b-1 md:pb-4"}>
        <p>Quick Action</p>
        <p>Answers to our most frequently asked questions are just one click away.</p>
      </div>
      <div className={"py-4"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
          {
            items.map((item, index) => (
              <div key={index} className={"border-1 p-4"}>
                <div className={"border-b-1 pb-4"}>
                  <p className={"pl-2"}>{item.title}</p>
                </div>
                <div className={""}>
                  <Listbox>
                    {item.choices.map((choice) => (
                      <ListboxItem key={choice.id}>
                        {choice.name}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export function ContactUsHelp() {
  const data = [
    {
      id: 1,
      title: "24/7 support",
      icon: <BiSupport />,
      descriptions: [{ id: 1, content: "Our dedicated support team is ready to help you anytime and anywhere" }]
    },
    {
      id: 2, title: "+62 (321) 981-7617", icon: <BiPhone />, descriptions: [
        { id: 1, content: "Products & Orders: 05:00 - 23:00, 7 days a week" },
        { id: 2, content: "Company Info : 09:00 - 18:00, Monday - Friday" }
      ]
    },
    {
      id: 3,
      title: "Find a Store",
      icon: <BiLocationPlus />,
      descriptions: [{ id: 1, content: "Navigating through our marketplace becomes a breeze" }]
    }
  ];
  return (
    <div className={"mb-[40px]"}>
      <h1 className={"font-bold text-2xl md:text-5xl md:text-center mt-4"}>Contact Us</h1>
      <div className={"md:border-b-1 md:pb-8"} />
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]"}>
        {
          data.map((item) => (
            <div key={item.id}>
              <div className={"border-1 p-4"}>
                <div className={"flex gap-2 justify-center items-center"}>
                  {item.icon}
                  <div className={"font-medium"}>
                    {item.title}
                  </div>
                </div>
                <div className={"flex flex-col"}>
                  {item.descriptions.map((description) => (
                    <div key={description.id}>
                      {description.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}