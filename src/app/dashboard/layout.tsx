import SideNav from "@/ui/dashboard/Sidenav"
import ThemeToggle from "@/ui/dashboard/ThemeToggle"
import SessionWrapper from "@/ui/dashboard/SessionWrapper"
import AccountButton from "@/ui/dashboard/AccountButton"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SessionWrapper>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center ml-auto">
                            <ThemeToggle />
                            <AccountButton /> 
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </SessionWrapper>
    )
}