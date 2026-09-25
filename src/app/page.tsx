import HeroSection from '@/components/hero/HeroSection';
import BusinessIntro from '@/components/sections/BusinessIntro';
import ProductCategories from '@/components/sections/ProductCategories';
import PowerFlow from '@/components/sections/PowerFlow';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Solutions from '@/components/sections/Solutions';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StoreLocation from '@/components/sections/StoreLocation';
import Reviews from '@/components/sections/Reviews';
import EnquirySection from '@/components/sections/EnquirySection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessIntro />
      <ProductCategories />
      <PowerFlow />
      <FeaturedProducts />
      <Solutions />
      <WhyChooseUs />
      <StoreLocation />
      <Reviews />
      <EnquirySection />
    </>
  );
}
