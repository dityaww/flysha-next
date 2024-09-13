"use client";

import { FC } from "react";
import { ActionResult, handleSignIn } from "./action";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormSigninProps {}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      variant="default"
      className="w-full"
    >
      {pending ? 'Loading..' : 'Submit'}
    </Button>
  );
};

const FormSignIn: FC<FormSigninProps> = ({}) => {
  const [state, formAction] = useFormState(handleSignIn, initialFormState);

  console.log(state);

  return (
    <div className="w-full h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {state.errorTitle !== null && (
          <div className="mx-auto my-7 bg-red-500 w-[24rem] text-white p-4 rounded-md">
            <div className="font-bold pb-1">Error Validation</div>
            <ul className="list-disc list-inside">
              {state.errorDesc?.map((value, index) => (
                <li key={index} className="text-sm">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={formAction} className="space-y-6">
            <Input type="email" placeholder="Email.." name="email" />
            <Input type="password" placeholder="Password.." name="password" />

            <SubmitButton />

          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
