import Header from "@/compons/header/header"
import Main from "@/compons/main/main"
import Footer from "@/compons/footer/footer"
export default function Home() {
  return (
     <div className="container mx-auto grid gap-40">
        <Header />
        <Main />
        <Footer />
     </div>
  )
}
