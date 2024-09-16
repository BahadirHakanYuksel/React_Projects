import { useNavigate } from "react-router-dom";

export default function PostCard({ id }) {
  const navigate = useNavigate();

  const goPostPage = () => {
    navigate(`/social-media/post/${id}`);
  };

  return (
    <div className="bg-gray-800 bg-opacity-60 flex flex-col p-4 rounded-lg gap-3.5 max-h-[770px] overflow-hidden">
      {/* line 1 */}
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5">
          <div className="bg-gray-500 rounded-full w-11 h-11"></div>
          <header className="font-medium">Profile Name</header>
        </button>
        <button className="bg-black h-8 px-1.5 rounded-md text-sky-500">
          Follow
        </button>
      </div>
      {/* line 2 */}
      <div className="flex flex-col gap-3.5 text-sm">
        <div className="flex flex-col gap-1.5">
          <p className="line-clamp-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            reiciendis molestias a natus voluptates ad veniam possimus dolore
            dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Quasi obcaecati perferendis odit ipsum blanditiis libero
            numquam explicabo, reiciendis doloribus ut pariatur iure illo enim
            impedit dignissimos alias facere aut cumque omnis provident
            laboriosam beatae quibusdam harum a? Asperiores, cum Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Doloribus culpa totam
            beatae repellendus. Itaque ab id illo voluptatibus perspiciatis
            consectetur.
          </p>
          <div className="flex items-center justify-start">
            <button
              onClick={() => goPostPage()}
              className="bg-gray-700 px-2 h-7 rounded-full hover:bg-gray-600 duration-200 text-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {/* <div className="grid grid-cols-1 gap-1.5">
            <div className="w-full aspect-video border-2 border-solid border-white rounded-lg"></div>
          </div> */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-full aspect-video border-2 border-solid border-white rounded-lg"></div>
            <div className="w-full aspect-video border-2 border-solid border-white rounded-lg"></div>
          </div>
        </div>
      </div>
      {/* line 3 */}
      <div className="flex items-center justify-between mt-2.5">
        <button title="Views" className="flex items-center gap-1.5">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-600 bg-opacity-50">
            <i class="fa-solid fa-eye"></i>
          </div>
          0
        </button>
        <button title="Like" className="flex items-center gap-1.5">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-600 bg-opacity-50">
            <i className="fa-solid fa-heart"></i>
          </div>
          0
        </button>
        <button title="Save" className="flex items-center gap-1.5">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-600 bg-opacity-50">
            <i className="fa-solid fa-bookmark"></i>
          </div>
          0
        </button>
        <button title="Share" className="flex items-center gap-1.5">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-600 bg-opacity-50">
            <i class="fa-solid fa-share-from-square"></i>
          </div>
          0
        </button>
      </div>
    </div>
  );
}
