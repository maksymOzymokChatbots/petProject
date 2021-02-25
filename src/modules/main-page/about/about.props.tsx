import * as React from 'react';

/**
 * Props
 */
const useAboutSectionProps = () => {
  const aboutData = [
    {
      icon: 'child',
      text: (
        <>
          Это <span>отличный инструмент для развития </span> мелкой моторики у
          детей и творческого мышления.
        </>
      )
    },
    {
      icon: 'heart',
      text: (
        <>
          Все без исключения cмогут <span> овладеть искусством </span> живописи
          и<span> раскрыть свои </span> внутренние таланты.
        </>
      )
    },
    {
      icon: 'images',
      text: (
        <>
          Эти наборы станут <span>хорошим подарком </span> независимо от
          возраста, пола или профессии.
        </>
      )
    }
  ];

  return { aboutData };
};

export { useAboutSectionProps };
