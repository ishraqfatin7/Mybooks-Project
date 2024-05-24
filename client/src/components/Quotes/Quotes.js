import React from "react";

const Quotes = () => {
    const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  React.useEffect(() => {
    updateQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!data) return null;
  return (
    <div className="">
      <h1 className="text-4xl text-yellow-500 font-mono font-semibold lg:shadow rounded-xl  p-5 lg:mx-28 mx-5 mt-10">Learn a Quote Today!</h1>  
      <div className="flex justify-center items-center  mb-10 mt-5 p-10">
      <div className="card h-80 lg:h-48 text-center shadow-lg bg-indigo-500 lg:w-1/2 flex justify-center items-center">
        <div className="card-body">
          <h2 className="card-title text-center flex items-center justify-center font-sans text-white">{data.content}</h2>
           <p className="font-light text-base">-{data.author}</p>
          <div className="flex-auto justify-around mt-5">
          <button className="btn btn-outline bg-gray-700 w-28 " onClick={()=>updateQuote()}>See a New One!</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Quotes;
