import DarkBeansIcon from '../../assets/icons/dark_beans.svg'
import FooterComponent from '../../components/FooterComponent'
import AromisticoSky from '../../assets/icons/aromistico_sky.svg'
import HeaderComponent from '../../components/HeaderComponent'
import HeaderBgIcon from '../../assets/img/second_main_bg.png'
import AboutComponent from '../../components/AboutComponent'

function ThirdPage({setIsActivePage}) {
  return (
    <>
      <HeaderComponent HeaderBg={HeaderBgIcon} title={'Our coffee'} setIsActivePage={setIsActivePage}/> 
      <div className='about__aromistico'>
        <div className='aromistico__sky'>
          <img src={AromisticoSky} alt="coffeeSky" />
        </div>
        <div className='about__content'>
          <AboutComponent title={"About it"} />
      
          <p className='about__it__country'>
            <span className='country__span'>Country:</span> Brasil
          </p>
          <p className='about__it__description'>
            <strong>Description:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className='about__it__price'>
            <span className='price__span'>Price:</span>
            <span className='about__it__money'> 16.99$</span>
          </p>
        </div>
      </div>
      <FooterComponent FooterBeansIcon={DarkBeansIcon} FooterDarkBeansIcon={DarkBeansIcon} title={"MATA"} setIsActivePage={setIsActivePage} />
    </>
  )
}

export default ThirdPage;
