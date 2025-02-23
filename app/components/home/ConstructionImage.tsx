import Image from 'next/image';

export default function ConstructionImage() {
  return (
    <section className="">
      <div className="">
        <Image
          src="/images/under-construction.jpg"
          alt="Construction signage"
          width={640}
          height={480}
          className="mb-4"
        />
        <p className="text-2xl font-bigShot text-center mb-6">This page is being created.  Contents coming soon!</p>
      </div>
    </section>
  );
}