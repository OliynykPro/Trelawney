import React from "react";

import { ReactComponent as GitIcon } from "../../images/social/git.svg";
import { ReactComponent as ApiIcon } from "../..//images/social/api.svg";

import "./SocialMedia.scss";

interface ISocialMedia {
  link: string;
  image?: string;
  title?: string;
}

interface ISocialMediaProps {
  medias: Array<ISocialMedia>;
}

const SocialMedia: React.FC<ISocialMediaProps> = ({ medias }) => {
  const getImage = (imageName: string) => {
    switch (imageName) {
      case "git":
        return <GitIcon />;
      case "api":
        return <ApiIcon />;
      default:
        return <ApiIcon />;
    }
  };

  return (
    <div className="social-media right">
      {medias.map((media: ISocialMedia, index: number) => {
        return (
          <span className="media-wrapper" key={index}>
            <a href={media.link} target="_blank" rel="noreferrer">
              {media.image && (
                <span className="icon">{getImage(media.image)}</span>
              )}
              {media.title && <span className="text">{media.title}</span>}
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default SocialMedia;
