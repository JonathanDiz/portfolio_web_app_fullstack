import Nav from "../components/Nav";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";

const Portfolio = () => {
    /*pagina Home "/Home" retorna todos 
    los componentes que conforman la pagina portfolio*/
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

export default Portfolio;
