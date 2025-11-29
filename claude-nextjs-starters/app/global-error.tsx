'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">심각한 오류가 발생했습니다</h2>
          <p className="text-muted-foreground">
            페이지를 새로고침해주세요.
          </p>
          <button
            onClick={reset}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            새로고침
          </button>
        </div>
      </body>
    </html>
  )
}
