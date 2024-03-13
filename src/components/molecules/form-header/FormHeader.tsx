import React from "react";

interface FormHeaderProps {

  title : string
  text : string

}


const FormHeader:React.FC<FormHeaderProps> = ({title,text}) => {
  return (
    <div>
      <h2 className="text-title">{title}</h2>
      <p className="text-base pt-4 pb-8 text-dark">
        Get advice and offers tailored to your unique needs, and manage your
        mortgage application in one place.
      </p>
    </div>
  );
};

export default FormHeader;
