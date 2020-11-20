import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../../static/media';
import palette from '../../static/palette';
import CabinetSVG from '../svg/common/CabinetSVG';
import SearchSVG from '../svg/common/SearchSVG';
import UserSVG from '../svg/common/UserSVG';
import GetchaLogo from './GetchaLogo';

export interface GNBStyleProps {
  darkMode?: boolean;
  fixed?: boolean;
  showTitle?: boolean;
}

export interface GNBDataProps {
  /*
   *  Description
   */
  title?: string;
}

interface MainNavProps {
  marginLeft?: number;
  isActive: boolean;
}

const Block = styled.header<GNBStyleProps>`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
  width: 100%;
  height: auto;

  border: 1px solid rgba(24, 24, 24, 0.3);
`;

const GNBBlock = styled.div<GNBStyleProps>`
  width: 100%;
  height: 60px;
  background-color: ${palette.base.white};
  border-bottom: 1px solid ${palette.base.gray300};
  ${(props) =>
    props.darkMode &&
    css`
      background-color: ${palette.base.black};
      border-bottom: none;
    `}
`;

const GNBInnerBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  height: inherit;
  background-color: inherit;

  padding: 0px 16px 0px 17.75px;
  margin: 0 auto;
  border-bottom: inherit;
`;

const MainNavChip = styled.a<MainNavProps & GNBStyleProps>`
  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.45px;
  margin-left: ${(props) => props.marginLeft || 26}px;
  color: ${(props) => (props.darkMode ? palette.base.white : palette.base.black)};
  opacity: 0.2;
  &:hover {
    opacity: 0.4;
  }

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      &:hover {
        opacity: 1;
      }
    `}

  transition: opacity 200ms ease-in-out;
`;

const ResponsiveBlock = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: space-between;
  align-items: center;
  margin-left: 26px;
`;

const SearchBar = styled.div<GNBStyleProps>`
  flex: 1;
  max-width: 573px;
  min-width: 190px;
  height: 38px;
  border-radius: 2px;
  padding: 9px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  background-color: ${palette.base.gray100};
  &:hover {
    background-color: ${palette.base.gray250};
  }
  ${(props) =>
    props.darkMode &&
    css`
      background-color: ${palette.base.gray900};
      &:hover {
        background-color: ${palette.base.gray800};
      }
    `}

  transition: all 200ms;
`;

const SearchBarPlaceholder = styled.span<GNBStyleProps>`
  color: ${(props) => (props.darkMode ? palette.base.gray500 : palette.base.gray600)};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.72px;
`;

const SubNavBlock = styled.div`
  display: flex;
  align-items: center;
  min-width: 28px;
  min-height: 28px;
  margin-left: 29px;
`;

const SubNav = styled.div<GNBStyleProps>`
  margin-right: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.72px;
  color: ${(props) => (props.darkMode ? palette.base.white : palette.base.gray900)};

  position: relative;
  padding: 7px;
  transition: background-color 200ms cubic-bezier(0.65, 0, 0.35, 1);

  &:hover {
    border-radius: 2px;
    background-color: ${(props) => (props.darkMode ? palette.base.gray800 : palette.base.gray250)};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const EllipsisText = styled.span`
  margin-left: 3px;

  ${mediaQuery(800)} {
    width: 44px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const OneLineText = styled.span`
  margin-left: 3px;
  white-space: nowrap;
`;

const TitleBlock = styled.div`
  width: 100%;
  height: 52px;
  background-color: ${palette.base.white};
`;

const TitleInnerBlock = styled(GNBInnerBlock)`
  justify-content: space-between;
`;

const EmptyBlock = styled.div`
  width: 28px;
  height: 28px;
`;

const GNB: React.FC<GNBStyleProps & GNBDataProps> = ({
  darkMode = false,
  fixed = true,
  showTitle = true,
  title = 'Please set page title',
}) => {
  const [isMainActive, setIsMainActive] = useState(true);

  return (
    <Block fixed={fixed}>
      <GNBBlock darkMode={darkMode}>
        <GNBInnerBlock>
          <GetchaLogo />
          <MainNavChip
            isActive={isMainActive}
            href="/"
            marginLeft={23}
            darkMode={darkMode}
            onClick={() => setIsMainActive(true)}
          >
            실거래가
          </MainNavChip>
          <MainNavChip
            isActive={!isMainActive}
            href="/community"
            darkMode={darkMode}
            onClick={() => setIsMainActive(false)}
          >
            커뮤니티
          </MainNavChip>
          <ResponsiveBlock>
            <SearchBar>
              <SearchBarPlaceholder>원하는 차 검색하기</SearchBarPlaceholder>
              <SearchSVG />
            </SearchBar>
            <SubNavBlock>
              <SubNav darkMode={darkMode}>
                <UserSVG darkMode={darkMode} />
                <EllipsisText>로그인</EllipsisText>
              </SubNav>
              <SubNav darkMode={darkMode}>
                <CabinetSVG darkMode={darkMode} />
                <OneLineText>견적함</OneLineText>
              </SubNav>
            </SubNavBlock>
          </ResponsiveBlock>
        </GNBInnerBlock>
      </GNBBlock>
      {showTitle && (
        <TitleBlock>
          <TitleInnerBlock>
            <EmptyBlock />
            {title}
            <EmptyBlock />
          </TitleInnerBlock>
        </TitleBlock>
      )}
    </Block>
  );
};

export default GNB;
