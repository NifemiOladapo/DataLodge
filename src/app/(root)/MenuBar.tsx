const MenuBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer fixed top-4 z-20 right-6 md:hidden flex-col gap-2 items-center w-8"
    >
      <span className="w-full h-[1.5px] rounded-md bg-white"></span>
      <span className="w-full h-[1.5px] rounded-md bg-white"></span>
      <span className="w-full h-[1.5px] rounded-md bg-white"></span>
    </div>
  );
};

export default MenuBar;
