import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import Container from './Container';
import Image from './image';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextHighlight = styled.span.attrs(props => ({
  className: `text-${props.color || 'red-500'}${props.className || ''}`,
}))`
  font-size: ${props => props.size || 12};
`;

const Lists = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;

  & svg {
    font-size: 16px;
    margin: 0 2px;
  }
`;

// eslint-disable-next-line react/prop-types
const Item = ({ children }) => (
  <StyledItem>
    <FaCheckCircle className="text-gray-700" />
    {children}
  </StyledItem>
);

const About = () => {
  return (
    <section className="py-12" id="about">
      <Container>
        <Row className="text-gray-600">
          <Image className="w-40 rounded-full border-2 border-gray-500" />
          <p className="text-2xl mt-5">
            {'<'}
            <TextHighlight>Jesson Jei Rebua</TextHighlight>
            {' dev="'}
            <TextHighlight>full-stack</TextHighlight>
            {'" />'}
          </p>
          <div className="w-full px-5 py-5 xl:px-20 lg:px-15 md:px-10">
            <p className="text-red-500 uppercase text-2xl font-medium">
              ABOUT ME
            </p>
            <p className="text-gray-600 text-justify text-1xl">
              Good day! My name is Jesson, a web developer based in the
              Philippines. I work as a developer for almost 3 years. I use
              ReactJS for my font-end and Laravel for back-end in my projects. I
              used to focus more on the backend because most of my projects only
              requires minimal design but recently i&apos;ve been focusing on
              improving my skills more on CSS, designing UI/UX.
            </p>
            {/* work experience */}
            <p
              className="text-red-500 uppercase text-2xl mt-16 font-medium"
              id="work"
            >
              Work experience
            </p>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Exelpack Corporation <br />
              July 2017 - Present (Fulltime, Inhouse Developer/Tech Support)
            </p>
            <p className="text-gray-600 text-justify text-1xl">
              Creating and develop a program using centralized database for the
              business process to manage and simplify existing workflows like
              managingcustomers details, purchase order, products and materials,
              inventory, job orders, purchase request, supplier, payroll etc.
            </p>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Philippines Postal Corporation Regional Office <br />
              Jan 2017 - March 2017 (Intern Web developer)
            </p>
            <p className="text-gray-600 text-justify text-1xl">
              I was given a task to build a program using HTML, CSS, JQuery, PHP
              and MySQL.
            </p>
            {/* skills */}
            <p
              className="text-red-500 uppercase text-2xl mt-16 font-medium"
              id="skills"
            >
              Skills
            </p>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Web Development
            </p>
            <Lists>
              <Item>HTML5</Item>
              <Item>Javascript(ES6)</Item>
              <Item>CCS3</Item>
              <Item>REST API</Item>
              <Item>PHP</Item>
              <Item>Responsive Web Design</Item>
              <Item>ReactJS</Item>
              <Item>JQuery</Item>
              <Item>Laravel</Item>
              <Item>MySQL</Item>
            </Lists>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Tools
            </p>
            <Lists>
              <Item>Git</Item>
              <Item>Postman</Item>
            </Lists>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Has Experienced
            </p>
            <Lists>
              <Item>Nodejs</Item>
              <Item>Express</Item>
              <Item>MongoDB</Item>
              <Item>React Native</Item>
              <Item>MERN Stack</Item>
            </Lists>
            <p className="text-gray-700 text-justify text-1xl font-medium mb-2">
              Libraries
            </p>
            <Lists>
              <Item>Redux</Item>
              <Item>React Context API</Item>
              <Item>React Hooks</Item>
              <Item>React router</Item>
              <Item>Bootstrap</Item>
              <Item>Tailwind CSS</Item>
              <Item>Ant Design</Item>
              <Item>Yup</Item>
              <Item>Formik</Item>
              <Item>JWT</Item>
              <Item>Styled Components</Item>
              <Item>Gatsby</Item>
              <Item>SocketIO</Item>
            </Lists>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
