import { useParams } from 'react-router-dom';
import { works } from '../../data'; 
import s from './WorkID.module.css';

export const WorkID = () => {
	const { id } = useParams();

	

	const { full_title, main_img, year, tags, text, content } = works[id - 1];

	
    return (
        <div className="container">
      
          <h2 className={s.title}>{full_title}</h2>
          <div className={s.main}>
            <p className={s.year}>{year}</p>
            <p className={s.tag}>{tags.join(', ')}</p>
          </div>
          <p className={s.text}>{text}</p>
          <div className={s.content}>
            {content.map((elem, index) => {
              if (elem[0] === 'h1') {
                return <h1 className={s.content} key={index}>{elem[1]}</h1>
              } else if (elem[0] === 'img') {
                return <img src={elem[1]} alt={elem[0]} key={index} />
              } else if (elem[0] === 'h2') {
                return <h2 className={s.header} key={index}>{elem[1]}</h2>
              } else if (elem[0] === 'text') {
                return <p className={s.text} key={index}>{elem[1]}</p>
              }
            })}
          </div>
          </div>
      )
    }