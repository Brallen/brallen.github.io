import type React from 'react';

import type { ProjectCardContent } from '../types/types';
import ImageCardCarousel from './carousels/ImageCardCarousel';

export interface ProjectCardProps {
  content: ProjectCardContent;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  return (
    <div className="card | flow flow-spacing-s" data-type="project">
      <ImageCardCarousel images={content.images} />
      <div className="content | apply-border-radius flow bg-neutral-100">
        <div>
          <h4>{content.headline}</h4>
          <h5>{content.flairText}</h5>
        </div>
        <p>{content.shortDescription}</p>
        <ul>
          {content.keyPoints.map((point, index) => <li key={`point-${index}`}>{point}</li>)}
        </ul>
        {content.link && <a className="button" href={content.link.url} target="_blank" rel="noreferrer nofollow">{content.link?.text}</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
