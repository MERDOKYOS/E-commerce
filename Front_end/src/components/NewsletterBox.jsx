import React from "react";

function NewsletterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="text-center">
      <p>Subscribe and get 10% discount</p>
      <p className="text-gray-600 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus, nemo!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3  "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
