"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { RegisterFormSchema } from "@/models";
// import { authService } from "@/services/appwrite/auth";
import useBoundStore from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type FormInput = z.infer<typeof RegisterFormSchema>;

export default function RegisterForm() {
  const form = useForm<FormInput>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setIsLoggedIn } = useBoundStore();

  const router = useRouter();

  useEffect(
    // useCallback(() => {
    () => {
      if (
        form.formState.dirtyFields.username &&
        form.formState.dirtyFields.email &&
        form.formState.dirtyFields.password
      ) {
        setButtonDisabled(false);
      } else setButtonDisabled(true);
    },
    // }, [buttonDisabled, setButtonDisabled, form.formState.dirtyFields]),
    [form.formState.isDirty === true]
  );

  function onSubmit(values: FormInput) {
    // console.log(values);
  }

  // const signup = async () => {
  //   try {
  //     const userData = await authService.createAccount(form.getValues());
  //     if (userData) {
  //       // TODO: implement toast for success
  //       setIsLoggedIn(true);
  //       router.push("users/userid/dashboard");
  //     }
  //   } catch (error) {
  //     printErrorMessage(error);
  //     // TODO: implement toast for errors and success
  //   }
  // };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[80%] space-y-3 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="!my-8 flex justify-center">
          <Button type="submit" className="px-10" disabled={buttonDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
