import DarkBeansIcon from '../../assets/icons/dark_beans.svg'
import AromisticoCoffeeIcon from '../../assets/img/aromistico_coffee.png'
import FooterComponent from '../../components/FooterComponent'
import CupOfCoffee from '../../assets/icons/cup_of_coffee.svg'
import HeaderComponent from '../../components/HeaderComponent'
import HeaderBgIcon from '../../assets/img/third_main_bg.png'
import CardCoffeeComponent from '../../components/CardCoffeeComponent'
import AboutComponent from '../../components/AboutComponent'

function FourPage({setIsActivePage}) {
  const handelGoDetailInfo = () => {
    setIsActivePage('third');
  }
  return (
    <>
      <HeaderComponent HeaderBg={HeaderBgIcon} title={'For your pleasure'} setIsActivePage={setIsActivePage}/> 
      <div className='last__section'>
        <div className='about__goods'>      
          <div className='cup__of__coffee'>
            <img src={CupOfCoffee} alt="cup" />
          </div>
          <div className='all__about'>
            <AboutComponent title={"About our goods"} />
            <div className='about__goods__descr'>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention <br />
              so questions. <br />
              As greatly removed calling pleased improve an.
              <br /> Last ask him cold feel <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went <br />
              is song that held help face.
            </div>
          </div>    
        </div>
        <div className='long__divider'>
          <div className='long__divider_black'></div>
        </div>

        <div className='cards__coffee__wrapper'>
          <div className='aromistico__cards'>
            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Brazil"} price={"6.99$"}/>

            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Kenya"} price={"4.99$"}/>

            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Columbia"} price={"10.99$"}/>

            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Mongolia"} price={"2.99$"}/>

            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Ukraine"} price={"20.99$"}/>

            <CardCoffeeComponent onClick={handelGoDetailInfo} CardCoffeeIcon={AromisticoCoffeeIcon} title={"AROMISTICO Coffee 1 kg"} subtitle={"Kazakhstan"} price={"1.99$"}/>  
          </div>   
        </div>
      </div>     
      <FooterComponent FooterBeansIcon={DarkBeansIcon} FooterDarkBeansIcon={DarkBeansIcon} title={"MATA"} setIsActivePage={setIsActivePage} />
    </>
  )
}

export default FourPage;
