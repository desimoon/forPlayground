import React, { useState, useEffect } from 'react';
import spinner from 'Assets/Images/loader.png';
import styles from './Tabs.module.scss';

const Tabs = props => {
  const [tabs, setTabs] = useState({
    data: [],
    contentSelectedTab: '',
    activeTabId: '',
    loading: false,
  });

  useEffect(() => {
    setTabs(prevState => ({
      ...prevState,
      loading: true,
    }));

    const fetchTabs = async () => {
      const tab1 = await fecthTabData('tab1');
      const tab2 = await fecthTabData('tab2');
      const tab3 = await fecthTabData('tab3');

      const data = [
        {
          id: tab1.item.id,
          title: tab1.item.title,
          content: tab1.item.content.join(' '),
        },
        { id: tab2.item.id, title: tab2.item.title, content: '' },
        { id: tab3.item.id, title: tab3.item.title, content: '' },
      ];
      setTabs(prevState => ({
        ...prevState,
        data: data,
        contentSelectedTab: tab1.item.content,
        activeTabId: tab1.item.id,
        loading: false,
      }));
    };
    fetchTabs();
  }, []);

  const fecthTabData = async tab => {
    const dataRaw = await fetch(`json/${tab}.json`);
    const data = await dataRaw.json();
    return data;
  };

  const handleSelectedTab = tab => async e => {
    setTabs(prevState => ({
      ...prevState,
      loading: true,
    }));
    const selectedTab = await fecthTabData(tab);
    await new Promise(resolve => setTimeout(resolve, 400));
    setTabs(prevState => ({
      ...prevState,
      contentSelectedTab: selectedTab.item.content,
      activeTabId: selectedTab.item.id,
      loading: false,
    }));
  };

  return (
    <div className={styles.Tabs}>
      <div className={styles.tabsTitles}>
        <ul>
          {tabs.data.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabs.activeTabId ? styles.activeTab : ''}
              onClick={handleSelectedTab(tab.id)}
            >
              <span className={styles.title}>{tab.title}</span>
              <span className={styles.chevron}></span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentSelectedTab}>
        {tabs.loading ? (
          <img src={spinner} className={styles.spin} alt="caricamento dati" />
        ) : (
          <p>{tabs.contentSelectedTab}</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
