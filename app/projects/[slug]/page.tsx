// app/projects/[slug]/page.tsx
import { projects } from "../../../components/Projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

// Giả sử bạn sẽ tạo các component story riêng
import HTEcoStory from "../../../components/stories/HTEcoStory";
import HISStory from "../../../components/stories/HISStory";
import SteevyIndieStory from "../../../components/stories/SteevyIndieStory";

// Map slug với component story tương ứng
const storyComponents = {
  "hteco-data-toolkit": HTEcoStory,
  "his-scalable-microservices": HISStory,
  "steevy-indie-journey": SteevyIndieStory,
};

// Hàm này giúp Next.js biết các slug có thể có để pre-render
export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  const imageUrl = project.imageStory || project.imageCard;
  const absoluteImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio.steevyindie.com"}${imageUrl}`;

  return {
    title: project.storyTitle || `${project.name} | Project Story - Stephen Nguyen`,
    description: project.seoDescription || project.description,
    openGraph: {
      title: project.storyTitle || `${project.name} | Project Story - Stephen Nguyen`,
      description: project.seoDescription || project.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio.steevyindie.com"}/projects/${slug}`, // Đảm bảo URL là tuyệt đối
      siteName: "Stephen Nguyen's Portfolio",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.storyTitle || `${project.name} | Project Story - Stephen Nguyen`,
      description: project.seoDescription || project.description,
      images: [absoluteImageUrl],
    },
  };
}

export default async function ProjectStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // Nếu không tìm thấy project, trả về trang 404
  }

  // Lấy component story tương ứng với slug
  const StoryComponent = storyComponents[slug as keyof typeof storyComponents];

  return (
    <main className="flex flex-col items-center px-4 py-12 sm:py-20">
      <article className="w-full max-w-3xl">
        {/* Nút Back */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft size={18} />
          Back to all projects
        </Link>

        {/* Tiêu đề và thông tin cơ bản */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-3">{project.storyTitle || project.name}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <Image
          src={project.imageStory || project.imageCard}
          alt={project.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg shadow-lg mb-12"
        />

        {/* Nội dung Story */}
        <div className="prose prose-lg max-w-none">{StoryComponent ? <StoryComponent /> : <p>Story content coming soon...</p>}</div>
      </article>
    </main>
  );
}
