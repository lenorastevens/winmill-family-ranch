import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-forground h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Fun Family Reunion Activities"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </section>
  );
}