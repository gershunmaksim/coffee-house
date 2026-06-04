import DarkBeansIcon from '../../assets/icons/dark_beans.svg'

const AboutComponent = ({title}) => {
  return (
    <div>
      <div className='about__title'>{title}</div>
      <div className='logo_block'>
        <div className='short__divider_black'></div>
        <img className="beans" src={DarkBeansIcon} alt="beansDark" />
        <div className='short__divider_black'></div>
      </div>
    </div>   
  )
}

export default AboutComponent