import { useAuth } from "@/contexts/auth"
import Link from 'next/link';


export default function Header() {
    const { logout } = useAuth()
    return (
        <header className="bg-green-500 p-4 text-white mb-4">
            <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
            <button  onClick={logout}>Sign Out </button>
            <button  href="/newpage"  >Overview</button>

        </header>
    )
}