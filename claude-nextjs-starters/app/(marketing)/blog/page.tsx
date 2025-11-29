import { blogPosts, blogCategories } from '@/data/blog-posts'
import { BlogCard } from '@/components/features/blog/blog-card'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: '블로그 - Next.js Starter',
  description: '최신 웹 개발 트렌드와 기술에 대한 블로그 글을 읽어보세요.',
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      {/* 헤더 */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">블로그</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          최신 웹 개발 트렌드와 기술, 베스트 프랙티스를 공유합니다.
        </p>
      </div>

      {/* 카테고리 필터 */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Badge variant="default" className="cursor-pointer">
          전체
        </Badge>
        {blogCategories.map((category) => (
          <Badge key={category} variant="outline" className="cursor-pointer">
            {category}
          </Badge>
        ))}
      </div>

      {/* 블로그 글 목록 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* 빈 상태 (글이 없을 때) */}
      {blogPosts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">아직 작성된 블로그 글이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
