import type { FC } from "react";
import FormAirplane from "../components/form-airplane";

// interface CreateAirplaneProps {

// }

const CreateAirplanePage: FC = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Add Data Airplane</div>
      </div>

      <FormAirplane type="ADD" />
    </div>
  );
};

export default CreateAirplanePage;
