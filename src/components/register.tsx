import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@heroui/input";
interface IFormInput {
  firstName: string
  password: string
}
export default function RegisterForm({setIsLoginRequested}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col items-center justify-center gap-6 mt-6"}>
      <Controller
        name="username"
        control={control}
        render={({ field }) =>
          <Input {...field} label={"Username"} type={"text"} />}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) =>
          <Input {...field} label={"Password"} type={"password"} />}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) =>
          <Input {...field} label={"Confirm Password"} type={"password"} />}
      />
      <input type="submit" value={"Submit"} className={"bg-[#DDF247] py-3 px-12 rounded-2xl cursor-pointer hover:opacity-60 transition font-light"} />
      <div>
        <p>Have Account? <b className={"cursor-pointer"} onClick={() => setIsLoginRequested(true)}>Login</b></p>
      </div>
    </form>
  );
}
