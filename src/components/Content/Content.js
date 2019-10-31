import React, { useContext, useRef, useEffect } from 'react';
import { ScrollContext } from 'Context/ScrollContext';
import { MobileContext } from 'Context/MobileContext';
import { Anchor } from 'components/';
import useWindowSize from 'customHooks/useWindowSize';
import styles from './Content.module.scss';

const Content = ({
  columns,
  title,
  sentence,
  labelButton,
  themeBannerContent,
  goTo = null,
}) => {
  const scroll = useContext(ScrollContext);
  const { breakpoint } = useContext(MobileContext);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current.id.slice(0, -1) === scroll.clickedLink) {
      let titleRefTopPosition = titleRef.current.getBoundingClientRect().top;
      titleRefTopPosition += window.pageYOffset;
      window.scrollTo({
        behavior: 'smooth',
        top: titleRefTopPosition - 62,
      });
    }
  }, [scroll.clickedLink]);

  const content = (fillWithContent, h2, p, button) => {
    const [we, are] = h2.split(' ');
    const [p1, p2, p3, ...rest] = p.split(' ');
    return fillWithContent ? (
      <div
        className={`${styles.bannerContent} ${
          themeBannerContent === 'dark' ? styles.dark : styles.light
        }`}
      >
        <h2 id={title} className="section-title" ref={titleRef}>
          {we}
          <br />
          {are}
        </h2>
        <p className={styles.sentence}>
          {`${p1} ${p2} ${p3}`}
          <br />
          {rest.join(' ')}
        </p>
        {themeBannerContent === 'dark' ? (
          <Anchor href={goTo} border="1px solid #fff" color="#fff" look="btn">
            {button} &gt;
          </Anchor>
        ) : (
          <Anchor href={goTo} border="1px solid #000" color="#000" look="btn">
            {button} &gt;
          </Anchor>
        )}
      </div>
    ) : null;
  };

  return (
    <div className={styles.Content}>
      <div
        style={
          breakpoint.isMobile && !columns.left.fillWithContent
            ? { flex: 0 }
            : { flex: columns.left.width }
        }
        className={styles.leftColumn}
      >
        {content(columns.left.fillWithContent, title, sentence, labelButton)}
      </div>
      <div
        style={
          breakpoint.isMobile && !columns.right.fillWithContent
            ? { flex: 0 }
            : { flex: columns.right.width }
        }
        className={styles.rightColumn}
      >
        {content(columns.right.fillWithContent, title, sentence, labelButton)}
      </div>
    </div>
  );
};

export default Content;
