import DarkBeansIcon from '../../assets/icons/dark_beans.svg'
import AromisticoCoffeeIcon from '../../assets/img/aromistico_coffee.png'
import GirlIcon from '../../assets/icons/girl.svg'
import FooterComponent from '../../components/FooterComponent'
import HeaderComponent from '../../components/HeaderComponent'
import HeaderBgIcon from '../../assets/img/second_main_bg.png'
import CardCoffeeComponent from '../../components/CardCoffeeComponent'
import AboutComponent from '../../components/AboutComponent'

function SecondPage({setIsActivePage}) {
  const handelGoDetailInfo = () => {
    setIsActivePage('third');
  }

  return (
    <>
      <HeaderComponent HeaderBg={HeaderBgIcon} title={'Our coffee'} setIsActivePage={setIsActivePage}/> 
      
      <div className='about__block'>
        <div className='about__beans__wrapper'>
          <div className='girl'>
            <img src={GirlIcon} alt="girl" />
          </div>

          <div className='about__beans__texts'>
            <AboutComponent title={"About our beans"} />

            <div className='about__beans__subtitle'>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. <br /> 
              As greatly removed calling pleased improve an. Last ask him cold feel <br /> 
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </div>
          </div>
        </div>
        <div className='long__divider'>
          <div className='long__divider_black'></div>
        </div>

        <div className='filter__bar'>          
          <div className='input'>
            <div className='input__title'>
              <h1 className='lookiing__input__title'>Lookiing for</h1>
            </div>
            <input className='first__input' placeholder='start typing here...' type="text" />
          </div>

          <div className='filter'>
            <div className='filter__title'>
              <h1 className='filter__filter__title'>Or filter</h1>
            </div>
            <div className='filter__btns'>
              <button className='filter__btn'>Brazil</button>
              <button className='filter__btn'>Kenya</button>
              <button className='filter__btn'>Columbia</button>
            </div>
          </div>
        </div>

        <div className='aromistico__cards'>
          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Brazil"} price={"6.99$"}/>

          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Kenya"} price={"4.99$"}/>

          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Columbia"} price={"10.99$"}/>

          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Mongolia"} price={"2.99$"}/>

          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Ukraine"} price={"20.99$"}/>

          <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Kazakhstan"} price={"1.99$"}/>             
        </div>    
      </div>     
      <FooterComponent FooterBeansIcon={DarkBeansIcon} FooterDarkBeansIcon={DarkBeansIcon} title={"MATA"} 
      setIsActivePage={setIsActivePage}
      />
    </>
  )
}

export default SecondPage;
