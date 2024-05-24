import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import uploadImg from "../../images/fillbook.svg";
import formImg from "../../images/fill-form.svg";
import Category from "./Category";
const categories = [
  { name: "গল্প উপন্যাস" },
  { name: "রাজনীতি" },
  { name: "ইতিহাস" },
  { name: "গোয়েন্দা" },
  { name: "জীবনী" },
  { name: "কল্পকাহিনী" },
  { name: "অন্যান্য ফিকশন" },
  
];
const textBoxes = [
  {
    box: "Book Name",
    placeholder: "Book",
  },
  {
    box: "Author Name",
    placeholder: "Author",
  },
];

const BookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [online, setOnline] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [response,setResponse] = useState({});
  let inputClass = "input input-primary bg-white text-black input-bordered mt-5";
  let isHidden = true;
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2c691c64fdddb95af8e2a4459d385dbd");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) =>{

    const bookData ={
      book:data.Book,
      author:data.Author,
      description:data.bookDetails,
      category:data.category,
      bookLink:data.bookLink,
      isGift:data.gift,
      isBoughtOnline:data.online,
      purchaseDate:data.purchaseDate,
      bookImage:imageUrl,
      price:data.price
    };
    console.log(bookData);
    const url = `http://localhost:5000/addBooks`;
    fetch(url,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData),
    }).then((response) => { setResponse(response);console.log("From Server: ",response)})
    .catch((error) => console.log(error));
  };
 
  return (
    <div className="container flex flex-col lg:flex-row items-center gap-5 mt-14 lg:mt-28 ">
      <div className="flex flex-1 flex-col items-center lg:items-between">
        <h1 className="font-semibold shadow-sm text-left rounded-sm lg:text-2xl text-lg text-gray-800 ">
          Add a Book
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-96">
          <div className="form-control ">
            {textBoxes.map((item, index) => (
              <div>
                <label className="label">
                  <span className="text-black">{item.box}</span>
                </label>
                <input
                  type="text"
                  placeholder={item.placeholder}
                  className="input input-primary bg-white text-black input-bordered w-64 "
                  {...register(item.placeholder,{required:true})}
                  
                />
              </div>
            ))}

            <label className="label">
              <span className="text-black">Book Category</span>
            </label>
            <select
              className="select select-bordered select-info w-full max-w-xs"
              {...register("category",{required:true})}
            >
              {categories.map((item, key) => (
                <option>{item.name}</option>
              ))}
            </select>

            <div className="form-control">
              <label className="label">
                <span className="font-normal text-black">
                  Book Details
                </span>
              </label>
              <textarea
                className="textarea h-24 textarea-bordered textarea-info"
                placeholder="Something To Remember About"
                {...register("bookDetails",{required:true})}
              ></textarea>
              <label className="text-black mt-5">Price</label>
              <input type="number" name="" id="" className="input input-primary bg-white text-black input-bordered" {...register("price")}/>
              <label className="text-black mt-5">Purchase Date</label>
              <input
                type="date"
                className="shadow-md m-2 rounded-md text-black"
                name=""
                id=""
                {...register("purchaseDate",{required:true})}
              />
            </div>
            <label className="cursor-pointer label  shadow-lg text-md font-normal mt-5 rounded-md bg-indigo-500 ">
              <span className="label-text  text-black">It's a Gift</span>
              <input
                type="checkbox"
                value="checked"
                className="checkbox border-indigo-100"
                {...register("gift")}
              />
            </label>

            <label className="cursor-pointer label  shadow-lg text-md mt-5 font-normal rounded-md bg-gray-200 ">
              <span className="label-text  text-black">Bought From Online</span>
              <input
                type="checkbox"
                value="checked"
                className="checkbox border-yellow-400"
                
                {...register("online",{required:false})}
              />
            </label>

            
              <input
                type="text"
                placeholder="Link if Bought from Online, Otherwise Leave it Blank"
                className={inputClass}
                {...register("bookLink",{required:false})}
              />
          <label className="text-md lg:flex items-center justify-center font-semibold text-black mt-5 ">
            Upload Cover Photo
            <input type="file" onChange={handleImageUpload} name="" className="shadow-lg"  id="" />
          </label>
          </div>
          {
           response.status === 200?<button className="btn btn-gray-800 lg:mx-28 mt-5 border rounded-lg mb-2 text-center w-28 h-4 text-white">
          Added
         </button>:<button className="btn btn-gray-800 lg:mx-28 mt-5 border mb-2 rounded-lg text-center w-28 h-4 text-white">
           Save to Collections
         </button>
          }
        </form>
      </div>
      <div className="flex justify-center flex-1 mb-6 md:mb-16 lg:mb-0 z-10">
        <img
          className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2"
          src={uploadImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default BookForm;
