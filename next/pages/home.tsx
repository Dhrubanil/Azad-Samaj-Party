import { AspBody } from "./components/body";


export const getStaticProps = () => {
  return {
    props:{
      data: 'hello-----------'
    }
  }
}

const Home = (props) => {
  return (
    <>
    hello
      <AspBody />
    </>
  );
};
export default Home;
