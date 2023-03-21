import { useContext } from "react";
import Button from "../components/Button";
import { ThemeContext } from "./Theme-context";
function Darkmode() {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log("Incoming");
  console.log(theme);
  return (
    <div>
      <h1>Welcome to the page . Currently rendered in {theme} theme !</h1>
      <Button text={theme} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas
        odit quia. Sequi dignissimos accusantium mollitia voluptate fuga,
        quisquam distinctio possimus incidunt impedit at quam non repellat
        assumenda! Libero deserunt nostrum dolorum eligendi odio ad optio
        ducimus commodi fuga fugit, veritatis numquam ex veniam iure corrupti
        accusantium molestias assumenda explicabo debitis error? Modi, ipsa
        tempora architecto ut harum distinctio iste iure facilis incidunt, quia
        eligendi ex voluptatibus. Aspernatur, aperiam quos sequi quis reiciendis
        enim expedita ut porro. Debitis blanditiis corrupti autem
        necessitatibus, aut aliquam laudantium eos exercitationem repudiandae
        at? Tenetur ea fuga exercitationem provident, quae amet magnam
        reprehenderit ipsam animi quam autem beatae laudantium debitis
        voluptatem in veritatis explicabo, dignissimos enim aliquid! Sit velit
        assumenda officiis possimus ducimus pariatur vel?
      </p>
    </div>
  );
}

export default Darkmode;
