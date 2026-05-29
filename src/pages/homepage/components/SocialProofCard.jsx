import { socialProofAvatars } from "../../../data/SocialProof";

const SocialProofCard = () => {
  return (
    <div className="max-w-sm p-7 w-fit flex flex-col gap-y-4 rounded-4xl border-white/40 border-y bg-white/10 backdrop-blur-xs text-white overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {socialProofAvatars.map((item) => (
            <img
              key={item.id}
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full border border-white object-cover"
            />
          ))}
        </div>
        <div className="-translate-x-6 flex items-center gap-2">
          <div className=" w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-xs">
            <span className="text-white text-sm">50+</span>
          </div>
          <span className="text-sm text-white/80">People Joined</span>
        </div>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          labore cumque, eveniet temporibus tempore enim omnis architecto quae
          eos iusto!
        </span>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-x-3 rounded-full border-y border-white/40 bg-white/10 px-4 py-1 backdrop-blur-xs">
          <span className="text-white">Book Now</span>
        </div>
        <span className="flex items-center justify-center rounded-full bg-white p-2 text-black">
          <ArrowUpRightIcon />
        </span>
      </div>
    </div>
  );
};
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-up-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);
export default SocialProofCard;
