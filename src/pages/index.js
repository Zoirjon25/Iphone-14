import AboutPage from "@/components/AboutPage/AboutPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import TitlePage from "@/components/TitlePage/TitlePage";
import HeaderPage from "@/Home/HeaderPage/HeaderPage";
import HomePage from "@/Home/HomePage";




export default function Home() {
  return (  <>
    <HomePage />
    {/*Headerpage */}
    <HeaderPage />
    {/*Title page */}
    <TitlePage />
    {/*ABout PAge */}
    <AboutPage />
    {/*Login page */}
    <LoginPage />
  </>
    
  );
}
