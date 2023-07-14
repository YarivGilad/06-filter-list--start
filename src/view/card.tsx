import { Thumb } from "./thumb";
import { Robot } from "../types";

// interface CardProps {
//   country: string;
//   description: string;
//   first_name: string;
//   avatar: string;
// }

export function Card({ country, description, first_name, avatar }: Robot) {
  return (
    <div className="card">
      <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
          {first_name} from {country}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </div>
  );
}
// export default Card;
