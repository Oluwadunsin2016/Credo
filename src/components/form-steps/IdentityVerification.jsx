/* eslint-disable react/prop-types */
import { Input, Select, SelectItem } from '@nextui-org/react'
import FileUpload from '../FileUpload'
import UploadUtility from '../UploadUtility';

const IdentityVerification = ({register, errors,setValue,watch}) => {

 const options= [
    { label: "National Identification Card", name: "national_identification_card" },
    { label: "Driver's License", name: "drivers_license" },
    { label: "Voter's Card", name: "voters_card" },
    { label: "International Passport", name: "international_passport" },
    { label: "CAC", name: "cac" },
    { label: "Tax Clearance", name: "tax_clearance" },
    { label: "SSN", name: "ssn" },
  ]

  const selectedIdentity = watch("identity_verification.identity", "");
  return (
      <div className="flex flex-col gap-4">
            <div>
                 <Select
                label='Identity'
                 required
                defaultValue=""
                {...register('identity_verification.identity', {
                  required: `identity is required`,
                  onChange: (e) =>setValue('identity_verification.identity', e.target.value),
                })}
              >
              <SelectItem value="" disabled>Select an option</SelectItem>
                {options.map((item) => (
                  <SelectItem key={item.label}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
              {errors?.identity_verification?.identity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.identity_verification?.identity.message}
                </p>
              )}
            </div>
            <div className={!selectedIdentity&&'hidden'}>
           <p className='mb-2'>Upload your <i className='font-semibold'>{selectedIdentity}</i> image.</p>
            <FileUpload setValue={setValue} errors={errors} register={register}/>
            </div>
            <div>
              <Input
                size="sm"
                type='number'
                label='BVN'
                 required
                {...register('identity_verification.bvn', { required: `BVN is required` })}
                fullWidth
              />
              {errors?.identity_verification?.bvn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.identity_verification?.bvn.message}
                </p>
              )}
            </div>
            <div>
           <p className='mb-2'>Upload your utility bills</p>
            <UploadUtility setValue={setValue} errors={errors} register={register}/>
            </div>



      {/* {data?.map((info, i) => (
        <div key={i}>
          {info.fieldType === "select" ? (
            <div>
                 <Select
                label={info.label}
                 required={info.required}
                defaultValue=""
                {...register(info.name, {
                  required: `${info.label} is required`,
                  onChange: (e) =>setValue(info.name, e.target.value),
                })}
              >
              <SelectItem value="" disabled>Select an option</SelectItem>
                {info.options.map((item) => (
                  <SelectItem key={item.label}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
              {errors?.identity_verification?[info.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.identity_verification?[info.name].message}
                </p>
              )}
            </div>
          ) : (
            <div>
            {info.type === "file"?
            (<div className={!selectedIdentity&&'hidden'}>
           <p>Upload your <i className='font-semibold'>{selectedIdentity}</i> image.</p>
            <FileUpload/>
            <div></div>
            </div>):
            (<div>
              <Input
                size="sm"
                type={info.type}
                label={info.label}
                 required={info.required}
                {...register(info.name, { required: `${info.label} is required` })}
                fullWidth
              />
              {errors?.identity_verification?[info.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.identity_verification?[info.name].message}
                </p>
              )}
            </div>)
            }
            </div>
          )}
        </div>
      ))}  */}
    </div>
  )
}

export default IdentityVerification