import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const CreateService = () => {
  
    const { categories, setServices } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => processCreateService(data);

  const processCreateService = async (data) => {
    console.log(data);
    let btn = document.getElementById("create_service_btn");
    btn.innerText = "Creating Service...";
    btn.disabled = true;

    const imageURL = await handleImageUpload(data.image[0]);

    if (imageURL) {
      const formData = {
        name: data.name,
        category: data.category,
        description: data.description,
        image: imageURL,
      };

      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/service", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const result = await response.json();
          if (result.status) {
            toast.success(result.message);
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/services`)
                    const result = await response.json()
                    setServices(result)
                } catch (error) {
                    fetchData();
                }
            };
            fetchData();
          } else {
            toast.error(result.message);
          }
          document.getElementById("service_form").reset();
          btn.innerText = "Create Service";
          btn.disabled = false;
        } catch (error) {
          toast.error(error.message);
        }
      };
      fetchData();
    }
    else {
        toast.error("Image Upload Failed. Please try again later!");
    }
  };

  const handleImageUpload = async (imageFile) => {
    try {
      const imageData = new FormData();
      imageData.set("key", "1c317149dbaf565ffee3233643cb0f76");
      imageData.append("image", imageFile);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      return response.data.data.url;
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="service_form"
      className="md:w-full lg:w-2/3 mx-auto flex content-center items-center px-5"
    >
      <div className="w-full">
        <select
          defaultValue={""}
          {...register("category", { required: true })}
          className="w-full p-2 border-2 border-blue-600 focus:outline-blue-800 rounded mt-2"
        >
          <option value="" disabled>
            Select Service Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
          {errors.category && (
            <span className="text-rose-500">*Category required</span>
          )}
        </select>

        <div className="my-2">
          <input
            placeholder="Enter Service Name"
            autoComplete={`name`}
            className="w-full p-2 border-2 border-blue-600 focus:outline-blue-800 rounded mt-2"
            type="text"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-rose-500">*Service Name required</span>
          )}
        </div>

        <div className="my-2">
          <textarea
            placeholder="Enter Service Description"
            autoComplete={`description`}
            className="w-full p-2 border-2 border-blue-600 focus:outline-blue-800 rounded mt-2"
            type="text"
            {...register("description", { required: true })}
          />
          <br />
          {errors.description && (
            <span className="text-rose-500">*Description required</span>
          )}
        </div>

        <div className="my-2">
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-violet-100"
          />
          {errors.image && (
            <span className="text-rose-500">*Image required</span>
          )}
        </div>
        <button
          id="create_service_btn"
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white w-[100%] py-2 rounded-md my-2"
        >
          Create Service
        </button>
      </div>
    </form>
  );
};

export default CreateService;
