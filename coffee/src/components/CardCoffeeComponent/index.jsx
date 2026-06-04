const CardCoffeeComponent = ({CardCoffeeIcon, title, subtitle, price, onClick}) => {
  return (
    <div className='coffee__cards' onClick={onClick}>
      <div className='coffee__icon'>
        <img src={CardCoffeeIcon} alt="aromistico" />
      </div>
      <div className='coffee__card__title'>{title}</div>
      <div className='coffee__card__country'>{subtitle}</div>
      <div className='coffee__card__price'>{price}</div>
    </div>
  )
}

export default CardCoffeeComponent