import TodoPostits from '../components/TodoPostits/TodoPostits.component';
import Navbar from '../components/nav/Navbar.component';

const Home = ({ isGuest }) => {
  console.log(isGuest);
  return (
    <>
      <Navbar />
      <TodoPostits isGuest={isGuest} />
    </>
  );
};

export default Home;
