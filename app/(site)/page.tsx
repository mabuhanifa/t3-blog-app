import Cluster from "@/components/cluster";
import Hero from "@/components/hero";
import InlineGallery from "@/components/inline-gallery";
import Newsletter from "@/components/newsletter";
import { Pagination } from "@/components/pagination";
import Reviews from "@/components/reviews";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "North Blog — Home",
  description:
    "North Blog — stories on writing, books, photography, travel, and movies.",
};

export default function Page() {
  return (
    <>
      {/* Hero grid */}
      <Hero />

      {/* Masonry-like cluster */}
      <Cluster />

      {/* Inline gallery */}
      <InlineGallery />

      {/* Reviews section */}
      <Reviews />

      {/* Sidebar section */}
      <Sidebar />

      {/* Newsletter */}
      <Newsletter />

      <Pagination />
    </>
  );
}
