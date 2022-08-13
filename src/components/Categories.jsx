import React from "react";

export const Categories = ({value, onClickCategory}) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

  const list = categories.map( (item,index) =>
     <li key={item} onClick = {()=> onClickCategory(index)} 
     className = {value === index ? "active" : ''}>{item}</li> )


  return (
    <div className ="categories">
      <ul>{list}</ul>
    </div>)
}