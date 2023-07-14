import { Card } from "./card";
import { Robot } from "../types";

interface ListProps {
  listData: Robot[];
}

export function List({ listData }: ListProps) {
  return (
    <div className="cards-list">
      <ul>
        {listData.map((item) => (
          <li className="card-item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
