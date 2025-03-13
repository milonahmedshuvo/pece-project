import profile from "../../../../../image/profile.png";
import { useRef, useState } from "react";
import AdminInfoForm, {
  AdminInfoFormRef,
} from "../ProfileEditForm/ProfileEditForm";

const Adminprofile = () => {
  const [isSaveTaggole, setIsSaveTaggole] = useState(false);
  // Create a ref to control the child form
  const formRef = useRef<AdminInfoFormRef>(null);

  // Function to handle save button click
  const handleSave = () => {
    if (formRef.current) {
      formRef.current.submitForm(); // Calls the form submission function from child
    }
  };

  // Initial form data
  const initialData = {
    firstName: "Admin",
    lastName: "Last",
    email: "abc@mail.com",
    designation: "Admin",
    contactNumber: "+60123456789",
  };

  return (
    <div className="mt-[-12px] ">
      <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-[#134074] mb-3.5  ">
        My Profile
      </h2>

      {/* parent div  */}
      <div className="flex flex-col  lg:flex-col xl:flex-row justify-between gap-4 xl:gap-10">
        <div className="w-full  md:w-full xl:w-3/5">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-2 border-gray-100 px-5.5 py-6.5 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <div>
                <img
                  src={profile} // Change this to the actual profile image path
                  alt="Profile"
                  className="rounded-full w-12 h-12 border border-gray-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <span className="font-medium text-[#000000] text-[22px] leading-4.5 text-center md:text-start">
                  Admin Name
                </span>
                <span className="leading-4.5 text-[#163760] text-center md:text-start">
                  Abcadmin@gmail.com
                </span>
              </div>
            </div>

            <div>
              {isSaveTaggole ? (
                <button
                  onClick={() => {
                    setIsSaveTaggole(!isSaveTaggole);
                    handleSave();
                  }}
                  className="bg-[#134074] font-normal text-[14px] w-[100px] py-1 rounded text-white"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsSaveTaggole(!isSaveTaggole)}
                  className="bg-[#134074] font-normal text-[14px] w-[100px] py-1 rounded text-white"
                >
                  Edit
                </button>
              )}
            </div>
          </div>

          <div className="border-2 border-gray-100 px-5.5 py-6.5 rounded-xl mt-3.5">
            <h2 className="font-medium text-[22px] md:text-[24px] text-[#000000] ">
              Personal Information
            </h2>

            {isSaveTaggole ? (
              <>
                {/* Child form component with ref */}
                <AdminInfoForm ref={formRef} initialData={initialData} />
              </>
            ) : (
              <>
                {/* Personal Information Details  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
                  <div>
                    <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                      First Name
                    </span>
                    <p className="text-[18px] font-[500] text-[#000000]">
                      Admin First Name
                    </p>
                  </div>
                  <div>
                    <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                      Last Name
                    </span>
                    <p className="text-[18px] font-[500] text-[#000000]">
                      Admin FLast Name
                    </p>
                  </div>
                  <div>
                    <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                      Email Address
                    </span>
                    <p className="text-[18px] font-[500] text-[#000000]">
                      abc@mail.com
                    </p>
                  </div>
                  <div>
                    <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                      Designation
                    </span>
                    <p className="text-[18px] font-[500] text-[#000000]">
                      Admin
                    </p>
                  </div>

                  <div>
                    <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                      Contact Number
                    </span>
                    <p className="text-[18px] font-[500] text-[#000000]">
                      +60123456789
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* School Information  */}
          <div className="border-2 border-gray-100 px-5.5 py-6.5 rounded-xl mt-3.5">
            <h2 className="font-medium text-[24px] text-[#000000] ">
              School Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  School Name
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  ABC International School
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Type
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  Primary & Secondary
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Email Address
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  abc@mail.com
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  School Branch
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  KL - Kuala Lumpur
                </p>
              </div>

              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Contact Number
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  +60123456789
                </p>
              </div>
            </div>
          </div>

          {/* Manual Transfer Details */}
          <div className="border-2 border-gray-100 px-5.5 py-6.5 rounded-xl mt-3.5">
            <h2 className="font-medium text-[22px] md:text-[24px] text-[#000000] ">
              Manual Transfer Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Bank Account Number
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  187612976165465
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Beneficiary Name
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  ABC Private School
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Bank Name
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  ABC BANK
                </p>
              </div>
              <div>
                <span className="text-[17px] font-[400] text-[#7F7F7F] ">
                  Swift Code
                </span>
                <p className="text-[18px] font-[500] text-[#000000]">
                  KualaLum
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* news card  */}
        <div className="border-2 border-gray-100 rounded-xl w-full  md:w-full xl:w-[370px] p-4 space-y-2 flex flex-col lg:flex-row xl:flex-col justify-between gap-2 md:gap-2 xl:gap-20 ">
          <div>
            <div className="flex mb-3">
              <h1 className="text-[#134074] text-[22px] font-medium md:text-[24px] md:font-semibold">
                Membership Details
              </h1>
            </div>

            <div>
              <h2 className="text-[17px] font-[400] text-[#7F7F7F]">
                Membership ID
              </h2>
              <h3 className="text-[18px] font-[500] text-[#000000]">
                A1B-23-C45
              </h3>
            </div>

            <div className="mt-2.5">
              <h2 className="text-[17px] font-[400] text-[#7F7F7F]">
                Membership ID
              </h2>
              <h3 className="text-[18px] font-[500] text-[#000000]">
                A1B-23-C45
              </h3>
            </div>
          </div>

          <div className="mb-7">
            <h1 className="text-[#134074] text-[22px] font-medium md:text-[24px] md:font-semibold">
              Tech Support
            </h1>
            <div>
              <h2 className="text-[17px] font-[400] text-[#7F7F7F]">
                Membership ID
              </h2>
              <h3 className="text-[18px] font-[500] text-[#000000]">
                A1B-23-C45
              </h3>
            </div>

            <div className="mt-2.5">
              <h2 className="text-[17px] font-[400] text-[#7F7F7F]">
                Membership ID
              </h2>
              <h3 className="text-[18px] font-[500] text-[#000000]">
                A1B-23-C45
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminprofile;
