export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex justify-center h-screen items-center">
            {children}
        </div>
    )
}