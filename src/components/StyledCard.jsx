import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";
import GH from "../images/GH.svg";

// 新增這行導入語句
const StyledCardLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const StyledCardComponent = styled.div`
.card {
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
  box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 3px 10px rgb(0 0 0 / 0.2)"
      : "0 3px 10px rgb(255 255 255 / 0.2)"};

  .card-link {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color};

    &:hover {
      color: var(--primary);
    }
  }

  .card-footer {
    border-top: var(--border);
    background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
  }
}
`;

export default function StyledCard({ image, name, description, url, demo }) {
  return (
    <StyledCardLink href={url}>
      <StyledCardComponent>
        <Card>
          <Card.Img variant="top" src={image ? image : GH} alt={name} className="mx-auto" />
          <Card.Body className="overflow-auto text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {demo !== "" && demo !== null ? (
              <Card.Link href={demo}>
                {"Live Demo "}
                <Icon icon="icon-park-outline:code-computer" />
              </Card.Link>
            ) : null}
          </Card.Body>
          <Card.Footer className="text-center">
            {"前往專案"}
          </Card.Footer>
        </Card>
      </StyledCardComponent>
    </StyledCardLink>
  );
}
