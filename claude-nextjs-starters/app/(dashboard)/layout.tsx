/**
 * 대시보드 레이아웃
 * 사이드바와 메인 컨텐츠 영역
 */
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { DashboardSidebar } from '@/components/layouts/dashboard-sidebar'
import { Separator } from '@/components/ui/separator'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1">
          <div className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-lg font-semibold">대시보드</h1>
          </div>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}
