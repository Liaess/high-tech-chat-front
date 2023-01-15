import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useSignin } from "@/services/signin/hooks/useSignin";
import { SigninDTO } from "@/types/signin";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";

export function Login(): JSX.Element {
  const { mutate, isLoading, isSuccess } = useSignin();
  const [fetchData, setFetchData] = useState<SigninDTO>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess) {
      //todo: redirect to home
    }
  }, [isSuccess]);

  const data = [
    {
      id: 1,
      label: "Email",
      type: "email",
      name: "email",
      value: fetchData.email,
    },
    {
      id: 2,
      label: "Password",
      type: "password",
      name: "password",
      value: fetchData.password,
    },
  ];

  function handleMutate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate(fetchData);
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setFetchData({
      ...fetchData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-third-color-palette">
      <div className="sm:bg-second-color-palette text-center flex flex-col justify-center items-center text-white w-full sm:w-[30rem] sm:py-8 sm:px-2 rounded-lg">
        <h1 className="text-2xl">Welcome back!</h1>
        <h2
          className="text-base text-gray-400"
          dangerouslySetInnerHTML={{
            __html: "We're so excited to see you again!",
          }}
        ></h2>
        <form
          className="flex flex-col justify-center items-center w-full"
          onSubmit={handleMutate}
        >
          {data.map((item) => (
            <Input
              key={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              isDisabled={isLoading}
              type={item.label}
              handleChange={handleChange}
            />
          ))}
          {/*TODO: add link to forgot password page*/}
          <span className="self-start text-sm text-link-color pl-5 pt-2 cursor-pointer">
            {" "}
            Forgot your password?
          </span>
          <Button type="submit" isLoading={isLoading} className="w-11/12 mt-5">
            Log In
          </Button>
        </form>
        <p className="self-start pl-5 text-sm text-gray-400 pt-3">
          Need an account?{" "}
          <span
            className="text-link-color cursor-pointer"
            onClick={() => Router.push("/signup")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
