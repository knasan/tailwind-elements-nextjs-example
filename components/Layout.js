import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between">
            <Header />
            <main className="container py-1 mx-auto mt-1">
                <div className="">
                    {children}
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}
