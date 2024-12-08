import SessionWrapper from "@/ui/dashboard/SessionWrapper"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    )
}