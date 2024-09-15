import PostCard from "./components/PostCard";

export default function SocialMedia() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="social-media-main-grid">
      <div className="pr-5">
        <div className="p-3 rounded-lg bg-sky-900 bg-opacity-30">
          left sidebar
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {array.map((_, i) => (
          <PostCard key={i} id={i} />
        ))}
      </div>
      <div className="pl-5 sticky top-0 right-0">
        <div className="p-3 rounded-lg bg-sky-900 bg-opacity-30">
          right sidebar
        </div>
      </div>
    </div>
  );
}
