import Head from 'next/head';
import Header from '../components/molecules/Header';
import SidebarNavigation from '../components/organisms/SidebarNavigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-12 m-auto w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 sm:max-w-md md:max-w-xl lg:max-w-xl">
        <div className="w-full text-center">
          <div className="sm:inline-block">
            <div className="flex flex-col sm:flex-row sm:justify-between w-full text-center">
              <SidebarNavigation />
              <div className="flex flex-col w-full sm:text-left sm:pl-14">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;