import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateCategory = () => {
  
  const { setCategories } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => processCreateCategory(data);

  const processCreateCategory = (data) => {
    document.getElementById("create_category_btn").innerText =
      "Creating Category...";
    document.getElementById("create_category_btn").disabled = true;
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.status) {
          toast.success(result.message);
          const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:5000/categories`);
              const result = await response.json();
              setCategories(result);
            } catch (error) {
              fetchData();
            }
          };
          fetchData();
        } else {
          toast.error(result.message);
        }
        document.getElementById("category_form").reset();
        document.getElementById("create_category_btn").innerText = "Create Category";
        document.getElementById("create_category_btn").disabled = false;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="category_form"
      className="md:w-full lg:w-2/3 mx-auto flex content-center items-center px-5"
    >
      <div className="w-full">
        <div className="my-2">
          <input
            placeholder="Enter Category Name"
            autoComplete={"name"}
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border-2 border-blue-600 focus:outline-blue-800 rounded"
          />
          <br />
          {errors.name && (
            <span className="text-rose-500">*Category Name required</span>
          )}
        </div>

        <button
          id="create_category_btn"
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white w-[100%] py-2 rounded-md my-2"
        >
          Create Category
        </button>
      </div>
    </form>
  );
};

export default CreateCategory;
