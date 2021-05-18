import React from 'react';

import { ReactComponent as Edit } from './../../assets/edit.svg';
import { ReactComponent as MapPin } from './../../assets/map-pin.svg';

import {
  Wrapper,
  PROFILE_BANNER_WRAPPER,
  PROFILE_BANNER,
  EDIT_WRAPPER,
  PROFILE_CARD,
  PROFILE_PIC,
  PROFILE_NAME,
  UserName,
  Follow,
  PROFILE_DETAILS,
  FOLLOWERS_WRAPPER,
  FOLLOW_DETAILS,
  FLEX_ROW,
} from './style';

function Index(props) {
  return (
    <Wrapper>
      <PROFILE_BANNER_WRAPPER>
        <PROFILE_BANNER>
          <EDIT_WRAPPER>
            <Edit />
          </EDIT_WRAPPER>
          <img src='https://i.pinimg.com/originals/52/4b/ae/524baeb18eb85d433dd59186e00baef1.jpg' />
        </PROFILE_BANNER>

        <PROFILE_CARD>
          <PROFILE_PIC>
            <img src='https://cdn.discordapp.com/attachments/802789051382890527/844132861682647070/e1jof2j0lro61.jpg' />
          </PROFILE_PIC>

          <PROFILE_NAME>Miroz Devkota</PROFILE_NAME>
          <UserName>@ revengemiroz</UserName>

          <Follow>Follow</Follow>

          <PROFILE_DETAILS>
            <FOLLOWERS_WRAPPER>
              <FOLLOW_DETAILS>
                <span>25</span>
                <span>followers</span>
              </FOLLOW_DETAILS>
              <FOLLOW_DETAILS>
                <span>15</span>
                <span>following</span>
              </FOLLOW_DETAILS>
              <FOLLOW_DETAILS>
                <span>12</span>
                <MapPin />
              </FOLLOW_DETAILS>
            </FOLLOWERS_WRAPPER>

            <div style={{ marginTop: '10px' }}>
              <FLEX_ROW>
                <MapPin />
                <span>Kathmandu</span>
              </FLEX_ROW>
              <FLEX_ROW>
                <MapPin />
                <span>Nepal</span>
              </FLEX_ROW>
              <FLEX_ROW>
                <MapPin />
                <span>mirozxy@gmail.com</span>
              </FLEX_ROW>
              <FLEX_ROW>
                <MapPin />
                <span>https://www.mirozdevkota.com.np</span>
              </FLEX_ROW>
            </div>
          </PROFILE_DETAILS>
        </PROFILE_CARD>

        <div style={{ position: 'relative' }}></div>
      </PROFILE_BANNER_WRAPPER>
    </Wrapper>
  );
}

export default Index;
