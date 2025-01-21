import { useState } from "react";
import { Button, Steps } from "antd";
import { useForm } from "react-hook-form";
import PersonalInformation from "../components/form-steps/PersonalInformation";
import BusinessInformation from "../components/form-steps/BusinessInformation";
import WorkInformation from "../components/form-steps/WorkInformation";
import AccountInformation from "../components/form-steps/AccountInformation";
import IdentityVerification from "../components/form-steps/IdentityVerification";
import data from "../lib/formInformation.json";

const steps = [
  {
    title: "Personal",
    content: PersonalInformation,
  },
  {
    title: "Business",
    content: BusinessInformation,
  },
  {
    title: "Work",
    content: WorkInformation,
  },
  {
    title: "Account",
    content: AccountInformation,
  },
  {
    title: "Identity",
    content: IdentityVerification,
  },
];
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({});
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const next = (data) => {
    // Use `handleSubmit` to validate current step
    handleSubmit(() => {
      setDirection("next");
      setCurrent(current + 1); // Proceed to the next step only if valid
    })(data);
  };

  const prev = () => {
    setDirection("prev");
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const onSubmit = (data) => {
    if (current === steps.length - 1) {
      console.log("Form submitted:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Steps current={current} items={items} labelPlacement="vertical" />
      <div className="relative h-[25rem] my-8 overflow-x-hidden">
        <div className="relative w-full h-[25rem] overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute p-2 top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                index === current
                  ? "translate-x-0"
                  : index > current
                  ? direction === "next"
                    ? "translate-x-full"
                    : "-translate-x-full"
                  : direction === "prev"
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              {index === current && step.content({ register, errors, data,setValue })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", { required: "You must agree to the terms" })}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the terms and conditions
        </label>
      </div>
      {errors.terms && (
        <p className="text-red-500 text-sm">{errors.terms.message}</p>
      )}
      <div
        className={`flex items-center ${
          current == 0 ? "justify-end" : "justify-between"
        }`}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button className="bg-[#3f488d] text-white hover:!text-white hover:!bg-[#31397a]" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="submit" className="bg-[#3f488d] text-white hover:!text-white hover:!bg-[#31397a]">
            Submit
          </Button>
        )}
      </div>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <a href="/sign-in" className="text-blue-500 hover:underline">
          Sign In
        </a>
      </p>
    </form>
  );
};
export default SignUpForm;
