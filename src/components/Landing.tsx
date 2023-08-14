import Image from "next/image";
import Test from "public/faouzia.jpeg";
export default function Landing() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full flex items-center justify-center gap-x-4">
        <div className="w-full h-full bg-black-500">
          <Image
            priority
            width={500}
            height={500}
            src={Test}
            alt="Test"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
