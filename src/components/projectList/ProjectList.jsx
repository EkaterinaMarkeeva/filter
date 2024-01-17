import './projectListStyle.css';

export default function ProjectList(props) {
  const imgs = props.projects.map((image, idx) => {
    return <img key={idx} src={image.img} className='img' />
  })

  return <>{imgs}</>;
}
