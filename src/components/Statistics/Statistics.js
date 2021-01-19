import s from "../Statistics/Statistics.module.css";

export default function Statistics({ items }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {items.map((item) => (
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label} </span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
