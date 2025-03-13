import { useForm } from "react-hook-form";
import { useImperativeHandle, forwardRef } from "react";

type AdminFormData = {
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
  contactNumber: string;
};

type AdminInfoFormProps = {
  initialData: AdminFormData;
};

export type AdminInfoFormRef = {
  submitForm: () => void;
};

const AdminInfoForm = forwardRef<AdminInfoFormRef, AdminInfoFormProps>(
  ({ initialData }, ref) => {
    const { register, handleSubmit } = useForm<AdminFormData>({
      defaultValues: initialData,
    });

    // Handle form submission
    const onSubmit = (data: AdminFormData) => {
      console.log("Form submitted:", data);
      // You can send this data to an API or state management
    };

    // Expose submitForm method to parent
    useImperativeHandle(ref, () => ({
      submitForm: () => {
        handleSubmit(onSubmit)();
      },
    }));


    
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 mt-3">
        <div>
          <label className="text-[17px] font-[400] text-[#7F7F7F]">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="w-full border rounded p-1  text-[16px] font-[500] text-[#252323] focus:outline-none border-gray-300"
          />
        </div>
        <div>
          <label className="text-[17px] font-[400] text-[#7F7F7F]">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="w-full border rounded p-1  text-[16px] font-[500] text-[#252323] focus:outline-none border-gray-300"
          />
        </div>
        <div>
          <label className="text-[17px] font-[400] text-[#7F7F7F]">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border rounded p-1  text-[16px] font-[500] text-[#252323] focus:outline-none border-gray-300"
          />
        </div>
        <div>
          <label className="text-[17px] font-[400] text-[#7F7F7F]">
            Designation
          </label>
          <input
            {...register("designation")}
            className="w-full border rounded p-1  text-[16px] font-[500] text-[#252323] focus:outline-none border-gray-300"
          />
        </div>
        <div>
          <label className="text-[17px] font-[400] text-[#7F7F7F]">
            Contact Number
          </label>
          <input
            {...register("contactNumber")}
            type="tel"
            className="w-full border rounded p-1  text-[16px] font-[500] text-[#252323] focus:outline-none border-gray-300"
          />
        </div>
      </div>
    );
  }
);

export default AdminInfoForm;
