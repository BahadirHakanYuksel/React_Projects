import classNames from "classnames";

export default function FastRegister({ title }) {
  return (
    <div
      className={classNames("flex flex-col gap-1.5", {
        "-mt-3.5": title === "Login",
      })}
    >
      <header className="text-xl font-medium">Fast {title}</header>
      <div className="grid grid-cols-3 gap-2.5">
        <button className="bg-gray-600 hover:bg-gray-500 hover:bg-opacity-50 duration-200 bg-opacity-50 flex items-center justify-center h-12 rounded-sm gap-1.5">
          <i className="fa-brands fa-google"></i>
          Google
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 hover:bg-opacity-50 duration-200 bg-opacity-50 flex items-center justify-center h-12 rounded-sm gap-1.5">
          <i className="fa-brands fa-reddit"></i>
          Reddit
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 hover:bg-opacity-50 duration-200 bg-opacity-50 flex items-center justify-center h-12 rounded-sm gap-1.5">
          <i class="fa-brands fa-facebook"></i>
          Facebook
        </button>
      </div>
    </div>
  );
}
