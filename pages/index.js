import Nav from "../components/Nav";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
	return (
		<main>
			<Nav />
			<Header />
			<Skills />
			<PortfolioSection />
			<Footer />
		</main>
	)
}
