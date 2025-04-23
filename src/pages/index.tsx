import DefaultLayout from "@/layouts/default";
import ProductsCard from "@/components/products_card.tsx";
import ButtonCustom from "@/components/button_custom.tsx";

const products = [
  {id: 1, img:"/home/Product_Image_1.png", name: "Nike Form", category: "Jackets", type: "Dri-FIT Hooded Versatile Jacket", price: 360},
  {id: 2, img:"/home/Product_Image_2.png", name: "Nike Dri-FIT One", category: "Pants", type: "Women's Ultra High-Waisted", price: 95},
  {id: 3, img:"/home/Product_Image_3.png", name: "Nike Utility Power", category: "Backpacks", type: "Training Duffel Bag", price: 60},
  {id: 4, img:"/home/Product_Image_4.png", name: "Nike Apex", category: "Hats", type: "Dri-FIT Bucket Hat", price: 25},
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={"w-full "}>
        <p className={"text-[30px] text-center font-semibold md:text-[50px] lg:text-[100px]"}>
          DISCOVER LIMITLESS
        </p>
        <p className={"text-center text-[13px] md:text-[15px] lg:text-[18px] mb-5"}>
          Where every product imaginable meets your needs.
          Explore a vast array of quality goods, discover unbeatable
          deals, and shop with confidence, all in one convenient location
        </p>
      </div>
      <div className={"w-full"}>
        <div className={"hidden md:block relative"}>
          <img
            alt={"carousel"}
            className={"w-full rounded-none"}
            src={"/home/carousel_lg.png"}
          />
          <ButtonCustom rightBottom={true} to={"#"}>
            Cinder Cone Jacket
          </ButtonCustom>
        </div>
        <img
          alt={"carousel"}
          className={"block md:hidden w-full rounded-none"}
          src={"/home/carousel.png"}
        />
      </div>
      <div className={"bg-[#DDF247] h-[50px] flex items-center w-full"}>
        <p className={"text-[10px] font-bold flex items-center justify-around w-full md:text-[22px] lg:text-[32px]"}>
          <p>GET ONE 20% OFF</p>
          <span><img src={"/home/Shape.png"} alt={"shape"}/></span>
          <p>GET ONE 20% OFF</p>
          <span><img src={"/home/Shape.png"} alt={"shape"}/></span>
          <p>GET ONE 20% OFF</p>
        </p>
      </div>
      <div className={"my-[40px]"}>
        <p className={"uppercase text-center font-semibold text-[12px] md:text-[22px] lg:text-[32px]"}>
          We're dedicated to providing you with a seamless and
          enjoyable shopping experience. Our platform brings together
          a diverse range of sellers and products
        </p>
      </div>
      <div className={"w-full"}>
        <div className={"relative"}>
          <img
            alt={"hero_2"}
            className={"hidden md:block w-full rounded-none"}
            src={"/home/Secondary_Hero.png"}
          />
          <ButtonCustom leftBottom={true} to={"#"}>
            Find Your Favorite
          </ButtonCustom>
          <img
            alt={"hero_2"}
            className={"block md:hidden w-full rounded-none"}
            src={"/home/Fashion_Promo_Section.png"}
          />
        </div>
      </div>
      <div className={"my-[40px]"}>
        <div className={"mb-5"}>
          <p className={"font-semibold md:text-2xl lg:text-3xl"}>Recommended For You</p>
          <div>

          </div>
        </div>
        <div className={"flex flex-col gap-4 md:flex-row"}>
          {
            products.map((product) =>
              <ProductsCard key={product.id} product={product} />
            )
          }
        </div>
      </div>

      <div className={"my-[40px]"}>
        <p className={"mb-5 font-semibold md:text-2xl lg:text-3xl"}>Our Best Collection</p>
        <div className={"flex gap-2 md:gap-4 lg:gap-8 "}>
          <div className={"relative hover:shadow-2xl transition"}>
            <img alt={"men"} src={"/home/Collection_Image_1.png"}/>
            <p className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-2xl lg:text-4xl"}>MEN</p>
            <ButtonCustom isShowContent={false} rightTop={true} to={"#"} ></ButtonCustom>
          </div>
          <div className={"relative hover:shadow-2xl transition"}>
            <img alt={"woman"} src={"/home/Collection_Image_2.png"}/>
            <p className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-2xl lg:text-4xl"}>WOMAN</p>
            <ButtonCustom isShowContent={false} rightTop={true} to={"#"} ></ButtonCustom>
          </div>
          <div className={"relative hover:shadow-2xl transition"}>
            <img alt={"kids"} src={"/home/Collection_Image_3.png"}/>
            <p className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-2xl lg:text-4xl"}>KIDS</p>
            <ButtonCustom isShowContent={false} rightTop={true} to={"#"} ></ButtonCustom>
          </div>
        </div>
      </div>

      <div className={"my-[40px]"}>
        <p className={"mb-5 font-semibold md:text-2xl lg:text-3xl"}>Express Your Fashion Fantasies</p>
        <div className={"flex flex-col gap-4 lg:flex-row lg:gap-8"}>
          <div className={"relative"}>
            <img alt={"collection5"} src={"/home/Collection_Image_5.png"}/>
            <ButtonCustom leftBottom={true} to={"#"} >
              Explore More
            </ButtonCustom>
          </div>
          <div className={"relative"}>
            <img alt={"collection4"} src={"/home/Collection_Image_4.png"}/>
            <ButtonCustom leftBottom={true} to={"#"}>
              Explore More
            </ButtonCustom>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
