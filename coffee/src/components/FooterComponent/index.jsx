const FooterComponent = ({FooterDarkBeansIcon, FooterBeansIcon, setIsActivePage}) => {
  const handleGoHome = () => {
    console.log('main');
    setIsActivePage('main');
  }
  const handleGoOurCoffee = () => {
    console.log('second');
    setIsActivePage('second')
  }
  const handleGoPleasure = () => {
    console.log('four');
    setIsActivePage('four')
  }  
  return (
    <div className='main__footer'>
      <div className="footer__navigation">
        <div  className="footer__navigation__btn">
          <img className="bg" src={FooterDarkBeansIcon} alt="darkBeans" />
          <button onClick={handleGoHome} className='footer__link_btn'>Coffee house</button>
        </div>
        <div  className="footer__navigation__btn">
          <button onClick={handleGoOurCoffee} className='footer__link_btn'>Our coffee</button>
        </div>
        <div  className="footer__navigation__btn">
          <button onClick={handleGoPleasure} className='footer__link_btn'>For your pleasure</button>
        </div>
      </div>
      <div className='footer__logo_block'>
        <div className='short__divider_black'></div>
        <img className="beans" src={FooterBeansIcon} alt="beansDark" />
        <div className='short__divider_black'></div>
      </div>
    </div>
  )
}
export default FooterComponent