import React, { useContext } from 'react';
import _debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';

import PageContext from './context/PageContext';

const Projects = () => {
  const { activeContent, setActiveContent } = useContext(PageContext);
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
  const setSection = _debounce(() => setActiveContent('project'), 100);
  if (inView && activeContent !== 'project') {
    setSection();
  }
  return (
    <section
      id="project"
      ref={ref}
      className="h-screen flex justify-center items-center text-gray-100 w-auto bg-gray-900 text-2xl text-center"
    >
      Oops, Project section is still under development.
    </section>
  );
};

export default Projects;
