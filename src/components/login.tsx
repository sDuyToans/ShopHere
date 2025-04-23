import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@heroui/input";
interface IFormInput {
  firstName: string
  password: string
}
export default function LoginForm({setIsLoginRequested}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
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
      <input type="submit" value={"Submit"} className={"bg-[#DDF247] py-3 px-12 rounded-2xl cursor-pointer hover:opacity-60 transition font-light"} />
      <div>
        <p>Don't Have Account? <b className={"cursor-pointer"} onClick={() => setIsLoginRequested(false)}>Register</b></p>
      </div>
    </form>
  );
}
