import BlogDetail from "@/components/Blog/BlogDetail";

export const metadata = {
  title: "Blog Detail",
  description: "Read the full blog article",
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return <BlogDetail id={params.id} />;
} 