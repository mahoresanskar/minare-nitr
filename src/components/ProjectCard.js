import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,Rules,RulesToFollow }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} id="event-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <footer class="proj-footer"><a href={Rules} download="RulesToFollow"><button id="proj-button">{RulesToFollow}</button></a></footer>
        </div>
      </div>
    </Col>
  )
}
