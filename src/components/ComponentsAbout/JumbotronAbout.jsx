import React from "react";
import "./JumbotronAboutStyle.css";
import JumbotronImg from "../../assets/jumbotron_image.webp";

const JumbotronAbout = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <img
          src={JumbotronImg}
          alt="image"
          className="jumbotron-img"
          style={{ width: "250px" }}
        />
        <div className="text-jumbotron">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            rerum commodi eveniet nulla sint consectetur perspiciatis ipsam
            repudiandae blanditiis quaerat quam repellendus neque ipsa, at a aut
            iusto! Quae, quasi! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nemo magni cum eos eius sequi vitae, excepturi ut
            alias neque quas tempore necessitatibus? Porro modi excepturi quidem
            rerum sapiente unde aperiam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio voluptates non cupiditate expedita.
            Deleniti exercitationem aliquam quod voluptate reprehenderit porro
            aliquid est aperiam, at similique, eveniet voluptas culpa dolorem
            dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam, deserunt maiores ipsa illum delectus ea adipisci
            repudiandae iste libero, natus molestias? Laudantium eos id cumque
            culpa quibusdam nam deleniti! Harum. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Culpa cupiditate id dolorum porro
            nisi odio voluptas, sunt adipisci rerum veniam reiciendis maxime
            doloribus, praesentium, quae minus recusandae sed nulla deleniti?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            veniam numquam mollitia, at quaerat quis tempora rem fugit vero
            repellendus repudiandae deserunt reprehenderit minus odit
            asperiores? Repudiandae ut quam ullam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae, sit, nihil temporibus tempore
            eos et porro at quo veniam, sequi reiciendis ea. Perspiciatis illo
            laboriosam deleniti, distinctio consequatur cupiditate ratione.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias omnis
            iusto dolore sunt facere est! Explicabo, facilis voluptate
            consequatur architecto, fugiat soluta ab natus dolorum nisi, quaerat
            nam quasi nobis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            nostrum hic ducimus unde, provident inventore eos, aspernatur rem
            enim totam debitis soluta? Rem possimus illo provident saepe, at cum
            ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JumbotronAbout;
