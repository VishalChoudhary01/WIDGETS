import { FaRegQuestionCircle } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useRef } from "react";

const AddPhoto = () => {
  const [images, setImages] = useState([]);
  const containerRef = useRef(null); 

  const handleAddImage = (e) => {
    const files = Array.from(e.target.files); 
    const imageUrls = files.map((file) => URL.createObjectURL(file)); 
    setImages((prevImages) => [...prevImages, ...imageUrls]); 
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-[300px] flex my-5 rounded-3xl bg-[#363c43] py-6 pr-10 shadow-lg shadow-black">
      <section className="w-[8%] h-full grid justify-center ">
        <FaRegQuestionCircle className="text-[1.6em] text-[#99a3af]" />
        <section className="grid grid-cols-2 gap-y-3 grid-rows-3 w-8 h-8">
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
          <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        </section>
      </section>

      <section className="w-[90%]">
        <section className="w-full flex justify-between items-center">
          <Button
            buttonContent={"Gallery"}
            buttonStyle={
              "bg-[#101214] text-white font-semibold py-3 px-4 rounded-2xl"
            }
          />
          <section className="flex gap-x-3">
            <section className="relative rounded-full neumorphic-button">
              <label
                htmlFor="file-upload"
                className="flex items-center gap-x-1 cursor-pointer text-white p-2 shadow-neumorphic"
              >
                <span>
                  <FiPlus />
                </span>
                <span className="text-[0.8em] font-bold">ADD PHOTO</span>
              </label>
              <Input
                inputType="file"
                inputAcceptType={"image/*"}
                inputChangeEvent={handleAddImage}
                inputStyle="absolute inset-0 opacity-0 cursor-pointer"
                id="file-upload"
                multiple 
              />
            </section>

            {/* Navigation Buttons */}
            <section className="flex justify-center gap-x-4 items-center">
              <Button
                buttonDisable={images.length === 0}
                buttonClickEvent={handlePrev}
                buttonStyle={"neumorphic-circleButton"}
                buttonContent={<FaArrowLeft />}
              />
              <Button
                buttonDisable={images.length === 0}
                buttonClickEvent={handleNext}
                buttonStyle={"neumorphic-circleButton"}
                buttonContent={<FaArrowRight />}
              />
            </section>
          </section>
        </section>

        <section
          ref={containerRef} 
          className="scrollableHorizontal-container  flex w-full items-center justify-start rounded-lg p-4 shadow-lg h-[200px] overflow-x-scroll gap-2"
        >
            
          {images.length > 0 ? (
            images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Preview ${index}`}
                className="h-full w-auto object-cover rounded-lg"
              />
            ))
        ) 
         : (
            <div className="text-gray-600">No Image</div>
          )}
        </section>
      </section>
    </section>
  );
};

export default AddPhoto;
