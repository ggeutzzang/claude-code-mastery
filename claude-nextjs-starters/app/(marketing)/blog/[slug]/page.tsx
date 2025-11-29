import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { blogPosts, getBlogPost } from '@/data/blog-posts'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// 정적 경로 생성
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// 메타데이터 생성
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: '글을 찾을 수 없습니다',
    }
  }

  return {
    title: `${post.title} - Next.js Starter Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12 md:py-16 lg:py-20">
      {/* 뒤로가기 */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            블로그 목록으로
          </Link>
        </Button>
      </div>

      {/* 헤더 */}
      <header className="mx-auto mb-8 max-w-3xl space-y-4">
        <Badge variant="secondary">{post.category}</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="text-lg text-muted-foreground">{post.description}</p>

        {/* 메타 정보 */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{post.author.name}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.publishedAt}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* 커버 이미지 */}
      <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-lg">
        <img src={post.coverImage} alt={post.title} className="h-auto w-full object-cover" />
      </div>

      {/* 본문 */}
      <div className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
        <div
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          className="whitespace-pre-wrap"
        />
      </div>

      {/* 하단 구분선 */}
      <Separator className="mx-auto my-12 max-w-3xl" />

      {/* 하단 액션 */}
      <div className="mx-auto max-w-3xl">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            블로그 목록으로
          </Link>
        </Button>
      </div>
    </article>
  )
}
