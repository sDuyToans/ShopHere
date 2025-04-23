import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
export default function ProductsCard({product}) {
  return (
    <Card className="py-4 hover:scale-[105%] hover:z-10 hover:shadow-lg transform hover:cursor-pointer transition">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={product.img}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col lg:gap-2">
        <small className="text-default-500 w-[50%] md:w-[50%] text-[8px] md:text-[10px] lg:text-[16px] border-1 text-center rounded-2xl p-[8px]">{product.category}</small>
        <h4 className="font-bold text-large text-[10px] md:text-[14px] lg:text-xl">{product.name}</h4>
        <small className="text-tiny uppercase font-light text-8px md:text-[9px] lg:text-[14px]">{product.type}</small>
        <small className="text-[12px] md:text-[14px] lg:text-xl font-bold text-default-800">${product.price}</small>
      </CardBody>
    </Card>
  );
}
