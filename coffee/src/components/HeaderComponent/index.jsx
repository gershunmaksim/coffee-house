import BeansIcon from '../../assets/icons/white_border_beans.svg'

const HeaderComponent = ({HeaderBg, title, setIsActivePage}) => {
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
    <div className='header' style={{ backgroundImage: `url(${HeaderBg})` }}>
      <div className="navigation">
        <div  className="navigation__btn">
          <img className="bg" src={BeansIcon} alt="header" />
          <button onClick={handleGoHome} className='link_btn'>Coffee house</button>
        </div>
        <div  className="navigation__btn">
          <button onClick={handleGoOurCoffee} className='link_btn'>Our coffee</button>
        </div>
        <div  className="navigation__btn">
          <button onClick={handleGoPleasure} className='link_btn'>For your pleasure</button>
        </div>
      </div>

      <div className='header__title__block'>
        <h1 className='header__title'>{title}</h1>
      </div>
    </div>
  )
}

export default HeaderComponent