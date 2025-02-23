import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Fun Family Reunion Activities"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          fill={true}
          quality={90}
          className='opacity-60'
          priority
        />
      </div>
    </section>
  );
}