/**
 * 로고 컴포넌트
 */
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
      <Sparkles className="h-6 w-6" />
      <span>{APP_NAME}</span>
    </Link>
  )
}
