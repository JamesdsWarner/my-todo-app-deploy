import TodoPostits from '../components/TodoPostits/TodoPostits.component';

const Guest = ({ isGuest }) => {
  return (
    <>
      <TodoPostits isGuest={isGuest} />
    </>
  );
};

export default Guest;
