//Componentes

/*Header*/
const Header = ({ course }) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  );
};

const Content = (props) => {
  return (
    <article>
      <p>
        {props.part1} {props.ejercicio1}
      </p>
      <p>
        {props.part2} {props.ejercicio2}
      </p>
      <p>
        {props.part3} {props.ejercicio3}
      </p>
    </article>
  );
};

const Total = () => {
  const ejercicio1 = 10;
  const ejercicio2 = 7;
  const ejercicio3 = 14;
  return (
    <section>
      <p>
        Numero de ejercicio
        {ejercicio1 + ejercicio2 + ejercicio3}
      </p>
    </section>
  );
};

const App = () => {
  const course = "Half application development";
  const part1 = "Fundamental of React";
  const ejercicio1 = 10;
  const part2 = "Using props to pass data";
  const ejercicio2 = 7;
  const part3 = "State of a component";
  const ejercicio3 = 14;
  return (
    <>
      <section>
        <article>
          <Header course={course} />
          <Content part1={part1} ejercicio1={ejercicio1} />
          <Content part2={part2} ejercicio2={ejercicio2} />
          <Content part3={part3} ejercicio3={ejercicio3} />
          <Total />
        </article>
      </section>
    </>
  );
};
export default App;
