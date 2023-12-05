import { Icon } from "@iconify/react";

export default function Modal({ children, className, hideModal, ...props }) {
  return (
    <div
      className={`fixed flex items-center justify-center top-0 w-full h-screen bg-black/40 backdrop-blur-sm z-20 ${className}`}
    >
      <div className="max-w-[70%] w-full bg-white h-80 relative rounded-xl overflow-hidden">
        <button className="absolute top-3 right-4" onClick={hideModal}>
          <Icon icon="octicon:x-12" width={24} className="text-indigo-500" />
        </button>
        {children}
      </div>
    </div>
  );
}
