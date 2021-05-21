import React from 'react';

import { ReactComponent as Edit } from './../../assets/edit.svg';
import { ReactComponent as MultipleUsers } from './../../assets/multiple-users.svg';
import { ReactComponent as Email } from './../../assets/email.svg';
import { ReactComponent as MapPin } from './../../assets/map-pin.svg';
import { ReactComponent as Bookmark } from './../../assets/bookmark-black.svg';
import { ReactComponent as City } from './../../assets/city.svg';
import { ReactComponent as Link } from './../../assets/link.svg';
import { ReactComponent as Calendar } from './../../assets/calendar.svg';
import { ReactComponent as Clock } from './../../assets/clock.svg';

import {
  Wrapper,
  PROFILE_PIC_EDIT_WRAPPER,
  PROFILE_CARD,
  PROFILE_PIC,
  PROFILE_NAME,
  UserName,
  DATES_WRAPPER,
  Follow,
  PROFILE_DETAILS,
  FOLLOWERS_WRAPPER,
  FOLLOW_DETAILS,
  FOLLOW_ICON,
  Details,
  FLEX_ROW,
} from './style';

function Index(props) {
  return (
    <Wrapper>
      <PROFILE_CARD>
        <div style={{ position: 'relative' }}>
          <PROFILE_PIC>
            <img src='https://cdn.discordapp.com/attachments/802789051382890527/844132861682647070/e1jof2j0lro61.jpg' />
          </PROFILE_PIC>
          <PROFILE_PIC_EDIT_WRAPPER>
            <Edit />
          </PROFILE_PIC_EDIT_WRAPPER>
        </div>

        <PROFILE_NAME>Miroz Devkota</PROFILE_NAME>
        <UserName>@ revengemiroz</UserName>

        <DATES_WRAPPER>
          <div className='dates'>
            <FOLLOW_ICON>
              <Calendar />
            </FOLLOW_ICON>
            <span className='date'>2021-05-20</span>
          </div>

          <div className='dates'>
            <FOLLOW_ICON>
              <Clock />
            </FOLLOW_ICON>
            <span className='date'>1996-05-20</span>
          </div>
        </DATES_WRAPPER>

        <Follow>Follow</Follow>
      </PROFILE_CARD>

      <PROFILE_DETAILS>
        <FOLLOWERS_WRAPPER>
          <FOLLOW_DETAILS>
            <FOLLOW_ICON>
              <MultipleUsers />
            </FOLLOW_ICON>
            <span className='followNumber'>25</span>
            <span className='followText'>followers</span>
          </FOLLOW_DETAILS>
          <FOLLOW_DETAILS>
            <span className='followNumber'>15</span>
            <span className='followText'>following</span>
          </FOLLOW_DETAILS>
          <FOLLOW_DETAILS>
            <span className='followNumber'>12</span>
            <FOLLOW_ICON>
              <Bookmark />
            </FOLLOW_ICON>
          </FOLLOW_DETAILS>
        </FOLLOWERS_WRAPPER>

        <Details>
          <FLEX_ROW>
            <FOLLOW_ICON>
              <City />
            </FOLLOW_ICON>
            <span>Kathmandu</span>
          </FLEX_ROW>
          <FLEX_ROW>
            <MapPin />
            <span>Nepal</span>
          </FLEX_ROW>
          <FLEX_ROW>
            <FOLLOW_ICON>
              <Email />
            </FOLLOW_ICON>
            <span>mirozxy@gmail.com</span>
          </FLEX_ROW>
          <FLEX_ROW>
            <FOLLOW_ICON>
              <Link />
            </FOLLOW_ICON>
            <span>mirozdevkota.com.np</span>
          </FLEX_ROW>
        </Details>
      </PROFILE_DETAILS>
    </Wrapper>
  );
}

export default Index;
