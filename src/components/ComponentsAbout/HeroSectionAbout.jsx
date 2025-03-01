import React from "react";
import ImgAbout from "../../assets/jumbotron_image.webp";
import "./HeroSectionAbout.css";

const HeroSectionAbout = () => {
  return (
    <div className="section-about">
      <div className="heroabout">
        <div className="image-about">
          <img src={ImgAbout} alt="" className="img-about" width="100%" />
        </div>
        <div className="text-about">
          <h2>Cerita Kita</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quae
            deserunt, aperiam deleniti totam neque, dicta quod eum reprehenderit
            laudantium ea eveniet cupiditate sint officia nam repellat mollitia.
            Ducimus, incidunt? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium repellat ipsum sequi iure, ullam optio
            enim dolor eos aliquam similique a corrupti quos itaque provident
            hic? Laboriosam, repellat. Consequatur, pariatur. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Iusto eveniet repudiandae
            qui ipsam dolor. Voluptatum mollitia ea praesentium atque quibusdam
            quas facilis dolores, repellat ipsa. Accusamus non obcaecati
            praesentium doloremque? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Earum natus exercitationem ullam velit? Autem iste
            harum ipsam. Possimus deserunt autem, cum fugiat illo dolor ex!
            Eligendi dolores illo maiores consectetur. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptate, obcaecati minus modi
            numquam necessitatibus, inventore nemo maiores corrupti nihil quas,
            soluta vitae nam at optio beatae quis ratione ipsa excepturi! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Placeat odio
            aliquid eaque quos, consequuntur velit exercitationem minima atque
            enim architecto rerum porro nemo rem officiis debitis ducimus
            consectetur, optio provident?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
