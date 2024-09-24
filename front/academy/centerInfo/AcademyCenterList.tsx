import styled from '@emotion/styled';
import Image from 'next/image';
import mapIcon from '@/public/mapIcon.svg';
import { CentersResultData } from '@/type/academy/centerList';
import { useRouter } from 'next/router';
import theme from '@/styles/theme';
import { formatPhoneNumber } from '@/util/format';
import findStart from '@/public/academy/findStar.png';

type Props = {
  page: number;
  data: CentersResultData | undefined;
};

const AcademyCenterList = ({ data, page }: Props) => {
  const router = useRouter();

  // 구글 지도 오픈
  const openInGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 네이버 지도 오픈
  const openInNaverMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://map.naver.com/v5/search/${encodedAddress}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <_ol>
        <_head>
          <span>NO</span>
          <span>우수 센터</span>
          <span>센터명</span>
          <span>주소</span>
          <span>전화번호</span>
          <span>지도</span>
          <span>신청</span>
        </_head>
        {data?.centers.map((ele, idx) => {
          return (
            <_li key={idx}>
              {/* <span>{data?.totalCount - ((page - 1) * 10 + idx)}</span> */}
              <span>{(page - 1) * 10 + idx + 1}</span>
              <span>
                {ele.exellence && <Image src={findStart} alt="findStart" />}
              </span>
              <span>{ele.centerName}</span>
              <span>
                <p>{ele.address ? ele.address : '-'}</p>
              </span>
              <span>
                {ele.centerPhone ? formatPhoneNumber(ele.centerPhone) : '-'}
                <button
                  onClick={() =>
                    router.push(
                      `/academy/classes/experience/apply?idx=${ele.centerIdx}`,
                    )
                  }
                >
                  체험수업 신청
                </button>
              </span>
              <span
                onClick={() => {
                  openInNaverMaps(ele.address);
                }}
              >
                <Image src={mapIcon} alt="map" style={{ cursor: 'pointer' }} />
              </span>
              <span>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    router.push(
                      `/academy/classes/experience/apply?idx=${ele.centerIdx}`,
                    )
                  }
                >
                  체험수업 신청
                </button>
              </span>
            </_li>
          );
        })}
      </_ol>
    </>
  );
};

export default AcademyCenterList;

const _ol = styled.ol`
  width: 100%;
  min-height: 300px;
  list-style: none;
  margin-top: 30px;
`;
const _head = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: clamp(13px, 1.5vw, 15px);
  font-weight: 600;
  @media (max-width: 650px) {
    font-size: 13px;
  }
  background: #fac400;
  padding: 15px 0;
  @media (max-width: 650px) {
    padding: 15px 5px;
  }
  border-radius: 10px;

  span {
    text-align: center;
    &:nth-of-type(1) {
      flex: 1;
    }
    &:nth-of-type(2) {
      flex: 1;
      word-break: auto-phrase;
      @media (max-width: 550px) {
        display: none;
      }
    }
    &:nth-of-type(3) {
      flex: 1.5;
    }
    &:nth-of-type(4) {
      flex: 7;
      padding-left: 20px;
      @media (max-width: 650px) {
        flex: 5;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
    &:nth-of-type(5) {
      flex: 2;
      @media (max-width: 550px) {
        flex: 2;
      }
    }
    &:nth-of-type(6) {
      flex: 2;
      @media (max-width: 550px) {
        display: none;
      }
    }
    &:nth-of-type(7) {
      flex: 2;
      @media (max-width: 550px) {
        display: none;
      }
    }
  }
`;

const _li = styled.li`
  display: flex;
  align-items: center;
  min-height: 60px;
  font-size: 15px;
  word-break: keep-all;
  @media (max-width: 650px) {
    font-size: 12px;
  }
  color: #222;
  border-bottom: 1px solid #d9d9d9;
  span {
    text-align: center;
    padding: 10px 0 10px 0px;
    word-wrap: break-word;
    &:nth-of-type(1) {
      flex: 1;
    }
    &:nth-of-type(2) {
      flex: 1;
      @media (max-width: 550px) {
        display: none;
      }
    }

    &:nth-of-type(3) {
      flex: 1.5;
    }
    &:nth-of-type(4) {
      flex: 7;
      padding-left: 20px;
      position: relative;
      text-align: left !important;
      display: flex;
      align-items: center;

      > img {
        margin: 0 10px;
      }
      @media (max-width: 650px) {
        flex: 5;
        padding-left: 10px;
      }
      @media (max-width: 550px) {
        // display: block;
        > img {
          width: 12px;
          height: 15px;
        }
      }
    }
    &:nth-of-type(5) {
      flex: 2;
      > button {
        display: none;
      }
      @media (max-width: 550px) {
        flex: 2;
        button {
          display: inline-block;
          font-size: 12px;
          color: #e97e01;
          text-align: center;
          border: 1px solid #f8ae57;
          padding: 8px 14px;
          border-radius: 5px;
          margin: 5px;
          @media (max-width: 900px) {
            padding: 4px 8px;
          }
        }
      }
    }
    &:nth-of-type(6) {
      flex: 2;
      @media (max-width: 550px) {
        display: none;
      }
      > button {
        display: inline-block;
        font-size: 12px;
        color: #e97e01;
        text-align: center;
        border: 1px solid #f8ae57;
        padding: 8px 14px;
        border-radius: 5px;
        margin: 0 5px;
        @media (max-width: 900px) {
          padding: 4px 8px;
        }
      }
    }
    &:nth-of-type(7) {
      flex: 2;
      @media (max-width: 550px) {
        display: none;
      }
      > button {
        display: inline-block;
        font-size: 12px;
        color: #e97e01;
        text-align: center;
        border: 1px solid #f8ae57;
        padding: 8px 14px;
        border-radius: 5px;
        margin: 0 5px;
        @media (max-width: 900px) {
          padding: 4px 8px;
        }
      }
    }
  }
`;
const _paginationBox = styled.div`
  ${theme.flex.row};
  margin-top: 32px;
`;
