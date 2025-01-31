/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { getBanks, useCheckAccountNumber } from "../../lib/api";
import { debounce } from "../../lib/utils";
import { ImSpinner8 } from "react-icons/im";
import { Select } from "antd";

const { Option } = Select;

const AccountInformation = ({ register, errors, data, setValue }) => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState({});
  const [validationResult, setValidationResult] = useState(null);

  const { mutateAsync: checkAccountNumber, isPending } =
    useCheckAccountNumber();

  useEffect(() => {
    async function fetchData() {
      const result = await getBanks();
      console.log(result.data.data);
      const mappedResult = result.data.data.map((bank) => {
        return { ...bank, label: bank.name, value: bank.name };
      });
      setBanks(mappedResult);
    }
    fetchData();
  }, []);

  const handleChange = (name, value) => {
    setValue(name, value);
    debouncedValidateAccountNumber({
      bank_code: selectedBank.code,
      account_number: value,
    });
  };
  const handleSelectBank = (value, name) => {
    console.log(name, value);
    setValue(name, value);
    const result = banks.find((bank) => bank.name == value);
    setSelectedBank(result);
  };

  const validateAccountNumber = async (payload) => {
    console.log(payload);

    await checkAccountNumber(payload, {
      onSuccess: async (data) => {
        console.log(data);
        setValidationResult({
          message: data.data.account_name,
          type: "success",
        });
      },
      onError: (err) => {
        setValidationResult({
          message: err.response.data.message ?? "An error occurred",
          type: "error",
        });
      },
    });
  };

  const debouncedValidateAccountNumber = useCallback(
    debounce((payload) => {
      validateAccountNumber(payload);
    }, 500), // 500ms delay
    []
  );

  useEffect(() => {
    return () => {
      debouncedValidateAccountNumber.cancel();
    };
  }, [debouncedValidateAccountNumber]);

  return (
    <div className="flex flex-col gap-4">
      {data?.map((info, i) => (
        <div key={i}>
          {/* select Field */}
          {info.fieldType === "select" ? (
            <div>
              {/* <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="label"
    onChange={(value) => handleSelectBank(value,info.name)}
    options={[banks]}
    {...register(info.name, {
        required: `${info.label} is required`,
      })}
  /> */}
              <Select
                showSearch
                placeholder={`Select your ${info.label}`}
                onChange={(value) => handleSelectBank(value, info.name)}
                className="w-full h-12"
                variant="filled"
              >
                {banks?.map((item) => (
                  <Option key={item.name} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
              {/* <Select
      label={info.label}
      required={info.required}
      defaultValue=""
      isSearchable={true}
      {...register(info.name, {
        required: `${info.label} is required`,
        onChange: (e) => handleSelectBank(info.name, e.target.value),
      })}
    >
      {banks
        ?.filter((bank) =>
          bank.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
          <SelectItem key={item.name} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
    </Select> */}
              {errors[info.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[info.name].message}
                </p>
              )}
            </div>
          ) : (
            /* Input Field */
            <div>
              {info.name == "account_number" ? (
                <div>
                  <Input
                    size="sm"
                    type={info.type}
                    label={info.label}
                    required={info.required}
                    {...register(info.name, {
                      required: `${info.label} is required`,
                      onChange: (e) => handleChange(info.name, e.target.value),
                    })}
                    fullWidth
                  />
                  {errors[info.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[info.name].message}
                    </p>
                  )}
                  <p
                    className={`${
                      validationResult?.type == "error"
                        ? "text-red-600"
                        : "text-orange-500"
                    } text-sm font-semibold mt-1 flex items-center`}
                  >
                    {isPending ? (
                      <ImSpinner8
                        size={15}
                        className="animate-spin text-gray-500 mt-2"
                      />
                    ) : (
                      validationResult?.message
                    )}
                  </p>
                </div>
              ) : (
                <div>
                  <Input
                    size="sm"
                    type={info.type}
                    label={info.label}
                    required={info.required}
                    {...register(info.name, {
                      required: `${info.label} is required`,
                    })}
                    fullWidth
                  />
                  {errors[info.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[info.name].message}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountInformation;
