import { useState } from "react";
import { FiUploadCloud, FiPlus } from "react-icons/fi";

function MediaUpload() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  return (
    <div className="bg-gray-50 p-5 rounded-xl w-[300px] md:w-[330px] ">
      
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-green-800 font-semibold flex items-center gap-2">
          <FiUploadCloud /> Media
        </h3>
        <span className="text-xs text-gray-400">MAX 10MB</span>
      </div>

      <label className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
        <FiUploadCloud className="text-2xl text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">
          Drag high-resolution imagery here
        </p>
        <span className="text-xs text-gray-400">
          preferred: 3000 x 4000 px
        </span>

        <input type="file" multiple hidden onChange={handleUpload} />
      </label>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="preview"
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}

        <label className="w-20 h-20 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer text-gray-400 hover:bg-gray-100">
          <FiPlus />
          <input type="file" multiple hidden onChange={handleUpload} />
        </label>
      </div>
    </div>
  );
}

export default MediaUpload;