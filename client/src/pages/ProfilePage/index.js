import React, { useState, useEffect } from 'react';

import ProfileCard from '../../components/ProfileCard';
import { Dropzone } from '../../components/ProfileCard/ProfileDropZone';
import MyProjects from '../MyProjects';
import Approved from '../Admin/Approved';
import NotApproved from '../Admin/NotApproved';
import Tabs from './Tabs';
import TabContent from './TabContent';

import {
  Wrapper,
  PROFILE_BANNER_WRAPPER,
  PROFILE_BANNER,
  EDIT_WRAPPER,
  Layout,
  LEFT_SIDE,
  RIGHT_SIDE,
} from './style';

function Index() {
  const [tab, setTab] = useState(1);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    console.log(tab);
    console.log(preview);
  }, [tab]);

  async function handleImage(event) {
    if (!event.length) {
      return null;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onabort = () => alert('failed');
    reader.onerror = () => console.log('error');
    reader.onload = async () => {
      setPreview(reader.result);
    };
  }

  return (
    <Wrapper>
      <PROFILE_BANNER_WRAPPER>
        <PROFILE_BANNER>
          <EDIT_WRAPPER>
            <Dropzone accept='image/*' onDrop={(e) => handleImage(e)} />
          </EDIT_WRAPPER>
          <img
            src={preview || 'https://i.redd.it/rte33ausmwj21.jpg'}
            alt='profile banner'
          />
          <ProfileCard />
        </PROFILE_BANNER>
      </PROFILE_BANNER_WRAPPER>

      <Layout>
        <LEFT_SIDE></LEFT_SIDE>
        <RIGHT_SIDE>
          <Tabs tab={tab} setTab={setTab} />
          <TabContent>
            {tab == 2 && <Approved />}
            {tab == 3 && <NotApproved />}
            {tab == 4 && <MyProjects />}
          </TabContent>
        </RIGHT_SIDE>
      </Layout>
    </Wrapper>
  );
}

export default Index;
