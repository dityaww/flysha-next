"use client";

import { ActionResult } from "@/app/dashboard/(auth)/login/form/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane } from "../lib/action";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending ? "Loading.." : "Submit"}
    </Button>
  );
};

const FormAirplane: FC = () => {
  const [state, formAction] = useFormState(saveAirplane, initialFormState);

  return (
    <form action={formAction} className="w-[30%] space-y-4">
      {state.errorTitle !== null && (
        <div className="mb-7 bg-red-500 text-white p-4 rounded-md">
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

      <div className="space-y-2">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input placeholder="Kode pesawat.." name="code" id="code" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input placeholder="Nama pesawat.." name="name" id="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        <Input
          placeholder="Upload foto.."
          name="image"
          id="image"
          type="file"
          required
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default FormAirplane;
