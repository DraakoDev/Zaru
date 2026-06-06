export const Modal = ({
  isOpen,
  onClose,
  title,
  children
}) => {

  if (!isOpen) return null;

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
      "
    >

      <div
        className="
          bg-[#111111]
          border
          border-white/10
          rounded-[32px]
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          p-8
          shadow-[0_0_50px_rgba(0,0,0,.5)]
        "
      >

        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >

          <h2
            className="
              text-3xl
              font-black
              text-white
            "
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-zinc-400
              hover:text-white
              text-2xl
            "
          >
            ✕
          </button>

        </div>

        {children}

      </div>

    </div>

  );
};