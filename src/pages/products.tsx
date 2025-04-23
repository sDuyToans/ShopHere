import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { BsFilter } from "react-icons/bs";

import ProductsCard from "@/components/products_card.tsx";
import DefaultLayout from "@/layouts/default";

const products = [
  {
    id: 1,
    img: "/products/Product_Image_1.png",
    name: "Nike Form",
    category: "Jackets",
    type: "Dri-FIT Hooded Versatile Jacket",
    price: 360,
  },
  {
    id: 2,
    img: "/products/Product_Image_2.png",
    name: "Nike Dri-FIT One",
    category: "Pants",
    type: "Women's Ultra High-Waisted",
    price: 95,
  },
  {
    id: 3,
    img: "/products/Product_Image_3.png",
    name: "Nike Utility Power",
    category: "Backpacks",
    type: "Training Duffel Bag",
    price: 60,
  },
  {
    id: 4,
    img: "/products/Product_Image_4.png",
    name: "Nike Apex",
    category: "Hats",
    type: "Dri-FIT Bucket Hat",
    price: 25,
  },
  {
    id: 5,
    img: "/products/Product_Image_5.png",
    name: "Nike Tour",
    category: "Pants",
    type: "Pocket Slim Golf Trousers",
    price: 300,
  },
  {
    id: 6,
    img: "/products/Product_Image_6.png",
    name: "Nike Club",
    category: "Shorts",
    type: "Men's Short-Sleeve Polo",
    price: 38,
  },
  {
    id: 7,
    img: "/products/Product_Image_7.png",
    name: "Nike Sportswear",
    category: "Jackets",
    type: "Men's Full-Zip Hoodie",
    price: 120,
  },
  {
    id: 8,
    img: "/products/Product_Image_8.png",
    name: "Nike Sportswear",
    category: "T-Shirts",
    type: "Men's Oversized T-shirt",
    price: 35,
  },
];

const categories = [
  { id: 1, categoryName: "All" },
  { id: 2, categoryName: "Men" },
  { id: 3, categoryName: "Woman" },
  { id: 4, categoryName: "Kids" },
];

export default function ProductsPage() {
  const scrums: { id: number; title: string }[] = [
    { id: 1, title: "Collection" },
    { id: 2, title: "Clothing" },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full">
          <HeaderProduct title={"PRODUCT COLLECTIONS"} scrums={scrums} />
          <div>
            <div
              className={"flex justify-between items-center font-semibold mt-4"}
            >
              <div className={"flex gap-2"}>
                {categories.map((category) => (
                  <p
                    key={category.id}
                    className={
                      "border text-[12px] md:text-[16px] py-1 px-6 rounded-2xl border-default-200 transition hover:bg-[#DDF247] hover:cursor-pointer"
                    }
                  >
                    {category.categoryName}
                  </p>
                ))}
              </div>
              <div className={"hidden md:block md:flex md:gap-2 md:w-[300px]"}>
                <p
                  className={
                    "flex items-center w-[200px] border text-[12px] md:text-[16px] py-1 px-6 rounded-2xl border-default-200 transition hover:bg-[#DDF247] hover:cursor-pointer"
                  }
                >
                  <span className={"text-[12px] font-light"}>Show Filter</span>
                  <BsFilter />
                </p>
                <Select placeholder={"Sort By"}>
                  <SelectItem>Price</SelectItem>
                </Select>
              </div>
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"}>
              {products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </div>
            <LoadMoreButton />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

function LoadMoreButton() {
  return (
    <div className={"w-full flex justify-center mt-6"}>
      <Button
        className={
          "uppercase font-semibold md:px-[40px] md:py-[22px] lg:px-[60px] lg:py-[25px] bg-[#DDF247] hover:opacity-50 transition"
        }
      >
        Load more
      </Button>
    </div>
  );
}

function HeaderProduct({ title, scrums }: { title: string }) {
  return (
    <>
      <div className={"hidden md:flex md:justify-center"}>
        <Breadcrumbs>
          {scrums.map((scrum) => <BreadcrumbItem key={scrum.id} title={scrum.name} />)}
        </Breadcrumbs>
      </div>
      <div className={"w-full flex justify-start md:justify-center mt-4"}>
        <h1 className={"font-bold text-sm md:text-2xl lg:text-4xl"}>{title}</h1>
      </div>
    </>
  );
}
