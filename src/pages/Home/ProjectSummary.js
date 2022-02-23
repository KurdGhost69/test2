import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import { Button } from 'components/Button';
import Model from 'components/Model';
import Divider from 'components/Divider';
import { useWindowSize } from 'hooks';
import { reflow, isVisible } from 'utils/transition';
import { media } from 'utils/style';
import { ReactComponent as KatakanaProject } from 'assets/katakana-project.svg';
import deviceModels from 'components/Model/deviceModels';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { useTheme } from 'components/ThemeProvider';
import './ProjectSummary.css';

const ProjectSummary = ({
  id,
  visible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme.themeId === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  const renderDetails = status => (
    <div className="project-summary__details">
      

      <div
        className={classNames(
          'project-summary__button',
          `project-summary__button--${status}`
        )}
      >

      </div>
    </div>
  );

  const renderPreview = status => (
    <div className="project-summary__preview">
      {model.type === 'laptop' && (
        <Fragment>

          <Model
            className={classNames(
              'project-summary__model',
              'project-summary__model--laptop'
            )}
            alt={model.alt}
            cameraPosition={{ x: 0, y: 0, z: 8 }}
            showDelay={800}
            show={isVisible(status)}
            models={[
              {
                ...deviceModels.laptop,
                texture: {
                  ...model.textures[0],
                  sizes: laptopSizes,
                },
              },
            ]}
          />
        </Fragment>
      )}
      {model.type === 'phone' && (
        <Fragment>
         
          <Model
            className={classNames(
              'project-summary__model',
              'project-summary__model--phone'
            )}
            alt={model.alt}
            cameraPosition={{ x: 0, y: 0, z: 11.5 }}
            showDelay={500}
            show={isVisible(status)}
            models={[
              {
                ...deviceModels.phone,
                position: { x: -0.6, y: 1.1, z: 0 },
                texture: {
                  ...model.textures[0],
                  sizes: phoneSizes,
                },
              },
              {
                ...deviceModels.phone,
                position: { x: 0.6, y: -0.5, z: 0.3 },
                texture: {
                  ...model.textures[1],
                  sizes: phoneSizes,
                },
              },
            ]}
          />
        </Fragment>
      )}
    </div>
  );

  return (
    <Section
    
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      
    </Section>
  );
};

export default ProjectSummary;
