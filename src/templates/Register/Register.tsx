import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useSignup } from "@/services/signup/hooks/useSignup";
import { SignupDTO } from "@/types/signup";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";

export function Register(): JSX.Element {
  const { mutate, isLoading, isSuccess } = useSignup();
  const [fetchData, setFetchData] = useState<SignupDTO>({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    if (isSuccess) {
      Router.push("/signin");
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
      label: "Username",
      type: "text",
      name: "username",
      value: fetchData.username,
    },
    {
      id: 3,
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
        <h1 className="text-2xl">Create an account</h1>
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
          <Button type="submit" isLoading={isLoading} className="w-11/12 mt-8">
            Continue
          </Button>
        </form>
        <p
          className="self-start pl-5 text-sm text-link-color cursor-pointer pt-3"
          onClick={() => Router.push("/signin")}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}
