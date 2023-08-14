import Image from "next/image";
import Lalala from "public/lalala.png";
export default function CTAL() {
  return (
    <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2">
      <div className="rounded-xl overflow-hidden m-8">
        <Image
          alt="Student"
          src={Lalala}
          className="h-56 w-full object-cover sm:h-full"
        />
      </div>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Faouzia
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            immensely talented singer-songwriter hailing from Morocco. With a
            voice that effortlessly weaves between delicate vulnerability and
            powerful intensity, she has carved her own unique place in the world
            of pop music. Her music is a fusion of contemporary pop, electronic
            elements, and a touch of world influences, creating a sound that is
            both modern and deeply resonant. Faouzia's heartfelt lyrics explore
            themes of love, empowerment, and self-discovery, drawing listeners
            into her emotional journey with every note.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
