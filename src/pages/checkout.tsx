import DefaultLayout from "@/layouts/default.tsx";
import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { Button } from "@heroui/button";

const shippingMethods = [
  {id: 1, name: "Standard Price", price: 5.99},
  {id: 2, name: "Express Shipping", price: 5.99},
  {id: 3, name: "Overnight Shipping", price: 24.99}
]

export default function CheckoutPage(): JSX.Element {
  return (
    <DefaultLayout>
      <section className={"w-full md:w-full lg:w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-6"}>
        <div className={"flex-1 flex flex-col gap-7"}>
          <div className={"flex flex-col gap-5"}>
            <p className={"text-lg font-bold"}>
              How would you like to get your order?
            </p>
            <Select className={"w-full"} label={"Shipping Method"} id="shipping-method">
              {shippingMethods.map((method) => (
                <SelectItem key={method.id}>{method.name}</SelectItem>
              ))}
            </Select>
          </div>

          <div className={"flex flex-col gap-4"}>
            <p className={"text-lg font-bold"}>
              Enter your name and address
            </p>
            <Input label={"First Name"}/>
            <Input label={"Last Name"}/>
            <Input label={"Address Line"}/>
            <div className={"flex gap-4"}>
              <Input label={"Post Code"}/>
              <Input label={"City"}/>
            </div>
            <div className={"flex gap-4"}>
              <Input label={"State/Province"}/>
              <Input label={"Country"} value={"Canada"} />
            </div>
            <div className={"flex flex-col gap-1"}>
              <div className={"flex gap-2"}>
                <Checkbox defaultSelected={true}/>
                <span>Save this address to my profile</span>
              </div>
              <div className={"flex gap-2"}>
                <Checkbox defaultSelected={false}/>
                <span>Make this my preferred address</span>
              </div>
            </div>
          </div>

          <div className={"flex flex-col gap-4"}>
            <p className={"text-lg font-bold"}>
              What's your contact information?
            </p>
            <Input label={"Email"}/>
            <Input label={"Phone Number"}/>
            <div className={"flex gap-2"}>
              <Checkbox defaultSelected={false}/>
              <span>I have read and agree to the terms and conditions</span>
            </div>
          </div>
        </div>
        <div className={"flex-1 flex flex-col-reverse md:flex-col gap-5"}>
          <h2 className={"font-bold text-xl"}>Summary</h2>
          <div>
            <div className={"border-b-1 py-3"}>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$398</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Costs</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Duties And Taxes</span>
                <span>-</span>
              </div>
            </div>
            <div className={"border-b-1 py-3"}>
              <div className="flex justify-between">
                <span>Total</span>
                <span>$403</span>
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-5"}>
            <p className={"font-bold text-xl"}>Arrives Sun, Apr 28 - Fri, May 3</p>
            <div className={"flex gap-4 items-center"}>
              <img alt={"Product 1"} src={"/checkout/product_1.png"}/>
              <div>
                <h4 className={"font-bold"}>Nike Form</h4>
                <p>Dri-FIT Hooded Versatile Jacket</p>
                <p>Qty 1</p>
                <p>Black</p>
                <p>Size L</p>
                <p className={"fontbold"}>$360</p>
              </div>
            </div>
            <div className={"flex gap-4 items-center"}>
              <img alt={"Product 2"} src={"/checkout/product_2.png"}/>
              <div>
                <h4 className={"font-bold"}>Nike Club</h4>
                <p>Men's Short-Sleeve Polo</p>
                <p>Qty 1</p>
                <p>While</p>
                <p>Size M</p>
                <p className={"fontbold"}>$38</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-3"}>
          <Button className={"w-full"}>
            Continue
          </Button>
        </div>

      </section>
    </DefaultLayout>
  );
}
