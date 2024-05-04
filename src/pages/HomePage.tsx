import PlusIcon from "../icons/PlusIcon";

function HomePage() {
  return (
    <div
      className="flex items-center justify-between cursor-default
      border-b border-white
      w-full py-6"
    >
      <h1 className="text-2xl sm:text-3xl">TOPICS</h1>

      <button
        className="text-white flex items-center justify-between gap-1
        text-sm sm:text-base
        hover:bg-white hover:text-zinc-800
        rounded px-4 py-2"
      >
        <span>
          <PlusIcon />
        </span>

        <p>New Topic</p>
      </button>
    </div>
  );
}

export default HomePage;
