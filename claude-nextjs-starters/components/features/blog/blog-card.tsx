import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { BlogPost } from '@/data/blog-posts'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        {/* 커버 이미지 */}
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>

        <CardHeader className="space-y-2">
          {/* 카테고리 */}
          <Badge variant="secondary" className="w-fit">
            {post.category}
          </Badge>

          {/* 제목 */}
          <h3 className="line-clamp-2 text-xl font-bold leading-tight">{post.title}</h3>

          {/* 설명 */}
          <p className="line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
        </CardHeader>

        <CardContent>
          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t pt-4">
          {/* 작성자 */}
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>

          {/* 메타 정보 */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
