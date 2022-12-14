
import './App.css';
import {Testimonios} from './componentes/testimonos';

export function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='cont-input'>
            <input type="text" placeholder='Buscar+200 tutoriales'/>
          </div>
          <div className='cont-log'>
            <img className='logoFre' src={require(`./img/code.jpg`)} />
          </div>
          <div className='cont-button'>
            <button className='butt-menu'>Menu</button>
            <button className='butt-portafolio'></button>
          </div>
        </nav>
      </header>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonios 
      nombre='Shawn Wang'
      pais='Singapur' 
      img='1' 
      trabajo= 'Ingeniero de Software'
      empresa='SpoAmazontify' 
      testimonio= 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'  />
      
      <Testimonios 
      nombre='Sarah Chima'
      pais='Nigeria' 
      img='2' 
      trabajo= 'Ingeniera de Software'
      empresa='ChatDesk' 
      testimonio= 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'  />    
      
      <Testimonios 
      nombre='Emma Bostian'
      pais='Suecia' 
      img='3' 
      trabajo= 'Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
    </div>
  );
}

export default App;
