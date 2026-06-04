import BeansIcon from '../../assets/icons/white_border_beans.svg'
import WhiteBeansIcon from '../../assets/icons/white_beans.svg'
import DarkBeansIcon from '../../assets/icons/dark_beans.svg'
import SolimoCoffeeIcon from '../../assets/img/solimo_coffee.png'
import PrestoCoffeeIcon from '../../assets/img/presto_coffee.png'
import AromisticoCoffeeIcon from '../../assets/img/aromistico_coffee.png'
import FooterComponent from '../../components/FooterComponent'
// import AboutComponents from '../../components/AboutComponent'
import AboutComponent from '../../components/AboutComponent'

function MainPage({setIsActivePage }) {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <div className="navigation__btn">
            <img className="bg" src={BeansIcon} alt="beans" />
            <button onClick={() => setIsActivePage('main')} className='link_btn'>Coffee house</button>
          </div>
          <div className="navigation__btn">
            <button onClick={() => setIsActivePage('second')}  className='link_btn'>Our coffee</button>
          </div>
          <div className="navigation__btn">
            <button onClick={() => setIsActivePage('four')}  className='link_btn'>For your pleasure</button>
          </div>
        </div>

        <div className="greatings">
          <div className='title__block'>
            <h1 className="title">Everything You Love About Coffee</h1>
          </div>
          <div className='logo_block'>
            <div className='short__divider'></div>
            <img className="beans" src={WhiteBeansIcon} alt="beansWhite" />
            <div className='short__divider'></div>
          </div>

          <div className='first__subtitle'>
            <h2 className="subtitle">We makes every day full of energy and taste</h2>
          </div>
          <div className='second__subtitle'>
            <h2 className="subtitle">Want to try our beans?</h2>
          </div>
            <button className="more_btn">More</button>
        </div>
      </div>

      <div className='about__container'>
        <AboutComponent title={"About us"} />
        
        <div className='about__subtitle'>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
        <br /> <br />
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
        </div>
      </div>

      <div className='our-best__container'>
        <div className='best__title'>Our best</div>
        <div className='coffee__wrapper'>
          <div className='coffee__card'>
            <div className='coffee__icon'>
              <img src={SolimoCoffeeIcon} alt="solimo" />
            </div>
            <div className='coffee__card__title'>Solimo Coffee Beans 2 kg</div>
            <div className='coffee__card__price'>10.73$</div>
          </div>
          <div className='coffee__card'>
            <div className='coffee__icon'>
              <img src={PrestoCoffeeIcon} alt="presto" />
            </div>
            <div className='coffee__card__title'>Presto Coffee Beans 1 kg</div>
            <div className='coffee__card__price'>15.99$</div>
          </div>          
          <div className='coffee__card'>
            <div className='coffee__icon'>
              <img src={AromisticoCoffeeIcon} alt="aromistico" />
            </div>
            <div className='coffee__card__title'>AROMISTICO Coffee 1 kg</div>
            <div className='coffee__card__price'>6.99$</div>
          </div>
        </div>
      </div>

      <FooterComponent FooterBeansIcon={DarkBeansIcon} FooterDarkBeansIcon={DarkBeansIcon} title={"MATA"} setIsActivePage={setIsActivePage} />
    </>
  )
}

export default MainPage;
