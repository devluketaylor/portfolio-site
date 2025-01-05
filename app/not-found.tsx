import Navbar from "@/components/navbar";
import {Page} from "@/lib/types";
import Footer from "@/components/footer";

export default function NotFoundPage() {
    return (
        <main className="text-center">
            <Navbar currentPage={Page.None} />
            <h1 className="font-black text-[200px]">404</h1>
            <p>Sorry that page could not be found.</p>
            <Footer currentPage={Page.None} />
        </main>
    )
}
