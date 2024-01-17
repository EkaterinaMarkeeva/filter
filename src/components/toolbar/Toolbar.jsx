import './toolbarStyle.css';

export default function Toolbar(props) {
  const btns = props.filters.map(elem => {
    console.log(elem);
    return <button key={elem} className={elem === props.selected ? 'active btn' : 'btn'} onClick={() => props.onSelectFilter(elem)}>{elem}</button>
  })

  return <>{btns}</>;
}
