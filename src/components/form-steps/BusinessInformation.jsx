/* eslint-disable react/prop-types */
import { Input, Select, SelectItem } from '@nextui-org/react'

const BusinessInformation = ({register,errors,data,setValue}) => {
  return (
       <div className="flex flex-col gap-4">
      {data.formInputInfo[1].fields.map((info, i) => (
        <div key={i}>
          {/* Dropdown Field */}
          {info.fieldType === "dropdown" ? (
            <div>
                <Select
                label={info.label}
                defaultValue=""
                {...register(info.name, {
                  required: `${info.label} is required`,
                  onChange: (e) => setValue(info.name, e.target.value),
                })}
              >
              <SelectItem value="" disabled>Select an option</SelectItem>
                {info.options.map((item, i) => (
                  <SelectItem key={i} value={item.name}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
              {errors[info.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[info.name].message}
                </p>
              )}
            </div>
          ) : (
            /* Input Field */
            <div>
              <Input
                size="sm"
                type={info.type}
                label={info.label}
                {...register(info.name, { required: `${info.label} is required` })}
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
      ))}
    </div>
  )
}

export default BusinessInformation