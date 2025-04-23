import DefaultLayout from "@/layouts/default.tsx";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons.tsx";
import { Tab, Tabs } from "@heroui/tabs";
import { MdStoreMallDirectory } from "react-icons/md";

const locations = [
  {
    id: 1,
    name: "Java Mall",
    closeTime: "21:00",
    address: " Jl. MT. Haryono No.992-994, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50257"
  },
  {
    id: 2,
    name: "Paragon Mall",
    closeTime: "22:00",
    address: "Jl. Pemuda No.118, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132"
  },
  {
    id: 3,
    name: "Citraland Mall",
    closeTime: "22:00",
    address: "Jl. Anggrek Raya No.23-19, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241"
  },
  {
    id: 4,
    name: "DP Mall",
    closeTime: "22:00",
    address: "Jl. Pemuda No.150, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132"
  },
  {
    id: 5,
    name: "The Park",
    closeTime: "22:00",
    address: "Tawangmas, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144"
  }
];

export default function LocationPage() {
  return (
    <DefaultLayout>
      <section className={"w-full lg:w-9/12 m-auto"}>
        <h2 className={"font-bold text-xl mb-4"}>Find a Store</h2>
        <Input
          endContent={
            <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          labelPlacement="outside"
          placeholder="Enter Location, Canada"
          type="text"
          className={"md:hidden"}
        />
        <div className={"md:hidden flex justify-between items-center border-b-1 py-4 px-2"}>
          <div>
            {locations.length || 0} Stores Near You
          </div>
          <img alt={"filter"} src={"/location/Filter.png"} />
        </div>
        <div className={"w-full md:hidden"} id={"locationTabs"}>
          <Tabs variant={"underlined"} className={"w-full"}>
            <Tab title={"Map"}>
              <div>
                <img alt={"map"} src={"/location/map.png"} />
              </div>
            </Tab>
            <Tab title={"List"}>
              <div>
                {locations.map((location) => (
                  <div key={location.id} className={"flex flex-col gap-2 border-b-1 py-4"}>
                    <div className={"flex gap-2 items-center"}>
                      <MdStoreMallDirectory/>
                      <p>{location.name}</p>
                    </div>
                    <p>
                      {location.address}
                    </p>
                    <div className={"flex flex-row gap-2 items-start items-center"}>
                      <p className={"py-2 px-4 rounded-full text-green-700 "}>Open</p>
                      <li>Close at {location.closeTime} PM</li>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>

        </div>
        <div className={"hidden md:block md:flex md:justify-between md:gap-8"}>
          <div className={"flex-1"}>
            <Input
              endContent={
                <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              labelPlacement="outside"
              placeholder="Enter Location, Canada"
              type="text"
            />
            <div className={"flex justify-between items-center border-b-1 py-4 px-2"}>
              <div>
                {locations.length || 0} Stores Near You
              </div>
              <img alt={"filter"} src={"/location/Filter.png"} />
            </div>
            {locations.map((location) => (
              <div key={location.id} className={"flex flex-col gap-2 border-b-1 py-4"}>
                <div className={"flex gap-2 items-center"}>
                  <MdStoreMallDirectory/>
                  <p>{location.name}</p>
                </div>
                <p>
                  {location.address}
                </p>
                <div className={"flex flex-col md:flex-row gap-2 items-start md:items-center"}>
                  <p className={"py-2 px-4 rounded-full text-green-700 "}>Open</p>
                  <li><span>Close</span> at {location.closeTime} PM</li>
                </div>
              </div>
            ))}
          </div>
          <div className={"flex-1"}>
            <img alt={"map"} src={"/location/map.png"} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
