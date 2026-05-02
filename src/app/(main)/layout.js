
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';




const MainLayout = ({children}) => {
    return (
       <>
       <Navbar/>
     
       <main className='container mx-auto grow'>{children}</main>
   
      <Footer/>
       </>
    );
};

export default MainLayout;
