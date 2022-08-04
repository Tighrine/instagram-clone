import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import HeadPage from '../components/HeadPage';
import Modal from '../components/Modal';

document.getElementsByTagName('body')[0].backgroundColor = "rgb(249 250 251)";

export default function Home() {

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <HeadPage />
      {/* Header */}
      <Modal />
      <Header />
      <Feed />
    </div>
  )
};