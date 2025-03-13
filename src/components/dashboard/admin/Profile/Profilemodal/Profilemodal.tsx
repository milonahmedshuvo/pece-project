"use client";
import { Link } from "react-router";
import profile from "../../../../../image/profile.png";
import { Modal,  } from "antd";


interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<MyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
    //   title="Pace"
      open={isOpen}
      onCancel={onClose}
      centered={false} // Disable default centering
      style={{ top: "80px", right: "20px", position: "absolute" }} // Custom position
      className=" !w-[250px] absolute  rounded-lg" // Custom width and positioning
      footer={null}
    >

        <p className="text-[#163760] text-2xl font-semibold mb-2.5">Pace</p>

     <div className="flex items-center gap-2.5">

         <div>
         <img
          src={profile} // Change this to the actual profile image path
          alt="Profile"
          className="rounded-full w-12 h-12 border border-gray-300"
        /> 
         </div>

         <div className="flex flex-col">
            <span className="font-semibold text-[#163760] leading-3.5">Admin Name</span>
            <span className="leading-4.5 text-[#163760]">Abcadmin@gmail.com</span>
            <Link to='/admin/profile' onClick={onClose} >  <span className="leading-5.5 underline text-[#163760] cursor-pointer">my profile</span> </Link>
         </div>
     </div>  

     

     <Link to='/' onClick={onClose} ><p className="leading-6.5 underline text-[#163760] cursor-pointer text-end pt-3.5 font-semibold">Log Out</p> </Link>
    </Modal>
  );
};

export default ProfileModal;
